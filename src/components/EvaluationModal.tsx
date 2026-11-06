import React from 'react';
import {
  X,
  Award,
  CheckCircle2,
  XCircle,
  Search,
  RotateCcw
} from 'lucide-react';
import { FullExamEvaluation } from '../utils/examLogic';

interface EvaluationModalProps {
  isOpen: boolean;
  evaluation: FullExamEvaluation | null;
  variantTitle: string;
  onClose: () => void;
  onEnterReviewMode: () => void;
  onResetVariant: () => void;
}

export const EvaluationModal: React.FC<EvaluationModalProps> = ({
  isOpen,
  evaluation,
  variantTitle,
  onClose,
  onEnterReviewMode,
  onResetVariant
}) => {
  if (!isOpen || !evaluation) return null;

  const {
    lv1Score,
    lv2Score,
    lv3Score,
    lvTotal,
    spScore,
    part1Total,
    part1Passed,
    hv1Score,
    hv2Score,
    hv3Score,
    hvTotal,
    writingScore,
    essayCriteria,
    part2Total,
    part2Passed,
    speakingScore,
    speakingPassed,
    grandTotal,
    totalWithSpeaking,
    passed,
    gradeDe,
    gradeUz,
    percentage
  } = evaluation;

  return (
    <div
      className="fixed inset-0 z-50 bg-[#0F372F]/80 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="telc C1 Hochschule Imtihon Natijasi"
    >
      <div className="bg-[#F4E9D3] border-2 border-[#ECBC6B] rounded-xl w-full max-w-2xl max-h-[92vh] flex flex-col overflow-hidden shadow-2xl text-[#0F372F]">
        {/* Header */}
        <div className="bg-[#0F372F] text-[#ECBC6B] px-6 py-4 flex items-center justify-between border-b border-[#ECBC6B]/30">
          <div className="flex items-center gap-3">
            <Award className="w-6 h-6 text-[#ECBC6B]" />
            <div>
              <h3 className="text-base font-extrabold text-[#ECBC6B]">
                telc Deutsch C1 Hochschule · Yagona Yakuniy Natija (Barcha Bo‘limlar)
              </h3>
              <p className="text-xs text-[#ECBC6B]/80">{variantTitle}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Ergebnis schließen"
            className="p-1.5 rounded hover:bg-[#ECBC6B]/20 text-[#ECBC6B] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-5 bg-[#F4E9D3]">
          {/* Status Banner */}
          <div
            className={`p-4 rounded-xl border-2 flex items-start gap-3 ${
              passed
                ? 'bg-[#ECBC6B] border-[#0F372F] text-[#0F372F]'
                : 'bg-[#0F372F] border-[#ECBC6B] text-[#ECBC6B]'
            }`}
          >
            {passed ? (
              <CheckCircle2 className="w-6 h-6 shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-6 h-6 shrink-0 mt-0.5" />
            )}
            <div className="flex-1">
              <div className="text-sm font-extrabold">
                {passed
                  ? `BESTANDEN · TABRIKLAYMIZ! (${gradeDe} · ${totalWithSpeaking} / 214 Ball · ${percentage}%)`
                  : `NICHT BESTANDEN · O‘TISH BALI YETMADI (Yozma: ${grandTotal}/166 · Jami: ${totalWithSpeaking}/214)`}
              </div>
              <div className="text-xs mt-1 leading-relaxed opacity-90">
                {passed ? (
                  <span>
                    Barcha bo‘limlardan minimal 60% talabi bajarildi. Baho: <strong>{gradeUz}</strong>.
                  </span>
                ) : (
                  <span>
                    telc C1 Hochschule qoidasiga ko‘ra o‘tish uchun: 1-Qism (Lesen + Sprachbausteine) kamida{' '}
                    <strong>42 / 70 ball</strong>, 2-Qism (Hören + Schreiben) kamida{' '}
                    <strong>58 / 96 ball</strong> (Yozma jami ≥ 100/166) va Og‘zaki qism (Sprechen) kamida{' '}
                    <strong>29 / 48 ball</strong> bo‘lishi shart.
                  </span>
                )}
              </div>
            </div>
          </div>

          {/* Main Score Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3.5 rounded-xl border border-[#0F372F]/30 bg-[#FDF9F0] text-center shadow-2xs">
              <div className="text-xs font-extrabold text-[#0F372F]/80">1. LV + SP</div>
              <div className="font-mono-tabular text-xl font-extrabold text-[#0F372F] my-1">
                {part1Total} / 70
              </div>
              <div className="text-[11px] font-bold text-[#0F372F]">
                Min: 42 {part1Passed ? '✓' : '✗'}
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-[#0F372F]/30 bg-[#FDF9F0] text-center shadow-2xs">
              <div className="text-xs font-extrabold text-[#0F372F]/80">2. HV + Schreiben</div>
              <div className="font-mono-tabular text-xl font-extrabold text-[#0F372F] my-1">
                {part2Total} / 96
              </div>
              <div className="text-[11px] font-bold text-[#0F372F]">
                Min: 58 {part2Passed ? '✓' : '✗'}
              </div>
            </div>

            <div className="p-3.5 rounded-xl border border-[#0F372F]/30 bg-[#FDF9F0] text-center shadow-2xs">
              <div className="text-xs font-extrabold text-[#0F372F]/80">3. Sprechen</div>
              <div className="font-mono-tabular text-xl font-extrabold text-[#0F372F] my-1">
                {speakingScore} / 48
              </div>
              <div className="text-[11px] font-bold text-[#0F372F]">
                Min: 29 {speakingPassed ? '✓' : '✗'}
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-[#0F372F] text-[#ECBC6B] border border-[#0F372F] text-center shadow-xs">
              <div className="text-xs font-extrabold text-[#ECBC6B]/90">Jami (Gesamt)</div>
              <div className="font-mono-tabular text-xl font-extrabold text-[#ECBC6B] my-1">
                {totalWithSpeaking} / 214
              </div>
              <div className="text-[11px] font-bold text-[#ECBC6B]/90">
                Yozma: {grandTotal}/166
              </div>
            </div>
          </div>

          {/* Detailed Subtest Table */}
          <div className="bg-[#FDF9F0] border border-[#0F372F]/30 rounded-xl p-4 space-y-2.5 text-xs text-[#0F372F] shadow-2xs">
            <div className="font-extrabold text-[#0F372F] uppercase tracking-wider mb-1">
              Barcha 5 ta Bo‘lim Bo‘yicha Batafsil Ballar
            </div>

            <div className="flex items-center justify-between py-1.5 border-b border-[#0F372F]/15">
              <span>
                <strong>1. Leseverstehen</strong> (LV1: {lv1Score}/12 · LV2: {lv2Score}/12 · LV3: {lv3Score}/24)
              </span>
              <span className="font-mono-tabular font-extrabold text-sm bg-[#ECBC6B]/50 text-[#0F372F] px-2 py-0.5 rounded">
                {lvTotal} / 48 Punkte
              </span>
            </div>

            <div className="flex items-center justify-between py-1.5 border-b border-[#0F372F]/15">
              <span>
                <strong>2. Sprachbausteine</strong> (Aufgaben 25–46)
              </span>
              <span className="font-mono-tabular font-extrabold text-sm bg-[#ECBC6B]/50 text-[#0F372F] px-2 py-0.5 rounded">
                {spScore} / 22 Punkte
              </span>
            </div>

            <div className="flex items-center justify-between py-1.5 border-b border-[#0F372F]/15">
              <span>
                <strong>3. Hörverstehen</strong> (HV1: {hv1Score}/16 · HV2: {hv2Score}/20 · HV3: {hv3Score}/12)
              </span>
              <span className="font-mono-tabular font-extrabold text-sm bg-[#ECBC6B]/50 text-[#0F372F] px-2 py-0.5 rounded">
                {hvTotal} / 48 Punkte
              </span>
            </div>

            <div className="flex items-center justify-between py-1.5 border-b border-[#0F372F]/15">
              <span>
                <strong>4. Schriftlicher Ausdruck (Schreiben)</strong> ({essayCriteria.wordCount} Wörter · 4 telc-Kriterien)
              </span>
              <span className="font-mono-tabular font-extrabold text-sm bg-[#ECBC6B]/50 text-[#0F372F] px-2 py-0.5 rounded">
                {writingScore} / 48 Punkte
              </span>
            </div>

            <div className="flex items-center justify-between py-1.5">
              <span>
                <strong>5. Mündliche Prüfung (Sprechen)</strong> (Teil 1A + Teil 1B + Teil 2 + Sprache)
              </span>
              <span className="font-mono-tabular font-extrabold text-sm bg-[#ECBC6B]/50 text-[#0F372F] px-2 py-0.5 rounded">
                {speakingScore} / 48 Punkte
              </span>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-[#FDF9F0] px-6 py-4 border-t border-[#0F372F]/20 flex flex-wrap items-center justify-between gap-2">
          <button
            type="button"
            onClick={onResetVariant}
            className="px-3.5 py-2 rounded-lg border border-[#0F372F]/40 bg-[#F4E9D3] hover:bg-[#ECBC6B] text-[#0F372F] text-xs font-extrabold flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Zurücksetzen</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onEnterReviewMode}
              className="px-4 py-2 rounded-lg bg-[#ECBC6B] hover:bg-[#D9A754] text-[#0F372F] border border-[#0F372F]/40 text-xs font-extrabold flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <Search className="w-4 h-4" />
              <span>Antworten im Text prüfen</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-[#0F372F] hover:bg-[#14473D] text-[#ECBC6B] text-xs font-extrabold cursor-pointer"
            >
              Schließen
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
