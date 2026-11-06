/**
 * Authentic telc Deutsch C1 Hochschule — Variants 28, 31, 32, 33
 * Extracted from 28_9c0c55d7.pdf, 31_f3261a9b.pdf, 32_b214b44c.pdf, 33_c69e7f75.pdf
 * All Arabic explanations, vocabulary tables, paragraph translations, and keys translated into Uzbek.
 */

import { VocabItem, ParagraphTranslation, VARIANT_15_READING } from './variants14And15Data';
import { VARIANT_17_READING } from './variants16To18Data';
import { VARIANT_24_READING, VARIANT_25_READING, VARIANT_26_READING } from './variants21To27Data';

// ============================================================================
// VARIANT 28 (PDF 28 — ♧ الاحتمال الثامن والعشرون ♧)
// ============================================================================
export const VARIANT_28_READING = {
  pdfSource: '/assets/aistudio/28_9c0c55d7.pdf',
  lv1: VARIANT_17_READING.lv1,
  lv2: VARIANT_26_READING.lv2,
  lv3: VARIANT_25_READING.lv3,
  sp: VARIANT_15_READING.sp
};

// ============================================================================
// VARIANT 31 (PDF 31 — ♧ الاحتمال الواحد والثلاثون ♧)
// ============================================================================
export const VARIANT_31_READING = {
  pdfSource: '/assets/aistudio/31_f3261a9b.pdf',
  lv1: {
    title: 'Polaroid – die Geschichte der Kultkamera',
    titleUz: 'Polaroid — afsonaviy (kult) fotoapparat tarixi',
    uzbekVocab: [
      { de: 'die Sofortbildkamera', uz: 'suratni darhol tayyorlab beradigan fotoapparat (Polaroid)' },
      { de: 'tüfteln an (+ Dat.)', uz: 'biror kashfiyot ustida uzoq bosh qotirib ishlamoq' },
      { de: 'auf taube Ohren stoßen', uz: 'e’tiborsizlikka uchramoq («kar quloqlarga duch kelmoq»)' },
      { de: 'etwas selbst in die Hand nehmen', uz: 'ishni o‘z qo‘liga olmoq' },
      { de: 'auf Knopfdruck', uz: 'tugmani bir bosish orqali' },
      { de: 'in Serie vom Band laufen', uz: 'konveyerdan seriyali (ommaviy) ishlab chiqarilmoq' },
      { de: 'beäugt werden', uz: 'begonalar tomonidan qiziquvchanlik bilan ko‘zdan kechirilmoq' },
      { de: 'einen Höhenflug erleben', uz: 'mislsiz yuksalishni / muvaffaqiyat cho‘qqisini boshdan kechirmoq' },
      { de: 'pleitegehen / insolvent sein', uz: 'bankrot bo‘lmoq, to‘lovga qobiliyatsiz bo‘lib qolmoq' },
      { de: 'der digitalen Bilderflut überdrüssig sein', uz: 'raqamli suratlar oqimidan bezor bo‘lmoq (to‘ymoq)' }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: "1-xatboshi va [ 1 ] bo'shliq",
        uz: "Tezkor fotoapparat (Sofortbildkamera) kashf etilishi yosh bolaning savoliga borib taqaladi: 1943-yilda amerikalik fizik va tadbirkor Edvin Gerbert Lend ta'tilda suratga olayotganda 3 yoshli qizchasi: «Dada, nega rasmlarni hoziroq ko'ra olmayman?» deb so'raydi. Qizining tilagini bajarish uchun Lend yechim izlaydi. [ 1 -> F: Ushbu inqilobiy g'oyani u tez orada turli banklar va investorlarga taqdim etdi ]. Biroq ulardan rad javobini olgach («auf taube Ohren stieß»), ishni o'z qo'liga oldi."
      },
      {
        label: "2-xatboshi va [ 2 ]–[ 4 ] bo'shliqlar",
        uz: "1947-yil 21-fevralda Lend tugmani bosish bilan rasm chiqaradigan kamerani namoyish etdi. [ 2 -> A: U kimyoviy reaksiya tufayli endigina olingan tasvirni 60 soniya ichida tayyorlab berar edi ]. 1,5 yildan so'ng Polaroid seriyali ishlab chiqarila boshlandi va o'nlab yillar davomida muvaffaqiyat qozondi. [ 3 -> D: Kashfiyotchi Edvin Lend, bundan tashqari, mukammal sahnalashtirilgan reklama kampaniyalari va mahsulot taqdimotlarini ham juda yaxshi eplar edi ]. Ikkinchi ustunlik shaxsiy daxlsizlik (Privatsphäre) himoyasi edi: [ 4 -> B: Shaxsiy suratlar fotolaboratoriya yoki fotodo'kon xodimlari tomonidan ko'rib qolinishidan xavotir olmaslik mumkin edi ]."
      },
      {
        label: "3–4-xatboshilar va [ 5 ]–[ 6 ] bo'shliqlar",
        uz: "Biroq yangi mingyillikda Polaroidning tanazzuli boshlandi. [ 5 -> G: Chunki aynan shu davrda raqamli fotografiya (Digitalfotografie) bozorni asta-sekin egallab oldi ]. Polaroid 2001 va 2008-yillarda bankrot bo'ldi, 2015-yilda yirik investor yordamida yana oyoqqa turdi. So'nggi yillarda tezkor fotoapparatlar yana Uyg'onish davrini (Renaissance) boshdan kechirmoqda. [ 6 -> C: Bugungi kunda ular asosan retro xarakteri tufayli seviladi, ammo faqat nostalgiya tarafdorlari tomonidan emas ]. Raqamli rasmlar oqimidan charchagan o'smirlar ham unga qiziqish bildirmoqda."
      }
    ] as ParagraphTranslation[],
    text: `<p>Ihre Erfindung ist nicht zuletzt einem Kind zu verdanken: Die Rede ist von der Sofortbildkamera. 1943 war der US-amerikanische Physiker und Unternehmer Edwin Herbert Land mit seiner Familie im Urlaub und machte Fotos. Seine dreijährige Tochter fragte ihn: „Papa, warum kann ich die Fotos nicht sofort sehen?“ Sie wünschte sich, diese direkt in den Händen halten zu können, statt sie erst entwickeln lassen zu müssen. Edwin H. Land hat zeit seines Lebens fast so viele Patente angemeldet wie der berühmte Erfinder Thomas Alva Edison. Um den Wunsch seiner Tochter zu erfüllen, suchte er nach einer Lösung und tüftelte an einer Sofortbildkamera. <span class="text-gap">[ 1 ]</span> Da er bei diesen jedoch auf taube Ohren stieß, nahm er das Ganze selbst in die Hand.</p>
<p>Am 21. Februar 1947 war es dann so weit. Land stellte der Welt eine Erfindung vor, die die Fotografie revolutionieren sollte: eine Kamera, die quasi auf Knopfdruck Fotos produzieren konnte. <span class="text-gap">[ 2 ]</span> Die Presse sprach von einer Sensation, und die neue Technik begeisterte auch die Konsumenten. Nur anderthalb Jahre später lief die Polaroid-Kamera in Serie vom Band und verkaufte sich bald millionenfach. Von 1948 an ging die Verkaufskurve des Produkts steil nach oben, und dieser Erfolg setzte sich noch über Jahrzehnte fort. <span class="text-gap">[ 3 ]</span> Zu verwundern braucht dies nicht, denn Sofortbildkameras hatten einige Vorteile: Erstens boten sie die Möglichkeit, gemeinsam mit anderen ein Foto sofort nach der Aufnahme zu betrachten. Zweitens gewährleisteten sie auch den Schutz der Privatsphäre: <span class="text-gap">[ 4 ]</span> Nicht nur Privatpersonen, sondern auch Geheimdienste, die Polizei oder auch Künstler wie Andy Warhol nutzten die Kamera daher gerne. In den 1980er und 1990er Jahren erlebte die Firma Polaroid schließlich einen Höhenflug.</p>
<p>Doch im neuen Jahrtausend begann ihr Abstieg. <span class="text-gap">[ 5 ]</span> Sofortbildkameras waren nicht mehr gefragt, da nun ohne Entwicklungszeit und Papier, mit nur einem Klick qualitativ viel hochwertigere Fotos auf kleinen Bildschirmen angezeigt werden konnten, die sich noch dazu beliebig oft vervielfältigen ließen. Polaroid ging 2001 pleite, kam zurück, war 2008 wieder insolvent – und schaffte 2015 erneut die Wende, als ein Großinvestor einstieg.</p>
<p>Seit einigen Jahren erleben Sofortbildkameras wieder eine Renaissance. <span class="text-gap">[ 6 ]</span> Denn vor allem der digitalen Bilderflut überdrüssige Teenager interessieren sich dafür – und so bleibt die Sofortbildkamera auch im Selfie-Zeitalter beliebt.</p>`,
    options: [
      { key: 'A', text: 'Sie entwickelte nämlich dank einer chemischen Reaktion innerhalb von 60 Sekunden das gerade erst geschossene Bild.', uz: "U kimyoviy reaksiya tufayli endigina olingan rasmni 60 soniya ichida tayyorlab berar edi." },
      { key: 'B', text: 'Man musste nicht befürchten, dass die eigenen Aufnahmen von neugierigen Labormitarbeitern oder Fotoladen-Angestellten beäugt werden könnten.', uz: "Shaxsiy suratlar qiziquvchan laboratoriya yoki fotodo'kon xodimlari tomonidan ko'rib qolinishidan qo'rqmaslik mumkin edi." },
      { key: 'C', text: 'Heute sind sie vor allem wegen ihres Retrocharakters beliebt, werden aber nicht nur von Nostalgikern geschätzt.', uz: "Bugungi kunda ular asosan retro xarakteri tufayli ommabop, biroq faqat nostalgiya ishqibozlari tomonidan qadrlanmaydi." },
      { key: 'D', text: 'Erfinder Edwin Land verstand sich außerdem auf perfekt inszenierte Werbekampagnen und Produktvorstellungen.', uz: "Bundan tashqari, kashfiyotchi Edvin Lend mukammal sahnalashtirilgan reklama kampaniyalari va mahsulot taqdimotlarini ustalik bilan o'tkazar edi." },
      { key: 'E', text: 'Er stieg 1980 mit einem geschätzten Privatvermögen von 150 Millionen US-Dollar als Firmenchef aus, den Niedergang seiner Firma erlebte er nicht mehr.', uz: "U 1980-yilda 150 mln dollar boylik bilan kompaniya rahbarligidan ketdi va kompaniyasining inqirozini ko'rmadi. (Ortiqcha gap)" },
      { key: 'F', text: 'Diese bahnbrechende Idee präsentierte er schon bald verschiedenen Banken und Investoren.', uz: "Ushbu inqilobiy g'oyani u tez orada turli banklar va investorlarga taqdim etdi." },
      { key: 'G', text: 'Denn zu dieser Zeit eroberte die Digitalfotografie nach und nach den Markt.', uz: "Chunki aynan shu davrda raqamli fotografiya bozorni asta-sekin egallab oldi." },
      { key: 'H', text: 'Anfang der sechziger Jahre wurden in den USA schon doppelt so viele Polaroid-Kameras wie Kleinbildkameras verkauft.', uz: "60-yillar boshida AQShda oddiy fotoapparatlarga qaraganda ikki baravar ko'p Polaroid sotilgan. (Ortiqcha gap)" }
    ],
    answers: { '1': 'F', '2': 'A', '3': 'D', '4': 'B', '5': 'G', '6': 'C' },
    explanations: {
      '1': "Keyingi gapdagi «Da er bei diesen jedoch auf taube Ohren stieß» olmosh birikmasi F variantdagi «verschiedenen Banken und Investoren» ga ishora qiladi.",
      '2': "«quasi auf Knopfdruck Fotos produzieren konnte» jumlasidan so'ng A variantда surat kimyoviy reaksiya bilan 60 soniyada chiqishi tushuntiriladi.",
      '3': "Sotuvlarning o'nlab yillar davomida o'sishiga Lendning reklama va taqdimot mahorati (D) ham sabab bo'lgan.",
      '4': "«Schutz der Privatsphäre:» ikki nuqtasidan keyin B variantda fotolaboratoriya xodimlari shaxsiy suratlarni ko'rmasligi izohlanadi.",
      '5': "«im neuen Jahrtausend begann ihr Abstieg» — bunga raqamli fotografiyaning bozorni egallashi (G) sabab bo'lgan.",
      '6': "So'nggi yillardagi «Renaissance» va keyingi gapdagi «Teenager» o'rtasini C variant («nicht nur von Nostalgikern geschätzt») bog'laydi."
    }
  },
  lv2: VARIANT_24_READING.lv2,
  lv3: {
    title: 'Umweltschutz und Luxusurlaub auf den Seychellen: ein Dilemma?',
    titleUz: 'Seyshel orollarida tabiatni muhofaza qilish va hashamatli ta’til: dilemmami?',
    uzbekVocab: [
      { de: 'das Dilemma', uz: 'ikkilanishli og‘ir muammo (dilemma)' },
      { de: 'in der Verfassung verankert sein', uz: 'konstitutsiyada mustahkamlab qo‘yilgan bo‘lmoq' },
      { de: 'die Eiablage (Meeresschildkröten)', uz: 'dengiz toshbaqalarining tuxum qo‘yishi' },
      { de: 'sich breitmachen (Beton)', uz: 'keng tarqalmoq / joyni egallab olmoq (beton inshootlar haqida)' },
      { de: 'die Landgewinnung / aufgeschüttetes Korallenriff', uz: 'sun’iy yer hosil qilish / marjon riflari ustiga tuproq to‘kish' },
      { de: 'die Entsalzungsanlage', uz: 'dengiz suvini chuchuklashtirish inshooti' },
      { de: 'endemische Arten / der Seychellendajal', uz: 'endemik turlar / Seyshel zag‘izg‘oni (qush turi)' },
      { de: 'die Renaturierung', uz: 'tabiatni asl holiga qaytarish (renaturatsiya)' }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: '1–2-xatboshilar (Praslin oroli va Seyshel konstitutsiyasidagi tabiat muhofazasi)',
        uz: "Seyshel orollarining ikkinchi eng katta oroli — Praslindagi besh yulduzli mehmonxona terrasasida qushlar sayyohlardan hech qanday qo'rquv (Scheu) sezmaydi [13-savol: R]. Seyshel orollarida atrof-muhit muhofazasi konstitutsiyada qonuniy belgilangan («in der Verfassung verankert») va quruqlikning yarmidan ko'pi qo'riqxona hisoblanadi [14-savol: R]. Noyob qushlar yashaydigan ba'zi kichik orollar qat'iy nazorat qilinadi va sayyohlar uchun yopiq [15-savol: R]."
      },
      {
        label: '3–4-xatboshilar (Marine Conservation Society va Eden Island sun’iy oroli)',
        uz: "Marine Conservation Society (MCS) tashkiloti vakili Akash Paunikar mehmonxonalar bilan muvaffaqiyatli hamkorlik qiladi («arbeitet erfolgreich mit einigen Hotelresorts zusammen») [16-savol: F]. Biroq dengiz toshbaqalari tuxum qo'yishi uchun mehmonxona plyajlari endi yaramaydi, chunki u yerlarni beton egallab olgan [17-savol: F]. Hukumatning rasmiy ma'lumotiga ko'ra, «Eden Island» sun'iy oroli asosiy orol — Maheni haddan tashqari zich qurilishlardan xalos etishi (yukini kamaytirishi) kerak edi [18-savol: R], ammo buning uchun marjon riflari ko'mib yuborilgan."
      },
      {
        label: '5–6-xatboshilar (Félicité orolidagi Six Senses kurorti va Marta Kardoso)',
        uz: "Félicité orolidagi «Six Senses» kurortida ekolog Marta Kardoso ishlaydi (uning birinchi tashrifi haqida matnda ma'lumot yo'q) [19-savol: X]. Kurortda suvni chuchuklashtirish tizimi va organik bog' bor, ammo menyudan import qilingan Wagyu mol go'shti yoki Avstraliya qo'y go'shtini olib tashlashga rahbariyat jur'at etmagan [20-savol: X/F]."
      },
      {
        label: '7–8-xatboshilar (Frégate oroli, Anna Zora va Seyshel qushining qutqarilishi)',
        uz: "Frégate xususiy orolida ekolog Anna Zora mehmonlarni quruqlikdagi so'qmoqlar bo'ylab olib yuradi (qayiqda dengiz sayohati emas) [21-savol: F]. 1990-yilda Seyshel zag'izg'oni (Seychellendajal) bor-yo'g'i 20 donadan kam qolgan edi, kalamushlarga qarshi kurash va o'rmonlarni tiklash natijasida bugungi kunda ularning soni 160 dan oshdi [22-savol: R]. Frégate orolidagi muvaffaqiyatli tabiatni tiklash (Renaturierung) bugun butun dunyodagi boshqa orollar uchun namuna bo'lib xizmat qilmoqda [23-savol: R]."
      }
    ] as ParagraphTranslation[],
    text: `<p>Wer auf der Terrasse eines Fünf-Sterne-Hotels auf Praslin, der zweitgrößten Insel der Seychellen, frühstückt, bekommt schnell Gesellschaft: Kleine Vögel hüpfen völlig furchtlos zwischen den Kaffeetassen und Obsttellern der Urlauber umher. Von Scheu vor dem Menschen fehlt jede Spur. Dieses idyllische Miteinander ist kein Zufall, denn der Inselstaat im Indischen Ozean gilt als Vorreiter im Naturschutz.</p>
<p>Auf den Seychellen ist der Schutz der Umwelt sogar in der Verfassung verankert, und mehr als die Hälfte der Landfläche steht unter Naturschutz. Einige der kleinen Inseln, die seltenen Vogelarten als Rückzugsort und Lebensraum dienen, werden streng überwacht und dürfen von regulären Besuchern überhaupt nicht betreten werden. Doch gleichzeitig hängt die Wirtschaft des Landes stark vom Luxustourismus ab.</p>
<p>Akash Paunikar von der Umweltschutzorganisation Marine Conservation Society Seychelles (MCSS) sieht diesen Widerspruch täglich. Seine Organisation arbeitet erfolgreich mit mehreren großen Hotelresorts zusammen, um Korallenriffe wieder aufzuforsten und Meeresbewohner zu schützen. Dennoch beklagt Paunikar den Bauboom an den Küsten: Viele Strände vor den großen Hotels kämen für die Eiablage der gefährdeten Meeresschildkröten nicht mehr infrage, weil sich dort immer mehr Beton breitgemacht habe und nächtliches Scheinwerferlicht die Tiere abschrecke.</p>
<p>Ein besonders kontroverses Projekt ist die künstliche Insel „Eden Island“ vor der Küste der Hauptinsel Mahé, auf der luxuriöse Villen und ein Jachthafen entstanden sind. Nach offiziellen Angaben der Regierung sollte die künstliche Insel die Hauptinsel Mahé entlasten und vor einer noch dichteren Bebauung bewahren. Umweltschützer kritisieren jedoch, dass für die Aufschüttung wertvolle Korallenriffe zerstört wurden.</p>
<p>Auf der kleinen Nachbarinsel Félicité versucht das Luxusresort „Six Senses Zil Pasyon“, Ökologie und Komfort zu verbinden. Die Nachhaltigkeitsmanagerin Marta Cardoso zeigt den Gästen stolz die eigene Trinkwasser-Entsalzungsanlage, die Abfüllung in Glasflaschen und den Bio-Garten des Hotels. Doch beim Essen stößt der Öko-Anspruch an Grenzen: Den Mut, importierte Wagyu-Rinderbrust oder australische Lammkoteletts von der Speisekarte zu streichen, hatte das Management bisher nicht – zu groß ist die Sorge, zahlungskräftige Gäste zu verprellen.</p>
<p>Dass Luxustourismus den Naturschutz aber auch direkt finanzieren kann, beweist die Privatinsel Frégate. Eine Übernachtung in einer der 16 Villen kostet mehrere Tausend Euro, doch die Einnahmen fließen maßgeblich in den Erhalt der Insel. Die Biologin Anna Zora führt Urlauber auf schmalen Wanderpfaden durch das einzigartige Ökosystem an Land und erklärt die heimische Flora und Fauna.</p>
<p>Ihr größter Stolz ist die Rettung des Seychellendajals, einer kleinen schwarz-weißen Singvogelart. 1990 gab es weltweit nur noch weniger als 20 Exemplare dieses Vogels – ausschließlich auf Frégate. Durch die gezielte Bekämpfung eingeschleppter Ratten und die Pflanzung heimischer Bäume hat sich der Bestand seit den Neunzigerjahren kräftig erholt und zählt heute wieder über 160 Tiere. Die erfolgreichen Naturschutzmaßnahmen auf Frégate stehen mittlerweile weltweit Modell für andere Inseln, die ihr ursprüngliches Ökosystem wiederherstellen wollen.</p>`,
    questions: [
      { id: 13, text: 'Die Vögel auf der Insel zeigen wenig Scheu vor Touristen.', uz: "Oroldagi qushlar sayyohlardan deyarli qo'rqmaydi (tortinmaydi).", ans: 'R', expl: "1-xatboshida: «Kleine Vögel hüpfen völlig furchtlos... Von Scheu vor dem Menschen fehlt jede Spur.»" },
      { id: 14, text: 'Auf den Seychellen ist Umweltschutz gesetzlich festgelegt.', uz: "Seyshel orollarida atrof-muhit muhofazasi qonuniy (konstitutsiyada) belgilab qo'yilgan.", ans: 'R', expl: "2-xatboshida: «Auf den Seychellen ist der Schutz der Umwelt sogar in der Verfassung verankert.»" },
      { id: 15, text: 'Einige der Inseln, die Vögeln Lebensraum bieten, dürfen nicht von Besuchern betreten werden.', uz: "Qushlarga yashash muhiti bo'lgan ba'zi orollarga tashrif buyuruvchilar kirishi taqiqlangan.", ans: 'R', expl: "2-xatboshida: «dürfen von regulären Besuchern überhaupt nicht betreten werden.»" },
      { id: 16, text: 'Die Kooperation mit den Hotels gestaltet sich für die Marine Conservation Society (MCS) als schwierig.', uz: "Mehmonxonalar bilan hamkorlik Marine Conservation Society (MCS) uchun qiyin kechmoqda.", ans: 'F', expl: "3-xatboshida: «Seine Organisation arbeitet erfolgreich mit mehreren großen Hotelresorts zusammen.»" },
      { id: 17, text: 'Auch auf den Hotelstränden bieten sich den Meeresschildkröten Plätze für ihre Eier.', uz: "Mehmonxona plyajlarida ham dengiz toshbaqalari tuxum qo'yishi uchun joylar mavjud.", ans: 'F', expl: "3-xatboshida: «Viele Strände vor den großen Hotels kämen für die Eiablage... nicht mehr infrage, weil sich dort immer mehr Beton breitgemacht habe.»" },
      { id: 18, text: 'Offiziell heißt es, dass die künstliche Insel die Hauptinsel entlasten sollte.', uz: "Rasmiy ma'lumotlarga ko'ra, sun'iy orol asosiy orolning yukini kamaytirishi kerak edi.", ans: 'R', expl: "4-xatboshida: «Nach offiziellen Angaben der Regierung sollte die künstliche Insel die Hauptinsel Mahé entlasten.»" },
      { id: 19, text: 'Marta Cardoso war seit ihrem ersten Aufenthalt auf den Seychellen von der Inselwelt fasziniert.', uz: "Marta Kardoso Seyshel orollariga ilk kelganidanoq orollar olamiga maftun bo'lgan edi.", ans: 'X', expl: "Matnda Marta Kardosoning birinchi tashrifi haqida hech narsa aytilmagan." },
      { id: 20, text: 'Das Six Senses bietet keine importierten Fleisch- und Fischspezialitäten mehr an.', uz: "Six Senses mehmonxonasi endi import qilingan go'sht va baliq taomlarini taklif qilmaydi.", ans: 'X', expl: "PDF 31 kalitiga ko'ra X (yoki F: menyudan Wagyu va Avstraliya qo'y go'shtini olib tashlashga jur'at etishmagan, baliq haqida esa gap yo'q)." },
      { id: 21, text: 'Anna Zora bietet Bootsfahrten an, um die Meereswelt der Inseln zu erkunden.', uz: "Anna Zora orollarning dengiz olamini o'rganish uchun qayiqda sayohatlar taklif etadi.", ans: 'F', expl: "6-xatboshida: u mehmonlarni quruqlikdagi piyoda so'qmoqlar («auf schmalen Wanderpfaden ... an Land») bo'ylab olib yuradi." },
      { id: 22, text: 'Seit den Neunzigerjahren des 20. Jahrhunderts hat sich der Bestand des Seychellendajals erholt.', uz: "XX asrning 90-yillaridan buyon Seyshel zag'izg'oni (qushi) populyatsiyasi tiklandi.", ans: 'R', expl: "7-xatboshida: 1990-yilda 20 tadan kam bo'lgan bo'lsa, bugungi kunda 160 tadan oshgan." },
      { id: 23, text: 'Die erfolgreichen Naturschutzmaßnahmen auf Frégate dienen anderen Inseln als nachahmenswertes Beispiel.', uz: "Frégate orolidagi muvaffaqiyatli tabiatni muhofaza qilish choralari boshqa orollar uchun o'rnak bo'lib xizmat qilmoqda.", ans: 'R', expl: "7-xatboshida: «stehen mittlerweile weltweit Modell für andere Inseln.»" },
      {
        id: 24,
        text: 'Welche der folgenden Überschriften passt am besten? a) Die Pflanzenwelt der Seychellen, b) Umweltschutz und Luxusurlaub: ein Dilemma?, c) Neue Jobs im Umweltschutz auf den Seychellen',
        uz: "Quyidagi sarlavhalardan qaysi biri matnga eng mos keladi?",
        ans: 'B',
        opts: [
          'A) Die Pflanzenwelt der Seychellen',
          'B) Umweltschutz und Luxusurlaub: ein Dilemma?',
          'C) Neue Jobs im Umweltschutz auf den Seychellen'
        ],
        optsUz: [
          "A) Seyshel orollarining o'simliklar dunyosi",
          "B) Atrof-muhit muhofazasi va hashamatli ta'til: dilemmami?",
          "C) Seyshel orollarida tabiatni muhofaza qilish sohasidagi yangi ish o'rinlari"
        ],
        expl: "Matnning asosiy mavzusi — Seyshel orollaridagi tabiat muhofazasi va hashamatli turizm o'rtasidagi ziddiyat hamda hamkorlik (B)."
      }
    ]
  },
  sp: {
    title: 'Die chronobiologischen Rhythmen der Kinder',
    titleUz: 'Bolalarning xronobiologik ritmlari (ichki biologik soati)',
    uzbekVocab: [
      { de: 'Rücksicht nehmen auf (+ Akk.)', uz: 'biror narsani inobatga olmoq, e’tiborga olmoq' },
      { de: 'zurechtkommen mit (+ Dat.)', uz: 'biror narsani eplamoq, uddasidan chiqmoq' },
      { de: 'die innere Uhr tickt anders', uz: 'ichki biologik soat boshqacha ishlaydi («chiqillaydi»)' },
      { de: 'Leistung abrufen', uz: 'bor qobiliyatini / salohiyatini ishga solmoq' },
      { de: 'bahnbrechend', uz: 'inqilobiy, yangi yo‘l ochuvchi' },
      { de: 'auf Zustimmung treffen', uz: 'ma’qullanmoq, qo‘llab-quvvatlanmoq' },
      { de: 'Gründe anführen (führen ... an)', uz: 'dalil / sabab sifatida keltirmoq' },
      { de: 'der offene Anfang', uz: 'moslashuvchan (erkin) dars boshlanishi' },
      { de: 'angesichts (+ Gen.)', uz: 'biror holatni hisobga olganda (... nuqtai nazaridan)' }
    ] as VocabItem[],
    text: `<p>Im Laufe der Schulzeit verändern sich die Schlafgewohnheiten von Kindern und Jugendlichen erheblich: Während Grundschulkinder oft schon früh hellwach sind, fällt es vielen Teenagern schwer, morgens rechtzeitig aus dem Bett zu kommen – manche schlafen am Wochenende <strong>(25)</strong> bis in den späten Vormittag hinein. Kritiker bemängeln seit Langem, dass das deutsche Schulsystem zu wenig Rücksicht auf diese biologischen Prozesse <strong>(26)</strong>. Vor allem ältere Schülerinnen und Schüler würden mit dem frühen Unterrichtsbeginn um acht Uhr kaum <strong>(27)</strong>.</p>
<p><strong>(28)</strong> Beobachtungen bestätigt auch der Münchner Chronobiologe Professor Till Roenneberg: Bei Jugendlichen <strong>(29)</strong> die innere Uhr tatsächlich anders als bei Kindern oder Erwachsenen. Ein früher Schulbeginn <strong>(30)</strong> für viele Heranwachsende daher eine enorme Belastung, <strong>(31)</strong> ihr Körper befinde sich um acht Uhr morgens biologisch gesehen noch tief in der Nacht. In den ersten Unterrichtsstunden seien sie folglich kaum in der Lage, ihre volle kognitive Leistung <strong>(32)</strong>.</p>
<p>Zu <strong>(33)</strong> Ergebnissen kam eine Studie an einem Gymnasium in Alsdorf bei Aachen, wo der Anteil der „Spättypen“ unter den Oberstufenschülern <strong>(34)</strong> rund 70 Prozent geschätzt wurde. Vergleichende Tests <strong>(35)</strong>, dass Jugendliche deutlich bessere Noten erzielten, wenn Prüfungen erst am späteren Vormittag stattfanden. Zahlreiche Schlafforscher <strong>(36)</strong> deshalb, den Unterricht für ältere Jahrgänge erst um neun Uhr beginnen zu lassen.</p>
<p>Doch dieser Vorschlag trifft nicht überall <strong>(37)</strong> Zustimmung. Gegen einen späteren Schulbeginn <strong>(38)</strong> viele Schülerinnen und Schüler an, dass sich dadurch der Nachmittagsunterricht weiter nach hinten verschiebe und <strong>(39)</strong> kaum noch Zeit für Hobbys, Sportvereine oder Freunde bleibe. Einige innovative Schulen bieten <strong>(40)</strong> heute die Möglichkeit <strong>(41)</strong> sogenannten „offenen Anfangs“ an: Die Jugendlichen entscheiden selbst, ob sie zur ersten oder erst zur zweiten Stunde kommen. Pädagogen, die dieses Modell befürworten, <strong>(42)</strong> ihre Schule nicht als starre Lehranstalt, sondern als flexiblen Lebensraum. Wer morgens später startet, bleibt nachmittags länger, <strong>(43)</strong> den versäumten Stoff eigenverantwortlich zu vervollständigen. Ob sich ein solches System bundesweit durchsetzen lässt, bleibt <strong>(44)</strong> der komplexen Stunden- und Busfahrpläne vielerorts abzuwarten – doch der positive <strong>(45)</strong> auf die Gesundheit ist unbestritten. Wie die Schule der Zukunft aussehen soll, <strong>(46)</strong> daher eine der spannendsten Fragen der modernen Bildungspolitik.</p>`,
    questions: [
      { id: 25, opts: ['schon', 'längst', 'bereits', 'sogar'], ans: 'sogar', expl: "«sogar bis in den späten Vormittag» — hatto kech tushgacha uxlashadi (kuchaytiruv yuklamasi)." },
      { id: 26, opts: ['geben', 'nehmen', 'haben', 'zeigen'], ans: 'nehmen', expl: "Turg'un birikma: «Rücksicht nehmen auf (+ Akk.)» (e'tiborga olmoq)." },
      { id: 27, opts: ['früh kommen', 'zurechtkommen', 'zeitig kommen', 'zur Zeit kommen'], ans: 'zurechtkommen', expl: "«mit dem frühen Unterrichtsbeginn kaum zurechtkommen» — erta boshlanadigan darslarga zo'rg'a moslashmoq." },
      { id: 28, opts: ['Diese', 'Dieselben', 'Solche', 'Derartige'], ans: 'Diese', expl: "Oldingi gaplarda aytilgan aniq kuzatuvlarga ishora: «Diese Beobachtungen»." },
      { id: 29, opts: ['pocht', 'taktet', 'tickt', 'hämmert'], ans: 'tickt', expl: "Ibora: «die innere Uhr tickt anders» (ichki soat boshqacha ishlaydi)." },
      { id: 30, opts: ['war', 'würde', 'sei', 'ist'], ans: 'sei', expl: "O'zlashtirma gap (Indirekte Rede, Konjunktiv I): «Ein früher Schulbeginn sei ... eine enorme Belastung»." },
      { id: 31, opts: ['also', 'denn', 'demnach', 'folglich'], ans: 'denn', expl: "Sabab bog'lovchisi (fe'l ikkinchi o'rinda — «befinde»): «denn ihr Körper befinde sich...»." },
      { id: 32, opts: ['anzurufen', 'auszurufen', 'abzurufen', 'abzuberufen'], ans: 'abzurufen', expl: "Turg'un birikma: «seine volle Leistung abrufen» (bor salohiyatini ishga solmoq)." },
      { id: 33, opts: ['bannbrechenden', 'Bahn brechenden', 'bahnbrechenden', 'Bann brechenden'], ans: 'bahnbrechenden', expl: "To'g'ri imlo: «zu bahnbrechenden Ergebnissen» (inqilobiy natijalarga)." },
      { id: 34, opts: ['auf', 'mit', 'für', 'zu'], ans: 'auf', expl: "Fe'l boshqaruvi: «schätzen auf (+ Akk.)» -> «auf rund 70 Prozent geschätzt wurde»." },
      { id: 35, opts: ['erreichten', 'erhielten', 'erlangten', 'ergaben'], ans: 'ergaben', expl: "«Vergleichende Tests ergaben, dass...» (testlar shuni ko'rsatdiki...)." },
      { id: 36, opts: ['fordern', 'bitten', 'drängen', 'bestehen'], ans: 'fordern', expl: "To'ldiruvchisiz infinitiv bilan: «Schlafforscher fordern deshalb, den Unterricht ... beginnen zu lassen»." },
      { id: 37, opts: ['über', 'auf', 'ein', 'an'], ans: 'auf', expl: "Turg'un birikma: «auf Zustimmung treffen / stoßen» (ma'qullanmoq)." },
      { id: 38, opts: ['sehen', 'führen', 'leiten', 'bieten'], ans: 'führen', expl: "Ajraluvchi fe'l: «anführen» (dalil sifatida keltirmoq) -> «führen viele Schüler an, dass...»." },
      { id: 39, opts: ['ohne', 'ohnegleichen', 'ohneeinander', 'ohnehin'], ans: 'ohnehin', expl: "«ohnehin» — shundoq ham, baribir." },
      { id: 40, opts: ['schon', 'bloß', 'längst', 'nur'], ans: 'schon', expl: "«bieten schon heute die Möglichkeit» — bugunning o'zidayoq imkoniyat taqdim etmoqda." },
      { id: 41, opts: ['dies', 'diesen', 'dessen', 'des'], ans: 'des', expl: "Genitiv artikl: «die Möglichkeit des sogenannten „offenen Anfangs“»." },
      { id: 42, opts: ['wahrnehmen', 'verspüren', 'bemerken', 'sehen'], ans: 'sehen', expl: "«sehen ihre Schule ... als flexiblen Lebensraum» (maktabni moslashuvchan makon sifatida ko'radilar)." },
      { id: 43, opts: ['sodass', 'für', 'um', 'damit'], ans: 'um', expl: "Maqsad infinitiv konstruksiyasi: «um ... zu vervollständigen»." },
      { id: 44, opts: ['mit Bedacht auf', 'ansichtig', 'im Hinblick auf', 'angesichts'], ans: 'angesichts', expl: "Genitiv predlogi: «angesichts der komplexen Stunden- und Busfahrpläne»." },
      { id: 45, opts: ['Effeckt', 'Effekt', 'Efekt', 'Efeckt'], ans: 'Effekt', expl: "To'g'ri yozilishi: «der positive Effekt»." },
      { id: 46, opts: ['gibt', 'lautet', 'sucht', 'findet'], ans: 'lautet', expl: "«lautet daher eine der spannendsten Fragen» (savol/javob quyidagicha yangraydi)." }
    ]
  }
};

// ============================================================================
// VARIANT 32 (PDF 32 — ♧ الاحتمال الثاني والثلاثون ♧)
// ============================================================================
export const VARIANT_32_READING = {
  pdfSource: '/assets/aistudio/32_b214b44c.pdf',
  lv1: {
    title: 'Die Geschichte des Supermarkts',
    titleUz: 'Supermarket tarixi',
    uzbekVocab: [
      { de: 'der Tante-Emma-Laden', uz: 'mahalladagi kichik an’anaviy oziq-ovqat do‘koni' },
      { de: 'einen netten Plausch halten', uz: 'yoqimli suhbat qurmoq (hangomalashmoq)' },
      { de: 'die Selbstbedienung', uz: 'o‘z-o‘ziga xizmat ko‘rsatish tizimi' },
      { de: 'den Einkaufswagen beladen', uz: 'xarid aravachasini to‘ldirmoq' },
      { de: 'das Wirtschaftswunder', uz: 'urushdan keyingi Germaniya «iqtisodiy mo‘jizasi»' },
      { de: 'die Preisbindung', uz: 'ishlab chiqaruvchi tomonidan qat’iy narx belgilanishi' },
      { de: 'der Discounter', uz: 'arzonlashtirilgan narxlardagi supermarket (masalan, Aldi)' },
      { de: 'sich anbahnen', uz: 'yuzaga kela boshlamoq, yaqinlashmoq' }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: "1–2-xatboshilar va [ 1 ]–[ 3 ] bo'shliqlar",
        uz: "Bugungi kunda supermarketda xarid qilish odatiy hol, ammo XX asr o'rtalariga qadar Germaniyada oziq-ovqatlar peshtaxta ortidan sotuvchi tomonidan tortib berilardi. [ 1 -> A: Burchakdagi kichik oziq-ovqat do'koni — mehr bilan «Tante-Emma-Laden» deb ataladigan maskan — odamlar yoqimli suhbat quradigan muloqot joyi edi ]. O'z-o'ziga xizmat ko'rsatish (Selbstbedienung) g'oyasi AQShdan kelgan. [ 2 -> D: U yerda ko'plab filiallarga ega yirik savdo tarmoqlari XIX asr o'rtalaridan beri mavjud edi ]. 1938-yilda Gerbert Eklyo Osnabryukda ilk o'z-o'ziga xizmat ko'rsatish do'konini ochdi, ammo nemis xaridorlari dastlab bunga shubha bilan qarashdi: bir tomondan sotuvchi bilan suhbat yetishmasdi, [ 3 -> H: ikkinchi tomondan esa mijozlar xarid aravachasidan foydalanishni avval o'rganishlari kerak edi va uni dastlab ikkilanib to'ldirishardi ]."
      },
      {
        label: "3–4-xatboshilar va [ 4 ]–[ 6 ] bo'shliqlar",
        uz: "1957-yilda Eklyo Kyolnda Yevropadagi eng katta supermarketni ochdi. [ 4 -> C: «Iqtisodiy mo'jiza» davridagi farovonlik tufayli odamlar o'zlariga ko'proq narsa ravo ko'ra olishardi ]. Biroq barcha supermarketlarda narxlar deyarli bir xil edi. [ 5 -> E: Buning sababi ishlab chiqaruvchilarga o'z mahsulotlari uchun sotuv narxini belgilash huquqini beruvchi qat'iy narx majburiyati (Preisbindung) edi ]. 1962-yilda aka-uka Karl va Teo Albrextlar ilk Discounter (Aldi) do'konini ochib, narxlarni pasaytirishdi. Shundan beri supermarketlar deyarli o'zgarmadi. [ 6 -> B: Navbatdagi haqiqiy inqilob faqat internet orqali oziq-ovqat xarid qilish bilan boshlandi ]."
      }
    ] as ParagraphTranslation[],
    text: `<p>Für uns ist es heute völlig selbstverständlich: Wir schieben einen Einkaufswagen durch lange Regalreihen, legen Milch, Obst und Brot hinein und bezahlen am Ende an der Kasse. Doch bis in die Mitte des 20. Jahrhunderts sah der Einkauf in Deutschland noch ganz anders aus. Die Kunden traten an eine Theke und trugen dem Verkäufer ihre Wünsche vor, der die Waren dann einzeln abwog und verpackte. <span class="text-gap">[ 1 ]</span></p>
<p>Die Idee der Selbstbedienung stammt ursprünglich aus den USA. <span class="text-gap">[ 2 ]</span> 1930 eröffnete dort Michael Cullen den ersten echten Supermarkt der „King-Kullen-Kette“. Nach diesem amerikanischen Vorbild wagte der Kaufmann Herbert Eklöh 1938 im niedersächsischen Osnabrück das Experiment und eröffnete den ersten Selbstbedienungsladen Deutschlands. Doch der große Erfolg blieb zunächst aus: Zum einen vermissten die Kunden das persönliche Gespräch mit dem Händler. <span class="text-gap">[ 3 ]</span></p>
<p>Erst nach dem Zweiten Weltkrieg setzte sich das Konzept durch. 1957 eröffnete Eklöh in einer Kölner Messehalle auf 2000 Quadratmetern den damals größten Supermarkt Europas. <span class="text-gap">[ 4 ]</span> Kühlschränke und Autos hielten Einzug in die Haushalte, sodass man größere Mengen auf Vorrat einkaufen und bequem nach Hause transportieren konnte.</p>
<p>Allerdings kosteten Markenprodukte damals in fast allen Geschäften gleich viel. <span class="text-gap">[ 5 ]</span> Dies änderte sich erst, als die Brüder Karl und Theo Albrecht 1962 in Dortmund ihren ersten „Discounter“ eröffneten und auf teure Ladendekoration sowie Markenartikel verzichteten.</p>
<p>In den folgenden Jahrzehnten wuchsen zwar die Verkaufsflächen, das Grundprinzip des Supermarkts blieb jedoch nahezu unverändert. <span class="text-gap">[ 6 ]</span> Ob der digitale Warenkorb den klassischen Gang durch die Supermarktregale eines Tages völlig verdrängen wird, ist allerdings noch ungewiss.</p>`,
    options: [
      { key: 'A', text: 'Das kleine Lebensmittelgeschäft um die Ecke, auch liebevoll Tante-Emma-Laden genannt, war ein Ort des Austauschs, wo man einen netten Plausch hielt.', uz: "Burchakdagi kichik oziq-ovqat do'koni — mehr bilan «Tante-Emma-Laden» deb ataladigan joy — yoqimli suhbat quriladigan muloqot maskani edi." },
      { key: 'B', text: 'Die nächste echte Revolution bahnte sich erst mit dem Lebensmitteleinkauf im Internet an.', uz: "Navbatdagi haqiqiy inqilob faqat internet orqali oziq-ovqat xarid qilish bilan yuzaga kela boshladi." },
      { key: 'C', text: 'Durch den Wohlstand in der Zeit des Wirtschaftswunders konnten sich die Menschen mehr leisten.', uz: "«Iqtisodiy mo'jiza» davridagi farovonlik tufayli odamlar ko'proq narsa xarid qilishga qodir edilar." },
      { key: 'D', text: 'Große Handelsketten mit zahlreichen Niederlassungen gab es dort schon seit Mitte des 19. Jahrhunderts.', uz: "U yerda (AQShda) ko'plab filiallarga ega yirik savdo tarmoqlari XIX asr o'rtalaridan beri mavjud edi." },
      { key: 'E', text: 'Grund dafür war die Preisbindung, die es den Herstellern erlaubte, die Verkaufspreise für ihre Produkte festzulegen.', uz: "Buning sababi ishlab chiqaruvchilarga o'z mahsulotlari uchun sotuv narxini belgilash imkonini beruvchi narx majburiyati (Preisbindung) edi." },
      { key: 'F', text: 'Schon damals setzten die Händler bewusst verkaufspsychologische Mittel wie Farben, Düfte oder Musik ein, um die Kunden zum Kaufen zu animieren.', uz: "O'shandayoq savdogarlar mijozlarni xaridga undash uchun ranglar, hidlar va musiqa kabi psixologik vositalarni qo'llashgan. (Ortiqcha gap)" },
      { key: 'G', text: 'Statt einer riesigen Produktpalette hatten sie nur 300 Artikel im Angebot, die sie zum Dauerniedrigpreis verkauften.', uz: "Ular ulkan assortiment o'rniga atigi 300 turdagi mahsulotni doimiy arzon narxda sotishardi. (Ortiqcha gap)" },
      { key: 'H', text: 'Zum anderen mussten die Kunden den Umgang mit dem Einkaufswagen erst lernen und beluden ihn zunächst nur zögerlich.', uz: "Ikkinchi tomondan esa mijozlar xarid aravachasidan foydalanishni avval o'rganishlari kerak edi va uni dastlab ikkilanib to'ldirishardi." }
    ],
    answers: { '1': 'A', '2': 'D', '3': 'H', '4': 'C', '5': 'E', '6': 'B' },
    explanations: {
      '1': "Peshtaxta ortidagi sotuvchi tasviridan so'ng A variantda an'anaviy «Tante-Emma-Laden» suhbat maskani bo'lgani aytiladi.",
      '2': "«aus den USA» jumlasiga D variantdagi «dort schon seit Mitte des 19. Jahrhunderts» bog'lanadi.",
      '3': "Oldingi gapdagi «Zum einen vermissten die Kunden...» tuzilmasini H variantdagi «Zum anderen mussten die Kunden...» davom ettiradi.",
      '4': "1957-yilgi yirik supermarket va keyingi gapdagi muzlatkich/avtomobillar o'rtasini C variant («Wirtschaftswunder») bog'laydi.",
      '5': "«kosteten Markenprodukte ... gleich viel» — buning sababi E variantda («Grund dafür war die Preisbindung») izohlanadi.",
      '6': "Keyingi gapdagi «der digitale Warenkorb» iborasiga B variantdagi «Lebensmitteleinkauf im Internet» zamin yaratadi."
    }
  },
  lv2: {
    title: 'Macht Reisen glücklich?',
    titleUz: 'Sayohat qilish insonni baxtli qiladimi?',
    uzbekVocab: [
      { de: 'erfahren / die Erfahrung', uz: 'boshdan kechirib bilmoq (asl ma’nosi: yo‘l yurib o‘rganmoq)' },
      { de: 'der Moralapostel mit erhobenem Zeigefinger', uz: 'barmog‘ini bigiz qilib nasihat o‘qiydigan axloqchi' },
      { de: 'der säuerliche Gesichtsausdruck', uz: 'norozi / burishgan yuz ifodasi' },
      { de: 'die CO₂-Bilanz', uz: 'karbonat angidrid (CO₂) chiqindilari balansi' },
      { de: 'die Argumente abwägen (wägt ... ab)', uz: 'dalillarni taroziga solib ko‘rmoq' },
      { de: 'trostlos', uz: 'g‘amgin, ma’yus, umidsiz' }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: 'Abschnitt A («Erfahrung» so‘zining noodatiy etimologik ta’rifi)',
        uz: "Muallif o'quvchini g'ayrioddiy tushuncha ta'rifi bilan hayratga soladi: «Erfahrung» (tajriba) so'zi aslida «fahren» (yurmoq, safar qilmoq) fe'lidan kelib chiqqan bo'lib, bilim va donolik aynan yo'lda bo'lish, safar qilish orqali orttirilishini anglatadi [10-savol: A]."
      },
      {
        label: 'Abschnitt B (O‘rta asrlardagi sayohatlar haqida hayrat)',
        uz: "Muallif o'z hayratini («Verwunderlich ist es, dass... / Es ist erstaunlich...») bildiradi: hatto O'rta asrlarda ham, yo'llar xavfli va noqulay bo'lishiga qaramay, ziyoratchilar, savdogarlar va hunarmand shogirdlar uzoq o'lkalarga safar qilishgan [8-savol: B]."
      },
      {
        label: 'Abschnitt C (Boshqalar haqida salbiy fikr va tavsiya)',
        uz: "Muallif sayohatni tanqid qiluvchi «axloqchilar» (Moralapostel) haqida salbiy fikr bildiradi: ular barmog'ini bigiz qilib va nordon yuz ifodasi bilan boshqalarning ta'tilini buzishga urinishadi [7-savol: C]. Shu bo'limning o'zida muallif tavsiya ham beradi: «deshalb möchte ich dazu raten, es einfach mal auszuprobieren» [9-savol: C]."
      },
      {
        label: 'Abschnitt D (Turli dalillarni taroziga solish — iqlim va madaniy almashinuv)',
        uz: "Muallif turli argumentlarni o'zaro solishtiradi (abwägen): bir tomondan parvozlarning CO₂ izi va ommaviy turizm zarari borligini inkor etib bo'lmaydi, biroq boshqa tomondan («Andererseits...») turizm millionlab odamlarni ish bilan ta'minlaydi va xalqlar o'rtasidagi bag'rikenglikni mustahkamlaydi [11-savol: D]."
      },
      {
        label: 'Abschnitt E (O‘quvchidan rozilik / qo‘llab-quvvatlash olish)',
        uz: "Muallif sayohatsiz dunyoni tasvirlab, o'quvchiga bevosita murojaat qiladi va undan tasdiq (Zustimmung) kutadi: «Erscheint Ihnen diese Vorstellung nicht auch ziemlich trostlos?» (Bunday tasavvur sizga ham juda g'amgin tuyulmaydimi?) [12-savol: E]."
      }
    ] as ParagraphTranslation[],
    text: `<div class="text-paragraph" data-para="A"><span class="para-tag">[Abschnitt A]</span> Kaum eine Jahreszeit weckt in uns so große Sehnsucht wie der Sommer: Sobald die Tage länger werden, planen Millionen Menschen ihre nächste Reise. Doch warum zieht es uns eigentlich immer wieder in die Ferne? Ein Blick in die Sprachgeschichte liefert einen überraschenden Hinweis: Unser Wort „Erfahrung“ leitet sich vom mittelhochdeutschen Verb „varn“ ab, was schlicht „fahren“ oder „reisen“ bedeutet. Der Begriff „Erfahrung“ besagt seiner ursprünglichen Definition nach also nichts anderes, als dass Wissen, Klugheit und Weltkenntnis vor allem durch das Fahren, durch das Unterwegs-Sein in fremden Gegenden erworben werden. Wer zu Hause bleibt, weiß demnach buchstäblich weniger von der Welt.</div>
<div class="text-paragraph" data-para="B"><span class="para-tag">[Abschnitt B]</span> Verwunderlich ist es, dass dieser Drang nach Bewegung keineswegs eine Erfindung der modernen Freizeitgesellschaft ist. Selbst im Mittelalter, als jede Reise über unbefestigte Straßen mit enormen Strapazen, Krankheiten und der Gefahr von Raubüberfällen verbunden war, nahmen erstaunlich viele Menschen diese Mühen auf sich. Ob Pilger auf dem Weg nach Santiago de Compostela, wandernde Handwerksgesellen oder Gelehrte auf dem Weg zur nächsten Universitätsstadt – es ist wirklich verblüffend, mit welcher Selbstverständlichkeit schon unsere Vorfahren tausende Kilometer zu Fuß oder auf dem Pferderücken zurücklegten.</div>
<div class="text-paragraph" data-para="C"><span class="para-tag">[Abschnitt C]</span> Heute ist das Reisen so bequem wie nie zuvor – und dennoch gibt es immer wieder selbsternannte Moralapostel, die uns mit erhobenem Zeigefinger und säuerlichem Gesichtsausdruck die Freude am Urlaub vermiesen wollen. Diese chronischen Nörgler sitzen am liebsten im eigenen Vorgarten und belehren jeden, der in ein Flugzeug oder einen Zug steigt, über seine vermeintliche Verantwortungslosigkeit. Natürlich muss man nicht jedes Wochenende um den halben Globus jetten, doch ein Tapetenwechsel wirkt oft Wunder für die Seele. Wer sich gestresst und ausgebrannt fühlt, dem möchte ich ausdrücklich dazu raten, einfach mal den Koffer zu packen und ein paar Tage in eine unbekannte Stadt oder Landschaft aufzubrechen.</div>
<div class="text-paragraph" data-para="D"><span class="para-tag">[Abschnitt D]</span> Dennoch kann man nicht alle Gegenargumente der Reisekritiker pauschal vom Tisch wischen. Zweifellos hinterlässt der moderne Massentourismus vielerorts ökologische Spuren: Überfüllte Altstädte, steigende Mieten durch Ferienwohnungen und der hohe CO₂-Ausstoß des Flugverkehrs sind reale Probleme, die ernst genommen werden müssen. Andererseits darf man nicht vergessen, dass der Tourismus in vielen Regionen der Welt die wichtigste Einnahmequelle darstellt und Millionen Arbeitsplätze sichert. Zudem baut die persönliche Begegnung mit fremden Kulturen Vorurteile ab und fördert das friedliche Zusammenleben weitaus stärker als jedes Lehrbuch.</div>
<div class="text-paragraph" data-para="E"><span class="para-tag">[Abschnitt E]</span> Stellen wir uns einmal für einen Moment eine Welt vor, in der niemand mehr seine Heimatstadt verlässt: Keine Gespräche mit Gastgebern in kleinen mediterranen Cafés, kein Staunen über verschneite Berggipfel oder antike Tempel, keine kulinarischen Entdeckungen auf exotischen Märkten. Jeder bliebe zeit seines Lebens im immer gleichen Alltagstrott gefangen. Erscheint Ihnen diese Vorstellung nicht auch ziemlich trostlos? Sicher stimmen Sie mir zu, dass das Leben ohne das Kribbeln vor einer Abreise und ohne die unvergesslichen Erinnerungen, die wir im Gepäck mit nach Hause bringen, um ein Vielfaches ärmer wäre.</div>`,
    questions: [
      { id: 7, text: 'In welchem Abschnitt äußert sich der Autor negativ über andere?', uz: "Qaysi bo'limda muallif boshqalar haqida salbiy fikr bildiradi?", ans: 'C', expl: "C bo'limida: «selbsternannte Moralapostel, die uns mit erhobenem Zeigefinger und säuerlichem Gesichtsausdruck... Diese chronischen Nörgler»." },
      { id: 8, text: 'In welchem Abschnitt bringt der Autor sein Erstaunen zum Ausdruck?', uz: "Qaysi bo'limda muallif o'z hayratini ifodalaydi?", ans: 'B', expl: "B bo'limida: «Verwunderlich ist es, dass... es ist wirklich verblüffend, mit welcher Selbstverständlichkeit...»." },
      { id: 9, text: 'In welchem Abschnitt spricht der Autor eine Empfehlung aus?', uz: "Qaysi bo'limda muallif tavsiya (maslahat) beradi?", ans: 'C', expl: "C bo'limida: «dem möchte ich ausdrücklich dazu raten, einfach mal den Koffer zu packen...»." },
      { id: 10, text: 'In welchem Abschnitt überrascht der Autor durch eine ungewöhnliche Begriffsdefinition?', uz: "Qaysi bo'limda muallif noodatiy tushuncha ta'rifi bilan hayratlantiradi?", ans: 'A', expl: "A bo'limida «Erfahrung» so'zining «fahren» (safar qilmoq) fe'lidan kelib chiqqan etimologik ta'rifi berilgan." },
      { id: 11, text: 'In welchem Abschnitt wägt der Autor verschiedene Argumente ab?', uz: "Qaysi bo'limda muallif turli dalillarni taroziga solib ko'radi?", ans: 'D', expl: "D bo'limida ekologik muammolar («Zweifellos hinterlässt...») va turizmning ijobiy tomonlari («Andererseits darf man nicht vergessen...») solishtiriladi." },
      { id: 12, text: 'In welchem Abschnitt will der Autor von den Lesern Zustimmung bekommen?', uz: "Qaysi bo'limda muallif o'quvchilardan tasdiq / rozilik olishni xohlaydi?", ans: 'E', expl: "E bo'limida: «Erscheint Ihnen diese Vorstellung nicht auch ziemlich trostlos? Sicher stimmen Sie mir zu, dass...»." }
    ]
  },
  lv3: {
    title: 'Übersetzerlegende Erika Fuchs – ein Leben für den Comic',
    titleUz: 'Afsonaviy tarjimon Erika Fuks — komiksga bag‘ishlangan hayot',
    uzbekVocab: [
      { de: 'wohlhabend / Direktor eines Elektrizitätswerks', uz: 'badavlat / elektr stansiyasi direktori' },
      { de: 'befohlen und gehorcht werden', uz: 'buyruq berilmoq va so‘zsiz bo‘ysunilmoq' },
      { de: 'Vorbehalte haben gegen (+ Akk.)', uz: 'biror narsaga nisbatan e’tiroz / shubha bildirmoq' },
      { de: 'vom Unterricht freigestellt werden', uz: 'darslardan ozod qilinmoq' },
      { de: 'belesen sein', uz: 'ko‘p o‘qigan, adabiyotdan chuqur xabardor bo‘lmoq' },
      { de: 'verfremden / übelnehmen', uz: 'aslidan uzoqlashtirib o‘zgartirmoq / xafa bo‘lmoq (aybga buyurmoq)' },
      { de: 'der Inflektiv / Erikativ (seufz, grübel)', uz: 'fe’l o‘zagidan yasalgan komiks shakli (masalan: «uf tortmoq», «o‘ylanmoq»)' }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: '1–2-xatboshilar (Erika Fuksning bolaligi, otasining tarbiyasi va gimnaziya)',
        uz: "Erika Fuks 1906-yilda Rostokda tug'ilgan. Uning otasi elektr stansiyasi direktori bo'lib, oila juda badavlat edi va hatto shaxsiy avtomobilga ega edi (moliyaviy qiyinchiliklar faqat Ikkinchi jahon urushidan keyin bo'lgan) [13-savol: F]. Biroq Erika otasining qattiqqo'l tarbiya usullarini eslab salbiy baholaydi: «Uyimizda bahslashilmas edi, faqat buyruq berilar va bo'ysunilar edi» [14-savol: R]. Shunga qaramay, Erika o'g'il bolalar gimnaziyasida o'qishni xohlaganida, otasi bunga hech qanday e'tiroz bildirmay uni qo'llab-quvvatladi [15-savol: R]. Gimnaziyaga kirishdan oldin u bir yil maktabdan ozod qilinib, mustaqil ravishda lotin va yunon tillarini o'rganishi kerak bo'ldi [16-savol: R]."
      },
      {
        label: '3–4-xatboshilar (Doktorlik dissertatsiyasi va Micky Maus jurnali bosh muharrirligi)',
        uz: "Erika san'atshunoslik bo'yicha o'qib, doktorlik dissertatsiyasini himoya qildi (arxivda qancha vaqt o'tkazgani haqida matnda ma'lumot yo'q) [17-savol: X]. 1951-yilda u yangi tashkil etilgan nemis «Micky Maus» jurnaliga bosh muharrir etib tayinlandi (u nashriyotga asos solmagan, balki Ehapa nashriyotida ishlagan) [18-savol: F]. Bunga qadar u ashaddiy komiks o'quvchisi emas edi: «Men ilgari hech qachon qo'limga komiks ushlab ko'rmagan edim», deb tan olgan edi u [19-savol: F]."
      },
      {
        label: '5–6-xatboshilar (Turmush o‘rtog‘i Gyunterning yordami, erkin tarjima va «Erikativ»)',
        uz: "Erika Fuks Donald Duck hikoyalariga Gyote va Shillerdan klassik adabiy iqtiboslarni mahorat bilan singdirgan. Bunda unga juda ko'p kitob o'qigan (belesen) turmush o'rtog'i Gyunter Fuks katta yordam bergan [20-savol: R]. Uning tarjimalari Amerika оригиналидан ancha uzoqlashgan bo'lsa-da, hech kim buni unga ayb qilib qo'ymagan, aksincha yuksak baholashgan [21-savol: F]. «Seufz», «grübel», «stöhn» kabi fe'l o'zaklari (Erikativ / Inflektiv) u tomonidan ommalashtirilgan bo'lsa-da, bu shaklni birinchi bo'lib u o'ylab topmagan (XX asr birinchi yarmidayoq tilshunoslikda mavjud bo'lgan) [22-savol: F]. U 1988-yilda nafaqaga chiqdi (uning o'rinbosari bilan necha yil birga ishlagani haqida ma'lumot yo'q) [23-savol: X]."
      }
    ] as ParagraphTranslation[],
    text: `<p>„Dem Ingeniör ist nichts zu schwör“ oder „Ich bin ein einsamer Kauz in der Finsternis“ – wer in Deutschland mit den Geschichten aus Entenhausen aufgewachsen ist, kennt die unsterblichen Sätze von Donald Duck und Daniel Düsentrieb. Hinter diesen sprachlichen Kunstwerken stand über drei Jahrzehnte lang eine Frau: Dr. Erika Fuchs (1906–2005). Aufgewachsen ist sie in behüteten, wohlhabenden Verhältnissen: Ihr Vater war Direktor eines Elektrizitätswerks, die Familie besaß schon früh ein eigenes Automobil und ein großes Haus. Erst in den Wirren nach dem Zweiten Weltkrieg musste Erika Fuchs zeitweise mit Geldmangel kämpfen.</p>
<p>Trotz des materiellen Wohlstands blickte Erika Fuchs später kritisch auf das strenge Klima in ihrem Elternhaus zurück. „Bei uns daheim wurde nicht argumentiert oder diskutiert. Da wurde befohlen und gehorcht“, erinnerte sie sich an die autoritären Erziehungsmethoden ihres Vaters. In Bildungsfragen erwies sich der Vater jedoch als überraschend aufgeschlossen: Als Erika als erstes Mädchen ihrer Stadt das humanistische Jungengymnasium besuchen wollte, hatte er keinerlei Vorbehalte und unterstützte ihren Wunsch nach Kräften. Allerdings musste sie zuvor eine Hürde überwinden: Sie wurde für ein Jahr vom regulären Schulunterricht freigestellt, um sich privat im Selbststudium die fehlenden Latein- und Griechischkenntnisse anzueignen – was ihr mit Bravour gelang.</p>
<p>Nach dem Abitur studierte sie Kunstgeschichte in Lausanne, München und London und schloss ihr Studium 1935 mit einer Doktorarbeit über Barockplastik ab. Nach dem Zweiten Weltkrieg suchte sie nach einer Möglichkeit, zum Familieneinkommen beizutragen, und bewarb sich 1951 beim Stuttgarter Ehapa-Verlag, der gerade die deutsche Ausgabe des „Micky Maus“-Magazins plante. Obwohl Erika Fuchs beim Vorstellungsgespräch offen zugab: „Ich hatte noch nie zuvor ein Comic-Heft in der Hand gehabt“, überzeugte ihre hohe Bildung die Verlagsleitung sofort, sodass sie zur ersten Chefredakteurin ernannt wurde.</p>
<p>Ihre Übersetzungen der amerikanischen Vorlagen von Carl Barks wurden schnell zum Kult. Erika Fuchs übertrug die Sprechblasen nicht wörtlich, sondern schuf eine ganz eigene, bildungsbürgerlich geprägte Kunstsprache voller Alliterationen und versteckter Anspielungen auf Friedrich Schiller oder Johann Wolfgang von Goethe. Eine unschätzbare Hilfe war ihr dabei ihr Ehemann Günter Fuchs: Der Ingenieur war außergewöhnlich belesen und diente seiner Frau mit seinen weitreichenden Literaturkenntnissen regelmäßig als wandelndes Lexikon für klassische Zitate.</p>
<p>Dass sich Erika Fuchs bei ihren Übertragungen oft weit vom amerikanischen Original entfernte und typisch deutsche Ortsnamen oder Schlagertexte einbaute, wurde ihr weder vom Verlag noch von den Lesern übelgenommen – im Gegenteil: Gerade diese schöpferische Freiheit machte den Erfolg der deutschen Ausgaben aus. Berühmt wurde sie zudem durch verkürzte Verbformen wie „seufz“, „grübel“ oder „schluck“, die ihr zu Ehren heute oft als „Erikativ“ bezeichnet werden. Sprachwissenschaftler weisen allerdings darauf hin, dass Erika Fuchs nicht die Erste war, die diesen sogenannten Inflektiv verwendete; die Form war bereits in der ersten Hälfte des 20. Jahrhunderts vereinzelt gebräuchlich, wurde aber erst durch ihre Comics im deutschen Alltagswortschatz verankert.</p>
<p>Erst 1988, im Alter von 81 Jahren, ging Erika Fuchs in den Ruhestand und übergab ihr Amt an ihre Nachfolgerin. Ihr Lebenswerk wird heute in einem eigenen Museum im oberfränkischen Schwarzenbach an der Saale gewürdigt.</p>`,
    questions: [
      { id: 13, text: 'Die Kindheit von Erika Fuchs war geprägt von den ständigen Geldsorgen ihrer Familie.', uz: "Erika Fuksning bolaligi oilasining doimiy pul muammolari bilan o'tgan.", ans: 'F', expl: "1-xatboshida: u badavlat oilada o'sgan (otasi elektr stansiyasi direktori bo'lgan), pul yetishmovchiligi faqat Ikkinchi jahon urushidan keyin kuzatilgan." },
      { id: 14, text: 'Erika Fuchs beurteilt die Erziehungsmethoden ihres Vaters rückblickend negativ.', uz: "Erika Fuks o'tmishga nazar tashlab, otasining tarbiya usullarini salbiy baholaydi.", ans: 'R', expl: "2-xatboshida: «blickte Erika Fuchs später kritisch auf das strenge Klima... Da wurde befohlen und gehorcht»." },
      { id: 15, text: 'Ihr Vater hatte keine Vorbehalte gegenüber Erikas Wunsch, das Jungengymnasium zu besuchen.', uz: "Otasi Erikaning o'g'il bolalar gimnaziyasida o'qish istagiga hech qanday e'tiroz bildirmagan.", ans: 'R', expl: "2-xatboshida: «hatte er keinerlei Vorbehalte und unterstützte ihren Wunsch nach Kräften.»" },
      { id: 16, text: 'Bevor Erika das Gymnasium besuchen durfte, musste sie privat Sprachkenntnisse erwerben.', uz: "Erika gimnaziyaga borishidan oldin xususiy (mustaqil) ravishda til bilimlarini egallashi kerak edi.", ans: 'R', expl: "2-xatboshida: lotin va yunon tillarini mustaqil o'rganish uchun bir yil darslardan ozod qilingan." },
      { id: 17, text: 'Als sie ihre Doktorarbeit schrieb, verbrachte Erika Fuchs viel Zeit mit Recherche in Archiven.', uz: "Doktorlik ishini yozayotganida Erika Fuks arxivlarda tadqiqot bilan ko'p vaqt o'tkazgan.", ans: 'X', expl: "3-xatboshida faqat barokko haykaltaroshligi bo'yicha doktorlik ishi yozgani aytilgan, arxivlar haqida ma'lumot yo'q." },
      { id: 18, text: 'Erika Fuchs gründete einen kleinen Verlag, der Zeitschriften für Kinder herausbrachte.', uz: "Erika Fuks bolalar uchun jurnallar chiqaradigan kichik nashriyotga asos solgan.", ans: 'F', expl: "3-xatboshida: u Ehapa nashriyotiga ishga kirgan, nashriyotga o'zi asos solmagan." },
      { id: 19, text: 'Bevor sie Comic-Übersetzerin wurde, war Erika Fuchs schon eine passionierte Comic-Leserin.', uz: "Komiks tarjimoni bo'lishidan oldin Erika Fuks ashaddiy komiks o'quvchisi bo'lgan.", ans: 'F', expl: "3-xatboshida: «Ich hatte noch nie zuvor ein Comic-Heft in der Hand gehabt»." },
      { id: 20, text: 'Mit seinen weitreichenden Literaturkenntnissen konnte Günter Fuchs seine Frau bei ihrer Arbeit unterstützen.', uz: "Gyunter Fuks o'zining keng adabiy bilimlari bilan rafiqasini ishida qo'llab-quvvatlay olgan.", ans: 'R', expl: "4-xatboshida: «diente seiner Frau mit seinen weitreichenden Literaturkenntnissen regelmäßig als wandelndes Lexikon»." },
      { id: 21, text: 'Oftmals wurde Erika Fuchs vorgeworfen, die amerikanischen Original-Comics beim Übersetzen zu sehr verfremdet zu haben.', uz: "Erika Fuksga ko'pincha Amerika original komikslarini tarjimada haddan ziyod o'zgartirib yuborganlik aybi qo'yilgan.", ans: 'F', expl: "5-xatboshida: «wurde ihr weder vom Verlag noch von den Lesern übelgenommen – im Gegenteil»." },
      { id: 22, text: 'Erika Fuchs war die Erste, die in ihren Übersetzungen eine bestimmte Verbform verwendete.', uz: "Erika Fuks o'z tarjimalarida ma'lum bir fe'l shaklini (Inflektiv) qo'llagan birinchi inson edi.", ans: 'F', expl: "5-xatboshida: «dass Erika Fuchs nicht die Erste war, die diesen sogenannten Inflektiv verwendete»." },
      { id: 23, text: 'Mit ihrer Nachfolgerin als Chefredakteurin hatte Erika Fuchs schon viele Jahre im Verlag zusammengearbeitet.', uz: "Bosh muharrir sifatidagi o'rinbosari bilan Erika Fuks nashriyotda ko'p yillar birga ishlagan edi.", ans: 'X', expl: "6-xatboshida o'rinbosari bilan qancha vaqt birga ishlagani haqida ma'lumot berilmagan." },
      {
        id: 24,
        text: 'Welche der folgenden Überschriften passt am besten? a) Übersetzerlegende Erika Fuchs – ein Leben für den Comic, b) Die besten deutschen Comics – Ausstellung im Erika-Fuchs-Haus, c) Wie Comics unsere Sprache prägen',
        uz: "Quyidagi sarlavhalardan qaysi biri matnga eng mos keladi?",
        ans: 'A',
        opts: [
          'A) Übersetzerlegende Erika Fuchs – ein Leben für den Comic',
          'B) Die besten deutschen Comics – Ausstellung im Erika-Fuchs-Haus',
          'C) Wie Comics unsere Sprache prägen'
        ],
        optsUz: [
          "A) Afsonaviy tarjimon Erika Fuks — komiksga bag'ishlangan hayot",
          "B) Eng yaxshi nemis komikslari — Erika Fuks uyidagi ko'rgazma",
          "C) Komikslar tilimizni qanday shakllantiradi"
        ],
        expl: "Matn to'liq Erika Fuksning hayoti va tarjimonlik faoliyatiga bag'ishlangan (A)."
      }
    ]
  },
  sp: {
    title: 'Lernen wird zum Spiel (Gamification)',
    titleUz: 'O‘qish o‘yinga aylanadi (Geymifikatsiya)',
    uzbekVocab: [
      { de: 'der Zeitvertreib', uz: 'vaqtichog‘lik, ermak' },
      { de: 'sich auszeichnen durch (+ Akk.)', uz: 'biror xususiyati bilan ajralib turmoq' },
      { de: 'in andere Rollen schlüpfen', uz: 'boshqa rollarga kirishmoq' },
      { de: 'Highscores ergattern', uz: 'yuqori ballarni (rekordlarni) qo‘lga kiritmoq' },
      { de: 'einen Begriff prägen', uz: 'yangi atamani muomalaga kiritmoq (shakllantirmoq)' },
      { de: 'in aller Munde sein', uz: 'hammaning og‘zida (mashhur) bo‘lmoq' },
      { de: 'der angeborene Spieltrieb', uz: 'insonga tug‘ma xos bo‘lgan o‘yin instinkti' },
      { de: 'Einzug halten in (+ Akk.)', uz: 'kirib kelmoq, o‘rin egallamoq' },
      { de: 'der Brückenschlag', uz: 'ko‘prik bog‘lash (ikki sohani birlashtirish)' }
    ] as VocabItem[],
    text: `<p>Spielen gilt gemeinhin als bloßer <strong>(25)</strong> für Kinder oder als entspannende Freizeitbeschäftigung nach getaner Arbeit. Dabei <strong>(26)</strong> sich das Spiel seit jeher dadurch aus, dass es sich flexibel an die Eigenheiten <strong>(27)</strong> Gesellschaft anpasst. Ob klassisches Brettspiel oder modernes Online-Rollenspiel, das es den Nutzern erlaubt, in fantastische Welten und andere Rollen zu <strong>(28)</strong>: Spiele fesseln unsere Aufmerksamkeit oft über Stunden hinweg. Kein Wunder also, dass <strong>(29)</strong> Mechanismen zunehmend auch außerhalb der Unterhaltungsbranche genutzt werden, um Wissen zu <strong>(30)</strong> oder komplexe Aufgaben attraktiver zu gestalten.</p>
<p>Wer beim Vokabellernen auf dem Smartphone Punkte sammelt, Abzeichen gewinnt und versucht, neue Highscores zu <strong>(31)</strong>, erlebt genau dieses Prinzip. Der dafür verwendete Fachbegriff „Gamification“ wurde bereits Anfang der 2000er-Jahre von dem britischen Programmierer Nick Pelling <strong>(32)</strong> und ist mittlerweile unter Pädagogen, Softwareentwicklern und Personalmanagern <strong>(33)</strong>. Gemeint ist damit die gezielte <strong>(34)</strong> spieltypischer Elemente auf spielfremde Kontexte. Das Konzept macht sich <strong>(35)</strong> Spieltrieb zunutze, um die intrinsische Motivation zu steigern. Dies gelingt <strong>(36)</strong> dann, wenn unmittelbares Feedback und sichtbare Fortschrittsbalken das Gefühl vermitteln, einer Herausforderung gewachsen zu sein – ein Effekt, auf den heute kaum noch eine erfolgreiche Lernplattform verzichten <strong>(37)</strong>.</p>
<p>Längst hat Gamification auch in Schulen und Hochschulen <strong>(38)</strong>. Viele Lehrende schätzen die <strong>(39)</strong> Einbindung digitaler Quiz-Apps, <strong>(40)</strong> gemeinsame Raten im Hörsaal aufgelockert und zugleich das eigenständige <strong>(41)</strong> von Fachinhalten gefördert wird. Kritiker <strong>(42)</strong> allerdings, dass äußere Belohnungssysteme wie Ranglisten ein langfristig <strong>(43)</strong> Studieren nicht ersetzen können. Bei <strong>(44)</strong> Betrachtung zeigt sich jedoch, dass spielerische Ansätze und ernsthafte Wissenschaft keineswegs im Widerspruch stehen müssen: Wenn der <strong>(45)</strong> zwischen Unterhaltung und akademischem Anspruch gelingt, lassen sich <strong>(46)</strong> selbst trockene Theorien überraschend lebendig vermitteln.</p>`,
    questions: [
      { id: 25, opts: ['Zeitablauf', 'Zeitabschnitt', 'Zeitbedarf', 'Zeitvertreib'], ans: 'Zeitvertreib', expl: "«als bloßer Zeitvertreib» — shunchaki ermak / vaqt o'tkazish vositasi sifatida." },
      { id: 26, opts: ['gestaltet', 'malt', 'schmückt', 'zeichnet'], ans: 'zeichnet', expl: "Turg'un fe'l: «sich auszeichnen durch (+ Akk.)» (ajralib turmoq)." },
      { id: 27, opts: ['ihre jeweilige', 'ihre jeweiligen', 'ihrer jeweilige', 'ihrer jeweiligen'], ans: 'ihrer jeweiligen', expl: "Genitiv Singular Femininum: «an die Eigenheiten ihrer jeweiligen Gesellschaft (yoki Zeit)»." },
      { id: 28, opts: ['entschlüpfen', 'hüpfen', 'schlüpfen', 'verknüpfen'], ans: 'schlüpfen', expl: "Ibora: «in andere Rollen schlüpfen» (boshqa rollarga kirishmoq)." },
      { id: 29, opts: ['deren', 'den', 'dessen', 'die'], ans: 'deren', expl: "Ko'plikdagi «Spiele» so'ziga qarashli olmosh: «dass deren Mechanismen»." },
      { id: 30, opts: ['dehnen', 'verbreiten', 'verlängern', 'weiten'], ans: 'verbreiten', expl: "«Wissen verbreiten» — bilim tarqatmoq." },
      { id: 31, opts: ['einzäunen', 'ergattern', 'vergittern', 'vernetzen'], ans: 'ergattern', expl: "«Highscores / Punkte ergattern» — yuqori ballarni qo'lga kiritmoq." },
      { id: 32, opts: ['gebastelt', 'gedruckt', 'geprägt', 'geschlagen'], ans: 'geprägt', expl: "Turg'un birikma: «einen Begriff prägen» (atamani muomalaga kiritmoq)." },
      { id: 33, opts: ['auf der Zunge', 'hinter den Ohren', 'in aller Munde', 'vor aller Augen'], ans: 'in aller Munde', expl: "Ibora: «in aller Munde sein» (hammaning tilida / juda mashhur bo'lmoq)." },
      { id: 34, opts: ['Übergabe', 'Übersendung', 'Übertragung', 'Überweisung'], ans: 'Übertragung', expl: "«die Übertragung spieltypischer Elemente auf (+ Akk.)» (o'yin elementlarini boshqa sohaga ko'chirish/tatbiq etish)." },
      { id: 35, opts: ['dem Menschen den angeborenen', 'dem den Menschen angeborenen', 'den dem Menschen angeborenen', 'den dem angeborenen Menschen'], ans: 'den dem Menschen angeborenen', expl: "Kengaytirilgan aniqlovchi: «den (Akk. der Spieltrieb) + dem Menschen (Dat.) + angeborenen Spieltrieb»." },
      { id: 36, opts: ['ebenfalls', 'insbesondere', 'obendrein', 'überdies'], ans: 'insbesondere', expl: "«insbesondere dann, wenn...» (ayniqsa ... bo'lganida)." },
      { id: 37, opts: ['bräuchte', 'dürfte', 'müsste', 'wollte'], ans: 'wollte', expl: "Konjunktiv II: «auf den heute kaum noch eine Lernplattform verzichten wollte (yoki dürfte)»." },
      { id: 38, opts: ['Einzug gehalten', 'Vorrang genossen', 'Vortritt erhalten', 'Zutritt verschafft'], ans: 'Einzug gehalten', expl: "Turg'un ibora: «Einzug halten in (+ Akk.)» (kirib kelmoq, ommalashmoq)." },
      { id: 39, opts: ['uncomblizierte', 'unkomblitzierte', 'unkomplitzierte', 'unkomplizierte'], ans: 'unkomplizierte', expl: "To'g'ri imlo: «die unkomplizierte Einbindung»." },
      { id: 40, opts: ['aus dem', 'durch das', 'über das', 'von dem'], ans: 'durch das', expl: "Vosita ma'nosida: «durch das gemeinsame Raten»." },
      { id: 41, opts: ['Rechärchieren', 'Recherchieren', 'Recherscieren', 'Reschärchieren'], ans: 'Recherchieren', expl: "To'g'ri imlo: «das eigenständige Recherchieren»." },
      { id: 42, opts: ['bemängeln', 'quengeln', 'verreißen', 'verweisen'], ans: 'bemängeln', expl: "«Kritiker bemängeln allerdings, dass...» (tanqidchilar kamchilik sifatida ko'rsatishadiki...)." },
      { id: 43, opts: ['disziplinierte', 'disziplinierten', 'disziplinierter', 'diszipliniertes'], ans: 'diszipliniertes', expl: "«ein langfristig diszipliniertes Studieren» (das Studieren — Neutrum Nominativ/Akkusativ)." },
      { id: 44, opts: ['genau', 'genaue', 'genauen', 'genauer'], ans: 'genauer', expl: "Artiklsiz Dativ Femininum: «Bei genauer Betrachtung» (sinchiklab ko'rib chiqilganda)." },
      { id: 45, opts: ['Brückenschlag', 'Schutzschirm', 'Tunnelblick', 'Zugzwang'], ans: 'Brückenschlag', expl: "«der Brückenschlag zwischen Unterhaltung und akademischem Anspruch» (ikki soha o'rtasida ko'prik bog'lash)." },
      { id: 46, opts: ['besonders', 'jeweilig', 'mitunter', 'wieder'], ans: 'mitunter', expl: "«mitunter» (ba'zan, gohida)." }
    ]
  }
};

// ============================================================================
// VARIANT 33 (PDF 33 — ♧ الاحتمال الثالث والثلاثون ♧)
// ============================================================================
export const VARIANT_33_READING = {
  pdfSource: '/assets/aistudio/33_c69e7f75.pdf',
  lv1: {
    title: 'Die Auswirkungen von Lärm',
    titleUz: 'Shovqinning (salbiy) ta’sirlari',
    uzbekVocab: [
      { de: 'die Lärmbelastung', uz: 'shovqin yuki / shovqindan zararlanish' },
      { de: 'das Herz-Kreislauf-System', uz: 'yurak-qon tomir tizimi' },
      { de: 'als Störfaktor erweisen', uz: 'xalaqit beruvchi (bezovta qiluvchi) omil bo‘lib chiqmoq' },
      { de: 'das Paarungsverhalten', uz: 'hayvonlarning juftlashish xulq-atvori' },
      { de: 'die räumliche Trennung', uz: 'hududiy (masofaviy) ajratish' },
      { de: 'der Gehörschutz', uz: 'eshitishni himoya qilish vositasi (quloqchin)' }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: "1–2-xatboshilar va [ 1 ]–[ 2 ] bo'shliqlar",
        uz: "Avtomobil tirbandligi, qurilish maydonchalari yoki samolyotlar — zamonaviy dunyoda shovqin deyarli hamma joyda mavjud. Shovqin inson organizmiga jiddiy ta'sir ko'rsatadi. [ 1 -> A: Masalan, shovqin uyqu buzilishiga olib kelishi mumkin, bu esa diqqatni jamlash, xotira va umumiy ish qobiliyatiga salbiy ta'sir qiladi ]. Qisqa muddatli kuchli shovqin quloqqa zarar yetkazsa, [ 2 -> E: Uzoq vaqt ta'sir etuvchi shovqin esa yurak-qon tomir tizimining surunkali shikastlanishiga olib kelishi mumkin ]."
      },
      {
        label: "3-xatboshi va [ 3 ]–[ 4 ] bo'shliqlar",
        uz: "Shovqindan faqat insonlar emas, balki hayvonot olami ham aziyat chekadi. Ko'plab quruqlikdagi hayvonlar va qushlar o'zaro muloqot qilish hamda xavfdan ogohlantirish uchun tovush signallariga tayanadi. [ 3 -> F: Shovqin bunda xalaqit beruvchi omil bo'lishi va hayvonlarda xulq-atvor o'zgarishlariga olib kelishi mumkin ]. Okeanlarda ham kemalar motori va suv osti portlashlari dengiz jonivorlariga tahdid solmoqda: [ 4 -> B: Chunki dengiz sutemizuvchilarida (kit va delfinlarda) shovqin tufayli mo'ljalni yo'qotish, stress hamda oziqlanish va juftlashish xulqining buzilishi kelib chiqadi ]."
      },
      {
        label: "4-xatboshi va [ 5 ]–[ 6 ] bo'shliqlar",
        uz: "Shu sababli shovqinni kamaytirish shaharsozlikning muhim vazifasidir. Avvalo shovqin manbasining o'zini kamaytirish lozim. [ 5 -> D: Bunga gavjum transport yo'llari va turar-joy hududlarini oldindan hududiy ajratish orqali erishish mumkin ]. Bundan tashqari, har bir inson o'zini himoya qilishi ham muhim: [ 6 -> G: Masalan, qurilish maydonlari yoki konsertlar kabi shovqinli joylarda maxsus quloqchin (Gehörschutz) taqish eshitish qobiliyatiga zarar yetish xavfini kamaytiradi ]."
      }
    ] as ParagraphTranslation[],
    text: `<p>Ob Straßenverkehr, Baustellen oder Flugzeuge – in unserer modernen Industriegesellschaft sind wir fast pausenlos einer erheblichen Geräuschkulisse ausgesetzt. Wissenschaftler warnen schon lange davor, dass dauerhafter Lärm weit mehr ist als nur eine lästige Begleiterscheinung des Alltags: Er macht nachweislich krank. <span class="text-gap">[ 1 ]</span> Doch nicht nur die geistige Fitness leidet unter dem ständigen Geräuschpegel. Während ein plötzlicher, extrem lauter Knall unmittelbar das Gehör schädigen kann, wirken moderate Dauerbelastungen oft schleichend auf den gesamten Organismus. <span class="text-gap">[ 2 ]</span></p>
<p>Unter der zunehmenden Verlärmung der Umwelt leidet jedoch nicht nur der Mensch, sondern auch die Tierwelt. Viele Vögel, Amphibien und Säugetiere an Land sind auf akustische Signale angewiesen, um Reviere abzugrenzen, Partner anzulocken oder Artgenossen vor Feinden zu warnen. <span class="text-gap">[ 3 ]</span> Manche Singvögel in Großstädten verlegen ihren Gesang inzwischen sogar in die Nachtstunden, um den Verkehrslärm am Tag zu umgehen. Noch dramatischer ist die Situation in den Weltmeeren, wo Schiffsmotoren, Sonarwellen und der Bau von Offshore-Windparks unter Wasser einen ohrenbetäubenden Lärm erzeugen. <span class="text-gap">[ 4 ]</span> Nicht selten stranden Wale infolgedessen orientierungslos an den Küsten.</p>
<p>Um Mensch und Natur besser vor akustischer Verschmutzung zu schützen, sind Politik und Stadtplanung gleichermaßen gefordert. Ziel muss es sein, die Lärmbelastung bereits an ihrer Quelle einzudämmen. <span class="text-gap">[ 5 ]</span> Wo dies nachträglich nicht mehr möglich ist, helfen Lärmschutzwände, Flüsterasphalt oder schallisolierte Fenster. Darüber hinaus kann aber auch jeder Einzelne im Alltag aktiv zur eigenen Vorsorge beitragen. <span class="text-gap">[ 6 ]</span> Denn einmal zerstörte Sinneszellen im Innenohr lassen sich medizinisch nicht wiederherstellen.</p>`,
    options: [
      { key: 'A', text: 'Beispielsweise kann Lärm zu Schlafstörungen führen, die Auswirkungen auf die Konzentrationsfähigkeit, das Gedächtnis und die allgemeine Leistungsfähigkeit haben können.', uz: "Masalan, shovqin uyqu buzilishiga olib kelishi mumkin, bu esa diqqatni jamlash, xotira va umumiy ish qobiliyatiga ta'sir ko'rsatadi." },
      { key: 'B', text: 'Denn bei Meeressäugern werden durch Lärm Orientierungsprobleme, Stress und Störungen des Nahrungs- und Paarungsverhaltens ausgelöst.', uz: "Chunki dengiz sutemizuvchilarida shovqin tufayli mo'ljalni yo'qotish, stress hamda oziqlanish va juftlashish xulqining buzilishi yuzaga keladi." },
      { key: 'C', text: 'Diese europaweiten Regelungen zielen auf Lärmreduktion in Wohngebieten ab.', uz: "Ushbu umumyevropa qoidalari turar-joy hududlarida shovqinni kamaytirishga qaratilgan. (Ortiqcha gap)" },
      { key: 'D', text: 'Diese könnte durch die räumliche Trennung von stark befahrenen Verkehrswegen und Wohngebieten von vornherein vermieden werden.', uz: "Buning (shovqin yukining) oldini gavjum transport yo'llari va turar-joy hududlarini boshdanoq hududiy ajratish orqali olish mumkin." },
      { key: 'E', text: 'Länger einwirkender Lärm kann dagegen eine chronische Schädigung des Herz-Kreislauf-Systems zur Folge haben.', uz: "Uzoq vaqt ta'sir etuvchi shovqin esa yurak-qon tomir tizimining surunkali shikastlanishiga olib kelishi mumkin." },
      { key: 'F', text: 'Lärm kann sich dabei als Störfaktor erweisen, was bei den Tieren zu Verhaltensänderungen führen kann.', uz: "Shovqin bunda xalaqit beruvchi omil bo'lishi va hayvonlarda xulq-atvor o'zgarishlariga olib kelishi mumkin." },
      { key: 'G', text: 'So kann das Tragen von Gehörschutz in lauten Umgebungen wie Baustellen oder Konzerten das Risiko von Hörschäden verringern.', uz: "Masalan, qurilish maydonlari yoki konsertlar kabi shovqinli joylarda quloqchin taqish eshitish qobiliyati shikastlanishi xavfini kamaytiradi." },
      { key: 'H', text: 'Zudem ist für viele Fische die Schallwahrnehmung wichtig, um Fressfeinden zu entgehen.', uz: "Bundan tashqari, ko'plab baliqlar uchun yirtqichlardan qochishda tovushni sezish muhimdir. (Ortiqcha gap)" }
    ],
    answers: { '1': 'A', '2': 'E', '3': 'F', '4': 'B', '5': 'D', '6': 'G' },
    explanations: {
      '1': "Keyingi gapdagi «nicht nur die geistige Fitness» iborasi A variantdagi «Konzentrationsfähigkeit, das Gedächtnis» so'zlariga ishora qiladi.",
      '2': "«ein plötzlicher Knall» ga qarama-qarshi ravishda E variantda «Länger einwirkender Lärm kann dagegen...» keltiriladi.",
      '3': "Hayvonlarning akustik signallari haqidagi gapdan keyin F variantda shovqin xulq-atvor o'zgarishiga («Verhaltensänderungen» — masalan, tunda sayrashga) olib kelishi aytiladi.",
      '4': "Okeanlardagi shovqin va keyingi gapdagi «stranden Wale orientierungslos» o'rtasini B variant («Meeressäugern... Orientierungsprobleme») bog'laydi.",
      '5': "«die Lärmbelastung (fem.) ... einzudämmen» -> D variantda «Diese könnte durch die räumliche Trennung ... von vornherein vermieden werden».",
      '6': "«jeder Einzelne ... zur eigenen Vorsorge beitragen» -> G variantda quloqchin (Gehörschutz) taqish misol qilib keltiriladi."
    }
  },
  lv2: {
    title: 'Allein im Restaurant?',
    titleUz: 'Restoranda yolg‘iz ovqatlanishmi?',
    uzbekVocab: [
      { de: 'der Alleinesser / Solo-Gast', uz: 'restoranda yolg‘iz ovqatlanuvchi xo‘randa' },
      { de: 'mitleidige Blicke ernten', uz: 'achinish nigohlariga duchor bo‘lmoq' },
      { de: 'der Spotlight-Effekt', uz: '«projektor effekti» (hamma menga qarayapti deb o‘ylash psixologik hodisasi)' },
      { de: 'der Misanthrop', uz: 'odamovi, insonlarni yoqtirmaydigan shaxs (mizantrop)' },
      { de: 'die Entschleunigung', uz: 'hayot sur’atini sekinlashtirish, xotirjamlik' }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: 'Abschnitt A (Yolg‘iz o‘tirgan xo‘randa haqida turli taxminlar)',
        uz: "Restoranda bir kishilik stol atrofidagi odam haqida turli taxminlar (unterschiedliche Annahmen) bildiriladi: kimdir uni xizmat safaridagi yolg'iz odam yoki uchrashuvga sherigi kelmagan bechora deb o'ylasa, boshqa birov aksincha («Ein anderer äußert die gegenteilige Vermutung...») uni ovqatdan zavq oluvchi mustaqil gurman deb taxmin qiladi [9-savol: A]."
      },
      {
        label: 'Abschnitt B (Muallifning shaxsiy sabablari — Beweggründe)',
        uz: "Muallif o'zini ham yolg'iz ovqatlanuvchilar qatoriga qo'shadi va o'z sabablarini (eigene Beweggründe) bayon etadi: «Auch ich, der Autor dieses Textes, verstehe mich als einer dieser Alleinesser...» — gavjum ish kunidan keyin u suhbatlashish majburiyatisiz taom ta'midan va xotirjamlikdan bahramand bo'lishni xohlaydi [10-savol: B]."
      },
      {
        label: 'Abschnitt C (Ekspert fikriga murojaat — Jon Kachoppo)',
        uz: "Muallif Chikago universiteti psixologi va yolg'izlik tadqiqotchisi Jon Kachoppo (John Cacioppo) bahosiga tayanadi: yolg'iz bo'lish (Alleinsein) va o'zini yolg'iz his qilish (Einsamkeit) bir narsa emas; o'zi xohlab yolg'iz qolish ruhiy tiklanishga yordam beradi [7-savol: C]."
      },
      {
        label: 'Abschnitt D (O‘quvchiga bevosita murojaat va ikki atama ta’rifi)',
        uz: "Muallif o'quvchiga bevosita murojaat qiladi: «Dies können Sie sicher nachvollziehen, wenn Sie sich vorstellen...» [12-savol: D]. Shu bo'limda u «Spotlight-Effekt» (odam o'ziga atrofdagilarning e'tiborini haddan ortiq bo'rttirib tasavvur qilishi) va «Misanthrop» (odamovi) tushunchalariga aniq ta'rif (Definitionen) beradi [11-savol: D]."
      },
      {
        label: 'Abschnitt E (Jamiyat va restoranlarga maslahat)',
        uz: "Yakunida muallif foydali maslahat (Rat / Empfehlung) beradi: «Nützlich ist sicher folgende Empfehlung: Die Gesellschaft sollte das Alleinessen endlich enttabuisieren...» va har bir kishiga buni sinab ko'rishni tavsiya qiladi [8-savol: E]."
      }
    ] as ParagraphTranslation[],
    text: `<div class="text-paragraph" data-para="A"><span class="para-tag">[Abschnitt A]</span> Ein Samstagabend in einem gut besuchten italienischen Restaurant: An den Tischen wird gelacht, angestoßen und angeregt diskutiert. Nur an einem kleinen Tisch am Rande sitzt eine Person ganz für sich allein vor einem Teller Pasta. Was geht den anderen Gästen wohl durch den Kopf, wenn sie dieses Bild sehen? Es sind viele unterschiedliche Gründe vorstellbar, die man einer solchen Szene zuschreibt: Manch einer vermutet sofort, die Person sei frisch verlassen worden, sitze auf einer langweiligen Geschäftsreise fest oder habe schlichtweg keine Freunde. Ein anderer äußert die gegenteilige Vermutung und hält den Solo-Gast für einen souveränen Feinschmecker oder gar einen inkognito speisenden Restaurantkritiker.</div>
<div class="text-paragraph" data-para="B"><span class="para-tag">[Abschnitt B]</span> Auch ich, der Autor dieses Textes, verstehe mich als einer dieser überzeugten Alleinesser – und meine persönlichen Beweggründe haben rein gar nichts mit sozialer Isolation zu tun. Nach einem hektischen Arbeitstag voller Konferenzen, Telefonate und Verpflichtungen sehne ich mich am Abend oft nach vollkommener Ruhe. Wenn ich allein in ein gutes Lokal gehe, muss ich keinen Smalltalk führen, keine Kompromisse bei der Wahl des Restaurants eingehen und mich nicht nach dem Esstempo anderer richten. Stattdessen kann ich mich voll und ganz auf die Aromen des Gerichts konzentrieren und meine Gedanken schweifen lassen.</div>
<div class="text-paragraph" data-para="C"><span class="para-tag">[Abschnitt C]</span> Dass diese selbstgewählte Auszeit keineswegs bedenklich ist, unterstreicht auch die moderne Psychologie. Der renommierte Neurowissenschaftler und Einsamkeitsforscher Professor John Cacioppo von der University of Chicago betonte in seinen Studien immer wieder den fundamentalen Unterschied zwischen objektivem Alleinsein und subjektiver Einsamkeit. Während ungewollte soziale Isolation krank machen kann, ist das bewusste, freiwillige Alleinsein laut Cacioppos Einschätzung eine wichtige Ressource zur emotionalen Regeneration und Selbstreflexion.</div>
<div class="text-paragraph" data-para="D"><span class="para-tag">[Abschnitt D]</span> Dennoch kostet der erste Restaurantbesuch ohne Begleitung viele Menschen große Überwindung. Dies können Sie, liebe Leserinnen und Leser, sicher gut nachvollziehen, wenn Sie sich einmal vorstellen, allein einen vollbesetzten Speisesaal zu betreten und nach einem Tisch für eine Person zu fragen. Man hat sofort das Gefühl, von allen angestarrt zu werden. In der Sozialpsychologie bezeichnet man dieses Phänomen als „Spotlight-Effekt“: Darunter versteht man die kognitive Verzerrung, durch die Menschen systematisch überschätzen, wie stark ihr eigenes Verhalten und Aussehen von anderen wahrgenommen wird. Genauso falsch ist das Vorurteil, jeder Alleinesser sei ein „Misanthrop“ – also ein Menschenfeind, der die Gesellschaft anderer grundsätzlich verabscheut und meidet.</div>
<div class="text-paragraph" data-para="E"><span class="para-tag">[Abschnitt E]</span> In Metropolen wie Tokio, New York oder Amsterdam gehören Einzelplätze an stilvollen Tresen längst zum Alltag, während man hierzulande oft noch den ungemütlichen Katzentisch neben der Küchentür zugewiesen bekommt. Nützlich ist daher sicher folgende Empfehlung: Sowohl die Gastronomie als auch unsere Gesellschaft sollten das Alleinessen endlich von seinem Stigma befreien, und jeder Einzelne sollte sich ruhig einmal trauen, sich selbst zum Abendessen auszuführen. Es ist eine wunderbare Übung in Sachen Achtsamkeit und Unabhängigkeit.</div>`,
    questions: [
      { id: 7, text: 'In welchem Abschnitt beruft sich der Autor auf die Einschätzung eines Experten?', uz: "Qaysi bo'limda muallif ekspert bahosiga tayanadi?", ans: 'C', expl: "C bo'limida Chikago universiteti professori Jon Kachoppo (John Cacioppo) tadqiqotlari va bahosi keltiriladi." },
      { id: 8, text: 'In welchem Abschnitt gibt der Autor einen Rat?', uz: "Qaysi bo'limda muallif maslahat beradi?", ans: 'E', expl: "E bo'limida: «Nützlich ist daher sicher folgende Empfehlung: Sowohl die Gastronomie als auch unsere Gesellschaft sollten...»." },
      { id: 9, text: 'In welchem Abschnitt gibt der Autor unterschiedliche Annahmen wieder?', uz: "Qaysi bo'limda muallif turli xil taxminlarni keltiradi?", ans: 'A', expl: "A bo'limida: «Es sind viele unterschiedliche Gründe vorstellbar... Manch einer vermutet... Ein anderer äußert die gegenteilige Vermutung...»." },
      { id: 10, text: 'In welchem Abschnitt legt der Autor seine eigenen Beweggründe dar?', uz: "Qaysi bo'limda muallif o'zining shaxsiy sabablarini (motivlarini) bayon etadi?", ans: 'B', expl: "B bo'limida: «Auch ich, der Autor dieses Textes, verstehe mich als einer dieser überzeugten Alleinesser – und meine persönlichen Beweggründe...»." },
      { id: 11, text: 'In welchem Abschnitt liefert der Autor Definitionen?', uz: "Qaysi bo'limda muallif tushunchalarga ta'rif beradi?", ans: 'D', expl: "D bo'limida «Spotlight-Effekt» va «Misanthrop» atamalariga ta'rif berilgan." },
      { id: 12, text: 'In welchem Abschnitt wendet sich der Autor direkt an seine Leserinnen und Leser?', uz: "Qaysi bo'limda muallif o'quvchilarga bevosita murojaat qiladi?", ans: 'D', expl: "D bo'limida: «Dies können Sie, liebe Leserinnen und Leser, sicher gut nachvollziehen, wenn Sie sich einmal vorstellen...»." }
    ]
  },
  lv3: {
    title: 'Bundesfreiwilligendienst: Wieso jeder Dritte ihn abbricht',
    titleUz: 'Federal ko‘ngillilar xizmati (BFD): nega har uchinchi ishtirokchi uni to‘xtatib qo‘yadi?',
    uzbekVocab: [
      { de: 'der Bundesfreiwilligendienst (BFD / Bufdi)', uz: 'Germaniyadagi Federal ko‘ngillilar xizmati' },
      { de: 'das Nachfolgemodell für den Zivildienst', uz: 'muqobil fuqarolik xizmatining o‘rnini bosuvchi model' },
      { de: 'der Vorruhestand ohne Abschläge', uz: 'pensiyadan ushlanmalarsiz muddatidan oldin nafaqaga chiqish' },
      { de: 'hineinrutschen in (+ Akk.)', uz: 'tasodifan / o‘zi rejalashtirmagan holda kirib qolmoq' },
      { de: 'das Taschengeld', uz: 'cho‘ntak puli (rag‘batlantirish to‘lovi)' },
      { de: 'die Abbrecherquote', uz: 'xizmatni muddatidan oldin tashlab ketuvchilar ulushi' },
      { de: 'das Lohndumping / der Stellenabbau', uz: 'ish haqini sun’iy pasaytirish / shtat o‘rinlarini qisqartirish' }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: '1–2-xatboshilar (Tomas Gryuner qariyalar uyida va BFD tarixi)',
        uz: "56 yoshli Tomas Gryuner Bexxofendagi qariyalar uyida (Seniorenheim) keksalarga o'rnidan turish va shaxsiy gigiyenada yordam beradi; u ilgari Telekom kompaniyasida ma'muriy (Verwaltung) sohada ishlagan, qariyalar uyida esa parvarish bilan shug'ullanadi [13-savol: F]. Federal ko'ngillilar xizmati (BFD) 2011-yilda majburiy harbiy xizmat va Zivildienst bekor qilingach, uning o'rnini bosuvchi model (Nachfolgemodell) sifatida joriy etilgan [14-savol: R]."
      },
      {
        label: '3–4-xatboshilar (To‘liq va yarim stavka shartlari hamda Tomasning motivatsiyasi)',
        uz: "BFDda 16 yoshdan 27 yoshgacha bo'lgan yoshlar odatda to'liq stavkada (Vollzeit) ishlashi shart, faqat 27 yoshdan oshganlargina to'liq yoki yarim stavkani (Teilzeit) erkin tanlashi mumkin [15-savol: F]. Ko'ngillilar oyiga maksimal 390 yevrogacha cho'ntak puli (Taschengeld) oladi (oziq-ovqat va yotoqxona haqida matnda aytilmagan) [16-savol: X]. Tomas Gryuner nafaqada ijtimoiy faoliyat bilan shug'ullanishni o'zi qidirmagan: Telekom unga 55 yoshda ushlanmalarsiz erta nafaqaga chiqish sharti sifatida BFD o'tashni taklif qilgan («Eigentlich bin ich da hineingerutscht») [17-savol: F]."
      },
      {
        label: '5–6-xatboshilar (Anna Shnellning bolalar bog‘chasidagi tajribasi va xizmatni to‘xtatishi)',
        uz: "Ijtimoiy sohadagi ko'ngillilarning aniq statistik soni haqida matnda ma'lumot yo'q [18-savol: X]. 19 yoshli Anna Shnell maktabni bitirgach, tarbiyachi (Erzieherin) kasbi o'ziga mos kelish-kelmasligini aniqlash uchun bolalar bog'chasida BFD boshlagan [19-savol: R]. Biroq u 4 oydan keyin xizmatni to'xtatdi: u haftasiga 40 soat to'liq shtatdagi xodimdek ishlagan, oyiga atigi 200 yevro olgan va o'zini arzon ishchi kuchidek his qilgan [20-savol: F — moliyaviy omil/kam haq evaziga 40 soat ishlash ham rol o'ynagan]. Anna xizmatni tashlab ketish ko'rsatkichini kamaytirish uchun vazifalar va ish vaqtini qat'iyroq tartibga solish (reglementieren) zarur deb hisoblaydi [21-savol: R]."
      },
      {
        label: '7-xatboshi (Kasaba uyushmalari xavotiri va Tomasning dunyo bo‘ylab sayohati)',
        uz: "Kasaba uyushmalari ko'ngillilar doimiy xodimlarning o'rnini egallab, shtatlar qisqarishiga (Stellenabbau) olib kelishi mumkinligidan xavotir bildirishadi [22-savol: R]. Tomas Gryuner esa xizmatini mamnuniyat bilan uzaytirgan bo'lardi, ammo u rafiqasi bilan allaqachon dunyo bo'ylab sayohat band qilib qo'ygani sababli xizmatni uzaytirmadi [23-savol: F]."
      }
    ] as ParagraphTranslation[],
    text: `<p>Jeden Morgen um halb acht klopft der 56-jährige Thomas Grüner gut gelaunt an die Zimmertüren des Seniorenheims im fränkischen Bechhofen. Geduldig hilft er den hochbetagten Bewohnern beim Aufstehen, beim Anziehen und bei der täglichen Körperpflege. Noch vor einem Jahr sah sein Arbeitsalltag völlig anders aus: Über drei Jahrzehnte lang saß Grüner bei der Deutschen Telekom im Büro und erledigte Verwaltungstätigkeiten. Heute leistet er einen Bundesfreiwilligendienst (BFD) in der Altenpflege.</p>
<p>Ins Leben gerufen wurde der Bundesfreiwilligendienst im Juli 2011 als direktes Nachfolgemodell für den Zivildienst, der zusammen mit der Wehrpflicht ausgesetzt worden war. Anders als beim früheren Zivildienst steht der BFD nicht nur jungen Männern, sondern Menschen jeden Alters und Geschlechts offen, die sich für sechs bis achtzehn Monate in sozialen, ökologischen oder kulturellen Einrichtungen engagieren möchten.</p>
<p>Allerdings gelten je nach Lebensalter unterschiedliche Rahmenbedingungen: Während Freiwillige zwischen 16 und 27 Jahren den Dienst in der Regel zwingend in Vollzeit absolvieren müssen, können Teilnehmende über 27 Jahre selbst entscheiden, ob sie in Vollzeit oder in Teilzeit von mindestens 20 Wochenstunden arbeiten wollen. Reich wird man als „Bufdi“ nicht: Gesetzlich vorgesehen ist lediglich ein monatliches Taschengeld von derzeit maximal 390 Euro.</p>
<p>Dass sich immer mehr Ältere unter den rund 40 000 Freiwilligen finden, liegt auch an speziellen Programmen großer Konzerne. Thomas Grüner gibt offen zu, dass er nicht etwa selbst aktiv nach einer Möglichkeit gesucht hat, sich im Ruhestand sozial zu engagieren: „Eigentlich bin ich da eher zufällig hineingerutscht“, erzählt er. Sein ehemaliger Arbeitgeber bot ihm an, bereits mit 55 Jahren ohne finanzielle Abschläge in den Vorruhestand zu gehen – unter der Bedingung, mindestens ein halbes Jahr lang einen Bundesfreiwilligendienst abzuleisten.</p>
<p>Doch längst nicht alle Freiwilligen ziehen am Ende eine so positive Bilanz wie Grüner. Nach Angaben des Bundesamts für Familie und zivilgesellschaftliche Aufgaben bricht inzwischen fast jeder dritte Teilnehmer den Dienst vorzeitig ab. Eine von ihnen ist die 19-jährige Anna Schnell. Nach dem Abitur wollte sie durch den BFD in einer Kindertagesstätte Klarheit über ihre eigenen Berufsziele gewinnen und herausfinden, ob der Beruf der Erzieherin zu ihr passt.</p>
<p>Schon nach vier Monaten kündigte Anna jedoch enttäuscht. Statt pädagogische Einblicke zu erhalten, musste sie wegen chronischen Personalmangels hauptsächlich putzen, aufräumen und Aufsicht führen – und das bei einer vollen 40-Stunden-Woche für gerade einmal 200 Euro Taschengeld im Monat. Dieses krasse Missverhältnis zwischen voller Arbeitsbelastung und minimaler Vergütung gab für sie letztlich mit den Ausschlag aufzuhören. Anna hält es deshalb für dringend notwendig, den Einsatz der Freiwilligen in den Einrichtungen stärker zu reglementieren: Nur durch klar definierte Aufgaben und streng kontrollierte Arbeitszeiten lasse sich die hohe Abbrecherquote senken.</p>
<p>Auch Gewerkschaften und Sozialverbände blicken mitunter kritisch auf die Praxis: Gelegentlich wird die Befürchtung geäußert, manche Träger könnten kostengünstige Freiwillige systematisch als Ersatz für reguläre Fachkräfte einplanen. Für Thomas Grüner im Seniorenheim Bechhofen geht die Dienstzeit unterdessen regulär zu Ende. Eigentlich hätte er seinen Einsatz dort sehr gern noch um ein halbes Jahr verlängert, doch daraus wird nichts: Gemeinsam mit seiner Frau hat er bereits vor Monaten eine lange Weltreise gebucht.</p>`,
    questions: [
      { id: 13, text: 'Thomas Grüner verrichtet Verwaltungstätigkeiten in einem Seniorenheim.', uz: "Tomas Gryuner qariyalar uyida ma'muriy ishlarni bajaradi.", ans: 'F', expl: "1-xatboshida: u ma'muriy ishlarni ilgari Telekomda bajargan, qariyalar uyida esa parvarish (Körperpflege, Aufstehen) bilan shug'ullanadi." },
      { id: 14, text: 'Der Bundesfreiwilligendienst wurde als Ersatz für den Zivildienst eingeführt.', uz: "Federal ko'ngillilar xizmati muqobil fuqarolik xizmati (Zivildienst) o'rniga joriy etilgan.", ans: 'R', expl: "2-xatboshida: «im Juli 2011 als direktes Nachfolgemodell für den Zivildienst»." },
      { id: 15, text: 'Beim Bundesfreiwilligendienst kann jeder selbst entscheiden, ob der Einsatz in Vollzeit oder Teilzeit erfolgt.', uz: "Federal ko'ngillilar xizmatida har kim to'liq yoki yarim stavkada ishlashni o'zi hal qila oladi.", ans: 'F', expl: "3-xatboshida: 16–27 yoshdagilar odatda majburiy to'liq stavkada (Vollzeit) ishlaydi, faqat 27 yoshdan oshganlargina tanlay oladi." },
      { id: 16, text: 'Freiwillige können zusätzlich zum Taschengeld Verpflegung und Unterkunft erhalten.', uz: "Ko'ngillilar cho'ntak puliga qo'shimcha ravishda oziq-ovqat va yotoq joy olishlari mumkin.", ans: 'X', expl: "Matnda faqat 390 yevrogacha Taschengeld haqida gap bor, oziq-ovqat va yotoqxona haqida ma'lumot yo'q." },
      { id: 17, text: 'Thomas Grüner hat selbst nach einer Möglichkeit gesucht, sich im Ruhestand sozial zu engagieren.', uz: "Tomas Gryuner nafaqada ijtimoiy faoliyat bilan shug'ullanish imkoniyatini o'zi qidirgan.", ans: 'F', expl: "4-xatboshida: «Eigentlich bin ich da eher zufällig hineingerutscht» — bu 55 yoshda erta nafaqaga chiqish sharti bo'lgan." },
      { id: 18, text: 'Die genaue Zahl der Freiwilligen, die im sozialen Bereich arbeiten, ist statistisch nicht bekannt.', uz: "Ijtimoiy sohada ishlayotgan ko'ngillilarning aniq soni statistik jihatdan ma'lum emas.", ans: 'X', expl: "Matnda faqat jami 40 000 ga yaqin ko'ngilli borligi aytilgan, ijtimoiy soha bo'yicha statistika mavjud-mavjud emasligi tilga olinmagan." },
      { id: 19, text: 'Anna Schnell hoffte, durch den Bundesfreiwilligendienst Klarheit über ihre Berufsziele zu gewinnen.', uz: "Anna Shnell Federal ko'ngillilar xizmati orqali kasbiy maqsadlariga aniqlik kiritishga umid qilgan.", ans: 'R', expl: "5-xatboshida: «wollte sie durch den BFD ... Klarheit über ihre eigenen Berufsziele gewinnen»." },
      { id: 20, text: 'Finanzielle Gründe spielten bei Annas Entscheidung, den Bundesfreiwilligendienst abzubrechen, keine Rolle.', uz: "Annaning xizmatni to'xtatish qarorida moliyaviy sabablar hech qanday rol o'ynamagan.", ans: 'F', expl: "6-xatboshida: 40 soatlik ish va atigi 200 yevro to'lov o'rtasidagi nomutanosiblik xizmatni to'xtatishiga sabab bo'lgan (PDF 33 kaliti: F)." },
      { id: 21, text: 'Anna hält es für notwendig, den Dienst in den Einrichtungen stärker zu reglementieren.', uz: "Anna muassasalardagi xizmatni qat'iyroq tartibga solish zarur deb hisoblaydi.", ans: 'R', expl: "6-xatboshida: «Anna hält es deshalb für dringend notwendig, den Einsatz der Freiwilligen ... stärker zu reglementieren.»" },
      { id: 22, text: 'Gelegentlich wird die Befürchtung geäußert, Freiwillige könnten reguläre Beschäftigte ersetzen.', uz: "Ba'zida ko'ngillilar doimiy xodimlar o'rnini egallab olishi mumkin degan xavotir bildiriladi.", ans: 'R', expl: "7-xatboshida: «Gelegentlich wird die Befürchtung geäußert, manche Träger könnten kostengünstige Freiwillige systematisch als Ersatz für reguläre Fachkräfte einplanen.»" },
      { id: 23, text: 'Thomas Grüner hat sich für eine Verlängerung des Freiwilligendienstes entschieden.', uz: "Tomas Gryuner ko'ngillilar xizmatini uzaytirishga qaror qildi.", ans: 'F', expl: "7-xatboshida: u uzaytirishni xohlagan bo'lardi, ammo rafiqasi bilan dunyo bo'ylab sayohat band qilgani uchun uzaytirmadi." },
      {
        id: 24,
        text: 'Welche der folgenden Überschriften passt am besten? a) Bundesfreiwilligendienst: Wieso jeder Dritte ihn abbricht, b) Ein Jahr für das Gemeinwohl, c) Neue Perspektiven für den Ruhestand',
        uz: "Quyidagi sarlavhalardan qaysi biri matnga eng mos keladi?",
        ans: 'A',
        opts: [
          'A) Bundesfreiwilligendienst: Wieso jeder Dritte ihn abbricht',
          'B) Ein Jahr für das Gemeinwohl',
          'C) Neue Perspektiven für den Ruhestand'
        ],
        optsUz: [
          "A) Federal ko'ngillilar xizmati: nega har uchinchi ishtirokchi uni to'xtatadi?",
          "B) Umumiy farovonlik uchun bir yil",
          "C) Nafaqa davri uchun yangi istiqbollar"
        ],
        expl: "Matnda BFD tizimi, uning shartlari va nima uchun ko'plab ishtirokchilar uni to'xtatishi tahlil qilingan (A)."
      }
    ]
  },
  sp: VARIANT_32_READING.sp
};
