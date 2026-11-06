/**
 * Authentic telc Deutsch C1 Hochschule — Variants 34, 35, 36, 37, 38, 39
 * Extracted from 34_03fc600b.pdf, 35_7717d0b0.pdf, 36_f4a64230.pdf,
 * 37_c706dcd3.pdf, 38_bb851e7d.pdf, 39_bf109300.pdf
 * All Arabic explanations, vocabulary tables, paragraph translations, and keys translated into Uzbek.
 */

import { VocabItem, ParagraphTranslation, VARIANT_15_READING } from './variants14And15Data';
import { VARIANT_19_READING } from './variants19To20Data';
import { VARIANT_22_READING } from './variants21To27Data';
import { VARIANT_31_READING } from './variants28To33Data';

// ============================================================================
// VARIANT 34 (PDF 34 — { الاحتمال الرابع والثلاثون })
// ============================================================================
export const VARIANT_34_READING = {
  pdfSource: '/assets/aistudio/34_03fc600b.pdf',
  lv1: {
    ...VARIANT_22_READING.lv1,
    title: 'Der Fahrstuhl und seine Geschichte',
    options: [
      { key: 'A', text: 'Trotz dieser Rückschläge glaubte er fest an seine Idee.', uz: "Ushbu muvaffaqiyatsizliklarga qaramay, u o'z g'oyasiga qat'iy ishonardi. (Ortiqcha gap)" },
      { key: 'B', text: 'So fanden Archäologen in altrömischen Ruinen Überreste von Schächten, in denen Plattformen auf und ab fahren konnten.', uz: "Chunonchi, arxeologlar qadimgi Rim xarobalarida platformalar yuqori va pastga harakatlana olgan shaxta qoldiqlarini topishgan." },
      { key: 'C', text: 'Magnete sollen die Seile ersetzen, die Kabine wie eine Magnetschwebebahn in der Vertikalen auf und ab gleiten.', uz: "Magnitlar troslar o'rnini bosishi va kabina xuddi magnit yostiqchali poyezd kabi vertikal yo'nalishda yuqori va pastga sirg'alib yurishi kerak." },
      { key: 'D', text: 'Einfache Glocken oder Summer besorgten in diesen frühen Kabinen die Kommunikation über die Fahrtrichtung und demnächst anzusteuernde Haltestellen.', uz: "Ushbu dastlabki kabinalarda oddiy qo'ng'iroqlar yoki gudoklar harakat yo'nalishi va navbatdagi bekatlar haqida aloqani ta'minlagan." },
      { key: 'E', text: 'Dieses bahnbrechende Hochhausprojekt erforderte technische Neuerungen.', uz: "Ushbu inqilobiy ko'p qavatli bino loyihasi texnik yangiliklarni talab qildi. (Ortiqcha gap)" },
      { key: 'F', text: 'Die bequeme Fahrt im Aufzug muss mit langen Wartezeiten erkauft werden – und je mehr Fahrgäste, desto komplizierter die Berechnung der günstigsten Fahrwege.', uz: "Liftdagi qulay yurish uzoq kutish vaqtlari badaliga keladi — va yo'lovchilar qanchalik ko'p bo'lsa, eng qulay yo'nalishlarni hisoblash shunchalik murakkablashadi." },
      { key: 'G', text: 'All diesen Neuerungen zum Trotz ist der Fahrstuhl im Grunde selbst heutzutage noch eine ziemlich ineffiziente Sache.', uz: "Barcha ushbu yangiliklarga qaramay, lift aslida bugungi kunda ham ancha samarasiz narsadir." },
      { key: 'H', text: '1853 stellte er eine Fangvorrichtung vor, die bei einem Riss des Seils verhinderte, dass die Kabine ungebremst in die Tiefe stürzte.', uz: "1853-yilda u arqon uzilganda kabinaning tormozsiz pastga qulashini oldini oluvchi tutib qolish mexanizmini taqdim etdi." }
    ],
    answers: { '1': 'B', '2': 'H', '3': 'D', '4': 'F', '5': 'G', '6': 'C' },
    explanations: {
      '1': "Lift g'oyasining qadimiyligi B variantdagi qadimgi Rim shaxtalari misoli bilan isbotlanadi.",
      '2': "Elisha Graves Otisning xavfsizlik tormozi (Fangvorrichtung) H variantda bayon qilingan.",
      '3': "1900-yillardagi ilk elektr lift kabinalaridagi qo'ng'iroq va gudoklar (D).",
      '4': "XX asr boshidagi yangi muammo — kutish vaqti va marshrutlarni hisoblash murakkabligi (F).",
      '5': "Keyingi gapdagi «Eine Kabine pro Schacht» (har bir shaxtada bitta kabina) liftning hali ham samarasiz ekanini (G) izohlaydi.",
      '6': "Trosli liftlar o'rnini magnitli texnologiya (Magnetschwebebahn, C) egallashi."
    }
  },
  lv2: {
    title: 'Nachhaltiger Konsum – Durch Einkaufen die Welt verbessern?',
    titleUz: 'Barqaror iste’mol — xarid qilish orqali dunyoni yaxshilash mumkinmi?',
    uzbekVocab: [
      { de: 'aus allen Nähten platzen', uz: 'haddan tashqari to‘lib-toshib ketmoq («choklaridan so‘kilgudek bo‘lmoq»)' },
      { de: 'sich ein verblüfftes Stirnrunzeln nicht verkneifen können', uz: 'hayratdan peshonasi tirishishini (taajjubini) yashira olmaslik' },
      { de: 'das Umweltgewissen beruhigen', uz: 'ekologik vijdonini tinchlantirmoq' },
      { de: 'auf der Welle mitschwimmen', uz: 'ommaviy oqimga (trendga) qo‘shilib suzmoq' },
      { de: 'einen grünen Anstrich verpassen', uz: 'tashqi ko‘rinishiga «yashil» tus bermoq (ekologik qilib ko‘rsatmoq)' },
      { de: 'das Stopfei / die Socke stopfen', uz: 'paypoq yamash qolipi / yirtilgan paypoqni tikib yamamoq' },
      { de: 'da liegt der Hase im Pfeffer', uz: 'asosiy muammo (gapning ildizi) aynan shunda' },
      { de: 'das Umdenken', uz: 'fikrlash tarzini o‘zgartirish' }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: 'Abschnitt A (Elkening «eko-xaridlari» va muallifning hayrati)',
        uz: "Muallifning tanishi Elke shkafi kiyimga to'lib-toshgan bo'lishiga qaramay, organik paxta va vegan charmdan tikilgan yangi kiyimlar kolleksiyasini faxr bilan ko'rsatadi. Muallif o'z hayratini (erstaunt) yashira olmaydi: «Ekologik ongni yanada ko'proq xarid va iste'mol orqali namoyish etish g'alati (hayratlanarli) emasmi?» [11-savol: A]."
      },
      {
        label: 'Abschnitt B (BMT ekspertlari raqamlari va faktlari)',
        uz: "Muallif aniq raqam va faktlar (Zahlen und Fakten) bilan dalillaydi: BMT ekspertlar guruhi ma'lumotiga ko'ra, 1950-yillardan beri kiyim ishlab chiqarish va tashlab yuborish 5 baravar oshib, yiliga 50 million tonna chiqindi hosil qilmoqda; moda sanoati dunyo CO₂ chiqindilarining 10 foizini (xalqaro aviatsiya va dengiz kemachiligini qo'shib hisoblagandan ham ko'proq!) keltirib chiqaradi [12-savol: B]."
      },
      {
        label: 'Abschnitt C (Xulosa chiqarish va paypoq yamash maslahati)',
        uz: "Muallif xulosa (Schlussfolgerung) chiqaradi: «Ushbu ma'lumotlardan aniq xulosa chiqarish mumkinki, qo'shimcha xaridlar — mahsulot qanchalik barqaror bo'lmasin — tabiatga foydadan ko'ra ko'proq zarar keltiradi» [7-savol: C]. Shu bo'limda u amaliy maslahat (Rat) ham beradi: yangi narsa sotib olish o'rniga eski buyumlarni ta'mirlash va paypoqni igna-ip bilan yamab kiyish tavsiya etiladi [10-savol: C]."
      },
      {
        label: 'Abschnitt D (Muallifning shaxsiy pozitsiyasi)',
        uz: "Tushunmovchilik bo'lmasligi uchun muallif o'z shaxsiy munosabatini (persönliche Haltung) tushuntiradi: «Men o'zim adolatli ishlab chiqarilgan modani juda qadrlayman, arzon modani rad etaman va faqat ko'p yillar xizmat qiladigan sifatli kiyim sotib olaman» [9-savol: D]. Biroq ko'pchilik soppa-sog' buyumini tashlab, «dunyo qutqarish» uchun yangi bambuk tish cho'tkasi yoki A+++ kir yuvish mashinasi sotib oladi."
      },
      {
        label: 'Abschnitt E (Muallifning afsuslanishi va Nyu-York reklamasi paradoksi)',
        uz: "Muallif afsuslanish (Bedauern) bildiradi: «Biroq bu keng ko'lamli fikr o'zgarishiga olib keladiganga o'xshamaydi. Bu juda achinarli (Das ist schade), chunki iste'mol xulqimizni o'zgartirish vaqti allaqachon kelgan» [8-savol: E]. Nyu-Yorkdagi ustki kiyim firmasi «Bu kurtkani sotib olmang!» deb reklama berganida, keyingi o'n yillikda uning savdosi bir necha baravar oshib ketgan."
      }
    ] as ParagraphTranslation[],
    text: `<div class="text-paragraph" data-para="A"><span class="para-tag">[Abschnitt A]</span> Vor Kurzem hat mir eine gute Bekannte, nennen wir sie mal Elke, ihre neuesten Errungenschaften vorgeführt: eine ganze Kollektion nachhaltiger Kleidung, aus Bio-Baumwolle und veganem Leder. Nicht, dass sie unbedingt etwas Neues zum Anziehen gebraucht hätte: Ihr Kleiderschrank platzte schon vorher aus allen Nähten und in unserem Freundeskreis galt sie als ungekrönte Shopping-Königin. Aber Grün liege nun mal im Trend, versicherte mir Elke. Ich muss gestehen, dass ich mir ein verblüfftes Stirnrunzeln nicht verkneifen konnte, als sie mir stolz ihre neuesten Must-haves vorführte. Ist es nicht verwunderlich, dass ausgerechnet durch noch mehr Konsum Umweltbewusstsein demonstriert werden soll? Wie dem auch sei: Nachhaltige Produkte sind zurzeit ziemlich gefragt. Den Kunden beschert dieser Trend ein reines Gewissen sowie ein gutes Gefühl, wenn sie mit dem jeweils angesagtesten Teil aus der Umwelt- und Bio-Produktion auffallen. Natürlich profitieren auch Unternehmen davon, wenn sie auf der Welle des nachhaltigen Konsums mitschwimmen.</div>
<div class="text-paragraph" data-para="B"><span class="para-tag">[Abschnitt B]</span> Doch wie kann Konsum überhaupt umweltbewusst sein? Ist dies nicht per se ein Widerspruch? Mit jedem Kauf steigt bekanntlich der Ressourcenverbrauch. Eine Expertengruppe der Vereinten Nationen stellte fest, dass kaum genutzte und schnell wieder entsorgte Waren die Umwelt noch weitaus stärker belasten als Billigflieger. Beispiel Kleidung: Seit den 1950er-Jahren stiegen Herstellung, Kauf und Entsorgung von Klamotten um das Fünffache. Diese Kleidungsstücke türmen sich jährlich zu einem 50-Millionen-Tonnen-Textilienberg auf – von dem so gut wie nichts recycelt wird. Für die Herstellung von Textilien werden große Mengen Wasser sowie Flächen zum Anbau von Baumwolle und anderen Fasern benötigt. Zudem soll die Modebranche 10 Prozent der weltweiten CO₂-Emissionen verursachen – mehr als internationale Luftfahrt und Seeschifffahrt zusammen.</div>
<div class="text-paragraph" data-para="C"><span class="para-tag">[Abschnitt C]</span> Egal, wie man es dreht oder wendet: Aus diesen Informationen lässt sich eindeutig ableiten, dass zusätzliche Käufe – so nachhaltig die Produkte auch sein mögen – der Umwelt in jedem Fall eher schaden als nutzen. Es gibt also bessere Wege, einen ökologischen Beitrag zu leisten, als dem Kaufrausch einfach nur einen grünen Anstrich zu verpassen. Empfehlenswert ist es vor allem, den Konsum zu reduzieren. So kann man jedem, der es ernst meint mit der Nachhaltigkeit, ans Herz legen, Sachen auszubessern statt neu anzuschaffen. Es gilt, das Stopfei wieder in die Hand zu nehmen, es in die kaputte Socke zu versenken, das Garn durch die Nadel zu fädeln und das Loch am großen Zeh zu stopfen. Denn rund um das Loch ist die Socke immer noch gut. Der Umgang mit Nadel und Faden sollte daher unbedingt zum nachhaltigen Lebensstil dazugehören.</div>
<div class="text-paragraph" data-para="D"><span class="para-tag">[Abschnitt D]</span> Damit keine Missverständnisse aufkommen: Natürlich ist gegen den Kauf umweltfreundlich produzierter Waren nichts einzuwenden – sofern dieser wirklich notwendig ist. Ich selbst lege großen Wert auf fair produzierte Mode, lehne Billigmode ab und kaufe ausschließlich hochwertige Kleidung, die mir auch in einigen Jahren noch Freude bereiten wird. Aber viele brauchen kein Loch, um neue Socken zu kaufen, und dort liegt der Hase im Pfeffer. Sie denken eher daran, die Welt mit Socken aus ökologisch-veganer Hanfwolle zu retten, indem sie ihre noch neuen Hightech-Kunststofffaser-Socken aus dem Profisportbereich ersetzen. Es kann auch eine neue Bambus-Zahnbürste sein im Tausch gegen das Kunststoff-Exemplar. Oder Bioschuhe statt der noch guten alten. Eine Gießkanne aus Zinkblech, ein neues Fahrrad, weil es heutzutage ein Lastenfahrrad sein muss, eine neue Waschmaschine der Energieeffizienzklasse A+++ statt der vorhandenen, die ein paar Watt mehr verbraucht.</div>
<div class="text-paragraph" data-para="E"><span class="para-tag">[Abschnitt E]</span> Immerhin, bei den Unternehmen ist inzwischen die Erkenntnis angekommen, dass exzessivem Konsum nicht das allerbeste Image anhaftet. Doch leider sieht es nicht so aus, als würde dies zu einem breiten Umdenken führen. Das ist schade, schließlich ist es allerhöchste Zeit, dass wir anfangen, unser Konsumverhalten zu ändern. Stattdessen nutzen einige Hersteller sogar das schlechte Gewissen, das überflüssige Käufe oftmals begleitet, um ihr Geschäft anzukurbeln. Ein Beispiel aus New York illustriert dies deutlich: Eine Firma, die Outdoor-Kleidung verkauft, riet dazu, diese nicht zu kaufen. In ihrer allerersten Anzeige brachte die Firma das ganze Konsum-Dilemma exakt auf den Punkt: „Kauf diese Jacke nicht. Kauf nicht, was du nicht brauchst.“ Was geschah? In der folgenden Dekade vervielfachte sie ihren Umsatz.</div>`,
    questions: [
      { id: 7, text: 'In welchem Abschnitt zieht die Autorin eine Schlussfolgerung?', uz: "Qaysi bo'limda muallif xulosa chiqaradi?", ans: 'C', expl: "C bo'limida: «Aus diesen Informationen lässt sich eindeutig ableiten, dass zusätzliche Käufe ... der Umwelt in jedem Fall eher schaden als nutzen.»" },
      { id: 8, text: 'In welchem Abschnitt äußert die Autorin Bedauern?', uz: "Qaysi bo'limda muallif afsuslanish bildiradi?", ans: 'E', expl: "E bo'limida: «Doch leider sieht es nicht so aus, als würde dies zu einem breiten Umdenken führen. Das ist schade...»." },
      { id: 9, text: 'In welchem Abschnitt erläutert die Autorin ihre persönliche Haltung?', uz: "Qaysi bo'limda muallif o'z shaxsiy pozitsiyasini tushuntiradi?", ans: 'D', expl: "D bo'limida: «Ich selbst lege großen Wert auf fair produzierte Mode, lehne Billigmode ab und kaufe ausschließlich hochwertige Kleidung...»." },
      { id: 10, text: 'In welchem Abschnitt gibt die Autorin einen Rat?', uz: "Qaysi bo'limda muallif maslahat beradi?", ans: 'C', expl: "C bo'limida: «Empfehlenswert ist es vor allem, den Konsum zu reduzieren. So kann man jedem ... ans Herz legen, Sachen auszubessern statt neu anzuschaffen.»" },
      { id: 11, text: 'In welchem Abschnitt zeigt sich die Autorin erstaunt?', uz: "Qaysi bo'limda muallif hayratlanadi?", ans: 'A', expl: "A bo'limida: «dass ich mir ein verblüfftes Stirnrunzeln nicht verkneifen konnte... Ist es nicht verwunderlich, dass...»." },
      { id: 12, text: 'In welchem Abschnitt argumentiert die Autorin mit Zahlen und Fakten?', uz: "Qaysi bo'limda muallif raqamlar va faktlar bilan dalil keltiradi?", ans: 'B', expl: "B bo'limida BMT tadqiqoti, 5 baravar o'sish, 50 mln tonna to'qimachilik chiqindisi va 10% CO2 chiqindilari keltirilgan." }
    ]
  },
  lv3: {
    title: 'Wider die Currywurst – Uni-Mensen setzen auf Qualität',
    titleUz: 'Karrivurstga qarshi — universitet oshxonalari (Mensa) sifatga tayanmoqda',
    uzbekVocab: [
      { de: 'mäkeln über (+ Akk.)', uz: 'injiqlik qilib nolimoq, kamchilik topmoq' },
      { de: 'was das Zeug hält', uz: 'bor kuchi bilan, tinimsiz' },
      { de: 'den Speiseplan austüfteln', uz: 'taomnomani puxta ishlab chiqmoq' },
      { de: 'das EDV-System', uz: 'elektron ma’lumotlarni qayta ishlash (kompyuter) tizimi' },
      { de: 'subventioniert werden', uz: 'davlat tomonidan subsidiyalanmoq (moliyaviy qo‘llab-quvvatlanmoq)' },
      { de: 'sich penibel in die Töpfe gucken lassen', uz: 'qozonlarigacha sinchiklab tekshirtirishga ruxsat bermoq' }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: '1–3-xatboshilar (Gamburg universiteti oshxonasi va fakultetlarga qarab taom tanlash)',
        uz: "Tush payti Gamburg universiteti oshxonasida (Mensa) yuzlab talabalar navbatda turadi; ba'zilari ovqatdan nolishadi (mäkeln) va mos taom topa olmaydi [13-savol: R]. Oshxona rahbari Udo Klayn va Mixael Gradtkening aytishicha, menyu bir kun oldin emas, balki haftalar oldin puxta rejalashtiriladi [14-savol: F]. Taom tanlashda o'quv yo'nalishi ham rol o'ynaydi: ayollar ko'proq sog'lom ovqat tanlasa, muhandislik va texnika institutlari yonidagi oshxonalarda talabalar eng ko'p Currywurst va shnitsel yeyishadi [15-savol: R]."
      },
      {
        label: '4–6-xatboshilar (EDV tizimi, yetkazib beruvchilar nazorati va mahalliy mahsulotlar)',
        uz: "Kerakli mahsulot miqdorini xodimlar qo'lda hisoblamaydi, balki maxsus kompyuter (EDV) tizimi aniqlab, buyurtmani avtomatik jo'natadi [16-savol: F]. Yetkazib beruvchi korxonalar oziq-ovqat kimyogarlari tomonidan muntazam va qat'iy tekshiriladi [17-savol: F]. Biroq barcha mahsulotlarni yaqin atrofdan (mintaqadan) sotib olishning imkoni yo'q, chunki mahalliy fermerlar bunday ulkan hajmni yetkazib bera olmaydi [18-savol: R] (bio-dehqonlar ulushi oshayotgani haqida esa matnda aytilmagan [19-savol: X])."
      },
      {
        label: '7–9-xatboshilar (Subsidiyalar va DGE ovqatlanish tavsiyalari)',
        uz: "Gamburg oshxonasida narxlar 1998-yildan beri oshirilmagan, chunki ular davlat subsidiyalari va talabalarning ijtimoiy badallari hisobiga qo'llab-quvvatlanadi [20-savol: R]. Arzon tushlik ortida aniq ilm-fan turganini ko'pchilik talabalar bilmaydi («ist den meisten Studenten dabei keineswegs bewusst») [21-savol: F]. Germaniya Ovqatlanish Jamiyati (DGE) 733 kaloriyalik tushlik bo'yicha tavsiyalar (Empfehlungen) ishlab chiqqan — bu majburiy qonun emas, balki sifat logotipi olish uchun ixtiyoriy me'yordir [22-savol: F]. Restoran oshpazlari bilan moslashuvchanlik solishtirilmagan [23-savol: X]."
      }
    ] as ParagraphTranslation[],
    text: `<p>Gutes Essen ist auch an den Unis kein kurzfristiger Trend mehr: Viele Menschen achten darauf, dass ihre Produkte aus biologischem Anbau stammen. Und setzen zusätzlich auf Qualitätsstandards und Gütesiegel.</p>
<p>Mittags um zwölf in der Hamburger Mensa: Hunderte Studenten stehen in langen Warteschlangen, um sich Steaks, Pommes oder Pasta abzuholen. Einige mäkeln über das Essen, finden nicht das passende Gericht. Und ahnen dabei gar nicht, wie viel Aufwand und Koordination eigentlich hinter jeder Mahlzeit steckt. „Schon morgens um sieben treffen wir uns zur ersten Besprechung“, sagt Mensaleiter Udo Klein, „und dann wird gekocht, was das Zeug hält.“ Schließlich müssen einige Hundert Kilogramm Nahrungsmittel durch die Töpfe und Pfannen, bis pünktlich um elf Uhr in der Hauptmensa auf dem Uni-Campus das Essen für rund 3500 hungrige Studenten in den Wärmewannen steht. „Dann sind die Köche aber noch längst nicht fertig“, sagt Udo Klein, „wir bereiten ja alles frisch zu.“ Denn auch die Gäste, die erst kurz vor Schluss in die Mensa kommen, wollen ja noch ein knusprig gebratenes Schnitzel essen. Und so geht es in der Küche hektisch zu. An einem ganz gewöhnlichen Tag brutzeln die Köche rund 1200 Currywürste, 600 Steaks und 500 Wok-Gerichte. Dazu kommen je 500 Portionen Nudeln und Suppe. Den Speiseplan tüfteln die Mensaleiter schon Wochen vorher aus. Schließlich müssen sie bis zum Verkaufstag einwandfreie Ware besorgt haben – da reicht es nicht, einen Tag vorher mit einem Einkaufszettel durch die Großmärkte zu schlendern. „Die Planung des Essens ist unheimlich komplex“, sagt Michael Gradtke, der für die 13 Hamburger Mensen und ihre 170 Mitarbeiter verantwortlich ist.</p>
<p>Das fängt schon bei den Vorlieben der Studenten an. „Für jeden Tag bieten wir unseren zwölf Mensachefs verschiedene Gerichte an, aus denen sie ihre Speisekarte zusammenstellen können“, sagt Gradtke. Welche ausgewählt werden, hängt davon ab, wie sich die Kundschaft überhaupt zusammensetzt. „Frauen achten eher auf gesunde Ernährung“, hat der Mensaleiter beobachtet. Liegt eine Mensa jedoch in der Umgebung von ingenieurwissenschaftlichen und technischen Instituten, müssen die Verantwortlichen umdenken. „Diese Studenten essen nämlich am liebsten Currywurst und Schnitzel.“</p>
<p>Haben sich die Mensaleiter für ihre Gerichte entschieden, geht der Einkauf los. Und auch hier sind einige Feinheiten zu beachten. Ein EDV-System ermittelt die genauen Mengen und verschickt die Bestellungen automatisch an die Lieferanten. Die Mensen haben dabei exakte Vorstellungen davon, wie etwa ein Stück Fleisch aussehen soll. Zum Beispiel beim Gulasch: Die Stücke müssen an den Kanten jeweils exakt zwei Zentimeter messen. Wichtig ist zudem, wie hoch der Fettanteil ist und von welchem Teil des Tieres das Fleisch kommt. „Auf diese Weise können wir garantieren, dass wir nur einwandfreie Produkte verwerten“, sagt Gradtke. Deshalb müssen auch die Betriebe, die die Mensen beliefern, eine Reihe von Qualitätsstandards einhalten. „Grundsätzlich unterliegt die Warenlieferung einer strengen Kontrolle“, sagt Birgit Bornemann, Geschäftsführerin des Studentenwerks Osnabrück – dessen Mensa in diesem Jahr Sieger des UNICUM-Wettbewerbs ‚Mensa des Jahres‘ wurde. „Wir arbeiten grundsätzlich nur mit Partnern zusammen, die über die erforderlichen Qualifikationen verfügen und bei denen wir nachvollziehen können, woher die Produkte stammen.“</p>
<p>Die Betriebe benötigen eine Zertifizierung. Das heißt, dass sie in regelmäßigen Abständen von Lebensmittelchemikern kontrolliert werden. Die Wissenschaftler analysieren dabei alle Zutaten, die für die Herstellung der Mahlzeiten benötigt werden. Durch dieses Vorgehen gelingt es den Unternehmen, gegenüber den Mensen ihre hohen Standards nachzuweisen. Ein Aufwand, der sich rechnet, denn die studentischen Kantinen nehmen große Warenmengen ab.</p>
<p>Immer mehr Mensen achten außerdem darauf, dass die Lebensmittel von Anbietern aus der Region kommen – um zu garantieren, dass täglich frisches Essen auf dem Tablett der Studenten landet. „Leider kann das nicht bei allen Produkten gewährleistet werden“, sagt Birgit Bornemann vom Osnabrücker Studentenwerk. „Manche Anbieter können solche großen Mengen einfach nicht bewältigen.“ Und so kooperieren viele Studentenwerke, um in Sammelbestellungen Nudeln, Reis oder Öl zu beschaffen. Eines hat dabei jedoch immer oberste Priorität: Die Qualität muss bei allen Lebensmitteln stimmen. „Wir legen schon lange Wert auf gesunde Ernährung“, sagt Achim Meyer auf der Heyde, Generalsekretär des Deutschen Studentenwerks. „Viele Studentenwerke vor Ort achten etwa darauf, dass ihre Produkte aus biologischem Anbau stammen.“ Das bedeutet aber nicht, dass gesunde Ernährung ausschließlich mit Bio-Produkten möglich ist – denn vor allem muss das Essen ja auch immer noch bezahlbar bleiben.</p>
<p>Gekochter Tafelspitz mit Bouillonkartoffeln und Brunnenkressecreme für 3,35 Euro, sieben Köstlichkeiten aus dem Wok für 2,10 Euro oder Hähnchenbrust mit Estragonsauce und Lauchrisotto sowie Romanesco-Röschen für 1,80 Euro – das Essen in der Hamburger Mensa hört sich nicht nur lecker an, sondern ist auch unschlagbar preiswert. „Seit 1998 haben wir die Preise nicht erhöht“, sagt Mensaleiter Michael Gradtke, „allerdings ist auch klar: Wenn wir nicht subventioniert würden, könnten wir diese Preise nicht halten.“ Die finanzielle Grundausstattung stammt unter anderem aus den Sozialbeiträgen der Studierenden – deswegen müssen die Gäste auch immer mal wieder ihren Studentenausweis vorzeigen.</p>
<p>Dass hinter ihrem preiswerten Mittagessen auch exakte Wissenschaft steht, ist den meisten Studenten dabei keineswegs bewusst. So hat die Deutsche Gesellschaft für Ernährung (DGE) Empfehlungen für die ‚Gemeinschaftsverpflegung Mensa‘ für 19- bis 24-Jährige herausgebracht. Ein Mittagessen sollte demnach optimalerweise 733 Kalorien enthalten. Und genau definiert ist auch, woher diese Energie stammen soll: zu 20 Prozent aus Proteinen, zu 30 Prozent aus Fetten und zu 50 Prozent aus Kohlenhydraten. „Das ist die optimale Aufteilung der Hauptnährstoffe“, sagt Roswitha Girbarth von der DGE, „und dazu kommen noch Vitamine und Mineralstoffe.“ Die Vorstellung vom Koch, der mit ungefähren Rezeptangaben hantiert und intuitiv ein leckeres Essen auf die Teller zaubert, ist also fernab der Realität.</p>
<p>Stattdessen ist präzise Planung nötig, um die Vorgaben der DGE zu erfüllen. „Nur Mensen, die sich über einen längeren Zeitraum für ein Gericht an diese Richtlinien halten, können anschließend mit unserem Logo werben“, sagt die Ernährungswissenschaftlerin Roswitha Girbarth. Vor Ort wird dafür überprüft, ob die Rezepte nicht nur plausibel sind, sondern auch genau nach ihnen gekocht wird. „Wir wollen sogar wissen, ob die Köche Auskunft darüber geben können, welche Vitamine und Mineralstoffe in dem Essen enthalten sind“, beschreibt Roswitha Girbarth das Verfahren. Als Erste in Deutschland lassen sich im Moment die Köche vom Hamburger Studentenwerk so penibel in die Töpfe gucken. Und sie hoffen, dass sie im Herbst das DGE-Qualitätslogo an ihre Tür hängen können.</p>`,
    questions: [
      { id: 13, text: 'Einige Studierende bemängeln das Essensangebot.', uz: "Ba'zi talabalar ovqatlar tanlovidan nolishadi (kamchilik topishadi).", ans: 'R', expl: "2-xatboshida: «Einige mäkeln über das Essen, finden nicht das passende Gericht.»" },
      { id: 14, text: 'Es wird stets kurzfristig entschieden, welche Gerichte die Mensa anbietet.', uz: "Oshxona qaysi taomlarni taklif etishi har doim qisqa muddat ichida hal qilinadi.", ans: 'F', expl: "2-xatboshida: «Den Speiseplan tüfteln die Mensaleiter schon Wochen vorher aus.»" },
      { id: 15, text: 'Auch das Studienfach gibt Aufschluss über die bevorzugten Gerichte.', uz: "O'quv yo'nalishi (fakultet) ham afzal ko'riladigan taomlar haqida ma'lumot beradi.", ans: 'R', expl: "3-xatboshida: texnika va muhandislik fakultetlari yonidagi oshxonalarda talabalar eng ko'p karrivurst va shnitsel tanlashadi." },
      { id: 16, text: 'Die Mitarbeiter der Mensen berechnen selbst, wie viel sie von jedem Lebensmittel bestellen müssen.', uz: "Oshxona xodimlari har bir mahsulotdan qancha buyurtma qilish kerakligini o'zlari hisoblab chiqadilar.", ans: 'F', expl: "4-xatboshida: «Ein EDV-System ermittelt die genauen Mengen und verschickt die Bestellungen automatisch»." },
      { id: 17, text: 'Zulieferer von Lebensmitteln werden nur gelegentlich überprüft.', uz: "Oziq-ovqat yetkazib beruvchilar faqat ahyon-ahyonda tekshiriladi.", ans: 'F', expl: "5-xatboshida: «in regelmäßigen Abständen von Lebensmittelchemikern kontrolliert werden»." },
      { id: 18, text: 'Nicht alle Produkte können in der unmittelbaren Umgebung erworben werden.', uz: "Barcha mahsulotlarni ham bevosita yaqin atrofdan (mintaqadan) xarid qilib bo'lmaydi.", ans: 'R', expl: "6-xatboshida: «Leider kann das nicht bei allen Produkten gewährleistet werden... Manche Anbieter können solche großen Mengen einfach nicht bewältigen.»" },
      { id: 19, text: 'Die Bedeutung von Bio-Bauern als Mensa-Lieferanten wächst.', uz: "Oshxona yetkazib beruvchilari sifatida bio-fermerlarning ahamiyati ortib bormoqda.", ans: 'X', expl: "Matnda bio-fermerlar ulushi ortib borayotgani haqida ma'lumot berilmagan." },
      { id: 20, text: 'Die Mensa der Universität Hamburg wird mit Zuschüssen unterstützt.', uz: "Gamburg universiteti oshxonasi subsidiyalar (dotatsiyalar) bilan qo'llab-quvvatlanadi.", ans: 'R', expl: "7-xatboshida: «Wenn wir nicht subventioniert würden, könnten wir diese Preise nicht halten.»" },
      { id: 21, text: 'Studierenden ist in der Regel klar, dass die Zusammensetzung der Mahlzeit in der Mensa genau durchdacht ist.', uz: "Talabalarga odatda oshxonadagi taom tarkibi puxta o'ylangani ma'lum.", ans: 'F', expl: "8-xatboshida: «Dass hinter ihrem preiswerten Mittagessen auch exakte Wissenschaft steht, ist den meisten Studenten dabei keineswegs bewusst.»" },
      { id: 22, text: 'Die Deutsche Gesellschaft für Ernährung schreibt verbindlich vor, aus welchen Lebensmitteln ein Mensa-Essen bestehen muss.', uz: "Germaniya Ovqatlanish Jamiyati (DGE) oshxona ovqati qaysi mahsulotlardan iborat bo'lishini majburiy qilib belgilaydi.", ans: 'F', expl: "8–9-xatboshilarda: DGE faqat tavsiyalar (Empfehlungen) beradi va ularga amal qilgan oshxonalar DGE sifat logotipini olishi mumkin." },
      { id: 23, text: 'Von Mensaköchen wird mehr Flexibilität verlangt als von Köchen in einem Restaurant.', uz: "Oshxona oshpazlaridan restoran oshpazlariga qaraganda ko'proq moslashuvchanlik talab etiladi.", ans: 'X', expl: "Restoran oshpazlari bilan bunday taqqoslash matnda yo'q." },
      {
        id: 24,
        text: 'Welche der Überschriften a, b oder c passt am besten zum Text?',
        uz: "Quyidagi a, b yoki c sarlavhalardan qaysi biri matnga eng mos keladi?",
        ans: 'B',
        opts: [
          'A) Qualität um jeden Preis: Warum Mensa-Essen teurer wird',
          'B) Wider die Currywurst – Uni-Mensen setzen auf Qualität',
          'C) Hinter den Kulissen: Wer in der Mensa kocht'
        ],
        optsUz: [
          "A) Har qanday narx evaziga sifat: Nima uchun Mensa ovqatlari qimmatlashmoqda",
          "B) Karrivurstga qarshi — universitet oshxonalari sifatga tayanmoqda",
          "C) Sahna ortida: Universitet oshxonasida kim ovqat pishiradi"
        ],
        expl: "Matn universitet oshxonalarida sifat, logistika va sog'lom ovqatlanish standartlari haqida (B)."
      }
    ]
  },
  sp: {
    title: 'Über die Anfänge der Restaurantkultur',
    titleUz: 'Restoran madaniyatining paydo bo‘lishi tarixidan',
    uzbekVocab: [
      { de: 'speisen', uz: 'ovqatlanmoq, tanovul qilmoq (yuqori uslubda)' },
      { de: 'der Feinschmecker', uz: 'nozikta’b xo‘randa, gurman' },
      { de: 'der letzte Schrei sein', uz: 'urfdagi eng so‘nggi yangilik (moda) bo‘lmoq' },
      { de: 'die Gänge auftragen', uz: 'taomlarni (navbati bilan) dasturxonga tortmoq' },
      { de: 'zum Festpreis', uz: 'qat’iy belgilangan narxda' },
      { de: 'es deutet einiges darauf hin, dass...', uz: 'ko‘p narsa shundan dalolat beradiki...' },
      { de: 'überliefert sein', uz: 'avloddan avlodga yetib kelmoq (saqlanib qolmoq)' },
      { de: 'etwas zu verdanken haben (+ Dat.)', uz: 'biror narsa uchun kimdandir qarzdor / minnatdor bo‘lmoq' },
      { de: 'das aufstrebende Bürgertum', uz: 'yuksalib borayotgan shaharliklar (burjuaziya) qatlami' }
    ] as VocabItem[],
    text: `<p>Alle Gäste sitzen gemeinsam an einem langen Tisch und es gibt nur <strong>(25)</strong> ein Menü: So <strong>(26)</strong> man in einem Sternerestaurant in Hamburg, und für so manchen <strong>(27)</strong> ist dies der letzte <strong>(28)</strong>. Dass dieses Konzept neu ist, lässt <strong>(29)</strong> jedoch nicht behaupten. Denn bis ins 19. Jahrhundert hinein war dies unter europäischen Adligen genauso <strong>(30)</strong>: Zu einer <strong>(31)</strong> Essenszeit setzten sich die Herrschaften gemeinsam an den Tisch des Gastgebers. <strong>(32)</strong> französisch serviert, trug das Personal alle <strong>(33)</strong> gleichzeitig auf, wurde russisch serviert, brachte man diese einzeln an den Tisch. Auch Wirtshäusern und Gaststätten war eine freie Menüwahl unbekannt. <strong>(34)</strong> essen gehen wollte, bekam ein Tagesmenü <strong>(35)</strong> Festpreis.</p>
<p>Was es daher nicht gab, waren eine Speisekarte und Einzeltische. Denn die moderne Restaurantkultur, <strong>(36)</strong> heute kennen, war noch nicht erfunden. Wann das erste Restaurant eröffnet wurde, ist zwar unbekannt, aber es <strong>(37)</strong> einiges darauf hin, dass dies in Paris geschah. Und der erste Spitzenkoch kam – keine Überraschung – ebenfalls aus Paris: Es handelt sich dabei um Marie-Antoine Carême, der zur Zeit Napoleons am französischen Hof wirkte und einer der bedeutendsten Köche seiner Zeit war. Von ihm sind Kochbücher und zahlreiche Rezepte <strong>(38)</strong>.</p>
<p>Dass es für uns alltäglich ist, in Restaurants zu essen, haben wir <strong>(39)</strong> der Französischen Revolution <strong>(40)</strong>. Köche und Küchenpersonal <strong>(41)</strong> sich nach dem Sturz des Adels ein neues Betätigungsfeld suchen – und fanden <strong>(42)</strong> Bürgertum ein hungriges Publikum. In dieser Zeit <strong>(43)</strong> auch die geschmacklichen Vorlieben. Das Essen wurde pikanter, und die Gäste legten mehr <strong>(44)</strong> auf den Eigengeschmack der Zutaten. Damals wurde auch eine Zutat erfunden, die heute in keiner Küche fehlt: die Bouillon, eine stark konzentrierte Fleischbrühe, die <strong>(45)</strong> Grundlage für Suppen und Soßen dient. In der ersten Hälfte des 19. Jahrhunderts nahm die Zahl der Restaurants stark zu und es <strong>(46)</strong> sich eine bürgerliche Esskultur, bei der der Genuss im Vordergrund stand. Restaurantbesuche wurden zum Ausdruck des Lebensstils – und sind es bis heute geblieben.</p>`,
    questions: [
      { id: 25, opts: ['sicher', 'ganz', 'genau', 'komplett'], ans: 'genau', expl: "«es gibt nur genau ein Menü» — aynan bitta menyu mavjud." },
      { id: 26, opts: ['nagt', 'knabbert', 'speist', 'schluckt'], ans: 'speist', expl: "«So speist man in einem Sternerestaurant» — yulduzli restoranda shunday tanovul qilinadi." },
      { id: 27, opts: ['Feinschmäker', 'Feinschmeker', 'Feinschmäcker', 'Feinschmecker'], ans: 'Feinschmecker', expl: "To'g'ri yozilishi: «der Feinschmecker» (gurman)." },
      { id: 28, opts: ['Laut', 'Ruf', 'Schrei', 'Brüller'], ans: 'Schrei', expl: "Ibora: «der letzte Schrei sein» (eng so'nggi urf/moda bo'lmoq)." },
      { id: 29, opts: ['ihn', 'man', 'sich', 'es'], ans: 'sich', expl: "Passiv ma'nosidagi konstruksiya: «lässt sich jedoch nicht behaupten»." },
      { id: 30, opts: ['üblich', 'vertraulich', 'regelrecht', 'gewöhnlich'], ans: 'üblich', expl: "«war dies unter europäischen Adligen genauso üblich» (odatiy edi)." },
      { id: 31, opts: ['festen', 'dichten', 'starren', 'starken'], ans: 'festen', expl: "«Zu einer festen Essenszeit» (qat'iy belgilangan ovqat vaqtida)." },
      { id: 32, opts: ['War', 'Wurde', 'Hatte', 'Sollte'], ans: 'Wurde', expl: "Shart ergash gap (Vorgangspassiv): «Wurde französisch serviert, trug das Personal...»." },
      { id: 33, opts: ['Schritte', 'Züge', 'Läufe', 'Gänge'], ans: 'Gänge', expl: "Ovqat bosqichlari (1-ovqat, 2-ovqat, desert): «alle Gänge gleichzeitig»." },
      { id: 34, opts: ['Wo', 'Der', 'Welcher', 'Wer'], ans: 'Wer', expl: "Umumlashtiruvchi nisbiy olmosh: «Wer essen gehen wollte, bekam...»." },
      { id: 35, opts: ['am', 'im', 'zum', 'beim'], ans: 'zum', expl: "«ein Tagesmenü zum Festpreis» (qat'iy narxda)." },
      { id: 36, opts: ['die sie uns', 'die wir sie', 'wie sie wir', 'wie wir sie'], ans: 'wie wir sie', expl: "«die moderne Restaurantkultur, wie wir sie heute kennen» (biz uni bugun biladiganimizdek)." },
      { id: 37, opts: ['deutet', 'schließt', 'dichtet', 'interpretiert'], ans: 'deutet', expl: "Ibora: «es deutet einiges darauf hin, dass...» (ko'p narsa shunga ishora qiladiki...)." },
      { id: 38, opts: ['übergeben', 'überbracht', 'überliefert', 'überlassen'], ans: 'überliefert', expl: "«Von ihm sind Kochbücher und zahlreiche Rezepte überliefert» (bizgacha yetib kelgan)." },
      { id: 39, opts: ['endlich', 'anfänglich', 'letztlich', 'neulich'], ans: 'letztlich', expl: "«letztlich» (oxir-oqibatda)." },
      { id: 40, opts: ['zu bedanken', 'abzudanken', 'zu verdanken', 'zu gedenken'], ans: 'zu verdanken', expl: "«haben wir der Französischen Revolution zu verdanken»." },
      { id: 41, opts: ['mochten', 'würden', 'mussten', 'dürften'], ans: 'mussten', expl: "«mussten sich nach dem Sturz des Adels ein neues Betätigungsfeld suchen»." },
      { id: 42, opts: ['als das aufstrebende', 'für das aufstrebende', 'an dem aufstrebenden', 'in dem aufstrebenden'], ans: 'in dem aufstrebenden', expl: "«fanden in dem aufstrebenden Bürgertum ein hungriges Publikum»." },
      { id: 43, opts: ['änderten sich', 'änderte sich', 'sich änderten', 'änderten sie'], ans: 'änderten sich', expl: "«In dieser Zeit änderten sich (Pl.) auch die geschmacklichen Vorlieben»." },
      { id: 44, opts: ['Wert', 'Interesse', 'Bedeutung', 'Wichtigkeit'], ans: 'Wert', expl: "Turg'un birikma: «Wert legen auf (+ Akk.)»." },
      { id: 45, opts: ['für', 'zur', 'auf', 'als'], ans: 'als', expl: "«die als (yoki zur) Grundlage für Suppen und Soßen dient» (dienen als + Nom. / dienen zu + Dat.)." },
      { id: 46, opts: ['etablierte', 'etapplierte', 'etaplierte', 'etablirte'], ans: 'etablierte', expl: "To'g'ri yozilishi: «es etablierte sich eine bürgerliche Esskultur»." }
    ]
  }
};

// ============================================================================
// VARIANT 35 (PDF 35 — { الاحتمال الخامس والثلاثون })
// ============================================================================
export const VARIANT_35_READING = {
  pdfSource: '/assets/aistudio/35_7717d0b0.pdf',
  lv1: {
    title: 'Schreiben oder tippen – über die Vorteile der Handschrift',
    titleUz: 'Qo‘lda yozishmi yoki klaviaturada terish — husnixatning (qo‘lyozmaning) afzalliklari haqida',
    uzbekVocab: [
      { de: 'die jahrtausendealte Kulturtechnik', uz: 'ming yillik madaniy ko‘nikma (yozuv san’ati)' },
      { de: 'die sumerische Keilschrift', uz: 'shumer mixxati (loy taxtachalarga o‘yilgan yozuv)' },
      { de: 'in Lehm ritzen', uz: 'loyga o‘yib (tirnab) yozmoq' },
      { de: 'zum Stift greifen', uz: 'qo‘liga ruchka/qalam olmoq' },
      { de: 'die motorische Gedächtnisspur', uz: 'miyadagi harakat (motorika) xotira izi' },
      { de: 'weniger störanfällig und wartungsarm', uz: 'buzilishga kamroq moyil va texnik xizmat talab qilmaydigan' }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: "1–2-xatboshilar va [ 1 ]–[ 3 ] bo'shliqlar",
        uz: "Bugungi kunda faqat ozchilik faqat qo'lda yozadi, ammo qo'lda yozishda miyaning 12 ta sohasi, 30 dan ortiq mushak va 17 ta bo'g'im birgalikda ishlaydi. Qo'lda yozish miloddan avvalgi 3300-yillarda Mesopotamiyada shumer mixxati paydo bo'lishi bilan boshlangan. [ 1 -> G: Bu — Misr iyerogliflari bilan bir qatorda — bugungi kunda ma'lum bo'lgan eng qadimgi yozuvdir ]. Yozuv insoniyatning eng buyuk madaniy yutuqlaridan biridir: [ 2 -> D: Bilimlarni saqlab qolish va g'oyalarni zamon hamda makondan mustaqil ravishda keyingi avlodlarga yetkazish aynan uning sharofati bilandir ]. Bir qarashda zamonaviy yozuv qurilmalari foydasiga ko'p narsa gapiradi: [ 3 -> C: Masalan, bolalarga qo'lda yozishdan ko'ra klaviaturada harf terishni o'rganish osonroq kechadi ]. Bundan tashqari, kompyuterda matnlarni bemalol o'zgartirish mumkin."
      },
      {
        label: "3–4-xatboshilar va [ 4 ]–[ 6 ] bo'shliqlar",
        uz: "Buni psixolog va miya tadqiqotchisi professor Markus Kifer (Markus Kiefer) tadqiqoti ham ko'rsatadi. [ 4 -> E: U analog (oddiy) va raqamli yozuv qurollari maktabgacha yoshdagi bolalarning o'qish va yozish qobiliyatiga qanday ta'sir qilishini o'rgandi ]. Qog'oz va qalam ishlatgan guruh harflarni tanishda eng yaxshi natija ko'rsatdi. «Qog'oz va qalamda yozish eng ko'p afzalliklarga ega», deb xulosa qiladi professor Kifer. [ 5 -> B: Jumladan, u ma'lumotlar qo'lda yozilganda xotirada yaxshiroq saqlanib qolishini ta'kidlaydi ]. Amerika tadqiqotlariga ko'ra, ma'ruzalarda qo'lda konspekt yozgan talabalar noutbuk ishlatgan kursdoshlariga qaraganda tushunish testlarida ancha yaxshi natija ko'rsatgan. [ 6 -> H: Chunki qo'lda konspekt yozishdagi pastroq tezlik ularni yozish jarayonidayoq o'quv materiali ustida faol fikrlashga majbur qilgan ]."
      }
    ] as ParagraphTranslation[],
    text: `<p>Wohl nur eine Minderheit schreibt heute noch ausschließlich mit der Hand. Doch diese jahrtausendealte Kulturtechnik ist keineswegs veraltet. Im Gegenteil: Neuere Studien belegen, dass das Schreiben mit der Hand Kreativität und Konzentration fördert. Kein Wunder, denn dabei sind zwölf Hirnareale aktiv, mehr als 30 Muskeln und 17 Gelenke arbeiten zusammen.</p>
<p>Das Schreiben mit der Hand begann um 3300 v. Chr., als in Mesopotamien eine frühe Form der sumerischen Keilschrift entstand. <span class="text-gap">[ 1 ]</span> Sie bestand zunächst aus Bildzeichen, die in Lehm geritzt wurden, und war lange weit verbreitet. Zweifellos ist die Schrift eine der größten kulturellen Errungenschaften der Menschheit: <span class="text-gap">[ 2 ]</span> Doch heute löst sich die Schrift immer mehr von ihrer physischen Grundlage: Wir schreiben vieles nur noch auf unseren Smartphones und Computern und greifen immer seltener zum Stift. Tatsächlich spricht auf den ersten Blick jedoch so manches für moderne Schreibmedien: <span class="text-gap">[ 3 ]</span> Außerdem können Texte am Computer problemlos verändert werden. Doch der schnellste und einfachste Weg ist nicht immer der beste.</p>
<p>Dies zeigt auch eine Studie des Psychologen und Hirnforschers Professor Markus Kiefer. <span class="text-gap">[ 4 ]</span> Eine Gruppe arbeitete bei diesem Experiment mit Papier und Bleistift, die zweite nutzte einen Tablet-Computer mit virtueller Tastatur, die dritte einen Tablet-Computer mit einem digitalen Stift. Die Kinder lernten spielerisch, 16 Buchstaben zu erkennen und kurze Wörter zu lesen und zu schreiben. Die Stift-und-Papier-Gruppe schnitt beim Erkennen von Buchstaben am besten ab.</p>
<p>„Das Schreiben mit Stift und Papier hat die meisten Vorteile“, fasst Professor Kiefer seine Studienergebnisse zusammen. <span class="text-gap">[ 5 ]</span> „Handbewegungen helfen uns, die Welt zu begreifen“, ergänzt er. Denn wenn man mit der Hand schreibe, würden nicht nur visuelle, sondern auch motorische Bereiche des Gehirns aktiviert, und es werde eine motorische Gedächtnisspur im Gehirn angelegt. Diese helfe den Kindern, Buchstaben zu erkennen, aber auch, andere Informationen zu behalten und zu verarbeiten. „Schreiben mit der Hand fördert die kognitive Entwicklung“, so Professor Kiefer.</p>
<p>Die Vorteile beschränken sich aber nicht auf das Schreibenlernen: Amerikanischen Studien zufolge schnitten Studenten, die bei Vorlesungen per Hand mitschrieben, bei Verständnistests deutlich besser ab als ihre Kommilitonen, die einen Laptop nutzten. <span class="text-gap">[ 6 ]</span> Dies wirkt sich offenbar positiv auf das Verständnis aus. Doch auch praktische Gründe sprechen dafür, das Schreiben mit Stift und Papier nicht aufzugeben: Es ist im Vergleich zu digitalen Schreibgeräten preisgünstiger, technisch weniger störanfällig, wartungsarm – und immer und überall möglich.</p>`,
    options: [
      { key: 'A', text: 'Wenn sie sich reine Fakten merken sollten, zeigten sich also zwischen den beiden Gruppen von Studenten keine Unterschiede.', uz: "Agar ular faqat sof faktlarni eslab qolishlari kerak bo'lsa, ikkala talabalar guruhi o'rtasida farq kuzatilmagan. (Ortiqcha gap)" },
      { key: 'B', text: 'Unter anderem betont er, dass Inhalte besser im Gedächtnis bleiben, wenn sie mit der Hand geschrieben werden.', uz: "Jumladan, u ma'lumotlar qo'lda yozilganda xotirada yaxshiroq saqlanib qolishini ta'kidlaydi." },
      { key: 'C', text: 'So fällt es Kindern leichter, das Tippen auf der Tastatur zu lernen als das Schreiben mit der Hand.', uz: "Masalan, bolalarga qo'lda yozishdan ko'ra klaviaturada harf terishni o'rganish osonroq kechadi." },
      { key: 'D', text: 'Ihr ist zu verdanken, dass Wissen konserviert und Ideen unabhängig von Zeit und Raum weitergegeben werden konnten.', uz: "Bilimlarni saqlab qolish va g'oyalarni zamon hamda makondan mustaqil ravishda yetkazish aynan uning sharofati bilandir." },
      { key: 'E', text: 'Er untersuchte, welchen Einfluss analoge und digitale Schreibwerkzeuge auf die Lese- und Schreibkompetenz von Vorschulkindern haben.', uz: "U analog va raqamli yozuv qurollari maktabgacha yoshdagi bolalarning o'qish va yozish malakasiga qanday ta'sir qilishini tadqiq etdi." },
      { key: 'F', text: 'Einzelne Buchstaben auf Papier mit der Hand zu verbinden sei für viele Kinder derart mühsam, dass es zu Schreibblockaden führe.', uz: "Qog'ozda alohida harflarni qo'lda bir-biriga ulash ko'plab bolalar uchun shu qadar mashaqqatliki, bu yozish blokadasiga olib keladi. (Ortiqcha gap)" },
      { key: 'G', text: 'Diese ist – neben den ägyptischen Hieroglyphen – die heute älteste bekannte Schrift.', uz: "U (shumer mixxati) — Misr iyerogliflari bilan bir qatorda — bugungi kunda ma'lum bo'lgan eng qadimgi yozuvdir." },
      { key: 'H', text: 'Denn die geringere Schreibgeschwindigkeit beim handschriftlichen Notieren zwang sie, sich dabei schon aktiv mit dem Lerninhalt auseinanderzusetzen.', uz: "Chunki qo'lda konspekt yozishdagi pastroq tezlik ularni yozish jarayonidayoq o'quv materiali ustida faol ishlashga majbur qilgan." }
    ],
    answers: { '1': 'G', '2': 'D', '3': 'C', '4': 'E', '5': 'B', '6': 'H' },
    explanations: {
      '1': "«eine frühe Form der sumerischen Keilschrift (fem.)» -> G variantdagi «Diese ist ... die heute älteste bekannte Schrift».",
      '2': "«die Schrift (fem.) eine der größten kulturellen Errungenschaften:» -> D variantdagi «Ihr ist zu verdanken, dass...».",
      '3': "«spricht ... so manches für moderne Schreibmedien:» va keyingi gapdagi «Außerdem...» o'rtasiga C variant (klaviaturada yozishni o'rganish osonligi) tushadi.",
      '4': "Professor Markus Kifer tanishtirilgach, E variantda uning maktabgacha yoshdagi bolalar bilan o'tkazgan tadqiqoti («Er untersuchte...») bayon qilinadi.",
      '5': "«fasst Professor Kiefer seine Studienergebnisse zusammen» va «ergänzt er» o'rtasiga B variant («Unter anderem betont er...») mos keladi.",
      '6': "Ma'ruzada qo'lda konspekt yozgan talabalarning tushunish testlarida yuqori natija ko'rsatgani sababi H variantda izohlanadi."
    }
  },
  lv2: {
    ...VARIANT_34_READING.lv2,
    questions: [
      { id: 7, text: 'In welchem Abschnitt zieht die Autorin eine Schlussfolgerung?', uz: "Qaysi bo'limda muallif xulosa chiqaradi?", ans: 'C', expl: "C bo'limida: «Aus diesen Informationen lässt sich eindeutig ableiten, dass zusätzliche Käufe ... der Umwelt in jedem Fall eher schaden als nutzen.»" },
      { id: 8, text: 'In welchem Abschnitt zeigt sich die Autorin erstaunt?', uz: "Qaysi bo'limda muallif hayratlanadi?", ans: 'A', expl: "A bo'limida: «dass ich mir ein verblüfftes Stirnrunzeln nicht verkneifen konnte... Ist es nicht verwunderlich, dass...»." },
      { id: 9, text: 'In welchem Abschnitt gibt die Autorin einen Rat?', uz: "Qaysi bo'limda muallif maslahat beradi?", ans: 'C', expl: "C bo'limida: «Empfehlenswert ist es vor allem, den Konsum zu reduzieren. So kann man jedem ... ans Herz legen, Sachen auszubessern statt neu anzuschaffen.»" },
      { id: 10, text: 'In welchem Abschnitt erläutert die Autorin ihre persönliche Haltung?', uz: "Qaysi bo'limda muallif o'z shaxsiy pozitsiyasini tushuntiradi?", ans: 'D', expl: "D bo'limida: «Ich selbst lege großen Wert auf fair produzierte Mode, lehne Billigmode ab und kaufe ausschließlich hochwertige Kleidung...»." },
      { id: 11, text: 'In welchem Abschnitt äußert die Autorin Bedauern?', uz: "Qaysi bo'limda muallif afsuslanish bildiradi?", ans: 'E', expl: "E bo'limida: «Doch leider sieht es nicht so aus, als würde dies zu einem breiten Umdenken führen. Das ist schade...»." },
      { id: 12, text: 'In welchem Abschnitt argumentiert die Autorin mit Zahlen und Fakten?', uz: "Qaysi bo'limda muallif raqamlar va faktlar bilan dalil keltiradi?", ans: 'B', expl: "B bo'limida BMT tadqiqoti, 5 baravar o'sish, 50 mln tonna to'qimachilik chiqindisi va 10% CO2 chiqindilari keltirilgan." }
    ]
  },
  lv3: {
    title: 'Naturidylle zum Pachten – Kleingärten im Wandel',
    titleUz: 'Ijaraga olinadigan tabiat go‘shasi — kichik bog‘lar (Schrebergärten) o‘zgarishlar davrida',
    uzbekVocab: [
      { de: 'der Kleingarten / der Schrebergarten', uz: 'shahardagi ijaraga olinadigan kichik bog‘ uchastkasi' },
      { de: 'die Parzelle verpachten', uz: 'yer uchastkasini uzoq muddatli ijaraga bermoq' },
      { de: 'die Laube / das Gartenhäuschen', uz: 'bog‘ uychasi / shiyponcha' },
      { de: 'soziale Missstände lindern', uz: 'ijtimoiy muammolar va qashshoqlikni yumshatmoq' },
      { de: 'verwahrlosen / verwildern', uz: 'qarovsiz qolib yovvoyi o‘t bosib ketmoq' },
      { de: 'der Inbegriff des Spießertums', uz: 'tor fikrli meshchanlikning timsoli' },
      { de: 'auf den Komposthaufen gehören', uz: 'o‘tmish axlatxonasiga («kompost uyumiga») uloqtirilishi lozim bo‘lmoq' }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: '1–4-xatboshilar (Kleingarten uyushmalari, sanoatlashuv davridagi qashshoqlik va Kappeln 1814)',
        uz: "Poyezdda ketayotganda temiryo'l bo'yida ko'rinadigan kichik bog'lar (Kleingärten / Schrebergärten) odatda uyushmalar (Vereine) tomonidan boshqariladi va a'zolarga arzon shartlarda ijaraga beriladi [13-savol: R]. Uyushma oshxonalariga (Gaststätten) a'zo bo'lmaganlar kirishi mumkin-mumkin emasligi matnda aytilmagan [14-savol: X]. XIX asrda sanoatlashuv davrida fabrikalarda ishlagan kambag'al oilalarning og'ir yashash sharoiti va to'yib ovqatlanmaslik (soziale Missstände) bunday bog'lar tashkil etilishiga sabab bo'lgan [15-savol: R]. 1814-yilda Kappelnda tashkil etilgan ilk bog' maydoni ko'p o'tmay boshqa maqsadlar uchun olib qo'yilgan (bugungacha saqlanib qolmagan) [16-savol: F]."
      },
      {
        label: '5–8-xatboshilar (Doktor Morits Shreber, Xausshild, ota-onalar va Leypsig muzeyi)',
        uz: "«Schrebergarten» nomi leypsiglik shifokor Morits Shreber (1808–1861) sharafiga qo'yilgan bo'lsa-da, Shreberning o'zi bog' barpo etmagan — 1864-yilda, uning vafotidan keyin maktab direktori Ernst Xausshild bolalar o'yin maydonchasini («Schreberplatz») yaratgan [17-savol: F]. XIX asrda ko'plab yirik shaharlar bolalar maydonchalari qurgani haqida matnda ma'lumot yo'q [18-savol: X]. O'qituvchi Genrix Karl Gezell maydoncha atrofida bolalar uchun gul va sabzavot pushtalari (Beete) ajratgan, ammo bolalar tezda zerikib, pushtalarni qarovsiz qoldirgach, ularning parvarishini ota-onalar o'z qo'liga olgan [19-savol: R]. Leypsigdagi tarixiy bog'da 1996-yildan beri Germaniya kichik bog'bonlar muzeyi joylashgan (uning dunyodagi yagona muzey ekanligi matnda aytilmagan) [20-savol: X]."
      },
      {
        label: '9–11-xatboshilar (Yosh oilalar qiziqishi, hududiy farqlar va ekologik sabzavot yetishtirish)',
        uz: "So'nggi yillarda yosh oilalar va yoshlar yana kichik bog'larga katta qiziqish bildirmoqda [21-savol: R]. Katta shaharlarda talab taklifdan yuqori bo'lsa-da, aholisi kamayib borayotgan hududlarda ba'zi bog'larga ijarachi topilmayapti (demak, butun Germaniya bo'ylab talab taklifdan ortiq emas) [22-savol: F]. Bugungi kunda ham, ayniqsa yosh bog'bonlar kimyoviy o'g'itlarsiz o'z meva va sabzavotlarini (masalan, quyoshda pishgan pomidorlarni) yetishtirishni juda xohlashadi [23-savol: F]."
      }
    ] as ParagraphTranslation[],
    text: `<p>Wenn man Zug fährt, sieht man oft entlang der Bahnstrecke kleine, aneinandergereihte Gartengrundstücke, die meist durch Zäune oder Hecken voneinander abgegrenzt sind. Auf vielen steht ein Gartenhäuschen, manchmal entdeckt man aber auch eine Schaukel für Kinder oder einen kleinen Pool. Es handelt sich bei diesen meist gut gepflegten Parzellen um Kleingärten, auch Schrebergärten genannt. Diese werden normalerweise von Vereinen verwaltet, die sie zu günstigen Konditionen an ihre Mitglieder verpachten.</p>
<p>Stadtbewohner, die keinen eigenen Garten besitzen, haben somit die Möglichkeit, sich dennoch eine grüne Oase zu erschaffen. Im Kleingarten kann man Gemüse züchten, sich erholen und ein Gegengewicht finden zum Leben in Betonburgen und auf Asphaltflächen. Außerdem lässt sich leicht Kontakt knüpfen zu Gleichgesinnten. In den Kleingartenanlagen gibt es häufig ein Vereinsheim oder Gemeinschaftshaus. Es wird benutzt für Vereinssitzungen ebenso wie zur Aufbewahrung von Werkzeug, oft ist darin sogar eine kleine Gastwirtschaft untergebracht.</p>
<p>Die Entstehung der Kleingartenbewegung war bedingt durch die gewaltigen Veränderungen, die mit der Urbanisierung und Industrialisierung im 19. Jahrhundert einhergingen. Viele Menschen gaben ihr bäuerliches Leben auf und strömten in die stark wachsenden Städte, wo sie Arbeit in neuen Fabriken fanden. Ihre Lebensumstände waren schlecht, Mangelernährung und ungesunde Wohnverhältnisse beeinträchtigten ihre Gesundheit. Um diese Not zu lindern, wurden an vielen Orten Initiativen ins Leben gerufen, die den Bedürftigen ein kleines Stück Land zum Bewirtschaften zur Verfügung stellen wollten. Wer einen Kleingarten besaß, konnte nämlich nicht nur in der Natur einen Ausgleich zu dem harten Arbeitsalltag finden, sondern sich auch durch den eigenen Anbau von Obst und Gemüse mit gesunden Lebensmitteln versorgen.</p>
<p>Den ersten Kleingärtnerverein rief 1814 Landgraf Carl von Hessen in Kappeln an der Schlei ins Leben. Mit den Erzeugnissen der kleinen Parzellen sollten sozial Schwache sich selbst besser versorgen können. Das Land, auf dem diese Kleingartenanlage entstand, wurde jedoch bald wieder für andere Zwecke benötigt. Das gleiche Schicksal ereilte viele Armengärten, die es zwischen 1830 und 1840 in Leipzig, Berlin und Kiel gab. Erst Mitte des 19. Jahrhunderts wurden in einigen Städten dauerhaft Kleingartenanlagen gegründet, wie zum Beispiel die Laubenkolonien des Roten Kreuzes in Berlin.</p>
<p>Kleingärten werden auch als Lauben, Heimgärten, Familiengärten oder Parzellen bezeichnet. Auch das Wort „Schrebergarten“ ist ein Synonym für Kleingarten. Doch woher stammt diese merkwürdige Bezeichnung? Um deren Herkunft zu erhellen, sollte man einen Blick in die Geschichte werfen.</p>
<p>Ursprünglich stand nämlich hinter der Schrebergartenbewegung, die im 19. Jahrhundert in Leipzig ihren Anfang nahm, ein pädagogisches und gesundheitliches Konzept. Nach den Plänen des Leipziger Arztes Daniel Gottlob Moritz Schreber (1808–1861) sollten Kinder durch Bewegung an der frischen Luft ihre Körperhaltung verbessern. Denn unter seinen Patienten waren viele Kinder aus der Großstadt, die an Haltungsschäden litten. Mit der Entstehung der nach ihm benannten Gärten hatte Schreber jedoch nicht unmittelbar zu tun. Der Schuldirektor und Reformpädagoge Ernst Innocenz Hauschild legte 1864, also erst nach Schrebers Tod, eine Spielwiese in Leipzig an, auf der Kinder von Fabrikarbeitern unter Betreuung toben und turnen konnten. Zu Ehren von Moritz Schreber nannte Hauschild die Wiese „Schreberplatz“. Später erst wurde aus dem Schreberplatz eine richtige Kleingartenanlage.</p>
<p>Revolutioniert wurde das Projekt von dem Lehrer Heinrich Karl Gesell. Er überlegte sich, wie er Kinder dazu motivieren könnte, sich regelmäßig am Schreberplatz einzufinden. So kam er auf die Idee, rund um die quadratische Spielfläche kleine Blumen- und Gemüsebeete anzulegen. Die Beete sollten von den Kindern eigenverantwortlich bepflanzt und gepflegt werden. Der freie Platz im Zentrum stand für gemeinsame Gymnastikübungen, Spiele und Picknicks zur Verfügung – so jedenfalls die Theorie. Doch den Kleinen machte das Hacken, Säen und Gießen schon bald keinen Spaß mehr und die Beete verwilderten. Damit die Anlage nicht völlig mit Unkraut überzogen wurde, griffen die Eltern zu Harke und Gießkanne und entdeckten schon bald ihre Leidenschaft fürs Gärtnern.</p>
<p>Aus den offenen Beeten entstanden mit der Zeit umzäunte Parzellen mit gemütlichen Lauben, kleinen Gartenhäuschen also, als grüner Rückzugsort für die ganze Familie. Der Leipziger Schreberplatz entwickelte sich innerhalb weniger Jahre zu einer Anlage mit mehr als 100 Gärten. Gut zwanzig Jahre später gab es allein in Leipzig bereits 14 Schrebervereine. Das Erfolgskonzept wurde von vielen anderen Städten kopiert bzw. überschnitt sich mit ähnlich gelagerten Bewegungen wie beispielsweise der der Arbeiter- oder Armengärten. Heute steht die historische Kleingartenanlage „Dr. Schreber“ unter Denkmalschutz und beherbergt seit 1996 das Deutsche Kleingärtnermuseum.</p>
<p>Während und nach den beiden Weltkriegen erfüllten Kleingärten wieder hauptsächlich die Funktion, die sie bereits in ihren Anfängen innehatten: Sie dienten der Bevölkerung als zusätzliche Nahrungsquelle. Mit dem Wirtschaftswunder verloren sie wieder ihre Bedeutung für die Nahrungsversorgung. Im Lauf der Jahrzehnte erlitten sie auch einen Imageverlust: Sie wurden als altmodisch, als Inbegriff des Spießertums angesehen, und da die Jugend sich nicht für Gärtnerei interessierte, wurden viele Kleingartenanlagen vor allem von Senioren bewirtschaftet. Doch dieser Trend wandelt sich seit einigen Jahren. Betrug das Durchschnittsalter der Pächter im Jahre 2001 noch 55 Jahre, hat sich der Zulauf junger Familien seitdem rapide verstärkt.</p>
<p>Immer mehr junge Familien mit Kindern wissen nämlich das eigene kleine Naturparadies zu schätzen und mieten sich einen eigenen Kleingarten. Insgesamt, so der Bundesverband Deutscher Gartenfreunde (BDG), nutzen in Deutschland etwa fünf Millionen Menschen rund 900 000 Kleingärten. Besonders in Großstädten ist die Nachfrage oft höher als das Angebot. In Regionen, die durch Bevölkerungsrückgang geprägt sind, finden inzwischen jedoch manche Gärten keine Pächter mehr.</p>
<p>Dennoch: Kleingärten gewinnen wieder an Popularität. Dies ist einerseits dem gestiegenen Umweltbewusstsein geschuldet, andererseits der Bedeutung, die gesunde Ernährung in unserer Gesellschaft gewonnen hat. Viele gerade jüngere Kleingärtner betreiben biologischen Anbau von Obst und Gemüse, verzichten auf Kunstdünger und träumen davon, sonnengereifte Tomaten zu ernten und im Duft von Rosmarin und Lavendel zu schwelgen. Statt Normhecken, englischem Rasen und akkurat angelegten Rosenbeeten findet man Wildblumenwiesen, selbstgemachtes Heu und den eigenen Komposthaufen vor der Tür. „Naturgemäßes Gärtnern liegt im Trend“, sagt Thomas Wagner, Sprecher des Bundesverbandes Deutscher Gartenfreunde. Sei es in den Anfängen der Kleingarten-Bewegung noch darum gegangen, genug zu essen auf dem Teller zu haben, stehe heute der Wohlfühl- und Gesundheitsaspekt im Vordergrund. Die Klischees, die seit Jahren über Kleingärten in Umlauf sind, gehören nun wohl endgültig auf den Komposthaufen. In heutigen Gartenkolonien treffen Alte auf Junge, Rentner-Paare auf Familien und Akademiker auf Arbeiter. Ihnen allen gemeinsam sind die Freude an der Natur und die Lust am Gärtnern.</p>`,
    questions: [
      { id: 13, text: 'Wer einen Kleingarten bewirtschaften will, muss in der Regel einem Verein beitreten.', uz: "Kichik bog'da (Kleingarten) dehqonchilik qilmoqchi bo'lgan kishi odatda uyushmaga a'zo bo'lishi kerak.", ans: 'R', expl: "1-xatboshida: «Diese werden normalerweise von Vereinen verwaltet, die sie zu günstigen Konditionen an ihre Mitglieder verpachten.»" },
      { id: 14, text: 'Zu den Gaststätten, die von den Vereinen betrieben werden, haben auch Nicht-Mitglieder Zutritt.', uz: "Uyushmalar boshqaradigan oshxonalarga a'zo bo'lmaganlar ham kirishi mumkin.", ans: 'X', expl: "2-xatboshida uyushma binosida kichik oshxona bo'lishi aytilgan, ammo a'zo bo'lmaganlar kirishi haqida ma'lumot yo'q." },
      { id: 15, text: 'In den Anfängen führten soziale Missstände zur Gründung von Kleingartenanlagen.', uz: "Ilk davrda ijtimoiy muammolar (qashshoqlik) kichik bog'lar tashkil etilishiga olib kelgan.", ans: 'R', expl: "3-xatboshida: og'ir yashash sharoiti va to'yib ovqatlanmaslikni yumshatish uchun tashkil etilgan." },
      { id: 16, text: 'Die erste, in Kappeln gegründete Kleingartenanlage besteht bis heute.', uz: "Kappelnda tashkil etilgan birinchi kichik bog' majmuasi bugungi kungacha mavjud.", ans: 'F', expl: "4-xatboshida: «Das Land, auf dem diese Kleingartenanlage entstand, wurde jedoch bald wieder für andere Zwecke benötigt.»" },
      { id: 17, text: 'Der Arzt Moritz Schreber gründete eine Anlage mit Kleingärten.', uz: "Shifokor Morits Shreber kichik bog'lar majmuasiga asos solgan.", ans: 'F', expl: "6-xatboshida: «Mit der Entstehung der nach ihm benannten Gärten hatte Schreber jedoch nicht unmittelbar zu tun.»" },
      { id: 18, text: 'Im 19. Jahrhundert richteten viele Großstädte Spielplätze für Kinder ein.', uz: "XIX asrda ko'plab yirik shaharlar bolalar uchun o'yin maydonchalari tashkil etgan.", ans: 'X', expl: "Matnda faqat Leypsigdagi Schreberplatz tilga olingan." },
      { id: 19, text: 'Da die Kinder ihre Beete auf dem Schreberplatz verwahrlosen ließen, übernahmen die Eltern deren Pflege.', uz: "Bolalar Schreberplatzdagi pushtalarini qarovsiz qoldirgani sababli, ota-onalar ularning parvarishini o'z zimmasiga olgan.", ans: 'R', expl: "7-xatboshida: «die Beete verwilderten. Damit die Anlage nicht völlig mit Unkraut überzogen wurde, griffen die Eltern zu Harke und Gießkanne»." },
      { id: 20, text: 'Das Deutsche Kleingärtnermuseum widmet sich als weltweit einziges Museum der Geschichte der Kleingärtnerbewegung.', uz: "Germaniya kichik bog'bonlar muzeyi dunyodagi yagona muzey sifatida kichik bog'bonlar harakati tarixiga bag'ishlangan.", ans: 'X', expl: "8-xatboshida muzey borligi aytilgan, ammo uning dunyoda yagona ekani haqida gap yo'q." },
      { id: 21, text: 'Seit einiger Zeit interessieren sich auch jüngere Leute wieder zunehmend für Kleingärten.', uz: "Ma'lum vaqtdan beri yoshlar ham kichik bog'larga yana tobora ko'proq qiziqmoqda.", ans: 'R', expl: "9–10-xatboshilarda: «hat sich der Zulauf junger Familien seitdem rapide verstärkt.»" },
      { id: 22, text: 'Deutschlandweit übersteigt die Zahl der Interessenten das Angebot an Kleingärten.', uz: "Butun Germaniya bo'ylab qiziquvchilar soni mavjud kichik bog'lar taklifidan oshib ketmoqda.", ans: 'F', expl: "10-xatboshida: katta shaharlarda talab yuqori bo'lsa-da, aholisi kamayayotgan hududlarda ba'zi bog'larga ijarachi topilmayapti." },
      { id: 23, text: 'Der Wunsch nach selbst produziertem Obst und Gemüse spielt heute für Kleingärtner keine Rolle mehr.', uz: "O'zi yetishtirgan meva va sabzavotlarga ega bo'lish istagi bugungi bog'bonlar uchun endi ahamiyatga ega emas.", ans: 'F', expl: "11-xatboshida: ko'plab yosh bog'bonlar bio-meva va sabzavotlar yetishtirib, o'z pomidorlarini uzishni orzu qiladi." },
      {
        id: 24,
        text: 'Welche der Überschriften a, b oder c passt am besten zum Text?',
        uz: "Quyidagi a, b yoki c sarlavhalardan qaysi biri matnga eng mos keladi?",
        ans: 'B',
        opts: [
          'A) Tipps für Anfänger: Wie man Kleingärtner wird',
          'B) Naturidylle zum Pachten – Kleingärten im Wandel',
          'C) Gärtnern mit Kindern – spielerisch die Natur entdecken'
        ],
        optsUz: [
          "A) Yangi boshlovchilar uchun maslahatlar: Qanday qilib bog'bon bo'lish mumkin",
          "B) Ijaraga olinadigan tabiat go'shasi — kichik bog'lar o'zgarishlar davrida",
          "C) Bolalar bilan bog'dorchilik — o'yin orqali tabiatni kashf etish"
        ],
        expl: "Matn kichik bog'larning (Kleingärten) tarixi va bugungi kundagi o'zgarishlarini yoritadi (B)."
      }
    ]
  },
  sp: {
    title: 'Warum Spielen Kinder schlau macht',
    titleUz: 'Nima uchun o‘yin bolalarni aqlli qiladi',
    uzbekVocab: [
      { de: 'mit den Beinen strampeln', uz: 'oyoqlarini tipirchilatmoq (chaqaloqlar haqida)' },
      { de: 'der Aufprall', uz: 'yerga urilish (zarba tovushi)' },
      { de: 'zum Zeitvertreib', uz: 'vaqt o‘tkazish (ermak) uchun' },
      { de: 'das Selbstvertrauen festigen', uz: 'o‘ziga bo‘lgan ishonchni mustahkamlamoq' },
      { de: 'sich etwas abschauen von (+ Dat.)', uz: 'boshqalardan (kattaroq bolalardan) ko‘rib o‘rganmoq' },
      { de: 'in die Rolle eines anderen schlüpfen', uz: 'boshqa birovning roliga kirmoq' },
      { de: 'das Einfühlungsvermögen', uz: 'hamdardlik, boshqaning holatini tushunish (empatiya)' }
    ] as VocabItem[],
    text: `<p>Es ist etwas, was einfach so passiert. Jeder Mensch macht es, wenn er auf die Welt kommt, er kann nicht <strong>(25)</strong>: Er fängt an zu spielen. Auch wenn es nicht immer <strong>(26)</strong> aussieht. Mit den Beinen zu strampeln, nach einem Gegenstand zu greifen, Geräusche zu fabrizieren, all das sind Spiele, die dazu dienen, dass ein Kind sich ausprobiert, seine Welt entdeckt und lernt, darin <strong>(27)</strong>. Wenn ein Kind <strong>(28)</strong> seinen Löffel aus dem Hochstuhl fallen <strong>(29)</strong>, macht es das nicht, um die Eltern zu ärgern, sondern um Dinge herauszufinden und diese abzuspeichern: Kann man den <strong>(30)</strong> hören? Wie lange dauert es, bis man ihn hört? Oder geht der Gegenstand sogar dabei kaputt?</p>
<p>Trotzdem halten viele Erwachsene Spielen für etwas, was Kinder zum <strong>(31)</strong> machen, was aber wenig produktiv ist. Dabei ist Spielen in jedem Alter die Grundlage von allem, was man für den Rest <strong>(32)</strong> Lebens braucht. Menschenkinder müssen, wie übrigens auch Tiere, durch eigene Erfahrungen lernen. Sie beobachten und probieren <strong>(33)</strong>, wie man sich Nahrung sucht, wie man sich vor Gefahren schützt und wie man in der Gemeinschaft lebt. Die Struktur des Gehirns wird während der Kindheit dadurch geformt, <strong>(34)</strong> es Dinge bewältigt und Erfahrungen sammelt. Nebenbei wird auch das Selbstvertrauen <strong>(35)</strong>.</p>
<p>Um fit fürs Leben zu werden, <strong>(36)</strong> es also Freiräume, in denen Kinder sich selbst ausprobieren können. Beides ist wichtig: einerseits allein zu spielen, denn das <strong>(37)</strong> Konzentration und Kreativität. Aber andererseits auch das Spielen mit anderen Kindern, die <strong>(38)</strong> auch älter sein dürfen, denn dann kann man <strong>(39)</strong> etwas abschauen. Auch Rollenspiele sind wichtig für die Entwicklung, sind sie <strong>(40)</strong> ein soziales und emotionales Training. <strong>(41)</strong> die Rolle eines anderen zu schlüpfen bedeutet vor allem, sich <strong>(42)</strong> in eine andere Stimmung zu versetzen. So kann man Angst, Trauer und Wut besser verarbeiten und <strong>(43)</strong> gleichzeitig Einfühlungsvermögen für andere.</p>
<p>Da das alles wichtig ist, steht das Recht <strong>(44)</strong> spielen auch im Artikel 31 Absatz 1 der UN-Kinderrechtskonvention. Eltern, die trotzdem noch <strong>(45)</strong> sind, sollten die Sache so sehen: Spielen ist die Arbeit der Kinder. Und jede Arbeit muss <strong>(46)</strong> werden.</p>`,
    questions: [
      { id: 25, opts: ['anderes', 'anderen', 'andere', 'anders'], ans: 'anders', expl: "Ibora: «er kann nicht anders» (u boshqacha qila olmaydi)." },
      { id: 26, opts: ['dafür', 'dazu', 'dagegen', 'danach'], ans: 'danach', expl: "«danach aussehen» (shunday ko'rinmoq)." },
      { id: 27, opts: ['zurechtzumachen', 'zurechtzukommen', 'zurechtzufinden', 'zurechtzulegen'], ans: 'zurechtzukommen', expl: "Reflexiv olmoshi yo'qligi sababli «darin zurechtzukommen» (zurechtfinden uchun «sich» kerak bo'lardi)." },
      { id: 28, opts: ['fünf mal', 'fünf Mahl', 'fünfmal', 'fünfmahl'], ans: 'fünfmal', expl: "To'g'ri yozilishi: «fünfmal» (besh marta — qo'shib yoziladi)." },
      { id: 29, opts: ['ließ', 'lässt', 'lassen', 'lasse'], ans: 'lässt', expl: "Präsens 3-shaxs birlik: «Wenn ein Kind ... fallen lässt»." },
      { id: 30, opts: ['Druck', 'Aufprall', 'Stoß', 'Schlag'], ans: 'Aufprall', expl: "«den Aufprall hören» — qoshiqning polga urilish tovushini eshitmoq." },
      { id: 31, opts: ['Zeitvertreib', 'Zeitpunkt', 'Zeitmaß', 'Zeitverlust'], ans: 'Zeitvertreib', expl: "«zum Zeitvertreib» (ermak / vaqt o'tkazish uchun)." },
      { id: 32, opts: ['unseres', 'seines', 'ihres', 'deines'], ans: 'seines', expl: "«man» olmoshining Genitiv shakli: «für den Rest seines Lebens»." },
      { id: 33, opts: ['mit', 'aus', 'an', 'durch'], ans: 'aus', expl: "Ajraluvchi fe'l: «ausprobieren» -> «probieren aus»." },
      { id: 34, opts: ['weil', 'dass', 'damit', 'sodass'], ans: 'dass', expl: "Korrelyat bog'lovchi: «dadurch geformt, dass...»." },
      { id: 35, opts: ['gekräftigt', 'gefestigt', 'bekräftigt', 'befestigt'], ans: 'gefestigt', expl: "Turg'un birikma: «das Selbstvertrauen wird gefestigt»." },
      { id: 36, opts: ['braucht', 'bräuchten', 'brauchen', 'brauchte'], ans: 'braucht', expl: "Shaxssiz ibora: «es braucht Freiräume» (erkin makon kerak)." },
      { id: 37, opts: ['transportiert', 'bevorzugt', 'gewährt', 'fördert'], ans: 'fördert', expl: "«fördert Konzentration und Kreativität»." },
      { id: 38, opts: ['still', 'leise', 'ruhig', 'stumm'], ans: 'ruhig', expl: "Modal yuklama: «die ruhig auch älter sein dürfen» (bemalol kattaroq bo'lishi ham mumkin)." },
      { id: 39, opts: ['sich', 'dir', 'ihm', 'uns'], ans: 'sich', expl: "«man» bilan Dativ reflexiv olmosh: «kann man sich etwas abschauen»." },
      { id: 40, opts: ['sonst', 'doch', 'allerdings', 'aber'], ans: 'doch', expl: "Sabab ma'nosidagi inversiyali gapda yuklama: «sind sie doch ein soziales Training»." },
      { id: 41, opts: ['Zwischen', 'In', 'An', 'Unter'], ans: 'In', expl: "«In die Rolle eines anderen zu schlüpfen»." },
      { id: 42, opts: ['gefüllsmässig', 'Gefühlsmäßig', 'Gefühls mäßig', 'gefühlsmäßig'], ans: 'gefühlsmäßig', expl: "Ravish kichik harf va «ß» bilan yoziladi: «gefühlsmäßig»." },
      { id: 43, opts: ['entwickelt', 'entwickeln', 'entwickelten', 'entwickelte'], ans: 'entwickelt', expl: "«So kann man ... verarbeiten und entwickelt (3-shaxs birlik) gleichzeitig...»." },
      { id: 44, opts: ['am', 'zu', 'für', 'mit'], ans: 'zu', expl: "«das Recht zu spielen»." },
      { id: 45, opts: ['skepptisch', 'sceptisch', 'skeptisch', 'skeptich'], ans: 'skeptisch', expl: "To'g'ri yozilishi: «skeptisch»." },
      { id: 46, opts: ['kopiert', 'integriert', 'sanktioniert', 'respektiert'], ans: 'respektiert', expl: "«Und jede Arbeit muss respektiert werden»." }
    ]
  }
};

// ============================================================================
// VARIANT 36 (PDF 36 — { الاحتمال السادس والثلاثون })
// ============================================================================
export const VARIANT_36_READING = {
  pdfSource: '/assets/aistudio/36_f4a64230.pdf',
  lv1: {
    title: 'Wie Zimmerpflanzen die Wohnzimmer eroberten',
    titleUz: 'Xona o‘simliklari mehmonxonalarni qanday zabt etdi',
    uzbekVocab: [
      { de: 'der Wardsche Kasten', uz: 'Uord qutisi (shisha mini-issiqxona)' },
      { de: 'völlig unbeschadet ankommen', uz: 'mutlaqo shikastlanmasdan (bus-butun) yetib kelmoq' },
      { de: 'gut betuchte Adelige', uz: 'o‘ziga to‘q (badavlat) zodagonlar' },
      { de: 'die Orangerie / zur Schau stellen', uz: 'oranjereya (qishki bog‘) / ko‘z-ko‘z qilib namoyish etmoq' },
      { de: 'gieren nach (+ Dat.)', uz: 'biror narsaga o‘ch bo‘lmoq, intizorlik bilan intilmoq' },
      { de: 'aus den Wohnungen verbannen', uz: 'xonadonlardan siqib chiqarmoq (quvmoq)' },
      { de: 'aufs Gemüt schlagen', uz: 'kayfiyatni buzmoq, ruhiyatga salbiy ta’sir qilmoq' }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: "1–2-xatboshilar va [ 1 ]–[ 3 ] bo'shliqlar",
        uz: "200 yil oldin uzoq o'lkalardan tirik o'simliklarni keltirish deyarli imkonsiz edi. Ingliz shifokori va havaskor botanigi Nataniyel Uord (Nathaniel Ward) shisha mini-issiqxona («Wardscher Kasten») ixtiro qildi. 1833-yilda qirqquloq va o'tlar solingan ikkita shunday quti Angliyadan Avstraliyaga bir necha oylik dengiz safariga yuborildi. [ 1 -> D: Hayratlanarlisi shundaki, o'simliklar o'z manziliga mutlaqo shikastlanmasdan yetib bordi ]. Bungacha ekzotik o'simliklar faqat badavlat zodagonlargagina nasib etardi. [ 2 -> F: Biroq ular o'zlarining sitrus daraxtchalari va rozmarin butalarini yashash xonalarida emas, balki hashamatli issiqxonalarda — oranjereyalarda namoyish etishardi ]. XIX asrda boyib borayotgan shaharliklar (Bürgertum) ekzotik o'simliklarga o'ch bo'lib qoldi: [ 3 -> H: Noyob xona o'simliklari uning vakillari tomonidan xuddi kitoblar yoki kartinalar kabi kolleksiya qilinar va salonda ko'z-ko'z qilinardi ]."
      },
      {
        label: "3–4-xatboshilar va [ 4 ]–[ 6 ] bo'shliqlar",
        uz: "1920-yillardan boshlab did va me'morchilik (Bauhaus) o'zgardi: [ 4 -> G: Manzarali yashil o'simliklar endi zamon ruhiga (Zeitgeist) mos kelmagani sababli xonadonlardan chiqarib tashlandi ]. Faqat 1960-yillardagi «Flower-Power» harakati bilan o'simliklar uylarga va ofis binolariga qaytdi. [ 5 -> E: U yerda (ofislarda) tinimsiz jiringlayotgan telefonlar, bosmaxona bo'yog'i hidi va sigaret tutuni ko'pchilikning ruhiyatiga salbiy ta'sir qilardi ]. Ish beruvchilar bunga qarshi o'simliklardan foydalanishdi. Vaqt o'tishi bilan xona gullari hamma uchun oddiy holga aylandi: [ 6 -> A: Chunki texnologiyalashgan yetishtirish usullari ularni katta hajmda va arzon narxda ishlab chiqarish imkonini bermoqda ]."
      }
    ] as ParagraphTranslation[],
    text: `<p>Exotische Zimmerpflanzen sind für uns inzwischen alltäglich, doch noch vor 200 Jahren gab es in unseren Breiten kaum eine Möglichkeit, Wohnungen mit lebendigem Grün aus fernen Ländern zu schmücken. Denn Pflanzen konnten zu dieser Zeit noch nicht über lange Strecken transportiert werden. Erst mit der Erfindung des englischen Arztes und Hobbybotanikers Nathaniel Ward sollte sich dies ändern: Er konzipierte eine Art Mini-Gewächshaus, das es ermöglichte, Pflanzen über weite Distanzen zu befördern. Dieser speziell angefertigte Glasbehälter wurde unter dem Namen „Wardscher Kasten“ berühmt. 1833 wurden zwei dieser Behälter mit Farnen und Gräsern auf eine mehrmonatige Seereise von England nach Australien geschickt. <span class="text-gap">[ 1 ]</span> Nach diesem beeindruckenden Erfolg machte Ward seine Erfindung bekannt, und Pflanzensammler konnten sich von nun an nicht mehr nur Samen, sondern auch Pflanzen aus weit entfernten Gegenden liefern lassen.</p>
<p>Mit Wards Erfindung begann eigentlich erst die Geschichte der Zimmerpflanze. Vorher war exotisches Grün lediglich gut betuchten Adeligen vorbehalten. <span class="text-gap">[ 2 ]</span> Nachdem die ersten Zimmerpflanzen mit dem Schiff nach Europa gelangt waren, entwickelten sie sich dort schnell zum Statussymbol. Das erstarkende Bürgertum des 19. Jahrhunderts gierte nach Pflanzenneuheiten aus fernen Ländern, große Exotengärtnereien bedienten diese Nachfrage. <span class="text-gap">[ 3 ]</span> Üppig-verspielte Farne und Palmen waren der letzte Schrei; für eine exklusive Orchidee gaben Liebhaber schon mal ein Vermögen aus. Denn wer Zimmerpflanzen sammelte, konnte sich auch den damit verbundenen finanziellen und zeitlichen Aufwand leisten.</p>
<p>Von den 1920er-Jahren an änderten sich jedoch die Vorlieben: <span class="text-gap">[ 4 ]</span> Erst mit der Flower-Power-Bewegung, also ab den 1960er-Jahren, kehrten die Pflanzen zurück in die Wohnräume und eroberten nun auch die Bürokomplexe, in denen immer mehr Menschen die meiste Zeit ihres Tages verbrachten. <span class="text-gap">[ 5 ]</span> Arbeitgeber versuchten daher, mit Pflanzen gegenzusteuern, zumal immer wieder Studien auf den Zusammenhang von Zimmerpflanzen und Luftqualität in geschlossenen Räumen hinwiesen.</p>
<p>Mit der Zeit wandelte sich auch das Image der floralen Dekoration: Lange war diese ein exklusives Hobby für gesellschaftliche Eliten, doch heute sind Zimmerpflanzen eine Selbstverständlichkeit. Der Grund dafür liegt darin, dass sie viel leichter zugänglich geworden sind: <span class="text-gap">[ 6 ]</span> Supermärkte verkaufen Orchideen, das Statussymbol der Gründerzeit schlechthin, heute für zehn bis 15 Euro pro Stück. Mittlerweile hat sich jedoch ein Gegentrend entwickelt: Besonders begehrt sind exklusivere und teurere Pflanzen. Es zeigt sich also deutlich, dass auch Zimmerpflanzen der Mode unterliegen.</p>`,
    options: [
      { key: 'A', text: 'Technisierte Anbaumethoden erlauben nämlich längst ihre Produktion in großem Stil und zu kleinem Preis.', uz: "Chunki texnologiyalashgan yetishtirish usullari allaqachon ularni katta miqyosda va arzon narxda ishlab chiqarish imkonini bermoqda." },
      { key: 'B', text: 'So wurden in China schon vor über 2500 Jahren Topfpflanzen bei Gartenausstellungen gezeigt.', uz: "Chunonchi, Xitoyda 2500 yildan ortiq vaqt muqaddam bog' ko'rgazmalarida tuvakdagi o'simliklar namoyish etilgan. (Ortiqcha gap)" },
      { key: 'C', text: 'In sozialen Netzwerken wird vom Großstadtdschungel geschwärmt, denn Zimmerpflanzen liegen wieder im Trend.', uz: "Ijtimoiy tarmoqlarda «katta shahar changalzori» ko'klarga ko'tarilmoqda, chunki xona o'simliklari yana urfda. (Ortiqcha gap)" },
      { key: 'D', text: 'Erstaunlicherweise kamen die Pflanzen völlig unbeschadet an ihrem Bestimmungsort an.', uz: "Hayratlanarlisi shundaki, o'simliklar o'z manziliga mutlaqo shikastlanmasdan yetib bordi." },
      { key: 'E', text: 'Dort schlugen klingelnde Telefone, Druckerschwärze und Zigarettenrauch vielen aufs Gemüt.', uz: "U yerda (ofislarda) jiringlayotgan telefonlar, bosmaxona bo'yog'i va sigaret tutuni ko'pchilikning ta'bini xira qilardi." },
      { key: 'F', text: 'Diese stellten ihre Zitrusbäumchen und Rosmarinsträucher allerdings noch nicht in ihren Wohnräumen, sondern in Orangerien, also repräsentativen Gewächshäusern, zur Schau.', uz: "Biroq ular o'zlarining sitrus daraxtchalari va rozmarin butalarini yashash xonalarida emas, balki hashamatli oranjereyalarda ko'z-ko'z qilishardi." },
      { key: 'G', text: 'Dekoratives Ziergrün wurde nun aus den Wohnungen verbannt, weil es nicht mehr dem Zeitgeist entsprach.', uz: "Manzarali o'simliklar endi zamon ruhiga mos kelmagani sababli xonadonlardan chiqarib tashlandi." },
      { key: 'H', text: 'Ausgefallenes Zimmergrün wurde von diesem gesammelt wie Bücher oder Gemälde und im Salon zur Schau gestellt.', uz: "Noyob xona o'simliklari u (burjuaziya qatlami) tomonidan xuddi kitoblar yoki kartinalar kabi to'planar va salonda namoyish etilardi." }
    ],
    answers: { '1': 'D', '2': 'F', '3': 'H', '4': 'G', '5': 'E', '6': 'A' },
    explanations: {
      '1': "Angliyadan Avstraliyaga yuborilgan o'simliklarning bus-butun yetib borgani (D) keyingi gapda «Nach diesem beeindruckenden Erfolg» deb davom ettiriladi.",
      '2': "«gut betuchten Adeligen (Pl.)» -> F variantdagi «Diese stellten ihre Zitrusbäumchen ... in Orangerien zur Schau».",
      '3': "«Das erstarkende Bürgertum (Neutrum)» -> H variantdagi «von diesem gesammelt wie Bücher oder Gemälde».",
      '4': "1920-yillardagi o'zgarish va keyingi gapdagi «kehrten die Pflanzen zurück» o'rtasini G variant («wurde nun aus den Wohnungen verbannt») bog'laydi.",
      '5': "«die Bürokomplexe» -> E variantdagi «Dort schlugen klingelnde Telefone ... aufs Gemüt».",
      '6': "O'simliklarning hamma uchun hamyonbop bo'lib qolgani A variantda («Produktion in großem Stil und zu kleinem Preis») izohlanadi."
    }
  },
  lv2: {
    ...VARIANT_34_READING.lv2,
    questions: [
      { id: 7, text: 'In welchem Abschnitt gibt die Autorin einen Rat?', uz: "Qaysi bo'limda muallif maslahat beradi?", ans: 'C', expl: "C bo'limida: «Empfehlenswert ist es vor allem, den Konsum zu reduzieren. So kann man jedem ... ans Herz legen, Sachen auszubessern statt neu anzuschaffen.»" },
      { id: 8, text: 'In welchem Abschnitt zeigt sich die Autorin erstaunt?', uz: "Qaysi bo'limda muallif hayratlanadi?", ans: 'A', expl: "A bo'limida: «dass ich mir ein verblüfftes Stirnrunzeln nicht verkneifen konnte... Ist es nicht verwunderlich, dass...»." },
      { id: 9, text: 'In welchem Abschnitt argumentiert die Autorin mit Zahlen und Fakten?', uz: "Qaysi bo'limda muallif raqamlar va faktlar bilan dalil keltiradi?", ans: 'B', expl: "B bo'limida BMT tadqiqoti, 5 baravar o'sish, 50 mln tonna to'qimachilik chiqindisi va 10% CO2 chiqindilari keltirilgan." },
      { id: 10, text: 'In welchem Abschnitt zieht die Autorin eine Schlussfolgerung?', uz: "Qaysi bo'limda muallif xulosa chiqaradi?", ans: 'C', expl: "C bo'limida: «Aus diesen Informationen lässt sich eindeutig ableiten, dass zusätzliche Käufe ... der Umwelt in jedem Fall eher schaden als nutzen.»" },
      { id: 11, text: 'In welchem Abschnitt äußert die Autorin Bedauern?', uz: "Qaysi bo'limda muallif afsuslanish bildiradi?", ans: 'E', expl: "E bo'limida: «Doch leider sieht es nicht so aus, als würde dies zu einem breiten Umdenken führen. Das ist schade...»." },
      { id: 12, text: 'In welchem Abschnitt erläutert die Autorin ihre persönliche Haltung?', uz: "Qaysi bo'limda muallif o'z shaxsiy pozitsiyasini tushuntiradi?", ans: 'D', expl: "D bo'limida: «Ich selbst lege großen Wert auf fair produzierte Mode, lehne Billigmode ab und kaufe ausschließlich hochwertige Kleidung...»." }
    ]
  },
  lv3: VARIANT_15_READING.lv3,
  sp: VARIANT_31_READING.sp
};

// ============================================================================
// VARIANT 37 (PDF 37 — ♧ الاحتمال السابع والثلاثون ♧)
// ============================================================================
export const VARIANT_37_READING = {
  pdfSource: '/assets/aistudio/37_c706dcd3.pdf',
  lv1: VARIANT_19_READING.lv1,
  lv2: {
    title: 'Welche Bedeutung haben Träume?',
    titleUz: 'Tushlar qanday ahamiyatga ega?',
    uzbekVocab: [
      { de: 'aus dem Schlaf reißen / verpuffen', uz: 'uyqudan keskin uyg‘otib yubormoq / puchga chiqmoq (havoga uchmoq)' },
      { de: 'sich noch mal eine Runde aufs Ohr hauen', uz: 'yana bir pas uxlab olmoq (so‘zlashuv iborasi)' },
      { de: 'naive Esoteriker / leichtgläubig', uz: 'sodda ezoteriklar / ishonuvchan' },
      { de: 'sinnlose Abfallprodukte des Gehirns', uz: 'miyaning ma’nosiz chiqindi mahsulotlari' },
      { de: 'das Neuronengeflimmer', uz: 'neyronlarning tartibsiz miltillashi' },
      { de: 'das rechte Maß einhalten', uz: 'to‘g‘ri me’yorni (oltin o‘rtaliqni) saqlamoq' }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: 'Abschnitt A (Lotereya tushi va tushdagi g‘aroyib hodisalar)',
        uz: "Endigina lotereyada yutib olganingiz haqida xabar eshitganingizda budilnik sizni shafqatsizlarcha uyqudan uyg'otadi! Tushda mantiq va tabiat qonunlari ishlamaydi: biz tortishish kuchini yengib uchamiz, suv ostida nafas olamiz yoki vaqt bo'ylab sayohat qilamiz."
      },
      {
        label: 'Abschnitt B (Sodda ezoteriklar ustidan kinoya va tushlarning ma’nosi haqida shubha)',
        uz: "Qadimdan insoniyat tushlardan ma'no va kelajak bashoratini izlagan. Muallif bunga ishonuvchilar haqida kamsituvchi / tanqidiy (abfällig) fikr bildiradi: «bunga hatto bugungi kunda ham ko'plab sodda ezoteriklar ishonishni xohlaydi. Kimki ishonuvchanlik bilan (leichtgläubig) tush ta'birini qidirsa...» [11-savol: B]. Shu bo'limning oxirida muallif shubha (Bedenken) ham uyg'otadi: «Tungi tasvirlar shunchaki miyaning ma'nosiz chiqindi mahsulotlari emasmi? Ularga e'tibor bermagan ma'qul emasmi?» [8-savol: B]."
      },
      {
        label: 'Abschnitt C (Qarama-qarshi ilmiy nuqtai nazarlar: Freyd va Xobson)',
        uz: "Muallif turli ilmiy pozitsiyalarni bir-biriga qarama-qarshi qo'yadi (verschiedene Standpunkte einander gegenüberstellen): psixoanaliz asoschisi Zigmund Freyd (1899) tushlarda bostirilgan istaklar yashiringan desa, amerikalik psixiatr Allan Xobson (Allan Hobson) Freydga keskin qarshi chiqib, tushlarni tasodifiy neyronlar miltillashi deb atagan [7-savol: C]."
      },
      {
        label: 'Abschnitt D (Tush va REM-bosqich ta’rifi hamda muallifning tilagi)',
        uz: "Muallif tushunchalarga ta'rif (Definitionen) beradi: «Umuman olganda, tush deganda uyqu vaqtidagi ruhiy faoliyat tushuniladi» hamda REM-bosqichlar (ko'zlar tez harakatlanadigan uyqu fazalari) izohlanadi [9-savol: D]. Oxirida muallif tilak (Wunsch) bildiradi: «Uyquda nima uchun miyamizda tasvirlar paydo bo'lishi haqidagi qiziqarli savolga ham tez orada oydinlik kiritilishiga umid qilish qoladi xolos» [10-savol: D]."
      },
      {
        label: 'Abschnitt E (Prefrontal po‘stloq va muallifning maslahati)',
        uz: "Neyroolimlar tush ko'rayotganda mantiq va axloqqa javob beruvchi prefrontal korteks tormozlanishini aniqlashgan. Yakunida muallif maslahat (Rat) beradi: «Tushlarimiz bilan shug'ullanganimizda, avvalo me'yorni saqlashimiz kerak (sollten wir vor allem das rechte Maß einhalten)» [12-savol: E]."
      }
    ] as ParagraphTranslation[],
    text: `<div class="text-paragraph" data-para="A"><span class="para-tag">[Abschnitt A]</span> Was für ein Schrecken! Gerade bekamen Sie die Nachricht, im Lotto gewonnen zu haben ... Und dann reißt Sie der Wecker grausam aus dem Schlaf und schlagartig verpuffen die größten Hoffnungen: Mit dem plötzlichen Geldsegen ist es vorbei ... Wer will sich da nicht lieber noch mal eine Runde aufs Ohr hauen? Im Traum passieren oft skurrile Dinge. Logik und Naturgesetze sind außer Kraft gesetzt und wir können die verrücktesten Abenteuer erleben: Wir überwinden die Schwerkraft, erheben uns wie ein Vogel in die Lüfte, atmen unter Wasser oder unternehmen mir nichts, dir nichts eine Zeitreise. Oft durchleben wir noch einmal in verfremdeter Form die Widrigkeiten des Alltags. In Albträumen suchen uns dagegen unsere größten Ängste heim. Manche dieser nächtlichen Schreckensszenarien sind weitverbreitet: Träume, in denen man verfolgt wird, ins Bodenlose stürzt oder sich hoffnungslos blamiert, sind über Kulturgrenzen hinweg bekannt.</div>
<div class="text-paragraph" data-para="B"><span class="para-tag">[Abschnitt B]</span> Doch welche Bedeutung haben Träume eigentlich? Oft haben wir das Gefühl, dass das im Schlaf Erlebte eine wichtige Botschaft enthält, und tatsächlich beschäftigt sich die Menschheit schon seit Jahrtausenden mit der Frage, was Träume uns eigentlich zu sagen haben. Auch die Wissenschaft bemüht sich, Träume zu durchleuchten, die Psychoanalyse ebenso wie die Neurophysiologie oder Psychologie. Für Götterbotschaften hielt man in der Antike das nächtliche Kopfkino, und seitdem wird immer wieder nach dem Wahrheitsgehalt von Träumen gesucht. Oft wurde ihnen eine prophetische Macht beigemessen, und das nicht nur in vergangenen Zeiten: Dass sich in ihnen die Zukunft offenbare oder verborgene Hinweise in ihnen steckten – daran möchten selbst heutzutage noch viele naive Esoteriker glauben. Wer leichtgläubig nach einem Schlüssel für Traumsymbole sucht, wird unzählige passende Websites finden und fast jede Buchhandlung bietet Bücher über Traumdeutung an. In Träumen wird nach Sinn gesucht, so viel steht fest. Dabei stellt sich allerdings die Frage, ob die Ansicht, Träume enthielten eine Bedeutung, die sich durch intensive Beschäftigung mit ihnen entschlüsseln lässt, möglicherweise auf einem Missverständnis basiert. Sind die nächtlichen Bilder nicht vielmehr sinnlose Abfallprodukte des Gehirns? Sollte man sie nicht am besten einfach ignorieren?</div>
<div class="text-paragraph" data-para="C"><span class="para-tag">[Abschnitt C]</span> Tatsächlich ist der Wahrheitsgehalt von Träumen umstritten, und die Geschichte der Traumdeutung ist geprägt von einem jahrzehntelangen Konflikt zwischen Anhängern und Skeptikern. So kursieren verschiedene Theorien über den Gehalt von Träumen, die einander oft gänzlich ausschließen. Zu den Klassikern gehört Sigmund Freuds 1899 erschienenes Werk „Die Traumdeutung“: Für den Begründer der Psychoanalyse manifestierten sich in Traumsymbolen unterbewusste, verdrängte Wünsche, die in maskierter Form in unser Bewusstsein gelangen. Die spätere Forschung nahm von dieser Theorie jedoch wieder Abstand. Manche Wissenschaftler betrachten Träume gar nur als rein körperliche Reaktion. So nahm der amerikanische Psychiater Allan Hobson eine radikale Gegenposition zu Freud ein und erklärte Träume zum Resultat zufälliger Hirnaktivität, zu einem Neuronengeflimmer ohne jeglichen Sinngehalt. Doch auch von dieser These rückt die Psychologie inzwischen wieder ab. Betrachtet man die heutige Traumforschung, lässt sich eigentlich nur Folgendes daraus ableiten: Zwar kreisen viele Theorien um die Frage, welche Funktion Träume haben, doch eine endgültige Antwort steht noch aus.</div>
<div class="text-paragraph" data-para="D"><span class="para-tag">[Abschnitt D]</span> Diese Schwierigkeit könnte auch darin begründet liegen, dass der Gegenstand der Untersuchung nur schwer zu fassen ist. Forscher können zwar die Gehirnaktivität während des Schlafs verfolgen, aber die Träume selbst spielen sich nur im Kopf ab. Doch was ist ein Traum eigentlich? Im Allgemeinen wird als Traum eine psychische Aktivität während des Schlafes bezeichnet. Daneben existieren nach wie vor wenige gesicherte Fakten. Widerlegt ist mittlerweile die früher weitverbreitete Annahme, dass wir nur in den sogenannten REM-Phasen – Schlafphasen, in denen schnelle Augenbewegungen zu beobachten sind – träumen. In ihnen haben wir zwar die intensivsten Träume, doch wir träumen die ganze Nacht. Die Frage nach dem „Wann“ scheint also mittlerweile geklärt zu sein. Da bleibt es nur zu hoffen, dass auch bald die interessante Frage geklärt wird, warum im Schlaf Bilder in unserem Kopf entstehen.</div>
<div class="text-paragraph" data-para="E"><span class="para-tag">[Abschnitt E]</span> Eine interessante Spur verfolgen dabei Neuroforscher, die bildgebende Verfahren nutzen, um das träumende Gehirn zu beobachten. Dabei kamen sie zu einem verblüffenden und überraschenden Ergebnis: Im Traumzustand ist der präfrontale Cortex gehemmt, jener Bereich im Gehirn, der für Logik, Sinn und Moral zuständig ist. So kann sich die Fantasie befreit von Zwängen und Verboten entfalten. Daher fallen einem im Traum auch manchmal unerwartete Lösungen ein und das Traumgeschehen vollzieht sich fernab jeglicher Logik. Ob darin nun tatsächlich verborgene Wahrheiten stecken, spielt vielleicht gar keine so große Rolle. Wenn wir uns mit unseren Träumen beschäftigen, sollten wir vor allem das rechte Maß einhalten: Wer in jedem Traum zwanghaft nach wichtigen Botschaften sucht, könnte leicht in eine Abhängigkeit geraten. Wenn die Beschäftigung mit Träumen jedoch zu besserer Selbsterkenntnis verhilft, kann das nur nützlich sein.</div>`,
    questions: [
      { id: 7, text: 'In welchem Abschnitt stellt die Autorin verschiedene Standpunkte einander gegenüber?', uz: "Qaysi bo'limda muallif turli nuqtai nazarlarni bir-biriga qarama-qarshi qo'yadi?", ans: 'C', expl: "C bo'limida Zigmund Freydning «Die Traumdeutung» nazariyasi va Allan Xobsonning qarama-qarshi pozitsiyasi («radikale Gegenposition») solishtiriladi." },
      { id: 8, text: 'In welchem Abschnitt wirft die Autorin Bedenken auf?', uz: "Qaysi bo'limda muallif shubha / ikkilanishlarni o'rtaga tashlaydi?", ans: 'B', expl: "B bo'limida: «Dabei stellt sich allerdings die Frage, ob die Ansicht ... möglicherweise auf einem Missverständnis basiert. Sind die nächtlichen Bilder nicht vielmehr sinnlose Abfallprodukte des Gehirns?»" },
      { id: 9, text: 'In welchem Abschnitt liefert die Autorin Definitionen?', uz: "Qaysi bo'limda muallif tushunchalarga ta'rif beradi?", ans: 'D', expl: "D bo'limida «Traum» (uyqudagi ruhiy faoliyat) va «REM-Phasen» tushunchalariga ta'rif berilgan." },
      { id: 10, text: 'In welchem Abschnitt spricht die Autorin einen Wunsch aus?', uz: "Qaysi bo'limda muallif tilak / xohish bildiradi?", ans: 'D', expl: "D bo'limida: «Da bleibt es nur zu hoffen, dass auch bald die interessante Frage geklärt wird, warum im Schlaf Bilder in unserem Kopf entstehen.»" },
      { id: 11, text: 'In welchem Abschnitt äußert sich die Autorin abfällig?', uz: "Qaysi bo'limda muallif boshqalar haqida kamsituvchi (kinoyali) fikr bildiradi?", ans: 'B', expl: "B bo'limida: «daran möchten selbst heutzutage noch viele naive Esoteriker glauben. Wer leichtgläubig nach einem Schlüssel für Traumsymbole sucht...»." },
      { id: 12, text: 'In welchem Abschnitt gibt die Autorin einen Rat?', uz: "Qaysi bo'limda muallif maslahat beradi?", ans: 'E', expl: "E bo'limida: «Wenn wir uns mit unseren Träumen beschäftigen, sollten wir vor allem das rechte Maß einhalten...»." }
    ]
  },
  lv3: {
    ...VARIANT_31_READING.lv3,
    questions: VARIANT_31_READING.lv3.questions.map((q) => {
      if (q.id === 20) {
        return {
          ...q,
          ans: 'F',
          expl: "6-xatboshida: «Den Mut, die japanische Wagyu-Rinderbrust, die australischen Lammkoteletts oder den Räucherlachs von der Restaurantkarte zu nehmen, hatte das Hotelmanagement bisher nicht.» (PDF 37 kaliti: F)."
        };
      }
      if (q.id === 24) {
        return {
          ...q,
          ans: 'A',
          opts: [
            'A) Umweltschutz und Luxusurlaub: ein Dilemma?',
            'B) Die Pflanzenwelt der Seychellen',
            'C) Neue Jobs im Umweltschutz auf den Seychellen'
          ],
          optsUz: [
            "A) Atrof-muhit muhofazasi va hashamatli ta'til: dilemmami?",
            "B) Seyshel orollarining o'simliklar dunyosi",
            "C) Seyshel orollarida tabiatni muhofaza qilish sohasidagi yangi ish o'rinlari"
          ],
          expl: "PDF 37 kitobchasida 24-savolda «Umweltschutz und Luxusurlaub: ein Dilemma?» A variantda berilgan (A)."
        };
      }
      return q;
    })
  },
  sp: {
    title: 'Diktate – lernpsychologisch ungünstig?',
    titleUz: 'Diktantlar — o‘quv psixologiyasi jihatidan noqulaymi?',
    uzbekVocab: [
      { de: 'Konsequenzen ziehen aus (+ Dat.)', uz: 'xulosa chiqarib amaliy чора ko‘rmoq' },
      { de: 'vorgesehen sein', uz: 'rejalashtirilgan / ko‘zda tutilgan bo‘lmoq' },
      { de: 'schwanken zwischen (+ Dat.)', uz: '... orasida tebranmoq (o‘zgarib turmoq)' },
      { de: 'stressempfindlich', uz: 'stressga ta’sirchan' },
      { de: 'das Partnerdiktat', uz: 'juftlikda (sherik bilan) yoziladigan diktant' },
      { de: 'konstatieren', uz: 'qayd etmoq, tasdiqlamoq' },
      { de: 'kein Abbild der Artikulation', uz: 'talaffuzning aynan aksi (nusxasi) emas' },
      { de: 'Korrektur lesen', uz: 'matndagi imlo xatolarini tekshirib tahrir qilmoq (korrektura)' }
    ] as VocabItem[],
    text: `<p>Diktate sind auch heute noch Bestandteil des Sprachunterrichts an Schulen. Forscher fanden jetzt aber heraus, dass sie weder objektiv benotet werden noch Kindern beim Schreibenlernen helfen. In den neuen Bildungsplänen für die Grundschule wurden bereits erste Konsequenzen <strong>(25)</strong>: Benotete Diktate sind nicht mehr <strong>(26)</strong>. In einer Studie haben mehrere hundert Lehrer das gleiche Diktat bewertet und in demselben Text zwischen zwei und elf Fehler gefunden. Auch die Note <strong>(27)</strong>, und zwar zwischen 2 und 5.</p>
<p>Klassendiktate sind lernpsychologisch ungünstig, weil sich immer dasselbe wiederholt. Kinder, die <strong>(28)</strong> sind und die keine Unterstützung von zu Hause erhalten, sind die Verlierer. Sie kommen mit dem Zeitdruck nicht <strong>(29)</strong>. Insofern sind Diktate sehr belastend für immer dieselben Kinder und bestätigen dem Lehrer nur, was er schon weiß. Hinzu kommt: Bei der Bewertung zählen Lehrer alle falschen Wörter und nicht nur <strong>(30)</strong> Rechtschreibthema. Dennoch gibt es sinnvolle Alternativen <strong>(31)</strong> klassischen Diktat. Wenn Lehrer sie nutzen, um zu <strong>(32)</strong>, wo die Kinder Schwierigkeiten haben, oder wenn Kinder in Partnerdiktaten bestimmte Wörter üben, ist dies <strong>(33)</strong> sinnvoll.</p>
<p>Befürworter von Diktaten <strong>(34)</strong>, die Kinder könnten während eines Diktats durch das Zuhören lernen. Aber man muss konstatieren, dass sie Rechtschreibung <strong>(35)</strong> durch Zuhören lernen. Es gibt Lehrer, die den diktierten Text ganz deutlich artikulieren – in der <strong>(36)</strong>, dass die Kinder die Wörter dann richtig schreiben würden. Aber unsere Schrift ist kein <strong>(37)</strong> der Artikulation: Den Unterschied zwischen „Rad“ und „Rat“ kann man nicht hören.</p>
<p>Um <strong>(38)</strong>, ob Kinder richtig schreiben, gibt es Rechtschreib-Tests, bei denen die Kinder nur ein paar Sätze schreiben und Wörter richtig <strong>(39)</strong> – ohne Zeitdruck. Das <strong>(40)</strong> ein wenig der Art, wie Texte in der Erwachsenenwelt entstehen: Manuskripte für Bücher <strong>(41)</strong> in einem gesonderten Schritt Korrektur gelesen. <strong>(42)</strong> darf man nicht außer Acht lassen, dass es auch in der Pädagogik Moden gibt. Vor wenigen Jahrzehnten wurde <strong>(43)</strong> in der Schule immens wichtig genommen, <strong>(44)</strong> in den 80er Jahren das Textschreiben wichtiger war. Erst vor etwa 20 Jahren erkannten Forscher, <strong>(45)</strong> Kinder Rechtschreiben lernen und dass wir diese Erkenntnisse von Anfang an <strong>(46)</strong> müssen.</p>`,
    questions: [
      { id: 25, opts: ['genommen', 'verhängt', 'getan', 'gezogen'], ans: 'gezogen', expl: "Turg'un birikma: «Konsequenzen ziehen» (xulosa chiqarib chora ko'rmoq)." },
      { id: 26, opts: ['vorgetragen', 'vorgesehen', 'vorgeschlagen', 'vorgemacht'], ans: 'vorgesehen', expl: "«Benotete Diktate sind nicht mehr vorgesehen» (rejalashtirilmagan / ko'zda tutilmagan)." },
      { id: 27, opts: ['schwang', 'schwenkte', 'schwankte', 'wankte'], ans: 'schwankte', expl: "«die Note schwankte zwischen 2 und 5» (baho 2 va 5 orasida tebrandi)." },
      { id: 28, opts: ['stresempfindlich', 'stressempfindlich', 'streßempfindlich', 'stressempfintlich'], ans: 'stressempfindlich', expl: "To'g'ri yozilishi: «stressempfindlich»." },
      { id: 29, opts: ['durch', 'voran', 'aus', 'zurecht'], ans: 'zurecht', expl: "Ajraluvchi fe'l: «mit dem Zeitdruck nicht zurechtkommen»." },
      { id: 30, opts: ['das zuvor geübte', 'das vornherein geübte', 'zuvor das geübte', 'vornherein das geübte'], ans: 'das zuvor geübte', expl: "«nicht nur das zuvor geübte Rechtschreibthema» (nafaqat oldin mashq qilingan imlo mavzusini)." },
      { id: 31, opts: ['von', 'vom', 'zum', 'zu'], ans: 'zum', expl: "«Alternativen zum klassischen Diktat» (Alternative zu + Dat.)." },
      { id: 32, opts: ['analiesyren', 'analisieren', 'annalysieren', 'analysieren'], ans: 'analysieren', expl: "To'g'ri yozilishi: «analysieren»." },
      { id: 33, opts: ['zumal', 'daraus', 'durchaus', 'angedacht'], ans: 'durchaus', expl: "«ist dies durchaus sinnvoll» (bu juda ham maqsadga muvofiq)." },
      { id: 34, opts: ['bestreiten', 'rechtfertigen', 'argumentieren', 'begründen'], ans: 'argumentieren', expl: "«Befürworter von Diktaten argumentieren, die Kinder könnten...»." },
      { id: 35, opts: ['absolut', 'genau', 'eben nicht', 'gleichmäßig nicht'], ans: 'eben nicht', expl: "«dass sie Rechtschreibung eben nicht durch Zuhören lernen» (aynan eshitish orqali o'rganmasligini)." },
      { id: 36, opts: ['Annahme', 'Abnahme', 'Ausnahme', 'Aufnahme'], ans: 'Annahme', expl: "«in der Annahme, dass...» (... degan taxmin/umid bilan)." },
      { id: 37, opts: ['Sinnbild', 'Bildnis', 'Abbild', 'Trugbild'], ans: 'Abbild', expl: "«unsere Schrift ist kein Abbild der Artikulation» (talaffuzning aynan nusxasi emas)." },
      { id: 38, opts: ['festzunehmen', 'festzulegen', 'festzustellen', 'festzusetzen'], ans: 'festzustellen', expl: "«Um festzustellen, ob Kinder richtig schreiben» (aniqlash uchun)." },
      { id: 39, opts: ['einsetzen müssen', 'einschreiben müssen', 'einfinden müssen', 'müssen einsetzen'], ans: 'einsetzen müssen', expl: "Ergash gapda («bei denen...») fe'l oxirida keladi: «Wörter richtig einsetzen müssen»." },
      { id: 40, opts: ['entkommt', 'entspricht', 'betrifft', 'beschreibt'], ans: 'entspricht', expl: "«Das entspricht (+ Dat.) ein wenig der Art...» (bu ... usuliga mos keladi)." },
      { id: 41, opts: ['worden', 'werden', 'wurden', 'würden'], ans: 'werden', expl: "Umumiy qoida (Präsens Passiv): «Manuskripte für Bücher werden ... Korrektur gelesen»." },
      { id: 42, opts: ['Längstens', 'Schließlich', 'Letztens', 'Kürzlich'], ans: 'Schließlich', expl: "Yakuniy dalilni kiritish: «Schließlich darf man nicht außer Acht lassen...»." },
      { id: 43, opts: ['Ohrtografie', 'Orthokrafie', 'Orthografie', 'Ortografie'], ans: 'Orthografie', expl: "To'g'ri yozilishi: «Orthografie»." },
      { id: 44, opts: ['wohingegen', 'wofür', 'entgegen', 'wovon'], ans: 'wohingegen', expl: "Zidlash bog'lovchisi: «wohingegen in den 80er Jahren das Textschreiben wichtiger war»." },
      { id: 45, opts: ['wie', 'dass', 'als', 'ob'], ans: 'wie', expl: "«erkannten Forscher, wie Kinder Rechtschreiben lernen» (bolalar qanday o'rganishini)." },
      { id: 46, opts: ['einnehmen', 'ernst nehmen', 'vornehmen', 'mitnehmen'], ans: 'ernst nehmen', expl: "Turg'un birikma: «etwas ernst nehmen» (jiddiy qabul qilmoq)." }
    ]
  }
};

// ============================================================================
// VARIANT 38 (PDF 38)
// ============================================================================
export const VARIANT_38_READING = {
  pdfSource: '/assets/aistudio/38_bb851e7d.pdf',
  lv1: {
    title: 'Für eine neue Sprache ist es nie zu spät',
    titleUz: 'Yangi til o‘rganish uchun hech qachon kech emas',
    uzbekVocab: [
      { de: 'die kritische Altersschwelle', uz: 'kritik yosh chegarasi' },
      { de: 'durchscheinen (die Erstsprache)', uz: 'ona tili aksenti sezilib turmoq' },
      { de: 'die Plastizität (Wandelbarkeit) des Gehirns', uz: 'miyaning egiluvchanligi (moslashuvchanligi)' },
      { de: 'die Sprachfärbung / der Akzent', uz: 'talaffuz ohangi (aksent)' },
      { de: 'dem Sprachverständnis im Weg stehen', uz: 'tilni tushunishga to‘sqinlik qilmoq' }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: "1–2-xatboshilar va [ 1 ]–[ 2 ] bo'shliqlar",
        uz: "72 yoshli myunxenlik Arno Baum grek tilini o'rganmoqda. Ta'lim tadqiqotchisi Ingo Vayshaupt (Ingo Weißhaupt) muhojirlar o'zaro yangi mamlakat tilini qanchalik yaxshi o'rganishi nimaga bog'liqligini o'rgangan. [ 1 -> G: «Kimki bolaligida ko'chib kelsa, u tilni qiynalmasdan o'rganadi», — deyiladi uning xulosalaridan birida ]. Tilshunoslikda uzoq vaqt «kritik yosh chegarasi» (kritische Altersschwelle) mavjud deb hisoblangan: [ 2 -> E: Ko'pincha ushbu davr kechi bilan balog'at yoshida (Pubertät) tugaydi deb taxmin qilingan ]. Bunga sabab sifatida balog'at yoshidan keyin miya egiluvchanligi (Plastizität) kamayishi ko'rsatilgan."
      },
      {
        label: "3–4-xatboshilar va [ 3 ]–[ 6 ] bo'shliqlar",
        uz: "Buni 2006-yilda Vashington universiteti olimasi Patrisiya Kul (Patricia Kuhl) tadqiqoti ham tasdiqlaydi. [ 3 -> B: Olimlar yapon va amerikalik chaqaloqlar tovushlarni bir-biridan qanchalik yaxshi farqlay olishini tekshirdilar ]. 6–12 oylik chaqaloqlarga «l» va «r» undoshlari eshittirildi: amerikalik chaqaloqlar 10–12 oyligida bu tovushlarni yanada yaxshi farqlagan bo'lsa, [ 4 -> A: Yapon chaqaloqlarida esa buning mutlaqo aksi bo'ldi — ular qanchalik katta bo'lsa, farqlash shunchalik qiyinlashdi ]. Buning izohi: [ 5 -> F: Chaqaloqlar aslida barcha tillardagi tovushlarni farqlash qobiliyatiga ega ], ammo 1 yosh davomida yapon tilida «r» tovushi bo'lmagani uchun bu qobiliyat yo'qoladi. Biroq kattalar bundan cho'chimasligi kerak: [ 6 -> D: Odatda aksent tilni tushunishga to'sqinlik qilmaydi ]. Individual talaffuz ohangi (Sprachfärbung) hatto yoqimli eshitilishi mumkin."
      }
    ] as ParagraphTranslation[],
    text: `<p>Arno Baum ist 72 Jahre alt, kaufmännischer Angestellter im Ruhestand und lebt in München. Sein neuestes Projekt: Griechisch lernen. „Ich habe Freunde in Griechenland und will an den Gesprächen besser teilnehmen können“, erzählt er. In Arno Baums fortgeschrittenem Alter ist es gewiss eher ungewöhnlich, noch eine neue Fremdsprache zu erlernen. Denn oft heißt es: Wer eine Fremdsprache lernen will, sollte möglichst jung sein, und Erwachsene täten sich damit deutlich schwerer als Kinder.</p>
<p>„Das Alter eines Menschen ist tatsächlich ein wichtiger Faktor“, bestätigt Bildungsforscher Ingo Weißhaupt. Er hat unter anderem untersucht, wovon es abhängt, wie gut Immigranten die Sprache ihres Gastlandes lernen. <span class="text-gap">[ 1 ]</span> Die Linguistik sei lange sogar von einer kritischen Altersschwelle ausgegangen, berichtet Weißhaupt. Es bestand die Annahme, man könne eine Zweitsprache nur bis zu einem gewissen Alter so gut lernen, dass die Erstsprache nicht durchscheine. Demnach könnten nur Kinder oder Jugendliche, die den Erwerb einer Zweitsprache bis zu einem bestimmten Zeitpunkt beginnen, ein muttersprachliches Niveau erreichen. <span class="text-gap">[ 2 ]</span> Begründet wurde diese These damit, dass die Plastizität, also die Wandelbarkeit des Gehirns, mit der Zeit abnimmt, und zwar besonders nach der Pubertät, wenn es seine natürliche neurologische Reife erreicht. Diese Annahme ist zwar nach wie vor umstritten – doch was die Aussprache betrifft, gilt sie als belegt.</p>
<p>In diese Richtung deutet zum Beispiel eine Studie aus dem Jahr 2006, die von einer Forschungsgruppe um Patricia Kuhl von der University of Washington durchgeführt wurde. <span class="text-gap">[ 3 ]</span> Dazu spielten sie den Säuglingen im Alter zwischen sechs und zwölf Monaten Silben vor, die die Konsonanten „l“ und „r“ enthielten. Das Ergebnis: Die amerikanischen Babys konnten die Silben im Alter von zehn bis zwölf Monaten besser unterscheiden als noch mit sechs bis acht Monaten. <span class="text-gap">[ 4 ]</span> Dieses Ergebnis mag zunächst überraschen. Wie kam es also zustande? Die Wissenschaftler haben dafür folgende Erklärung gefunden: <span class="text-gap">[ 5 ]</span>, aber nicht lange: Im Verlauf des ersten Lebensjahres verlieren zum Beispiel Kinder, die nur Japanisch hören, die Fähigkeit, die Konsonanten „r“ und „l“ zu unterscheiden – denn der Laut „r“ kommt im Japanischen nicht vor. Dies braucht jedoch Erwachsene vom Sprachenlernen nicht abzuhalten. Denn eine perfekte Aussprache muss nicht unbedingt das Ziel sein, wenn man in einer Sprache ein gutes Niveau erreichen möchte. Davon zeigt sich Bildungsforscher Ingo Weißhaupt überzeugt. <span class="text-gap">[ 6 ]</span> Eine individuelle Sprachfärbung könne sogar sympathisch klingen und die eigene Geschichte und Herkunft signalisieren.</p>
<p>Der 72-jährige Arno Baum traut sich derzeit zwar noch nicht, Griechisch zu sprechen. Doch er hat ein konkretes Ziel vor Augen: Im nächsten Urlaub will er mit seinen griechischen Freunden ein richtiges Gespräch führen können.</p>`,
    options: [
      { key: 'A', text: 'Bei den japanischen Babys war es hingegen genau umgekehrt – je älter sie waren, umso schwerer fiel es ihnen.', uz: "Yapon chaqaloqlarida esa buning mutlaqo aksi bo'ldi — ular qanchalik katta bo'lsa, bu ularga shunchalik qiyin kechdi." },
      { key: 'B', text: 'Die Wissenschaftler untersuchten, wie gut japanische und US-amerikanische Babys Laute voneinander unterscheiden können.', uz: "Olimlar yapon va amerikalik chaqaloqlar tovushlarni bir-biridan qanchalik yaxshi farqlay olishini tadqiq etishdi." },
      { key: 'C', text: 'Erst wenn er zu Nachteilen am Arbeitsplatz führe, werde er zu einem Problem.', uz: "Faqat ish joyida noqulayliklarga olib kelgandagina u muammoga aylanadi. (Ortiqcha gap)" },
      { key: 'D', text: 'In der Regel stehe ein Akzent dem Sprachverständnis nicht im Weg.', uz: "Odatda aksent tilni tushunishga to'sqinlik qilmaydi." },
      { key: 'E', text: 'Oft wurde vermutet, dass diese Phase spätestens mit der Pubertät endet.', uz: "Ko'pincha ushbu davr kechi bilan balog'at yoshida (Pubertät) tugaydi deb taxmin qilingan." },
      { key: 'F', text: 'Säuglinge sind grundsätzlich in der Lage, die Laute aller Sprachen zu unterscheiden,', uz: "Chaqaloqlar aslida barcha tillardagi tovushlarni farqlash qobiliyatiga ega," },
      { key: 'G', text: 'Wer als Kind einwandert, lernt diese mühelos, lautet eines seiner Ergebnisse.', uz: "«Kimki bolaligida ko'chib kelsa, uni (tilni) qiynalmay o'rganadi», — deyiladi uning xulosalaridan birida." },
      { key: 'H', text: 'Wer erwartet, im Alltag von einer Sprache zu profitieren, ist entsprechend motiviert, diese zu erlernen.', uz: "Kundalik hayotda tildan foyda ko'rishni kutgan kishi uni o'rganishga shunga yarasha motivatsiyali bo'ladi. (Ortiqcha gap)" }
    ],
    answers: { '1': 'G', '2': 'E', '3': 'B', '4': 'A', '5': 'F', '6': 'D' },
    explanations: {
      '1': "Ingo Weißhauptning muhojirlar haqidagi tadqiqotidan so'ng G variantda «Wer als Kind einwandert... lautet eines seiner Ergebnisse» keladi.",
      '2': "«kritische Altersschwelle» va keyingi gapdagi «besonders nach der Pubertät» o'rtasini E variant («diese Phase spätestens mit der Pubertät endet») bog'laydi.",
      '3': "Patricia Kuhl tadqiqoti B variantda («japanische und US-amerikanische Babys») tanishtiriladi.",
      '4': "Amerikalik chaqaloqlar natijasiga qarama-qarshi ravishda A variantda yapon chaqaloqlari natijasi («hingegen genau umgekehrt») keltiriladi.",
      '5': "Vergul va «, aber nicht lange:» dan oldin F variant («Säuglinge sind grundsätzlich in der Lage, die Laute aller Sprachen zu unterscheiden,») gapni grammatik yakunlaydi.",
      '6': "Keyingi gapdagi «Eine individuelle Sprachfärbung» iborasiga D variantdagi «ein Akzent» mos tushadi."
    }
  },
  lv2: {
    title: 'Präsentationen an der Uni: Langeweile garantiert',
    titleUz: 'Universitetdagi taqdimotlar: zerikish kafolatlangan',
    uzbekVocab: [
      { de: 'das kollektive Wegdämmern', uz: 'jamoaviy mudroq bosishi (uyquga ketish)' },
      { de: 'die uferlose Vermüllung', uz: 'cheksiz axlatga (ma’nosiz grafiklarga) to‘ldirib tashlash' },
      { de: 'die Glossophobie', uz: 'glossofobiya (omma oldida nutq so‘zlashdan qo‘rqish)' },
      { de: 'in sich zusammenfallen wie ein Soufflé', uz: 'sufle pishirig‘i kabi puchayib (cho‘kib) qolmoq' },
      { de: 'jemandem auf die Füße fallen', uz: 'keyinchalik o‘ziga zarar bo‘lib qaytmoq (imtihonda pand bermoq)' },
      { de: 'sich an seinen Folien entlanghangeln', uz: 'slaydlarga yopishib olib zo‘rg‘a gapirmoq' }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: 'Abschnitt A (Auditoriyadagi shirin uyqu — o‘quvchini kuldirib ko‘nglini olish)',
        uz: "Muallif hazilomuz ohangda o'quvchini zavqlantiradi (unterhalten): birinchi slaydda ma'ruzachi ismi, ikkinchisida «Xush kelibsiz» yozuvi, uchinchisidan keyin esa kursdoshlar «shirin tushlar saltanatiga» (ins Reich der süßen Träume) ravona bo'lishadi va boshlari asta-sekin egilib uxlab qolishadi [7-savol: A]."
      },
      {
        label: 'Abschnitt B (Edvard Taftining tanqidi va muallifning taajjubi)',
        uz: "Ta'lim tadqiqotchisi Kristof Veker (Christof Wecker) va Yel universiteti professori Edvard Tafti («Powerpoint is evil») bunday taqdimotlarning zarari haqida yozgan. Muallif o'z hayratini (Verwunderung) bildiradi: «Shunday ekan, auditoriyalarda bunga qarshi hech qanday norozilik uyg'onmayotgani, aksincha talabalar slaydlarni talab qilayotgani yanada hayratlanarlidir (Umso erstaunlicher ist es...)» [8-savol: B]."
      },
      {
        label: 'Abschnitt C (Slaydlar mashhurligi sabablarini izohlash va «Glossofobiya» ta’rifi)',
        uz: "Muallif slaydlar nega bu qadar sevimli ekaniga izoh (Erklärungen) qidiradi: «Xo'sh, nima uchun slaydlar bunchalik mashhur? Albatta, bir tomondan bu talabalarning qulayligiga mos keladi...» [12-savol: C]. Shu bo'limda u «Glossophobie» tushunchasiga ta'rif (Definition) beradi: «Omma oldida gapirishdan bunday qo'rqish „glossofobiya“ deb ataladi» [9-savol: C]."
      },
      {
        label: 'Abschnitt D (Soxta xavfsizlik hissi va imtihon haqida ogohlantirish)',
        uz: "Muallif ogohlantirish (Warnung) beradi: slaydlar bilimsizlikni yashiruvchi niqob bo'lib, ma'ruzachida soxta ishonch uyg'otadi; «Kechi bilan imtihonda bu unga pand berishi mumkin (Spätestens in einer Prüfung könnte ihm dies auf die Füße fallen)» [11-savol: D]."
      },
      {
        label: 'Abschnitt E (Yaxshi ma’ruza uchun oddiy tavsiya)',
        uz: "Yakunida muallif tavsiya (Empfehlung / Ratschlag) beradi: «Yaxshi ma'ruza qilmoqchi bo'lgan har bir kishiga beriladigan oddiy maslahat bor: ma'ruza texnik vositalarsiz ham ishlay olishi, slaydlar esa aytilgan fikrni shunchaki to'ldirishi kerak» [10-savol: E]."
      }
    ] as ParagraphTranslation[],
    text: `<div class="text-paragraph" data-para="A"><span class="para-tag">[Abschnitt A]</span> Vor Präsentationen gibt es an der Uni kein Entkommen. Diese erstellen zu können gilt heutzutage als eine grundlegende Fähigkeit wie Lesen und Schreiben, fast noch wichtiger sogar, und aus Hörsälen und Seminarräumen sind die Folien nicht mehr wegzudenken. Von jedem Studienanfänger im ersten Semester wird heute erwartet, dass er sein Referat mit PowerPoint-Folien unterlegt. Die erste zeigt in der Regel den Namen des Referenten, auf der zweiten steht „Herzlich willkommen“. Nach der dritten schalten die Kommilitonen ab und verschwinden ins Reich der süßen Träume. Dieses kollektive Wegdämmern ist natürlich nicht beabsichtigt, wird aber toleriert. Denn wer schläft, stellt auch keine lästigen Fragen. Der Referent fährt dann unbeirrt fort und liest von seiner Folie vor, was jeder selbst lesen könnte. Dazu ein paar Bilder, Grafiken und Tabellen, die das Ganze aufhübschen – und fertig ist die Präsentation, bei der sich die Köpfe der Zuhörer unausweichlich nach unten neigen, bis sie langsam entschlummern.</div>
<div class="text-paragraph" data-para="B"><span class="para-tag">[Abschnitt B]</span> Eigentlich wissen es alle: Der Nutzen solcher Präsentationen ist minimal, und in vielen Fällen sind sie sogar kontraproduktiv. Dies meint auch Bildungsforscher Christof Wecker, der weltweit Studien zu dem Thema ausgewertet hat. Sein Fazit: Wer eine Folie sieht, hört nicht mehr zu. Man vergisst die Inhalte schneller, behält wichtige Erkenntnisse aber nicht. Der ganze PowerPoint-Zirkus sei nicht nur nervig, sondern schädlich, schrieb schon 2003 der Yale-Professor Edward Tufte in einem Artikel mit der Überschrift „Powerpoint is evil“. PowerPoint mache sogar dumm, behauptete der Emeritus für Statistik, Grafik-Design und politische Ökonomie. Denn das Programm fördere die uferlose Vermüllung der Präsentationen mit gehaltlosen Info-Grafiken. Die Schwächen sind also schon lange hinlänglich bekannt. Umso erstaunlicher ist es, dass sich in den Hörsälen kein Widerstand regt, ganz im Gegenteil: Oft fordern die Studenten Präsentationen regelrecht ein.</div>
<div class="text-paragraph" data-para="C"><span class="para-tag">[Abschnitt C]</span> Doch warum sind die Folien so beliebt? Natürlich liegt es zum einen daran, dass sie der Bequemlichkeit der Studenten entgegenkommen. Sie können sich das Mitschreiben sparen, haben Schwarz auf Weiß, was sie für ihre Klausuren lernen müssen. Und wehe, der Dozent hält sich nicht daran, fragt Themen ab, die er zwar ausführlich, aber nur mündlich, ohne Folie, behandelt hat! Dann ist der Ärger groß ... Einige Professoren erklären schon zu Semesterbeginn: Es gilt ausdrücklich das gesprochene Wort – also nicht nur die Folie! Aber die Ursachen dafür, dass sich Präsentationen an der Uni und nicht nur dort so sehr verbreiten konnten, liegen noch tiefer – und oft beim Vortragenden selbst. Schließlich ist nicht jeder Student, jede Dozentin und auch nicht jeder Professor ein begnadeter Redner. Drei Viertel der Menschen hassen öffentliche Auftritte – „Glossophobie“ nennt sich diese Angst, vor Publikum zu sprechen. Und da ist nichts leichter, als sich hinter einem Haufen Folien zu verstecken in dem Glauben: Da kann nichts schiefgehen, man muss ja nur ablesen.</div>
<div class="text-paragraph" data-para="D"><span class="para-tag">[Abschnitt D]</span> Zu ergänzen ist noch, dass Präsentationen eine Gefahr mit sich bringen, die oft verkannt wird: Sie bieten die perfekte Tarnung für Unsicherheit, inhaltliche Leere und fehlendes Wissen. Ohne Folien würden viele Vorträge in sich zusammenfallen wie ein Soufflé, reihen sie doch oft nur Allgemeinplätze aneinander. Für die Zuhörer bedeutet dies verschwendete Lebenszeit, der Referent dagegen wiegt sich in falscher Sicherheit. Er glaubt, ein Thema zu beherrschen, es inhaltlich durchdrungen zu haben, obwohl er letztlich nur banale Informationen zusammengestellt und vorgelesen hat. Spätestens in einer Prüfung könnte ihm dies auf die Füße fallen. Und was außerdem schwer wiegt: Wer sich in einem Vortrag immer nur an seinen Folien entlanghangelt, kann es kaum erlernen, frei zu sprechen und einen souveränen Vortragsstil zu entwickeln. Er nimmt sich also die Chance, Fähigkeiten zu erwerben, die ihn im Berufsleben voranbringen könnten.</div>
<div class="text-paragraph" data-para="E"><span class="para-tag">[Abschnitt E]</span> Dennoch: Einen Weg zurück gibt es nicht, und Präsentationen sind aus dem Uni-Alltag nicht mehr wegzudenken. Und das muss auch gar nicht sein. Denn es soll auch nicht ausgeblendet werden, dass die Folien, bei allen denkbaren Nachteilen, auch vernünftig eingesetzt werden können. Denn letztlich sind sie nur ein Hilfsmittel – und es kommt eben immer darauf an, wie ein solches verwendet wird. Folien bringen dem Zuhörer nichts, wenn der Redner sie als Spickzettel missbraucht. Sie können aber ein zusätzliches Plus bieten: Wenn ein Mediziner eine spezielle Gewebeprobe zeigt, ein Architekt seinen Entwurf für den Rathaus-Neubau einblendet, ist das sinnvoll. Und letztlich gibt es einen einfachen Ratschlag, den man jedem ans Herz legen könnte, der einen guten Vortrag halten will: Der Vortrag sollte bestenfalls auch ohne technische Hilfsmittel funktionieren und Präsentationen das Gesagte bloß ergänzen. Wenn der Redner als Person mit seinen rhetorischen Fähigkeiten, die Inhalte und natürlich auch die Zuhörer – die nicht mit unzähligen Tabellen und Grafiken gelangweilt werden wollen – wieder mehr im Mittelpunkt stehen, ist gegen Folien nämlich gar nichts einzuwenden.</div>`,
    questions: [
      { id: 7, text: 'In welchem Abschnitt will der Autor unterhalten?', uz: "Qaysi bo'limda muallif o'quvchini kuldirib ko'nglini olmoqchi?", ans: 'A', expl: "A bo'limida taqdimotning 3-slaydidan keyinoq talabalarning «shirin uyqu saltanatiga» ketishi hazil bilan tasvirlangan." },
      { id: 8, text: 'In welchem Abschnitt äußert der Autor Verwunderung?', uz: "Qaysi bo'limda muallif taajjub (hayrat) bildiradi?", ans: 'B', expl: "B bo'limida: «Umso erstaunlicher ist es, dass sich in den Hörsälen kein Widerstand regt, ganz im Gegenteil...»." },
      { id: 9, text: 'In welchem Abschnitt definiert der Autor einen Begriff?', uz: "Qaysi bo'limda muallif bir tushunchaga ta'rif beradi?", ans: 'C', expl: "C bo'limida «Glossophobie» atamasiga ta'rif beriladi: «„Glossophobie“ nennt sich diese Angst, vor Publikum zu sprechen» (PDF 38 qo'lyozmasida A/C belgilangan)." },
      { id: 10, text: 'In welchem Abschnitt gibt der Autor eine Empfehlung?', uz: "Qaysi bo'limda muallif tavsiya beradi?", ans: 'E', expl: "E bo'limida: «Und letztlich gibt es einen einfachen Ratschlag, den man jedem ans Herz legen könnte... Der Vortrag sollte bestenfalls auch ohne technische Hilfsmittel funktionieren»." },
      { id: 11, text: 'In welchem Abschnitt spricht der Autor eine Warnung aus?', uz: "Qaysi bo'limda muallif ogohlantirish bildiradi?", ans: 'D', expl: "D bo'limida: «Präsentationen eine Gefahr mit sich bringen... Spätestens in einer Prüfung könnte ihm dies auf die Füße fallen.»" },
      { id: 12, text: 'In welchem Abschnitt sucht der Autor nach Erklärungen?', uz: "Qaysi bo'limda muallif izoh (sabab) qidiradi?", ans: 'C', expl: "C bo'limida: «Doch warum sind die Folien so beliebt? Natürlich liegt es zum einen daran, dass... Aber die Ursachen dafür ... liegen noch tiefer»." }
    ]
  },
  lv3: {
    title: 'Ein Zweitstudium will wohl überlegt sein',
    titleUz: 'Ikkinchi oliy ta’lim puxta o‘ylab ko‘rilishi kerak',
    uzbekVocab: [
      { de: 'das Zweitstudium', uz: 'ikkinchi oliy ta’lim (birinchi diplomdan keyin)' },
      { de: 'in die Fußstapfen des Vaters treten', uz: 'otasining izidan bormoq (kasbini davom ettirmoq)' },
      { de: 'die Stofffülle / das Durchhaltevermögen', uz: 'o‘quv materialining ko‘pligi / chidam va sabr-toqat' },
      { de: 'einen gutbezahlten Job ergattern', uz: 'yaxshi maoshli ishni qo‘lga kiritmoq' },
      { de: 'zulassungsbeschränkte Studiengänge', uz: 'qabul kvotasi cheklangan (Numerus clausus) yo‘nalishlar' },
      { de: 'mit einem schmalen Budget zurechtkommen', uz: 'kamtarona (kichik) byudjet bilan kun kechirmoq' }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: '1–2-xatboshilar (Selina Mishel: Jurnalistikadan Tibbiyotga o‘tish)',
        uz: "32 yoshli Selina Mishel ikki semestrdan beri Mayns universitetida tibbiyot (Humanmedizin) yo'nalishida ikkinchi oliy ta'lim olmoqda. Shifokor qizi bo'lgan Selina maktabni bitirganida tibbiyotdagi ulkan o'quv yuklamasidan (Stofffülle) cho'chib («Ehrlich gesagt, habe ich mir das damals nicht zugetraut»), jurnalistikani tanlagan edi [13-savol: R]. Jurnalistikani bitirgach, u tibbiyot nashriyotida yaxshi maoshli ish topdi («einen gutbezahlten Job ergattert») [14-savol: F], ammo bilim doirasini kengaytirish uchun tibbiyotga hujjat topshirdi."
      },
      {
        label: '3–5-xatboshilar (Karyera maslahatchisi Byorn Maynelt, 3% kvota va xususiy universitetlar)',
        uz: "Karyera maslahatchisi Byorn Mayneltning ta'kidlashicha, ikkinchi oliy ta'lim birinchi mutaxassislikka mavzu jihatidan mos kelishi shart emas («müsse nicht unbedingt thematisch zu dem ersten Studium passen») [15-savol: F]. Qabul cheklangan yo'nalishlarda ikkinchi oliy ta'lim uchun o'rinlarning maksimal 3 foizi (Quote) ajratiladi va murakkab saralashdan (ariza asoslashdan) o'tish talab etiladi [16-savol: R, 17-savol: R]. Xususiy oliygohlarda kontrakt qimmat bo'lsa-da, talabalar kamroq bo'lgani uchun o'qituvchilar har bir talabaga ko'proq vaqt ajrata oladi (yaxshiroq Betreuungsverhältnis) [18-savol: R]."
      },
      {
        label: '6–8-xatboshilar (Leni Karrenbauer, moliyaviy qiyinchiliklar va ishga kirish suhbati)',
        uz: "38 yoshli Leni Karrenbauer avval ijtimoiy ish bo'yicha o'qib, keyin Kyoln texnika oliygohida onlayn-jurnalistika bo'yicha ikkinchi oliy ta'limni yaqinda muvaffaqiyatli tamomladi (tashlab ketmagan!) [20-savol: F] (uning rahbarlik lavozimini ko'zlagani haqida esa matnda aytilmagan [19-savol: X]). Selina Mishel o'qishni qo'shimcha ish va KfW ta'lim krediti bilan moliyalashtiradi (jamg'armasini ishlatgani haqida gap yo'q [21-savol: X]) va ba'zida to'g'ri yo'l tanlaganiga shubhalanib qoladi [22-savol: R]. Kasb maslahatchisi Katrin Baxning aytishicha, ishga kirish jarayonida (Bewerbungsprozess) bitiruvchilar ikkinchi oliy ta'lim sababi bo'yicha jiddiy savollarga duch kelishi va o'z qarorini asoslab berishi kerak bo'ladi [23-savol: R]."
      }
    ] as ParagraphTranslation[],
    text: `<p>Mit einem Abschluss in der Tasche noch einmal studieren? Die Gründe, ein zweites Studium anzustreben, sind vielfältig. Vielleicht hat sich der Arbeitsmarkt verändert und man hofft auf bessere Karriereperspektiven. Oder man möchte die ursprüngliche Entscheidung revidieren und strebt nun eine Kurskorrektur an. So ging es auch Selina Michel, die seit zwei Semestern Medizin studiert. Ihr Stundenplan sieht aus wie der jeder anderen Medizinstudentin auch: Physik, Chemie und Anatomie, gefolgt von Vorlesungen zu Augenheilkunde und Neurologie. Allerdings kommt sie nicht, wie viele ihrer Kommilitonen, frisch vom Gymnasium: Sie ist 32 Jahre alt, hat schon ein komplettes Studium hinter sich und mehrere Jahre Berufserfahrung vorzuweisen.</p>
<p>Als Tochter eines Arztes wollte sie eigentlich schon als Kind in die Fußstapfen ihres Vaters treten. Doch als sie Abitur gemacht hatte, entschied sie sich dagegen. Einerseits reizte sie das Fach Medizin zwar noch, andererseits hörte sie oft, dass Medizinstudenten eine sehr hohe Stofffülle zu bewältigen haben und viel Durchhaltevermögen brauchen. „Ehrlich gesagt, habe ich mir das damals nicht zugetraut“, erzählt sie. Gleichzeitig entwickelte sich ihre Liebe zum Schreiben und sie schrieb sich für ein Journalismus-Studium ein. Nach ihrem Abschluss fand sie eine Stelle in einem medizinischen Verlag und entdeckte ihr Interesse an Wissenschaftskommunikation. In diesem Zusammenhang wuchs wieder ihre Begeisterung für Medizin. Zwar fühlte sie sich im Journalismus gut aufgehoben und hatte einen gutbezahlten Job ergattert – was nicht allen Absolventen ihres Fachs gelingt –, doch sie sehnte sich danach, ihren Wissenshorizont zu erweitern. Kurzentschlossen bewarb sie sich deshalb um einen Studienplatz in der Humanmedizin – und wurde an der Universität Mainz angenommen. Damit begann für sie eine herausfordernde Zeit: „Ich muss neben dem Studium Geld verdienen und verbringe oft ganze Nächte mit Lernen am Schreibtisch“, erzählt sie.</p>
<p>Wer ein Zweitstudium antritt, investiert nochmals mehrere Jahre, bevor das eigentliche Berufsleben beginnt oder weitergeht. Hinzu kommt die finanzielle Belastung während der Studienzeit. Der Beginn eines Zweitstudiums ist daher ein Schritt, der wohlüberlegt sein sollte. Man müsse sich darüber im Klaren sein, dass ein Zweitstudium kein Spaziergang sei, erklärt Karrierecoach Björn Meinelt. Wichtig sei, sich genau zu überlegen, was auf einen zukomme. Ein Zweitstudium müsse nicht unbedingt thematisch zu dem ersten Studium passen: „Es ist viel wichtiger, dass es mit den eigenen Werten, Stärken, Wünschen und Träumen vereinbar ist“, sagt Meinelt. „Wer ein Fach wählt, dessen Inhalte ihn nur zu 20 oder 30 Prozent interessieren, sollte es lieber gleich lassen.“</p>
<p>Doch mit der Entscheidung für ein Zweitstudium ist es nicht getan. Denn es gilt noch einige formale Hürden zu meistern: Während manche Studiengänge zulassungsfrei sind, droht bei anderen ein aufwendiges – und teils aussichtsloses – Bewerbungsverfahren: Denn bei zulassungsbeschränkten Studiengängen vergeben die Hochschulen nur maximal drei Prozent ihrer Studienplätze an Studierende im Zweitstudium.</p>
<p>Während es also einige Schwierigkeiten mit sich bringen kann, sich an einer staatlichen Uni ein zweites Mal zu immatrikulieren, stehen die Chancen an privaten Hochschulen besser. Allerdings muss man dort mit zum Teil erheblichen Studiengebühren rechnen. Andererseits haben private Hochschulen neben der höheren Wahrscheinlichkeit, dass man dort seinen Wunschstudienplatz erhält, einen weiteren Vorteil: Dort sind weniger Studenten immatrikuliert als an staatlichen Unis, sodass die Dozenten sich für den Einzelnen oft mehr Zeit nehmen können. Eine weitere Option ist das Fernstudium. Allerdings bringt nicht jeder die Grundvoraussetzungen dafür mit, um allein am Schreibtisch ein komplettes Studium zu absolvieren. Denn das erfordert sehr viel Selbstdisziplin und die Fähigkeit, sich immer wieder selbst zu motivieren.</p>
<p>Wenn die Hürde der Einschreibung genommen ist, gehen aber oft die Probleme erst richtig los. In manchen Bundesländern fallen Gebühren für ein Zweitstudium an, und natürlich müssen die Lebenshaltungskosten aufgebracht werden. Wenn man sich schon einige Jahre an ein Leben mit einem geregelten Einkommen gewöhnt hat, ist es schwierig, wieder mit dem schmalen Budget zurechtzukommen, über das Studenten gewöhnlich verfügen. Vor dieser Herausforderung stand auch Leni Karrenbauer. Die 38 Jahre alte Redakteurin hatte nach dem Abitur Soziale Arbeit studiert, aber im Anschluss in Redaktionen und als Fotografin in Berlin gearbeitet. Um ihr Wissen auf den aktuellen Stand zu bringen, zog sie nach Köln und studierte dort Online-Journalismus an der Technischen Hochschule. Dieses Studium hat sie vor Kurzem beendet. „Ich habe vor meinem Zweitstudium in Vollzeit gearbeitet und entsprechend verdient“, erinnert sie sich. „Während des Studiums musste ich lernen, mich einzuschränken und auf viele Dinge zu verzichten. Abendliche Restaurantbesuche, Shopping – das alles war gestrichen.“ Das sei ihr nicht leichtgefallen, ergänzt sie. Einen Anspruch auf BAföG hatte sie nicht mehr, ihr Studium finanzierte sie mit Studentenjobs. Ihr Rat: Wer ein Zweitstudium finanziell nicht stemmen kann, sollte möglichst auf eine berufliche Fortbildung oder Umschulung setzen. „Das ist weniger zeit- und kostenintensiv.“</p>
<p>Auch Selina Michel hat einen Nebenjob, um ihr Medizinstudium zu finanzieren. Außerdem hat sie einen Studienkredit bei der Förderbank Kreditanstalt für Wiederaufbau aufgenommen. „Die ständigen Sorgen ums Geld belasten mich schon sehr“, sagt die Medizin-Studentin. Hinzu komme der soziale Druck: Ihre Freunde im selben Alter beziehen ein volles Gehalt, sparen vielleicht für ein eigenes Haus und gründen eine Familie. „Manchmal habe ich schon Angst, dass ich etwas verpasse“, sagt sie. Es gibt Momente, in denen sie sich fragt, ob sie wirklich den richtigen Weg eingeschlagen hat. Andererseits ist sie überzeugt davon, dass sie in Zukunft als Ärztin finanziell besser abgesichert sein wird.</p>
<p>Dennoch: Man kann nicht davon ausgehen, dass jedes Zweitstudium glänzende Berufsaussichten eröffnet. Zumindest dann nicht, wenn es unmittelbar an das Erststudium anschließt. Denn im Bewerbungsprozess müssen sich Absolventen später oft auf intensive Nachfragen einstellen – und sollten gut durchdachte Antworten liefern können. „Mit einem Zweitstudium besteht immer die Problematik, dass das Einstiegsdatum in den Beruf nach hinten rückt. Bei Firmen wird das nicht gerne gesehen“, sagt Berufsberaterin Kathrin Bach. Sie findet: Ein nebenberufliches Studium sei die bessere Alternative. Denn damit könne man gleich zeigen, dass man besonders belastbar und motiviert sei. Die Wahl des Zweitstudiengangs solle zur Lage auf dem Arbeitsmarkt oder dem angestrebten Arbeitgeber passen, erklärt Kathrin Bach. Für manche ist ein Zweitstudium der einzige Weg, ihr Karriereziel zu erreichen – etwa, wenn die Karriereaussichten mit dem Erststudium sehr schlecht sind oder für den angestrebten Beruf zusätzliche Kenntnisse nötig sind. Doch bevor man diese Entscheidung trifft, sollte man alle Aspekte gründlich abgewogen haben.</p>`,
    questions: [
      { id: 13, text: 'Selina Michel entschied sich zunächst gegen das Medizinstudium, weil sie vor dem hohen Lernpensum zurückschreckte.', uz: "Selina Mishel dastlab katta o'quv yuklamasidan cho'chigani sababli tibbiyotda o'qimaslikka qaror qilgan.", ans: 'R', expl: "2-xatboshida: «sehr hohe Stofffülle zu bewältigen haben... ‚Ehrlich gesagt, habe ich mir das damals nicht zugetraut‘»." },
      { id: 14, text: 'Selina Michel merkte bald, dass sie im Journalismus keine Aussichten auf eine lukrative Stelle hatte.', uz: "Selina Mishel tez orada jurnalistikada yaxshi daromadli ish topish istiqboli yo'qligini payqadi.", ans: 'F', expl: "2-xatboshida: «hatte einen gutbezahlten Job ergattert» (yaxshi to'lanadigan ishga kirgan edi)." },
      { id: 15, text: 'Für ein Zweitstudium sollte man vor allem Fächer in Betracht ziehen, die das Erststudium ergänzen.', uz: "Ikkinchi oliy ta'lim uchun avvalo birinchi ta'limni to'ldiradigan yo'nalishlarni tanlash kerak.", ans: 'F', expl: "3-xatboshida: «Ein Zweitstudium müsse nicht unbedingt thematisch zu dem ersten Studium passen»." },
      { id: 16, text: 'Wer ein Zweitstudium absolvieren möchte, muss seine Bewerbung begründen.', uz: "Ikkinchi oliy ta'lim olmoqchi bo'lgan shaxs o'z arizasini asoslab berishi kerak.", ans: 'R', expl: "4-xatboshida: qabul cheklangan yo'nalishlarda murakkab ariza topshirish jarayoni («aufwendiges Bewerbungsverfahren») mavjud." },
      { id: 17, text: 'Es gibt in manchen Studiengängen eine Quote für Zweitstudenten.', uz: "Ba'zi o'quv yo'nalishlarida ikkinchi oliy ta'lim talabalari uchun kvota mavjud.", ans: 'R', expl: "4-xatboshida: «vergeben die Hochschulen nur maximal drei Prozent ihrer Studienplätze an Studierende im Zweitstudium.»" },
      { id: 18, text: 'Für private Hochschulen spricht es, dass das Betreuungsverhältnis dort besser ist als an staatlichen Hochschulen.', uz: "Xususiy oliygohlarning ustun tomoni shundaki, u yerda o'qituvchilarning talabalarga e'tibori davlat universitetlariga qaraganda yaxshiroq.", ans: 'R', expl: "5-xatboshida: «Dort sind weniger Studenten immatrikuliert als an staatlichen Unis, sodass die Dozenten sich für den Einzelnen oft mehr Zeit nehmen können.»" },
      { id: 19, text: 'Leni Karrenbauer hat nach ihrem Studium eine Führungsposition angestrebt.', uz: "Leni Karrenbauer o'qishni tugatgach rahbarlik lavozimini egallashga intilgan.", ans: 'X', expl: "Matnda uning rahbarlik lavozimini maqsad qilgani haqida hech narsa aytilmagan." },
      { id: 20, text: 'Leni Karrenbauer brach ihr Zweitstudium ab, um stattdessen eine Weiterbildung zu absolvieren.', uz: "Leni Karrenbauer malaka oshirish kursida o'qish uchun ikkinchi oliy ta'limini to'xtatgan.", ans: 'F', expl: "6-xatboshida: «Dieses Studium hat sie vor Kurzem beendet.» (u o'qishni tugatgan)." },
      { id: 21, text: 'Selina Michel hat für ihr Studium ihre Ersparnisse verbraucht.', uz: "Selina Mishel o'qishi uchun barcha jamg'armalarini sarflab bo'lgan.", ans: 'X', expl: "7-xatboshida faqat Nebenjob va KfW krediti aytilgan, jamg'armalari haqida gap yo'q." },
      { id: 22, text: 'Selina Michel zweifelt manchmal daran, dass ihre Entscheidung für das Medizinstudium richtig war.', uz: "Selina Mishel ba'zida tibbiyotda o'qish qarori to'g'ri bo'lganiga shubhalanadi.", ans: 'R', expl: "7-xatboshida: «Es gibt Momente, in denen sie sich fragt, ob sie wirklich den richtigen Weg eingeschlagen hat.»" },
      { id: 23, text: 'Bei der Jobsuche kann es in bestimmten Fällen vorkommen, dass man sich für ein Zweitstudium rechtfertigen muss.', uz: "Ish qidirishda ba'zi hollarda ikkinchi oliy ta'lim uchun o'zini oqlashga (izoh berishga) to'g'ri kelishi mumkin.", ans: 'R', expl: "8-xatboshida: «Denn im Bewerbungsprozess müssen sich Absolventen später oft auf intensive Nachfragen einstellen – und sollten gut durchdachte Antworten liefern können.»" },
      {
        id: 24,
        text: 'Welche der Überschriften a, b oder c passt am besten zum Text?',
        uz: "Quyidagi a, b yoki c sarlavhalardan qaysi biri matnga eng mos keladi?",
        ans: 'B',
        opts: [
          'A) Zweitstudium – Pro und Contra',
          'B) Ein Zweitstudium will wohl überlegt sein',
          'C) Medizinstudium – ein steiniger Weg zum Traumberuf'
        ],
        optsUz: [
          "A) Ikkinchi oliy ta'lim — ijobiy va salbiy tomonlari",
          "B) Ikkinchi oliy ta'lim puxta o'ylab ko'rilishi kerak",
          "C) Tibbiyotda o'qish — orzudagi kasbga eltuvchi mashaqqatli yo'l"
        ],
        expl: "Matn ikkinchi oliy ta'limni boshlashdan oldin barcha jihatlarni puxta o'ylab ko'rish zarurligi haqida (B)."
      }
    ]
  },
  sp: VARIANT_34_READING.sp
};

// ============================================================================
// VARIANT 39 (PDF 39)
// ============================================================================
export const VARIANT_39_READING = {
  pdfSource: '/assets/aistudio/39_bf109300.pdf',
  lv1: VARIANT_38_READING.lv1,
  lv2: {
    title: 'Ruf mich nicht an!',
    titleUz: 'Menga qo‘ng‘iroq qilma! (Telefonda gaplashish madaniyatining o‘zgarishi)',
    uzbekVocab: [
      { de: 'verstohlen auf das Display starren', uz: 'ekranga yashirincha (o‘g‘rincha) tikilmoq' },
      { de: 'ins Telefon flöten', uz: 'telefonda xushchaqchaq (sayragandek) gapirmoq' },
      { de: 'unangemeldet im Wohnzimmer sitzen', uz: 'ogohlantirmasdan mehmonxonaga kirib o‘tirib olmoq' },
      { de: 'eine unausgesprochene Regel', uz: 'yozilmagan (hamma biladigan) qoida' },
      { de: 'Pro und Contra abwägen', uz: 'ijobiy va salbiy tomonlarini taroziga solib ko‘rmoq' },
      { de: 'Muße haben', uz: 'bo‘sh vaqt va ruhiy xotirjamlikka ega bo‘lmoq' }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: 'Abschnitt A (Auditoriyadagi qo‘ng‘iroq va o‘quvchidan rozilik izlash)',
        uz: "Muallif universitet ma'ruzasida o'tirganida opasi qo'ng'iroq qilib qoladi. Muallif vahima bilan auditoriyadan chiqsa, opasi shunchaki dadasi uchun tug'ilgan kun sovg'asi haqida gaplashmoqchi ekan! Muallif o'quvchilardan qo'llab-quvvatlash (Zustimmung) so'raydi: «Aziz o'quvchilar, nima uchun shu lahzada biroz jahlim chiqqanini tushuna olasizmi? Opam avval xabar yozib so'rasa bo'lmasmidi?» [12-savol: A]."
      },
      {
        label: 'Abschnitt B (Noodatiy o‘xshatishlar — qulf teshigidan spagetti yeyish)',
        uz: "Muallif nega qo'ng'iroqlarni yoqtirmasligini ikkita yorqin o'xshatish (Vergleiche) bilan tushuntiradi: kutilmagan qo'ng'iroq xuddi birovning uyingizga ogohlantirmay bostirib kirishiga yoki «qulf teshigidan (Schlüsselloch) bir porsiya spagettini kuch bilan o'tkazib yeyishga» o'xshaydi [8-savol: B]."
      },
      {
        label: 'Abschnitt C (Taajjub va o‘tmishga xayoliy sayohat eksperimenti)',
        uz: "Muallif bugungi muloqot xulqidagi g'alati ziddiyatdan hayratlanadi (Verwunderung): cho'ntagimizda doim telefon bor, ammo uning qo'ng'iroq funksiyasidan tobora kam foydalanamiz [9-savol: C]. So'ngra u o'quvchilarni xayoliy eksperimentga (gedankliches Experiment) taklif etadi: «Keling, xayolan uy telefoni yo'lakda turgan va 20:00 dan 20:15 gacha yangiliklar (Tagesschau) vaqtida hech kim qo'ng'iroq qilmaydigan davrga qaytaylik...» [10-savol: C]."
      },
      {
        label: 'Abschnitt D (Syurixlik mutaxassislar bahosiga tayanish)',
        uz: "Muallif mutaxassislar (Fachleute) fikriga tayanadi: ZHAW tadqiqotiga ko'ra yoshlarning 90 foizi telefonda gaplashmaydi; Syurix universiteti dotsenti Filipp Vampfler (Philippe Wampfler) va psixiatr Sebastyan Olbrix (Sebastian Olbrich) qo'ng'iroq insonni darhol javob berishga majbur qilishini, yozma xabarda esa o'ylab javob yozish imkoni borligini tushuntirishadi [7-savol: D]."
      },
      {
        label: 'Abschnitt E (Qo‘ng‘iroqlarning kelajagi haqida taxminlar)',
        uz: "Yakunida muallif kelajak haqida taxminlar (Vermutungen) ilgari suradi: «Shunday qilib, qo'ng'iroqlar kelajakda hech qanday rol o'ynamaydi deb taxmin qilish mumkin... Biroq boshqa rivojlanish ham mumkin: telefon qo'ng'irog'i faqat yaqin insonlar bilan bo'sh vaqtda (Feierabend) suhbatlashiladigan qimmatbaho ne'mat (Luxusgut) sifatida saqlanib qolishi mumkin» [11-savol: E]."
      }
    ] as ParagraphTranslation[],
    text: `<div class="text-paragraph" data-para="A"><span class="para-tag">[Abschnitt A]</span> Neulich saß ich nachmittags an der Uni in einer Vorlesung und hörte plötzlich, wie mein Handy vibrierte. Ich starrte verstohlen auf das Display. Meine Schwester rief an, und sofort geriet ich in Panik: Bestimmt war etwas passiert, sonst würde sie doch eine kurze Nachricht schreiben. Du musst sofort rangehen, schien der Anruf zu befehlen – und zwar sofort! Entschuldigend drängelte ich mich aus dem vollen Hörsaal, ging vor die Tür und nahm das Gespräch an. „Du, ich wollte nur mal mit dir besprechen, was wir Papa zum Geburtstag schenken“, flötete meine Schwester ins Telefon. Liebe Leserinnen und Leser, können Sie verstehen, warum ich in diesem Moment etwas irritiert und verärgert war? Schließlich hätte meine Schwester doch einfach vorher eine Nachricht schreiben und fragen können, ob es gerade passt, statt mich ohne guten Grund zu stören. Ich gebe es zu: Ich hasse es, zu telefonieren. Termine bei Ärzten und Friseuren buche ich grundsätzlich online. Ich telefoniere so gut wie nie – außer mit meiner Oma, die kein Smartphone hat. Aber sonst? Da ist es mir lieber, wenn das Handy schweigt.</div>
<div class="text-paragraph" data-para="B"><span class="para-tag">[Abschnitt B]</span> Doch warum ist meine Abneigung gegen das Telefonieren so stark? Darüber habe ich mir in letzter Zeit häufig Gedanken gemacht. Ich empfinde einen Anruf oft als unhöflich: Egal, ob beim Lesen, beim Arbeiten, beim Kochen oder beim Essen – bei jedem Ton verlangt das plötzliche Telefonklingeln sofortige Aufmerksamkeit. Es ist, als würde jemand schreien: „Hör auf, was auch immer du tust, und widme dich sofort mir!“ Einen Anruf zu bekommen gleicht für mich einer Invasion, als würde man sich unangemeldet in mein Wohnzimmer setzen – oder, noch etwas drastischer ausgedrückt: als würde man mit Gewalt durch ein Schlüsselloch eine Portion Spaghetti zu sich nehmen.</div>
<div class="text-paragraph" data-para="C"><span class="para-tag">[Abschnitt C]</span> Wenn ich über das heutige Kommunikationsverhalten nachdenke, fällt mir allerdings ein merkwürdiger Widerspruch auf: Noch nie war es so üblich wie heute, ständig ein Gerät mit sich herumzutragen, das ursprünglich in erster Linie zum Telefonieren gedacht war – aber gerade diese Funktion immer weniger genutzt wird. Stattdessen boomen Kurznachrichten und Sprachnachrichten, die kurioserweise mit dem Telefon verschickt werden. Versetzen wir uns doch einmal gedanklich zurück in die Zeit vor rund dreißig Jahren, als das Telefon noch mit einer Schnur im Hausflur an der Wand hing: Damals war man entweder auf der Arbeit, in der Uni oder nach Feierabend im heimischen Wohnzimmer. Wenn man aber zu Hause war, hatte man Ruhe, Lust und Zeit, und jeder Anruf war maximal eine kleine Störung beim Essen, vermutlich aber eher eine willkommene Unterbrechung des Fernsehprogramms oder eintöniger Langeweile. Eine Ausnahme gab es allerdings, die heute fast schon komisch anmutet: In Deutschland galt die unausgesprochene Regel, dass man abends zwischen 20 Uhr und 20:15 Uhr nicht anruft – denn da saßen alle vor dem Fernseher und schauten die Nachrichten.</div>
<div class="text-paragraph" data-para="D"><span class="para-tag">[Abschnitt D]</span> Mit meiner Abneigung gegen das Telefonieren stehe ich übrigens nicht alleine da. Bei unter Dreißigjährigen und vor allem bei Jugendlichen ist das persönliche Gespräch am Telefon zunehmend unbeliebt. Die Hochschule für Angewandte Wissenschaften in Zürich hat herausgefunden, dass rund 90 Prozent der Jugendlichen die Telefonfunktion ihres Smartphones so gut wie gar nicht mehr nutzen. Der Grund dafür liegt allerdings nicht nur darin, dass Anrufe als übergriffig wahrgenommen werden. So erklärt Philippe Wampfler, Dozent für Fachdidaktik an der Universität Zürich: „Während man beim Telefonieren gezwungen ist, sofort zu reagieren, kann man sich bei einer Sprachnachricht Zeit lassen.“ Sebastian Olbrich, stellvertretender Leiter des Zentrums für Soziale Psychiatrie an der Psychiatrischen Universitätsklinik Zürich, erläutert: „Beim Telefonieren kann man das Gegenüber nicht sehen und die Reaktionen somit schlecht abschätzen. Das kann Ängste hervorrufen. Zudem fürchten einige, etwas Falsches zu sagen, das man nicht korrigieren kann.“ Wer schreibt, habe dagegen die Möglichkeit, noch mal in Ruhe das Pro und Contra abzuwägen, bevor die Antwort abgeschickt wird.</div>
<div class="text-paragraph" data-para="E"><span class="para-tag">[Abschnitt E]</span> Die Kommunikation erlebt also gerade einen enormen Wandel. Mit dem Telefon verbinden viele mittlerweile eher Unangenehmes: dringende Notfälle, unerwünschtes Tele-Marketing und Anrufe des Chefs. So könnte man zunächst einmal annehmen, dass das Telefonieren in Zukunft keine Rolle mehr spielen wird. Aber ist der Anruf tatsächlich vom Aussterben bedroht? Auch eine andere Entwicklung wäre möglich: Er könnte überleben, aber nur noch in bestimmten Situationen und vor allem im privaten Kontext. Als die geeignetste Kommunikationsform könnten Telefonate gelten, wenn man sich ausführlich mit einer nahestehenden Person unterhalten möchte, aber ein Gespräch von Angesicht zu Angesicht nicht möglich ist. So könnte das Telefonat als eine Art Luxusgut weiterhin bestehen, das wir pflegen, wenn wir Zeit und Muße haben. Nämlich nach Feierabend, nach Besprechungen und in Zeiten, in denen wir Ruhe haben.</div>`,
    questions: [
      { id: 7, text: 'In welchem Abschnitt beruft sich die Autorin auf die Einschätzungen von Fachleuten?', uz: "Qaysi bo'limda muallif mutaxassislarning baholariga tayanadi?", ans: 'D', expl: "D bo'limida Syurix universiteti dotsenti Filipp Vampfler va psixiatr Sebastyan Olbrix fikrlari keltirilgan." },
      { id: 8, text: 'In welchem Abschnitt bringt die Autorin Vergleiche an?', uz: "Qaysi bo'limda muallif o'xshatishlarni keltiradi?", ans: 'B', expl: "B bo'limida: «als würde man sich unangemeldet in mein Wohnzimmer setzen – oder ... durch ein Schlüsselloch eine Portion Spaghetti zu sich nehmen»." },
      { id: 9, text: 'In welchem Abschnitt drückt die Autorin Verwunderung aus?', uz: "Qaysi bo'limda muallif taajjub (hayrat) ifodalaydi?", ans: 'C', expl: "C bo'limida: «fällt mir allerdings ein merkwürdiger Widerspruch auf... kurioserweise... fast schon komisch anmutet»." },
      { id: 10, text: 'In welchem Abschnitt lädt die Autorin die Leser zu einem gedanklichen Experiment ein?', uz: "Qaysi bo'limda muallif o'quvchilarni xayoliy eksperimentga (o'tmishga sayohatga) taklif etadi?", ans: 'C', expl: "C bo'limida: «Versetzen wir uns doch einmal gedanklich zurück in die Zeit vor rund dreißig Jahren...»." },
      { id: 11, text: 'In welchem Abschnitt stellt die Autorin Vermutungen an?', uz: "Qaysi bo'limda muallif taxminlarni ilgari suradi?", ans: 'E', expl: "E bo'limida: «So könnte man zunächst einmal annehmen, dass... Auch eine andere Entwicklung wäre möglich: Er könnte überleben...»." },
      { id: 12, text: 'In welchem Abschnitt sucht die Autorin bei den Lesern nach Zustimmung?', uz: "Qaysi bo'limda muallif o'quvchilardan rozilik (qo'llab-quvvatlash) izlaydi?", ans: 'A', expl: "A bo'limida: «Liebe Leserinnen und Leser, können Sie verstehen, warum ich in diesem Moment etwas irritiert und verärgert war?»" }
    ]
  },
  lv3: VARIANT_38_READING.lv3,
  sp: {
    title: 'Unterschätzte Pflanzen',
    titleUz: 'Yetarlicha baholanmagan o‘simliklar (O‘simliklar intellekti)',
    uzbekVocab: [
      { de: 'jemandem nicht viel zutrauen', uz: 'birovdan katta qobiliyat kutmaslik' },
      { de: 'chemische Botenstoffe', uz: 'kimyoviy xabarchi moddalar (signallar)' },
      { de: 'jemandem etwas voraushaben', uz: 'birovdan biror jihatdan ustun bo‘lmoq' },
      { de: 'sich zur Wehr setzen gegen (+ Akk.)', uz: 'biror narsaga qarshi mudofaaga o‘tmoq (o‘zini himoya qilmoq)' },
      { de: 'die Tollkirsche', uz: 'belladonna (zaharli o‘simlik)' },
      { de: 'aus dem Weg räumen (ein Vorurteil)', uz: 'yanglish fikrni / xurofotni bartaraf etmoq' }
    ] as VocabItem[],
    text: `<p>Sie sehen schön aus, wachsen und duften oft gut. Aber wer würde schon so weit gehen, Pflanzen <strong>(25)</strong> als intelligent zu bezeichnen? Menschen trauen Pflanzen oft nicht viel zu. <strong>(26)</strong> gehören sie zu den erfolgreichsten Lebewesen auf unserem Planeten und besitzen <strong>(27)</strong> erstaunliche Fähigkeiten. Pflanzenforscher haben in den vergangenen Jahren bei ihren Experimenten <strong>(28)</strong> Entdeckungen gemacht: Pflanzen unterscheiden <strong>(29)</strong> verschiedene Wellenlängen des Lichts, können also „sehen“. Sie <strong>(30)</strong> erkennen, ob ein Schatten von einer anderen Pflanze oder einem Felsen kommt. Aber damit nicht genug: Pflanzen „riechen“ chemische Botenstoffe in der Luft und „schmecken“ die Nährstoffe im <strong>(31)</strong>.</p>
<p>Der italienische Biologe Stefano Mancuso, Professor am Internationalen Institut für Neurobiologie der Pflanzen in Florenz, <strong>(32)</strong> seit Jahren, wie Pflanzen auf ihre Umwelt reagieren. So erklärt er, Pflanzen könnten wie <strong>(33)</strong> Menschen sehen, hören, riechen, schmecken und tasten. Das <strong>(34)</strong> aber längst nicht alles: Mancuso spricht sogar von mindestens fünfzehn weiteren Sinnen, die uns die Pflanzen <strong>(35)</strong>. Sie können zum Beispiel die Schwerkraft berechnen oder chemische Stoffe <strong>(36)</strong>. Sinnesorgane brauchen sie dafür aber <strong>(37)</strong> – denn das ganze Gewächs kann Informationen aufnehmen und weitergeben.</p>
<p>Wahrscheinlich ist der <strong>(38)</strong>, den die Pflanzen uns gegenüber haben, durch die Evolution begründet. Im <strong>(39)</strong> zu Tieren können Pflanzen nicht flüchten, wenn sie bedroht werden, erklärt Mancuso. „Sie müssen es darum viel früher wahrnehmen, wenn <strong>(40)</strong> in ihrer Umgebung etwas verändert.“ Pflanzen können außerdem auf unterschiedliche Situationen reagieren. So haben sie <strong>(41)</strong> Strategien entwickelt, um sich gegen allzu aufdringliche Besucher <strong>(42)</strong> setzen zu können, zum Beispiel, indem sie <strong>(43)</strong> Stacheln und Dornen ausbilden. Nicht zuletzt sind sie erstaunliche Chemiker, die eine Vielzahl an <strong>(44)</strong> herstellen können, von unangenehm schmeckenden Substanzen wie Bitterstoffen bis hin zum tödlichen Gift einer Tollkirsche. Japanische Forscher entdeckten, dass Tomatenpflanzen ihre Nachbarpflanzen <strong>(45)</strong> warnen. Das Vorurteil, Pflanzen wären still und hilflos, sollte also endgültig aus dem Weg <strong>(46)</strong> sein. Denn sie erweisen sich als ausgesprochen kommunikativ.</p>`,
    questions: [
      { id: 25, opts: ['erst', 'schon', 'sogar', 'zwar'], ans: 'sogar', expl: "«Pflanzen sogar als intelligent zu bezeichnen» — o'simliklarni hatto aqlli deb atash." },
      { id: 26, opts: ['Dabei', 'Dadurch', 'Dafür', 'Damit'], ans: 'Dabei', expl: "Zidlash ma'nosida: «Dabei gehören sie zu den erfolgreichsten Lebewesen» (Vaholanki ular eng muvaffaqiyatli mavjudotlar qatoriga kiradi)." },
      { id: 27, opts: ['hinsichtlich', 'offentherzig', 'offensichtlich', 'sichtlich'], ans: 'offensichtlich', expl: "«besitzen offensichtlich erstaunliche Fähigkeiten» (shubhasiz / yaqqol hayratlanarli qobiliyatlarga ega)." },
      { id: 28, opts: ['spektakulären', 'spektakuläre', 'spektakulärer', 'spektakuläres'], ans: 'spektakuläre', expl: "Artiklsiz ko'plik Akkusativ: «spektakuläre Entdeckungen gemacht»." },
      { id: 29, opts: ['beispielsweise', 'bekannterweise', 'möglicherweise', 'normalerweise'], ans: 'beispielsweise', expl: "Misol keltirish: «Pflanzen unterscheiden beispielsweise verschiedene Wellenlängen»." },
      { id: 30, opts: ['dennoch', 'jedoch', 'sogar', 'trotzdem'], ans: 'sogar', expl: "«Sie können sogar erkennen, ob...»." },
      { id: 31, opts: ['Boden', 'Flur', 'Grundstück', 'Ort'], ans: 'Boden', expl: "«schmecken die Nährstoffe im Boden» (tuproqdagi ozuqa moddalarini tatib ko'radi)." },
      { id: 32, opts: ['erfindet', 'erforscht', 'ersieht', 'erweist'], ans: 'erforscht', expl: "«erforscht seit Jahren, wie Pflanzen ... reagieren» (yillar davomida tadqiq etib keladi)." },
      { id: 33, opts: ['uns', 'unsere', 'die', 'wir'], ans: 'wir', expl: "Nominativ: «wie wir Menschen» (biz insonlar kabi)." },
      { id: 34, opts: ['sei', 'war', 'wird', 'würde'], ans: 'sei', expl: "O'zlashtirma gap (Konjunktiv I): «Das sei aber längst nicht alles»." },
      { id: 35, opts: ['voraushaben', 'vorenthalten', 'vorhersagen', 'vorschreiben'], ans: 'voraushaben', expl: "Turg'un birikma: «jemandem (Dat.) etwas (Akk.) voraushaben» (bizdan ustun bo'lmoq)." },
      { id: 36, opts: ['analysieren', 'konstruieren', 'produzieren', 'reduzieren'], ans: 'analysieren', expl: "«chemische Stoffe analysieren» (kimyoviy moddalarni tahlil qilmoq)." },
      { id: 37, opts: ['kaum', 'keine', 'nicht', 'nie'], ans: 'nicht', expl: "«Sinnesorgane brauchen sie dafür aber nicht» (yoki keine)." },
      { id: 38, opts: ['Vorsprung', 'Vorzug', 'Vorteil', 'Vorrang'], ans: 'Vorsprung', expl: "«der Vorsprung, den die Pflanzen uns gegenüber haben» (o'simliklarning bizdan ustunligi)." },
      { id: 39, opts: ['Gegenteil', 'Gegenüber', 'Gegensatz', 'Gegenstand'], ans: 'Gegensatz', expl: "Turg'un birikma: «Im Gegensatz zu Tieren» (hayvonlardan farqli o'laroq)." },
      { id: 40, opts: ['es', 'man', 'sich', 'sie'], ans: 'sich', expl: "Reflexiv fe'l: «wenn sich in ihrer Umgebung etwas verändert»." },
      { id: 41, opts: ['raffinierte', 'raffinierten', 'raffinierter', 'raffiniertes'], ans: 'raffinierte', expl: "Artiklsiz ko'plik Akkusativ: «raffinierte Strategien entwickelt»." },
      { id: 42, opts: ['in Bewegung', 'aufs Spiel', 'vor die Tür', 'zur Wehr'], ans: 'zur Wehr', expl: "Turg'un birikma: «sich zur Wehr setzen» (o'zini himoya qilmoq)." },
      { id: 43, opts: ['spitze', 'spitzen', 'spitzer', 'spitzes'], ans: 'spitze', expl: "Artiklsiz ko'plik Akkusativ: «indem sie spitze Stacheln und Dornen ausbilden»." },
      { id: 44, opts: ['unterschiedliche Stoffe', 'unterschiedlichen Stoffe', 'unterschiedlicher Stoffe', 'unterschiedlichen Stoffen'], ans: 'unterschiedlichen Stoffen', expl: "«eine Vielzahl an (+ Dat. Pl.) unterschiedlichen Stoffen»." },
      { id: 45, opts: ['durch Feinde', 'gegen Feinde', 'mit Feinden', 'vor Feinden'], ans: 'vor Feinden', expl: "Fe'l boshqaruvi: «warnen vor (+ Dat.)» -> «vor Feinden warnen»." },
      { id: 46, opts: ['gelegt', 'geräumt', 'geschoben', 'gestellt'], ans: 'geräumt', expl: "Ibora: «aus dem Weg geräumt sein» (bartaraf etilgan bo'lmoq)." }
    ]
  }
};
