import React, { useState, useEffect, useRef } from 'react';
import {
  Volume2,
  Square,
  Play,
  Bookmark,
  Eye,
  EyeOff,
  CheckCircle2,
  XCircle,
  Presentation,
  Radio,
  Send,
  RotateCcw,
  Home,
  X
} from 'lucide-react';
import { ExamTab, QuestionResult } from '../utils/examLogic';
import { hv1Pools, hv2Pools, hv3Pools } from '../data/telcExamData';

interface ListeningWorkspaceProps {
  variantId: string;
  activeTab: ExamTab;
  lMap: any;
  userAnswers: Record<string, string>;
  flaggedQuestions: Record<string, boolean>;
  activeQuestionId: number;
  isReviewMode: boolean;
  isExamMode: boolean;
  showUzbekHints: boolean;
  questionResults?: Record<number, QuestionResult>;
  onSelectAnswer: (questionId: number, value: string) => void;
  onToggleFlag: (questionId: number) => void;
  onFocusQuestion: (questionId: number) => void;
  onSubmitExam?: () => void;
  onResetModule?: () => void;
  onBackToStart?: () => void;
}

export const ListeningWorkspace: React.FC<ListeningWorkspaceProps> = ({
  variantId,
  activeTab,
  lMap,
  userAnswers,
  flaggedQuestions,
  activeQuestionId,
  isReviewMode,
  isExamMode,
  showUzbekHints,
  questionResults,
  onSelectAnswer,
  onToggleFlag,
  onFocusQuestion,
  onSubmitExam,
  onResetModule,
  onBackToStart
}) => {
  const [audioRate, setAudioRate] = useState<number>(1.0);
  const [isPlayingAudio, setIsPlayingAudio] = useState<boolean>(false);
  const [activeAudioLabel, setActiveAudioLabel] = useState<string>('');
  const [showTranscript, setShowTranscript] = useState<boolean>(!isExamMode);
  const [showHv3ModelKey, setShowHv3ModelKey] = useState<boolean>(false);
  const [dragOverSpk, setDragOverSpk] = useState<number | null>(null);
  const rightPaneRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setShowTranscript(!isExamMode || isReviewMode);
  }, [isExamMode, isReviewMode]);

  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [activeTab, variantId]);

  const stopAudio = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlayingAudio(false);
    setActiveAudioLabel('');
  };

  const speakGermanText = (text: string, label: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = 'de-DE';
    utter.rate = audioRate;
    utter.onstart = () => {
      setIsPlayingAudio(true);
      setActiveAudioLabel(label);
    };
    utter.onend = () => {
      setIsPlayingAudio(false);
      setActiveAudioLabel('');
    };
    utter.onerror = () => {
      setIsPlayingAudio(false);
      setActiveAudioLabel('');
    };
    window.speechSynthesis.speak(utter);
  };

  const d1 = hv1Pools[lMap.hv1];
  const d2 = hv2Pools[lMap.hv2];
  const d3 = hv3Pools[lMap.hv3];

  const playFullSectionAudio = () => {
    if (activeTab === 'hv1' && d1) {
      const fullScript =
        `Hörverstehen Teil 1: Globalverstehen. Thema: ${d1.title}. Sie hören nun acht Sprecherinnen und Sprecher. ` +
        d1.speakers
          .map((s: any) => `${s.sp}, Aufgabe ${s.id}: ${s.tr}`)
          .join(' ... Nächster Sprecher: ');
      speakGermanText(fullScript, 'HV Teil 1 · Alle 8 Sprecher');
    } else if (activeTab === 'hv2' && d2) {
      const fullInterview =
        `Hörverstehen Teil 2: Detailverstehen. Radio-Interview zum Thema ${d2.title}. ` +
        d2.questions
          .map((q: any) => {
            const ansIdx = ['A', 'B', 'C'].indexOf((q.ans || '').toUpperCase());
            const rightText = ansIdx >= 0 && q.opts?.[ansIdx] ? q.opts[ansIdx] : '';
            return `Zu Aufgabe ${q.id}: ${q.q} Im Gespräch wird betont, dass ${rightText.replace(/^[A-C]\)\s*/, '')}`;
          })
          .join(' ... Weiter im Interview: ');
      speakGermanText(fullInterview, 'HV Teil 2 · Komplettes Radio-Interview');
    } else if (activeTab === 'hv3' && d3) {
      const fullLecture =
        `Hörverstehen Teil 3: Informationstransfer. Wissenschaftlicher Vortrag zum Thema ${d3.title}. Bitte ergänzen Sie die Stichpunkte auf den Präsentationsfolien für die Aufgaben 65 bis 74. ` +
        d3.items
          .map(
            (it: any) =>
              `Zu Punkt ${it.id}, ${it.label || it.q}: Hier lautet der zentrale Fachbegriff: ${it.ans || it.a}.`
          )
          .join(' ... Nächste Folie: ');
      speakGermanText(fullLecture, 'HV Teil 3 · Kompletter Vortrag');
    }
  };

  const renderAudioControls = () => (
    <div className="flex items-center gap-2 flex-wrap">
      <div className="flex items-center bg-[#14473D] border border-[#ECBC6B]/40 rounded-lg p-0.5 text-xs">
        {[0.9, 1.0, 1.1].map((spd) => (
          <button
            key={spd}
            type="button"
            onClick={() => setAudioRate(spd)}
            className={`px-2 py-1 rounded-md font-mono-tabular font-bold transition-colors cursor-pointer ${
              audioRate === spd
                ? 'bg-[#ECBC6B] text-[#0F372F]'
                : 'text-[#ECBC6B] hover:bg-[#ECBC6B]/20'
            }`}
          >
            {spd}x
          </button>
        ))}
      </div>

      {!isPlayingAudio ? (
        <button
          type="button"
          onClick={playFullSectionAudio}
          className="px-3.5 py-1.5 rounded-lg bg-[#ECBC6B] hover:bg-[#D9A754] text-[#0F372F] text-xs font-extrabold flex items-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
        >
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>Audio starten</span>
        </button>
      ) : (
        <button
          type="button"
          onClick={stopAudio}
          className="px-3.5 py-1.5 rounded-lg bg-[#ECBC6B] hover:bg-[#D9A754] text-[#0F372F] border-2 border-[#0F372F] text-xs font-extrabold flex items-center gap-1.5 shadow-2xs transition-colors cursor-pointer"
        >
          <Square className="w-3.5 h-3.5 fill-current" />
          <span>Stopp ({activeAudioLabel.slice(0, 14)})</span>
        </button>
      )}
    </div>
  );

  // ============================================================================
  // 1. HÖREN TEIL 1 — DEUROPA DROPZONE FORMAT (AUFGABEN 47–54)
  // ============================================================================
  if (activeTab === 'hv1' && d1) {
    return (
      <div className="flex-1 overflow-hidden flex flex-col bg-[#F4E9D3] px-3 sm:px-6 py-3">
        <div className="max-w-[1420px] w-full mx-auto flex-1 flex flex-col overflow-hidden min-h-0">
          {/* Storm Green Header Banner with Integrated Audio Player */}
          <div className="bg-[#0F372F] text-[#ECBC6B] py-3 px-5 rounded-xl border border-[#ECBC6B]/40 shadow-xs mb-3 flex flex-wrap items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-2.5">
              <Volume2 className="w-5 h-5 text-[#ECBC6B] shrink-0" />
              <h1 className="text-base sm:text-lg font-extrabold tracking-tight text-[#ECBC6B]">
                Hören Teil 1: {d1.title}
              </h1>
            </div>

            <div className="flex items-center gap-2 flex-wrap">
              <button
                type="button"
                onClick={() => setShowTranscript((v) => !v)}
                className="px-2.5 py-1.5 rounded-lg bg-[#14473D] hover:bg-[#ECBC6B] hover:text-[#0F372F] text-[#ECBC6B] border border-[#ECBC6B]/40 text-xs font-bold flex items-center gap-1.5 cursor-pointer"
              >
                {showTranscript ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                <span>{showTranscript ? 'Transkript aus' : 'Transkript an'}</span>
              </button>
              {renderAudioControls()}
            </div>
          </div>

          {/* Two-Column Card Container */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-5 overflow-hidden min-h-0">
            {/* Left Column: Sprecher 1–8 Cards with Dashed Dropzone ("Hier Antwort ablegen") */}
            <div className="lg:col-span-6 bg-[#FDF9F0] border border-[#0F372F]/25 rounded-xl p-4 shadow-xs h-full overflow-y-auto deuropa-scroll space-y-3.5">
              {d1.speakers.map((spk: any) => {
                const qId = spk.id;
                const saved = (userAnswers[`${variantId}_q${qId}`] || '').toUpperCase();
                const correct = String(spk.ans || '').toUpperCase();
                const isCorrect = Boolean(saved && saved === correct);
                const isFocused = activeQuestionId === qId;
                const isDraggedOver = dragOverSpk === qId;
                const matchedSt = d1.statements.find(
                  (st: any) => st.k.toUpperCase() === saved
                );

                return (
                  <div
                    key={qId}
                    id={`qcard_${qId}`}
                    onClick={() => onFocusQuestion(qId)}
                    className={`border rounded-lg p-4 transition-all ${
                      isFocused
                        ? 'border-[#0F372F] bg-[#ECBC6B]/25 ring-1 ring-[#0F372F]'
                        : 'border-[#0F372F]/30 bg-[#FDF9F0]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="text-sm font-extrabold text-[#0F372F]">
                        {spk.sp} (Aufgabe {qId})
                      </span>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          speakGermanText(spk.tr, `${spk.sp} (${qId})`);
                        }}
                        className="px-3 py-1 rounded-md bg-[#0F372F] hover:bg-[#14473D] text-[#ECBC6B] text-xs font-extrabold flex items-center gap-1.5 cursor-pointer"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Anhören</span>
                      </button>
                    </div>

                    {/* Dashed Dropzone Box */}
                    <div
                      onDragOver={(e) => {
                        e.preventDefault();
                        if (!isReviewMode) setDragOverSpk(qId);
                      }}
                      onDragLeave={() => setDragOverSpk(null)}
                      onDrop={(e) => {
                        e.preventDefault();
                        setDragOverSpk(null);
                        if (isReviewMode) return;
                        const droppedKey = e.dataTransfer.getData('text/plain').toUpperCase();
                        if (droppedKey) {
                          onSelectAnswer(qId, droppedKey);
                          onFocusQuestion(qId);
                        }
                      }}
                      className={`rounded-lg border-2 border-dashed p-3.5 text-center transition-all ${
                        isReviewMode
                          ? isCorrect
                            ? 'border-[#0F372F] bg-[#ECBC6B]/60 text-[#0F372F]'
                            : 'border-[#0F372F] bg-[#0F372F] text-[#ECBC6B]'
                          : isDraggedOver
                          ? 'border-[#0F372F] bg-[#ECBC6B]'
                          : saved
                          ? 'border-[#0F372F] bg-[#ECBC6B]/45'
                          : 'border-[#0F372F]/40 bg-[#F4E9D3]'
                      }`}
                    >
                      {!saved && !isReviewMode ? (
                        <span className="text-[#0F372F]/80 italic text-xs sm:text-sm font-medium">
                          Hier Antwort ablegen (Aufgabe {qId})
                        </span>
                      ) : (
                        <div className="flex items-start justify-between gap-2 text-left text-xs sm:text-sm">
                          <div>
                            <span className="font-extrabold bg-[#0F372F] text-[#ECBC6B] px-1.5 py-0.5 rounded mr-1.5">
                              [{saved || '—'}]
                            </span>
                            <span className="font-semibold">
                              {matchedSt?.t || ''}
                            </span>
                            {isReviewMode && !isCorrect && (
                              <div className="text-xs font-extrabold underline mt-1">
                                ✗ Richtige Lösung: Aussage {correct}
                              </div>
                            )}
                          </div>
                          {!isReviewMode && saved && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                onSelectAnswer(qId, '');
                              }}
                              className="p-0.5 rounded hover:bg-[#0F372F] hover:text-[#ECBC6B] shrink-0 cursor-pointer"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>
                      )}
                    </div>

                    {showTranscript && (
                      <div className="mt-3 pt-2.5 border-t border-[#0F372F]/20 text-[13px] text-[#0F372F] leading-relaxed">
                        „{spk.tr}“
                        {showUzbekHints && spk.uz && (
                          <div className="text-xs text-[#0F372F]/80 mt-1">🇺🇿 {spk.uz}</div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column: Luscious Lemon Statement Bars A–J */}
            <div
              ref={rightPaneRef}
              className="lg:col-span-6 bg-[#FDF9F0] border border-[#0F372F]/25 rounded-xl p-4 shadow-xs h-full overflow-y-auto deuropa-scroll space-y-2.5"
            >
              {d1.statements.map((st: any) => {
                const key = st.k.toUpperCase();
                let assignedSpk: number | null = null;
                for (let id = 47; id <= 54; id++) {
                  if ((userAnswers[`${variantId}_q${id}`] || '').toUpperCase() === key) {
                    assignedSpk = id;
                    break;
                  }
                }

                return (
                  <div
                    key={key}
                    draggable={!isReviewMode}
                    onDragStart={(e) => {
                      e.dataTransfer.setData('text/plain', key);
                    }}
                    onClick={() => {
                      if (!isReviewMode) {
                        const targetSpk =
                          activeQuestionId >= 47 && activeQuestionId <= 54 ? activeQuestionId : 47;
                        onSelectAnswer(targetSpk, key);
                        for (let nextS = 47; nextS <= 54; nextS++) {
                          if (
                            nextS !== targetSpk &&
                            !(userAnswers[`${variantId}_q${nextS}`] || '').trim()
                          ) {
                            onFocusQuestion(nextS);
                            break;
                          }
                        }
                      }
                    }}
                    className={`rounded-lg p-3.5 border transition-all cursor-grab active:cursor-grabbing ${
                      assignedSpk
                        ? 'bg-[#0F372F] border-[#0F372F] text-[#ECBC6B]'
                        : 'bg-[#ECBC6B]/40 hover:bg-[#ECBC6B]/65 border-[#0F372F]/30 text-[#0F372F]'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={Boolean(assignedSpk)}
                        readOnly
                        className="mt-1 w-4 h-4 rounded border-[#0F372F] accent-[#0F372F] shrink-0 pointer-events-none"
                      />
                      <div className="flex-1">
                        <div className="text-[13.5px] font-semibold leading-snug">
                          <span className="font-extrabold mr-1.5">{key})</span>
                          {st.t}
                        </div>
                        {st.uz && (
                          <div className="hidden text-[11.5px] opacity-85 mt-1">🇺🇿 {st.uz}</div>
                        )}

                        <div
                          onClick={(e) => e.stopPropagation()}
                          className="hidden mt-2 pt-1.5 border-t border-current/20 items-center gap-1 flex-wrap"
                        >
                          <span className="text-[11px] font-bold mr-1">
                            Aufgabe:
                          </span>
                          {[47, 48, 49, 50, 51, 52, 53, 54].map((sId) => {
                            const isHere = assignedSpk === sId;
                            return (
                              <button
                                key={sId}
                                type="button"
                                disabled={isReviewMode}
                                onClick={() => {
                                  onSelectAnswer(sId, isHere ? '' : key);
                                  onFocusQuestion(sId);
                                }}
                                className={`px-2 py-0.5 rounded text-[11px] font-extrabold border transition-colors cursor-pointer ${
                                  isHere
                                    ? 'bg-[#ECBC6B] text-[#0F372F] border-[#ECBC6B]'
                                    : 'bg-[#FDF9F0] hover:bg-[#0F372F] hover:text-[#ECBC6B] text-[#0F372F] border-[#0F372F]/40'
                                }`}
                              >
                                {sId}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ============================================================================
  // 2. HÖREN TEIL 2 — DEUROPA RADIO CARDS FORMAT (AUFGABEN 55–64)
  // ============================================================================
  if (activeTab === 'hv2' && d2) {
    return (
      <div className="flex-1 overflow-hidden flex flex-col bg-[#F4E9D3] px-3 sm:px-6 py-3">
        <div className="max-w-[1360px] w-full mx-auto flex-1 flex flex-col overflow-hidden min-h-0">
          <div className="bg-[#FDF9F0] rounded-xl shadow-xs border border-[#0F372F]/25 flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden min-h-0">
            {/* Left Column: Radio Interview Player & Overview */}
            <div className="lg:col-span-5 h-full overflow-y-auto deuropa-scroll p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-[#0F372F]/20 space-y-5">
              <div className="bg-[#0F372F] text-[#ECBC6B] border border-[#ECBC6B]/40 rounded-xl p-5 space-y-3 shadow-xs">
                <div className="flex items-center gap-2.5">
                  <Radio className="w-5 h-5 text-[#ECBC6B] shrink-0" />
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#ECBC6B]/90">
                    Hörverstehen Teil 2 · Aufgaben 55–64
                  </span>
                </div>
                <h1 className="text-lg sm:text-xl font-extrabold text-[#ECBC6B] leading-snug">
                  {d2.title}
                </h1>
                <div className="pt-1">{renderAudioControls()}</div>
              </div>

              <div className="text-[#0F372F] text-sm leading-relaxed space-y-3">
                <p>
                  Sie hören ein Radio-Interview mit einer Expertin / einem Experten. Entscheiden Sie
                  bei jeder Aufgabe (<strong>55–64</strong>), welche Aussage (<strong>A, B</strong>{' '}
                  oder <strong>C</strong>) dem Inhalt des Gesprächs entspricht.
                </p>
                {showUzbekHints && (
                  <div className="p-4 rounded-lg bg-[#ECBC6B]/35 border border-[#0F372F]/25 text-xs text-[#0F372F] space-y-1.5">
                    <div className="font-extrabold text-[#0F372F]">
                      🎧 O‘zbekcha ko‘rsatma (HV Teil 2):
                    </div>
                    {d2.uzbekIntro && <p>{d2.uzbekIntro}</p>}
                    <p>
                      Har bir savol yonidagi <strong>„▶ Audio“</strong> tugmasi orqali tegishli
                      intervyu parchasini alohida eshitishingiz mumkin.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Luscious Lemon Radio Question Cards */}
            <div
              ref={rightPaneRef}
              className="lg:col-span-7 h-full overflow-y-auto deuropa-scroll p-5 sm:p-6 space-y-3.5 bg-[#FDF9F0]"
            >
              {d2.questions.map((q: any) => {
                const qId = q.id;
                const saved = (userAnswers[`${variantId}_q${qId}`] || '').toUpperCase();
                const correct = String(q.ans || '').toUpperCase();
                const isCorrect = Boolean(saved && saved === correct);
                const isFocused = activeQuestionId === qId;

                return (
                  <div
                    key={qId}
                    id={`qcard_${qId}`}
                    onClick={() => onFocusQuestion(qId)}
                    className={`rounded-lg p-4 transition-all border ${
                      isReviewMode
                        ? isCorrect
                          ? 'bg-[#ECBC6B]/60 border-[#0F372F] text-[#0F372F]'
                          : 'bg-[#0F372F] border-[#0F372F] text-[#ECBC6B]'
                        : isFocused
                        ? 'bg-[#ECBC6B]/70 border-[#0F372F] ring-2 ring-[#0F372F]'
                        : 'bg-[#ECBC6B]/35 hover:bg-[#ECBC6B]/55 border-[#0F372F]/25'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2.5">
                      <div>
                        <div className="text-[14px] font-extrabold leading-snug">
                          {qId}. {q.q}
                        </div>
                        {showUzbekHints && q.uz && (
                          <div className="text-xs opacity-85 mt-1">🇺🇿 {q.uz}</div>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0">
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            const ansIdx = ['A', 'B', 'C'].indexOf(correct);
                            const rightLine =
                              ansIdx >= 0 && q.opts?.[ansIdx] ? q.opts[ansIdx] : '';
                            speakGermanText(
                              `Aufgabe ${qId}: ${q.q} Im Interview wird ausgeführt: ${rightLine.replace(/^[A-C]\)\s*/, '')}`,
                              `Interview ${qId}`
                            );
                          }}
                          className="px-2.5 py-1 rounded bg-[#0F372F] hover:bg-[#14473D] text-[#ECBC6B] text-xs font-extrabold flex items-center gap-1 cursor-pointer"
                        >
                          <Play className="w-3 h-3 fill-current" />
                          <span>Audio</span>
                        </button>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            onToggleFlag(qId);
                          }}
                          className="opacity-75 hover:opacity-100 p-1 cursor-pointer"
                        >
                          <Bookmark
                            className={`w-3.5 h-3.5 ${
                              flaggedQuestions[`${variantId}_q${qId}`]
                                ? 'fill-[#0F372F] text-[#0F372F]'
                                : ''
                            }`}
                          />
                        </button>
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      {(q.opts || []).map((optText: string, idx: number) => {
                        const k = ['A', 'B', 'C'][idx];
                        const isSelected = saved === k;
                        const isRightOpt = isReviewMode && correct === k;
                        const optUz = q.optsUz?.[idx];

                        return (
                          <label
                            key={k}
                            onClick={(e) => e.stopPropagation()}
                            className={`flex items-start gap-2.5 py-1.5 px-2.5 rounded cursor-pointer text-[13.5px] transition-colors ${
                              isRightOpt
                                ? 'bg-[#0F372F] font-extrabold text-[#ECBC6B]'
                                : isSelected && isReviewMode && !isCorrect
                                ? 'bg-[#ECBC6B] line-through text-[#0F372F]'
                                : isSelected
                                ? 'bg-[#0F372F] text-[#ECBC6B] font-bold'
                                : 'hover:bg-[#FDF9F0]/75'
                            }`}
                          >
                            <input
                              type="radio"
                              name={`hv2_q_${qId}`}
                              disabled={isReviewMode}
                              checked={isSelected}
                              onChange={() => onSelectAnswer(qId, k)}
                              className="mt-1 w-3.5 h-3.5 accent-[#0F372F] cursor-pointer shrink-0"
                            />
                            <div className="flex-1">
                              <div>{optText.replace(/^[A-Ca-c]\)\s*/, '')}</div>
                              {showUzbekHints && optUz && (
                                <div className="text-xs opacity-80 mt-0.5">
                                  🇺🇿 {optUz.replace(/^[A-Ca-c]\)\s*/, '')}
                                </div>
                              )}
                            </div>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ============================================================================
  // 3. HÖREN TEIL 3 — DEUROPA LECTURE & INPUT CARDS (AUFGABEN 65–74)
  // ============================================================================
  return (
    <div className="flex-1 overflow-hidden flex flex-col bg-[#F4E9D3] px-3 sm:px-6 py-3">
      <div className="max-w-[1360px] w-full mx-auto flex-1 flex flex-col overflow-hidden min-h-0">
        {d3 && (
          <div className="bg-[#FDF9F0] rounded-xl shadow-xs border border-[#0F372F]/25 flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden min-h-0">
            {/* Left Column: Lecture Audio Player + University Slide */}
            <div className="lg:col-span-6 h-full overflow-y-auto deuropa-scroll p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-[#0F372F]/20 space-y-4">
              <div className="bg-[#0F372F] text-[#ECBC6B] border border-[#ECBC6B]/40 rounded-xl p-5 space-y-3 shadow-xs">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <Presentation className="w-5 h-5 text-[#ECBC6B]" />
                    <span className="text-xs font-extrabold uppercase tracking-wider text-[#ECBC6B]/90">
                      Hörverstehen Teil 3 · Vorlesung (65–74)
                    </span>
                  </div>
                  {isReviewMode && (
                    <button
                      type="button"
                      onClick={() => setShowHv3ModelKey((v) => !v)}
                      className="px-2.5 py-1 rounded bg-[#14473D] hover:bg-[#ECBC6B] hover:text-[#0F372F] text-[#ECBC6B] border border-[#ECBC6B]/40 text-xs font-bold cursor-pointer"
                    >
                      {showHv3ModelKey ? 'Lösung aus' : 'Musterlösung'}
                    </button>
                  )}
                </div>
                <h1 className="text-lg sm:text-xl font-extrabold text-[#ECBC6B]">{d3.title}</h1>
                <div className="pt-1">{renderAudioControls()}</div>
              </div>

              {showUzbekHints && d3.uzbekIntro && (
                <div className="p-3.5 rounded-lg bg-[#ECBC6B]/35 border border-[#0F372F]/25 text-xs text-[#0F372F]">
                  <strong>🎓 Ma’ruza haqida (O‘zbekcha):</strong> {d3.uzbekIntro}
                </div>
              )}

              <div className="border border-[#0F372F]/30 rounded-xl p-4 bg-[#F4E9D3] space-y-2.5">
                <div className="text-xs font-extrabold uppercase tracking-wider text-[#0F372F]">
                  Präsentationsfolie · Übersicht (Aufgaben 65–74)
                </div>
                {d3.items.map((item: any) => {
                  const saved = userAnswers[`${variantId}_q${item.id}`] || '';
                  const modelAns = item.ans || item.a || '';
                  return (
                    <div
                      key={item.id}
                      onClick={() => onFocusQuestion(item.id)}
                      className="p-2.5 rounded-lg bg-[#FDF9F0] border border-[#0F372F]/25 text-xs flex items-center justify-between gap-2 cursor-pointer hover:border-[#0F372F]"
                    >
                      <span className="font-semibold text-[#0F372F]">
                        {item.id}. {item.label || item.q}
                      </span>
                      <span className="font-mono-tabular font-extrabold text-[#0F372F] bg-[#ECBC6B]/50 px-2 py-0.5 rounded">
                        {saved || '______'}
                        {(isReviewMode || showHv3ModelKey) && (
                          <span className="ml-1.5 underline">→ {modelAns}</span>
                        )}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Luscious Lemon Stichwort Input Cards */}
            <div
              ref={rightPaneRef}
              className="lg:col-span-6 h-full overflow-y-auto deuropa-scroll p-5 sm:p-6 space-y-3.5 bg-[#FDF9F0]"
            >
              {d3.items.map((item: any) => {
                const qId = item.id;
                const saved = userAnswers[`${variantId}_q${qId}`] || '';
                const modelAns = item.ans || item.a || '';
                const qRes = questionResults?.[qId];
                const isCorrect = Boolean(qRes?.isCorrect);
                const isFocused = activeQuestionId === qId;

                return (
                  <div
                    key={qId}
                    id={`qcard_${qId}`}
                    onClick={() => onFocusQuestion(qId)}
                    className={`rounded-lg p-4 transition-all border ${
                      isReviewMode
                        ? isCorrect
                          ? 'bg-[#ECBC6B]/60 border-[#0F372F] text-[#0F372F]'
                          : 'bg-[#0F372F] border-[#0F372F] text-[#ECBC6B]'
                        : isFocused
                        ? 'bg-[#ECBC6B]/70 border-[#0F372F] ring-2 ring-[#0F372F]'
                        : 'bg-[#ECBC6B]/35 border-[#0F372F]/25'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <div>
                        <label
                          htmlFor={`hv3_input_${qId}`}
                          className="text-[13.5px] font-extrabold block"
                        >
                          {qId}. {item.label || item.q}
                        </label>
                        {showUzbekHints && item.uz && (
                          <div className="text-xs opacity-85 mt-0.5">🇺🇿 {item.uz}</div>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          speakGermanText(
                            `Punkt ${qId}: ${item.label || item.q} — ${modelAns}.`,
                            `Vortrag ${qId}`
                          );
                        }}
                        className="px-2.5 py-1 rounded bg-[#0F372F] hover:bg-[#14473D] text-[#ECBC6B] text-xs font-extrabold flex items-center gap-1 shrink-0 cursor-pointer"
                      >
                        <Play className="w-3 h-3 fill-current" />
                        <span>Audio</span>
                      </button>
                    </div>

                    <input
                      id={`hv3_input_${qId}`}
                      type="text"
                      disabled={isReviewMode}
                      value={saved}
                      onChange={(e) => onSelectAnswer(qId, e.target.value)}
                      placeholder="Stichwort hier eingeben..."
                      className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-lg border border-[#0F372F]/40 bg-[#FDF9F0] text-[#0F372F] font-semibold focus:outline-none focus:border-[#0F372F]"
                    />

                    {(isReviewMode || showHv3ModelKey) && (
                      <div className="mt-2 text-xs font-extrabold flex items-center gap-1.5">
                        {isReviewMode &&
                          (isCorrect ? (
                            <CheckCircle2 className="w-4 h-4" />
                          ) : (
                            <XCircle className="w-4 h-4" />
                          ))}
                        <span>Musterlösung: {modelAns}</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
