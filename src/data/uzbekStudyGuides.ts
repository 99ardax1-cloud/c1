import { VocabItem, UzbekParagraphTranslation } from './variants14And15Data';

export interface ModuleUzbekGuide {
  titleUz: string;
  vocab: VocabItem[];
  paragraphs: UzbekParagraphTranslation[];
}

/**
 * Provides Uzbek title translations, C1 vocabulary lists, and text summaries
 * for reading/listening modules across Variants 1–15 when a module doesn't
 * already have inline `uzbekVocab` / `uzbekParagraphs`.
 */
export const UZBEK_READING_GUIDES_BY_TITLE: Record<string, ModuleUzbekGuide> = {
  "Die Maus als Stimmungsbarometer": {
    titleUz: "Kompyuter sichqonchasi — kayfiyat barometri sifatida",
    vocab: [
      { de: "der Tastaturanschlag", uz: "klaviatura tugmasini bosish" },
      { de: "gefrustet / wütend sein", uz: "asabiylashgan / jahli chiqqan bo'lmoq" },
      { de: "der Proband (-en)", uz: "tajriba ishtirokchisi (sinovdagi shaxs)" },
      { de: "manipuliert sein", uz: "ataylab o'zgartirilgan / soxtalashtirilgan bo'lmoq" },
      { de: "kontraintuitiv", uz: "ichki sezgi va kutilmalarga zid" },
      { de: "aufspüren", uz: "izlab topmoq, aniqlamoq" }
    ],
    paragraphs: [
      {
        label: "1–2-xatboshilar",
        uz: "Kompyuter va internet bizni har qanday psixiatrdan yaxshiroq biladi: Brigham Young universiteti olimi Jeffri Jenkins foydalanuvchining sichqoncha harakatiga qarab uning jahli chiqqani yoki asabiylashganini aniqlaydigan dastur yaratdi. Onlayn tajribada ishtirokchilarga ataylab juda sekin yuklanadigan sahifalar berildi va har bir xato javob uchun ball chegirib tashlandi."
      },
      {
        label: "3–4-xatboshilar",
        uz: "G'azab sichqoncha harakatiga sezilarli ta'sir qildi: silliq chiziqlar o'rniga foydalanuvchilar kursorni burchakli, keskin harakatlar bilan, ammo odatdagidan sekinroq harakatlantirishdi. Ushbu texnologiya veb-dasturchilarga foydalanuvchi qaysi nuqtada asabiylashib saytni tark etishini aniqlash va saytni optimallashtirishga yordam beradi."
      }
    ]
  },
  "Zwischen Familie und Studium (Doppelbelastung)": {
    titleUz: "Oila va o'qish o'rtasida (Talaba onaning ikki karra yuklamasi)",
    vocab: [
      { de: "aus den Fugen geraten", uz: "izdan chiqib ketmoq, buzilmoq" },
      { de: "mit links schaffen", uz: "osongina (xuddi chap qo'lda) uddalamoq" },
      { de: "jemanden beneiden um", uz: "birovga hasad / havas qilmoq" },
      { de: "das schlechte Gewissen", uz: "vijdon azobi, aybdorlik hissi" },
      { de: "überbehütende Helikoptereltern", uz: "farzandini haddan ortiq nazorat qiluvchi «vertolyot ota-onalar»" }
    ],
    paragraphs: [
      {
        label: "Abschnitt A–C",
        uz: "Muallif — kichkina qizchasi bor talaba. Qizi bog'cha infeksiyasidan kasal bo'lib qolganda, universitet jadvali izdan chiqadi (A). Uning yigiti uy yumushlari va bolaga qarashni osongina uddalaydi, muallif hatto unga havas/rashk qiladi (B). Poyezdda o'qishga qatnar ekan, u «Men yaxshi onamanmi?» deb vijdon azobida qiynaladi (C)."
      },
      {
        label: "Abschnitt D–E",
        uz: "Uyga qaytganda qizchasi kulib quchog'iga otilgach, barcha shubhalar tarqaladi: mukammal bo'lishga urinish ahmoqlik ekanini tushunadi (D). Yakunda u barcha talaba ota-onalarga ruh bag'ishlab, mukammalchilikka berilgan «vertolyot ota-onalar» gapiga quloq solmaslikka chaqiradi (E)."
      }
    ]
  },
  "Essen in der Mensa – Mehr als nur Kalorien": {
    titleUz: "Talabalar oshxonasida (Mensa) ovqatlanish — shunchaki kaloriyadan ustun",
    vocab: [
      { de: "das Klischee", uz: "qolip fikr, stereotip" },
      { de: "verköstigen", uz: "ovqatlantirmoq" },
      { de: "akribisch ausarbeiten", uz: "o'ta sinchkovlik bilan ishlab chiqmoq" },
      { de: "die Subventionierung / Landeszuschüsse", uz: "davlat subsidiyasi / moliyaviy yordami" },
      { de: "rechtlich bindend", uz: "qonuniy majburiy" }
    ],
    paragraphs: [
      {
        label: "Matnning qisqacha mazmuni",
        uz: "Germaniya universitet oshxonalari (Mensa) bugungi kunda minglab talabalarni tez, sog'lom va arzon ovqatlantirmoqda. Taomnoma bir necha hafta oldin kompyuter tizimlari orqali tuziladi (masalan, gumanitar fan talabalari texnik talabalarga qaraganda ko'proq vegan taomlarni tanlaydi). Arzon narxlar davlat subsidiyalari va semestr badallari hisobiga ushlab turiladi."
      }
    ]
  },
  "Das Mentoring-Programm 'Ein Tag mit...'": {
    titleUz: "«Bir kun birga...» mentorlik dasturi (Sprachbausteine)",
    vocab: [
      { de: "etwas hinter sich lassen", uz: "ortda qoldirmoq (imtihonlarni muvaffaqiyatli topshirmoq)" },
      { de: "einen Einblick bekommen", uz: "tasavvurga / ichki ko'rinishga ega bo'lmoq" },
      { de: "jemandem Mut machen", uz: "kimgadir ruh / jur'at bag'ishlamoq" },
      { de: "im Rahmen (+ Gen)", uz: "doirasida" },
      { de: "an Kontakte anknüpfen", uz: "aloqalarni bog'lamoq / davom ettirmoq" },
      { de: "jemandem zugutekommen", uz: "kimgadir foyda keltirmoq" },
      { de: "beruhen auf (+ Dat)", uz: "...ga asoslanmoq" },
      { de: "sich auseinandersetzen mit", uz: "...bilan chuqur shug'ullanmoq / tahlil qilmoq" },
      { de: "sich Kenntnis verschaffen über", uz: "...haqida ma'lumotga / bilimga ega bo'lmoq" },
      { de: "ungeachtet (+ Gen)", uz: "...ga qaramasdan" },
      { de: "verfügen über (+ Akk)", uz: "...ga ega bo'lmoq" },
      { de: "vertraut sein mit", uz: "...bilan yaxshi tanish bo'lmoq" }
    ],
    paragraphs: [
      {
        label: "Matnning o'zbekcha mazmuni",
        uz: "Gumanitar va ijtimoiy fanlar talabalaridan o'qishni bitirgach qanday kasbiy rejalar tuzayotgani tez-tez so'raladi. Fakultetda tashkil etilgan «Ein Tag mit...» mentorlik dasturi bo'lajak mutaxassislarga real ish sohalari bilan amaliy tanishish imkonini beradi. Ushbu amaliyot talabalarga nazariy bilimni amaliyot bilan bog'lash va foydali aloqalar o'rnatishda katta yordam beradi."
      }
    ]
  }
};
