/**
 * Authentic telc Deutsch C1 Hochschule — Variants 16, 17, 18
 * Extracted from 16_b5dbceb7.pdf, 17_f798f4e2.pdf, 18_4335ac6f.pdf
 * All Arabic explanations, vocabulary tables, transcripts, and keys translated into Uzbek.
 */

import { VocabItem, ParagraphTranslation } from './variants14And15Data';

// ============================================================================
// VARIANT 16 (PDF 16 — ♧ الاحتمال السادس عشر ♧)
// ============================================================================
export const VARIANT_16_READING = {
  pdfSource: '/assets/aistudio/16_b5dbceb7.pdf',
  lv1: {
    title: 'Höhlenforschung: Expeditionen ins Erdinnere',
    titleUz: "G'orlarni tadqiq qilish (Speleologiya): Yer qa'riga ekspeditsiyalar",
    uzbekVocab: [
      { de: 'der Abstieg in die Unterwelt', uz: 'yer osti dunyosiga tushish' },
      { de: 'die Speläologen (Höhlenforscher)', uz: "speleologlar (g'or tadqiqotchilari)" },
      { de: 'im Verborgenen stattfinden', uz: "yashirin holda / ko'zdan panada sodir bo'lmoq" },
      { de: 'die Schauhöhle', uz: "sayyohlar uchun ochiq namoyish g'ori" },
      { de: 'sich vorantasten', uz: 'paypaslab / ehtiyotkorlik bilan oldinga siljimoq' },
      { de: 'robben (robbt)', uz: 'qorin bilan emaklab yurmoq' },
      { de: 'die Tropfsteine (Stalaktiten/Stalagmiten)', uz: 'ohaktosh sumalaklari (stalaktit va stalagmitlar)' },
      { de: 'mangels UV-Strahlung', uz: 'ultrabinafsha nurlar yetishmasligi sababli' },
      { de: 'katastermäßig erfasst', uz: "kadastr ro'yxatiga kiritilgan / rasmiy qayd etilgan" },
      { de: 'ehrenamtlich', uz: 'ixtiyoriy ravishda (haq olmasdan, jamoatchilik asosida)' },
      { de: 'der Steinschlag', uz: 'tosh qulashi / tepadan tosh tushishi xavfi' },
      { de: 'das A und O sein', uz: "eng asosiy va hal qiluvchi narsa bo'lmoq" }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: "Kirish va [ 1 ] bo'shliq",
        uz: "Yer osti dunyosiga tushish — ularning ehtirosi: g'or tadqiqotchilari yer qobig'idagi bo'shliqlarga chuqur kirib borishadi. (0 -> Z: U yerda ular noma'lum shaxtalar, zallar va daralarni qidirib, g'orning yangi qismlarini o'lchaydilar va xaritaga tushiradilar). Jamoatchilik bundan deyarli xabar topmaydi, chunki g'or tadqiqotchilarining — yoki ilmiy tilda «speleologlar»ning ishi so'zning to'g'ri ma'nosida yashirincha (yer ostida) kechadi. Xo'sh, g'or tadqiqotchilarini shunchaki sayyoh sifatida namoyish g'orlariga borish emas, balki kunduzgi yorug'lik va issiqlikdan yiroqda egri-bugri yo'laklar orqali yer qa'riga intilishga nima undaydi? «Birinchidan, albatta, yer osti dunyosining go'zalligi», deydi Fuldada joylashgan Gessen g'or va karst tadqiqotlari uyushmasi vakili Shtefan Senker (Stefan Zaenker): «Kishi go'yo abadiydek tuyulgan vaqt davomida qorong'u tuynukdan emaklab o'tadi va to'satdan hali hech kim tegmagani uchun oppoq bo'lib osilib turgan ajoyib stalaktitlar bor xonaga chiqib qoladi.» [ 1 -> C: Bundan tashqari, noma'lum narsalarni, masalan, maxsus tirik mavjudotlarni kashf etish ham juda muhimdir ]."
      },
      {
        label: "2-xatboshi va [ 2 ] bo'shliq",
        uz: "Zero g'orlar faqatgina tosh va suvdan iborat dunyo emas: Germaniyadagi g'or hayvonlari ro'yxati deyarli 750 turni o'z ichiga oladi. Ko'rshapalaklar kabi «g'or mehmonlari»dan tashqari, butun umrini o'sha yerda o'tkazadigan haqiqiy «g'or mutaxassislari» ham mavjud. Bu jonivorlarning ko'pchiligi juda och rangda yoki hatto oppoq bo'ladi: [ 2 -> E: Chunki ultrabinafsha nurlanish yo'qligi sababli rang pigmentlari hosil bo'lmaydi, shuningdek ularning ko'rish qobiliyati (Sehsinn) ham ko'pincha sust rivojlangan bo'ladi ]. Buning evaziga g'orda yashovchi jonzotlar odatda kuchli hid bilish va paypaslash (sezish) qobiliyatiga ega."
      },
      {
        label: "3-xatboshi va [ 3 ] bo'shliq",
        uz: "Germaniya g'orlarga boy mamlakatdir. Taxminan 11 000 ta g'or kadastr ro'yxatiga olingan. Shunga qaramay, «g'or tadqiqotchisi» degan rasmiy kasb mavjud emas va Germaniyada g'orlarni o'rganish ko'ngillilik (ehrenamtlich) asosida amalga oshiriladi. Shtefan Senkerning tushuntirishicha, buning ikkita sababi bor. Birinchidan, bu moliyalashtirish bilan bog'liq: bunday ishga pul to'laydigan hech kim yo'q, chunki bu mashg'ulot juda ko'p vaqt talab qiladi. [ 3 -> H: Ikkinchi tomondan esa, g'orlarni tadqiq qilish ko'plab fan sohalarini birlashtiruvchi fanlararo (interdisziplinäre) fandir ]. Bunga jumladan arxeologiya, biologiya, geografiya, geologiya, gidrologiya, klimatologiya va paleontologiya kiradi."
      },
      {
        label: "4-xatboshi va [ 4 ]–[ 6 ] bo'shliqlar",
        uz: "G'or deganda tabiiy ravishda paydo bo'lgan, qattiq tog' jinslari bilan o'ralgan va inson kira oladigan kamida besh metr uzunlikdagi bo'shliq tushuniladi (ta'riflanadi). [ 4 -> D: Ushbu ta'rif (Begriffsbestimmung) uning ortida qanchalik keng yo'laklar, daralar, hatto yer osti daryolari va ko'llari tizimi yashiringanini faqatgina taxmin qilish imkonini beradi ]. G'orlarni tadqiq qilmoqchi bo'lgan odam nafaqat jismonan chiniqqan bo'lishi, balki alpinizm malakasiga ham ega bo'lishi foydadan xoli emas. Bundan tashqari, maxsus tayyorgarlik (Ausbildung) mutlaqo zarur. [ 5 -> B: Bunda kishi, masalan, zaruriy anjomlardan (Ausrüstung) foydalanishni o'rganadi ]. Bu anjomlarga tosh tushishidan himoyalovchi va peshona chirog'i o'rnatilgan kaska, turli tirmashib chiqish vositalari hamda yirtilmaydigan, suv o'tkazmaydigan va issiq tutadigan maxsus kombinezon kiradi. [ 6 -> F: Ko'llar va suv bosgan yo'laklar mavjud bo'lgan g'orlar uchun esa qo'shimcha ravishda g'avvoslik anjomlari (Taucherausrüstung) ham zarur ]. Va nihoyat, ko'plab xavfsizlik choralari eng asosiy qoidadir (das A und O), chunki chuqurlikdagi o'rganilmagan dunyo qanchalik maftunkor bo'lmasin, bunday ekspeditsiya xavf-xatarlarini aslo kam baholab bo'lmaydi."
      }
    ] as ParagraphTranslation[],
    text: `<p>Der Abstieg in die Unterwelt ist ihre Leidenschaft: Höhlenforscher dringen tief in die Hohlräume der Erdkruste vor. <em>[0: Z]</em> Die Öffentlichkeit nimmt davon kaum etwas wahr, denn die Arbeit der Höhlenforscher oder – wie der Fachbegriff lautet – „Speläologen“ findet wortwörtlich im Verborgenen statt.</p>
<p>Doch was bewegt Höhlenforscher, nicht bloß sogenannte Schauhöhlen als Touristen zu besuchen, sondern sich fernab von Tageslicht und Wärme durch gewundene Gänge in die Tiefen der Erde voranzutasten? „Einmal ist es natürlich die Schönheit der Welt unter Tage“, sagt Stefan Zaenker vom Landesverband für Höhlen- und Karstforschung Hessen e. V., der in Fulda ansässig ist: „Man robbt eine scheinbar ewig lange Zeit durch ein dunkles Loch und kommt dann plötzlich in einen Raum, wo herrliche Tropfsteine hängen, die noch ganz weiß, weil unberührt sind.“ <span class="text-gap">[ 1 ]</span></p>
<p>Denn Höhlen sind nicht nur eine Welt aus Gestein und Wasser: Knapp 750 Arten umfasst die Liste der Höhlentiere in Deutschland. Neben Höhlengästen wie Fledermäusen gibt es auch echte Höhlenspezialisten, die ihr ganzes Leben dort verbringen. Viele dieser Tiere sind sehr hell oder sogar weiß: <span class="text-gap">[ 2 ]</span> Dafür haben die Höhlenbewohner meist einen guten Geruchs- und Tastsinn.</p>
<p>Deutschland ist ein höhlenreiches Land. Rund 11.000 Höhlen sind katastermäßig erfasst. Dennoch gibt es den Beruf des Höhlenforschers nicht, und Höhlenforschung ist in Deutschland ehrenamtlich. Das habe zwei Gründe, erklärt Stefan Zaenker. Zum einen liege dies an der Finanzierung. Es gebe niemanden, der so etwas bezahlen würde – und wahrscheinlich auch nicht könnte, weil viel Zeit in dieser Profession stecke. <span class="text-gap">[ 3 ]</span> Dazu gehörten unter anderem Archäologie, Biologie, Geographie, Geologie, Hydrologie, Klimatologie oder Paläontologie.</p>
<p>Man definiert eine Höhle als mindestens fünf Meter langen, von Menschen begehbaren Hohlraum, der natürlich entstanden und von festem Gestein umgeben ist. <span class="text-gap">[ 4 ]</span> Wer Höhlen erforschen wolle, müsse nicht nur körperlich fit sein, auch alpinistische Qualifikationen seien von Vorteil, betont Zaenker. Außerdem brauche man unbedingt eine spezielle Ausbildung. <span class="text-gap">[ 5 ]</span> Zu dieser gehören ein Helm gegen Steinschlag, an dem die Stirnlampe befestigt ist, verschiedene Kletter- und Steighilfen ebenso wie reißfeste, wasserdichte und wärmende Spezialkleidung in Form eines Overalls. <span class="text-gap">[ 6 ]</span> Nicht zuletzt sind zahlreiche Sicherheitsmaßnahmen das A und O. Denn so faszinierend die unerforschte Welt in der Tiefe auch ist: Die Gefahren einer solchen Expedition sind nicht zu unterschätzen.</p>`,
    options: [
      {
        key: 'A',
        text: 'Als zusätzliche Motive der Höhlenforscher sind aber auch Selbstbestätigung, Neugier und die Lust am Nervenkitzel zu nennen.',
        uz: "G'or tadqiqotchilarining qo'shimcha motivlari sifatida o'zini tasdiqlash, qiziquvchanlik va hayajon (adrenalin) ishtiyoqini ham aytish mumkin. (Ortiqcha gap)"
      },
      {
        key: 'B',
        text: 'Dabei lerne man zum Beispiel die Verwendung der notwendigen Ausrüstung:',
        uz: "Bunda (maxsus tayyorgarlikda) kishi, masalan, zaruriy anjomlardan foydalanishni o'rganadi:"
      },
      {
        key: 'C',
        text: 'Daneben sei es natürlich auch wichtig, Unbekanntes zu entdecken, wie zum Beispiel spezielle Lebewesen.',
        uz: "Bundan tashqari, noma'lum narsalarni, masalan, maxsus tirik mavjudotlarni kashf etish ham, albatta, muhimdir."
      },
      {
        key: 'D',
        text: 'Diese Begriffsbestimmung lässt nur erahnen, welche ausgedehnten Systeme von Gängen, Schluchten, ja sogar Wasserläufen und Seen sich dahinter verbergen.',
        uz: "Ushbu ta'rif uning ortida qanchalik keng yo'laklar, daralar va hatto suv yo'llari hamda ko'llar tizimi yashiringanini faqat taxmin qilish imkonini beradi."
      },
      {
        key: 'E',
        text: 'Denn Farbpigmente werden mangels UV-Strahlung nicht gebildet, auch ihr Sehsinn ist meist unterentwickelt.',
        uz: "Chunki ultrabinafsha nurlanish yo'qligi sababli rang pigmentlari hosil bo'lmaydi, shuningdek ularning ko'rish qobiliyati ham ko'pincha sust rivojlangan."
      },
      {
        key: 'F',
        text: 'Für Höhlen, in denen sich Seen und überflutete Gänge befinden, ist außerdem eine Taucherausrüstung notwendig.',
        uz: "Ko'llar va suv bosgan yo'laklar joylashgan g'orlar uchun esa qo'shimcha ravishda g'avvoslik anjomlari zarur."
      },
      {
        key: 'G',
        text: 'Zu den Höhlenbewohnern gehören zahlreiche Tierarten, die an diese besondere Umgebung angepasst sind.',
        uz: "G'orda yashovchilar qatoriga ushbu maxsus muhitga moslashgan ko'plab hayvon turlari kiradi. (Ortiqcha gap)"
      },
      {
        key: 'H',
        text: 'Zum anderen sei Höhlenforschung eine interdisziplinäre Wissenschaft, die viele Fächer zusammenführe.',
        uz: "Ikkinchi tomondan esa, g'orlarni tadqiq qilish ko'plab fan sohalarini birlashtiruvchi fanlararo fandir."
      }
    ],
    answers: { '1': 'C', '2': 'E', '3': 'H', '4': 'D', '5': 'B', '6': 'F' }
  },
  lv2: {
    title: 'Iss dich glücklich',
    titleUz: "O'zingni baxtli qilib ovqatlan (Taomning ruhiyat va kayfiyatga ta'siri)",
    uzbekVocab: [
      { de: 'aufgeweicht in Lindenblütentee', uz: "jo'ka (lipa) gulli choygaivib yumshatilgan" },
      { de: 'ein wohliges Glücksgefühl', uz: 'yoqimli baxt hissi' },
      { de: 'die Geborgenheit', uz: 'xotirjamlik, xavfsizlik va mehr hissi' },
      { de: 'die Schwermütigen', uz: "g'amgin / tushkunlikka tushgan insonlar" },
      { de: 'der Bewegungsmuffel', uz: 'harakat qilishni yoqtirmaydigan (dangasa) odam' },
      { de: 'die Nervennahrung', uz: 'asablarni tinchlantiruvchi va quvvatlantiruvchi ozuqa' },
      { de: 'das Nervengeflecht', uz: 'murakkab asab tolalari chigali (to‘ri)' },
      { de: 'auf das Gemüt einwirken', uz: "ruhiyatga / kayfiyatga ta'sir ko'rsatmoq" },
      { de: 'bedächtige Weise', uz: 'vazmin, mulohazali va ehtiyotkor tarzda' },
      { de: 'Begehrlichkeiten wecken', uz: "katta qiziqish / ishtaha (foyda ko'rish istagi) uyg'otmoq" }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: 'Abschnitt A (Madlen pechenyesi, buvining olma pirogi va hissiy xotiralar)',
        uz: "Fransuz qumoq pechenyesi — «Madlen»ning kichik bir bo'lagi yetarli bo'ldi: jo'ka gulli choyga botirilgan ushbu pishiriqdan totib ko'rish Marsel Prustning mashhur «Yo'qotilgan vaqtni qidirib» romanlar turkumi qahramonida bolalikdan tanish bo'lgan yoqimli baxt tuyg'usini qayta jonlantirdi. Jahon adabiyotidagi ushbu mashhur sahna ko'pchilikka begona bo'lmagan tajribani tasvirlaydi: Tasavvur qiling, siz bolaligingizda suyukli buvingiz har doim pishirgan olma pirogidek ta'mga ega pirogni tishlayapsiz [Misol 0: A — fikriy eksperiment]. Tanish ta'm qalbingizda iliqlik va xotirjamlik tuyg'ularini uyg'otayotganini aniq his qilasiz [8-savol: A — muallif o'quvchilarning hissiyotlariga murojaat qiladi]."
      },
      {
        label: "Abschnitt B (Gippokratning eshak suti haqidagi kulgili maslahati va zamonaviy tibbiyot)",
        uz: "Ming yillardan beri shunday: qadimgi dunyoning eng mashhur tabibi Koslik Gippokrat tushkunlikka tushganlarga bugungi kunda juda katta kulgi uyg'otadigan tavsiya bergan. Ular eshak sutini ichishlari kerak emish, chunki u g'am-g'ussani haydar, sport esa aksincha charchagan ruh uchun zahar emish. Ushbu yaxshi niyatli maslahat har bir harakat qilishni yoqtirmaydigan dangasa odamni (Bewegungsmuffel) quvontirsa-da — nihoyat dangasalik uchun daxlsiz avtoritet og'zidan chiqqan ajoyib bahona! — tibbiyot bugungi kunda eshak sutidan asosli ravishda voz kechgan [7-savol: B — muallif hazil-mutoyiba bilan zavqlanadi]. Shunga qaramay, qadimgi olimning mulohazalarida haqiqat uchquni bor: shokolad baxt gormonini uyg'otishi, makaron tushkunlikni ketkazishi va yong'oqlar asab ozuqasi ekanligiga kamdan-kam shubha qilinadi."
      },
      {
        label: "Abschnitt C (Taomning ruhiyatga ta'sir qilishining 4 ta ilmiy mexanizmi va xulosa)",
        uz: "Oziq-ovqatning o'zi kayfiyatimizga ta'sir qiladimi yoki u uyg'otadigan xotira-assotsiatsiyalarmi — buni aniqlash qiyin. Bir luqma yemasimizdanoq taomning shakli, rangi va hidi oldingi tajribalarni eslatadi. Bundan shubhasiz xulosa chiqarish mumkinki, xotiralarimiz va sezgi idrokimiz taomning kayfiyatimizga ta'sirini belgilaydi [12-savol: C — muallif xulosa chiqaradi]. Bundan tashqari, olimlar taomning ruhiy holatimizga ta'sir qiluvchi 4 ta muhim jihatini ochib berishdi: 1) taomdagi moddalarning miyaga bevosita ta'siri; 2) oshqozon-ichak traktidagi asab to'rining miyaga signallari; 3) immun tizimining taomga reaksiyasi; 4) ichakdagi foydali bakteriyalarning ruhiyatga ta'siri."
      },
      {
        label: "Abschnitt D (Falsafiy savollar, inson erki va manipulyatsiya xavfidan ogohlantirish)",
        uz: "Oziq-ovqatning ruhiyatga bunday kuchli ta'sir ko'rsatishi nafaqat tibbiy nuqtai nazardan, balki shaxsiyat o'zagiga taalluqli ko'plab falsafiy muammolarni ham keltirib chiqaradi: Biz haqiqatan ham faqat yeyayotgan narsamizdan iboratmizmi? Dunyoqarashimiz qanday ovqat yeyishimizga bog'liqmi? Fikrlash va qaror qabul qilish erkinligimiz (avtonomiyamiz) bunga qanday qaraydi? Va eng muhimi: bu orqali umuman istalmagan manipulyatsiya imkoniyatlari paydo bo'lmaydimi? [10-savol: D — muallif boshqa savollar ustida o'ylashga undaydi]. Har holda, bunday ilmiy xulosalarga ehtiyotkorlik va vazminlik bilan yondashish kerak degan fikrni tasdiqlash lozim, chunki bir necha luqma ovqat bilan insonning kayfiyatini maqsadli boshqarish mumkinligi odamda noxush tuyg'u uyg'otadi [9-savol: D — muallif ogohlantiradi]."
      },
      {
        label: "Abschnitt E (Oziq-ovqat sanoati va kelajak prognozi)",
        uz: "Darhaqiqat, bugungi kunda ba'zi olimlar ovqatlanish odatlarini maqsadli o'zgartirish orqali yangi hayotiy kayfiyat yaratish mumkin deb hisoblashadi. Bu tez orada sanoatda, ayniqsa oziq-ovqat ishlab chiqaruvchilarda katta qiziqish uyg'otishi aniq. Chunki bu yangi kashfiyotlar ortida hali o'zlashtirilmagan ulkan bozor yashiringan bo'lishi mumkin. Shu bois kelajakda hissiyotlarga maqsadli ta'sir ko'rsatadigan oziq-ovqat mahsulotlari ishlab chiqarilishi shubhasizdir [11-savol: E — muallif kelajak haqida taxmin/prognoz qiladi]."
      }
    ] as ParagraphTranslation[],
    text: `<div class="text-paragraph" data-para="A"><span class="para-tag">[Abschnitt A]</span> Ein kleines Stück Madeleine, eines französischen Sandkuchens also, genügte: Der Genuss dieses Gebäckstücks, in Lindenblütentee aufgeweicht, erweckte in dem Helden von Marcel Prousts berühmtem Romanzyklus „Auf der Suche nach der verlorenen Zeit“ ein wohliges Glücksgefühl wieder zum Leben, das er aus seiner Kindheit kannte. Diese berühmte Szene aus der Weltliteratur beschreibt eine Erfahrung, die den wenigsten fremd sein dürfte: Stellen Sie sich vor, Sie beißen in ein Stück Apfelkuchen, der genauso schmeckt wie der, den Ihre geliebte Großmutter in Ihrer Kindheit immer gebacken hat. Sicher fühlen Sie, wie der bekannte Geschmack Gefühle von Wärme und Geborgenheit in Ihnen aufsteigen lässt. Sie fühlen sich zurückversetzt in eine Situation, in der Sie rundum zufrieden waren – und zwar allein durch einen Biss in den Apfelkuchen. Die Wissenschaft geht schon länger der Vermutung nach, dass Nahrung unsere Stimmung beeinflusst.</div>
<div class="text-paragraph" data-para="B"><span class="para-tag">[Abschnitt B]</span> Und zwar schon seit Jahrtausenden: Hippokrates von Kos, der berühmteste Arzt der Antike, gab Schwermütigen eine Empfehlung, die heute sehr viel Heiterkeit hervorrufen dürfte. Eselsmilch sollten sie trinken, denn das vertreibe die Traurigkeit, Sport dagegen sei Gift für die ermüdete Seele. Auch wenn dieser wohlgemeinte Rat jeden Bewegungsmuffel freuen dürfte – endlich mal ein guter Grund für die Faulheit, und dann noch aus dem Mund einer unantastbaren Autorität! –, ist die Medizin von Eselsmilch mittlerweile wohl aus gutem Grund abgekommen. Ein Körnchen Wahrheit steckt dennoch in den Überlegungen, die der antike Gelehrte verfolgte. So wird nur selten angezweifelt, dass Schokolade Glücksgefühle erzeugt, Nudeln Frust vertreiben und Nüsse Nervennahrung sind. Dass Essen wohl tatsächlich weit mehr als die Zufuhr von Nährstoffen für den Körper ist und auch die Psyche beeinflusst, betrachtete die Schulmedizin lange Zeit kritisch, doch mittlerweile beginnt sie ihre Position zu revidieren. Immer mehr Wissenschaftler untersuchen, ob das richtige Essen gute Laune machen oder seelisches Leid mindern kann.</div>
<div class="text-paragraph" data-para="C"><span class="para-tag">[Abschnitt C]</span> Dabei sind die Zweifel, die dieser Theorie lange Zeit von zahlreichen Forschern entgegengebracht wurden, durchaus nachvollziehbar. Denn zunächst lässt es sich nur schwer ermitteln, ob die Nahrung selbst unsere Stimmung beeinflusst oder die Assoziationen, die sie bei uns weckt. Noch bevor wir nur einen Bissen gegessen haben, entfaltet sie schon ihre Wirkung: Ihre Form und Farbe, die Aromen, die von ihr aufsteigen, erinnern uns an frühere Erfahrungen. Daraus lässt sich zweifellos ableiten, dass unsere Erinnerungen und unsere Sinneswahrnehmung beeinflussen, wie Nahrung auf unsere Stimmung wirkt. Daneben konnten Wissenschaftler aber mittlerweile in zahlreichen Studien belegen, dass Nahrung auf komplexe Weise auf unser psychisches Befinden einwirkt. Dabei haben sie vier besonders bedeutsame Aspekte offenlegen können, die dies vermutlich erklären können. Als Erstes gibt es in der Nahrung Stoffe, die unmittelbar auf das Gehirn wirken. Des Weiteren schickt auch der Magen-Darm-Trakt, der von einem komplexen Nervengeflecht durchzogen ist, Signale an das Gehirn. Ebenso reagiert das Immunsystem direkt auf Nahrung und kann die Stimmung beeinflussen. Auf das Gemüt einwirken können zuletzt auch die Bakterien, die im Darm die Nährstoffe verarbeiten. Auch wenn diese Wirkmechanismen hochkomplex und noch nicht bis ins letzte Detail ausgeleuchtet sind, lässt sich resümieren, dass jede Mahlzeit unser Befinden beeinflusst und unsere Essgewohnheiten darauf abfärben, wie wir uns fühlen, mit Problemen umgehen und wie gelassen wir die Welt sehen können.</div>
<div class="text-paragraph" data-para="D"><span class="para-tag">[Abschnitt D]</span> Dass Nahrung eine so starke Wirkung auf die Psyche entfaltet, ist allerdings nicht nur vom medizinischen Standpunkt aus bedenkenswert, sondern wirft auch zahlreiche philosophische Probleme auf, die durchaus den Kern des Individuums berühren: Sind wir wirklich nur, was wir essen? Hängt unsere Weltsicht davon ab, welche Nahrungsmittel wir zu uns nehmen? Wie ist unsere Autonomie, die Freiheit unseres Denkens und unserer Entscheidungen, vor diesem Hintergrund zu betrachten? Und nicht zuletzt: Entstehen dadurch nicht auch Manipulationsmöglichkeiten, die durchaus nicht wünschenswert sind? So ist auf alle Fälle die Ansicht zu bejahen, dass mit solchen wissenschaftlichen Erkenntnissen auf vorsichtige und bedächtige Weise umzugehen ist. Denn es erweckt durchaus ein ungutes Gefühl, dass sich die eigene Stimmungslage möglicherweise gezielt durch ein paar Bissen Nahrung beeinflussen lässt.</div>
<div class="text-paragraph" data-para="E"><span class="para-tag">[Abschnitt E]</span> Tatsächlich gehen manche Wissenschaftler heutzutage davon aus, dass man durch eine gezielte Umstellung der Nahrungsgewohnheiten ein neues Lebensgefühl erzeugen könnte. Dies wird gewiss schon bald Begehrlichkeiten bei der Industrie, vor allem bei den Lebensmittelherstellern, wecken. Denn hinter diesen neuen Erkenntnissen könnte sich ein riesiger, noch unerschlossener Markt verbergen, und an den Ergebnissen neuer Studien ist die Industrie selbstverständlich sehr interessiert. So dürften in Zukunft gewiss Lebensmittel produziert werden, mit denen sich Emotionen gezielt beeinflussen lassen. Zwar sind bis dahin noch einige Schritte zu unternehmen. Denn wie Nahrung tatsächlich auf die Psyche wirkt, ist schwer zu entschlüsseln, und viele weitere Untersuchungen müssen die vorhandenen Befunde noch erhärten.</div>`,
    questions: [
      {
        id: 7,
        text: 'In welchem Abschnitt amüsiert sich die Autorin?',
        uz: "Qaysi bo'limda muallif kulgili holatdan zavqlanadi (hazil qiladi)?",
        ans: 'B',
        expl: "B bo'limida: Gippokratning eshak suti ichish va sportdan qochish haqidagi maslahati dangasalar («Bewegungsmuffel») uchun ajoyib bahona ekanligi kulgi bilan tilga olingan."
      },
      {
        id: 8,
        text: 'In welchem Abschnitt appelliert die Autorin an die Gefühle der Leser?',
        uz: "Qaysi bo'limda muallif o'quvchilarning his-tuyg'ulariga murojaat qiladi?",
        ans: 'A',
        expl: "A bo'limida: «Sicher fühlen Sie, wie der bekannte Geschmack Gefühle von Wärme und Geborgenheit in Ihnen aufsteigen lässt...»"
      },
      {
        id: 9,
        text: 'In welchem Abschnitt möchte die Autorin warnen?',
        uz: "Qaysi bo'limda muallif ogohlantirishni xohlaydi?",
        ans: 'D',
        expl: "D bo'limida: «So ist auf alle Fälle die Ansicht zu bejahen, dass mit solchen wissenschaftlichen Erkenntnissen auf vorsichtige und bedächtige Weise umzugehen ist.»"
      },
      {
        id: 10,
        text: 'In welchem Abschnitt regt die Autorin dazu an, über weitere Fragen nachzudenken?',
        uz: "Qaysi bo'limda muallif boshqa (falsafiy) savollar ustida o'ylab ko'rishga undaydi?",
        ans: 'D',
        expl: "D bo'limida ketma-ket falsafiy savollar o'rtaga tashlanadi: «Sind wir wirklich nur, was wir essen? Hängt unsere Weltsicht davon ab...»"
      },
      {
        id: 11,
        text: 'In welchem Abschnitt wagt die Autorin eine Prognose?',
        uz: "Qaysi bo'limda muallif kelajak haqida taxmin (prognoz) qiladi?",
        ans: 'E',
        expl: "E bo'limida: «So dürften in Zukunft gewiss Lebensmittel produziert werden, mit denen sich Emotionen gezielt beeinflussen lassen.»"
      },
      {
        id: 12,
        text: 'In welchem Abschnitt zieht die Autorin eine Schlussfolgerung?',
        uz: "Qaysi bo'limda muallif xulosa chiqaradi?",
        ans: 'C',
        expl: "C bo'limida: «Daraus lässt sich zweifellos ableiten, dass...» va «lässt sich resümieren, dass jede Mahlzeit unser Befinden beeinflusst...»"
      }
    ]
  },
  lv3: {
    title: 'Reisen im Wandel der Jahrhunderte: Von der Grand Tour zum Tourismus',
    titleUz: "Asrlar davomida sayohat: Zodagonlarning «Grand Tour» safaridan zamonaviy turizmgacha",
    uzbekVocab: [
      { de: 'der Wissenserwerb', uz: 'bilim egallash / ilm olish' },
      { de: 'die Grand Tour (Kavalierstour)', uz: "Yevropa zodagon yoshlarining ma'rifiy-madaniy safari" },
      { de: 'das Pflichtprogramm', uz: 'majburiy dastur' },
      { de: 'die Federung (Kutschen)', uz: 'aravalarning amortizatsiya / prujina tizimi' },
      { de: 'der Pferdestall', uz: 'otxona' },
      { de: 'der Hofmeister / Hauslehrer', uz: 'zodagon yoshlarga hamrohlik qiluvchi murabbiy / xususiy muallim' },
      { de: 'abseits der üblichen Reisewege', uz: "odatiy sayohat yo'nalishlaridan chetda" },
      { de: 'der Weltenbummler', uz: 'jahongashta / dunyoni kezuvchi sayohatchi' }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: "1-xatboshi (Savollar 13–15: XVI asrdan boshlab Grand Tour va uning ijtimoiy maqomi)",
        uz: "XVI asrdan boshlab «Grand Tour» (Kavalierstour) ko'plab yosh zodagonlar uchun majburiy ta'lim dasturining bir qismi bo'lib, ular G'arbiy va Janubiy Yevropadagi yirik saroylar, shahar markazlari hamda xorijiy universitet va akademiyalarga bilim olish uchun safar qilishgan [13-savol: R]. Yuqori xarajatlari va boshqa mashaqqatlari tufayli bunday safarlar asosan badavlat oilalarning yosh yigitlari (va juda kam hollarda ayollar) uchungina imkonli edi — ammo matnda ayollar uchun xavfli deb hisoblangani aytilmagan [14-savol: F]. Safarning bir necha oy yoki yillab davom etishi o'sha davr jamiyatida ijtimoiy jihatdan to'liq qabul qilingan me'yor edi [15-savol: F — zamondoshlar tanqidiga uchradi degan gap xato]."
      },
      {
        label: "2-xatboshi (Savollar 16–18: Aravalarda yurish azobi, tunash joylari va katta yoshli hamrohlar)",
        uz: "Otdan aravalarga (Kutschen) o'tish ham sayohatni qulay qilib qo'ymadi: hatto eng hashamatli aravalarda ham yomon yo'llar tufayli safar juda mashaqqatli bo'lib, eng yaxshi prujina tizimi ham barcha silkinishlarni yumshata olmasdi [16-savol: R]. Tunash uchun kichik karvonsaroylar yoki qulayligi otxonani eslatuvchi pochta bekatlari, yoxud uzoq qarindoshlar uyi xizmat qilgan; biroq badavlat sayohatchilar uchun qimmatbaho mehmonxonalar ham mavjud edi [17-savol: F — barcha sayohatchilar kamtarona joy bilan kifoyalanishga majbur edi degan gap xato]. Bundan tashqari, sayohatchilarning yoshligi sababli ularga kamida bitta katta yoshli hamroh — xizmatkor, otadek g'amxo'r do'st yoki xususiy muallim (Hofmeister) biriktirilishi shart edi [18-savol: F — faqat tengdoshlari bilan sayohat qilishgan degan gap xato]."
      },
      {
        label: "3-xatboshi (Savollar 19–21: Italiya san'at bozori, standart marshrutlar va sayohat adabiyoti)",
        uz: "Sayohatlar Italiya uchun muhim iqtisodiy omilga aylandi, ayniqsa Rim va Venetsiyadagi san'at bozoriga (Kunstmarkt) ta'siri katta bo'ldi — ammo muzeylarga kirish chiptalari haqida matnda hech narsa deyilmagan [19-savol: X]. XVIII asrda shoir Juzeppe Baretti deyarli hech bir ingliz sayohatchisi Italiyaning odatiy yo'nalishlardan chetdagi noma'lum joylari bilan qiziqmasligini tanqid qilgan [20-savol: F]. Shu davrda sayohat kitoblari savdosi rivojlanib, maxsus yo'lko'rsatkich nashrlar ko'paydi (ammo savdogarlarning yangi savdo yo'llaridan foydalangani haqida gap yo'q) [21-savol: X]."
      },
      {
        label: "4-xatboshi (Savollar 22–24: Vilgelmina fon Bayroyt va XIX asrda temiryo'l hamda turizm davri)",
        uz: "Markgrafinya Vilgelmina fon Bayroyt (Wilhelmine von Bayreuth) turli kasalliklar tufayli o'z sayohat rejalarini amalga oshirish uchun ko'p yillar kutishga majbur bo'ldi [22-savol: R]. XIX asrning 1840-yillarida ko'plab temiryo'l liniyalarining paydo bo'lishi bilan transport arzonroq, osonroq va xavfsizroq bo'ldi hamda tez orada yangi sayohat manzillari qaror topdi [23-savol: R]. Endilikda sayohat yangi qiyofa kasb etdi: ta'lim idealiga intilmasdan ham odamlar xorijiy mamlakatlarga yo'l olishdi — zamonaviy turizm davri boshlandi. Matnga eng mos sarlavha: «Weltenbummler einst und heute» (Jahongashtalar o'tmishda va bugun) [24-savol: C]."
      }
    ] as ParagraphTranslation[],
    text: `<p>Seit dem 16. Jahrhundert gehörte die sogenannte Grand Tour zum Pflichtprogramm für viele junge Adelige, die zum Wissenserwerb die großen europäischen Höfe und städtischen Zentren in West- und Südeuropa sowie ausländische Universitäten und Akademien besuchten. Wegen ihrer hohen Kosten und anderen Strapazen blieben diese Reisen jungen Männern – und nur selten Frauen – aus vermögenden Familien vorbehalten. Die lange Reisedauer von mehreren Monaten oder gar Jahren war dabei gesellschaftlich vollkommen akzeptiert.</p>
<p>Doch auch der Umstieg vom Reitpferd auf Kutschen machte das Reisen nicht unbedingt zu einer komfortablen Angelegenheit: Selbst in den luxuriösesten Kutschen war die Fahrt wegen der schlechten Straßen äußerst beschwerlich, und selbst die beste Federung konnte nicht alle Stöße abfangen. Verschärft wurde die Situation durch die langen Reisezeiten. Übernachtungsmöglichkeiten boten sich entweder in kleineren Gasthöfen oder Poststationen, deren Komfort mitunter an einen Pferdestall erinnerte, oder bei entfernten Bekannten und Verwandten. Für wohlhabende Reisende gab es allerdings auch kostspielige Herbergen. Zudem war aufgrund des geringen Alters der Reisenden mindestens ein älterer Begleiter vorgeschrieben – sei es in Gestalt eines Dieners, eines väterlichen Freundes oder eines privaten Hauslehrers (Hofmeisters).</p>
<p>Das Reisen wurde bald zu einem bedeutenden Wirtschaftsfaktor für Italien; nicht zu unterschätzen war insbesondere sein Einfluss auf den Kunstmarkt in Rom und Venedig. Dabei folgten fast alle Reisenden denselben festgelegten Routen: Kaum ein Engländer, tadelte im 18. Jahrhundert der Dichter Giuseppe Baretti, interessiere sich für die unbekannten Wege abseits der üblichen Reiserouten in Italien. Parallel dazu blühte der Handel mit Reisebüchern auf, und immer mehr spezielle Reisepublikationen wurden gedruckt.</p>
<p>Auch Markgräfin Wilhelmine von Bayreuth musste wegen verschiedener Krankheiten viele Jahre lang warten, ehe sie ihre Reisepläne endlich verwirklichen konnte. Im 19. Jahrhundert entstanden in den 1840er Jahren zahlreiche Eisenbahnlinien: Das Reisen wurde billiger, einfacher und sicherer, wodurch sich bald auch ganz neue Reiseziele etablierten. Das Reisen erhielt nun ein neues Gesicht: Ohne das Streben nach einem Bildungsideal brachen die Menschen in fremde Länder auf – das Zeitalter des modernen Tourismus hatte begonnen.</p>`,
    questions: [
      {
        id: 13,
        text: 'Schon im 16. Jahrhundert unternahmen junge Adelige Reisen zum Wissenserwerb.',
        uz: "Allaqachon XVI asrda yosh zodagonlar bilim olish maqsadida sayohatlar uyushtirishgan.",
        ans: 'R',
        expl: "1-xatboshida: «Seit dem 16. Jahrhundert gehörte die sogenannte Grand Tour zum Pflichtprogramm für viele junge Adelige, die zum Wissenserwerb... Universitäten und Akademien besuchten.»"
      },
      {
        id: 14,
        text: 'Längere Reisen galten in dieser Zeit noch als gefährlich für Frauen.',
        uz: "Uzoq sayohatlar o'sha davrda ayollar uchun xavfli deb hisoblangan.",
        ans: 'F',
        expl: "Matnda ayollar kam sayohat qilgani yuqori xarajatlar va mashaqqatlar bilan bog'langan, ammo «ayollar uchun xavfli deb hisoblangan» deyilmagan."
      },
      {
        id: 15,
        text: 'Die lange Reisedauer bei der Grand Tour rief bei den Zeitgenossen oft Kritik hervor.',
        uz: "Grand Tour safarining uzoq davom etishi zamondoshlar orasida ko'pincha tanqidga sabab bo'lgan.",
        ans: 'F',
        expl: "Aksincha, uzoq muddatli safar o'sha davr jamiyatida to'liq ma'qullangan (gesellschaftlich akzeptiert) edi."
      },
      {
        id: 16,
        text: 'Der Umstieg auf Kutschen machte das Reisen nicht unbedingt zu einer komfortablen Angelegenheit.',
        uz: "Aravalarga (kareta) o'tish sayohatni har doim ham qulay mashg'ulotga aylantirmadi.",
        ans: 'R',
        expl: "2-xatboshida: hatto eng hashamatli aravalarda ham yomon yo'llar sababli safar juda mashaqqatli bo'lgan."
      },
      {
        id: 17,
        text: 'Die Reisenden mussten sich alle mit bescheidenen Übernachtungsmöglichkeiten zufriedengeben.',
        uz: "Barcha sayohatchilar kamtarona tunash joylari bilan kifoyalanishga majbur bo'lishgan.",
        ans: 'F',
        expl: "2-xatboshida: «Für wohlhabende Reisende gab es allerdings auch kostspielige Herbergen» (Badavlat sayohatchilar uchun qimmatbaho mehmonxonalar ham bor edi)."
      },
      {
        id: 18,
        text: 'Bei der Grand Tour verreisten die jungen Leute oft nur mit Gleichaltrigen.',
        uz: "Grand Tour safarida yoshlar ko'pincha faqat o'z tengdoshlari bilan sayohat qilishgan.",
        ans: 'F',
        expl: "Yosh sayohatchilarga kamida bitta katta yoshli hamroh (xizmatkor, otadek do'st yoki xususiy muallim) bo'lishi majburiy edi."
      },
      {
        id: 19,
        text: 'Auch die Eintrittsgelder für Museen trugen in den besuchten Städten zum wirtschaftlichen Aufschwung bei.',
        uz: "Tashrif buyurilgan shaharlarda muzeylarga kirish chiptalari ham iqtisodiy yuksalishga hissa qo'shgan.",
        ans: 'X',
        expl: "Rim va Venetsiyadagi san'at bozori (Kunstmarkt) haqida gap bor, ammo muzeylarga kirish puli (Eintrittsgelder) haqida matnda ma'lumot yo'q."
      },
      {
        id: 20,
        text: 'Oft interessierten sich die Reisenden auch für Ziele, die abseits der üblichen Reisewege lagen.',
        uz: "Sayohatchilar ko'pincha odatiy sayohat yo'llaridan chetda joylashgan manzillar bilan ham qiziqishgan.",
        ans: 'F',
        expl: "Shoir Juzeppe Baretti deyarli hech bir ingliz Italiyaning noma'lum yo'llari bilan qiziqmasligini tanqid qilgan."
      },
      {
        id: 21,
        text: 'Handelsreisende konnten neu entstehende Handelswege nutzen.',
        uz: "Savdo sayohatchilari yangi paydo bo'layotgan savdo yo'llaridan foydalanishlari mumkin edi.",
        ans: 'X',
        expl: "Matnda sayohat kitoblari savdosi (Handel mit Reisebüchern) haqida aytilgan, ammo tijoratchilarning yangi savdo yo'llari haqida hech narsa yo'q."
      },
      {
        id: 22,
        text: 'Wilhelmine von Bayreuth konnte ihre Reisepläne aus gesundheitlichen Gründen viele Jahre lang nicht verwirklichen.',
        uz: "Vilgelmina fon Bayroyt sog'lig'i bilan bog'liq sabablarga ko'ra ko'p yillar davomida sayohat rejalarini amalga oshira olmagan.",
        ans: 'R',
        expl: "4-xatboshida: «musste wegen verschiedener Krankheiten viele Jahre lang warten, ehe sie ihre Reisepläne endlich verwirklichen konnte.»"
      },
      {
        id: 23,
        text: 'Durch die besseren Transportmöglichkeiten im 19. Jahrhundert etablierten sich bald auch neue Reiseziele.',
        uz: "XIX asrdagi yaxshiroq transport imkoniyatlari tufayli tez orada yangi sayohat manzillari ham paydo bo'ldi.",
        ans: 'R',
        expl: "Temiryo'llar qurilishi bilan sayohat arzon va xavfsiz bo'lib, yangi manzillar ochildi."
      },
      {
        id: 24,
        text: 'Welche der Überschriften a, b oder c passt am besten zum Text?',
        uz: "Qaysi sarlavha matnga eng mos keladi?",
        opts: [
          'a) Die Luxusreisen der Adeligen',
          'b) Eliten auf Bildungsreise',
          'c) Weltenbummler einst und heute'
        ],
        ans: 'C',
        expl: "Matn ham o'tmishdagi zodagonlar safarini, ham XIX asrdan boshlangan zamonaviy turizm davrini qamrab olgani uchun «Weltenbummler einst und heute» (C) eng to'g'ri sarlavhadir."
      }
    ]
  },
  sp: {
    title: 'Wetterphänomene und ihre Namen (Wie kommen Hochs und Tiefs zu ihren Namen?)',
    titleUz: "Ob-havo hodisalari va ularning nomlari (Yuqori va past bosimli havo oqimlari o'z nomlarini qanday oladi?)",
    uzbekVocab: [
      { de: 'das Sturmtief / das Orkantief', uz: "bo'ronli past bosim oqimi / dovul (siklon)" },
      { de: 'das Hochdruckgebiet (Hoch)', uz: 'yuqori atmosfera bosimi hududi (antisiklon — issiq/ochiq havo)' },
      { de: 'bescheren (bescherte uns)', uz: "bizga hadya etmoq / baxsh etmoq" },
      { de: 'zeitgleich auftreten', uz: "bir vaqtning o'zida paydo bo'lmoq" },
      { de: 'voneinander abgrenzen', uz: "bir-biridan ajratmoq / farqlamoq" },
      { de: 'über Deutschland hinwegfegen', uz: "Germaniya ustidan supurib o'tmoq (kuchli bo'ron)" },
      { de: 'in Verbindung bringen mit (+ Dat.)', uz: "... bilan bog'lamoq" },
      { de: 'eine Diskussion kommt auf (aufkommen)', uz: "bahs-munozara yuzaga kelmoq / ko'tarilmoq" },
      { de: 'einen Streit beilegen', uz: "nizoni / bahsni hal qilmoq, tinchitmoq" },
      { de: 'ins Leben rufen', uz: "tashkil etmoq / asos solmoq (loyiha yoki tashabbusni)" },
      { de: 'die Wetterpatenschaft', uz: "ob-havo oqimiga homiylik qilish (o'z ismini berish)" }
    ] as VocabItem[],
    text: `<p>Während die Sturmtiefs „Karl“ und „Günther“ im letzten Frühjahr für zahlreiche entwurzelte Bäume und blockierte Straßen sorgten, <strong>(25)</strong> uns Hoch „Lisa“ einen überdurchschnittlich <strong>(26)</strong> Spätsommer.</p>
<p>Wetterereignissen Namen zu geben hat eine lange Tradition. <strong>(27)</strong> Zweiten Weltkrieg begann der US-Wetterdienst, Taifune im Pazifik mit weiblichen Vornamen zu benennen, um sie – besonders wenn mehrere Taifune <strong>(28)</strong> auftraten – besser <strong>(29)</strong>.</p>
<p>In Deutschland vergibt die Freie Universität Berlin die Namen für alle Hoch- und Tiefdruckgebiete, die das Wetter in Mitteleuropa <strong>(30)</strong>. 1954 regte die damalige Studentin und spätere ZDF-Wettermoderatorin Karla Wege an, die Druckgebiete zu benennen, um sie leichter <strong>(31)</strong> abzugrenzen. Dafür erstellten die Meteorologen zunächst Listen, <strong>(32)</strong> die Namen in alphabetischer Reihenfolge <strong>(33)</strong>: männliche Namen für Hochs, weibliche für Tiefs.</p>
<p>In den folgenden Jahrzehnten war diese Praxis der Namensvergabe <strong>(34)</strong> die Stadtgrenzen Berlins hinaus bekannt. Erst im Februar 1990, als ungewöhnlich viele und heftige Stürme über Deutschland <strong>(35)</strong>, wurden die Medien durch die Orkantiefs „Vivian“ und „Wiebke“ auf die Namensgebung aufmerksam. Seitdem <strong>(36)</strong> die Verbreitung der von der FU Berlin getauften Druckgebilde und <strong>(37)</strong> Verwendung in den Medien zum Standard.</p>
<p><strong>(38)</strong>, dass Frauennamen ursprünglich immer mit Tiefdruckgebieten in Verbindung <strong>(39)</strong> wurden, kam Ende der 90er Jahre eine hitzige Diskussion über die Vergaberegeln wegen einer möglichen Diskriminierung von Frauen <strong>(40)</strong>. Der Streit konnte jedoch bald beigelegt <strong>(41)</strong>, indem <strong>(42)</strong> in Absprache mit dem Deutschen Wetterdienst auf einen jährlich wechselnden Turnus einigte. Seither erhalten die Hochs und Tiefs abwechselnd weibliche und männliche Vornamen.</p>
<p>Im November 2002 wurde schließlich die „Aktion Wetterpate“ <strong>(43)</strong>, die bis heute existiert. Wer gerne eine Patenschaft übernehmen oder verschenken möchte, kann dies <strong>(44)</strong> festgelegten Termin, der auf Ende September oder Anfang Oktober des Vorjahres fällt, bei der FU Berlin beantragen. Der Preis dafür hängt von der persönlichen Vorliebe ab: Die Patenschaft für eines der <strong>(45)</strong> Hochdruckgebiete kostet mehr als diejenige für ein Tief. Die vergebenen Namen werden allen Wetterdiensten und Medien <strong>(46)</strong>. Neben dem US-Wetterdienst ist die FU Berlin weltweit die einzige Institution, die Namen für Hoch- und Tiefdruckgebiete vergibt.</p>`,
    questions: [
      { id: 25, opts: ['beglückte', 'belohnte', 'beschenkte', 'bescherte'], ans: 'bescherte', expl: "«jemandem etwas bescheren» — kimgadir (yoqimli ob-havo) taqdim etmoq / baxsh etmoq." },
      { id: 26, opts: ['warme', 'warmem', 'warmen', 'warmer'], ans: 'warmen', expl: "«einen überdurchschnittlich warmen Spätsommer» — Akkusativ maskulin (-en)." },
      { id: 27, opts: ['Im Verlauf von', 'Schon im', 'Seitdem', 'Während des'], ans: 'Schon im', expl: "«Schon im Zweiten Weltkrieg» — «Zweiten Weltkrieg» Dativ singular (-en) formasida turgani uchun «Schon im» to'g'ri («Während des» bo'lsa «Weltkriegs» bo'lardi)." },
      { id: 28, opts: ['zeitgemäß', 'zeitgleich', 'zeitlich', 'zeitweise'], ans: 'zeitgleich', expl: "«zeitgleich auftreten» — bir vaqtning o'zida paydo bo'lmoq." },
      { id: 29, opts: ['unterscheiden können', 'unterscheiden zu können', 'unterschieden werden', 'unterschieden werden können'], ans: 'unterscheiden zu können', expl: "«um ... besser unterscheiden zu können» — «um ... zu + Infinitiv» konstruksiyasi." },
      { id: 30, opts: ['beeinflussen', 'beeinflußen', 'beinflussen', 'beinflußen'], ans: 'beeinflussen', expl: "To'g'ri imlo: «beeinflussen» (ikki 'e' va qisqa unlidan keyin 'ss')." },
      { id: 31, opts: ['aneinander', 'einander', 'füreinander', 'voneinander'], ans: 'voneinander', expl: "«voneinander abgrenzen» — bir-biridan ajratmoq / farqlamoq." },
      { id: 32, opts: ['denen', 'dessen', 'in denen', 'in dessen'], ans: 'in denen', expl: "«Listen, in denen die Namen ... aufgeführt waren» — ro'yxatlar (ko'plik, Dativ: in denen)." },
      { id: 33, opts: ['aufführten', 'aufgeführt hatten', 'aufgeführt waren', 'aufzuführen'], ans: 'aufgeführt waren', expl: "«aufgeführt waren» — Zustandspassiv Präteritum (kiritilgan / ro'yxatga olingan edi)." },
      { id: 34, opts: ['auswärts', 'außerhalb von', 'jenseits', 'kaum über'], ans: 'kaum über', expl: "«kaum über die Stadtgrenzen Berlins hinaus bekannt» — «über ... hinaus» (Berlin chegarasidan tashqarida deyarli noma'lum)." },
      { id: 35, opts: ['durchquerten', 'hinausliefen', 'hinwegfegten', 'vorübergingen'], ans: 'hinwegfegten', expl: "«über Deutschland hinwegfegen» — bo'ronning mamlakat ustidan supurib / yopirilib o'tishi." },
      { id: 36, opts: ['war', 'waren', 'wurde', 'wurden'], ans: 'wurde', expl: "«wurde die Verbreitung ... zum Standard» — «zum Standard werden» (standartga aylandi, ega birlikda: die Verbreitung)." },
      { id: 37, opts: ['deren', 'dessen', 'ihren', 'ihres'], ans: 'deren', expl: "«der ... getauften Druckgebilde (Pl.) und deren Verwendung» — ko'plikdagi otga tegishli ko'rsatish olmoshi Genitivda: «deren»." },
      { id: 38, opts: ['Aufgrund der Tatsache', 'In diesem Fall', 'Trotz allem', 'Ungeachtet dessen'], ans: 'Aufgrund der Tatsache', expl: "«Aufgrund der Tatsache, dass...» — ... fakti / holati sababli." },
      { id: 39, opts: ['assoziiert', 'bezogen', 'gebracht', 'gestellt'], ans: 'gebracht', expl: "«in Verbindung bringen (gebracht) mit» — turg'un fe'l birikmasi (bog'lamoq)." },
      { id: 40, opts: ['an', 'auf', 'los', 'nach'], ans: 'auf', expl: "«eine Diskussion kam ... auf (aufkommen)» — bahs-munozara yuzaga keldi." },
      { id: 41, opts: ['gewesen sein', 'sein', 'werden', 'worden sein'], ans: 'werden', expl: "«konnte beigelegt werden» — Modalverb + Passiv Infinitiv." },
      { id: 42, opts: ['alle sich', 'er sich', 'man ihn', 'man sich'], ans: 'man sich', expl: "«indem man sich ... auf einen Turnus einigte» — «sich einigen auf» (kelishib olmoq)." },
      { id: 43, opts: ['aufs Spiel gesetzt', 'in Kauf genommen', 'ins Leben gerufen', 'zur Rede gestellt'], ans: 'ins Leben gerufen', expl: "«ins Leben rufen» — tashkil etmoq / hayotga tatbiq etmoq." },
      { id: 44, opts: ['an einen', 'bei einer', 'für ein', 'zu einem'], ans: 'zu einem', expl: "«zu einem festgelegten Termin» — belgilangan muddatda (zu + Dativ)." },
      { id: 45, opts: ['begehrteren', 'begehrtern', 'begerteren', 'begherteren'], ans: 'begehrteren', expl: "To'g'ri imlo: «begehrt» -> qiyosiy daraja Genitiv ko'plikda «eines der begehrteren Hochdruckgebiete»." },
      { id: 46, opts: ['in Anspruch genommen', 'zu Nutze gemacht', 'zum Einsatz gebracht', 'zur Verfügung gestellt'], ans: 'zur Verfügung gestellt', expl: "«zur Verfügung stellen (gestellt)» — ixtiyoriga taqdim etmoq." }
    ]
  }
};

// ============================================================================
// VARIANT 17 (PDF 17 — ♧ الاحتمال السابع عشر ♧)
// ============================================================================
export const VARIANT_17_READING = {
  pdfSource: '/assets/aistudio/17_f798f4e2.pdf',
  lv1: {
    title: 'Die Maus als Stimmungsbarometer',
    titleUz: "Kompyuter sichqonchasi kayfiyat barometri sifatida",
    uzbekVocab: [
      { de: 'das Stimmungsbarometer', uz: "kayfiyatni o'lchovchi barometr / ko'rsatkich" },
      { de: 'der Tastaturanschlag (-¨e)', uz: 'klaviatura tugmasini bosish' },
      { de: 'der Verräter unserer Befindlichkeiten', uz: 'ruhiy holatimizni fosh qiluvchi vosita' },
      { de: 'die Probanden (Testteilnehmer)', uz: 'tajriba ishtirokchilari / sinaluvchilar' },
      { de: 'einen Abzug erhalten', uz: 'jarima balli olmoq (ball chegirilmoq)' },
      { de: 'eckige, abrupte Bewegungen', uz: 'burchakli, keskin va uzuq-yuluq harakatlar' },
      { de: 'kontraintuitiv', uz: 'intuitsiyaga (mantiqiy taxminga) zid' },
      { de: 'ein unliebsames Spionieren', uz: 'yoqimsiz josuslik / poylash' },
      { de: 'nutzerunfreundliche Webseiten aufspüren', uz: 'foydalanuvchi uchun noqulay saytlarni aniqlamoq' },
      { de: 'die Marktreife', uz: 'bozorga chiqarishga tayyorlik darajasi' }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: "1-xatboshi va [ 1 ] bo'shliq",
        uz: "Kompyuterimiz va internet bizni har qanday psixiatrdan ko'ra yaxshiroq biladi: (0 -> Z: Facebook'dagi sanoqli «Like»larning o'ziyoq bizning kimligimiz va nimani yoqtirishimizni fosh qiladi). Yaqindagina tadqiqotchilar klaviatura tugmalarini bosishimizga (Tastaturanschläge) qarab, sekin internetdan yana g'azablanayotganimizni yoki xotirjam yozayotganimizni aniqlaydigan dastur ishlab chiqishdi. Hozirda ushbu texnologiyaning yanada rivojlangan shakli mavjud: [ 1 -> E: Endilikda nafaqat klaviatura, balki sichqoncha ham bizning ichki holatimizni fosh qiluvchi vositaga aylanmoqda ]. Provodagi Brigam Yang (Brigham Young) universiteti olimi Jeffri Jenkins (Jeffrey Jenkins) va uning hamkasblari sichqoncha harakatiga qarab g'azablangan va hafsalamiz pir bo'lganini yoki xotirjam va yaxshi kayfiyatda ekanimizni aniqlaydigan dastur yaratishdi."
      },
      {
        label: "2-xatboshi va [ 2 ]–[ 3 ] bo'shliqlar",
        uz: "Olimlar tipik parametrlarni onlayn-eksperiment yordamida aniqlashdi. Ushbu tajribada ishtirokchilar go'yoki ularning qobiliyati va intellektini tekshiradigan ko'p qismli testni topshirishdi. Biroq ular bilmagan narsa shu ediki: [ 2 -> B: Brauzerda ko'rsatilgan sahifalar ataylab hafsala pir bo'lishi (Frustration) va g'azab uyg'otadigan qilib manipulyatsiya qilingan (sozlangan) edi ]. Ular o'ta sekin yuklanar va shu sababli test ishtirokchilariga savollarga to'g'ri javob berish uchun juda kam vaqt qoldirar edi. [ 3 -> H: Bundan tashqari, sinaluvchilar har bir noto'g'ri javob uchun jarima (ball chegirilishi) va natijada yomonroq ko'rsatkich olishardi ]. Bu esa norozilikni yanada kuchaytirdi."
      },
      {
        label: "3-xatboshi va [ 4 ]–[ 6 ] bo'shliqlar",
        uz: "Ushbu testdan chiqqan g'azab ishtirokchilarning sichqoncha harakatlariga o'lchasa bo'ladigan darajada ta'sir ko'rsatdi. Kursorni odatdagidek to'g'ri yoki biroz egri chiziqlarda emas, balki ekran bo'ylab burchakli, keskin harakatlar bilan surishdi. [ 4 -> C: Shu bilan bir vaqtda ular sichqonchani sekinroq harakatlantirishdi ]. «Bu dastlab intuitsiyaga zid tuyuladi», deydi Jenkins, «odam g'azablanganda sichqonchani tezroq harakatlantiradi deb o'ylashi mumkin, ammo unday emas». Yangi dastur bunday xususiyatlarni taniydi. «Bu texnologiya yordamida veb-saytlar endi ‘ahmoq’ bo'lmaydi», deydi Jenkins. «Ular nafaqat biz kiritgan ma'lumotni, balki nima his qilayotganimizni ham qayd etadi». [ 5 -> G: Biz bunda balki yoqimsiz josuslikni (Spionieren) ko'rsak-da, bu texnologiyaning afzalliklari ham bor: ] Dastur foydalanuvchi uchun noqulay veb-sayt va formalarni aniqlashga yordam berishi mumkin. «Shu paytgacha foydalanuvchi qachon shu darajada asabiylashib, sahifani tark etishini aniq belgilash juda qiyin edi», deb tushuntiradi Jenkins. [ 6 -> D: Salbiy kayfiyatni qayd etish orqali biz endi ushbu nuqtani aniq belgilay olamiz ]. Veb-dasturchilar keyin sahifani maqsadli optimallashtirishlari mumkin."
      }
    ] as ParagraphTranslation[],
    text: `<p>Unser Computer und auch das Internet kennen uns besser als jeder Psychiater: <em>[0: Z]</em> Erst kürzlich haben Forscher ein Programm entwickelt, das anhand unserer Tastaturanschläge erkennt, ob wir mal wieder wütend über die langsame Internetverbindung sind oder entspannt vor uns hin tippen. Inzwischen gibt es bereits eine Weiterentwicklung dieser Technologie: <span class="text-gap">[ 1 ]</span> Jeffrey Jenkins von der Brigham Young University in Provo und seine Kollegen haben ein Programm entwickelt, das anhand unserer Mausbewegung erkennt, ob wir wütend oder gefrustet sind oder aber entspannt und gut gestimmt. Die typischen Parameter ermittelten die Forscher dabei anhand eines Online-Experiments.</p>
<p>In diesem Experiment absolvierten die Probanden einen mehrteiligen Test, der angeblich ihre Eignung und Intelligenz testen sollte. Was sie jedoch nicht wussten: <span class="text-gap">[ 2 ]</span> Sie luden extrem langsam und ließen den Testteilnehmern daher nur wenig Zeit, die Fragen korrekt zu beantworten. <span class="text-gap">[ 3 ]</span> Dies steigerte die Frustration noch zusätzlich.</p>
<p>Der Ärger über diesen Test wirkte sich messbar auf die Mausbewegungen der Teilnehmer aus. Statt wie normalerweise in geraden oder leicht gekrümmten Kurven bewegten sie den Cursor nun in eckigen, abrupten Bewegungen über den Bildschirm. <span class="text-gap">[ 4 ]</span> „Das erscheint zunächst kontraintuitiv“, sagt Jenkins, „man würde eher annehmen, dass ich die Maus schneller bewege, wenn ich ärgerlich bin, aber das ist nicht der Fall.“ Das neuentwickelte Programm kennt diese typischen Eigenheiten ärgerlicher Nutzer und wertet sie entsprechend aus. „Mit Hilfe dieser Technologie sind Websites nicht länger dumm“, so Jenkins. „Sie registrieren nicht nur, was wir explizit eingeben, sondern auch, was wir fühlen.“ <span class="text-gap">[ 5 ]</span> Die Software könnte beispielsweise dazu beitragen, nutzerunfreundliche Webseiten und Formulare aufzuspüren. „Bisher war es sehr schwer, genau festzustellen, wann ein Nutzer so frustriert ist, dass er die Seite verlässt“, erklärt Jenkins. <span class="text-gap">[ 6 ]</span> Webentwickler können dann die Webseite gezielt optimieren. Die Forscher haben bereits ein Patent für die neue Software angemeldet und eine Start-up-Firma arbeitet an der Marktreife des Programms. Jenkins und seine Kollegen arbeiten zudem an einer Version, mit der die Technologie auch auf Touchscreens und mobile Geräte übertragen werden kann.</p>`,
    options: [
      {
        key: 'A',
        text: 'Die Forscher sammelten zunächst Daten, indem sie die Probanden ihren Gemütszustand notieren ließen.',
        uz: "Tadqiqotchilar dastlab sinaluvchilarga o'z ruhiy holatlarini yozib borishni buyurish orqali ma'lumot to'plashdi. (Ortiqcha gap)"
      },
      {
        key: 'B',
        text: 'Die im Browser gezeigten Seiten waren so manipuliert, dass sie absichtlich Frustration und Ärger hervorriefen.',
        uz: "Brauzerda ko'rsatilgan sahifalar ataylab hafsala pir bo'lishi va g'azab uyg'otadigan qilib sozlangan (manipulyatsiya qilingan) edi."
      },
      {
        key: 'C',
        text: 'Gleichzeitig bewegten sie die Maus langsamer.',
        uz: "Shu bilan bir vaqtda ular sichqonchani sekinroq harakatlantirishdi."
      },
      {
        key: 'D',
        text: 'Indem wir die negative Stimmung registrieren, können wir diesen Punkt nun genau bestimmen.',
        uz: "Salbiy kayfiyatni qayd etish orqali biz endi ushbu nuqtani aniq belgilay olamiz."
      },
      {
        key: 'E',
        text: 'Jetzt wird nämlich nicht nur die Tastatur, sondern auch die Maus zum Verräter unserer Befindlichkeiten.',
        uz: "Endilikda nafaqat klaviatura, balki sichqoncha ham bizning ruhiy holatimizni fosh qiluvchi vositaga aylanmoqda."
      },
      {
        key: 'F',
        text: 'Trotz aller technologischen Fortschritte hinken Computer in diesem Bereich hinterher.',
        uz: "Barcha texnologik yutuqlarga qaramay, kompyuterlar bu sohada oqsamoqda. (Ortiqcha gap)"
      },
      {
        key: 'G',
        text: 'Während wir darin vielleicht eher ein unliebsames Spionieren sehen, hat diese Technologie auch Vorteile:',
        uz: "Biz bunda balki yoqimsiz josuslikni ko'rsak-da, ushbu texnologiyaning afzalliklari ham bor:"
      },
      {
        key: 'H',
        text: 'Zudem erhielten die Probanden für jede falsche Antwort einen Abzug und damit schlechtere Ergebnisse.',
        uz: "Bundan tashqari, sinaluvchilar har bir noto'g'ri javob uchun ball chegirilishi va natijada yomonroq ko'rsatkich olishdi."
      }
    ],
    answers: { '1': 'E', '2': 'B', '3': 'H', '4': 'C', '5': 'G', '6': 'D' }
  },
  lv2: {
    title: 'Einsam und doch virtuell verbunden (Fernstudenten)',
    titleUz: "Yolg'iz, ammo virtual bog'langan (Masofaviy ta'lim talabalari)",
    uzbekVocab: [
      { de: 'gesellige Angelegenheit', uz: "ko'pchilik bilan birga o'tadigan / ulfatchilik ishi" },
      { de: 'pauken, bis der Kopf rauchte', uz: 'boshi tutab ketguncha (tinimsiz) yodlamoq' },
      { de: 'die Abbruchquote', uz: "o'qishni tashlab ketish ko'rsatkichi (foizi)" },
      { de: 'sich mit etwas schmücken', uz: "biror narsa bilan maqtanmoq / o'zini bezab ko'rsatmoq" },
      { de: 'technisch unterkühlte Form', uz: 'texnik jihatdan sovuq va qisqartirilgan shakl' },
      { de: 'die Köpfe zusammenstecken', uz: 'boshni biriktirib (birgalikda) bosh qotirmoq' },
      { de: 'ins Leere laufen', uz: "behuda ketmoq / o'z kuchini yo'qotmoq" },
      { de: 'die Doppelbelastung', uz: 'ikki karra yuklama (ham ish, ham o‘qish)' }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: 'Abschnitt A (1970-yillardagi masofaviy ta’lim va pochtachini kutish)',
        uz: "Masofaviy ta'lim hech qachon juda gavjum mashg'ulot bo'lmagan: 1970-yillarda ilk masofaviy oliygohlar ochilganda, talaba kechqurunlari o'z xonasida qog'oz uyumlariga ko'milib, boshi tutab ketguncha yuridik yoki tibbiy atamalarni yodlardi. Har bir necha haftada pochtachi og'ir va sirli posilka («Studienbriefe») olib kelganida, qo'shnilar bu odam qanday g'alati xobbi bilan shug'ullanarkin deb hayron bo'lishardi [9-savol: A — muallif o'quvchilarni qiziqarli hikoya bilan zavqlantiradi]."
      },
      {
        label: 'Abschnitt B (Professor Martin Kern: Ijtimoiy izolyatsiya va virtual kampus)',
        uz: "Masofaviy o'qishning eng katta afzalligi — makon erkinligi — ayni paytda uning eng katta kamchiligidir: yolg'iz o'qish ko'plab talabalarni qiynaydi. Mediadidaktika professori Martin Kern o'qituvchilar va talabalar bilan ijtimoiy muloqot muvaffaqiyat uchun qanchalik muhimligini ta'kidlaydi va o'qishni tashlab ketish ko'rsatkichi 30–70% ekanini ijtimoiy izolyatsiya bilan bog'laydi [11-savol: B — muallif mutaxassis avtoritetiga tayanadi]."
      },
      {
        label: 'Abschnitt C (Talabalik yillariga nostalgiya va jonli muloqot sog‘inchi)',
        uz: "Raqamli dunyoda yaqinlik faqat texnik sovuq shaklda uchraydi. Muallif kafeteriyadagi chuqur suhbatlar, talabalar yotoqxonasidagi kechki ovqat ustidagi bahslar va umrbod do'stlar orttirgan davrini sog'inch bilan eslaydi [12-savol: C — muallif hissiyotga/nostalgiyaga beriladi]. «Onlayn aloqalar bularning barchasini hech qachon bosa olmaydi, bunga qat'iy ishonaman» [7-savol: C yoki E]."
      },
      {
        label: 'Abschnitt D (Ishlaydigan mutaxassislar uchun masofaviy ta’limning ustunligi)',
        uz: "Ishlaydigan insonlar (Berufstätige) holatida esa vaziyat butunlay boshqacha: yuqorida bildirilgan e'tirozlar bu yerda o'z ahamiyatini yo'qotadi (laufen ins Leere), chunki ularning kunduzgi o'qishga imkoni yo'q [10-savol: D — muallif avvalgi fikrlarini yumshatadi]. Ish bilan birga o'qish chidamlilik va vaqtni boshqarish kabi «Soft Skills» ko'nikmalarini ko'rsatadi."
      },
      {
        label: 'Abschnitt E (Ikki karra yuklama va oilaviy hayot uchun xavf haqida ogohlantirish)',
        uz: "Ishlaydiganlar ham masofaviy ta'lim va muvaffaqiyat badalini yolg'izlik bilan to'laydilar. Ish va o'qishning ikki karra yuklamasi (Doppelbelastung) tufayli hatto munosabatlar yoki oilaviy hayot zarar ko'rishi yoxud barbod bo'lishi xavfi mavjud [8-savol: E — muallif ogohlantirishni ifodalaydi]."
      }
    ] as ParagraphTranslation[],
    text: `<div class="text-paragraph" data-para="A"><span class="para-tag">[Abschnitt A]</span> Ein Fernstudium war noch nie eine besonders gesellige Angelegenheit: Schon in der Anfangszeit, kurz nach der Gründung der ersten Fernhochschulen in den siebziger Jahren, hockte man wie der typische einsame Gelehrte abends im Studienstübchen, hinter Papierstapeln, die nicht kleiner werden wollten, juristisches oder medizinisches Fachvokabular, Geschichtsdaten oder Formeln paukend, bis der Kopf rauchte. Und wenn alle paar Wochen der Briefträger mit einem großen, schweren, geheimnisvoll wirkenden Paket kam, fragten sich die Nachbarn vielleicht, welchem seltsamen Hobby man wohl nachgehe. Nun, das Paket enthielt weitere Papierberge, „Studienbriefe“ mit mehreren hundert Seiten Lernmaterialien, die die Fernhochschule verschickte. Fernstudium bedeutete damals vor allem: Warten auf den Briefträger. Statt gemeinsam mit Kommilitonen in mündlichen Prüfungen oder Klausuren ihr Wissen unter Beweis zu stellen, arbeiteten die Studenten zu Hause „Einsendearbeiten“ durch: Blätter mit Aufgaben, die sie mit der Post an ihren Professor schickten. Persönlich bekamen sie ihn in der Regel nicht zu Gesicht.</div>
<div class="text-paragraph" data-para="B"><span class="para-tag">[Abschnitt B]</span> Diese Zeiten sind zum Glück schon lange vorbei. Doch damals wie heute ist der größte Vorteil des Fernstudiums, nämlich die räumliche Flexibilität, gleichzeitig sein größter Nachteil: Das einsame Lernen überfordert viele Fernstudenten. Martin Kern, Professor für Mediendidaktik, betont, wie wichtig die soziale Interaktion mit Lehrpersonal und Mitstudierenden für den Lernerfolg sei. Dass die Abbruchquoten je nach Fernstudienanbieter bei 30 bis 70 Prozent liegen, führt er auch auf die soziale Isolation vieler Lernenden zurück. Zum Glück kann dem dank des technischen Fortschritts etwas entgegengewirkt werden: Kaum ein Fernstudienanbieter mehr, der keinen virtuellen Campus im Internet anbietet – Online-Lerngruppen, Web-Tutorien oder Internetforen, in denen es sich gemeinsam lernen lässt. Und kaum ein Anbieter, der sich nicht damit schmückt und in teuren Hochglanzbroschüren mit seinen innovativen Lernmedien wirbt. Doch ist auf dem digitalen Campus wirklich alles Gold, was glänzt?</div>
<div class="text-paragraph" data-para="C"><span class="para-tag">[Abschnitt C]</span> Einerseits sind die Bedingungen für ein Fernstudium heute natürlich weitaus besser als in den Anfangszeiten. Andererseits aber findet man, wie überall in der digitalen Welt, Zusammenhalt und Nähe nur in einer reduzierten, technisch unterkühlten Form. Vieles fehlt, was zumindest für mich immer den Reiz des Studentenlebens ausgemacht hat: Gern denke ich zurück an tiefgründige Gespräche in der Cafeteria und legendäre Studentenpartys, die heute noch Stoff für zahlreiche Erinnerungen bieten. Es war eine Bereicherung, mit Kommilitoninnen und Kommilitonen die Köpfe über schwierigen Aufgaben zusammenzustecken oder stundenlang zu diskutieren – in natura freilich, am besten bei einem Abendessen im Studentenwohnheim. Diese Zeit hat mich geprägt, in dieser Zeit habe ich Freunde fürs Leben gewonnen. Online-Kontakte können all dies niemals ersetzen, davon bin ich fest überzeugt.</div>
<div class="text-paragraph" data-para="D"><span class="para-tag">[Abschnitt D]</span> Anders sieht es freilich bei Berufstätigen aus, die schon immer den klassischen Kundenstamm der Fernstudienanbieter bildeten. Die oben geäußerten Vorbehalte laufen hier natürlich ins Leere, da diese Studierenden meist gar keine andere Möglichkeit zu studieren hätten. Sie haben eben nicht die Wahl zwischen Präsenzstudium und Fernstudium. Und eines muss man zugeben: Wer neben dem Fernstudium beruflichen Verpflichtungen nachgeht, besitzt einen entschiedenen Wettbewerbsvorteil: Zeigt diese Doppelbelastung doch wichtige Soft Skills wie Durchhaltevermögen, gutes Zeitmanagement und hohe Motivation, welche von Personalentscheidern positiv bewertet werden.</div>
<div class="text-paragraph" data-para="E"><span class="para-tag">[Abschnitt E]</span> Auch die Berufstätigen bezahlen ihr Fernstudium und den Erfolg, den sie sich damit erarbeiten, mit Einsamkeit: Denn ohne den Rückzug in die Einsamkeit und Stille lässt sich ein solches Pensum nicht bewältigen, auch wenn man online mit vielen anderen verbunden sein kann. Soziale Freizeitaktivitäten stehen in dieser Zeit nicht an erster Stelle. Darüber hinaus sollte man die Doppelbelastung nicht unterschätzen: Zwischen Beruf und Studium besteht sogar die Gefahr, dass eine Beziehung oder das Familienleben Schaden nehmen oder gar daran zerbrechen könnte. Ein Fernstudium ist eben kein Spaziergang: Wer – egal ob berufsbegleitendes oder hauptberufliches Fernstudium – am Ende auf der heimischen Couch den Master machen will, braucht auch heute noch die Bereitschaft, sich zumindest ein wenig mit der Lebensweise eines einsamen Gelehrten anzufreunden.</div>`,
    questions: [
      {
        id: 7,
        text: 'In welchem Abschnitt bezieht der Autor entschieden Position?',
        uz: "Qaysi bo'limda muallif qat'iy pozitsiyani egallaydi?",
        ans: 'E',
        expl: "PDF 17 kalitida E (yoki C) ko'rsatilgan: E bo'limida muallif hatto onlayn aloqalar bo'lsa ham, masofaviy o'qish yolg'izlik va katta qurbonlik talab qilishini qat'iy ta'kidlaydi."
      },
      {
        id: 8,
        text: 'In welchem Abschnitt formuliert der Autor eine Warnung?',
        uz: "Qaysi bo'limda muallif ogohlantirishni ifodalaydi?",
        ans: 'E',
        expl: "E bo'limida: «besteht sogar die Gefahr, dass eine Beziehung oder das Familienleben Schaden nehmen oder gar daran zerbrechen könnte.»"
      },
      {
        id: 9,
        text: 'In welchem Abschnitt möchte der Autor die Leser unterhalten?',
        uz: "Qaysi bo'limda muallif o'quvchilarni zavqlantirishni xohlaydi?",
        ans: 'A',
        expl: "A bo'limida 1970-yillardagi talabaning qog'oz uyumlariga ko'milib o'tirishi va pochtachi kelishini kutishi yumor bilan tasvirlangan."
      },
      {
        id: 10,
        text: 'In welchem Abschnitt relativiert der Autor zuvor getroffene Aussagen?',
        uz: "Qaysi bo'limda muallif avval aytilgan fikrlarni yumshatadi (nisbiylashtiradi)?",
        ans: 'D',
        expl: "D bo'limida: «Die oben geäußerten Vorbehalte laufen hier natürlich ins Leere.»"
      },
      {
        id: 11,
        text: 'In welchem Abschnitt stützt sich der Autor auf eine fremde Autorität?',
        uz: "Qaysi bo'limda muallif boshqa bir mutaxassis (avtoritet) fikriga tayanadi?",
        ans: 'B',
        expl: "B bo'limida mediadidaktika professori Martin Kern fikriga tayaniladi."
      },
      {
        id: 12,
        text: 'In welchem Abschnitt wird der Autor sentimental (bzw. sensibel)?',
        uz: "Qaysi bo'limda muallif hissiyotga / nostalgiyaga beriladi?",
        ans: 'C',
        expl: "C bo'limida muallif o'z talabalik yillarini va yotoqxonadagi kechalarni sog'inch bilan eslaydi."
      }
    ]
  },
  lv3: {
    title: 'MINT-Fächer: Mäßiger Erfolg im Bemühen um technischen Nachwuchs',
    titleUz: "MINT fanlari (Matematika, Informatika, Tabiiy fanlar va Texnika): Yosh mutaxassislarni jalb qilishdagi o'rtacha muvaffaqiyat",
    uzbekVocab: [
      { de: 'die MINT-Fächer', uz: 'Matematika, Informatika, Tabiiy fanlar va Texnika yo‘nalishlari' },
      { de: 'der Fachkräftemangel', uz: 'malakali mutaxassislar yetishmasligi' },
      { de: 'um Nachwuchs werben', uz: 'yosh kadrlar / o‘rinbosarlarni jalb qilish uchun targ‘ibot olib bormoq' },
      { de: 'der Koalitionsvertrag', uz: 'hukumat koalitsiya shartnomasi' },
      { de: 'die Abbruchquote senken', uz: "o'qishni tashlab ketish darajasini pasaytirmoq" },
      { de: 'der Vorbereitungskurs', uz: 'tayyorlov kursi (universitet oldidan)' },
      { de: 'der Lehrling / der Azubi (Auszubildende)', uz: 'kasb-hunar o‘rganuvchi shogird / stajyor' },
      { de: 'umworben werden', uz: "ko'nglini olishga harakat qilinmoq / faol jalb etilmoq" }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: "1-xatboshi (Savollar 13–15: Sanoat yarmarkalarida yoshlarni izlash va iqtisodiy xavf)",
        uz: "Gannover sanoat yarmarkasida nemis kompaniyalari nafaqat yangi buyurtmalar olish uchun, balki yosh kadrlarni (Nachwuchs) jalb qilish uchun ham targ'ibot olib borishadi [13-savol: F — faqat buyurtma olish yagona maqsad degan gap xato]. Chunki texnik va tabiiy fanlar bo'yicha yetarli malakali mutaxassislarsiz Germaniya iqtisodiyoti global raqobatga dosh bera olmaydi; muhandis va tabiiy fan mutaxassislari tanqisligi mamlakat iqtisodiy qudrati uchun eng katta tahdid deb e'lon qilingan [14-savol: R]. Siyosatchilar ham bunga javob berishdi: ilk bor siyosiy partiyalar MINT kasblarini qo'llab-quvvatlashni koalitsiya shartnomasiga rasmiy maqsad sifatida kiritishdi (ammo texnika ta'limi mazmunini iqtisodiyotga moslashtirish haqida matnda gap yo'q) [15-savol: X]."
      },
      {
        label: "2-xatboshi (Savollar 16–19: Bog'chadan boshlanadigan targ'ibot, mablag'lar va OECD hisoboti)",
        uz: "Essenda hatto maktabgacha yoshdagi (bog'cha) bolalar ham soya o'yinlari va magnitlar qanday ishlashini o'rganishadi [16-savol: R]. Har yili MINT yo'nalishlarini qo'llab-quvvatlashga qancha pul sarflanishini aniq aytish qiyin, lekin bir narsa aniq: bu mablag' juda ko'p [17-savol: Asl imtihon varag'ida «Für die MINT-Förderung stehen nicht genug Gelder bereit» berilgani uchun javob F — ya'ni mablag' yetarli emas degan gap xato, chunki mablag' juda ko'p!]. Bugungi kunda Germaniyada birinchi kurs talabalarining deyarli 40 foizi (15 yil oldin 34 foizdan kam edi) shu yo'nalishni tanlamoqda. OECD tashkilotining yangi hisoboti Germaniya ko'plab boshqa davlatlarga qaraganda yaxshiroq holatda ekanini ko'rsatdi (ammo o'tmishda boshqa davlatlarda kamroq bo'lgani aytilmagan) [18-savol: X]. Shu bilan birga, talabalar soni oshishida MINT targ'ibot tadbirlari qanchalik rol o'ynaganini ishonch bilan aytib bo'lmaydi [19-savol: F]."
      },
      {
        label: "3-xatboshi (Savollar 20–24: Tayyorlov kurslari, kasb-hunar shogirdlari kamayishi va qizlar ulushi)",
        uz: "Kamroq talaba o'qishni tashlab ketishi uchun oliygohlar tanlovda e'tiborliroq bo'lishi va bo'shroq talabalarga o'qishdan oldingi tayyorlov kurslari (Vorbereitungskurse) orqali yordam berishi tavsiya etiladi [20-savol: Asl savolda «soll auch durch Kurse vor dem Studium gesenkt werden» -> R]. Biroq oliy ma'lumotli bitiruvchilar soni ortishi boshqa joyda yo'qotishga olib kelmoqda: so'nggi o'n yilda MINT sohasida kasb-hunar o'rganuvchi shogirdlar (MINT-Azubis / Lehrlinge) soni 8 foizga kamaydi [21-savol: R]. Yana bir muammo: MINT yo'nalishlarida ayollar soni erkaklarga qaraganda hali ham ancha kam, garchi so'nggi yillarda qizlarni jalb qilishga juda ko'p harakat qilingan bo'lsa ham [22-savol: F]. Texnika oliygohlarida o'qishni boshlagan qizlar soni so'nggi yillarda yigitlar soniga nisbatan deyarli oshmadi [23-savol: F]. Matnga eng mos sarlavha: «Mäßiger Erfolg im Bemühen um technischen Nachwuchs» (Texnik yosh kadrlarni jalb qilish urinishlaridagi o'rtacha/cheklangan muvaffaqiyat) [24-savol: B]."
      }
    ] as ParagraphTranslation[],
    text: `<p>Auf den großen Industriemessen werben deutsche Unternehmen längst nicht mehr nur um neue Aufträge, sondern verstärkt auch um den dringend benötigten Nachwuchs. Denn ohne genügend Fachkräfte in den Bereichen Mathematik, Informatik, Naturwissenschaften und Technik (MINT) kann die deutsche Wirtschaft im globalen Wettbewerb nicht Schritt halten. Der Fachkräftemangel in den naturwissenschaftlichen und technischen Disziplinen wurde bereits zur größten Bedrohung für die wirtschaftliche Leistungsfähigkeit des Landes erklärt. Auch die Politik hat reagiert: Erstmals schrieben die politischen Parteien die Förderung der MINT-Berufe als erklärtes Ziel in einem Koalitionsvertrag fest.</p>
<p>Die Nachwuchsförderung setzt dabei immer früher an: In Essen beispielsweise lernen schon Vorschulkinder im Kindergarten, wie Schattenspiele und Magnete funktionieren. Wie viel Geld jedes Jahr insgesamt in die MINT-Förderung gepumpt wird, lässt sich kaum beziffern – doch eines ist klar: Es ist sehr viel. Und tatsächlich entscheiden sich heute rund 40 Prozent aller Studienanfänger in Deutschland für ein MINT-Fach; vor fünfzehn Jahren wählten noch weniger als 34 Prozent der Erstsemester einen solchen Studiengang. Ein aktueller Bericht der OECD zeigt, dass Deutschland damit heute besser dasteht als viele andere Industriestaaten. Welchen Anteil die zahlreichen MINT-Fördermaßnahmen daran tatsächlich haben, lässt sich allerdings nicht mit Gewissheit sagen.</p>
<p>Damit weniger Studierende ihr Studium vorzeitig aufgeben, sollten die Hochschulen bei der Auswahl genauer hinsehen und die Eignung der Studienbewerber prüfen, rät Arbeitgebervertreter Zilling. Schwächeren Studierenden könne man beispielsweise durch Vorbereitungskurse vor Studienbeginn helfen, um die hohe Abbruchquote zu senken. Allerdings geht die steigende Zahl an Hochschulabsolventen wohl mit Verlusten an anderer Stelle einher: Im vergangenen Jahrzehnt ist die Zahl der Auszubildenden (Azubis) in den MINT-Berufen um acht Prozent gesunken.</p>
<p>Ein weiteres Problem bleibt bestehen: Noch immer gibt es in den MINT-Fächern deutlich weniger Frauen als Männer – und das, obwohl Schülerinnen in den letzten Jahren besonders intensiv umworben wurden. Die Zahl der Studienanfängerinnen an technischen Hochschulen hat im Vergleich zu den männlichen Anfängern in den vergangenen Jahren kaum zugenommen.</p>`,
    questions: [
      {
        id: 13,
        text: 'Die Unternehmen richten ihre Messeaktivitäten auf das alleinige Ziel aus, Aufträge zu gewinnen.',
        uz: "Kompaniyalar o'zlarining yarmarka faoliyatini faqatgina buyurtmalar yutib olishdan iborat yagona maqsadga yo'naltiradilar.",
        ans: 'F',
        expl: "1-xatboshida: Kompaniyalar yarmarkada faqat yangi buyurtmalar uchun emas, balki yosh mutaxassislarni (Nachwuchs) jalb qilish uchun ham faol targ'ibot olib boradilar."
      },
      {
        id: 14,
        text: 'Deutsche Unternehmen können ihren Bedarf an technischen und naturwissenschaftlichen Fachkräften nicht decken.',
        uz: "Nemis kompaniyalari texnik va tabiiy fanlar bo'yicha malakali mutaxassislarga bo'lgan ehtiyojini qondira olmayapti.",
        ans: 'R',
        expl: "Matnda tabiiy fanlar va muhandislik sohasida malakali kadrlar yetishmasligi (Fachkräftemangel) eng katta iqtisodiy xavf ekani ta'kidlangan."
      },
      {
        id: 15,
        text: 'Die Inhalte von Technikstudien sollen stärker an die Bedürfnisse der Wirtschaft angepasst werden.',
        uz: "Texnika yo'nalishidagi o'quv dasturlari mazmuni iqtisodiyot ehtiyojlariga kuchliroq moslashtirilishi kerak.",
        ans: 'X',
        expl: "Matnda siyosiy partiyalar MINT kasblarini qo'llab-quvvatlashni koalitsiya shartnomasiga kiritgani aytilgan, ammo o'quv dasturlari mazmunini o'zgartirish haqida gap yo'q."
      },
      {
        id: 16,
        text: 'Die Förderung in Richtung MINT-Fächer beginnt bereits im Vorschulalter.',
        uz: "MINT fanlari yo'nalishidagi qo'llab-quvvatlash maktabgacha yoshdanoq (bog'cha yoshidan) boshlanadi.",
        ans: 'R',
        expl: "2-xatboshida: «In Essen beispielsweise lernen schon Vorschulkinder, wie Schattenspiele und Magnete funktionieren.»"
      },
      {
        id: 17,
        text: 'Für die MINT-Förderung stehen nicht genug Gelder bereit.',
        uz: "MINT yo'nalishini qo'llab-quvvatlash uchun yetarli mablag' mavjud emas.",
        ans: 'F',
        expl: "2-xatboshida: Har yili qancha pul sarflanishini aniq hisoblash qiyin, ammo bir narsa aniq — mablag' juda ko'p («Es ist sehr viel»). (Eslatma: agar savolda «nicht» tushirib qoldirilsa R bo'ladi, asl imtihon kitobchasida 31-betda «nicht genug» berilgani uchun F)."
      },
      {
        id: 18,
        text: 'In der Vergangenheit gab es in Deutschland weniger MINT-Studierende als in anderen Ländern.',
        uz: "O'tmishda Germaniyada boshqa mamlakatlarga qaraganda MINT talabalari kamroq bo'lgan.",
        ans: 'X',
        expl: "Matnda faqat bugungi kunda Germaniya OECD hisobotiga ko'ra ko'plab davlatlardan yaxshiroq holatda ekani va 15 yil oldin 34% bo'lgani aytilgan, ammo o'tmishda boshqa davlatlar bilan qiyoslanmagan."
      },
      {
        id: 19,
        text: 'Die Fördermaßnahmen sind entscheidend für die zunehmende Zahl an MINT-Studierenden.',
        uz: "Qo'llab-quvvatlash chora-tadbirlari MINT talabalari soni ortishida hal qiluvchi ahamiyatga ega.",
        ans: 'F',
        expl: "2-xatboshida: «Welchen Anteil die zahlreichen MINT-Fördermaßnahmen daran tatsächlich haben, lässt sich allerdings nicht mit Gewissheit sagen.»"
      },
      {
        id: 20,
        text: 'Die Abbruchquote in den MINT-Fächern soll auch durch Kurse vor dem Studium gesenkt werden.',
        uz: "MINT fanlarida o'qishni tashlab ketish darajasi o'qishdan oldingi tayyorlov kurslari orqali ham kamaytirilishi kerak.",
        ans: 'R',
        expl: "3-xatboshida: bo'shroq talabalarga o'qishdan oldingi tayyorlov kurslari (Vorbereitungskurse) orqali yordam berish tavsiya etiladi."
      },
      {
        id: 21,
        text: 'Höhere Studentenzahlen führen zu einer niedrigeren Zahl von MINT-Azubis.',
        uz: "Talabalar sonining ko'payishi MINT sohasidagi kasb-hunar o'rganuvchi shogirdlar (Azubis) sonining kamayishiga olib kelmoqda.",
        ans: 'R',
        expl: "3-xatboshida: Oliygoh bitiruvchilari ko'payishi bilan so'nggi 10 yilda MINT-shogirdlar (Azubis) soni 8 foizga kamaygan."
      },
      {
        id: 22,
        text: 'Schülerinnen bekunden reges Interesse an den Informationsveranstaltungen der MINT-Initiative.',
        uz: "Maktab o'quvchi qizlari MINT tashabbusining axborot tadbirlariga katta qiziqish bildirmoqdalar.",
        ans: 'F',
        expl: "4-xatboshida: Qizlarni jalb qilishga qanchalik ko'p urinilmasin, MINT fanlarida ayollar soni hali ham erkaklardan ancha kam."
      },
      {
        id: 23,
        text: 'Die Zahl der Studienanfängerinnen an technischen Hochschulen hat jene der männlichen Anfänger überschritten.',
        uz: "Texnika oliygohlarida birinchi kurs qizlarining soni yigitlar sonidan oshib ketdi.",
        ans: 'F',
        expl: "Matn oxirida: Texnika oliygohlarida o'qishni boshlagan ayollar soni erkaklarga nisbatan deyarli oshmagan (ammo PDF 12-betdagi tuzatilgan versiyada R deb belgilangan bo'lsa ham, asl matnda F)."
      },
      {
        id: 24,
        text: 'Welche der Überschriften a, b oder c passt am besten zum Text?',
        uz: "Qaysi sarlavha matnga eng mos keladi?",
        opts: [
          'a) Eine Kritik an der deutschen Förderlandschaft',
          'b) Mäßiger Erfolg im Bemühen um technischen Nachwuchs',
          'c) Neue Fakultäten an technischen Hochschulen'
        ],
        ans: 'B',
        expl: "«Mäßiger Erfolg im Bemühen um technischen Nachwuchs» (Texnik yosh kadrlarni jalb qilishdagi o'rtacha natija) matnning barcha qismlarini umumlashtiradi."
      }
    ]
  },
  sp: VARIANT_16_READING.sp
};

// ============================================================================
// VARIANT 18 (PDF 18 — ♧ الاحتمال الثامن عشر ♧)
// ============================================================================
export const VARIANT_18_READING = {
  pdfSource: '/assets/aistudio/18_4335ac6f.pdf',
  lv1: {
    title: 'Satzzeichen, mächtige Werkzeuge',
    titleUz: "Tinish belgilari — qudratli qurollar",
    uzbekVocab: [
      { de: 'das Semikolon und eine Klammer', uz: 'nuqtali vergul (;) va qavs ) -> ;-)' },
      { de: 'innewohnende Gestaltungskraft', uz: 'o‘zida mujassam bo‘lgan ifoda / shakllantirish qudrati' },
      { de: 'die Mescha-Stele', uz: 'Mesha tosh bitigi (miloddan avvalgi IX asr)' },
      { de: 'die scriptio continua', uz: "so'zlarni ajratmasdan va tinish belgilarisiz uzluksiz yozish usuli" },
      { de: 'die Erinnerungsstütze', uz: 'xotira tayanchi / eslatma vositasi' },
      { de: 'die Textschlangen', uz: "ilondek uzundan-uzun (ajratilmagan) matn qatorlari" },
      { de: 'nach Gutdünken verwenden', uz: "o'z xohishiga / didiga ko'ra ishlatmoq" },
      { de: 'die Interpunktionslehre', uz: 'tinish belgilari (punktuatsiya) qoidalari ta’limoti' },
      { de: 'bemängeln (bemängelte)', uz: 'kamchilik sifatida tanqid qilmoq / e’tiroz bildirmoq' },
      { de: 'Affekte in geschriebene Sprache überführen', uz: 'his-tuyg‘ularni yozma tilga ko‘chirmoq' }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: "1-xatboshi va [ 1 ] bo'shliq",
        uz: "Har bir smartfon egasi nuqtali vergul va qavs do'stlikni saqlab qolishi mumkinligini biladi: mana shu ikki belgi kifoya va haqorat hazilga aylanadi ;-) Hatto faqat tinish belgilarining o'zi bilan ham butun boshli suhbatlar qurish mumkin. (0 -> Z: Viktor Gyugo 1862-yilda ta'tilda bo'lganida «Xo'rlanganlar» romani qanday sotilayotganiga qiziqib, noshiriga oddiygina «?» belgisini telegraf orqali yuboradi). Ko'p o'tmay u londa va aniq javob oladi: «!». Ilk tinish belgilari sifatida miloddan avvalgi IX asrga oid «Mesha stelasidagi» (tosh bitigidagi) belgilar hisoblanadi. [ 1 -> G: Ilk yozuv belgilaridan taxminan 2500 yil o'tib, unda ilk bor chiziqchalar ma'no birliklarini va nuqtalar so'zlarni bir-biridan ajratadi ]."
      },
      {
        label: "2–3-xatboshilar va [ 2 ]–[ 3 ] bo'shliqlar",
        uz: "O'sha paytda tinish belgilari bo'lgani ularning keng qo'llanganini anglatmaydi. Yunon va Rim shoirlari hamda notiqlarining asarlari «scriptio continua» — ya'ni so'zlarni ajratmasdan yozish usulida bitilgan. [ 2 -> F: Unda harf harfga, so'z esa so'zga ulanib ketadi ]. Mutaxassislar buni shunday izohlaydilar: dastlabki bosqichda yozuv asosan professional nutq so'zlash uchun xotira tayanchi bo'lgan, uni boshqalar oson o'qishi uchun ehtiyoj yo'q edi. [ 3 -> D: Faqat O'rta asrlarga kelibgina irland rohiblari boshqa o'quvchilarga oson bo'lishi uchun ushbu uzundan-uzun matn «ilonlari»ni belgilar bilan ta'minlash g'oyasini o'ylab topishdi ]. Gutenberg tomonidan kitob bosishning ixtiro qilinishi ikkinchi katta bosqichni boshlab berdi: matn endi ovoz chiqarib o'qish uchun emas, balki ovozsiz o'qiydigan kitobxon uchun mo'ljallangan aniq axborot xotirasiga aylandi."
      },
      {
        label: "4–5-xatboshilar va [ 4 ]–[ 6 ] bo'shliqlar",
        uz: "Yozma tilning aniqlik kasb etganiga tanqidlar ham bo'ldi: 1750-yilda Jan-Jak Russo qat'iy qoidalarga bo'ysundirilgan yozma tilda jonlilik yetishmasligini aytgan. [ 4 -> B: Vaholanki o'sha davrda majburiy me'yorlar (verbindliche Normen) haqida hali umuman gap ham bo'lishi mumkin emas edi ]. Masalan, Gyote nuqta va vergulni hali o'z xohishiga ko'ra ishlatgan. 1876-yilda Konrad Duden nemis punktuatsiyasi qoidalarini nashr etdi, ammo yangi belgilar kiritmadi. Ko'proq ifoda imkoniyatlariga ehtiyoj esa ancha oldin mavjud bo'lgan ko'rinadi. [ 5 -> A: Allaqachon 1762-yilda olim Yoxann Kristof Gottshed nemis tilida hayrat yoki achinishni ifodalovchi belgilar yo'qligidan noligan edi ]. Falsafada bunday belgilar juda foydali bo'lishi mumkin, deb hisoblagan u. [ 6 -> E: Faqat ancha keyinroq — yangi media vositalari paydo bo'lishi bilan — bu uzoq kutilgan orzu ro'yobga chiqdi ]. Qisqa xabarlar (SMS/messenjer) orqali yozma muloqotning haddan tashqari qisqarishi og'zaki nutqni simulyatsiya qilishni talab qildi va dastlab :-( kabi tinish belgilaridan iborat bo'lgan Emojilarning muvaffaqiyati his-tuyg'ularni yozma tilga olib kirish istagidan tug'ildi."
      }
    ] as ParagraphTranslation[],
    text: `<p>Jeder Smartphonebesitzer weiß, dass ein Semikolon und eine Klammer Freundschaften retten können. Braucht es doch nur diese zwei Symbole, und eine Beleidigung wird zum Witz ;-) Selbst mit bloßen Satzzeichen lassen sich mitunter noch ganze Konversationen gestalten. <em>[0: Z]</em> Wenig später erhielt er die ebenso knappe wie präzise Antwort: „!“ Legende oder nicht, wenn man sich die den Satzzeichen innewohnende Gestaltungskraft anschaut und sich vergegenwärtigt, dass täglich Tausende Therapeuten nur damit beschäftigt sind, zwischen Partnern zu dolmetschen, ist es doch rätselhaft, dass der Mensch nach Erfindung der Schrift noch Jahrhunderte brauchte, um diese Strukturelemente zu entwickeln. Als Ur-Satzzeichen gelten die Markierungen in einem Text auf der sogenannten Mescha-Stele aus dem 9. Jahrhundert vor Christus. <span class="text-gap">[ 1 ]</span></p>
<p>Dass es damals schon Satzzeichen gab, heißt aber nicht, dass sie auch allgemein Verwendung fanden. Werke der griechischen und lateinischen Dichter und Redner sind aufgezeichnet in der sogenannten <em>scriptio continua</em>, das heißt in einer Schreibweise ohne Worttrennung. <span class="text-gap">[ 2 ]</span> Experten erklären das so: In jener ersten Phase war Schrift primär eine Erinnerungsstütze für den professionellen Vortrag. Die Notwendigkeit, sie für andere möglichst einfach lesbar zu machen, bestand nicht.</p>
<p><span class="text-gap">[ 3 ]</span> Spätestens die Erfindung des Buchdrucks durch Gutenberg läutete dann die zweite große Phase ein. Text war nicht mehr primär gedacht zum Vortrag, sondern für einen stummen Leser. Damit entwickelte sich ein neues Verhältnis zur Sprache. Schrift wurde vom Interpretationsgegenstand zum möglichst präzisen Informationsspeicher. Es vollzog sich ein Wandel von der Mündlichkeit zur Schriftlichkeit der Sprache.</p>
<p>Es regte sich aber auch Kritik daran, dass die Schriftsprache an Genauigkeit gewonnen hatte: Um 1750 befand Jean-Jacques Rousseau in seiner Abhandlung über den Ursprung der Sprachen, dass es einer niedergeschriebenen und festen Regeln unterworfenen Sprache an Lebendigkeit mangele. <span class="text-gap">[ 4 ]</span> So verwendete etwa Goethe Punkt und Komma noch nach Gutdünken. 1876 gab Konrad Duden zwar seinen „Versuch einer deutschen Interpunktionslehre“ heraus, führte dabei jedoch keine weiteren neuen Satzzeichen ein.</p>
<p>Dabei scheint schon lange vorher Bedarf an größeren Ausdrucksmöglichkeiten bestanden zu haben. <span class="text-gap">[ 5 ]</span> In der Philosophie, glaubte er, könnten solche durchaus nützlich sein. <span class="text-gap">[ 6 ]</span> Die extreme Verknappung der schriftlichen Kommunikation mittels Kurznachrichten verlangt anscheinend wieder nach einer Simulation von Mündlichkeit. Der Erfolg der Emojis, die zunächst noch aus Satzzeichen wie :-( bestanden, entspringe dem Wunsch, Affekte in geschriebene Sprache zu überführen. Was wir derzeit erleben, ist quasi die Rückkehr des Mündlichen ins Schriftliche – Phase drei.</p>`,
    options: [
      {
        key: 'A',
        text: 'Bereits 1762 bemängelte der Gelehrte Johann Christoph Gottsched, dass es im Deutschen keine Zeichen für Staunen oder Mitleid gebe.',
        uz: "Allaqachon 1762-yilda olim Yoxann Kristof Gottshed nemis tilida hayrat yoki hamdardlik (achinish) uchun belgilar yo'qligini tanqid qilgan edi."
      },
      {
        key: 'B',
        text: 'Dabei konnte damals von verbindlichen Normen noch gar keine Rede sein.',
        uz: "Vaholanki o'sha paytda majburiy me'yorlar (qoidalar) haqida hali umuman gap ham bo'lishi mumkin emas edi."
      },
      {
        key: 'C',
        text: 'Das beklagen selbst die leidenschaftlichsten Verfechter von Kurznachrichten.',
        uz: "Bundan hatto qisqa xabarlarning eng ashaddiy tarafdorlari ham nolishadi. (Ortiqcha gap)"
      },
      {
        key: 'D',
        text: 'Erst im Mittelalter kamen irische Mönche auf die Idee, diese Textschlangen mit Zeichen zu versehen, um anderen Lesern das Leben einfacher zu machen.',
        uz: "Faqat O'rta asrlardagina irland rohiblari boshqa o'quvchilarga oson bo'lishi uchun bu uzun matn qatorlarini belgilar bilan ta'minlash g'oyasini o'ylab topishdi."
      },
      {
        key: 'E',
        text: 'Erst viel später – mit den neuen Medien – ging dieser langgehegte Wunsch in Erfüllung.',
        uz: "Faqat ancha keyinroq — yangi media vositalari bilan — ushbu uzoq kutilgan orzu ro'yobga chiqdi."
      },
      {
        key: 'F',
        text: 'In ihr reiht sich Buchstabe an Buchstabe, Wort an Wort.',
        uz: "Unda (scriptio continua yozuvida) harf harfga, so'z esa so'zga tizilib (qo'shilib) ketadi."
      },
      {
        key: 'G',
        text: 'Rund 2500 Jahre nach den ersten Schriftzeichen trennen darin erstmals Striche Sinneinheiten und Punkte die Worte.',
        uz: "Ilk yozuv belgilaridan taxminan 2500 yil o'tib, unda ilk bor chiziqlar ma'no birliklarini va nuqtalar so'zlarni ajratadi."
      },
      {
        key: 'H',
        text: 'Um dies zu verstehen, muss man die Arbeitsweise in den mittelalterlichen Schreibstuben beachten.',
        uz: "Buni tushunish uchun o'rta asr xattotlik ustaxonalaridagi ish uslubiga e'tibor qaratish lozim. (Ortiqcha gap)"
      }
    ],
    answers: { '1': 'G', '2': 'F', '3': 'D', '4': 'B', '5': 'A', '6': 'E' }
  },
  lv2: {
    title: 'Akademisches Viertel: Warum ist denn noch niemand da?',
    titleUz: "Akademik chorak soat (15 daqiqa): Nega hali hech kim yo'q?",
    uzbekVocab: [
      { de: 'vom Aussterben bedroht', uz: "yo'qolib ketish (qirilib ketish) xavfi ostida" },
      { de: 'die Pedanterie und Verbohrtheit', uz: "maydakashlik (rasmiyatchilik) va qaysarlik" },
      { de: 'fünfe gerade sein lassen', uz: "mayda-chuydalarga ko'z yummoq, unchalik qattiq olmaslik" },
      { de: 'wie bestellt und nicht abgeholt', uz: "xuddi chaqirib qo'yib, hech kim kutib olmagandek (noqulay ahvolda)" },
      { de: 'schrullig / kontrollsüchtig', uz: "g'alati (injiq) / hamma narsani nazorat qilishga mukkasidan ketgan" },
      { de: 'als Griesgram in Verruf geraten', uz: "badjahl / to'ng odam sifatida yomon nom chiqarmoq" },
      { de: 'cum tempore (c. t.) / sine tempore (s. t.)', uz: "vaqt bilan (+15 daqiqa kechikib) / vaqtsiz (aniq belgilangan daqiqada)" },
      { de: 'gemächlich eintrudeln', uz: 'shoshilmasdan bitta-bitta kirib kelmoq' },
      { de: 'als geschickt einkalkulierter Puffer wirken', uz: "ustalik bilan hisobga olingan vaqt zaxirasi (bufer) vazifasini bajarmoq" }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: "Abschnitt A (O'z vaqtida kelish fazilati va kutish azobi)",
        uz: "Vaqtida kelish (Pünktlichkeit) dinozavrlar kabi yo'qolib ketish xavfi ostida qolgan fazilatdir [Misol 0: A — taqqoslash]. Ko'pchilik buni zamondan ortda qolgan maydakashlik deb biladi. Lekin ochig'ini aytingchi, sizda qanday? Nahotki kutishni yoqtirsangiz? [8-savol: A — muallif o'quvchilarni o'z-o'zini tahlil qilishga chaqiradi]. Muallif kutib qolganida avval g'azabdan, keyin esa alamdan ko'p shokolad va shirin ichimliklar yeb-ichib qo'yganidan portlab ketay deyishini yozadi."
      },
      {
        label: "Abschnitt B (Muallifning o'ta tartibliligi, o'ziga yon bosishi va ogohlantirishi)",
        uz: "Muallifning o'zi haddan tashqari vaqtida keladiganlar («Überpünktliche») toifasiga kiradi: uchrashuvdan 5 daqiqa oldin borishni afzal ko'radi va har bir do'stining qancha kechikishini empirik ma'lumotlar asosida oldindan hisoblab qo'yadi. Garchi bu ba'zilarga g'alati tuyulsa-da, muallif buni o'ziga ma'qul ko'radi, chunki hech kim mukammal emas («niemand ist schließlich perfekt») [9-savol: B — muallif o'ziga nisbatan kechirimli/bag'rikeng]. Kutishga to'g'ri kelganda esa xotirjamlikni saqlash shart: aks holda kayfiyat buzilishi, g'azabni haddan ortiq namoyish qilib qo'yish va badjahl odam sifatida yomonotliq bo'lish xavfi bor [11-savol: B — muallif ogohlantiradi]."
      },
      {
        label: "Abschnitt C («Akademisches Viertel» — c. t. va s. t. tushunchalarining ta'rifi)",
        uz: "Kechikish muammosiga universitetlar 400 yildan ko'proq vaqt oldin ajoyib yechim topib, «akademik chorak soat» (akademisches Viertel) qoidasini joriy qilishgan. Bu shuni anglatadiki («Das bedeutet:»): agar vaqt ortidan «c. t.» (cum tempore — so'zma-so'z «vaqt bilan») yozilgan bo'lsa, darslar odatda 15 daqiqa keyin boshlanadi; «s. t.» (sine tempore — «vaqtsiz») tursa, aniq ko'rsatilgan vaqtda boshlanadi [10-savol: C — muallif ta'rif beradi]."
      },
      {
        label: "Abschnitt D (Tarixiy kelib chiqishi, o'zini o'ylaydiganlar tanqidi va Lessing iqtibosi)",
        uz: "Ilgari akademik chorak soat talabalarga shahar bo'ylab tarqalgan o'quv binolariga yetib olish uchun xizmat qilgan. Muallif uchun esa bu 15 daqiqa o'ziga o'xshagan sabrli talabalarni kashf etishga yordam beradi — chunki ular ko'pi bilan 15 daqiqa kutishlarini bilishadi. Bu esa o'zining har qanday beparvoligini kechiradigan va o'zini go'yo «eng zo'r odamdek» tutadigan bemulohaza insonlarni («rücksichtslose Mitmenschen») soatlab kutishga qaraganda ancha yaxshi [7-savol: D — muallif boshqalar haqida salbiy fikr bildiradi]. Faylasuf Gotxold Efraim Lessing bejiz aytmagan: «Yaxshi tarbiyaning eng yaxshi isboti — vaqtida kelishdir»."
      },
      {
        label: "Abschnitt E (Anglosakson mamlakatlarida yo'qligidan hayratlanish va tig'iz tirbandlikda bufer roli)",
        uz: "Akademik chorak soat kabi oqilona tartibning anglosakson yoki roman tilli mamlakatlarda noma'lum ekanligi hayratlanarlidir («Erstaunlich, dass...») [12-savol: E — muallif hayratlanishini bildiradi]. Bugungi kunda ertalabki tirbandlik va jamoat transportining kechikishi sharoitida bu 15 daqiqa ustalik bilan hisobga olingan vaqt buferi vazifasini o'taydi."
      }
    ] as ParagraphTranslation[],
    text: `<div class="text-paragraph" data-para="A"><span class="para-tag">[Abschnitt A]</span> Pünktlichkeit ist eine Tugend, der ein ähnliches Schicksal beschieden ist wie den Dinosauriern: Sie ist vom Aussterben bedroht. Vielen gilt Pünktlichkeit heute als Zeichen für Pedanterie und Verbohrtheit, als altmodisch, als unnötige Einschränkung der eigenen Freiheit. Aber ganz ehrlich, wie sieht es denn bei Ihnen aus? Warten Sie etwa gerne? Auch wer selbst ab und zu mal fünfe gerade sein lässt, wird doch nervös, wenn er wie bestellt und nicht abgeholt an irgendeiner Straßenecke herumlungert oder im Restaurant vom Kellner, der bereits den dritten Aperitif bringt, mitleidige Blicke erntet. Ich jedenfalls könnte in solchen Situationen platzen: zuerst vor Wut und dann, weil ich vor lauter Frust wieder zu viel Schokolade oder Kuchen in mich hineingestopft habe. Oder den Ärger mit zucker- und sehr kalorienhaltigen Getränken heruntergespült habe, um die Wartezeit zu überbrücken.</div>
<div class="text-paragraph" data-para="B"><span class="para-tag">[Abschnitt B]</span> Ich selbst gehöre ja zu den Überpünktlichen. Ich bin lieber fünf Minuten eher da, als gehetzt oder zu spät zu kommen. Ich schaue mir die Fahrpläne der öffentlichen Verkehrsmittel an oder die Wege im Navi, bevor ich Termine vereinbare. Durch jahrelange Erfahrung habe ich gelernt, wie viel Wartezeit ich bei den jeweiligen Freunden hinzuaddieren muss. Sicher, auf manche wirkt es gewiss schrullig oder gar kontrollsüchtig, dass ich alles so genau plane. Doch ich gestehe mir das zu, denn mir helfen meine empirischen Daten, mich auf das Warten einzustellen – was meine Nervosität lindert. Mir fehlt einfach die Gelassenheit, die man zum Warten braucht – niemand ist schließlich perfekt. Und gelassen sollte man unbedingt bleiben, wenn man warten muss: Sonst besteht die Gefahr, dass es einem die Laune verdirbt, man seinem Ärger allzu deutlich Luft macht und man als Griesgram in Verruf gerät.</div>
<div class="text-paragraph" data-para="C"><span class="para-tag">[Abschnitt C]</span> Eine bahnbrechende Lösung für das Problem der Unpünktlichkeit haben die Universitäten bereits vor mehr als 400 Jahren gefunden und das akademische Viertel eingeführt. Das bedeutet: Wenn hinter der Uhrzeit ein „c. t.“ steht – für „cum tempore“, wörtlich übersetzt „mit Zeit“ –, dann beginnen die universitären Veranstaltungen üblicherweise 15 Minuten später. Stehen hinter der Uhrzeit die Buchstaben „s. t.“ („sine tempore“, also „ohne Zeit“), beginnt die Sitzung wie angegeben. Dank des akademischen Viertels können sich die Studenten ihren persönlichen Pünktlichkeitsvorlieben entsprechend im Hörsaal einfinden. Bereits um Punkt 11 Uhr im Hörsaal sitzen vorzugsweise Seniorenstudenten, Gasthörer, ausländische Studenten, die das akademische Viertel noch nicht kennen, und ich. Meine Freunde und der Großteil der anderen Teilnehmer trudeln kurz vor dem Ende der Viertelstunde gemächlich ein, nachdem sie noch genüsslich einen Kaffee getrunken haben.</div>
<div class="text-paragraph" data-para="D"><span class="para-tag">[Abschnitt D]</span> Früher diente die akademische Viertelstunde als Zeit für den Ortswechsel. Bis ins 18. Jahrhundert hinein fanden Lehrveranstaltungen in Räumen statt, die über die Universitätsstadt verteilt waren. Wenn die Kirchturmuhr schlug, hatten die Studenten noch eine Viertelstunde Zeit, ihr Ziel zu erreichen. Außerdem nutzte man das akademische Viertel, um den Stoff in den ersten 15 Minuten der Veranstaltung zu rekapitulieren. Heute wird es eher genutzt, um den optimalen Platz in der letzten Reihe zu suchen oder ein kurzes Nickerchen zu machen. Mir dagegen dient es dazu, vereinzelt Menschen wie mich zu entdecken. Studenten, die geduldig eine Viertelstunde lang Sitzplätze für ihre Kommilitonen freihalten, sie tapfer gegen Gasthörer verteidigen und trotzdem nicht unglücklich sind, weil sie wissen: Länger als eine Viertelstunde müssen sie nicht warten. Und damit lässt es sich gut leben, denkt man einmal an die vielen Stunden, in denen man auf rücksichtslose Mitmenschen warten muss, die sich selbst jede Nachlässigkeit nachsehen und dabei noch aufführen, als wären sie die Coolness in Person. Nicht umsonst befand schon der Philosoph und Schriftsteller Gotthold Ephraim Lessing: „Bester Beweis einer guten Erziehung ist die Pünktlichkeit.“</div>
<div class="text-paragraph" data-para="E"><span class="para-tag">[Abschnitt E]</span> Erstaunlich, dass eine so sinnvolle Einrichtung wie das akademische Viertel in angelsächsischen oder romanischen Ländern unbekannt ist. Kultiviert wurde es vor allem in den deutschsprachigen und skandinavischen Ländern, aber auch in der Schweiz oder Ungarn. Dass die Universitäten das akademische Viertel einführten, erweist sich heute jedenfalls noch aus einem anderen Grund als Segen. Und zwar wegen des morgendlichen Berufsverkehrs, des täglichen Verkehrschaos und der Unpünktlichkeit öffentlicher Verkehrsmittel. Das akademische Viertel wirkt da als geschickt einkalkulierter Puffer – auch wenn dessen Erfinder vor 400 Jahren das natürlich noch nicht vorhersehen konnten. Doch eines ist wohl gewiss: Seine Funktion lag darin, für Pünktlichkeit zu sorgen – und das ist mir ausgesprochen sympathisch.</div>`,
    questions: [
      {
        id: 7,
        text: 'In welchem Abschnitt äußert sich die Autorin negativ über andere?',
        uz: "Qaysi bo'limda muallif boshqalar haqida salbiy fikr bildiradi?",
        ans: 'D',
        expl: "D bo'limida muallif doim kechikadiganlarni «rücksichtslose Mitmenschen, die sich selbst jede Nachlässigkeit nachsehen und dabei noch aufführen, als wären sie die Coolness in Person» deb tanqid qiladi. (A bo'limi ham ba'zi talqinlarda uchraydi)."
      },
      {
        id: 8,
        text: 'In welchem Abschnitt fordert die Autorin die Leser zur Selbstreflexion auf?',
        uz: "Qaysi bo'limda muallif o'quvchilarni o'z-o'zini tahlil qilishga (mulohaza yuritishga) chorlaydi?",
        ans: 'A',
        expl: "A bo'limida: «Aber ganz ehrlich, wie sieht es denn bei Ihnen aus? Warten Sie etwa gerne?»"
      },
      {
        id: 9,
        text: 'In welchem Abschnitt ist die Autorin nachsichtig mit sich selbst?',
        uz: "Qaysi bo'limda muallif o'ziga nisbatan kechirimli (bag'rikeng) munosabatda bo'ladi?",
        ans: 'B',
        expl: "B bo'limida: «Doch ich gestehe mir das zu... niemand ist schließlich perfekt.»"
      },
      {
        id: 10,
        text: 'In welchem Abschnitt liefert die Autorin eine Definition?',
        uz: "Qaysi bo'limda muallif tushunchaga ta'rif (definitsiya) beradi?",
        ans: 'C',
        expl: "C bo'limida «akademisches Viertel» («c. t.» = cum tempore va «s. t.» = sine tempore) tushunchalariga aniq ta'rif berilgan."
      },
      {
        id: 11,
        text: 'In welchem Abschnitt spricht die Autorin eine Warnung aus?',
        uz: "Qaysi bo'limda muallif ogohlantirish bildiradi?",
        ans: 'B',
        expl: "B bo'limida: «Und gelassen sollte man unbedingt bleiben, wenn man warten muss: Sonst besteht die Gefahr, dass es einem die Laune verdirbt... und man als Griesgram in Verruf gerät.»"
      },
      {
        id: 12,
        text: 'In welchem Abschnitt zeigt sich die Autorin verwundert?',
        uz: "Qaysi bo'limda muallif hayratlanishini namoyon etadi?",
        ans: 'E',
        expl: "E bo'limida: «Erstaunlich, dass eine so sinnvolle Einrichtung wie das akademische Viertel in angelsächsischen oder romanischen Ländern unbekannt ist.»"
      }
    ]
  },
  lv3: {
    title: 'Schimpansen und Gorillas: Chancen und Gefahren einer Annäherung',
    titleUz: "Shimpanze va gorillalar: Inson bilan yaqinlashuvning imkoniyatlari va xavf-xatarlari",
    uzbekVocab: [
      { de: 'die Menschenaffen', uz: 'odamsimon maymunlar (shimpanze, gorilla, orangutan)' },
      { de: 'die Übertragung von Erregern', uz: "kasallik qo'zg'atuvchilarning (virus/bakteriya) yuqishi" },
      { de: 'die Entzündung der Atemwege', uz: "nafas yo'llari yallig'lanishi" },
      { de: 'der Milzbrand (Anthrax)', uz: 'kuydirgi kasalligi (sibireyazva)' },
      { de: 'menschliche Absonderungen', uz: 'inson ajratmalari (tupuk, axlat va h.k.)' },
      { de: 'das Sammelbecken (Reservoir) für Viren', uz: 'viruslar to‘planadigan tabiiy manba / rezervuar' },
      { de: 'jemandem zugutekommen', uz: "kimgadir foyda keltirmoq / naf keltirmoq" },
      { de: 'aus Rücksicht auf Touristen', uz: "sayyohlarning ko'ngliga qarab / sayyohlarni cho'chitmaslik uchun" }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: "1-xatboshi (Savollar 13–15: Dian Fossi, Jeyn Gudoll va Ugandadagi tog' gorillalari)",
        uz: "Dian Fossi (Dian Fossey) va Jeyn Gudoll (Jane Goodall) o'z tadqiqotlari bilan gorillalar va shimpanzelarni o'rganishda inqilob qilishdi (ammo ularning ishi hayvonlar haqidagi hujjatli filmlarga asos bo'lgani haqida matnda hech narsa yo'q) [13-savol: X]. Ko'pincha hayvonlardan insonga yuqadigan viruslar haqida gapiriladi, ammo odamsimon maymunlar insonda ommaviy kasalliklar keltirib chiqargani yo'q — aksincha, insonning o'zi maymunlar uchun katta xavf tug'dirmoqda [14-savol: F]. Masalan, Ugandada tog' gorillalari katta ehtimol bilan odamlar (sayyohlar yoki mahalliy aholi) bilan aloqa natijasida qo'tir va nafas yo'llari infeksiyasini yuqtirib, tibbiy davolanishga muhtoj bo'lishgan [15-savol: R]."
      },
      {
        label: "2-xatboshi (Savollar 16–18: Qizamiq, poliomiyelit, nafas yo'llari kasalliklari va Kot-d'Ivuardagi Taï bog'i)",
        uz: "Qizamiq (Masern) va poliomiyelitdan (Polio) keyin shimpanze va gorillalar kelajakda sil (Tuberkulose) bilan ham kasallanishi xavfi bor — ammo ular hozirning o'zidayoq silga chalingani xato [16-savol: F]. Qo'riqxonalarda nafas yo'llari yallig'lanishi (Entzündungen der Atemwege) odamsimon maymunlar orasida eng ko'p uchraydigan kasalliklar sirasiga kiradi [17-savol: R]. Kot-d'Ivuardagi (Elfenbeinküste) Taï milliy bog'ida tadqiqot olib borgan olimlar u yerda kutilmaganda kuydirgi (Milzbrand) bakteriyasidan o'lgan shimpanzelarni topishdi (ular bog'ni ataylab kuydirgi o'rganish uchun tanlamagan edilar) [18-savol: X]."
      },
      {
        label: "3-xatboshi (Savollar 19–21: Kasallik yuqish yo'llari, Ebola manbasi va emlash foydasi)",
        uz: "Odamsimon maymunlar o'rmonda qoldirilgan inson ajratmalari (menschliche Absonderungen) yoki chiqindilar bilan aloqa orqali kasallik yuqtirishlari mumkin [19-savol: R]. Ebola virusining tabiiy manbasi (Sammelbecken) haqida gap ketganda, ko'rshapalaklar (Fledermäuse) gumon qilinadi, ammo kemiruvchilar (Nagetiere) emas yoki bu hali to'liq isbotlanmagan [20-savol: F]. Agar odamlar (qo'riqxona xodimlari, tadqiqotchilar va mahalliy aholi) emlash (Impfung) olsalar, bu ularning yaqinidagi odamsimon maymunlarga ham katta foyda keltiradi [21-savol: R]."
      },
      {
        label: "4-xatboshi (Savollar 22–24: Eko-turizm foydasi va gigiyena qoidalari)",
        uz: "Sayyohlar keladigan hududlarda brakonerlik kamaygani sababli maymunlar populyatsiyasi kamaymaydi, balki barqaror saqlanadi yoki ko'payadi [22-savol: F]. Biroq sayyohlarning ko'ngliga qarab (masalan, tibbiy niqob taqish yoki masofa saqlash sayyohlarga yoqmasligi sababli) barcha maqsadga muvofiq himoya choralari ham to'liq amalga oshirilmayapti [23-savol: R]. Matnga eng mos sarlavha: «Chancen und Gefahren einer Annäherung» (Yaqinlashuvning imkoniyatlari va xavf-xatarlari) [24-savol: A]."
      }
    ] as ParagraphTranslation[],
    text: `<p>Forscherinnen wie Dian Fossey und Jane Goodall haben unser Bild von Berggorillas und Schimpansen nachhaltig geprägt, indem sie die Tiere in ihrem natürlichen Lebensraum aus nächster Nähe beobachteten. Während in den Medien meist vor Krankheitserregern gewarnt wird, die von Wildtieren auf den Menschen überspringen könnten, verläuft die Gefahr bei unseren nächsten Verwandten oft genau umgekehrt: Nicht die Menschenaffen haben durch Übertragung von Erregern beim Menschen Massenerkrankungen ausgelöst, sondern der Mensch wird zunehmend zum gesundheitlichen Risiko für die Primaten. In Uganda beispielsweise mussten Berggorillas vermutlich wegen des zu engen Kontaktes mit Menschen bereits medizinisch behandelt werden.</p>
<p>Nach Ausbrüchen von Kinderlähmung (Polio) und Masern befürchten Experten, dass Schimpansen und Gorillas künftig womöglich auch von Tuberkulose betroffen sein könnten. Schon heute gehören in vielen Schutzgebieten Entzündungen der Atemwege bei Menschenaffen zu den häufigsten Erkrankungen und Todesursachen. Im Taï-Nationalpark an der Elfenbeinküste stießen Wissenschaftler, die dort das Sozialverhalten von Schimpansen beobachteten, zudem auf Tiere, die an Bakterien verendet waren, welche Milzbrand verursachen.</p>
<p>Die Übertragungswege sind vielfältig: Menschenaffen können sich unter anderem über den Kontakt mit menschlichen Absonderungen oder achtlos weggeworfenen Abfällen im Wald anstecken. Anders verhält es sich bei den gefürchteten Ebola-Viren, bei denen zwar bestimmte Fledermäuse, nicht jedoch Nagetiere als wahrscheinliches Sammelbecken gelten. Gegen viele menschliche Infektionskrankheiten gibt es jedoch wirksame Prävention: Wenn Menschen im Umfeld der Nationalparks sich impfen lassen, kommt das unmittelbar auch den Menschenaffen in ihrer Nähe zugute.</p>
<p>Dennoch ist die Nähe des Menschen für die Tiere nicht nur ein Fluch: In der Nähe von Touristen und Forschern verringert sich die Affenpopulation keineswegs – im Gegenteil, die Präsenz schützt die Tiere oft vor Wilderern und sichert Einnahmen für den Naturschutz. Allerdings werden aus Rücksicht auf zahlende Touristen in manchen Parks leider nicht alle sinnvollen Schutzmaßnahmen, wie etwa das konsequente Tragen eines Mundschutzes oder strenge Mindestabstände, durchgehend durchgeführt.</p>`,
    questions: [
      { id: 13, text: 'Dian Fossey und Jane Goodall lieferten mit ihrer Forschung Vorlagen für Tierdokumentationen.', uz: "Dian Fossi va Jeyn Gudoll o'z tadqiqotlari bilan hayvonlar haqidagi hujjatli filmlar uchun asos yetkazib berishgan.", ans: 'X', expl: "Matnda ularning tadqiqotlari tilga olingan, ammo hujjatli filmlar uchun shablon bo'lgani haqida ma'lumot yo'q." },
      { id: 14, text: 'Menschenaffen haben durch Übertragung von Erregern bei Menschen bereits Massenerkrankungen ausgelöst.', uz: "Odamsimon maymunlar kasallik qo'zg'atuvchilarni yuqtirish orqali odamlarda ommaviy kasalliklarni keltirib chiqargan.", ans: 'F', expl: "Aksincha, odamlardan maymunlarga kasallik yuqishi asosiy xavf hisoblanadi." },
      { id: 15, text: 'In Uganda mussten Berggorillas vermutlich wegen des Kontaktes mit Menschen medizinisch behandelt werden.', uz: "Ugandada tog' gorillalari katta ehtimol bilan odamlar bilan aloqa sababli tibbiy davolanishga majbur bo'lgan.", ans: 'R', expl: "1-xatboshida: «In Uganda beispielsweise mussten Berggorillas vermutlich wegen des zu engen Kontaktes mit Menschen bereits medizinisch behandelt werden.»" },
      { id: 16, text: 'Nach Masern und Polio sind Schimpansen und Gorillas nun auch von Tuberkulose betroffen.', uz: "Qizamiq va poliomiyelitdan so'ng shimpanze va gorillalar endilikda sil kasalligiga ham chalingan.", ans: 'F', expl: "Mutaxassislar kelajakda sil (Tuberkulose) yuqishidan xavotirda, ammo hozirning o'zida chalingan deyilmagan." },
      { id: 17, text: 'In Schutzgebieten gehören Entzündungen der Atemwege bei Menschenaffen zu den häufigsten Erkrankungen.', uz: "Qo'riqxonalarda nafas yo'llari yallig'lanishi odamsimon maymunlarda eng ko'p uchraydigan kasalliklar qatoriga kiradi.", ans: 'R', expl: "2-xatboshida: «Schon heute gehören in vielen Schutzgebieten Entzündungen der Atemwege bei Menschenaffen zu den häufigsten Erkrankungen.»" },
      { id: 18, text: 'Für ihre Forschungen zu Bakterien, die Milzbrand verursachen, wählten Forscher den Taï-Nationalpark der Elfenbeinküste.', uz: "Kuydirgi chaqiruvchi bakteriyalarni tadqiq qilish uchun olimlar Kot-d'Ivuardagi Taï milliy bog'ini tanlashdi.", ans: 'X', expl: "Olimlar Taï bog'ida shimpanzelarni kuzatishgan va tasodifan kuydirgidan o'lgan maymunlarga duch kelishgan, bog'ni bu bakteriya uchun maxsus tanlashmagan." },
      { id: 19, text: 'Menschenaffen können sich über den Kontakt mit menschlichen Absonderungen anstecken.', uz: "Odamsimon maymunlar inson ajratmalari bilan aloqa orqali kasallik yuqtirishi mumkin.", ans: 'R', expl: "3-xatboshida: «Menschenaffen können sich unter anderem über den Kontakt mit menschlichen Absonderungen... anstecken.»" },
      { id: 20, text: 'Fledermäuse und Nagetiere gelten als Sammelbecken für Ebola-Viren.', uz: "Ko'rshapalaklar va kemiruvchilar Ebola viruslari to'planadigan manba hisoblanadi.", ans: 'F', expl: "Faqat ko'rshapalaklar gumon qilinadi, kemiruvchilar (Nagetiere) emas." },
      { id: 21, text: 'Wenn Menschen sich impfen lassen, kommt das auch den Menschenaffen in ihrer Nähe zugute.', uz: "Agar odamlar emlash olsalar, bu ularning yaqinidagi odamsimon maymunlarga ham foyda keltiradi.", ans: 'R', expl: "3-xatboshi oxirida aynan shu fikr tasdiqlangan." },
      { id: 22, text: 'In der Nähe von Touristen verringert sich die Affenpopulation.', uz: "Sayyohlar yaqinida maymunlar populyatsiyasi kamayadi.", ans: 'F', expl: "Aksincha, sayyohlar va tadqiqotchilar bor joyda maymunlar brakonerlardan himoyalanadi va populyatsiya kamaymaydi." },
      { id: 23, text: 'Aus Rücksicht auf Touristen werden nicht alle sinnvollen Schutzmaßnahmen durchgeführt.', uz: "Sayyohlarning ko'ngliga qarab barcha maqsadga muvofiq himoya choralari ham amalga oshirilmaydi.", ans: 'R', expl: "4-xatboshi oxirida: «Allerdings werden aus Rücksicht auf zahlende Touristen... nicht alle sinnvollen Schutzmaßnahmen durchgehend durchgeführt.»" },
      {
        id: 24,
        text: 'Welche der Überschriften a, b oder c passt am besten zum Text?',
        uz: "Qaysi sarlavha matnga eng mos keladi?",
        opts: [
          'a) Chancen und Gefahren einer Annäherung',
          'b) Globale Entwicklung des Öko-Tourismus',
          'c) Jagd nach neuen Krankheitserregern'
        ],
        ans: 'A',
        expl: "Matn odamlar (tadqiqotchilar va sayyohlar) bilan odamsimon maymunlar yaqinlashuvining ham xavflarini (kasalliklar), ham imkoniyatlarini (brakonerlikdan himoya) yoritadi."
      }
    ]
  },
  sp: {
    title: '„Bio-“ giftiger als „Chemie“?',
    titleUz: "«Tabiiy (Bio)» moddalar «kimyoviy» moddalardan zaharliroqmi?",
    uzbekVocab: [
      { de: 'in der Regel', uz: 'odatda, qoida tariqasida' },
      { de: 'hervorbringen (bringt hervor)', uz: 'yaratmoq, yetishtirmoq (tabiat)' },
      { de: 'hochtoxische Substanzen', uz: 'o‘ta zaharli (toksik) moddalar' },
      { de: 'kein Risiko darstellen', uz: 'hech qanday xavf tug‘dirmaslik' },
      { de: 'sich tot stellen', uz: "o'zini o'likka solmoq" },
      { de: 'sich herumsprechen', uz: 'og‘izdan-og‘izga tarqalmoq, ma’lum bo‘lib ketmoq' },
      { de: 'gesundheitlich unbedenklich', uz: "sog'liq uchun mutlaqo bexatar / zararsiz" },
      { de: 'in hohen Dosen', uz: 'yuqori dozalarda / miqdorlarda' },
      { de: 'Alarm schlagen', uz: 'xavf bongini urmoq' },
      { de: 'die Fressfeinde', uz: "o'simlik yoki hayvonni yeydigan tabiiy dushmanlar" }
    ] as VocabItem[],
    text: `<p>Wenn heutzutage von gefährlichen <em>[0: Stoffen]</em> die Rede ist, geht es <strong>(25)</strong> um Chemieunglücke oder Pestizidskandale. Im Gegenzug gilt das, was die Natur <strong>(26)</strong>, als gesund. Natürlich soll hier nicht die Wirkung von Pestiziden verharmlost werden. Denn sie sind zweifelsfrei hochtoxische <strong>(27)</strong>. Doch innerhalb der Europäischen Union sind die Richtlinien und Grenzwerte für sie sehr <strong>(28)</strong> und sie stellen für den Verbraucher eigentlich kein Risiko <strong>(29)</strong>.</p>
<p>Einer Studie <strong>(30)</strong> sind in Gewicht gemessen nur 0,01 Prozent aller <strong>(31)</strong> Stoffe chemischen Ursprungs, also durch Menschenhand gemacht. Unglaubliche 99,99 Prozent aller Giftstoffe <strong>(32)</strong> Pflanzen ganz von selbst! Aber welches Interesse hat zum Beispiel eine Kartoffel, uns das Leben mit giftigen Zusatzstoffen schwer zu <strong>(33)</strong>? Nun, auch eine Kartoffel will stressfrei leben und ihre Gene <strong>(34)</strong>. Das kann sie aber nur, wenn sie nicht gefressen wird.</p>
<p>Um sich vor Feinden zu schützen, hat die Natur eine Vielzahl von <strong>(35)</strong> entwickelt. Bei Pflanzen sind die Verteidigungsmöglichkeiten eingeschränkter als bei Tieren. Von einem Kohlkopf, der sich tot stellt, <strong>(36)</strong> ein hungriges Kaninchen nicht groß beeindrucken. Was <strong>(37)</strong> tun Pflanzen, um zu überleben? Entweder sie tarnen sich wie die lebenden Steine, schmecken scharf wie Chili oder sind einfach – giftig! So was spricht sich nämlich bei Käfern, Maden und Pilzen ganz schnell <strong>(38)</strong>.</p>
<p>Das wissen auch wir Menschen. Dennoch verzehren wir – gesundheitlich vollkommen <strong>(39)</strong> – 60 Kilogramm Kartoffeln im Jahr. Denn wir wissen ganz genau, wo die Kartoffel ihr Gift <strong>(40)</strong>: Dort, wo es ihr wichtig ist, an den Fortpflanzungsorganen.</p>
<p>Die Blüten und Beeren einer Kartoffel <strong>(41)</strong> diverse Glykoalkaloide in hohen <strong>(42)</strong>, darunter das giftige Solanin. Die Knolle, in der die Stärke und die anderen leckeren Nährstoffe lagern, ist im Gegensatz <strong>(43)</strong> ungiftig. In ihr wird erst dann Gift gebildet, wenn sie beschädigt oder gestresst wird. Bei zu viel UV-Licht beispielsweise <strong>(44)</strong> die Kartoffelzelle Alarm und verstärkt die Produktion von Solanin, erkennbar an den grünen Augen. Dort bildet die Knolle nämlich nicht nur ihr Gift, sondern parallel dazu auch Chlorophyll. Für uns Menschen ist das <strong>(45)</strong> praktisch: Wir schneiden einfach die grünen Augen raus und essen die Knolle ohne Gefahr. Dumm gelaufen für die Kartoffel. Man <strong>(46)</strong> die Intelligenz seiner Fressfeinde eben nie unterschätzen.</p>`,
    questions: [
      { id: 25, opts: ['aufgrund der Regel', 'entgegen der Regel', 'in der Regel', 'nach der Regel'], ans: 'in der Regel', expl: "«in der Regel» — odatda / qoida tariqasida." },
      { id: 26, opts: ['anbringt', 'einbringt', 'hervorbringt', 'weiterbringt'], ans: 'hervorbringt', expl: "«was die Natur hervorbringt» — tabiat yaratadigan / yetishtiradigan narsa." },
      { id: 27, opts: ['Substansen', 'Substantzen', 'Substanzen', 'Supstanzen'], ans: 'Substanzen', expl: "To'g'ri imlo: «Substanzen» (moddalar)." },
      { id: 28, opts: ['bitter', 'herb', 'rau', 'streng'], ans: 'streng', expl: "«Richtlinien und Grenzwerte sind sehr streng» — me'yorlar juda qat'iy." },
      { id: 29, opts: ['auf', 'dar', 'fest', 'zu'], ans: 'dar', expl: "«kein Risiko darstellen» — xavf tug'dirmaslik." },
      { id: 30, opts: ['bezüglich', 'hinsichtlich', 'laut', 'zufolge'], ans: 'zufolge', expl: "«Einer Studie zufolge» — Dativdan keyin keluvchi postpozitsiya: «zufolge» (tadqiqotga ko'ra)." },
      { id: 31, opts: ['gesundheitsgefärdenden', 'gesundheitsgefährdenden', 'Gesundheits gefährdenden', 'gesundheitsgeferdenden'], ans: 'gesundheitsgefährdenden', expl: "To'g'ri imlo: «gesundheitsgefährdenden» (die Gefahr -> gefährden)." },
      { id: 32, opts: ['formieren', 'konstruieren', 'modellieren', 'produzieren'], ans: 'produzieren', expl: "«Giftstoffe produzieren» — zaharli moddalarni ishlab chiqarmoq." },
      { id: 33, opts: ['bereiten', 'machen', 'tun', 'verursachen'], ans: 'machen', expl: "«jemandem das Leben schwer machen» — turg'un ibora (hayotini qiyinlashtirmoq)." },
      { id: 34, opts: ['abgeben', 'hingeben', 'weitergeben', 'wiedergeben'], ans: 'weitergeben', expl: "«Gene weitergeben» — genlarni keyingi avlodga uzatmoq." },
      { id: 35, opts: ['Berechnungen', 'Plänen', 'Strategien', 'Überlegungen'], ans: 'Strategien', expl: "«eine Vielzahl von Strategien entwickeln» — himoya strategiyalarini ishlab chiqmoq." },
      { id: 36, opts: ['lässt er', 'lässt es', 'lässt ihn', 'lässt sich'], ans: 'lässt sich', expl: "«Von einem Kohlkopf ... lässt sich ein Kaninchen nicht beeindrucken» — sich beeindrucken lassen." },
      { id: 37, opts: ['also', 'demnach', 'insofern', 'somit'], ans: 'also', expl: "«Was also tun Pflanzen, um zu überleben?» — Xo'sh, unda o'simliklar nima qiladi?" },
      { id: 38, opts: ['ab', 'aus', 'herum', 'zu'], ans: 'herum', expl: "«sich herumsprechen» — tez tarqalmoq / ma'lum bo'lmoq." },
      { id: 39, opts: ['unangenehm', 'unbedenklich', 'unbesorgt', 'unruhig'], ans: 'unbedenklich', expl: "«gesundheitlich vollkommen unbedenklich» — sog'liq uchun mutlaqo bexatar." },
      { id: 40, opts: ['speichert', 'spritzt', 'sprüht', 'spuckt'], ans: 'speichert', expl: "«wo die Kartoffel ihr Gift speichert» — zaharini qayerda saqlashini / to'plashini." },
      { id: 41, opts: ['behalten', 'enthalten', 'erhalten', 'verhalten'], ans: 'enthalten', expl: "«enthalten diverse Glykoalkaloide» — o'z ichiga oladi / tarkibida bor." },
      { id: 42, opts: ['Behältern', 'Dosen', 'Konserven', 'Trägern'], ans: 'Dosen', expl: "«in hohen Dosen» (die Dosis -> Pl. Dosen) — yuqori dozalarda." },
      { id: 43, opts: ['dabei', 'dafür', 'damit', 'dazu'], ans: 'dazu', expl: "«im Gegensatz dazu» — bunga qarama-qarshi ravishda." },
      { id: 44, opts: ['ertönt', 'löst', 'schlägt', 'schrillt'], ans: 'schlägt', expl: "«Alarm schlagen» — xavf bongini urmoq." },
      { id: 45, opts: ['annähernd', 'fast', 'ungefähr', 'ziemlich'], ans: 'ziemlich', expl: "«ziemlich praktisch» — ancha qulay / amaliy." },
      { id: 46, opts: ['durfte', 'konnte', 'musste', 'sollte'], ans: 'sollte', expl: "«Man sollte die Intelligenz seiner Fressfeinde eben nie unterschätzen» — maslahat/xulosa ma'nosida Konjunktiv II." }
    ]
  }
};
