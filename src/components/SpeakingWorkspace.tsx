import React, { useState, useEffect, useRef, useMemo } from 'react';
import {
  Mic,
  Square,
  Play,
  Pause,
  RotateCcw,
  Shuffle,
  CheckCircle2,
  BookOpen,
  MessageSquareQuote,
  Users,
  Award,
  FileText,
  PlusCircle,
  Search,
  Download,
  Clock,
  Sparkles,
  Volume2,
  HelpCircle,
  ArrowRight,
  Loader2,
  AlertCircle
} from 'lucide-react';
import {
  PRESENTATION_CARDS,
  FULL_120_ZITATE,
  SPRECHEN_REDEMITTEL,
  PresentationTopic,
  ZitatItem
} from '../data/speakingData';

interface SpeakingWorkspaceProps {
  variantId: string;
  isReviewMode: boolean;
  showUzbekHints: boolean;
  onSubmitExam: () => void;
  onBackToStart: () => void;
}

type SpeakingSubTab = 'teil1a' | 'teil1b' | 'teil2' | 'redemittel' | 'bewertung';

interface KiSpeakingEvaluation {
  transcript: string;
  teil1aScore: number;
  teil1bScore: number;
  teil2Score: number;
  fluessigkeit: number;
  repertoire: number;
  grammatik: number;
  aussprache: number;
  cefrLevel: string;
  uzbekFeedback: string;
  germanFeedback: string;
  strengths: string[];
  corrections: Array<{
    original: string;
    correctedC1: string;
    explanationUz: string;
  }>;
  modelSpeechDe: string;
}

const STORAGE_KEY_SPEAKING_NOTES = 'telc_c1_speaking_notes_v1';
const STORAGE_KEY_SPEAKING_SCORES = 'telc_c1_speaking_scores_v1';

/**
 * Generates a clear, ready-to-speak 5-step C1 presentation script for any Teil 1A topic.
 */
function buildReadyC1PresentationScript(topic: PresentationTopic): Array<{
  stepNum: number;
  stepTitleUz: string;
  stepTitleDe: string;
  germanText: string;
  uzbekHint: string;
}> {
  return [
    {
      stepNum: 1,
      stepTitleUz: '1-Qadam: Salomlashish va Mavzuni tanishtirish (Einleitung)',
      stepTitleDe: 'Einleitung & Relevanz (ca. 30 Sek.)',
      germanText: `Sehr geehrte Damen und Herren, ich begrüße Sie herzlich zu meiner Präsentation zum Thema „${topic.shortTitle}“. Dieses Thema gewinnt in unserer heutigen Gesellschaft zunehmend an Bedeutung, da es sowohl Studierende als auch Bildungseinrichtungen direkt betrifft.`,
      uzbekHint:
        'Avvalo imtihon oluvchilar va sherigingiz bilan rasmiy salomlashib, tanlagan mavzungiz nomini va nima uchun dolzarbligini aytasiz.'
    },
    {
      stepNum: 2,
      stepTitleUz: '2-Qadam: Taqdimot rejasini aytish (Gliederung)',
      stepTitleDe: 'Aufbau des Vortrags (ca. 20 Sek.)',
      germanText: `Mein Vortrag gliedert sich in vier Teile: Zunächst möchte ich die wesentlichen Vorteile beleuchten. Anschließend gehe ich auf die möglichen Nachteile und Risiken ein, untermauere dies mit einem konkreten Beispiel aus der Praxis und schließe mit meinem persönlichen Fazit ab.`,
      uzbekHint:
        'Nutqingiz 4 qismdan iborat ekanini (Foydali tomonlari -> Kamchiliklari -> Misol -> Xulosa) oldindan e’lon qilasiz.'
    },
    {
      stepNum: 3,
      stepTitleUz: '3-Qadam: Ijobiy tomonlar va imkoniyatlar (Vorteile / Pro)',
      stepTitleDe: 'Vorteile & Chancen (ca. 60 Sek.)',
      germanText: `Ein entscheidender Vorteil besteht darin, dass ${topic.vorteile[0] || ''} Darüber hinaus ist positiv hervorzuheben: ${topic.vorteile[1] || ''}`,
      uzbekHint:
        'Mavzuning 2 ta eng muhim foydali tomonini C1 iboralari („Ein entscheidender Vorteil besteht darin...“, „Darüber hinaus...“) bilan tushuntirasiz.'
    },
    {
      stepNum: 4,
      stepTitleUz: '4-Qadam: Salbiy tomonlar va tanqid (Nachteile / Contra)',
      stepTitleDe: 'Nachteile & Herausforderungen (ca. 45 Sek.)',
      germanText: `Auf der anderen Seite darf man jedoch nicht übersehen, dass es auch kritische Aspekte gibt. Als problematisch erweist sich insbesondere: ${topic.nachteile[0] || ''} Zudem wird häufig kritisiert: ${topic.nachteile[1] || ''}`,
      uzbekHint:
        'Endi qarama-qarshi nuqtai nazarni („Auf der anderen Seite...“, „Als problematisch erweist sich...“) aytib, muvozanatni ko‘rsatasiz.'
    },
    {
      stepNum: 5,
      stepTitleUz: '5-Qadam: Hayotiy misol va Yakuniy xulosa (Beispiel & Fazit)',
      stepTitleDe: 'Praxisbeispiel & Schlusswort (ca. 35 Sek.)',
      germanText: `Ein anschauliches Beispiel hierfür ist Folgendes: ${topic.beispiel} Abschließend lässt sich festhalten, dass eine ausgewogene Lösung notwendig ist. Vielen Dank für Ihre Aufmerksamkeit! Ich freue mich nun auf Ihre Fragen.`,
      uzbekHint:
        'Aniq misol keltirasiz, shaxsiy xulosangizni aytasiz va tinglovchilarga rahmat aytib savollarga tayyor ekaningizni bildirasiz.'
    }
  ];
}

/**
 * Generates a clear 3-step C1 quote discussion script for any Teil 2 Zitat.
 */
function buildReadyC1ZitatScript(zitat: ZitatItem): Array<{
  stepNum: number;
  stepTitleUz: string;
  stepTitleDe: string;
  germanText: string;
  uzbekHint: string;
}> {
  return [
    {
      stepNum: 1,
      stepTitleUz: '1-Qadam: Iqtibos ma’nosini o‘z so‘zingiz bilan tushuntirish (Definition)',
      stepTitleDe: '1. Bedeutung des Zitats interpretieren',
      germanText: `Meiner Ansicht nach bringt dieses Zitat einen sehr wichtigen Gedanken zum Ausdruck: ${zitat.interpretation} Wie verstehst du diese Aussage?`,
      uzbekHint:
        'Iqtibosni o‘qib bo‘lgach, uning asosiy ma’nosini 2–3 gapda tushuntirib, sherigingizdan ham fikrini so‘raysiz.'
    },
    {
      stepNum: 2,
      stepTitleUz: '2-Qadam: Qo‘shilish (Pro) va Misol keltirish',
      stepTitleDe: '2. Zustimmung (Pro-Argument + Beispiel)',
      germanText: `Einerseits stimme ich dieser Aussage vollkommen zu, denn: ${zitat.proArgument} Ein konkretes Beispiel aus der Praxis zeigt dies sehr deutlich: ${zitat.proExample}`,
      uzbekHint:
        'Iqtibos nima uchun to‘g‘ri ekanini asoslab, hayotiy yoki ilmiy misol keltirasiz.'
    },
    {
      stepNum: 3,
      stepTitleUz: '3-Qadam: Tanqidiy qarash (Contra) va Munozaraga chorlash',
      stepTitleDe: '3. Kritische Einschränkung (Contra-Argument + Beispiel)',
      germanText: `Andererseits muss man das Zitat aber auch differenziert betrachten: ${zitat.contraArgument} Man denke beispielsweise daran: ${zitat.contraExample} Siehst du das ähnlich oder überwiegen für dich die positiven Aspekte?`,
      uzbekHint:
        'C1 darajasida yuqori ball olish uchun iqtibosga bir yoqlama qaramasdan, uning cheklovlarini ham aytib sherigingizni bahsga tortasiz.'
    }
  ];
}

/**
 * Local fallback C1 speaking evaluator if API key is not configured or network fails.
 */
function evaluateSpeakingLocally(
  transcript: string,
  partType: 'teil1a' | 'teil1b' | 'teil2',
  topicTitle: string,
  modelScriptText: string
): KiSpeakingEvaluation {
  const clean = (transcript || '').trim();
  const words = clean ? clean.split(/\s+/).filter(Boolean) : [];
  const wordCount = words.length;
  const lower = clean.toLowerCase();

  const c1Markers = [
    'darüber hinaus',
    'einerseits',
    'andererseits',
    'abschließend',
    'zusammenfassend',
    'vorteil',
    'nachteil',
    'beispiel',
    'meiner meinung nach',
    'lässt sich',
    'allerdings',
    'jedoch',
    'außerdem',
    'zunächst',
    'folglich',
    'begrüße'
  ];
  const foundMarkers = c1Markers.filter((m) => lower.includes(m));

  const ratio = Math.min(1, wordCount / 140);
  const markerBonus = Math.min(2, Math.floor(foundMarkers.length / 2));

  const teil1aScore = Math.min(8, Math.max(2, Math.round(ratio * 6) + markerBonus));
  const teil1bScore = Math.min(6, Math.max(2, Math.round(ratio * 4) + Math.min(2, markerBonus)));
  const teil2Score = Math.min(10, Math.max(3, Math.round(ratio * 7) + markerBonus));

  const fluessigkeit = Math.min(6, Math.max(2, Math.round(ratio * 4) + Math.min(2, markerBonus)));
  const repertoire = Math.min(6, Math.max(2, Math.round(ratio * 4) + Math.min(2, markerBonus)));
  const grammatik = Math.min(6, Math.max(2, Math.round(ratio * 5)));
  const aussprache = Math.min(6, Math.max(3, Math.round(ratio * 5)));

  const total =
    teil1aScore +
    teil1bScore +
    teil2Score +
    fluessigkeit +
    repertoire +
    grammatik +
    aussprache;

  return {
    transcript: clean || '(Audio yozuv tahlil qilindi)',
    teil1aScore,
    teil1bScore,
    teil2Score,
    fluessigkeit,
    repertoire,
    grammatik,
    aussprache,
    cefrLevel: total >= 38 ? 'C1 Hochschule (Gut)' : total >= 29 ? 'C1 Hochschule (Bestanden)' : 'B2 / C1 Vorbereitung',
    uzbekFeedback:
      wordCount >= 80
        ? `Barakalla! Siz „${topicTitle}“ mavzusida ${wordCount} ta so‘zdan iborat yaxshi tuzilgan nutq so‘zladingiz. Nutqingizda ${foundMarkers.length} ta C1 bog‘lovchi va iboralar (${foundMarkers.slice(0, 5).join(', ') || 'asosiy kirish iboralari'}) qatnashdi. Ballingizni maksimal 48 ballga yaqinlashtirish uchun ikkala tomonni (Vorteile va Nachteile) teng ochib bering hamda kamida bitta aniq hayotiy misol qo‘shing.`
        : `Sizning nutqingizda hozircha ${wordCount} ta so‘z qayd etildi. Haqiqiy telc C1 imtihonida 3 daqiqalik taqdimot uchun kamida 180–250 ta so‘z (taxminan 12–15 ta to‘liq gap) gapirish tavsiya etiladi. Quyidagi tayyor 5-qadamli C1 shablonni ovoz chiqarib o‘qib, qayta yozib ko‘ring!`,
    germanFeedback: `Gute Strukturierung zum Thema „${topicTitle}“. Achten Sie darauf, Einleitung, Hauptteil (Pro/Contra mit Beispiel) und Schluss klar durch C1-Konnektoren zu verbinden.`,
    strengths: [
      `Mavzuga mos kirish va asosiy fikrlar aniq ifodalangan (${wordCount} ta so‘z).`,
      foundMarkers.length > 0
        ? `C1 Redemittel va bog‘lovchilar ishlatilgan: ${foundMarkers.join(', ')}.`
        : 'Talaffuz va gap ohangi tushunarli.',
      'Rasmiy akademik uslubga harakat qilingan.'
    ],
    corrections: [
      {
        original: 'Es gibt viele gute und schlechte Seiten bei diesem Thema.',
        correctedC1:
          'Dieses Thema birgt sowohl vielversprechende Chancen als auch nicht zu unterschätzende Risiken.',
        explanationUz:
          'Oddiy „gute und schlechte Seiten“ o‘rniga C1 darajasidagi „vielversprechende Chancen und Risiken“ iborasini ishlating.'
      },
      {
        original: 'Ich denke, dass das sehr wichtig ist.',
        correctedC1:
          'Meines Erachtens kommt diesem Aspekt eine ausschlaggebende Bedeutung zu.',
        explanationUz:
          '„Ich denke“ o‘rniga „Meines Erachtens“ (mening fikrimcha) va Nominalstil ishlatsangiz, Wortschatz uchun 6/6 ball olasiz.'
      }
    ],
    modelSpeechDe: modelScriptText
  };
}

export const SpeakingWorkspace: React.FC<SpeakingWorkspaceProps> = ({
  variantId,
  isReviewMode,
  onSubmitExam,
  onBackToStart
}) => {
  const [subTab, setSubTab] = useState<SpeakingSubTab>('teil1a');
  const [showStepGuide, setShowStepGuide] = useState<boolean>(true);

  // Teil 1A state
  const [selectedGroup, setSelectedGroup] = useState<'ALL' | 'A' | 'B' | 'C'>('ALL');
  const [selectedCardId, setSelectedCardId] = useState<string>('A-1');
  const [selectedThemaIdx, setSelectedThemaIdx] = useState<1 | 2>(1);

  // Teil 1B state
  const [checked1BSteps, setChecked1BSteps] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false,
    4: false
  });
  const [summaryNotes, setSummaryNotes] = useState<string>('');

  // Teil 2 (Zitat) state
  const [selectedZitatId, setSelectedZitatId] = useState<number>(1);
  const [zitatSearch, setZitatSearch] = useState<string>('');
  const [zitatCategory, setZitatCategory] = useState<string>('ALL');
  const [checkedTeil2Steps, setCheckedTeil2Steps] = useState<Record<number, boolean>>({
    1: false,
    2: false,
    3: false
  });

  // Dedicated Speaking Timer
  const [speakTimerPreset, setSpeakTimerPreset] = useState<'prep20' | 'pres3' | 'follow2' | 'disc6'>('pres3');
  const [speakSeconds, setSpeakSeconds] = useState<number>(180);
  const [speakTimerRunning, setSpeakTimerRunning] = useState<boolean>(false);

  // Voice Recorder + Live Speech-to-Text + KI Evaluation
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recordSeconds, setRecordSeconds] = useState<number>(0);
  const [recordedAudioUrl, setRecordedAudioUrl] = useState<string | null>(null);
  const [recordedAudioBase64, setRecordedAudioBase64] = useState<string>('');
  const [recordedMimeType, setRecordedMimeType] = useState<string>('audio/webm');
  const [liveTranscript, setLiveTranscript] = useState<string>('');
  const [recorderError, setRecorderError] = useState<string | null>(null);
  const [isEvaluatingKi, setIsEvaluatingKi] = useState<boolean>(false);
  const [kiResult, setKiResult] = useState<KiSpeakingEvaluation | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const recognitionRef = useRef<any>(null);

  // Candidate Notes (Stichwortzettel)
  const [speakingNotes, setSpeakingNotes] = useState<Record<string, string>>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_SPEAKING_NOTES);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  // Official telc C1 Oral Evaluation Rubric (Max 48 Points)
  const [oralScores, setOralScores] = useState<{
    teil1a: number;
    teil1b: number;
    teil2: number;
    fluessigkeit: number;
    repertoire: number;
    grammatik: number;
    aussprache: number;
  }>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_SPEAKING_SCORES);
      return raw
        ? JSON.parse(raw)
        : {
            teil1a: 7,
            teil1b: 5,
            teil2: 8,
            fluessigkeit: 5,
            repertoire: 5,
            grammatik: 5,
            aussprache: 5
          };
    } catch {
      return {
        teil1a: 7,
        teil1b: 5,
        teil2: 8,
        fluessigkeit: 5,
        repertoire: 5,
        grammatik: 5,
        aussprache: 5
      };
    }
  });

  // Sync variantId with default card & quote
  useEffect(() => {
    const vNum = parseInt(variantId, 10) || 1;
    const cardIdx = (vNum - 1) % PRESENTATION_CARDS.length;
    setSelectedCardId(PRESENTATION_CARDS[cardIdx].id);
    const quoteId = ((vNum - 1) % 120) + 1;
    setSelectedZitatId(quoteId);
  }, [variantId]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_SPEAKING_NOTES, JSON.stringify(speakingNotes));
    } catch {
      // ignore
    }
  }, [speakingNotes]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_SPEAKING_SCORES, JSON.stringify(oralScores));
    } catch {
      // ignore
    }
  }, [oralScores]);

  // Speaking Timer countdown
  useEffect(() => {
    if (!speakTimerRunning) return;
    const id = window.setInterval(() => {
      setSpeakSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => window.clearInterval(id);
  }, [speakTimerRunning]);

  // Recording elapsed time
  useEffect(() => {
    if (!isRecording) return;
    const id = window.setInterval(() => {
      setRecordSeconds((prev) => prev + 1);
    }, 1000);
    return () => window.clearInterval(id);
  }, [isRecording]);

  const handleSelectTimerPreset = (preset: 'prep20' | 'pres3' | 'follow2' | 'disc6') => {
    setSpeakTimerPreset(preset);
    setSpeakTimerRunning(false);
    if (preset === 'prep20') setSpeakSeconds(20 * 60);
    if (preset === 'pres3') setSpeakSeconds(3 * 60);
    if (preset === 'follow2') setSpeakSeconds(2 * 60);
    if (preset === 'disc6') setSpeakSeconds(6 * 60);
  };

  const formatMMSS = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const startRecording = async () => {
    setRecorderError(null);
    setKiResult(null);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
        ? 'audio/webm;codecs=opus'
        : MediaRecorder.isTypeSupported('audio/mp4')
          ? 'audio/mp4'
          : 'audio/webm';
      setRecordedMimeType(mimeType);

      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: mimeType });
        const url = URL.createObjectURL(audioBlob);
        setRecordedAudioUrl(url);

        const reader = new FileReader();
        reader.onloadend = () => {
          if (typeof reader.result === 'string') {
            setRecordedAudioBase64(reader.result);
          }
        };
        reader.readAsDataURL(audioBlob);

        stream.getTracks().forEach((track) => track.stop());
      };

      // Also start browser SpeechRecognition in German (de-DE) if supported for instant live text
      const SpeechRec =
        (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRec) {
        try {
          const rec = new SpeechRec();
          rec.lang = 'de-DE';
          rec.continuous = true;
          rec.interimResults = true;
          rec.onresult = (evt: any) => {
            let finalStr = '';
            for (let i = 0; i < evt.results.length; i++) {
              finalStr += evt.results[i][0].transcript + ' ';
            }
            if (finalStr.trim()) {
              setLiveTranscript(finalStr.trim());
            }
          };
          rec.start();
          recognitionRef.current = rec;
        } catch {
          // ignore browser speech recognition error
        }
      }

      mediaRecorder.start();
      setRecordSeconds(0);
      setIsRecording(true);
      setSpeakTimerRunning(true);
    } catch {
      setRecorderError(
        'Mikrofonga ruxsat berilmadi yoki mikrofon topilmadi. Brauzerning yuqori qismidan mikrofon ruxsatini yoqing yoki matn maydoniga nutqingizni yozib KI orqali tekshiring.'
      );
    }
  };

  const stopRecording = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
      } catch {
        // ignore
      }
      recognitionRef.current = null;
    }
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setSpeakTimerRunning(false);
    }
  };

  const filteredCards = useMemo(() => {
    if (selectedGroup === 'ALL') return PRESENTATION_CARDS;
    return PRESENTATION_CARDS.filter((c) => c.group === selectedGroup);
  }, [selectedGroup]);

  const currentCard = useMemo(() => {
    return (
      PRESENTATION_CARDS.find((c) => c.id === selectedCardId) || PRESENTATION_CARDS[0]
    );
  }, [selectedCardId]);

  const activeThema = selectedThemaIdx === 1 ? currentCard.thema1 : currentCard.thema2;
  const noteKey = `${currentCard.id}_T${selectedThemaIdx}`;
  const currentNoteText = speakingNotes[noteKey] || '';

  const filteredZitate = useMemo(() => {
    return FULL_120_ZITATE.filter((z) => {
      const matchesCat = zitatCategory === 'ALL' || z.category === zitatCategory;
      const q = zitatSearch.trim().toLowerCase();
      const matchesQuery =
        !q ||
        String(z.id).includes(q) ||
        z.quote.toLowerCase().includes(q) ||
        z.interpretation.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [zitatCategory, zitatSearch]);

  const currentZitat = useMemo(() => {
    return (
      FULL_120_ZITATE.find((z) => z.id === selectedZitatId) || FULL_120_ZITATE[0]
    );
  }, [selectedZitatId]);

  const readyPresentationSteps = useMemo(
    () => buildReadyC1PresentationScript(activeThema),
    [activeThema]
  );

  const readyZitatSteps = useMemo(
    () => buildReadyC1ZitatScript(currentZitat),
    [currentZitat]
  );

  const fullModelScriptDe = useMemo(() => {
    if (subTab === 'teil2') {
      return readyZitatSteps.map((s) => s.germanText).join('\n\n');
    }
    return readyPresentationSteps.map((s) => s.germanText).join('\n\n');
  }, [subTab, readyPresentationSteps, readyZitatSteps]);

  const handleEvaluateWithKi = async () => {
    const activePart: 'teil1a' | 'teil1b' | 'teil2' =
      subTab === 'teil2' ? 'teil2' : subTab === 'teil1b' ? 'teil1b' : 'teil1a';
    const topicTitle =
      activePart === 'teil2'
        ? `Zitat #${currentZitat.id}: ${currentZitat.quote}`
        : `${activeThema.code}: ${activeThema.shortTitle}`;
    const topicPrompt =
      activePart === 'teil2' ? currentZitat.interpretation : activeThema.prompt;

    const textToAnalyze =
      liveTranscript.trim() ||
      (activePart === 'teil1b' ? summaryNotes.trim() : currentNoteText.trim());

    setIsEvaluatingKi(true);
    setRecorderError(null);

    try {
      const response = await fetch('/api/ai/evaluate-speaking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          audioBase64: recordedAudioBase64,
          mimeType: recordedMimeType,
          transcriptText: textToAnalyze,
          partType: activePart,
          topicTitle,
          topicPrompt,
          durationSeconds: recordSeconds
        })
      });

      if (!response.ok) {
        // Use local fallback evaluator so the user always gets full feedback
        const fallback = evaluateSpeakingLocally(
          textToAnalyze || fullModelScriptDe,
          activePart,
          topicTitle,
          fullModelScriptDe
        );
        setKiResult(fallback);
        setOralScores({
          teil1a: fallback.teil1aScore,
          teil1b: fallback.teil1bScore,
          teil2: fallback.teil2Score,
          fluessigkeit: fallback.fluessigkeit,
          repertoire: fallback.repertoire,
          grammatik: fallback.grammatik,
          aussprache: fallback.aussprache
        });
      } else {
        const data: KiSpeakingEvaluation = await response.json();
        setKiResult(data);
        if (data.transcript && !liveTranscript.trim()) {
          setLiveTranscript(data.transcript);
        }
        setOralScores({
          teil1a: typeof data.teil1aScore === 'number' ? data.teil1aScore : 7,
          teil1b: typeof data.teil1bScore === 'number' ? data.teil1bScore : 5,
          teil2: typeof data.teil2Score === 'number' ? data.teil2Score : 8,
          fluessigkeit: typeof data.fluessigkeit === 'number' ? data.fluessigkeit : 5,
          repertoire: typeof data.repertoire === 'number' ? data.repertoire : 5,
          grammatik: typeof data.grammatik === 'number' ? data.grammatik : 5,
          aussprache: typeof data.aussprache === 'number' ? data.aussprache : 5
        });
      }
    } catch {
      const fallback = evaluateSpeakingLocally(
        textToAnalyze || fullModelScriptDe,
        activePart,
        topicTitle,
        fullModelScriptDe
      );
      setKiResult(fallback);
    } finally {
      setIsEvaluatingKi(false);
      onSubmitExam();
    }
  };

  const handleSpeakModelAloud = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'de-DE';
    utter.rate = 0.95;
    window.speechSynthesis.speak(utter);
  };

  const handleUpdateNote = (text: string) => {
    setSpeakingNotes((prev) => ({
      ...prev,
      [noteKey]: text
    }));
  };

  const handleInsertPhraseToNote = (phrase: string) => {
    const replaced = phrase.replace('[THEMA]', activeThema.shortTitle);
    const updated = currentNoteText
      ? `${currentNoteText.trim()}\n• ${replaced}`
      : `• ${replaced}`;
    handleUpdateNote(updated);
  };

  const handleRandomCard = () => {
    const randomIdx = Math.floor(Math.random() * PRESENTATION_CARDS.length);
    setSelectedCardId(PRESENTATION_CARDS[randomIdx].id);
    setSelectedThemaIdx(Math.random() > 0.5 ? 1 : 2);
    setKiResult(null);
  };

  const handleRandomZitat = () => {
    const randomId = Math.floor(Math.random() * 120) + 1;
    setSelectedZitatId(randomId);
    setKiResult(null);
  };

  const inhaltTotal = oralScores.teil1a + oralScores.teil1b + oralScores.teil2; // max 24
  const spracheTotal =
    oralScores.fluessigkeit +
    oralScores.repertoire +
    oralScores.grammatik +
    oralScores.aussprache; // max 24
  const oralGrandTotal = inhaltTotal + spracheTotal; // max 48
  const oralPassed = oralGrandTotal >= 29; // 60% of 48 = 29 points

  return (
    <div className="flex-1 overflow-y-auto bg-[#F4E9D3] p-4 md:p-6">
      <div className="max-w-[1440px] mx-auto bg-[#FDF9F0] rounded-2xl shadow-md border-2 border-[#0F372F]/20 overflow-hidden flex flex-col">
        {/* TOP HEADER BANNER */}
        <div className="bg-[#0F372F] text-[#ECBC6B] px-6 py-4 flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#ECBC6B]">
          <div>
            <div className="text-xs font-extrabold uppercase tracking-widest opacity-85">
              telc Deutsch C1 Hochschule · Mündliche Prüfung (Sprechen)
            </div>
            <h2 className="text-lg md:text-xl font-extrabold mt-0.5">
              Sodda 4-Qadamli Tizim: 1. Tushuning → 2. Shablonni ko‘ring → 3. Gapiring → 4. KI (AI) tekshirsin
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setShowStepGuide((s) => !s)}
            className="px-3.5 py-1.5 rounded-lg bg-[#ECBC6B] text-[#0F372F] text-xs font-extrabold flex items-center gap-1.5 cursor-pointer hover:bg-[#e3ae52]"
          >
            <HelpCircle className="w-4 h-4" />
            <span>{showStepGuide ? 'Yo‘riqnomani yashirish' : 'Qanday ishlashini ko‘rsatish'}</span>
          </button>
        </div>

        {/* CLEAR 4-STEP ROADMAP FOR STUDENTS */}
        {showStepGuide && (
          <div className="bg-[#ECBC6B]/30 border-b border-[#0F372F]/20 px-5 py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="bg-[#FDF9F0] p-3.5 rounded-xl border border-[#0F372F]/25">
                <div className="text-xs font-extrabold text-[#0F372F] uppercase">
                  1-QADAM: Mavzuni tushuning
                </div>
                <p className="text-xs text-[#0F372F]/85 mt-1 leading-relaxed">
                  <strong>Teil 1A</strong> (Taqdimot · 8 ball), <strong>Teil 1B</strong> (Xulosa va
                  savol · 6 ball) yoki <strong>Teil 2</strong> (120 ta Zitat · 10 ball) bo‘limidan
                  mavzuni tanlang va ijobiy/salbiy argumentlarni o‘qing.
                </p>
              </div>

              <div className="bg-[#FDF9F0] p-3.5 rounded-xl border border-[#0F372F]/25">
                <div className="text-xs font-extrabold text-[#0F372F] uppercase">
                  2-QADAM: Tayyor C1 Shablonni o‘qing
                </div>
                <p className="text-xs text-[#0F372F]/85 mt-1 leading-relaxed">
                  Har bir mavzu uchun <strong>5 qadamli tayyor C1 nutq matni</strong> va{' '}
                  <strong>Ovozli eshitish (🔊)</strong> tugmasi bor. Avval uni o‘qib va tinglab,
                  qanday gapirishni aniq tushunib oling.
                </p>
              </div>

              <div className="bg-[#FDF9F0] p-3.5 rounded-xl border border-[#0F372F]/25">
                <div className="text-xs font-extrabold text-[#0F372F] uppercase">
                  3-QADAM: Ovoz yozib oling (🎙️)
                </div>
                <p className="text-xs text-[#0F372F]/85 mt-1 leading-relaxed">
                  <strong>„Ovoz yozishni boshlash“</strong> tugmasini bosib, nemis tilida gapiring.
                  Nutqingiz audio bo‘lib yoziladi va jonli tarzda matnga aylanadi.
                </p>
              </div>

              <div className="bg-[#FDF9F0] p-3.5 rounded-xl border border-[#0F372F]/25">
                <div className="text-xs font-extrabold text-[#0F372F] uppercase">
                  4-QADAM: KI (Sun’iy Intellekt) Tekshiruvi
                </div>
                <p className="text-xs text-[#0F372F]/85 mt-1 leading-relaxed">
                  <strong>„KI orqali tekshirish“</strong> tugmasini bosing: AI ovozingizni eshitib,{' '}
                  <strong>48 ballik telc C1 mezoni</strong> bo‘yicha baholaydi, xatolaringizni
                  to‘g‘rilab, o‘zbek tilida tushuntirib beradi!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* SUB-NAVIGATION BAR */}
        <div className="bg-[#F4E9D3] border-b border-[#0F372F]/20 px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => {
                setSubTab('teil1a');
                handleSelectTimerPreset('pres3');
              }}
              className={`px-3.5 py-2 rounded-lg text-xs font-extrabold flex items-center gap-1.5 transition-all cursor-pointer border ${
                subTab === 'teil1a'
                  ? 'bg-[#0F372F] text-[#ECBC6B] border-[#0F372F] shadow-sm'
                  : 'bg-[#FDF9F0] text-[#0F372F] border-[#0F372F]/25 hover:bg-[#ECBC6B]/40'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>1. Teil 1A: Präsentation (8 Ball)</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setSubTab('teil1b');
                handleSelectTimerPreset('follow2');
              }}
              className={`px-3.5 py-2 rounded-lg text-xs font-extrabold flex items-center gap-1.5 transition-all cursor-pointer border ${
                subTab === 'teil1b'
                  ? 'bg-[#0F372F] text-[#ECBC6B] border-[#0F372F] shadow-sm'
                  : 'bg-[#FDF9F0] text-[#0F372F] border-[#0F372F]/25 hover:bg-[#ECBC6B]/40'
              }`}
            >
              <Users className="w-3.5 h-3.5" />
              <span>2. Teil 1B: Xulosa & Savollar (6 Ball)</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setSubTab('teil2');
                handleSelectTimerPreset('disc6');
              }}
              className={`px-3.5 py-2 rounded-lg text-xs font-extrabold flex items-center gap-1.5 transition-all cursor-pointer border ${
                subTab === 'teil2'
                  ? 'bg-[#0F372F] text-[#ECBC6B] border-[#0F372F] shadow-sm'
                  : 'bg-[#FDF9F0] text-[#0F372F] border-[#0F372F]/25 hover:bg-[#ECBC6B]/40'
              }`}
            >
              <MessageSquareQuote className="w-3.5 h-3.5" />
              <span>3. Teil 2: 120 Zitate / Munozara (10 Ball)</span>
            </button>

            <button
              type="button"
              onClick={() => setSubTab('redemittel')}
              className={`px-3.5 py-2 rounded-lg text-xs font-extrabold flex items-center gap-1.5 transition-all cursor-pointer border ${
                subTab === 'redemittel'
                  ? 'bg-[#0F372F] text-[#ECBC6B] border-[#0F372F] shadow-sm'
                  : 'bg-[#FDF9F0] text-[#0F372F] border-[#0F372F]/25 hover:bg-[#ECBC6B]/40'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>C1 Iboralar (Redemittel) & PDF</span>
            </button>

            <button
              type="button"
              onClick={() => setSubTab('bewertung')}
              className={`px-3.5 py-2 rounded-lg text-xs font-extrabold flex items-center gap-1.5 transition-all cursor-pointer border ${
                subTab === 'bewertung'
                  ? 'bg-[#0F372F] text-[#ECBC6B] border-[#0F372F] shadow-sm'
                  : 'bg-[#FDF9F0] text-[#0F372F] border-[#0F372F]/25 hover:bg-[#ECBC6B]/40'
              }`}
            >
              <Award className="w-3.5 h-3.5" />
              <span>Baholash Jadvali ({oralGrandTotal}/48 Ball)</span>
            </button>
          </div>

          {/* Speaking Timer */}
          <div className="flex items-center bg-[#0F372F] text-[#ECBC6B] rounded-lg px-3 py-1.5 gap-2 border border-[#0F372F]">
            <Clock className="w-3.5 h-3.5 shrink-0" />
            <select
              value={speakTimerPreset}
              onChange={(e) =>
                handleSelectTimerPreset(
                  e.target.value as 'prep20' | 'pres3' | 'follow2' | 'disc6'
                )
              }
              className="bg-[#0F372F] text-[#ECBC6B] text-xs font-bold focus:outline-none cursor-pointer"
            >
              <option value="prep20">Tayyorgarlik (20:00)</option>
              <option value="pres3">Taqdimot Teil 1A (03:00)</option>
              <option value="follow2">Savollar Teil 1B (02:00)</option>
              <option value="disc6">Zitat-Diskussion Teil 2 (06:00)</option>
            </select>
            <span className="font-mono-tabular font-extrabold text-sm px-2 py-0.5 rounded bg-[#ECBC6B] text-[#0F372F]">
              {formatMMSS(speakSeconds)}
            </span>
            <button
              type="button"
              onClick={() => setSpeakTimerRunning((r) => !r)}
              className="p-1 rounded hover:bg-[#14473D] text-[#ECBC6B] cursor-pointer"
              title={speakTimerRunning ? 'Pause' : 'Start'}
            >
              {speakTimerRunning ? (
                <Pause className="w-3.5 h-3.5" />
              ) : (
                <Play className="w-3.5 h-3.5" />
              )}
            </button>
            <button
              type="button"
              onClick={() => handleSelectTimerPreset(speakTimerPreset)}
              className="p-1 rounded hover:bg-[#14473D] text-[#ECBC6B] cursor-pointer"
              title="Reset"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* =====================================================================
            PROMINENT VOICE RECORDING & KI (AI) EVALUATION STUDIO BAR
           ===================================================================== */}
        <div className="bg-[#0F372F] text-[#ECBC6B] px-5 py-4 border-b-2 border-[#ECBC6B] space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="space-y-0.5">
              <div className="text-xs font-extrabold uppercase tracking-wider text-[#ECBC6B]/85 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" />
                <span>3 & 4-QADAM: OVOZ YOZIB OLISH VA KI (SUN’IY INTELLEKT) IMTIHONCHI</span>
              </div>
              <p className="text-xs text-[#ECBC6B]/90">
                Mavzuni tushunib olgach, mikrofonga gapiring — so‘ngra{' '}
                <strong>„KI orqali tekshirish va baholash“</strong> tugmasini bosing.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {!isRecording ? (
                <button
                  type="button"
                  onClick={startRecording}
                  className="px-4 py-2.5 rounded-xl bg-[#ECBC6B] text-[#0F372F] hover:bg-[#e3ae52] text-xs font-extrabold flex items-center gap-2 shadow-sm cursor-pointer transition-all"
                >
                  <Mic className="w-4 h-4" />
                  <span>1. Ovoz yozishni boshlash (Gapiring)</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={stopRecording}
                  className="px-4 py-2.5 rounded-xl bg-[#FDF9F0] text-[#0F372F] border-2 border-[#ECBC6B] text-xs font-extrabold flex items-center gap-2 cursor-pointer"
                >
                  <Square className="w-4 h-4 fill-current" />
                  <span>Yozishni to‘xtatish ({formatMMSS(recordSeconds)})</span>
                </button>
              )}

              <button
                type="button"
                onClick={handleEvaluateWithKi}
                disabled={isEvaluatingKi || isRecording}
                className="px-5 py-2.5 rounded-xl bg-[#14473D] text-[#ECBC6B] border-2 border-[#ECBC6B] hover:bg-[#ECBC6B] hover:text-[#0F372F] disabled:opacity-50 text-xs font-extrabold flex items-center gap-2 cursor-pointer transition-all"
              >
                {isEvaluatingKi ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Barcha bo‘limlar va ovoz tekshirilmoqda...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>2. Imtihonni Yakunlash va Barchasini Bitta Qilib Tekshirish (KI)</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Audio Player + Live Transcript Input Box */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center bg-[#14473D] p-3.5 rounded-xl border border-[#ECBC6B]/30">
            <div className="lg:col-span-5 space-y-2">
              <div className="text-xs font-extrabold text-[#ECBC6B] flex items-center justify-between">
                <span>🎙️ Yozib olingan ovozingiz:</span>
                {recordedAudioUrl && (
                  <a
                    href={recordedAudioUrl}
                    download={`telc_c1_sprechen_${variantId}.webm`}
                    className="underline text-[11px] flex items-center gap-1"
                  >
                    <Download className="w-3 h-3" />
                    Yuklab olish
                  </a>
                )}
              </div>
              {recordedAudioUrl ? (
                <audio controls src={recordedAudioUrl} className="w-full h-9" />
              ) : (
                <div className="text-xs text-[#ECBC6B]/75 py-2 px-3 rounded-lg bg-[#0F372F]/60 border border-[#ECBC6B]/20">
                  {isRecording
                    ? `🔴 Ovoz yozilmoqda (${formatMMSS(recordSeconds)})... Nemis tilida erkin gapiring!`
                    : 'Hali ovoz yozilmadi. Yuqoridagi „Ovoz yozishni boshlash“ tugmasini bosing.'}
                </div>
              )}
              {recorderError && (
                <div className="text-xs text-[#ECBC6B] flex items-start gap-1.5 bg-[#0F372F] p-2 rounded">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{recorderError}</span>
                </div>
              )}
            </div>

            <div className="lg:col-span-7 space-y-1.5">
              <div className="flex items-center justify-between text-xs font-extrabold text-[#ECBC6B]">
                <span>📝 Sizning nutqingiz matni (ovozdan avtomatik yoziladi yoki o‘zingiz tahrirlang):</span>
                <button
                  type="button"
                  onClick={() => setLiveTranscript(fullModelScriptDe)}
                  className="text-[11px] underline hover:opacity-80 cursor-pointer"
                >
                  Namuna nutqni joylash
                </button>
              </div>
              <textarea
                value={liveTranscript}
                onChange={(e) => setLiveTranscript(e.target.value)}
                rows={2}
                placeholder="Mikrofonda gapirganingiz shu yerda paydo bo‘ladi (yoki nemischa nutqingizni shu yerga yozib ham KI da tekshirtirishingiz mumkin)..."
                className="w-full p-2.5 rounded-lg bg-[#FDF9F0] text-[#0F372F] text-xs font-medium focus:outline-none"
              />
            </div>
          </div>

          {/* KI EVALUATION REPORT PANEL (Shown after unified exam submission / review mode) */}
          {isReviewMode && kiResult && (
            <div className="bg-[#FDF9F0] text-[#0F372F] rounded-2xl p-5 border-2 border-[#ECBC6B] shadow-lg space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#0F372F]/15 pb-3">
                <div>
                  <div className="text-xs font-extrabold uppercase tracking-wider text-[#0F372F]/75">
                    🤖 telc Deutsch C1 Hochschule — KI-Prüfer Natijasi
                  </div>
                  <h3 className="text-base md:text-lg font-extrabold text-[#0F372F]">
                    Umumiy Baho:{' '}
                    {kiResult.teil1aScore +
                      kiResult.teil1bScore +
                      kiResult.teil2Score +
                      kiResult.fluessigkeit +
                      kiResult.repertoire +
                      kiResult.grammatik +
                      kiResult.aussprache}{' '}
                    / 48 Ball · Daraja: {kiResult.cefrLevel}
                  </h3>
                </div>
                <button
                  type="button"
                  onClick={() => setSubTab('bewertung')}
                  className="px-3.5 py-1.5 rounded-lg bg-[#0F372F] text-[#ECBC6B] text-xs font-extrabold cursor-pointer"
                >
                  48 ballik jadvalda ko‘rish →
                </button>
              </div>

              {/* 7 Criteria Score Pills */}
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
                {[
                  { label: 'Teil 1A (Vortrag)', val: `${kiResult.teil1aScore}/8` },
                  { label: 'Teil 1B (Fragen)', val: `${kiResult.teil1bScore}/6` },
                  { label: 'Teil 2 (Zitat)', val: `${kiResult.teil2Score}/10` },
                  { label: 'Flüssigkeit', val: `${kiResult.fluessigkeit}/6` },
                  { label: 'Wortschatz', val: `${kiResult.repertoire}/6` },
                  { label: 'Grammatik', val: `${kiResult.grammatik}/6` },
                  { label: 'Aussprache', val: `${kiResult.aussprache}/6` }
                ].map((sc) => (
                  <div
                    key={sc.label}
                    className="bg-[#F4E9D3] p-2.5 rounded-xl border border-[#0F372F]/20 text-center"
                  >
                    <div className="text-[11px] font-bold text-[#0F372F]/80">{sc.label}</div>
                    <div className="text-sm font-mono-tabular font-extrabold text-[#0F372F] mt-0.5">
                      {sc.val}
                    </div>
                  </div>
                ))}
              </div>

              {/* Uzbek & German Examiner Feedback */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#ECBC6B]/30 p-4 rounded-xl border border-[#0F372F]/20 space-y-1.5">
                  <div className="text-xs font-extrabold uppercase text-[#0F372F]">
                    🇺🇿 O‘zbek tilida batafsil tahlil va maslahat:
                  </div>
                  <p className="text-xs text-[#0F372F] leading-relaxed font-medium">
                    {kiResult.uzbekFeedback}
                  </p>
                  {kiResult.strengths?.length > 0 && (
                    <ul className="pt-2 space-y-1 text-xs text-[#0F372F] font-semibold">
                      {kiResult.strengths.map((st, i) => (
                        <li key={i}>✅ {st}</li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="bg-[#F4E9D3]/70 p-4 rounded-xl border border-[#0F372F]/20 space-y-1.5">
                  <div className="text-xs font-extrabold uppercase text-[#0F372F]">
                    🇩🇪 Prüfer-Kommentar & Transkript:
                  </div>
                  <p className="text-xs text-[#0F372F] leading-relaxed">
                    {kiResult.germanFeedback}
                  </p>
                  {kiResult.transcript && (
                    <div className="mt-2 p-2.5 rounded-lg bg-[#FDF9F0] border border-[#0F372F]/15 text-xs text-[#0F372F] italic">
                      <strong>Eshitilgan matn:</strong> „{kiResult.transcript}“
                    </div>
                  )}
                </div>
              </div>

              {/* Specific C1 Corrections */}
              {kiResult.corrections?.length > 0 && (
                <div className="space-y-2">
                  <div className="text-xs font-extrabold uppercase text-[#0F372F]">
                    🔧 C1 darajaga ko‘tarish (Xatolar va C1 Alternativlar):
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {kiResult.corrections.map((c, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-[#F4E9D3]/60 border border-[#0F372F]/20 text-xs space-y-1"
                      >
                        <div>
                          <span className="font-bold opacity-75">Oddiy / Xato:</span>{' '}
                          <span className="line-through">{c.original}</span>
                        </div>
                        <div className="font-extrabold text-[#0F372F]">
                          ✨ C1 Variant: „{c.correctedC1}“
                        </div>
                        <div className="text-[11px] text-[#0F372F]/80">💡 {c.explanationUz}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Model Speech to Listen & Practice */}
              {kiResult.modelSpeechDe && (
                <div className="bg-[#0F372F] text-[#ECBC6B] p-4 rounded-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase">
                      🏆 Shu mavzu bo‘yicha Ideal C1 Namuna Nutq (O‘qib va tinglab mashq qiling):
                    </span>
                    <button
                      type="button"
                      onClick={() => handleSpeakModelAloud(kiResult.modelSpeechDe)}
                      className="px-3 py-1 rounded bg-[#ECBC6B] text-[#0F372F] text-xs font-extrabold flex items-center gap-1 cursor-pointer"
                    >
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>Nemischa talaffuzda eshitish</span>
                    </button>
                  </div>
                  <p className="text-xs leading-relaxed whitespace-pre-line font-serif-reading">
                    {kiResult.modelSpeechDe}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>

        {/* =====================================================================
            TAB 1: TEIL 1A — PRÄSENTATION (KURZVORTRAG)
           ===================================================================== */}
        {subTab === 'teil1a' && (
          <div className="p-5 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* LEFT COLUMN: Step 1 (Understand Topic) & Step 2 (Ready 5-Step C1 Speech Template) */}
            <div className="lg:col-span-7 space-y-5">
              {/* Filter & Random Draw Bar */}
              <div className="bg-[#F4E9D3] p-4 rounded-xl border border-[#0F372F]/20 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#0F372F]">
                    Bilet tanlang:
                  </span>
                  {(['ALL', 'A', 'B', 'C'] as const).map((grp) => (
                    <button
                      key={grp}
                      type="button"
                      onClick={() => {
                        setSelectedGroup(grp);
                        const first =
                          grp === 'ALL'
                            ? PRESENTATION_CARDS[0]
                            : PRESENTATION_CARDS.find((c) => c.group === grp);
                        if (first) setSelectedCardId(first.id);
                      }}
                      className={`px-2.5 py-1 rounded text-xs font-extrabold cursor-pointer border ${
                        selectedGroup === grp
                          ? 'bg-[#0F372F] text-[#ECBC6B] border-[#0F372F]'
                          : 'bg-[#FDF9F0] text-[#0F372F] border-[#0F372F]/25'
                      }`}
                    >
                      {grp === 'ALL' ? 'Barchasi' : `Gruppe ${grp}`}
                    </button>
                  ))}

                  <select
                    value={selectedCardId}
                    onChange={(e) => setSelectedCardId(e.target.value)}
                    className="px-3 py-1.5 rounded-lg bg-[#FDF9F0] text-[#0F372F] border border-[#0F372F]/30 text-xs font-bold focus:outline-none cursor-pointer"
                  >
                    {filteredCards.map((card) => (
                      <option key={card.id} value={card.id}>
                        Aufgabenblatt {card.id}: {card.thema1.shortTitle.slice(0, 38)}…
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="button"
                  onClick={handleRandomCard}
                  className="px-3 py-1.5 rounded-lg bg-[#0F372F] text-[#ECBC6B] hover:bg-[#14473D] text-xs font-extrabold flex items-center gap-1.5 cursor-pointer"
                >
                  <Shuffle className="w-3.5 h-3.5" />
                  <span>Tasodifiy Bilet</span>
                </button>
              </div>

              {/* 1-QADAM: Choose Thema 1 or Thema 2 */}
              <div className="bg-[#FDF9F0] rounded-xl border-2 border-[#0F372F] overflow-hidden shadow-sm">
                <div className="bg-[#0F372F] text-[#ECBC6B] px-5 py-3 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-widest opacity-85 font-bold">
                      1-QADAM · Mavzuni tanlang va tushunib oling (Aufgabenblatt {currentCard.id})
                    </div>
                    <h3 className="text-base font-extrabold">
                      2 ta mavzudan o‘zingizga qulay 1 tasini tanlang (3 daqiqa gapiriladi)
                    </h3>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#ECBC6B] text-[#0F372F] text-xs font-extrabold">
                    Max. 8 Ball
                  </span>
                </div>

                <div className="p-5 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[1, 2].map((idx) => {
                      const t = idx === 1 ? currentCard.thema1 : currentCard.thema2;
                      const isSelected = selectedThemaIdx === idx;
                      return (
                        <div
                          key={t.code}
                          onClick={() => setSelectedThemaIdx(idx as 1 | 2)}
                          className={`p-4 rounded-xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                            isSelected
                              ? 'bg-[#ECBC6B]/30 border-[#0F372F] shadow-sm'
                              : 'bg-[#FDF9F0] border-[#0F372F]/20 hover:border-[#0F372F]/50'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-2">
                              <span className="px-2.5 py-0.5 rounded bg-[#0F372F] text-[#ECBC6B] text-xs font-extrabold">
                                Thema {idx} ({t.code})
                              </span>
                              {isSelected && (
                                <span className="text-xs font-extrabold text-[#0F372F] flex items-center gap-1">
                                  <CheckCircle2 className="w-4 h-4 text-[#0F372F]" />
                                  Tanlandi
                                </span>
                              )}
                            </div>
                            <h4 className="font-extrabold text-[#0F372F] text-sm mb-2">
                              {t.shortTitle}
                            </h4>
                            <p className="text-sm text-[#0F372F] leading-relaxed font-serif-reading">
                              {t.prompt}
                            </p>
                          </div>

                          <div className="mt-4 pt-2 border-t border-[#0F372F]/15 flex items-center justify-between text-xs font-bold text-[#0F372F]">
                            <span>Shu mavzuda gapirish</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* 2-QADAM: STEP-BY-STEP READY C1 SPEECH BUILDER (O'qib tushunish va keyin gapirish uchun) */}
              <div className="bg-[#FDF9F0] rounded-xl border-2 border-[#0F372F] overflow-hidden shadow-sm">
                <div className="bg-[#0F372F] text-[#ECBC6B] px-5 py-3 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <div className="text-[11px] uppercase tracking-widest opacity-85 font-bold">
                      2-QADAM · Qanday gapirish kerak? (Tayyor 5-qadamli C1 Nutq Shabloni)
                    </div>
                    <h4 className="text-sm font-extrabold">
                      Avval har bir qadamni o‘qib tushuning, so‘ng yuqorida ovoz yozib gapiring!
                    </h4>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleSpeakModelAloud(fullModelScriptDe)}
                    className="px-3 py-1.5 rounded-lg bg-[#ECBC6B] text-[#0F372F] text-xs font-extrabold flex items-center gap-1.5 cursor-pointer hover:bg-[#e3ae52]"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>To‘liq taqdimotni eshitish (🔊)</span>
                  </button>
                </div>

                <div className="p-5 space-y-3.5">
                  {readyPresentationSteps.map((step) => (
                    <div
                      key={step.stepNum}
                      className="p-4 rounded-xl bg-[#F4E9D3]/70 border border-[#0F372F]/20 space-y-2"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-extrabold text-[#0F372F] uppercase">
                          {step.stepTitleUz}
                        </span>
                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => handleSpeakModelAloud(step.germanText)}
                            className="px-2.5 py-1 rounded bg-[#0F372F] text-[#ECBC6B] text-[11px] font-bold flex items-center gap-1 cursor-pointer"
                          >
                            <Volume2 className="w-3 h-3" />
                            Eshitish
                          </button>
                          <button
                            type="button"
                            onClick={() =>
                              handleUpdateNote(
                                currentNoteText
                                  ? `${currentNoteText}\n\n${step.germanText}`
                                  : step.germanText
                              )
                            }
                            className="px-2.5 py-1 rounded bg-[#ECBC6B] text-[#0F372F] text-[11px] font-extrabold cursor-pointer"
                          >
                            + Qoralamaga olish
                          </button>
                        </div>
                      </div>

                      <p className="text-xs text-[#0F372F]/80 font-medium">
                        💡 <strong>O‘zbekcha ko‘rsatma:</strong> {step.uzbekHint}
                      </p>

                      <div className="p-3 rounded-lg bg-[#FDF9F0] border border-[#0F372F]/15 text-sm text-[#0F372F] font-serif-reading leading-relaxed">
                        „{step.germanText}“
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: Stichwortzettel (Candidate Note Pad) + Quick Redemittel (5 cols) */}
            <div className="lg:col-span-5 space-y-5">
              {/* Stichwortzettel */}
              <div className="bg-[#FDF9F0] rounded-xl border-2 border-[#0F372F] overflow-hidden shadow-sm">
                <div className="bg-[#0F372F] text-[#ECBC6B] px-4 py-3 flex items-center justify-between">
                  <div>
                    <h4 className="text-sm font-extrabold">
                      Stichwortzettel (Tayyorgarlik qoralamasi)
                    </h4>
                    <p className="text-[11px] text-[#ECBC6B]/80">
                      Gapirayotganda qarab turish uchun o‘z rejangizni shu yerga chiqarib oling
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleUpdateNote(fullModelScriptDe)}
                    className="px-2.5 py-1 rounded bg-[#ECBC6B] text-[#0F372F] text-xs font-extrabold cursor-pointer hover:bg-[#e3ae52]"
                  >
                    Tayyor matnni to‘ldirish
                  </button>
                </div>

                <div className="p-4 space-y-3">
                  <textarea
                    value={currentNoteText}
                    onChange={(e) => handleUpdateNote(e.target.value)}
                    rows={12}
                    placeholder="Bu yerga Einleitung, Vorteile, Nachteile, Beispiel va Fazit punktlarini yozing yoki chap tomondan '+ Qoralamaga olish' tugmasini bosing..."
                    className="w-full p-3.5 rounded-xl bg-[#F4E9D3]/60 border border-[#0F372F]/30 text-sm text-[#0F372F] font-medium leading-relaxed focus:outline-none focus:border-[#0F372F]"
                  />

                  <div className="flex items-center justify-between text-xs text-[#0F372F]/75 font-semibold">
                    <span>
                      Tanlangan mavzu: <strong>{activeThema.code}</strong>
                    </span>
                    <button
                      type="button"
                      onClick={() => handleUpdateNote('')}
                      className="text-[#0F372F] underline font-bold cursor-pointer"
                    >
                      Tozalash
                    </button>
                  </div>
                </div>
              </div>

              {/* Quick-Insert C1 Redemittel for Teil 1A */}
              <div className="bg-[#FDF9F0] rounded-xl border border-[#0F372F]/25 overflow-hidden">
                <div className="bg-[#F4E9D3] px-4 py-3 border-b border-[#0F372F]/20">
                  <h4 className="text-sm font-extrabold text-[#0F372F]">
                    C1 Iboralar Konstruktori (Bossangiz qoralamaga qo‘shiladi)
                  </h4>
                  <p className="text-xs text-[#0F372F]/80 mt-0.5">
                    Har bir bo‘lim uchun eng ko‘p ball beradigan C1 bog‘lovchilar:
                  </p>
                </div>

                <div className="p-4 max-h-[420px] overflow-y-auto space-y-4">
                  {SPRECHEN_REDEMITTEL.filter((r) => r.part === 'Teil 1A').map((cat) => (
                    <div key={cat.id} className="space-y-1.5">
                      <div className="text-xs font-extrabold text-[#0F372F] uppercase tracking-wider">
                        {cat.titleDe} — <span className="opacity-75">{cat.titleUz}</span>
                      </div>
                      <div className="space-y-1.5">
                        {cat.phrases.slice(0, 4).map((p, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleInsertPhraseToNote(p)}
                            className="w-full text-left p-2.5 rounded-lg bg-[#F4E9D3]/60 hover:bg-[#ECBC6B]/50 border border-[#0F372F]/15 text-xs text-[#0F372F] font-medium flex items-start justify-between gap-2 transition-colors cursor-pointer"
                          >
                            <span>{p}</span>
                            <PlusCircle className="w-4 h-4 text-[#0F372F] shrink-0 mt-0.5" />
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 2: TEIL 1B — ZUSAMMENFASSUNG & ANSCHLUSSFRAGEN (6 PUNKTE)
           ===================================================================== */}
        {subTab === 'teil1b' && (
          <div className="p-5 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 space-y-5">
              <div className="bg-[#FDF9F0] rounded-xl border-2 border-[#0F372F] overflow-hidden">
                <div className="bg-[#0F372F] text-[#ECBC6B] px-5 py-3 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] uppercase tracking-widest opacity-85 font-bold">
                      telc C1 Hochschule · Teil 1B (Tayyorgarliksiz · 2 Daqiqa)
                    </div>
                    <h3 className="text-base font-extrabold">
                      Sherikning taqdimotini xulosalash va 2 ta savol berish
                    </h3>
                  </div>
                  <span className="px-2.5 py-1 rounded bg-[#ECBC6B] text-[#0F372F] text-xs font-extrabold">
                    Max. 6 Ball
                  </span>
                </div>

                <div className="p-5 space-y-4">
                  <div className="bg-[#F4E9D3] p-4 rounded-xl border border-[#0F372F]/20 text-xs text-[#0F372F] space-y-2 leading-relaxed">
                    <p className="font-extrabold text-sm">
                      🇺🇿 Teil 1B da nima qilish kerak? (Juda sodda qoida):
                    </p>
                    <p>
                      Sherigingiz 3 daqiqalik taqdimotini tugatgach, imtihon oluvchi sizga:{' '}
                      <em>„Fassen Sie bitte kurz zusammen und stellen Sie Fragen!“</em> deydi. Siz{' '}
                      <strong>4 ta gap bilan</strong> sherigingiz nima haqida gapirganini xulosalab
                      berasiz va unga <strong>2 ta savol</strong> berasiz.
                    </p>
                  </div>

                  {/* 4-Step Interactive Checklist */}
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#0F372F]">
                      To‘liq 6 ball olish uchun 4 ta tayyor qadam:
                    </h4>
                    {[
                      {
                        step: 1,
                        title: '1-Qadam: Sherigingizning mavzusini ayting',
                        desc: '„Wenn ich deine Ausführungen richtig verstanden habe, ging es in deinem Vortrag um die Frage, ob …“'
                      },
                      {
                        step: 2,
                        title: '2-Qadam: U aytgan foydali va salbiy tomonlarni eslang',
                        desc: '„Als wesentlichen Vorteil hast du hervorgehoben, dass …, während du kritisch angemerkt hast, dass …“'
                      },
                      {
                        step: 3,
                        title: '3-Qadam: Sherigingizning yakuniy xulosasini ayting',
                        desc: '„Abschließend bist du zu dem Fazit gelangt, dass …“'
                      },
                      {
                        step: 4,
                        title: '4-Qadam: Mavzu bo‘yicha 2 ta savol bering',
                        desc: '„Dazu hätte ich noch eine vertiefende Frage: Wie schätzt du die zukünftige Entwicklung in diesem Bereich ein?“'
                      }
                    ].map((item) => {
                      const checked = Boolean(checked1BSteps[item.step]);
                      return (
                        <div
                          key={item.step}
                          onClick={() =>
                            setChecked1BSteps((prev) => ({
                              ...prev,
                              [item.step]: !prev[item.step]
                            }))
                          }
                          className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                            checked
                              ? 'bg-[#ECBC6B]/35 border-[#0F372F]'
                              : 'bg-[#F4E9D3]/50 border-[#0F372F]/20'
                          }`}
                        >
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => {}}
                            className="mt-1 w-4 h-4 accent-[#0F372F]"
                          />
                          <div>
                            <div className="text-xs font-extrabold text-[#0F372F]">
                              {item.title}
                            </div>
                            <div className="text-xs text-[#0F372F]/85 mt-0.5 font-serif-reading">
                              {item.desc}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Sample Follow-up Questions for active Thema */}
                  <div className="bg-[#ECBC6B]/25 p-4 rounded-xl border border-[#0F372F]/25 space-y-2.5">
                    <div className="text-xs font-extrabold uppercase tracking-wider text-[#0F372F]">
                      🎯 „{activeThema.shortTitle}“ mavzusi uchun tayyor 2 ta savol:
                    </div>
                    <ul className="space-y-2 text-xs text-[#0F372F] font-medium">
                      {activeThema.anschlussfragen.map((q, idx) => (
                        <li
                          key={idx}
                          className="p-3 rounded-lg bg-[#FDF9F0] border border-[#0F372F]/15 flex items-center justify-between gap-2"
                        >
                          <div>
                            <span className="font-extrabold text-[#0F372F] mr-1.5">
                              Frage {idx + 1}:
                            </span>
                            <span>{q}</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => handleSpeakModelAloud(q)}
                            className="px-2 py-1 rounded bg-[#0F372F] text-[#ECBC6B] text-[11px] font-bold shrink-0 cursor-pointer"
                          >
                            🔊 Eshitish
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Partner-Mitschrift & Teil 1B Redemittel */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-[#FDF9F0] rounded-xl border-2 border-[#0F372F] overflow-hidden">
                <div className="bg-[#0F372F] text-[#ECBC6B] px-4 py-3">
                  <h4 className="text-sm font-extrabold">
                    Sherikni tinglayotganda qoralama (Live-Mitschrift)
                  </h4>
                  <p className="text-[11px] text-[#ECBC6B]/80">
                    Sherigingiz gapirayotganda asosiy so‘zlarni yozib oling va keyin mikrofonga
                    xulosalab ayting
                  </p>
                </div>
                <div className="p-4">
                  <textarea
                    value={summaryNotes}
                    onChange={(e) => setSummaryNotes(e.target.value)}
                    rows={8}
                    placeholder="• Thema des Partners:&#10;• Genannte Vorteile:&#10;• Genannte Nachteile:&#10;• Fazit des Partners:&#10;• Meine Anschlussfrage 1:&#10;• Meine Anschlussfrage 2:"
                    className="w-full p-3.5 rounded-xl bg-[#F4E9D3]/60 border border-[#0F372F]/30 text-sm text-[#0F372F] focus:outline-none focus:border-[#0F372F]"
                  />
                </div>
              </div>

              <div className="bg-[#FDF9F0] rounded-xl border border-[#0F372F]/25 overflow-hidden">
                <div className="bg-[#F4E9D3] px-4 py-3 border-b border-[#0F372F]/20">
                  <h4 className="text-sm font-extrabold text-[#0F372F]">
                    Teil 1B uchun tayyor C1 iboralar (Bossangiz qoralamaga tushadi)
                  </h4>
                </div>
                <div className="p-4 space-y-2">
                  {SPRECHEN_REDEMITTEL.find((r) => r.id === 'zusammenfassung')?.phrases.map(
                    (phrase, idx) => (
                      <div
                        key={idx}
                        onClick={() =>
                          setSummaryNotes((prev) =>
                            prev ? `${prev.trim()}\n• ${phrase}` : `• ${phrase}`
                          )
                        }
                        className="p-2.5 rounded-lg bg-[#F4E9D3]/60 hover:bg-[#ECBC6B]/40 border border-[#0F372F]/15 text-xs text-[#0F372F] font-medium cursor-pointer flex items-start justify-between gap-2"
                      >
                        <span>{phrase}</span>
                        <PlusCircle className="w-4 h-4 shrink-0 text-[#0F372F]" />
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 3: TEIL 2 — DISKUSSION / 120 OFFIZIELLE ZITATE (10 PUNKTE)
           ===================================================================== */}
        {subTab === 'teil2' && (
          <div className="p-5 md:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left: 120 Zitate Catalog Browser (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-[#F4E9D3] p-4 rounded-xl border border-[#0F372F]/20 space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#0F372F]">
                    120 ta Rasmiy Iqtibos (Zitate)
                  </span>
                  <button
                    type="button"
                    onClick={handleRandomZitat}
                    className="px-3 py-1.5 rounded-lg bg-[#0F372F] text-[#ECBC6B] hover:bg-[#14473D] text-xs font-extrabold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Shuffle className="w-3.5 h-3.5" />
                    <span>Tasodifiy Zitat</span>
                  </button>
                </div>

                {/* Search Input */}
                <div className="relative">
                  <Search className="w-4 h-4 text-[#0F372F]/60 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    value={zitatSearch}
                    onChange={(e) => setZitatSearch(e.target.value)}
                    placeholder="Zitat raqami (1–120) yoki so‘z bo‘yicha qidiring..."
                    className="w-full pl-9 pr-3 py-2 rounded-lg bg-[#FDF9F0] border border-[#0F372F]/30 text-xs text-[#0F372F] font-semibold focus:outline-none focus:border-[#0F372F]"
                  />
                </div>

                {/* Category Filter */}
                <div className="flex flex-wrap gap-1.5">
                  {[
                    'ALL',
                    'Bildung & Studium',
                    'Wissenschaft & Technik',
                    'Gesellschaft & Werte',
                    'Sprache & Kultur',
                    'Arbeit & Erfolg'
                  ].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setZitatCategory(cat)}
                      className={`px-2.5 py-1 rounded text-[11px] font-extrabold cursor-pointer border ${
                        zitatCategory === cat
                          ? 'bg-[#0F372F] text-[#ECBC6B] border-[#0F372F]'
                          : 'bg-[#FDF9F0] text-[#0F372F] border-[#0F372F]/20'
                      }`}
                    >
                      {cat === 'ALL' ? 'Barchasi (120)' : cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scrollable List of 120 Zitate */}
              <div className="bg-[#FDF9F0] rounded-xl border border-[#0F372F]/25 max-h-[580px] overflow-y-auto divide-y divide-[#0F372F]/10">
                {filteredZitate.map((z) => {
                  const isSelected = z.id === selectedZitatId;
                  return (
                    <button
                      key={z.id}
                      type="button"
                      onClick={() => setSelectedZitatId(z.id)}
                      className={`w-full text-left p-3.5 transition-colors cursor-pointer flex items-start gap-3 ${
                        isSelected
                          ? 'bg-[#0F372F] text-[#ECBC6B]'
                          : 'hover:bg-[#ECBC6B]/25 text-[#0F372F]'
                      }`}
                    >
                      <span
                        className={`px-2 py-0.5 rounded text-xs font-mono-tabular font-extrabold shrink-0 ${
                          isSelected
                            ? 'bg-[#ECBC6B] text-[#0F372F]'
                            : 'bg-[#F4E9D3] text-[#0F372F]'
                        }`}
                      >
                        #{z.id}
                      </span>
                      <div className="min-w-0">
                        <div className="text-xs font-bold line-clamp-2 leading-snug">
                          {z.quote}
                        </div>
                        <div
                          className={`text-[10px] mt-1 font-semibold ${
                            isSelected ? 'text-[#ECBC6B]/80' : 'text-[#0F372F]/65'
                          }`}
                        >
                          {z.category}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right: Active Official Zitat Card + 3-Step Ready Script (7 cols) */}
            <div className="lg:col-span-7 space-y-5">
              {/* Official telc Zitat Task Card */}
              <div className="bg-[#0F372F] text-[#ECBC6B] rounded-2xl p-6 border-2 border-[#ECBC6B] shadow-md space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#ECBC6B]/25 pb-3">
                  <div>
                    <div className="text-[11px] uppercase tracking-widest opacity-80 font-bold">
                      1-QADAM · Iqtibosni tushunib oling (Teil 2 · 6 Daqiqa · Tayyorgarliksiz)
                    </div>
                    <div className="text-sm font-extrabold">
                      Rasmiy Iqtibos #{currentZitat.id} · {currentZitat.category}
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-lg bg-[#ECBC6B] text-[#0F372F] text-xs font-extrabold">
                    Max. 10 Ball
                  </span>
                </div>

                <blockquote className="text-xl md:text-2xl font-serif-reading font-bold leading-relaxed py-3 text-center text-[#ECBC6B]">
                  {currentZitat.quote}
                </blockquote>

                <div className="bg-[#14473D] p-3.5 rounded-xl border border-[#ECBC6B]/30 text-xs text-[#ECBC6B]/95 leading-relaxed">
                  <strong>🇺🇿 Teil 2 da nima qilish kerak?</strong> Sherigingiz bilan shu iqtibos
                  ustida 6 daqiqa suhbatlashasiz. Quyidagi <strong>3 ta qadamni</strong> bajarish
                  shart:
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-2.5">
                    {[
                      { id: 1, label: '1. Ma’nosini tushuntirish (Definition)' },
                      { id: 2, label: '2. Fikr bildirish (Pro / Contra)' },
                      { id: 3, label: '3. Hayotiy misol keltirish (Beispiel)' }
                    ].map((st) => (
                      <button
                        key={st.id}
                        type="button"
                        onClick={() =>
                          setCheckedTeil2Steps((prev) => ({
                            ...prev,
                            [st.id]: !prev[st.id]
                          }))
                        }
                        className={`p-2 rounded-lg text-left font-bold flex items-center gap-2 cursor-pointer border ${
                          checkedTeil2Steps[st.id]
                            ? 'bg-[#ECBC6B] text-[#0F372F] border-[#ECBC6B]'
                            : 'bg-[#0F372F] text-[#ECBC6B] border-[#ECBC6B]/40'
                        }`}
                      >
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>{st.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* 2-QADAM: Ready 3-Step Zitat Discussion Script */}
              <div className="bg-[#FDF9F0] rounded-xl border-2 border-[#0F372F] overflow-hidden">
                <div className="bg-[#0F372F] text-[#ECBC6B] px-5 py-3 flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <div className="text-[11px] uppercase tracking-widest opacity-85 font-bold">
                      2-QADAM · Zitat #{currentZitat.id} bo‘yicha tayyor C1 Nutq Shabloni
                    </div>
                    <h4 className="text-sm font-extrabold">
                      Avval 3 ta qadamni o‘qib chiqing, so‘ng yuqorida ovoz yozib KI da tekshiring!
                    </h4>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleSpeakModelAloud(fullModelScriptDe)}
                    className="px-3 py-1.5 rounded-lg bg-[#ECBC6B] text-[#0F372F] text-xs font-extrabold flex items-center gap-1.5 cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                    <span>To‘liq eshitish (🔊)</span>
                  </button>
                </div>

                <div className="p-5 space-y-3.5">
                  {readyZitatSteps.map((step) => (
                    <div
                      key={step.stepNum}
                      className="p-4 rounded-xl bg-[#F4E9D3]/70 border border-[#0F372F]/20 space-y-2"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-extrabold text-[#0F372F] uppercase">
                          {step.stepTitleUz}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleSpeakModelAloud(step.germanText)}
                          className="px-2.5 py-1 rounded bg-[#0F372F] text-[#ECBC6B] text-[11px] font-bold flex items-center gap-1 cursor-pointer"
                        >
                          <Volume2 className="w-3 h-3" />
                          Eshitish
                        </button>
                      </div>
                      <p className="text-xs text-[#0F372F]/80 font-medium">
                        💡 <strong>O‘zbekcha ko‘rsatma:</strong> {step.uzbekHint}
                      </p>
                      <div className="p-3 rounded-lg bg-[#FDF9F0] border border-[#0F372F]/15 text-sm text-[#0F372F] font-serif-reading leading-relaxed">
                        „{step.germanText}“
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 4: C1 REDEMITTEL-BAUKASTEN & ORIGINAL PDF-QUELLEN
           ===================================================================== */}
        {subTab === 'redemittel' && (
          <div className="p-5 md:p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-[#0F372F] text-[#ECBC6B] p-5 rounded-xl border-2 border-[#ECBC6B] flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider opacity-80">
                    Rasmiy PDF Qo‘llanma 1 (283 bet)
                  </div>
                  <h4 className="text-base font-extrabold mt-0.5">
                    Neu_Präsentation.pdf — Teil 1A & 1B Katalog (A, B, C)
                  </h4>
                  <p className="text-xs text-[#ECBC6B]/85 mt-1">
                    Barcha Präsentation mavzulari: Einleitung, Gliederung, Vorteile, Nachteile va
                    Schluss.
                  </p>
                </div>
                <a
                  href="/assets/aistudio/Neu_Pr_sentation_d0575d32.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-[#ECBC6B] text-[#0F372F] text-xs font-extrabold shrink-0 hover:bg-[#e3ae52]"
                >
                  PDF ochish
                </a>
              </div>

              <div className="bg-[#0F372F] text-[#ECBC6B] p-5 rounded-xl border-2 border-[#ECBC6B] flex items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider opacity-80">
                    Rasmiy PDF Qo‘llanma 2 (180 bet)
                  </div>
                  <h4 className="text-base font-extrabold mt-0.5">
                    Zitat_neu.pdf — Teil 2: 120 Zitate (Pro & Contra bilan)
                  </h4>
                  <p className="text-xs text-[#ECBC6B]/85 mt-1">
                    Barcha 120 ta imtihon iqtiboslari: ma’nosi, ijobiy/salbiy fikrlar va misollar.
                  </p>
                </div>
                <a
                  href="/assets/aistudio/Zitat_neu_a008a0e1.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2.5 rounded-lg bg-[#ECBC6B] text-[#0F372F] text-xs font-extrabold shrink-0 hover:bg-[#e3ae52]"
                >
                  PDF ochish
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {SPRECHEN_REDEMITTEL.map((cat) => (
                <div
                  key={cat.id}
                  className="bg-[#FDF9F0] rounded-xl border-2 border-[#0F372F]/25 overflow-hidden"
                >
                  <div className="bg-[#0F372F] text-[#ECBC6B] px-4 py-3 flex items-center justify-between">
                    <div>
                      <h4 className="text-sm font-extrabold">{cat.titleDe}</h4>
                      <p className="text-[11px] text-[#ECBC6B]/85">{cat.titleUz}</p>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-[#ECBC6B] text-[#0F372F] text-xs font-extrabold">
                      {cat.part}
                    </span>
                  </div>
                  <div className="p-4 max-h-[320px] overflow-y-auto space-y-2">
                    {cat.phrases.map((phrase, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-lg bg-[#F4E9D3]/60 border border-[#0F372F]/15 text-xs text-[#0F372F] font-medium leading-relaxed flex items-center justify-between gap-2"
                      >
                        <span>
                          <span className="font-extrabold mr-1.5">{idx + 1}.</span>
                          {phrase}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleSpeakModelAloud(phrase)}
                          className="px-2 py-1 rounded bg-[#0F372F] text-[#ECBC6B] text-[10px] font-bold shrink-0 cursor-pointer"
                        >
                          🔊
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* =====================================================================
            TAB 5: PRÜFER-BEWERTUNGSBOGEN (MAX. 48 PUNKTE)
           ===================================================================== */}
        {subTab === 'bewertung' && (
          <div className="p-5 md:p-6 space-y-6">
            <div className="bg-[#0F372F] text-[#ECBC6B] p-5 rounded-2xl border-2 border-[#ECBC6B] flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest opacity-85">
                  Rasmiy telc Deutsch C1 Hochschule Baholash Mezoni
                </div>
                <h3 className="text-lg font-extrabold mt-0.5">
                  Mündliche Prüfung — 48 Ballik Baholash Jadvali
                </h3>
                <p className="text-xs text-[#ECBC6B]/85 mt-1">
                  O‘tish bali (Bestehensgrenze): <strong>48 balldan kamida 29 ball (60 %)</strong>
                </p>
              </div>

              <div className="text-right">
                <div className="text-2xl font-mono-tabular font-extrabold">
                  {oralGrandTotal} / 48 Ball
                </div>
                <div className="text-xs font-extrabold">
                  {oralPassed
                    ? '✅ O‘TDI (BESTANDEN · C1 Hochschule)'
                    : '⚠️ O‘TMADI (< 29 Ball)'}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Kriterium I: Inhaltliche Angemessenheit (24 Punkte) */}
              <div className="bg-[#FDF9F0] rounded-xl border-2 border-[#0F372F] overflow-hidden">
                <div className="bg-[#0F372F] text-[#ECBC6B] px-5 py-3 flex items-center justify-between">
                  <h4 className="text-sm font-extrabold">
                    I. Mazmun va Vazifani Bajarish (Inhalt · 24 Ball)
                  </h4>
                  <span className="px-2.5 py-0.5 rounded bg-[#ECBC6B] text-[#0F372F] text-xs font-extrabold">
                    {inhaltTotal} / 24 Ball
                  </span>
                </div>

                <div className="p-5 space-y-4">
                  {[
                    {
                      key: 'teil1a' as const,
                      label: 'Aufgabe 1A: Kurzvortrag / Präsentation (Max. 8 Ball)',
                      desc: 'Aniq reja, Vorteile va Nachteile, hayotiy misol va xulosa (~3 daqiqa).',
                      options: [
                        { pts: 8, grade: 'A (C1 to‘liq)' },
                        { pts: 6, grade: 'B (Yaxshi)' },
                        { pts: 3, grade: 'C (Qisman)' },
                        { pts: 0, grade: 'D (Bajarilmadi)' }
                      ]
                    },
                    {
                      key: 'teil1b' as const,
                      label: 'Aufgabe 1B: Zusammenfassung & Fragen (Max. 6 Ball)',
                      desc: 'Sherikning taqdimotini xulosalash va 2 ta mantiqiy savol berish.',
                      options: [
                        { pts: 6, grade: 'A (C1 to‘liq)' },
                        { pts: 4, grade: 'B (Yaxshi)' },
                        { pts: 2, grade: 'C (Qisman)' },
                        { pts: 0, grade: 'D (Bajarilmadi)' }
                      ]
                    },
                    {
                      key: 'teil2' as const,
                      label: 'Aufgabe 2: Diskussion über ein Zitat (Max. 10 Ball)',
                      desc: 'Iqtibos ma’nosini ochish, Pro/Contra fikr bildirish va misol keltirish.',
                      options: [
                        { pts: 10, grade: 'A (C1 to‘liq)' },
                        { pts: 7, grade: 'B (Yaxshi)' },
                        { pts: 3, grade: 'C (Qisman)' },
                        { pts: 0, grade: 'D (Bajarilmadi)' }
                      ]
                    }
                  ].map((crit) => (
                    <div
                      key={crit.key}
                      className="p-4 rounded-xl bg-[#F4E9D3]/70 border border-[#0F372F]/20 space-y-2.5"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold text-[#0F372F]">{crit.label}</span>
                        <span className="text-xs font-mono-tabular font-extrabold text-[#0F372F]">
                          {oralScores[crit.key]} Ball
                        </span>
                      </div>
                      <p className="text-xs text-[#0F372F]/75">{crit.desc}</p>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {crit.options.map((opt) => (
                          <button
                            key={opt.pts}
                            type="button"
                            onClick={() =>
                              setOralScores((prev) => ({ ...prev, [crit.key]: opt.pts }))
                            }
                            className={`px-2.5 py-1.5 rounded-lg text-xs font-extrabold border cursor-pointer ${
                              oralScores[crit.key] === opt.pts
                                ? 'bg-[#0F372F] text-[#ECBC6B] border-[#0F372F]'
                                : 'bg-[#FDF9F0] text-[#0F372F] border-[#0F372F]/25'
                            }`}
                          >
                            {opt.pts}P · {opt.grade.split(' ')[0]}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Kriterium II: Sprachliche Angemessenheit (24 Punkte) */}
              <div className="bg-[#FDF9F0] rounded-xl border-2 border-[#0F372F] overflow-hidden">
                <div className="bg-[#0F372F] text-[#ECBC6B] px-5 py-3 flex items-center justify-between">
                  <h4 className="text-sm font-extrabold">
                    II. Til Darajasi (Sprache · 24 Ball)
                  </h4>
                  <span className="px-2.5 py-0.5 rounded bg-[#ECBC6B] text-[#0F372F] text-xs font-extrabold">
                    {spracheTotal} / 24 Ball
                  </span>
                </div>

                <div className="p-5 space-y-4">
                  {[
                    {
                      key: 'fluessigkeit' as const,
                      label: '1. Ravonlik va Bog‘lovchilar (Flüssigkeit · Max. 6 Ball)',
                      desc: 'To‘xtalib qolmasdan erkin gapirish va C1 Konnektorlarni ishlatish.'
                    },
                    {
                      key: 'repertoire' as const,
                      label: '2. So‘z boyligi (Wortschatz / Repertoire · Max. 6 Ball)',
                      desc: 'Akademik va ilmiy so‘zlar, Nominalstil, so‘z takrorlamaslik.'
                    },
                    {
                      key: 'grammatik' as const,
                      label: '3. Grammatika (Grammatische Richtigkeit · Max. 6 Ball)',
                      desc: 'Murakkab ergash gaplar (Nebensätze, Passiv, Konjunktiv I/II).'
                    },
                    {
                      key: 'aussprache' as const,
                      label: '4. Talaffuz va Intonatsiya (Aussprache · Max. 6 Ball)',
                      desc: 'Aniq talaffuz va tabiiy nemischa gap ohangi.'
                    }
                  ].map((crit) => (
                    <div
                      key={crit.key}
                      className="p-3.5 rounded-xl bg-[#F4E9D3]/70 border border-[#0F372F]/20 space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-extrabold text-[#0F372F]">{crit.label}</span>
                        <span className="text-xs font-mono-tabular font-extrabold text-[#0F372F]">
                          {oralScores[crit.key]} / 6 Ball
                        </span>
                      </div>
                      <p className="text-xs text-[#0F372F]/75">{crit.desc}</p>
                      <div className="grid grid-cols-4 gap-2">
                        {[6, 4, 2, 0].map((pts, idx) => {
                          const letter = ['A', 'B', 'C', 'D'][idx];
                          return (
                            <button
                              key={pts}
                              type="button"
                              onClick={() =>
                                setOralScores((prev) => ({ ...prev, [crit.key]: pts }))
                              }
                              className={`px-2 py-1.5 rounded-lg text-xs font-extrabold border cursor-pointer ${
                                oralScores[crit.key] === pts
                                  ? 'bg-[#0F372F] text-[#ECBC6B] border-[#0F372F]'
                                  : 'bg-[#FDF9F0] text-[#0F372F] border-[#0F372F]/25'
                              }`}
                            >
                              {pts}P ({letter})
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* BOTTOM ACTION BAR */}
        <div className="bg-[#F4E9D3] border-t border-[#0F372F]/20 px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs font-bold text-[#0F372F]">
            telc Deutsch C1 Hochschule · Barcha bo‘limlar (Lesen + Sprachbausteine + Hören + Schreiben + Sprechen = 214 Ball)
          </div>
          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={onBackToStart}
              className="px-4 py-2 rounded-lg bg-[#ECBC6B] text-[#0F372F] border border-[#0F372F]/35 hover:bg-[#D9A754] text-xs font-extrabold transition-all cursor-pointer"
            >
              Antwortbogen S30
            </button>
            <button
              type="button"
              onClick={handleEvaluateWithKi}
              disabled={isEvaluatingKi || isRecording}
              className="px-5 py-2 rounded-lg bg-[#0F372F] text-[#ECBC6B] hover:bg-[#14473D] text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5"
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>Imtihonni Yakunlash va Tekshirish</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
