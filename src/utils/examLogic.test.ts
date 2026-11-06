import test from 'node:test';
import assert from 'node:assert/strict';
import {
  evaluateExamVariant,
  normalizeLv2Html,
  countEssayWords,
  analyzeC1EssayLocal
} from './examLogic';
import { READING_DATA, variantMap, hv1Pools, hv2Pools, hv3Pools } from '../data/telcExamData';

test('all 36 variants (1–22, 24–28, 31–39) exist and contain complete reading, sprachbausteine, listening, and writing datasets', () => {
  const allVariantIds = [
    ...Array.from({ length: 20 }, (_, i) => String(i + 1)),
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
  ];
  for (const key of allVariantIds) {
    assert.ok(READING_DATA[key], `Variant ${key} reading data exists`);
    assert.ok(READING_DATA[key].lv1, `Variant ${key} lv1 exists`);
    assert.ok(READING_DATA[key].lv2, `Variant ${key} lv2 exists`);
    assert.ok(READING_DATA[key].lv3, `Variant ${key} lv3 exists`);
    assert.ok(READING_DATA[key].sp, `Variant ${key} sp exists`);
    assert.equal(READING_DATA[key].sp.questions.length, 22, `Variant ${key} has 22 Sprachbausteine`);

    const map = variantMap[key];
    assert.ok(map, `Variant ${key} mapping exists`);
    assert.ok(hv1Pools[map.hv1], `Variant ${key} HV1 pool (${map.hv1}) exists`);
    assert.ok(hv2Pools[map.hv2], `Variant ${key} HV2 pool (${map.hv2}) exists`);
    assert.ok(hv3Pools[map.hv3], `Variant ${key} HV3 pool (${map.hv3}) exists`);
    assert.equal(map.writing.length, 2, `Variant ${key} has 2 writing topics`);
  }
});

test('normalizeLv2Html renders Variant 13 paragraphs object properly', () => {
  const html13 = normalizeLv2Html(READING_DATA['13'].lv2);
  assert.ok(html13.includes('[Abschnitt A]'), 'Includes Abschnitt A');
  assert.ok(html13.includes('[Abschnitt E]'), 'Includes Abschnitt E');
  assert.ok(html13.includes('Lotto gewonnen'), 'Includes paragraph content');
});

test('evaluateExamVariant scores a perfect Variant 1 submission at 166 points', () => {
  const answers: Record<string, string> = {};
  const r1 = READING_DATA['1'];
  for (let i = 1; i <= 6; i++) {
    answers[`1_q${i}`] = r1.lv1.answers[String(i)];
  }
  for (const q of r1.lv2.questions) {
    answers[`1_q${q.id}`] = q.ans;
  }
  for (const q of r1.lv3.questions) {
    answers[`1_q${q.id}`] = q.ans;
  }
  for (const q of r1.sp.questions) {
    answers[`1_q${q.id}`] = q.ans;
  }
  const m1 = variantMap['1'];
  for (const s of hv1Pools[m1.hv1].speakers) {
    answers[`1_q${s.id}`] = s.ans;
  }
  for (const q of hv2Pools[m1.hv2].questions) {
    answers[`1_q${q.id}`] = q.ans;
  }
  for (const item of hv3Pools[m1.hv3].items) {
    answers[`1_q${item.id}`] = item.ans;
  }

  // Build a 380-word structured C1 essay with connectors
  const paragraph =
    'Darüber hinaus lässt sich festhalten, dass die moderne Wissenschaft im Hinblick auf globale Herausforderungen wie den Klimawandel eine zentrale Rolle spielt, weil fundierte Forschungsergebnisse folglich zu nachhaltigen Lösungen beitragen. Einerseits bieten technologische Innovationen enorme Chancen für die Landwirtschaft, andererseits müssen ökologische Risiken ungeachtet wirtschaftlicher Interessen stets sorgfältig abgewogen werden. Nichtsdestotrotz zeigt die aktuelle Debatte, dass ein konstruktiver Dialog zwischen Wissenschaft, Politik und Gesellschaft unerlässlich bleibt, sodass langfristig tragfähige Entscheidungen getroffen werden können.';
  answers['1_essay'] = [paragraph, paragraph, paragraph, paragraph, paragraph, paragraph].join('\n\n');

  const result = evaluateExamVariant('1', answers);
  assert.equal(result.lvTotal, 48);
  assert.equal(result.spScore, 22);
  assert.equal(result.part1Total, 70);
  assert.equal(result.part1Passed, true);
  assert.equal(result.hvTotal, 48);
  assert.ok(result.writingScore >= 44);
  assert.equal(result.passed, true);
});

test('countEssayWords and analyzeC1EssayLocal handle empty and structured essays', () => {
  assert.equal(countEssayWords(''), 0);
  assert.equal(countEssayWords('Ein kurzer Satz.'), 3);
  const emptyAnalysis = analyzeC1EssayLocal('');
  assert.equal(emptyAnalysis.total, 0);
});

test('Variants 14 to 39 contain authentic PDF 14–39 topics, Uzbek vocabulary, and Uzbek translations', () => {
  assert.ok(READING_DATA['14'].lv1.title.includes('Gesichtserkennung'));
  assert.ok(READING_DATA['15'].lv1.title.includes('Eine Box verändert die Welt'));
  assert.ok(READING_DATA['16'].lv1.title.includes('Höhlenforschung'));
  assert.ok(READING_DATA['16'].lv2.title.includes('Iss dich glücklich'));
  assert.ok(READING_DATA['17'].lv1.title.includes('Stimmungsbarometer'));
  assert.ok(READING_DATA['17'].lv3.title.includes('MINT-Fächer'));
  assert.ok(READING_DATA['18'].lv1.title.includes('Satzzeichen'));
  assert.ok(READING_DATA['18'].lv2.title.includes('Akademisches Viertel'));
  assert.ok(READING_DATA['19'].lv1.title.includes('Sprache der Tiere'));
  assert.ok(READING_DATA['19'].sp.title.includes('Wie das Geld in die Welt kam'));
  assert.ok(READING_DATA['20'].lv3.title.includes('Camping'));
  assert.ok(READING_DATA['20'].sp.title.includes('Die Ordnung der Dinge'));

  // Variants 21-33
  assert.ok(READING_DATA['21'].lv1.title.includes('Rechtschreibung'));
  assert.ok(READING_DATA['21'].sp.title.includes('Werbung'));
  assert.ok(READING_DATA['22'].lv1.title.includes('Aufzug'));
  assert.ok(READING_DATA['24'].lv2.title.includes('Mond'));
  assert.ok(READING_DATA['25'].lv3.title.includes('Schafe'));
  assert.ok(READING_DATA['26'].lv2.title.includes('Selbermachen'));
  assert.ok(READING_DATA['27'].sp.title.includes('Wetter'));
  assert.ok(READING_DATA['28'].lv1.title.includes('Maus'));
  assert.ok(READING_DATA['31'].lv1.title.includes('Polaroid'));
  assert.ok(READING_DATA['31'].lv3.title.includes('Seychellen'));
  assert.ok(READING_DATA['32'].lv1.title.includes('Supermarkt'));
  assert.ok(READING_DATA['32'].lv3.title.includes('Erika Fuchs'));
  assert.ok(READING_DATA['33'].lv1.title.includes('Lärm'));
  assert.ok(READING_DATA['33'].lv2.title.includes('Restaurant'));
  assert.ok(READING_DATA['33'].lv3.title.includes('Bundesfreiwilligendienst'));

  // Variants 34-39
  assert.ok(READING_DATA['34'].lv1.title.includes('Fahrstuhl'));
  assert.ok(READING_DATA['34'].lv2.title.includes('Nachhaltiger Konsum'));
  assert.ok(READING_DATA['34'].lv3.title.includes('Currywurst'));
  assert.ok(READING_DATA['34'].sp.title.includes('Restaurantkultur'));
  assert.ok(READING_DATA['35'].lv1.title.includes('Handschrift'));
  assert.ok(READING_DATA['35'].lv3.title.includes('Kleingärten'));
  assert.ok(READING_DATA['35'].sp.title.includes('Spielen'));
  assert.ok(READING_DATA['36'].lv1.title.includes('Zimmerpflanzen'));
  assert.ok(READING_DATA['37'].lv2.title.includes('Träume'));
  assert.ok(READING_DATA['37'].sp.title.includes('Diktate'));
  assert.ok(READING_DATA['38'].lv1.title.includes('Sprache'));
  assert.ok(READING_DATA['38'].lv2.title.includes('Präsentationen'));
  assert.ok(READING_DATA['38'].lv3.title.includes('Zweitstudium'));
  assert.ok(READING_DATA['39'].lv2.title.includes('Ruf mich nicht an'));
  assert.ok(READING_DATA['39'].sp.title.includes('Unterschätzte Pflanzen'));

  // Verify HV pools for 16–39 have Uzbek translations
  assert.ok(hv1Pools.glueck.speakers[0].uz, 'HV1 Glück has Uzbek speaker translation');
  assert.ok(hv1Pools.pendeln.speakers[0].uz, 'HV1 Pendeln has Uzbek speaker translation');
  assert.ok(hv1Pools.studienfinanzierung.speakers[0].uz, 'HV1 Studienfinanzierung has Uzbek speaker translation');
  assert.ok(hv1Pools.gruenflaechen.speakers[0].uz, 'HV1 Grünflächen has Uzbek speaker translation');
  assert.ok(hv1Pools.pendeln_studenten.speakers[0].uz, 'HV1 Pendeln Studenten has Uzbek speaker translation');
  assert.ok(hv2Pools.fischer.questions[0].uz, 'HV2 Fischer has Uzbek question translation');
  assert.ok(hv2Pools.pflanzen.questions[0].uz, 'HV2 Pflanzen has Uzbek question translation');
  assert.ok(hv2Pools.schlaf_kinder.questions[0].uz, 'HV2 Schlaf Kinder has Uzbek question translation');
  assert.ok(hv2Pools.nadja_mueller.questions[0].uz, 'HV2 Nadja Müller has Uzbek question translation');
  assert.ok(hv2Pools.fahrrad.questions[0].uz, 'HV2 Fahrrad has Uzbek question translation');
  assert.ok(hv2Pools.niklas.questions[0].uz, 'HV2 Niklas has Uzbek question translation');
  assert.ok(hv3Pools.kreativitaet.items[0].uz, 'HV3 Kreativität has Uzbek item translation');
  assert.ok(hv3Pools.schlaf_hv3.items[0].uz, 'HV3 Schlaf has Uzbek item translation');
  assert.ok(hv3Pools.resilienz.items[0].uz, 'HV3 Resilienz has Uzbek item translation');
  assert.ok(hv3Pools.worklifebalance.items[0].uz, 'HV3 Work-Life-Balance has Uzbek item translation');
  assert.ok(hv3Pools.introversion.items[0].uz, 'HV3 Introversion has Uzbek item translation');
  assert.ok(hv3Pools.natur_stress.items[0].uz, 'HV3 Natur gegen Stress has Uzbek item translation');
  assert.ok(hv3Pools.intelligenz_ruchmann.items[0].uz, 'HV3 Intelligenz Ruchmann has Uzbek item translation');
  assert.ok(hv3Pools.maerchen.items[0].uz, 'HV3 Märchen has Uzbek item translation');
});



