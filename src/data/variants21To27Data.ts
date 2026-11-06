/**
 * Authentic telc Deutsch C1 Hochschule — Variants 21, 22, 24, 25, 26, 27
 * Extracted from 21_147de239.pdf, 22_afe946f3.pdf, 24_46eb7daa.pdf,
 * 25_e38aa2c5.pdf, 26_714937a0.pdf, 27_235aece7.pdf
 * All Arabic explanations, vocabulary tables, transcripts, and keys translated into Uzbek.
 */

import { VocabItem, ParagraphTranslation } from './variants14And15Data';
import { VARIANT_14_READING } from './variants14And15Data';
import { VARIANT_16_READING, VARIANT_17_READING, VARIANT_18_READING } from './variants16To18Data';
import { VARIANT_19_READING, VARIANT_20_READING } from './variants19To20Data';

// ============================================================================
// VARIANT 21 (PDF 21 — ♧ الاحتمال الواحد والعشرون ♧)
// ============================================================================
export const VARIANT_21_READING = {
  pdfSource: '/assets/aistudio/21_147de239.pdf',
  lv1: {
    title: 'Zur Entwicklung der deutschen Rechtschreibung',
    titleUz: 'Nemis imlosi (orfografiyasi) rivojlanishi tarixidan',
    uzbekVocab: [
      { de: 'die Orthographie / Rechtschreibung', uz: "to'g'ri yozish qoidalari (imlo / orfografiya)" },
      { de: 'das Schriftbild als Ganzes erfassen', uz: "so'zning yozuvdagi shaklini yaxlit (bir butun) holda ilg'amoq" },
      { de: 'steinig und lang sein', uz: "mashaqqatli (toshloq) va uzoq bo'lmoq" },
      { de: 'das Lateinische ablösen', uz: "lotin tilining o'rnini egallamoq" },
      { de: 'die Lautzuordnung', uz: 'tovushlarni harflarga moslashtirish tizimi' },
      { de: 'der Streitpunkt', uz: 'asosiy bahsli / tortishuvli masala' },
      { de: 'in viele Einzelstaaten gegliedert', uz: "ko'plab mayda davlatlarga (knyazliklarga) bo'lingan" },
      { de: 'dialektunabhängig', uz: "shevalardan mustaqil (umumadabiy)" },
      { de: 'verbindlich einführen', uz: 'majburiy qoida sifatida joriy etmoq' },
      { de: 'Beschlossenes wieder umwerfen', uz: 'qabul qilingan qarorlarni qaytadan bekor qilmoq' }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: "1-xatboshi va [ 1 ] bo'shliq",
        uz: "Nafaqat nemis tilini o'rganayotgan xorijliklar, balki nemis o'quvchilari va talabalari ham nemis orfografiyasini ba'zan chalkash deb bilishadi. Muammo tug'diradigan bo'lsa, yagona yozuv shakli bizga nima uchun kerak? (0 -> Z: Imlo birinchi navbatda yaxshiroq tushunishga xizmat qiladi va o'qishni osonlashtiradi). Ko'pincha biz so'zni harfma-harf o'qimaymiz, balki so'zning yozuvdagi qiyofasini yaxlit qabul qilamiz. Agar yozilish doimiy ravishda o'zgarib tursa, har bir so'zni qaytadan «o'rganishimizga» to'g'ri kelardi va tez o'qish juda cheklanib qolardi. [ 1 -> H: Yozayotganda ham so'zni qanday ifodalash ustida doim bosh qotirishimizga to'g'ri kelardi ]. Isloh qilingan imloga eltuvchi yo'l esa uzoq va mashaqqatli bo'ldi."
      },
      {
        label: "2–3-xatboshilar va [ 2 ]–[ 3 ] bo'shliqlar",
        uz: "Buyuk Karl hukmronligi davridan (milodiy 800-yil) boshlab yozuv tili sifatida lotin tilini mahalliy (nemis) tili bilan almashtirishga urinishlar boshlandi. Buning uchun lotin tilidagi tovush-harf tizimi olindi va nemis tovushlariga mos harflar qidirildi. [ 2 -> B: Biroq ushbu yot (xorijiy) alifbo barcha nemis til tovushlarini yozuvda ifodalash imkoniyatini bermas edi ]. Yozuv rivoji davomida turli yechimlar topildi. Ulardan biri «Qanday gapirsang, shunday yoz» tamoyili bo'lib, uning eng yirik vakili Yoxann Kristof Adelung edi. Bunday imlodagi muammo turli nemis shevalari (dialektlari) edi. [ 3 -> F: Shu sababli eng katta bahsli masala «to'g'ri» yozuv tili qaysi ekanligi haqidagi savol edi ]. Sun'iy adabiy til namuna bo'lishi kerakmi yoki muayyan bir dialektmi? Germaniya 1871-yilgacha siyosiy jihatdan ko'plab mayda davlatlarga bo'lingani sababli bu masala yechilmay qoldi."
      },
      {
        label: "4–6-xatboshilar va [ 4 ]–[ 6 ] bo'shliqlar",
        uz: "Ikkinchi vazifa yagona yozuv shaklini belgilash edi. Bu boradagi eng izchil urinishni aka-uka Yakob va Vilgelm Grimmlar 1838-yildan boshlab o'zlarining «Nemis lug'ati»da (Deutsches Wörterbuch) amalga oshirdilar. [ 4 -> E: Ushbu asarning ahamiyati nafaqat dialektlardan mustaqil yozuvni yaratishda, balki yagona nemis adabiy tili (Hochsprache) rivojlanishida ham namoyon bo'ldi ]. 1876-yil yanvarda Berlinda I Orfografik konferensiya bo'lib o'tdi. [ 5 -> C: Ushbu vakillarning takliflari turli davlatlarda dastlab turlicha amalga oshirildi ]. 1901-yildagi II Orfografik konferensiyada Germaniya, Avstriya va Shveytsariya uchun yagona imlo belgilandi va 1903-yildan Duden qoidalari maktablarda majburiy bo'ldi. 1996-yilda yana bir imlo islohoti qabul qilindi. [ 6 -> D: Biroq ushbu islohotni amaliyotga tatbiq etish kutilganidan ko'ra qiyinroq bo'lib chiqdi ]. Start bir necha bor kechiktirildi va nihoyat 2006-yil 1-avgustdan yangi imlo butun mamlakatda majburiy kuchga kirdi."
      }
    ] as ParagraphTranslation[],
    text: `<p>Nicht nur ausländische Deutschlernende, sondern auch deutsche Schüler und Studenten empfinden die deutsche Orthographie mitunter als verwirrend. Warum brauchen wir überhaupt eine einheitliche Schriftform, wenn sie Probleme bereitet? <em>[0: Z]</em> Meistens lesen wir ein Wort nicht Buchstabe für Buchstabe, sondern erfassen das Schriftbild als Ganzes. Würde die Schreibung beständig wechseln, müssten wir jedes Wort neu „lernen“ und ein schnelles Lesen wäre nur noch sehr eingeschränkt möglich. <span class="text-gap">[ 1 ]</span> Der Weg zu einer reformierten Rechtschreibung sollte indes lang und steinig werden.</p>
<p>Mit der Herrschaft Karls des Großen (800 n. Chr.) begannen die Versuche, das Lateinische als Schriftsprache durch die Landessprache abzulösen. Dazu übernahm man das System der Lautzuordnung aus dem Lateinischen und bemühte sich, Entsprechungen für die deutschen Laute zu finden. <span class="text-gap">[ 2 ]</span> Im Laufe der Schriftentwicklung fanden sich verschiedene Lösungen.</p>
<p>Eine davon war „Schreibe, wie du sprichst“, mit ihrem bedeutendsten Fürsprecher Johann Christoph Adelung. Problematisch an einer solchen Rechtschreibung waren die unterschiedlichen deutschen Dialekte. <span class="text-gap">[ 3 ]</span> Sollte eine künstliche „Literatursprache“ oder ein bestimmter Dialekt Vorbild für die richtige Schreibung sein? Da Deutschland bis 1871 politisch in viele Einzelstaaten gegliedert war, blieb die Frage ungelöst.</p>
<p>Die zweite war die Festlegung einer einheitlichen Schriftform. Den konsequentesten Versuch hierzu unternahmen Jacob und Wilhelm Grimm ab 1838 in ihrem Deutschen Wörterbuch. <span class="text-gap">[ 4 ]</span> Das Streben nach einer Einheit Deutschlands im sprachlichen Bereich deckte sich mit den seit Mitte des 19. Jahrhunderts verstärkten Forderungen nach einer politischen Einheit. Eine Regelung für den gesamten deutschen Sprachraum lag jedoch noch in weiter Ferne.</p>
<p>Im Januar 1876 tagte erstmals in Berlin die I. Orthographische Konferenz, bei der Repräsentanten aus Deutschland, Österreich und der Schweiz sich bemühten, eine einheitlichere Regelung der deutschen Rechtschreibung zu erreichen. <span class="text-gap">[ 5 ]</span> Einheitlich geregelt wurde die deutsche Schriftsprache für diese drei Länder schließlich auf der II. Orthographischen Konferenz von 1901. Die neue Orthographie nach Duden wurde am 1. April 1903 verbindlich in den Schulen eingeführt. 1996 wurde eine weitere deutsche Rechtschreibreform beschlossen. Regeln und Schreibungen wurden nun von einem halbstaatlichen Gremium, der Zwischenstaatlichen Kommission für deutsche Rechtschreibung, mit Sitz am Institut für Deutsche Sprache in Mannheim, geregelt.</p>
<p><span class="text-gap">[ 6 ]</span> Immer wieder wurde der Start verschoben, Änderungen eingefordert und Beschlossenes wieder umgeworfen. Am 1. August 2006 war es aber dann soweit, dass landesweit eine einheitliche Rechtschreibung verbindlich wurde.</p>`,
    options: [
      { key: 'A', text: 'Es dauerte lange, bis Dialekte Eingang in die Schriftsprache fanden.', uz: "Shevalar yozma tilga kirib kelguniga qadar uzoq vaqt o'tdi. (Ortiqcha gap)" },
      { key: 'B', text: 'Dieses fremde Alphabet bot jedoch nicht für alle deutschen Sprachlaute eine Möglichkeit der schriftlichen Wiedergabe.', uz: "Biroq ushbu yot (lotin) alifbosi barcha nemis nutq tovushlarini yozuvda aks ettirish imkonini bermas edi." },
      { key: 'C', text: 'Die Vorschläge dieser Vertreter wurden in den verschiedenen Staaten zunächst unterschiedlich umgesetzt.', uz: "Ushbu vakillarning takliflari turli davlatlarda dastlab turlicha amalga oshirildi." },
      { key: 'D', text: 'Die Umsetzung dieser Reform erwies sich allerdings als schwieriger, als man sich das wünschte.', uz: "Biroq ushbu islohotni amaliyotga tatbiq etish kutilganidan ko'ra qiyinroq bo'lib chiqdi." },
      { key: 'E', text: 'Die Bedeutung dieses Werks lag nicht nur in der Erstellung einer dialektunabhängigen Schrift, sondern auch in der Entwicklung einer deutschen Hochsprache.', uz: "Ushbu asarning ahamiyati nafaqat shevalardan mustaqil yozuvni yaratishda, balki yagona nemis adabiy tilini rivojlantirishda ham edi." },
      { key: 'F', text: 'Deshalb war auch der größte Streitpunkt die Frage nach der „richtigen“ Schriftsprache.', uz: "Shu sababli eng katta bahsli nuqta «to'g'ri» yozma til qaysi ekanligi haqidagi masala edi." },
      { key: 'G', text: 'Damit folgte Deutschland nun den erwähnten Richtlinien der übrigen deutschsprachigen Länder.', uz: "Shu tariqa Germaniya qolgan nemischa so'zlashuvchi davlatlar qoidalariga ergashdi. (Ortiqcha gap)" },
      { key: 'H', text: 'Auch beim Schreiben müssten wir uns ständig überlegen, wie wir ein Wort darstellen.', uz: "Yozayotganda ham so'zni qanday ifodalash ustida doim bosh qotirishimizga to'g'ri kelardi." }
    ],
    answers: { '1': 'H', '2': 'B', '3': 'F', '4': 'E', '5': 'C', '6': 'D' }
  },
  lv2: {
    title: 'Der Sinn und Unsinn von Abschlussarbeiten',
    titleUz: 'Bitiruv (diplom) ishlarining ma’nosi va bema’niligi',
    uzbekVocab: [
      { de: 'das Bullauge / das stille Kämmerlein', uz: 'dumaloq darcha (illyuminator) / xilvat hujra' },
      { de: 'der Gutachter', uz: 'taqrizchi / baholovchi professor' },
      { de: 'schlüssig argumentieren', uz: 'mantiqan izchil va ishonarli dalillamoq' },
      { de: 'sich ein Lächeln verkneifen', uz: 'kulgini / tabassumni zo‘rg‘a tiymoq' },
      { de: 'in den Adelsstand akademischer Evidenz heben', uz: 'akademik isbot darajasiga (zodagonlik maqomiga) ko‘tarmoq' },
      { de: 'geschreddert werden', uz: 'qog‘oz maydalagichda (shredderda) yo‘q qilinmoq' },
      { de: 'durch das Raster fallen', uz: 'umumiy tizimdan (yo‘q qilinishdan) tushib qolib omon qolmoq' },
      { de: 'die akademische Fingerübung', uz: 'akademik mashq / qo‘l chigalyozdisi' },
      { de: 'sich ins Zeug legen', uz: 'astoydil harakat qilmoq, jon kuydirib mehnat qilmoq' }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: 'Abschnitt A (Berlin davlat kutubxonasi va bitiruv ishlarining foydasi haqida shubha)',
        uz: "Muallif Berlin davlat kutubxonasidagi 3x2 metrlik kichik kabinasida magistrlik va bakalavrlik ishlarini taxlab o'tirib, pastdagi o'quv zalida yozayotgan yoshlarga qaraydi va shubha (Bedenken) bildiradi: «Bularning barchasidan nima ma'no bor? Bu vaqt va energiyani behuda sarflash emasmi? Biz — jamoatchilik uchun bundan qanday foyda bor?» [12-savol: A]."
      },
      {
        label: 'Abschnitt B (300 000 ta bitiruv ishi va ilmiy metodika haqida sof faktlar)',
        uz: "O'tgan yili 300 000 dan ortiq talaba o'qishni bitiruv ishi bilan yakunladi (solishtirish uchun: Germaniya kitob bozorida 80 000 ga yaqin yangi kitob chiqqan). Romanlardan farqli o'laroq, diplom ishlari ommaga emas, faqat taqrizchilar uchun yoziladi va u o'qishdagi eng muhim imtihondir. Ilmiy metodikaning o'zagi — bir narsani ikkinchisidan farqlash, ya'ni definitsiyadir [9-savol: B — muallif sof faktlarni keltiradi]."
      },
      {
        label: 'Abschnitt C (Kulgili tadqiqot mavzulari va tanqidchilarning fikri)',
        uz: "Ba'zi tadqiqotlarning natijalarini o'qiyotganda muallif kulgisini zo'rg'a tiyadi («beim Lesen kann ich mir nicht immer ein Lächeln verkneifen»): bir iqtisodchi 70 betlik murakkab hisob-kitoblardan so'ng uchrashuv uchun Rügen orolidan ko'ra Rhein-Main hududi qulayroq degan xulosaga keladi; boshqa bir ishda esa «Sturm der Liebe» teleserialida sevgi asosiy mavzu ekani «aniqlanadi» [11-savol: C — muallif zavqlanadi/kuladi]. Tanqidchilar diplom ishlarida hammaga ma'lum narsalar bir nechta havolalar bilan ilmiy darajaga ko'tariladi deb e'tiroz bildirishadi («Kritiker äußern den Vorwurf...») [10-savol: C — muallif boshqalarning bahosini keltiradi]."
      },
      {
        label: 'Abschnitt D (Arxivdagi qog‘ozlar va yosh olimlar haqida taxminlar)',
        uz: "Universitetlar bitiruv ishlarini bir necha yil saqlab, keyin yo'q qiladi (shredderdan o'tkazadi). Diplom ishi shunchaki akademik mashq bo'lishi mumkin, ammo ehtimol («doch womöglich hätte... Es könnte durchaus sein... Doch darüber lässt sich letztlich natürlich nur spekulieren») ko'plab yosh tadqiqotchilar ilk bor diplom ishida mustaqil ishlagani uchungina ilm-fanga bo'lgan ishtiyoqini kashf etgandir [7-savol: D — muallif taxminlarni ilgari suradi]."
      },
      {
        label: 'Abschnitt E (Yakuniy maslahat va tilak)',
        uz: "Bitiruv ishlari ko'pincha katta ma'no bermasa-da, ular ma'no yaratadi. Shuning uchun hech kim «ishimni baribir ko'p odam o'qimaydi» degan fikrdan ruhini tushirmasligi, aksincha bor e'tiborini o'z mavzusiga qaratishi kerak («Deshalb sollte sich auch niemand... entmutigen lassen: Vielmehr sollte man seinem Thema seine ganze Aufmerksamkeit widmen») [8-savol: E — muallif maslahat beradi]. Oxirida muallif tilak bildiradi: «Umid qilamizki, ular hech qachon marraga yetib kelishmaydi — chunki hech narsa tadqiq qilinmaydigan joy dunyodagi eng g'amgin joydir» [Misol 0: E]."
      }
    ] as ParagraphTranslation[],
    text: `<div class="text-paragraph" data-para="A"><span class="para-tag">[Abschnitt A]</span> Zum Glück ist da das Bullauge. Ohne das kreisrunde Fenster wäre der Raum wirklich das sprichwörtliche „stille Kämmerlein“. Meine Arbeitskabine ist etwa drei mal zwei Meter groß, also eigentlich zu klein für mich, den Stuhl und den Schreibtisch. Ich staple Magisterarbeiten, Master- und Bachelorarbeiten darauf. Eine Diplomarbeit mit dem Titel „Logik der Liebe“ rutscht von der Tischkante. Ich lege die verstaubte Arbeit zurück und trete an das Bullauge. Unter mir liegt der Lesesaal der Berliner Staatsbibliothek. Junge Menschen sitzen an nummerierten Arbeitstischen. Sie lesen, sie blättern, notieren und tippen. Aber wozu? Welchen Sinn hat diese ganze Anstrengung? Ist es nicht Verschwendung von Zeit und Energie? Wo bleibt da der Nutzen für uns, die Allgemeinheit?</div>
<div class="text-paragraph" data-para="B"><span class="para-tag">[Abschnitt B]</span> Ab gewissen Größenordnungen sind Sinnfragen angebracht. Im letzten Jahr schlossen mehr als 300 000 Studenten ihr Studium mit einer Abschlussarbeit ab. Zum Vergleich: Auf dem deutschen Buchmarkt erschienen im selben Jahr nur knapp 80 000 Neuerscheinungen. Aber im Gegensatz zu Romanen werden Abschlussarbeiten nicht für ein Publikum geschrieben. Meist sind die Gutachter die einzigen Leser. Die Abschlussarbeit ist eine der am weitesten verbreiteten Textgattungen – und zugleich die am meisten missachtete. Eine Abschlussarbeit ist in erster Linie die wichtigste Prüfung des Studiums. Die Absolventen sollen beweisen, dass sie Sachverhalte kritisch einordnen und schlüssig argumentieren können. Kern wissenschaftlicher Methodik ist die Abgrenzung einer Sache von einer anderen, also die Definition.</div>
<div class="text-paragraph" data-para="C"><span class="para-tag">[Abschnitt C]</span> Die Ergebnisse mancher Studien, die vor mir auf dem Schreibtisch liegen, sind auf den ersten Blick allerdings dürftig und beim Lesen kann ich mir nicht immer ein Lächeln verkneifen. Ein Betriebswirtschaftler widmet sich dem Ziel, mittels eines statistischen Verfahrens zu ermitteln, welcher Standort innerhalb Deutschlands mit dem Auto am besten zu erreichen wäre. Nach ganzen 70 Seiten voll mit respekteinflößenden Berechnungen kommt er zu der sicher nicht ganz abwegigen Empfehlung, sich lieber im Rhein-Main-Gebiet als auf Rügen zu treffen. Na sowas, denke ich: Das hätte ich auch ohne komplizierte Mathematik herausgefunden. Eine andere Arbeit analysiert die Telenovela „Sturm der Liebe“ und kommt zu dem Schluss, Liebe lasse sich als übergeordnetes Thema feststellen. Kritiker äußern den Vorwurf, allgemein Bekanntes würde in Abschlussarbeiten mit ein paar Fußnoten in den Adelsstand akademischer Evidenz gehoben. Aber bei näherem Hinsehen handelt es sich dabei um ein großes Missverständnis, denn wichtiger als neue Erkenntnisse war schon immer die Herausforderung an die Studenten, Gewissheiten aufzugeben und eine kritische Haltung zu entwickeln. Erst wenn ein Sachverhalt argumentativ hergeleitet wurde, darf der junge Akademiker dem gesunden Menschenverstand trauen und zustimmen. Das ist Wissenschaft in ihrer reinsten Form.</div>
<div class="text-paragraph" data-para="D"><span class="para-tag">[Abschnitt D]</span> Die Universitäten sind verpflichtet, Abschlussarbeiten einige Jahre aufzubewahren, danach werden sie geschreddert. Die Exemplare auf meinem Schreibtisch sind durch das Raster gefallen. Sie wurden auf Empfehlung eines wohlwollenden Professors veröffentlicht, oder man hat nicht nur die Arbeiten, sondern auch deren Schonfristen vergessen. Abschlussarbeiten sind das Abfallprodukt des akademischen Betriebs. Gerade das macht sie als Zeitdokumente wertvoll. Auch Archäologen ziehen mehr Erkenntnisse aus den Müllhalden untergegangener Zivilisationen als aus deren Palästen. Abschlussarbeiten sind zudem zutiefst persönliche Aufzeichnungen. Für viele Menschen sind sie die längsten Texte, die sie in ihrem Leben schreiben, und oftmals liegt ihnen ein ganz privates Anliegen zugrunde. Für manche, wenn auch nur wenige Absolventen haben sie jedoch noch eine weitere Bedeutung: Die Abschlussarbeit kann der erste Schritt in eine wissenschaftliche Laufbahn sein. Sie mag zwar vielleicht nur eine akademische Fingerübung sein, doch womöglich hätte mancher Nachwuchsforscher seine Leidenschaft für die Wissenschaft nicht entdeckt, wenn er sich nicht in seiner Abschlussarbeit zum ersten Mal über einen längeren Zeitraum intensiv selbstständig ein Thema erarbeitet hätte. Es könnte durchaus sein, dass uns einige wichtige Erkenntnisse, die Wissenschaftler im Laufe ihres Forscherlebens gefasst haben, verborgen geblieben wären. Doch darüber lässt sich letztlich natürlich nur spekulieren.</div>
<div class="text-paragraph" data-para="E"><span class="para-tag">[Abschnitt E]</span> Es ist Zeit, meine Forschungsfrage zu beantworten: Nein, Abschlussarbeiten ergeben meistens nicht viel Sinn. Aber sie schaffen Sinn. Worüber auch immer die Absolventen schreiben, sie schenken ihrem Thema Aufmerksamkeit und verleihen ihm damit eine Bedeutung. Diese wiegt umso schwerer, je kleiner das allgemeine Interesse ist. Deshalb sollte sich auch niemand von dem Gedanken entmutigen lassen, dass seine Arbeit nie einen großen Leserkreis finden wird: Vielmehr sollte man seinem Thema seine ganze Aufmerksamkeit widmen. Denn mit jedem Text wird einem neuen Phänomen, einer bislang belanglosen Sache auf dieser Welt ein Platz zugeordnet. Ist das nicht die Kernaufgabe der Wissenschaft? – Die Ordnung der Welt. Etwas jedenfalls tröstet an dem Gedanken, dass es wenig gibt, worüber noch nicht nachgedacht wurde, und dass es nichts gibt, worüber es sich nicht nachzudenken lohnt. Es ist also kein Problem, dass Abschlussarbeiten nicht gelesen werden. Die Absolventen schreiben sie für sich selbst – vielleicht sogar für die Dinge, von denen sie handeln. Denn was auch immer das Thema ist, es wird erst Thema durch sie. Als ich die Bücher zur Rückgabe bringe, sitzen immer noch all diese jungen Menschen im Lesesaal. Sie lesen, sie blättern, notieren und tippen. Sie legen sich ins Zeug. Hoffen wir, dass sie niemals ans Ziel kommen. Wo nichts mehr erforscht wird, liegt der traurigste Ort der Welt.</div>`,
    questions: [
      { id: 7, text: 'In welchem Abschnitt stellt der Autor Vermutungen an?', uz: "Qaysi bo'limda muallif taxminlarni ilgari suradi?", ans: 'D', expl: "D bo'limida: «doch womöglich hätte mancher Nachwuchsforscher... Es könnte durchaus sein, dass... Doch darüber lässt sich letztlich natürlich nur spekulieren.»" },
      { id: 8, text: 'In welchem Abschnitt spricht der Autor einen Rat aus?', uz: "Qaysi bo'limda muallif maslahat beradi?", ans: 'E', expl: "E bo'limida: «Deshalb sollte sich auch niemand von dem Gedanken entmutigen lassen... Vielmehr sollte man seinem Thema seine ganze Aufmerksamkeit widmen.»" },
      { id: 9, text: 'In welchem Abschnitt liefert der Autor reine Fakten?', uz: "Qaysi bo'limda muallif sof faktlarni keltiradi?", ans: 'B', expl: "B bo'limida 300 000 bitiruv ishi, 80 000 yangi kitob va bitiruv ishining vazifasi haqida sof faktlar berilgan." },
      { id: 10, text: 'In welchem Abschnitt gibt der Autor fremde Einschätzungen wieder?', uz: "Qaysi bo'limda muallif boshqalarning fikr-baholarini keltiradi?", ans: 'C', expl: "C bo'limida: «Kritiker äußern den Vorwurf, allgemein Bekanntes würde in Abschlussarbeiten mit ein paar Fußnoten in den Adelsstand akademischer Evidenz gehoben.»" },
      { id: 11, text: 'In welchem Abschnitt amüsiert sich der Autor?', uz: "Qaysi bo'limda muallif kulgili holatdan zavqlanadi?", ans: 'C', expl: "C bo'limida: «und beim Lesen kann ich mir nicht immer ein Lächeln verkneifen... Na sowas, denke ich: Das hätte ich auch ohne komplizierte Mathematik herausgefunden.»" },
      { id: 12, text: 'In welchem Abschnitt äußert der Autor Bedenken?', uz: "Qaysi bo'limda muallif shubha / xavotir bildiradi?", ans: 'A', expl: "A bo'limida: «Welchen Sinn hat diese ganze Anstrengung? Ist es nicht Verschwendung von Zeit und Energie? Wo bleibt da der Nutzen für uns, die Allgemeinheit?»" }
    ]
  },
  lv3: VARIANT_20_READING.lv3,
  sp: {
    title: 'Eine kurze Geschichte der Werbung',
    titleUz: 'Reklamaning qisqacha tarixi',
    uzbekVocab: [
      { de: 'anpreisen (priesen ... an)', uz: 'ovozini baland qo‘yib maqtamoq / targ‘ib qilmoq' },
      { de: 'der Marktschreier', uz: 'bozor jarchisi' },
      { de: 'der Vorläufer', uz: 'ilk ajdod / o‘tmishdosh' },
      { de: 'unter die Leute bringen', uz: 'odamlar orasida tarqatmoq' },
      { de: 'aushängen (wurden ausgehängt)', uz: 'osib qo‘ymoq (e’lon/varaqalarni)' },
      { de: 'zu einem gewaltigen Schub verhelfen', uz: 'ulkan turtki / rivojlanish berishga yordam bermoq' },
      { de: 'die Litfaßsäule', uz: 'ko‘cha reklama ustuni (Ernst Litfass nomi bilan)' },
      { de: 'ins Leben rufen', uz: 'yaratmoq / yo‘lga qo‘ymoq' },
      { de: 'geschönte Bilder', uz: 'bo‘rttirilgan / chiroyli qilib ko‘rsatilgan rasmlar' },
      { de: 'Einzug halten in (+ Akk.)', uz: 'kirib kelmoq (xonadonlarga)' },
      { de: 'auf Schritt und Tritt', uz: 'har qadamda' }
    ] as VocabItem[],
    text: `<p>Die historischen Wurzeln der kommerziellen Werbung reichen weiter zurück, als es die meisten wohl vermuten würden: Schon im alten Ägypten <strong>(25)</strong> Marktschreier lautstark ihre Waren an und das Werbeplakat findet einen frühen <strong>(26)</strong> in den steinernen Tafeln, auf die Händler ihr Warenangebot meißelten. Im großen Stil <strong>(27)</strong> konnten die Verkäufer ihre Werbung damals jedoch noch nicht.</p>
<p>Erst mit der Erfindung des Buchdrucks Mitte des 15. Jahrhunderts begann die Werbung endgültig ihren Siegeszug. Mit Gutenbergs beweglichen Lettern eröffneten sich ganz neue Möglichkeiten: Erste Handzettel wurden auf dem Marktplatz <strong>(28)</strong> und informierten über die Waren, die die Händler <strong>(29)</strong>. Die Geschichte der Werbung ist also insofern auch eine Geschichte der Kommunikationsmedien, <strong>(30)</strong> diese zwingend notwendig für deren <strong>(31)</strong> waren. Als 1650 in Leipzig die erste Tageszeitung der Welt herauskam, schien das passende Medium gefunden. Bald schon etablierten sich auch spezielle Werbezeitungen, in die Händler <strong>(32)</strong> Bezahlung ihre Waren eintragen lassen konnten.</p>
<p>Eine weitere Erfindung <strong>(33)</strong> der Werbebranche im 19. Jahrhundert zu einem gewaltigen Schub: Die <strong>(34)</strong> dem Berliner Drucker Ernst Litfaß benannte Litfaßsäule <strong>(35)</strong> von 1855 an nahezu die ganze Welt. <strong>(36)</strong> gewann Werbung zu dieser Zeit immer mehr an Bedeutung. In einigen Großstädten bestanden die Tageszeitungen sogar <strong>(37)</strong> zu 80 Prozent aus Werbung. Nie zuvor hatte man so viele Kunden erreichen können. Gleichzeitig wurden neue Werbestrategien <strong>(38)</strong> und gezielt bestimmte soziale Schichten angesprochen – heute spricht man von Zielgruppenwerbung. Nachdem Produkte früher nur in <strong>(39)</strong> Bildern dargestellt worden waren, versuchten die Firmen nun, den Konsumenten <strong>(40)</strong>, dass ihr Angebot für ihn unverzichtbar sei.</p>
<p>Nachdem Werbefilme anfangs nur im Kino gezeigt worden waren, flimmerte 1941 in den USA <strong>(41)</strong> Werbespot über den heimischen Bildschirm – eine Uhrenwerbung. Während des Wirtschaftswunders hielt Werbung dank des neuen Mediums auch <strong>(42)</strong> in die deutschen Wohnzimmer: Am 3. November 1956 <strong>(43)</strong> der erste Werbespot im Deutschen Fernsehen.</p>
<p>Zuvor hatte es jedoch starken Gegenwind gegeben. Kritiker hatten die Befürchtung geäußert, durch Werbung <strong>(44)</strong> das Niveau der Programme absinken. Heute begegnet man Werbung <strong>(45)</strong>. Seit 1994 das erste Werbebanner im Internet aufpoppte, dringt sie auch in die Online-Welt vor. Doch <strong>(46)</strong> ist ihre Geschichte sicher noch nicht beendet.</p>`,
    questions: [
      { id: 25, opts: ['schlugen', 'meldeten', 'priesen', 'rieten'], ans: 'priesen', expl: "«Waren anpreisen (priesen ... an)» — mollarni baland ovozda maqtamoq." },
      { id: 26, opts: ['Vorläufer', 'Vorarbeiter', 'Vordenker', 'Vorkämpfer'], ans: 'Vorläufer', expl: "«einen frühen Vorläufer finden» — ilk o'tmishdoshini topmoq." },
      { id: 27, opts: ['unters Volk mischen', 'unter die Augen kommen', 'unter die Leute bringen', 'unter die Lupe nehmen'], ans: 'unter die Leute bringen', expl: "«unter die Leute bringen» — odamlar orasida keng tarqatmoq." },
      { id: 28, opts: ['zugehängt', 'abgehängt', 'ausgehängt', 'verhängt'], ans: 'ausgehängt', expl: "«Handzettel wurden auf dem Marktplatz ausgehängt» — e'lon varaqalari osib qo'yilgan." },
      { id: 29, opts: ['verboten', 'anboten', 'geboten', 'überboten'], ans: 'anboten', expl: "«Waren, die die Händler anboten» (anbieten — taklif qilmoq)." },
      { id: 30, opts: ['wie', 'als', 'als dass', 'dass'], ans: 'als', expl: "«insofern ..., als ...» — shu jihatdanki... (korrelyativ bog'lovchi)." },
      { id: 31, opts: ['Vergrößerung', 'Erhöhung', 'Erweiterung', 'Verbreitung'], ans: 'Verbreitung', expl: "«für deren Verbreitung» — ularning tarqalishi uchun." },
      { id: 32, opts: ['wegen', 'gegen', 'neben', 'über'], ans: 'gegen', expl: "«gegen Bezahlung» — to'lov evaziga." },
      { id: 33, opts: ['verschenkte', 'vergab', 'verhalf', 'verkaufte'], ans: 'verhalf', expl: "«jemandem zu etwas verhelfen (verhalf)» — erishishiga yordam bermoq (im 33-betdagi varaqda «zu einem gewaltigen Schub»)." },
      { id: 34, opts: ['zu', 'dank', 'laut', 'nach'], ans: 'nach', expl: "«benannt nach (+ Dat.)» — kimningdir sharafiga / nomi bilan atalgan." },
      { id: 35, opts: ['gewann', 'bewältigte', 'eroberte', 'erwarb'], ans: 'eroberte', expl: "«eroberte nahezu die ganze Welt» — deyarli butun dunyoni zabt etdi." },
      { id: 36, opts: ['Wenigstens', 'Nämlich', 'Ohnehin', 'Trotzdem'], ans: 'Ohnehin', expl: "«Ohnehin gewann Werbung ... immer mehr an Bedeutung» — shundoq ham / har holda." },
      { id: 37, opts: ['von', 'auf', 'bis', 'durch'], ans: 'bis', expl: "«bis zu 80 Prozent» — 80 foizgacha." },
      { id: 38, opts: ['wiederbelebt', 'aus dem Leben gegriffen', 'ins Leben gerufen', 'ins Leben zurückgerufen'], ans: 'ins Leben gerufen', expl: "«ins Leben rufen» — yaratmoq / yo'lga qo'ymoq." },
      { id: 39, opts: ['geschönten', 'geschöhnten', 'geschöndten', 'geschönnten'], ans: 'geschönten', expl: "To'g'ri imlo: «geschönten Bildern» (schönen -> geschönt: bezatilgan / bo'rttirilgan)." },
      { id: 40, opts: ['überzeugten', 'davon überzeugen', 'davon zu überzeugen', 'überzeugen'], ans: 'davon zu überzeugen', expl: "«versuchten ..., den Konsumenten davon zu überzeugen, dass...»." },
      { id: 41, opts: ['die erste', 'dem ersten', 'den ersten', 'der erste'], ans: 'der erste', expl: "«flimmerte ... der erste Werbespot» — Nominativ maskulin (der Spot)." },
      { id: 42, opts: ['Entzug', 'Abzug', 'Anzug', 'Einzug'], ans: 'Einzug', expl: "«Einzug halten in (+ Akk.)» — kirib kelmoq." },
      { id: 43, opts: ['rollte', 'ging', 'lief', 'rannte'], ans: 'lief', expl: "«lief der erste Werbespot im Fernsehen» — namoyish etildi (efirga ketdi)." },
      { id: 44, opts: ['solle', 'dürfe', 'könne', 'möchte'], ans: 'könne', expl: "«durch Werbung könne das Niveau absinken» — ehtimoliy xavotir (Konjunktiv I)." },
      { id: 45, opts: ['Schritt für Schritt', 'an Ort und Stelle', 'auf der Stelle', 'auf Schritt und Tritt'], ans: 'auf Schritt und Tritt', expl: "«auf Schritt und Tritt» — har qadamda / hamma joyda." },
      { id: 46, opts: ['dazu', 'damit', 'darum', 'davon'], ans: 'damit', expl: "«Doch damit ist ihre Geschichte sicher noch nicht beendet» — shu bilan." }
    ]
  }
};

// ============================================================================
// VARIANT 22 (PDF 22 — ♧ الاحتمال الثاني والعشرون ♧)
// ============================================================================
export const VARIANT_22_READING = {
  pdfSource: '/assets/aistudio/22_afe946f3.pdf',
  lv1: {
    title: 'Die bewegte Geschichte des Aufzugs',
    titleUz: 'Liftning boy va qiziqarli tarixi',
    uzbekVocab: [
      { de: 'das Ausbleiben', uz: 'kelmaslik / yo‘qlik (liftni kutib qolish)' },
      { de: 'die Eroberung der Vertikalen', uz: 'vertikal makonni (baland qavatlarni) zabt etish' },
      { de: 'das Hochhieven', uz: 'yuqoriga tortib chiqarish / ko‘tarish' },
      { de: 'die Fangvorrichtung', uz: 'tros uzilganda kabinani tutib qoluvchi tormoz mexanizmi' },
      { de: 'ungebremst in die Tiefe stürzen', uz: 'tormozsiz pastga (tublikka) qulamoq' },
      { de: 'ein Dickicht mathematischer Gleichungen', uz: 'matematik tenglamalarning qalin o‘rmoni (murakkab tizimi)' },
      { de: 'die Zielruftaste', uz: 'chiqishdan oldin qaysi qavatga borishni kiritadigan chaqiruv tugmasi' },
      { de: 'die Magnetschwebebahn', uz: 'magnit yostiqchali poyezd (maglev)' }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: "1–2-xatboshilar va [ 1 ]–[ 3 ] bo'shliqlar",
        uz: "Lift haqida gap ketganda ko'pincha uning vaqtida kelmasligi tilga olinadi: Nyu-York liftlari oldida kutish vaqti yiliga jami 16,6 yilni tashkil etadi. Shunga qaramay, liftsiz shaharlarimizda baland binolarni zabt etish amalga oshmagan bo'lardi. Lift g'oyasining o'zi ancha qadimiy: [ 1 -> F: Arxeologlar qadimgi Rim xarobalarida platformalar yuqoriga va pastga harakatlana oladigan shaxta qoldiqlarini topishgan ]. XIX asrda bug' mashinalari paydo bo'lgach lift ommalashdi, ammo dastlab faqat yuklar uchun ishlatilgan. Faqat Otis Elevator Company asoschisi Elisha Greyvs Otis (Elisha Graves Otis) liftga vertikal transport vositasi sifatida yo'l ochib berdi. [ 2 -> D: 1853-yilda u arqon (tros) uzilganda kabinaning tormozsiz pastga qulashini oldini oluvchi tutib qolish moslamasini (Fangvorrichtung) taqdim etdi ]. Tez orada elektr motorlar bug' mashinalari o'rnini egalladi va 1900-yilga kelib liftlar 30-qavatgacha chiqa boshladi. [ 3 -> H: Ushbu ilk kabinalarda oddiy qo'ng'iroqlar yoki gudoklar harakat yo'nalishi va navbatdagi bekatlar haqida xabar berish vazifasini bajargan ]."
      },
      {
        label: "3–5-xatboshilar va [ 4 ]–[ 6 ] bo'shliqlar",
        uz: "XX asr boshidagi qurilish bumi bilan yangi muammo paydo bo'ldi: [ 4 -> B: Liftdagi qulay yurish uzoq kutish vaqtlari evaziga keladi — yo'lovchilar qanchalik ko'p bo'lsa, eng qulay marshrutlarni hisoblash shunchalik murakkablashadi ]. Bugungi kunda «lift matematikasi» yo'lovchilar qavat tugmasini (Zielruftaste) bosgan zahoti qaysi kabina qayerda to'xtashini jonli hisoblaydi. [ 5 -> C: Barcha ushbu yangiliklarga qaramay, lift aslida bugungi kunda ham ancha samarasiz narsadir ]. Chunki bitta shaxtada faqat bitta kabina yuradi — bu xuddi temiryo'lda har bir izda faqat bitta poyezd yurishiga o'xshaydi. Biroq yangi texnologiya trosli liftlar hukmronligiga chek qo'yishi mumkin: [ 6 -> G: Magnitlar troslar o'rnini egallashi va kabina xuddi magnit yostiqchali poyezd (Magnetschwebebahn) kabi vertikal yo'nalishda yuqori va pastga sirg'alib yurishi ko'zda tutilgan ]. Shunda bitta shaxtada bir vaqtda bir nechta kabina harakatlana oladi."
      }
    ] as ParagraphTranslation[],
    text: `<p>Wer vom Aufzug spricht, redet meist über dessen Ausbleiben: Auf dem Weg in ein wichtiges Meeting verpasst man ihn, und in der morgendlichen Rushhour, wenn der Lift an jedem einzelnen Stockwerk anhält, beschließt so mancher, demnächst wieder die Treppen zu nutzen. Die Wartezeiten vor New Yorker Liften allerdings summieren sich im Lauf eines Jahres auf 16,6 Jahre. Daran mag es liegen, dass der Fahrstuhl als technisches Hilfsmittel für gewöhnlich weniger geliebt als bloß geduldet wird. Dabei wäre ohne den Aufzug die Eroberung der Vertikalen in unseren Städten wohl ausgeblieben.</p>
<p>Die Idee des Aufzugs an sich ist mit einiger Sicherheit schon ziemlich alt. <span class="text-gap">[ 1 ]</span> Im großen Stil kam der Aufzug allerdings erst im 19. Jahrhundert in Mode, als Dampfmaschinen das Hochhieven der Plattformen übernehmen konnten. Doch beschränkte sich das maschinelle Liften vorerst auf Waren.</p>
<p>Erst Elisha Graves Otis, Gründer der Otis Elevator Company, bereitete dem Fahrstuhl als Verkehrssystem in der Vertikalen den Weg. <span class="text-gap">[ 2 ]</span> Die Entwicklung besserer Seile und Dampfmaschinen sowie der Zustrom von Arbeitskräften in die Städte machten schließlich den Fahrstuhl zum unverzichtbaren Requisit urbanen Lebens. Bald lösten Elektromotoren die Dampfmaschinen ab, sodass schon um 1900 Liftkabinen bis in eine Höhe von 30 Stockwerken fuhren. <span class="text-gap">[ 3 ]</span></p>
<p>Mit dem Bauboom des beginnenden zwanzigsten Jahrhunderts tauchte indes ein neues Problem auf: <span class="text-gap">[ 4 ]</span> Zugleich wünschten Bauherren einen niedrigen Energieverbrauch bei möglichst hoher Transportkapazität. Deshalb zogen auf das „Elevatoring“ spezialisierte Ingenieure bald ein ganzes Dickicht mathematischer Gleichungen zur Optimierung von Liftanlagen heran. Heute mischt die Fahrstuhlmathematik live bei der Steuerung der Liftkabinen mit, und zwar dann, wenn Wartende dem Lift via Zielruftaste mitteilen, in welches Stockwerk die Fahrt gehen soll. Dann ermittelt der Steuercomputer, welche Kabine idealerweise wo anhält.</p>
<p><span class="text-gap">[ 5 ]</span> Eine Kabine pro Schacht – das ist so, als würden Eisenbahnen entlang jeder Gleisstrecke jeweils nur einen Zug fahren lassen. Große und hohe Gebäude müssten mit mindestens sechs Fahrstuhlschächten versehen werden, um die Flut an Fahrgästen bewältigen zu können.</p>
<p>Doch könnte eine neue Technologie die Vorherrschaft der seilbetriebenen Aufzüge beenden. <span class="text-gap">[ 6 ]</span> So können mehrere Kabinen im gleichen Schacht fahren. Eine Modellanlage gibt es bereits, bald soll der neue Fahrstuhl in einem eigens dafür errichteten Turm getestet werden.</p>`,
    options: [
      { key: 'A', text: 'Dieses bahnbrechende Hochhausprojekt erforderte technische Neuerungen.', uz: "Ushbu inqilobiy ko'p qavatli bino loyihasi texnik yangiliklarni talab qildi. (Ortiqcha gap)" },
      { key: 'B', text: 'Die bequeme Fahrt im Aufzug muss mit langen Wartezeiten erkauft werden – und je mehr Fahrgäste, desto komplizierter die Berechnung der günstigsten Fahrwege.', uz: "Liftdagi qulay yurish uzoq kutish vaqtlari badaliga keladi — va yo'lovchilar qanchalik ko'p bo'lsa, eng qulay yo'nalishlarni hisoblash shunchalik murakkablashadi." },
      { key: 'C', text: 'All diesen Neuerungen zum Trotz ist der Fahrstuhl im Grunde selbst heutzutage noch eine ziemlich ineffiziente Sache.', uz: "Barcha ushbu yangiliklarga qaramay, lift aslida bugungi kunda ham ancha samarasiz narsadir." },
      { key: 'D', text: '1853 stellte er eine Fangvorrichtung vor, die bei einem Riss des Seils verhinderte, dass die Kabine ungebremst in die Tiefe stürzte.', uz: "1853-yilda u arqon uzilganda kabinaning tormozsiz pastga qulashini oldini oluvchi tutib qolish mexanizmini taqdim etdi." },
      { key: 'E', text: 'Trotz dieser Rückschläge glaubte er fest an seine Idee.', uz: "Ushbu muvaffaqiyatsizliklarga qaramay, u o'z g'oyasiga qat'iy ishonardi. (Ortiqcha gap)" },
      { key: 'F', text: 'So fanden Archäologen in altrömischen Ruinen Überreste von Schächten, in denen Plattformen auf und ab fahren konnten.', uz: "Chunonchi, arxeologlar qadimgi Rim xarobalarida platformalar yuqori va pastga harakatlana olgan shaxta qoldiqlarini topishgan." },
      { key: 'G', text: 'Magnete sollen die Seile ersetzen, die Kabine wie eine Magnetschwebebahn in der Vertikalen auf und ab gleiten.', uz: "Magnitlar troslar o'rnini bosishi va kabina xuddi magnit yostiqchali poyezd kabi vertikal yo'nalishda yuqori va pastga sirg'alib yurishi kerak." },
      { key: 'H', text: 'Einfache Glocken oder Summer besorgten in diesen frühen Kabinen die Kommunikation über die Fahrtrichtung und demnächst anzusteuernde Haltestellen.', uz: "Ushbu dastlabki kabinalarda oddiy qo'ng'iroqlar yoki gudoklar harakat yo'nalishi va navbatdagi bekatlar haqida aloqani ta'minlagan." }
    ],
    answers: { '1': 'F', '2': 'D', '3': 'H', '4': 'B', '5': 'C', '6': 'G' }
  },
  lv2: {
    ...VARIANT_14_READING.lv2,
    questions: [
      { id: 7, text: 'In welchem Abschnitt äußert sich der Autor abfällig über andere?', uz: "Qaysi bo'limda muallif boshqalar haqida kamsituvchi / tanqidiy fikr bildiradi?", ans: 'B', expl: "B bo'limida: «Wissenschaftler bauen mit ihrer komplizierten Sprache Mauern um die eigenen Gedanken... ein albernes Gewand»." },
      { id: 8, text: 'In welchem Abschnitt hebt der Autor eine Darstellungsweise besonders positiv hervor?', uz: "Qaysi bo'limda muallif ifodalash uslubini ayniqsa ijobiy ta'kidlaydi?", ans: 'D', expl: "D bo'limida Zigmund Freydning murakkab nazariyalarni jonli obrazlar va yunon mifologiyasi analogiyalari orqali tushunarli bayon etgani ijobiy namuna sifatida ko'rsatiladi." },
      { id: 9, text: 'In welchem Abschnitt äußert der Autor einen Wunsch?', uz: "Qaysi bo'limda muallif o'z tilagini / xohishini bildiradi?", ans: 'E', expl: "E bo'limida: «Doch schön wäre es, wenn die Wissenschaftswelt irgendwann mehr Wert auf einen eleganten und verständlichen Stil legen würde.»" },
      { id: 10, text: 'In welchem Abschnitt zieht der Autor einen Schluss?', uz: "Qaysi bo'limda muallif xulosa chiqaradi?", ans: 'E', expl: "E bo'limida: «Betrachtet man aber das Gesamtbild, lässt sich nur folgern: Während des Studiums...»" },
      { id: 11, text: 'In welchem Abschnitt spricht der Autor eine Warnung aus?', uz: "Qaysi bo'limda muallif ogohlantirish bildiradi?", ans: 'B', expl: "B bo'limida: «Studenten sollten ein solches Imponiergehabe besser nicht nachahmen. Denn es besteht die Gefahr, dass sie sich den Stil verderben...»" },
      { id: 12, text: 'In welchem Abschnitt gibt der Autor eine fremde Einschätzung wieder?', uz: "Qaysi bo'limda muallif begona mutaxassis bahosini keltiradi?", ans: 'C', expl: "C bo'limida Mannxaymdagi Nemis tili instituti prezidenti Lyudvig Ayxinger (Ludwig Eichinger) fikri keltirilgan." }
    ]
  },
  lv3: {
    title: 'Essen in der Mensa: Wider die Currywurst – Uni-Mensen setzen auf Qualität',
    titleUz: 'Talabalar oshxonasida (Mensa) ovqatlanish: Karri-sosiskaga qarshi — universitet oshxonalari sifatga tayanmoqda',
    uzbekVocab: [
      { de: 'der Speiseplan', uz: 'taomnoma / menyu rejasi' },
      { de: 'Aufschluss geben über (+ Akk.)', uz: '... haqida ma’lumot / tasavvur bermoq' },
      { de: 'das EDV-System', uz: 'elektron ma’lumotlarni qayta ishlash (kompyuter) tizimi' },
      { de: 'die unmittelbare Umgebung', uz: 'bevosita yaqin atrof / mintaqa' },
      { de: 'die Bezuschussung / Zuschüsse', uz: 'davlat subsidiyasi / moliyaviy yordam' },
      { de: 'die Deutsche Gesellschaft für Ernährung (DGE)', uz: 'Germaniya ovqatlanish jamiyati' }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: "1-xatboshi (Savollar 13–15: Talabalar shikoyati, haftalar oldin tuziladigan menyu va fakultetlar farqi)",
        uz: "Ba'zi talabalar Mensadagi ovqat taklifidan norozi bo'lib shikoyat qilishadi [13-savol: R]. Biroq Mensa rahbarlari taomnomani (Speiseplan) qisqa muddatda emas, balki bir necha hafta oldin puxta rejalashtiradilar [14-savol: F]. Qaysi taom tanlanishi talabalarning qaysi yo'nalishda o'qishiga ham bog'liq: masalan, sport yoki san'at talabalari ko'proq salat va yengil taomlarni, muhandislik talabalari esa to'yimli go'shtli taomlarni afzal ko'rishadi [15-savol: R]."
      },
      {
        label: "2-xatboshi (Savollar 16–19: Kompyuter tizimi, oziq-ovqat kimyogarlari tekshiruvi va mintaqaviy mahsulotlar)",
        uz: "Oshxona xodimlari qancha mahsulot buyurtma qilishni o'zlari qo'lda hisoblamaydilar — maxsus kompyuter tizimi (EDV-System) aniq miqdorni hisoblab, yetkazib beruvchilarga avtomatik buyurtma yuboradi [16-savol: F]. Yetkazib beruvchi korxonalar sertifikatga ega bo'lishi shart va ular oziq-ovqat kimyogarlari tomonidan ahyon-ahyonda emas, balki muntazam (regelmäßig) tekshirib turiladi [17-savol: F]. Yangi mahsulotlar imkon qadar yaqin mintaqadan olinadi, ammo barcha mahsulotlarni ham bevosita yaqin atrofdan sotib olishning imkoni yo'q [18-savol: «nicht alle Produkte» bilan R, «alle Produkte» bilan F]. Ko'plab talabalar uyushmalari bio-mahsulotlardan ham foydalanadi, ammo bio-fermerlarning ahamiyati oshib borayotgani haqida matnda aytilmagan [19-savol: X]."
      },
      {
        label: "3-xatboshi (Savollar 20–24: Gamburg universiteti subsidiyasi, DGE tavsiyalari va sarlavha)",
        uz: "Gamburg universiteti oshxonasi davlat subsidiyalari (Zuschüsse) bilan qo'llab-quvvatlanadi — aks holda bunday arzon narxlarni saqlab qolish imkonsiz bo'lardi [20-savol: R]. Aksariyat talabalar arzon tushliklari ortida qanchalik aniq ilm va puxta hisob-kitob yotganini umuman bilmaydilar [21-savol: F]. Germaniya ovqatlanish jamiyati (DGE) 19–24 yoshli yoshlar uchun oshxona taomlari bo'yicha tavsiyalar (Empfehlungen) e'lon qilgan, ammo majburiy qoida sifatida buyurmagan (schreibt nicht vor) [22-savol: F]. Oshpazlarning restoran oshpazlaridan ko'ra moslashuvchanroq bo'lishi haqida matnda gap yo'q [23-savol: X]. Matnga eng mos sarlavha: «Wider die Currywurst – Uni-Mensen setzen auf Qualität» [24-savol: C]."
      }
    ] as ParagraphTranslation[],
    text: `<p>Obwohl manche Studierende über das Essensangebot klagen, hat sich in den deutschen Universitätsmensen in den letzten Jahren viel getan. Welche Gerichte auf den Tisch kommen, wird keineswegs erst kurzfristig entschieden: Die Mensaleiter arbeiten den Speiseplan schon Wochen im Voraus aus. Welches Gericht letztlich gewählt wird, hängt laut Mensaleiter Gradtke stark davon ab, wie sich der Kundenstamm zusammensetzt – so gibt schon das Studienfach Aufschluss über die bevorzugten Speisen.</p>
<p>Auch die Logistik im Hintergrund ist hochmodern: Nicht die Mitarbeiter rechnen selbst aus, wie viel sie von jedem Lebensmittel bestellen müssen, sondern ein spezielles EDV-System ermittelt die exakten Mengen und schickt die Bestellungen automatisch an die Lieferanten. Diese Zulieferer benötigen ein Zertifikat und werden regelmäßig von Lebensmittelchemikern überprüft. Zwar achten immer mehr Studentenwerke darauf, dass frische Waren aus der Region kommen, doch leider lässt sich dies nicht für alle Produkte in der unmittelbaren Umgebung gewährleisten. Auch Produkte aus biologischem Anbau finden Verwendung, wobei das Essen vor allem für jeden bezahlbar bleiben muss.</p>
<p>So wird beispielsweise die Mensa der Universität Hamburg mit staatlichen Zuschüssen unterstützt: „Wenn wir nicht bezuschusst würden, könnten wir diese günstigen Preise gar nicht halten.“ Den meisten Studierenden ist dabei keineswegs klar, dass hinter ihrem preiswerten Mittagessen eine ausgeklügelte Ernährungswissenschaft steckt. Die Deutsche Gesellschaft für Ernährung (DGE) hat spezielle Empfehlungen für die Gemeinschaftsverpflegung von 19- bis 24-Jährigen herausgegeben, an denen sich die Mensen orientieren. Sogar über den Gehalt an Vitaminen und Mineralstoffen können sich die Gäste heute informieren.</p>`,
    questions: [
      { id: 13, text: 'Einige Studenten sind mit dem Essensangebot nicht zufrieden.', uz: "Ba'zi talabalar ovqat taklifidan mamnun emaslar.", ans: 'R', expl: "1-xatboshida ba'zi talabalar ovqatdan shikoyat qilishi aytilgan." },
      { id: 14, text: 'Es wird immer erst kurzfristig entschieden, welche Gerichte die Mensa anbietet.', uz: "Mensa qaysi taomlarni taklif qilishi har doim qisqa muddat qolganda hal qilinadi.", ans: 'F', expl: "Menyu bir necha hafta oldin (Wochen im Voraus) tuziladi." },
      { id: 15, text: 'Auch das Studienfach gibt Aufschluss über die bevorzugten Gerichte.', uz: "O'quv yo'nalishi (fakultet) ham afzal ko'riladigan taomlar haqida ma'lumot beradi.", ans: 'R', expl: "1-xatboshida tasdiqlangan." },
      { id: 16, text: 'Die Mitarbeiter der Mensa rechnen selbst aus, wie viel sie von jedem Lebensmittel bestellen müssen.', uz: "Mensa xodimlari har bir oziq-ovqatdan qancha buyurtma qilish kerakligini o'zlari hisoblab chiqadilar.", ans: 'F', expl: "Buni xodimlar emas, balki maxsus EDV (kompyuter) tizimi avtomatik hisoblaydi." },
      { id: 17, text: 'Zulieferer von Lebensmitteln werden nur sporadisch (gelegentlich) überprüft.', uz: "Oziq-ovqat yetkazib beruvchilar faqat ahyon-ahyonda tekshiriladi.", ans: 'F', expl: "Yetkazib beruvchilar oziq-ovqat kimyogarlari tomonidan muntazam (regelmäßig) tekshiriladi." },
      { id: 18, text: 'Nicht alle Produkte können in der unmittelbaren Umgebung gekauft werden.', uz: "Barcha mahsulotlarni ham bevosita yaqin atrofdan sotib olish mumkin emas.", ans: 'R', expl: "2-xatboshida: barcha mahsulotlarni yaqin hududdan olishning imkoni yo'q (Eslatma: agar savolda «Alle Produkte können...» bo'lsa F)." },
      { id: 19, text: 'Die Bedeutung von Bio-Bauern als Mensa-Lieferanten wächst.', uz: "Mensa yetkazib beruvchisi sifatida bio-fermerlarning ahamiyati ortib bormoqda.", ans: 'X', expl: "Bio-qishloq xo'jaligi tilga olingan, ammo bio-fermerlar ahamiyati oshayotgani haqida gap yo'q." },
      { id: 20, text: 'Die Mensa der Universität Hamburg wird mit Zuschüssen unterstützt.', uz: "Gamburg universiteti oshxonasi subsidiyalar bilan qo'llab-quvvatlanadi.", ans: 'R', expl: "3-xatboshida tasdiqlangan." },
      { id: 21, text: 'Studierenden ist in der Regel klar, dass die Zusammensetzung der Mahlzeit in der Mensa genau durchdacht ist.', uz: "Talabalarga odatda Mensadagi taom tarkibi puxta o'ylangani ma'lum.", ans: 'F', expl: "Aksincha, ko'pchilik talabalar arzon tushlik ortida aniq ilm yotganini bilmaydilar." },
      { id: 22, text: 'Die Deutsche Gesellschaft für Ernährung schreibt vor, aus welchen Lebensmitteln ein Mensa-Essen bestehen muss.', uz: "Germaniya ovqatlanish jamiyati Mensa ovqati qaysi mahsulotlardan iborat bo'lishi shartligini majburiy qoida sifatida belgilaydi.", ans: 'F', expl: "DGE majburiy qoida (Vorschrift) emas, faqat tavsiyalar (Empfehlungen) beradi." },
      { id: 23, text: 'Köche in einer Mensa müssen flexibler sein als in einem Restaurant.', uz: "Mensa oshpazlari restorandagiga qaraganda moslashuvchanroq bo'lishi kerak.", ans: 'X', expl: "Matnda Mensa oshpazlari bilan restoran oshpazlarining moslashuvchanligi solishtirilmagan." },
      {
        id: 24,
        text: 'Welche der Überschriften a, b oder c trifft die Aussage des Textes am besten?',
        uz: "Qaysi sarlavha matn mazmuniga eng mos keladi?",
        opts: [
          'a) Hinter den Kulissen: Wer in der Mensa kocht',
          'b) Qualität um jeden Preis: Warum Mensa-Essen teurer wird',
          'c) Wider die Currywurst – Uni-Mensen setzen auf Qualität'
        ],
        ans: 'C',
        expl: "Matn universitet oshxonalarining sifatli va sog'lom ovqatlanishga o'tayotgani haqida."
      }
    ]
  },
  sp: VARIANT_21_READING.sp
};

// ============================================================================
// VARIANT 24 (PDF 24 — ♧ الاحتمال الرابع والعشرون ♧)
// ============================================================================
export const VARIANT_24_READING = {
  pdfSource: '/assets/aistudio/24_46eb7daa.pdf',
  lv1: VARIANT_21_READING.lv1,
  lv2: {
    title: 'Machtvoller Schein und scheinbare Macht (Der Mond)',
    titleUz: 'Qudratli yog‘du va (soxta) ko‘rinmas qudrat (Oyning Yerga va insonga ta’siri)',
    uzbekVocab: [
      { de: 'der Erdtrabant', uz: 'Yerning tabiiy yo‘ldoshi (Oy)' },
      { de: 'naive Mond-Jünger', uz: 'Oy kuchiga soddadillik bilan ishonuvchi muxlislar' },
      { de: 'Ebbe und Flut (die Gezeiten)', uz: 'suv qaytishi va suv ko‘tarilishi (okeanlarda)' },
      { de: 'das Mondholz (Fichtenholz)', uz: 'Oy kamaygan fazada kesilgan archa yog‘ochi («Oy yog‘ochi»)' },
      { de: 'die Aussagekraft einschränken', uz: 'tadqiqotning ishonchlilik / isbot kuchini cheklamoq' },
      { de: 'gebannt schauen auf (+ Akk.)', uz: 'sehrlangandek / ko‘z uzmay tikilmoq' },
      { de: 'etwas abgewinnen können (+ Dat.)', uz: 'biror fikrda ma’no / ijobiy jihat ko‘ra olmoq' },
      { de: 'Blut abzapfen', uz: 'qon olmoq (tibbiy muolaja)' }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: 'Abschnitt A (Oy taqvimlari va mubolag‘ali da’volar)',
        uz: "Oy sehrli kuchga ega emish: u o'simliklar o'sishi va chaqaloqlar tug'ilish vaqtini boshqarar emish [Misol 0: A — mubolag'a]. Oy taqvimlariga ishonuvchilar soch kesish, ozish, operatsiya yoki bog' ishlarini Oyga qarab belgilashadi."
      },
      {
        label: 'Abschnitt B (Astrofizik Tomasosh faktlari va «Oy yog‘ochi» tadqiqotining nisbiyligi)',
        uz: "Oyning Yerga tortishish kuchi okeanlarda suv ko'tarilishi va qaytishini (Ebbe und Flut) hosil qilishi shubhasiz. Biroq Vena universiteti rasadxonasi astrofizigi Tomas Posh (Thomas Posch) shunday deydi: «Oldimizdan yaqin o'tib ketayotgan har bir tramvay bizga Oyga qaraganda ko'proq gravitatsion ta'sir ko'rsatadi». To'linoy va yangi oy o'rtasida inson vazni atigi 0,000035 foizga o'zgaradi [8-savol: B — muallif faktlar orqali xolis axborot beradi]. Shveytsariyalik yog'ochshunos Ernst Syurxer (Ernst Zürcher) oy kamayganda kesilgan archa yog'ochi («Mondholz») zichroq bo'lishini aniqlagan bo'lsa-da, bu tadqiqotning ahamiyatini cheklash (nisbiylashtirish) kerak: u atigi 30 ta daraxtda o'tkazilgan va daraxt o'sgan joy Oy fazasidan ko'ra ancha katta farq qiladi [10-savol: B]."
      },
      {
        label: 'Abschnitt C (Oy tadqiqotchisi Bernd Brunnerning izohi)',
        uz: "Shunga qaramay, Oy qudratiga ishonch barqaror saqlanib qolmoqda. Oy tadqiqotchisi Bernd Brunner buning izohini (Deutungsversuch) beradi: elektr chirog'i paydo bo'lishidan oldin tungi osmonda Oy yagona hukmdor bo'lgan; bugun esa millionlab nemislarning Oy taqvimlarini sotib olishini Brunner insonlarning rejalashtirib bo'lmaydigan taqdirga ma'no berishga urinishi sifatida talqin qiladi («Brunner interpretiert dies dahingehend, dass...») [7-savol: C]."
      },
      {
        label: 'Abschnitt D (Oy taqvimi ta’rifi, muallifning qisman qo‘shilishi va folklorshunos Groschwitz)',
        uz: "Oy ta'siriga ishonuvchilar buni ajdodlarimizning qadimiy bilimi deb bilishadi va Oy taqvimlariga qasam ichishadi: «Bular bir yillik Oy fazalari aniq ro'yxat qilingan taqvimlardir» («Das sind Kalender, in denen die Mondphasen eines Jahres genau aufgelistet sind») [12-savol: D — muallif ta'rif beradi]. Dehqonlarning avlodlar davomida to'plagan tajribasi haqidagi ushbu argumentda muallif ham ma'lum asos ko'radi («Diesem Argument kann auch der Autor dieser Zeilen etwas abgewinnen») [11-savol: D — muallif rozilik/qo'shilish ishorasini beradi]. Folklorshunos Xelmut Groshvits esa Oy taqvimlarining ilk izlarini kech o'rta asr tabiblarining qon olish haqidagi yozmalarida topgan."
      },
      {
        label: 'Abschnitt E (Oysiz Yerda hayot qanday bo‘lishi haqida o‘ylashga chorlov)',
        uz: "Olimlar Oyga ishonish hodisasiga shubha bilan qarashsa-da, bu osmon jismiga qiziqish juda katta va o'ylab ko'rishga arziydigan ko'plab ochiq savollar bor: «Agar Oy bo'lmaganida nima bo'lardi? Yerda hayot paydo bo'lishiga Oyning ta'siri qanchalik katta bo'lgan?.. Va nihoyat: Oysiz biz umuman mavjud bo'larmidik?» [9-savol: E — muallif o'quvchini mulohaza yuritishga undaydi]."
      }
    ] as ParagraphTranslation[],
    text: `<div class="text-paragraph" data-para="A"><span class="para-tag">[Abschnitt A]</span> Der Mond hat magische Kräfte: Er steuert das Wachstum von Pflanzen und den Zeitpunkt von Geburten. So steht es in Mondkalendern und Mondratgebern. Vom „richtigen Zeitpunkt“ schwärmen naive Mond-Jünger, die den Stand des Mondes beobachten und ihren „Mondkalender“ befragen, wann denn die günstigste Zeit zum Haareschneiden, zum Abnehmen, für die geplante Operation oder für schlichte Gartenarbeit sei. Offenbar gibt es vielfältige Einflüsse des Erdtrabanten auf Tier- und Pflanzenwelt zu beobachten. Wirkt der Mond aber auch auf uns Menschen, kann er unser Handeln und Verhalten bestimmen?</div>
<div class="text-paragraph" data-para="B"><span class="para-tag">[Abschnitt B]</span> Dass der Mond auf die Erde einwirkt, ist unbestritten: Mond und Erde ziehen einander an und dieser „Schwerkrafteffekt“ führt zu Ebbe und Flut – ein deutlicher Effekt des fernen Mondes. Wenn die Gravitationskraft das Wasser bewegen kann, dann müsste sie doch auch auf unseren bis zu 75 Prozent aus Wasser bestehenden Körper Einfluss haben? „Jede Straßenbahn, die nah vorbeifährt, hat mehr gravitativen Einfluss auf uns als der Mond“, sagt Thomas Posch, Astrophysiker an der Universitätssternwarte Wien. Gemeinsam mit der Sonne bewegt der Mond zweifellos Ozeane. Doch schon in Seen ist dieser Effekt nicht mehr erkennbar. Die Masse eines nahen Berges etwa übt auf Mensch und Natur tausendfach stärkere Kräfte aus als der Erdtrabant. Die Gravitation – und damit das Gewicht des Menschen – ändert sich zwischen Voll- und Neumond nämlich gerade mal um 0,000035 Prozent. Das ist so gut wie nicht messbar. Wissenschaftliche Studien, die sich mit diversen Mondeinflüssen beschäftigen, konnten bislang keinen direkten Zusammenhang feststellen. Mit einer Ausnahme: dem sogenannten Mondholz. Der Verkaufsschlager soll weniger schwinden, nicht brennen, kaum faulen. Tatsächlich zeigt sich bei einer Studie des Schweizer Holzwissenschaftlers Ernst Zürcher, dass Fichtenholz, das bei abnehmendem Mond gefällt wurde, später dichter war und weniger Wasser aufsaugte. Die Aussagekraft dieser Untersuchung ist jedoch einzuschränken: Sie wurde nur an 30 Bäumen durchgeführt. Und Zürcher selbst räumte ein, dass Standort und Waldbewirtschaftung einen weit größeren Unterschied ausmachten als die Mondphasen.</div>
<div class="text-paragraph" data-para="C"><span class="para-tag">[Abschnitt C]</span> Und dennoch: Unerschütterlich hält sich der Glaube an die Kraft des Mondes. Warum aber schauen wir so gebannt auf den Erdmond, den einzigen natürlichen Satelliten der Erde, den hellsten Himmelskörper am Nachthimmel, rund 380 000 Kilometer von uns entfernt, der die Erde seit 4,5 Milliarden Jahren begleitet? Mondforscher Bernd Brunner gibt eine Erklärung: „Es hilft vielleicht, sich vorzustellen, wie früher der Himmel aussah, bevor es elektrisches Licht gab. Die Sterne leuchteten viel intensiver. Der Mond war der hellste Punkt und nach der Sonne der zweithellste Himmelskörper überhaupt. Der Mond und sein Licht spielten für die Menschen bis vor etwa 200 Jahren auf jeden Fall eine viel größere Rolle. Als er die Nacht noch erleuchtete, war er der Herrscher.“ Doch auch heute noch hält sich der Mythos Mond hartnäckig: Millionen Deutsche kaufen fleißig Mondkalender und Mondratgeber mit Titeln wie „Fragen an den Mond“ oder „Mit dem Mond durchs Gartenjahr“. Brunner interpretiert dies dahingehend, dass die Menschen versuchen, dem Unplanbaren und Schicksalhaften einen Sinn zu verleihen. Dem Leben soll ein Teil seiner Unberechenbarkeit genommen werden.</div>
<div class="text-paragraph" data-para="D"><span class="para-tag">[Abschnitt D]</span> Mondwissen sei uraltes Wissen unserer Ahnen, argumentieren hingegen jene, die vom Einfluss des Mondes auf unser Dasein überzeugt sind. Und was die Ahnen über den Rhythmus der Natur zu wissen glaubten, wird von vielen nicht infrage gestellt. Diese schwören auf Mondkalender. Das sind Kalender, in denen die Mondphasen eines Jahres genau aufgelistet sind. In ihnen stecke schließlich das gesammelte Wissen von Generationen von Bauern, die den Wachstumszyklus auf den Feldern beobachteten. Diesem Argument kann auch der Autor dieser Zeilen etwas abgewinnen. Der Volkskundler Helmut Groschwitz ist anderer Meinung. Er fand im Mondglauben wenig Altüberliefertes. Auf die ersten Spuren von Mondkalendern ist er in spätmittelalterlichen Schriften gestoßen. Sie stammen aber nicht von Bauern, sondern von Ärzten. Diese gaben Ratschläge zum geeigneten Zeitpunkt, Blut abzuzapfen und andere medizinische Untersuchungen durchzuführen. Weitverbreitet waren diese Schriften aber nicht. Erst in der Romantik tauchen Mondregeln erneut auf und verbreiten sich Anfang des 20. Jahrhunderts wieder stärker.</div>
<div class="text-paragraph" data-para="E"><span class="para-tag">[Abschnitt E]</span> So skeptisch Wissenschaftler das Phänomen der Mondgläubigkeit auch sehen mögen – das Interesse an dem Himmelskörper ist nach wie vor sehr groß. Es gibt noch zahlreiche offene Fragen, die man weiterverfolgen sollte: Was wäre, wenn es den Mond nicht gäbe? Wie groß war wohl der Einfluss des Mondes auf die Entstehung des Lebens auf der Erde? Wäre ohne die Gezeiten, die vom Mond bestimmt werden, das Leben aus dem Wasser aufs Land gekommen? Wären Pflanzen, Tiere und Menschen entstanden? Würde die Erde sich schneller drehen, wenn der Mond sie nicht bremsen würde? Wären bei stärkerer Umdrehung die Pflanzen, die Menschen kleiner? Und schließlich: Gäbe es uns überhaupt ohne den Mond?</div>`,
    questions: [
      { id: 7, text: 'In welchem Abschnitt gibt der Autor einen Deutungsversuch wieder?', uz: "Qaysi bo'limda muallif hodisani izohlashga (talqin qilishga) urinishni keltiradi?", ans: 'C', expl: "C bo'limida Oy tadqiqotchisi Bernd Brunnerning izohi («gibt eine Erklärung... Brunner interpretiert dies dahingehend...») keltirilgan." },
      { id: 8, text: 'In welchem Abschnitt möchte der Autor durch Fakten objektiv informieren?', uz: "Qaysi bo'limda muallif faktlar orqali xolis ma'lumot berishni xohlaydi?", ans: 'B', expl: "B bo'limida gravitatsiya va inson vaznining 0,000035% o'zgarishi kabi aniq ilmiy faktlar keltirilgan." },
      { id: 9, text: 'In welchem Abschnitt möchte der Autor zum Nachdenken anregen?', uz: "Qaysi bo'limda muallif o'ylab ko'rishga (mulohaza yuritishga) undaydi?", ans: 'E', expl: "E bo'limida «Was wäre, wenn es den Mond nicht gäbe?.. Gäbe es uns überhaupt ohne den Mond?» kabi savollar berilgan." },
      { id: 10, text: 'In welchem Abschnitt relativiert der Autor ein Forschungsergebnis?', uz: "Qaysi bo'limda muallif tadqiqot natijasini nisbiylashtiradi (ahamiyatini cheklaydi)?", ans: 'B', expl: "B bo'limida Ernst Zürcherning «Mondholz» tadqiqoti atigi 30 ta daraxtda o'tkazilgani («Die Aussagekraft dieser Untersuchung ist jedoch einzuschränken») aytiladi (D bo'limida esa Groschwitz dehqonlar afsonasini rad etadi)." },
      { id: 11, text: 'In welchem Abschnitt signalisiert der Autor Zustimmung?', uz: "Qaysi bo'limda muallif fikrga qo'shilishini bildiradi?", ans: 'D', expl: "D bo'limida: «Diesem Argument kann auch der Autor dieser Zeilen etwas abgewinnen» (B bo'limida esa «Dass der Mond auf die Erde einwirkt, ist unbestritten»)." },
      { id: 12, text: 'In welchem Abschnitt liefert der Autor eine Definition?', uz: "Qaysi bo'limda muallif ta'rif beradi?", ans: 'D', expl: "D bo'limida «Mondkalender»ga ta'rif beriladi: «Das sind Kalender, in denen die Mondphasen eines Jahres genau aufgelistet sind.»" }
    ]
  },
  lv3: VARIANT_18_READING.lv3,
  sp: {
    title: 'Warum Spielen Kinder schlau macht',
    titleUz: 'Nima uchun o‘yin o‘ynash bolalarni aqlli qiladi?',
    uzbekVocab: [
      { de: 'mit den Beinen strampeln', uz: 'oyoqlarini tipirchilatmoq (chaqaloq)' },
      { de: 'zurechtkommen in (+ Dat.)', uz: 'uddasidan chiqmoq / moslashib ketmoq' },
      { de: 'der Aufprall', uz: 'yerga urilish / zarba ovozi' },
      { de: 'der Zeitvertreib', uz: 'vaqt o‘tkazish / ermak' },
      { de: 'das Selbstvertrauen festigen', uz: 'o‘ziga ishonchni mustahkamlamoq' },
      { de: 'sich etwas abschauen', uz: 'boshqalardan ko‘rib o‘rganmoq' },
      { de: 'in die Rolle eines anderen schlüpfen', uz: 'boshqa birovning roliga kirmoq' },
      { de: 'das Einfühlungsvermögen (Empathie)', uz: 'hamdardlik / birovning holatini his qila olish qobiliyati' }
    ] as VocabItem[],
    text: `<p>Es ist <em>[0: etwas]</em>, was einfach so passiert. Jeder Mensch macht es, wenn er auf die Welt kommt, er kann nicht <strong>(25)</strong>: Er fängt an zu spielen. Auch wenn es nicht immer <strong>(26)</strong> aussieht: Mit den Beinen zu strampeln, nach einem Gegenstand zu greifen, Geräusche zu fabrizieren, all das sind Spiele, die dazu dienen, dass ein Kind sich ausprobiert, seine Welt entdeckt und lernt, darin <strong>(27)</strong>. Wenn ein Kind <strong>(28)</strong> seinen Löffel aus dem Hochstuhl fallen <strong>(29)</strong>, macht es das nicht, um die Eltern zu ärgern, sondern um Dinge herauszufinden und diese abzuspeichern: Kann man den <strong>(30)</strong> hören? Wie lange dauert es, bis man ihn hört? Oder geht der Gegenstand sogar dabei kaputt?</p>
<p>Trotzdem halten viele Erwachsene Spielen für etwas, was Kinder zum <strong>(31)</strong> machen, was aber wenig produktiv ist. Dabei ist Spielen in jedem Alter die Grundlage von allem, was man für den Rest <strong>(32)</strong> Lebens braucht. Menschenkinder müssen, wie übrigens auch Tiere, durch eigene Erfahrungen lernen. Sie beobachten und probieren <strong>(33)</strong>, wie man sich Nahrung sucht, wie man sich vor Gefahren schützt und wie man in der Gemeinschaft lebt. Die Struktur des Gehirns wird während der Kindheit dadurch geformt, <strong>(34)</strong> es Dinge bewältigt und Erfahrungen sammelt. Nebenbei wird auch das Selbstvertrauen <strong>(35)</strong>.</p>
<p>Um fit fürs Leben zu werden, <strong>(36)</strong> es also Freiräume, in denen Kinder sich selbst ausprobieren können. Beides ist wichtig: einerseits allein zu spielen, denn das <strong>(37)</strong> Konzentration und Kreativität. Aber andererseits auch das Spielen mit anderen Kindern, die <strong>(38)</strong> auch älter sein dürfen, denn dann kann man <strong>(39)</strong> etwas abschauen. Auch Rollenspiele sind wichtig für die Entwicklung, sind sie <strong>(40)</strong> ein soziales und emotionales Training. <strong>(41)</strong> die Rolle eines anderen zu schlüpfen bedeutet vor allem, sich <strong>(42)</strong> in eine andere Stimmung zu versetzen. So kann man Angst, Trauer und Wut besser verarbeiten und <strong>(43)</strong> gleichzeitig Einfühlungsvermögen für andere.</p>
<p>Da das alles wichtig ist, steht das Recht <strong>(44)</strong> spielen auch im Artikel 31 Absatz 1 der UN-Kinderrechtskonvention. Eltern, die trotzdem noch <strong>(45)</strong> sind, sollten die Sache so sehen: Spielen ist die Arbeit der Kinder. Und jede Arbeit muss <strong>(46)</strong> werden.</p>`,
    questions: [
      { id: 25, opts: ['anders', 'andere', 'anderen', 'anderes'], ans: 'anders', expl: "«er kann nicht anders» — u boshqacha qila olmaydi (tabiiy ravishda shunday qiladi)." },
      { id: 26, opts: ['dazu', 'dafür', 'dagegen', 'danach'], ans: 'danach', expl: "«danach aussehen» — shunga o'xshab ko'rinmoq." },
      { id: 27, opts: ['zurechtzumachen', 'zurechtzufinden', 'zurechtzukommen', 'zurechtzulegen'], ans: 'zurechtzukommen', expl: "«darin zurechtzukommen» — u yerda o'z yo'lini topib ketishni / eplashni («sich zurechtfinden» bo'lsa «sich» kerak bo'lardi)." },
      { id: 28, opts: ['fünfmal', 'fünf Mahl', 'fünf mal', 'fünfmahl'], ans: 'fünfmal', expl: "To'g'ri imlo: «fünfmal» (besh marta — qo'shib yoziladi)." },
      { id: 29, opts: ['ließ', 'lässt', 'lasse', 'lassen'], ans: 'lässt', expl: "«Wenn ein Kind ... fallen lässt» — Präsens 3-shaxs birlikda." },
      { id: 30, opts: ['Stoß', 'Aufprall', 'Druck', 'Schlag'], ans: 'Aufprall', expl: "«den Aufprall hören» — qoshiqning polga urilish ovozini eshitmoq." },
      { id: 31, opts: ['Zeitvertreib', 'Zeitmaß', 'Zeitpunkt', 'Zeitverlust'], ans: 'Zeitvertreib', expl: "«zum Zeitvertreib» — vaqt o'tkazish / ermak uchun." },
      { id: 32, opts: ['unseres', 'deines', 'ihres', 'seines'], ans: 'seines', expl: "«was man für den Rest seines Lebens braucht» — «man» olmoshining Genitiv shakli: «seines»." },
      { id: 33, opts: ['mit', 'an', 'aus', 'durch'], ans: 'aus', expl: "«probieren aus» (ausprobieren — sinab ko'rmoq)." },
      { id: 34, opts: ['weil', 'damit', 'dass', 'sodass'], ans: 'dass', expl: "«dadurch geformt, dass...» — shu orqali shakllanadiki..." },
      { id: 35, opts: ['gekräftigt', 'befestigt', 'bekräftigt', 'gefestigt'], ans: 'gefestigt', expl: "«das Selbstvertrauen wird gefestigt» — o'ziga ishonch mustahkamlanadi." },
      { id: 36, opts: ['brauchte', 'bräuchten', 'brauchen', 'braucht'], ans: 'braucht', expl: "«es braucht Freiräume» — shaxssiz ibora (bo'sh maydon/erkinlik kerak)." },
      { id: 37, opts: ['transportiert', 'bevorzugt', 'fördert', 'gewährt'], ans: 'fördert', expl: "«fördert Konzentration und Kreativität» — diqqat va ijodkorlikni rivojlantiradi." },
      { id: 38, opts: ['stumm', 'leise', 'ruhig', 'still'], ans: 'ruhig', expl: "«die ruhig auch älter sein dürfen» — bemalol kattaroq bo'lishi ham mumkin (modal yuklama)." },
      { id: 39, opts: ['uns', 'dir', 'ihm', 'sich'], ans: 'sich', expl: "«kann man sich etwas abschauen» — o'ziga ko'rib o'rganib olishi mumkin." },
      { id: 40, opts: ['sonst', 'aber', 'allerdings', 'doch'], ans: 'doch', expl: "«sind sie doch ein soziales Training» — inversiyali sabab jumlasida «doch» yuklamasi (axir ular...)." },
      { id: 41, opts: ['Zwischen', 'An', 'In', 'Unter'], ans: 'In', expl: "«In die Rolle eines anderen schlüpfen» — birovning roliga kirmoq." },
      { id: 42, opts: ['gefüllsmässig', 'Gefühls mäßig', 'Gefühlsmäßig', 'gefühlsmäßig'], ans: 'gefühlsmäßig', expl: "To'g'ri imlo: ravish kichik harf va 'ß' bilan «gefühlsmäßig»." },
      { id: 43, opts: ['entwickelten', 'entwickeln', 'entwickelt', 'entwickelte'], ans: 'entwickelt', expl: "«So kann man ... verarbeiten und entwickelt gleichzeitig...» (man -> 3-shaxs birlik: entwickelt)." },
      { id: 44, opts: ['zu', 'am', 'für', 'mit'], ans: 'zu', expl: "«das Recht zu spielen» — o'ynash huquqi." },
      { id: 45, opts: ['skeptisch', 'sceptisch', 'skepptisch', 'skeptich'], ans: 'skeptisch', expl: "To'g'ri imlo: «skeptisch» (shubha bilan qaraydigan)." },
      { id: 46, opts: ['sanktioniert', 'integriert', 'kopiert', 'respektiert'], ans: 'respektiert', expl: "«Und jede Arbeit muss respektiert werden» — hurmat qilinishi kerak." }
    ]
  }
};

// ============================================================================
// VARIANT 25 (PDF 25 — ♧ الاحتمال الخامس والعشرون ♧)
// ============================================================================
export const VARIANT_25_READING = {
  pdfSource: '/assets/aistudio/25_e38aa2c5.pdf',
  lv1: VARIANT_19_READING.lv1,
  lv2: VARIANT_18_READING.lv2,
  lv3: {
    title: 'Schafe im Einsatz: Neuer Trend – Rasenmähen mal anders',
    titleUz: 'Qo‘ylar xizmatda: Yangi trend — maysa o‘rishning o‘zgacha usuli',
    uzbekVocab: [
      { de: 'das Skuddenschaf', uz: 'Skudden zotli qadimiy mitti qo‘y turi' },
      { de: 'vom Aussterben bewahren', uz: 'qirilib / yo‘qolib ketishdan asrab qolmoq' },
      { de: 'der Kuh-Pate', uz: 'sigirga homiylik qiluvchi shaxs' },
      { de: 'der Einheitspreis', uz: 'yagona standart narx' },
      { de: 'zutraulich', uz: 'odamga tez o‘rganadigan, cho‘chimaydigan (yuvosh)' },
      { de: 'schwer zugängliches Gelände', uz: 'texnika kirishi qiyin bo‘lgan noqulay/tik joylar' }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: "1-xatboshi (Savollar 13–17: Ben va Natali Shnayderning «Miet-Mäh» loyihasi)",
        uz: "Ben va Natali Shnayder (Ben und Natalie Schneider) maysazorlarni o'rish uchun qo'ylarni ijaraga berishadi va ularning asosiy mijozlari birinchi navbatda korxonalardir (Unternehmen) [13-savol: R]. Ben mustaqil ishini boshlaganida Boltiqbo'yi chorvadorlaridan emas, balki mahalliy/nemis chorvadoridan «Skudden» (Boltiqbo'yidan kelib chiqqan zot) qo'ylarini olgan [14-savol: F]. Shnayderlar yo'qolib borayotgan ushbu zotni ko'paytirishga hissa qo'shishsa-da, bu tur aynan ular tufayli qirilib ketishdan saqlab qolindi deyish xato [15-savol: F]. Shuningdek, ularning fermasida «sigir homiysi» (Kuh-Pate) bo'lganlar sigirlarni parvarishlashda bevosita yordam berishlari mumkin [16-savol: R]. Narxlar esa maydonning murakkabligi va masofaga qarab individual hisoblanadi, hamma uchun bir xil standart narx (Einheitspreis) yo'q [17-savol: F]."
      },
      {
        label: "2-xatboshi (Savollar 18–24: Urs Byuler, tik qiyaliklar va Kristian Petersen)",
        uz: "Cho'ponlar va qo'ylar bugun film yoki komiks qahramoni sifatida mashhurligi haqida matnda hech narsa yo'q [18-savol: X]. Tadbirkor Urs Byuler (Urs Bühler) qo'ylarni birinchi navbatda atrof-muhitni asrash uchun emas, balki moliyaviy tejamkorlik va mijozlar e'tiborini tortish uchun ijaraga oladi [19-savol: F]. Ben Shnayderning qo'ylari qanchalik qo'lga o'rgangani (zutraulich) haqida matnda ma'lumot berilmagan [20-savol: X]. Ayniqsa texnika kirishi qiyin bo'lgan tik va noqulay joylarda (schwer zugängliches Gelände) o't o'rish uchun qo'ylardan foydalanish juda qulaydir [21-savol: R]. Kristian Petersen (Christian Petersen) esa o'z qo'ylarini ular uchun shaxsiy o'tloq maydonlari yo'qligi sababli ijaraga beradi [22-savol: R] va yaqin kelajakda qo'ylari sonini (Tierbestand) yanada ko'paytirishni rejalashtirmoqda [23-savol: R]. Matnga eng mos sarlavha: «Neuer Trend: Rasenmähen mal anders» [24-savol: C]."
      }
    ] as ParagraphTranslation[],
    text: `<p>Ben und Natalie Schneider haben ein ungewöhnliches Geschäftsmodell entwickelt: Sie vermieten Schafe als biologische Rasenmäher. Zu ihren Kunden gehören in erster Linie Unternehmen, Kommunen und Solarparkbetreiber, die große Grünflächen pflegen lassen müssen. Begonnen hat alles mit einigen Skuddenschafen – einer alten, ursprünglich aus dem Baltikum stammenden Schafrasse, die auf der Roten Liste der bedrohten Nutztierrassen steht, jedoch nicht allein dank Familie Schneider vor dem Aussterben bewahrt wurde. Neben der Schafvermietung bieten die Schneiders auch Kuh-Patenschaften an: Als Kuh-Pate darf man auf dem Hof bei der Versorgung der Kühe aktiv mithelfen. Einheitspreise gibt es bei den Schneiders nicht, da je nach Gelände, Zaunbau und Anfahrtsweg unterschiedliche Zusatzkosten anfallen können.</p>
<p>Auch der Unternehmer Urs Bühler mietet regelmäßig Schafe zum Rasenmähen für sein Firmengelände – allerdings weniger aus reinem Umweltschutzgedanken, sondern vor allem, weil die tierischen Helfer deutlich günstiger sind als herkömmliche Landschaftsgärtner und zudem ein hervorragender Blickfang für Kunden sind. Besonders in schwer zugänglichem, steilem Gelände oder zwischen Solarmodulen bietet es sich an, Schafe zum Mähen einzusetzen.</p>
<p>Ein weiterer Anbieter ist Christian Petersen: Er vermietet seine Schafe vor allem deshalb an Garten- und Grundstücksbesitzer, weil er selbst nicht über eigene Grasflächen für die Tiere verfügt. Da die Nachfrage nach den vierbeinigen Rasenmähern stetig wächst, möchte Christian Petersen seinen Tierbestand in nächster Zeit weiter ausbauen.</p>`,
    questions: [
      { id: 13, text: 'Zu den Kunden von Ben und Natalie Schneider gehören in erster Linie Unternehmen.', uz: "Ben va Natali Shnayderning mijozlari qatoriga birinchi navbatda korxonalar kiradi.", ans: 'R', expl: "1-xatboshida tasdiqlangan." },
      { id: 14, text: 'Zu Beginn seiner Selbstständigkeit hat Ben Schneider bei baltischen Züchtern zwei Schafe erworben.', uz: "Mustaqil faoliyatini boshlaganida Ben Shnayder Boltiqbo'yi chorvadorlaridan ikkita qo'y sotib olgan.", ans: 'F', expl: "Skudden zoti asli Boltiqbo'yidan kelib chiqqan bo'lsa-da, u qo'ylarni Boltiqbo'yi chorvadorlaridan sotib olmagan." },
      { id: 15, text: 'Dank Familie Schneider konnte das Skuddenschaf vor dem Aussterben bewahrt werden.', uz: "Shnayderlar oilasi sharofati bilan Skudden qo'y zoti qirilib ketishdan saqlab qolindi.", ans: 'F', expl: "Ular bu zotni boqishadi, ammo butun zotni aynan ular qutqarib qoldi deyish xato." },
      { id: 16, text: 'Als Kuh-Pate darf man bei der Versorgung von Kühen mithelfen.', uz: "«Sigir homiysi» sifatida sigirlarni parvarishlashda yordam berish mumkin.", ans: 'R', expl: "1-xatboshida tasdiqlangan." },
      { id: 17, text: 'Die Schneiders haben für ihre Kunden Einheitspreise, sodass keine Zusatzkosten anfallen können.', uz: "Shnayderlarda mijozlar uchun yagona standart narxlar belgilangan, shuning uchun qo'shimcha xarajatlar chiqmaydi.", ans: 'F', expl: "Maydon va masofaga qarab narxlar farq qiladi va qo'shimcha xarajatlar bo'lishi mumkin." },
      { id: 18, text: 'Schäfer und Schafe sind heute auch als Film- und Comicfiguren beliebt.', uz: "Cho'pon va qo'ylar bugungi kunda film va komiks qahramonlari sifatida ham mashhur.", ans: 'X', expl: "Matnda film va komikslar haqida ma'lumot yo'q." },
      { id: 19, text: 'Urs Bühler mietet Schafe zum Rasenmähen, weil er die Umwelt schonen möchte.', uz: "Urs Byuler atrof-muhitni asrashni xohlagani uchun maysa o'rishga qo'ylarni ijaraga oladi.", ans: 'F', expl: "U ekologiyadan ko'ra ko'proq iqtisodiy foyda va mijozlar e'tiborini tortish uchun qo'ylarni ijaraga oladi." },
      { id: 20, text: 'Ben Schneider hat viele Schafe, die sehr zutraulich geworden sind.', uz: "Ben Shnayderning odamga juda o'rganib qolgan (yuvosh) ko'plab qo'ylari bor.", ans: 'X', expl: "Qo'ylarning yuvosh bo'lib qolgani haqida matnda aytilmagan." },
      { id: 21, text: 'Besonders in schwer zugänglichem Gelände bietet es sich an, Schafe zum Mähen einzusetzen.', uz: "Ayniqsa borish qiyin bo'lgan joylarda o't o'rish uchun qo'ylardan foydalanish juda maqsadga muvofiqdir.", ans: 'R', expl: "2-xatboshi oxirida tasdiqlangan." },
      { id: 22, text: 'Christian Petersen vermietet seine Schafe, weil er nicht über eigene Grasflächen für sie verfügt.', uz: "Kristian Petersen qo'ylari uchun o'z o'tloq maydonlariga ega bo'lmagani sababli ularni ijaraga beradi.", ans: 'R', expl: "3-xatboshida tasdiqlangan." },
      { id: 23, text: 'Christian Petersen möchte seinen Tierbestand in nächster Zeit erweitern.', uz: "Kristian Petersen yaqin vaqt ichida chorvasi sonini kengaytirmoqchi.", ans: 'R', expl: "3-xatboshi oxirida tasdiqlangan." },
      {
        id: 24,
        text: 'Welche der Überschriften a, b oder c passt am besten zum Text?',
        uz: "Qaysi sarlavha matnga eng mos keladi?",
        opts: [
          'a) Raus auf die Wiese – Berufswunsch Schäfer',
          'b) Die erstaunliche Karriere einer uralten Schafrasse',
          'c) Neuer Trend: Rasenmähen mal anders'
        ],
        ans: 'C',
        expl: "Matn maysa o'rishda qo'ylarni ijaraga olish trendi haqida («Neuer Trend: Rasenmähen mal anders»)."
      }
    ]
  },
  sp: VARIANT_24_READING.sp
};

// ============================================================================
// VARIANT 26 (PDF 26 — ♧ الاحتمال السادس والعشرون ♧)
// ============================================================================
export const VARIANT_26_READING = {
  pdfSource: '/assets/aistudio/26_714937a0.pdf',
  lv1: VARIANT_16_READING.lv1,
  lv2: {
    title: 'Selbermachen als Trend',
    titleUz: "O'z qo'li bilan yasash («Do it yourself») trend sifatida",
    uzbekVocab: [
      { de: 'Hochkonjunktur haben', uz: 'eng gullab-yashnagan / urfga kirgan davrni boshdan kechirmoq' },
      { de: 'dilettantisch', uz: 'havaskorona / noaniq va uquvsiz tarzda' },
      { de: 'den Kopf freibekommen', uz: 'miyani chalg‘itib dam oldirmoq' },
      { de: 'einen Gang herunterschalten', uz: 'hovuridan tushmoq / tezlikni (mubolag‘ani) biroz pasaytirmoq' },
      { de: 'zusammengehören wie Hammer und Nagel', uz: 'bolg‘a va mixdek bir-biri bilan chambarchas bog‘liq bo‘lmoq' },
      { de: 'den Konsum ankurbeln', uz: 'iste’molni (savdoni) kuchaytirmoq / qizitmoq' },
      { de: 'das Sagen haben', uz: 'hukmron bo‘lmoq / qaror qabul qiluvchi bo‘lmoq' },
      { de: 'den Erfahrungsschatz anzapfen', uz: 'boy tajriba xazinasidan foydalanmoq' }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: 'Abschnitt A («Do it yourself» bumi va o‘quvchilarning roziligini izlash)',
        uz: "«O'zing yasa!» (do it yourself) shiori bugun avjiga chiqqan: hatto ko'cha chiroq ustunlariga ham to'qilgan kiyim kiydirilmoqda, oshpazlik bloglari esa tuzlangan karamni (Sauerkraut) uyda tayyorlashga chaqirmoqda. Buning uchun bankalar, sabzavot to'g'ragich, kurslar va kitoblar sotib olish hamda juda ko'p vaqt ajratish kerak. Muallif o'quvchilarga murojaat qilib, ularning qo'llab-quvvatlashini izlaydi: «Aziz o'quvchilar, bu holatda ishtiyoq biroz oshirib yuborilgan degan fikrga qo'shilasizmi?» [12-savol: A]."
      },
      {
        label: 'Abschnitt B (Muallifning shaxsiy pozitsiyasi: Supermarket va IKEA afzalligi)',
        uz: "Muallif o'z shaxsiy munosabatini ochiq bayon qiladi («Ja, ich gebe zu: Ich bin leicht zufriedenzustellen...»): unga supermarket mahsulotlari yoqadi, uyini bezatmoqchi bo'lsa yasab o'tirmaydi, balki mashhur shved mebel do'koniga (IKEA) boradi [10-savol: B]. Shu bilan birga, ishdan keyin o'z qo'li bilan nimadir yasash miyani dam oldirishini tan oladi, ammo buni «dunyoni qutqarish» deb ko'klarga ko'tarishlarini yoqtirmaydi."
      },
      {
        label: 'Abschnitt C (Chaqiriq va «bolg‘a bilan mix» o‘xshatishi)',
        uz: "Qo'l mehnati baxtni oshiradi, iqlimni qutqaradi va iste'molni kamaytiradi degan balandparvoz gaplarni eshitib, muallif ularga xitob qiladi (Appell): «Hovuringizdan tushing! (Schaltet mal einen Gang herunter!) Bu mavzuga hushyorroq qarash kerak» [9-savol: C]. Do'konlarning savdo aylanmasi shuni isbotlaydiki, qo'l mehnati (Heimwerken) va xarid qilish xuddi bolg'a va mix kabi bir-biriga chambarchas bog'liq («zusammengehören wie Hammer und Nagel») [7-savol: C — o'xshatish/taqqoslash]. Sanoat yarim tayyor mahsulotlar sotish orqali iste'molni kamaytirmaydi, balki yanada qizitadi."
      },
      {
        label: 'Abschnitt D (Neyrobiolog Gerald Xyuter tezisi — mutaxassis fikri)',
        uz: "Nega uzoq vaqt unutilgan qo'l mehnati yana trendga aylandi? Kun bo'yi kompyuter va virtual dunyoda o'tiradigan odam o'z qo'li bilan ushlab ko'rsa bo'ladigan real natijani qo'msaydi. Neyrobiolog Gerald Xyuterning (Gerald Hüther) tezisiga ko'ra, ish joyida ko'pchilik o'z mehnatining ahamiyatini his qilmay qo'ygan, uyda esa ular o'zlari xo'jayindir [8-savol: D — mutaxassis avtoritetiga tayanish]."
      },
      {
        label: 'Abschnitt E (Ijtimoiy tarmoqlardagi hamjamiyatlar va muallifning taxmini)',
        uz: "G'oya va namunalarni havaskorlar aynan ijtimoiy tarmoqlardan oladilar, bu esa yangi hamjamiyatlarni (Communitys) yuzaga keltiradi. Muallif taxmin qiladi: «Shunday qilib, odamlar shu yo'l bilan bir-biriga yaqinlashadi va birgalik ehtiyojini qondiradi deb bemalol taxmin qilish mumkin (Man könnte also durchaus annehmen, dass...)» [11-savol: E]. Oxir-oqibat gap uyda tuzlangan karamning mazaliroq chiqishida emas, balki bu haqda boshqalar bilan suhbatlasha olishdadir."
      }
    ] as ParagraphTranslation[],
    text: `<div class="text-paragraph" data-para="A"><span class="para-tag">[Abschnitt A]</span> Mach es selbst! Die bekannte Parole „do it yourself“ hat heute Hochkonjunktur. Vom Eierwärmer bis zur Stoffserviette muss alles individuell gestaltet sein. Mousepads, Türvorleger, Fahrradsitzbezüge werden bepinselt, geklöppelt und genäht – das oft fragwürdige Ergebnis ist dabei zweitrangig. Sogar Laternenstangen wird heutzutage Individualität mit einem Strickkleid verpasst. Selbermachen schone den Planeten und dämme den Massenkonsum ein, jubeln Aktivisten aus Stricknadelkreisen. Und wer sich auf der Höhe der Zeit bewegt, produziert sein Sauerkraut selbst. Das sei überhaupt nicht schwer, mache jede Menge Spaß und schmecke einfach viel besser, versprechen etliche Kochblogs. Ein bisschen Geld müsse man dafür natürlich aufwenden, die passenden Einmachgläser solle man kaufen, ein Gemüsehobel könne nicht schaden, auch Kurse und entsprechende Literatur würden sich lohnen ... Es scheint jedenfalls, als müsste man dafür viel Zeit einplanen. Würden Sie, liebe Leser, sich der Meinung anschließen, dass in diesem Fall die Begeisterung doch ein wenig übertrieben ist? Schon seit Jahren liegt Selbermachen im Trend, und ebenso lange muss man sich fragen, warum Leute freiwillig, dilettantisch und unter hohem Aufwand Dinge herstellen, die sie perfekt und gebrauchsfertig kaufen könnten. Wie etwa Sauerkraut aus der Dose – das findet man schließlich in jedem Lebensmittelgeschäft.</div>
<div class="text-paragraph" data-para="B"><span class="para-tag">[Abschnitt B]</span> Ja, ich gebe zu: Ich bin leicht zufriedenzustellen. Mir schmecken Produkte aus dem Supermarkt, und wenn ich meine Wohnung neu dekorieren möchte, fange ich nicht an zu basteln, sondern schaue mich bei einem bekannten schwedischen Möbelhändler um. Dennoch habe ich gar nichts dagegen einzuwenden, wenn andere Freude am Selbermachen haben, ich kann diesem Trend durchaus positive Seiten abgewinnen. Mit den eigenen Händen etwas herzustellen kann schließlich dazu beitragen, dass man sich entspannt und nach einem anstrengenden Arbeitstag den Kopf freibekommt. Und wer sich damit beschäftigt, selbst etwas herzustellen, vergeudet wenigstens nicht seine Zeit mit ziellosem Herumsurfen im Internet. Andererseits stört es mich aber gewaltig, wie sehr das Selbermachen heutzutage überhöht, ja quasi als Rettung der Welt verkauft wird.</div>
<div class="text-paragraph" data-para="C"><span class="para-tag">[Abschnitt C]</span> Das Heimwerken solle das Glücksempfinden erhöhen, die Entfremdung zwischen Mensch und Arbeit überwinden, dem Klima guttun und den Konsum eindämmen: Solche Behauptungen hört man immer wieder. Denjenigen, die so hohe Erwartungen haben, möchte man entgegenrufen: Schaltet mal einen Gang herunter! Man sollte dieses Thema wirklich etwas nüchterner betrachten. Ein Beispiel: Dass Selbermachen den Konsum reduziert, ist durchaus fraglich. Allein schon die Umsatzzahlen der entsprechenden Geschäfte belegen, dass Heimwerken und Kaufen zusammengehören wie Hammer und Nagel. Schließlich wird Geld ausgegeben für Dinge, die man braucht, um andere Dinge selbst zu produzieren. Dies reduziert weder Verbrauch noch Kosten. Und die Industrie hat den Trend natürlich schon lange erkannt und bietet zahlreiche Produkte in halbfertigem Zustand an. Man könnte also durchaus behaupten, dass der Konsum durch die Liebe zum Heimwerken nicht reduziert, sondern sogar angekurbelt wird.</div>
<div class="text-paragraph" data-para="D"><span class="para-tag">[Abschnitt D]</span> Doch warum ist das Heimwerken eigentlich zum Trend geworden, nachdem es lange Zeit gar nicht mehr gefragt war? Sicher ist: Wer im Beruf tagein, tagaus am Computer sitzt und sich oft in den virtuellen Welten des Internets und der sozialen Medien bewegt, sehnt sich irgendwann nach einem Ausgleich. Nach einer Gegenwelt, in der man mit den eigenen Händen etwas erschafft und sein Talent beweist. Farbe riechen, Holz spüren, Dinge sinnlich erfahren. Und am Ende des Tages hält man etwas in der Hand, was man anderen zeigen kann. Im Beruf, so eine These des Neurobiologen Gerald Hüther, spüren viele längst nicht mehr die Wichtigkeit ihres Tuns. Sie können dort kaum Einfluss nehmen. Zuhause aber haben sie das Sagen.</div>
<div class="text-paragraph" data-para="E"><span class="para-tag">[Abschnitt E]</span> Nicht immer reicht aber die eigene Fantasie aus, manchmal braucht man eben doch Vorbilder. Und diese finden sich ausgerechnet in den sozialen Netzwerken. Das mag zunächst wie ein Widerspruch klingen, denn gerade von diesen virtuellen Welten wünschen sich doch viele eine Auszeit. Dennoch: Ob sie etwas nähen oder ein neues Bett bauen wollen – online finden Bastler zu jedem Thema eine passende Anleitung, und man kann leicht den Erfahrungsschatz vieler Leute anzapfen. Durch den Austausch entstehen außerdem Communitys, Gemeinschaften. Man könnte also durchaus annehmen, dass die Menschen sich auf diese Weise näherkommen und ihr Bedürfnis nach Gemeinsamkeit ausleben können – auch dazu dienen schließlich Hobbys. Wenn man stolz Fotos von selbstgestrickten Pullis präsentiert und die selbstgebauten Regale von Freunden bewundert, ist dies vielleicht nur eine von vielen Möglichkeiten, anderen zu begegnen. Letztlich kommt es womöglich gar nicht darauf an, dass selbstgemachtes Sauerkraut besser schmeckt. Sondern darauf, dass man mit anderen darüber reden kann.</div>`,
    questions: [
      { id: 7, text: 'In welchem Abschnitt arbeitet die Autorin mit einem Vergleich?', uz: "Qaysi bo'limda muallif taqqoslash (o'xshatish) usulidan foydalanadi?", ans: 'C', expl: "C bo'limida: «dass Heimwerken und Kaufen zusammengehören wie Hammer und Nagel»." },
      { id: 8, text: 'In welchem Abschnitt argumentiert die Autorin mithilfe einer fremden Autorität?', uz: "Qaysi bo'limda muallif begona mutaxassis (avtoritet) yordamida dalil keltiradi?", ans: 'D', expl: "D bo'limida neyrobiolog Gerald Xyuter (Gerald Hüther) tezisiga tayaniladi." },
      { id: 9, text: 'In welchem Abschnitt formuliert die Autorin einen Appell?', uz: "Qaysi bo'limda muallif chaqiriq (xitob) ifodalaydi?", ans: 'C', expl: "C bo'limida: «Denjenigen, die so hohe Erwartungen haben, möchte man entgegenrufen: Schaltet mal einen Gang herunter!»" },
      { id: 10, text: 'In welchem Abschnitt legt die Autorin ihre persönliche Haltung dar?', uz: "Qaysi bo'limda muallif o'z shaxsiy munosabatini bayon etadi?", ans: 'B', expl: "B bo'limida: «Ja, ich gebe zu: Ich bin leicht zufriedenzustellen. Mir schmecken Produkte aus dem Supermarkt...»" },
      { id: 11, text: 'In welchem Abschnitt spricht die Autorin eine Vermutung aus?', uz: "Qaysi bo'limda muallif taxmin bildiradi?", ans: 'E', expl: "E bo'limida: «Man könnte also durchaus annehmen, dass die Menschen sich auf diese Weise näherkommen...»" },
      { id: 12, text: 'In welchem Abschnitt sucht die Autorin nach Zustimmung?', uz: "Qaysi bo'limda muallif o'quvchilarning roziligini / qo'llab-quvvatlashini izlaydi?", ans: 'A', expl: "A bo'limida: «Würden Sie, liebe Leser, sich der Meinung anschließen, dass in diesem Fall die Begeisterung doch ein wenig übertrieben ist?»" }
    ]
  },
  lv3: VARIANT_16_READING.lv3,
  sp: VARIANT_19_READING.sp
};

// ============================================================================
// VARIANT 27 (PDF 27 — ♧ الاحتمال السابع والعشرون ♧)
// ============================================================================
export const VARIANT_27_READING = {
  pdfSource: '/assets/aistudio/27_235aece7.pdf',
  lv1: VARIANT_16_READING.lv1,
  lv2: VARIANT_26_READING.lv2,
  lv3: VARIANT_17_READING.lv3,
  sp: VARIANT_16_READING.sp
};
