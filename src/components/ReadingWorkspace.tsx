import React, { useState, useRef, useEffect, useMemo } from 'react';
import {
  Bookmark,
  CheckCircle2,
  XCircle,
  Languages,
  ChevronDown,
  ChevronUp,
  Send,
  RotateCcw,
  Home,
  X
} from 'lucide-react';
import { ExamTab, normalizeLv2Html, QuestionResult } from '../utils/examLogic';
import { UZBEK_READING_GUIDES_BY_TITLE } from '../data/uzbekStudyGuides';

interface ReadingWorkspaceProps {
  variantId: string;
  activeTab: ExamTab;
  rData: any;
  userAnswers: Record<string, string>;
  flaggedQuestions: Record<string, boolean>;
  activeQuestionId: number;
  isReviewMode: boolean;
  showUzbekHints: boolean;
  questionResults?: Record<number, QuestionResult>;
  onSelectAnswer: (questionId: number, value: string) => void;
  onToggleFlag: (questionId: number) => void;
  onFocusQuestion: (questionId: number) => void;
  onSubmitExam?: () => void;
  onResetModule?: () => void;
  onBackToStart?: () => void;
}

interface ParsedLv2Paragraph {
  letter: string;
  html: string;
}

export const ReadingWorkspace: React.FC<ReadingWorkspaceProps> = ({
  variantId,
  activeTab,
  rData,
  userAnswers,
  flaggedQuestions,
  activeQuestionId,
  isReviewMode,
  showUzbekHints,
  onSelectAnswer,
  onToggleFlag,
  onFocusQuestion,
  onSubmitExam,
  onResetModule,
  onBackToStart
}) => {
  const [showUzbekPanel, setShowUzbekPanel] = useState<boolean>(false);
  const [dragOverGap, setDragOverGap] = useState<string | number | null>(null);
  const leftPaneRef = useRef<HTMLDivElement>(null);
  const rightPaneRef = useRef<HTMLDivElement>(null);

  // Reset scroll to top when switching module tabs or variants
  useEffect(() => {
    if (leftPaneRef.current) leftPaneRef.current.scrollTop = 0;
    if (rightPaneRef.current) rightPaneRef.current.scrollTop = 0;
  }, [activeTab, variantId]);

  // Scroll right-pane question card into view when activeQuestionId changes
  useEffect(() => {
    const firstQForTab: Record<string, number> = { lv1: 1, lv2: 7, lv3: 13, sp: 25 };
    if (firstQForTab[activeTab] === activeQuestionId) {
      if (rightPaneRef.current) rightPaneRef.current.scrollTop = 0;
      return;
    }
    const qEl = document.getElementById(`qcard_${activeQuestionId}`);
    if (qEl && rightPaneRef.current) {
      qEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }, [activeQuestionId, activeTab]);

  const renderUzbekStudyCollapsible = (modData: any) => {
    if (!showUzbekHints || !modData) return null;
    const fallbackGuide: any = UZBEK_READING_GUIDES_BY_TITLE[modData.title] || {};
    const vocab: Array<{ de: string; uz: string }> =
      modData.uzbekVocab || fallbackGuide.uzbekVocab || fallbackGuide.vocab || [];
    const paragraphs: Array<{ label: string; uz: string }> =
      modData.uzbekParagraphs || fallbackGuide.uzbekParagraphs || fallbackGuide.paragraphs || [];
    const summary: string = modData.uzbekSummary || fallbackGuide.uzbekSummary || '';

    if (vocab.length === 0 && paragraphs.length === 0 && !summary) return null;

    return (
      <div className="hidden mb-3 rounded-xl border border-[#0F372F]/30 bg-[#FDF9F0] overflow-hidden shadow-2xs shrink-0">
        <div
          onClick={() => setShowUzbekPanel((p) => !p)}
          className="px-4 py-2 bg-[#ECBC6B] hover:bg-[#D9A754] text-[#0F372F] flex items-center justify-between cursor-pointer select-none transition-colors"
        >
          <div className="flex items-center gap-2 text-xs font-extrabold">
            <Languages className="w-4 h-4 text-[#0F372F]" />
            <span>
              🇺🇿 O‘zbekcha Tarjima, Abzatslar Mazmuni va Muhim Lug‘at ({vocab.length} ta C1 so‘z)
            </span>
          </div>
          <div className="flex items-center gap-2">
            {rData?.pdfSource && (
              <a
                href={rData.pdfSource}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="px-2.5 py-0.5 rounded bg-[#0F372F] hover:bg-[#14473D] text-[11px] font-bold text-[#ECBC6B]"
              >
                📄 Asl PDF
              </a>
            )}
            <span className="text-[11px] font-bold text-[#0F372F]">
              {showUzbekPanel ? 'Yopish' : 'Ochish'}
            </span>
            {showUzbekPanel ? (
              <ChevronUp className="w-4 h-4 text-[#0F372F]" />
            ) : (
              <ChevronDown className="w-4 h-4 text-[#0F372F]" />
            )}
          </div>
        </div>

        {showUzbekPanel && (
          <div className="p-4 space-y-3 text-xs text-[#0F372F] max-h-64 overflow-y-auto deuropa-scroll bg-[#F4E9D3] border-t border-[#0F372F]/20">
            {summary && (
              <div className="p-3 rounded-lg bg-[#FDF9F0] border border-[#0F372F]/20 leading-relaxed">
                <strong className="text-[#0F372F] font-extrabold">📌 Qisqacha mazmun: </strong>
                {summary}
              </div>
            )}

            {vocab.length > 0 && (
              <div>
                <div className="font-extrabold text-[#0F372F] uppercase tracking-wider text-[11px] mb-1.5">
                  📚 Muhim C1 so‘z va iboralar (Nemischa – O‘zbekcha):
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5">
                  {vocab.map((item, idx) => (
                    <div
                      key={idx}
                      className="px-2.5 py-1.5 rounded bg-[#FDF9F0] border border-[#0F372F]/20 flex items-baseline justify-between gap-2"
                    >
                      <span className="font-bold text-[#0F372F]">{item.de}</span>
                      <span className="text-[#0F372F]/80 text-right">{item.uz}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {paragraphs.length > 0 && (
              <div>
                <div className="font-extrabold text-[#0F372F] uppercase tracking-wider text-[11px] mb-1.5">
                  📖 Abzatslar bo‘yicha o‘zbekcha tarjima:
                </div>
                <div className="space-y-1.5">
                  {paragraphs.map((p, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-lg bg-[#FDF9F0] border border-[#0F372F]/20 leading-relaxed"
                    >
                      <span className="font-bold bg-[#0F372F] text-[#ECBC6B] px-1.5 py-0.5 rounded mr-1.5 text-[11px]">
                        [{p.label}]
                      </span>
                      <span>{p.uz}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  // Parse LV1 HTML into segments around <span class="text-gap">[ 1 ]</span> .. [ 6 ]
  const lv1Segments = useMemo(() => {
    const rawHtml: string = rData?.lv1?.text || '';
    const parts = rawHtml.split(/<span class="text-gap">\[\s*(\d+)\s*\]<\/span>/g);
    const result: Array<{ type: 'html' | 'gap'; content: string; gapId?: number }> = [];
    for (let i = 0; i < parts.length; i++) {
      if (i % 2 === 0) {
        if (parts[i]) {
          result.push({ type: 'html', content: parts[i] });
        }
      } else {
        const gId = Number(parts[i]);
        result.push({ type: 'gap', content: parts[i], gapId: gId });
      }
    }
    return result;
  }, [rData?.lv1?.text]);

  // Parse LV2 HTML into paragraphs A-E
  const lv2Paragraphs = useMemo<ParsedLv2Paragraph[]>(() => {
    const normalized = normalizeLv2Html(rData?.lv2);
    const regex =
      /<div class="text-paragraph"(?: data-para="([A-E])")?>\s*(?:<span class="para-tag">\[(?:Abschnitt|Absatz)\s+([A-E])\]<\/span>)?([\s\S]*?)<\/div>/gi;
    const matches: ParsedLv2Paragraph[] = [];
    let m: RegExpExecArray | null;
    while ((m = regex.exec(normalized)) !== null) {
      const letter = (m[1] || m[2] || '').toUpperCase() || String.fromCharCode(65 + matches.length);
      const inner = (m[3] || '').trim();
      matches.push({ letter, html: inner });
    }
    if (matches.length === 0 && normalized) {
      return ['A', 'B', 'C', 'D', 'E'].map((ltr, idx) => ({
        letter: ltr,
        html: idx === 0 ? normalized : ''
      })).filter((p) => p.html);
    }
    return matches;
  }, [rData?.lv2]);

  // Build interactive Sprachbausteine HTML with Storm Green / Luscious Lemon number badges
  const buildDeuropaSpHtml = () => {
    const rawHtml: string = rData?.sp?.text || '';
    const questions: Array<{ id: number; ans: string }> = rData?.sp?.questions || [];

    return rawHtml.replace(/<strong>\((\d+)\)<\/strong>/g, (_match, numStr) => {
      const qId = Number(numStr);
      const displayNum = qId;
      const saved = userAnswers[`${variantId}_q${qId}`] || '';
      const qObj = questions.find((q) => q.id === qId);
      const correct = qObj?.ans || '';
      const isCurrent = activeQuestionId === qId;
      const isCorrect = saved && saved === correct;

      let statusClass = '';
      if (isReviewMode) {
        statusClass = isCorrect ? 'gap-correct' : 'gap-wrong';
      } else if (isCurrent) {
        statusClass = 'gap-active';
      } else if (saved) {
        statusClass = 'gap-answered';
      }

      let label = `${displayNum}`;
      if (saved) {
        label = `${displayNum}: ${saved}`;
      }
      if (isReviewMode) {
        label = isCorrect
          ? `✓ ${displayNum}: ${saved}`
          : `✗ ${displayNum}: ${saved || '—'} → ${correct}`;
      }

      return `<button type="button" data-gap-id="${qId}" class="deuropa-sp-gap ${statusClass}" title="Lücke ${qId}">${label}</button>`;
    });
  };

  const handleSpLeftClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const gapBtn = target.closest('[data-gap-id]') as HTMLElement | null;
    if (gapBtn) {
      const gid = Number(gapBtn.getAttribute('data-gap-id'));
      if (!Number.isNaN(gid)) {
        onFocusQuestion(gid);
      }
    }
  };

  // ============================================================================
  // 1. LESEN TEIL 1 — DEUROPA FORMAT IN STORM GREEN (#0F372F) & LUSCIOUS LEMON (#ECBC6B)
  // ============================================================================
  if (activeTab === 'lv1') {
    const options: Array<{ key?: string; k?: string; text?: string; t?: string; uz?: string }> =
      rData?.lv1?.options || [];
    const ansMap = rData?.lv1?.answers || rData?.lv1?.ans || {};

    const handleAssignLv1Option = (optKey: string) => {
      if (isReviewMode) return;
      const targetGap =
        activeQuestionId >= 1 && activeQuestionId <= 6 ? activeQuestionId : 1;
      onSelectAnswer(targetGap, optKey);
      for (let nextG = 1; nextG <= 6; nextG++) {
        if (nextG !== targetGap && !(userAnswers[`${variantId}_q${nextG}`] || '').trim()) {
          onFocusQuestion(nextG);
          break;
        }
      }
    };

    return (
      <div className="flex-1 overflow-hidden flex flex-col bg-[#F4E9D3] px-3 sm:px-6 py-3">
        <div className="max-w-[1420px] w-full mx-auto flex-1 flex flex-col overflow-hidden min-h-0">
          {/* Storm Green Header Banner with Luscious Lemon Title */}
          <div className="bg-[#0F372F] text-[#ECBC6B] py-3 px-6 rounded-xl border border-[#ECBC6B]/40 shadow-xs mb-3 flex items-center justify-between gap-4 shrink-0">
            <div className="w-8 hidden sm:block" />
            <h1 className="text-base sm:text-xl font-extrabold text-center tracking-tight flex-1 text-[#ECBC6B]">
              Lesen Teil 1 - {rData.lv1.title}
            </h1>
            <button
              type="button"
              onClick={() => setShowUzbekPanel((p) => !p)}
              className="hidden px-2.5 py-1 rounded-lg bg-[#ECBC6B] hover:bg-[#D9A754] text-[#0F372F] text-xs font-extrabold items-center gap-1.5 shrink-0 cursor-pointer"
              title="O'zbekcha lug'at va tarjimani ko'rish"
            >
              <Languages className="w-3.5 h-3.5" />
              <span className="hidden md:inline">UZ Lug‘at</span>
            </button>
          </div>

          {renderUzbekStudyCollapsible(rData.lv1)}

          {/* Two-Column Card Container */}
          <div className="bg-[#FDF9F0] border border-[#0F372F]/25 rounded-xl p-4 sm:p-5 shadow-xs flex-1 grid grid-cols-1 lg:grid-cols-12 gap-5 overflow-hidden min-h-0">
            {/* Left Column: Text with Inline Dashed Dropzones ("Antwort hier ablegen") */}
            <div
              ref={leftPaneRef}
              className="lg:col-span-6 h-full overflow-y-auto deuropa-scroll pr-2 sm:pr-4 text-[#0F372F] text-[14.5px] leading-[1.65]"
            >
              {lv1Segments.map((seg, idx) => {
                if (seg.type === 'html') {
                  return (
                    <span
                      key={`seg_${idx}`}
                      className="telc-reading-prose inline"
                      dangerouslySetInnerHTML={{ __html: seg.content }}
                    />
                  );
                }

                const qId = seg.gapId || 1;
                const saved = (userAnswers[`${variantId}_q${qId}`] || '').toUpperCase();
                const correct = String(ansMap[qId] || ansMap[String(qId)] || '').toUpperCase();
                const isCorrect = Boolean(saved && saved === correct);
                const isFocused = activeQuestionId === qId;
                const isDraggedOver = dragOverGap === qId;

                const matchedOpt = options.find(
                  (o) => (o.key || o.k || '').toUpperCase() === saved
                );
                const correctOpt = options.find(
                  (o) => (o.key || o.k || '').toUpperCase() === correct
                );
                const optText = matchedOpt ? matchedOpt.text || matchedOpt.t || '' : '';

                return (
                  <div
                    key={`gap_${qId}`}
                    id={`qcard_${qId}`}
                    onClick={() => onFocusQuestion(qId)}
                    onDragOver={(e) => {
                      e.preventDefault();
                      if (!isReviewMode) setDragOverGap(qId);
                    }}
                    onDragLeave={() => setDragOverGap(null)}
                    onDrop={(e) => {
                      e.preventDefault();
                      setDragOverGap(null);
                      if (isReviewMode) return;
                      const droppedKey = e.dataTransfer.getData('text/plain').toUpperCase();
                      if (droppedKey) {
                        onSelectAnswer(qId, droppedKey);
                        onFocusQuestion(qId);
                      }
                    }}
                    className={`my-3.5 rounded-lg border-2 border-dashed p-3.5 transition-all cursor-pointer select-none ${
                      isReviewMode
                        ? isCorrect
                          ? 'border-[#0F372F] bg-[#ECBC6B]/45 text-[#0F372F]'
                          : 'border-[#0F372F] bg-[#0F372F] text-[#ECBC6B]'
                        : isDraggedOver
                        ? 'border-[#0F372F] bg-[#ECBC6B] scale-[1.01]'
                        : isFocused
                        ? 'border-[#0F372F] bg-[#ECBC6B]/55'
                        : saved
                        ? 'border-[#0F372F] bg-[#ECBC6B]/35'
                        : 'border-[#0F372F]/45 bg-[#F4E9D3] hover:border-[#0F372F] hover:bg-[#ECBC6B]/30'
                    }`}
                  >
                    {!saved && !isReviewMode ? (
                      <div className="flex items-center justify-between gap-2 text-[#0F372F]/80 italic text-sm">
                        <span className="hidden text-[11px] not-italic font-extrabold text-[#ECBC6B] px-2 py-0.5 rounded bg-[#0F372F]">
                          Lücke {qId}
                        </span>
                        <span className="flex-1 text-center font-medium">Antwort hier ablegen</span>
                        <span className="hidden text-[11px] not-italic font-bold text-[#0F372F]">
                          {isFocused ? '● Aktiv' : ''}
                        </span>
                      </div>
                    ) : (
                      <div className="flex flex-col gap-1.5 text-left not-italic">
                        <div className="flex items-start justify-between gap-2">
                          <div className="text-sm font-semibold leading-snug">
                            <span className="inline-block font-extrabold bg-[#0F372F] text-[#ECBC6B] text-xs px-2 py-0.5 rounded mr-2">
                              {qId} · {saved || '—'}
                            </span>
                            {optText}
                          </div>
                          {!isReviewMode && saved && (
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                onSelectAnswer(qId, '');
                              }}
                              className="p-1 rounded bg-[#0F372F]/10 hover:bg-[#0F372F] hover:text-[#ECBC6B] text-[#0F372F] shrink-0 cursor-pointer"
                              title="Antwort entfernen"
                            >
                              <X className="w-3.5 h-3.5" />
                            </button>
                          )}
                        </div>

                        {isReviewMode && (
                          <div className="text-xs font-bold pt-1 border-t border-current/25 flex items-center gap-1.5">
                            {isCorrect ? (
                              <>
                                <CheckCircle2 className="w-4 h-4 shrink-0" />
                                <span>Richtig (+2 Punkte)</span>
                              </>
                            ) : (
                              <div className="space-y-1">
                                <div className="flex items-center gap-1">
                                  <XCircle className="w-4 h-4 shrink-0" />
                                  <span>
                                    Falsch · Richtige Lösung: <strong>{correct}</strong>
                                  </span>
                                </div>
                                {correctOpt && (
                                  <div className="font-normal italic opacity-90">
                                    „{correctOpt.text || correctOpt.t}“
                                  </div>
                                )}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Right Column: Luscious Lemon / Cream Option Bars */}
            <div
              ref={rightPaneRef}
              className="lg:col-span-6 h-full overflow-y-auto deuropa-scroll pl-1 pr-2 space-y-2.5"
            >
              {options.map((opt) => {
                const key = (opt.key || opt.k || '').toUpperCase();
                const text = opt.text || opt.t || '';
                let usedInGap: number | null = null;
                for (let i = 1; i <= 6; i++) {
                  if ((userAnswers[`${variantId}_q${i}`] || '').toUpperCase() === key) {
                    usedInGap = i;
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
                    onClick={() => handleAssignLv1Option(key)}
                    className={`rounded-lg px-4 py-3.5 text-center transition-all border select-none ${
                      usedInGap
                        ? 'bg-[#0F372F] border-[#0F372F] text-[#ECBC6B] cursor-pointer shadow-xs'
                        : 'bg-[#ECBC6B]/45 hover:bg-[#ECBC6B]/75 border-[#0F372F]/30 text-[#0F372F] cursor-grab active:cursor-grabbing shadow-2xs'
                    }`}
                  >
                    <div className="text-[13.5px] font-semibold leading-snug">
                      {text}
                    </div>

                    {opt.uz && (
                      <div className="hidden text-[11.5px] opacity-85 mt-1.5 font-normal">
                        🇺🇿 {opt.uz}
                      </div>
                    )}

                    {/* Quick Gap Assignment Pills [1..6] — hidden per user request */}
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="hidden mt-2 pt-1.5 border-t border-current/20 items-center justify-center gap-1.5 flex-wrap"
                    >
                      <span className="text-[11px] font-extrabold mr-1">
                        Satz {key} → Lücke:
                      </span>
                      {[1, 2, 3, 4, 5, 6].map((gNum) => {
                        const isAssignedHere = usedInGap === gNum;
                        return (
                          <button
                            key={gNum}
                            type="button"
                            disabled={isReviewMode}
                            onClick={() => {
                              onSelectAnswer(gNum, isAssignedHere ? '' : key);
                              onFocusQuestion(gNum);
                            }}
                            className={`w-6 h-6 rounded text-[11px] font-extrabold transition-colors cursor-pointer border ${
                              isAssignedHere
                                ? 'bg-[#ECBC6B] text-[#0F372F] border-[#ECBC6B] shadow-2xs'
                                : 'bg-[#FDF9F0] hover:bg-[#0F372F] hover:text-[#ECBC6B] text-[#0F372F] border-[#0F372F]/40'
                            }`}
                          >
                            {gNum}
                          </button>
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
  // 2. LESEN TEIL 2 — DEUROPA FORMAT IN STORM GREEN (#0F372F) & LUSCIOUS LEMON (#ECBC6B)
  // ============================================================================
  if (activeTab === 'lv2') {
    const questions: Array<{ id: number; text?: string; q?: string; ans?: string; uz?: string; expl?: string }> =
      rData?.lv2?.questions || [];

    const handleDropStatementIntoPara = (paraLetter: string, qId: number) => {
      if (isReviewMode) return;
      onSelectAnswer(qId, paraLetter);
      onFocusQuestion(qId);
    };

    return (
      <div className="flex-1 overflow-hidden flex flex-col bg-[#F4E9D3] px-3 sm:px-6 py-3">
        <div className="max-w-[1420px] w-full mx-auto flex-1 flex flex-col overflow-hidden min-h-0">
          {/* Storm Green Header Banner with Luscious Lemon Title */}
          <div className="bg-[#0F372F] text-[#ECBC6B] py-3 px-6 rounded-xl border border-[#ECBC6B]/40 shadow-xs mb-3 flex items-center justify-between gap-4 shrink-0">
            <div className="w-8 hidden sm:block" />
            <h1 className="text-base sm:text-xl font-extrabold text-center tracking-tight flex-1 text-[#ECBC6B]">
              Lesen Teil 2: {rData.lv2.title}
            </h1>
            <button
              type="button"
              onClick={() => setShowUzbekPanel((p) => !p)}
              className="hidden px-2.5 py-1 rounded-lg bg-[#ECBC6B] hover:bg-[#D9A754] text-[#0F372F] text-xs font-extrabold items-center gap-1.5 shrink-0 cursor-pointer"
            >
              <Languages className="w-3.5 h-3.5" />
              <span className="hidden md:inline">UZ Lug‘at</span>
            </button>
          </div>

          {renderUzbekStudyCollapsible(rData.lv2)}

          {/* Two-Column Container */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-5 overflow-hidden min-h-0">
            {/* Left Column: Bordered Paragraph Cards with "Hier Antwort ablegen" Dropzone + Storm Green Text */}
            <div
              ref={leftPaneRef}
              className="lg:col-span-6 bg-[#FDF9F0] border border-[#0F372F]/25 rounded-xl p-4 shadow-xs h-full overflow-y-auto deuropa-scroll space-y-4"
            >
              {lv2Paragraphs.map((para) => {
                const assignedQuestions = questions.filter(
                  (q) => (userAnswers[`${variantId}_q${q.id}`] || '').toUpperCase() === para.letter
                );
                const isDraggedOver = dragOverGap === `para_${para.letter}`;

                return (
                  <div
                    key={para.letter}
                    className="border border-[#0F372F]/35 rounded-lg p-4 bg-[#FDF9F0] shadow-2xs"
                  >
                    {/* Top Dashed Dropzone inside each Paragraph Card ("Hier Antwort ablegen") */}
                    <div
                      onDragOver={(e) => {
                        e.preventDefault();
                        if (!isReviewMode) setDragOverGap(`para_${para.letter}`);
                      }}
                      onDragLeave={() => setDragOverGap(null)}
                      onDrop={(e) => {
                        e.preventDefault();
                        setDragOverGap(null);
                        if (isReviewMode) return;
                        const droppedQId = Number(e.dataTransfer.getData('text/plain'));
                        if (droppedQId >= 7 && droppedQId <= 12) {
                          handleDropStatementIntoPara(para.letter, droppedQId);
                        }
                      }}
                      onClick={() => {
                        if (!isReviewMode && activeQuestionId >= 7 && activeQuestionId <= 12) {
                          handleDropStatementIntoPara(para.letter, activeQuestionId);
                        }
                      }}
                      className={`rounded-lg border-2 border-dashed p-4 mb-3.5 text-center transition-all cursor-pointer ${
                        isDraggedOver
                          ? 'border-[#0F372F] bg-[#ECBC6B]'
                          : assignedQuestions.length > 0
                          ? 'border-[#0F372F] bg-[#ECBC6B]/45'
                          : 'border-[#0F372F]/45 bg-[#F4E9D3] hover:border-[#0F372F] hover:bg-[#ECBC6B]/35'
                      }`}
                    >
                      {assignedQuestions.length === 0 ? (
                        <div className="text-[#0F372F]/80 italic text-xs sm:text-sm font-medium">
                          Hier Antwort ablegen{' '}
                          <span className="hidden not-italic font-extrabold text-[#0F372F] text-xs ml-1">
                            (Abschnitt {para.letter})
                          </span>
                        </div>
                      ) : (
                        <div className="space-y-2 text-left">
                          {assignedQuestions.map((aq) => {
                            const correct = String(aq.ans || '').toUpperCase();
                            const isCorrect = para.letter === correct;
                            return (
                              <div
                                key={aq.id}
                                className={`p-2.5 rounded-md border text-xs flex items-start justify-between gap-2 ${
                                  isReviewMode
                                    ? isCorrect
                                      ? 'bg-[#ECBC6B] border-[#0F372F] text-[#0F372F]'
                                      : 'bg-[#0F372F] border-[#0F372F] text-[#ECBC6B]'
                                    : 'bg-[#0F372F] border-[#0F372F] text-[#ECBC6B] shadow-2xs'
                                }`}
                              >
                                <div>
                                  <span className="font-extrabold mr-1.5">
                                    #{aq.id}:
                                  </span>
                                  <span>{aq.text || aq.q}</span>
                                  {isReviewMode && !isCorrect && (
                                    <span className="ml-2 font-extrabold underline">
                                      (Richtig: Abschnitt {correct})
                                    </span>
                                  )}
                                </div>
                                {!isReviewMode && (
                                  <button
                                    type="button"
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      onSelectAnswer(aq.id, '');
                                    }}
                                    className="p-0.5 rounded hover:bg-[#ECBC6B] hover:text-[#0F372F] text-[#ECBC6B] shrink-0 cursor-pointer"
                                    title="Zuordnung entfernen"
                                  >
                                    <X className="w-3.5 h-3.5" />
                                  </button>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>

                    {/* Paragraph Text in Storm Green (#0F372F) */}
                    <div className="text-[#0F372F] text-[13.5px] leading-[1.62] font-normal">
                      <span className="hidden font-extrabold bg-[#0F372F] text-[#ECBC6B] px-1.5 py-0.5 rounded text-xs mr-1.5">
                        [Abschnitt {para.letter}]
                      </span>
                      <span dangerouslySetInnerHTML={{ __html: para.html }} />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Column: Luscious Lemon Statement Bars with Checkboxes */}
            <div
              ref={rightPaneRef}
              className="lg:col-span-6 bg-[#FDF9F0] border border-[#0F372F]/25 rounded-xl p-4 shadow-xs h-full overflow-y-auto deuropa-scroll space-y-2.5"
            >
              {questions.map((q) => {
                const qId = q.id;
                const saved = (userAnswers[`${variantId}_q${qId}`] || '').toUpperCase();
                const correct = String(q.ans || '').toUpperCase();
                const isCorrect = Boolean(saved && saved === correct);
                const isFocused = activeQuestionId === qId;
                const rawQText = q.text || q.q || '';

                return (
                  <div
                    key={qId}
                    id={`qcard_${qId}`}
                    draggable={!isReviewMode}
                    onDragStart={(e) => {
                      e.dataTransfer.setData('text/plain', String(qId));
                    }}
                    onClick={() => onFocusQuestion(qId)}
                    className={`rounded-lg p-3.5 border transition-all cursor-grab active:cursor-grabbing ${
                      isReviewMode
                        ? isCorrect
                          ? 'bg-[#ECBC6B]/60 border-[#0F372F] text-[#0F372F]'
                          : 'bg-[#0F372F] border-[#0F372F] text-[#ECBC6B]'
                        : isFocused
                        ? 'bg-[#ECBC6B]/75 border-[#0F372F] ring-2 ring-[#0F372F]/40 text-[#0F372F]'
                        : 'bg-[#ECBC6B]/40 hover:bg-[#ECBC6B]/65 border-[#0F372F]/30 text-[#0F372F]'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={Boolean(saved)}
                        readOnly
                        className="mt-1 w-4 h-4 rounded border-[#0F372F] accent-[#0F372F] shrink-0 pointer-events-none"
                      />
                      <div className="flex-1">
                        <div className="text-[13.5px] font-medium leading-snug">
                          <span className="font-extrabold mr-1.5">{qId}.</span>
                          {rawQText}
                        </div>
                        {q.uz && (
                          <div className="hidden text-[11.5px] opacity-85 mt-1">🇺🇿 {q.uz}</div>
                        )}

                        {/* Quick Paragraph Selector Buttons A-E — hidden per user request */}
                        <div
                          onClick={(e) => e.stopPropagation()}
                          className="hidden mt-2.5 pt-2 border-t border-current/20 items-center justify-between gap-2 flex-wrap"
                        >
                          <div className="flex items-center gap-1.5">
                            <span className="text-[11px] font-bold mr-1">
                              Abschnitt:
                            </span>
                            {['A', 'B', 'C', 'D', 'E'].map((ltr) => {
                              const isSelected = saved === ltr;
                              const isRightOpt = isReviewMode && correct === ltr;
                              return (
                                <button
                                  key={ltr}
                                  type="button"
                                  disabled={isReviewMode}
                                  onClick={() => onSelectAnswer(qId, isSelected ? '' : ltr)}
                                  className={`w-7 h-6 rounded text-xs font-extrabold border transition-colors cursor-pointer ${
                                    isRightOpt
                                      ? 'bg-[#ECBC6B] text-[#0F372F] border-[#0F372F] ring-2 ring-[#0F372F]'
                                      : isSelected && isReviewMode && !isCorrect
                                      ? 'bg-[#0F372F] text-[#ECBC6B] border-[#ECBC6B] line-through'
                                      : isSelected
                                      ? 'bg-[#0F372F] text-[#ECBC6B] border-[#0F372F]'
                                      : 'bg-[#FDF9F0] hover:bg-[#0F372F] hover:text-[#ECBC6B] text-[#0F372F] border-[#0F372F]/40'
                                  }`}
                                >
                                  {ltr}
                                </button>
                              );
                            })}
                          </div>

                          {isReviewMode && (
                            <span className="text-xs font-extrabold">
                              {isCorrect ? '✓ Richtig (+2P)' : `✗ Lösung: Abschnitt ${correct}`}
                            </span>
                          )}
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
  // 3. LESEN TEIL 3 — DEUROPA FORMAT IN STORM GREEN (#0F372F) & LUSCIOUS LEMON (#ECBC6B)
  // ============================================================================
  if (activeTab === 'lv3') {
    const questions: Array<any> = rData?.lv3?.questions || [];

    return (
      <div className="flex-1 overflow-hidden flex flex-col bg-[#F4E9D3] px-3 sm:px-6 py-3">
        <div className="max-w-[1360px] w-full mx-auto flex-1 flex flex-col overflow-hidden min-h-0">
          {renderUzbekStudyCollapsible(rData.lv3)}

          <div className="bg-[#FDF9F0] rounded-xl shadow-xs border border-[#0F372F]/25 flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden min-h-0">
            {/* Left Column: Bold Storm Green Title + Clean Storm Green Article Text */}
            <div
              ref={leftPaneRef}
              className="lg:col-span-6 h-full overflow-y-auto deuropa-scroll p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-[#0F372F]/20"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <h1 className="text-xl sm:text-2xl font-extrabold text-[#0F372F] leading-tight">
                  {rData.lv3.title}
                </h1>
                <button
                  type="button"
                  onClick={() => setShowUzbekPanel((p) => !p)}
                  className="hidden px-2.5 py-1 rounded-md bg-[#ECBC6B] hover:bg-[#D9A754] text-[#0F372F] text-xs font-extrabold items-center gap-1 shrink-0 cursor-pointer"
                >
                  <Languages className="w-3.5 h-3.5 text-[#0F372F]" />
                  <span>UZ</span>
                </button>
              </div>

              <div
                className="telc-reading-prose text-[#0F372F] text-[14.5px] leading-[1.68]"
                dangerouslySetInnerHTML={{
                  __html:
                    rData.lv3.text ||
                    '<p>Lesen Sie den Fachtext und lösen Sie die Aufgaben 13 bis 24.</p>'
                }}
              />
            </div>

            {/* Right Column: Luscious Lemon Tinted Question Cards with Vertical Radio Buttons */}
            <div
              ref={rightPaneRef}
              className="lg:col-span-6 h-full overflow-y-auto deuropa-scroll p-5 sm:p-6 space-y-3.5 bg-[#FDF9F0]"
            >
              {questions.map((q) => {
                const qId = q.id;
                const saved = (userAnswers[`${variantId}_q${qId}`] || '').toUpperCase();
                const correct = String(q.ans || '').toUpperCase();
                const isCorrect = Boolean(saved && saved === correct);
                const isFocused = activeQuestionId === qId;

                const radioChoices = q.opts
                  ? q.opts.map((optText: string, idx: number) => ({
                      key: ['A', 'B', 'C'][idx],
                      label: optText.replace(/^[A-Ca-c]\)\s*/, '')
                    }))
                  : [
                      { key: 'R', label: 'richtig (R)' },
                      { key: 'F', label: 'falsch (F)' },
                      { key: 'X', label: 'nicht im Text (X)' }
                    ];

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
                          {qId}. {q.text || q.q}
                        </div>
                        {q.uz && (
                          <div className="hidden text-xs opacity-85 mt-1">🇺🇿 {q.uz}</div>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onToggleFlag(qId);
                        }}
                        className="opacity-75 hover:opacity-100 p-1 shrink-0 cursor-pointer"
                        title="Aufgabe merken"
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

                    <div className="space-y-1.5">
                      {radioChoices.map((choice: { key: string; label: string }) => {
                        const isSelected = saved === choice.key;
                        const isRightOpt = isReviewMode && correct === choice.key;
                        return (
                          <label
                            key={choice.key}
                            onClick={(e) => e.stopPropagation()}
                            className={`flex items-start gap-2.5 py-1 px-2 rounded cursor-pointer text-[13.5px] transition-colors ${
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
                              name={`lv3_q_${qId}`}
                              disabled={isReviewMode}
                              checked={isSelected}
                              onChange={() => onSelectAnswer(qId, choice.key)}
                              className="mt-1 w-3.5 h-3.5 accent-[#0F372F] cursor-pointer shrink-0"
                            />
                            <span className="leading-snug">{choice.label}</span>
                          </label>
                        );
                      })}
                    </div>

                    {isReviewMode && (
                      <div className="mt-2.5 pt-2 border-t border-current/25 text-xs flex items-center justify-between">
                        <span className="font-extrabold">
                          {isCorrect
                            ? '✓ Richtig (+2 Punkte)'
                            : `✗ Falsch · Richtige Lösung: ${correct}`}
                        </span>
                        {q.expl && <span className="opacity-90">{q.expl}</span>}
                      </div>
                    )}
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
  // 4. SPRACHBAUSTEINE — DEUROPA FORMAT IN STORM GREEN (#0F372F) & LUSCIOUS LEMON (#ECBC6B)
  // ============================================================================
  const spQuestions: Array<any> = rData?.sp?.questions || [];

  return (
    <div className="flex-1 overflow-hidden flex flex-col bg-[#F4E9D3] px-3 sm:px-6 py-3">
      <div className="max-w-[1380px] w-full mx-auto flex-1 flex flex-col overflow-hidden min-h-0">
        {renderUzbekStudyCollapsible(rData.sp)}

        <div className="bg-[#FDF9F0] rounded-xl shadow-xs border border-[#0F372F]/25 flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden min-h-0">
          {/* Left Column: Clean Text with Storm Green Number Badges */}
          <div
            ref={leftPaneRef}
            onClick={handleSpLeftClick}
            className="lg:col-span-6 h-full overflow-y-auto deuropa-scroll p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-[#0F372F]/20"
          >
            <div className="flex items-start justify-between gap-3 mb-4">
              <h1 className="text-lg sm:text-xl font-extrabold text-[#0F372F] leading-snug">
                {rData.sp.title}
              </h1>
              <button
                type="button"
                onClick={() => setShowUzbekPanel((p) => !p)}
                className="hidden px-2.5 py-1 rounded-md bg-[#ECBC6B] hover:bg-[#D9A754] text-[#0F372F] text-xs font-extrabold items-center gap-1 shrink-0 cursor-pointer"
              >
                <Languages className="w-3.5 h-3.5 text-[#0F372F]" />
                <span>UZ</span>
              </button>
            </div>

            <div
              className="telc-reading-prose text-[#0F372F] text-[14.5px] leading-[1.85]"
              dangerouslySetInnerHTML={{ __html: buildDeuropaSpHtml() }}
            />
          </div>

          {/* Right Column: Numbered Luscious Lemon Pill Trays with Rounded-Full Option Pills */}
          <div
            ref={rightPaneRef}
            className="lg:col-span-6 h-full overflow-y-auto deuropa-scroll p-5 sm:p-6 space-y-3.5 bg-[#FDF9F0]"
          >
            {spQuestions.map((q) => {
              const qId = q.id;
              const saved = userAnswers[`${variantId}_q${qId}`] || '';
              const correct = q.ans || '';
              const isCorrect = Boolean(saved && saved === correct);
              const isFocused = activeQuestionId === qId;

              return (
                <div
                  key={qId}
                  id={`qcard_${qId}`}
                  onClick={() => onFocusQuestion(qId)}
                  className="space-y-1.5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-extrabold text-[#0F372F]">
                      {qId}.
                    </span>
                    {isReviewMode && (
                      <span className="text-xs font-extrabold text-[#0F372F]">
                        {isCorrect ? '✓ Richtig (+1P)' : `✗ Lösung: ${correct}`}
                      </span>
                    )}
                  </div>

                  {/* Pill Tray in Luscious Lemon tint */}
                  <div
                    className={`p-2.5 rounded-xl transition-all flex flex-wrap items-center gap-2 border ${
                      isFocused
                        ? 'bg-[#ECBC6B]/65 border-[#0F372F] ring-2 ring-[#0F372F]'
                        : 'bg-[#ECBC6B]/35 border-[#0F372F]/25'
                    }`}
                  >
                    {(q.opts || []).map((optWord: string, idx: number) => {
                      const isSelected = saved === optWord;
                      const isRightOpt = isReviewMode && correct === optWord;

                      return (
                        <button
                          key={`${qId}_${idx}`}
                          type="button"
                          disabled={isReviewMode}
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectAnswer(qId, isSelected ? '' : optWord);
                          }}
                          className={`rounded-full px-4 py-1.5 text-xs sm:text-[13px] border transition-all cursor-pointer ${
                            isRightOpt
                              ? 'bg-[#0F372F] text-[#ECBC6B] border-[#0F372F] font-extrabold shadow-xs'
                              : isSelected && isReviewMode && !isCorrect
                              ? 'bg-[#ECBC6B] text-[#0F372F] border-[#0F372F] line-through'
                              : isSelected
                              ? 'bg-[#0F372F] text-[#ECBC6B] border-[#0F372F] font-extrabold shadow-xs'
                              : 'bg-[#FDF9F0] hover:bg-[#0F372F] hover:text-[#ECBC6B] text-[#0F372F] border-[#0F372F]/35 font-semibold shadow-2xs'
                          }`}
                        >
                          {optWord}
                        </button>
                      );
                    })}
                  </div>

                  {q.expl && (isFocused || isReviewMode) && (
                    <div className="hidden text-[11.5px] text-[#0F372F]/85 pl-1">
                      💡 {q.expl}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
