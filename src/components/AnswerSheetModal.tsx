import React from 'react';
import { X, FileSpreadsheet, Bookmark, Check, Download } from 'lucide-react';
import { ExamTab, countEssayWords } from '../utils/examLogic';

interface AnswerSheetModalProps {
  isOpen: boolean;
  variantId: string;
  variantTitle: string;
  userAnswers: Record<string, string>;
  flaggedQuestions: Record<string, boolean>;
  isReviewMode: boolean;
  onClose: () => void;
  onJumpToQuestion: (tab: ExamTab, questionId: number) => void;
}

export const AnswerSheetModal: React.FC<AnswerSheetModalProps> = ({
  isOpen,
  variantId,
  variantTitle,
  userAnswers,
  flaggedQuestions,
  onClose,
  onJumpToQuestion
}) => {
  if (!isOpen) return null;

  const getTabForQuestion = (qId: number): ExamTab => {
    if (qId <= 6) return 'lv1';
    if (qId <= 12) return 'lv2';
    if (qId <= 24) return 'lv3';
    if (qId <= 46) return 'sp';
    if (qId <= 54) return 'hv1';
    if (qId <= 64) return 'hv2';
    return 'hv3';
  };

  const renderRangeGrid = (title: string, start: number, end: number, pointsLabel: string) => {
    const items = [];
    for (let i = start; i <= end; i++) {
      const val = userAnswers[`${variantId}_q${i}`] || '';
      const flagged = Boolean(flaggedQuestions[`${variantId}_q${i}`]);
      items.push(
        <button
          key={i}
          type="button"
          onClick={() => {
            onJumpToQuestion(getTabForQuestion(i), i);
            onClose();
          }}
          className={`p-2 rounded-lg border text-left transition-colors flex items-center justify-between cursor-pointer ${
            val
              ? 'bg-[#0F372F] border-[#0F372F] text-[#ECBC6B]'
              : 'bg-[#F4E9D3] border-[#0F372F]/30 text-[#0F372F] hover:bg-[#ECBC6B]'
          }`}
        >
          <span className="font-mono-tabular text-xs font-extrabold flex items-center gap-1">
            {i}.
            {flagged && <Bookmark className="w-3 h-3 fill-[#ECBC6B] text-[#ECBC6B]" />}
          </span>
          <span className="font-mono-tabular text-xs font-extrabold truncate max-w-[90px]">
            {val || '—'}
          </span>
        </button>
      );
    }

    return (
      <div className="bg-[#FDF9F0] border border-[#0F372F]/25 rounded-xl p-4 shadow-2xs">
        <div className="flex items-center justify-between mb-2.5">
          <h4 className="text-xs font-extrabold text-[#0F372F] uppercase tracking-wider">{title}</h4>
          <span className="text-xs text-[#0F372F] font-mono-tabular font-bold">{pointsLabel}</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2">{items}</div>
      </div>
    );
  };

  const essayWords = countEssayWords(userAnswers[`${variantId}_essay`] || '');

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0F372F]/80 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="telc Antwortbogen S30"
    >
      <div className="bg-[#F4E9D3] border-2 border-[#ECBC6B] rounded-xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl text-[#0F372F]">
        {/* Header */}
        <div className="bg-[#0F372F] text-[#ECBC6B] px-6 py-4 flex items-center justify-between border-b border-[#ECBC6B]/30">
          <div className="flex items-center gap-3">
            <FileSpreadsheet className="w-5 h-5 text-[#ECBC6B]" />
            <div>
              <h3 className="text-base font-extrabold text-[#ECBC6B]">
                Startseite &amp; Antwortbogen S30 Übersicht
              </h3>
              <p className="text-xs text-[#ECBC6B]/80">{variantTitle}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="/assets/aistudio/TELC_C1_Hochschule_ALL_IN_ONE_2710aa1c.html"
              download="TELC_C1_Hochschule_ALL_IN_ONE.html"
              className="px-3 py-1.5 rounded-lg bg-[#ECBC6B] hover:bg-[#D9A754] text-xs font-extrabold text-[#0F372F] flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Original HTML</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Antwortbogen schließen"
              className="p-1.5 rounded hover:bg-[#ECBC6B]/20 text-[#ECBC6B] cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-4">
          {renderRangeGrid('Leseverstehen Teil 1 (Aufgaben 1–6)', 1, 6, '12 Punkte')}
          {renderRangeGrid('Leseverstehen Teil 2 (Aufgaben 7–12)', 7, 12, '12 Punkte')}
          {renderRangeGrid('Leseverstehen Teil 3 (Aufgaben 13–24)', 13, 24, '24 Punkte')}
          {renderRangeGrid('Sprachbausteine (Aufgaben 25–46)', 25, 46, '22 Punkte')}
          {renderRangeGrid('Hörverstehen Teil 1 (Aufgaben 47–54)', 47, 54, '16 Punkte')}
          {renderRangeGrid('Hörverstehen Teil 2 (Aufgaben 55–64)', 55, 64, '20 Punkte')}
          {renderRangeGrid('Hörverstehen Teil 3 (Aufgaben 65–74)', 65, 74, '12 Punkte')}

          <div className="bg-[#FDF9F0] border border-[#0F372F]/25 rounded-xl p-4 flex items-center justify-between shadow-2xs">
            <div>
              <h4 className="text-xs font-extrabold text-[#0F372F] uppercase tracking-wider">
                Schriftlicher Ausdruck (Aufsatz · 48 Punkte)
              </h4>
              <p className="text-xs text-[#0F372F]/80 mt-0.5">
                Aktueller Umfang: <strong>{essayWords} Wörter</strong> (Empfohlen: mind. 350 Wörter)
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                onJumpToQuestion('schreiben', 75);
                onClose();
              }}
              className="px-3.5 py-1.5 rounded-lg bg-[#0F372F] hover:bg-[#14473D] text-[#ECBC6B] text-xs font-extrabold flex items-center gap-1.5 cursor-pointer"
            >
              <Check className="w-3.5 h-3.5" />
              <span>Zum Aufsatz wechseln</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#FDF9F0] px-6 py-3 border-t border-[#0F372F]/20 flex items-center justify-between text-xs text-[#0F372F]">
          <span>Klicken Sie auf eine Aufgabennummer, um direkt zur Aufgabe zu springen.</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#0F372F] text-[#ECBC6B] font-extrabold hover:bg-[#14473D] cursor-pointer"
          >
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
};
