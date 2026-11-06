/**
 * Authentic telc Deutsch C1 Hochschule — Hörverstehen Pools for Variants 21–33
 * Extracted from PDFs 21, 22, 24, 25, 26, 27, 28, 31, 32, 33
 * Formatted with the exact schema used by ListeningWorkspace.tsx and examLogic.ts:
 * - HV1: { title, statements: [{ k, t, uz }], speakers: [{ id, sp, ans, tr, uz }] }
 * - HV2: { title, uzbekIntro, questions: [{ id, q, uz, opts, optsUz, ans, expl }] }
 * - HV3: { title, uzbekIntro, items: [{ id, label, uz, ans, expl }] }
 */

// ============================================================================
// HÖRVERSTEHEN TEIL 1 POOLS (47–54)
// ============================================================================

export const HV1_TEMPOLIMIT_FULL = {
  title: 'Tempolimit auf deutschen Autobahnen',
  statements: [
    { k: 'A', t: 'Das Auto steht in Deutschland für die Unabhängigkeit des Einzelnen.', uz: "Avtomobil Germaniyada shaxs erkinligi va mustaqilligi ramzi hisoblanadi. (Ortiqcha)" },
    { k: 'B', t: 'Durch eine Geschwindigkeitsbegrenzung sind weniger Autos auf den Straßen unterwegs.', uz: "Tezlikni cheklash orqali yo'llarda avtomobillar soni kamayadi. (Ortiqcha)" },
    { k: 'C', t: 'Ein generelles Tempolimit ist überflüssig.', uz: "Umumiy tezlik cheklovi ortiqcha (keraksiz)." },
    { k: 'D', t: 'Ein Tempolimit ist gut für die Konjunktur.', uz: "Tezlik cheklovi iqtisodiyot (konyunktura) uchun foydali." },
    { k: 'E', t: 'Ein Tempolimit nützt der Umwelt und sorgt für mehr Sicherheit.', uz: "Tezlik cheklovi atrof-muhitga foyda keltiradi va xavfsizlikni oshiradi." },
    { k: 'F', t: 'Eine Geschwindigkeitsbegrenzung führt zu einer großen Zeitersparnis.', uz: "Tezlikni cheklash katta vaqt tejalishiga olib keladi." },
    { k: 'G', t: 'Freie Fahrt auf Autobahnen ist ein wichtiger Wirtschaftsfaktor.', uz: "Avtobanlarda cheklovsiz harakatlanish muhim iqtisodiy omildir." },
    { k: 'H', t: 'Gegen Verkehrsrowdys hilft auch kein Tempolimit.', uz: "Yo'l bezorilariga qarshi tezlik cheklovi ham yordam bermaydi." },
    { k: 'I', t: 'Hohe Geschwindigkeiten sind die Hauptursache für tödliche Unfälle.', uz: "Yuqori tezlik o'lim bilan yakunlanadigan avariyalarning asosiy sababidir." },
    { k: 'J', t: 'Langsameres Fahren senkt die individuellen Kosten.', uz: "Sekinroq haydash shaxsiy xarajatlarni kamaytiradi." }
  ],
  speakers: [
    {
      id: 47,
      sp: 'Sprecher 1',
      ans: 'C',
      tr: 'Wir haben auf rund einem Drittel der deutschen Autobahnen ohnehin schon dauerhafte oder zeitweise Begrenzungen sowie elektronische Verkehrsleitsysteme, die bei dichtem Verkehr oder Regen automatisch abregeln. Ein starres generelles Tempolimit auf sämtlichen Strecken ist daher völlig unnig und überflüssig.',
      uz: "Germaniya avtobanlarining uchdan bir qismida shundoq ham cheklovlar va elektron boshqaruv tizimlari mavjud. Shu bois barcha yo'llarda umumiy tezlik cheklovi mutlaqo ortiqcha (C)."
    },
    {
      id: 48,
      sp: 'Sprecher 2',
      ans: 'I',
      tr: 'Die Unfallstatistik spricht eine deutliche Sprache: Nirgendwo sonst auf europäischen Autobahnen sterben auf Abschnitten ohne Begrenzung prozentual so viele Menschen wie bei uns. Überhöhte Geschwindigkeit ist und bleibt der Grund Nummer eins für Unfälle mit tödlichem Ausgang.',
      uz: "Baxtsiz hodisalar statistikasi aniq ko'rsatmoqda: yuqori tezlik o'lim bilan tugaydigan avariyalarning birinchi raqamli sababi bo'lib qolmoqda (I)."
    },
    {
      id: 49,
      sp: 'Sprecher 3',
      ans: 'G',
      tr: 'Unsere Automobilindustrie lebt vom Ruf technischer Spitzenleistung. Dass man leistungsstarke Fahrzeuge auf deutschen Autobahnen legal ausfahren darf, ist ein zentrales Verkaufsargument im In- und Ausland und sichert Hunderttausende Arbeitsplätze.',
      uz: "Avtobanlarda tezlik cheklovi yo'qligi nemis avtomobil sanoati uchun muhim iqtisodiy omil va minglab ish o'rinlari garovidir (G)."
    },
    {
      id: 50,
      sp: 'Sprecher 4',
      ans: 'E',
      tr: 'Ein Tempolimit von 120 oder 130 Kilometern pro Stunde schlägt zwei Fliegen mit einer Klappe: Zum einen sinkt der Ausstoß von Kohlendioxid und Stickoxiden sofort um mehrere Millionen Tonnen jährlich, zum anderen geht die Zahl schwerer Auffahrunfälle drastisch zurück.',
      uz: "Soatiga 120–130 km tezlik cheklovi ikki jihatdan foydali: CO2 chiqindilari kamayadi (atrof-muhitga foyda) va og'ir avariyalar soni keskin tushadi (E)."
    },
    {
      id: 51,
      sp: 'Sprecher 5',
      ans: 'H',
      tr: 'Wer glaubt, mit einem Schild am Straßenrand ließen sich Drängler und Raser bekehren, gibt sich einer Illusion hin. Rücksichtslose Verkehrsrowdys halten sich schon heute an keine Regeln – gegen sie hilft nur mehr Polizeipräsenz, aber kein allgemeines Tempolimit.',
      uz: "Qo'pol qoidabuzarlar va yo'l bezorilariga (Verkehrsrowdys) qarshi umumiy tezlik cheklovi ham yordam bermaydi (H)."
    },
    {
      id: 52,
      sp: 'Sprecher 6',
      ans: 'F',
      tr: 'Verkehrsforscher haben längst nachgewiesen, dass der Verkehrsfluss bei konstanten 120 km/h viel gleichmäßiger ist. Weil ständiges Abbremsen und Beschleunigen entfällt, entstehen deutlich weniger Staus, sodass am Ende alle schneller ans Ziel kommen und viel Zeit sparen.',
      uz: "Bir tekis 120 km/soat tezlikda tirbandliklar (probkalar) kamayadi va natijada hamma manzilga tezroq yetib borib, katta vaqt tejaydi (F)."
    },
    {
      id: 53,
      sp: 'Sprecher 7',
      ans: 'J',
      tr: 'Man sollte einmal auf den eigenen Geldbeutel schauen: Wer mit 180 statt 120 über die Autobahn rast, verbraucht fast doppelt so viel Sprit, von höherem Reifen- und Bremsenverschleiß ganz zu schweigen. Langsameres Fahren schont das eigene Konto erheblich.',
      uz: "Sekinroq haydash yoqilg'i sarfini hamda shina va tormoz yemirilishini kamaytirib, shaxsiy xarajatlarni sezilarli qisqartiradi (J)."
    },
    {
      id: 54,
      sp: 'Sprecher 8',
      ans: 'D',
      tr: 'Weniger Unfälle und geringere Treibstoffimporte bedeuten volkswirtschaftlich Milliarden-Einsparungen im Gesundheitswesen und bei Versicherungen. Dieses Geld fließt in den Binnenkonsum und kurbelt die heimische Konjunktur spürbar an.',
      uz: "Kamroq avariya va kamroq yoqilg'i importi milliy iqtisodiyot (Konjunktur) uchun milliardlab yevro tejaydi va ichki bozorni jonlantiradi (D)."
    }
  ]
};

export const HV1_PENDELN = {
  title: 'Pendeln zwischen Wohnort und Arbeitsplatz',
  statements: [
    { k: 'A', t: 'Beim Pendeln im Zug kann man leicht mit anderen ins Gespräch kommen.', uz: "Poyezdda qatnaganda boshqalar bilan oson suhbatga kirishish mumkin." },
    { k: 'B', t: 'Das tägliche Pendeln ist vor allem eine Kostenfrage.', uz: "Har kuni qatnab ishlash avvalo xarajat (pul) masalasidir. (Ortiqcha)" },
    { k: 'C', t: 'Man sollte beim Pendeln auf das eigene Wohlbefinden achten.', uz: "Qatnab ishlaganda inson o'z salomatligi va ruhiy holatiga e'tibor berishi kerak." },
    { k: 'D', t: 'Mit öffentlichen Verkehrsmitteln ist das Pendeln günstiger als mit dem Auto.', uz: "Jamoat transportida qatnash avtomobilga qaraganda arzonroq." },
    { k: 'E', t: 'Pendeln ermöglicht es, der Hektik der Großstadt zu entfliehen.', uz: "Qatnab ishlash katta shahar shovqin-suronidan qochish imkonini beradi." },
    { k: 'F', t: 'Pendeln gefährdet auf Dauer die Gesundheit.', uz: "Uzoq muddat qatnab ishlash sog'liqni xavf ostiga qo'yadi." },
    { k: 'G', t: 'Pendeln hat einen negativen Einfluss auf das Privatleben.', uz: "Qatnab ishlash shaxsiy hayotga salbiy ta'sir ko'rsatadi." },
    { k: 'H', t: 'Pendler sollten steuerlich stärker entlastet werden.', uz: "Qatnab ishlovchilarga soliq imtiyozlari ko'proq berilishi kerak. (Ortiqcha)" },
    { k: 'I', t: 'Tägliches Pendeln führt zu nachlassenden Leistungen im Beruf.', uz: "Har kuni qatnash ishdagi samaradorlikning pasayishiga olib keladi." },
    { k: 'J', t: 'Wer pendelt, kann die Fahrtzeit sinnvoll nutzen.', uz: "Qatnab ishlovchi odam yo'ldagi vaqtdan unumli foydalana oladi." }
  ],
  speakers: [
    {
      id: 47,
      sp: 'Sprecher 1',
      ans: 'J',
      tr: 'Ich fahre jeden Morgen eine Stunde mit der Regionalbahn ins Büro. Für mich ist das keine verlorene Zeit: Ich beantworte schon im Zug meine ersten E-Mails, lese Fachartikel oder höre Podcasts zur Weiterbildung.',
      uz: "Men har kuni ertalab poyezdda 1 soat yo'l yuraman va bu vaqtdan unumli foydalanaman: e-maillarga javob yozaman, maqolalar o'qiyman (J)."
    },
    {
      id: 48,
      sp: 'Sprecher 2',
      ans: 'F',
      tr: 'Krankenkassendaten zeigen ganz klar: Wer jahrelang täglich mehr als eine Stunde zur Arbeit pendelt, leidet deutlich häufiger unter chronischen Rückenschmerzen, Bluthochdruck, Schlafstörungen und psychischer Erschöpfung.',
      uz: "Tibbiy ma'lumotlar shuni ko'rsatadiki, yillar davomida uzoq masofaga qatnab ishlash bel og'rig'i, qon bosimi va ruhiy charchoq kabi kasalliklarni keltirib chiqarib, sog'liqqa xavf soladi (F)."
    },
    {
      id: 49,
      sp: 'Sprecher 3',
      ans: 'E',
      tr: 'Tagsüber arbeite ich mitten im lauten Bankenviertel von Frankfurt, aber abends steige ich aus dem Zug und bin in unserem ruhigen Dorf im Taunus, wo die Kinder im Garten spielen und man nur Vögel hört. Dieser Kontrast zur Großstadthektik ist mir jeden Kilometer wert.',
      uz: "Kunduzi gavjum shaharda ishlab, kechqurun tinch qishloqdagi uyga qaytish katta shahar shovqin-suronidan uzoqlashish imkonini beradi (E)."
    },
    {
      id: 50,
      sp: 'Sprecher 4',
      ans: 'G',
      tr: 'Durch die zwei Stunden Fahrt pro Tag komme ich unter der Woche erst um acht Uhr abends nach Hause. Für gemeinsame Abendessen mit dem Partner, spontane Treffen mit Freunden oder den Sportverein bleibt praktisch überhaupt keine Zeit mehr – die sozialen Beziehungen leiden enorm.',
      uz: "Kuniga 2 soat yo'lga ketgani uchun oila, do'stlar va sevimli mashg'ulotlarga vaqt qolmaydi — bu shaxsiy hayotga salbiy ta'sir qiladi (G)."
    },
    {
      id: 51,
      sp: 'Sprecher 5',
      ans: 'A',
      tr: 'Im Pendlerzug trifft man jeden Morgen dieselben Gesichter. Mit der Zeit grüßt man sich, setzt sich ins selbe Abteil und plaudert über Gott und die Welt. Ich habe im Zug schon richtig nette Bekanntschaften geschlossen.',
      uz: "Poyezdda har kuni bir xil yo'lovchilarni uchratib, ular bilan oson suhbatlashib ketish va yaxshi tanishlar orttirish mumkin (A)."
    },
    {
      id: 52,
      sp: 'Sprecher 6',
      ans: 'C',
      tr: 'Wenn man schon pendeln muss, sollte man gut auf sich aufpassen: Ich nehme mir für die Fahrt immer gesunde Snacks mit, mache am Bahnhof einen kurzen Spaziergang an der frischen Luft und höre im Auto entspannende Musik, damit mein Wohlbefinden nicht auf der Strecke bleibt.',
      uz: "Qatnab ishlaganda inson o'z salomatligi va ruhiy xotirjamligiga (Wohlbefinden) e'tibor berishi lozim (C)."
    },
    {
      id: 53,
      sp: 'Sprecher 7',
      ans: 'I',
      tr: 'Als Abteilungsleiter merke ich deutlich, wer morgens schon anderthalb Stunden Autobahnstau hinter sich hat. Diese Mitarbeiter kommen oft schon völlig gestresst im Büro an, sind unkonzentriert und machen am Nachmittag deutlich mehr Fehler.',
      uz: "Har kuni uzoq yo'l bosib keladigan xodimlar ishga charchab keladi, diqqati pasayadi va ish samaradorligi tushib ketadi (I)."
    },
    {
      id: 54,
      sp: 'Sprecher 8',
      ans: 'D',
      tr: 'Früher bin ich die 45 Kilometer mit dem eigenen Pkw gefahren, was mich mit Benzin, Versicherung und Wertverlust ein Vermögen gekostet hat. Seit ich auf Bus und Bahn mit Jahresabo umgestiegen bin, gebe ich nur noch einen Bruchteil davon aus.',
      uz: "Shaxsiy avtomobildan ko'ra jamoat transporti (avtobus va poyezd obunasi) orqali qatnash ancha arzonroqqa tushadi (D)."
    }
  ]
};

export const HV1_STUDIENGEBUEHREN_FULL = {
  title: 'Studiengebühren an deutschen Hochschulen',
  statements: [
    { k: 'A', t: 'Bildung muss für alle frei zugänglich sein.', uz: "Ta'lim barcha uchun bepul va ochiq bo'lishi shart." },
    { k: 'B', t: 'Das Zahlen von Studiengebühren verkürzt die Studiendauer.', uz: "O'qish uchun pul to'lash o'qish muddatini qisqartiradi." },
    { k: 'C', t: 'Eine kostenlose Hochschulausbildung verschärft soziale Ungerechtigkeiten.', uz: "Bepul oliy ta'lim ijtimoiy adolatsizlikni kuchaytiradi." },
    { k: 'D', t: 'Finanzielle Hürden halten viele vom Studieren ab.', uz: "Moliyaviy to'siqlar ko'pchilikni oliygohda o'qishdan qaytaradi." },
    { k: 'E', t: 'Gebühren führen zu einer höheren Wertschätzung des Studiums.', uz: "To'lovlar o'qishning qadriga ko'proq yetishga olib keladi. (Ortiqcha)" },
    { k: 'F', t: 'Gute Studienbedingungen sind wichtiger als Gebührenfreiheit.', uz: "Yaxshi o'qish sharoitlari to'lovsiz o'qishdan ko'ra muhimroqdir." },
    { k: 'G', t: 'Hochschulen sollten durch Unternehmensspenden finanziert werden.', uz: "Oliygohlar kompaniyalar xayriyalari hisobidan moliyalashtirilishi kerak. (Ortiqcha)" },
    { k: 'H', t: 'In Deutschland wird zu wenig Geld in die Hochschulbildung investiert.', uz: "Germaniyada oliy ta'limga juda kam pul sarmoya qilinadi." },
    { k: 'I', t: 'Studiengebühren sollten erst nach dem Berufseinstieg gezahlt werden.', uz: "O'qish to'lovlari faqat ishga kirgandan keyingina to'lanishi kerak." },
    { k: 'J', t: 'Studierende aus Nicht-EU-Ländern sollten Gebühren zahlen.', uz: "Yevropa Ittifoqiga a'zo bo'lmagan davlatlardan kelgan talabalar kontrakt to'lashi kerak." }
  ],
  speakers: [
    {
      id: 47,
      sp: 'Sprecher 1',
      ans: 'D',
      tr: 'Studien aus den Jahren, in denen manche Bundesländer Gebühren erhoben haben, zeigen eindeutig: Vor allem Abiturienten aus Nicht-Akademiker-Haushalten verzichten aus Angst vor Schulden ganz auf ein Studium. Finanzielle Hürden schrecken genau diejenigen ab, die wir fördern müssten.',
      uz: "Qarzga botishdan qo'rqish va moliyaviy to'siqlar, ayniqsa kam ta'minlangan oila farzandlarini universitetda o'qishdan qaytaradi (D)."
    },
    {
      id: 48,
      sp: 'Sprecher 2',
      ans: 'F',
      tr: 'Was nützt mir ein gebührenfreies Studium, wenn die Hörsäle überfüllt sind, in der Bibliothek die aktuellen Lehrbücher fehlen und die Laborgeräte aus den Achtzigerjahren stammen? Ich zahle lieber 500 Euro pro Semester, wenn ich dafür erstklassige Studienbedingungen bekomme.',
      uz: "Gavjum auditoriya va eski laboratoriyalarda bepul o'qigandan ko'ra, 500 yevro to'lab bo'lsa ham sifatli o'qish sharoitlariga ega bo'lish muhimroq (F)."
    },
    {
      id: 49,
      sp: 'Sprecher 3',
      ans: 'C',
      tr: 'Es klingt paradox, aber das gebührenfreie Studium ist unsozial: Über ihre Steuern finanzieren die Verkäuferin und der Handwerker das teure Medizinstudium von Akademikerkindern mit, die später ein Vielfaches verdienen. Das verschärft die soziale Ungleichheit.',
      uz: "Bepul oliy ta'lim ijtimoiy adolatsizlikni kuchaytiradi, chunki oddiy ishchilar o'z soliqlari hisobidan kelajakda boy bo'ladigan shifokor va huquqshunoslarning o'qishini moliyalashtiradi (C)."
    },
    {
      id: 50,
      sp: 'Sprecher 4',
      ans: 'I',
      tr: 'Sehr überzeugend finde ich das australische Modell der nachgelagerten Studiengebühren: Während des Studiums zahlt niemand einen Cent. Erst wenn man nach dem Abschluss einen gut bezahlten Job hat und ein bestimmtes Mindesteinkommen überschreitet, zahlt man die Gebühren schrittweise zurück.',
      uz: "O'qish davrida emas, balki o'qishni bitirib yaxshi daromadli ishga kirgandan keyingina to'lanadigan kechiktirilgan kontrakt tizimi eng adolatlidir (I)."
    },
    {
      id: 51,
      sp: 'Sprecher 5',
      ans: 'A',
      tr: 'Bildung ist kein Konsumgut wie ein Smartphone, sondern ein Menschenrecht und das wichtigste Fundament unserer Demokratie. Deshalb müssen Schulen und Universitäten für jeden jungen Menschen unabhängig vom Geldbeutel der Eltern vollkommen kostenfrei zugänglich sein.',
      uz: "Ta'lim tovar emas, balki inson huquqidir, shuning uchun u barcha uchun mutlaqo bepul va ochiq bo'lishi shart (A)."
    },
    {
      id: 52,
      sp: 'Sprecher 6',
      ans: 'B',
      tr: 'Wenn jedes zusätzliche Semester bares Geld kostet, überlegt man es sich zweimal, ob man eine Prüfung aufschiebt oder jahrelang ziellos vor sich hin studiert. Gebühren sorgen dafür, dass Studierende ihr Studium viel zielstrebiger und in kürzerer Zeit abschließen.',
      uz: "Har bir qo'shimcha semestr uchun pul to'lash talabalarni imtihonlarni kechiktirmasdan, o'qishni tezroq (qisqaroq muddatda) tugatishga undaydi (B)."
    },
    {
      id: 53,
      sp: 'Sprecher 7',
      ans: 'H',
      tr: 'Im Vergleich zu den USA, der Schweiz oder Skandinavien gibt der deutsche Staat pro Kopf viel zu wenig für seine Universitäten aus. Unsere Hochschulen sind chronisch unterfinanziert, weil die Politik seit Jahrzehnten an den Bildungsinvestitionen spart.',
      uz: "AQSh yoki Skandinaviya bilan solishtirganda, Germaniyada oliy ta'limga juda kam mablag' sarmoya qilinadi (H)."
    },
    {
      id: 54,
      sp: 'Sprecher 8',
      ans: 'J',
      tr: 'In Baden-Württemberg zahlen internationale Studierende, die von außerhalb der Europäischen Union kommen, seit einigen Jahren 1500 Euro pro Semester. Das halte ich für gerechtfertigt, da deren Eltern hierzulande keine Steuern gezahlt haben und das Geld direkt in deren Betreuung fließt.',
      uz: "Yevropa Ittifoqiga kirmaydigan davlatlardan kelgan xalqaro talabalar o'qish uchun to'lov (kontrakt) to'lashi maqsadga muvofiqdir (J)."
    }
  ]
};

export const HV1_STUDIENFINANZIERUNG = {
  title: 'Studienfinanzierung und Arbeiten neben dem Studium',
  statements: [
    { k: 'A', t: 'Alle Studierenden sollten unabhängig vom Einkommen der Eltern gefördert werden.', uz: "Barcha talabalar ota-onasining daromadidan qat'i nazar davlat tomonidan qo'llab-quvvatlanishi kerak." },
    { k: 'B', t: 'Arbeiten neben dem Studium bringt wertvolle Praxiserfahrung.', uz: "O'qish bilan birga ishlash qimmatli amaliy tajriba beradi." },
    { k: 'C', t: 'Das BAföG-System muss dringend an steigende Mieten angepasst werden.', uz: "BAföG stipendiya tizimi o'sib borayotgan ijara narxlariga moslashtirilishi shart." },
    { k: 'D', t: 'Ein Studienkredit ist eine sinnvolle Investition in die eigene Zukunft.', uz: "Ta'lim krediti o'z kelajagiga kiritilgan oqilona sarmoyadir." },
    { k: 'E', t: 'Eltern sind verpflichtet, ihren Kindern das Studium zu finanzieren.', uz: "Ota-onalar farzandlarining o'qishini moliyalashtirishga majburdirlar." },
    { k: 'F', t: 'Stipendien stehen nicht nur Hochbegabten offen.', uz: "Stipendiyalar faqat o'ta iqtidorli (a'lochi) talabalar uchungina emas." },
    { k: 'G', t: 'Studierende sollten während des Semesters überhaupt nicht arbeiten.', uz: "Talabalar semestr davomida umuman ishlamasliklari kerak. (Ortiqcha)" },
    { k: 'H', t: 'Wer zu viel nebenbei arbeitet, riskiert den Studienerfolg.', uz: "O'qishdan tashqari haddan ko'p ishlagan talaba o'qishdagi muvaffaqiyatini xavf ostiga qo'yadi." },
    { k: 'I', t: 'Wohngemeinschaften sind die beste Lösung gegen Geldnot.', uz: "Sheriklikda ijarada turish (WG) pul tanqisligiga qarshi eng yaxshi yechimdir. (Ortiqcha)" },
    { k: 'J', t: 'Zu Beginn des Studiums unterschätzen viele die laufenden Lebenshaltungskosten.', uz: "O'qish boshida ko'pchilik kundalik yashash xarajatlarini kam baholaydi." }
  ],
  speakers: [
    {
      id: 47,
      sp: 'Sprecher 1',
      ans: 'C',
      tr: 'Die Wohnpauschale beim BAföG reicht in Universitätsstädten wie München, Köln oder Hamburg hinten und vorne nicht mehr. Wenn schon ein kleines WG-Zimmer 600 Euro kostet, müssen die Fördersätze endlich an die realen Mietpreise gekoppelt werden.',
      uz: "Universitet shaharlarida ijara narxlari juda oshib ketgan, shu bois BAföG miqdori real ijara narxlariga moslashtirilishi zarur (C)."
    },
    {
      id: 48,
      sp: 'Sprecher 2',
      ans: 'B',
      tr: 'Mein Nebenjob als Werkstudentin in einem Ingenieurbüro bringt mir nicht nur Geld für die Miete, sondern vor allem Kontakte und Einblicke in den Berufsalltag. Was ich dort im Projektteam lerne, steht in keinem Lehrbuch.',
      uz: "O'qish bilan birga o'z sohasida (Werkstudent sifatida) ishlash nafaqat pul, balki qimmatli amaliy tajriba ham beradi (B)."
    },
    {
      id: 49,
      sp: 'Sprecher 3',
      ans: 'H',
      tr: 'Ich kellnere 25 Stunden pro Woche bis spät in die Nacht, um über die Runden zu kommen. Morgens schlafe ich dann in den Vorlesungen fast ein und bin schon durch zwei wichtige Klausuren gefallen. Wenn der Job überhandnimmt, leidet das Studium massiv.',
      uz: "Haftasiga 25 soat tungi smenada ishlash oqibatida darslar va imtihonlar oqsaydi — haddan ko'p ishlash o'qish muvaffaqiyatini xavf ostiga qo'yadi (H)."
    },
    {
      id: 50,
      sp: 'Sprecher 4',
      ans: 'F',
      tr: 'Viele Studierende bewerben sich gar nicht erst um ein Stipendium, weil sie glauben, man bräuchte dafür einen Einser-Durchschnitt. Das stimmt überhaupt nicht! Viele Stiftungen fördern auch gesellschaftliches Engagement oder Studierende mit besonderer Biografie.',
      uz: "Ko'pchilik stipendiya faqat a'lochilar uchun deb o'ylaydi, ammo fondlar ijtimoiy faol talabalarni ham qo'llab-quvvatlaydi (F)."
    },
    {
      id: 51,
      sp: 'Sprecher 5',
      ans: 'J',
      tr: 'Als ich von zu Hause auszog, dachte ich nur an die Kaltmiete. Dass dann noch Semesterbeitrag, Strom, Internet, Krankenversicherung, Fachbücher und Lebensmittel dazukommen, hat mich im ersten Semester völlig kalt erwischt.',
      uz: "O'qish boshida ko'pchilik yoshlar elektr, internet, sug'urta va kitoblar kabi kundalik yashash xarajatlarini hisobga olmaydi (J)."
    },
    {
      id: 52,
      sp: 'Sprecher 6',
      ans: 'D',
      tr: 'Man sollte keine übertriebene Angst vor einem zinsgünstigen Studienkredit haben. Wer sich dadurch voll auf sein Studium konzentrieren kann, steigt ein Jahr früher ins Berufsleben ein und hat das Darlehen dank des Akademikergehalts schnell wieder abbezahlt.',
      uz: "Past foizli ta'lim krediti olib o'qishni tezroq bitirish — o'z kelajagiga kiritilgan oqilona sarmoyadir (D)."
    },
    {
      id: 53,
      sp: 'Sprecher 7',
      ans: 'A',
      tr: 'In Skandinavien bekommt jeder Studierende vom Staat ein festes monatliches Grundstipendium, egal wie viel die Eltern verdienen. Das macht junge Erwachsene eigenständig und erspart bürokratische Antragsformulare.',
      uz: "Barcha talabalar ota-onasining daromadidan qat'i nazar davlat tomonidan moliyaviy qo'llab-quvvatlanishi kerak (A)."
    },
    {
      id: 54,
      sp: 'Sprecher 8',
      ans: 'E',
      tr: 'Nach dem deutschen Unterhaltsrecht müssen Eltern ihren Kindern eine erste Berufsausbildung oder ein Erststudium finanzieren, sofern sie finanziell dazu in der Lage sind. Dieser gesetzlichen Verantwortung sollten sie sich auch nicht entziehen.',
      uz: "Qonunga ko'ra ota-onalar imkoniyati bo'lsa farzandlarining birinchi oliy ta'limini moliyalashtirishga majburdirlar (E)."
    }
  ]
};

// ============================================================================
// HÖRVERSTEHEN TEIL 2 POOLS (55–64)
// ============================================================================

export const HV2_FISCHER = {
  title: 'Unternehmensgründung und Führungsstil (Interview mit Frau Fischer)',
  uzbekIntro: "Tadbirkor ayol Fishxer xonim bilan uning korxonasi tarixi, rahbarlik uslubi va barqaror biznes haqida radio-intervyu (55–64-savollar).",
  questions: [
    {
      id: 55,
      q: 'Was sagt Frau Fischer über die Anfänge ihres Unternehmens?',
      uz: 'Fishxer xonim o‘z korxonasining ilk davri haqida nima deydi?',
      opts: [
        'A) Das Startkapital stammte vollständig von einer Bank.',
        'B) Die Idee entstand aus einem persönlichen Bedürfnis heraus.',
        'C) Sie hatte von Anfang an erfahrene Geschäftspartner.'
      ],
      optsUz: [
        "A) Boshlang'ich sarmoya to'liq bankdan olingan.",
        "B) G'oya shaxsiy ehtiyojdan kelib chiqqan.",
        "C) Uning boshidanoq tajribali biznes hamkorlari bo'lgan."
      ],
      ans: 'B',
      expl: "Fishxer xonim korxona g'oyasi o'zining shaxsiy ehtiyojidan kelib chiqqanini ta'kidlaydi."
    },
    {
      id: 56,
      q: 'Welche Schwierigkeit gab es in der Gründungsphase?',
      uz: 'Korxonaga asos solish bosqichida qanday qiyinchilik bo‘lgan?',
      opts: [
        'A) Geeignete Produktionsräume zu finden.',
        'B) Qualifizierte Mitarbeiter einzustellen.',
        'C) Skeptische Geldgeber von dem Konzept zu überzeugen.'
      ],
      optsUz: [
        "A) Mos ishlab chiqarish binolarini topish.",
        "B) Malakali xodimlarni ishga olish.",
        "C) Shubha bilan qaraydigan sarmoyadorlarni konsepsiyaga ishontirish."
      ],
      ans: 'C',
      expl: "Dastlabki bosqichda investorlar va banklarni yangi biznes modeliga ishontirish eng qiyin bo'lgan."
    },
    {
      id: 57,
      q: 'Worauf legt Frau Fischer bei der Auswahl neuer Mitarbeitender besonderen Wert?',
      uz: 'Fishxer xonim yangi xodimlarni tanlashda nimaga alohida e’tibor beradi?',
      opts: [
        'A) Auf hervorragende Hochschulabschlüsse.',
        'B) Auf Begeisterungsfähigkeit und Teamgeist.',
        'C) Auf langjährige Branchenerfahrung.'
      ],
      optsUz: [
        "A) A'lo darajadagi universitet diplomlariga.",
        "B) Ishtiyoq va jamoaviy ruhga.",
        "C) Sohadagi ko'p yillik tajribaga."
      ],
      ans: 'B',
      expl: "Diplom baholaridan ko'ra ishtiyoq (Begeisterungsfähigkeit) va jamoaga moslashuvchanlik muhimroq."
    },
    {
      id: 58,
      q: 'Wie beschreibt Frau Fischer ihren Führungsstil?',
      uz: 'Fishxer xonim o‘zining rahbarlik uslubini qanday ta’riflaydi?',
      opts: [
        'A) Sie bezieht das Team in wichtige Entscheidungen ein.',
        'B) Sie gibt alle Arbeitsschritte genau vor.',
        'C) Sie überlässt die Abteilungen völlig sich selbst.'
      ],
      optsUz: [
        "A) U muhim qarorlarni qabul qilishga jamoani ham jalb etadi.",
        "B) U barcha ish bosqichlarini aniq belgilab beradi.",
        "C) U bo'limlarni to'liq o'z holiga tashlab qo'yadi."
      ],
      ans: 'A',
      expl: "U ishtirokchi (partizipativ) rahbarlik uslubini qo'llab, jamoani qarorlar qabul qilishga jalb qiladi."
    },
    {
      id: 59,
      q: 'Was unterscheidet ihr Unternehmen von der Konkurrenz?',
      uz: 'Uning korxonasini raqobatchilardan nima ajratib turadi?',
      opts: [
        'A) Die besonders niedrigen Verkaufspreise.',
        'B) Die konsequente Ausrichtung auf Nachhaltigkeit.',
        'C) Ein weltweites Filialnetz.'
      ],
      optsUz: [
        "A) Juda arzon sotuv narxlari.",
        "B) Barqarorlikka (ekologik tozalikka) izchil yo'naltirilganlik.",
        "C) Butun dunyo bo'ylab filiallar tarmog'i."
      ],
      ans: 'B',
      expl: "Korxona barcha jarayonlarda barqarorlik (Nachhaltigkeit) tamoyiliga qat'iy amal qiladi."
    },
    {
      id: 60,
      q: 'Wie geht Frau Fischer mit beruflichen Rückschlägen um?',
      uz: 'Fishxer xonim kasbiy muvaffaqiyatsizliklarga qanday munosabatda bo‘ladi?',
      opts: [
        'A) Sie betrachtet Fehler als Lernchance für die Zukunft.',
        'B) Sie sucht sofort externe Unternehmensberater auf.',
        'C) Sie vermeidet danach jegliches unternehmerische Risiko.'
      ],
      optsUz: [
        "A) U xatolarni kelajak uchun o'rganish imkoniyati deb biladi.",
        "B) U darhol tashqi biznes-maslahatchilarga murojaat qiladi.",
        "C) U shundan so'ng har qanday tadbirkorlik tavakkalchiligidan qochadi."
      ],
      ans: 'A',
      expl: "Xatolar va omadsizliklar korxonani rivojlantirish uchun muhim saboq sifatida ko'riladi."
    },
    {
      id: 61,
      q: 'Welche Rolle spielt die Digitalisierung in ihrem Betrieb?',
      uz: 'Uning korxonasida raqamlashtirish qanday rol o‘ynaydi?',
      opts: [
        'A) Sie hat zu einem Abbau von Arbeitsplätzen geführt.',
        'B) Sie erleichtert vor allem die interne Kommunikation und Logistik.',
        'C) Sie wird von den älteren Beschäftigten abgelehnt.'
      ],
      optsUz: [
        "A) U ish o'rinlari qisqarishiga olib keldi.",
        "B) U asosan ichki muloqot va logistikani yengillashtiradi.",
        "C) U yoshi katta xodimlar tomonidan rad etiladi."
      ],
      ans: 'B',
      expl: "Raqamli tizimlar ichki muloqot va ombor logistikasini ancha tezlashtirgan."
    },
    {
      id: 62,
      q: 'Was hält Frau Fischer von flexiblen Arbeitszeitmodellen?',
      uz: 'Fishxer xonim moslashuvchan ish vaqti modellari haqida qanday fikrda?',
      opts: [
        'A) Sie steigern die Zufriedenheit und Produktivität der Belegschaft.',
        'B) Sie sind in einem Produktionsbetrieb nicht umsetzbar.',
        'C) Sie führen häufig zu Konflikten im Team.'
      ],
      optsUz: [
        "A) Ular xodimlarning mamnunligi va mehnat unumdorligini oshiradi.",
        "B) Ularni ishlab chiqarish korxonasida joriy etib bo'lmaydi.",
        "C) Ular jamoada tez-tez nizolarga sabab bo'ladi."
      ],
      ans: 'A',
      expl: "Moslashuvchan ish soatlari xodimlarning ishdan mamnunligi va unumdorligini oshiradi."
    },
    {
      id: 63,
      q: 'Welchen Rat gibt sie jungen Existenzgründerinnen und -gründern?',
      uz: 'U yosh tadbirkorlarga (startap asoschilariga) qanday maslahat beradi?',
      opts: [
        'A) Möglichst schnell ins Ausland zu expandieren.',
        'B) Sich frühzeitig ein gutes Netzwerk aufzubauen.',
        'C) Auf jegliche Kredite zu verzichten.'
      ],
      optsUz: [
        "A) Imkon qadar tezroq xorijga chiqish.",
        "B) Erta bosqichdanoq yaxshi aloqalar tarmog'ini (Netzwerk) yaratish.",
        "C) Har qanday kreditlardan voz kechish."
      ],
      ans: 'B',
      expl: "Yosh tadbirkorlarga boshidanoq kuchli hamkorlik tarmog'ini (Netzwerk) shakllantirishni maslahat beradi."
    },
    {
      id: 64,
      q: 'Welche Pläne hat Frau Fischer für die kommenden Jahre?',
      uz: 'Fishxer xonimning kelgusi yillar uchun qanday rejalari bor?',
      opts: [
        'A) Das Unternehmen an einen großen Konzern zu verkaufen.',
        'B) Eine neue umweltfreundliche Produktlinie auf den Markt zu bringen.',
        'C) Sich vollständig aus der Geschäftsführung zurückzuziehen.'
      ],
      optsUz: [
        "A) Korxonani yirik konsernga sotish.",
        "B) Bozorga yangi ekologik toza mahsulotlar liniyasini chiqarish.",
        "C) Rahbarlikdan butunlay ketish."
      ],
      ans: 'B',
      expl: "Kelgusi yillarda u yangi ekologik mahsulotlar turkumini bozorga chiqarishni rejalashtirgan."
    }
  ]
};

export const HV2_LANDFLUCHT = {
  title: 'Landflucht und die Zukunft der Dörfer',
  uzbekIntro: "Qishloqlardan shaharlarga ko'chish (Landflucht) sabablari, oqibatlari va qishloq hududlarini qayta jonlantirish imkoniyatlari haqida radio-intervyu (55–64-savollar).",
  questions: [
    {
      id: 55,
      q: 'Wie hat sich das Verhältnis von Stadt- und Landbevölkerung historisch entwickelt?',
      uz: 'Shahar va qishloq aholisi nisbati tarixan qanday rivojlangan?',
      opts: [
        'A) Heute lebt weltweit erstmals mehr als die Hälfte der Menschen in Städten.',
        'B) In Europa kehren seit Jahrzehnten mehr Menschen aufs Land zurück als in die Stadt ziehen.',
        'C) Das Wachstum der Städte stagniert seit Beginn des 21. Jahrhunderts.'
      ],
      optsUz: [
        "A) Bugungi kunda dunyo bo'yicha ilk bor aholining yarmidan ko'pi shaharlarda yashamoqda.",
        "B) Yevropada o'nlab yillardan beri shaharga ko'chgandan ko'ra qishloqqa qaytayotganlar ko'p.",
        "C) XXI asr boshidan beri shaharlar o'sishi to'xtab qolgan."
      ],
      ans: 'A',
      expl: "Intervyuda ta'kidlanishicha, bugungi kunda dunyo aholisining 50 foizidan ortig'i shaharlarda istiqomat qiladi."
    },
    {
      id: 56,
      q: 'Was ist laut dem Experten der Hauptgrund für die Abwanderung junger Menschen vom Land?',
      uz: 'Ekspertning fikricha, yoshlarning qishloqdan ko‘chib ketishiga asosiy sabab nima?',
      opts: [
        'A) Das Fehlen von Hochschulen und vielfältigen Ausbildungsplätzen.',
        'B) Die schlechte Luftqualität durch die Landwirtschaft.',
        'C) Zu hohe Grundstückspreise in ländlichen Gemeinden.'
      ],
      optsUz: [
        "A) Oliy o'quv yurtlari va xilma-xil kasb-hunar o'rinlarining yetishmasligi.",
        "B) Qishloq xo'jaligi tufayli havo sifatining yomonligi.",
        "C) Qishloq hududlarida yer narxining haddan tashqari balandligi."
      ],
      ans: 'A',
      expl: "Yoshlar avvalo o'qish (universitet) va malakali ish o'rinlari izlab shaharlarga ko'chib ketishadi."
    },
    {
      id: 57,
      q: 'Welche Folge hat der Wegzug für die zurückbleibende Landbevölkerung?',
      uz: 'Ko‘chib ketish qishloqda qolgan aholi uchun qanday oqibat keltirib chiqaradi?',
      opts: [
        'A) Die Immobilienpreise steigen sprunghaft an.',
        'B) Die Nahversorgung mit Ärzten, Schulen und Bussen bricht vielerorts weg.',
        'C) Die Steuereinnahmen der Gemeinden nehmen zu.'
      ],
      optsUz: [
        "A) Ko'chmas mulk narxlari keskin oshib ketadi.",
        "B) Shifokorlar, maktablar va jamoat transporti kabi xizmatlar ko'p joylarda yopilib ketadi.",
        "C) Hududlarning soliq tushumlari ko'payadi."
      ],
      ans: 'B',
      expl: "Aholi kamayishi bilan maktablar, shifokor punktlari, do'konlar va avtobus yo'nalishlari yopiladi."
    },
    {
      id: 58,
      q: 'Warum zieht es vor allem junge Frauen noch häufiger in die Städte als junge Männer?',
      uz: 'Nima uchun yosh ayollar yosh erkaklarga qaraganda shaharlarga ko‘proq ko‘chib ketishadi?',
      opts: [
        'A) Weil sie im Durchschnitt höhere Bildungsabschlüsse anstreben und im Dienstleistungssektor arbeiten.',
        'B) Weil sie seltener einen Führerschein besitzen.',
        'C) Weil sie auf dem Land keine Wohnungen mieten dürfen.'
      ],
      optsUz: [
        "A) Chunki ular o'rtacha yuqoriroq ma'lumotga intiladi va xizmat ko'rsatish sohasida ishlaydi.",
        "B) Chunki ularda haydovchilik guvohnomasi kamroq bo'ladi.",
        "C) Chunki ularga qishloqda uy ijaraga berilmaydi."
      ],
      ans: 'A',
      expl: "Yosh ayollar ko'proq gimnaziya va universitetlarda o'qiydi hamda shaharlardagi xizmat ko'rsatish sohasida ish topadi."
    },
    {
      id: 59,
      q: 'Welche Chance bietet die Digitalisierung für ländliche Regionen?',
      uz: 'Raqamlashtirish qishloq hududlari uchun qanday imkoniyat yaratadi?',
      opts: [
        'A) Landwirtschaftliche Betriebe benötigen überhaupt kein Personal mehr.',
        'B) Durch Homeoffice und Co-Working-Spaces lassen sich Wohn- und Arbeitsort entkoppeln.',
        'C) Schulen auf dem Land können komplett durch Online-Kurse ersetzt werden.'
      ],
      optsUz: [
        "A) Qishloq xo'jaligi korxonalariga umuman xodim kerak bo'lmay qoladi.",
        "B) Masofaviy ish (Homeoffice) va kovorking markazlari orqali yashash va ish joyini bog'liq bo'lmagan holga keltirish mumkin.",
        "C) Qishloqdagi maktablarni to'liq onlayn kurslar bilan almashtirish mumkin."
      ],
      ans: 'B',
      expl: "Tezkor internet va Homeoffice tufayli odamlar shahardagi kompaniyada ishlab, qishloqda yashay oladi."
    },
    {
      id: 60,
      q: 'Welche Voraussetzung muss dafür auf dem Land dringend erfüllt werden?',
      uz: 'Buning uchun qishloq joylarda qanday shart tezda bajarilishi lozim?',
      opts: [
        'A) Der flächendeckende Ausbau von schnellem Glasfaser-Internet.',
        'B) Der Bau neuer Autobahnen in jedes Dorf.',
        'C) Die Abschaffung der Grundsteuer.'
      ],
      optsUz: [
        "A) Barcha hududlarda tezkor optik tolali internet tarmog'ini kengaytirish.",
        "B) Har bir qishloqqa yangi avtobanlar qurish.",
        "C) Yer solig'ini bekor qilish."
      ],
      ans: 'A',
      expl: "Masofadan ishlash uchun barqaror va tezkor optik tolali internet (Glasfaser) zarur."
    },
    {
      id: 61,
      q: 'Was zeigt das Beispiel innovativer Landgemeinden in Österreich und der Schweiz?',
      uz: 'Avstriya va Shveytsariyadagi innovatsion qishloq jamoalari misoli nimani ko‘rsatadi?',
      opts: [
        'A) Dass nur der Wintertourismus das Überleben der Dörfer sichert.',
        'B) Dass Bürgerbeteiligung und regionale Wirtschaftskreisläufe Dörfer wieder attraktiv machen.',
        'C) Dass kleine Dörfer zwangsläufig aufgegeben werden müssen.'
      ],
      optsUz: [
        "A) Qishloqlarning saqlanib qolishini faqat qishki turizm ta'minlashini.",
        "B) Fuqarolar faolligi va mahalliy iqtisodiy zanjirlar qishloqlarni yana jozibador qilishini.",
        "C) Kichik qishloqlardan muqarrar ravishda voz kechish kerakligini."
      ],
      ans: 'B',
      expl: "Aholining faol ishtiroki, kooperativ do'konlar va mahalliy ishlab chiqarish qishloqlarni jonlantiradi."
    },
    {
      id: 62,
      q: 'Wie verändert sich derzeit das Image des Landlebens bei jungen Familien?',
      uz: 'Hozirda yosh oilalar orasida qishloq hayotining imiji qanday o‘zgarmoqda?',
      opts: [
        'A) Das Landleben gilt zunehmend als spießig und rückständig.',
        'B) Ruhe, Natur und bezahlbarer Wohnraum machen das Land wieder zu einem Sehnsuchtsort.',
        'C) Junge Familien meiden das Land wegen fehlender Einkaufszentren.'
      ],
      optsUz: [
        "A) Qishloq hayoti tobora qoloq deb hisoblanmoqda.",
        "B) Tinchlik, tabiat va hamyonbop uy-joy qishloqni yana orzu qilingan maskanga aylantirmoqda.",
        "C) Yosh oilalar savdo markazlari yo'qligi sababli qishloqdan qochishmoqda."
      ],
      ans: 'B',
      expl: "Shaharlardagi qimmat ijara narxlari fonida qishloqdagi tabiat va arzonroq uy-joy yosh oilalarni jalb qilmoqda."
    },
    {
      id: 63,
      q: 'Welche Konzepte helfen gegen den Ärztemangel auf dem Land?',
      uz: 'Qishloqda shifokorlar yetishmovchiligiga qarshi qanday konsepsiyalar yordam beradi?',
      opts: [
        'A) Mobile Arztpraxen, Telemedizin und Gemeinschaftspraxen.',
        'B) Die Schließung kleiner Kreiskrankenhäuser.',
        'C) Höhere Krankenkassenbeiträge für Dorfbewohner.'
      ],
      optsUz: [
        "A) Mobil shifokor punktlari, telemeditsina va qo'shma poliklinikalar.",
        "B) Kichik tuman kasalxonalarini yopish.",
        "C) Qishloq aholisi uchun tibbiy sug'urta badallarini oshirish."
      ],
      ans: 'A',
      expl: "Telemeditsina, mobil shifokor avtobuslari va qo'shma amaliyot markazlari (Gemeinschaftspraxen) muammoni yumshatadi."
    },
    {
      id: 64,
      q: 'Welches Fazit zieht der Experte am Ende des Gesprächs?',
      uz: 'Suhbat yakunida ekspert qanday xulosaga keladi?',
      opts: [
        'A) Stadt und Land dürfen nicht gegeneinander ausgespielt werden, sondern brauchen gleichwertige Lebensverhältnisse.',
        'B) Staatliche Fördergelder sollten künftig ausschließlich in Metropolen fließen.',
        'C) In fünfzig Jahren wird es in Deutschland keine Dörfer mehr geben.'
      ],
      optsUz: [
        "A) Shahar va qishloqni bir-biriga qarama-qarshi qo'ymaslik, balki teng hayot sharoitlarini yaratish kerak.",
        "B) Davlat subsidiyalari kelajakda faqat megapolislarga yo'naltirilishi lozim.",
        "C) Ellik yildan keyin Germaniyada qishloqlar qolmaydi."
      ],
      ans: 'A',
      expl: "Shahar va qishloq o'zaro bog'liq bo'lib, teng hayot sharoitlarini (gleichwertige Lebensverhältnisse) ta'minlash siyosatning vazifasidir."
    }
  ]
};

export const HV2_PFLANZEN_FULL = {
  title: 'Die geheime Sprache und Wahrnehmung der Pflanzen',
  uzbekIntro: "O'simliklarning sezish qobiliyati, kimyoviy signallar orqali muloqoti va himoya mexanizmlari haqida biolog bilan radio-intervyu (55–64-savollar).",
  questions: [
    {
      id: 55,
      q: 'Welche traditionelle Sichtweise auf Pflanzen wird durch neue Forschungen widerlegt?',
      uz: 'O‘simliklar haqidagi qaysi an’anaviy qarash yangi tadqiqotlar orqali rad etilmoqda?',
      opts: [
        'A) Dass Pflanzen völlig passive Organismen sind, die nicht auf ihre Umwelt reagieren können.',
        'B) Dass Pflanzen für die Photosynthese Sonnenlicht benötigen.',
        'C) Dass Bäume über Wurzeln Wasser aufnehmen.'
      ],
      optsUz: [
        "A) O'simliklar atrof-muhitga ta'sir ko'rsata olmaydigan mutlaqo passiv organizmlar degan qarash.",
        "B) O'simliklarga fotosintez uchun quyosh nuri kerakligi.",
        "C) Daraxtlar ildiz orqali suv olishi."
      ],
      ans: 'A',
      expl: "O'simliklar passiv emas, balki 20 га yaqin turli fizik va kimyoviy ta'sirlarni faol sezadi."
    },
    {
      id: 56,
      q: 'Wie warnen viele Pflanzen ihre Nachbarn vor gefräßigen Insekten?',
      uz: 'Ko‘plab o‘simliklar qo‘shni o‘simliklarni ochofat hasharotlardan qanday ogohlantiradi?',
      opts: [
        'A) Über flüchtige chemische Duftstoffe in der Luft und über unterirdische Pilznetzwerke.',
        'B) Durch sichtbare Farbveränderungen ihrer Rinde innerhalb von Sekunden.',
        'C) Durch laute akustische Warnsignale.'
      ],
      optsUz: [
        "A) Havodagi uchuvchan kimyoviy hid moddalari va yer osti zamburug' tarmoqlari orqali.",
        "B) Bir necha soniya ichida po'stlog'i rangini o'zgartirish orqali.",
        "C) Baland tovushli ogohlantirish signallari orqali."
      ],
      ans: 'A',
      expl: "Zararkunanda hujum qilganda o'simlik havoga uchuvchan moddalar chiqaradi va yer osti mikoriza tarmog'i orqali signal yuboradi."
    },
    {
      id: 57,
      q: 'Wie reagieren benachbarte Pflanzen auf solche Warnsignale?',
      uz: 'Qo‘shni o‘simliklar bunday ogohlantirish signallariga qanday javob qaytaradi?',
      opts: [
        'A) Sie produzieren vorsorglich Bitterstoffe oder Gifte in ihren Blättern, um Fressfeinde abzuwehren.',
        'B) Sie werfen sofort sämtliche Blätter ab.',
        'C) Sie stellen ihr Wachstum für mehrere Jahre ein.'
      ],
      optsUz: [
        "A) Ular zararkunandalarni qaytarish uchun barglarida oldindan achchiq yoki zaharli moddalar ishlab chiqaradi.",
        "B) Ular darhol barcha barglarini to'kib yuboradi.",
        "C) Ular o'sishni bir necha yilga to'xtatadi."
      ],
      ans: 'A',
      expl: "Ogohlantirilgan o'simliklar hali hasharot yetib kelmasidan barglarida himoya toksinlarini sintez qila boshlaydi."
    },
    {
      id: 58,
      q: 'Auf welche besonders raffinierte Weise wehrt sich zum Beispiel die Maispflanze gegen Raupen?',
      uz: 'Masalan, makkajo‘xori o‘simligi qurtlarga qarshi qanday ayyorona usulda himoyalanadi?',
      opts: [
        'A) Sie verströmt Duftstoffe, die gezielt Schlupfwespen anlocken, also die natürlichen Feinde der Raupen.',
        'B) Sie schließt ihre Blätter wie eine Venusfliegenfalle.',
        'C) Sie speichert heißes Wasser in ihren Stängeln.'
      ],
      optsUz: [
        "A) U qurtlarning tabiiy dushmani bo'lgan yaydoqchi arilarni (Schlupfwespen) jalb qiluvchi hid tarqatadi.",
        "B) U barglarini venera pashshatutari kabi yopib oladi.",
        "C) U poyasida qaynoq suv to'playdi."
      ],
      ans: 'A',
      expl: "Makkajo'xori qurt so'lagini tanib, aynan shu qurtlarning dushmani bo'lgan yirtqich hasharotlarni chaqiruvchi hid chiqaradi."
    },
    {
      id: 59,
      q: 'Welche Rolle spielen Pilze im sogenannten „Wood Wide Web“ des Waldes?',
      uz: 'O‘rmonning «Wood Wide Web» tarmog‘ida zamburug‘lar qanday rol o‘ynaydi?',
      opts: [
        'A) Ihre feinen Fäden verbinden Baumwurzeln miteinander und tauschen Nährstoffe sowie Informationen aus.',
        'B) Sie zerstören systematisch alle gesunden Baumwurzeln.',
        'C) Sie verhindern jeglichen Kontakt zwischen benachbarten Bäumen.'
      ],
      optsUz: [
        "A) Ularning ingichka tolalari daraxt ildizlarini o'zaro bog'lab, ozuqa moddalari va axborot almashadi.",
        "B) Ular barcha sog'lom daraxt ildizlarini muntazam ravishdaemiradi.",
        "C) Ular qo'shni daraxtlar o'rtasidagi har qanday aloqani to'sib qo'yadi."
      ],
      ans: 'A',
      expl: "Mikoriza zamburug'lari daraxt ildizlari bilan simbioz hosil qilib, uglerod, suv va ogohlantirish signallarini uzatadi."
    },
    {
      id: 60,
      q: 'Wie verhalten sich große „Mutterbäume“ gegenüber jungen Setzlingen der eigenen Art?',
      uz: 'Katta «ona daraxtlar» o‘z turiga mansub yosh nihollarga qanday munosabatda bo‘ladi?',
      opts: [
        'A) Sie versorgen den Nachwuchs im schattigen Unterholz über das Wurzelnetz mit Zucker und Kohlenstoff.',
        'B) Sie entziehen den jungen Bäumen absichtlich das gesamte Wasser.',
        'C) Sie erkennen verwandte Pflanzen überhaupt nicht.'
      ],
      optsUz: [
        "A) Ular soyada o'sayotgan yosh nihollarni ildiz tarmog'i orqali shakar va uglerod bilan ta'minlaydi.",
        "B) Ular yosh daraxtlardan ataylab barcha suvni tortib oladi.",
        "C) Ular qarindosh o'simliklarni umuman tanimaydi."
      ],
      ans: 'A',
      expl: "Tajribalar katta daraxtlar o'z nihollarini tanishini va ularga ildiz tarmog'i orqali ozuqa yuborishini ko'rsatgan."
    },
    {
      id: 61,
      q: 'Was ergaben Experimente mit der Mimose zum Thema „Lernen und Gedächtnis“?',
      uz: 'Mimoza o‘simligi bilan «o‘rganish va xotira» mavzusida o‘tkazilgan tajribalar nimani ko‘rsatdi?',
      opts: [
        'A) Die Pflanze lernte, harmlose Wassertropfen zu ignorieren, und behielt diese Information wochenlang.',
        'B) Die Pflanze vergaß jede Erfahrung bereits nach zwei Sekunden.',
        'C) Die Mimose ging durch die Wassertropfen sofort ein.'
      ],
      optsUz: [
        "A) O'simlik xavfsiz suv tomchilariga e'tibor bermaslikni o'rgandi va bu ma'lumotni haftalar davomida eslab qoldi.",
        "B) O'simlik har qanday tajribani ikki soniyadan keyinoq unutdi.",
        "C) Mimoza suv tomchilaridan darhol qurib qoldi."
      ],
      ans: 'A',
      expl: "Monika Galyano tajribasida mimoza zararsiz tomchilarga barglarini yopmaslikni o'rgangan va buni 4 haftadan ko'p eslab qolgan."
    },
    {
      id: 62,
      q: 'Warum lehnen viele klassische Botaniker den Begriff „Pflanzenneurobiologie“ ab?',
      uz: 'Nima uchun ko‘plab klassik botaniklar «o‘simliklar neyrobiologiyasi» atamasini rad etishadi?',
      opts: [
        'A) Weil Pflanzen weder ein zentrales Gehirn noch Nervenzellen oder Synapsen besitzen.',
        'B) Weil Pflanzen keine elektrischen Signale weiterleiten können.',
        'C) Weil die Erforschung von Pflanzen gesetzlich verboten ist.'
      ],
      optsUz: [
        "A) Chunki o'simliklarda markaziy miya ham, nerv hujayralari (neyronlar) yoki sinapslar ham yo'q.",
        "B) Chunki o'simliklar elektr signallarini uzata olmaydi.",
        "C) Chunki o'simliklarni tadqiq qilish qonunan taqiqlangan."
      ],
      ans: 'A',
      expl: "O'simliklarda elektr impulslari bo'lsa-da, ularda neyron va miya yo'qligi sababli «neyrobiologiya» so'zi bahsli hisoblanadi."
    },
    {
      id: 63,
      q: 'Welchen praktischen Nutzen könnten diese Erkenntnisse für die Landwirtschaft haben?',
      uz: 'Ushbu ilmiy xulosalar qishloq xo‘jaligi uchun qanday amaliy foyda berishi mumkin?',
      opts: [
        'A) Durch natürliche Duftstoffe könnte man die eigenen Abwehrkräfte von Nutzpflanzen aktivieren und Pestizide einsparen.',
        'B) Man könnte ganz auf das Gießen von Feldern verzichten.',
        'C) Man müsste dreimal so viele chemische Insektengifte einsetzen.'
      ],
      optsUz: [
        "A) Tabiiy hid moddalari yordamida ekinlarning shaxsiy himoya kuchini faollashtirish va pestitsidlarni kamaytirish mumkin.",
        "B) Dalalarni sug'orishdan butunlay voz kechish mumkin bo'lardi.",
        "C) Kimyoviy hasharot dorilarini uch baravar ko'p ishlatishga to'g'ri kelardi."
      ],
      ans: 'A',
      expl: "O'simliklarning tabiiy mudofaa signallaridan foydalanish kimyoviy pestitsidlarga bo'lgan ehtiyojni keskin kamaytiradi."
    },
    {
      id: 64,
      q: 'Welches Fazit zieht der Experte für unseren Umgang mit der Natur?',
      uz: 'Ekspert tabiatga bo‘lgan munosabatimiz bo‘yicha qanday xulosa chiqaradi?',
      opts: [
        'A) Wir sollten Pflanzen als komplexe, empfindsame Lebewesen mit größerem Respekt behandeln.',
        'B) Wir sollten keine pflanzlichen Lebensmittel mehr essen.',
        'C) Wälder sollten vollständig durch Monokulturen ersetzt werden.'
      ],
      optsUz: [
        "A) Biz o'simliklarga murakkab, sezgir tirik mavjudotlar sifatida katta hurmat bilan munosabatda bo'lishimiz kerak.",
        "B) Biz endi o'simlik mahsulotlarini iste'mol qilmasligimiz kerak.",
        "C) O'rmonlar to'liq monokulturalar bilan almashtirilishi lozim."
      ],
      ans: 'A',
      expl: "O'simliklarning murakkab hayotini tushunish tabiat va o'rmon ekotizimlarini asrashga undaydi."
    }
  ]
};

export const HV2_BERUFSWECHSEL = {
  title: 'Berufliche Neuorientierung und Quereinstieg (Dr. Dahlbeck)',
  uzbekIntro: "Karyera maslahatchisi doktor Dalbek bilan katta yoshda kasbni o'zgartirish (Berufswechsel) sabablari, qo'rquvlar va muvaffaqiyat shartlari haqida intervyu (55–64-savollar).",
  questions: [
    {
      id: 55,
      q: 'Wie hat sich die Einstellung zum Berufswechsel laut Dr. Dahlbeck verändert?',
      uz: 'Doktor Dalbekning so‘zlariga ko‘ra, kasbni o‘zgartirishga bo‘lgan munosabat qanday o‘zgardi?',
      opts: [
        'A) Ein Berufswechsel gilt heute nicht mehr als Makel, sondern als Zeichen von Flexibilität.',
        'B) Personalchefs bevorzugen nach wie vor Bewerber, die nie die Firma gewechselt haben.',
        'C) Nur junge Menschen unter dreißig wagen heute noch einen Neuanfang.'
      ],
      optsUz: [
        "A) Kasbni o'zgartirish bugun kamchilik emas, balki moslashuvchanlik belgisi hisoblanadi.",
        "B) Kadrlar bo'limi boshliqlari hali ham hech qachon ish joyini o'zgartirmagan nomzodlarni afzal ko'radi.",
        "C) Bugungi kunda faqat 30 yoshgacha bo'lganlargina yangi kasb boshlashga jur'at etadi."
      ],
      ans: 'A',
      expl: "Bugungi mehnat bozorida kasbni o'zgartirish salbiy holat emas, balki moslashuvchanlik va o'rganishga tayyorlik sifatida baholanadi."
    },
    {
      id: 56,
      q: 'Was ist der häufigste Auslöser für den Wunsch nach einer beruflichen Neuorientierung?',
      uz: 'Kasbiy yo‘nalishni o‘zgartirish istagiga eng ko‘p nima sabab bo‘ladi?',
      opts: [
        'A) Der Verlust des Arbeitsplatzes durch Insolvenz.',
        'B) Das Gefühl fehlender Sinnhaftigkeit und mangelnder Wertschätzung im alten Job.',
        'C) Der Wunsch nach einem kürzeren Arbeitsweg.'
      ],
      optsUz: [
        "A) Korxona bankrotligi sababli ish joyini yo'qotish.",
        "B) Eski ishda ma'no yo'qligi va mehnat qadrlanmasligi hissi.",
        "C) Ishga borish yo'lini qisqartirish istagi."
      ],
      ans: 'B',
      expl: "Ko'pchilik maoshdan ko'ra o'z ishida ma'no (Sinnhaftigkeit) va qadrlanish yetishmasligi sababli kasbini o'zgartiradi."
    },
    {
      id: 57,
      q: 'Welchen Fehler machen viele Menschen bei der Entscheidung für einen neuen Beruf?',
      uz: 'Yangi kasbga o‘tish qarorini qabul qilishda ko‘pchilik qanday xatoga yo‘l qo‘yadi?',
      opts: [
        'A) Sie kündigen vorschnell aus Frust, ohne einen konkreten Plan zu haben.',
        'B) Sie informieren sich zu ausführlich über Weiterbildungsangebote.',
        'C) Sie sprechen zu früh mit ihrer Familie darüber.'
      ],
      optsUz: [
        "A) Ular aniq rejaga ega bo'lmasdan, jahl ustida shoshma-shosharlik bilan ishdan bo'shaydi.",
        "B) Ular malaka oshirish kurslari haqida haddan ortiq ko'p ma'lumot yig'adi.",
        "C) Ular bu haqda oilasi bilan juda erta gaplashadi."
      ],
      ans: 'A',
      expl: "Aniq reja va moliyaviy zaxirasiz, hissiyotga berilib ishdan bo'shash eng katta xatodir."
    },
    {
      id: 58,
      q: 'Warum haben selbst erfolgreiche Manager oft Angst vor einem Wechsel?',
      uz: 'Nima uchun hatto muvaffaqiyatli menejerlar ham kasbini o‘zgartirishdan qo‘rqishadi?',
      opts: [
        'A) Weil sie fürchten, ihren sozialen Status und ihre finanzielle Sicherheit zu verlieren.',
        'B) Weil ihnen jegliche Fachkenntnisse fehlen.',
        'C) Weil ihre Arbeitsverträge eine Kündigung verbieten.'
      ],
      optsUz: [
        "A) Chunki ular ijtimoiy mavqei va moliyaviy xavfsizligini yo'qotishdan qo'rqishadi.",
        "B) Chunki ularda mutaxassislik bilimlari umuman yo'q.",
        "C) Chunki ularning mehnat shartnomasi ishdan bo'shashni taqiqlaydi."
      ],
      ans: 'A',
      expl: "Yuqori maosh va obro'ga o'rgangan rahbarlar «oltin qafas» (goldener Käfig) va mavqe yo'qotishdan qo'rqishadi."
    },
    {
      id: 59,
      q: 'Welche Rolle spielt das Lebensalter beim Quereinstieg?',
      uz: 'Boshqa sohaga o‘tishda (Quereinstieg) yosh qanday rol o‘ynaydi?',
      opts: [
        'A) Ab 40 Jahren ist ein Wechsel auf dem deutschen Arbeitsmarkt unmöglich.',
        'B) Dank des Fachkräftemangels haben auch Erfahrene über 45 heute gute Chancen.',
        'C) Ältere Bewerber müssen immer ein komplettes Zweitstudium absolvieren.'
      ],
      optsUz: [
        "A) 40 yoshdan keyin Germaniya mehnat bozorida sohani o'zgartirish imkonsiz.",
        "B) Malakali kadrlar yetishmovchiligi tufayli 45 yoshdan oshgan tajribali mutaxassislarda ham yaxshi imkoniyat bor.",
        "C) Yoshi katta nomzodlar har doim ikkinchi oliy ta'limni to'liq o'qishi shart."
      ],
      ans: 'B',
      expl: "Demografik o'zgarish va kadrlar tanqisligi tufayli 45–50 yoshdagilarning hayotiy va kasbiy tajribasi yuqori baholanmoqda."
    },
    {
      id: 60,
      q: 'Wie sollte man den Übergang in ein neues Berufsfeld am besten gestalten?',
      uz: 'Yangi kasb sohasiga o‘tishni qanday tashkil etgan ma’qul?',
      opts: [
        'A) Schrittweise durch Praktika, Hospitationen oder nebenberufliche Weiterbildung.',
        'B) Indem man sofort einen hohen Kredit für eine eigene Firma aufnimmt.',
        'C) Indem man im Lebenslauf frühere Tätigkeiten verschweigt.'
      ],
      optsUz: [
        "A) Amaliyot, kuzatuv (Hospitation) yoki ishdan ajralmagan holda malaka oshirish orqali bosqichma-bosqich.",
        "B) Shaxsiy firma uchun darhol katta kredit olish orqali.",
        "C) Rezyumeda oldingi ish joylarini yashirish orqali."
      ],
      ans: 'A',
      expl: "Yangi sohani avval qisqa amaliyot, suhbatlar yoki kechki kurslar orqali sinab ko'rish tavsiya etiladi."
    },
    {
      id: 61,
      q: 'Was versteht Dr. Dahlbeck unter „übertragbaren Kompetenzen“?',
      uz: 'Doktor Dalbek «ko‘chiriladigan kompetensiyalar» (übertragbare Kompetenzen) deganda nimani tushunadi?',
      opts: [
        'A) Fähigkeiten wie Verhandlungsgeschick oder Organisationstalent, die in vielen Branchen nützlich sind.',
        'B) Staatlich anerkannte Sprachzertifikate.',
        'C) Programmierkenntnisse aus der Informatik.'
      ],
      optsUz: [
        "A) Muzokara olib borish yoki tashkilotchilik kabi ko'plab sohalarda qo'l keladigan qobiliyatlar.",
        "B) Davlat tomonidan tan olingan til sertifikatlari.",
        "C) Informatika sohasidagi dasturlash bilimlari."
      ],
      ans: 'A',
      expl: "Loyihalarni boshqarish, muloqot va tashkilotchilik ko'nikmalari har qanday yangi sohada foyda beradi."
    },
    {
      id: 62,
      q: 'Wie reagieren Familie und Freundeskreis oft auf den Wunsch nach Veränderung?',
      uz: 'Oila va do‘stlar davrasi o‘zgarish istagiga ko‘pincha qanday munosabat bildiradi?',
      opts: [
        'A) Sie übertragen ihre eigenen Sicherheitsbedürfnisse und raten häufig zur Vorsicht.',
        'B) Sie drängen fast immer zu einer sofortigen Kündigung.',
        'C) Sie interessieren sich grundsätzlich nicht für berufliche Fragen.'
      ],
      optsUz: [
        "A) Ular o'zlarining xavfsizlik xavotirlarini o'tkazib, ko'pincha ehtiyot bo'lishni maslahat berishadi.",
        "B) Ular deyarli har doim darhol ishdan bo'shashga undashadi.",
        "C) Ular kasbiy masalalarga umuman qiziqishmaydi."
      ],
      ans: 'A',
      expl: "Yaqinlar yaxshi niyatda bo'lsa-da, o'z qo'rquvlari tufayli barqaror ishni tashlamaslikka undashadi."
    },
    {
      id: 63,
      q: 'Wann ist laut dem Experten professionelle Karriereberatung sinnvoll?',
      uz: 'Ekspertning fikricha, qachon professional karyera maslahati foydali bo‘ladi?',
      opts: [
        'A) Wenn man zwar unzufrieden ist, aber die eigenen Stärken und Ziele noch nicht klar benennen kann.',
        'B) Erst nachdem man bereits den neuen Arbeitsvertrag unterschrieben hat.',
        'C) Nur für Hochschulabsolventen ohne Berufserfahrung.'
      ],
      optsUz: [
        "A) Inson ishidan norozi bo'lsa-da, o'z kuchli tomonlari va maqsadlarini hali aniq bilmaganda.",
        "B) Faqat yangi mehnat shartnomasini imzolagandan keyin.",
        "C) Faqat ish tajribasiga ega bo'lmagan universitet bitiruvchilari uchun."
      ],
      ans: 'A',
      expl: "Kouching va maslahat o'z qobiliyatlarini tahlil qilish va yashirin qiziqishlarni aniqlashda yordam beradi."
    },
    {
      id: 64,
      q: 'Welches Fazit zieht Dr. Dahlbeck über Menschen, die den Wechsel gewagt haben?',
      uz: 'Doktor Dalbek kasbini o‘zgartirishga jur’at etgan insonlar haqida qanday xulosa qiladi?',
      opts: [
        'A) Die meisten bereuen den Schritt schon nach wenigen Monaten.',
        'B) Selbst bei geringerem Gehalt berichten fast alle von deutlich höherer Lebenszufriedenheit.',
        'C) Sie kehren in der Regel nach zwei Jahren zu ihrem alten Arbeitgeber zurück.'
      ],
      optsUz: [
        "A) Ko'pchilik bir necha oydan keyinoq bu qadamidan afsuslanadi.",
        "B) Hatto maoshi kamaygan taqdirda ham, deyarli barcha hayotdan ancha mamnun ekanini aytadi.",
        "C) Ular odatda ikki yildan so'ng eski ish beruvchisiga qaytib boradi."
      ],
      ans: 'B',
      expl: "Yangi kasbga o'tganlarning aksariyati kamroq daromad olsa ham, hayotdan va ishdan ancha baxtliroq ekanini ta'kidlaydi."
    }
  ]
};

export const HV2_MODE = {
  title: 'Fast Fashion und nachhaltiger Kleiderkonsum',
  uzbekIntro: "To'qimachilik sanoatidagi «Fast Fashion» (tezkor moda) muammolari, ekologik zarar va barqaror kiyim tanlash haqida ekspert bilan intervyu (55–64-savollar).",
  questions: [
    {
      id: 55,
      q: 'Was versteht man unter dem Begriff „Fast Fashion“?',
      uz: '«Fast Fashion» (tezkor moda) tushunchasi ostida nima tushuniladi?',
      opts: [
        'A) Hochwertige Maßkleidung, die per Expressversand geliefert wird.',
        'B) Extrem billig produzierte Kleidung, die in immer kürzeren Abständen in die Läden kommt.',
        'C) Funktionskleidung für den professionellen Laufsport.'
      ],
      optsUz: [
        "A) Ekspress pochta orqali yetkazib beriladigan yuqori sifatli buyurtma kiyimlar.",
        "B) Juda arzon ishlab chiqariladigan va do'konlarga tobora qisqa vaqt oralig'ida chiqariladigan kiyimlar.",
        "C) Professional yugurish sporti uchun maxsus kiyimlar."
      ],
      ans: 'B',
      expl: "Fast Fashion — yiliga 2 ta emas, balki 20–50 ta kolleksiya chiqarib, arzon kiyimlarni tez sotish tizimidir."
    },
    {
      id: 56,
      q: 'Wie hat sich das Kaufverhalten der Konsumenten in den letzten Jahrzehnten verändert?',
      uz: 'So‘nggi o‘n yilliklarda iste’molchilarning xarid xulq-atvori qanday o‘zgardi?',
      opts: [
        'A) Die Menschen kaufen viel mehr Kleidungsstücke, tragen jedes einzelne aber deutlich kürzer.',
        'B) Die Ausgaben für Kleidung machen heute den größten Teil des Haushaltseinkommens aus.',
        'C) Kleidung wird heute häufiger selbst genäht und geflickt.'
      ],
      optsUz: [
        "A) Odamlar ancha ko'p kiyim sotib olmoqda, ammo har birini ancha qisqa muddat kiymoqda.",
        "B) Kiyim-kechak xarajatlari bugun oila daromadining eng katta qismini tashkil etadi.",
        "C) Bugungi kunda kiyimlar ko'proq uyda tikilmoqda va yamab kiyilmoqda."
      ],
      ans: 'A',
      expl: "Har bir xaridor yiliga o'rtacha 60 ta yangi kiyim oladi, biroq ularni avvalgidan ikki baravar kam vaqt kiyadi."
    },
    {
      id: 57,
      q: 'Welches ökologische Problem verursacht die Textilindustrie laut dem Interview vor allem?',
      uz: 'Intervyuga ko‘ra, to‘qimachilik sanoati avvalo qanday ekologik muammoni keltirib chiqaradi?',
      opts: [
        'A) Einen enormen Wasserverbrauch sowie die Verschmutzung von Flüssen durch giftige Chemikalien.',
        'B) Das Aussterben von Seidenraupen in Asien.',
        'C) Die Abholzung europäischer Nadelwälder.'
      ],
      optsUz: [
        "A) Ulkan suv sarfi hamda daryolarning zaharli kimyoviy moddalar bilan ifloslanishi.",
        "B) Osiyoda ipak qurtlarining qirilib ketishi.",
        "C) Yevropa ignabargli o'rmonlarining kesilib ketishi."
      ],
      ans: 'A',
      expl: "Paxta yetishtirish va matolarni bo'yash uchun juda ko'p suv sarflanadi va zaharli bo'yoqlar daryolarga oqiziladi."
    },
    {
      id: 58,
      q: 'Welche negativen Folgen haben synthetische Fasern wie Polyester?',
      uz: 'Poliester kabi sintetik tolalarning qanday salbiy oqibatlari bor?',
      opts: [
        'A) Sie lösen sich beim ersten Regen vollständig auf.',
        'B) Beim Waschen gelangt Mikroplastik ins Abwasser und schließlich in die Weltmeere.',
        'C) Sie lassen sich überhaupt nicht einfärben.'
      ],
      optsUz: [
        "A) Ular birinchi yomg'irdayoq erib ketadi.",
        "B) Yuvish paytida mikroplastik oqova suvga va oxir-oqibat dunyo okeaniga tushadi.",
        "C) Ularni umuman bo'yab bo'lmaydi."
      ],
      ans: 'B',
      expl: "Sintetik kiyimlarni kir yuvish mashinasida har safar yuvganda minglab mikroplastik zarralari suvga chiqadi."
    },
    {
      id: 59,
      q: 'Wie sieht die Situation der Näherinnen in vielen Produktionsländern aus?',
      uz: 'Ko‘plab ishlab chiqaruvchi mamlakatlarda tikuvchi ayollarning ahvoli qanday?',
      opts: [
        'A) Sie profitieren direkt von den steigenden Gewinnen der Modekonzerne.',
        'B) Sie arbeiten oft zu Löhnen, die kaum zum Leben reichen, in unsicheren Fabriken.',
        'C) Sie haben maximal eine 30-Stunden-Woche.'
      ],
      optsUz: [
        "A) Ular moda konsernlarining o'sib borayotgan foydasidan bevosita ulush oladi.",
        "B) Ular ko'pincha yashashga zo'rg'a yetadigan maosh evaziga xavfli fabrikalarda ishlaydi.",
        "C) Ular haftasiga ko'pi bilan 30 soat ishlaydi."
      ],
      ans: 'B',
      expl: "Tikuvchilarning ish haqi kiyim narxining 1 foiziga ham yetmaydi va mehnat xavfsizligi juda past."
    },
    {
      id: 60,
      q: 'Warum kaufen viele Menschen trotz ihres Wissens um diese Missstände weiter billige Mode?',
      uz: 'Nima uchun ko‘pchilik ushbu muammolarni bilsa ham arzon kiyim sotib olishda davom etmoqda?',
      opts: [
        'A) Weil es in Deutschland keine nachhaltigen Modemarken gibt.',
        'B) Wegen aggressiver Rabattaktionen, Influencer-Werbung und der psychologischen Verlockung von Schnäppchen.',
        'C) Weil faire Kleidung gesetzlich verboten ist.'
      ],
      optsUz: [
        "A) Chunki Germaniyada barqaror moda brendlari yo'q.",
        "B) Agressiv chegirmalar, inflyuenserlar reklamasi va arzon xaridning psixologik ohanrabosi tufayli.",
        "C) Chunki adolatli ishlab chiqarilgan kiyimlar qonunan taqiqlangan."
      ],
      ans: 'B',
      expl: "Ijtimoiy tarmoqlardagi reklama va chegirmalar (Schnäppchen) odamlarda impulsiv xarid hissini uyg'otadi."
    },
    {
      id: 61,
      q: 'Was geschieht mit einem großen Teil der Altkleider und unverkauften Neuware?',
      uz: 'Eski kiyimlar va sotilmay qolgan yangi tovarlarning katta qismi nima bo‘ladi?',
      opts: [
        'A) Sie werden fast vollständig zu neuen Luxushemden recycelt.',
        'B) Sie landen auf riesigen Müllkippen im Globalen Süden oder werden verbrannt.',
        'C) Sie werden in Museen ausgestellt.'
      ],
      optsUz: [
        "A) Ular deyarli to'liq yangi hashamatli ko'ylaklarga qayta ishlanadi.",
        "B) Ular Global Janubdagi ulkan chiqindixonalarga tashlanadi yoki yoqib yuboriladi.",
        "C) Ular muzeylarda namoyish etiladi."
      ],
      ans: 'B',
      expl: "Arzon aralash tolali matolarni qayta ishlash qiyin bo'lgani uchun ularning katta qismi yoqiladi yoki Afrika/Janubiy Amerika chiqindixonalariga yuboriladi."
    },
    {
      id: 62,
      q: 'Worauf sollte man beim Kauf nachhaltiger Kleidung achten?',
      uz: 'Barqaror (ekologik) kiyim xarid qilishda nimaga e’tibor berish kerak?',
      opts: [
        'A) Auf strenge, unabhängige Textilsiegel wie GOTS oder den Grünen Knopf.',
        'B) Darauf, dass das Kleidungsstück möglichst viele verschiedene Kunstfasern enthält.',
        'C) Nur auf grüne Werbesprüche der Hersteller.'
      ],
      optsUz: [
        "A) GOTS yoki «Grüner Knopf» kabi qat'iy, mustaqil to'qimachilik sertifikatlariga.",
        "B) Kiyim tarkibida imkon qadar ko'p turli sun'iy tolalar bo'lishiga.",
        "C) Faqat ishlab chiqaruvchilarning «yashil» reklama shiorlariga."
      ],
      ans: 'A',
      expl: "Greenwashingga aldanib qolmaslik uchun GOTS va Grüner Knopf kabi mustaqil ekologik va ijtimoiy sertifikatlarga qarash lozim."
    },
    {
      id: 63,
      q: 'Welche alternativen Trends gewinnen gerade bei jungen Leuten an Beliebtheit?',
      uz: 'Aynan yoshlar orasida qanday muqobil trendlar ommalashmoqda?',
      opts: [
        'A) Secondhand-Läden, Kleidertauschpartys und das Ausleihen von Mode.',
        'B) Das tägliche Wegwerfen getragener Kleidung.',
        'C) Das Tragen einheitlicher Schuluniformen in der Freizeit.'
      ],
      optsUz: [
        "A) Secondhand do'konlar, kiyim almashish kechalari va kiyimlarni ijaraga olish.",
        "B) Kiyilgan kiyimlarni har kuni tashlab yuborish.",
        "C) Bo'sh vaqtda bir xil maktab formasini kiyish."
      ],
      ans: 'A',
      expl: "Secondhand platformalar, Vintage moda va kiyim almashish (Swapping) yoshlar orasida juda urfga kirmoqda."
    },
    {
      id: 64,
      q: 'Was fordert die Expertin von der Politik?',
      uz: 'Ekspert siyosatchilardan nimani talab qiladi?',
      opts: [
        'A) Strengere Lieferkettengesetze, die Unternehmen für Umwelt- und Arbeitsstandards haftbar machen.',
        'B) Ein komplettes Verbot von Baumwollkleidung.',
        'C) Staatliche Subventionen für Fast-Fashion-Ketten.'
      ],
      optsUz: [
        "A) Korxonalarni ekologik va mehnat standartlari uchun javobgar qiluvchi qat'iy yetkazib berish zanjiri qonunlarini.",
        "B) Paxtadan tikilgan kiyimlarni butunlay taqiqlashni.",
        "C) Fast-Fashion tarmoqlari uchun davlat subsidiyalarini."
      ],
      ans: 'A',
      expl: "Faqat iste'molchi mas'uliyati yetarli emas, kompaniyalarni majbur qiluvchi qat'iy qonunlar (Lieferkettengesetz) zarur."
    }
  ]
};

export const HV2_FAHRRAD = {
  title: 'Radverkehr und urbane Mobilität (Dr. Julia Henzel)',
  uzbekIntro: "Transport tadqiqotchisi doktor Yuliya Xensel bilan shaharlarda velosiped infratuzilmasini rivojlantirish va barqaror mobillik haqida intervyu (55–64-savollar).",
  questions: [
    {
      id: 55,
      q: 'Wie entwickelt sich der Radverkehr in deutschen Städten laut Dr. Julia Henzel?',
      uz: 'Doktor Yuliya Xenselning so‘zlariga ko‘ra, Germaniya shaharlarida velosiped harakati qanday rivojlanmoqda?',
      opts: [
        'A) Immer mehr Menschen steigen im Alltag auf das Fahrrad oder E-Bike um.',
        'B) Das Fahrrad wird fast nur noch am Wochenende für Ausflüge genutzt.',
        'C) Die Zahl der Radfahrer geht seit fünf Jahren kontinuierlich zurück.'
      ],
      optsUz: [
        "A) Kundalik hayotda tobora ko'proq odamlar velosiped yoki elektrovelosipedga o'tmoqda.",
        "B) Velosipeddan deyarli faqat dam olish kunlari sayr uchun foydalanilmoqda.",
        "C) Velosipedchilar soni besh yildan beri uzluksiz kamayib bormoqda."
      ],
      ans: 'A',
      expl: "Shaharlarda kundalik qatnov uchun velosiped va E-Bikedan foydalanuvchilar soni sezilarli darajada oshmoqda."
    },
    {
      id: 56,
      q: 'Was hält derzeit noch viele Bürger davon ab, regelmäßig mit dem Rad zur Arbeit zu fahren?',
      uz: 'Hozirda ko‘plab fuqarolarni ishga muntazam velosipedda borishdan nima to‘xtatib turibdi?',
      opts: [
        'A) Der hohe Anschaffungspreis für Fahrradhelme.',
        'B) Die Angst vor Unfällen durch fehlende oder unsichere Radwege.',
        'C) Ein Mangel an Fahrradgeschäften.'
      ],
      optsUz: [
        "A) Velosiped shlemlarining qimmatligi.",
        "B) Xavfsiz veloyo'laklar yetishmasligi tufayli avariyalardan qo'rqish.",
        "C) Velosiped do'konlarining yetishmasligi."
      ],
      ans: 'B',
      expl: "Asosiy to'siq — avtomobillar oqimidan ajratilgan xavfsiz veloyo'laklarning yetishmasligi va xavfsizlik hissi pastligidir."
    },
    {
      id: 57,
      q: 'Warum wurden deutsche Städte nach dem Zweiten Weltkrieg vor allem autogerecht geplant?',
      uz: 'Nima uchun Ikkinchi jahon urushidan keyin Germaniya shaharlari asosan avtomobillarga moslab loyihalashtirilgan?',
      opts: [
        'A) Weil das Auto als Symbol für Fortschritt und wirtschaftlichen Aufschwung galt.',
        'B) Weil das Fahrradfahren damals gesetzlich eingeschränkt war.',
        'C) Weil es noch keine Straßenbahnen gab.'
      ],
      optsUz: [
        "A) Chunki avtomobil taraqqiyot va iqtisodiy yuksalish ramzi hisoblangan.",
        "B) Chunki o'sha paytda velosiped haydash qonunan cheklangan edi.",
        "C) Chunki u paytda hali tramvaylar yo'q edi."
      ],
      ans: 'A',
      expl: "1950–60-yillarda «autogerechte Stadt» konsepsiyasi taraqqiyot va farovonlik timsoli sifatida ustuvor bo'lgan."
    },
    {
      id: 58,
      q: 'Was zeichnet Vorreiterstädte wie Kopenhagen oder Utrecht aus?',
      uz: 'Kopengagen yoki Utrext kabi ilg‘or shaharlarni nima ajratib turadi?',
      opts: [
        'A) Dort dürfen Fahrräder nur außerhalb des Stadtzentrums fahren.',
        'B) Breite, baulich getrennte Radwege und eigene Ampelphasen machen das Rad zum schnellsten Verkehrsmittel.',
        'C) Dort gibt es überhaupt keine öffentlichen Busse mehr.'
      ],
      optsUz: [
        "A) U yerda velosipedlar faqat shahar markazidan tashqarida yurishi mumkin.",
        "B) Keng, alohida ajratilgan veloyo'laklar va maxsus svetoforlar velosipedni eng tezkor transportga aylantirgan.",
        "C) U yerda jamoat avtobuslari umuman qolmagan."
      ],
      ans: 'B',
      expl: "Kopengagen va Utrextda uzluksiz, keng va avtomobil yo'lidan ajratilgan infratuzilma yaratilgan."
    },
    {
      id: 59,
      q: 'Welche Bedeutung haben E-Bikes und Lastenräder für die Verkehrswende?',
      uz: 'Elektrovelosipedlar (E-Bikes) va yuk velosipedlari transport islohoti uchun qanday ahamiyatga ega?',
      opts: [
        'A) Sie ermöglichen längere Pendelstrecken und ersetzen im Stadtverkehr oft das Zweitauto.',
        'B) Sie verbrauchen genauso viel Energie wie ein Kleinwagen.',
        'C) Sie sind nur für gewerbliche Paketdienste erlaubt.'
      ],
      optsUz: [
        "A) Ular uzoqroq masofaga qatnash imkonini beradi va shaharda ko'pincha ikkinchi avtomobil o'rnini bosadi.",
        "B) Ular kichik avtomobil bilan bir xil miqdorda energiya sarflaydi.",
        "C) Ularga faqat pochta xizmatlari uchungina ruxsat berilgan."
      ],
      ans: 'A',
      expl: "E-Bike uzoq masofalar va tepaliklarni oson bosib o'tishga, yuk velosipedlari esa xarid va bolalarni tashishga yordam beradi."
    },
    {
      id: 60,
      q: 'Wie beurteilt der Einzelhandel häufig die Einrichtung autofreier Zonen – und was zeigen Studien?',
      uz: 'Chakana savdo do‘konlari avtomobilsiz hududlar tashkil etilishini ko‘pincha qanday baholaydi va tadqiqotlar nimani ko‘rsatadi?',
      opts: [
        'A) Händler befürchten Umsatzverluste, doch Studien belegen, dass Radfahrer und Fußgänger insgesamt mehr einkaufen.',
        'B) Händler fordern sofortige Fahrverbote, weil Radfahrer teurere Luxusgüter kaufen.',
        'C) Studien zeigen, dass alle Geschäfte an Radwegen schließen müssen.'
      ],
      optsUz: [
        "A) Savdogarlar savdo tushib ketishidan qo'rqadi, ammo tadqiqotlar velosipedchi va piyodalar jami ko'proq xarid qilishini isbotlaydi.",
        "B) Savdogarlar darhol avtomobil taqiqini talab qiladi, chunki velosipedchilar qimmatbaho tovarlar oladi.",
        "C) Tadqiqotlar veloyo'lak bo'yidagi barcha do'konlar yopilishini ko'rsatadi."
      ],
      ans: 'A',
      expl: "Do'kon egalari avtoturargohlar kamayishidan xavotir oladi, ammo tadqiqotlar velosipedchilar tez-tez to'xtab, oy davomida ko'proq pul sarflashini ko'rsatgan."
    },
    {
      id: 61,
      q: 'Welchen volkswirtschaftlichen Nutzen bringt die Förderung des Radverkehrs?',
      uz: 'Velosiped harakatini rivojlantirish milliy iqtisodiyotga qanday foyda keltiradi?',
      opts: [
        'A) Durch mehr Bewegung sinken die Krankheitskosten im Gesundheitssystem erheblich.',
        'B) Der Staat nimmt mehr Mineralölsteuer ein.',
        'C) Der Straßenbau benötigt überhaupt kein Geld mehr.'
      ],
      optsUz: [
        "A) Ko'proq jismoniy harakat tufayli sog'liqni saqlash tizimidagi kasallik xarajatlari sezilarli kamayadi.",
        "B) Davlat ko'proq yoqilg'i solig'i yig'adi.",
        "C) Yo'l qurilishiga umuman pul kerak bo'lmay qoladi."
      ],
      ans: 'A',
      expl: "Muntazam velosiped haydash yurak-qon tomir kasalliklarini kamaytirib, sog'liqni saqlash tizimiga milliardlab yevro tejaydi."
    },
    {
      id: 62,
      q: 'Warum kommt es im Straßenverkehr oft zu Konflikten zwischen verschiedenen Verkehrsteilnehmern?',
      uz: 'Nima uchun yo‘l harakatida turli ishtirokchilar o‘rtasida tez-tez nizolar kelib chiqadi?',
      opts: [
        'A) Weil der knappe öffentliche Raum ungleich verteilt ist und gegenseitige Rücksichtnahme fehlt.',
        'B) Weil Radfahrer keine Verkehrsregeln kennen müssen.',
        'C) Weil Fußgänger grundsätzlich auf der Fahrbahn laufen.'
      ],
      optsUz: [
        "A) Chunki cheklangan ko'cha maydoni notekis taqsimlangan va o'zaro hurmat yetishmaydi.",
        "B) Chunki velosipedchilar yo'l qoidalarini bilishi shart emas.",
        "C) Chunki piyodalar doimo avtomobil qatnov qismida yuradi."
      ],
      ans: 'A',
      expl: "Tor ko'chalarda joy tanqisligi va o'zaro e'tibor (Rücksichtnahme) yetishmasligi ziddiyatlarga sabab bo'ladi."
    },
    {
      id: 63,
      q: 'Welche Rolle spielt die Verknüpfung von Fahrrad und öffentlichem Nahverkehr?',
      uz: 'Velosiped va jamoat transportini o‘zaro bog‘lash qanday rol o‘ynaydi?',
      opts: [
        'A) Sichere Fahrradparkhäuser an Bahnhöfen und Leihräder machen die Kombination für Pendler attraktiv.',
        'B) Fahrräder sollten in der Nähe von Bahnhöfen verboten werden.',
        'C) Busse und Bahnen werden durch Fahrräder völlig überflüssig.'
      ],
      optsUz: [
        "A) Vokzallardagi xavfsiz veloturargohlar va ijara velosipedlari ushbu kombinatsiyani qatnovchilar uchun qulay qiladi.",
        "B) Vokzallar yaqinida velosipedlar taqiqlanishi kerak.",
        "C) Avtobus va poyezdlar velosipedlar tufayli butunlay keraksiz bo'lib qoladi."
      ],
      ans: 'A',
      expl: "Uydan vokzalgacha velosipedda kelib, uni xavfsiz veloturargohda qoldirish va poyezdga chiqish eng samarali yechimdir."
    },
    {
      id: 64,
      q: 'Was wünscht sich Dr. Henzel für die Stadtplanung der Zukunft?',
      uz: 'Doktor Xensel kelajakdagi shaharsozlik uchun nimani tilaydi?',
      opts: [
        'A) Mutige politische Entscheidungen für eine gerechtere Flächenverteilung zugunsten nachhaltiger Mobilität.',
        'B) Den Bau weiterer unterirdischer Parkhäuser in den Innenstädten.',
        'C) Eine Rückkehr zur Stadtplanung der 1960er-Jahre.'
      ],
      optsUz: [
        "A) Barqaror harakatlanish foydasiga ko'cha maydonlarini adolatli taqsimlash bo'yicha dadil siyosiy qarorlarni.",
        "B) Shahar markazlarida yana yer osti avtoturargohlari qurilishini.",
        "C) 1960-yillardagi shaharsozlikka qaytishni."
      ],
      ans: 'A',
      expl: "Shaharlarda piyodalar, velosipedchilar va yashil hududlar uchun ko'proq joy ajratishga qaratilgan dadil siyosiy iroda zarur."
    }
  ]
};

export const HV2_NIKLAS = {
  title: 'Das Start-up von Niklas Bosch (Mehrwegsystem für die Gastronomie)',
  uzbekIntro: "Yosh tadbirkor Niklas Bosh bilan universitetda boshlangan ekologik startap (restoranlar uchun ko'p martalik idishlar tizimi) haqida intervyu (55–64-savollar).",
  questions: [
    {
      id: 55,
      q: 'Wie kam Niklas Bosch auf die Idee für sein Start-up?',
      uz: 'Niklas Bosh o‘z startapi g‘oyasiga qanday kelgan?',
      opts: [
        'A) Während seines Studiums ärgerte er sich über die Berge von Einwegbechern und Verpackungsmüll in der Mensa.',
        'B) Er erbte eine Verpackungsfabrik von seinen Großeltern.',
        'C) Ein Professor gab ihm das Thema als Pflichtaufgabe.'
      ],
      optsUz: [
        "A) Talabalik paytida oshxonadagi bir martalik stakanlar va qadoqlash chiqindilari uyumi uni ranjitgan.",
        "B) U bobo-buvisidan qadoqlash fabrikasini meros qilib olgan.",
        "C) Professor unga bu mavzuni majburiy topshiriq sifatida bergan."
      ],
      ans: 'A',
      expl: "Universitet oshxonasi va kafeteriylardagi bir martalik qadoqlash chiqindilari uni qaytariladigan idishlar tizimini yaratishga undagan."
    },
    {
      id: 56,
      q: 'Welche Unterstützung erhielt er in der ersten Phase an der Hochschule?',
      uz: 'Universitetdagi dastlabki bosqichda u qanday ko‘mak oldi?',
      opts: [
        'A) Das Gründerzentrum der Universität stellte ihm Büroräume und Mentoren zur Verfügung.',
        'B) Die Hochschule kaufte sofort alle Firmenanteile auf.',
        'C) Er erhielt keinerlei Unterstützung und musste das Studium abbrechen.'
      ],
      optsUz: [
        "A) Universitetning tadbirkorlik markazi unga ofis xonalari va mentorlar ajratdi.",
        "B) Universitet darhol kompaniyaning barcha aksiyalarini sotib oldi.",
        "C) U hech qanday yordam olmadi va o'qishni tashlashga majbur bo'ldi."
      ],
      ans: 'A',
      expl: "Universitet qoshidagi Gründerzentrum (inkubator) jamoaga bepul ish joyi va tajribali maslahatchilar taqdim etgan."
    },
    {
      id: 57,
      q: 'Wie wurde das Projekt in der Startphase finanziert?',
      uz: 'Loyiha boshlang‘ich bosqichda qanday moliyalashtirildi?',
      opts: [
        'A) Durch ein staatliches Gründerstipendium und eine erfolgreiche Crowdfunding-Kampagne.',
        'B) Ausschließlich durch einen hochverzinsten Bankkredit.',
        'C) Durch den Verkauf einer privaten Immobilie.'
      ],
      optsUz: [
        "A) Davlat ta'sis stipendiyasi va muvaffaqiyatli kraudfanding kampaniyasi orqali.",
        "B) Faqatgina yuqori foizli bank krediti orqali.",
        "C) Shaxsiy ko'chmas mulkni sotish orqali."
      ],
      ans: 'A',
      expl: "EXIST davlat stipendiyasi va kraudfanding platformasidagi qo'llab-quvvatlovchilar dastlabki sarmoyani ta'minlagan."
    },
    {
      id: 58,
      q: 'Worin bestand anfangs die größte praktische Herausforderung?',
      uz: 'Boshida eng katta amaliy qiyinchilik nimadan iborat edi?',
      opts: [
        'A) Gastronomiebetriebe trotz des zusätzlichen Spül- und Logistikaufwands zum Mitmachen zu bewegen.',
        'B) Eine Internetseite für das Unternehmen zu programmieren.',
        'C) Einen Firmennamen zu finden.'
      ],
      optsUz: [
        "A) Umumiy ovqatlanish shoxobchalarini qo'shimcha yuvish va logistika tashvishiga qaramay hamkorlikka ko'ndirish.",
        "B) Kompaniya uchun veb-sayt dasturlash.",
        "C) Kompaniya nomini topish."
      ],
      ans: 'A',
      expl: "Restoran va kafelarni idishlarni qabul qilish va yuvish jarayoni oson ekaniga ishontirish eng qiyin bo'lgan."
    },
    {
      id: 59,
      q: 'Warum verzichtet das Start-up bei seinem Mehrwegsystem auf ein klassisches Bargeldpfand?',
      uz: 'Nima uchun startap ko‘p martalik tizimda odatiy naqd pul garovidan (Pfand) voz kechgan?',
      opts: [
        'A) Weil die Ausleihe per Smartphone-App für Kunden und Cafés im Alltag viel unkomplizierter ist.',
        'B) Weil Bargeld in Deutschland verboten wurde.',
        'C) Weil die Behälter kostenlos verschenkt werden.'
      ],
      optsUz: [
        "A) Chunki smartfon ilovasi orqali olish kundalik hayotda mijozlar va kafelar uchun ancha qulayroq.",
        "B) Chunki Germaniyada naqd pul taqiqlangan.",
        "C) Chunki idishlar bepul tarqatiladi."
      ],
      ans: 'A',
      expl: "Ilova orqali QR-kodni skanerlash naqd pul maydalash va hisob-kitob qilish muammosini bartaraf etadi."
    },
    {
      id: 60,
      q: 'Wie ist die Aufgabenverteilung im Gründerteam organisiert?',
      uz: 'Asoschilar jamoasida vazifalar taqsimoti qanday tashkil etilgan?',
      opts: [
        'A) Die drei Gründer bringen unterschiedliche Fachkompetenzen aus BWL, IT und Design ein.',
        'B) Alle machen gleichzeitig genau dieselben Aufgaben.',
        'C) Niklas Bosch trifft sämtliche Entscheidungen allein.'
      ],
      optsUz: [
        "A) Uchala asoschi iqtisod, IT va dizayn sohalaridan turli mutaxassislik kompetensiyalarini olib kirgan.",
        "B) Hamma bir vaqtda aynan bir xil vazifalarni bajaradi.",
        "C) Niklas Bosh barcha qarorlarni yolg'iz o'zi qabul qiladi."
      ],
      ans: 'A',
      expl: "Jamoaning kuchi shundaki, biri dasturiy ta'minotga, ikkinchisi dizaynga, Niklas esa biznes va sotuvga javob beradi."
    },
    {
      id: 61,
      q: 'Welchen Fehler aus dem ersten Jahr würde Niklas Bosch heute nicht mehr machen?',
      uz: 'Niklas Bosh birinchi yildagi qaysi xatoni bugun takrorlamagan bo‘lardi?',
      opts: [
        'A) Das Produkt monatelang im Geheimen zu perfektionieren, statt früh Kundenfeedback einzuholen.',
        'B) Zu früh mit potenziellen Kunden zu sprechen.',
        'C) Einen Steuerberater zu engagieren.'
      ],
      optsUz: [
        "A) Mijozlar fikrini erta o'rganish o'rniga mahsulotni oylar davomida yashirincha mukammallashtirishga urinish.",
        "B) Potensial mijozlar bilan juda erta gaplashish.",
        "C) Soliq maslahatchisini yollash."
      ],
      ans: 'A',
      expl: "U mahsulotni bozorda tezroq sinab ko'rish va foydalanuvchilar fikrini (Feedback) ertaroq olish kerakligini tushungan."
    },
    {
      id: 62,
      q: 'Was unterscheidet die Arbeit in einem Start-up laut Bosch von einem Großkonzern?',
      uz: 'Boshning so‘zlariga ko‘ra, startapdagi ish yirik konserndagi ishdan nimasi bilan farq qiladi?',
      opts: [
        'A) Kurze Entscheidungswege und große Eigenverantwortung, aber auch weniger finanzielle Sicherheit.',
        'B) Feste Arbeitszeiten von neun bis siebzehn Uhr ohne Überstunden.',
        'C) Höhere Einstiegsgehälter als in der Industrie.'
      ],
      optsUz: [
        "A) Tezkor qarorlar qabul qilish va katta shaxsiy mas'uliyat, ammo kamroq moliyaviy xavfsizlik.",
        "B) Soat 9 dan 17 gacha qo'shimcha ish soatlarisiz qat'iy ish vaqti.",
        "C) Sanoatdagiga qaraganda yuqoriroq boshlang'ich maoshlar."
      ],
      ans: 'A',
      expl: "Startapda byurokratiya yo'q va g'oyalar tez amalga oshadi, biroq moliyaviy barqarorlik kamroq bo'ladi."
    },
    {
      id: 63,
      q: 'Wie hat das neue Verpackungsgesetz das Geschäft des Start-ups beeinflusst?',
      uz: 'Yangi qadoqlash qonuni (Verpackungsgesetz) startap biznesiga qanday ta’sir ko‘rsatdi?',
      opts: [
        'A) Die Pflicht zum Mehrwegangebot bescherte dem Unternehmen einen starken Nachfrageschub.',
        'B) Das Gesetz hat das Geschäftsmodell verboten.',
        'C) Das Gesetz hatte keinerlei Auswirkungen auf die Gastronomie.'
      ],
      optsUz: [
        "A) Ko'p martalik idish taklif etish majburiyati kompaniya xizmatlariga talabni keskin oshirdi.",
        "B) Qonun ushbu biznes modelni taqiqlab qo'ydi.",
        "C) Qonun umumiy ovqatlanish sohasiga hech qanday ta'sir ko'rsatmadi."
      ],
      ans: 'A',
      expl: "Qonunga ko'ra restoranlar ko'p martalik idish taklif qilishga majbur bo'lgach, startap mijozlari soni bir necha baravar oshdi."
    },
    {
      id: 64,
      q: 'Welches Ziel verfolgt Niklas Bosch für die nahe Zukunft?',
      uz: 'Niklas Bosh yaqin kelajak uchun qanday maqsadni ko‘zlamoqda?',
      opts: [
        'A) Das System auf Supermärkte, Kantinen und Großveranstaltungen im ganzen Bundesgebiet auszuweiten.',
        'B) Wieder auf Einwegplastik umzusteigen.',
        'C) Seine Firma zu schließen und als Angestellter bei einer Bank zu arbeiten.'
      ],
      optsUz: [
        "A) Tizimni butun mamlakat bo'ylab supermarketlar, oshxonalar va yirik tadbirlarga kengaytirish.",
        "B) Yana bir martalik plastikka qaytish.",
        "C) Firmasini yopib, bankda yollanma xodim bo'lib ishlash."
      ],
      ans: 'A',
      expl: "Endigi maqsad — tizimni korxona oshxonalari (Kantinen), supermarketlar va festivallarga joriy etish."
    }
  ]
};

// ============================================================================
// HÖRVERSTEHEN TEIL 3 POOLS (65–74)
// ============================================================================

export const HV3_SPIELEN_FULL = {
  title: 'Die Bedeutung des Spielens für die menschliche Entwicklung',
  uzbekIntro: "O'yinning bolalar rivojlanishi, ijtimoiy ko'nikmalar va kattalar hayotidagi psixologik ahamiyati haqida ilmiy ma'ruza (65–74-savollar).",
  items: [
    {
      id: 65,
      label: 'Wesensmerkmal des freien Spiels: Es dient keinem unmittelbaren äußeren Zweck, sondern geschieht ...',
      uz: "Erkin o'yinning asosiy xususiyati: u tashqi maqsadga emas, balki jarayondan zavq olishga xizmat qiladi",
      ans: 'aus Freude an der Tätigkeit selbst / freiwillig',
      expl: "O'yin tashqi majburiyatsiz, jarayonning o'zidan zavqlanish («aus Freude an der Tätigkeit selbst») uchun bajariladi."
    },
    {
      id: 66,
      label: 'Kognitive Entwicklung beim Bauen und Experimentieren: Kinder begreifen ...',
      uz: "Qurish va tajriba qilishda aqliy rivojlanish: bolalar fizika va sabab-oqibat qonuniyatlarini tushunadi",
      ans: 'physikalische Gesetzmäßigkeiten / Ursache und Wirkung',
      expl: "Kubiklar va buyumlar bilan o'ynash orqali bolalar fizik qonuniyatlar («physikalische Gesetzmäßigkeiten») hamda sabab-oqibatni o'rganadi."
    },
    {
      id: 67,
      label: 'Nutzen von Rollenspielen („Vater-Mutter-Kind“): Förderung von ...',
      uz: "Rolli o'yinlarning foydasi: empatiya (hamdardlik) va til ko'nikmalarini rivojlantirish",
      ans: 'Empathie (Einfühlungsvermögen) und Sprachkompetenz',
      expl: "Boshqa rollarga kirish orqali bolalarda empatiya («Empathie») va nutq boyligi rivojlanadi."
    },
    {
      id: 68,
      label: 'Sozialer Lerneffekt von Gesellschafts- und Regelspielen: Umgang mit ...',
      uz: "Qoidali va jamoaviy o'yinlarning ijtimoiy samarasi: mag'lubiyat va hafsala pir bo'lishini ko'tara olish",
      ans: 'Niederlagen und Frustration (Frustrationstoleranz)',
      expl: "Qoidali o'yinlarda bolalar yutqazishga chidashni («Umgang mit Niederlagen / Frustrationstoleranz») o'rganadi."
    },
    {
      id: 69,
      label: 'Neurobiologischer Effekt bei jungen Säugetieren und Kindern: Das Spiel fördert die ...',
      uz: "Neyrobiologik ta'sir: o'yin miya po'stlog'ida nerv hujayralari bog'lanishini (sinapslarni) kuchaytiradi",
      ans: 'Vernetzung von Nervenzellen im Gehirn (Synapsenbildung)',
      expl: "O'yin paytida miyada yangi neyron aloqalari («Vernetzung der Nervenzellen») shakllanadi."
    },
    {
      id: 70,
      label: 'Problem im heutigen Alltag vieler Kinder: Zu wenig Zeit für freies Spiel durch ...',
      uz: "Bugungi kundagi muammo: tig'iz kun tartibi va to'garaklar tufayli erkin o'yinga vaqt kamligi",
      ans: 'durchgetaktete Terminkalender / zu viele Förderkurse',
      expl: "Bolalarning bo'sh vaqti haddan tashqari ko'p to'garaklar («durchgetaktete Freizeit») bilan band qilinmoqda."
    },
    {
      id: 71,
      label: 'Folge von Bewegungsmangel und fehlendem Spiel im Freien: Zunahme von ...',
      uz: "Ochiq havoda kam o'ynash oqibati: harakat koordinatsiyasi buzilishi va ortiqcha vazn",
      ans: 'Koordinationsstörungen und Übergewicht / Kurzsichtigkeit',
      expl: "Kam harakatlilik motorika muammolari («Koordinationsstörungen») va ortiqcha vaznga olib keladi."
    },
    {
      id: 72,
      label: 'Positive Seiten ausgewählter digitaler Spiele: Training von ...',
      uz: "Tanlangan raqamli o'yinlarning ijobiy tomoni: reaksiya tezligi va fazoviy tasavvurni mashq qildirish",
      ans: 'Reaktionsschnelligkeit und räumlichem Vorstellungsvermögen',
      expl: "Me'yoridagi videoo'yinlar reaksiya va fazoviy fikrlashni («räumliches Vorstellungsvermögen») yaxshilaydi."
    },
    {
      id: 73,
      label: 'Funktion des Spielens im Erwachsenenalter: Abbau von ...',
      uz: "Kattalar hayotida o'yinning vazifasi: stressni kamaytirish va ijodkorlikni rag'batlantirish",
      ans: 'Stress und Förderung kreativer Problemlösungen',
      expl: "Kattalar uchun ham o'yin stressni kamaytirish («Stressabbau») va yangi g'oyalar topishga xizmat qiladi."
    },
    {
      id: 74,
      label: 'Appell an Eltern und Pädagogen: Kindern öfter ... zugestehen',
      uz: "Ota-onalar va pedagoglarga chaqiriq: bolalarga ko'proq rejadan tashqari bo'sh vaqt va hatto zerikish imkonini berish",
      ans: 'unverplante Zeit und Langeweile',
      expl: "Bolalarga mustaqil fantaziya qilishi uchun erkin vaqt va ba'zan zerikish («unverplante Zeit und Langeweile») kerak."
    }
  ]
};

export const HV3_HETEROGENITAET_FULL = {
  title: 'Heterogenität und Vielfalt im Klassenzimmer',
  uzbekIntro: "Maktab sinflarida o'quvchilarning turfa xilligi (Heterogenität), inklyuziya va individual yondashuv haqida ma'ruza (65–74-savollar).",
  items: [
    {
      id: 65,
      label: 'Bedeutung von „Heterogenität“ im Schulkontext: Unterschiedlichkeit der Lernenden in Bezug auf ...',
      uz: "Maktabda «geterogenlik» ma'nosi: o'quvchilarning kelib chiqishi, tili va qobiliyatlari bo'yicha farqliligi",
      ans: 'soziale Herkunft, Muttersprache und Leistungsniveau',
      expl: "Sinfdagi o'quvchilarning ijtimoiy kelib chiqishi, ona tili va bilim darajasi («Leistungsniveau») turlicha bo'lishi."
    },
    {
      id: 66,
      label: 'Traditionelle Annahme des deutschen Schulsystems: Homogene Lerngruppen durch ...',
      uz: "Nemis maktab tizimining an'anaviy taxmini: o'quvchilarni erta saralash (uch pog'onali maktab tizimi)",
      ans: 'frühe Selektion / Aufteilung auf verschiedene Schulformen',
      expl: "4-sinfdan keyin bolalarni turli maktab turlariga ajratish («frühe Aufteilung») bir xil guruh yaratadi deb hisoblangan."
    },
    {
      id: 67,
      label: 'Kritik der Bildungsforschung: Auch innerhalb einer Gymnasialklasse gibt es große ...',
      uz: "Ta'lim tadqiqotchilari tanqidi: bitta gimnaziya sinfi ichida ham katta individual tafovutlar mavjud",
      ans: 'individuelle Leistungsunterschiede und verschiedene Lerntypen',
      expl: "Saralashga qaramay, har bir sinf ichida o'zlashtirish tezligi bo'yicha katta farqlar («Leistungsunterschiede») bo'ladi."
    },
    {
      id: 68,
      label: 'Rechtlicher Meilenstein seit 2009: Die UN-Behindertenrechtskonvention verpflichtet zu ...',
      uz: "2009-yildagi huquqiy burilish: BMT konvensiyasi inklyuziv ta'limni (Inklusion) majburiy qildi",
      ans: 'schulischer Inklusion (gemeinsamem Unterricht)',
      expl: "Imkoniyati cheklangan va sog'lom bolalarning birga o'qishi («Inklusion / gemeinsames Lernen»)."
    },
    {
      id: 69,
      label: 'Pädagogische Antwort auf Vielfalt: „Binnendifferenzierung“ statt ...',
      uz: "Turfa xillikka pedagogik javob: bir xil frontal dars o'rniga tabaqalashtirilgan topshiriqlar",
      ans: 'Frontalunterricht im Gleichschritt für alle',
      expl: "Hamma uchun bir xil tezlikdagi frontal dars («Frontalunterricht») o'rniga darajalangan topshiriqlar berish."
    },
    {
      id: 70,
      label: 'Vorteil kooperativer Lernformen (z. B. Lerntandems): Schwächere profitieren von Erklärungen, Stärkere ...',
      uz: "Hamkorlikda o'qish ustunligi: kuchli o'quvchilar boshqalarga tushuntirish orqali o'z bilimlarini chuqurlashtiradi",
      ans: 'vertiefen durch das Erklären ihr eigenes Wissen',
      expl: "Mavzuni sinfdoshiga tushuntirgan o'quvchi o'z bilimini yanada mustahkamlaydi («vertiefen ihr eigenes Wissen»)."
    },
    {
      id: 71,
      label: 'Umgang mit Mehrsprachigkeit im Unterricht: Herkunftssprachen nicht als Defizit, sondern als ... begreifen',
      uz: "Ko'p tillilikka munosabat: ona tillarini kamchilik emas, balki boylik (resurs) sifatida qabul qilish",
      ans: 'wertvolle Ressource / Potenzial',
      expl: "Ko'p tillilik kamchilik emas, balki til o'rganishda qimmatli resurs («wertvolle Ressource») hisoblanadi."
    },
    {
      id: 72,
      label: 'Größtes Hindernis in der Schulpraxis: Zu große Klassen und Mangel an ...',
      uz: "Amaliyotdagi eng katta to'siq: katta sinflar va maxsus pedagoglar (Sonderpädagogen) yetishmasligi",
      ans: 'Sonderpädagogen / multiprofessionellen Teams',
      expl: "O'qituvchilarga yordam beradigan maxsus pedagoglar («Sonderpädagogen») yetishmasligi."
    },
    {
      id: 73,
      label: 'Hilfreiches Instrument zur individuellen Förderung: Digitale ...',
      uz: "Individual qo'llab-quvvatlashda foydali vosita: moslashuvchan raqamli ta'lim dasturlari",
      ans: 'adaptive Lernprogramme / Lernsoftware',
      expl: "O'quvchi darajasiga avtomatik moslashuvchi raqamli dasturlar («adaptive Lernprogramme»)."
    },
    {
      id: 74,
      label: 'Notwendige Veränderung in der Lehrkräfteausbildung: Mehr Praxismodule für ...',
      uz: "O'qituvchilar тайёрлашdagi zarur o'zgarish: diagnostika va individual maslahat bo'yicha ko'proq amaliyot",
      ans: 'Lernstandsdiagnose und individuelle Förderung',
      expl: "Bo'lajak o'qituvchilarga diagnostika va individual yondashuvni («individuelle Förderung») chuqurroq o'rgatish."
    }
  ]
};

export const HV3_KREATIVITAET = {
  title: 'Psychologie der Kreativität (Dr. Rebekka Bäumer)',
  uzbekIntro: "Doktor Rebekka Boymerning kreativ fikrlash bosqichlari, miya faoliyati va ijodkorlikni rivojlantirish usullari haqidagi ma'ruzasi (65–74-savollar).",
  items: [
    {
      id: 65,
      label: 'Begriff „Kreativität“ (Definition von Dr. Rebekka Bäumer): Die Fähigkeit, ...',
      uz: '65. «Kreativlik» tushunchasi: yangi va ayni paytda foydali narsa yaratish qobiliyati',
      ans: 'etwas Neues und zugleich Nützliches / Sinnvolles zu schaffen',
      expl: "Kreativlik — nafaqat yangi, balki amaliy jihatdan foydali yechim yaratish qobiliyatidir."
    },
    {
      id: 66,
      label: 'Weit verbreiteter Irrtum über Kreativität: Dass sie nur ... vorbehalten sei',
      uz: '66. Kreativlik haqida keng tarqalgan yanglish fikr: u faqat daholar va san’atkorlarga xos degan qarash',
      ans: 'wenigen Genies oder Künstlern',
      expl: "Aslida har bir insonda kreativ salohiyat mavjud, u faqat san'atkorlar yoki daholarga xos emas."
    },
    {
      id: 67,
      label: 'Gehirnforschung zum kreativen Denken: Nicht nur die rechte Hälfte, sondern ...',
      uz: '67. Kreativ fikrlashda miya faoliyati: faqat o‘ng yarimshar emas, balki ikkala yarimshar hamkorlikda ishlaydi',
      ans: 'beide Gehirnhälften arbeiten eng vernetzt zusammen',
      expl: "Zamonaviy neyrobiologiya kreativ jarayonda miyaning ikkala yarimshari («beide Gehirnhälften») birga ishlashini isbotlagan."
    },
    {
      id: 68,
      label: 'Erste Phase des kreativen Prozesses (Vorbereitungsphase): Intensives ...',
      uz: '68. Kreativ jarayonning birinchi bosqichi (tayyorgarlik): axborot to‘plash va muammoni tahlil qilish',
      ans: 'Sammeln von Informationen, Fachwissen und Analyse des Problems',
      expl: "Ilhom kelishi uchun avvalo chuqur bilim va muammoni tahlil qilish («Sammeln von Informationen») talab etiladi."
    },
    {
      id: 69,
      label: 'Was passiert in der sogenannten Inkubationsphase? Das Problem wird beiseitegelegt und ...',
      uz: '69. «Inkubatsiya bosqichi»da nima sodir bo‘ladi? Ong osti fonda ishlashda davom etadi',
      ans: 'das Unterbewusstsein arbeitet im Hintergrund weiter',
      expl: "Inson chalg'ib dam olayotganda ong osti («das Unterbewusstsein») ma'lumotlarni qayta ishlashda davom etadi."
    },
    {
      id: 70,
      label: 'Wann treten Geistesblitze („Aha-Momente“) besonders häufig auf? Bei ...',
      uz: '70. Ilhom kelishi («Aha-effekti») qachon ko‘p kuzatiladi? Bo‘shashgan odatiy mashg‘ulotlar (dush, sayr) paytida',
      ans: 'entspannten Routinetätigkeiten wie Duschen oder Spazierengehen',
      expl: "Eng yaxshi g'oyalar ko'pincha sayr qilish yoki dush qabul qilish kabi tinch holatda keladi."
    },
    {
      id: 71,
      label: 'Größter Feind der Kreativität am Arbeitsplatz: Chronischer ...',
      uz: '71. Ish joyida kreativlikning eng katta dushmani: surunkali vaqt tig‘izligi, stress va xato qilishdan qo‘rqish',
      ans: 'Zeitdruck, Dauerstress und Angst vor Fehlern',
      expl: "Kuchli stress va xato qilishdan qo'rqish miyaning ijodiy markazlarini bloklab qo'yadi."
    },
    {
      id: 72,
      label: 'Vorteil gemischter (interdisziplinärer) Teams: Unterschiedliche ... treffen aufeinander',
      uz: '72. Aralash (fanlararo) jamoalarning ustunligi: turli nuqtai nazarlar va tajribalar birlashadi',
      ans: 'Perspektiven und Erfahrungen führen zu originelleren Lösungen',
      expl: "Turli soha vakillarining qarashlari («unterschiedliche Perspektiven») yangi yechimlarga yo'l ochadi."
    },
    {
      id: 73,
      label: 'Kritik am klassischen Brainstorming in Gruppen: Dominante Personen reden, während ...',
      uz: '73. Guruhlarda klassik «Brainstorming» tanqidi: tortinchoq xodimlar baholanishdan qo‘rqib jim turadi',
      ans: 'Zurückhaltende aus Angst vor Bewertung schweigen',
      expl: "Guruhda avval har kim g'oyalarini yozma ravishda mustaqil to'plagani samaraliroq."
    },
    {
      id: 74,
      label: 'Wie lässt sich die eigene Kreativität im Alltag trainieren? Indem man ...',
      uz: '74. Kundalik hayotda kreativlikni qanday mashq qildirish mumkin? Odatlarni buzish va yangi narsalarni sinab ko‘rish orqali',
      ans: 'Gewohnheiten durchbricht, neugierig bleibt und Neues ausprobiert',
      expl: "Har кунги qoliplardan chiqish («Gewohnheiten durchbrechen») miya moslashuvchanligini oshiradi."
    }
  ]
};

export const HV3_BEGABTENFOERDERUNG = {
  title: 'Hochbegabung und Begabtenförderung in der Schule',
  uzbekIntro: "O'ta iqtidorli bolalarni (Hochbegabte) aniqlash, ular duch keladigan muammolar hamda maktabda qo'llab-quvvatlash usullari haqida ma'ruza (65–74-savollar).",
  items: [
    {
      id: 65,
      label: 'Definition von Hochbegabung in der Psychologie: Ein Intelligenzquotient (IQ) von ...',
      uz: '65. Psixologiyada o‘ta iqtidorlilik ta’rifi: IQ ko‘rsatkichi 130 va undan yuqori bo‘lishi (aholining ~2 foizi)',
      ans: '130 oder mehr (rund 2 Prozent der Bevölkerung)',
      expl: "Ilmiy jihatdan IQ darajasi 130 dan yuqori bo'lgan insonlar o'ta iqtidorli hisoblanadi."
    },
    {
      id: 66,
      label: 'Häufiges Vorurteil über hochbegabte Kinder in der Schule: Dass sie automatisch ...',
      uz: '66. Maktabda iqtidorli bolalar haqidagi noto‘g‘ri tushuncha: ular barcha fanlardan avtomatik a’lo baho oladi degan fikr',
      ans: 'in allen Fächern Bestnoten schreiben',
      expl: "Yuqori intellekt har doim ham maktabda avtomatik a'lo baholarni («Bestnoten») anglatmaydi."
    },
    {
      id: 67,
      label: 'Folge von chronischer Unterforderung im Unterricht: Langeweile, Frustration oder ...',
      uz: '67. Darsda doimiy zerikish oqibati: darsga xalaqit berish yoki o‘zlashtirishning pasayib ketishi (Minderleistung)',
      ans: 'Unterrichtsstörungen und nachlassende Leistungen (Underachievement)',
      expl: "Dars juda oson bo'lsa, bola zerikib darsni buzishi yoki o'qishga qiziqishini yo'qotishi mumkin."
    },
    {
      id: 68,
      label: 'Warum wird Hochbegabung bei Mädchen seltener erkannt? Weil Mädchen ...',
      uz: '68. Nima uchun qizlarda o‘ta iqtidorlilik kamroq aniqlanadi? Ular ijtimoiy moslashuvchan bo‘lib, darsni buzmaydi',
      ans: 'sich sozial stärker anpassen und seltener durch Störverhalten auffallen',
      expl: "Qizlar o'z qobiliyatlarini yashirib, guruhga moslashishga («sich sozial anpassen») moyilroq bo'ladi."
    },
    {
      id: 69,
      label: 'Erste Fördermöglichkeit „Akzeleration“ (Beschleunigung): Frühere Einschulung oder ...',
      uz: '69. Qo‘llab-quvvatlashning 1-turi «Akseleratsiya»: sinfdan sinfga sakrab o‘tish yoki universitetda erta o‘qish',
      ans: 'Überspringen einer Klassenstufe / Frühstudium',
      expl: "Akseleratsiya — o'quv dasturini tezroq o'tish, masalan sinf sakrash («Überspringen einer Klasse»)."
    },
    {
      id: 70,
      label: 'Zweite Fördermöglichkeit „Enrichment“ (Anreicherung): Vertiefende ...',
      uz: '70. Qo‘llab-quvvatlashning 2-turi «Enrichment»: o‘z sinfida qolgan holda chuqurlashtirilgan qo‘shimcha loyihalar va olimpiadalar',
      ans: 'Zusatzangebote, Projekte und Wettbewerbe in derselben Altersgruppe',
      expl: "Enrichment — bolani o'z tengdoshlaridan ajratmay, qo'shimcha chuqurlashtirilgan mavzular berish."
    },
    {
      id: 71,
      label: 'Vorteil von Spezialschulen und Hochbegabtenklassen: Kinder treffen auf ...',
      uz: '71. Ixtisoslashgan maktablar ustunligi: bolalar o‘ziga o‘xshash fikrlovchi tengdoshlarini topadi',
      ans: 'Gleichgesinnte und fühlen sich nicht als Außenseiter',
      expl: "Maxsus sinflarda iqtidorli bolalar o'zlarini yakkalanib qolgan («Außenseiter») his qilmaydi."
    },
    {
      id: 72,
      label: 'Kritik an einer rein getrennten Elitenförderung: Gefahr von ...',
      uz: '72. Alohida elita maktablariga nisbatan tanqid: ijtimoiy ajralib qolish va kam ta’minlangan oila bolalarining chetda qolishi',
      ans: 'sozialer Abschottung und Benachteiligung bildungsferner Schichten',
      expl: "Faqat alohida maktablarda o'qitish ijtimoiy tabaqalanish xavfini tug'diradi."
    },
    {
      id: 73,
      label: 'Neue Rolle der Lehrkräfte im regulären Unterricht: Individuelle ...',
      uz: '73. Oddiy darslarda o‘qituvchining yangi roli: individual o‘quv maslahatchisi (Lerncoach) sifatida yo‘naltirish',
      ans: 'Lernbegleitung (Lehrkraft als Lerncoach)',
      expl: "O'qituvchi tayyor bilim beruvchi emas, balki individual yo'naltiruvchi («Lerncoach») bo'lishi kerak."
    },
    {
      id: 74,
      label: 'Was brauchen hochbegabte Kinder neben kognitiven Herausforderungen vor allem? ...',
      uz: '74. O‘ta iqtidorli bolalarga aqliy yuklamalardan tashqari avvalo nima kerak? Hissiy tayanch va oddiy bola bo‘lish erkinligi',
      ans: 'emotionalen Rückhalt und die Freiheit, einfach Kind zu sein',
      expl: "Ular kichik kattalar emas, balki mehr va o'yinga muhtoj oddiy bolalardir."
    }
  ]
};

export const HV3_SCHLAF = {
  title: 'Schlaf – ein rätselhaftes Phänomen (Dr. Daniel Evers)',
  uzbekIntro: "Uyqu tadqiqotchisi doktor Daniyel Eversning uyqu bosqichlari, miya tozalanishi va sog'lom uyqu qoidalari haqidagi ma'ruzasi (65–74-savollar).",
  items: [
    {
      id: 65,
      label: 'Frühere Annahme über den Zustand des Gehirns im Schlaf: Man glaubte, das Gehirn ...',
      uz: '65. Uyquda miya holati haqidagi avvalgi taxmin: miya to‘liq o‘chadi va passiv bo‘ladi deb o‘ylangan',
      ans: 'schalte komplett ab und sei völlig passiv',
      expl: "Ilgari uyqu passiv tinchlik holati deb hisoblangan, aslida esa miya juda faol ishlaydi."
    },
    {
      id: 66,
      label: 'Was passiert im Tiefschlaf mit neu gelernten Informationen? Sie werden ...',
      uz: '66. Chuqur uyquda yangi o‘rganilgan ma’lumotlar qisqa muddatli xotiradan uzoq muddatli xotiraga ko‘chiriladi',
      ans: 'ins Langzeitgedächtnis übertragen und gefestigt',
      expl: "Chuqur uyqu (Tiefschlaf) vaqtida bilimlar uzoq muddatli xotirada («Langzeitgedächtnis») mustahkamlanadi."
    },
    {
      id: 67,
      label: 'Körperliche Reinigungsfunktion des Schlafs im Gehirn: Ausspülung von ...',
      uz: '67. Uyquning miyadagi tozalash funksiyasi: zararli moddalar almashinuvi qoldiqlari va toksinlar yuvib chiqariladi',
      ans: 'schädlichen Stoffwechselprodukten und Giftstoffen',
      expl: "Uyquda miyaning glimfatik tizimi zararli oqsil qoldiqlarini («Giftstoffe») tozalaydi."
    },
    {
      id: 68,
      label: 'Merkmale des REM-Schlafs (Traumschlafs): Schnelle Augenbewegungen bei gleichzeitig ...',
      uz: '68. REM-uyqu belgilari: ko‘zlarning tez harakati, tana mushaklarining bo‘shashishi va yorqin tushlar',
      ans: 'gelähmter Körpermuskulatur und intensiven Träumen',
      expl: "Inson tushida harakat qilib o'ziga zarar yetkazmasligi uchun tana mushaklari vaqtincha falaj («gelähmt») holatda bo'ladi."
    },
    {
      id: 69,
      label: 'Auswirkung von blauem Bildschirmlicht am Abend: Es hemmt ...',
      uz: '69. Kechqurun ekranlardan chiquvchi ko‘k nurning ta’siri: uyqu gormoni — melatonin ishlab chiqarilishini tormozlaydi',
      ans: 'die Ausschüttung des Schlafhormons Melatonin',
      expl: "Smartfon va noutbuk ekranining ko'k nuri melatonin gormonini kamaytirib, uyquni qochiradi."
    },
    {
      id: 70,
      label: 'Gesundheitliche Folgen von chronischem Schlafmangel: Geschwächtes Immunsystem sowie Risiko für ...',
      uz: '70. Surunkali uyqusizlik oqibatlari: immunitet pasayishi hamda yurak-qon tomir kasalliklari va diabet xavfi',
      ans: 'Herz-Kreislauf-Erkrankungen, Übergewicht und Diabetes',
      expl: "Doimiy kam uxlash moddalar almashinuvi va yurak-qon tomir tizimiga jiddiy zarar yetkazadi."
    },
    {
      id: 71,
      label: 'Veränderung des Schlafbedürfnisses im Laufe des Lebens: Im Alter nimmt vor allem ... ab',
      uz: '71. Yosh o‘tishi bilan uyqu ehtiyojining o‘zgarishi: keksalikda chuqur uyqu ulushi kamayadi',
      ans: 'der Anteil des Tiefschlafs',
      expl: "Chaqaloqlar 16 soatgacha uxlasa, keksayganda chuqur uyqu («Tiefschlafanteil») qisqaradi."
    },
    {
      id: 72,
      label: 'Nutzen eines kurzen Mittagsschlafs („Powernap“ von 15–20 Minuten): Steigerung von ...',
      uz: '72. Kunduzgi qisqa uyquning (15–20 daqiqa «Powernap») foydasi: diqqat va ish qobiliyatini oshiradi',
      ans: 'Konzentration, Aufmerksamkeit und Leistungsfähigkeit',
      expl: "20 daqiqalik qisqa uyqu chuqur uyquga o'tmasdan tetiklik va diqqatni tiklaydi."
    },
    {
      id: 73,
      label: 'Warnung vor langfristiger Einnahme von Schlaftabletten: Kein natürlicher Schlaf und Gefahr von ...',
      uz: '73. Uyqu dorilarini uzoq muddat ichish xavfi: tabiiy uyqu bermaydi va tezda qaramlik (Sucht) keltirib chiqaradi',
      ans: 'Abhängigkeit (Suchtgefahr)',
      expl: "Uxlatuvchi dorilar uyqu arxitekturasini buzadi va ularga o'rganib qolish xavfi yuqori."
    },
    {
      id: 74,
      label: 'Wichtigste Regel für eine gute Schlafhygiene: Regelmäßige Schlafenszeiten und ...',
      uz: '74. Yaxshi uyqu gigiyenasi uchun eng muhim qoida: muntazam bir vaqtda yotish hamda salqin va qorong‘i yotoqxona',
      ans: 'ein kühles, dunkles und ruhiges Schlafzimmer',
      expl: "Sog'lom uyqu uchun 16–18 daraja salqin, qorong'i xona va qat'iy rejim zarur."
    }
  ]
};

export const HV3_RESILIENZ = {
  title: 'Resilienz – die psychische Widerstandskraft des Menschen',
  uzbekIntro: "Insonning ruhiy bardoshliligi (Resilienz), inqirozlarni yengib o'tish omillari va ularni mashq qildirish haqida ilmiy ma'ruza (65–74-savollar).",
  items: [
    {
      id: 65,
      label: 'Ursprüngliche Bedeutung von „Resilienz“ in der Physik / Werkstoffkunde: Fähigkeit elastischer Materialien, ...',
      uz: '65. Fizikada «rezilyentlik»ning asl ma’nosi: qayishqoq materiallarning deformatsiyadan so‘ng asl holatiga qaytishi',
      ans: 'nach Verformung in ihren Ausgangszustand zurückzukehren',
      expl: "Atama dastlab materialshunoslikda jismning o'z shaklini tiklash xususiyatini anglatgan."
    },
    {
      id: 66,
      label: 'Bedeutung in der Psychologie: Lebenskrisen und Schicksalsschläge ... zu bewältigen',
      uz: '66. Psixologiyadagi ma’nosi: hayotiy inqiroz va zarbalarni uzoq muddatli ruhiy shikastlarsiz yengib o‘tish',
      ans: 'ohne dauerhafte seelische Beeinträchtigung',
      expl: "Ruhiy immunitet — og'ir vaziyatlardan so'ng ruhiy muvozanatni qayta tiklay olish qobiliyatidir."
    },
    {
      id: 67,
      label: 'Zentrale Erkenntnis der Kauai-Langzeitstudie von Emmy Werner: Ein Drittel der Risikokinder wuchs trotz Armut zu ... heran',
      uz: '67. Emmi Vernerning Kauai tadqiqoti xulosasi: xavf guruhidagi bolalarning uchdan biri qashshoqlikka qaramay barqaror va muvaffaqiyatli inson bo‘lib yetishgan',
      ans: 'stabilen, selbstbewussten und erfolgreichen Erwachsenen',
      expl: "40 yillik kuzatuvlar og'ir sharoitda o'sgan bolalarning uchdan biri hayotda muvaffaqiyat qozonganini ko'rsatdi."
    },
    {
      id: 68,
      label: 'Wichtigster äußerer Schutzfaktor in der Kindheit: Mindestens eine ...',
      uz: '68. Bolalikdagi eng muhim tashqi himoya omili: bolaga so‘zsiz ishonch va mehr beruvchi kamida bitta yaqin inson',
      ans: 'verlässliche, liebevolle Bezugsperson',
      expl: "Buvijon, o'qituvchi yoki ota-ona kabi kamida bitta ishonchli tayanch inson («Bezugsperson») hal qiluvchi rol o'ynagan."
    },
    {
      id: 69,
      label: 'Innere Haltung resilienter Menschen bei Rückschlägen: Nicht in der Opferrolle verharren, sondern ...',
      uz: '69. Bardoshli insonlarning omadsizlikdagi ichki pozitsiyasi: jabrlanuvchi rolida qolmasdan, faol yechim izlash',
      ans: 'Situationen akzeptieren und aktiv nach Lösungen suchen',
      expl: "Ular o'zgartirib bo'lmaydigan holatni qabul qilib, kuchini yechim topishga yo'naltiradi."
    },
    {
      id: 70,
      label: 'Bedeutung von „Selbstwirksamkeitserwartung“: Die innere Überzeugung, ...',
      uz: '70. «O‘z kuchiga ishonish» (Selbstwirksamkeitserwartung): qiyin vaziyatlarni o‘z kuchi bilan yenga olishiga ishonch',
      ans: 'schwierige Aufgaben aus eigener Kraft meistern zu können',
      expl: "Inson o'z harakatlari natija berishiga ishonishi rezilyentlikning asosiy ustunidir."
    },
    {
      id: 71,
      label: 'Ist Resilienz rein angeboren? Nein, sie ist ein dynamischer Prozess, der ...',
      uz: '71. Rezilyentlik faqat tug‘mami? Yo‘q, u butun umr davomida o‘rganiladigan va mashq qilinadigan dinamik jarayondir',
      ans: 'ein Leben lang erlernt und trainiert werden kann',
      expl: "Rezilyentlik qotib qolgan xususiyat emas, uni har qanday yoshda rivojlantirish mumkin."
    },
    {
      id: 72,
      label: 'Wichtige Ressource im Erwachsenenalter: Stabile soziale Netzwerke bieten ...',
      uz: '72. Kattalar hayotidagi muhim resurs: mustahkam ijtimoiy aloqalar (do‘stlar va oila) hissiy tayanch beradi',
      ans: 'emotionalen Halt und praktische Unterstützung in Krisen',
      expl: "Yaxshi ijtimoiy munosabatlar stress gormonlarini kamaytiradi."
    },
    {
      id: 73,
      label: 'Warum Unternehmen heute Resilienztrainings anbieten: Zur Vorbeugung gegen ...',
      uz: '73. Nima uchun kompaniyalar rezilyentlik treninglarini o‘tkazadi? Burnout va kasallik tufayli ish qoldirishlarning oldini olish uchun',
      ans: 'Burnout und krankheitsbedingte Ausfälle',
      expl: "Ruhiy tushkunlik va charchoq («Burnout») korxonalarga katta iqtisodiy zarar keltiradi."
    },
    {
      id: 74,
      label: 'Kritik am Resilienz-Trend in der Arbeitswelt: Die Verantwortung für schlechte Arbeitsbedingungen darf nicht ...',
      uz: '74. Mehnat dunyosidagi rezilyentlik trendi tanqidi: yomon mehnat sharoitlari uchun javobgarlikni faqat xodimlar zimmasiga yuklab qo‘ymaslik kerak',
      ans: 'allein auf die Beschäftigten abgewälzt werden',
      expl: "Haddan ortiq ish yuklamasi muammosini faqat xodimning «bardoshliligi» bilan yopib bo'lmaydi."
    }
  ]
};

export const HV3_WORKLIFEBALANCE = {
  title: 'Warum Work-Life-Balance wichtig ist (Lina Schmidt)',
  uzbekIntro: "Lina Shmidtning zamonaviy mehnat dunyosida ish va shaxsiy hayot muvozanati (Work-Life-Balance), raqamli charchoq va 4 kunlik ish haftasi haqidagi ma'ruzasi (65–74-savollar).",
  items: [
    {
      id: 65,
      label: 'Was versteht Lina Schmidt unter „Work-Life-Balance“? Ein gesundes Gleichgewicht zwischen ...',
      uz: '65. Lina Shmidt «Work-Life-Balance» deganda nimani tushunadi? Kasbiy talablar va shaxsiy ehtiyojlar o‘rtasidagi sog‘lom muvozanat',
      ans: 'beruflichen Anforderungen und privaten Bedürfnissen',
      expl: "Ish, oila, dam olish va sevimli mashg'ulotlarning uyg'unligi."
    },
    {
      id: 66,
      label: 'Hauptproblem durch Smartphones und mobiles Arbeiten: Ständige Erreichbarkeit verhindert ...',
      uz: '66. Smartfonlar va mobil ishlash muammosi: doimiy aloqada bo‘lish kechqurun va ta’tilda chinakam dam olishga xalaqit beradi',
      ans: 'echtes Abschalten am Feierabend und im Urlaub',
      expl: "Ish va bo'sh vaqt chegarasining yo'qolishi («Entgrenzung der Arbeit») ruhiy tiklanishga to'sqinlik qiladi."
    },
    {
      id: 67,
      label: 'Gesundheitliche Folgen dauerhafter Überlastung: Schlafstörungen, Konzentrationsschwäche und ...',
      uz: '67. Doimiy ortiqcha yuklamaning salomatlikka ta’siri: uyqu buzilishi va surunkali charchoq (Burnout)',
      ans: 'chronische Erschöpfung (Burnout)',
      expl: "Dam olmasdan ishlash oxir-oqibat surunkali charchoq sindromiga («Burnout») olib keladi."
    },
    {
      id: 68,
      label: 'Wandel der Prioritäten bei der jungen Generation (Gen Y & Z): Freizeit und Sinn sind oft wichtiger als ...',
      uz: '68. Yosh avlodda (Y va Z) ustuvorliklarning o‘zgarishi: bo‘sh vaqt va ishning ma’nosi ko‘pincha yuqori maosh yoki mansabdan muhimroq',
      ans: 'ein maximales Gehalt oder Statussymbole',
      expl: "Yosh mutaxassislar oila va shaxsiy rivojlanish uchun vaqt qolishini birinchi o'ringa qo'ymoqda."
    },
    {
      id: 69,
      label: 'Wirtschaftlicher Vorteil familienfreundlicher Arbeitszeiten für Firmen: Höhere Mitarbeiterbindung und ...',
      uz: '69. Oilaga do‘stona ish soatlarining kompaniyalar uchun foydasi: kadrlar qo‘nimsizligi va kasallik varaqalari kamayadi',
      ans: 'geringerer Krankenstand / weniger Fluktuation',
      expl: "Mamnun xodimlar kamroq kasal bo'ladi va kompaniyani tark etmaydi."
    },
    {
      id: 70,
      label: 'Erfahrungen mit dem Modell der Vier-Tage-Woche: Die Produktivität ...',
      uz: '70. To‘rt kunlik ish haftasi tajribasi: unumdorlik tushmaydi, balki xodimlar tetikroq ishlagani uchun oshadi ham',
      ans: 'bleibt gleich oder steigt sogar durch erholtere Mitarbeitende',
      expl: "Tajribalar 4 kunlik ish haftasida xodimlar diqqatni jamlab, 5 kunlik natijani berishini ko'rsatdi."
    },
    {
      id: 71,
      label: 'Voraussetzung für gesundes Arbeiten im Homeoffice: Klare ... zwischen Arbeitsplatz und Wohnbereich',
      uz: '71. Uydan (Homeoffice) sog‘lom ishlash sharti: ish joyi va dam olish hududi hamda vaqtini aniq ajratish',
      ans: 'zeitliche und räumliche Trennung',
      expl: "Uyda ishlaganda ham aniq ish tugash vaqti va alohida ish burchagi («zeitliche und räumliche Trennung») bo'lishi shart."
    },
    {
      id: 72,
      label: 'Rolle der Führungskräfte im Unternehmen: Sie haben eine wichtige ...',
      uz: '72. Korxonada rahbarlarning roli: ular sog‘lom tanaffuslar va kechqurun yozmaslik bo‘yicha shaxsiy o‘rnak (Vorbildfunktion) bo‘lishi kerak',
      ans: 'Vorbildfunktion beim Einhalten von Pausen und Ruhezeiten',
      expl: "Agar rahbarning o'zi tunda xat yozsa, xodimlar ham dam olishga jur'at eta olmaydi."
    },
    {
      id: 73,
      label: 'Sprachliche Kritik am Begriff „Work-Life-Balance“: Er tut so, als sei Arbeit ...',
      uz: '73. «Work-Life-Balance» atamasining til jihatidan tanqidi: u go‘yo ish («Work») hayotning («Life») bir qismi emas, balki uning qarama-qarshisidek taassurot uyg‘otadi',
      ans: 'das Gegenteil von Leben (obwohl Arbeit Teil des Lebens ist)',
      expl: "Ish ham inson hayotining muhim va mazmunli qismi hisoblanadi."
    },
    {
      id: 74,
      label: 'Persönlicher Tipp zur besseren Zeiteinteilung im Alltag: Bewusst Prioritäten setzen und öfter ...',
      uz: '74. Kundalik vaqtni to‘g‘ri taqsimlash bo‘yicha maslahat: ustuvorliklarni belgilash va ortiqcha vazifalarga «Yo‘q» deyishni o‘rganish',
      ans: '„Nein“ sagen sowie feste Erholungszeiten im Kalender einplanen',
      expl: "Shaxsiy dam olish vaqtini ham xuddi muhim uchrashuvdek taqvimga kiritib qo'yish tavsiya etiladi."
    }
  ]
};
