/**
 * Authentic telc Deutsch C1 Hochschule — Variants 19 & 20 + Listening Pools for 16–20
 * Extracted from 16_b5dbceb7.pdf .. 20_a31b4d1e.pdf
 * All Arabic explanations, vocabulary tables, transcripts, and keys translated into Uzbek.
 */

import { VocabItem, ParagraphTranslation } from './variants14And15Data';
import { VARIANT_18_READING } from './variants16To18Data';

// ============================================================================
// VARIANT 19 (PDF 19 — ♧ الاحتمال التاسع عشر ♧)
// ============================================================================
export const VARIANT_19_READING = {
  pdfSource: '/assets/aistudio/19_763d70c5.pdf',
  lv1: {
    title: 'Die Sprache der Tiere',
    titleUz: 'Hayvonlar tili va muloqot usullari',
    uzbekVocab: [
      { de: 'krähen / quaken / grunzen', uz: "qichqirmoq (xo'roz) / vaqillamoq (baqa) / xurillamoq (to'ng'iz)" },
      { de: 'das Unterholz', uz: "o'rmon ostidagi qalin butazor" },
      { de: 'seine Stimmung kundtun', uz: "o'z kayfiyatini bildirmoq / namoyon etmoq" },
      { de: 'der Artgenosse (-n)', uz: 'hamjins / bir turga mansub jonivor' },
      { de: 'der Gesangsvirtuose (-n)', uz: "sayrash / qo'shiq aytish ustasi (virtuozi)" },
      { de: 'ein ausgeklügelter Sprachcode', uz: 'puxta o‘ylangan / murakkab til kodi' },
      { de: 'die Grundausstattung an Lautäußerungen', uz: 'tug‘ma tovush chiqarish bazaviy to‘plami' },
      { de: 'Unterwürfigkeit demonstrieren', uz: "bo'ysunishni / itoatkorlikni namoyish etmoq" },
      { de: 'den Schwanz einziehen', uz: 'dumini qismoq' },
      { de: 'der Infraschall', uz: 'infratovush (inson qulog‘i eshitmaydigan past chastotali tovush)' }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: "1-xatboshi va [ 1 ] bo'shliq",
        uz: "Atrof-muhitimiz hayvonlarning tovushlariga to'la. (0 -> Z: Diqqat bilan quloq solgan odam ularni hamma joyda eshitishi mumkin:) Ertalab xo'roz qichqiradi, kechqurun hovuzda baqalar vaqillaydi, tunda esa yovvoyi to'ng'izlar butazor oralab xurillab yuguradi. Tadqiqotlar tasdiqladiki, hayvonlar besabab tovush chiqarmaydi — xuddi biz insonlar kabi ulardan o'zaro tushunish (muloqot) uchun foydalanadi. Hayvonlar muloqoti juda xilma-xil maqsadlarga xizmat qiladi: [ 1 -> G: Ba'zan juftini jalb qilish, ba'zan hududni himoya qilish yoki o'z turdoshlarini dushmandan ogohlantirish kerak bo'ladi ]. Shuningdek, hayvonlar o'z tovushlaridan joriy kayfiyatini bildirish uchun ham foydalanadi."
      },
      {
        label: "2–3-xatboshilar va [ 2 ]–[ 4 ] bo'shliqlar",
        uz: "«Muloqot hayotiy zaruratdir. Barcha hayvonlar u yoki bu tarzda bir-biri bilan muloqot qiladi», deydi Bilefeld universiteti xulq-atvor biologiyasi professori Oliver Kryuger (Oliver Krüger). Ayrim hayvon turlari ohangdor til borasida favqulodda iste'dodli: qushlar, ayniqsa narlari haqiqiy qo'shiq virtuozlaridir. [ 2 -> D: Biroq boshqa turlar ham hayratlanarli qobiliyatlarga ega ]. Masalan, delfinlar bir-biriga ism qo'yadi, ko'rshapalaklar murakkab til kodiga, kaputsin maymunlari esa hatto sintaksisga ega. Ilm-fan hayvonlarning til dunyosini qadam-baqadam o'rganmoqda. [ 3 -> H: Biroq hayvonlar muloqotining bu turi haqiqiy til hisoblanadimi-yo'qmi, bu borada olimlar hali ham bahslashmoqda ]. Anig'i shuki, insonlardagi kabi mukammal tovushli til hali boshqa hech bir turda topilmagan. Ko'pchilik hayvonlarning inson bilan umumiy jihati quyidagicha: ular ham tug'ilganidanoq gapira olmaydi. [ 4 -> B: Aksariyat qismi genetik yo'l bilan o'tadigan tovush chiqarishning bazaviy to'plami bilan dunyoga keladi ]. Ularni to'g'ri qo'llashni esa keyinroq o'rganishlari kerak."
      },
      {
        label: "4–5-xatboshilar va [ 5 ]–[ 6 ] bo'shliqlar",
        uz: "Ammo barcha hayvon turlari ham muloqot uchun akustik (ovozli) signallardan foydalanavermaydi. [ 5 -> A: Bundan tashqari, hayvonlar axborot almashish uchun hidlar, tana holati va hatto elektr signallaridan ham foydalanadilar ]. Masalan, bo'rilar haybatliroq ko'rinish uchun junini hurpaytiradi, itoatkorlikni ko'rsatmoqchi bo'lsa kichrayib dumini qisadi. Kaltakesaklar esa 6000 dan ortiq tana holatini (pozasini) egallash orqali tushunishadi. Hayvonot olami muloqotning yanada nozik imkoniyatlarini biladi: masalan, fillar past chastotali infratovushlar (Infraschall) chiqaradi. Infratovush deb inson qulog'i eshitish chegarasidan pastda joylashgan tovushlarga aytiladi. [ 6 -> C: Demak, bu ohanglar shu qadar pastki, bizning qulog'imiz ularni umuman ilg'ay olmaydi ]. Fillar bir necha kilometr masofadan turib suhbatlashish uchun ulardan foydalanadi — biz bunga telefon ishlatishimiz kerak bo'lsa, ular texnik vositalarsiz uzoq masofali suhbatlar qurishadi."
      }
    ] as ParagraphTranslation[],
    text: `<p>Unsere Umwelt ist voll von tierischen Lauten. <em>[0: Z]</em> Morgens kräht der Hahn, abends quaken Frösche im Gartenteich und nachts laufen Wildschweine grunzend durchs Unterholz. Die Forschung hat bestätigt: Tiere produzieren nicht grundlos Laute. Wie wir Menschen nutzen sie sie zur Verständigung. Die tierische Kommunikation dient dabei ganz unterschiedlichen Zwecken: <span class="text-gap">[ 1 ]</span> Ihre Laute nutzen Tiere aber auch, um ihre aktuelle Stimmung kundzutun. Je sozialer Tiere leben, desto häufiger und vielfältiger äußern sie sich.</p>
<p>„Kommunikation ist lebensnotwendig. Alle Tiere kommunizieren auf die eine oder andere Weise miteinander“, sagt Oliver Krüger, Professor für Verhaltensbiologie an der Uni Bielefeld. Laute sind aus dem Reich der Tiere also nicht wegzudenken. Einige Tierarten erweisen sich in Sachen Klangsprache sogar als außergewöhnlich talentiert: Vögel, vor allem die Männchen, sind wahre Gesangsvirtuosen. <span class="text-gap">[ 2 ]</span> So geben sich Delfine Namen, Fledermäuse haben einen ausgeklügelten Sprachcode, die Kapuzineräffchen sogar eine Syntax.</p>
<p>Die Wissenschaft ergründet die sprachliche Welt der Tiere Schritt für Schritt. <span class="text-gap">[ 3 ]</span> Sicher ist: Eine so ausgefeilte Lautsprache wie beim Menschen wurde bisher bei keiner anderen Art gefunden. Was die meisten Tiere jedoch mit dem Menschen gemeinsam haben, ist Folgendes: Auch sie können nicht von Geburt an sprechen. <span class="text-gap">[ 4 ]</span> Diese richtig einzusetzen, müssen sie erst noch lernen. Erst mit der Zeit sind sie dazu in der Lage, Laute bestimmten Situationen zuzuordnen.</p>
<p>Doch nicht alle Tierarten verwenden akustische Signale für die Kommunikation. <span class="text-gap">[ 5 ]</span> Wölfe stellen beispielsweise das Fell auf, um eindrucksvoller auszusehen und Artgenossen zu imponieren. Wenn sie dagegen Unterwürfigkeit demonstrieren möchten, machen sie sich klein und ziehen den Schwanz ein. Eidechsen hingegen verständigen sich miteinander, indem sie mehr als 6000 verschiedene Körperhaltungen einnehmen.</p>
<p>Die Tierwelt kennt jedoch noch weitere raffinierte Möglichkeiten der Kommunikation: Elefanten etwa senden tiefe Infraschall-Laute aus. Als Infraschall bezeichnet man Töne, die unterhalb des Hörbereichs des menschlichen Ohres liegen. <span class="text-gap">[ 6 ]</span> Elefanten nutzen sie, um sich über mehrere Kilometer hinweg miteinander zu unterhalten. Was Kommunikation über weite Strecken betrifft, haben sie – ebenso wie einige andere Tierarten – uns Menschen also durchaus etwas voraus: Während wir in diesem Fall zum Telefon greifen müssen, führen sie Ferngespräche ganz ohne technische Hilfsmittel.</p>`,
    options: [
      {
        key: 'A',
        text: 'Daneben verwenden Tiere auch Düfte, Körperhaltung und sogar elektrische Signale zum Austausch von Informationen.',
        uz: "Bundan tashqari, hayvonlar axborot almashish uchun hidlar, tana holati va hatto elektr signallaridan ham foydalanadilar."
      },
      {
        key: 'B',
        text: 'Der Großteil kommt mit einer Grundausstattung an Lautäußerungen zur Welt, die genetisch weitergegeben wird.',
        uz: "Aksariyat qismi genetik yo'l bilan o'tadigan tovush chiqarishning bazaviy to'plami bilan dunyoga keladi."
      },
      {
        key: 'C',
        text: 'Diese Töne sind also so tief, dass unser Ohr sie gar nicht wahrnehmen kann.',
        uz: "Demak, bu tovushlar shu qadar pastki, bizning qulog'imiz ularni umuman ilg'ay olmaydi."
      },
      {
        key: 'D',
        text: 'Doch auch andere Arten verfügen über erstaunliche Fähigkeiten.',
        uz: "Biroq boshqa turlar ham hayratlanarli qobiliyatlarga ega."
      },
      {
        key: 'E',
        text: 'Folglich könne man ihre Lautäußerungen nicht als Sprache bezeichnen.',
        uz: "Binobarin, ularning tovush chiqarishini til deb atab bo'lmas emish. (Ortiqcha gap)"
      },
      {
        key: 'F',
        text: 'Forscher haben nämlich herausgefunden, dass Elefanten auch Fremdsprachen lernen können.',
        uz: "Tadqiqotchilar fillar chet tillarini ham o'rgana olishini aniqlashdi. (Ortiqcha gap)"
      },
      {
        key: 'G',
        text: 'Mal soll ein Partner angelockt, mal das Revier verteidigt oder Artgenossen vor Feinden gewarnt werden.',
        uz: "Ba'zan juftini jalb qilish, ba'zan hududni himoya qilish yoki o'z turdoshlarini dushmandan ogohlantirish kerak bo'ladi."
      },
      {
        key: 'H',
        text: 'Ob diese Art der tierischen Kommunikation jedoch eine wirkliche Sprache ist, darüber streiten die Forscher noch.',
        uz: "Biroq hayvonlar muloqotining bu turi haqiqiy til hisoblanadimi-yo'qmi, bu haqda tadqiqotchilar hali ham bahslashmoqdalar."
      }
    ],
    answers: { '1': 'G', '2': 'D', '3': 'H', '4': 'B', '5': 'A', '6': 'C' }
  },
  lv2: {
    title: 'Wenn der Dozent zehn Jahre jünger ist',
    titleUz: "O'qituvchi (dotsent) o'zingizdan o'n yosh kichik bo'lsa...",
    uzbekVocab: [
      { de: 'eine allwissende Respektsperson', uz: 'hamma narsani biluvchi obroli shaxs' },
      { de: 'der graumelierte Welterklärer', uz: 'sochiga oq oralagan dunyoni tushuntiruvchi ustoz' },
      { de: 'der Grünschnabel / blutjunger Nachwuchsdozent', uz: 'og‘zidan onasining suti ketmagan yosh / juda yosh o‘qituvchi' },
      { de: 'die altersweise Koryphäe', uz: 'yoshi ulug‘ va dono ilm darg‘asi (korifey)' },
      { de: 'die Schulbank drücken', uz: 'partaga o‘tirib o‘qimoq' },
      { de: 'Digital Natives', uz: 'raqamli dunyoda tug‘ilib o‘sgan avlod' },
      { de: 'sich etwas abschauen von (+ Dat.)', uz: 'kimdandir biror narsani ko‘rib o‘rganmoq / o‘zlashtirmoq' },
      { de: 'abgehängt werden / veralten', uz: 'zamondan ortda qolib ketmoq / eskirmoq' },
      { de: 'am Puls der Zeit sein', uz: 'zamon bilan hamnafas bo‘lmoq' }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: "Abschnitt A (An'anaviy ta'lim iyerarxiyasi va yosh o'qituvchiga ishonchsizlik)",
        uz: "Eski ta'lim dunyosida dars shunday ko'rinardi: minbarda o'zingizdan kamida yarim umr katta bo'lgan hamma narsani biluvchi ustoz turar, o'quvchi esa itoatkorlik bilan tinglardi. O'qituvchi sochiga oq oralagan dono ustoz obraziga mos kelsa, buni bajonidil qabul qilamiz. Ammo dotsent o'zingizdan ancha yosh bo'lsachi! Bunday «sariq tumshuq» (Grünschnabel) bizga nimani ham tushuntira olardi? Dono korifey o'rniga doska oldida juda yosh o'qituvchi turganida o'quvchilarning yuzi cho'zilib ketishi kulgili ko'rinadi."
      },
      {
        label: "Abschnitt B (Muallifning Hamburg Media School'dagi shaxsiy tajribasi va hayrati)",
        uz: "Muallif Hamburg Media School'da magistraturada o'qiyotganida xuddi shunday holatga tushganini hikoya qiladi [8-savol: B — muallif shaxsiy tajribasini tasvirlaydi]. Uning o'qituvchisi — raqamli strateg Kevin Vayer (Kevin Weyer) muallifdan roppa-rosa 10 yosh kichik edi. Bu holat muallifni qanchalik o'ylantirib qo'ygani aslida hayratlanarli va g'alati («Eigentlich ist es verwunderlich, fast schon befremdlich...») [11-savol: B — muallif hayratlanishini bildiradi]: 40 yoshdan oshganidan hech qachon siqilmagan odam to'satdan o'zini qari his qila boshlagan."
      },
      {
        label: "Abschnitt C (Bilimlarning tez eskirishi va umrbod ta'lim zarurati)",
        uz: "Buning sabablari aniq: ko'plab sohalarda bilimlar har qachongidan ham tez o'zgarmoqda, innovatsiya sikllari juda qisqa. Ilgari o'qishni bitirgach olingan bilim butun umrga yetadi deb hisoblangan bo'lsa, bugun o'rganish egri chizig'i faqat pensiyaga chiqqandagina tugaydi va ko'plab tajribali mutaxassislar («alte Hasen») qaytadan partaga o'tirishmoqda."
      },
      {
        label: "Abschnitt D («Digital Natives» ta'rifi va yoshlarga nisbatan xurofotlardan ogohlantirish)",
        uz: "31 yoshli jurnalist Kevin Vayer 25 yoshidan beri dars beradi va bugun 50–60 yoshlilarga ham mobil ilova yaratishni o'rgatadi. Raqamli jurnalistika va ijtimoiy tarmoqlar «Digital Natives» uchun yaratilgandek edi: bu tushuncha ostida raqamli dunyoda ulg'aygan va unga intuitiv ravishda kirib boradigan insonlar nazarda tutiladi («Damit sind Personen gemeint, die...») [7-savol: D — muallif ta'rif beradi]. Shu bilan birga, ijtimoiy ko'nikmalar va mustahkam shaxsiyatni faqat kattalarga xos deb bilishda ehtiyot bo'lish kerak («Man sollte allerdings vorsichtig sein... Allzu leicht neigt man zu Vorurteilen») [9-savol: D — muallif ogohlantiradi]."
      },
      {
        label: "Abschnitt E (Professor Andreas Dörpinghaus iqtibosi va yakuniy xulosa)",
        uz: "Vayerning kursidagi eng katta tinglovchi — 59 yoshli jurnalist Monika Lerhammer yoshlardan ko'p narsa o'rganish mumkinligini aytadi. Vyursburg universiteti ta'lim tadqiqotchisi Andreas Dyorpingxaus (Andreas Dörpinghaus) ham umrbod o'rganish stress va «ortda qolib ketish qo'rquvi» bilan bog'liqligini ta'kidlaydi [10-savol: E — muallif avtoritetga/mutaxassisga tayanadi]. Bularning barchasidan xulosa chiqarish mumkinki («Folgern kann man aus alldem also:»): kattalarning yoshlardan o'rganishi g'ayrioddiy tuyulsa-da, eng dolzarb mavzularda zamon bilan hamnafas bo'lgan yoshlar eng yaxshi bilimga ega [12-savol: E — muallif xulosa chiqaradi]."
      }
    ] as ParagraphTranslation[],
    text: `<div class="text-paragraph" data-para="A"><span class="para-tag">[Abschnitt A]</span> In der alten Bildungswelt sah Unterricht so aus: Vorn am Pult stand eine allwissende Respektsperson, die mindestens ein halbes Leben älter als man selbst war. Als Schüler hatte man dankbar und gehorsam zu lauschen. Das ist lange her. Aber noch heute finden sich Reste dieser strikten Bildungshierarchie in unseren Köpfen: hier der an Lebensjahren reiche Lehrer, dort der unerfahrene Schüler. In der Schule, später an der Universität, prägt sich ein, was trotz aller diskursiven Unterrichtsformen beharrlich ist: Frontalunterricht, Dozieren, Prüfungen. Selbst in modernen beruflichen Weiterbildungsseminaren sind die Rollenzuteilungen oft erstaunlich traditionell. Solange der Lehrende das klassische Bild des graumelierten Welterklärers erfüllt, akzeptieren wir das meist auch willig. Wehe aber, die Dozentin oder der Dozent ist wesentlich jünger als man selbst. Was soll einem ein solcher Grünschnabel denn erklären können? Fast schon komisch wirken die langen Gesichter, die so mancher Lernwillige zieht, wenn statt der altersweisen Koryphäe ein blutjunger Nachwuchsdozent an der Tafel steht. Wenn man darüber nachdenkt, fällt einem auf, wie anachronistisch so mancher Glaubenssatz über das Lernen, den man noch immer im Kopf hat, eigentlich ist.</div>
<div class="text-paragraph" data-para="B"><span class="para-tag">[Abschnitt B]</span> So ähnlich erging es mir in einem Seminar an der Hamburg Media School, an der ich ein berufsbegleitendes Master-Weiterbildungsstudium absolvierte. Ein Blick in die Vita meines Dozenten, des Digitalstrategen Kevin Weyer, zeigte: Er ist ganze zehn Jahre jünger als ich selbst. Eigentlich ist es verwunderlich, fast schon befremdlich, wie sehr mich diese Tatsache beschäftigte: Plötzlich fühlte ich mich alt, obwohl ich bislang keine Probleme damit hatte, die 40 überschritten zu haben. Diese merkwürdigen Selbstzweifel versuchte ich mit dem Gedanken zu bekämpfen, dass es so oder ähnlich doch allen geht, die die Parole des lebenslangen Lernens ernst nehmen. Irgendwann sind Kommilitonen oder Seminarkollegen zehn oder 15 Jahre jünger als man selbst, und zunehmend auch die Dozenten.</div>
<div class="text-paragraph" data-para="C"><span class="para-tag">[Abschnitt C]</span> Die Gründe dafür sind klar: Das Wissen ändert sich auf vielen Gebieten so schnell wie nie zuvor, es wird kleinteiliger und diverser – teilweise mit sehr kurzen Innovationszyklen. Die heute heiß gehandelte App kann morgen der neue App-Store-Hüter sein. Es ist eine Lebensaufgabe, dabei nicht den Anschluss zu verlieren. Während man früher oft davon ausging, nach der Ausbildung oder dem Studium genug Fertigkeiten für das ganze Berufsleben erworben zu haben, endet die Lernkurve mittlerweile erst mit dem Renteneintritt und so mancher alte Hase drückt wieder die Schulbank. Doch was kann man nun gegen dieses leichte Unbehagen tun, das man manchmal empfindet, wenn man von Jüngeren lernen soll? Muss man vielleicht einfach akzeptieren, dass die klassischen Rollenmuster des Lernens heute passé sind?</div>
<div class="text-paragraph" data-para="D"><span class="para-tag">[Abschnitt D]</span> Kevin Weyer jedenfalls hat das verinnerlicht. Der heute 31-jährige Journalist lehrt schon, seit er 25 war. Ein Jahr nach Abschluss des Studiums gab er sein erstes Seminar, heute bringt er auch 50- und 60-Jährigen bei, wie man eine App entwirft. Einerseits unterrichtet er Themen, bei denen man sich ältere Dozenten nur schwerlich vorstellen kann: Als er begann, waren digitaler Journalismus und Social Media noch Neuland, wie geschaffen für Digital Natives. Damit sind Personen gemeint, die in der digitalen Welt aufgewachsen sind und sich den Zugang dazu nahezu intuitiv erschließen. Andererseits darf man sich durchaus die Frage stellen, ob sich fehlende Lehr- und auch Lebenserfahrung so leicht ersetzen lässt. Denn um erfolgreich Wissen zu vermitteln, braucht man schließlich mehr als die gerade besonders gefragten Spezialkenntnisse, nämlich soziale Kompetenzen und möglichst auch eine gefestigte Persönlichkeit. Man sollte allerdings vorsichtig sein, wenn man solche Fähigkeiten nur Älteren zuschreibt: Allzu leicht neigt man zu Vorurteilen, auch wenn man sich dessen nicht immer bewusst ist. Denn wer sagt eigentlich, dass junge Dozenten nicht über all diese Kompetenzen verfügen können? Und dass Alter automatisch weise macht?</div>
<div class="text-paragraph" data-para="E"><span class="para-tag">[Abschnitt E]</span> Weyers Schüler scheinen jedenfalls keine Probleme damit zu haben, sich von einem Dozenten anleiten zu lassen, der teilweise nur halb so alt ist wie sie selbst. Monika Leerhammer ist mit 59 Jahren die Älteste in einem seiner Kurse. „Den Jüngeren fällt der Umgang mit technischen Dingen doch oft viel leichter als den Älteren. Von denen kann man sich einiges abschauen“, sagt die freiberufliche Journalistin. Weiterbildung sei ihr vor allem deshalb wichtig, damit sie nicht den Anschluss verliere. Solche Gedanken kennen heute allerdings schon 40-Jährige. In der heutigen Arbeitswelt ist der Druck groß: Lebenslanges Lernen kann auch Stress bedeuten, darauf weist auch der Bildungsforscher Andreas Dörpinghaus von der Universität Würzburg hin: „Die beständige Angst, abgehängt zu werden, zu veralten, nicht marktkonform zu sein, gehört zum lebenslangen Lernen schlichtweg dazu.“ Folgern kann man aus alldem also: Es mag noch immer eine ungewohnte Unterrichtssituation sein, wenn die Älteren von den Jüngeren lernen. Doch über besonders aktuelle Themen wissen oft diejenigen am besten Bescheid, die am Puls der Zeit sind: die Jüngeren also.</div>`,
    questions: [
      { id: 7, text: 'In welchem Abschnitt liefert der Autor eine Definition?', uz: "Qaysi bo'limda muallif tushunchaga ta'rif beradi?", ans: 'D', expl: "D bo'limida «Digital Natives» tushunchasiga ta'rif berilgan: «Damit sind Personen gemeint, die in der digitalen Welt aufgewachsen sind...»" },
      { id: 8, text: 'In welchem Abschnitt schildert der Autor seine persönlichen Erfahrungen?', uz: "Qaysi bo'limda muallif o'z shaxsiy tajribalarini tasvirlaydi?", ans: 'B', expl: "B bo'limida muallif Hamburg Media School'da o'zidan 10 yosh kichik dotsent Kevin Weyer seminarida qatnashganini hikoya qiladi." },
      { id: 9, text: 'In welchem Abschnitt spricht der Autor eine Warnung aus?', uz: "Qaysi bo'limda muallif ogohlantirish bildiradi?", ans: 'D', expl: "D bo'limida: «Man sollte allerdings vorsichtig sein, wenn man solche Fähigkeiten nur Älteren zuschreibt: Allzu leicht neigt man zu Vorurteilen...»" },
      { id: 10, text: 'In welchem Abschnitt stützt der Autor seine Argumentation durch Rückgriff auf eine Autorität?', uz: "Qaysi bo'limda muallif o'z argumentini mutaxassis (avtoritet) fikriga tayanib asoslaydi?", ans: 'E', expl: "E bo'limida Vyursburg universiteti ta'lim tadqiqotchisi Andreas Dörpinghaus fikri keltirilgan." },
      { id: 11, text: 'In welchem Abschnitt zeigt sich der Autor erstaunt?', uz: "Qaysi bo'limda muallif hayratlanishini bildiradi?", ans: 'B', expl: "B bo'limida: «Eigentlich ist es verwunderlich, fast schon befremdlich, wie sehr mich diese Tatsache beschäftigte...»" },
      { id: 12, text: 'In welchem Abschnitt zieht der Autor einen Schluss?', uz: "Qaysi bo'limda muallif xulosa chiqaradi?", ans: 'E', expl: "E bo'limida: «Folgern kann man aus alldem also: Es mag noch immer eine ungewohnte Unterrichtssituation sein...»" }
    ]
  },
  lv3: VARIANT_18_READING.lv3,
  sp: {
    title: 'Wie das Geld in die Welt kam',
    titleUz: 'Pul dunyoga qanday kirib kelgan (Pul va to‘lov tizimlari tarixi)',
    uzbekVocab: [
      { de: 'Geschäfte tätigen', uz: 'savdo-sotiq / bitimlar amalga oshirmoq' },
      { de: 'direkten Warentausch praktizieren', uz: 'bevosita tovar ayirboshlashni (barterni) qo‘llamoq' },
      { de: 'einen Haken haben', uz: 'bitta «ammosi» / nozik muammosi bo‘lmoq' },
      { de: 'aus dem Takt geraten', uz: 'izdan chiqmoq / maromi buzilmoq' },
      { de: 'das Natural- oder Warengeld', uz: 'natural yoki tovar pul (chig‘anoq, tuz, mo‘yna va h.k.)' },
      { de: 'das Schneckengehäuse', uz: 'shilliqqurt chig‘anog‘i (Kauri chig‘anoqlari)' },
      { de: 'Münzen prägen', uz: 'tangalar zarb qilmoq' },
      { de: 'ein Kapitel aufschlagen', uz: 'yangi bob / sahifa ochmoq' },
      { de: 'auf der Hand liegende Vorteile', uz: 'yaqqol ko‘rinib turgan (ravshan) afzalliklar' },
      { de: 'das Giralgeld / bargeldloser Zahlungsverkehr', uz: 'naqdsiz bank puli / naqdsiz to‘lov aylanmasi' },
      { de: 'seine Tage sind gezählt', uz: 'uning kunlari sanoqli qoldi (tez orada tugaydi)' }
    ] as VocabItem[],
    text: `<p>Wer etwas kaufen will, braucht Geld und bekommt dafür Waren oder Dienstleistungen – dieser Vorgang könnte einfacher <strong>(25)</strong> sein. Die Geschäfte, die unsere Vorfahren vor Jahrtausenden <strong>(26)</strong>, waren deutlich komplizierter. Sie <strong>(27)</strong> direkten Warentausch, das heißt: Sie tauschten Waren aus, ohne dass Geld <strong>(28)</strong>. Die Sache hatte allerdings einen <strong>(29)</strong>: Brauchte etwa der Bauer ein Fell vom Jäger, dieser aber gerade kein Getreide, geriet das System aus dem <strong>(30)</strong>.</p>
<p>Um dieses umständliche Vorgehen zu <strong>(31)</strong>, wurde ein Tauschmittel erfunden, das alle Käufer und Verkäufer <strong>(32)</strong>: Natural- oder Warengeld, also nützliche und wertvolle Güter, die als allgemeines Zahlungsmittel <strong>(33)</strong>. Dabei benutzte man im Laufe der Zeit die unterschiedlichsten Dinge – etwa Muscheln, Steinscheiben, Salz, Felle, Edelsteine oder auch <strong>(34)</strong>. Es wird vermutet, dass diese Geldvorläufer schon <strong>(35)</strong> 6.000 Jahren eingesetzt wurden.</p>
<p>Die ersten Münzen wurden im 7. Jahrhundert v. Chr. in dem antiken Königreich Lydien geprägt. Diese erleichterten den Handel <strong>(36)</strong>. Im Lauf der Jahrhunderte verbreitete sich das Münzgeld im antiken Mittelmeerraum und gelangte schließlich ins restliche Europa.</p>
<p>Das nächste Kapitel in der Geschichte des Geldes wurde im 11. Jahrhundert in China <strong>(37)</strong>: Als <strong>(38)</strong> für Münzgeld entstand Papiergeld. In Europa wurde es jedoch viel später <strong>(39)</strong>, es kam erst im 15. Jahrhundert in Spanien auf. Dass es sich <strong>(40)</strong> als Alternative zum Münzgeld durchsetzte, ist wohl seinen deutlich <strong>(41)</strong> Vorteilen geschuldet: Es wog wenig und war einfach herzustellen.</p>
<p>Doch <strong>(42)</strong> war die Geschichte des Geldes nicht zu Ende: Eine weitere <strong>(43)</strong> war das ab dem 14. Jahrhundert aufkommende immaterielle Geld, das sogenannte Giralgeld. Im Laufe des 20. Jahrhunderts entwickelte sich der bargeldlose Zahlungsverkehr zu einem Standard. In Zeiten des Internets kamen <strong>(44)</strong> Online-Zahlungssysteme und das Online-Banking auf. Auch wenn heute noch fast jeder ein paar Geldscheine im Portemonnaie hat, ist oft davon <strong>(45)</strong>, dass die Tage des Bargelds gezählt <strong>(46)</strong>. Möglicherweise ist sein Ende also absehbar.</p>`,
    questions: [
      { id: 25, opts: ['eben', 'fast', 'kaum', 'noch'], ans: 'kaum', expl: "«könnte einfacher kaum sein» — bundan-da oddiyroq bo'lishi deyarli mumkin emas." },
      { id: 26, opts: ['besorgten', 'erfüllten', 'leisteten', 'tätigten'], ans: 'tätigten', expl: "«Geschäfte tätigen» — Nomen-Verb-Verbindung (savdo-sotiq amalga oshirmoq)." },
      { id: 27, opts: ['pracktizierten', 'pracktizirten', 'praktizierten', 'praktizirten'], ans: 'praktizierten', expl: "To'g'ri imlo: «praktizierten» (qo'lladilar / amalda bajardilar)." },
      { id: 28, opts: ['floss', 'lief', 'rieselte', 'spülte'], ans: 'floss', expl: "«ohne dass Geld floss» (Geld fließt — pul oqimi / pul aylanmasi)." },
      { id: 29, opts: ['Haken', 'Knopf', 'Nagel', 'Ring'], ans: 'Haken', expl: "«Die Sache hatte einen Haken» — frazeologizm (ishning bitta nozik muammosi / ilmog'i bor edi)." },
      { id: 30, opts: ['Akzent', 'Rhythmus', 'Schritt', 'Takt'], ans: 'Takt', expl: "«aus dem Takt geraten» — maromidan / izdan chiqmoq." },
      { id: 31, opts: ['befreien', 'entledigen', 'vereinfachen', 'verharmlosen'], ans: 'vereinfachen', expl: "«Um dieses umständliche Vorgehen zu vereinfachen» — bu noqulay jarayonni soddalashtirish uchun." },
      { id: 32, opts: ['ackzeptierten', 'akzepptierten', 'akzeptierten', 'akzeptirten'], ans: 'akzeptierten', expl: "To'g'ri imlo: «akzeptierten» (qabul qildilar)." },
      { id: 33, opts: ['außer Gebrauch kamen', 'Dienst hatten', 'Gewinn brachten', 'Verwendung fanden'], ans: 'Verwendung fanden', expl: "«als allgemeines Zahlungsmittel Verwendung fanden» — to'lov vositasi sifatida qo'llanildi." },
      { id: 34, opts: ['Schnäckengehäuse', 'Schnäckengeheuse', 'Schneckengehäuse', 'Schneckengeheuse'], ans: 'Schneckengehäuse', expl: "To'g'ri imlo: «Schneckengehäuse» (die Schnecke + das Gehäuse)." },
      { id: 35, opts: ['mehr als', 'mehr als vor', 'mehr vor', 'vor mehr als'], ans: 'vor mehr als', expl: "«schon vor mehr als 6.000 Jahren» — 6000 yildan ko'proq vaqt oldin." },
      { id: 36, opts: ['schwerlich', 'unerlässlich', 'wesentlich', 'willentlich'], ans: 'wesentlich', expl: "«erleichterten den Handel wesentlich» — savdoni sezilarli darajada osonlashtirdi." },
      { id: 37, opts: ['abgeschlagen', 'aufgeschlagen', 'beschlagen', 'erschlagen'], ans: 'aufgeschlagen', expl: "«ein Kapitel aufschlagen (wurde aufgeschlagen)» — tarixning keyingi bobini ochmoq." },
      { id: 38, opts: ['Absatz', 'Einsatz', 'Ersatz', 'Vorsatz'], ans: 'Ersatz', expl: "«Als Ersatz für Münzgeld» — tanga pul o'rnini bosuvchi vosita (Ersatz) sifatida." },
      { id: 39, opts: ['aufgeführt', 'ausgeführt', 'eingeführt', 'zugeführt'], ans: 'eingeführt', expl: "«In Europa wurde es viel später eingeführt» — joriy qilindi." },
      { id: 40, opts: ['auf Zeit', 'die meiste Zeit', 'mit der Zeit', 'vor der Zeit'], ans: 'mit der Zeit', expl: "«mit der Zeit» — vaqt o'tishi bilan." },
      { id: 41, opts: ['auf der Hand liegenden', 'ins Auge gehenden', 'ins Gesicht geschriebenen', 'vor den Kopf stoßenden'], ans: 'auf der Hand liegenden', expl: "«auf der Hand liegen» — yaqqol ko'rinib turmoq / ravshan bo'lmoq." },
      { id: 42, opts: ['dafür', 'damit', 'davon', 'dazu'], ans: 'damit', expl: "«Doch damit war die Geschichte des Geldes nicht zu Ende» — ammo shu bilan pul tarixi tugamadi." },
      { id: 43, opts: ['Ausbesserung', 'Neuerung', 'Reparatur', 'Überholung'], ans: 'Neuerung', expl: "«Eine weitere Neuerung» — yana bir yangilik / innovatsiya." },
      { id: 44, opts: ['auf und ab', 'drunter und drüber', 'hin und her', 'mehr und mehr'], ans: 'mehr und mehr', expl: "«mehr und mehr Online-Zahlungssysteme» — tobora ko'proq onlayn to'lov tizimlari." },
      { id: 45, opts: ['das Gespräch', 'das Wort', 'die Aussage', 'die Rede'], ans: 'die Rede', expl: "«ist oft davon die Rede, dass...» — ko'pincha ... haqida gap boradi." },
      { id: 46, opts: ['sei', 'seien', 'sein', 'wäre'], ans: 'seien', expl: "«dass die Tage des Bargelds gezählt seien» — ko'plikdagi ega (die Tage) bilan Konjunktiv I: «seien»." }
    ]
  }
};

// ============================================================================
// VARIANT 20 (PDF 20 — ♧ الاحتمال العشرون ♧)
// ============================================================================
export const VARIANT_20_READING = {
  pdfSource: '/assets/aistudio/20_a31b4d1e.pdf',
  lv1: VARIANT_18_READING.lv1,
  lv2: VARIANT_19_READING.lv2,
  lv3: {
    title: 'Camping: Urlaub für Naturliebhaber und Abenteurer',
    titleUz: 'Kemping: Tabiat shaydolari va sarguzasht izlovchilar uchun ta’til',
    uzbekVocab: [
      { de: 'das Sachbuch', uz: 'ilmiy-ommabop / amaliy qo‘llanma kitob' },
      { de: 'der Wohnwagen / das Wohnmobil', uz: 'g‘ildirakli uy-treyler (karvon) / avtouy (kemper)' },
      { de: 'sich einstellen auf (+ Akk.)', uz: '... ehtiyojlariga moslashmoq' },
      { de: 'die Pauschalreise (-n)', uz: 'hammasi ichida bo‘lgan tayyor turistik paket sayohat' },
      { de: 'die Wiedervereinigung', uz: 'Germaniyaning qayta birlashishi (1990)' },
      { de: 'stagnieren', uz: 'bir joyda to‘xtab qolmoq / o‘smaslik (savdo aylanmasi)' },
      { de: 'das Glamping (Glamorous Camping)', uz: 'hashamatli va ekologik kemping' },
      { de: 'die Umweltverträglichkeit', uz: 'atrof-muhitga zarar yetkazmaslik / ekologik moslik' }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: "1-xatboshi (Savollar 13–15: Tomas Xiram Xolding va kempingning tug'ilishi)",
        uz: "Zamonaviy kempingning asoschisi sifatida britaniyalik tikuvchi Tomas Xiram Xolding (Thomas Hiram Holding) hisoblanadi: u sayohatlarida orttirgan bilim va tajribalarini 1908-yilda nashr etilgan «The Camper's Handbook» nomli ma'lumotga boy amaliy qo'llanma kitobida (Sachbuch) jamlagan [13-savol: R]. U hatto ayollar uchun ham velosipedda chodir bilan sayohat qilishni targ'ib qilgan, shuning uchun kempingni ayollarga mos emas deb hisoblagan degan gap xato [14-savol: F]. XX asr boshlarida tabiat qo'ynida sayr qilish ommalashgan bo'lsa-da, maktab o'quvchilari va talabalar tomonidan ko'plab sayyohlik klublari (Wandervereine) tuzilgani haqida matnda ma'lumot yo'q [15-savol: X]."
      },
      {
        label: "2-xatboshi (Savollar 16–18: Arist Detleffsning g'ildirakli uyi va 1960-yillardagi sanoat)",
        uz: "1931-yilda nemis tadbirkori Arist Detleffs (Arist Dethleffs) oilasi bilan sayohat qilish uchun ilk g'ildirakli uy-treylerni (Wohnwagen) ixtiro qildi va oradan bor-yo'g'i bir yil o'tib unga ilk xaridorlar topildi [16-savol: R]. 1960-yildan keyin kemping ommaviy tus oldi va ko'plab kompaniyalar kempingchilarning ehtiyojlariga moslashib, maxsus chodirlar va jihozlar ishlab chiqara boshladi [17-savol: R]. Avtouylar (Wohnmobile) narxi qimmat bo'lishi ko'p xaridorlarni cho'chitgani haqida matnda hech narsa aytilmagan [18-savol: X]."
      },
      {
        label: "3-xatboshi (Savollar 19–21: Arzon turpaketlar, Germaniya birlashuvi va 1990-yillardagi turg'unlik)",
        uz: "Arzon tayyor turistik paketlar (Pauschalreisen) va charter parvozlar paydo bo'lgach, bu kemping ta'tilining mashhurligini sezilarli darajada pasaytirdi [19-savol: F — mashhurligini pasaytirmadi degan gap xato]. Biroq 1990-yilda Germaniya qayta birlashganidan (Wiedervereinigung) so'ng kemping ko'plab sayohatchilar uchun yana bir bor o'z jozibasini qaytarib oldi [20-savol: R]. Shunga qaramay, g'ildirakli uy-treyler (Wohnwagen) ishlab chiqaruvchilarning savdo hajmi 1990-yillar boshidan beri bir joyda to'xtab qolgan (stagnieren), chunki ko'pchilik motorli avtouylarni (Wohnmobile) afzal ko'rmoqda [21-savol: R]."
      },
      {
        label: "4-xatboshi (Savollar 22–24: Maxsus guruhlar uchun takliflar va «Glamping»)",
        uz: "Bugungi kunda kemping maskanlari (Campingplätze) maxsus mijozlar guruhlari (masalan, it egalari, oilalar, velosipedchilar) uchun tobora ko'proq maxsus takliflar ishlab chiqmoqda [22-savol: R]. «Glamping» (Glamorous Camping) deb ataladigan yangi yo'nalish esa ekologik tozalik va tabiatga zarar yetkazmaslik (Umweltverträglichkeit) muhim bo'lgan badavlat sayohatchilar uchun juda jozibador hisoblanadi [23-savol: R]. Matnga eng mos sarlavha: «Urlaub für Naturliebhaber und Abenteurer» [24-savol: A (yoki C)]."
      }
    ] as ParagraphTranslation[],
    text: `<p>Als Begründer des modernen Campings gilt der Brite Thomas Hiram Holding, der seine auf zahlreichen Reisen durch Schottland und Irland erworbenen Kenntnisse 1908 in einem informativen Sachbuch („The Camper’s Handbook“) festhielt. Holding begeisterte damit nicht nur Männer, sondern ermutigte ausdrücklich auch Frauen dazu, mit Zelt und Fahrrad die Natur zu erkunden. Zu Beginn des 20. Jahrhunderts entdeckten immer mehr Großstädter die Erholung im Freien für sich.</p>
<p>Einen weiteren Meilenstein setzte 1931 der deutsche Unternehmer Arist Dethleffs, der für sich und seine Familie das erste „Wohnauto“ konstruierte: Schon ein Jahr nach der Erfindung des Wohnwagens fanden sich dafür erste Käufer. Nach dem Zweiten Weltkrieg entwickelte sich das Zelten endgültig zum Massenphänomen, und nach 1960 stellten sich zahlreiche Firmen mit speziellem Zubehör auf die wachsenden Bedürfnisse der Camper ein.</p>
<p>Als jedoch in den 1970er Jahren günstige Pauschalreisen mit dem Flugzeug in den sonnigen Süden aufkamen, minderte dies zunächst spürbar die Popularität des klassischen Campingurlaubs. Erst nach der deutschen Wiedervereinigung 1990 gewann der Campingurlaub für viele Reisende aus Ost und West noch einmal deutlich an Attraktivität. Während Reisemobile heute boomen, stagnieren die Umsätze der klassischen Wohnwagen-Hersteller allerdings seit Beginn der 1990er Jahre.</p>
<p>Um im Wettbewerb zu bestehen, entwickeln Campingplätze heutzutage immer öfter maßgeschneiderte Angebote für spezielle Personenkreise – vom Wellness-Camping bis zum Hundeplatz. Besonders im Trend liegt das sogenannte „Glamping“ (eine Wortschöpfung aus „Glamour“ und „Camping“): Es ist vor allem attraktiv für wohlhabende Reisende, denen Komfort ebenso wie Umweltverträglichkeit ein besonderes Anliegen ist.</p>`,
    questions: [
      { id: 13, text: 'Thomas Hiram Holding hielt seine auf Reisen erworbenen Kenntnisse in einem informativen Sachbuch fest.', uz: "Tomas Xiram Xolding sayohatlarda orttirgan bilimlarini ma'lumotga boy amaliy kitobda qayd etgan.", ans: 'R', expl: "1-xatboshida: u 1908-yilda o'z tajribalarini «The Camper's Handbook» nomli kitobda jamlagan." },
      { id: 14, text: 'Holding war der Meinung, dass Camping keine für das weibliche Geschlecht geeignete Beschäftigung sei.', uz: "Xolding kempingni ayollar jinsi uchun mos mashg'ulot emas deb hisoblagan.", ans: 'F', expl: "Aksincha, u ayollarni ham chodir va velosipedda sayohat qilishga ruhlantirgan." },
      { id: 15, text: 'Im beginnenden 20. Jahrhundert wurden von Schülern und Studenten zahlreiche Wandervereine gegründet.', uz: "XX asr boshlarida o'quvchi va talabalar tomonidan ko'plab sayyohlik klublari tashkil etilgan.", ans: 'X', expl: "Matnda XX asr boshida shaharliklar tabiat qo'yniga chiqqani aytilgan, ammo talabalar klublari haqida ma'lumot yo'q." },
      { id: 16, text: 'Schon ein Jahr nach der Erfindung des Wohnwagens fanden sich dafür erste Käufer.', uz: "G'ildirakli uy-treyler ixtiro qilinganidan bir yil o'tiboq unga ilk xaridorlar topildi.", ans: 'R', expl: "2-xatboshida: 1931-yilda Dethleffs treylerni yaratgach, bir yil o'tib ilk xaridorlar topilgan." },
      { id: 17, text: 'Nach 1960 stellten sich zahlreiche Firmen auf die Bedürfnisse der Camper ein.', uz: "1960-yildan keyin ko'plab firmalar kempingchilarning ehtiyojlariga moslashdilar.", ans: 'R', expl: "2-xatboshida aynan shu fakt keltirilgan." },
      { id: 18, text: 'Der hohe Preis der Wohnmobile schreckte anfangs viele Käufer ab.', uz: "Avtouylarning yuqori narxi dastlab ko'plab xaridorlarni cho'chitgan.", ans: 'X', expl: "Avtouylar (Wohnmobile) narxi xaridorlarni cho'chitgani haqida matnda gap yo'q." },
      { id: 19, text: 'Als günstige Pauschalreisen aufkamen, minderte dies zunächst nicht die Popularität des Campingurlaubs.', uz: "Arzon turpaketlar paydo bo'lganida, bu dastlab kemping ta'tilining mashhurligini kamaytirmadi.", ans: 'F', expl: "Aksincha, arzon turpaketlar paydo bo'lishi kemping mashhurligini sezilarli darajada kamaytirdi." },
      { id: 20, text: 'Nach der Wiedervereinigung gewann Campingurlaub für viele Reisende noch einmal an Attraktivität.', uz: "Germaniya qayta birlashganidan so'ng kemping ko'plab sayohatchilar uchun yana jozibadorlik kasb etdi.", ans: 'R', expl: "3-xatboshida tasdiqlangan." },
      { id: 21, text: 'Die Umsätze der Wohnwagen-Hersteller stagnieren seit Beginn der 1990er Jahre.', uz: "Treyler (Wohnwagen) ishlab chiqaruvchilarning savdo aylanmasi 1990-yillar boshidan beri bir joyda to'xtab qolgan.", ans: 'R', expl: "3-xatboshi oxirida tasdiqlangan." },
      { id: 22, text: 'Campingplätze entwickeln heutzutage immer öfter Angebote für spezielle Personenkreise.', uz: "Kemping maskanlari bugungi kunda maxsus insonlar guruhlari uchun tobora ko'proq takliflar ishlab chiqmoqda.", ans: 'R', expl: "4-xatboshida tasdiqlangan." },
      { id: 23, text: 'Das sogenannte Glamping ist attraktiv für wohlhabende Reisende, denen Umweltverträglichkeit ein besonderes Anliegen ist.', uz: "«Glamping» deb ataluvchi yo'nalish ekologik moslik muhim bo'lgan badavlat sayohatchilar uchun jozibadordir.", ans: 'R', expl: "4-xatboshi oxirida tasdiqlangan." },
      {
        id: 24,
        text: 'Welche der Überschriften a, b oder c passt am besten zum Text?',
        uz: "Qaysi sarlavha matnga eng mos keladi?",
        opts: [
          'a) Urlaub für Naturliebhaber und Abenteurer',
          'b) Campingboom im Wirtschaftswunder',
          'c) Tipps für den Urlaub im Zelt'
        ],
        ans: 'A',
        expl: "Imtihon kitobchasining 29-betida «Urlaub für Naturliebhaber und Abenteurer» A variantida berilgan."
      }
    ]
  },
  sp: {
    title: 'Die Ordnung der Dinge (Dmitri Mendelejew und das Periodensystem)',
    titleUz: 'Narsalar tartibi (Dmitriy Mendeleyev va kimyoviy elementlar davriy jadvali)',
    uzbekVocab: [
      { de: 'der entscheidende Durchbruch', uz: 'hal qiluvchi ilmiy yorib o‘tish / kashfiyot' },
      { de: 'prägende Eigenschaften', uz: 'belgilovchi / xarakterli xususiyatlar' },
      { de: 'zugrunde liegende Gesetzmäßigkeiten', uz: 'asosida yotgan qonuniyatlar' },
      { de: 'sich als unverwüstlich erweisen', uz: 'buzilmas / mustahkam ekanligini isbotlamoq' },
      { de: 'die Initialzündung', uz: 'ilk turtki / boshlang‘ich uchqun' },
      { de: 'die Bestimmung des Gewichtes', uz: 'og‘irlikni (molekulyar massani) aniqlash' },
      { de: 'die Ausreißer', uz: 'umumiy qoidadan chetga chiquvchi istisnolar' },
      { de: 'kurzerhand', uz: 'ikkilanmasdan / darhol' }
    ] as VocabItem[],
    text: `<p>Die Frage nach einem grundlegenden System hinter den Dingen <em>[0: stellten]</em> sich bereits die Gelehrten des Altertums. Schon sie erkannten, dass sich einige Stoffe stärker ähnelten als andere, und versuchten, <strong>(25)</strong> eine Ordnung zu erkennen.</p>
<p>Der entscheidende <strong>(26)</strong> aber gelang erst viele Jahrhunderte später dem russischen Chemiker Dmitri Mendelejew. Er ordnete die bekannten chemischen Elemente nach prägenden <strong>(27)</strong> und Atomgewichten und erkannte die <strong>(28)</strong> liegenden Gesetzmäßigkeiten. <strong>(29)</strong> heute hat sich das Periodensystem des russischen Chemikers als unverwüstlich <strong>(30)</strong>: Alle Fortschritte der Chemie und Atomphysik haben die geniale Entdeckung Mendelejews <strong>(31)</strong> und erweitert.</p>
<p>Am 3. September 1860 wurde in Karlsruhe der erste internationale chemische Kongress eröffnet – ein Kongress, der Geschichte machen <strong>(32)</strong>. Denn er erwies sich <strong>(33)</strong> Katalysator für <strong>(34)</strong> bedeutendsten Fortschritte der modernen Chemie. Auch der 26-jährige Mendelejew nahm <strong>(35)</strong> teil. Schon seit einigen Jahren hatte ihn die Frage nach einer Klassifikation der rund 60 bekannten Elemente <strong>(36)</strong>. Die <strong>(37)</strong> für Mendelejew wurde ein Vorschlag seines italienischen Kollegen Stanislao Cannizzaro zur <strong>(38)</strong> des Gewichtes von Molekülen.</p>
<p>„Wenn man nach etwas sucht – <strong>(39)</strong> es Pilze oder eine Art von Gesetz –, gibt es keinen anderen Weg, als immer wieder zu schauen und erneut zu versuchen“, so beschrieb Mendelejew später seine Bemühungen <strong>(40)</strong> ein Ordnungssystem der Elemente.</p>
<p>Am 6. März 1869 <strong>(41)</strong> Mendelejew sein Periodensystem unter dem Titel „Die Abhängigkeit der chemischen Eigenschaften der Elemente vom Atomgewicht“. Darin <strong>(42)</strong> die Elemente sieben Gruppen, die jeweils senkrecht untereinander Stoffe mit ähnlichen Eigenschaften vereinen. Diese Gruppen sind wiederum <strong>(43)</strong> so angeordnet, dass in den Zeilen, den sogenannten Perioden des Systems, die Atommassen und Valenzen der Elemente aufsteigen.</p>
<p>Allerdings störten einige Ausreißer das Bild. Mendelejew war jedoch so überzeugt von seinem System, dass er für solche Ausreißer nur eine einzige Erklärung <strong>(44)</strong>: Ihr Atomgewicht musste falsch bestimmt worden sein. Kurzerhand verschob er einige Elemente <strong>(45)</strong> Stellen. Und er tat noch etwas, was seinen Kollegen geradezu unerhört erschien: Er ließ an einigen Stellen im Periodensystem Lücken, weil seiner Ansicht nach hier Elemente hingehörten, die zwar <strong>(46)</strong>, aber noch nicht entdeckt worden waren. Für Mendelejew war klar, dass sein System die fundamentale Ordnung der Elemente widerspiegelte, die Grundlage des gesamten Kosmos.</p>`,
    questions: [
      { id: 25, opts: ['darin', 'darunter', 'darüber', 'dazwischen'], ans: 'darin', expl: "«darin eine Ordnung zu erkennen» — ularning ichida tartibni ko'rishga harakat qilishdi." },
      { id: 26, opts: ['Ausbruch', 'Durchbruch', 'Einbruch', 'Zusammenbruch'], ans: 'Durchbruch', expl: "«der entscheidende Durchbruch gelang» — hal qiluvchi ilmiy kashfiyot / yorib o'tish." },
      { id: 27, opts: ['Charakterzügen', 'Eigenschaften', 'Veranlagungen', 'Wesen'], ans: 'Eigenschaften', expl: "«chemische Eigenschaften» — kimyoviy xossalar / xususiyatlar." },
      { id: 28, opts: ['aufgrund', 'auf dem Grund', 'im Grunde', 'zugrunde'], ans: 'zugrunde', expl: "«die zugrunde liegenden Gesetzmäßigkeiten» — asosida yotgan qonuniyatlar." },
      { id: 29, opts: ['Ab', 'Bis', 'Von', 'Zu'], ans: 'Bis', expl: "«Bis heute» — bugungi kungacha." },
      { id: 30, opts: ['ausgewiesen', 'bewiesen', 'erwiesen', 'verwiesen'], ans: 'erwiesen', expl: "«hat sich als unverwüstlich erwiesen» — sich erweisen als (o'zini ... sifatida namoyon etmoq)." },
      { id: 31, opts: ['bestätigt', 'bewahrheitet', 'versichert', 'zugegeben'], ans: 'bestätigt', expl: "«haben die Entdeckung bestätigt» — kashfiyotni tasdiqladi." },
      { id: 32, opts: ['durfte', 'konnte', 'musste', 'sollte'], ans: 'musste', expl: "«der Geschichte machen musste / sollte» — PDF 20 12-betda «musste» (31-betda «sollte» ham belgilangan, ikkalasi ham kontekstga mos)." },
      { id: 33, opts: ['als', 'da', 'wenn', 'wie'], ans: 'als', expl: "«erwies sich als Katalysator» — sich erweisen als." },
      { id: 34, opts: ['einige die', 'einigen die', 'einige der', 'einigen der'], ans: 'einige der', expl: "«für einige (Akk.) der bedeutendsten Fortschritte (Gen. Pl.)»." },
      { id: 35, opts: ['daran', 'darauf', 'darin', 'darüber'], ans: 'daran', expl: "«teilnehmen an (+ Dat.) -> nahm daran teil»." },
      { id: 36, opts: ['befasst', 'behandelt', 'beschäftigt', 'beurteilt'], ans: 'beschäftigt', expl: "«hatte ihn die Frage ... beschäftigt» — bu savol uni band qilib kelgan edi." },
      { id: 37, opts: ['Initialzündung', 'Initiealzündung', 'Inizialzündung', 'Innitialzündung'], ans: 'Initialzündung', expl: "To'g'ri imlo: «Initialzündung» (ilk turtki / uchqun)." },
      { id: 38, opts: ['Bestimmung', 'Regel', 'Verfügung', 'Vorschrift'], ans: 'Bestimmung', expl: "«zur Bestimmung des Gewichtes» — og'irlikni aniqlash bo'yicha." },
      { id: 39, opts: ['seien', 'sein', 'sind', 'waren'], ans: 'seien', expl: "«seien es Pilze oder eine Art von Gesetz» — xoh qo'ziqorin bo'lsin, xoh qonun (Konjunktiv I cheklov iborasi)." },
      { id: 40, opts: ['auf', 'um', 'vor', 'zwischen'], ans: 'um', expl: "«seine Bemühungen um (+ Akk.) ein Ordnungssystem» — sich bemühen um." },
      { id: 41, opts: ['vergab', 'verkündete', 'verlautbarte', 'veröffentlichte'], ans: 'veröffentlichte', expl: "«veröffentlichte Mendelejew sein Periodensystem» — nashr etdi / e'lon qildi." },
      { id: 42, opts: ['bilden', 'entfalten', 'entstehen', 'greifen'], ans: 'bilden', expl: "«Darin bilden die Elemente sieben Gruppen» — yettita guruhni tashkil etadi." },
      { id: 43, opts: ['horitiontal', 'horizontahl', 'horizontal', 'horrizontal'], ans: 'horizontal', expl: "To'g'ri imlo: «horizontal» (gorizontal ravishda)." },
      { id: 44, opts: ['beobachtete', 'blickte', 'sah', 'schaute'], ans: 'sah', expl: "«nur eine einzige Erklärung sah» — faqat bitta izohni ko'rdi." },
      { id: 45, opts: ['an andere', 'bei anderen', 'für andere', 'mit anderen'], ans: 'an andere', expl: "«verschob er einige Elemente an andere Stellen» — boshqa joylarga ko'chirdi (yo'nalish: wohin? -> an + Akk.)." },
      { id: 46, opts: ['existierten', 'lebten', 'vegetierten', 'vorherrschten'], ans: 'existierten', expl: "«Elemente, die zwar existierten, aber noch nicht entdeckt worden waren» — mavjud bo'lgan, ammo hali kashf etilmagan." }
    ]
  }
};

// ============================================================================
// NEW HÖRVERSTEHEN POOLS FOR VARIANTS 16–20 (Full Transcripts + Uzbek)
// ============================================================================

export const HV1_GLUECK = {
  title: 'Glück – Was macht uns glücklich?',
  titleUz: 'Baxt — bizni nima baxtli qiladi?',
  statements: [
    { k: 'A', t: 'Die Art und Weise, wie man Probleme löst, spielt eine Rolle für das Glücksempfinden.', uz: "Muammolarni qanday hal qilish usuli baxt hissida muhim rol o'ynaydi." },
    { k: 'B', t: 'Ein solides finanzielles Auskommen ist die Grundlage für Glück.', uz: 'Mustahkam moliyaviy daromad baxtning asosidir.' },
    { k: 'C', t: 'Gesellschaftliche Zwänge können das Glück des Einzelnen beeinträchtigen.', uz: "Ijtimoiy majburiyat va cheklovlar shaxsning baxtiga salbiy ta'sir ko'rsatishi mumkin." },
    { k: 'D', t: 'Glück bedeutet, dass man sich selbst verwirklicht, wenn nötig auch auf Kosten anderer.', uz: "Baxt — kerak bo'lsa boshqalar hisobiga bo'lsa ham o'zligini namoyon etish demakdir. (Ortiqcha)" },
    { k: 'E', t: 'Man kann nur glücklich sein, wenn man seine besonderen Talente ausleben kann.', uz: "Inson faqat o'zining maxsus iste'dodlarini ro'yobga chiqara olsagina baxtli bo'lishi mumkin. (Ortiqcha)" },
    { k: 'F', t: 'Ob wir uns glücklich fühlen, können wir nur in begrenztem Maße beeinflussen.', uz: "O'zimizni baxtli his qilishimizga faqat cheklangan darajadagina ta'sir ko'rsata olamiz." },
    { k: 'G', t: 'Soziale Beziehungen sind die wichtigste Voraussetzung für Glück.', uz: 'Ijtimoiy munosabatlar (oila va do‘stlar) baxt uchun eng muhim shartdir.' },
    { k: 'H', t: 'Soziales Engagement führt zu mehr Wohlbefinden und einer optimistischeren Lebenseinstellung.', uz: "Ijtimoiy faollik (boshqalarga beg'araz yordam berish) ko'proq farovonlik va hayotga nekbin qarashga olib keladi." },
    { k: 'I', t: 'Um glücklich zu sein, braucht man im beruflichen Umfeld Anerkennung.', uz: "Baxtli bo'lish uchun kasbiy muhitda e'tirof (qadrlanish) zarur." },
    { k: 'J', t: 'Unser Glücksempfinden hängt von unserer Sicht auf die Welt ab.', uz: 'Bizning baxt hissimiz dunyoga qanday nuqtai nazardan qarashimizga bog‘liq.' }
  ],
  speakers: [
    {
      id: 47,
      sp: 'Sprecher 1',
      ans: 'J',
      tr: 'Vor kurzem habe ich etwas Interessantes in einer psychologischen Zeitschrift gelesen: Glück könne man trainieren, stand dort. Denn unsere Gedanken beeinflussen, wie wir uns fühlen. Entscheidend ist die eigene Wahrnehmung, also die Art, wie wir äußere Umstände interpretieren. Ich denke, dass theoretisch jeder Mensch die Möglichkeit hat, glücklicher zu werden. Wer griesgrämig durchs Leben geht, kann sicher lernen, sein Gehirn auf Glück umzuprogrammieren. Wenn man gezielt Situationen und Erlebnisse sucht, die man als schön und positiv empfindet, macht das auf Dauer glücklich. Für die einen ist das Sport, für die anderen Zusammensein mit Freunden, Kochen oder Reisen. Jeder Mensch hat seinen eigenen Weg, um glücklich zu werden.',
      uz: "Yaqinda psixologik jurnalda qiziq narsa o'qidim: baxtni mashq qilib o'stirish mumkin ekan. Chunki fikrlarimiz o'zimizni qanday his qilishimizga ta'sir qiladi. Eng muhimi — o'z idrokimiz, ya'ni tashqi holatlarni qanday talqin qilishimizdir. Nazariy jihatdan har kim o'z miyasini baxtga qayta dasturlashi mumkin.",
      expl: "«Entscheidend ist die eigene Wahrnehmung, also die Art, wie wir äußere Umstände interpretieren» -> J (Baxt hissimiz dunyoga qarashimizga bog'liq)."
    },
    {
      id: 48,
      sp: 'Sprecher 2',
      ans: 'A',
      tr: 'Ich studiere Psychologie und habe in einer Vorlesung von der sogenannten Glücksforschung gehört. Das ist ein interdisziplinäres Fachgebiet, in dem zum Beispiel Psychologen, Ökonomen und Mediziner zusammenarbeiten. Ich finde es jedenfalls sehr sinnvoll, wenn sich Wissenschaftler mit Glück beschäftigen. Meiner Meinung nach setzen nämlich die meisten dabei falsche Prioritäten: Für viele Leute sind äußere Lebensereignisse ausschlaggebend, wie zum Beispiel ein guter Job oder eine erfüllende Partnerschaft. Aber das alles kann doch ganz schnell verloren gehen. Entscheidend für dauerhafte Zufriedenheit ist, wie man mit Verlusten und schwierigen Situationen umgeht. Ich denke, man braucht vor allem Gelassenheit, Selbstvertrauen und die Fähigkeit, Krisen zu bewältigen und die Dinge selbst in die Hand zu nehmen – also das, was in der Psychologie als Resilienz bezeichnet wird.',
      uz: "Men psixologiya o'qiyman va ma'ruzada «baxt tadqiqoti» haqida eshitdim. Ko'pchilik yaxshi ish yoki juftlik kabi tashqi omillarni birinchi o'ringa qo'yadi, ammo bular tezda yo'qolishi mumkin. Doimiy mamnuniyat uchun eng muhimi — yo'qotishlar va qiyin vaziyatlarni qanday yengib o'tishdir (psixologiyada bu «rezilentlik» deyiladi).",
      expl: "«wie man mit Verlusten und schwierigen Situationen umgeht... Fähigkeit, Krisen zu bewältigen» -> A (Muammolarni hal qilish usuli)."
    },
    {
      id: 49,
      sp: 'Sprecher 3',
      ans: 'G',
      tr: 'In unserer hoch individualisierten Gesellschaft definieren viele Menschen Glück als Wunscherfüllung. So gesehen müsste man reich sein, um glücklich zu werden. Kürzlich habe ich dazu einen interessanten Zeitungsartikel gelesen: Geld macht zwar glücklich, wurde dort gesagt, aber nur, wenn man vorher zu wenig davon hatte. Sobald die Grundbedürfnisse befriedigt sind, flacht die Glückskurve ab, je mehr man verdient. Ich jedenfalls verspreche mir von materiellen Dingen keinen Zugewinn an Glück, denn das Bedürfnis nach Bindung und zwischenmenschlicher Nähe kann dadurch nicht befriedigt werden. Einsame Menschen stehen unter Stress, weil sie alleine mit ihren Schwierigkeiten im Leben klarkommen müssen. Was wirklich glücklich macht, sind Familie und Freunde.',
      uz: "Bizning individuallashgan jamiyatimizda ko'plar baxtni moddiy istaklarning amalga oshishi deb biladi. Ammo asosiy ehtiyojlar qondirilgach, ko'p pul baxt qo'shmaydi, chunki insoniy yaqinlik ehtiyojini buyumlar qondira olmaydi. Haqiqatan baxtli qiladigan narsa — bu oila va do'stlardir.",
      expl: "«Was wirklich glücklich macht, sind Familie und Freunde» -> G (Ijtimoiy munosabatlar baxtning eng muhim shartidir)."
    },
    {
      id: 50,
      sp: 'Sprecher 4',
      ans: 'C',
      tr: 'Was Glück ist – diese Frage haben sich die Menschen schon immer gestellt, in allen Zeiten und Kulturen. Wenn man mich fragt, braucht individuelles Glück vor allem gewisse Voraussetzungen, und zwar Freiheit und Selbstbestimmung. Glücklich werden kann man meiner Meinung nach nur, wenn man sein Leben selbst in die Hand nimmt. Doch dafür ist ein hohes Maß an Autonomie erforderlich. Ungleichheit, Fremdbestimmung, starre Hierarchien, vorgegebene Rollenmuster, fehlende Meinungsfreiheit – das alles sind Einschränkungen, die dem persönlichen Glück hinderlich sein können.',
      uz: "Mening fikrimcha, shaxsiy baxt uchun eng avvalo erkinlik va o'z taqdirini o'zi belgilash zarur. Tengsizlik, birovning hukmiga qaramlik, qat'iy iyerarxiyalar, majburiy ijtimoiy rollar va so'z erkinligining yo'qligi — bularning barchasi shaxsiy baxtga to'sqinlik qiluvchi cheklovlardir.",
      expl: "«Ungleichheit, Fremdbestimmung, starre Hierarchien... Einschränkungen, die dem persönlichen Glück hinderlich sein können» -> C (Ijtimoiy tazyiqlar baxtga zarar yetkazadi)."
    },
    {
      id: 51,
      sp: 'Sprecher 5',
      ans: 'F',
      tr: 'Von manchen Leuten sagt man, sie hätten ein Talent zum Glücklichsein. In meinem Freundeskreis sind auch einige, die immer gut gelaunt durchs Leben gehen, als hätte man ihnen das Glück schon in die Wiege gelegt, während andere die Welt immer in den düstersten Farben sehen. Heute versuchen Wissenschaftler mit modernen Methoden herauszufinden, was Glück ist. Da wird zum Beispiel untersucht, wie stark das Glücksempfinden von biochemischen Prozessen gesteuert wird. Einigen Studien zufolge wird die Veranlagung zum Glücklichsein zum Teil von unseren Genen bestimmt. Letztlich ist es wohl ein Zusammenspiel vieler verschiedener Faktoren. Für mich steht jedenfalls fest: Wir haben es nicht ganz selbst in der Hand, wie glücklich wir sind.',
      uz: "Ba'zi odamlar tug'ma baxtli va doim xushchaqchaq yurishadi, boshqalar esa dunyoni qora ranglarda ko'radi. Olimlar baxt hissini biokimyoviy jarayonlar va genlar qanchalik boshqarishini o'rganishmoqda. Men uchun bir narsa aniq: qanchalik baxtli bo'lishimiz to'liq o'z qo'limizda emas.",
      expl: "«wir haben es nicht ganz selbst in der Hand, wie glücklich wir sind» -> F (Baxtli his qilishimizga faqat cheklangan darajada ta'sir qila olamiz)."
    },
    {
      id: 52,
      sp: 'Sprecher 6',
      ans: 'H',
      tr: 'Früher war ich fest davon überzeugt, dass nur Selbstverwirklichung glücklich macht: dass man ganz nach seinen eigenen Vorstellungen lebt, einen gutbezahlten Beruf hat und möglichst keine lästigen Verpflichtungen hat. Nach dem Studium bin ich ein paar Monate durch Südamerika gereist und von meinem ersten Gehalt hatte ich mir damals eine Luxus-Handtasche gekauft. Dennoch: Glücklich gemacht hat mich das nur für kurze Zeit. Heute sehe ich das alles anders. So viel Egoismus kann weder einer Gesellschaft noch dem Individuum guttun. Wirklich glücklich macht es, anderen selbstlos zu helfen. Seit ich regelmäßig ehrenamtlich für einen Senioren-Besuchsdienst arbeite, habe ich deutlich mehr Lebensfreude.',
      uz: "Ilgari faqat o'z istaklari bilan yashash, Janubiy Amerikaga sayohat qilish va qimmat sumka olish baxt keltiradi deb o'ylardim. Ammo bu qisqa vaqtga yetdi. Haqiqiy baxt — boshqalarga beg'araz yordam berishda ekan: qariyalarni yo'qlash xizmatida ko'ngilli bo'lib ishlaganimdan beri hayotga zavqim ancha oshdi.",
      expl: "«Wirklich glücklich macht es, anderen selbstlos zu helfen. Seit ich regelmäßig ehrenamtlich... arbeite, habe ich deutlich mehr Lebensfreude» -> H."
    },
    {
      id: 53,
      sp: 'Sprecher 7',
      ans: 'B',
      tr: 'Dass man unabhängig von materiellen Dingen Glück finden könne, ist ja eine gängige und selten hinterfragte Meinung. Doch das würde ich überhaupt nicht unterschreiben. Auch wenn die Höhe des Einkommens kein Maß für persönliches Glück ist, darf man doch die ökonomische Seite nicht ignorieren. Sicher tragen auch Gesundheit, Selbstverwirklichung, Ansehen in der Gesellschaft oder beruflicher Erfolg zur Zufriedenheit bei. Doch für all das gibt es Vorbedingungen: Zunächst müssen die Grundbedürfnisse und gewisse Sicherheitsbedürfnisse erfüllt sein – also neben Ernährung und Unterkunft auch Arbeit, sichere Einkünfte und so weiter. Zwar führt ein steigendes Einkommen nicht unbedingt zu einem Zuwachs an Glück, trotzdem braucht man gesicherte materielle Verhältnisse.',
      uz: "Moddiy narsalardan qat'i nazar baxt topish mumkin degan fikrga qo'shilmayman. Sog'liq va muvaffaqiyat muhim, ammo bularning poydevori sifatida avvalo oziq-ovqat, boshpana, ish va kafolatlangan daromad bo'lishi shart. Barqaror moddiy sharoit baxtning asosidir.",
      expl: "«Trotzdem braucht man gesicherte materielle Verhältnisse» -> B (Mustahkam moliyaviy ta'minot baxtning asosidir)."
    },
    {
      id: 54,
      sp: 'Sprecher 8',
      ans: 'I',
      tr: 'Für mich bedeutet Glück im Moment vor allem Zufriedenheit im Beruf. Damit meine ich aber nicht, dass ich bestimmte Karriereziele erreichen und irgendwann im Unternehmen Führungsaufgaben übernehmen möchte. Ob man Aufstiegschancen oder einen Chefposten hat, spielt für das Glück keine Rolle. Was wirklich zählt, ist, dass man eine erfüllende Aufgabe hat, diese gut erledigt und dafür genug Wertschätzung bekommt. Wenn meine Kollegen in fachlichen Fragen meinen Rat suchen, weil ich mein Aufgabengebiet gut beherrsche, dann fühle ich mich respektiert. Allerdings habe ich manchmal Angst, meinen Job zu verlieren – dann würde auch mein Selbstwertgefühl leiden und die Bestätigung durch Kollegen würde wegfallen.',
      uz: "Men uchun baxt — kasbdan qoniqishdir. Gap rahbarlik lavozimida emas, balki o'z ishini yaxshi bajarib, buning uchun yetarli qadrlanish (Wertschätzung) va hamkasblar hurmatini olishdadir. Ishimni yo'qotsam, hamkasblar e'tirofi yo'qolishidan qo'rqaman.",
      expl: "«genug Wertschätzung bekommt... Bestätigung durch Kollegen» -> I (Kasbiy muhitda e'tirof zarur)."
    }
  ]
};

export const HV1_ELTERN_STUDIUM = {
  title: 'Eltern und Studium (Studieren mit Kind)',
  titleUz: 'Ota-onalik va universitetda o‘qish (Farzand bilan o‘qish)',
  statements: [
    { k: 'A', t: 'Aus eigener Erfahrung kann ich das Studium mit Kindern nur befürworten.', uz: "Shaxsiy tajribamdan kelib chiqib, bolalar bilan o'qishni faqat ma'qullay olaman." },
    { k: 'B', t: 'Die Universitäten unterstützen Studierende mit Kindern durch unterschiedliche Einrichtungen.', uz: "Universitetlar farzandli talabalarni turli muassasalar va imkoniyatlar orqali qo'llab-quvvatlaydi." },
    { k: 'C', t: 'Die verpflichtende Teilnahme an Lehrveranstaltungen benachteiligt Studierende mit Kindern.', uz: "Darslarda majburiy qatnashish talabi (davomat) farzandli talabalarni noqulay ahvolga soladi." },
    { k: 'D', t: 'Ein Kind während des Studiums verringert die beruflichen Aussichten.', uz: "O'qish davrida farzandli bo'lish kasbiy (ishga kirish) imkoniyatlarni kamaytiradi." },
    { k: 'E', t: 'Ein Studium ist so aufwendig, dass es sich mit einem Kind nicht vereinbaren lässt.', uz: "O'qish shu qadar ko'p mehnat va vaqt talab qiladiki, uni bola bilan uyg'unlashtirib bo'lmaydi." },
    { k: 'F', t: 'Jüngste Erhebungen zeigen vermehrte Studienabbrüche bei Studierenden mit Kind.', uz: "So'nggi so'rovlar farzandli talabalar orasida o'qishni tashlab ketish ko'payganini ko'rsatmoqda. (Ortiqcha)" },
    { k: 'G', t: 'Studentenvertreter fordern mehr Fördermaßnahmen für studierende Eltern.', uz: "Talabalar vakillari o'qiydigan ota-onalar uchun ko'proq yordam choralarini talab qilmoqda. (Ortiqcha)" },
    { k: 'H', t: 'Studierende Eltern zu unterstützen ist ein Gebot der gesellschaftlichen Solidarität.', uz: "O'qiydigan ota-onalarni qo'llab-quvvatlash — ijtimoiy birdamlik talabidir." },
    { k: 'I', t: 'Wenn man Karriere machen möchte, ist es besser, die Kinder während des Studiums zu bekommen.', uz: "Agar karyera qilmoqchi bo'lsangiz, farzandlarni o'qish davrida ko'rgan ma'qul." },
    { k: 'J', t: 'Wer während des Studiums ein Kind bekommt, hat weniger Möglichkeiten, sich persönlich weiterzuentwickeln.', uz: "O'qish paytida farzandli bo'lgan odamda shaxsiy rivojlanish uchun imkoniyatlar kamroq bo'ladi." }
  ],
  speakers: [
    {
      id: 47,
      sp: 'Sprecher 1',
      ans: 'H',
      tr: 'Arbeit, Studium und Kinder – das alles sei problemlos vereinbar, möchte man uns weismachen. Aber die Wirklichkeit sieht anders aus: Eltern, die voller Schuldgefühle Arbeit im Büro liegen lassen, weil die Kita schließt; Mütter, die ihr krankes Kind mit schlechtem Gewissen der Oma überlassen, weil an der Uni Anwesenheitspflicht besteht. In der Wirtschaft, der Politik und der Öffentlichkeit muss es endlich ein wirkliches Umdenken geben. Mit Lippenbekenntnissen ist den Eltern nicht geholfen. Arbeitgeber, Professoren, kinderlose Kollegen und Kommilitonen – auch wir Eltern müssen begreifen, dass Kinder uns alle etwas angehen. Was wir brauchen, ist das Bewusstsein, dass die Gesellschaft als Ganze für gelungene Kinderbetreuung verantwortlich ist, in der Arbeitswelt wie an den Hochschulen.',
      uz: "Ish, o'qish va bolalarni uyg'unlashtirish oson deb bizni ishontirmoqchi bo'lishadi, ammo haqiqat boshqacha. Quruq va'dalar yordam bermaydi: bolalar barchamizga daxldor ekanini va butun jamiyat bolalar parvarishi uchun mas'ul ekanini anglashimiz kerak.",
      expl: "«dass die Gesellschaft als Ganze für gelungene Kinderbetreuung verantwortlich ist» -> H (Ijtimoiy birdamlik burchi)."
    },
    {
      id: 48,
      sp: 'Sprecher 2',
      ans: 'E',
      tr: 'Der Druck, der auf uns Studierenden lastet, nimmt ständig zu. Wir sollen Auslandssemester machen und bereits während des Studiums Praktika absolvieren; mehrere Fremdsprachen zu beherrschen ist eine Selbstverständlichkeit. Grundsätzlich alles Dinge, die sinnvoll sind, aber sie bedeuten auch einen riesigen Aufwand. Das Studium sollen wir außerdem in der kürzesten Zeit und natürlich mit Bestnoten abschließen, um am Arbeitsmarkt Chancen auf einen gut bezahlten Job zu haben. Viele von uns müssen neben dem Studium arbeiten, um finanziell über die Runden zu kommen. Ich frage Sie: Wie könnte man unter solchen Voraussetzungen auch nur daran denken, während des Studiums Mutter zu werden? Ich kann mir beim besten Willen nicht vorstellen, wie Studium und Kind unter einen Hut zu bringen sind.',
      uz: "Talabalarga bosim tobora ortib bormoqda: xorijiy semestrlar, amaliyotlar, chet tillari, a'lo baholar va qo'shimcha ishlash... Bunday ulkan yuklama sharoitida o'qish va bolani qanday qilib birga olib borish mumkinligini aslo tasavvur qila olmayman.",
      expl: "«einen riesigen Aufwand... nicht vorstellen, wie Studium und Kind unter einen Hut zu bringen sind» -> E."
    },
    {
      id: 49,
      sp: 'Sprecher 3',
      ans: 'C',
      tr: 'Seit der sogenannten Bologna-Reform hat sich der Alltag an den Universitäten stark verändert. Es gibt viele Seminare und Vorlesungen mit Anwesenheitspflicht. Wenn man über die jeweils festgelegte Zeit hinaus fehlt, muss man die Fehlzeiten mit anderen Leistungen ausgleichen. Es gibt Kurse, in denen die Anwesenheitslisten kontrolliert werden. Man wird auch automatisch negativ bewertet, wenn man zu einer Prüfung angemeldet ist und nicht erscheint. Dadurch haben studierende Eltern eindeutig einen Nachteil gegenüber ihren kinderlosen Studienkollegen. Denn ein Kind richtet sich nun einmal nicht nach Vorlesungs- oder Prüfungsterminen.',
      uz: "Bolonya islohotidan beri universitetlarda majburiy davomat (Anwesenheitspflicht) joriy qilingan. Dars qoldirilsa yoki imtihonga kelinmasa, avtomatik salbiy baho qo'yiladi. Bola esa dars jadvali yoki imtihon sanasiga qarab kasal bo'lmaydi, shu sababli farzandli talabalar noqulay ahvolda qolmoqda.",
      expl: "«Vorlesungen mit Anwesenheitspflicht... haben studierende Eltern eindeutig einen Nachteil» -> C."
    },
    {
      id: 50,
      sp: 'Sprecher 4',
      ans: 'D',
      tr: 'Natürlich habe ich auch schon darüber nachgedacht, wie es wäre, als Mutter mit einem Baby zu studieren. Aber ich habe derzeit andere Prioritäten. Es wird ohnehin nicht leicht werden, in der Arbeitswelt Fuß zu fassen. Schließlich gibt es genug Arbeitslosigkeit auch unter Akademikern; mit einem Kind stelle ich mir den Berufseinstieg noch wesentlich schwieriger vor. Ich würde meine Chancen wohl kaum erhöhen, wenn ich gleich bei der ersten Stelle auf die Bedürfnisse eines Kleinkindes Rücksicht nehmen müsste. Außerdem ist es mir wichtig, mein Studium mit sehr guten Noten zu beenden, damit ich Vorteile bei der Jobsuche habe. Mit einem Kind würden sich meine Leistungen an der Uni aber sicher verschlechtern.',
      uz: "Oliy ma'lumotlilar orasida ham ishsizlik yetarli, bola bilan esa ishga kirish (Berufseinstieg) yanada qiyin bo'ladi. Birinchi ish joyidayoq yosh bolaning ehtiyojlarini hisobga olishga majbur bo'lsam, imkoniyatlarim pasayib ketadi.",
      expl: "«mit einem Kind stelle ich mir den Berufseinstieg noch wesentlich schwieriger vor» -> D (Kasbiy imkoniyatlarni kamaytiradi)."
    },
    {
      id: 51,
      sp: 'Sprecher 5',
      ans: 'B',
      tr: 'Die deutschen Hochschulen sind eigentlich ganz gut auf studierende Eltern vorbereitet. Es wurden in den letzten Jahren zahlreiche Maßnahmen getroffen, damit ein Kind nicht zu einer Benachteiligung führt oder gar zu einem Grund für einen Studienabbruch wird. Das Angebot reicht von Stipendien über flexible Betreuung bis hin zu ganz konkreten Dingen wie Wickelräumen. Es gibt viele sehr verständnisvolle Dozentinnen und Dozenten, da kann man ruhig auch einmal ein Kleinkind mit in die Sprechstunde bringen. Dafür kann man sich an die Gleichstellungsbeauftragten oder das Familienbüro wenden.',
      uz: "Germaniya oliygohlari o'qiydigan ota-onalar uchun yaxshi tayyorlangan: stipendiyalar, moslashuvchan bolalar bog'chalari, yo'rgaklash xonalari, teng huquqlilik bo'limlari va tushunadigan o'qituvchilar mavjud.",
      expl: "«Das Angebot reicht von Stipendien über flexible Betreuung bis hin zu... Gleichstellungsbeauftragten oder das Frauenbüro» -> B."
    },
    {
      id: 52,
      sp: 'Sprecher 6',
      ans: 'A',
      tr: 'Ich habe zwei Kinder und beide sind während meines Studiums zur Welt gekommen. Es war nicht immer leicht, Studium und Familie zu vereinbaren. Zeitweise war es ganz schön stressig, vor allem als mein Mann und ich kurz vor dem Abschluss standen. Wir haben beide auch etwas länger für das Examen gebraucht als die meisten unserer Freunde, aber wir hatten keine wesentlichen Probleme. Auf der anderen Seite hatten wir sicher viel mehr Zeit für unsere Kinder als berufstätige Eltern. Rückblickend muss ich sagen, dass es eine wunderbare Zeit war und ich würde mich auch heute nicht anders entscheiden. Den Kindern geht es super und beruflich hat es weder mir noch meinem Mann geschadet.',
      uz: "Mening ikki farzandim bor va ikkalasi ham o'qish davrimda tug'ilgan. Ba'zan qiyin bo'lsa-da, ishlaydigan ota-onalarga qaraganda bolalarimizga ko'proq vaqt ajrata oldik. Ortga qarab, bu ajoyib davr bo'lganini aytaman va bugun ham xuddi shunday qaror qilgan bo'lardim.",
      expl: "«Rückblickend muss ich sagen, dass es eine wunderbare Zeit war und ich würde mich auch heute nicht anders entscheiden» -> A."
    },
    {
      id: 53,
      sp: 'Sprecher 7',
      ans: 'J',
      tr: 'Also rein strukturell sehe ich kein Problem darin, während des Studiums ein Kind zu bekommen. Die Universitäten stellen durchaus Unterstützung bereit. Bedenken möchte ich aus ganz anderen Gründen äußern: Die Jahre des Studiums sehe ich auch als eine Gelegenheit zum Experimentieren, eine Chance zur eigenen Persönlichkeitsentfaltung. Interessante Lebensläufe mit Praxis und Auslandserfahrung sind mir wichtiger als Bestnoten in Rekordzeit. Das erfordert aber Zeit und eine gewisse Muße. Mit einem Kind, so fürchte ich, nimmt man sich diese Chance. Das finde ich schade, denn diese Phase der Selbstfindung kommt nicht wieder.',
      uz: "Tashkiliy jihatdan muammo yo'q, ammo men talabalik yillarini tajriba qilish va shaxs sifatida rivojlanish (Persönlichkeitsentfaltung), xorijda amaliyot o'tash imkoniyati deb bilaman. Bola bilan esa inson o'zini mana shu o'zligini topish imkoniyatidan mahrum qiladi.",
      expl: "«Chance zur eigenen Persönlichkeitsentfaltung... Mit einem Kind nimmt man sich diese Chance» -> J."
    },
    {
      id: 54,
      sp: 'Sprecher 8',
      ans: 'I',
      tr: 'Mit meinen Freundinnen diskutiere ich oft über Studium und Kinderwunsch. Viele von ihnen glauben, dass sie sich dadurch ihre berufliche Zukunft verbauen. Das sehe ich ganz anders: Ich bin nämlich der Meinung, dass es von Vorteil ist, die Kinder – wenn man denn welche möchte – schon während des Studiums zu bekommen. Pausen einlegen und etwas reduzieren: Das geht doch im Studium wesentlich leichter als später im Beruf. Wenn ich als Frau später im Beruf stehe und dann in Elternzeit gehe, bedeutet das mit Sicherheit einen Karriereknick. Für den beruflichen Erfolg wäre es also am besten, wenn die Familienplanung idealerweise schon vor dem Berufseinstieg abgeschlossen wäre.',
      uz: "Dugonalarimdan farqli o'laroq, men farzandlarni o'qish paytida ko'rish foydali deb hisoblayman. Chunki talabalikda vaqtni erkinroq taqsimlash mumkin; ishga kirgandan keyin dekret ta'tiliga (Elternzeit) chiqish esa karyeraga zarba beradi. Shuning uchun oilani ishga kirishdan oldin rejalashtirgan ma'qul.",
      expl: "«Für den beruflichen Erfolg wäre es also am besten, wenn die Familienplanung... schon vor dem Berufseinstieg abgeschlossen wäre» -> I."
    }
  ]
};

export const HV1_IMMOBILIEN = {
  title: 'Wohnkredit und Immobilien (Kauf eines Eigenheims)',
  titleUz: 'Uy-joy krediti va ko‘chmas mulk (Shaxsiy uy sotib olish)',
  statements: [
    { k: 'A', t: 'Banken sind bei der Vergabe von Wohnkrediten in letzter Zeit sehr zurückhaltend.', uz: "Banklar so'nggi paytlarda uy-joy kreditlari berishda juda ehtiyotkor bo'lib qolgan. (Ortiqcha)" },
    { k: 'B', t: 'Die Investition in ein eigenes Haus dient der Altersvorsorge.', uz: "Shaxsiy uyga sarmoya kiritish qarilik (pensiya) ta'minoti uchun xizmat qiladi." },
    { k: 'C', t: 'Durch Mieteinnahmen kann man sich im Alter die Rente aufbessern.', uz: "Ijara daromadlari orqali qariganda pensiyani yaxshilab olish mumkin. (Ortiqcha)" },
    { k: 'D', t: 'Ein eigenes Haus bietet Sicherheit und Geborgenheit für die ganze Familie.', uz: 'Shaxsiy uy butun oila uchun xavfsizlik va xotirjamlik (farovonlik) taqdim etadi.' },
    { k: 'E', t: 'Häufig sind Gefühle beim Kauf einer Immobilie ausschlaggebend.', uz: "Ko'chmas mulk sotib olishda ko'pincha his-tuyg'ular hal qiluvchi rol o'ynaydi." },
    { k: 'F', t: 'Immobilien eignen sich bestens als langfristige Geldanlage.', uz: "Ko'chmas mulk uzoq muddatli moliyaviy sarmoya sifatida juda mos keladi." },
    { k: 'G', t: 'Unabhängigkeit ist wichtiger als der Besitz eines eigenen Hauses.', uz: 'Mustaqillik va erkinlik shaxsiy uyga ega bo‘lishdan ko‘ra muhimroqdir.' },
    { k: 'H', t: 'Viele lassen sich durch die Werbung von Banken zum Kauf von Immobilien verleiten.', uz: "Ko'pchilik banklarning reklamalariga uchib ko'chmas mulk sotib olishga undaladi." },
    { k: 'I', t: 'Vor dem Kauf eines Eigenheims muss die kritische Beurteilung der eigenen Vermögensverhältnisse stehen.', uz: "Shaxsiy uy sotib olishdan oldin o'z moliyaviy imkoniyatlarini tanqidiy baholash zarur." },
    { k: 'J', t: 'Wer eine Immobilie besitzt, muss sich auf finanzielle Belastungen einstellen.', uz: "Ko'chmas mulkka ega bo'lgan kishi doimiy moliyaviy xarajatlarga tayyor turishi kerak." }
  ],
  speakers: [
    {
      id: 47,
      sp: 'Sprecher 1',
      ans: 'I',
      tr: 'Wer träumt nicht davon, ein eigenes Haus oder eine eigene Wohnung zu besitzen? Aber der Schritt zum Wohneigentum muss gut überlegt werden. Entscheidend ist die eigene finanzielle Situation: Wie viel Eigenkapital ist vorhanden? Wie hoch ist das Einkommen? Oft wird dabei allzu optimistisch kalkuliert, und nach dem Kauf bleibt kaum noch finanzieller Spielraum. Wer mit den Raten an die Grenzen gegangen ist, hat dann kaum noch Möglichkeiten, finanzielle Engpässe aufzufangen. Wichtig ist, vor einer so wichtigen Entscheidung die eigene Situation genau zu analysieren und das Für und Wider gegeneinander abzuwägen.',
      uz: "Uy sotib olishdan oldin o'z moliyaviy holatingizni — qancha boshlang'ich sarmoya va daromad borligini sinchiklab tahlil qilish shart. Ko'pincha haddan tashqari optimistik hisob-kitob qilinadi va to'lovlar qiyinlashib qoladi.",
      expl: "«Wichtig ist, vor einer so wichtigen Entscheidung die eigene Situation genau zu analysieren» -> I."
    },
    {
      id: 48,
      sp: 'Sprecher 2',
      ans: 'E',
      tr: 'Wenn ich mich in meinem Bekanntenkreis umsehe, habe ich den Eindruck, dass beim Thema Hauskauf vor allem Emotionen die Entscheidungen bestimmen. Bei Kapitalanlegern mag das anders sein, da spielen nur finanzielle Gründe eine Rolle. Aber bei Durchschnittsbürgern, die eine Wohnung oder ein Haus für sich selbst erwerben, geht es plötzlich um Dinge wie Selbstverwirklichung, Identität, Geborgenheit. Doch bei einer so wichtigen Entscheidung, die einen auf viele Jahre bindet, sind Emotionen nicht die richtigen Ratgeber. Lieber sollte man rational an die Frage herangehen.',
      uz: "Tanishlarim orasida uy sotib olishda asosan hissiyotlar (Emotionen) — o'zligini namoyon etish va xotirjamlik istagi qarorlarni belgilashini ko'raman. Ammo ko'p yillarga bog'laydigan bunday qarorda hissiyotga emas, aqlga tayanish kerak.",
      expl: "«dass beim Thema Hauskauf vor allem Emotionen die Entscheidungen bestimmen» -> E."
    },
    {
      id: 49,
      sp: 'Sprecher 3',
      ans: 'F',
      tr: 'Ich weiß, es gibt durchaus unterschiedliche Meinungen darüber, ob Immobilien eine gute Investition sind oder nicht. Für mich sind sie das jedenfalls. Ich mag es, in etwas zu investieren, was man sehen und anfassen kann. Und Wohnraum wird immer wertvoll sein. Hundertprozentig sicher ist man sich zum Beispiel bei Aktien nie – da habe ich schon schlechte Erfahrungen gemacht. Und selbst Geld verliert mit der Zeit durch die Inflation an Wert. Nicht umsonst spricht man im Zusammenhang mit Immobilien von „Betongold“. Auf lange Sicht sind Investitionen in Immobilien krisensicher.',
      uz: "Aksiyalar xavfli, pul esa inflyatsiya tufayli qadrini yo'qotadi. Ko'chmas mulk esa ko'z bilan ko'rib, qo'l bilan ushlab bo'ladigan «beton oltin» (Betongold) bo'lib, uzoq muddatda inqirozlarga chidamli eng yaxshi sarmoyadir.",
      expl: "«Auf lange Sicht sind Investitionen in Immobilien krisensicher» -> F (Uzoq muddatli sarmoya sifatida juda mos)."
    },
    {
      id: 50,
      sp: 'Sprecher 4',
      ans: 'B',
      tr: 'Mein Mann und ich haben als Jungverheiratete einen Kredit aufgenommen, und wir haben das nie bereut. Manchmal war es finanziell ganz schön eng, vor allem als die Kinder anfingen, zur Schule zu gehen. Aber wir wollten nicht mehr in einer Mietwohnung leben. Es war uns wichtig, für später vorzusorgen. Der Kredit ist nun ganz zurückbezahlt. Wir sind beide in Rente und es ist ein wunderbares Gefühl, im eigenen Haus zu wohnen: Wir brauchen keine Miete zu bezahlen und deshalb können wir jetzt mit unserer Rente gut leben.',
      uz: "Turmush o'rtog'im bilan yoshligimizda kredit olib uy olganmiz, chunki kelajak (qarilik) g'amini yeyish biz uchun muhim edi. Hozir kredit to'liq uzilgan, ikkalamiz ham pensiyadamiz va ijara haqi to'lamasdan pensiyamizga bemalol yashayapmiz.",
      expl: "«für später vorzusorgen... Wir brauchen keine Miete zu bezahlen und deshalb können wir jetzt mit unserer Rente gut leben» -> B (Qarilik ta'minoti)."
    },
    {
      id: 51,
      sp: 'Sprecher 5',
      ans: 'G',
      tr: 'Also ein eigenes Haus – das hätte sicher Vorteile. Doch wichtiger ist mir meine Freiheit. Ich kann mir nicht vorstellen, an einen Ort gebunden zu sein, zumindest noch nicht. Die Arbeit wechseln, vielleicht sogar in ein anderes Land gehen: Ich möchte unbedingt flexibel bleiben. Ein Mietverhältnis kann man kurzfristig kündigen. Der Verkauf einer Immobilie ist da schon wesentlich aufwendiger, dauert länger und es besteht immer das Risiko, dass man weniger Geld bekommt, als man selbst bezahlt hat. In einer Mietwohnung wohnen und weiterziehen, wenn es passt – das ist für mich die richtige Wahl.',
      uz: "Shaxsiy uyning afzalliklari bor, ammo men uchun erkinligim muhimroq. Bir joyga bog'lanib qolishni xohlamayman: ishni almashtirish, boshqa davlatga ko'chish uchun moslashuvchan bo'lishim kerak.",
      expl: "«Doch wichtiger ist mir meine Freiheit... flexibel bleiben» -> G (Mustaqillik uyga ega bo'lishdan muhimroq)."
    },
    {
      id: 52,
      sp: 'Sprecher 6',
      ans: 'H',
      tr: 'Schlagwörter wie „Der Traum vom Wohnen“, schöne Bilder von glücklichen Familien im Eigenheim im Grünen: In der Werbung der Kreditinstitute für Wohnfinanzierung werden Konditionen angepriesen, die besonders günstig und auf die persönliche Situation jedes Einzelnen zugeschnitten sein sollen. Ich bin da eher skeptisch: Kreditinstitute wollen in erster Linie Geld verdienen und nicht unsere Träume erfüllen. Ich befürchte, dass sich vor allem junge Menschen allzu leicht von solchen wunderbaren Zukunftsentwürfen verführen lassen und sich finanziell übernehmen.',
      uz: "Banklarning reklamalarida yashil tabiat qo'ynidagi baxtli oilalar tasvirlanib, go'yo juda qulay kredit shartlari maqtaladi. Yosh oilalar bunday reklamalarga osonlikcha aldanib, moliyaviy qiyinchilikka tushib qolishidan xavotirdaman.",
      expl: "«In der Werbung der Kreditinstitute... allzu leicht verführen lassen» -> H."
    },
    {
      id: 53,
      sp: 'Sprecher 7',
      ans: 'J',
      tr: 'Ein eigenes Haus hat gewisse Vorteile, doch diese haben auch ihren Preis – und damit ist nicht nur der Kaufpreis gemeint. Man muss immer auch die Folgekosten eines Hauskaufs einplanen: Grunderwerbsteuer, Notar- und Maklerkosten. Und auch mit dem Besitz einer Immobilie sind dauerhaft laufende Kosten verbunden, zum Beispiel die Energiekosten und der finanzielle Aufwand für die Instandhaltung. Nach 10 bis 15 Jahren muss man damit rechnen, dass die ersten größeren Reparaturen fällig werden. Es sollte klar sein, dass auch nach einem Hauskauf noch etliche Ausgaben anfallen.',
      uz: "Shaxsiy uy faqat sotib olish narxidan iborat emas: soliq, notarius va makler xarajatlaridan tashqari doimiy kommunal to'lovlar, saqlash xarajatlari va 10–15 yildan keyin chiqadigan ta'mirlash xarajatlariga tayyor turish kerak.",
      expl: "«Folgekosten... laufende Kosten... Reparaturen... noch etliche Ausgaben anfallen» -> J."
    },
    {
      id: 54,
      sp: 'Sprecher 8',
      ans: 'D',
      tr: 'Vor kurzem sind wir in unser Haus eingezogen – ein älteres Haus, das wir gekauft und nach unseren Vorstellungen umgebaut haben. Sicher, das war schon eine große Investition, doch wir wissen nun, dass es richtig war, den Schritt zu wagen. Hier fühlen wir uns endlich geborgen. Früher haben wir zur Miete gewohnt; da weiß man ja nie, ob der Vermieter nicht plötzlich Eigenbedarf anmeldet und den Mietvertrag kündigt. Hier kann uns das nicht passieren. Die Kinder haben ihr eigenes Zimmer und hinter dem Haus gibt es einen kleinen Garten, in dem sie spielen können.',
      uz: "Yaqinda o'z uyimizga ko'chib o'tdik. Ijarada turganimizda uy egasi istalgan payt shartnomani bekor qilishidan xavotir olardik. O'z uyimizda esa nihoyat xotirjamlik va xavfsizlikni his qilyapmiz, bolalarning o'z xonasi va bog'chasi bor.",
      expl: "«Hier fühlen wir uns endlich geborgen... Die Kinder haben ihr eigenes Zimmer...» -> D."
    }
  ]
};

export const HV2_GAERTEN = {
  title: 'Kulturgeschichte der Gärten (Interview mit Herrn Martinek)',
  uzbekIntro: "Bog'lar madaniyati tarixi bo'yicha mutaxassis va kitob muallifi janob Martinek bilan radio-intervyu (55–64-savollar).",
  questions: [
    {
      id: 55,
      q: 'Herr Martinek ...',
      uz: 'Janob Martinek ...',
      opts: [
        'A) beschäftigt sich in der Freizeit mit Gartengeschichte.',
        'B) möchte bald aus der Stadt wegziehen.',
        'C) wünscht sich keinen eigenen Garten.'
      ],
      optsUz: [
        "A) bo'sh vaqtida bog'lar tarixi bilan shug'ullanadi.",
        "B) tez orada shahardan ko'chib ketmoqchi.",
        "C) o'zining shaxsiy bog'i bo'lishini xohlamaydi."
      ],
      ans: 'C',
      expl: "Janob Martinek bog'lar tarixini kasbiy jihatdan o'rgansa-da, shaxsiy bog' parvarishlashga vaqti yo'qligi sababli o'z bog'i bo'lishini xohlamaydi (C)."
    },
    {
      id: 56,
      q: 'Die österreichische Schlossanlage ...',
      uz: 'Avstriyadagi qasr-bog‘ majmuasi ...',
      opts: [
        'A) beherbergt auch eine botanische Forschungseinrichtung.',
        'B) ist heute öffentlich für Besucher zugänglich.',
        'C) wurde von französischen Landschaftsgärtnern entworfen.'
      ],
      optsUz: [
        "A) botanika tadqiqot muassasasini ham o'z ichiga oladi.",
        "B) bugungi kunda tashrif buyuruvchilar (jamoatchilik) uchun ochiq.",
        "C) fransuz landshaft bog'bonlari tomonidan loyihalashtirilgan."
      ],
      ans: 'B',
      expl: "Avstriyadagi qasr majmuasi bugungi kunda barcha tashrif buyuruvchilar uchun ochiq (B)."
    },
    {
      id: 57,
      q: 'Ella Martinek ...',
      uz: 'Ella Martinek ...',
      opts: [
        'A) bietet regelmäßig Führungen an.',
        'B) gestaltete die Gartenanlage mit.',
        'C) leitete die Restaurierungsarbeiten.'
      ],
      optsUz: [
        'A) muntazam ekskursiyalar olib boradi.',
        'B) bog‘ majmuasini loyihalashtirishda / yaratishda ishtirok etgan.',
        'C) restavratsiya ishlariga rahbarlik qilgan.'
      ],
      ans: 'B',
      expl: "Ella Martinek bog' majmuasini bezash va shakllantirishda bevosita qatnashgan (B)."
    },
    {
      id: 58,
      q: 'An Gärten begeistert Herrn Martinek besonders ...',
      uz: 'Janob Martinekni bog‘larda ayniqsa nima maftun etadi?',
      opts: [
        'A) der kulturgeschichtliche Hintergrund.',
        'B) die üppige Blumenpracht.',
        'C) ihre erholsame Wirkung.'
      ],
      optsUz: [
        'A) ularning madaniy-tarixiy zamini (tarixi).',
        'B) gullarning boy ko‘rki.',
        'C) ularning dam beruvchi ta’siri.'
      ],
      ans: 'A',
      expl: "Uni bog'larning madaniy-tarixiy ildizlari (der kulturgeschichtliche Hintergrund) hayratga soladi (A)."
    },
    {
      id: 59,
      q: 'Im Laufe der Zeit ...',
      uz: 'Vaqt o‘tishi bilan ...',
      opts: [
        'A) dienten Gärten unterschiedlichen Zwecken und hatten wechselnde Bedeutung.',
        'B) verloren Gärten als Orte von Ausstellungen an Bedeutung.',
        'C) wurden Gärten auf ihre Funktion als Nutzgärten reduziert.'
      ],
      optsUz: [
        "A) bog'lar turli maqsadlarga xizmat qilgan va turli ahamiyatga ega bo'lgan.",
        "B) bog'lar ko'rgazma maskani sifatida ahamiyatini yo'qotgan.",
        "C) bog'lar faqat xo'jalik bog'i vazifasigacha qisqartirilgan."
      ],
      ans: 'A',
      expl: "Tarix davomida bog'lar turli maqsadlarga xizmat qilgan (A)."
    },
    {
      id: 60,
      q: 'Kartoffeln ...',
      uz: 'Kartoshka ...',
      opts: [
        'A) fanden sofort Verbreitung in den europäischen Küchen.',
        'B) wurden vom Adel als seltene Delikatesse geschätzt.',
        'C) wurden zuerst von Wissenschaftlern angebaut.'
      ],
      optsUz: [
        'A) Yevropa oshxonalarida darhol keng tarqaldi.',
        'B) zodagonlar tomonidan noyob tansiq taom sifatida qadrlangan.',
        'C) dastlab olimlar tomonidan (botanika bog‘larida) ekib ko‘paytirilgan.'
      ],
      ans: 'C',
      expl: "Kartoshka Yevropaga keltirilgach, dastlab olimlar va botaniklar tomonidan ilmiy bog'larda ekilgan (C)."
    },
    {
      id: 61,
      q: 'Von der Tomate weiß man, dass sie ...',
      uz: 'Pomidor haqida ma’lumki, u ...',
      opts: [
        'A) auch als Heilmittel verwendet wurde.',
        'B) lange nicht als Nahrungsmittel betrachtet wurde.',
        'C) nie wegen ihrer Schönheit angebaut wurde.'
      ],
      optsUz: [
        'A) dorivor vosita (shifobaxsh dori) sifatida ham ishlatilgan.',
        'B) uzoq vaqt oziq-ovqat sifatida ko‘rilmagan.',
        'C) hech qachon go‘zalligi uchun ekilmagan.'
      ],
      ans: 'A',
      expl: "Pomidor dastlab dorivor o'simlik (Heilmittel) sifatida ham qo'llanilgan (A)."
    },
    {
      id: 62,
      q: 'Die Orangerie ...',
      uz: 'Oranjereya (issiqxona) ...',
      opts: [
        'A) diente dem Schutz der Pflanzen vor Kälte.',
        'B) kam ab dem Ende des 16. Jahrhunderts in Mode.',
        'C) war früher die Bezeichnung für das Hauptgebäude.'
      ],
      optsUz: [
        "A) o'simliklarni (sitrus daraxtlarini) sovuqdan himoya qilishga xizmat qilgan.",
        "B) XVI asr oxiridan urfga kirgan.",
        "C) ilgari asosiy bino nomi bo'lgan."
      ],
      ans: 'A',
      expl: "Oranjereya janubiy o'simliklarni qishki sovuqdan saqlash uchun xizmat qilgan (A)."
    },
    {
      id: 63,
      q: 'Das neue Buch des Studiogastes ...',
      uz: 'Studiya mehmonining yangi kitobi ...',
      opts: [
        'A) enthält Biografien von Schlossbesitzern.',
        'B) erläutert auch wichtige Fachbegriffe.',
        'C) erzählt die komplette Geschichte der Gärten.'
      ],
      optsUz: [
        'A) qasr egalarining tarjimai hollarini o‘z ichiga oladi.',
        'B) muhim atamalarni ham tushuntirib beradi.',
        'C) bog‘larning to‘liq tarixini hikoya qiladi.'
      ],
      ans: 'B',
      expl: "Kitobda bog'bonchilik va landshaft tarixiga oid muhim tushunchalar (wichtige Begriffe) ham izohlangan (B)."
    },
    {
      id: 64,
      q: 'Was sollen die Anrufer machen, um ein Buch zu gewinnen?',
      uz: 'Qo‘ng‘iroq qiluvchilar kitob yutib olish uchun nima qilishlari kerak?',
      opts: [
        'A) Eine Eintrittskarte einsenden.',
        'B) Ein bestimmtes Wort wissen.',
        'C) Fotos von einem Schloss an den Sender schicken.'
      ],
      optsUz: [
        'A) Kirish chiptasini yuborishlari kerak.',
        'B) Ma’lum bir kalit so‘zni (atamani) bilishlari kerak.',
        'C) Qasr suratlarini radioga yuborishlari kerak.'
      ],
      ans: 'B',
      expl: "Tinglovchilar viktorinada ma'lum bir so'zni topishlari / bilishlari kerak (B)."
    }
  ]
};

export const HV2_FINJA = {
  title: 'Hochbegabung im Studium (Interview mit Finja)',
  uzbekIntro: "Yuqori qobiliyatli (hochbegabt) yosh talaba qiz Finya bilan uning bolaligi, maktab davri va universitetdagi hayoti haqida radio-intervyu (55–64-savollar).",
  questions: [
    {
      id: 55,
      q: 'Finja ...',
      uz: 'Finya ...',
      opts: [
        'A) freut sich aufs Ausgehen mit anderen Studenten.',
        'B) hat kein Interesse am Studentenleben außerhalb der Uni.',
        'C) wird an der Uni wegen ihres Alters ausgegrenzt.'
      ],
      optsUz: [
        'A) boshqa talabalar bilan kechalarga chiqishdan xursand.',
        'B) universitetdan tashqaridagi talabalik hayotiga (bazmlarga) qiziqmaydi.',
        'C) yoshi sababli universitetda yakkalab qo‘yiladi.'
      ],
      ans: 'B',
      expl: "Finya universitetga faqat ilm olish uchun qatnaydi, auditoriyadan tashqaridagi talabalar bazmlariga qiziqmaydi (B)."
    },
    {
      id: 56,
      q: 'Finjas Eltern ...',
      uz: 'Finyaning ota-onasi ...',
      opts: [
        'A) dachten sofort, dass ihr Kind anders sei.',
        'B) erkannten Finjas Besonderheit erst nach einigen Jahren.',
        'C) verglichen ihr Baby oft mit anderen Kindern.'
      ],
      optsUz: [
        'A) farzandlari boshqacha ekanini darhol payqashgan.',
        'B) Finyaning o‘ziga xos qobiliyatini faqat bir necha yildan keyingina anglab yetishgan.',
        'C) chaqaloqlarini tez-tez boshqa bolalar bilan solishtirishgan.'
      ],
      ans: 'B',
      expl: "Ota-onasi uning yuqori iste'dodini faqat bir necha yil o'tgach payqashgan (B)."
    },
    {
      id: 57,
      q: 'Finja ...',
      uz: 'Finya ...',
      opts: [
        'A) ging nur ein Jahr lang in den Kindergarten.',
        'B) konnte sich nie für den Kindergarten begeistern.',
        'C) war zuerst an den Aktivitäten im Kindergarten interessiert.'
      ],
      optsUz: [
        'A) bog‘chaga atigi bir yil borgan.',
        'B) bog‘chaga hech qachon qiziqmagan.',
        'C) dastlab bog‘chadagi mashg‘ulotlarga qiziqqan.'
      ],
      ans: 'C',
      expl: "Finya dastlab bolalar bog'chasidagi mashg'ulotlarga qiziqish bilan qatnashgan, keyinchalik zerika boshlagan (C)."
    },
    {
      id: 58,
      q: 'Die Familienberaterin meinte, Finja ...',
      uz: 'Oilaviy maslahatchining fikricha, Finya ...',
      opts: [
        'A) müsse lernen, mit Enttäuschungen umzugehen.',
        'B) sei vermutlich hochbegabt.',
        'C) solle sich regelmäßig sportlich betätigen.'
      ],
      optsUz: [
        'A) hafsala pir bo‘lishiga chidashni o‘rganishi kerak.',
        'B) katta ehtimol bilan o‘ta qobiliyatli (hochbegabt) bola.',
        'C) muntazam sport bilan shug‘ullanishi kerak.'
      ],
      ans: 'B',
      expl: "Oilaviy maslahatchi Finyaning xatti-harakatlarini ko'rib, u o'ta iste'dodli (hochbegabt) bo'lishi mumkinligini aytgan (B)."
    },
    {
      id: 59,
      q: 'Finjas Eltern ...',
      uz: 'Finyaning ota-onasi ...',
      opts: [
        'A) hatten sich immer ein hochintelligentes Kind gewünscht.',
        'B) reagierten zuerst ablehnend auf das Thema Hochbegabung.',
        'C) wollten Finjas Begabung sofort mit einem Test beweisen.'
      ],
      optsUz: [
        'A) har doim o‘ta aqlli farzand orzu qilishgan.',
        'B) dastlab «yuqori iste’dod» mavzusiga salbiy / ishonchsizlik bilan munosabat bildirishgan.',
        'C) Finyaning qobiliyatini darhol test bilan isbotlamoqchi bo‘lishgan.'
      ],
      ans: 'B',
      expl: "Ota-onasi dastlab «Hochbegabung» (o'ta iste'dodlilik) taxminini rad etib, bunga shubha bilan qarashgan (B)."
    },
    {
      id: 60,
      q: 'Finja konnte als Kind ...',
      uz: 'Finya bolaligida ...',
      opts: [
        'A) besonders gut Denkspiele lösen.',
        'B) nicht verstehen, warum sie mit anderen spielen sollte.',
        'C) selbst Spielanleitungen erstellen.'
      ],
      optsUz: [
        'A) mantiqiy / aqliy o‘yinlarni (boshqotirmalarni) juda yaxshi yecha olgan.',
        'B) nega boshqalar bilan o‘ynashi kerakligini tushunmagan.',
        'C) o‘zi o‘yin qoidalarini tuzgan.'
      ],
      ans: 'A',
      expl: "U bolaligida mantiqiy boshqotirma va o'yinlarni (Denkspiele) juda yaxshi yechgan (A)."
    },
    {
      id: 61,
      q: 'Hochbegabte Kinder ...',
      uz: 'O‘ta qobiliyatli bolalar ...',
      opts: [
        'A) brauchen viel Schlaf, um sich zu erholen.',
        'B) fangen oft später an zu sprechen.',
        'C) haben andere Interessen als Gleichaltrige.'
      ],
      optsUz: [
        'A) dam olish uchun ko‘p uyquga muhtoj bo‘ladilar.',
        'B) ko‘pincha kechroq gapira boshlaydilar.',
        'C) tengdoshlariga qaraganda boshqacha qiziqishlarga ega bo‘ladilar.'
      ],
      ans: 'C',
      expl: "Iqtidorli bolalarning qiziqishlari o'z tengdoshlarinikidan farq qiladi (C)."
    },
    {
      id: 62,
      q: 'Frühzeitiges Lesen ...',
      uz: 'Erta o‘qishni o‘rganish ...',
      opts: [
        'A) beruht immer auf einer angeborenen Begabung.',
        'B) deutet nicht immer auf eine Hochbegabung hin.',
        'C) gilt als sicherer Hinweis auf eine hohe Intelligenz.'
      ],
      optsUz: [
        'A) har doim tug‘ma qobiliyatga asoslanadi.',
        'B) har doim ham yuqori iste’doddan (Hochbegabung) darak beravermaydi.',
        'C) yuqori intellektning aniq belgisi hisoblanadi.'
      ],
      ans: 'B',
      expl: "Bolaning erta o'qishni boshlashi har doim ham uning o'ta iqtidorli ekanini anglatmaydi (B)."
    },
    {
      id: 63,
      q: 'Experten ...',
      uz: 'Mutaxassislar ...',
      opts: [
        'A) raten dazu, Kinder miteinander zu vergleichen.',
        'B) sagen, dass Hochbegabung oft stark vom Elternhaus abhängt.',
        'C) schließen von guten Schulnoten auf besondere Begabung.'
      ],
      optsUz: [
        'A) bolani tengdoshlari bilan solishtirib ko‘rishni maslahat beradilar.',
        'B) yuqori iste’dod ko‘pincha oilaga bog‘liq deyishadi.',
        'C) maktabdagi yaxshi baholarga qarab maxsus qobiliyat haqida xulosa chiqarishadi.'
      ],
      ans: 'A',
      expl: "PDF 18/19/20 kalitiga ko'ra: «a) raten dazu, Kinder miteinander zu vergleichen» (A)."
    },
    {
      id: 64,
      q: 'Als Finja sich für ihr Studienfach entschied, ...',
      uz: 'Finya o‘z o‘quv yo‘nalishini tanlaganida ...',
      opts: [
        'A) dachte sie an eine Laufbahn im sozialen Bereich.',
        'B) spielten Zukunftsperspektiven keine Rolle.',
        'C) standen ihre wissenschaftlichen Interessen im Vordergrund.'
      ],
      optsUz: [
        'A) ijtimoiy sohada karyera qilishni o‘ylagan.',
        'B) kelajak istiqbollari hech qanday rol o‘ynamagan.',
        'C) uning ilmiy qiziqishlari birinchi o‘rinda turgan.'
      ],
      ans: 'C',
      expl: "Mutaxassislik tanlashda uning ilmiy qiziqishlari (wissenschaftliche Interessen) asosiy o'rinda bo'lgan (C)."
    }
  ]
};

export const HV3_GEWOHNHEITEN = {
  title: 'Psychologie im Alltag: Die Macht der Gewohnheit (Dr. Matthias Kässner)',
  uzbekIntro: "Doktor Mattias Kessnerning «Kundalik hayot psixologiyasi: Odatlar kuchi» mavzusidagi ilmiy ma'ruzasi (65–74-savollar).",
  items: [
    {
      id: 65,
      label: 'Definition Gewohnheiten: regelmäßige Verhaltensweisen, die 1. von einer bestimmten Situation ausgelöst werden und 2. ...',
      uz: "Odatlar ta'rifi: ma'lum vaziyat tufayli yuzaga keladigan va 2) ong tomonidan nazorat qilinmaydigan muntazam xatti-harakatlar",
      ans: 'vom Bewusstsein nicht kontrolliert werden',
      expl: "Odatlar avtomatik tarzda kechadi va ong tomonidan nazorat qilinmaydi («vom Bewusstsein nicht kontrolliert werden»)."
    },
    {
      id: 66,
      label: 'Psychologen meinen: Gewohnheiten gehen zurück auf ...',
      uz: 'Psixologlarning fikricha: odatlar ... ga borib taqaladi',
      ans: 'assoziative Lernprozesse',
      expl: "Psixologlarning fikricha, odatlar assotsiativ o'rganish jarayonlariga («assoziative Lernprozesse») asoslanadi."
    },
    {
      id: 67,
      label: 'Entstehung von Gewohnheiten: Viele Gewohnheiten beginnen mit (1) ...',
      uz: "Odatlarning paydo bo'lishi: Ko'plab odatlar dastlab (1) ongli qarorlar bilan boshlanadi",
      ans: 'bewussten Entscheidungen',
      expl: "Ko'plab odatlar dastlab ongli qarorlar («bewussten Entscheidungen») bilan boshlanadi."
    },
    {
      id: 68,
      label: 'Entstehung von Gewohnheiten: ... und (2) ...',
      uz: '... va (2) maqsadli (ataylab qilingan) xatti-harakat bilan boshlanadi',
      ans: 'absichtlichem Verhalten',
      expl: "Va qasddan / maqsadli xatti-harakat («absichtlichem Verhalten») bilan boshlanadi."
    },
    {
      id: 69,
      label: 'Positive Auswirkungen (Sozialpsychologie): 1. Gewohnheiten helfen bei der Bewältigung ...',
      uz: "Odatlarning ijobiy ta'siri: 1. Odatlar murakkab vazifalarni uddalashda yordam beradi",
      ans: 'komplexer Aufgaben',
      expl: "Odatlar miyani yengillashtirib, murakkab vazifalarni («komplexer Aufgaben») bajarishga yordam beradi."
    },
    {
      id: 70,
      label: 'Positive Auswirkungen: 2. vermitteln Gefühl von Sicherheit · 3. ermöglichen Erfolg bei ...',
      uz: '3. uzoq muddatli maqsadlarda muvaffaqiyatga erishish imkonini beradi',
      ans: 'langfristigen Zielen',
      expl: "Uzoq muddatli maqsadlarda («langfristigen Zielen») muvaffaqiyatga erishish imkonini beradi."
    },
    {
      id: 71,
      label: 'Nachteile von Gewohnheiten: 1) ...',
      uz: 'Odatlarning kamchiliklari: 1) Ular vaqtni oladi',
      ans: 'Sie kosten Zeit',
      expl: "1-kamchiligi: «Sie kosten erstens Zeit» (Ular vaqt oladi)."
    },
    {
      id: 72,
      label: 'Nachteile von Gewohnheiten: 2) Sie können die Gesundheit beeinträchtigen · 3) ...',
      uz: "3) Ular xulq-atvorni o'zgartirishni qiyinlashtiradi",
      ans: 'Sie erschweren Verhaltensänderungen',
      expl: "3-kamchiligi: «Sie erschweren Verhaltensänderungen» (Xulq-atvorni o'zgartirishni qiyinlashtiradi)."
    },
    {
      id: 73,
      label: 'Gewohnheiten ändern – Eine Möglichkeit: ...',
      uz: "Odatlarni o'zgartirish — Birinchi imkoniyat: muhitni / kontekstni o'zgartirish",
      ans: 'den Kontext zu ändern',
      expl: "Odatni o'zgartirishning bir yo'li — vaziyat/kontekstni o'zgartirish («den Kontext zu ändern»)."
    },
    {
      id: 74,
      label: 'Gewohnheiten ändern – Alternative: ...',
      uz: 'Muqobil yo‘l (Alternativa): yangi odat (rutina) yaratish',
      ans: 'eine neue Routine schaffen',
      expl: "Muqobil yechim: eski odat o'rniga yangi rutina yaratish («Man kann auch eine neue Routine schaffen»)."
    }
  ]
};

export const HV3_SMALLTALK = {
  title: 'Kommunikation im Alltag: Die Kunst des Smalltalks',
  uzbekIntro: "Kichik suhbat (Smalltalk) san'ati, uning ijtimoiy vazifalari, «Konversation» so'zining lotincha kelib chiqishi va amaliy tavsiyalar haqida ma'ruza (65–74-savollar).",
  items: [
    {
      id: 65,
      label: 'Durch Smalltalk signalisieren Sie (1) ...',
      uz: 'Smalltalk orqali siz (1) o‘zingizning samimiy ochiqligingizni bildirasiz',
      ans: 'ihre grundsätzliche Offenheit',
      expl: "Smalltalk orqali suhbatdoshga o'z ochiqligingizni («ihre grundsätzliche Offenheit») namoyon etasiz."
    },
    {
      id: 66,
      label: 'Durch Smalltalk signalisieren Sie und (2) ...',
      uz: '... va (2) muloqot qilishga tayyorligingizni bildirasiz',
      ans: 'die Bereitschaft zu kommunizieren',
      expl: "Va muloqotga tayyorlikni («die Bereitschaft zu kommunizieren») bildirasiz."
    },
    {
      id: 67,
      label: 'Smalltalk wirkt als ...',
      uz: 'Smalltalk ... (suhbatga kirishish / muzni eritish) vazifasini bajaradi',
      ans: 'Einstieg ins Gespräch',
      expl: "Smalltalk suhbatga kirish («Einstieg ins Gespräch») vazifasini o'taydi."
    },
    {
      id: 68,
      label: 'Ein notwendiges Merkmal: ...',
      uz: 'Zaruriy belgi: mos (me’yoriy) masofa saqlash',
      ans: 'eine angemessene Distanz',
      expl: "Smalltalkda zaruriy xususiyat — me'yoriy masofa («eine angemessene Distanz»)."
    },
    {
      id: 69,
      label: 'Das Wort „Konversation“ geht auf das Lateinische zurück und hat u. a. die Bedeutung von ...',
      uz: '«Konversation» so‘zi lotinchadan kelib chiqqan bo‘lib, jumladan ... ma’nosini anglatadi',
      ans: 'Umgang pflegen / gepflegter Umgang miteinander',
      expl: "Lotincha o'zak «muloqot qilish / bir-biri bilan madaniyatli muomala qilish» («Umgang pflegen / dem gepflegten Umgang miteinander») ma'nosini beradi."
    },
    {
      id: 70,
      label: 'Nonverbale Signale transportieren wir über (1) ...',
      uz: 'Noverbal signallarni (1) yuz ifodasi (mimika) va qo‘l harakatlari (jestlar) orqali uzatamiz',
      ans: 'Mimik und Gestik',
      expl: "Yuz ifodasi va imo-ishoralar («Mimik und Gestik»)."
    },
    {
      id: 71,
      label: 'Nonverbale Signale transportieren wir und über (2) ...',
      uz: '... hamda (2) ovoz ohangi va ko‘z kontakti orqali uzatamiz',
      ans: 'Tonfall und Blickkontakt',
      expl: "Ovoz ohangi va ko'z aloqasi («der Tonfall, ebenso wichtig ist der Blickkontakt»)."
    },
    {
      id: 72,
      label: 'Empfehlungen für gelungenen Smalltalk (1): ...',
      uz: 'Tavsiyalar (1): Samimiy (tabiiy) bo‘ling!',
      ans: 'Bleiben Sie authentisch',
      expl: "1-tavsiya: «Bleiben Sie authentisch» (O'zingizdek tabiiy va samimiy bo'ling)."
    },
    {
      id: 73,
      label: 'Empfehlungen für gelungenen Smalltalk (2): ...',
      uz: 'Tavsiyalar (2): Savollar bering!',
      ans: 'Stellen Sie Fragen',
      expl: "2-tavsiya: «Stellen Sie Fragen» (Suhbatdoshga savollar bering)."
    },
    {
      id: 74,
      label: 'Empfehlungen für gelungenen Smalltalk (3): ...',
      uz: 'Tavsiyalar (3): Xulosa chiqarishga (hukm qilishga) shoshilmang!',
      ans: 'Urteilen Sie nicht zu schnell',
      expl: "3-tavsiya: «Urteilen Sie nicht zu schnell» (Shoshilinch hukm chiqarmang)."
    }
  ]
};

export const HV3_BENIMMREGELN = {
  title: 'Vortragsreihe zu Erziehungsfragen: Etikette und Benimmregeln (Raimund Morawa)',
  uzbekIntro: "Raymund Moravaning «Odob-axloq qoidalari (Benimmregeln) va oilada xushmuomalalik tarbiyasi» mavzusidagi ma'ruzasi (65–74-savollar).",
  items: [
    {
      id: 65,
      label: 'Aufgabe von Regeln: ...',
      uz: 'Qoidalarning vazifasi: narsalarni tartibga solish va tushunarli (boshqariladigan) qilish',
      ans: 'Dinge zu ordnen und überschaubar zu machen',
      expl: "Qoidalarning vazifasi: «Dinge zu ordnen und überschaubar zu machen»."
    },
    {
      id: 66,
      label: 'Vorteile von Benimmregeln: 1. bieten Anhaltspunkte · 2. ...',
      uz: 'Odob qoidalarining afzalliklari: 1. tayanch nuqtalar beradi · 2. xavfsizlik (ishonch) beradi',
      ans: 'Sicherheit',
      expl: "2-afzalligi: o'zaro muomalada xavfsizlik/ishonch («Sicherheit») beradi."
    },
    {
      id: 67,
      label: 'Vorteile von Benimmregeln: 3. ...',
      uz: '3. o‘zlikni (identitetni) shakllantirishga xizmat qiladi',
      ans: 'identitätsstiftend wirken',
      expl: "3-afzalligi: guruhga mansublik va identitetni shakllantiradi («identitätsstiftend wirken»)."
    },
    {
      id: 68,
      label: 'Verschiedene Kulturen haben unterschiedliche Verhaltensregeln. Eine grundlegende Regel: ...',
      uz: 'Turli madaniyatlarda xulq qoidalari turlicha, ammo yagona asosiy qoida: suhbatdoshga (qarshisidagi insonga) hurmat',
      ans: 'Respekt vor dem Gegenüber',
      expl: "Barcha madaniyatlar uchun umumiy bo'lgan asosiy qoida: «Respekt vor dem Gegenüber»."
    },
    {
      id: 69,
      label: 'Argument gegen genaue Benimmregeln: ...',
      uz: 'Qat’iy odob qoidalariga qarshi dalil: samimiylik (rostgo‘ylik) yetishmasligi',
      ans: 'Mangel an Ehrlichkeit',
      expl: "Qat'iy etiketga qarshi tanqidiy argument: «Mangel an Ehrlichkeit» (soxtalik / samimiylik yetishmasligi)."
    },
    {
      id: 70,
      label: 'Erziehung zur Höflichkeit – Weiterer Aspekt von Benimmregeln: ...',
      uz: 'Odob qoidalarining yana bir jihati: ular vaqt o‘tishi bilan o‘zgarib turadi',
      ans: 'unterliegen zeitlichen Veränderungen',
      expl: "Odob qoidalari qotib qolmagan, ular vaqt o'tishi bilan o'zgaradi («unterliegen zeitlichen Veränderungen»)."
    },
    {
      id: 71,
      label: 'Warum brauchen Kinder ein Mindestmaß an Benimmregeln? Weil Benimmregeln ...',
      uz: 'Nega bolalarga eng kamida bazaviy odob qoidalari kerak? Chunki qoidalar ularning hayotini osonlashtiradi',
      ans: 'ihnen das Leben leichter machen',
      expl: "Chunki odob qoidalari bolalarning jamiyatdagi hayotini osonlashtiradi («sie ihnen das Leben leichter machen»)."
    },
    {
      id: 72,
      label: 'Erziehung in der Familie: Die Aufnahmefähigkeit für bestimmte Regeln hängt ab vom ...',
      uz: 'Oilada tarbiya: ma’lum qoidalarni qabul qilish qobiliyati bolaning rivojlanish darajasiga bog‘liq',
      ans: 'Entwicklungsniveau des Kindes',
      expl: "Bolaning rivojlanish darajasiga («Entwicklungsniveau des Kindes») bog'liq."
    },
    {
      id: 73,
      label: 'Die Ursache für schlechtes Benehmen ist oft, dass Eltern ...',
      uz: 'Yomon xulqning sababi ko‘pincha ota-onalarning tarbiyani juda kech boshlashidadir',
      ans: 'zu spät mit der Erziehung beginnen',
      expl: "Ota-onalar tarbiyani juda kech boshlashadi («zu spät mit der Erziehung beginnen»)."
    },
    {
      id: 74,
      label: 'Erziehung zu gutem Benehmen – Entscheidender Faktor: ...',
      uz: 'Yaxshi xulqqa tarbiyalashda hal qiluvchi omil: shaxsiy namuna (o‘rnak) effekti',
      ans: 'Vorbildwirkung',
      expl: "Hal qiluvchi omil — ota-onaning shaxsiy o'rnak bo'lishi («Vorbildwirkung»)."
    }
  ]
};
