import React, { useState, useRef } from 'react';
import {
  Search,
  Sparkles,
  BookOpen,
  FileText,
  Trash2,
  Award,
  CheckCircle2
} from 'lucide-react';
import { analyzeC1EssayLocal } from '../utils/examLogic';

interface WritingWorkspaceProps {
  variantId: string;
  variantTitle: string;
  topics: string[];
  essayText: string;
  selectedTopicIdx: number;
  isReviewMode: boolean;
  showUzbekHints: boolean;
  remainingTimeFormatted?: string;
  onChangeEssay: (text: string) => void;
  onSelectTopic: (idx: number) => void;
  onBackToStart?: () => void;
}

const GERMAN_CHARS = ['ä', 'ö', 'ü', 'Ä', 'Ö', 'Ü', 'ß', '„', '“', '–'];

const C1_REDEMITTEL = [
  {
    category: '1. Einleitung & Relevanz',
    phrases: [
      'In der gegenwärtigen gesellschaftlichen und wissenschaftlichen Debatte gewinnt die Frage nach ... zunehmend an Bedeutung.',
      'Angesichts des rasanten technologischen und sozialen Wandels stellt sich die zentrale Frage, inwieweit ...',
      'Das vorliegende Thema ist hochaktuell, da es sowohl individuelle als auch gesamtgesellschaftliche Auswirkungen nach sich zieht.'
    ]
  },
  {
    category: '2. Argumentation (Pro & Contra)',
    phrases: [
      'Befürworter dieser Maßnahme führen ins Feld, dass ...',
      'Demgegenüber steht das gewichtige Argument, wonach ...',
      'Ein nicht zu vernachlässigender Aspekt besteht darin, dass ...',
      'Darüber hinaus lässt sich anhand empirischer Erfahrungen belegen, dass ...'
    ]
  },
  {
    category: '3. Konzessive & Kausale Verknüpfung',
    phrases: [
      'Ungeachtet der genannten Vorzüge darf jedoch nicht außer Acht gelassen werden, dass ...',
      'Zwar bietet dieser Ansatz kurzfristige Vorteile, nichtsdestotrotz überwiegen langfristig die Risiken.',
      'Infolgedessen erweist es sich als unerlässlich, differenzierte Rahmenbedingungen zu schaffen.'
    ]
  },
  {
    category: '4. Schlussfolgerung & Eigene Stellungnahme',
    phrases: [
      'Zusammenfassend lässt sich festhalten, dass eine einseitige Betrachtungsweise dem Problem nicht gerecht wird.',
      'Meines Erachtens überwiegen die positiven Effekte, sofern klare gesetzliche Leitlinien eingehalten werden.',
      'Abschließend plädiere ich für einen ausgewogenen Kompromiss, der ökonomische und ethische Belange gleichermaßen berücksichtigt.'
    ]
  }
];

export const WritingWorkspace: React.FC<WritingWorkspaceProps> = ({
  variantTitle,
  topics,
  essayText,
  selectedTopicIdx,
  isReviewMode,
  showUzbekHints,
  remainingTimeFormatted,
  onChangeEssay,
  onSelectTopic,
  onBackToStart
}) => {
  const [showRedemittel, setShowRedemittel] = useState<boolean>(false);
  const [showCheckResult, setShowCheckResult] = useState<boolean>(false);
  const [aiLoading, setAiLoading] = useState<boolean>(false);
  const [aiFeedback, setAiFeedback] = useState<string>('');
  const [aiError, setAiError] = useState<string>('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const localCriteria = analyzeC1EssayLocal(essayText);
  const activeTopic = topics[selectedTopicIdx] || topics[0] || '';

  const insertAtCursor = (snippet: string) => {
    if (isReviewMode) return;
    const el = textareaRef.current;
    if (!el) {
      onChangeEssay(essayText + snippet);
      return;
    }
    const start = el.selectionStart ?? essayText.length;
    const end = el.selectionEnd ?? essayText.length;
    const next = essayText.slice(0, start) + snippet + essayText.slice(end);
    onChangeEssay(next);
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(start + snippet.length, start + snippet.length);
    });
  };

  const loadSampleC1Essay = () => {
    const cleanTopic = activeTopic.replace(/^Thema\s*[AB12]:\s*/i, '');
    const sample = `Erörterung zum Thema: „${cleanTopic}“

In der gegenwärtigen gesellschaftlichen und hochschulpolitischen Debatte gewinnt die Frage nach den langfristigen Auswirkungen dieser Entwicklung zunehmend an Bedeutung. Angesichts des tiefgreifenden technologischen, ökonomischen und kulturellen Wandels stehen sowohl Universitäten als auch politische Entscheidungsträger vor der Herausforderung, tragfähige und zukunftssichere Lösungen zu entwickeln. Im Folgenden sollen die wesentlichen Vor- und Nachteile differenziert erörtert werden, bevor abschließend eine begründete eigene Stellungnahme erfolgt.

Einerseits führen Befürworter gewichtige Argumente ins Feld, die für eine konsequente Förderung und Modernisierung in diesem Bereich sprechen. An erster Stelle ist hierbei die deutliche Effizienzsteigerung sowie der erweiterte Zugang zu wissenschaftlichen und gesellschaftlichen Ressourcen zu nennen. Durch innovative Konzepte lassen sich nicht nur strukturelle Hürden abbauen, sondern auch völlig neue Potenziale für Studierende, Forschende und Bürgerinnen und Bürger erschließen. Darüber hinaus zeigt der internationale Vergleich eindrucksvoll, dass Staaten, die frühzeitig in entsprechende Rahmenbedingungen investieren, langfristig über eine wesentlich höhere Innovationskraft verfügen. Folglich leistet eine progressive Herangehensweise einen unverzichtbaren Beitrag zur Sicherung der internationalen Wettbewerbsfähigkeit.

Andererseits dürfen die damit einhergehenden Risiken und Schattenseiten keineswegs außer Acht gelassen werden. Kritiker weisen zu Recht darauf hin, dass eine unreflektierte Umsetzung soziale Ungleichheiten verschärfen oder bewährte Qualitätsstandards nachhaltig gefährden kann. Insbesondere im akademischen und bildungspolitischen Kontext besteht die Gefahr, dass kurzfristige ökonomische Nützlichkeitsüberlegungen die kritische Reflexion und den persönlichen wissenschaftlichen Diskurs verdrängen. Hinzu kommt, dass finanzielle und organisatorische Belastungen häufig ungleich verteilt sind, sodass sozial schwächere Gruppen unter Umständen das Nachsehen haben. Ungeachtet der genannten Vorteile bedarf es daher strenger gesetzlicher Regulierungen und einer kontinuierlichen unabhängigen Evaluation.

Des Weiteren ist zu berücksichtigen, dass ein nachhaltiger Strukturwandel niemals allein durch technische oder administrative Maßnahmen erzwungen werden kann, sondern stets auf die Akzeptanz und Mitwirkung aller Beteiligten angewiesen ist. Empirische Untersuchungen belegen, dass Reformprozesse vor allem dann erfolgreich verlaufen, wenn transparente Übergangsfristen geschaffen und gezielte Förderangebote bereitgestellt werden. Auf diese Weise lassen sich potenzielle Konflikte frühzeitig entschärfen und konstruktive Synergien nutzen.

Zusammenfassend lässt sich festhalten, dass eine eindimensionale Betrachtungsweise der hohen Komplexität des Themas nicht gerecht wird. Nach sorgfältiger Abwägung der vorliegenden Argumente vertrete ich den Standpunkt, dass Chancen und Risiken in ein ausgewogenes Verhältnis gesetzt werden müssen. Meines Erachtens sollte der Fokus darauf liegen, technologische und strukturelle Neuerungen verantwortungsbewusst zu gestalten, ohne dabei grundlegende bildungspolitische und ethische Werte preiszugeben. Nur durch das enge Zusammenspiel von staatlicher Förderung, institutioneller Verantwortung und individuellem Engagement lässt sich eine zukunftsfähige Entwicklung gewährleisten.`;
    onChangeEssay(sample);
  };

  const handleRunAiEvaluation = async () => {
    setShowCheckResult(true);
    if (localCriteria.wordCount < 10) return;
    setAiLoading(true);
    setAiError('');
    try {
      const res = await fetch('/api/ai/evaluate-essay', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          essay: essayText,
          topic: activeTopic,
          variantTitle
        })
      });
      const data = await res.json();
      if (!res.ok) {
        setAiError(data.error || 'KI-Prüfer javob bermadi.');
      } else {
        setAiFeedback(data.analysis || '');
      }
    } catch (e: any) {
      setAiError(e?.message || 'Tarmoq xatosi.');
    } finally {
      setAiLoading(false);
    }
  };

  return (
    <div className="flex-1 flex flex-col overflow-hidden bg-[#F4E9D3]">
      {/* TOP STORM GREEN PRÜFUNG HEADER BAR WITH LUSCIOUS LEMON BOTTOM BORDER */}
      <div className="bg-[#0F372F] text-[#ECBC6B] px-4 sm:px-6 py-2.5 border-b-2 border-[#ECBC6B] flex flex-wrap items-center justify-between gap-3 shrink-0">
        <div className="flex items-center gap-3">
          <span className="bg-[#ECBC6B] text-[#0F372F] font-extrabold text-xs px-3 py-1 rounded tracking-wide">
            PRÜFUNG
          </span>
        </div>

        <div className="font-extrabold text-sm sm:text-base text-[#ECBC6B] tracking-tight text-center">
          Schreiben: Wissenschaftliche Erörterung
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs sm:text-sm font-semibold text-[#ECBC6B]">
            Deutsch - C1 |{' '}
            <span className="text-[#ECBC6B] font-extrabold underline">
              Restzeit: {remainingTimeFormatted || '70:00'} Min
            </span>
          </span>
          <button
            type="button"
            onClick={onBackToStart}
            className="bg-[#ECBC6B] hover:bg-[#D9A754] text-[#0F372F] text-xs font-extrabold px-3.5 py-1.5 rounded transition-colors cursor-pointer"
          >
            SPEICHERN &amp; ZURÜCK
          </button>
        </div>
      </div>

      {/* MAIN TWO-COLUMN WORKSPACE */}
      <div className="flex-1 overflow-hidden p-3 sm:p-5">
        <div className="max-w-[1440px] w-full mx-auto h-full grid grid-cols-1 lg:grid-cols-2 gap-5 overflow-hidden min-h-0">
          {/* LEFT CARD: Luscious Lemon Banner + Storm Green Bordered Task Box + C1 Tools */}
          <div className="bg-[#FDF9F0] rounded-xl p-5 shadow-xs h-full overflow-y-auto deuropa-scroll flex flex-col gap-4 border border-[#0F372F]/25">
            {/* Luscious Lemon Time & Word Requirement Banner */}
            <div className="bg-[#ECBC6B] border border-[#0F372F]/40 text-[#0F372F] font-extrabold text-xs sm:text-sm px-4 py-2.5 rounded">
              Zeit: 70 Minuten | Mindestens 350 Wörter
            </div>

            {/* Topic Switcher Tabs (Thema 1 / Thema 2) */}
            {topics.length > 1 && (
              <div className="flex items-center gap-2">
                {topics.map((_t, idx) => {
                  const isSelected = selectedTopicIdx === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => onSelectTopic(idx)}
                      className={`px-3.5 py-1.5 rounded-lg text-xs font-extrabold border transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-[#0F372F] text-[#ECBC6B] border-[#0F372F]'
                          : 'bg-[#F4E9D3] hover:bg-[#ECBC6B] text-[#0F372F] border-[#0F372F]/35'
                      }`}
                    >
                      Thema {idx + 1} {isSelected ? '(Aktiv)' : ''}
                    </button>
                  );
                })}
              </div>
            )}

            {/* Storm Green Bordered Prompt Box */}
            <div className="border-2 border-[#0F372F] p-5 bg-[#FDF9F0] text-[#0F372F] space-y-4">
              <h2 className="text-base sm:text-lg font-extrabold text-center text-[#0F372F]">
                Schreiben: Wissenschaftliche Erörterung (Thema {selectedTopicIdx + 1})
              </h2>

              <p className="text-xs sm:text-[13.5px] text-[#0F372F] leading-relaxed">
                Sie nehmen an einem akademischen Seminar teil und sollen eine wissenschaftliche
                Stellungnahme zu folgendem Thema verfassen:
              </p>

              <div className="p-3.5 rounded bg-[#ECBC6B]/35 border-l-4 border-[#0F372F] text-sm font-extrabold text-[#0F372F] leading-snug">
                „{activeTopic.replace(/^Thema\s*[AB12]:\s*/i, '')}“
              </div>

              <div className="text-xs sm:text-[13.5px] font-extrabold text-[#0F372F]">
                Behandeln Sie folgende Punkte:
              </div>

              <ul className="list-disc pl-5 space-y-2 text-xs sm:text-[13.5px] text-[#0F372F] leading-relaxed">
                <li>
                  Formulieren Sie eine präzise Einleitung, die in die aktuelle Relevanz der
                  Fragestellung einführt.
                </li>
                <li>
                  Legen Sie gewichtige Pro- und Contra-Argumente dar und veranschaulichen Sie diese
                  anhand konkreter akademischer oder gesellschaftlicher Beispiele.
                </li>
                <li>
                  Diskutieren Sie mögliche Konsequenzen für Hochschulen, Studierende oder die
                  Gesellschaft.
                </li>
                <li>
                  Ziehen Sie eine begründete Schlussfolgerung und vertreten Sie überzeugend Ihren
                  eigenen Standpunkt.
                </li>
              </ul>
            </div>

            {/* Auxiliary C1 Tools Bar (Musteraufsatz + Redemittel Toggle) */}
            <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
              <button
                type="button"
                onClick={() => setShowRedemittel((v) => !v)}
                className="px-3 py-1.5 rounded-lg border border-[#0F372F]/40 bg-[#F4E9D3] hover:bg-[#ECBC6B] text-[#0F372F] text-xs font-extrabold flex items-center gap-1.5 cursor-pointer"
              >
                <BookOpen className="w-3.5 h-3.5 text-[#0F372F]" />
                <span>{showRedemittel ? 'C1 Redemittel verbergen' : 'C1 Redemittel anzeigen'}</span>
              </button>

              <button
                type="button"
                onClick={loadSampleC1Essay}
                className="px-3 py-1.5 rounded-lg border border-[#0F372F] bg-[#0F372F] hover:bg-[#14473D] text-[#ECBC6B] text-xs font-extrabold flex items-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-[#ECBC6B]" />
                <span>C1 Musteraufsatz laden (350+ Wörter)</span>
              </button>
            </div>

            {/* Collapsible C1 Redemittel */}
            {showRedemittel && (
              <div className="border border-[#0F372F]/30 rounded-lg p-3.5 bg-[#F4E9D3] space-y-3">
                {C1_REDEMITTEL.map((group, gIdx) => (
                  <div key={gIdx}>
                    <div className="text-[11px] font-extrabold text-[#0F372F] mb-1">
                      {group.category}
                    </div>
                    <div className="space-y-1">
                      {group.phrases.map((phrase, pIdx) => (
                        <button
                          key={pIdx}
                          type="button"
                          onClick={() =>
                            insertAtCursor(
                              (essayText.endsWith(' ') || !essayText ? '' : ' ') + phrase
                            )
                          }
                          className="w-full text-left p-2 rounded bg-[#FDF9F0] hover:bg-[#ECBC6B] border border-[#0F372F]/25 text-xs text-[#0F372F] transition-colors cursor-pointer"
                        >
                          + {phrase}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Evaluation Result Panel (Only shown in Review Mode after unified exam submission) */}
            {isReviewMode && (
              <div className="border border-[#0F372F]/30 rounded-lg p-4 bg-[#F4E9D3] space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-[#0F372F]" />
                    <span className="text-xs font-extrabold text-[#0F372F] uppercase">
                      telc C1 Bewertungskriterien (Max. 48 Punkte)
                    </span>
                  </div>
                  <span className="font-mono-tabular text-xs font-extrabold bg-[#0F372F] text-[#ECBC6B] px-2.5 py-0.5 rounded">
                    {localCriteria.total} / 48 Pkt.
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2 bg-[#FDF9F0] rounded border border-[#0F372F]/25">
                    <div className="text-[#0F372F]/75">I. Aufgabenbewältigung</div>
                    <div className="font-extrabold text-[#0F372F]">
                      {localCriteria.aufgabenbewaeltigung} / 12 Pkt.
                    </div>
                  </div>
                  <div className="p-2 bg-[#FDF9F0] rounded border border-[#0F372F]/25">
                    <div className="text-[#0F372F]/75">II. Kommunikative Gestaltung</div>
                    <div className="font-extrabold text-[#0F372F]">
                      {localCriteria.kommunikativeGestaltung} / 12 Pkt.
                    </div>
                  </div>
                  <div className="p-2 bg-[#FDF9F0] rounded border border-[#0F372F]/25">
                    <div className="text-[#0F372F]/75">III. Formale Richtigkeit</div>
                    <div className="font-extrabold text-[#0F372F]">
                      {localCriteria.korrektheit} / 12 Pkt.
                    </div>
                  </div>
                  <div className="p-2 bg-[#FDF9F0] rounded border border-[#0F372F]/25">
                    <div className="text-[#0F372F]/75">IV. Wortschatz &amp; Spektrum</div>
                    <div className="font-extrabold text-[#0F372F]">
                      {localCriteria.wortschatz} / 12 Pkt.
                    </div>
                  </div>
                </div>

                <div className="space-y-1 text-xs text-[#0F372F]">
                  {(showUzbekHints ? localCriteria.feedbackUz : localCriteria.feedbackDe).map(
                    (msg, i) => (
                      <div key={i}>{msg}</div>
                    )
                  )}
                </div>

                {aiLoading && (
                  <div className="text-xs font-extrabold text-[#0F372F] flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 animate-spin" />
                    <span>KI-Prüfer analysiert Ihren Aufsatz...</span>
                  </div>
                )}
                {aiError && (
                  <div className="p-2 rounded bg-[#0F372F] text-xs text-[#ECBC6B]">
                    {aiError}
                  </div>
                )}
                {aiFeedback && (
                  <div className="p-3 rounded bg-[#FDF9F0] border border-[#0F372F]/25 text-xs text-[#0F372F] whitespace-pre-wrap leading-relaxed">
                    {aiFeedback}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* RIGHT CARD: Storm Green Header ("Wörter: 0  Zeichen: 0" + Luscious Lemon "Text überprüfen") + Warm Cream Textarea */}
          <div className="bg-[#FDF9F0] rounded-xl shadow-xs h-full overflow-hidden flex flex-col border border-[#0F372F]/25">
            {/* Storm Green Bar at Top of Right Column */}
            <div className="bg-[#0F372F] text-[#ECBC6B] px-4 py-2.5 flex flex-wrap items-center justify-between gap-2 shrink-0">
              <div className="flex items-center gap-4 text-xs sm:text-sm font-extrabold tracking-wide">
                <span>
                  Wörter: <strong className="font-mono-tabular">{localCriteria.wordCount}</strong>
                  <span className="text-[#ECBC6B]/80 font-normal"> / 350</span>
                </span>
                <span>
                  Zeichen: <strong className="font-mono-tabular">{essayText.length}</strong>
                </span>
              </div>
            </div>

            {/* Subtle German Umlaut Bar */}
            <div className="px-4 py-1.5 bg-[#F4E9D3] border-b border-[#0F372F]/20 flex items-center justify-between gap-2 flex-wrap shrink-0">
              <div className="flex items-center gap-1 flex-wrap">
                <span className="text-[11px] text-[#0F372F] font-semibold mr-1">Sonderzeichen:</span>
                {GERMAN_CHARS.map((ch) => (
                  <button
                    key={ch}
                    type="button"
                    disabled={isReviewMode}
                    onClick={() => insertAtCursor(ch)}
                    className="w-6 h-6 rounded border border-[#0F372F]/35 bg-[#FDF9F0] hover:bg-[#ECBC6B] text-xs font-mono-tabular font-extrabold text-[#0F372F] cursor-pointer"
                  >
                    {ch}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                {localCriteria.wordCount >= 350 && (
                  <span className="text-[11px] font-extrabold text-[#0F372F] flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    350+ Wörter erreicht
                  </span>
                )}
                {essayText.length > 0 && !isReviewMode && (
                  <button
                    type="button"
                    onClick={() => onChangeEssay('')}
                    className="p-1 rounded text-[#0F372F]/70 hover:text-[#0F372F] cursor-pointer"
                    title="Text löschen"
                  >
                    <Trash2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Full-Height Warm Cream Textarea */}
            <textarea
              ref={textareaRef}
              aria-label="Aufsatz Textfeld"
              disabled={isReviewMode}
              value={essayText}
              onChange={(e) => onChangeEssay(e.target.value)}
              placeholder="Fangen Sie hier an zu schreiben..."
              className="flex-1 w-full p-4 sm:p-5 bg-[#FDF9F0] text-[#0F372F] placeholder-[#0F372F]/50 text-sm leading-relaxed resize-none focus:outline-none deuropa-scroll"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
