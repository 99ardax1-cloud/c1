import React, { useState, useEffect, useMemo } from 'react';
import {
  Clock,
  Play,
  Pause,
  RotateCcw,
  FileSpreadsheet,
  CheckCircle2,
  Bookmark,
  ChevronLeft,
  ChevronRight,
  Box,
  HelpCircle,
  Award,
  ShieldCheck
} from 'lucide-react';
import { READING_DATA, variantMap } from './data/telcExamData';
import {
  ExamTab,
  evaluateExamVariant,
  countEssayWords
} from './utils/examLogic';
import { ReadingWorkspace } from './components/ReadingWorkspace';
import { ListeningWorkspace } from './components/ListeningWorkspace';
import { WritingWorkspace } from './components/WritingWorkspace';
import { SpeakingWorkspace } from './components/SpeakingWorkspace';
import { AnswerSheetModal } from './components/AnswerSheetModal';
import { EvaluationModal } from './components/EvaluationModal';
import { ExamHall3DModal } from './components/ExamHall3DModal';

const STORAGE_KEY_ANSWERS = 'telc_c1_all_in_one_answers_v1';
const STORAGE_KEY_FLAGS = 'telc_c1_all_in_one_flags_v1';

const VARIANT_OPTIONS = [
  { id: '1', label: 'Variant 1: Die Maus / Mensa / Ein Tag mit / Gentechnik' },
  { id: '2', label: 'Variant 2: Gold / Spielzeug / Ehrenamt / Umweltschutz' },
  { id: '3', label: 'Variant 3: Gold / Gurken / Diktate / Wikipedia' },
  { id: '4', label: 'Variant 4: Abschlussarbeit / Tulpen / Studiengebühren' },
  { id: '5', label: 'Variant 5: Rechtschreibung / Mehrsprachigkeit / Tempolimit' },
  { id: '6', label: 'Variant 6: Günter Grass / Kindersprache / Speed Reading' },
  { id: '7', label: 'Variant 7: Der Lift / Virtuelles Studium / Schwiegermutter' },
  { id: '8', label: 'Variant 8: Helikopter-Eltern / Finnland / Intelligenz' },
  { id: '9', label: 'Variant 9: Ägypten / MINT-Fächer / Konkurrenz / ESA' },
  { id: '10', label: 'Variant 10: Günter Grass / Ärzte Schweden / Internet / Astronaut' },
  { id: '11', label: 'Variant 11: Der Lift / Helikopter-Eltern / Tulpen / Konkurrenz / ESA' },
  { id: '12', label: 'Variant 12: Ägypten / Familie & Studium / Ärzte / Raucher / Tempolimit' },
  { id: '13', label: 'Variant 13: Die Maus / Träume / MINT-Fächer / Virtuelles Studium / Internet' },
  {
    id: '14',
    label:
      'Variant 14 (PDF 14 · UZ): Gesichtserkennung / Wissenschaftssprache / Sabbatical / Konkurrenz / Bürgerforschung / Neugier'
  },
  {
    id: '15',
    label:
      'Variant 15 (PDF 15 · UZ): Container-Box / Fernstudenten / Weißes Gold (Böttger) / Wenn Wörter verschwinden / Studienwahl / ESA'
  },
  {
    id: '16',
    label:
      'Variant 16 (PDF 16 · UZ): Höhlenforschung / Iss dich glücklich / Reisen (Grand Tour) / Wetterphänomene / Glück / Gewohnheiten'
  },
  {
    id: '17',
    label:
      'Variant 17 (PDF 17 · UZ): Die Maus / Fernstudenten / MINT-Fächer / Wetterphänomene / Eltern & Studium / Gärten / Smalltalk'
  },
  {
    id: '18',
    label:
      'Variant 18 (PDF 18 · UZ): Satzzeichen / Akademisches Viertel / Schimpansen & Gorillas / Bio vs. Chemie / Glück / Finja / Benimmregeln'
  },
  {
    id: '19',
    label:
      'Variant 19 (PDF 19 · UZ): Sprache der Tiere / Dozent 10 Jahre jünger / Schimpansen / Wie das Geld in die Welt kam / Immobilien / Finja'
  },
  {
    id: '20',
    label:
      'Variant 20 (PDF 20 · UZ): Satzzeichen / Dozent 10 Jahre jünger / Camping & Glamping / Mendelejew Periodensystem / Glück / Gewohnheiten'
  },
  {
    id: '21',
    label:
      'Variant 21 (PDF 21 · UZ): Rechtschreibung / Abschlussarbeiten / Camping & Glamping / Geschichte der Werbung / Tempolimit / ESA / Smalltalk'
  },
  {
    id: '22',
    label:
      'Variant 22 (PDF 22 · UZ): Der Lift / Wissenschaftssprache / Reisen (Grand Tour) / Konkurrenz / Pendeln / Frau Fischer / Spielen'
  },
  {
    id: '24',
    label:
      'Variant 24 (PDF 24 · UZ): Gesichtserkennung / Der Mond / Sabbatical / Mendelejew / Studiengebühren / Landflucht / Kreativität'
  },
  {
    id: '25',
    label:
      'Variant 25 (PDF 25 · UZ): Sprache der Tiere / Fernstudenten / Schafe als Rasenmäher / Wie das Geld in die Welt kam / Pendeln / Pflanzen / Begabtenförderung'
  },
  {
    id: '26',
    label:
      'Variant 26 (PDF 26 · UZ): Der Lift / Selbermachen als Trend / Schafe als Rasenmäher / Mendelejew / Tempolimit / Berufswechsel / Kreativität'
  },
  {
    id: '27',
    label:
      'Variant 27 (PDF 27 · UZ): Höhlenforschung / Selbermachen als Trend / MINT-Fächer / Wetterphänomene / Pendeln / Fast Fashion / Heterogenität'
  },
  {
    id: '28',
    label:
      'Variant 28 (PDF 28 · UZ): Die Maus / Selbermachen als Trend / Schafe als Rasenmäher / Wenn Wörter verschwinden / Immobilien / Berufswechsel / Kreativität'
  },
  {
    id: '31',
    label:
      'Variant 31 (PDF 31 · UZ): Polaroid-Kamera / Der Mond / Seychellen Naturschutz / Chronobiologische Rhythmen / Eltern & Studium / Frau Fischer / Schlaf'
  },
  {
    id: '32',
    label:
      'Variant 32 (PDF 32 · UZ): Geschichte des Supermarkts / Macht Reisen glücklich? / Erika Fuchs Comic / Gamification / Studienfinanzierung / Radverkehr / Resilienz'
  },
  {
    id: '33',
    label:
      'Variant 33 (PDF 33 · UZ): Auswirkungen von Lärm / Allein im Restaurant? / Bundesfreiwilligendienst / Gamification / Studienfinanzierung / Start-up Niklas / Work-Life-Balance'
  },
  {
    id: '34',
    label:
      'Variant 34 (PDF 34 · UZ): Fahrstuhl / Nachhaltiger Konsum / Uni-Mensen / Restaurantkultur / Grünflächen / Schlaf Kinder / Introversion'
  },
  {
    id: '35',
    label:
      'Variant 35 (PDF 35 · UZ): Handschrift / Nachhaltiger Konsum / Kleingärten (Schrebergärten) / Spielen macht schlau / Pendeln / Mode Nadja Müller / Natur gegen Stress'
  },
  {
    id: '36',
    label:
      'Variant 36 (PDF 36 · UZ): Zimmerpflanzen / Nachhaltiger Konsum / Weißes Gold (Porzellan) / Chronobiologie / Grünflächen / Frau Fischer / Intelligenz Ruchmann'
  },
  {
    id: '37',
    label:
      'Variant 37 (PDF 37 · UZ): Sprache der Tiere / Bedeutung von Träumen / Seychellen Naturschutz / Diktate / Eltern & Studium / Pflanzen Sellinger / Märchen & Fantasy'
  },
  {
    id: '38',
    label:
      'Variant 38 (PDF 38 · UZ): Neue Sprache im Alter / Präsentationen an der Uni / Zweitstudium / Restaurantkultur / Grünflächen / Schlaf Kinder / Natur gegen Stress'
  },
  {
    id: '39',
    label:
      'Variant 39 (PDF 39 · UZ): Neue Sprache im Alter / Ruf mich nicht an! / Zweitstudium / Unterschätzte Pflanzen / Pendeln / Mode Nadja Müller / Introversion'
  }
];

const MODULE_TABS: Array<{
  id: ExamTab;
  group: string;
  label: string;
  points: string;
  range: [number, number];
}> = [
  { id: 'lv1', group: 'Lesen', label: 'Lesen Teil 1', points: '12p', range: [1, 6] },
  { id: 'lv2', group: 'Lesen', label: 'Lesen Teil 2', points: '12p', range: [7, 12] },
  { id: 'lv3', group: 'Lesen', label: 'Lesen Teil 3', points: '24p', range: [13, 24] },
  { id: 'sp', group: 'Sprachbausteine', label: 'Sprachbausteine', points: '22p', range: [25, 46] },
  { id: 'hv1', group: 'Hören', label: 'Hören Teil 1', points: '16p', range: [47, 54] },
  { id: 'hv2', group: 'Hören', label: 'Hören Teil 2', points: '20p', range: [55, 64] },
  { id: 'hv3', group: 'Hören', label: 'Hören Teil 3', points: '12p', range: [65, 74] },
  { id: 'schreiben', group: 'Schreiben', label: 'Schreiben', points: '48p', range: [75, 75] },
  { id: 'sprechen', group: 'Sprechen', label: 'Sprechen (Mündlich)', points: '48p', range: [76, 76] }
];

const MODULE_DEFAULT_MINUTES: Record<ExamTab, number> = {
  lv1: 20,
  lv2: 20,
  lv3: 25,
  sp: 25,
  hv1: 15,
  hv2: 15,
  hv3: 10,
  schreiben: 70,
  sprechen: 16
};

type UniversalTimerMode = 'module' | 'countdown' | 'stopwatch';

export default function App() {
  const [variantId, setVariantId] = useState<string>('34');
  const [activeTab, setActiveTab] = useState<ExamTab>('lv1');
  const [activeQuestionId, setActiveQuestionId] = useState<number>(1);
  const [isReviewMode, setIsReviewMode] = useState<boolean>(false);
  const [isExamMode, setIsExamMode] = useState<boolean>(false);
  const [showUzbekHints, setShowUzbekHints] = useState<boolean>(false);

  const [userAnswers, setUserAnswers] = useState<Record<string, string>>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_ANSWERS);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY_FLAGS);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  const [selectedTopicIdx, setSelectedTopicIdx] = useState<number>(0);

  // Modals
  const [isS30Open, setIsS30Open] = useState<boolean>(false);
  const [isEvalOpen, setIsEvalOpen] = useState<boolean>(false);
  const [is3DOpen, setIs3DOpen] = useState<boolean>(false);

  // Universal Exam Timer (Auto-Module / Custom Countdown / Stopwatch)
  const [timerMode, setTimerMode] = useState<UniversalTimerMode>('module');
  const [customMinutes, setCustomMinutes] = useState<number>(200);
  const [customInputVal, setCustomInputVal] = useState<string>('20');
  const [remainingSeconds, setRemainingSeconds] = useState<number>(
    MODULE_DEFAULT_MINUTES.lv1 * 60
  );
  const [timerRunning, setTimerRunning] = useState<boolean>(true);
  const [isTimerMenuOpen, setIsTimerMenuOpen] = useState<boolean>(false);
  const [showHoursFormat, setShowHoursFormat] = useState<boolean>(false);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_ANSWERS, JSON.stringify(userAnswers));
    } catch {
      // ignore quota errors
    }
  }, [userAnswers]);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY_FLAGS, JSON.stringify(flaggedQuestions));
    } catch {
      // ignore
    }
  }, [flaggedQuestions]);

  useEffect(() => {
    if (!timerRunning) return;
    const id = window.setInterval(() => {
      setRemainingSeconds((prev) => {
        if (timerMode === 'stopwatch') {
          return prev + 1;
        }
        return prev > 0 ? prev - 1 : 0;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [timerRunning, timerMode]);

  const getDefaultSecondsForCurrentState = (
    mode: UniversalTimerMode = timerMode,
    tab: ExamTab = activeTab,
    mins: number = customMinutes
  ) => {
    if (mode === 'stopwatch') return 0;
    if (mode === 'module') return (MODULE_DEFAULT_MINUTES[tab] || 20) * 60;
    return Math.max(1, mins) * 60;
  };

  const applyUniversalPreset = (minutes: number, mode: UniversalTimerMode = 'countdown') => {
    setTimerMode(mode);
    setCustomMinutes(minutes);
    setCustomInputVal(String(minutes));
    setRemainingSeconds(mode === 'stopwatch' ? 0 : minutes * 60);
    setTimerRunning(true);
  };

  const adjustTimerSeconds = (deltaSeconds: number) => {
    setRemainingSeconds((prev) => Math.max(0, prev + deltaSeconds));
  };

  const formatTimer = (sec: number) => {
    const safeSec = Math.max(0, sec);
    if (showHoursFormat || safeSec >= 3600) {
      const h = Math.floor(safeSec / 3600);
      const m = Math.floor((safeSec % 3600) / 60);
      const s = safeSec % 60;
      if (h > 0 || showHoursFormat) {
        return `${h < 10 ? '0' : ''}${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
      }
    }
    const m = Math.floor(safeSec / 60);
    const s = safeSec % 60;
    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  };

  const rData = READING_DATA[variantId];
  const lMap = variantMap[variantId];
  const currentVariantMeta =
    VARIANT_OPTIONS.find((v) => v.id === variantId) || VARIANT_OPTIONS[0];

  // Live evaluation (used for Review Mode and Score Modal)
  const evaluation = useMemo(
    () => evaluateExamVariant(variantId, userAnswers),
    [variantId, userAnswers]
  );

  // Count answered questions (1..74)
  const totalAnsweredCount = useMemo(() => {
    let count = 0;
    for (let i = 1; i <= 74; i++) {
      const val = userAnswers[`${variantId}_q${i}`];
      if (val !== undefined && val.trim() !== '') count++;
    }
    return count;
  }, [variantId, userAnswers]);

  const handleSelectVariant = (newVar: string) => {
    setVariantId(newVar);
    setIsReviewMode(false);
    setActiveTab('lv1');
    setActiveQuestionId(1);
    if (timerMode === 'module') {
      setRemainingSeconds(MODULE_DEFAULT_MINUTES.lv1 * 60);
    } else if (timerMode === 'stopwatch') {
      setRemainingSeconds(0);
    }
  };

  const handleSwitchTab = (tab: ExamTab) => {
    setActiveTab(tab);
    const found = MODULE_TABS.find((m) => m.id === tab);
    if (found) {
      setActiveQuestionId(found.range[0]);
    }
    if (timerMode === 'module') {
      setRemainingSeconds((MODULE_DEFAULT_MINUTES[tab] || 20) * 60);
    }
  };

  const handleSelectAnswer = (questionId: number, value: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [`${variantId}_q${questionId}`]: value
    }));
  };

  const handleToggleFlag = (questionId: number) => {
    const key = `${variantId}_q${questionId}`;
    setFlaggedQuestions((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handleChangeEssay = (text: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [`${variantId}_essay`]: text
    }));
  };

  const handleResetCurrentVariant = () => {
    setUserAnswers((prev) => {
      const next = { ...prev };
      for (let i = 1; i <= 74; i++) {
        delete next[`${variantId}_q${i}`];
      }
      delete next[`${variantId}_essay`];
      return next;
    });
    setFlaggedQuestions((prev) => {
      const next = { ...prev };
      for (let i = 1; i <= 74; i++) {
        delete next[`${variantId}_q${i}`];
      }
      return next;
    });
    setIsReviewMode(false);
    setIsEvalOpen(false);
  };

  const handleResetCurrentModule = () => {
    const mod = MODULE_TABS.find((m) => m.id === activeTab);
    if (!mod) return;
    setUserAnswers((prev) => {
      const next = { ...prev };
      for (let i = mod.range[0]; i <= mod.range[1]; i++) {
        delete next[`${variantId}_q${i}`];
      }
      return next;
    });
    setIsReviewMode(false);
  };

  const handleSubmitAndCheck = () => {
    setIsReviewMode(true);
    setIsEvalOpen(true);
  };

  const currentModuleMeta =
    MODULE_TABS.find((m) => m.id === activeTab) || MODULE_TABS[0];

  // Question numbers to show in bottom bar for current module
  const moduleQuestionIds: number[] = [];
  if (activeTab !== 'schreiben') {
    for (let i = currentModuleMeta.range[0]; i <= currentModuleMeta.range[1]; i++) {
      moduleQuestionIds.push(i);
    }
  }

  const stepQuestion = (delta: number) => {
    if (activeTab === 'schreiben') {
      if (delta > 0) {
        setActiveTab('sprechen');
      } else {
        setActiveTab('hv3');
        setActiveQuestionId(74);
      }
      return;
    }
    if (activeTab === 'sprechen') {
      if (delta < 0) {
        setActiveTab('schreiben');
      }
      return;
    }
    if (activeQuestionId === 74 && delta > 0) {
      setActiveTab('schreiben');
      return;
    }
    const nextQ = Math.min(74, Math.max(1, activeQuestionId + delta));
    const targetMod = MODULE_TABS.find(
      (m) => nextQ >= m.range[0] && nextQ <= m.range[1]
    );
    if (targetMod && targetMod.id !== activeTab) {
      setActiveTab(targetMod.id);
    }
    setActiveQuestionId(nextQ);
  };

  const essayWords = countEssayWords(userAnswers[`${variantId}_essay`] || '');

  return (
    <div className="h-screen w-screen overflow-hidden flex flex-col bg-[#F4E9D3] text-[#0F372F] select-none sm:select-auto">
      {/* TOP NAVIGATION HEADER — STORM GREEN (#0F372F) & LUSCIOUS LEMON (#ECBC6B) */}
      <header className="bg-[#0F372F] text-[#ECBC6B] px-4 py-2 border-b border-[#ECBC6B]/30 flex flex-wrap items-center justify-between gap-3 z-20 shrink-0">
        {/* Zone 1: Brand + Variant Selector */}
        <div className="flex items-center gap-3 flex-wrap">
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="bg-[#ECBC6B] text-[#0F372F] font-extrabold text-xs px-2.5 py-1 rounded tracking-wider">
              telc
            </div>
            <div>
              <div className="text-sm font-extrabold tracking-tight leading-none text-[#ECBC6B]">
                Deutsch C1 Hochschule
              </div>
              <div className="hidden text-[11px] text-[#ECBC6B]/80 font-medium">
                deuropa.app · Digitaler Prüfungssimulator (Varianten 1–39)
              </div>
            </div>
          </div>

          <select
            id="variantSelect"
            aria-label="Prüfungsvariante auswählen"
            value={variantId}
            onChange={(e) => handleSelectVariant(e.target.value)}
            className="bg-[#14473D] hover:bg-[#19564A] text-[#ECBC6B] border border-[#ECBC6B]/50 rounded-lg px-3 py-1.5 text-xs font-semibold cursor-pointer focus:outline-none focus:border-[#ECBC6B] max-w-[260px] sm:max-w-[360px] truncate"
          >
            {VARIANT_OPTIONS.map((v) => (
              <option key={v.id} value={v.id} className="bg-[#0F372F] text-[#ECBC6B]">
                {v.label}
              </option>
            ))}
          </select>

          {/* Hidden per user's earlier request (CSS selector 1) */}
          <div className="hidden items-center gap-1 flex-wrap max-w-[640px]">
            {[
              '14',
              '15',
              '16',
              '17',
              '18',
              '19',
              '20',
              '21',
              '22',
              '24',
              '25',
              '26',
              '27',
              '28',
              '31',
              '32',
              '33',
              '34',
              '35',
              '36',
              '37',
              '38',
              '39'
            ].map((pdfNum) => (
              <button
                key={pdfNum}
                type="button"
                onClick={() => handleSelectVariant(pdfNum)}
                className="px-1.5 py-0.5 rounded text-[10px] font-extrabold border"
              >
                PDF {pdfNum}
              </button>
            ))}
          </div>
        </div>

        {/* Zone 2: Exam Controls, Timer, 3D Center, Submit */}
        <div className="flex items-center gap-2 flex-wrap">
          {/* Hidden per user's earlier request (CSS selector 2) */}
          <button
            type="button"
            onClick={() => setIsExamMode((m) => !m)}
            className="hidden px-2.5 py-1.5 rounded text-xs font-bold border items-center gap-1.5"
          >
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>{isExamMode ? 'Prüfungsmodus' : 'Übungsmodus'}</span>
          </button>

          {/* Hidden per user's earlier request (CSS selector 3) */}
          <button
            type="button"
            onClick={() => setShowUzbekHints((h) => !h)}
            className="hidden px-2.5 py-1.5 rounded text-xs font-semibold border items-center gap-1"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>UZ Yordam</span>
          </button>

          {/* Hidden per user's earlier request (CSS selector 4) */}
          <button
            type="button"
            onClick={() => setIsS30Open(true)}
            className="hidden px-2.5 py-1.5 rounded text-xs font-bold items-center gap-1.5"
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>S30: {totalAnsweredCount}/74</span>
          </button>

          {/* 3D Exam Hall Button */}
          <button
            type="button"
            onClick={() => setIs3DOpen(true)}
            className="px-3 py-1.5 rounded-lg bg-[#14473D] hover:bg-[#ECBC6B] hover:text-[#0F372F] text-[#ECBC6B] border border-[#ECBC6B]/50 text-xs font-bold flex items-center gap-1.5 whitespace-nowrap shrink-0 transition-colors cursor-pointer"
            title="Interaktiv 3D telc C1 Imtihon Zali"
          >
            <Box className="w-3.5 h-3.5" />
            <span>3D Imtihon Zali</span>
          </button>

          {/* Universal Countdown / Stopwatch / Auto-Module Timer */}
          <div className="relative flex items-center bg-[#14473D] border border-[#ECBC6B]/50 rounded-lg px-2.5 py-1 gap-1.5">
            <Clock
              onClick={() => setIsTimerMenuOpen((o) => !o)}
              className="w-3.5 h-3.5 text-[#ECBC6B] cursor-pointer shrink-0"
            />
            <span
              id="timeDisplay"
              onClick={() => setIsTimerMenuOpen((o) => !o)}
              title="Universal vaqt sozlamalari (Bosib rejim yoki vaqtni tanlang)"
              className="font-mono-tabular font-extrabold text-xs text-[#ECBC6B] hover:text-[#FDF9F0] tracking-wider cursor-pointer px-1 py-0.5 rounded hover:bg-[#0F372F]/60 transition-colors select-none"
            >
              {timerMode === 'stopwatch' ? '↑ ' : ''}
              {formatTimer(remainingSeconds)}
            </span>
            <button
              type="button"
              onClick={() => setTimerRunning((r) => !r)}
              aria-label={timerRunning ? 'Timer pausieren' : 'Timer starten'}
              className="text-[#ECBC6B]/80 hover:text-[#ECBC6B] p-0.5 cursor-pointer"
              title={timerRunning ? 'To‘xtatib turish (Pauza)' : 'Davom ettirish (Start)'}
            >
              {timerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
            </button>
            <button
              type="button"
              onClick={() =>
                setRemainingSeconds(getDefaultSecondsForCurrentState(timerMode, activeTab, customMinutes))
              }
              aria-label="Timer zurücksetzen"
              className="text-[#ECBC6B]/80 hover:text-[#ECBC6B] p-0.5 cursor-pointer"
              title="Vaqtni boshiga qaytarish (Reset)"
            >
              <RotateCcw className="w-3 h-3" />
            </button>

            {isTimerMenuOpen && (
              <div className="absolute right-0 top-full mt-2 w-72 bg-[#0F372F] text-[#ECBC6B] border-2 border-[#ECBC6B] rounded-xl shadow-2xl p-3 z-50 flex flex-col gap-2.5">
                <div className="flex items-center justify-between border-b border-[#ECBC6B]/30 pb-1.5">
                  <span className="text-xs font-extrabold uppercase tracking-wider">
                    Universal Vaqt Boshqaruvi
                  </span>
                  <button
                    type="button"
                    onClick={() => setIsTimerMenuOpen(false)}
                    className="text-xs font-extrabold px-1.5 py-0.5 rounded bg-[#14473D] hover:bg-[#ECBC6B] hover:text-[#0F372F] cursor-pointer"
                  >
                    ✕
                  </button>
                </div>

                {/* 3 Universal Modes */}
                <div className="grid grid-cols-3 gap-1">
                  <button
                    type="button"
                    onClick={() => {
                      setTimerMode('module');
                      setRemainingSeconds((MODULE_DEFAULT_MINUTES[activeTab] || 20) * 60);
                      setTimerRunning(true);
                    }}
                    className={`px-2 py-1.5 rounded text-[11px] font-extrabold border cursor-pointer transition-colors ${
                      timerMode === 'module'
                        ? 'bg-[#ECBC6B] text-[#0F372F] border-[#ECBC6B]'
                        : 'bg-[#14473D] text-[#ECBC6B] border-[#ECBC6B]/40 hover:border-[#ECBC6B]'
                    }`}
                  >
                    Avto-Bo‘lim
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setTimerMode('countdown');
                      setRemainingSeconds(customMinutes * 60);
                      setTimerRunning(true);
                    }}
                    className={`px-2 py-1.5 rounded text-[11px] font-extrabold border cursor-pointer transition-colors ${
                      timerMode === 'countdown'
                        ? 'bg-[#ECBC6B] text-[#0F372F] border-[#ECBC6B]'
                        : 'bg-[#14473D] text-[#ECBC6B] border-[#ECBC6B]/40 hover:border-[#ECBC6B]'
                    }`}
                  >
                    Taymer ↓
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setTimerMode('stopwatch');
                      setRemainingSeconds(0);
                      setTimerRunning(true);
                    }}
                    className={`px-2 py-1.5 rounded text-[11px] font-extrabold border cursor-pointer transition-colors ${
                      timerMode === 'stopwatch'
                        ? 'bg-[#ECBC6B] text-[#0F372F] border-[#ECBC6B]'
                        : 'bg-[#14473D] text-[#ECBC6B] border-[#ECBC6B]/40 hover:border-[#ECBC6B]'
                    }`}
                  >
                    Sekundomer ↑
                  </button>
                </div>

                {/* Quick Presets */}
                <div>
                  <div className="text-[10px] font-bold text-[#ECBC6B]/80 mb-1">
                    Tezkor vaqt tanlash (daqiqa):
                  </div>
                  <div className="grid grid-cols-4 gap-1">
                    {[
                      { label: '15m', mins: 15 },
                      { label: '20m', mins: 20 },
                      { label: '25m', mins: 25 },
                      { label: '30m', mins: 30 },
                      { label: '40m (HV)', mins: 40 },
                      { label: '70m (Schr)', mins: 70 },
                      { label: '90m (LV+SP)', mins: 90 },
                      { label: '200m (To‘liq)', mins: 200 }
                    ].map((preset) => (
                      <button
                        key={preset.mins}
                        type="button"
                        onClick={() => applyUniversalPreset(preset.mins, 'countdown')}
                        className={`px-1.5 py-1 rounded text-[10px] font-extrabold border cursor-pointer transition-colors ${
                          timerMode === 'countdown' && customMinutes === preset.mins
                            ? 'bg-[#ECBC6B] text-[#0F372F] border-[#ECBC6B]'
                            : 'bg-[#14473D] text-[#ECBC6B] border-[#ECBC6B]/30 hover:bg-[#ECBC6B] hover:text-[#0F372F]'
                        }`}
                      >
                        {preset.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fine adjustment ±1m / ±5m */}
                <div className="grid grid-cols-4 gap-1">
                  {[
                    { label: '-5 daq', delta: -300 },
                    { label: '-1 daq', delta: -60 },
                    { label: '+1 daq', delta: 60 },
                    { label: '+5 daq', delta: 300 }
                  ].map((adj) => (
                    <button
                      key={adj.label}
                      type="button"
                      onClick={() => adjustTimerSeconds(adj.delta)}
                      className="px-1.5 py-1 rounded bg-[#14473D] hover:bg-[#ECBC6B] hover:text-[#0F372F] text-[#ECBC6B] border border-[#ECBC6B]/40 text-[10px] font-extrabold cursor-pointer transition-colors"
                    >
                      {adj.label}
                    </button>
                  ))}
                </div>

                {/* Custom Minute Input & Format Toggle */}
                <div className="flex items-center gap-1.5 pt-1 border-t border-[#ECBC6B]/30">
                  <input
                    type="number"
                    min={1}
                    max={600}
                    value={customInputVal}
                    onChange={(e) => setCustomInputVal(e.target.value)}
                    placeholder="Daqiqa..."
                    className="w-20 bg-[#14473D] text-[#ECBC6B] border border-[#ECBC6B]/50 rounded px-2 py-1 text-xs font-extrabold focus:outline-none focus:border-[#ECBC6B]"
                  />
                  <button
                    type="button"
                    onClick={() => {
                      const parsed = parseInt(customInputVal, 10);
                      if (!Number.isNaN(parsed) && parsed > 0) {
                        applyUniversalPreset(parsed, 'countdown');
                      }
                    }}
                    className="flex-1 bg-[#ECBC6B] hover:bg-[#D9A754] text-[#0F372F] rounded px-2 py-1 text-xs font-extrabold cursor-pointer transition-colors"
                  >
                    O‘rnatish
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowHoursFormat((f) => !f)}
                    title="Soat:Daqiqa:Soniya formatini yoqish/o‘chirish"
                    className={`px-2 py-1 rounded text-[10px] font-extrabold border cursor-pointer ${
                      showHoursFormat
                        ? 'bg-[#ECBC6B] text-[#0F372F] border-[#ECBC6B]'
                        : 'bg-[#14473D] text-[#ECBC6B] border-[#ECBC6B]/40'
                    }`}
                  >
                    HH:MM
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Primary Action: Unified Submit & Check All Exam Parts */}
          <button
            type="button"
            onClick={handleSubmitAndCheck}
            className="px-3.5 py-1.5 rounded-lg bg-[#ECBC6B] hover:bg-[#D9A754] text-[#0F372F] text-xs font-extrabold flex items-center gap-1.5 shadow-xs transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Award className="w-4 h-4 text-[#0F372F]" />
            <span>Imtihonni Yakunlash va Tekshirish</span>
          </button>
        </div>
      </header>

      {/* MODULE SUBNAV — STORM GREEN (#0F372F) & LUSCIOUS LEMON (#ECBC6B) PILL BAR */}
      <nav
        aria-label="Prüfungsteile"
        className="bg-[#FDF9F0] text-[#0F372F] px-4 py-1.5 flex items-center gap-1.5 overflow-x-auto border-b border-[#0F372F]/20 shadow-2xs shrink-0"
      >
        {MODULE_TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          let tabAnswered = 0;
          const tabTotal = tab.range[1] - tab.range[0] + 1;
          if (tab.id === 'schreiben') {
            tabAnswered = essayWords >= 350 ? 1 : 0;
          } else {
            for (let q = tab.range[0]; q <= tab.range[1]; q++) {
              if ((userAnswers[`${variantId}_q${q}`] || '').trim() !== '') {
                tabAnswered++;
              }
            }
          }

          return (
            <button
              key={tab.id}
              type="button"
              id={`tab_${tab.id}`}
              onClick={() => handleSwitchTab(tab.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 whitespace-nowrap shrink-0 cursor-pointer border ${
                isActive
                  ? 'bg-[#0F372F] text-[#ECBC6B] border-[#0F372F] shadow-xs'
                  : 'bg-[#F4E9D3] text-[#0F372F] border-[#0F372F]/20 hover:bg-[#ECBC6B] hover:text-[#0F372F]'
              }`}
            >
              <span>{tab.label}</span>
              <span className="font-mono-tabular text-[11px] opacity-85">({tab.points})</span>
              {tab.id !== 'schreiben' && tab.id !== 'sprechen' && tabAnswered === tabTotal && (
                <CheckCircle2
                  className={`w-3.5 h-3.5 shrink-0 ${
                    isActive ? 'text-[#ECBC6B]' : 'text-[#0F372F]'
                  }`}
                />
              )}
            </button>
          );
        })}
      </nav>

      {/* REVIEW MODE BANNER */}
      {isReviewMode && (
        <div className="bg-[#ECBC6B] text-[#0F372F] border-b border-[#0F372F]/25 px-4 py-1.5 flex items-center justify-between text-xs font-extrabold shrink-0">
          <span>
            🔍 Yakuniy Tahlil Rejimi: Barcha bo‘limlar bo‘yicha to‘g‘ri javoblar va ballar ko‘rsatilmoqda ({evaluation.totalWithSpeaking} / 214 ball).
          </span>
          <button
            type="button"
            onClick={() => setIsReviewMode(false)}
            className="px-3 py-0.5 rounded bg-[#0F372F] text-[#ECBC6B] hover:bg-[#14473D] text-xs font-bold cursor-pointer"
          >
            Tahlil rejimidan chiqish
          </button>
        </div>
      )}

      {/* MAIN EXAM WORKSPACE */}
      {['lv1', 'lv2', 'lv3', 'sp'].includes(activeTab) && rData && (
        <ReadingWorkspace
          variantId={variantId}
          activeTab={activeTab}
          rData={rData}
          userAnswers={userAnswers}
          flaggedQuestions={flaggedQuestions}
          activeQuestionId={activeQuestionId}
          isReviewMode={isReviewMode}
          showUzbekHints={showUzbekHints}
          questionResults={evaluation.questionResults}
          onSelectAnswer={handleSelectAnswer}
          onToggleFlag={handleToggleFlag}
          onFocusQuestion={setActiveQuestionId}
          onSubmitExam={handleSubmitAndCheck}
          onResetModule={handleResetCurrentModule}
          onBackToStart={() => setIsS30Open(true)}
        />
      )}

      {['hv1', 'hv2', 'hv3'].includes(activeTab) && lMap && (
        <ListeningWorkspace
          variantId={variantId}
          activeTab={activeTab}
          lMap={lMap}
          userAnswers={userAnswers}
          flaggedQuestions={flaggedQuestions}
          activeQuestionId={activeQuestionId}
          isReviewMode={isReviewMode}
          isExamMode={isExamMode}
          showUzbekHints={showUzbekHints}
          questionResults={evaluation.questionResults}
          onSelectAnswer={handleSelectAnswer}
          onToggleFlag={handleToggleFlag}
          onFocusQuestion={setActiveQuestionId}
          onSubmitExam={handleSubmitAndCheck}
          onResetModule={handleResetCurrentModule}
          onBackToStart={() => setIsS30Open(true)}
        />
      )}

      {activeTab === 'schreiben' && lMap && (
        <WritingWorkspace
          variantId={variantId}
          variantTitle={currentVariantMeta.label}
          topics={lMap.writing || []}
          essayText={userAnswers[`${variantId}_essay`] || ''}
          selectedTopicIdx={selectedTopicIdx}
          isReviewMode={isReviewMode}
          showUzbekHints={showUzbekHints}
          remainingTimeFormatted={formatTimer(remainingSeconds)}
          onChangeEssay={handleChangeEssay}
          onSelectTopic={setSelectedTopicIdx}
          onBackToStart={() => setIsS30Open(true)}
        />
      )}

      {activeTab === 'sprechen' && (
        <SpeakingWorkspace
          variantId={variantId}
          isReviewMode={isReviewMode}
          showUzbekHints={showUzbekHints}
          onSubmitExam={handleSubmitAndCheck}
          onBackToStart={() => setIsS30Open(true)}
        />
      )}

      {/* BOTTOM QUESTION NAVIGATOR BAR (AUFGABENLEISTE 1–74) */}
      <footer className="bg-[#0F372F] text-[#ECBC6B] border-t border-[#ECBC6B]/30 px-4 py-1.5 flex items-center justify-end gap-3 shrink-0 z-10">
        <div className="hidden items-center gap-1.5 overflow-x-auto py-0.5">
          <span className="text-xs font-extrabold text-[#ECBC6B] mr-1 whitespace-nowrap shrink-0">
            {currentModuleMeta.label}:
          </span>

          {activeTab === 'schreiben' ? (
            <span className="text-xs font-semibold text-[#ECBC6B]/90">
              Schriftlicher Ausdruck · {essayWords} / 350 Wörter
            </span>
          ) : (
            moduleQuestionIds.map((qId) => {
              const isAnswered = (userAnswers[`${variantId}_q${qId}`] || '').trim() !== '';
              const isFlagged = Boolean(flaggedQuestions[`${variantId}_q${qId}`]);
              const isCurrent = activeQuestionId === qId;
              const qRes = evaluation.questionResults[qId];

              let btnStyle =
                'bg-[#14473D] text-[#ECBC6B] border-[#ECBC6B]/40 hover:bg-[#ECBC6B] hover:text-[#0F372F]';
              if (isReviewMode && qRes) {
                btnStyle = qRes.isCorrect
                  ? 'bg-[#ECBC6B] text-[#0F372F] border-[#ECBC6B]'
                  : 'bg-[#0F372F] text-[#ECBC6B] border-[#ECBC6B] underline';
              } else if (isAnswered) {
                btnStyle = 'bg-[#ECBC6B] text-[#0F372F] border-[#ECBC6B]';
              }

              return (
                <button
                  key={qId}
                  type="button"
                  onClick={() => setActiveQuestionId(qId)}
                  className={`relative h-7 min-w-[30px] px-1.5 rounded-md font-mono-tabular text-xs font-bold border transition-all shrink-0 cursor-pointer ${btnStyle} ${
                    isCurrent ? 'ring-2 ring-[#ECBC6B] ring-offset-1 ring-offset-[#0F372F]' : ''
                  }`}
                  title={`Aufgabe ${qId}${isFlagged ? ' (Markiert)' : ''}`}
                >
                  {qId}
                  {isFlagged && (
                    <Bookmark className="w-2.5 h-2.5 fill-[#ECBC6B] text-[#ECBC6B] absolute -top-1 -right-1" />
                  )}
                </button>
              );
            })
          )}
        </div>

        {/* Prev / Next Task & Answered Summary */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="hidden md:flex items-center gap-3 text-xs text-[#ECBC6B]/90 mr-2">
            <span>
              Javoblar:{' '}
              <strong id="totalAnsweredCount" className="font-mono-tabular text-[#ECBC6B]">
                {totalAnsweredCount}
              </strong>{' '}
              / 74
            </span>
          </div>

          <button
            type="button"
            onClick={() => stepQuestion(-1)}
            disabled={activeQuestionId <= 1 && activeTab === 'lv1'}
            className="px-2.5 py-1 rounded-md border border-[#ECBC6B]/50 bg-[#14473D] hover:bg-[#ECBC6B] hover:text-[#0F372F] disabled:opacity-40 text-xs font-bold text-[#ECBC6B] flex items-center gap-1 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-3.5 h-3.5" />
            <span>Oldingi</span>
          </button>
          {activeTab === 'sprechen' ? (
            <button
              type="button"
              onClick={handleSubmitAndCheck}
              className="px-3.5 py-1 rounded-md bg-[#ECBC6B] hover:bg-[#D9A754] text-xs font-extrabold text-[#0F372F] flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <Award className="w-3.5 h-3.5" />
              <span>Yakunlash va Tekshirish</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={() => stepQuestion(1)}
              className="px-2.5 py-1 rounded-md bg-[#ECBC6B] hover:bg-[#D9A754] text-xs font-bold text-[#0F372F] flex items-center gap-1 transition-colors cursor-pointer"
            >
              <span>Keyingi</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </footer>

      {/* MODALS */}
      <AnswerSheetModal
        isOpen={isS30Open}
        variantId={variantId}
        variantTitle={currentVariantMeta.label}
        userAnswers={userAnswers}
        flaggedQuestions={flaggedQuestions}
        isReviewMode={isReviewMode}
        onClose={() => setIsS30Open(false)}
        onJumpToQuestion={(tab, qId) => {
          setActiveTab(tab);
          setActiveQuestionId(qId);
        }}
      />

      <EvaluationModal
        isOpen={isEvalOpen}
        evaluation={evaluation}
        variantTitle={currentVariantMeta.label}
        onClose={() => setIsEvalOpen(false)}
        onEnterReviewMode={() => {
          setIsEvalOpen(false);
          setIsReviewMode(true);
        }}
        onResetVariant={handleResetCurrentVariant}
      />

      <ExamHall3DModal
        isOpen={is3DOpen}
        variantId={variantId}
        variantTitle={currentVariantMeta.label}
        grandTotal={evaluation.grandTotal}
        part1Total={evaluation.part1Total}
        part2Total={evaluation.part2Total}
        totalAnsweredCount={totalAnsweredCount}
        remainingTimeFormatted={formatTimer(remainingSeconds)}
        onClose={() => setIs3DOpen(false)}
      />
    </div>
  );
}
