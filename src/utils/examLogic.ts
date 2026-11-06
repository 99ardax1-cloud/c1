import { READING_DATA, hv1Pools, hv2Pools, hv3Pools, variantMap } from '../data/telcExamData';

export type ExamTab =
  | 'lv1'
  | 'lv2'
  | 'lv3'
  | 'sp'
  | 'hv1'
  | 'hv2'
  | 'hv3'
  | 'schreiben'
  | 'sprechen';

export interface QuestionResult {
  id: number;
  userAnswer: string;
  correctAnswer: string;
  isCorrect: boolean;
  pointsEarned: number;
  maxPoints: number;
  explanation?: string;
}

export interface EssayCriteriaScore {
  aufgabenbewaeltigung: number; // max 12
  kommunikativeGestaltung: number; // max 12
  korrektheit: number; // max 12
  wortschatz: number; // max 12
  total: number; // max 48
  wordCount: number;
  paragraphCount: number;
  connectorsFound: string[];
  feedbackUz: string[];
  feedbackDe: string[];
}

export interface FullExamEvaluation {
  variantId: string;
  lv1Score: number; // max 12
  lv2Score: number; // max 12
  lv3Score: number; // max 24
  lvTotal: number; // max 48
  spScore: number; // max 22
  part1Total: number; // max 70 (pass >= 42)
  part1Passed: boolean;
  hv1Score: number; // max 16
  hv2Score: number; // max 20
  hv3Score: number; // max 12
  hvTotal: number; // max 48
  writingScore: number; // max 48
  essayCriteria: EssayCriteriaScore;
  part2Total: number; // max 96 (pass >= 58)
  part2Passed: boolean;
  speakingScore: number; // max 48 (pass >= 29)
  speakingPassed: boolean;
  grandTotal: number; // max 166 (pass >= 100)
  totalWithSpeaking: number; // max 214 (pass >= 129)
  passed: boolean;
  gradeDe: string;
  gradeUz: string;
  percentage: number;
  questionResults: Record<number, QuestionResult>;
}

const C1_CONNECTORS = [
  'darüber hinaus',
  'folglich',
  'demzufolge',
  'nichtsdestotrotz',
  'ungeachtet',
  'im hinblick auf',
  'angesichts',
  'zusammenfassend',
  'einerseits',
  'andererseits',
  'allerdings',
  'jedoch',
  'dennoch',
  'außerdem',
  'zudem',
  'nicht zuletzt',
  'schließlich',
  'meines erachtens',
  'lässt sich festhalten',
  'infolgedessen',
  'während',
  'obgleich',
  'indem',
  'sodass'
];

/**
 * Normalizes LV2 HTML so variants that store paragraphs as an object (e.g. Variant 13)
 * render with the exact same HTML structure as variants that store `text`.
 */
export function normalizeLv2Html(lv2: any): string {
  if (!lv2) return '';
  if (typeof lv2.text === 'string' && lv2.text.trim().length > 0) {
    return lv2.text;
  }
  if (lv2.paragraphs && typeof lv2.paragraphs === 'object') {
    return Object.entries(lv2.paragraphs)
      .map(
        ([key, val]) =>
          `<div class="text-paragraph" data-para="${key}"><span class="para-tag">[Abschnitt ${key}]</span> ${val}</div>`
      )
      .join('');
  }
  return '';
}

/**
 * Counts words in an essay accurately.
 */
export function countEssayWords(text: string): number {
  if (!text || !text.trim()) return 0;
  return text.trim().split(/\s+/).filter(Boolean).length;
}

/**
 * Deterministic C1 Hochschule essay rubric analyzer (4 telc criteria, 48 points max).
 */
export function analyzeC1EssayLocal(essayText: string): EssayCriteriaScore {
  const clean = (essayText || '').trim();
  const wordCount = countEssayWords(clean);
  const paragraphs = clean
    ? clean
        .split(/\n\s*\n|\n/)
        .map((p) => p.trim())
        .filter((p) => p.length > 20)
    : [];
  const paragraphCount = paragraphs.length;
  const lower = clean.toLowerCase();

  const connectorsFound = C1_CONNECTORS.filter((c) => lower.includes(c));

  if (wordCount < 20) {
    return {
      aufgabenbewaeltigung: 0,
      kommunikativeGestaltung: 0,
      korrektheit: 0,
      wortschatz: 0,
      total: 0,
      wordCount,
      paragraphCount,
      connectorsFound,
      feedbackUz: [
        'Insho hali yozilmagan yoki juda qisqa (kamida 350 ta so‘z yozish talab etiladi).'
      ],
      feedbackDe: [
        'Der Aufsatz ist noch zu kurz (Mindestwortanzahl für C1 Hochschule: 350 Wörter).'
      ]
    };
  }

  // 1. Aufgabenbewältigung (Task fulfillment & length - max 12)
  let aufgabenbewaeltigung = 4;
  if (wordCount >= 350) aufgabenbewaeltigung = 11;
  else if (wordCount >= 280) aufgabenbewaeltigung = 9;
  else if (wordCount >= 200) aufgabenbewaeltigung = 7;
  else if (wordCount >= 120) aufgabenbewaeltigung = 5;
  if (wordCount >= 370 && paragraphCount >= 4) aufgabenbewaeltigung = 12;

  // 2. Kommunikative Gestaltung (Structure, paragraphs, connectors - max 12)
  let kommunikativeGestaltung = 4;
  const connBonus = Math.min(5, connectorsFound.length);
  const paraBonus = paragraphCount >= 4 ? 3 : paragraphCount >= 3 ? 2 : 0;
  kommunikativeGestaltung = Math.min(12, 4 + connBonus + paraBonus);

  // 3. Korrektheit (Sentence structure complexity, punctuation - max 12)
  const hasSubordinateClauses = /,\s*(dass|weil|obwohl|während|indem|sodass|wenn|da|welche|die|der|das)\b/i.test(clean);
  let korrektheit = wordCount >= 350 ? 10 : wordCount >= 250 ? 8 : 5;
  if (hasSubordinateClauses && wordCount >= 350) korrektheit = 11;

  // 4. Wortschatz (Academic vocabulary diversity - max 12)
  const words = lower.match(/[a-zäöüß]+/g) || [];
  const uniqueRatio = words.length > 0 ? new Set(words).size / words.length : 0;
  let wortschatz = wordCount >= 350 ? 10 : wordCount >= 250 ? 8 : 5;
  if (uniqueRatio > 0.48 && connectorsFound.length >= 4 && wordCount >= 350) {
    wortschatz = 11;
  }

  const total = aufgabenbewaeltigung + kommunikativeGestaltung + korrektheit + wortschatz;

  const feedbackUz: string[] = [];
  const feedbackDe: string[] = [];

  if (wordCount >= 350) {
    feedbackUz.push(`✅ So‘zlar soni talabga javob beradi (${wordCount} / 350+ so‘z).`);
    feedbackDe.push(`✅ Mindestwortanzahl erreicht (${wordCount} / 350+ Wörter).`);
  } else {
    feedbackUz.push(`⚠️ So‘zlar soni kam: ${wordCount} ta so‘z. Yana ${350 - wordCount} ta so‘z qo‘shing.`);
    feedbackDe.push(`⚠️ Noch ${350 - wordCount} Wörter bis zur empfohlenen Mindestlänge von 350 Wörtern.`);
  }

  if (paragraphCount >= 4) {
    feedbackUz.push(`✅ Matn tuzilishi (Einleitung, Hauptteil Pro/Contra, Schluss) abzatslarga to‘g‘ri ajratilgan (${paragraphCount} abzats).`);
    feedbackDe.push(`✅ Klare Absatzgliederung (${paragraphCount} Absätze: Einleitung, Hauptteil, Schluss).`);
  } else {
    feedbackUz.push(`💡 Matnni kamida 4 ta abzatsga (Kirish, Argumentlar Pro/Contra, Xulosa) ajrating.`);
    feedbackDe.push(`💡 Gliedern Sie Ihren Text in mindestens 4 sichtbare Absätze.`);
  }

  if (connectorsFound.length >= 4) {
    feedbackUz.push(`✅ C1 darajasidagi bog‘lovchilar (Konnektoren) faol ishlatilgan (${connectorsFound.slice(0, 6).join(', ')}).`);
    feedbackDe.push(`✅ Gute Verwendung akademischer Konnektoren (${connectorsFound.slice(0, 6).join(', ')}).`);
  } else {
    feedbackUz.push(`💡 Ko‘proq C1 bog‘lovchilarini qo‘shing: "darüber hinaus", "ungeachtet", "folglich", "im Hinblick auf".`);
    feedbackDe.push(`💡 Verwenden Sie mehr C1-Konnektoren wie "darüber hinaus", "folglich", "im Hinblick auf".`);
  }

  return {
    aufgabenbewaeltigung,
    kommunikativeGestaltung,
    korrektheit,
    wortschatz,
    total,
    wordCount,
    paragraphCount,
    connectorsFound,
    feedbackUz,
    feedbackDe
  };
}

/**
 * Evaluates a full exam variant (Tasks 1–74 + Essay) according to official telc C1 Hochschule rules.
 */
export function evaluateExamVariant(
  variantId: string,
  userAnswers: Record<string, string>
): FullExamEvaluation {
  const vKey = String(variantId);
  const rData = READING_DATA[vKey];
  const lMap = variantMap[vKey];

  const questionResults: Record<number, QuestionResult> = {};

  // 1. LV Teil 1 (Tasks 1-6, 2 points each = 12p)
  let lv1Score = 0;
  if (rData?.lv1) {
    const ansMap = rData.lv1.answers || rData.lv1.ans || {};
    const explMap = rData.lv1.explanations || rData.lv1.expl || {};
    for (let i = 1; i <= 6; i++) {
      const u = (userAnswers[`${vKey}_q${i}`] || '').trim();
      const c = String(ansMap[i] || ansMap[String(i)] || '').trim();
      const isCorrect = Boolean(u && c && u.toUpperCase() === c.toUpperCase());
      const pts = isCorrect ? 2 : 0;
      lv1Score += pts;
      questionResults[i] = {
        id: i,
        userAnswer: u,
        correctAnswer: c.toUpperCase(),
        isCorrect,
        pointsEarned: pts,
        maxPoints: 2,
        explanation: explMap[i] || explMap[String(i)] || ''
      };
    }
  }

  // 2. LV Teil 2 (Tasks 7-12, 2 points each = 12p)
  let lv2Score = 0;
  if (rData?.lv2?.questions) {
    for (const q of rData.lv2.questions) {
      const u = (userAnswers[`${vKey}_q${q.id}`] || '').trim();
      const c = String(q.ans || '').trim();
      const isCorrect = Boolean(u && c && u.toUpperCase() === c.toUpperCase());
      const pts = isCorrect ? 2 : 0;
      lv2Score += pts;
      questionResults[q.id] = {
        id: q.id,
        userAnswer: u,
        correctAnswer: c.toUpperCase(),
        isCorrect,
        pointsEarned: pts,
        maxPoints: 2,
        explanation: q.expl || ''
      };
    }
  }

  // 3. LV Teil 3 (Tasks 13-24, 2 points each = 24p)
  let lv3Score = 0;
  if (rData?.lv3?.questions) {
    for (const q of rData.lv3.questions) {
      const u = (userAnswers[`${vKey}_q${q.id}`] || '').trim();
      const c = String(q.ans || '').trim();
      const isCorrect = Boolean(u && c && u.toUpperCase() === c.toUpperCase());
      const pts = isCorrect ? 2 : 0;
      lv3Score += pts;
      questionResults[q.id] = {
        id: q.id,
        userAnswer: u,
        correctAnswer: c.toUpperCase(),
        isCorrect,
        pointsEarned: pts,
        maxPoints: 2,
        explanation: q.expl || ''
      };
    }
  }

  const lvTotal = lv1Score + lv2Score + lv3Score; // Max 48

  // 4. Sprachbausteine (Tasks 25-46, 1 point each = 22p)
  let spScore = 0;
  if (rData?.sp?.questions) {
    for (const q of rData.sp.questions) {
      const u = (userAnswers[`${vKey}_q${q.id}`] || '').trim();
      const c = String(q.ans || '').trim();
      const isCorrect = Boolean(u && c && u === c);
      const pts = isCorrect ? 1 : 0;
      spScore += pts;
      questionResults[q.id] = {
        id: q.id,
        userAnswer: u,
        correctAnswer: c,
        isCorrect,
        pointsEarned: pts,
        maxPoints: 1,
        explanation: q.expl || ''
      };
    }
  }

  const part1Total = lvTotal + spScore; // Max 70
  const part1Passed = part1Total >= 42;

  // 5. HV Teil 1 (Tasks 47-54, 2 points each = 16p)
  let hv1Score = 0;
  const d1 = lMap ? hv1Pools[lMap.hv1] : null;
  if (d1?.speakers) {
    for (const spk of d1.speakers) {
      const u = (userAnswers[`${vKey}_q${spk.id}`] || '').trim();
      const c = String(spk.ans || '').trim();
      const isCorrect = Boolean(u && c && u.toUpperCase() === c.toUpperCase());
      const pts = isCorrect ? 2 : 0;
      hv1Score += pts;
      const matchedStmt = d1.statements?.find((s: any) => s.k.toUpperCase() === c.toUpperCase());
      questionResults[spk.id] = {
        id: spk.id,
        userAnswer: u,
        correctAnswer: c.toUpperCase(),
        isCorrect,
        pointsEarned: pts,
        maxPoints: 2,
        explanation: matchedStmt ? `${c}) ${matchedStmt.t}` : ''
      };
    }
  }

  // 6. HV Teil 2 (Tasks 55-64, 2 points each = 20p)
  let hv2Score = 0;
  const d2 = lMap ? hv2Pools[lMap.hv2] : null;
  if (d2?.questions) {
    for (const q of d2.questions) {
      const u = (userAnswers[`${vKey}_q${q.id}`] || '').trim();
      const c = String(q.ans || '').trim();
      const isCorrect = Boolean(u && c && u.toUpperCase() === c.toUpperCase());
      const pts = isCorrect ? 2 : 0;
      hv2Score += pts;
      const optIdx = ['A', 'B', 'C'].indexOf(c.toUpperCase());
      questionResults[q.id] = {
        id: q.id,
        userAnswer: u,
        correctAnswer: c.toUpperCase(),
        isCorrect,
        pointsEarned: pts,
        maxPoints: 2,
        explanation: optIdx >= 0 && q.opts?.[optIdx] ? q.opts[optIdx] : ''
      };
    }
  }

  // 7. HV Teil 3 (Tasks 65-74, 10 items scaled to 12p max)
  let hv3Hits = 0;
  const d3 = lMap ? hv3Pools[lMap.hv3] : null;
  if (d3?.items) {
    for (const item of d3.items) {
      const uRaw = (userAnswers[`${vKey}_q${item.id}`] || '').trim();
      const cRaw = String(item.ans || item.a || '').trim();
      const u = uRaw.toLowerCase();
      const c = cRaw.toLowerCase();
      const significantWords = c
        .replace(/[(),./-]/g, ' ')
        .split(/\s+/)
        .filter((w) => w.length >= 4);
      const firstWord = c.split(/\s+/)[0] || '';
      const isCorrect =
        u.length >= 2 &&
        (c.includes(u) ||
          u.includes(firstWord) ||
          significantWords.some((w) => u.includes(w)));
      if (isCorrect) hv3Hits++;
      questionResults[item.id] = {
        id: item.id,
        userAnswer: uRaw,
        correctAnswer: cRaw,
        isCorrect,
        pointsEarned: isCorrect ? 1.2 : 0,
        maxPoints: 1.2,
        explanation: `Musterlösung: ${cRaw}`
      };
    }
  }
  const hv3Score = Math.min(12, Math.round(hv3Hits * 1.2));
  const hvTotal = hv1Score + hv2Score + hv3Score; // Max 48

  // 8. Schriftlicher Ausdruck (48 points max)
  const essayText = userAnswers[`${vKey}_essay`] || '';
  const essayCriteria = analyzeC1EssayLocal(essayText);
  const writingScore = essayCriteria.total;

  const part2Total = hvTotal + writingScore; // Max 96
  const part2Passed = part2Total >= 58;

  // 9. Mündliche Prüfung (Sprechen, 48 points max, pass >= 29)
  let speakingScore = 0;
  try {
    const rawSpeakingScores = localStorage.getItem('telc_c1_speaking_scores_v1');
    if (rawSpeakingScores) {
      const parsed = JSON.parse(rawSpeakingScores);
      speakingScore =
        (Number(parsed.teil1a) || 0) +
        (Number(parsed.teil1b) || 0) +
        (Number(parsed.teil2) || 0) +
        (Number(parsed.fluessigkeit) || 0) +
        (Number(parsed.repertoire) || 0) +
        (Number(parsed.grammatik) || 0) +
        (Number(parsed.aussprache) || 0);
    }
  } catch {
    speakingScore = 0;
  }
  const speakingPassed = speakingScore >= 29;

  const grandTotal = part1Total + part2Total; // Max 166 (Schriftliche Prüfung)
  const totalWithSpeaking = grandTotal + speakingScore; // Max 214 (Gesamtprüfung)
  const passed = grandTotal >= 100 && part1Passed && part2Passed;
  const percentage = Math.round((totalWithSpeaking / 214) * 100);

  let gradeDe = 'Nicht bestanden';
  let gradeUz = 'O‘tilmadi (Nicht bestanden)';
  if (passed) {
    if (grandTotal >= 150) {
      gradeDe = 'Sehr gut (C1 Hochschule)';
      gradeUz = 'A’lo (Sehr gut)';
    } else if (grandTotal >= 133) {
      gradeDe = 'Gut (C1 Hochschule)';
      gradeUz = 'Yaxshi (Gut)';
    } else if (grandTotal >= 116) {
      gradeDe = 'Befriedigend (C1 Hochschule)';
      gradeUz = 'Qoniqarli (Befriedigend)';
    } else {
      gradeDe = 'Ausreichend (C1 Hochschule)';
      gradeUz = 'Yetarli (Ausreichend)';
    }
  }

  return {
    variantId: vKey,
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
    percentage,
    questionResults
  };
}
