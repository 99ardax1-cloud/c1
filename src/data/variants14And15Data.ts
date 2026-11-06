// Complete authentic German exam data + full Uzbek translations, vocabulary & explanations
// extracted and translated from 14_ac9a084b.pdf (Variant 14) and 15_28373fe1.pdf (Variant 15)

export interface VocabItem {
  de: string;
  uz: string;
}

export interface UzbekParagraphTranslation {
  label: string;
  deSnippet?: string;
  uz: string;
}

export type ParagraphTranslation = UzbekParagraphTranslation;

export const VARIANT_14_READING = {
  title: "Variant 14: Gesichtserkennung / Wissenschaftssprache / Sabbatical / Konkurrenz",
  pdfSource: "/assets/aistudio/14_ac9a084b.pdf",
  lv1: {
    title: "Die besondere Begabung der Gesichtserkennung",
    titleUz: "Yuzni tanib olishning noyob qobiliyati (Super-Recogniser)",
    uzbekVocab: [
      { de: "flink, professionell, unbemerkt", uz: "chaqqon, professional, sezdirmasdan" },
      { de: "die Überwachungskamera", uz: "kuzatuv kamerasi" },
      { de: "verschwinden lassen", uz: "g'oyib qilmoq, yashirib solib qo'ymoq" },
      { de: "durchforsten", uz: "sinchiklab tekshirib chiqmoq, titkilamoq" },
      { de: "der Super-Recogniser", uz: "yuzlarni o'ta kuchli eslab qoluvchi va tanuvchi inson" },
      { de: "verschwommene Fotos", uz: "xira, noaniq fotosuratlar" },
      { de: "in den Kinderschuhen stecken", uz: "hali boshlang'ich bosqichda (endilikda rivojlanayotgan) bo'lmoq" },
      { de: "die Prosopagnosie (Gesichtsblindheit)", uz: "prosopagnoziya (yuz ko'rligi — yuzlarni taniy olmaslik kasalligi)" },
      { de: "das Schlüsselerlebnis", uz: "hal qiluvchi / esda qolarli voqea" },
      { de: "ausfindig machen", uz: "topib olmoq, aniqlamoq" },
      { de: "das Hirnareal", uz: "miya sohasi / qismi" }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: "Kirish va [ 1 ]–[ 2 ] bo'shliqlar",
        uz: "Chaqqon, professional va hech kimga sezdirmasdan: kuzatuv kamerasi tasvirlarida o'g'ri zargarlik buyumlarini sumkasiga solib ko'zdan g'oyib qiladi. Angliyaning Grinvich universiteti psixologi Josh Devis bu sahnani «Xuddi sehrgarga o'xshaydi» deb ta'riflaydi. London politsiyasi (Scotland Yard) maxsus bo'linmasi zobiti suratlarni ko'radi va jinoyatchini darhol taniydi: (0: U uni avvalroq boshqa bir o'g'rilik videosida ko'rgan edi). Xodim bir necha kun davomida boshqa kuzatuv videolarini sinchiklab ko'rib chiqib, noma'lum shaxsni 40 dan ortiq o'g'rilik bilan bog'laydi va jinoyatchi qo'lga olinadi. 40 dan ortiq videoda o'g'rini tanigan politsiyachi «Super-Recogniser» deb ataladi. [ 1 -> G: Yuzlarni favqulodda yaxshi eslab qoladigan insonlarni shunday atashadi ]. Biror yuzni hech qachon unutmaydigan yoki hatto juda xira suratlarda ham odamlarni qayta taniydigan insonlar borligini ilm-fan sanoqli yillardan beri biladi. Tadqiqotlar hali boshlang'ich bosqichda («bolalik poyabzalida»). [ 2 -> D: Biroq hozirning o'zidayoq u psixologiyada va kriminalistika amaliyotida ko'plab istiqbollarni ochib bermoqda ]."
      },
      {
        label: "2-xatboshi va [ 3 ] bo'shliq",
        uz: "Olimlar insonlarning ushbu maxsus qobiliyatiga tasodifan duch kelishdi. Aslida ular prosopagnoziya — «yuz ko'rligi»ni tadqiq qilishayotgan edi. [ 3 -> C: Bunday dardga chalinganlar odamlarni yuziga qarab aniqlashga qodir emaslar ]. Eng og'ir holatlarda ular hatto o'z oila a'zolarini ham tanimaydilar. Tadqiqot davomida olimlarga o'zlari haqida buning teskarisini — ya'ni yuzlarni juda yaxshi eslab qolishlarini aytgan insonlar murojaat qilishdi. Tadqiqotchilar ularni sinovdan o'tkazishganda, barcha ishtirokchilar o'rtacha ko'rsatkichdan ancha yuqori natija qayd etishdi."
      },
      {
        label: "3-xatboshi va [ 4 ] bo'shliq",
        uz: "«Aksariyat Super-Recogniser'lar o'zlarining noyob qobiliyatlaridan umuman bexabar bo'ladilar», — deydi Devis. Masalan, ular filmlardagi kichik ikkinchi darajali rollardagi aktyorlarni juda yaxshi tanib olishlarini payqashadi yoki ko'chada ularni umuman eslay olmaydigan odamni tanib qolib, noqulay vaziyatga tushganliklari haqida so'zlab berishadi. [ 4 -> H: Qancha odamni haqiqatan ham Super-Recogniser deb atash mumkinligi hozircha noaniq ]. Devis ularning ulushini aholining bir foizidan kam deb baholaydi."
      },
      {
        label: "4–5-xatboshilar va [ 5 ] bo'shliq",
        uz: "Xo'sh, Super-Recogniser'ni nima ajratib turadi? Britaniyaning Bornmut universiteti psixologi Sara Beytning fikricha, yuzlarni tanishda bu insonlar turli kuchli tomonlarga ega: ba'zilari hatto bir lahzalik uchrashuvdan keyin ham yuzlarni juda yaxshi eslab qoladi. [ 5 -> A: Boshqalari esa oldilarida bir nechta fotosurat bo'lganda yuzlarni bir-biriga moslashtirishda (solishtirishda) ayniqsa ustadirlar ]. Yana ba'zilari katta olomon ichidan odamlarni eng yaxshi topa oladi. Bir necha yil oldin London politsiyasi Super-Recogniser'lardan iborat maxsus bo'linma tuzdi. Politsiyachilar yuzni aniqlovchi eng yaxshi kompyuter dasturlaridan ham ancha ilgarida: xodimlar gumonlanuvchilarni aniqlagan 1000 ta rasm ichidan dastur hozircha faqat bittasinigina taniy oladi."
      },
      {
        label: "6-xatboshi va [ 6 ] bo'shliq",
        uz: "Super-Recogniser'larning maxsus qobiliyatlari hali ko'p jihatdan o'rganilmagan. [ 6 -> E: Ular irsiy (genetik) yo'l bilan o'tadi deb taxmin qilinadi ]. Shuningdek, hozirgi ilmiy ma'lumotlarga ko'ra, bu qobiliyat yaxshi xotira bilan ham, yuqori intellekt koeffitsiyenti (IQ) bilan ham bog'liq emas, balki miyaning aynan yuzlarni qayta ishlovchi qismi (Hirnareal) bilan bog'liqdir. Aniqroq tafsilotlar hali ma'lum emas, ammo ilm-fan bu borada hali qiziqarli kashfiyotlarga erishishiga umid qilinadi."
      }
    ] as UzbekParagraphTranslation[],
    text: `<p>Flink, professionell, unbemerkt. Auf den Bildern einer Überwachungskamera lässt ein Dieb Schmuck in seiner Tasche verschwinden. „Fast wie ein Magier“, beschreibt Josh Davis, Psychologe an der englischen University of Greenwich, die Szene. Ein Polizist einer Sondereinheit des Scotland Yard, der Londoner Polizei, sieht die Bilder und erkennt den Täter sofort: <em>[0: z]</em> Tagelang habe der Beamte weitere Überwachungsvideos durchforstet, erzählt Davis, und dem Unbekannten mehr als 40 Diebstähle zugeordnet. Schließlich wird der Täter gefasst. Der Polizist, der den Dieb auf mehr als 40 Überwachungsvideos erkannte, wird als Super-Recogniser bezeichnet. <span class="text-gap">[ 1 ]</span> Dass es Leute gibt, die ein Gesicht nicht vergessen oder auf noch so verschwommenen Fotos Personen wiedererkennen, weiß die Wissenschaft erst seit wenigen Jahren. Die Forschung steckt zwar noch in den Kinderschuhen. <span class="text-gap">[ 2 ]</span></p><p>Die Wissenschaftler stolperten eher zufällig über diese besondere Fähigkeit von Menschen. Eigentlich untersuchten sie die sogenannte Prosopagnosie, Gesichtsblindheit. <span class="text-gap">[ 3 ]</span> Im Extremfall erkennen sie sogar Familienmitglieder nicht. Während der Forschungsarbeit wurden die Wissenschaftler von Menschen kontaktiert, die das Gegenteil von sich behaupteten, nämlich dass sie sich besonders gut Gesichter merken könnten. Einige dieser Personen testeten die Forscher daraufhin: Alle Testpersonen schnitten bei Gesichtserkennungstests deutlich besser ab als der Durchschnitt.</p><p>„Die meisten Super-Recogniser sind sich ihrer seltenen Begabung gar nicht bewusst“, sagt Davis. „Sie merken z. B., dass sie besonders gut Schauspieler in kleinen Nebenrollen wiedererkennen können, oder berichten von peinlichen Schlüsselerlebnissen, etwa, dass sie auf der Straße jemanden wiedererkannten, der sich überhaupt nicht an sie erinnerte.“ <span class="text-gap">[ 4 ]</span> Davis schätzt den Anteil auf unter ein Prozent der Bevölkerung.</p><p>Doch was macht einen Super-Recogniser aus? Sarah Bate, Psychologin an der britischen Bournemouth Universität, hält es für gut möglich, dass diese Menschen durchaus unterschiedliche Stärken haben, wenn es um das Erkennen von Gesichtern geht. So können sich einige sehr gut an Gesichter erinnern, selbst nach flüchtigen Begegnungen. <span class="text-gap">[ 5 ]</span> Und manche können am besten Personen in einer großen Menschenmenge ausfindig machen.</p><p>Vor einigen Jahren gründete die Londoner Polizei eine eigene Einheit von Super-Recognisern. Die Polizisten sind den besten Computerprogrammen zur Gesichtserkennung noch weit voraus: Bei 1000 Bildern, auf denen die Beamten Verdächtige identifizieren, erkenne die Software derzeit nur einen.</p><p>Die besonderen Begabungen der Super-Recogniser sind weitgehend unerforscht. <span class="text-gap">[ 6 ]</span> Auch haben sie nach dem derzeitigen Wissensstand weder etwas mit einem guten Gedächtnis noch mit einem hohen Intelligenzquotienten zu tun, sondern mit jenem Hirnareal, das Gesichter verarbeitet. Genaueres ist aber noch nicht bekannt. Hier wird die Wissenschaft hoffentlich noch spannende Erkenntnisse erlangen.</p>`,
    options: [
      {
        key: "A",
        text: "Andere hingegen sind besonders gut darin, Gesichter zuzuordnen, wenn sie mehrere Fotos vor sich haben.",
        uz: "Boshqalari esa oldilarida bir nechta fotosurat bo'lganda yuzlarni bir-biriga moslashtirishda (solishtirishda) ayniqsa ustadirlar."
      },
      {
        key: "B",
        text: "Bei diesem Verfahren werden die charakteristischen Merkmale der Gesichtszüge anhand eines digitalisierten Bildes bestimmt.",
        uz: "Ushbu usulda yuz tuzilishining xarakterli belgilari raqamlashtirilgan rasm asosida aniqlanadi. (Ortiqcha gap)"
      },
      {
        key: "C",
        text: "Betroffene sind nicht dazu in der Lage, Menschen anhand ihres Gesichts zu identifizieren.",
        uz: "Bunday dardga chalinganlar (Prosopagnosie bemorlari) odamlarni yuziga qarab aniqlashga qodir emaslar."
      },
      {
        key: "D",
        text: "Doch schon jetzt eröffnet sie viele Perspektiven – in der Psychologie und in der kriminalistischen Praxis.",
        uz: "Biroq hozirning o'zidayoq u (tadqiqot) psixologiyada va kriminalistika amaliyotida ko'plab istiqbollarni ochib bermoqda."
      },
      {
        key: "E",
        text: "Man vermutet, dass sie genetisch weitergegeben werden.",
        uz: "Ular (bu qobiliyatlar) genetik / irsiy yo'l bilan o'tadi deb taxmin qilinadi."
      },
      {
        key: "F",
        text: "So lokalisiert die Erkennungssoftware das Gesicht und berechnet seine charakteristischen Eigenschaften.",
        uz: "Shu tariqa aniqlash dasturi yuzni topadi va uning xarakterli xususiyatlarini hisoblab chiqadi. (Ortiqcha gap)"
      },
      {
        key: "G",
        text: "So nennt man Menschen, die sich außerordentlich gut Gesichter merken können.",
        uz: "Yuzlarni favqulodda yaxshi eslab qoladigan insonlarni shunday («Super-Recogniser») deb atashadi."
      },
      {
        key: "H",
        text: "Wie viele Menschen man wirklich als Super-Recogniser bezeichnen könne, sei unklar.",
        uz: "Qancha odamni haqiqatan ham Super-Recogniser deb atash mumkinligi hozircha noaniq."
      }
    ],
    answers: { "1": "G", "2": "D", "3": "C", "4": "H", "5": "A", "6": "E" },
    explanations: {
      "1": "1 -> G: Oldingi gapda «wird als Super-Recogniser bezeichnet» deyilgan, G gap esa «So nennt man Menschen, die sich außerordentlich gut Gesichter merken können» deb shu atamani izohlaydi.",
      "2": "2 -> D: Oldingi gapda «Die Forschung steckt zwar noch in den Kinderschuhen» (Tadqiqot hali boshlang'ich bosqichda) deyilgan; «zwar ... Doch schon jetzt eröffnet sie viele Perspektiven – in der Psychologie und in der kriminalistischen Praxis» mantiqiy bog'lanadi.",
      "3": "3 -> C: Oldingi gapda «Prosopagnosie, Gesichtsblindheit» haqida aytilgan, C gapda «Betroffene sind nicht dazu in der Lage, Menschen anhand ihres Gesichts zu identifizieren» va keyingi gapda «Im Extremfall erkennen sie sogar Familienmitglieder nicht» keladi.",
      "4": "4 -> H: H gapda «Wie viele Menschen man wirklich als Super-Recogniser bezeichnen könne, sei unklar» deyiladi va keyingi gapda Devis bu miqdorni «unter ein Prozent der Bevölkerung» deb baholaydi.",
      "5": "5 -> A: Oldingi gap «So können sich einige sehr gut an Gesichter erinnern...» deb boshlanadi, A gap «Andere hingegen sind besonders gut darin, Gesichter zuzuordnen, wenn sie mehrere Fotos vor sich haben» deb davom etadi va keyingi gap «Und manche können am besten...» bilan yakunlanadi.",
      "6": "6 -> E: «Die besonderen Begabungen der Super-Recogniser sind weitgehend unerforscht» ko'plikdagi «Die besonderen Begabungen» ga «sie» olmoshi bilan ishora qiladi: «Man vermutet, dass sie genetisch weitergegeben werden.»"
    }
  },
  lv2: {
    title: "Die Sprache der Wissenschaft: Geht es nicht auch einfacher?",
    titleUz: "Ilm-fan tili: Oddiyroq bo'lishi mumkin emasmi?",
    uzbekVocab: [
      { de: "der sperrige Jargon", uz: "og'ir / murakkab ilmiy jargon" },
      { de: "das intellektuelle Vergnügen", uz: "intellektual zavq" },
      { de: "der Gemeinplatz", uz: "hammaga ma'lum oddiy haqiqat / siyqasi chiqqan fikr" },
      { de: "aufgeblasen / verblasen", uz: "shishirilgan, sun'iy murakkablashtirilgan" },
      { de: "das Imponiergehabe", uz: "o'zini ko'z-ko'z qilish, aqlli ko'rinishga urinish" },
      { de: "sich den Stil verderben", uz: "o'z yozish uslubini buzib qo'ymoq" },
      { de: "ein albernes Gewand", uz: "kulgili / bema'ni libos (niqob)" },
      { de: "nebulöse / schwammige Sprache", uz: "mavhum, tumanli, noaniq til" },
      { de: "die Mogelpackung", uz: "aldovchi qadoq / soxta narsa" },
      { de: "plastische Bilder / Analogien", uz: "yorqin obrazlar / o'xshatishlar" },
      { de: "umworben werden", uz: "e'tibori qozonilmoq, jalb etilmoq" }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: "Abschnitt A (Misol: 0 -> A — Muallif o'quvchini zavqlantirib hikoya boshlaydi)",
        uz: "[A bo'lim]: Shunday boshlash mumkin edi: «Quyidagi tadqiqot minimal tashkilotlarda rol tuzilmalari va harakat bilimlarining interaktiv dezintegratsiyasi haqida boradi». Yo'q, to'xtang! Boshqatdan boshlaymiz: «Yigirma nafar futbolchida jiddiy mashq qilish imkoniyati yo'q edi. Mahalliy qovoqxonalar vasvasasi juda kuchli, ishdan keyingi pivo juda mazali edi. Nega endi aynan ikki futbolchi mashg'ulotlarga muntazam qatnasha oldi?» Ana bu boshqa gap! Roman shunday boshlanishi mumkin edi. Ammo aslida bu tashkilotlarning parchalanishi haqidagi sotsiologik maqolaning boshlanishidir. Maqolaning ikkita kirish qismi bor: biri og'ir ilmiy jargonda, ikkinchisi Gollivud filmlariga o'xshaydi. Maqolaning jozibasi shundaki, u har ikki boshlanishni bitta yakunga birlashtiradi."
      },
      {
        label: "Abschnitt B (Savollar: 8 va 10 — Ogohlantirish va istehzoli/keskin tanqid)",
        uz: "[B bo'lim]: Matnni amerikalik sotsiolog Karl E. Veyk nashr etgan. Ilmiy maqolalar o'quvchiga zavq bag'ishlashi odatiy hol emas. Aksincha, ilm-fan tili xunuk, beso'naqay va shishirilgan ekanligi deyarli hammaga ma'lum gap. Talaba uchun eng yoqimsiz to'siq — o'z sohasi tilini o'rganishdir; bitiruv ishida u oddiy aytish mumkin bo'lgan narsalarni ham mavhum va murakkab ifodalay olishi tekshiriladi. Biznes boshqaruvi qo'llanmalari balandparvoz «Denglisch» (nemischa-inglizcha) tilida oddiy haqiqatlarni yozadi. Olimlar o'z fikrlari atrofiga murakkab tildan devor quradilar. Talabalar bunday o'zini ko'z-ko'z qilishga (Imponiergehabe) taqlid qilmasliklari kerak. Chunki ular hatto yozish qobiliyatiga ega bo'lsalar ham, o'z uslublarini buzib qo'yishlari xavfi bor [8-savol: Warnung]. Ilmiy til shunchaki akademik ishonchli ko'rinish uchun kiyiladigan kulgili libos (albernes Gewand) degan taxmin tug'iladi [10-savol: abfällig / polemisch]."
      },
      {
        label: "Abschnitt C (Savol: 9 — Boshqa mutaxassis fikrini keltirish)",
        uz: "[C bo'lim]: Ba'zi fanlar kundalik fikrlarni ilmiy shaklga solishga moyil. Biroq gumanitar va ijtimoiy fanlarda fikrlar shu qadar murakkab va nozikki, ularni oddiy tilda tushuntirib bo'lmaydi. Boshqa tomondan, bu ham haqiqatning yarmi xolos. Ba'zi hollarda mavhum til ortida shunchaki ishonchsizlik yashiringan bo'ladi. Mannxaymdagi Nemis tili instituti prezidenti Lyudvig Ayxinger shunday deydi: «Ba'zan inson qo'rquvdan noaniq yozadi; tanqidga uchramaslik uchun fikrlar xira qoldiriladi» [9-savol: fremde Einschätzung]. Ko'p olimlar uchun «Chiroyli yozar ekansiz» degan gapdan yomonroq maqtov yo'q, chunki matn qanchalik murakkab bo'lsa, fikr shunchalik chuqur degan noto'g'ri qarash hali ham mavjud."
      },
      {
        label: "Abschnitt D (Savol: 11 — Tushunarli bayon uslubini ijobiy namuna sifatida ko'rsatish / E'tirozni rad etish)",
        uz: "[D bo'lim]: Biroq bunday tanqidchilar haqmi? Ot uslubi (Nominalstil) bilan to'yingan murakkab tilda nafaqat tushunarlilik, balki aniqlik ham yetishmaydi. Buning ustiga, hamma tushunadigan ilmiy tilga misollar yetarli. Bunga psixoanalitik Zigmund Freyd juda yaxshi erishgan [11-savol: Darstellungsweise besonders positiv hervorheben / Einwand entkräften]. Nazariyalari murakkab bo'lishiga qaramay, u o'z asarlari bilan tezda keng ommaga yetib borgan. Shu sababli 1964-yildan beri ilmiy nasr uchun Freyd mukofoti beriladi. Freydning siri: u o'z fikrlarini yorqin obrazlarga o'ragan yoki tushuntirish uchun yunon mifologiyasidan o'xshatishlar (masalan, Edip kompleksi) ishlatgan."
      },
      {
        label: "Abschnitt E (Savollar: 7 va 12 — Xulosa chiqarish va tilak/istak bildirish)",
        uz: "[E bo'lim]: Ammo umumiy manzaraga qaralsa, faqat shunday xulosa chiqarish mumkin («lässt sich nur folgern») [7-savol: zieht der Autor einen Schluss]: o'qish davomida faqat bunday durdonalar bilangina cheklanib bo'lmaydi, talabalarni ilmiy tilni o'rganishdan ozod qilib bo'lmaydi. Biroq ilm-fan olami qachondir nafis va tushunarli uslubga ko'proq ahamiyat bersa, juda ajoyib bo'lar edi («Doch schön wäre es, wenn...») [12-savol: äußert der Autor einen Wunsch]. Zero ilmiy matnlar faqat e'tibor qozongandagina ta'sir ko'rsata oladi."
      }
    ] as UzbekParagraphTranslation[],
    text: `<div class="text-paragraph"><span class="para-tag">[Abschnitt A]</span> Man könnte so beginnen: Die folgende Untersuchung handelt von der interaktiven Desintegration von Rollenstrukturen und Handlungswissen in minimalen Organisationen. Nein, warten Sie! Wir fangen noch mal an: Die zwanzig Fußballer hatten keine Chance, ernsthaft zu trainieren. Die Verlockungen der örtlichen Kneipenszene waren zu groß. Das Feierabendbier schmeckte zu gut. Warum aber schafften es ausgerechnet zwei der Fußballer regelmäßig zum Training? Das war schon besser. So könnte doch ein Roman beginnen. Aber eigentlich ist das der Beginn eines soziologischen Aufsatzes, in dem es um den Zerfall von Organisationen geht. Dieser Aufsatz hat zwei Anfänge, den obigen im sperrigen Jargon des Faches und den zweiten, der eher nach Hollywood klingt. Die Besonderheit des Aufsatzes liegt darin, dass er die beiden Anfänge zu einem Ende zusammenführt, das man als Leser fast bedauert, weil es auch das Ende eines großen intellektuellen Vergnügens bedeutet.</div><div class="text-paragraph"><span class="para-tag">[Abschnitt B]</span> Veröffentlicht hat den Text der amerikanische Soziologe Karl E. Weick. Und er ist deshalb besonders erwähnenswert, weil es keinesfalls eine Selbstverständlichkeit ist, dass wissenschaftliche Aufsätze dem Leser Vergnügen bereiten. Ganz im Gegenteil: Dass die Sprache der Wissenschaft hässlich, umständlich oder aufgeblasen sei, ist beinahe schon ein Gemeinplatz. Für den Studenten eines Faches besteht häufig die ärgerlichste Hürde darin, dessen Ausdrucksweise zu erlernen; in der Abschlussarbeit wird dann geprüft, ob er Dinge, die er zuvor einfacher hätte sagen können, auch genauso abstrakt und verblasen formulieren kann, wie es Standard seines Faches ist. Handbücher der Betriebswirtschaft tragen oft in einem hochtrabenden Denglisch Banalitäten vor, über die der bloß angelernte Einzelhandelskaufmann nur den Kopf schütteln kann. Wissenschaftler bauen mit ihrer komplizierten Sprache Mauern um die eigenen Gedanken. Studenten sollten ein solches Imponiergehabe besser nicht nachahmen. Denn es besteht die Gefahr, dass sie sich den Stil verderben, und zwar selbst dann, wenn sie eigentlich ein Talent für das Schreiben haben. Die Vermutung liegt nahe, die Wissenschaftssprache sei nur ein albernes Gewand, das manche benutzen, um akademisch glaubwürdig auftreten zu können.</div><div class="text-paragraph"><span class="para-tag">[Abschnitt C]</span> Zwar gibt es Disziplinen, die besonders anfällig dafür sind, alltägliche Einsichten nur wissenschaftlich umzuformulieren. Manchmal geht es aber womöglich kaum einfacher. Die Gedanken, die in vielen wissenschaftlichen Texten stecken, sind so komplex und spezifisch, dass es nicht möglich ist, sie in einer simplen Sprache zu erklären. Gerade in den Geistes- und Sozialwissenschaften geht es oft um feinste Differenzierungen, die präzise ausgedrückt werden müssen. Andererseits ist auch das nur die halbe Wahrheit. In manchen Fällen verbirgt sich hinter einer nebulösen Sprache nur Unsicherheit. „Manchmal formuliert man aus Angst undeutlich, manche Aussagen bleiben unscharf, damit sie nicht angreifbar sind“, sagt Ludwig Eichinger, Präsident des Instituts für Deutsche Sprache in Mannheim. Eine elegante Prosa gelte nichts. „Sie schreiben ja schön“: Für viele Wissenschaftler gebe es kein schlimmeres Kompliment. „Leider herrscht immer noch das Vorurteil, dass die Komplexität eines Textes mit der Tiefe der Gedanken korrespondiert“, klagt Eichinger. Aus diesem Grund geraten gut geschriebene wissenschaftliche Texte gelegentlich in den Ruf, eigentlich eine Mogelpackung zu sein, keine pure Wissenschaft, sondern eher Prosa, die das Anliegen der Wissenschaft wie nebenbei mitbedient.</div><div class="text-paragraph"><span class="para-tag">[Abschnitt D]</span> Doch haben solche Kritiker überhaupt Recht? Gerade einer komplizierten, vom Nominalstil geprägten Sprache fehlt es doch oft nicht nur an Verständlichkeit, sondern auch an Genauigkeit. Die Inhalte solcher Texte bleiben oft schwammig, sind schwer greifbar und entziehen sich gerade dadurch der Auseinandersetzung. Außerdem gibt es genügend Beispiele für eine allgemeinverständliche Wissenschaftssprache. Besonders gut gelang dies dem Psychoanalytiker Sigmund Freud. Obwohl seine Theorien kompliziert sind, erreichte er mit seinen Werken schnell ein Massenpublikum. Seit 1964 wird deswegen ein nach Freud benannter Preis für wissenschaftliche Prosa verliehen. Freuds Geheimnis: Er kleidete seine Gedanken in plastische Bilder oder nutzte Analogien aus der griechischen Mythologie, um sie zu erklären. Der Ödipus-Komplex hat es so sogar bis in die Alltagssprache geschafft.</div><div class="text-paragraph"><span class="para-tag">[Abschnitt E]</span> Betrachtet man aber das Gesamtbild, lässt sich nur folgern: Während des Studiums kann man sich nicht nur mit solchen Perlen auseinandersetzen. Das Erlernen der Wissenschaftssprache kann man den Studenten nicht ersparen. Doch schön wäre es, wenn die Wissenschaftswelt irgendwann mehr Wert auf eleganten und verständlichen Stil legen würde. Denn wissenschaftliche Texte können nur Wirkung entfalten, wenn sie Beachtung finden – und Leser wollen schließlich umworben werden.</div>`,
    questions: [
      {
        id: 7,
        text: "In welchem Abschnitt zieht der Autor einen Schluss?",
        uz: "Qaysi bo'limda muallif xulosa chiqaradi?",
        ans: "E",
        expl: "E bo'limida: «Betrachtet man aber das Gesamtbild, lässt sich nur folgern: ...» (Umumiy manzaraga qaralsa, faqat shunday xulosa chiqarish mumkin)."
      },
      {
        id: 8,
        text: "In welchem Abschnitt spricht der Autor eine Warnung aus?",
        uz: "Qaysi bo'limda muallif ogohlantirish bildiradi?",
        ans: "B",
        expl: "B bo'limida: «Denn es besteht die Gefahr, dass sie sich den Stil verderben, und zwar selbst dann, wenn sie eigentlich ein Talent für das Schreiben haben.» (Ular o'z yozish uslublarini buzib qo'yishlari xavfi bor)."
      },
      {
        id: 9,
        text: "In welchem Abschnitt gibt der Autor eine fremde Einschätzung wieder?",
        uz: "Qaysi bo'limda muallif boshqa bir insonning (ekspertning) bahosini keltiradi?",
        ans: "C",
        expl: "C bo'limida Mannxaymdagi Nemis tili instituti prezidenti Ludwig Eichinger fikri keltiriladi: «Manchmal formuliert man aus Angst undeutlich... sagt Ludwig Eichinger»."
      },
      {
        id: 10,
        text: "In welchem Abschnitt äußert sich der Autor abfällig über andere (bzw. formuliert polemisch)?",
        uz: "Qaysi bo'limda muallif boshqalar haqida mensimasdan / keskin tanqidiy (polemik) fikr bildiradi?",
        ans: "B",
        expl: "B bo'limida muallif olimlar va talabalarning sun'iy murakkab tilini «hochtrabendes Denglisch Banalitäten», «Imponiergehabe» va «ein albernes Gewand» (kulgili/bema'ni libos) deb keskin tanqid qiladi."
      },
      {
        id: 11,
        text: "In welchem Abschnitt hebt der Autor eine Darstellungsweise besonders positiv hervor (bzw. entkräftet einen Einwand)?",
        uz: "Qaysi bo'limda muallif biror ifoda uslubini alohida ijobiy ko'rsatadi (yoki e'tirozni rad etadi)?",
        ans: "D",
        expl: "D bo'limida Zigmund Freydning murakkab nazariyalarni yorqin obrazlar va yunon mifologiyasi analogiyalari orqali ommaga tushunarli yetkazgani ijobiy namuna sifatida ko'rsatiladi."
      },
      {
        id: 12,
        text: "In welchem Abschnitt äußert der Autor einen Wunsch?",
        uz: "Qaysi bo'limda muallif o'z tilagi / istagini bildiradi?",
        ans: "E",
        expl: "E bo'limida: «Doch schön wäre es, wenn die Wissenschaftswelt irgendwann mehr Wert auf eleganten und verständlichen Stil legen würde.» (Ilm-fan olami qachondir nafis va tushunarli uslubga ko'proq e'tibor bersa ajoyib bo'lardi)."
      }
    ]
  },
  lv3: {
    title: "Sabbatical – Karriereknick oder Bereicherung?",
    titleUz: "Sabbatical (Ijodiy / mehnat ta'tili) – karyeraga zarbami yoki hayotni boyitish?",
    uzbekVocab: [
      { de: "das Sabbatjahr / das Sabbatical", uz: "uzoq muddatli ta'til yili (ish joyini saqlagan holda tanaffus)" },
      { de: "eine Auszeit in die Tat umsetzen", uz: "mehnat tanaffusini amalda ro'yobga chiqarmoq" },
      { de: "die Risikobereitschaft", uz: "tavakkal qilishga tayyorlik" },
      { de: "im Vordergrund stehen", uz: "birinchi o'rinda (ustuvor) turmoq" },
      { de: "Prioritäten setzen", uz: "ustuvorliklarni belgilamoq (nima muhimligini ajratmoq)" },
      { de: "mit gemischten Gefühlen aufnehmen", uz: "aralash tuyg'ular (ham quvonch, ham xavotir) bilan qabul qilmoq" },
      { de: "im Stich lassen", uz: "yolg'iz / yordamsiz tashlab ketmoq" },
      { de: "auf Ersparnisse zurückgreifen", uz: "yig'ib qo'ygan jamg'armalarini ishlatishga majbur bo'lmoq" },
      { de: "der Karriereknick", uz: "karyeradagi pasayish / uzilish" }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: "1-xatboshi (Savollar 13–14: Germaniya kompaniyalari va xodimlarning jur'ati)",
        uz: "Germaniyada uzoq muddatli tanaffus (Sabbatical) olish orzusi ko'pchilikda bor, biroq o'tgan yili Germaniya kompaniyalarining o'n foizidan ham kamrog'i o'z xodimlariga uzoqroq ta'til (Auszeit) taklif qilgan [13-savol: F — ko'pchilik yirik firmalar ijobiy qaraydi degan gap xato]. Shu bilan birga, ko'pincha rejalar rahbar tufayli emas, balki xodimning o'zida tavakkal qilishga jur'at yetishmasligi sababli amalga oshmaydi: «Hamkasblar, qo'shnilar va do'stlar nima deydi? Qaytib kelganda nima bo'ladi? Va buning xarajatini ko'tara olamanmi?» [14-savol: R]."
      },
      {
        label: "2-xatboshi (Savollar 15–17: Lilli Pavlovsky hikoyasi)",
        uz: "Lilli Pavlovsky uchun ish hech qachon hayotining yagona mazmuni bo'lmagan; aksincha, uning doimo boshqa ko'plab qiziqishlari va orzulari bo'lgan [15-savol: F]. Ikki yillik Sabbatical davrida u bolalar qishlog'idagi (Kinderdorf) xayriya loyihasini amalga oshirdi va hatto o'z ish beruvchisini (kompaniyasini) homiy sifatida jalb qilishga muvaffaq bo'ldi [16-savol: R]. Lilli bu tanaffus uni o'zgartirganini aytadi: «Men sekinlashib qolmadim, ammo nima muhim va nima muhim emasligini yaxshiroq farqlay oladigan bo'ldim (ustuvorliklarni belgilashni o'rgandim)» [17-savol: R]."
      },
      {
        label: "3-xatboshi (Savollar 18–21: Florian Maeder hikoyasi)",
        uz: "Florian Maeder televideniye muallifi bo'lib ishlaydi. Ugandaga qilgan safari uni tanaffus olishga ilhomlantirdi (ammo u yerda hujjatli film uchun material yig'gani haqida matnda hech narsa deyilmagan) [18-savol: X]. Hindistondagi maktab loyihasida ish jadvali juda zich va qat'iy tashkil etilgan bo'lishiga qaramay, unda shaxsiy qiziqishlari uchun ham vaqt qoldi — uning Toj Mahalga sayohati unutilmas bo'lgan [19-savol: F]. Kasbiy jihatdan bu tanaffus unga aslo zarar yetkazmadi: u ishiga muammosiz qaytdi va bizda odamlar ko'pincha faqat «hashamat muammolari» (Luxusprobleme) dan shikoyat qilishini yana bir bor angladi [20-savol: R]. U: «Men allaqachon keyingi tanaffusni rejalashtiryapman», — deydi (biroq buni ish beruvchisi bilan muhokama qilgan-qilmagani matnda aytilmagan) [21-savol: X]."
      },
      {
        label: "4-xatboshi (Savollar 22–24: Nesrin Yilmaz hikoyasi va sarlavha)",
        uz: "Nesrin Yilmazning farzandlari onalarining 5 oyga AQShga ketish rejasini aralash tuyg'ular bilan qabul qilishdi: bir tomondan onalarining AQShda yashash istagini ajoyib deb bilishsa, ikkinchi tomondan ularni yolg'iz tashlab ketayotgandek his qilishdi [22-savol: R]. O'z ta'tilini moliyalashtirish uchun Nesrin jamg'armalariga va shaxsiy pensiya zaxirasiga murojaat qilishga majbur bo'ldi [23-savol: R]. Butun matnga eng mos sarlavha: «Sabbatical – Karriereknick oder Bereicherung?» (C) [24-savol: C]."
      }
    ] as UzbekParagraphTranslation[],
    text: `<p>Immer mehr Berufstätige träumen davon, für einige Monate oder gar Jahre aus dem gewohnten Arbeitsalltag auszusteigen, um sich lang gehegte Wünsche zu erfüllen. Doch in der deutschen Wirtschaft ist das sogenannte Sabbatjahr noch längst keine Selbstverständlichkeit: Weniger als zehn Prozent der deutschen Unternehmen boten ihren Mitarbeitern im vergangenen Jahr eine längere Auszeit an. Hinzu kommt, dass viele Pläne gar nicht am Chef scheitern, sondern an der mangelnden eigenen Risikobereitschaft und dem fehlenden Mut der Angestellten: Was sagen Kollegen, Nachbarn und Freunde? Was passiert bei der Rückkehr in den Betrieb? Und kann man sich das finanziell überhaupt leisten?</p><p>Für Lilli Pavlovsky stand die Arbeit keineswegs jahrelang als einziger Lebensinhalt im Vordergrund. Im Gegenteil: Sie hatte immer schon viele andere Interessen und Träume neben dem Beruf. Als sie sich schließlich für eine zweijährige Auszeit entschied, rief sie eine Hilfsaktion für ein Kinderdorf ins Leben – und gewann ihren Arbeitgeber sogar als finanziellen Sponsor für dieses Projekt. Rückblickend sagt Lilli Pavlovsky, die Auszeit habe sie nachhaltig verändert: „Nicht, dass ich langsamer geworden wäre, aber ich glaube, ich kann heute viel besser unterscheiden, was wirklich relevant ist und was nicht.“ Sie hat gelernt, klare Prioritäten zu setzen.</p><p>Auch Florian Maeder, der als Autor für das Fernsehen arbeitet, wagte den Schritt. Ein Besuch in Uganda hatte ihn ursprünglich dazu inspiriert, eine längere Pause einzulegen. Während seines Sabbaticals engagierte er sich unter anderem bei einem Schulprojekt in Indien. Obwohl das Arbeitsprogramm dort äußerst dicht und streng durchorganisiert war, blieb ihm dennoch genügend Zeit für eigene Besichtigungen und Interessen: Sein Besuch beim Taj Mahal sei schlichtweg unvergesslich gewesen, berichtet er. Beruflich hat ihm die Auszeit keineswegs geschadet; nach seiner Rückkehr fand er problemlos in seinen Job zurück und stellte fest: „Ich weiß jetzt wieder, dass ich hierzulande eigentlich nur unter Luxusproblemen leide. Und ich plane innerlich schon die nächste Auszeit.“</p><p>Bei Nesrin Yilmaz nahmen die Kinder die Pläne ihrer Mutter zunächst mit sehr gemischten Gefühlen auf: Einerseits fanden sie es großartig, dass ihre Mutter für fünf Monate in den USA leben wollte, andererseits hatten sie aber auch das Gefühl, von ihr allein gelassen zu werden. Um ihre Auszeit überhaupt finanzieren zu können, musste Nesrin Yilmaz tief in die eigene Tasche greifen und auf ihre privaten Ersparnisse sowie ihre Altersvorsorge zurückgreifen. Bereut hat sie ihren Entschluss dennoch keine Sekunde.</p>`,
    questions: [
      {
        id: 13,
        text: "In Deutschland stehen die meisten großen Firmen dem Sabbatjahr eindeutig positiv gegenüber.",
        uz: "Germaniyada aksariyat yirik kompaniyalar Sabbatical yiliga aniq ijobiy munosabatda.",
        ans: "F",
        expl: "Falsch (F): Matnda aytilishicha, o'tgan yili Germaniya kompaniyalarining 10 foizidan ham kamrog'i xodimlariga uzoq muddatli tanaffus (Auszeit) taklif qilgan."
      },
      {
        id: 14,
        text: "Häufig fehlt es den Angestellten an Mut, um eine Auszeit in die Tat umzusetzen.",
        uz: "Ko'pincha xodimlarga tanaffusni amalda ro'yobga chiqarish uchun jur'at yetishmaydi.",
        ans: "R",
        expl: "Richtig (R): Rejalar ko'pincha rahbar tufayli emas, balki xodimning o'z tavakkalchilikka tayyorligi (Risikobereitschaft) va jur'ati yetishmasligi sababli barbod bo'ladi."
      },
      {
        id: 15,
        text: "Für Frau Pavlovsky stand jahrelang die Arbeit eindeutig im Vordergrund.",
        uz: "Pavlovsky xonim uchun yillar davomida ish aniq birinchi o'rinda turgan.",
        ans: "F",
        expl: "Falsch (F): Ish hech qachon uning hayotdagi yagona maqsadi bo'lmagan; aksincha, uning doimo boshqa ko'plab qiziqishlari va orzulari bo'lgan."
      },
      {
        id: 16,
        text: "Frau Pavlovskys Kinderdorf-Aktion wurde finanziell von ihrer Firma unterstützt.",
        uz: "Pavlovsky xonimning bolalar qishlog'i aksiyasi uning firmasi tomonidan moliyaviy qo'llab-quvvatlandi.",
        ans: "R",
        expl: "Richtig (R): U o'z ish beruvchisini (rahbarini) Kinderdorf loyihasi uchun homiy (Sponsor) sifatida jalb qilishga muvaffaq bo'lgan."
      },
      {
        id: 17,
        text: "Während der zweijährigen Auszeit lernte Frau Pavlovsky, Prioritäten zu setzen.",
        uz: "Ikki yillik tanaffus davomida Pavlovsky xonim ustuvorliklarni belgilashni o'rgandi.",
        ans: "R",
        expl: "Richtig (R): Uning so'zlariga ko'ra, tanaffusdan so'ng u nima muhim (relevant) va nima muhim emasligini yaxshiroq ajrata oladigan bo'lgan."
      },
      {
        id: 18,
        text: "Florian Maeder sammelte in Uganda Material für einen Dokumentarfilm.",
        uz: "Florian Maeder Ugandada hujjatli film uchun material to'plagan.",
        ans: "X",
        expl: "Nicht im Text (X): Florian Maeder televideniye muallifi bo'lib ishlaydi va Ugandaga tashrifi uni tanaffus olishga ilhomlantirgan, ammo u yerda hujjatli film uchun material yig'gani haqida matnda ma'lumot yo'q."
      },
      {
        id: 19,
        text: "Wegen des dichten Arbeitsprogramms blieb Florian Maeder bei dem indischen Schulprojekt zu wenig Zeit für Besichtigungen.",
        uz: "Zich ish dasturi tufayli Florian Maederga Hindistondagi maktab loyihasida diqqatga sazovor joylarni ko'rishga vaqt yetmadi.",
        ans: "F",
        expl: "Falsch (F): Ish juda qat'iy tashkil etilgan bo'lsa-da, unda shaxsiy qiziqishlari uchun vaqt qolgan va u Toj Mahalni ziyorat qilgan."
      },
      {
        id: 20,
        text: "Beruflich hat Florian Maeder die Auszeit keineswegs geschadet.",
        uz: "Kasbiy jihatdan tanaffus Florian Maederga aslo zarar yetkazmadi.",
        ans: "R",
        expl: "Richtig (R): U ishiga muammosiz qaytdi va o'zini faqat «hashamat muammolari» (Luxusprobleme) qurshovida ekanligini anglaganini aytadi."
      },
      {
        id: 21,
        text: "Florian Maeder hat seine Vorhaben für ein weiteres Sabbatjahr schon mit seinem Arbeitgeber besprochen.",
        uz: "Florian Maeder navbatdagi Sabbatical yili haqidagi rejasini ish beruvchisi bilan allaqachon muhokama qilgan.",
        ans: "X",
        expl: "Nicht im Text (X): Matnda u «Men allaqachon keyingi tanaffusni rejalashtiryapman» deydi, lekin buni ish beruvchisi bilan gaplashgan-gaplashmagani aytilmagan."
      },
      {
        id: 22,
        text: "Nesrins Kinder nahmen die Pläne ihrer Mutter mit gemischten Gefühlen auf.",
        uz: "Nesrinning farzandlari onalarining rejalarini aralash tuyg'ular bilan qabul qilishdi.",
        ans: "R",
        expl: "Richtig (R): Bir tomondan ular onalarining AQShda 5 oy yashash istagini ajoyib deb topishgan bo'lsa, ikkinchi tomondan o'zlarini tashlab ketilgandek his qilishgan."
      },
      {
        id: 23,
        text: "Um ihre Auszeit zu finanzieren, musste Nesrin Yilmaz auf ihre Ersparnisse zurückgreifen.",
        uz: "Tanaffusini moliyalashtirish uchun Nesrin Yilmaz o'z jamg'armalarini ishlatishga majbur bo'ldi.",
        ans: "R",
        expl: "Richtig (R): Nesrin ta'tilini moliyalashtirish uchun o'z jamg'armalari va pensiya zaxirasiga (Altersvorsorge) murojaat qilgan."
      },
      {
        id: 24,
        text: "Welche der Überschriften a, b oder c passt am besten zum Text?",
        uz: "a, b yoki c sarlavhalaridan qaysi biri matnga eng mos keladi?",
        ans: "C",
        opts: [
          "A) Arbeitszeitmodelle in deutschen Unternehmen",
          "B) Das Sabbatjahr aus Unternehmersicht",
          "C) Sabbatical – Karriereknick oder Bereicherung?"
        ],
        expl: "C javob to'g'ri: Matnda Sabbatical'ning karyeraga ta'siri va shaxsiy hayotni boyitishi aniq insonlar misolida tahlil qilingan."
      }
    ]
  },
  sp: {
    title: "Im Spannungsfeld zwischen Konkurrenz und Kooperation",
    titleUz: "Raqobat va hamkorlik o'rtasidagi ziddiyat maydonida",
    uzbekVocab: [
      { de: "knapp", uz: "tanqis, cheklangan, kam" },
      { de: "unbegrenzt", uz: "cheksiz, chegarasiz" },
      { de: "ausreichend", uz: "yetarli darajada" },
      { de: "zur Neige gehen", uz: "tugab bormoq, poyoniga yetmoq" },
      { de: "in der Folge", uz: "buning natijasida / oqibatda" },
      { de: "allgegenwärtig", uz: "hamma joyda mavjud" },
      { de: "die Ausprägung", uz: "namoyon bo'lish shakli / ko'rinishi" },
      { de: "das Tierreich", uz: "hayvonot olami" },
      { de: "in Betracht ziehen", uz: "inobatga / hisobga olmoq" },
      { de: "gegenseitig", uz: "o'zaro, bir-birini" },
      { de: "etwas darlegen (legt ... dar)", uz: "tushuntirib bermoq, bayon qilmoq" },
      { de: "das Territorium", uz: "hudud, makon" },
      { de: "aus etwas Nutzen ziehen", uz: "biror narsadan foyda / manfaat ko'rmoq" },
      { de: "zerstörerisch", uz: "vayronkor, halokatli" },
      { de: "die Auswirkungen", uz: "oqibatlar, ta'sirlar" },
      { de: "die Errungenschaft", uz: "yutuq (madaniy yutuq)" }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: "1–3-xatboshilar (25–34-bo'shliqlar)",
        uz: "Raqobat evolyutsiyaning asosiy shartidir (0). Yashab qolish uchun zarur bo'lgan resurslar cheklangan/tanqis (25: knapp), shu sababli tirik mavjudotlar soni cheksiz (26: unbegrenzt) ko'paya olmaydi. Misol uchun: agar yetarli (27: ausreichend) ozuqa bo'lsa, individlar hayotni saqlab turuvchi ozuqa tugagunga qadar ko'payaveradi. Natijada (28: Folge) raqobat yuzaga keladi. To'g'rimi? Hech bo'lmaganda nazariy jihatdan (29: theoretisch). Darhaqiqat, raqobat tamoyili hamma joyda mavjuddek tuyuladi. Ozuqa uchun kurashish raqobat mexanizmining faqat bitta ko'rinishi (30: Ausprägung) xolos, deydi Gottingen universiteti xulq-atvor biologi Yuliya Ostner. Hayvonot olamida (31: Tierreich) juftlashish sherigi yoki xavfsiz uxlash joyi uchun ham raqobat bo'lishi mumkin. Evolyutsiya haqida o'ylaganimiz zahoti raqobatni inobatga olishimiz (32: ziehen — in Betracht ziehen) shart. Shunga qaramay, biolog Martin Novakning so'zlariga ko'ra, evolyutsiya faqat raqobat va xudbinlik bilangina belgilanmaydi (33: bestimmt). Yashash uchun kurashda hamkorlik omili (34: der Faktor) ham xuddi shunday muhim ekanligini ko'rsatadi."
      },
      {
        label: "4–6-xatboshilar (35–46-bo'shliqlar)",
        uz: "Umumiy til va tobora samarali aloqa vositalari tufayli odamlar o'rtasidagi hamkorlik hayvonlarga qaraganda yuqoriroq darajaga (35: habe ... 36: erreicht) yetgan. Yoshlik chog'idanoq odamlar bir-birlarini o'zaro (37: gegenseitig) qo'llab-quvvatlaydilar. Raqobat va hamkorlik o'rtasida o'zaro ta'sir mavjud (38: bestehe). «Odamlar yaxshiroq raqobatlashish uchun hamkorlik qiladilar», — deb tushuntiradi (39: dar — legt dar) Ostner. Agar ilgari odamlar guruhlari kattaroq hududni (40: Territorium) egallash uchun birlashgan bo'lsalar, ular bir tomondan hamkorlikni, boshqa tomondan esa boshqa guruhlarga nisbatan raqobatni namoyon qilganlar. Iqtisodchi Piter Vayze bir tomondan xudbin raqobat va ikkinchi tomondan altruistik raqobatni farqlaydi (41: unterscheidet). Biroq uning xulosasi aniq: raqobat, qanday shaklda bo'lmasin, doimo zarar yetkazadi (42: schade). Xudbin ko'rinishda inson raqobatdan o'zi foyda ko'radi (43: ziehe — Nutzen ziehen), jamoaviy shaklda esa butun guruhlar boshqalarga qarshi kurashadigan vayronkor (44: zerstörerische) raqobat haqida gap boradi. Insoniyat tarixida bunday raqobat doimo salbiy oqibatlarga (45: Auswirkungen) olib kelgan: u urush va vayronagarchilikka sabab bo'lgan. Tabiat raqobatni o'z-o'zini saqlash tamoyili sifatida ko'zda tutgan. Buning qarshisida esa hamkorlikdek madaniy yutuq (46: Errungenschaft) turadi."
      }
    ] as UzbekParagraphTranslation[],
    text: `<p>Wettbewerb ist die Grundvoraussetzung für die <em>[0: Evolution]</em>. Die zum Überleben notwendigen Ressourcen sind <strong>(25)</strong>, weshalb die Anzahl der Lebewesen nicht <strong>(26)</strong> zunehmen kann. Ein Beispiel: Wenn es <strong>(27)</strong> Nahrung gibt, vermehren sich die Individuen so lange, bis die lebenserhaltende Nahrung zur Neige geht. In der <strong>(28)</strong> entsteht Konkurrenz. Richtig? Zumindest <strong>(29)</strong>. Tatsächlich scheint das Prinzip Konkurrenz allgegenwärtig.</p><p>Das Wetteifern um Nahrung sei nur eine <strong>(30)</strong> des Konkurrenzmechanismus, meint Julia Ostner, Verhaltensbiologin am Johann-Friedrich-Blumenbach-Institut für Zoologie und Anthropologie in Göttingen. Im <strong>(31)</strong> könne auch um Paarungspartner konkurriert werden oder um einen sicheren Schlafplatz. In dem Moment, in dem wir an Evolution denken, müssen wir Konkurrenz in Betracht <strong>(32)</strong>.</p><p>Dennoch wird die Evolution laut dem Biologen Martin Nowak nicht nur von Konkurrenz und Egoismus <strong>(33)</strong>. Als ebenso wichtig im Kampf um das Dasein erweise sich <strong>(34)</strong> Kooperation, so Nowak in der Zeitschrift <em>Spektrum der Wissenschaft</em>. Konkurrenz allein funktioniere nicht.</p><p>Zahlreiche Tiere arbeiten zusammen, um besser leben zu können. Durch die gemeinsame Sprache und zunehmend effektivere Kommunikationsmittel <strong>(35)</strong> Kooperation unter Menschen einen höheren Grad <strong>(36)</strong> als unter Tieren, so Biologin Ostner. Schon in jungen Jahren unterstützen sich Menschen <strong>(37)</strong>. Der Mensch sei sogar Weltmeister der Kooperation. Zwischen Konkurrenz und Kooperation <strong>(38)</strong> eine Wechselwirkung. „Menschen kooperieren, um besser zu konkurrieren“, legt Ostner <strong>(39)</strong>. Wenn sich Gruppen von Menschen früher zusammengeschlossen hätten, um ein größeres <strong>(40)</strong> zu bewohnen, dann hätten sie einerseits kooperatives Verhalten, andererseits auch anderen Gruppen gegenüber Konkurrenzdenken gezeigt. Kooperation basiere immer auf Eigennutz. Ein vollkommen selbstloses Agieren gebe es laut der Wissenschaftlerin nicht.</p><p>Der Ökonom Peter Weise <strong>(41)</strong> zwar zwischen egoistischer Konkurrenz einerseits und altruistischer Konkurrenz andererseits. Doch sein Fazit ist unmissverständlich: Konkurrenz, egal in welcher Form, <strong>(42)</strong> immer. In der egoistischen Ausprägung <strong>(43)</strong> der Mensch selbst Nutzen aus der Konkurrenz, bei der kollektiven Form handle es sich um eine <strong>(44)</strong> Konkurrenz, bei der ganze Gruppen gegen andere kämpfen. In der Geschichte der Menschheit habe solche Konkurrenz nämlich stets negative <strong>(45)</strong> gehabt: Sie habe zu Krieg und Destruktion geführt.</p><p>Die Natur hat Konkurrenz als Selbsterhaltungsprinzip vorgesehen. Demgegenüber steht die kulturelle <strong>(46)</strong> der Kooperation. Um gut zu leben, müssen wir einen Ausgleich zwischen beiden schaffen.</p>`,
    questions: [
      { id: 25, opts: ["karg", "klein", "knapp", "kurz"], ans: "knapp", expl: "Ressourcen sind knapp (resurslar tanqis / cheklangan)." },
      { id: 26, opts: ["unbegrenzt", "unerlässlich", "unerreichbar", "unerträglich"], ans: "unbegrenzt", expl: "unbegrenzt zunehmen (cheksiz ko'paymoq)." },
      { id: 27, opts: ["angemessen", "ausreichend", "erträglich", "genügsam"], ans: "ausreichend", expl: "ausreichend Nahrung (yetarli ozuqa)." },
      { id: 28, opts: ["Abfolge", "Folge", "Folgerung", "Verfolgung"], ans: "Folge", expl: "In der Folge (natijada / oqibatda)." },
      { id: 29, opts: ["teorethisch", "theoretisch", "theorietisch", "theoritisch"], ans: "theoretisch", expl: "To'g'ri imlo: theoretisch (nazariy jihatdan)." },
      { id: 30, opts: ["Ausdehnung", "Aushebung", "Ausprägung", "Aussicht"], ans: "Ausprägung", expl: "eine Ausprägung des Konkurrenzmechanismus (raqobat mexanizmining bir ko'rinishi / namoyon bo'lishi)." },
      { id: 31, opts: ["Tiergarten", "Tiergehege", "Tierpark", "Tierreich"], ans: "Tierreich", expl: "Im Tierreich (hayvonot olamida)." },
      { id: 32, opts: ["kommen", "nehmen", "sehen", "ziehen"], ans: "ziehen", expl: "Turgun birikma: in Betracht ziehen (inobatga olmoq)." },
      { id: 33, opts: ["bestimmt", "missgestimmt", "verstimmt", "zugestimmt"], ans: "bestimmt", expl: "von Konkurrenz und Egoismus bestimmt werden (raqobat va xudbinlik bilan belgilanmoq)." },
      { id: 34, opts: ["dem Faktor", "den Faktor", "der Faktor", "des Faktors"], ans: "der Faktor", expl: "Nominativ ega: erweise sich der Faktor Kooperation (hamkorlik omili)." },
      { id: 35, opts: ["gehabt", "habe", "haben", "hatten"], ans: "habe", expl: "Konjunktiv I (o'zlashtirma gap, birlik): Kooperation habe ... erreicht." },
      { id: 36, opts: ["erbracht", "erhalten", "erreicht", "erwirkt"], ans: "erreicht", expl: "einen höheren Grad erreicht (yuqoriroq darajaga yetgan)." },
      { id: 37, opts: ["beidseitig", "einseitig", "gegenseitig", "zweiseitig"], ans: "gegenseitig", expl: "unterstützen sich gegenseitig (bir-birlarini o'zaro qo'llab-quvvatlaydilar)." },
      { id: 38, opts: ["bestanden", "bestehe", "bestehen", "bestehst"], ans: "bestehe", expl: "Konjunktiv I: Zwischen Konkurrenz und Kooperation bestehe eine Wechselwirkung (o'zaro ta'sir mavjud)." },
      { id: 39, opts: ["ab", "an", "dar", "hin"], ans: "dar", expl: "Ajraluvchi fe'l: darlegen -> legt Ostner dar (Ostner tushuntirib beradi)." },
      { id: 40, opts: ["Teritorium", "Terittorium", "Territorium", "Territtorium"], ans: "Territorium", expl: "To'g'ri imlo: Territorium (hudud)." },
      { id: 41, opts: ["gliedert", "teilt", "unterscheidet", "wählt"], ans: "unterscheidet", expl: "unterscheidet zwischen A und B (A va B o'rtasida farqlaydi)." },
      { id: 42, opts: ["geschadet", "schade", "schaden", "schadend"], ans: "schade", expl: "Konjunktiv I (birlik): Konkurrenz ... schade immer (raqobat doimo zarar yetkazadi)." },
      { id: 43, opts: ["erkenne", "sehe", "verspreche", "ziehe"], ans: "ziehe", expl: "Turgun birikma: Nutzen ziehen aus (+ Dat) -> ziehe der Mensch selbst Nutzen aus der Konkurrenz." },
      { id: 44, opts: ["zerfallene", "zergangene", "zermürbende", "zerstörerische"], ans: "zerstörerische", expl: "eine zerstörerische Konkurrenz (vayronkor / halokatli raqobat)." },
      { id: 45, opts: ["Ausfälle", "Ausmaße", "Ausübungen", "Auswirkungen"], ans: "Auswirkungen", expl: "negative Auswirkungen haben (salbiy oqibatlarga ega bo'lmoq)." },
      { id: 46, opts: ["Durchbruch", "Errungenschaft", "Erwerb", "Fortschritt"], ans: "Errungenschaft", expl: "die kulturelle Errungenschaft der Kooperation (hamkorlikdek madaniy yutuq)." }
    ]
  }
};

export const VARIANT_15_READING = {
  title: "Variant 15: Eine Box verändert die Welt / Fernstudenten / Weißes Gold / Wenn Wörter verschwinden",
  pdfSource: "/assets/aistudio/15_28373fe1.pdf",
  lv1: {
    title: "Eine Box verändert die Welt",
    titleUz: "Dunyoni o'zgartirgan quti (Yuk konteyneri tarixi)",
    uzbekVocab: [
      { de: "eine gewellte Stahlbox", uz: "to'lqinsimon (gofrirovka qilingan) po'lat quti" },
      { de: "das greifbare Symbol", uz: "yaqqol / qo'l bilan ushlab bo'ladigan ramz" },
      { de: "das Herzstück der Logistik", uz: "zamonaviy logistikaning yuragi (asosiy qismi)" },
      { de: "verstauen", uz: "joylashtirmoq, taxlamoq (omborxonaga)" },
      { de: "die Schwerstarbeit / lebensgefährlich", uz: "o'ta og'ir mehnat / hayot uchun xavfli" },
      { de: "die Abmessungen", uz: "o'lchamlar, gabaritlar" },
      { de: "streikende Hafenarbeiter", uz: "ish tashlagan port ishchilari" },
      { de: "der Betreiber", uz: "boshqaruvchi / operator (port operatori)" },
      { de: "auf einen Bruchteil reduzieren", uz: "juda kichik ulushgacha (bir necha barobar) kamaytirmoq" },
      { de: "eine Banknote zieren", uz: "pul kupyurasini bezamoq" }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: "1–2-xatboshilar va [ 1 ] bo'shliq",
        uz: "O'n ikki metr uzunlikdagi, uch metr balandlikdagi va xuddi shuncha kenglikdagi to'lqinsimon po'lat quti — u globallashuvning yaqqol ramziga aylandi. Millionlab konteynerlar dunyo okeanlarida tobora ulkan kemalarda suzib, mahsulotlarni A nuqtadan B nuqtaga yetkazadi (0: Xitoydan smartfonlar, Bangladeshdan futbolkalar...). Konteyner dengiz va quruqlikdagi transport tizimida inqilob qildi. 1950-yillargacha yuklarni donalab yoki qop va qutilarda tashish odatiy edi. 1954-yilda «Warrior» nomli yuk kemasi Bruklindan Bremerxavenga 5000 tonna oziq-ovqat, uy-ro'zg'or buyumlari va pochtani 194 582 ta bochka, quti va qoplarda olib bordi. Bruklinda har bir bo'lak qo'lda yuk mashinasi yoki vagondan port omboriga, u yerdan esa kema bortiga tashib chiqilgan edi. [ 1 -> E: Port ishchilari uchun bu nafaqat o'ta og'ir mehnat, balki hayot uchun xavfli ham edi ]. Chunki dunyoning yirik portlarida tez-tez og'ir baxtsiz hodisalar yuz berardi."
      },
      {
        label: "3-xatboshi va [ 2 ] bo'shliq",
        uz: "«Warrior» kemasini yuklash o'n kun, Bremerxavenda tushirish ham xuddi shuncha — okeanni kesib o'tish qancha cho'zilgan bo'lsa, shuncha vaqt oldi. Garchi o'nlab yillar davomida yuk tashishni samaraliroq qilishga urinishlar bo'lgan edi. [ 2 -> C: Biroq ular konteynerlarning o'lchamlari bo'yicha kelishmovchiliklar va ish tashlagan port ishchilari tufayli muvaffaqiyatsizlikka uchragan edi ]. Faqatgina amerikalik tadbirkorga harbiy-dengiz kuchlari bilan birgalikda universal transport qutisi g'oyasini o'tkazish nasib etdi."
      },
      {
        label: "4-xatboshi va [ 3 ]–[ 4 ] bo'shliqlar",
        uz: "1956-yil 26-aprelda Malkolm Maklin qayta jihozlangan tankerda Port-Nyuarkdan Texasga suzib ketdi. Bortda 56 ta konteyner bor edi. [ 3 -> A: U o'z transport idishlari uchun tanlagan o'lcham standartga aylandi ]. Ushbu 40 futlik konteynerlar bugungi kunda ham har kuni ishlatiladi. Maklinning boshqalar muvaffaqiyatsizlikka uchragan joyda g'alaba qozonishi uning yonidagi qudratli mijoz — AQSh armiyasiga ham bog'liq edi. [ 4 -> D: Aynan shu holat keyinchalik ularning (port operatorlarining) o'z ish-faoliyatlari uchun asos bo'ldi ]. Maklin nihoyat Nyu-York porti operatorlarini o'z konteyner terminalini barpo etishga ko'ndirdi."
      },
      {
        label: "5-xatboshi va [ 5 ]–[ 6 ] bo'shliqlar",
        uz: "Bugungi kunda 1960-yillardagi port ishchisi zamonaviy konteyner terminalini taniy olmagan bo'lardi. O'sha paytda bir necha kun davomida yuklangan narsalar bugun bir necha soatda ortiladi. Bugun dengiz orqali tashiladigan yuklarning 90 foizi konteynerlarda sayohat qiladi. [ 5 -> F: Bunda ular kompyuterlar va global logistika tizimlari tomonidan boshqariladi hamda safar davomida kuzatib boriladi ]. Konteyner yuk tashish xarajatlarini bir necha barobar qisqartirdi va Yevropa, Osiyo hamda Amerika o'rtasidagi global tovar oqimini harakatga keltirdi. [ 6 -> H: 1960-yillarda tovarlar savdosi global iqtisodiy ishlab chiqarishning 20 foizidan kamrog'ini tashkil etardi ]. Bugungi kunda esa u taxminan yarmini (50 foizini) tashkil etadi. Dunyoning eng yirik portlaridan biri bo'lgan Singapur konteynerdan shu qadar minnatdor ediki, hatto uni pul kupyurasiga ham tushirdi."
      }
    ] as UzbekParagraphTranslation[],
    text: `<p>Eine gewellte Stahlbox, zwölf Meter lang, drei Meter hoch und genauso breit. Sie ist zum greifbaren Symbol der Globalisierung geworden. Millionen von Containern kreuzen auf immer größeren Schiffen auf den Weltmeeren und schaffen Produkte von A nach B: <em>[0: z]</em> Der Container hat das Transportwesen auf See und an Land revolutioniert. Er hat den globalen Warentransport enorm vereinfacht und ist Herzstück der modernen Logistik.</p><p>Bis in die 50er Jahre war es üblich, Waren einzeln zu transportieren oder sie in Säcke oder Kisten zu verladen. 1954 fuhr ein Frachtschiff mit dem Namen „Warrior“ von Brooklyn nach Bremerhaven. An Bord befanden sich 5000 Tonnen Lebensmittel, Haushaltswaren und Post, verteilt auf 194.582 Fässer, Kisten und Säcke. Jedes Stück war in Brooklyn per Hand von einem LKW oder einem Zugwaggon in ein Warenhaus am Hafen und von dort an Bord geschleppt worden, um es in den Tiefen des Lagerraums zu verstauen. <span class="text-gap">[ 1 ]</span> Immer wieder passierten nämlich in den großen Häfen der Welt schwere Unfälle.</p><p>Es dauerte zehn Tage, bis die „Warrior“ beladen, und ebenso lange, bis sie in Bremerhaven wieder entladen war – genauso lange, wie die Überfahrt dauerte. Zwar hatte es bereits seit Jahrzehnten Bemühungen gegeben, den Transport von Gütern effizienter zu gestalten. <span class="text-gap">[ 2 ]</span> Erst einem US-amerikanischen Unternehmer gelang es, gemeinsam mit der Marine die Idee einer universellen Transportbox durchzusetzen.</p><p>Am 26. April 1956 schipperte Malcolm McLean mit einem umgebauten Tanker von Port Newark Richtung Texas. An Bord waren 56 Container. <span class="text-gap">[ 3 ]</span> Diese 40-Fuß-Container sind noch heute täglich in Gebrauch. Dass McLean erfolgreich war, wo andere vor ihm versagt hatten, lag auch an dem mächtigen Kunden an seiner Seite, dem amerikanischen Militär. <span class="text-gap">[ 4 ]</span> McLean überzeugte schließlich die Betreiber des Hafens von New York, einen eigenen Containerterminal einzurichten.</p><p>Heute wäre ein Containerterminal für einen Hafenarbeiter aus den 1960er Jahren nicht wiederzuerkennen. Was damals in mehreren Tagen in Kisten und Fässern auf die „Warrior“ gebracht wurde, wird heute in ein paar Stunden verladen. Heute reisen rund 90 Prozent der Güter, die über die Meere verschifft werden, in Containern. <span class="text-gap">[ 5 ]</span> Der Container reduzierte die Transportkosten von Gütern auf einen Bruchteil und brachte die weltweiten Warenströme zwischen Europa, Asien und Amerika zum Fließen. <span class="text-gap">[ 6 ]</span> Heute macht er ungefähr die Hälfte aus. Ohne Container wäre der globalisierte Warenfluss undenkbar. Singapur, einer der größten Häfen der Welt, war dem Container so dankbar, dass dieser sogar eine Banknote zieren durfte.</p>`,
    options: [
      {
        key: "A",
        text: "Die Größe, die er für seine Transportbehälter gewählt hatte, wurde zum Standard.",
        uz: "U o'z transport idishlari uchun tanlagan o'lcham standartga aylandi."
      },
      {
        key: "B",
        text: "Dieses erhoffte sich von den Containern logistische Verbesserungen in der Sicherung des Nachschubs.",
        uz: "U (harbiy-dengiz kuchlari / armiya) konteynerlardan ta'minotni yetkazishda logistik yaxshilanishlarni kutgan edi."
      },
      {
        key: "C",
        text: "Doch sie waren am Streit über die Abmessungen der Container und an streikenden Hafenarbeitern gescheitert.",
        uz: "Biroq ular (urinishlar) konteyner o'lchamlari ustidagi tortishuvlar va ish tashlagan port ishchilari tufayli muvaffaqiyatsizlikka uchragan edi."
      },
      {
        key: "D",
        text: "Es sollte genau dieser Umstand sein, dem sie in der Folge ihre Beschäftigung verdanken würden.",
        uz: "Keyinchalik ular o'z ish-faoliyatlari uchun minnatdor bo'ladigan holat aynan shu bo'lishi kerak edi."
      },
      {
        key: "E",
        text: "Für die Hafenarbeiter war das nicht nur Schwerstarbeit, sondern lebensgefährlich.",
        uz: "Port ishchilari uchun bu nafaqat o'ta og'ir mehnat, balki hayot uchun xavfli ham edi."
      },
      {
        key: "F",
        text: "Gesteuert und auf ihrer Reise verfolgt werden diese dabei von Computern und globalen Logistiksystemen.",
        uz: "Bunda ular kompyuterlar va global logistika tizimlari tomonidan boshqariladi va safar davomida kuzatib boriladi."
      },
      {
        key: "G",
        text: "Handelsrechtliche Überlegungen dieser Art konnten ihren Siegeszug nicht aufhalten.",
        uz: "Bunday savdo-huquqiy mulohazalar ularning g'alabali yurishini to'xtata olmadi. (Ortiqcha gap)"
      },
      {
        key: "H",
        text: "In den 1960er Jahren betrug der Warenhandel weniger als 20 Prozent der globalen Wirtschaftsleistung.",
        uz: "1960-yillarda tovarlar savdosi global iqtisodiy ishlab chiqarishning 20 foizidan kamrog'ini tashkil etardi."
      }
    ],
    answers: { "1": "E", "2": "C", "3": "A", "4": "D", "5": "F", "6": "H" },
    explanations: {
      "1": "1 -> E: Qo'lda bochka va qutilarni tashish port ishchilari uchun hayotga xavfli («lebensgefährlich») edi, chunki keyingi gapda «Immer wieder passierten nämlich in den großen Häfen der Welt schwere Unfälle» deyilgan.",
      "2": "2 -> C: Oldingi gapda «Zwar hatte es bereits seit Jahrzehnten Bemühungen gegeben...» deyilgan; «Zwar ... Doch sie waren am Streit über die Abmessungen der Container und an streikenden Hafenarbeitern gescheitert» grammatik va mantiqiy bog'lanadi.",
      "3": "3 -> A: «An Bord waren 56 Container.» -> «Die Größe, die er für seine Transportbehälter gewählt hatte, wurde zum Standard.» -> «Diese 40-Fuß-Container sind noch heute täglich in Gebrauch.»",
      "4": "4 -> D (yoki B): PDF kalitida D ko'rsatilgan («Es sollte genau dieser Umstand sein, dem sie in der Folge ihre Beschäftigung verdanken würden» -> Nyu-York porti operatorlari).",
      "5": "5 -> F: «Heute reisen rund 90 Prozent der Güter... in Containern.» -> «Gesteuert und auf ihrer Reise verfolgt werden diese dabei von Computern und globalen Logistiksystemen.»",
      "6": "6 -> H: «In den 1960er Jahren betrug der Warenhandel weniger als 20 Prozent der globalen Wirtschaftsleistung.» -> «Heute macht er ungefähr die Hälfte aus.» (1960-yillarda 20% dan kam edi, bugun esa yarmini tashkil qiladi)."
    }
  },
  lv2: {
    title: "Einsam und doch virtuell verbunden (Fernstudenten)",
    titleUz: "Yolg'iz, ammo virtual bog'langan (Masofaviy ta'lim talabalari)",
    uzbekVocab: [
      { de: "das Fernstudium / die Fernhochschule", uz: "masofaviy ta'lim / sirtqi oliygoh" },
      { de: "gesellige Angelegenheit", uz: "ko'pchilik bilan muloqotda o'tadigan / kirishimli ish" },
      { de: "pauken, bis der Kopf rauchte", uz: "boshi qizib (tutab) ketguncha yodlamoq / o'qimoq" },
      { de: "die Einsendearbeiten", uz: "pochta orqali jo'natiladigan yozma vazifalar" },
      { de: "die Abbruchquote", uz: "o'qishni tashlab ketish ko'rsatkichi (30–70%)" },
      { de: "die Vereinzelung / soziale Isolation", uz: "yolg'izlanib qolish / ijtimoiy yakkalik" },
      { de: "technisch-unterkühlte Form", uz: "texnik jihatdan sovuq va qisqartirilgan shakl" },
      { de: "die Köpfe zusammenstecken", uz: "boshni biriktirib birgalikda bosh qotirmoq" },
      { de: "ins Leere laufen", uz: "o'z kuchini / ahamiyatini yo'qotmoq, bekor bo'lmoq" },
      { de: "die Doppelbelastung", uz: "ikki karra yuklama (ham ish, ham o'qish)" }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: "Abschnitt A (Savol 9: Muallif o'quvchini qiziqarli/hajviy hikoya bilan zavqlantiradi)",
        uz: "[A bo'lim]: Masofaviy ta'lim (Fernstudium) hech qachon juda kirishimli mashg'ulot bo'lmagan: 1970-yillarda ilk masofaviy oliygohlar ochilgan paytlarda talaba xuddi yolg'iz olimdek kechqurunlari qog'oz uyumlari ortida o'tirib, boshi tutab ketguncha huquqiy yoki tibbiy atamalarni yodlar edi. Har bir necha haftada pochtachi katta, og'ir va sirli jo'natma olib kelganda, qo'shnilar bu odam qanday g'alati xobbi bilan shug'ullanarkin deb hayron bo'lishardi. U qutida esa yana yuzlab sahifalik o'quv materiallari bo'lardi. Talabalar professorlarini odatda umuman yuzma-yuz ko'rishmasdi [9-savol: möchte der Autor die Leser unterhalten]."
      },
      {
        label: "Abschnitt B (Savol 11: Muallif boshqa mutaxassis / avtoritet fikriga tayanadi)",
        uz: "[B bo'lim]: Xayriyatki, u davrlar o'tib ketdi, ammo bugun ham masofaviy ta'limning eng katta ustunligi — makon va vaqt erkinligi — ayni paytda uning eng katta kamchiligidir: yolg'iz o'qish ko'plab talabalarni toliqtirib qo'yadi. Mediadidaktika professori Martin Kern ta'lim muvaffaqiyati uchun o'qituvchilar va kursdoshlar bilan ijtimoiy muloqot qanchalik muhimligini ta'kidlaydi [11-savol: stützt sich der Autor auf eine fremde Autorität]. O'qishni tashlab ketish ko'rsatkichi 30 dan 70 foizgacha ekanligini ham u ijtimoiy yakkalik bilan bog'laydi. Bugun deyarli har bir oliygoh virtual kampus, onlayn guruhlar va forumlarni taklif etadi. Ammo raqamli kampusda yaltiragan hamma narsa ham oltinmi?"
      },
      {
        label: "Abschnitt C (Savol 12: Muallif talabalik xotiralarini eslab hissiyotga / nostalgiyaga beriladi)",
        uz: "[C bo'lim]: Bir tomondan sharoitlar bugun ancha yaxshi, ammo ikkinchi tomondan raqamli dunyoda yaqinlik va hamjihatlik faqat texnik-sovuq shaklda uchraydi. Shaxsan men uchun talabalik hayotining jozibasini tashkil etgan ko'p narsa yetishmaydi: kafeteriyadagi chuqur suhbatlarni va bugungi kungacha ko'plab xotiralarga mavzu bo'ladigan afsonaviy talabalar kechalarini mamnuniyat bilan eslayman [12-savol: wird der Autor sentimental / sensibel]. Kursdoshlar bilan yotoqxonada kechki ovqat ustida soatlab bahslashish hayotimda o'chmas iz qoldirgan va umrlik do'stlar orttirganman. Onlayn aloqalar bularning o'rnini hech qachon bosa olmaydi."
      },
      {
        label: "Abschnitt D (Savol 10: Muallif avval aytgan tanqidiy fikrlarini ishlaydiganlar uchun yumshatadi / nisbiylashtiradi)",
        uz: "[D bo'lim]: Albatta, masofaviy ta'limning klassik mijozlari bo'lgan ishlaydigan insonlar (Berufstätige) holatida vaziyat butunlay boshqacha. Yuqorida aytilgan e'tirozlar bu yerda o'z kuchini yo'qotadi («Die oben geäußerten Vorbehalte laufen hier natürlich ins Leere») [10-savol: relativiert der Autor zuvor getroffene Aussagen], chunki ishlaydiganlarda kunduzgi va sirtqi ta'lim o'rtasida tanlov yo'q. Buning ustiga, ish bilan birga masofaviy o'qiyotgan inson mehnat bozorida katta ustunlikka ega: bu ikki karra yuklama uning matonati, vaqtni boshqarish qobiliyati va kuchli motivatsiyasini ko'rsatadi."
      },
      {
        label: "Abschnitt E (Savollar 7 va 8: Muallif qat'iy pozitsiya egallaydi va oilaviy xavfdan ogohlantiradi)",
        uz: "[E bo'lim]: Ishlaydiganlar ham masofaviy ta'lim va muvaffaqiyat badalini yolg'izlik bilan to'laydilar: chunki tinchlik va yolg'izlikka chekinmasdan turib bunday o'quv yuklamasini uddalab bo'lmaydi. Ish va o'qishning ikki karra yuklamasi tufayli hatto munosabatlar yoki oilaviy hayot zarar ko'rishi va barbod bo'lishi xavfi bor («besteht sogar die Gefahr, dass eine Beziehung oder das Familienleben Schaden nehmen oder gar daran zerbrechen könnte») [8-savol: formuliert der Autor eine Warnung]. Xulosa qilib aytganda, uyda divanda o'tirib magistr bo'lishni istagan har bir kishi bugun ham yolg'iz olim turmush tarziga ko'nikishga tayyor bo'lishi shart [7-savol: bezieht der Autor entschieden Position]."
      }
    ] as UzbekParagraphTranslation[],
    text: `<div class="text-paragraph"><span class="para-tag">[Abschnitt A]</span> Ein Fernstudium war noch nie eine besonders gesellige Angelegenheit: Schon in der Anfangszeit, kurz nach der Gründung der ersten Fernhochschulen in den siebziger Jahren, hockte man wie der typische einsame Gelehrte abends im Studierstübchen, hinter Papierstapeln, die nicht kleiner werden wollten, juristisches oder medizinisches Fachvokabular, Geschichtsdaten oder Formeln paukend, bis der Kopf rauchte. Und wenn alle paar Wochen der Briefträger mit einem großen, schweren, geheimnisvoll wirkenden Paket kam, fragten sich die Nachbarn vielleicht, welchem seltsamen Hobby man wohl nachgehe. Nun, das Paket enthielt weitere Papierberge, „Studienbriefe“ mit mehreren hundert Seiten Lernmaterialien, die die Fernhochschule verschickte. Fernstudium bedeutete damals vor allem: Warten auf den Briefträger. Statt gemeinsam mit Kommilitonen in mündlichen Prüfungen oder Klausuren ihr Wissen unter Beweis zu stellen, arbeiteten die Studenten zu Hause „Einsendearbeiten“ durch: Blätter mit Aufgaben, die sie mit der Post an ihren Professor schickten. Persönlich bekamen sie ihn in der Regel nicht zu Gesicht.</div><div class="text-paragraph"><span class="para-tag">[Abschnitt B]</span> Diese Zeiten sind zum Glück schon lange vorbei, doch damals wie heute ist der Vorteil des Fernstudiums, nämlich die räumliche und zeitliche Flexibilität, gleichzeitig sein größter Nachteil: Das einsame Lernen überfordert viele Fernstudenten. Martin Kern, Professor für Mediendidaktik, betont, wie wichtig die soziale Interaktion mit Lehrpersonal und Mitstudierenden für den Lernerfolg sei. Dass die Abbruchquoten je nach Fernstudienanbieter bei 30 bis 70 Prozent liegen, führt er auch auf die soziale Isolation vieler Lernenden zurück. Zum Glück kann der Vereinzelung heute dank des technischen Fortschritts etwas entgegengewirkt werden. Kaum ein Fernstudienanbieter mehr, der keinen virtuellen Campus im Internet anbietet, Online-Lerngruppen, Web-Tutorien oder Internetforen, in denen es sich gemeinsam lernen lässt. Und kaum ein Anbieter, der sich nicht damit schmückt und in teuren Hochglanzbroschüren mit seinen innovativen Lernmedien wirbt. Doch ist auf dem digitalen Campus wirklich alles Gold, was glänzt?</div><div class="text-paragraph"><span class="para-tag">[Abschnitt C]</span> Einerseits sind die Bedingungen für ein Fernstudium heute natürlich weitaus besser als in den Anfangszeiten. Andererseits aber findet man, wie überall in der digitalen Welt, Zusammenhalt und Nähe nur in einer reduzierten, technisch-unterkühlten Form. Vieles fehlt, was zumindest für mich immer den Reiz des Studentenlebens ausgemacht hat: Gern denke ich zurück an tiefgründige Gespräche in der Cafeteria und legendäre Studentenpartys, die heute noch Stoff für zahlreiche Erinnerungen bieten. Es war eine Bereicherung, mit Kommilitoninnen und Kommilitonen die Köpfe über schwierigen Aufgaben zusammenzustecken oder stundenlang zu diskutieren – in persona freilich, am besten bei einem Abendessen im Studentenwohnheim. Diese Zeit hat mich geprägt, in dieser Zeit habe ich Freunde fürs Leben gewonnen. Online-Kontakte können all dies niemals ersetzen, davon bin ich fest überzeugt.</div><div class="text-paragraph"><span class="para-tag">[Abschnitt D]</span> Anders sieht es freilich bei Berufstätigen aus, die schon immer den klassischen Kundenkreis der Fernstudienanbieter bildeten. Die oben geäußerten Vorbehalte laufen hier natürlich ins Leere, da Berufstätige keine andere Möglichkeit zu studieren hätten. Sie haben eben nicht die Wahl zwischen Fern- und Präsenzstudium. Und eines muss man zugeben: Wer neben dem Fernstudium berufstätig ist oder anderen Verpflichtungen nachgeht, besitzt einen entscheidenden Wettbewerbsvorteil. Zeigt sie oder er durch diese Doppelbelastung schließlich wichtige Soft Skills wie Durchhaltevermögen, gutes Zeitmanagement und Eigenmotivation, die von Personalentscheidern positiv bewertet werden.</div><div class="text-paragraph"><span class="para-tag">[Abschnitt E]</span> Auch die Berufstätigen bezahlen ihr Fernstudium und den Erfolg, den sie sich davon versprechen, mit Einsamkeit: Denn ohne den Rückzug in die Einsamkeit und Stille lässt sich ein solches Lernpensum nicht bewältigen, auch wenn man online mit vielen anderen verbunden sein kann. Soziale Kontakte und Freizeitaktivitäten stehen in dieser Zeit nicht an erster Stelle – darüber sollte man sich im Klaren sein. Durch die Doppelbelastung von Beruf und Studium besteht sogar die Gefahr, dass eine Beziehung oder das Familienleben Schaden nehmen oder gar daran zerbrechen könnte: Ein Fernstudium kann einsam machen. Doch egal, ob berufsbegleitendes oder hauptberufliches Fernstudium, am Ende bleibt festzuhalten: Wer auf der heimischen Couch den Master machen will, braucht auch heute noch die Bereitschaft, sich zumindest ein wenig mit der Lebensweise eines einsamen Gelehrten anzufreunden.</div>`,
    questions: [
      {
        id: 7,
        text: "In welchem Abschnitt bezieht der Autor entschieden Position?",
        uz: "Qaysi bo'limda muallif qat'iy pozitsiya egallaydi?",
        ans: "E",
        expl: "E bo'limida (PDF 15 kalitiga ko'ra E): Muallif onlayn aloqalar mavjud bo'lsa ham, masofaviy o'qish baribir yolg'izlikni talab qilishi haqidagi qat'iy pozitsiyasini yakuniy xulosa sifatida ta'kidlaydi."
      },
      {
        id: 8,
        text: "In welchem Abschnitt formuliert der Autor eine Warnung?",
        uz: "Qaysi bo'limda muallif ogohlantirishni ifodalaydi?",
        ans: "E",
        expl: "E bo'limida: «Durch die Doppelbelastung von Beruf und Studium besteht sogar die Gefahr, dass eine Beziehung oder das Familienleben Schaden nehmen oder gar daran zerbrechen könnte»."
      },
      {
        id: 9,
        text: "In welchem Abschnitt möchte der Autor die Leser unterhalten?",
        uz: "Qaysi bo'limda muallif o'quvchilarni zavqlantirishni (qiziqarli hikoya qilishni) xohlaydi?",
        ans: "A",
        expl: "A bo'limida 1970-yillardagi masofaviy talabaning boshi tutab ketguncha dars qilishi va qo'shnilarning pochtachi olib kelgan sirli og'ir qutilarga hayron qolishi hajviy-hikoyaviy tarzda tasvirlangan."
      },
      {
        id: 10,
        text: "In welchem Abschnitt relativiert der Autor zuvor getroffene Aussagen?",
        uz: "Qaysi bo'limda muallif avval aytilgan fikrlarni yumshatadi (nisbiylashtiradi)?",
        ans: "D",
        expl: "D bo'limida: «Anders sieht es freilich bei Berufstätigen aus... Die oben geäußerten Vorbehalte laufen hier natürlich ins Leere» (Yuqorida bildirilgan e'tirozlar ishlaydiganlar holatida o'z ahamiyatini yo'qotadi)."
      },
      {
        id: 11,
        text: "In welchem Abschnitt stützt sich der Autor auf eine fremde Autorität?",
        uz: "Qaysi bo'limda muallif boshqa bir mutaxassis (avtoritet) fikriga tayanadi?",
        ans: "B",
        expl: "B bo'limida mediadidaktika professori Martin Kern fikriga tayaniladi: «Martin Kern, Professor für Mediendidaktik, betont, wie wichtig die soziale Interaktion... sei.»"
      },
      {
        id: 12,
        text: "In welchem Abschnitt wird der Autor sentimental (bzw. sensibel)?",
        uz: "Qaysi bo'limda muallif hissiyotga / nostalgiyaga beriladi?",
        ans: "C",
        expl: "C bo'limida muallif o'z talabalik yillarini, kafeteriyadagi suhbatlar va talabalar yotoqxonasidagi kechalarni sog'inch bilan eslaydi («Gern denke ich zurück an tiefgründige Gespräche...»)."
      }
    ]
  },
  lv3: {
    title: "Drei Männer und das weiße Gold (Johann Friedrich Böttger)",
    titleUz: "Uch erkak va «oq oltin» (Yoxann Fridrix Byottger va Yevropa chinnisining kashf etilishi)",
    uzbekVocab: [
      { de: "vortäuschen (täuschte ... vor)", uz: "o'zini ... qilayotgandek ko'rsatmoq, aldamoq" },
      { de: "der Stein der Weisen", uz: "faylasuflar toshi (oltin yasash siri)" },
      { de: "einen ausschweifenden Lebensstil genießen", uz: "serhasham / dabdabali hayot tarzidan bahramand bo'lmoq" },
      { de: "das Statussymbol bei Adeligen", uz: "zodagonlar orasida mavqe (obro') ramzi" },
      { de: "sein Reich sanieren", uz: "o'z saltanatini moliyaviy sog'lomlashtirmoq / qutqarmoq" },
      { de: "im Alleingang", uz: "yolg'iz o'zi, hech kimning yordamisiz" },
      { de: "das Geheimnis lüften", uz: "sirni ochmoq / fosh etmoq" },
      { de: "der Geheimnisträger", uz: "maxfiy sirni biluvchi shaxs" },
      { de: "die Fingerfertigkeit", uz: "qo'l chaqqonligi / epchillik" },
      { de: "das Monopol brechen", uz: "monopoliyani (yakka hukmronlikni) sindirmoq" },
      { de: "die Porzellanmanufaktur", uz: "chinni ishlab chiqarish korxonasi (manufakturasi)" }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: "1-xatboshi (Savollar 13–15: Byottgerning oltin namoyishi va tutqunlikdagi hayoti)",
        uz: "1701-yilda dorixona shogirdi va alkimyogar Yoxann Fridrix Byottger omma oldidagi namoyishda ikki kumush tangani go'yoki oltinga aylantirib ko'rsatdi — katta ehtimol bilan u o'sha kuni shunchaki epchil qo'l chaqqonligini (fokus) namoyish etgan edi [13-savol: R]. Laboratoriyada qamoqda saqlanar ekan, u umidsizlik bilan «faylasuflar toshi» — oltin olish sirini topishga urindi (biroq u qamoqda aynan oltin tadqiqotiga majburlangani to'g'ridan-to'g'ri aytilmagani uchun PDF kalitida X berilgan) [14-savol: X]. Shu bilan birga, barcha uning yashash sharoitini imkon qadar yoqimli qilishga harakat qildi: Byottger hukmdor hisobidan shahzodalardek qasr yaqinidagi «Oltin uy» (Goldenes Haus) da dabdabali hayot kechirdi [15-savol: R]."
      },
      {
        label: "2-xatboshi (Savollar 16–18: Osiyo chinnisi va Kuchli Avgustning orzusi)",
        uz: "O'sha davrda Osiyo (Xitoy) chinnisi («oq oltin») Yevropa zodagonlari orasida obro' va mavqe ramzi sifatida juda qadrlanar, o'zini hurmat qilgan har bir saroy o'z chinni kolleksiyasiga ega bo'lishni xohlardi [16-savol: R]. Keyingi yillarda Yevropada ishlab chiqarilgan mahalliy chinni buyumlar sifati hatto Xitoy chinnisi sifatidan ham o'zib ketdi [17-savol: F — Yevropa chinnisi Osiyo sifatiga yetmadi degan gap xato]. Saksoniya hukmdori Kuchli Avgust (August der Starke) o'zining o'ta dabdabali hayoti va Saksoniyani buyuk davlatga aylantirish haqidagi muvaffaqiyatsiz orzusi tufayli davlat xazinasini xonavayron qilgan edi; Osiyo monopoliyasini sindirib, chinni ishlab chiqarish orqali u o'z saltanatini moliyaviy tiklashga umid qildi [18-savol: R]."
      },
      {
        label: "3-xatboshi (Savollar 19–21: Mayssenga ko'chirish va Tschirnhaus bilan hamkorlik)",
        uz: "Bir necha bor qochishga urinishlardan so'ng hamda mamlakatdagi xorijiy qo'shinlardan himoya qilish maqsadida Byottger 1703-yilda Mayssendagi Albrextsburg qal'asiga ko'chirildi (uning Pragada ushlangani haqida matnda hech narsa yo'q) [19-savol: X]. U yerda u olim va tabiatshunos Erenfrid Valter fon Chirnxaus (Tschirnhaus) bilan birgalikda chinni tayyorlash ustida ishladi — agar oltin yasay olmasa, hech bo'lmaganda shu sohada muvaffaqiyatga erishishi kerak edi [20-savol: F — Byottger sirni yolg'iz o'zi «im Alleingang» ochdi degan gap xato, chunki u Tschirnhaus bilan ishlagan]. Ba'zi vaqtlarda tadqiqotlar alohida-alohida laboratoriyalarda olib borildi va bir vaqtning o'zida uchinchi joyda pishirish pechlari sinovdan o'tkazildi [21-savol: R]."
      },
      {
        label: "4-xatboshi (Savollar 22–24: Saksoniyaga bog'langanlik va zaharlanish oqibati)",
        uz: "Chinni ishlab chiqarish sirini himoya qilish maqsadida Byottger sir saqlovchi shaxs sifatida umrining oxirigacha Saksoniyani tark etmaslik sharti bilan shu yerda qoldi [22-savol: R]. Kimyoviy moddalar bilan o'tkazgan tajribalari uning sog'lig'ini butunlayemirib tashlagan edi: u 1719-yil 13-martda laboratoriyadagi ish jarayonida olgan zaharlanish oqibatida vafot etdi [23-savol: R]. Matnga eng mos sarlavha: «Drei Männer und das weiße Gold» (Kuchli Avgust, Tschirnhaus va Böttger hamda «oq oltin» — chinni) [24-savol: B]."
      }
    ] as UzbekParagraphTranslation[],
    text: `<p>Als der Apothekerlehrling und Alchemist Johann Friedrich Böttger im Jahr 1701 in einer öffentlichen Vorführung scheinbar zwei Silbermünzen in pures Gold verwandelte, verbreitete sich sein Ruf wie ein Lauffeuer. Heute lässt sich freilich annehmen, dass Böttger an jenem Tag wohl lediglich großes Geschick und Fingerfertigkeit gezeigt und das Publikum getäuscht hatte. Als er später in einem streng bewachten Laboratorium in Dresden gefangen gehalten wurde, versuchte er verzweifelt, vielleicht doch noch den legendären Stein der Weisen – das Geheimnis der Goldherstellung – zu finden. Dabei versuchte man allerdings, Böttgers Aufenthalt so angenehm wie möglich zu gestalten: Auf Kosten des Herrschers residierte er zeitweise wie ein Fürst im sogenannten „Goldenen Haus“ nahe dem Residenzschloss an der Stadtbefestigung.</p><p>Zu jener Zeit war asiatisches Porzellan an den europäischen Fürstenhöfen als glanzvolles Statussymbol überaus begehrt, und jedes Adelshaus, das etwas auf sich hielt, benötigte dringend eine eigene kostbare Porzellansammlung. Die Aussicht, das asiatische Monopol zu brechen und ein europäisches Monopol zu errichten, weckte wiederum die Begehrlichkeit von Kurfürst August dem Starken. Durch seinen ausschweifenden Lebensstil und den gescheiterten Traum von Sachsen als europäischer Großmacht hatte er den Staat finanziell ruiniert und hoffte nun darauf, sein Reich durch die Herstellung des „weißen Goldes“ sanieren zu können.</p><p>Nach einigen Fluchtversuchen sowie zu seinem Schutz vor feindlichen ausländischen Truppen im Lande wurde Böttger schließlich auf die Albrechtsburg nach Meißen gebracht. Dort arbeitete er gemeinsam mit dem angesehenen Naturforscher Ehrenfried Walther von Tschirnhaus intensiv an der Porzellanherstellung: Wenn er schon kein Gold erschaffen konnte, so sollte er zumindest auf diesem Gebiet Erfolg vorweisen. Zeitweise wurden die Forschungen in getrennten Laboren durchgeführt, während gleichzeitig an einem dritten Standort Experimente mit neuartigen Brennöfen stattfanden. Als sich nach ersten Erfolgen abzeichnete, dass die Entschlüsselung des Rätsels zum Greifen nah war, gelang schließlich die Herstellung des ersten europäischen Hartporzellans, dessen einheimische Erzeugnisse in den späteren Jahren sogar die chinesische Qualität übertrafen.</p><p>Um das streng gehütete Geheimnis der Porzellanherstellung zu schützen, blieb Böttger bis an sein Lebensende an Sachsen gebunden: Zwar erhielt er später mehr Freiheiten, jedoch unter der strikten Bedingung, dass es ihm als Geheimnisträger niemals erlaubt war, Sachsen zu verlassen. Durch seine jahrelangen Experimente mit hochgiftigen chemischen Substanzen hatte Böttger seine Gesundheit allerdings völlig ruiniert: Er starb am 13. März 1719 an den Folgen der schweren Vergiftungen, die er sich während der Arbeit in seinem Labor zugezogen hatte.</p>`,
    questions: [
      {
        id: 13,
        text: "Johann Friedrich Böttger täuschte bei einem Auftritt vor, aus Silber Gold erzeugen zu können.",
        uz: "Yoxann Fridrix Byottger bir namoyishda kumushdan oltin yasay olishini ko'rsatib odamlarni aldagan.",
        ans: "R",
        expl: "Richtig (R): 1701-yilgi ommaviy namoyishda u ikki kumush tangani oltinga aylantirgandek ko'rsatib, aslida qo'l chaqqonligini (fokus) ishlatgan."
      },
      {
        id: 14,
        text: "Unter Arrest wurde Böttger zur Erforschung der Goldherstellung gezwungen.",
        uz: "Hibsda Byottger oltin ishlab chiqarishni tadqiq qilishga majburlangan.",
        ans: "X",
        expl: "Nicht im Text (X) [PDF 15 kalitiga ko'ra X]: Matnda u laboratoriyada qamoqda bo'lganida o'zi umidsizlik bilan faylasuflar toshini topishga uringani aytiladi."
      },
      {
        id: 15,
        text: "Böttger genoss einen ausschweifenden Lebensstil auf Kosten des Herrschers.",
        uz: "Byottger hukmdor hisobidan serhasham hayot tarzidan bahramand bo'lgan.",
        ans: "R",
        expl: "Richtig (R): Uning yashashini imkon qadar yoqimli qilishgan va u «Oltin uy» (Goldenes Haus) da shahzodalardek yashagan."
      },
      {
        id: 16,
        text: "Asiatisches Porzellan war als Statussymbol bei europäischen Adeligen sehr begehrt.",
        uz: "Osiyo chinnisi Yevropa zodagonlari orasida mavqe ramzi sifatida juda xaridorgir edi.",
        ans: "R",
        expl: "Richtig (R): O'zini hurmat qilgan har bir zodagon saroyi o'z chinni kolleksiyasiga ega bo'lishi kerak edi."
      },
      {
        id: 17,
        text: "Die Qualität des europäischen Porzellans reichte nicht an die des asiatischen Porzellans heran.",
        uz: "Yevropa chinnisining sifati Osiyo chinnisi sifatiga yetib bora olmadi.",
        ans: "F",
        expl: "Falsch (F): Keyingi yillarda mahalliy Yevropa chinnisi sifati hatto Xitoy chinnisi sifatidan ham o'zib ketdi («übertrafen in den späteren Jahren sogar die chinesische Qualität»)."
      },
      {
        id: 18,
        text: "August der Starke hoffte darauf, sein Reich durch die Herstellung von Porzellan sanieren zu können.",
        uz: "Kuchli Avgust chinni ishlab chiqarish orqali o'z davlatini moliyaviy tiklashga umid qilgan.",
        ans: "R",
        expl: "Richtig (R): Dabdabali hayoti tufayli davlatni xonavayron qilgan Kuchli Avgust Osiyo monopoliyasini sindirib, chinni orqali xazinani boyitishni ko'zlagan."
      },
      {
        id: 19,
        text: "1703 wurde Böttger auf der Flucht in Prag aufgegriffen und zurück in den Kerker gebracht.",
        uz: "1703-yilda Byottger qochib ketayotganida Pragada qo'lga olinib, zindonga qaytarilgan.",
        ans: "X",
        expl: "Nicht im Text (X): Qochishga urinishlardan so'ng u Mayssendagi Albrextsburgga olib borilgan, ammo Pragada ushlangani haqida matnda ma'lumot yo'q."
      },
      {
        id: 20,
        text: "Schließlich lüftete Böttger im Alleingang das Geheimnis der Porzellanherstellung.",
        uz: "Nihoyat Byottger yolg'iz o'zi chinni ishlab chiqarish sirini ochdi.",
        ans: "F",
        expl: "Falsch (F): U yolg'iz o'zi emas, balki olim Tschirnhaus bilan birgalikda («gemeinsam mit Tschirnhaus») chinni ustida ishlagan."
      },
      {
        id: 21,
        text: "Zeitweise wurden die Forschungen in getrennten Laboren durchgeführt.",
        uz: "Ba'zi vaqtlarda tadqiqotlar alohida laboratoriyalarda olib borilgan.",
        ans: "R",
        expl: "Richtig (R): Tadqiqotlar alohida laboratoriyalarda va uchinchi joyda pishirish pechlarida olib borilgan."
      },
      {
        id: 22,
        text: "Um das Geheimnis der Porzellanherstellung zu schützen, blieb Böttger bis an sein Lebensende an Sachsen gebunden.",
        uz: "Chinni ishlab chiqarish sirini himoya qilish uchun Byottger umrining oxirigacha Saksoniyaga bog'langan holda qoldi.",
        ans: "R",
        expl: "Richtig (R): Sir saqlovchi (Geheimnisträger) sifatida unga Saksoniyani tark etishga ruxsat berilmagan."
      },
      {
        id: 23,
        text: "Böttger hatte seine Gesundheit durch seine Experimente mit chemischen Substanzen ruiniert.",
        uz: "Byottger kimyoviy moddalar bilan o'tkazgan tajribalari tufayli sog'lig'ini barbod qilgan edi.",
        ans: "R",
        expl: "Richtig (R): U 1719-yil 13-martda laboratoriyada ishlash davomida olgan zaharlanish (Vergiftungen) oqibatida vafot etdi."
      },
      {
        id: 24,
        text: "Welche der Überschriften a, b oder c passt am besten zum Text?",
        uz: "a, b yoki c sarlavhalaridan qaysi biri matnga eng mos keladi?",
        ans: "B",
        opts: [
          "A) Die berühmtesten Porzellanmanufakturen Europas",
          "B) Drei Männer und das weiße Gold",
          "C) Goldherstellung im 18. Jahrhundert"
        ],
        expl: "B javob to'g'ri: «Drei Männer und das weiße Gold» (Kuchli Avgust, Tschirnhaus va Böttger hamda «oq oltin» — chinni kashfiyoti)."
      }
    ]
  },
  sp: {
    title: "Sprache: Wenn Wörter verschwinden",
    titleUz: "Til: So'zlar g'oyib bo'lganda (Unutilgan so'zlar)",
    uzbekVocab: [
      { de: "den Kopf schütteln", uz: "bosh chayqamoq (norozilik / hayrat bilan)" },
      { de: "die Ausdrücke", uz: "iboralar, ifodalar" },
      { de: "der aktive Sprachgebrauch", uz: "faol til iste'moli / nutq amaliyoti" },
      { de: "simpel", uz: "oddiy, jo'n" },
      { de: "aus dem Englischen stammende", uz: "ingliz tilidan kelib chiqqan" },
      { de: "diskriminierend", uz: "kamsituvchi (diskriminatsiya qiluvchi)" },
      { de: "kaum noch", uz: "deyarli (endi) yo'q" },
      { de: "keineswegs", uz: "aslo, hech qanday holatda" },
      { de: "vom Fortschritt überholt werden", uz: "taraqqiyot tufayli eskirib / ortda qolmoq" },
      { de: "das Wegfallen", uz: "tushib qolish, yo'qolish" },
      { de: "zusammenstellen (zusammengestellt)", uz: "to'plamoq, jamlab tuzmoq" },
      { de: "beleuchten (beleuchtet)", uz: "yoritib bermoq, o'rganmoq" },
      { de: "die Nachahmung", uz: "taqlid (masalan, xo'roz qichqirig'iga taqlid)" },
      { de: "das Synonym", uz: "sinonim, ma'nodosh so'z" },
      { de: "implizieren", uz: "o'z ichiga olmoq, anglatmoq" },
      { de: "dem Wandel unterliegen (unterliegt)", uz: "o'zgarishga yuz tutmoq / bo'ysunmoq" }
    ] as VocabItem[],
    uzbekParagraphs: [
      {
        label: "1–2-xatboshilar (25–37-bo'shliqlar)",
        uz: "«Sapperlot! Bu qanday bema'ni safsata (Kokolores), biror shumtaka (Schlingel) sho'xlik (Schabernack) qilyaptimi?» — Bugungi kunda hech kim bunday gapirmaydi. Kimdir eski so'zlarga mensimasdan bosh chayqashi (25: schütteln) mumkin, boshqalarda ular nostalgiya uyg'otadi, yoshlar esa bu iboralarni (26: Ausdrücke) hech qachon eshitmagan. Yillar davomida so'zlar faol til iste'molidan (27: Sprachgebrauch) g'oyib bo'ladi. Bonn universiteti nemis tili tarixi professori Klaudiya Vix-Rayf: «Buning sababi juda oddiy (28: simpel): bizga bu so'zlar endi kerak emas», — deydi. Sabablar turlicha: ko'pincha tushunchalar zamonaviyroq — ingliz tilidan kelib chiqqan (29: stammende) atamalar bilan almashtiriladi (masalan, «Stöckelschuh» o'rniga «High Heels»). Ayrim (30: Bestimmte) so'zlar esa bugungi kunda kamsituvchi (31: diskriminierend) hisoblangani uchun almashtiriladi. Ba'zan so'zlar ular ifodalaydigan buyumning o'zi deyarli (32: kaum) qolmagani uchun yo'qoladi — masalan, «Walkman» yoki «Videorekorder». Bu ikki misol shuni ko'rsatadiki, aslo (33: keineswegs) faqat juda qadimgi so'zlar emas, balki taraqqiyot tufayli eskirib qolgan (34: überholt) nisbatan yangi so'zlar ham yo'qolish xavfi ostida. «Ammo so'zlarning tushib qolishi (35: Wegfallen) bilan til qashshoqlashib qolmaydi», — deb ta'kidlaydi (36: betont) tilshunos olima. Chunki tilimizga doimo yangi so'zlar, ayniqsa yoshlar tilidan (37: Jugendsprache) kirib kelmoqda."
      },
      {
        label: "3–5-xatboshilar (38–46-bo'shliqlar)",
        uz: "Katarina Marenxolts Duden nashriyotida chop etilgan kitobida 100 ta «unutilgan so'z»ni to'plagan (38: zusammengestellt) va ularning kelib chiqishini yoritib bergan (39: beleuchtet). Masalan, «Kokolores» so'zi XVI asrda xo'roz qichqirig'iga taqlid (40: Nachahmung) sifatida paydo bo'lgan va «Unsinn» (safsata) so'zining sinonimi (41: Synonym) hisoblanadi. «Menga bu so'zlar yoqadi. Ular ohangidanoq ma'lum bir quvnoqlikni o'z ichiga oladi (42: implizieren)», — deydi Marenxolts. Shuning uchun u bu so'zlarni shaxsiy xotiralar bilan (43: mit — verbinden mit) bog'laydigan boshqa insonlar kabi ba'zan ishlatib turadi. Bolalik xotiralari va nostalgiya ko'pincha sabab bo'ladi (44: seien — Konjunktiv I), deydi Vix-Rayf. Biroq so'zlar butunlay yo'qolib ketmaydi, balki eski matnlarda yashashda davom etadi (45: weiter — existieren weiter). «Til o'zgarishga bo'ysunadi (46: unterliegt — unterliegt dem Wandel) va doimo muayyan davrning ifodasidir»."
      }
    ] as UzbekParagraphTranslation[],
    text: `<p>„Sapperlot! Was ist das für ein hanebüchener Kokolores, treibt da ein Schlingel Schabernack?“ – Das versteht heute wohl niemand mehr. Manch einer <em>[0: mag]</em> über die alten Wörter abfällig den Kopf <strong>(25)</strong>, bei anderen wecken sie nostalgische Gefühle und jüngere Menschen haben diese <strong>(26)</strong> wohl noch nie gehört. Im Laufe der Jahre verschwinden immer wieder Wörter aus dem aktiven <strong>(27)</strong>. „Der Grund dafür ist eigentlich ganz <strong>(28)</strong>“, sagt Claudia Wich-Reif, Professorin für Geschichte der deutschen Sprache an der Uni Bonn: „Wir brauchen diese Wörter nicht mehr.“</p><p>Die Ursachen dafür sind vielfältig. Häufig werden Begriffe durch modernere – oft aus dem Englischen <strong>(29)</strong> – Bezeichnungen ersetzt, zum Beispiel „High Heels“ statt „Stöckelschuh“. <strong>(30)</strong> Wörter sind nicht mehr politisch korrekt und werden abgelöst, weil sie als <strong>(31)</strong> gelten. Manchmal verschwinden Wörter, weil es die Sache, die sie bezeichnen, <strong>(32)</strong> noch gibt – etwa „Schwindsucht“, aber auch „Walkman“ oder „Videorekorder“. Die letzten beiden Begriffe zeigen, dass <strong>(33)</strong> nur sehr alte Wörter vom Aussterben bedroht sind, sondern durchaus auch relativ junge Begriffe, die schlichtweg vom Fortschritt <strong>(34)</strong> werden. „Durch das <strong>(35)</strong> von Wörtern verarmt die Sprache aber nicht“, <strong>(36)</strong> die Sprachwissenschaftlerin. „Wir bekommen ja auch ständig neue Wörter dazu.“ Viele davon kommen aus der <strong>(37)</strong>.</p><p>Katharina Mahrenholtz hat 100 „vergessene Wörter“ in einem Buch <strong>(38)</strong> und ihre Herkunft <strong>(39)</strong>. Kaum jemand kennt zum Beispiel die ursprüngliche Bedeutung von „Kokolores“. Dieses Wort entstand wahrscheinlich im 16. Jahrhundert als <strong>(40)</strong> eines Hahnenschreis, so wie „Kikeriki“. „Kokolores“ ist als <strong>(41)</strong> für „Unsinn“ oder „Quatsch“ inzwischen eher ungebräuchlich, ähnlich wie „Mumpitz“ oder auch „Schabernack“.</p><p>„Ich mag diese Wörter. Sie <strong>(42)</strong> schon vom Klang her eine gewisse Lustigkeit“, meint Mahrenholtz. Deshalb verwende sie sie auch manchmal noch – genauso wie einige andere, die sie <strong>(43)</strong> persönlichen Erinnerungen verbinde: „Schlingel“ zum Beispiel habe ihre Oma immer gesagt.</p><p>Kindheitserinnerungen und Nostalgie <strong>(44)</strong> häufig Gründe, warum jemand ein inzwischen ungebräuchliches Wort weiterbenutze – oder weil er bedauere, dass es kaum noch zu hören sei, sagt auch Wich-Reif. Allerdings: „Die Wörter sind ja nicht wirklich weg, sondern existieren in alten Texten <strong>(45)</strong>“, betont Wich-Reif. „Sprache <strong>(46)</strong> dem Wandel und ist immer auch Ausdruck einer bestimmten Zeit.“</p>`,
    questions: [
      { id: 25, opts: ["nicken", "schütteln", "wackeln", "zucken"], ans: "schütteln", expl: "Turgun ibora: den Kopf schütteln (norozilik yoki hayrat bilan bosh chayqamoq)." },
      { id: 26, opts: ["Ausdrücke", "Ausführungen", "Ausgaben", "Aussprachen"], ans: "Ausdrücke", expl: "diese Ausdrücke (ushbu iboralar / so'zlar)." },
      { id: 27, opts: ["Sprachgebiet", "Sprachgebrauch", "Sprachgefühl", "Sprachgemisch"], ans: "Sprachgebrauch", expl: "aus dem aktiven Sprachgebrauch (faol til iste'molidan)." },
      { id: 28, opts: ["simbel", "simmpel", "simpel", "simple"], ans: "simpel", expl: "Nemischa to'g'ri imlo: ganz simpel (juda oddiy)." },
      { id: 29, opts: ["abstimmende", "stammelnde", "stammende", "stimmende"], ans: "stammende", expl: "aus dem Englischen stammende Bezeichnungen (ingliz tilidan kelib chiqqan atamalar)." },
      { id: 30, opts: ["Bestimmt", "Bestimmte", "Bestimmtem", "Bestimmten"], ans: "Bestimmte", expl: "Ko'plik Nominativ artiklsiz: Bestimmte Wörter (ayrim / muayyan so'zlar)." },
      { id: 31, opts: ["discriminierend", "diskriminierend", "diskriminirend", "diskrimminierend"], ans: "diskriminierend", expl: "To'g'ri imlo: diskriminierend (kamsituvchi)." },
      { id: 32, opts: ["fast", "gar", "kaum", "wenig"], ans: "kaum", expl: "kaum noch gibt (deyarli qolmagan)." },
      { id: 33, opts: ["keine", "keinerlei", "keinerseits", "keineswegs"], ans: "keineswegs", expl: "keineswegs nur sehr alte Wörter (aslo faqat juda eski so'zlar emas)." },
      { id: 34, opts: ["abgeholt", "geholt", "nachgeholt", "überholt"], ans: "überholt", expl: "vom Fortschritt überholt werden (taraqqiyot tufayli eskirib / ortda qolmoq)." },
      { id: 35, opts: ["Wegfallen", "Weggehen", "Weglaufen", "Wegziehen"], ans: "Wegfallen", expl: "Durch das Wegfallen von Wörtern (so'zlarning tushib qolishi / yo'qolishi tufayli)." },
      { id: 36, opts: ["bedauert", "benennt", "bestimmt", "betont"], ans: "betont", expl: "betont die Sprachwissenschaftlerin (tilshunos olima ta'kidlaydi)." },
      { id: 37, opts: ["Jugenderinnerung", "Jugendgruppe", "Jugendphase", "Jugendsprache"], ans: "Jugendsprache", expl: "aus der Jugendsprache (yoshlar tilidan)." },
      { id: 38, opts: ["aufgestellt", "erstellt", "hergestellt", "zusammengestellt"], ans: "zusammengestellt", expl: "in einem Buch zusammengestellt (kitobda jamlagan / to'plagan)." },
      { id: 39, opts: ["beleuchtet", "belichtet", "beschienen", "bestrahlt"], ans: "beleuchtet", expl: "ihre Herkunft beleuchtet (ularning kelib chiqishini yoritib bergan / tadqiq etgan)." },
      { id: 40, opts: ["Imitat", "Kopie", "Nachahmung", "Reproduktion"], ans: "Nachahmung", expl: "als Nachahmung eines Hahnenschreis (xo'roz qichqirig'iga taqlid sifatida)." },
      { id: 41, opts: ["Sünonüm", "Sünonym", "Synonüm", "Synonym"], ans: "Synonym", expl: "To'g'ri imlo: Synonym (ma'nodosh so'z)." },
      { id: 42, opts: ["imblitzieren", "imblizieren", "implitzieren", "implizieren"], ans: "implizieren", expl: "To'g'ri imlo: implizieren (o'z ichiga olmoq / anglatmoq)." },
      { id: 43, opts: ["an", "durch", "mit", "zu"], ans: "mit", expl: "etwas verbinden mit (+ Dat) (shaxsiy xotiralar bilan bog'lamoq)." },
      { id: 44, opts: ["seien", "sind", "wären", "würden"], ans: "seien", expl: "Konjunktiv I (ko'plik, o'zlashtirma gap): Kindheitserinnerungen und Nostalgie seien häufig Gründe." },
      { id: 45, opts: ["fern", "mehr", "nach", "weiter"], ans: "weiter", expl: "existieren in alten Texten weiter (eski matnlarda yashashda davom etadi)." },
      { id: 46, opts: ["unterläuft", "unterliegt", "untersteht", "unterstellt"], ans: "unterliegt", expl: "dem Wandel unterliegen -> Sprache unterliegt dem Wandel (til o'zgarishga bo'ysunadi)." }
    ]
  }
};

export const HV1_UMWELTSCHUTZ_FULL = {
  title: "Umweltschutz und Nachhaltigkeit im Alltag",
  titleUz: "Atrof-muhitni muhofaza qilish va kundalik hayotda barqarorlik",
  statements: [
    {
      k: "A",
      t: "Beim Konsum von Kleidung sollte man bewusst handeln.",
      uz: "Kiyim-kechak sotib olishda (iste'molida) ongli ravishda harakat qilish kerak."
    },
    {
      k: "B",
      t: "Der Umweltschutz trägt zur Entstehung neuer Arbeitsplätze bei.",
      uz: "Atrof-muhit muhofazasi yangi ish o'rinlari yaratilishiga hissa qo'shadi."
    },
    {
      k: "C",
      t: "Die Einstellung der Deutschen zum Umweltschutz hat sich positiv entwickelt.",
      uz: "Nemislarning atrof-muhitni asrashga bo'lgan munosabati ijobiy tomonga rivojlandi."
    },
    {
      k: "D",
      t: "Fleischverzicht hat keine positiven Effekte auf die Umwelt.",
      uz: "Go'shtdan voz kechish atrof-muhitga ijobiy ta'sir ko'rsatmaydi. (Ortiqcha)"
    },
    {
      k: "E",
      t: "Jeder muss individuell für sich entscheiden, welchen Beitrag zum Umweltschutz er leisten möchte.",
      uz: "Har kim atrof-muhit muhofazasiga qanday hissa qo'shishni o'zi yakka tartibda hal qilishi kerak."
    },
    {
      k: "F",
      t: "Man sollte das ökologische Bewusstsein seiner Mitmenschen schärfen.",
      uz: "Atrofdagi insonlarning ekologik ongini oshirish (uyg'otish) lozim."
    },
    {
      k: "G",
      t: "Umweltschutzmaßnahmen einzelner Akteure sind nicht sehr effektiv.",
      uz: "Ayrim ishtirokchilarning (yakka shaxslar yoki alohida davlatlarning) ekologik choralari unchalik samarali emas."
    },
    {
      k: "H",
      t: "Viele Unternehmen vermeiden nachhaltige Maßnahmen aus Kostengründen.",
      uz: "Ko'pgina kompaniyalar xarajat sababli ekologik barqaror choralardan qochadilar. (Ortiqcha)"
    },
    {
      k: "I",
      t: "Umweltbewusster Konsum mindert die Lebensfreude.",
      uz: "Ekologik cheklovli iste'mol hayot zavqini kamaytiradi."
    },
    {
      k: "J",
      t: "Umweltfreundliches Verhalten zahlt sich auch in ökonomischer Hinsicht aus.",
      uz: "Tabiatga ehtiyotkorona munosabat iqtisodiy (moliyaviy) jihatdan ham o'zini oqlaydi."
    }
  ],
  speakers: [
    {
      id: 47,
      sp: "Sprecher 1",
      tr: "Ich achte schon darauf, Ressourcen zu schonen. Ich habe zum Beispiel kein Auto. Das könnte ich mir als Student ohnehin nicht leisten. Da ich sehr zentral wohne, kann ich Einkäufe mit dem Fahrrad erledigen. Zur Uni gehe ich meistens zu Fuß. Viel Energie und Wasser verbrauche ich sowieso nicht. Die Heizung zum Beispiel läuft bei mir nur im tiefsten Winter und Stromfresser wie Fön, Gefrierschrank und Backofen brauche ich erst gar nicht. So schone ich meinen Geldbeutel und tue gleichzeitig etwas für die Umwelt. Und im letzten Jahr habe ich meinen Stromanbieter gewechselt. Ich beziehe jetzt Ökostrom, der sogar vergleichsweise günstig ist. Einen Wechsel des Stromanbieters kann ich daher nur empfehlen.",
      uz: "Men resurslarni tejashga e'tibor beraman. Masalan, mashinam yo'q — talaba sifatida bunga qurbi ham yetmasdi. Markazda yashaganim uchun xaridga velosipedda, universitetga piyoda boraman. Isitish tizimini faqat qahraton qishda yoqaman, fen, muzlatkich kabi ko'p tok yeydigan jihozlarni ishlatmayman. Shu tariqa ham hamyonimni (pulimni) tejayman, ham tabiatga foyda keltiraman. O'tgan yili arzonroq bo'lgan «yashil elektr» (Ökostrom) ga o'tdim.",
      ans: "J",
      expl: "47 -> J: «So schone ich meinen Geldbeutel und tue gleichzeitig etwas für die Umwelt... Ökostrom, der sogar vergleichsweise günstig ist» (Ham hamyonni tejaydi, ham tabiatni asraydi = iqtisodiy jihatdan foydali)."
    },
    {
      id: 48,
      sp: "Sprecher 2",
      tr: "Ja, da fragen Sie gerade die Richtige. Ich denke schon, dass ich sehr umweltbewusst lebe und ständig daran arbeite, meinen ökologischen Fußabdruck zu verkleinern. Aber als Einzelperson kann man nur wenig bewirken. Daher versuche ich auch, die Personen in meinem persönlichen Umfeld davon zu überzeugen, ihren Lebensstil zu ändern. Wenn ich zum Beispiel an meine Schwester denke, die mit ihrer dreiköpfigen Familie ein 200-Quadratmeter-Haus bewohnt und ihre kleine Tochter jeden Tag mit ihrem dicken Geländewagen in den nahegelegenen Kindergarten kutschiert. Ich habe schon so manchen Streit mit Verwandten und in meiner WG provoziert, weil ich mich in die Angelegenheiten anderer eingemischt habe. Aber ich finde, man muss den Leuten die Augen öffnen. Schließlich geht es um die Zukunft. Von uns allen.",
      uz: "Men juda ekologik ongli yashayman va ekologik izimni kamaytirishga harakat qilaman. Ammo yolg'iz inson ko'p narsani o'zgartira olmaydi. Shuning uchun atrofimdagi odamlarni ham o'z hayot tarzini o'zgartirishga ishontirishga harakat qilaman. Masalan, opam 3 kishilik oilasi bilan 200 kv.m uyda yashaydi va qizchasini har kuni ulkan yo'ltanlamas mashinada yaqin bog'chaga olib boradi. Qarindoshlarim va kvartiradoshlarim bilan ko'p tortishganman, lekin odamlarning ko'zini ochish kerak deb hisoblayman.",
      ans: "F",
      expl: "48 -> F: «Daher versuche ich auch, die Personen in meinem persönlichen Umfeld davon zu überzeugen... man muss den Leuten die Augen öffnen» (Atrofdagilarning ekologik ongini uyg'otish kerak)."
    },
    {
      id: 49,
      sp: "Sprecher 3",
      tr: "Beim Thema Umweltschutz ist meiner Meinung nach die Politik gefragt. Denn nur durch Gesetze können wir unsere Umweltprobleme flächendeckend und wirkungsvoll in den Griff bekommen. Einzelpersonen, ja selbst einzelne Staaten können da nur wenig bewirken. Wir brauchen globale Lösungen, um unsere globalen Probleme zu bewältigen. Denn Umweltbelastungen wie klimaverändernde Gase oder giftige Abfälle in den Meeren haben länderübergreifende Auswirkungen. Daher müssen an der Lösung dieser Probleme alle Staaten mitwirken, auch die Entwicklungsländer. Diese verfügen allerdings häufig nicht über die nötigen wirtschaftlichen Mittel und staatlichen Kapazitäten. Deshalb muss die internationale Umweltpolitik gewährleisten, dass die Industriestaaten ausreichende finanzielle, technische und administrative Unterstützung für bedürftige Länder zur Verfügung stellen.",
      uz: "Atrof-muhit masalasida siyosat harakat qilishi kerak. Faqat qonunlar orqali ekologik muammolarni samarali hal qila olamiz. Yakka shaxslar, hatto alohida davlatlar ham bu yerda juda kam narsaga erisha oladi. Bizga global yechimlar kerak, barcha davlatlar — rivojlanayotgan mamlakatlar ham — sanoatlashgan davlatlar ko'magida birgalikda harakat qilishi shart.",
      ans: "G",
      expl: "49 -> G: «Einzelpersonen, ja selbst einzelne Staaten können da nur wenig bewirken. Wir brauchen globale Lösungen» (Alohida ishtirokchilarning harakati kam samarali, global siyosat kerak)."
    },
    {
      id: 50,
      sp: "Sprecher 4",
      tr: "Die meisten Kunden scheinen nicht darüber nachzudenken, unter welchen Bedingungen wohl ein T-Shirt produziert worden sein mag, das beim Discounter für 3,99 € angeboten wird. Vor allem der günstige Preis zählt. Qualität und Nachhaltigkeit sind eher zweitrangig. Wir Deutschen betrachten Klamotten meist als Wegwerfware. Müssen wir denn immer den neuesten Trends hinterherrennen? Müssen denn alle Teile neu sein? Können wir nicht zum Beispiel auch in Second-Hand-Läden einkaufen? Und wenn sie nun doch neu sein müssen, dann genügen doch auch wenige Teile, die ressourcenschonend und unter fairen Arbeitsbedingungen hergestellt worden sind. Solche Kleidungsstücke sind zwar teurer, aber man kann sie guten Gewissens tragen.",
      uz: "Ko'pchilik xaridorlar arzon do'konda 3,99 yevroga sotilayotgan futbolka qanday sharoitda ishlab chiqarilgani haqida o'ylab ham ko'rmaydi. Biz nemislar kiyimlarga bir martalik tashlab yuboriladigan buyumdek qaraymiz. Second-Hand do'konlardan xarid qilish yoki resurslarni tejab, adolatli mehnat sharoitida tikilgan kamroq, ammo sifatli kiyim olish mumkin-ku!",
      ans: "A",
      expl: "50 -> A: Kiyim-kechak (Klamotten / Kleidungsstücke) xarid qilishda ongli va mas'uliyatli bo'lish kerak."
    },
    {
      id: 51,
      sp: "Sprecher 5",
      tr: "Umweltprobleme müssen, um gelöst werden zu können, zunächst einmal als solche von den Menschen wahrgenommen werden. Und in diesem Punkt sind wir meiner Meinung nach schon auf einem sehr guten Weg. In den letzten Jahrzehnten hat sich das allgemeine Bewusstsein in Deutschland doch stark gewandelt. Themen wie Mülltrennung, Naturschutz, Klimaschutz, fairer Handel, erneuerbare Energien und so weiter sind heutzutage in aller Munde. Und man könnte noch mehr aufzählen. Ich bin überzeugt davon, dass sich dieses Umweltbewusstsein auch langfristig auf das Verhalten der Menschen auswirken wird.",
      uz: "Ekologik muammolarni hal qilish uchun avvalo odamlar ularni anglashi kerak va bu borada biz juda yaxshi yo'ldamiz. So'nggi o'n yilliklarda Germaniyada umumiy ong kuchli o'zgardi: chiqindilarni saralash, iqlim muhofazasi, qayta tiklanuvchi energiya bugun hammaning tilida.",
      ans: "C",
      expl: "51 -> C: «In den letzten Jahrzehnten hat sich das allgemeine Bewusstsein in Deutschland doch stark gewandelt» (Nemislarning ekologiyaga munosabati ijobiy tomonga rivojlandi)."
    },
    {
      id: 52,
      sp: "Sprecher 6",
      tr: "Ich studiere Licht- und Wärme-Umwelttechnik und befasse mich täglich mit dem Thema Nachhaltigkeit. Nachhaltig leben oder nicht? Diese Frage stellt sich mir nicht mehr. Was mich mehr beschäftigt, ist die Tatsache, dass viele Menschen einen Gegensatz zwischen Umweltschutz und wirtschaftlicher Entwicklung sehen. Das ist nicht richtig, denn ich habe erst gestern einen Artikel gelesen, in dem es hieß, dass in den kommenden zehn Jahren bis zu einer Million grüne Jobs entstehen könnten. Der wachsenden Bedeutung von Nachhaltigkeit kann sich schließlich kein Wirtschaftszweig verschließen. Und schon jetzt haben Umweltberufe großen Zulauf.",
      uz: "Men ekologik texnika yo'nalishida o'qiyman. Ko'pchilik tabiatni asrash va iqtisodiy rivojlanishni bir-biriga zid deb biladi. Bu noto'g'ri: kecha o'qigan maqolamda aytilishicha, kelgusi 10 yilda milliontagacha «yashil ish o'rinlari» (grüne Jobs) paydo bo'lishi mumkin.",
      ans: "B",
      expl: "52 -> B: «dass in den kommenden zehn Jahren bis zu einer Million grüne Jobs entstehen könnten» (Atrof-muhit muhofazasi yangi ish o'rinlari yaratadi)."
    },
    {
      id: 53,
      sp: "Sprecher 7",
      tr: "Nachhaltig leben – das ist eigentlich eher ein Thema für meine Eltern. Die sind absolute Ökos und versuchen seit meiner Kindheit, mir alles zu verbieten, was Spaß macht. Von Spielsachen aus Plastik über trendige Kleidung bis hin zu Süßigkeiten. Alles wurde vor dem Kauf auf seine Umweltverträglichkeit überprüft, mit dem Ergebnis, dass es dann meistens eben nicht gekauft wurde. Das hat mich ziemlich genervt. Seit ich daheim ausgezogen bin, kann ich endlich so leben, wie ich es will. Jetzt achte ich nicht mehr auf Nachhaltigkeit. Sie sehen, die Erziehung hat bei mir genau das Gegenteil bewirkt. Ich gönne mir zum Beispiel weite Flugreisen, ein schnelles Auto und teure Designer-Anzüge. Ich möchte das Leben ein bisschen genießen.",
      uz: "Barqaror yashash — bu ko'proq ota-onamning mavzusi. Ular ashaddiy ekolog bo'lib, bolaligimdan menga zavq bag'ishlaydigan hamma narsani (plastik o'yinchoqlar, zamonaviy kiyim, shirinliklar) taqiqlashgan. Uydan chiqib ketganimdan beri endi ekologiyaga e'tibor bermayman: uzoq parvozlar, tez mashina va qimmat kostyumlar bilan hayotdan zavqlanmoqchiman.",
      ans: "I",
      expl: "53 -> I: Ota-onasining haddan ziyod ekologik cheklovlari hayot zavqini bo'g'gani uchun u endi «Ich möchte das Leben ein bisschen genießen» deydi."
    },
    {
      id: 54,
      sp: "Sprecher 8",
      tr: "Umweltbewusst leben – das ist ein komplexes und schwieriges Thema. Ich finde, klare Regeln für nachhaltigen Konsum gibt es nicht, weil jeder nachhaltig anders definiert. Was heißt nachhaltig? Jeder hat unterschiedliche Informationen und eine andere Meinung zu diesem Thema. Jeder setzt andere Prioritäten. Geht es um Wasserverbrauch und CO2-Emissionen, um das Tierwohl oder um Chemikalien in Lebensmitteln? Wenn Sie 100 Menschen befragen, wird jeder etwas anderes dazu sagen. Ich habe für mich persönlich einen Weg gefunden, mit dem Thema umzugehen. Ich esse zum Beispiel fast kein Fleisch und achte darauf, nur tierische Produkte aus artgerechter Tierhaltung zu konsumieren. Viele meiner Freunde dagegen essen täglich Fleisch, setzen aber dafür andere Schwerpunkte, indem sie zum Beispiel nur öffentliche Verkehrsmittel nutzen. Das ist für mich auch in Ordnung. Ich mische mich da nicht ein.",
      uz: "Ekologik ongli yashash murakkab mavzu. Aniq qoidalar yo'q, chunki har kim barqarorlikni turlicha tushunadi va o'z ustuvorliklarini belgilaydi. Men deyarli go'sht yemayman, do'stlarim esa har kuni go'sht yeyishadi, lekin faqat jamoat transportida yurishadi. Bu men uchun ma'qul, men boshqalarning tanloviga aralashmayman.",
      ans: "E",
      expl: "54 -> E: «Jeder setzt andere Prioritäten... Ich habe für mich persönlich einen Weg gefunden... Ich mische mich da nicht ein» (Har kim o'zi individual qaror qilishi kerak)."
    }
  ]
};

export const HV1_STUDIENWAHL_FULL = {
  title: "Studienwahl – Kriterien und persönliche Wege",
  titleUz: "O'qish yo'nalishini (mutaxassislikni) tanlash mezonlari",
  statements: [
    {
      k: "A",
      t: "Bei der Studienwahl können durchaus auch finanzielle Aspekte berücksichtigt werden.",
      uz: "O'qish yo'nalishini tanlashda moliyaviy jihatlar (kelajakdagi daromad) ham inobatga olinishi mumkin."
    },
    {
      k: "B",
      t: "Das Studienangebot im ländlichen Raum sollte erweitert werden.",
      uz: "Qishloq hududlarida ta'lim yo'nalishlari taklifi kengaytirilishi kerak. (Ortiqcha)"
    },
    {
      k: "C",
      t: "Das Studium sollte so gewählt werden, dass man eine Führungsposition erlangen kann.",
      uz: "O'qish yo'nalishini shunday tanlash kerakki, u orqali rahbarlik lavozimiga erishish mumkin bo'lsin."
    },
    {
      k: "D",
      t: "Das Studium von Massenfächern ist alles andere als erstrebenswert.",
      uz: "Hamma yopiriladigan ommaviy yo'nalishlarda (Massenfächer) o'qish aslo havas qilarli emas."
    },
    {
      k: "E",
      t: "Die Studienwahl wird wahrscheinlich auch von den Möglichkeiten in der Region bestimmt.",
      uz: "O'qish tanlovi ehtimol hududdagi (yaqin atrofdagi) imkoniyatlar bilan ham belgilanadi."
    },
    {
      k: "F",
      t: "Für die Zulassung zum Studium sollten nicht nur die Noten zählen.",
      uz: "O'qishga qabul qilishda faqat baholargina rol o'ynamasligi kerak. (Ortiqcha)"
    },
    {
      k: "G",
      t: "Jobaussichten sollten bei der Wahl des Studiums eine untergeordnete Rolle spielen.",
      uz: "Ish istiqbollari o'qishni tanlashda ikkinchi darajali rol o'ynashi kerak."
    },
    {
      k: "H",
      t: "Manchmal ist der berufliche Werdegang in der Familie vorgezeichnet.",
      uz: "Ba'zan kasbiy yo'l oilada oldindan belgilab qo'yilgan bo'ladi."
    },
    {
      k: "I",
      t: "Selbst bei einer festen Berufsvorstellung sollte man offen bleiben für Alternativen.",
      uz: "Hatto aniq kasb orzusi bo'lganda ham, muqobil variantlar uchun ochiq qolish kerak."
    },
    {
      k: "J",
      t: "Vor der Wahl eines Studiums muss man sich mit seinen persönlichen Fähigkeiten auseinandersetzen.",
      uz: "O'qishni tanlashdan oldin inson o'z shaxsiy qobiliyatlarini chuqur tahlil qilib ko'rishi lozim."
    }
  ],
  speakers: [
    {
      id: 47,
      sp: "Sprecher 1",
      tr: "Für die Wahl des Studiums spielen viele Faktoren eine Rolle, zum Beispiel Interessen, finanzielle Motive, familiäre Gründe und Lebensaussichten. Die Frage nach den besonderen Talenten ist naheliegend. Der Blick zurück auf die Schulzeit oder auf frühere Lebensabschnitte soll Ihnen helfen: Was waren die Lieblingsfächer? Wo lagen die Interessen? Was hat besonders viel Spaß gemacht? Und vor allem: Welche besonderen Fähigkeiten hatte man? In diesem Zusammenhang ist auch der Blick von außen wichtig. Worin sehen Freunde und Verwandte Stärken? Wo erkennen sie vielleicht gewisse Schwächen? Interesse allein reicht oft nicht aus, um den Erfolg im Studium und im Beruf zu sichern. Es gilt, die eigenen Begabungen zu berücksichtigen.",
      uz: "O'qish tanlashda ko'p omillar rol o'ynaydi. Eng avvalo maktab davriga nazar tashlab, o'z maxsus qobiliyatlaringiz va iste'dodlaringizni aniqlab olishingiz kerak: do'stlar va qarindoshlar sizning kuchli va zaif tomonlaringizni nimada ko'rishadi? Faqat qiziqishning o'zi yetarli emas, shaxsiy qobiliyatlarni inobatga olish shart.",
      ans: "J",
      expl: "47 -> J: «Welche besonderen Fähigkeiten hatte man? ... Es gilt, die eigenen Begabungen zu berücksichtigen» (Tanlovdan oldin shaxsiy qobiliyatlarni tahlil qilish lozim)."
    },
    {
      id: 48,
      sp: "Sprecher 2",
      tr: "An meiner Hochschule ist das Angebot an Studienfächern nicht so groß. Aber eine breite Auswahl habe ich auch nie gebraucht. Für mich stand bereits vor dem Abitur fest, dass ich Jura studieren würde. Meine Eltern haben eine gut gehende Anwaltskanzlei. Die Rechtswissenschaften wurden mir sozusagen in die Wiege gelegt. Meine Eltern hätten das nie von mir erwartet oder verlangt, aber für mich war seit langem klar, dass ich später einmal in die Kanzlei einsteigen würde. Ich bin wirklich sehr glücklich mit meiner Entscheidung und bin schon regelmäßig bei Gerichtsverhandlungen dabei.",
      uz: "Menga keng tanlov hech qachon kerak bo'lmagan. Maktabni bitirishimdan oldinoq huquqshunoslik (Jura) o'qishim aniq edi. Ota-onamning muvaffaqiyatli advokatlik firmasi bor. Huquqshunoslik menga go'yoki beshikdanoq singdirilgan. Kelajakda ota-onamning advokatlik idorasida ishlashim men uchun uzoq vaqtdan beri aniq edi.",
      ans: "H",
      expl: "48 -> H: «Meine Eltern haben eine gut gehende Anwaltskanzlei. Die Rechtswissenschaften wurden mir sozusagen in die Wiege gelegt» (Kasbiy yo'l oilada oldindan belgilangan)."
    },
    {
      id: 49,
      sp: "Sprecher 3",
      tr: "Es nützt wenig, wenn man ein Studium nur nach seinen eigenen Interessen und Fähigkeiten wählt und dann hinterher keine Karriere machen kann. Man muss einfach realistisch sein. Bestimmte Fächer machen vielleicht Freude, aber irgendwann will man ja auch beruflich weiterkommen. Daher sollte man auch die beruflichen Perspektiven in seine Überlegungen zur Studienwahl mit einbeziehen. Natürlich sollte niemand etwas studieren, bloß weil damit gute Aufstiegsmöglichkeiten verbunden sind. Doch wer sich nur auf die eigenen Vorlieben und Interessen konzentriert, kann sich damit den Chefsessel nicht automatisch sichern.",
      uz: "O'qishni faqat qiziqishga qarab tanlab, keyin karyera qila olmaslikdan foyda kam. Inson realistik bo'lishi va mansab pillapoyalaridan ko'tarilish istiqbollarini hisobga olishi kerak. Faqat sevimli mashg'ulotiga qarab o'qigan odam rahbarlik kursisini (Chefsessel) avtomatik egallay olmaydi.",
      ans: "C",
      expl: "49 -> C: «beruflichen Perspektiven... Aufstiegsmöglichkeiten... den Chefsessel sichern» (Rahbarlik lavozimiga erishish imkonini beradigan yo'nalish tanlash kerak)."
    },
    {
      id: 50,
      sp: "Sprecher 4",
      tr: "Geld sollte keine entscheidende Rolle bei der Wahl des Studienfachs spielen. Allerdings können die Verdienstmöglichkeiten helfen, wenn man sich zwischen mehreren Fächern entscheiden muss. Interessiert man sich zum Beispiel für Architektur, Bauwesen und Maschinenbau, ist es ganz nützlich, sich auch die wirtschaftliche Seite anzusehen. In der Regel verdienen Architekten nicht so viel Geld wie Bauingenieure. Glaubt man der Statistik, so werden Architekten auch häufiger arbeitslos als Ingenieure. Wirtschaftlich besser gestellt als diese beiden sind aber die Maschinenbauer. Wenn sich also jemand gleich stark für diese drei Studiengänge begeistern kann, dann kann die Aussicht auf gutes Einkommen den Ausschlag geben.",
      uz: "Pul hal qiluvchi rol o'ynamasligi kerak, ammo bir nechta yaqin soha (masalan, arxitektura, qurilish muhandisligi va mashinasozlik) o'rtasida ikkilanayotganda daromad imkoniyatlariga qarash foydali. Mashinasozlar qolgan ikkisiga qaraganda iqtisodiy yaxshiroq ta'minlangan, shuning uchun yaxshi daromad istiqboli hal qiluvchi bo'lishi mumkin.",
      ans: "A",
      expl: "50 -> A: «Allerdings können die Verdienstmöglichkeiten helfen... Aussicht auf gutes Einkommen den Ausschlag geben» (Moliyaviy jihatlar ham inobatga olinishi mumkin)."
    },
    {
      id: 51,
      sp: "Sprecher 5",
      tr: "Arbeitsmarktprognosen sind wichtige Aspekte bei der Studienwahl? Keine Frage. Doch sollten sie entscheidend sein? Dieser Auffassung bin ich nicht. Es sollte wirklich jedem überlassen bleiben, das Studium nach den eigenen Interessen und Talenten zu wählen. Natürlich muss man dann auch mit den möglichen Konsequenzen leben. Wenn es in dem gelernten Bereich nicht genügend Arbeitsplätze gibt, sollte man sich auf eine längere Arbeitssuche einstellen. Eventuell muss man auch bereit sein, auf einem ganz anderen Gebiet zu arbeiten. Diese Verantwortung trägt jeder für sich selbst. Für mich jedenfalls gibt es kein Argument dafür, den beruflichen Perspektiven Priorität bei der Studienwahl einzuräumen.",
      uz: "Mehnat bozori prognozlari hal qiluvchi bo'lishi kerakmi? Men bu fikrga qo'shilmayman. Har kim o'qishni o'z qiziqishi va iste'dodiga qarab tanlashi kerak. Ish topish qiyinroq bo'lsa, buning mas'uliyatini inson o'z zimmasiga oladi. Men uchun o'qish tanlashda ish istiqbollariga birinchi o'rinni berishga hech qanday asos yo'q.",
      ans: "G",
      expl: "51 -> G: «Für mich jedenfalls gibt es kein Argument dafür, den beruflichen Perspektiven Priorität bei der Studienwahl einzuräumen» (Ish istiqbollari ikkinchi darajali bo'lishi kerak)."
    },
    {
      id: 52,
      sp: "Sprecher 6",
      tr: "Schon als Kind war mein Traumberuf Ärztin. Meine Abiturnote war gut, doch nicht gut genug für einen direkten Zugang zum Medizinstudium. Die alternative Privatuniversität kam für mich leider nicht infrage. Ich hatte die Möglichkeit gehabt, über die Wartesemester einen Studienplatz zu bekommen, wollte aber nicht jahrelang warten. So habe ich mich ein bisschen halbherzig für Biowissenschaften entschieden. Jetzt denke ich, dass mir nichts Besseres hätte passieren können. Ich kann nur jedem raten, sich nicht zu sehr auf ein bestimmtes Studium zu fokussieren. Häufig gibt es eine passende zweite Wahl.",
      uz: "Bolaligimdan shifokor bo'lishni orzu qilganman, ammo attestat bahoyim tibbiyotga to'g'ridan-to'g'ri kirishga yetmadi. Yillab kutishni xohlamay, biologiya fanlari (Biowissenschaften) yo'nalishini tanladim. Hozir esa men uchun bundan yaxshiroq narsa bo'lishi mumkin emas edi deb o'ylayman. Hammaga bitta yo'nalishga yopishib olmaslikni maslahat beraman — ko'pincha juda mos ikkinchi tanlov bo'ladi.",
      ans: "I",
      expl: "52 -> I: «Ich kann nur jedem raten, sich nicht zu sehr auf ein bestimmtes Studium zu fokussieren. Häufig gibt es eine passende zweite Wahl» (Aniq kasb orzusi bo'lganda ham muqobil variantlarga ochiq bo'lish kerak)."
    },
    {
      id: 53,
      sp: "Sprecher 7",
      tr: "Möglicherweise lässt man sich bei der Entscheidung für ein Studienfach auch davon beeinflussen, was man in der Nähe des Heimatortes studieren kann. Diverse statistische Erhebungen haben nämlich ergeben, dass bestimmte Fächer eher gewählt werden, wenn sie an Hochschulen in der näheren Umgebung angeboten werden. Inwiefern diese Ergebnisse verallgemeinert werden können, ist zwar fraglich. Tatsache ist aber, dass es je nach Gegend bedeutende Unterschiede im Studium gibt. Die statistischen Auswertungen jedenfalls lassen darauf schließen, dass die Wahl des Studiums auch durch das lokale Hochschulangebot beeinflusst wird.",
      uz: "O'qish yo'nalishini tanlashda tug'ilgan shahar yaqinida nimani o'qish mumkinligi ham ta'sir ko'rsatadi. Statistik tadqiqotlar shuni ko'rsatadiki, o'qish tanlovi mahalliy oliygohlar taklifi bilan ham belgilanadi.",
      ans: "E",
      expl: "53 -> E: «dass die Wahl des Studiums auch durch das lokale Hochschulangebot beeinflusst wird» (O'qish tanlovi hududdagi imkoniyatlar bilan ham belgilanadi)."
    },
    {
      id: 54,
      sp: "Sprecher 8",
      tr: "Schon vor meinem Abi habe ich von Klagen über die Zustände an der Uni gehört. Vor allem in beliebten Fächern gibt es überfüllte Hörsäle, in denen manchmal kein Sitzplatz zu ergattern ist. Eine Warteschlange vor der Bibliothek, Personalmangel und schlechte Betreuung. Das möchte ich in meinem Studium auf gar keinen Fall. BWL oder Medizin? Nein danke. Ich suche ganz bewusst nach Fächern, bei denen der Andrang nicht so groß ist. Wahrscheinlich werde ich mich für den Studiengang Nachwachsende Rohstoffe entscheiden. Hauptsache, ich mache nicht das, was alle anderen auch studieren möchten.",
      uz: "Maktabni bitirishimdan oldinoq ommaviy yo'nalishlardagi (BWL yoki Tibbiyot) tiqilinch auditoriyalar, kutubxona navbatlari va yomon e'tibor haqida eshitganman. Men bunday bo'lishini aslo xohlamayman! Shuning uchun ongli ravishda talabalar oqimi kamroq yo'nalishni qidiryapman — asosiysi, hamma o'qimoqchi bo'lgan ommaviy sohani tanlamaslik.",
      ans: "D",
      expl: "54 -> D: «Vor allem in beliebten Fächern gibt es überfüllte Hörsäle... BWL oder Medizin? Nein danke» (Ommaviy yo'nalishlarda o'qish aslo havas qilarli emas)."
    }
  ]
};

export const HV2_BUERGERFORSCHUNG = {
  title: "Radiosendung: Bürgerforschung / Citizen Science (Interview mit Professor Adler)",
  titleUz: "Radio-intervyu: Fuqarolar ilmi / Havaskor tadqiqotchilar (Professor Adler bilan suhbat)",
  questions: [
    {
      id: 55,
      q: "Es ist laut Professor Adler eine weit verbreitete Meinung, dass...",
      uz: "Professor Adlerning so'zlariga ko'ra, keng tarqalgan fikr shundan iboratki...",
      opts: [
        "A) die Wissenschaft zu wenig mit der Öffentlichkeit kommuniziert.",
        "B) Forschung nur eine Sache für Spezialisten ist.",
        "C) mehr Bürger wissenschaftlich arbeiten sollten."
      ],
      optsUz: [
        "A) ilm-fan jamoatchilik bilan juda kam muloqot qiladi.",
        "B) ilmiy tadqiqot faqat mutaxassislarning ishi hisoblanadi.",
        "C) ko'proq fuqarolar ilmiy ish bilan shug'ullanishi kerak."
      ],
      ans: "B",
      expl: "55 -> B: Keng tarqalgan fikrga ko'ra, ilmiy tadqiqot faqat mutaxassislar (Spezialisten) ishi deb hisoblanadi."
    },
    {
      id: 56,
      q: "Die Aufgaben der Bürgerforscher...",
      uz: "Havaskor (fuqaro) tadqiqotchilarning vazifalari...",
      opts: [
        "A) bestehen oft darin, Daten zu erheben.",
        "B) lassen sich nur gemeinsam mit Wissenschaftlern erledigen.",
        "C) sind auf wenige Fachgebiete beschränkt."
      ],
      optsUz: [
        "A) ko'pincha ma'lumotlarni to'plashdan iborat bo'ladi.",
        "B) faqat olimlar bilan birgalikda bajarilishi mumkin.",
        "C) sanoqli sohalar bilangina cheklangan."
      ],
      ans: "A",
      expl: "56 -> A: Fuqaro tadqiqotchilarning vazifasi ko'pincha tabiat va atrof-muhit bo'yicha ma'lumotlar to'plashdan (Daten zu erheben) iborat."
    },
    {
      id: 57,
      q: "Professor Adler begann sich für Bürgerforschung einzusetzen, weil...",
      uz: "Professor Adler fuqarolar ilmini qo'llab-quvvatlashni boshladi, chunki...",
      opts: [
        "A) er bei seiner Arbeit Hilfe von Laien benötigte.",
        "B) er von Laien wertvolle Anregungen bekam.",
        "C) ihm seine Arbeit an der Hochschule nicht gefiel."
      ],
      optsUz: [
        "A) u o'z ishida havaskorlar yordamiga muhtoj edi.",
        "B) u oddiy odamlardan (havaskorlardan) qimmatli g'oya va takliflar oldi.",
        "C) unga oliygohdagi ishi yoqmas edi."
      ],
      ans: "B",
      expl: "57 -> B: U oddiy fuqarolardan (Laien) qimmatli taklif va ilhomlar (wertvolle Anregungen) olgani uchun shu sohaga kirishgan."
    },
    {
      id: 58,
      q: "Professor Adler hat sich schon als Kind...",
      uz: "Professor Adler bolalik chog'idanoq...",
      opts: [
        "A) für die theoretischen Grundlagen seines Fachs interessiert.",
        "B) für seine spätere berufliche Laufbahn entschieden.",
        "C) mit seinem späteren Forschungsgegenstand beschäftigt."
      ],
      optsUz: [
        "A) o'z sohasining nazariy asoslariga qiziqqan.",
        "B) kelajakdagi kasbiy yo'lini tanlab bo'lgan.",
        "C) keyingi tadqiqot obyekti bilan shug'ullangan."
      ],
      ans: "A",
      expl: "58 -> A: PDF 14 (22-bet) kalitiga ko'ra A: «für die theoretischen Grundlagen seines Fachs interessiert»."
    },
    {
      id: 59,
      q: "Professor Adlers Kinder...",
      uz: "Professor Adlerning farzandlari...",
      opts: [
        "A) lassen sich nur schwer von Computerspielen abhalten.",
        "B) spielen lieber im Freien mit elektronischen Geräten.",
        "C) zeigen schon jetzt Interesse an den Naturwissenschaften."
      ],
      optsUz: [
        "A) kompyuter o'yinlaridan zo'rg'a bosh ko'tarishadi.",
        "B) ochiq havoda elektron qurilmalar bilan o'ynashni afzal ko'rishadi.",
        "C) hozirdanoq tabiiy fanlarga qiziqish bildirishmoqda."
      ],
      ans: "C",
      expl: "59 -> C: Uning farzandlari hozirdanoq tabiiy fanlarga qiziqish namoyon etishmoqda."
    },
    {
      id: 60,
      q: "Bürgerforscher...",
      uz: "Fuqaro tadqiqotchilar...",
      opts: [
        "A) können auf einer Internetseite nach interessanten Forschungsvorhaben suchen.",
        "B) sollen auf der Internetseite ihre eigenen Projekte eintragen.",
        "C) sollen gemeinsam mit Wissenschaftlern Forschungsvorhaben bekannter machen."
      ],
      optsUz: [
        "A) internet sahifasida qiziqarli tadqiqot loyihalarini qidirib topishlari mumkin.",
        "B) internet sahifasiga o'z loyihalarini kiritishlari kerak.",
        "C) olimlar bilan birgalikda tadqiqot loyihalarini mashhur qilishlari kerak."
      ],
      ans: "A",
      expl: "60 -> A: Fuqarolar maxsus internet platformasida o'zlariga qiziq bo'lgan ilmiy loyihalarni qidirib topishlari mumkin."
    },
    {
      id: 61,
      q: "Wissenschaftler...",
      uz: "Olimlar...",
      opts: [
        "A) können auch ohne fremde Hilfe genug Daten für ihre Forschung gewinnen.",
        "B) können auf die Arbeit von Laien nicht immer verzichten.",
        "C) sorgen sich wegen der Bürgerforschung um ihre Arbeitsplätze."
      ],
      optsUz: [
        "A) begonalar yordamisiz ham tadqiqot uchun yetarli ma'lumot to'play oladilar.",
        "B) havaskorlarning mehnatidan doim ham voz kecha olmaydilar.",
        "C) fuqarolar ilmi tufayli o'z ish joylaridan xavotirga tushadilar."
      ],
      ans: "B",
      expl: "61 -> B: Katta hajmdagi kuzatuvlarda olimlar havaskorlar yordamidan voz kecha olmaydilar."
    },
    {
      id: 62,
      q: "Ausschließlich Wissenschaftler...",
      uz: "Faqatgina professional olimlar...",
      opts: [
        "A) können die Ergebnisse der Bürgerforscher richtig deuten.",
        "B) können wissenschaftliche Kriterien ausreichend berücksichtigen.",
        "C) werden wohl weiterhin komplexe Versuche durchführen."
      ],
      optsUz: [
        "A) fuqaro tadqiqotchilarning natijalarini to'g'ri talqin qila oladilar.",
        "B) ilmiy mezonlarni yetarli darajada inobatga ola biladilar.",
        "C) kelajakda ham murakkab tajribalarni o'tkazishda davom etadilar."
      ],
      ans: "C",
      expl: "62 -> C: Murakkab laboratoriya tajribalarini kelajakda ham faqat professional olimlar o'tkazadilar."
    },
    {
      id: 63,
      q: "Die Ergebnisse von Laien...",
      uz: "Havaskorlarning natijalari...",
      opts: [
        "A) gehen meist aus gewissenhafter Arbeit hervor.",
        "B) sind verlässlicher, wenn Wissenschaftler beteiligt waren.",
        "C) werden in der Regel sofort überprüft."
      ],
      optsUz: [
        "A) ko'pincha vijdonan (mas'uliyat bilan) qilingan mehnat mahsuli bo'ladi.",
        "B) olimlar ishtirok etgandagina ishonchliroq bo'ladi.",
        "C) odatda darhol tekshiriladi."
      ],
      ans: "A",
      expl: "63 -> A: Havaskorlarning natijalari odatda juda vijdonan va mas'uliyatli mehnat (gewissenhafte Arbeit) natijasida yuzaga keladi."
    },
    {
      id: 64,
      q: "In der Vergangenheit...",
      uz: "O'tmishda...",
      opts: [
        "A) haben Hobbyforscher einige große Entdeckungen gemacht.",
        "B) waren Wissenschaftler häufig stark spezialisiert.",
        "C) wurden nur unbedeutende Entdeckungen von Laien gemacht."
      ],
      optsUz: [
        "A) havaskor tadqiqotchilar bir qator buyuk kashfiyotlar qilishgan.",
        "B) olimlar ko'pincha tor sohaga ixtisoslashgan edi.",
        "C) havaskorlar tomonidan faqat ahamiyatsiz kashfiyotlar qilingan."
      ],
      ans: "A",
      expl: "64 -> A: Tarixda ham havaskor tadqiqotchilar (Hobbyforscher) bir qancha ulkan kashfiyotlarni amalga oshirishgan."
    }
  ]
};

export const HV2_ESA_FULL = {
  title: "Interview: Arbeiten bei der Europäischen Weltraumagentur ESA (Die junge Frau, Azra)",
  titleUz: "Radio-intervyu: Yevropa kosmik agentligida (ESA) ishlash (Yosh mutaxassis Azra)",
  questions: [
    {
      id: 55,
      q: "Die junge Frau, Azra,...",
      uz: "Yosh ayol, Azra...",
      opts: [
        "A) hat nur einen kurzen Weg zu ihrer Arbeitsstelle.",
        "B) reist für die Arbeit oft ins Ausland.",
        "C) würde später gerne mal ins All fliegen."
      ],
      optsUz: [
        "A) ish joyigacha juda qisqa yo'l bosadi.",
        "B) ish yuzasidan tez-tez chet elga safar qiladi.",
        "C) keyinchalik koinotga uchishni xohlagan bo'lardi."
      ],
      ans: "A",
      expl: "55 -> A: Azraning ish joyigacha yo'li juda qisqa («hat nur einen kurzen Weg zu ihrer Arbeitsstelle»)."
    },
    {
      id: 56,
      q: "Die ESA, die Europäische Weltraumagentur,...",
      uz: "ESA — Yevropa kosmik agentligi...",
      opts: [
        "A) hat ein Zentrum nach Kanada verlegt.",
        "B) ist nicht nur in Europa vertreten.",
        "C) umfasst sämtliche Mitgliedstaaten der Europäischen Union."
      ],
      optsUz: [
        "A) o'z markazlaridan birini Kanadaga ko'chirgan.",
        "B) faqat Yevropadagina vakolatxonalariga ega emas (Yevropadan tashqarida ham bor).",
        "C) Yevropa Ittifoqining barcha a'zo davlatlarini qamrab oladi."
      ],
      ans: "B",
      expl: "56 -> B: ESA nafaqat Yevropada, balki Yevropadan tashqarida ham vakolatxonalarga ega («ist nicht nur in Europa vertreten»)."
    },
    {
      id: 57,
      q: "Die Arbeit in dem Zentrum...",
      uz: "Markazdagi ish...",
      opts: [
        "A) gefällt Azra wegen der besonderen Stimmung dort.",
        "B) ist für Azra sehr spannend.",
        "C) ist für eine Informatikerin ungewöhnlich."
      ],
      optsUz: [
        "A) u yerdagi o'zgacha (xalqaro) muhit tufayli Azraga yoqadi.",
        "B) Azra uchun juda hayajonli.",
        "C) informatik mutaxassis uchun g'ayrioddiy."
      ],
      ans: "A",
      expl: "57 -> A: Markazdagi ish Azraga u yerdagi o'ziga xos xalqaro muhit (wegen der besonderen Stimmung dort) tufayli yoqadi."
    },
    {
      id: 58,
      q: "In dem Zentrum...",
      uz: "Markazda...",
      opts: [
        "A) sprechen viele Mitarbeiter Englisch als Muttersprache.",
        "B) werden auch gemeinsame Freizeitaktivitäten angeboten.",
        "C) wird Wert darauf gelegt, dass alle Mitarbeiter Deutsch lernen."
      ],
      optsUz: [
        "A) ko'p xodimlar ingliz tilida ona tilidek gaplashadi.",
        "B) birgalikdagi bo'sh vaqt mashg'ulotlari ham taklif etiladi.",
        "C) barcha xodimlar nemis tilini o'rganishiga alohida ahamiyat beriladi."
      ],
      ans: "B",
      expl: "58 -> B: Markazda xodimlar uchun birgalikda bo'sh vaqt tadbirlari («gemeinsame Freizeitaktivitäten») ham tashkil etiladi."
    },
    {
      id: 59,
      q: "Azra...",
      uz: "Azra...",
      opts: [
        "A) hörte erst während des Studiums von den Arbeitsmöglichkeiten bei der ESA.",
        "B) träumte schon als Kind von einer Karriere bei der Raumfahrt.",
        "C) wollte ursprünglich Ingenieurwesen oder Physik studieren."
      ],
      optsUz: [
        "A) ESA'dagi ish imkoniyatlari haqida faqat universitetda o'qib yurgan paytida eshitgan.",
        "B) bolaligidanoq kosmonavtika sohasida karyera qilishni orzu qilgan.",
        "C) dastlab muhandislik yoki fizika o'qishni xohlagan."
      ],
      ans: "A",
      expl: "59 -> A: Azra ESA'dagi ish imkoniyatlari haqida faqat talabalik davrida eshitgan."
    },
    {
      id: 60,
      q: "Vor ihrer Bewerbung...",
      uz: "Ishga hujjat topshirishidan oldin...",
      opts: [
        "A) bekam Azra die Gelegenheit, ihren jetzigen Arbeitsplatz zu besuchen.",
        "B) durfte Azra ein Schnupperpraktikum bei der ESA machen.",
        "C) musste ein Freund Azra erst zu diesem Schritt überreden."
      ],
      optsUz: [
        "A) Azra hozirgi ish joyiga tashrif buyurish imkoniyatiga ega bo'lgan.",
        "B) Azraga ESA'da qisqa tanishuv amaliyoti o'tashga ruxsat berilgan.",
        "C) do'sti Azrani bu qadamga ko'ndirishiga to'g'ri kelgan."
      ],
      ans: "A",
      expl: "60 -> A: Hujjat topshirishdan avval u o'zining hozirgi ish joyiga ekskursiya bilan tashrif buyurish imkoniga ega bo'lgan."
    },
    {
      id: 61,
      q: "Über das Trainee-Programm...",
      uz: "Trainee (stajirovka) dasturi orqali...",
      opts: [
        "A) bekommt man Stellenangebote für sämtliche ESA-Standorte.",
        "B) kann man sich das ganze Jahr über bewerben.",
        "C) wird eine bestimmte Anzahl von Jobs bei der ESA angeboten."
      ],
      optsUz: [
        "A) ESA'ning barcha filiallari uchun ish takliflari olinadi.",
        "B) yil bo'yi hujjat topshirish mumkin.",
        "C) ESA'da ma'lum miqdordagi ish o'rinlari taklif etiladi."
      ],
      ans: "C",
      expl: "61 -> C: Trainee dasturi orqali ESA'da har yili aniq belgilangan miqdordagi ish o'rinlari taklif etiladi."
    },
    {
      id: 62,
      q: "Bewerberinnen und Bewerber...",
      uz: "Nomzodlar (arixachilar)...",
      opts: [
        "A) dürfen jede Staatsangehörigkeit besitzen.",
        "B) können sich schon kurz vor dem Studienabschluss bewerben.",
        "C) sollen sich für mehrere Stellen gleichzeitig bewerben."
      ],
      optsUz: [
        "A) istalgan davlat fuqaroligiga ega bo'lishlari mumkin.",
        "B) o'qishni bitirishdan biroz oldin ham hujjat topshirishlari mumkin.",
        "C) bir vaqtning o'zida bir nechta lavozimga ariza topshirishlari kerak."
      ],
      ans: "B",
      expl: "62 -> B: Talabalar o'qishni bitirishlariga oz qolganda ham («schon kurz vor dem Studienabschluss») hujjat topshirishlari mumkin."
    },
    {
      id: 63,
      q: "Die Vorstellungsgespräche...",
      uz: "Ishga kirish suhbatlari (intervyular)...",
      opts: [
        "A) erfolgen meistens zwischen Mai und September.",
        "B) finden vor dem Eignungstest statt.",
        "C) werden von den jeweiligen Ressorts durchgeführt."
      ],
      optsUz: [
        "A) asosan may va sentyabr oylari oralig'ida bo'lib o'tadi.",
        "B) qobiliyat testidan oldin o'tkaziladi.",
        "C) tegishli bo'limlar (departamentlar) tomonidan o'tkaziladi."
      ],
      ans: "C",
      expl: "63 -> C: Suhbatlar bevosita tegishli bo'limlar («von den jeweiligen Ressorts») tomonidan o'tkaziladi."
    },
    {
      id: 64,
      q: "In Zukunft möchte die junge Frau...",
      uz: "Kelajakda yosh ayol (Azra)...",
      opts: [
        "A) auf alle Fälle im Ausland arbeiten.",
        "B) sich bei einem Forschungsinstitut bewerben.",
        "C) vielleicht an einen anderen ESA-Standort wechseln."
      ],
      optsUz: [
        "A) har qanday holatda ham chet elda ishlashni xohlaydi.",
        "B) ilmiy-tadqiqot institutiga ishga kirmoqchi.",
        "C) ehtimol ESA'ning boshqa bir filialiga (markaziga) o'tishi mumkin."
      ],
      ans: "C",
      expl: "64 -> C: Kelajakda u ehtimol ESA'ning boshqa bir filialiga o'tishni («vielleicht an einen anderen ESA-Standort wechseln») xohlaydi."
    }
  ]
};

export const HV3_NEUGIER = {
  title: "Präsentation: Neugier – Wesentliche Bedeutung & Neurobiologie",
  titleUz: "Taqdimot: Qiziquvchanlik (Neugier) – Asosiy ahamiyati va neyrobiologiya",
  items: [
    {
      id: 65,
      label: "Wesentliche Bedeutung – Neugier ist:",
      uz: "Asosiy ma'nosi — Qiziquvchanlik bu: (barcha yangiliklarning/innovatsiyalarning harakatlantiruvchi motori)",
      ans: "der Motor aller Neuerungen"
    },
    {
      id: 66,
      label: "Wissbegierde und Neugier: In beiden Begriffen steckt:",
      uz: "Bilimga chanqoqlik va qiziquvchanlik: har ikki tushunchada nima bor? (ochko'zlik/chanqoqlik tushunchasi)",
      ans: "die Vorstellung von Gier"
    },
    {
      id: 67,
      label: "Wissbegierde und Neugier – das heißt:",
      uz: "Bu degani: (cheksiz / o'lchovsiz istak kabi)",
      ans: "wie maßloses Verlangen"
    },
    {
      id: 68,
      label: "Ursprüngliches Ziel von Neugier:",
      uz: "Qiziquvchanlikning asl (boshlang'ich) maqsadi: (bilim orttirish / egallash)",
      ans: "den Gewinn von Kenntnissen"
    },
    {
      id: 69,
      label: "Sekundäre Neugier (Neue Medien) ohne Erkenntnisgewinn – Neugier wird zum:",
      uz: "Ikkinchi darajali qiziquvchanlik (yangi mediada foydasiz axborot yig'ish) — qiziquvchanlik nimaga aylanadi? (faqat o'z-o'zidan maqsadga)",
      ans: "reinen Selbstzweck"
    },
    {
      id: 70,
      label: "Flut an überflüssigen Informationen – Gefahr:",
      uz: "Ortiqcha axborotlar toshqini — Xavf nimada? (doimiy haddan tashqari zo'riqishda)",
      ans: "liegt in der permanenten Überforderung"
    },
    {
      id: 71,
      label: "Burn-out durch Überflutung mit Informationen, mit anderen Worten:",
      uz: "Axborot ko'pligidan charchash (Burn-out), boshqacha so'z bilan aytganda: (yo'naltirilmagan / tartibsiz qiziquvchanlik)",
      ans: "unkanalisierte Neugier"
    },
    {
      id: 72,
      label: "Schattenseite der Neugier (Sensationslust) – Flucht vor der:",
      uz: "Qiziquvchanlikning qorong'u tomoni (shov-shuvga o'chlik) — nimadan qochish? (kundalik hayotning bir xilligi / jo'nligidan)",
      ans: "Banalität des Alltags"
    },
    {
      id: 73,
      label: "Experimente mit Tieren – man fand heraus:",
      uz: "Hayvonlarda o'tkazilgan tajribalar — nima aniqlandi? (ularning miyasida/dasturlarida sezilarli darajada ko'proq asab hujayralari borligi)",
      ans: "deutlich mehr Nervenzellen in ihren Gehirnen"
    },
    {
      id: 74,
      label: "Konzept „Neurobiologie“ – Dabei ist Neugier:",
      uz: "«Neyrobiologiya» konsepsiyasi — bunda qiziquvchanlik nima? (o'quv rejasining asosi)",
      ans: "die Basis des Lernplans"
    }
  ]
};
