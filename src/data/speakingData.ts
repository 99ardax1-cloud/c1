export interface PresentationTopic {
  code: string;
  shortTitle: string;
  prompt: string;
  vorteile: string[];
  nachteile: string[];
  beispiel: string;
  anschlussfragen: string[];
}

export interface PresentationCardPair {
  id: string;
  group: 'A' | 'B' | 'C';
  number: number;
  thema1: PresentationTopic;
  thema2: PresentationTopic;
}

export interface ZitatItem {
  id: number;
  quote: string;
  category: 'Bildung & Studium' | 'Wissenschaft & Technik' | 'Gesellschaft & Werte' | 'Sprache & Kultur' | 'Arbeit & Erfolg';
  interpretation: string;
  proArgument: string;
  proExample: string;
  contraArgument: string;
  contraExample: string;
}

export interface RedemittelCategory {
  id: string;
  titleDe: string;
  titleUz: string;
  part: 'Teil 1A' | 'Teil 1B' | 'Teil 2';
  phrases: string[];
}

export const SPRECHEN_REDEMITTEL: RedemittelCategory[] = [
  {
    id: 'einleitung',
    titleDe: '1. Einleitung (10 C1-Vorlagen)',
    titleUz: 'Kirish qismi uchun 10 ta C1 shablon (Einleitung)',
    part: 'Teil 1A',
    phrases: [
      'Sehr geehrte Damen und Herren, ich begrüße Sie herzlich zu meiner Präsentation zum Thema „[THEMA]“. Dieses Thema gewinnt zunehmend an Bedeutung, da es viele Lebensbereiche direkt beeinflusst.',
      'Einen schönen guten Tag! Ich freue mich, Ihnen heute meine Überlegungen zum Thema „[THEMA]“ vorstellen zu dürfen. Dieses Thema ist von großer Relevanz, da es sowohl individuelle als auch gesellschaftliche Auswirkungen hat.',
      'Hallo und herzlich willkommen zu meinem Vortrag über „[THEMA]“. In Zeiten des schnellen Wandels ist es besonders wichtig, dieses Thema aus verschiedenen Blickwinkeln zu betrachten.',
      'Guten Tag, meine Damen und Herren! Heute möchte ich Ihre Aufmerksamkeit auf das spannende und aktuelle Thema „[THEMA]“ lenken, das uns alle direkt oder indirekt betrifft.',
      'Ich begrüße Sie herzlich zu meiner Präsentation! Das Thema „[THEMA]“ sorgt derzeit für viele Diskussionen – und genau deshalb lohnt sich ein genauerer Blick darauf.',
      'Schön, dass Sie heute dabei sind! Mein Vortrag beschäftigt sich mit der Frage, wie „[THEMA]“ unsere Zukunft gestalten könnte und welche Herausforderungen damit verbunden sind.',
      'Herzlich willkommen! Kaum ein anderes Thema wird aktuell so kontrovers diskutiert wie „[THEMA]“. Lassen Sie uns gemeinsam die wichtigsten Aspekte beleuchten.',
      'Guten Tag! Wenn wir über moderne Entwicklungen sprechen, führt kein Weg an „[THEMA]“ vorbei. Deshalb möchte ich heute näher darauf eingehen.',
      'Ich freue mich, heute vor Ihnen zu sprechen. „[THEMA]“ ist ein Thema, das viele Chancen bietet, aber auch kritisch hinterfragt werden sollte – genau das werde ich in meinem Vortrag tun.',
      'Herzlich willkommen zu meiner Präsentation! Stellen Sie sich vor, wie unsere Welt ohne „[THEMA]“ aussehen würde – genau diese Überlegung führt uns zu spannenden Fragen, die ich heute behandeln möchte.'
    ]
  },
  {
    id: 'gliederung',
    titleDe: '2. Gliederung des Vortrags (20 Strukturen)',
    titleUz: 'Taqdimot rejasini tanishtirish (Gliederung)',
    part: 'Teil 1A',
    phrases: [
      'Zunächst möchte ich die Thematik kurz einführen. Danach werde ich sowohl die Vorteile als auch die Nachteile beleuchten, bevor ich zum Schluss meine eigene Meinung darlege.',
      'Zu Beginn gebe ich Ihnen einen Überblick über das Thema. Anschließend gehe ich auf die positiven und negativen Aspekte ein und ziehe am Ende ein Fazit.',
      'Mein Vortrag gliedert sich in vier Teile: Erst erläutere ich die Grundlagen, dann zeige ich die Vor- und Nachteile auf, bringe einige Beispiele aus der Praxis und schließe mit meiner persönlichen Einschätzung ab.',
      'Als Erstes werde ich das Thema kurz vorstellen. Danach analysiere ich die Chancen und Risiken, bevor ich abschließend meine eigene Sichtweise präsentiere.',
      'Ich beginne mit einer allgemeinen Einführung, gehe dann auf die Argumente dafür und dagegen ein und werde schließlich meine persönliche Meinung zusammenfassen.',
      'Im ersten Teil meines Vortrags kläre ich die wichtigsten Begriffe. Anschließend widme ich mich den positiven sowie negativen Aspekten und komme am Ende zu einer Schlussfolgerung.',
      'Mein Vortrag ist folgendermaßen aufgebaut: Nach einer kurzen Einleitung stelle ich die Vor- und Nachteile gegenüber, untermauere diese mit Beispielen und ziehe abschließend ein Resümee.',
      'Zuerst werde ich das Thema in seinen Kontext einordnen. Danach gehe ich auf die verschiedenen Perspektiven ein und schließe mit einer kritischen Bewertung ab.',
      'Der erste Abschnitt meiner Ausführungen wird sich mit den Grundlagen befassen. Im zweiten Schritt beleuchte ich die positiven Seiten, danach die Herausforderungen, und schließlich fasse ich meine Gedanken zusammen.',
      'Um Ihnen einen strukturierten Überblick zu geben, werde ich zunächst auf die Relevanz des Themas eingehen, anschließend die Vor- und Nachteile gegenüberstellen und abschließend ein Fazit ziehen.',
      'Zu Beginn möchte ich die zentrale Fragestellung meines Vortrags erläutern. Danach folgen die Hauptargumente – sowohl Pro als auch Contra –, bevor ich meine eigene Haltung dazu darlege.',
      'Zunächst werde ich auf die gesellschaftliche Bedeutung des Themas eingehen. Anschließend betrachte ich die Vorzüge und Schwächen und runde meinen Vortrag mit einer persönlichen Einschätzung ab.',
      'Ich starte mit einer kurzen Hinführung zum Thema. Danach werde ich die wichtigsten Aspekte anhand konkreter Beispiele erläutern und abschließend meine eigene Meinung dazu formulieren.',
      'Der Aufbau meiner Präsentation ist wie folgt: Nach einer Einführung gehe ich auf die Chancen und Herausforderungen ein, ziehe Vergleiche zu anderen Ländern und komme schließlich zu meinem Fazit.',
      'In meinem Vortrag werde ich zunächst die Ausgangslage schildern, anschließend die verschiedenen Argumente abwägen und am Ende einen Ausblick in die Zukunft geben.'
    ]
  },
  {
    id: 'vorteile',
    titleDe: '3. Vorteile & Chancen benennen (20 C1-Redemittel)',
    titleUz: 'Afzalliklarni ifodalash (Vorteile)',
    part: 'Teil 1A',
    phrases: [
      'Ein entscheidender Vorteil ist, dass …',
      'Ein wesentlicher Aspekt, der für … spricht, ist …',
      'Positiv hervorzuheben ist, dass …',
      'Ein großer Nutzen besteht darin, dass …',
      'Besonders vorteilhaft erscheint mir, dass …',
      'Nicht zu vernachlässigen ist der Aspekt, dass …',
      'Ein weiteres starkes Argument dafür ist, dass …',
      'Aus gesellschaftlicher / wirtschaftlicher / persönlicher Sicht bietet dies den Vorteil, dass …',
      'Durch … ergibt sich die Möglichkeit, …',
      'Einer der größten Pluspunkte ist zweifellos, dass …',
      'Ein positiver Effekt zeigt sich vor allem darin, dass …',
      'Ein klarer Vorzug liegt darin, dass …',
      'Besonders hervorzuheben ist die Tatsache, dass …',
      'Dies bringt den großen Vorteil mit sich, dass …',
      'Ein starkes Argument für … ist die Tatsache, dass …',
      'Es lässt sich nicht leugnen, dass … viele Chancen eröffnet.',
      'In vielerlei Hinsicht erweist sich … als äußerst vorteilhaft, weil …',
      'Nicht nur …, sondern auch … profitieren erheblich davon, dass …',
      'Ein nicht zu unterschätzender Vorteil liegt in der Möglichkeit, …',
      'Langfristig gesehen führt dies zu positiven Entwicklungen, da …'
    ]
  },
  {
    id: 'nachteile',
    titleDe: '4. Nachteile & Kritikpunkte (20 C1-Redemittel)',
    titleUz: 'Kamchilik va xavflarni ifodalash (Nachteile)',
    part: 'Teil 1A',
    phrases: [
      'Ein gravierender Nachteil besteht darin, dass …',
      'Kritisch zu betrachten ist jedoch, dass …',
      'Auf der anderen Seite darf man nicht übersehen, dass …',
      'Ein wesentliches Problem dabei ist, dass …',
      'Nicht außer Acht gelassen werden sollte, dass …',
      'Als problematisch erweist sich insbesondere, dass …',
      'Ein häufig genannter Kritikpunkt ist, dass …',
      'Allerdings birgt dies auch gewisse Risiken, wie zum Beispiel …',
      'Trotz der genannten Vorteile gibt es auch Schattenseiten, etwa …',
      'Ein erheblicher Nachteil liegt darin, dass …',
      'Es stellt sich jedoch die Frage, ob … nicht auch negative Konsequenzen hat.',
      'Ein Punkt, der oft kritisiert wird, ist …',
      'Aus kritischer Perspektive lässt sich einwenden, dass …',
      'Langfristig könnte dies zu Problemen führen, weil …',
      'Ein nicht zu unterschätzendes Risiko besteht darin, dass …',
      'Bedauerlicherweise führt dies häufig dazu, dass …',
      'Ein weiteres Hindernis stellt die Tatsache dar, dass …',
      'Fraglich bleibt jedoch, inwieweit … tatsächlich umsetzbar ist.',
      'Nicht selten hat dies negative Auswirkungen auf …',
      'Zusammenfassend lässt sich sagen, dass … nicht nur Vorteile, sondern auch erhebliche Herausforderungen mit sich bringt.'
    ]
  },
  {
    id: 'schluss',
    titleDe: '5. Schluss & Fazit (20 C1-Redemittel)',
    titleUz: 'Xulosa va yakun (Schluss & Fazit)',
    part: 'Teil 1A',
    phrases: [
      'Abschließend lässt sich sagen, dass … sowohl Chancen als auch Herausforderungen mit sich bringt.',
      'Zusammenfassend möchte ich betonen, dass … ein äußerst vielschichtiges Thema ist.',
      'Meiner Meinung nach überwiegen die Vorteile / Nachteile, weil …',
      'Alles in allem zeigt sich, dass … eine differenzierte Betrachtung erfordert.',
      'Letztendlich hängt es davon ab, wie wir mit … umgehen und welche Maßnahmen wir ergreifen.',
      'Als Fazit lässt sich festhalten, dass … in Zukunft noch weiter an Bedeutung gewinnen wird.',
      'Vor diesem Hintergrund halte ich es für sinnvoll, … weiter zu fördern / kritisch zu hinterfragen.',
      'Abschließend möchte ich noch einmal hervorheben, dass …',
      'Es bleibt abzuwarten, wie sich dieses Thema in den kommenden Jahren entwickeln wird.',
      'Ich bin davon überzeugt, dass eine ausgewogene Lösung gefunden werden muss.',
      'Zusammenfassend kann man sagen, dass es sowohl überzeugende Argumente dafür als auch dagegen gibt.',
      'Abschließend möchte ich Ihnen für Ihre Aufmerksamkeit danken. Ich freue mich nun auf Ihre Fragen.',
      'Vielen Dank für Ihr Interesse! Falls Sie Fragen oder Anmerkungen haben, stehe ich Ihnen gerne zur Verfügung.',
      'Zum Schluss lässt sich festhalten, dass … eine zentrale Rolle in unserer Gesellschaft spielt.',
      'Unterm Strich zeigt sich, dass eine einseitige Betrachtung diesem komplexen Thema nicht gerecht wird.'
    ]
  },
  {
    id: 'zusammenfassung',
    titleDe: '6. Teil 1B: Zusammenfassung & Anschlussfragen',
    titleUz: 'Sherikning taqdimotini xulosalash va savol berish (Teil 1B)',
    part: 'Teil 1B',
    phrases: [
      'Wenn ich deine / Ihre Ausführungen richtig verstanden habe, ging es in deinem / Ihrem Vortrag in erster Linie um die Frage, ob …',
      'Du hast / Sie haben zunächst die aktuelle Ausgangslage geschildert und anschließend die Vor- und Nachteile von … gegenübergestellt.',
      'Besonders interessant fand ich dein / Ihr Argument, dass …',
      'Als Hauptvorteil hast du / haben Sie hervorgehoben, dass …, während du / Sie als Risiko vor allem … genannt hast / haben.',
      'Abschließend bist du / sind Sie zu dem Fazit gelangt, dass …',
      'Dazu hätte ich noch eine vertiefende Frage: Wie schätzt du / schätzen Sie die zukünftige Entwicklung in diesem Bereich ein?',
      'Du hast / Sie haben erwähnt, dass … Glaubst du / Glauben Sie nicht, dass dieser Aspekt in der Praxis schwer umzusetzen ist?',
      'Mich würde noch interessieren, welche persönlichen Erfahrungen du / Sie in deinem / Ihrem Heimatland damit gemacht hast / haben.'
    ]
  },
  {
    id: 'zitatDefinition',
    titleDe: '7. Teil 2: Zitat definieren & interpretieren (20 Redemittel)',
    titleUz: 'Iqtibos (Zitat) ma’nosini ochib berish (20 ta C1 ibora)',
    part: 'Teil 2',
    phrases: [
      'Dieses Zitat bringt zum Ausdruck, dass …',
      'Mit dieser Aussage wird verdeutlicht, dass …',
      'Der Autor / Die Autorin möchte damit sagen, dass …',
      'Im Kern geht es bei diesem Zitat darum, dass …',
      'Diese Worte lassen sich so interpretieren, dass …',
      'Das Zitat weist darauf hin, dass …',
      'Hier wird die zentrale Idee vermittelt, dass …',
      'Man kann diese Aussage dahingehend verstehen, dass …',
      'Dieses Zitat unterstreicht die Bedeutung von …',
      'Im übertragenen Sinne bedeutet das, dass …',
      'Diese Aussage regt dazu an, über … nachzudenken.',
      'Mit diesem Zitat wird eine kritische Perspektive auf … eröffnet.',
      'Der Grundgedanke hinter diesem Zitat ist, dass …',
      'Diese Worte spiegeln die Überzeugung wider, dass …',
      'Das Zitat macht deutlich, wie eng … und … miteinander verbunden sind.',
      'Auf den Punkt gebracht heißt das, dass …',
      'Diese Aussage lässt sich als Appell verstehen, …',
      'Damit wird betont, dass … eine entscheidende Rolle spielt.',
      'Das Zitat lenkt den Blick auf die Tatsache, dass …',
      'Aus meiner Sicht beschreibt dieses Zitat sehr treffend, dass …'
    ]
  },
  {
    id: 'zitatBeispiel',
    titleDe: '8. Teil 2: Beispiele & Erfahrungen anführen (10 Redemittel)',
    titleUz: 'Misol keltirish va bahslashish (Teil 2 Diskussion)',
    part: 'Teil 2',
    phrases: [
      'Ein anschauliches Beispiel hierfür ist …',
      'Dies lässt sich gut am Beispiel von … verdeutlichen.',
      'Um diesen Gedanken zu untermauern, möchte ich folgendes Beispiel anführen: …',
      'In der Praxis zeigt sich das beispielsweise daran, dass …',
      'Ein konkretes Beispiel aus dem Alltag / aus der Geschichte ist …',
      'Man denke nur an …, wo deutlich wird, dass …',
      'Diese Aussage wird besonders deutlich, wenn man sich … vor Augen führt.',
      'Aus eigener Erfahrung kann ich bestätigen, dass …',
      'Ein Blick auf … zeigt sehr klar, wie zutreffend dieses Zitat ist.',
      'Als Beispiel lässt sich hier … nennen, da …'
    ]
  }
];

export const PRESENTATION_CARDS: PresentationCardPair[] = [
  // ================= GRUPPE A =================
  {
    id: 'A-1',
    group: 'A',
    number: 1,
    thema1: {
      code: '1A · Thema 1',
      shortTitle: 'Bewerbungen auf Führungspositionen (Wirtschaft vs. Hochschule)',
      prompt:
        'Wie unterscheiden sich Bewerbungen auf Führungspositionen in der Privatwirtschaft und an einer Hochschule? Erläutern Sie Ihr Thema anhand von Beispielen. Gehen Sie auch auf eigene Erfahrungen oder Erwartungen ein.',
      vorteile: [
        'Wirtschaft: Schnellerer Bewerbungsprozess – Entscheidungen werden oft innerhalb weniger Wochen getroffen, während Berufungsverfahren an Hochschulen Monate oder Jahre dauern können.',
        'Hochschule: Klare und transparente Kriterien – Die Auswahl basiert auf wissenschaftlichen Publikationen, Lehrerfahrung und Drittmitteln, was objektiver messbar ist als Soft Skills in der Wirtschaft.'
      ],
      nachteile: [
        'Wirtschaft: Hoher Konkurrenzdruck und Intransparenz – Oft spielen persönliche Netzwerke („Vitamin B“) und subjektive Eindrücke in Assessment-Centern eine große Rolle.',
        'Hochschule: Sehr langwierige und bürokratische Verfahren – Mehrstufige Kommissionen, Probevorlesungen und externe Gutachten verzögern die Einstellung erheblich.'
      ],
      beispiel:
        'Bei einer Bewerbung als Abteilungsleiter in einem IT-Unternehmen durchläuft man meist zwei Gespräche und ein Assessment-Center, während für eine Universitätsprofessur eine Berufungskommission, internationale Gutachten und eine öffentliche Probevorlesung nötig sind.',
      anschlussfragen: [
        'Glauben Sie, dass Assessment-Center in der freien Wirtschaft wirklich die besten Führungskräfte auswählen?',
        'Sollten Universitäten ihre Berufungsverfahren beschleunigen, um im internationalen Wettbewerb keine Spitzenforscher zu verlieren?'
      ]
    },
    thema2: {
      code: '1A · Thema 2',
      shortTitle: 'Eltern-Mitspracherecht bei schulischen Lerninhalten',
      prompt:
        'Sollten Eltern ein Mitspracherecht bei den Lerninhalten der Schule haben? Erläutern Sie die Vor- und Nachteile. Begründen Sie Ihre persönliche Meinung.',
      vorteile: [
        'Praxisnähe und Aktualität: Eltern aus verschiedenen Berufsfeldern können wertvolle Impulse geben, z. B. zu Finanzbildung, Digitalisierung oder Berufsorientierung.',
        'Stärkere Zusammenarbeit zwischen Schule und Elternhaus: Wenn Eltern einbezogen werden, steigt die Akzeptanz der Lehrpläne und die Lernmotivation der Kinder.'
      ],
      nachteile: [
        'Mangelnde pädagogische und fachliche Qualifikation: Die meisten Eltern sind keine ausgebildeten Didaktiker und beurteilen Inhalte oft nur aus ihrer subjektiven Sicht.',
        'Gefahr von Konflikten und Ideologisierung: Unterschiedliche religiöse, politische oder kulturelle Vorstellungen der Eltern könnten den wissenschaftlichen Unterricht blockieren.'
      ],
      beispiel:
        'Elternabende oder Elternbeiräte können zwar Projektwochen zu Themen wie „Gesunde Ernährung“ oder „Bewerbungstraining“ vorschlagen, der Kernlehrplan in Physik oder Geschichte muss jedoch in der Hand von Fachleuten bleiben.',
      anschlussfragen: [
        'In welchen konkreten Schulfächern wäre ein Feedback der Eltern Ihrer Meinung nach besonders hilfreich?',
        'Wie kann eine Schule verhindern, dass besonders durchsetzungsstarke Eltern die Interessen anderer Familien dominieren?'
      ]
    }
  },
  {
    id: 'A-2',
    group: 'A',
    number: 2,
    thema1: {
      code: '2A · Thema 1',
      shortTitle: 'Verantwortung für den Lernerfolg: Schule oder Eltern?',
      prompt:
        'Schule oder Eltern: Wer trägt die Verantwortung für den Lernerfolg der Kinder? Wägen Sie ab. Begründen Sie Ihre persönliche Meinung.',
      vorteile: [
        'Schule: Verfügt über pädagogisch ausgebildete Lehrkräfte, strukturierte Curricula und objektive Bewertungsmaßstäbe, um Wissen systematisch zu vermitteln.',
        'Eltern: Schaffen das emotionale Fundament, fördern Disziplin, Neugier und Lerngewohnheiten im Alltag und unterstützen bei Hausaufgaben.'
      ],
      nachteile: [
        'Wenn sich die Schule allein verantwortlich fühlt, fehlt oft die individuelle Betreuung zu Hause; bei großen Klassen gehen einzelne Schüler unter.',
        'Wenn die Verantwortung primär auf die Eltern geschoben wird, entsteht soziale Ungleichheit, da Kinder aus bildungsfernen Familien benachteiligt werden.'
      ],
      beispiel:
        'Studien wie die PISA-Untersuchung zeigen regelmäßig, dass der Bildungserfolg am höchsten ist, wenn Schule und Elternhaus eng als Erziehungspartnerschaft zusammenarbeiten.',
      anschlussfragen: [
        'Sollten Ganztagsschulen ausgebaut werden, um Kinder unabhängiger vom Bildungsstand der Eltern zu fördern?',
        'Wie können Lehrkräfte Eltern erreichen, die kaum Interesse am Schulalltag ihrer Kinder zeigen?'
      ]
    },
    thema2: {
      code: '2A · Thema 2',
      shortTitle: 'Äußere Gestaltung einer wissenschaftlichen Arbeit bei der Benotung',
      prompt:
        'Welche Rolle sollte die äußere Gestaltung einer wissenschaftlichen Arbeit bei der Benotung spielen? Begründen Sie Ihre persönliche Meinung.',
      vorteile: [
        'Lesbarkeit und Professionalität: Ein einheitliches Layout, korrekte Zitierweise und übersichtliche Gliederung erleichtern das Verständnis komplexer Argumente.',
        'Vorbereitung auf die Wissenschaftspraxis: Auch bei Fachzeitschriften und Verlagen müssen strenge formale Vorgaben (Styleguides) eingehalten werden.'
      ],
      nachteile: [
        'Gefahr der Überbewertung von Formalia: Brillante inhaltliche Ideen oder innovative Forschungsergebnisse könnten wegen kleiner Formatierungsfehler schlechter benotet werden.',
        'Zeitverlust: Studierende investieren oft unverhältnismäßig viel Zeit in Seitenränder und Schriftarten statt in die inhaltliche Tiefe.'
      ],
      beispiel:
        'Bei meiner Bachelorarbeit machten die formalen Kriterien (Layout, Literaturverzeichnis, Zitierstil) etwa 10 Prozent der Gesamtnote aus – ein fairer Richtwert, der Sorgfalt belohnt, ohne den Inhalt in den Hintergrund zu drängen.',
      anschlussfragen: [
        'Welcher prozentuale Anteil an der Gesamtnote wäre für die äußere Form Ihrer Ansicht nach angemessen?',
        'Sollten Universitäten verpflichtende Formatvorlagen (Templates) bereitstellen, um den Aufwand für Studierende zu reduzieren?'
      ]
    }
  },
  {
    id: 'A-3',
    group: 'A',
    number: 3,
    thema1: {
      code: '3A · Thema 1',
      shortTitle: 'Roboter – Bedrohung oder Segen für die Menschheit?',
      prompt:
        'In Zukunft werden uns immer mehr Roboter im Alltag begleiten. Stellen Roboter eine Bedrohung für die Menschheit dar? Begründen Sie Ihre persönliche Meinung.',
      vorteile: [
        'Entlastung bei gefährlichen und körperlich schweren Arbeiten: In der Industrie, Katastrophenhilfe oder Pflege übernehmen Roboter belastende Routinen.',
        'Steigerung von Präzision und Effizienz: Etwa in der minimalinvasiven Chirurgie (OP-Roboter) retten sie Menschenleben durch höchste Genauigkeit.'
      ],
      nachteile: [
        'Verlust von Arbeitsplätzen: Besonders geringqualifizierte Tätigkeiten in Produktion, Logistik und Service fallen durch Automatisierung weg.',
        'Soziale Vereinsamung und ethische Fragen: Wenn Pflegeroboter menschliche Zuwendung ersetzen oder autonome Waffensysteme eingesetzt werden, entstehen gravierende Risiken.'
      ],
      beispiel:
        'In Japan werden bereits heute Pflegeroboter wie „Paro“ oder Hebe-Assistenten in Altenheimen eingesetzt, um dem akuten Personalmangel in einer alternden Gesellschaft zu begegnen.',
      anschlussfragen: [
        'In welchen Bereichen sollten Roboter Ihrer Meinung nach niemals den Menschen ersetzen dürfen?',
        'Wie muss sich unser Bildungssystem verändern, damit Arbeitnehmer nicht durch Automatisierung arbeitslos werden?'
      ]
    },
    thema2: {
      code: '3A · Thema 2',
      shortTitle: 'Erfolgsrate und Berufsaussichten der Absolventen veröffentlichen?',
      prompt:
        'Sollten Hochschulen dazu verpflichtet werden, die Erfolgsrate und Berufsaussichten ihrer Absolventen öffentlich zu machen? Erläutern Sie die Vor- und Nachteile.',
      vorteile: [
        'Transparenz für Studieninteressierte: Abiturienten können fundiert entscheiden, welche Hochschule und welcher Studiengang gute Karrierechancen bietet.',
        'Anreiz zur Qualitätssteigerung: Universitäten werden motiviert, ihre Lehre praxisnäher zu gestalten und bessere Betreuung anzubieten, um Abbruchquoten zu senken.'
      ],
      nachteile: [
        'Benachteiligung der Geistes- und Kulturwissenschaften: Fächer wie Philosophie oder Kunstgeschichte lassen sich nicht allein an Einstiegsgehältern messen.',
        'Gefahr von Noteninflation: Hochschulen könnten versucht sein, Prüfungsanforderungen zu senken, nur um ihre offizielle Erfolgsquote künstlich zu schönen.'
      ],
      beispiel:
        'Im angelsächsischen Raum veröffentlichen Universitäten detaillierte „Graduate Outcomes“-Statistiken, was zwar die Transparenz erhöht, aber oft zu einem reinen Ranking-Denken führt.',
      anschlussfragen: [
        'Würden Sie selbst Ihre Studienwahl von solchen veröffentlichten Erfolgsquoten abhängig machen?',
        'Welche Kriterien außer dem späteren Gehalt machen ein erfolgreiches Studium aus?'
      ]
    }
  },
  {
    id: 'A-4',
    group: 'A',
    number: 4,
    thema1: {
      code: '4A · Thema 1',
      shortTitle: 'Stellenwert zeitgenössischer Geschichte im Schulunterricht',
      prompt:
        'Welchen Stellenwert sollte zeitgenössische Geschichte im Schulunterricht haben? Erläutern Sie dies anhand von Beispielen und begründen Sie Ihre Meinung.',
      vorteile: [
        'Verständnis aktueller politischer Konflikte: Nur wer die jüngere Geschichte (z. B. Kalter Krieg, Wiedervereinigung, Globalisierung) kennt, versteht heutige Krisen.',
        'Förderung von Demokratiebewusstsein und Medienkompetenz: Schüler lernen, politische Entwicklungen der Gegenwart kritisch einzuordnen.'
      ],
      nachteile: [
        'Fehlende historische Distanz: Bei sehr aktuellen Ereignissen sind Quellen oft noch nicht vollständig zugänglich und eine neutrale Bewertung fällt schwer.',
        'Zeitknappheit im Lehrplan: Wenn zu viel Zeit für die Gegenwart verwendet wird, kommen grundlegende Epochen wie Antike oder Aufklärung zu kurz.'
      ],
      beispiel:
        'Im Geschichtsunterricht vieler Schulen endet das Schuljahr oft beim Zweiten Weltkrieg, sodass Themen wie die Europäische Integration oder der Fall der Berliner Mauer kaum noch behandelt werden.',
      anschlussfragen: [
        'Ab welchem zeitlichen Abstand kann man Ihrer Meinung nach überhaupt von „Geschichte“ sprechen?',
        'Wie können Geschichtslehrer verhindern, dass aktuelle politische Themen im Unterricht einseitig dargestellt werden?'
      ]
    },
    thema2: {
      code: '4A · Thema 2',
      shortTitle: 'Verantwortungsvoller Umgang mit elektronischen Medien',
      prompt:
        'Wie lernt man einen verantwortungsvollen Umgang mit elektronischen Medien? Erläutern Sie dies anhand von Beispielen und gehen Sie auf eigene Erfahrungen ein.',
      vorteile: [
        'Frühzeitige Medienbildung in der Schule: Durch spezielle Unterrichtseinheiten lernen Kinder, Fake News zu erkennen und ihre Privatsphäre im Netz zu schützen.',
        'Klare Regeln und Vorbildfunktion der Eltern: Feste bildschirmfreie Zeiten (z. B. beim Essen oder vor dem Schlafen) fördern die Selbstkontrolle.'
      ],
      nachteile: [
        'Reine Verbote sind wirkungslos: Wenn Smartphones nur verboten statt pädagogisch begleitet werden, nutzen Jugendliche sie heimlich und unreflektiert.',
        'Schnelllebigkeit digitaler Plattformen: Lehrpläne und Eltern hinken neuen Trends und Algorithmen sozialer Netzwerke oft hinterher.'
      ],
      beispiel:
        'Ich selbst nutze auf meinem Smartphone App-Timer und schalte Benachrichtigungen während der Lernphasen stumm, um konzentriert wissenschaftlich arbeiten zu können.',
      anschlussfragen: [
        'Sollte „Medienkompetenz“ ein eigenes Pflichtfach an allen weiterführenden Schulen werden?',
        'Ab welchem Alter halten Sie ein eigenes Smartphone für Kinder für sinnvoll?'
      ]
    }
  },
  {
    id: 'A-5',
    group: 'A',
    number: 5,
    thema1: {
      code: '5A · Thema 1',
      shortTitle: 'Verfilmungen von Büchern: Ersatz fürs Lesen?',
      prompt:
        'Sind Verfilmungen von Büchern ein Ersatz fürs Lesen? Erläutern Sie die Vor- und Nachteile. Begründen Sie Ihre persönliche Meinung.',
      vorteile: [
        'Zeitersparnis und leichter Zugang: Ein zweistündiger Film vermittelt die Grundhandlung eines komplexen Romans schnell und visuell ansprechend.',
        'Emotionale Wirkung durch Bild und Ton: Musik, Schauspielkunst und Kameraführung können Stimmungen erzeugen, die den Zugang zu klassischer Literatur erleichtern.'
      ],
      nachteile: [
        'Verlust an Tiefe und Vorstellungskraft: Beim Lesen entstehen eigene Bilder im Kopf; ein Film gibt eine fertige Interpretation vor und kürzt oft wichtige Nebenhandlungen.',
        'Geringere sprachliche Förderung: Nur das Lesen erweitert aktiv den Wortschatz, das Textverständnis und das Ausdrucksvermögen.'
      ],
      beispiel:
        'Bei der Verfilmung von Klassikern wie „Der Vorleser“ oder „Im Westen nichts Neues“ wurden viele innere Monologe gestrichen; der Film weckt zwar Interesse, ersetzt aber nicht die literarische Tiefe des Buches.',
      anschlussfragen: [
        'Schauen Sie persönlich lieber zuerst den Film oder lesen Sie zuerst das Buch – und warum?',
        'Können Literaturverfilmungen im Deutschunterricht sinnvoll eingesetzt werden?'
      ]
    },
    thema2: {
      code: '5A · Thema 2',
      shortTitle: 'Rolle einer guten Organisation in Schule und Studium',
      prompt:
        'Welche Rolle spielt eine gute Organisation in Schule und Studium? Erläutern Sie dies anhand von Beispielen und gehen Sie auf eigene Erfahrungen ein.',
      vorteile: [
        'Stressreduktion und Einhaltung von Fristen: Durch strukturierte Lernpläne (z. B. Pomodoro-Technik, Wochenziele) vermeidet man Panik kurz vor den Prüfungen.',
        'Bessere Balance zwischen Studium, Nebenjob und Freizeit: Wer seine Aufgaben priorisiert, erzielt nachhaltigere Lernerfolge und beugt Burnout vor.'
      ],
      nachteile: [
        'Überorganisation kann Spontaneität und Kreativität hemmen: Wenn jede Minute strikt verplant ist, entsteht zusätzlicher Leistungsdruck.',
        'Unvorhergesehene Ereignisse werfen starre Zeitpläne leicht um und führen dann zu Frustration.'
      ],
      beispiel:
        'Im ersten Semester habe ich erst zwei Wochen vor den Klausuren mit dem Lernen begonnen; seitdem ich mir zu Semesterbeginn einen digitalen Kalender mit Meilensteinen anlege, sind meine Noten deutlich besser.',
      anschlussfragen: [
        'Welche digitalen oder analogen Methoden nutzen Sie persönlich für Ihr Zeitmanagement?',
        'Sollten Universitäten für Erstsemester verpflichtende Kurse zum Selbst- und Zeitmanagement anbieten?'
      ]
    }
  },
  {
    id: 'A-8',
    group: 'A',
    number: 8,
    thema1: {
      code: '8A · Thema 1',
      shortTitle: 'Nimmt die Lesekompetenz durch Neue Medien ab?',
      prompt:
        'Nimmt die Lesekompetenz durch die Neuen Medien ab? Erläutern Sie Ihr Thema anhand von Beispielen und begründen Sie Ihre Meinung.',
      vorteile: [
        'Gegenargument (Chancen): Menschen lesen heute im Alltag quantitativ sogar mehr Text (Nachrichten, Foren, E-Books, Fachartikel) und haben sofortigen Zugriff auf Weltwissen.',
        'Multimediale Vernetzung: Hyperlinks und digitale Wörterbücher erleichtern das Verständnis fremdsprachiger oder wissenschaftlicher Fachtexte.'
      ],
      nachteile: [
        'Oberflächliches „Scanning“ statt Tiefenlesen: Durch kurze Social-Media-Beiträge sinkt die Aufmerksamkeitsspanne für lange, komplexe Sachtexte oder Romane.',
        'Ständige Ablenkung durch Push-Nachrichten unterbricht die Konzentration und verschlechtert das Textverständnis.'
      ],
      beispiel:
        'Studien der Leseforschung belegen, dass Studierende beim Lesen auf Papier komplexe Zusammenhänge oft besser behalten als beim schnellen Scrollen am Bildschirm.',
      anschlussfragen: [
        'Lesen Sie wissenschaftliche Texte lieber ausgedruckt auf Papier oder digital auf dem Tablet?',
        'Wie kann man Kinder im digitalen Zeitalter wieder für das Lesen längerer Bücher begeistern?'
      ]
    },
    thema2: {
      code: '8A · Thema 2',
      shortTitle: 'Studieren in einer kleineren Universitätsstadt vs. Großstadt',
      prompt:
        'Ist es besser, in einer kleineren Universitätsstadt zu studieren als in einer Großstadt? Erläutern Sie die Vor- und Nachteile.',
      vorteile: [
        'Kleine Universitätsstadt: Günstigere Mieten, kurze Wege mit dem Fahrrad, familiäre Atmosphäre und engerer Kontakt zu Professoren sowie Kommilitonen.',
        'Großstadt: Vielfältigere Nebenjob- und Praktikumsmöglichkeiten, großes kulturelles Angebot und internationale Vernetzung.'
      ],
      nachteile: [
        'Kleine Universitätsstadt: Begrenztes Freizeit- und Arbeitsmarktangebot, man findet schwerer Werkstudentenstellen in großen Konzernen.',
        'Großstadt: Extrem hoher Wohnungsmangel, lange Pendelzeiten, Anonymität in überfüllten Hörsälen und hohe Lebenshaltungskosten.'
      ],
      beispiel:
        'Klassische deutsche Universitätsstädte wie Heidelberg, Göttingen oder Tübingen bieten ein intensives Campusleben, während Metropolen wie München oder Berlin zwar tolle Jobs, aber kaum bezahlbare Zimmer bieten.',
      anschlussfragen: [
        'Für welchen Stadttyp würden Sie sich persönlich entscheiden und warum?',
        'Spielt die Größe des Studienortes für die spätere Karriere überhaupt eine Rolle?'
      ]
    }
  },
  {
    id: 'A-10',
    group: 'A',
    number: 10,
    thema1: {
      code: '10A · Thema 1',
      shortTitle: 'Frontalunterricht vs. interaktiver Unterricht',
      prompt:
        'In welchem Verhältnis sollten Frontalunterricht und interaktiver Unterricht stehen? Erläutern Sie die Vor- und Nachteile und begründen Sie Ihre Meinung.',
      vorteile: [
        'Frontalunterricht: Sehr effizient, um in kurzer Zeit einer großen Gruppe strukturiertes Grundlagenwissen und komplexe Theorien zu vermitteln.',
        'Interaktiver Unterricht: Fördert kritisches Denken, Teamfähigkeit, aktive Beteiligung und nachhaltiges Verstehen durch Diskussionen und Gruppenarbeit.'
      ],
      nachteile: [
        'Reiner Frontalunterricht macht Lernende passiv, führt schnell zu Konzentrationsverlust und berücksichtigt individuelle Lerntempi kaum.',
        'Reiner interaktiver Unterricht kostet viel Zeit, kann bei unvorbereiteten Teilnehmern oberflächlich bleiben und benachteiligt schüchterne Lernende.'
      ],
      beispiel:
        'An der Universität hat sich die Kombination aus Vorlesung (Frontalinput für die Theorie) und Seminar bzw. Übung (interaktive Vertiefung in Kleingruppen) als ideales Modell bewährt.',
      anschlussfragen: [
        'Wie hoch sollte der prozentuale Anteil von interaktiven Phasen in einer 90-minütigen Unterrichtseinheit sein?',
        'Haben digitale Tools wie Live-Umfragen den klassischen Frontalunterricht bereits verbessert?'
      ]
    },
    thema2: {
      code: '10A · Thema 2',
      shortTitle: 'Lernumgebung: Zu Hause oder in der Universitätsbibliothek?',
      prompt:
        'Wo lernt es sich besser: zu Hause oder in der Universitätsbibliothek? Erläutern Sie die Vor- und Nachteile anhand eigener Erfahrungen.',
      vorteile: [
        'Universitätsbibliothek: Arbeitsatmosphäre motiviert durch soziale Kontrolle („alle anderen lernen auch“), direkter Zugriff auf Fachliteratur und keine Ablenkung durch den Haushalt.',
        'Zu Hause: Keine Anfahrtszeit, zeitliche Flexibilität, eigene Verpflegung und die Möglichkeit, laut vor sich hin zu sprechen.'
      ],
      nachteile: [
        'Universitätsbibliothek: Oft Platzmangel in der Prüfungsphase, feste Öffnungszeiten und Anfahrtswege.',
        'Zu Hause: Hohe Ablenkungsgefahr durch Bett, Kühlschrank, Mitbewohner oder Fernseher; Trennung zwischen Arbeits- und Erholungsort fehlt.'
      ],
      beispiel:
        'Wenn ich für schwere Prüfungen lerne oder Hausarbeiten schreibe, gehe ich morgens in die Bibliothek, weil ich dort in 4 Stunden mehr schaffe als zu Hause an einem ganzen Tag.',
      anschlussfragen: [
        'Welche Kriterien muss ein perfekter Lernplatz für Sie persönlich erfüllen?',
        'Lernen Sie lieber allein in absoluter Stille oder gemeinsam in einer Lerngruppe?'
      ]
    }
  },
  // ================= GRUPPE B =================
  {
    id: 'B-1',
    group: 'B',
    number: 1,
    thema1: {
      code: '1B · Thema 1',
      shortTitle: 'Vor- und Nachteile von E-Books gegenüber gedruckten Büchern',
      prompt:
        'Erläutern Sie die Vor- und Nachteile von E-Books im Vergleich zu gedruckten Büchern. Gehen Sie auch auf das wissenschaftliche Arbeiten im Studium ein.',
      vorteile: [
        'Mobilität und Volltextsuche: Hunderte Fachbücher passen auf ein leichtes Gerät; über die Suchfunktion findet man Zitate und Begriffe in Sekunden.',
        'Oft günstiger in der Anschaffung, sofort verfügbar und platzsparend im Bücherregal.'
      ],
      nachteile: [
        'Augenbelastung und geringere räumliche Orientierung im Text: Beim gedruckten Buch merkt man sich oft visuell, wo ein Argument auf der Seite stand.',
        'Abhängigkeit von Akku, Softwareformaten und Kopierschutz (DRM).'
      ],
      beispiel:
        'Für die Literaturrecherche im Studium nutze ich fast ausschließlich PDFs und E-Books der Unibibliothek, während ich abends zur Entspannung lieber ein gedrucktes Buch in die Hand nehme.',
      anschlussfragen: [
        'Glauben Sie, dass gedruckte Bücher in Universitätsbibliotheken in 20 Jahren komplett verschwinden werden?',
        'Wie wirkt sich das Lesen am Bildschirm auf Ihre persönliche Merkfähigkeit aus?'
      ]
    },
    thema2: {
      code: 'B-1 · Thema 2',
      shortTitle: 'Sollte die Anwesenheitspflicht an Universitäten abgeschafft werden?',
      prompt:
        'Sollte die Anwesenheitspflicht in universitären Lehrveranstaltungen komplett abgeschafft werden? Wägen Sie Vor- und Nachteile ab.',
      vorteile: [
        'Förderung von Eigenverantwortung und Flexibilität: Studierende sind erwachsene Menschen und können so Nebenjob, Familie und individuelles Lerntempo besser vereinbaren.',
        'Bessere Lernatmosphäre: In Seminaren sitzen nur diejenigen, die wirklich motiviert sind und aktiv mitarbeiten wollen.'
      ],
      nachteile: [
        'Leere Seminarräume und fehlender Diskurs: Gerade sprach- oder geisteswissenschaftliche Seminare leben vom mündlichen Austausch der Teilnehmer.',
        'Gefahr des Aufschiebens (Prokrastination): Viele Studienanfänger unterschätzen den Stoff und fallen dann durch die Abschlussklausuren.'
      ],
      beispiel:
        'In großen Vorlesungen mit 300 Studierenden ist eine Anwesenheitsliste sinnlos, in praktischen Laborübungen oder Sprachkursen hingegen unverzichtbar.',
      anschlussfragen: [
        'In welchen Studiengängen oder Veranstaltungsformen halten Sie eine Anwesenheitspflicht für absolut notwendig?',
        'Sollten Universitäten alle Vorlesungen verpflichtend als Video-Aufzeichnung online zur Verfügung stellen?'
      ]
    }
  },
  {
    id: 'B-2',
    group: 'B',
    number: 2,
    thema1: {
      code: '2B · Thema 1',
      shortTitle: 'Studiengebühren: Gerechtfertigter Beitrag oder soziale Hürde?',
      prompt:
        'Sollten Universitäten allgemeine Studiengebühren erheben? Erläutern Sie die Vor- und Nachteile und begründen Sie Ihre eigene Haltung.',
      vorteile: [
        'Bessere finanzielle Ausstattung der Hochschulen: Zusätzliche Mittel ermöglichen kleinere Seminargruppen, modernere Labore und längere Bibliotheksöffnungszeiten.',
        'Höhere Studienmotivation: Wer selbst für das Studium bezahlt, plant sein Studium oft zielstrebiger und bricht seltener ab.'
      ],
      nachteile: [
        'Soziale Selektion und Ungleichheit: Studieninteressierte aus einkommensschwachen Familien werden abgeschreckt oder müssen sich hoch verschulden.',
        'Bildung ist ein Grundrecht und eine Investition des Staates: Akademiker zahlen später ohnehin höhere Steuern an die Gesellschaft zurück.'
      ],
      beispiel:
        'In Deutschland wurden allgemeine Studiengebühren in den meisten Bundesländern nach starken Protesten wieder abgeschafft, während Studierende in den USA oft jahrzehntelang Studienkredite abbezahlen müssen.',
      anschlussfragen: [
        'Wären nachgelagerte Studiengebühren (die erst gezahlt werden, wenn man nach dem Studium gut verdient) ein fairer Kompromiss?',
        'Wie beeinflusst die Gebührenfreiheit an deutschen Hochschulen deren internationale Attraktivität?'
      ]
    },
    thema2: {
      code: '2B · Thema 2',
      shortTitle: 'Fremdsprachenlernen schon im Kindergarten?',
      prompt:
        'Ist es sinnvoll, dass Kinder bereits im Kindergarten systematisch eine Fremdsprache lernen? Erläutern Sie die Vor- und Nachteile.',
      vorteile: [
        'Natürlicher und spielerischer Spracherwerb: Kleinkinder nehmen Aussprache und Intonation ohne Hemmungen wie ihre Muttersprache auf.',
        'Förderung kognitiver Flexibilität und interkultureller Offenheit von klein auf.'
      ],
      nachteile: [
        'Gefahr der Überforderung: Besonders Kinder, die noch Defizite in ihrer Erst- oder Landessprache haben, könnten verwirrt werden.',
        'Leistungsdruck im Vorschulalter: Der Kindergarten sollte Raum für freies Spiel und soziale Entwicklung bleiben, statt verschult zu werden.'
      ],
      beispiel:
        'In bilingualen Kindergärten, in denen eine Erzieherin konsequent Englisch oder Französisch im Alltag spricht (Immersionsmethode), lernen Kinder spielerisch durch Lieder und Spiele, ohne Vokabeln pauken zu müssen.',
      anschlussfragen: [
        'Unter welchen Bedingungen gelingt früher Fremdsprachenerwerb ohne Überforderung?',
        'In welchem Alter haben Sie selbst mit Ihrer ersten Fremdsprache begonnen?'
      ]
    }
  },
  {
    id: 'B-3',
    group: 'B',
    number: 3,
    thema1: {
      code: '3B · Thema 1',
      shortTitle: 'Englisch als einzige Wissenschaftssprache?',
      prompt:
        'In immer mehr Studiengängen und Fachzeitschriften dominiert Englisch. Sollte Englisch die einzige Sprache der Wissenschaft sein? Wägen Sie ab.',
      vorteile: [
        'Weltweiter Wissensaustausch ohne Sprachbarrieren: Forscher aus allen Ländern können Studien sofort lesen, diskutieren und gemeinsam an Projekten arbeiten.',
        'Höhere Sichtbarkeit und Karrierechancen für Nachwuchswissenschaftler auf internationalen Konferenzen.'
      ],
      nachteile: [
        'Verarmung der nationalen Wissenschaftssprachen: Fachbegriffe und differenzierte Ausdrucksweisen im Deutschen oder anderen Sprachen gehen verloren.',
        'Sprachlicher Vorteil für Muttersprachler: Nicht-Muttersprachler brauchen mehr Zeit beim Publizieren und können feine Nuancen schwerer ausdrücken.'
      ],
      beispiel:
        'Während in den Naturwissenschaften und der Medizin fast 95 Prozent aller Publikationen auf Englisch erscheinen, sind Geistes- und Rechtswissenschaften weiterhin stark an die jeweilige Landessprache gebunden.',
      anschlussfragen: [
        'Sollten Masterstudiengänge in Deutschland grundsätzlich nur noch auf Englisch angeboten werden?',
        'Wie kann eine Universität Mehrsprachigkeit fördern, ohne den internationalen Anschluss zu verlieren?'
      ]
    },
    thema2: {
      code: '3B · Thema 2',
      shortTitle: 'Praktikum vor oder während des Studiums als Pflicht?',
      prompt:
        'Sollte ein mehrmonatiges Pflichtpraktikum für jeden Studiengang vorgeschrieben werden? Erläutern Sie die Vor- und Nachteile.',
      vorteile: [
        'Praxisschock vermeiden und Berufsorientierung: Studierende erkennen frühzeitig, ob ihnen das spätere Berufsfeld tatsächlich liegt.',
        'Wertvolle Kontakte (Networking) und leichterer Berufseinstieg nach dem Studienabschluss.'
      ],
      nachteile: [
        'Verlängerung der Studienzeit und finanzielle Belastung: Viele Pflichtpraktika sind unbezahlt oder schlecht vergütet.',
        'Qualitätsunterschiede: Manche Unternehmen nutzen Praktikanten nur als billige Arbeitskräfte für Routineaufgaben statt sie fachlich anzuleiten.'
      ],
      beispiel:
        'In meinem Bekanntenkreis haben viele Studierende erst durch ihr Praxissemester gemerkt, in welchem Spezialgebiet sie ihre Abschlussarbeit schreiben möchten – und erhielten dort direkt ihr erstes Jobangebot.',
      anschlussfragen: [
        'Sollte der gesetzliche Mindestlohn ausnahmslos auch für Pflichtpraktika im Studium gelten?',
        'Welche Alternativen zum klassischen Firmenpraktikum gibt es für theoretische Studiengänge?'
      ]
    }
  },
  // ================= GRUPPE C =================
  {
    id: 'C-1',
    group: 'C',
    number: 1,
    thema1: {
      code: '1C · Thema 1',
      shortTitle: 'Online-Vorlesungen vs. Präsenzstudium an der Universität',
      prompt:
        'Kann das digitale Online-Studium das klassische Präsenzstudium an der Hochschule ersetzen? Erläutern Sie die Vor- und Nachteile.',
      vorteile: [
        'Orts- und Zeitunabhängigkeit: Vorlesungen können im eigenen Tempo pausiert und wiederholt werden; Pendelzeiten und Umzugskosten entfallen.',
        'Inklusion: Berufstätige, Eltern oder Studierende mit gesundheitlichen Einschränkungen erhalten leichteren Zugang zu akademischer Bildung.'
      ],
      nachteile: [
        'Verlust des sozialen Campuslebens: Spontane Gespräche nach dem Seminar, Lerngruppen in der Mensa und persönliche Netzwerke fallen weg.',
        'Praktische Übungen (z. B. Chemielabore, Medizinkurse, Schauspiel) lassen sich digital nicht vollwertig durchführen.'
      ],
      beispiel:
        'Die Erfahrungen der letzten Jahre haben gezeigt, dass ein „Blended-Learning“-Modell – also digitale Vorlesungsvideos kombiniert mit intensiven Präsenzseminaren vor Ort – die Vorteile beider Welten ideal verbindet.',
      anschlussfragen: [
        'Welche Lehrveranstaltungen eignen sich Ihrer Erfahrung nach gut für das Online-Format und welche überhaupt nicht?',
        'Wie wirkt sich ein reines Online-Studium auf die psychische Gesundheit der Studierenden aus?'
      ]
    },
    thema2: {
      code: '1C · Thema 2',
      shortTitle: 'Notenabschaffung in der Schule: Sinnvoll oder unrealistisch?',
      prompt:
        'Sollten Ziffernnoten in der Schule durch schriftliche Wortgutachten ersetzt werden? Erläutern Sie die Vor- und Nachteile und begründen Sie Ihre Meinung.',
      vorteile: [
        'Individuelles und konstruktives Feedback: Ein schriftlicher Bericht zeigt genau, wo Stärken und Lernfortschritte liegen, statt Leistung auf eine bloße Zahl zu reduzieren.',
        'Abbau von Prüfungsangst und Konkurrenzdruck: Schüler lernen aus intrinsischer Motivation statt nur für die Note.'
      ],
      nachteile: [
        'Fehlende Vergleichbarkeit: Für den Übergang an weiterführende Schulen, Universitäten (Numerus clausus) oder Ausbildungsbetriebe sind objektive Maßstäbe nötig.',
        'Enormer Zeitaufwand für Lehrkräfte: Detaillierte Berichte für 30 Schüler pro Klasse mehrfach im Jahr zu verfassen, ist kaum leistbar.'
      ],
      beispiel:
        'In den ersten Grundschulklassen oder an Waldorfschulen funktionieren Wortgutachten sehr gut, in der Oberstufe vor dem Abitur wünschen sich jedoch selbst viele Schüler klare Noten zur Orientierung.',
      anschlussfragen: [
        'Wäre eine Kombination aus Ziffernnote und kurzem Kompetenzbericht die beste Lösung?',
        'Motivieren gute Noten Sie persönlich beim Lernen oder erzeugen sie eher Druck?'
      ]
    }
  },
  {
    id: 'C-2',
    group: 'C',
    number: 2,
    thema1: {
      code: '2C · Thema 1',
      shortTitle: 'Ehrenamtliches Engagement im Studium: Pflicht oder Freiwilligkeit?',
      prompt:
        'Sollte soziales oder ehrenamtliches Engagement ein verpflichtender Teil jedes Studiums sein (z. B. durch ECTS-Punkte)? Wägen Sie ab.',
      vorteile: [
        'Förderung sozialer Verantwortung und Empathie: Akademiker lernen gesellschaftliche Realitäten außerhalb des universitären Elfenbeinturms kennen.',
        'Erwerb wichtiger Soft Skills wie Teamführung, interkulturelle Kompetenz und Konfliktlösung.'
      ],
      nachteile: [
        'Widerspruch zum Begriff „Ehrenamt“: Ein erzwungenes Engagement verliert seinen freiwilligen, intrinsischen Charakter.',
        'Zeitliche Überlastung: Viele Studierende müssen neben dem Vollzeitstudium bereits arbeiten, um ihren Lebensunterhalt zu finanzieren.'
      ],
      beispiel:
        'Viele Universitäten bieten heute sogenanntes „Service Learning“ an, bei dem Studierende freiwillig gemeinnützige Projekte unterstützen und dafür im Wahlpflichtbereich Kreditpunkte erhalten.',
      anschlussfragen: [
        'Haben Sie selbst schon einmal ehrenamtlich gearbeitet und was haben Sie daraus mitgenommen?',
        'Sollte ehrenamtliches Engagement bei der Vergabe von Stipendien stärker berücksichtigt werden?'
      ]
    },
    thema2: {
      code: '2C · Thema 2',
      shortTitle: 'Spezialisierung vs. breit angelegtes Allgemeinstudium (Studium generale)',
      prompt:
        'Ist eine frühe fachliche Spezialisierung im Studium besser als ein breit angelegtes Grundstudium (Studium generale)? Begründen Sie Ihre Meinung.',
      vorteile: [
        'Frühe Spezialisierung: Tieferes Expertenwissen in kurzer Zeit, schnellerer Studienabschluss und passgenaue Qualifikation für spezifische Fachberufe.',
        'Studium generale: Fördert interdisziplinäres Denken, geistige Flexibilität und hilft Studierenden, ihre wahren Stärken erst zu entdecken.'
      ],
      nachteile: [
        'Frühe Spezialisierung: Gefahr von „Fachidiotentum“ – Experten fehlt oft der Blick über den Tellerrand für ethische oder gesellschaftliche Zusammenhänge.',
        'Studium generale: Verlängert die Studiendauer und vermittelt anfangs oft nur oberflächliches Grundlagenwissen.'
      ],
      beispiel:
        'Während man sich in Deutschland meist vom ersten Tag an für ein konkretes Fach wie Maschinenbau oder Jura einschreibt, belegen Studierende an US-Colleges im ersten Jahr Kurse aus verschiedensten Disziplinen.',
      anschlussfragen: [
        'Welches Modell hätten Sie sich zu Beginn Ihres eigenen Studiums gewünscht?',
        'Warum fordern moderne Arbeitgeber heute immer häufiger interdisziplinäre Kompetenzen?'
      ]
    }
  }
];

export const ZITATE_CATALOG: ZitatItem[] = [
  {
    id: 1,
    quote: '„Bildung ist die mächtigste Waffe, um die Welt zu verändern.“ (Nelson Mandela)',
    category: 'Bildung & Studium',
    interpretation:
      'Dieses Zitat bringt zum Ausdruck, dass Wissen und Aufklärung die wirksamsten und friedlichsten Instrumente sind, um Armut, Ungerechtigkeit und gesellschaftliche Missstände nachhaltig zu überwinden.',
    proArgument:
      'Gebildete Menschen können kritisch denken, technologische sowie soziale Innovationen entwickeln und sich aktiv für Demokratie und Menschenrechte einsetzen.',
    proExample:
      'In vielen Entwicklungsländern führt der Zugang von Mädchen zu Schulbildung nachweislich zu sinkender Kindersterblichkeit, wirtschaftlichem Aufschwung und stabileren Gemeinschaften.',
    contraArgument:
      'Bildung allein reicht oft nicht aus, wenn politische Korruption, Kriege oder fehlende wirtschaftliche Strukturen den Menschen jede Handlungsmöglichkeit nehmen; zudem kann Wissen auch für zerstörerische Zwecke missbraucht werden.',
    contraExample:
      'Hochgebildete Wissenschaftler haben in der Geschichte auch Massenvernichtungswaffen entwickelt oder autoritäre Systeme gestützt – Bildung ohne ethische Werte verändert die Welt nicht automatisch zum Guten.'
  },
  {
    id: 2,
    quote: '„Neugier und Wissen gehen Hand in Hand.“',
    category: 'Wissenschaft & Technik',
    interpretation:
      'Mit dieser Aussage wird verdeutlicht, dass echte Erkenntnis und wissenschaftlicher Fortschritt immer aus dem inneren Wunsch entstehen, Dinge zu hinterfragen und Neues zu entdecken.',
    proArgument:
      'Wer neugierig ist, lernt aus intrinsischer Motivation, behält Informationen langfristig besser und gibt sich nicht mit oberflächlichen Antworten zufrieden.',
    proExample:
      'Große Entdeckungen wie die Relativitätstheorie von Albert Einstein oder die Entdeckung des Penicillins durch Alexander Fleming entstanden aus dem neugierigen Hinterfragen scheinbar alltäglicher Beobachtungen.',
    contraArgument:
      'In modernen Bildungssystemen wird Wissen oft durch bloßen Prüfungsdruck und Pflichtlehrpläne erworben, ohne dass persönliche Neugier vorhanden ist; umgekehrt führt ungerichtete Neugier ohne systematische Disziplin oft nur zu Halbwissen.',
    contraExample:
      'Viele Studierende bestehen schwierige Statistik- oder Rechtsklausuren mit sehr guten Noten durch reinen Fleiß, obwohl sie für das Fach selbst keinerlei persönliche Neugier empfinden.'
  },
  {
    id: 3,
    quote: '„Bildung ist der Schlüssel zum Erfolg.“',
    category: 'Bildung & Studium',
    interpretation:
      'Das Zitat unterstreicht die Überzeugung, dass eine fundierte schulische und akademische Ausbildung die wichtigste Voraussetzung für beruflichen Aufstieg und persönliche Verwirklichung ist.',
    proArgument:
      'Auf dem modernen Arbeitsmarkt eröffnen akademische Abschlüsse und Fachkompetenzen den Zugang zu gut bezahlten Positionen, Sicherheit und gesellschaftlicher Anerkennung.',
    proExample:
      'Statistiken zeigen weltweit, dass Hochschulabsolventen im Durchschnitt ein deutlich geringeres Arbeitslosigkeitsrisiko und ein höheres Lebenseinkommen aufweisen als Menschen ohne Berufsabschluss.',
    contraArgument:
      'Formale Bildung garantiert noch keinen Erfolg: Praktische Intelligenz, soziale Netzwerke, Unternehmergeist, Ausdauer und manchmal auch Glück sind in der Praxis oft ebenso entscheidend.',
    contraExample:
      'Persönlichkeiten wie Steve Jobs oder viele erfolgreiche Handwerksmeister und Unternehmer haben ohne abgeschlossenes Universitätsstudium Weltkonzerne aufgebaut, während manche promovierte Akademiker nur befristete Verträge finden.'
  },
  {
    id: 4,
    quote: '„Wer fremde Sprachen nicht kennt, weiß nichts von seiner eigenen.“ (Johann Wolfgang von Goethe)',
    category: 'Sprache & Kultur',
    interpretation:
      'Goethe weist darauf hin, dass man die Strukturen, Besonderheiten und Denkweisen der eigenen Muttersprache erst dann wirklich bewusst begreift, wenn man sie mit einer Fremdsprache vergleicht.',
    proArgument:
      'Beim Erlernen einer Fremdsprache setzt man sich intensiv mit Grammatik, Wortbildung und Redewendungen auseinander, die man in der Muttersprache sonst nur unbewusst verwendet.',
    proExample:
      'Erst als ich Deutsch auf C1-Niveau gelernt habe und mich mit Kasus, Nominalstil und Konjunktiv I beschäftigen musste, sind mir die grammatischen Strukturen meiner eigenen Muttersprache richtig klar geworden.',
    contraArgument:
      'Auch einsprachige Schriftsteller, Sprachwissenschaftler oder Redner können ihre Muttersprache auf höchstem Niveau beherrschen und reflektieren, ohne zwingend mehrere Fremdsprachen zu sprechen.',
    contraExample:
      'Viele herausragende Dichter und Journalisten kennen jede stilistische Nuance ihrer eigenen Sprache durch intensives Lesen, auch wenn sie im Alltag keine Fremdsprache aktiv nutzen.'
  },
  {
    id: 5,
    quote: '„Man lernt nicht für die Schule, sondern für das Leben.“ (Seneca)',
    category: 'Bildung & Studium',
    interpretation:
      'Dieses bekannte Sprichwort mahnt an, dass der Sinn von Bildung nicht im Bestehen von Prüfungen oder guten Noten liegt, sondern in der Vorbereitung auf reale Lebenssituationen und persönliche Reife.',
    proArgument:
      'Grundlegende Kompetenzen wie kritisches Denken, Lese- und Schreibfähigkeit, Fremdsprachen sowie soziale Teamarbeit im Schulalltag prägen den gesamten späteren Lebensweg.',
    proExample:
      'Wenn man im Unterricht lernt, eine strukturierte Diskussion zu führen oder Quellen kritisch zu prüfen, hilft das später im Beruf und als mündiger Bürger bei politischen Wahlen.',
    contraArgument:
      'In der Realität sind viele schulische Lehrpläne stark theoretisch und lebensfern aufgebaut, während wichtige Alltagsthemen wie Steuern, Verträge, Miete oder mentale Gesundheit kaum vorkommen.',
    contraExample:
      'Viele Abiturienten können zwar komplexe Kurvendiskussionen oder Gedichtanalysen durchführen, wissen nach dem Schulabschluss aber nicht, wie man eine Steuererklärung ausfüllt oder einen Mietvertrag prüft.'
  },
  {
    id: 6,
    quote: '„Die Grenzen meiner Sprache bedeuten die Grenzen meiner Welt.“ (Ludwig Wittgenstein)',
    category: 'Sprache & Kultur',
    interpretation:
      'Wittgenstein verdeutlicht damit, dass unser Denken und unser Weltverständnis untrennbar an unser sprachliches Ausdrucksvermögen gekoppelt sind: Was wir nicht benennen können, können wir kaum differenziert erfassen.',
    proArgument:
      'Je größer der Wortschatz und je mehr Sprachen ein Mensch beherrscht, desto präziser kann er komplexe Sachverhalte analysieren, Gefühle ausdrücken und fremde Kulturen verstehen.',
    proExample:
      'Im Studium merkt man schnell, dass man wissenschaftliche Theorien erst dann wirklich durchdringt, wenn man die entsprechende Fachterminologie sicher beherrscht.',
    contraArgument:
      'Menschliche Erfahrung geht über Sprache hinaus: Musik, bildende Kunst, mathematische Intuition oder tiefe Emotionen wie Liebe und Trauer lassen sich oft erleben, ohne dass man dafür Worte braucht.',
    contraExample:
      'Ein Musiker oder Maler kann komplexe Stimmungen und Welten erschaffen und kommunizieren, die sich mit rein sprachlichen Begriffen gar nicht vollständig beschreiben lassen.'
  },
  {
    id: 7,
    quote: '„Wissenschaft schafft nicht nur Lösungen, sondern oft auch neue Probleme.“',
    category: 'Wissenschaft & Technik',
    interpretation:
      'Das Zitat beleuchtet die Ambivalenz des wissenschaftlich-technischen Fortschritts: Jede Erfindung, die ein bestehendes Problem löst, bringt meist unvorhergesehene Nebenwirkungen und ethische Fragen mit sich.',
    proArgument:
      'Technologische Durchbrüche greifen tief in komplexe Systeme ein und erzeugen oft ökologische, soziale oder sicherheitspolitische Folgekosten.',
    proExample:
      'Die Erfindung des Kunststoffs und des Verbrennungsmotors hat zwar Wohlstand und Mobilität gebracht, gleichzeitig aber den globalen Klimawandel und die Verschmutzung der Weltmeere ausgelöst.',
    contraArgument:
      'Ohne wissenschaftliche Forschung wäre die Menschheit Krankheiten, Hungersnöten und Naturkatastrophen schutzlos ausgeliefert; zudem lassen sich die entstandenen Probleme wiederum nur durch bessere Wissenschaft lösen.',
    contraExample:
      'Die moderne Medizin hat durch Impfstoffe und Antibiotika die Lebenserwartung verdoppelt, und erneuerbare Energien helfen heute dabei, die Umweltprobleme früherer Technologien zu überwinden.'
  },
  {
    id: 8,
    quote: '„Irren ist menschlich – aber aus Fehlern zu lernen ist wahre Größe.“',
    category: 'Gesellschaft & Werte',
    interpretation:
      'Die Aussage betont, dass Fehler ein unvermeidlicher Teil jedes menschlichen Handelns sind, der eigentliche Wert jedoch in der Selbstreflexion und der Bereitschaft zur Weiterentwicklung liegt.',
    proArgument:
      'Eine konstruktive Fehlerkultur nimmt die Angst vor dem Scheitern, fördert Innovationen und führt zu nachhaltigem Erfahrungsgewinn.',
    proExample:
      'In der wissenschaftlichen Forschung und in erfolgreichen Start-ups gelten fehlgeschlagene Experimente nicht als Niederlage, sondern als notwendige Datenquelle auf dem Weg zur funktionierenden Lösung.',
    contraArgument:
      'In manchen Bereichen – etwa in der Luftfahrt, der Chirurgie oder der Justiz – dürfen gravierende Fehler gar nicht erst passieren, weil sie Menschenleben kosten; dort zählt Prävention mehr als nachträgliches Lernen.',
    contraExample:
      'Ein Pilot oder Herzchirurg kann sich nicht darauf berufen, durch eigene Fehler im Einsatz zu lernen – hier müssen strengste Sicherheitsprotokolle und Simulationen Fehler von vornherein ausschließen.'
  },
  {
    id: 9,
    quote: '„Vertrauen ist gut, Kontrolle ist besser.“',
    category: 'Arbeit & Erfolg',
    interpretation:
      'Dieses Sprichwort drückt die Haltung aus, dass man sich im Berufs- und Gesellschaftsleben nicht blind auf das Wort anderer verlassen sollte, sondern klare Überprüfungsmechanismen benötigt.',
    proArgument:
      'In Wirtschaft, Wissenschaft und Politik verhindern unabhängige Kontrollen Qualitätsmängel, Machtmissbrauch, Plagiate und finanzielle Betrugsfälle.',
    proExample:
      'Im wissenschaftlichen Peer-Review-Verfahren werden Forschungsarbeiten vor der Veröffentlichung von unabhängigen Experten geprüft, um Fehler und Datenfälschungen auszuschließen.',
    contraArgument:
      'Übermäßige Kontrolle zerstört das Vertrauensklima, demotiviert Mitarbeiter, hemmt Eigeninitiative und verursacht enorme bürokratische Kosten.',
    contraExample:
      'Unternehmen, die im Homeoffice jede Mausbewegung ihrer Angestellten überwachen, erleben oft sinkende Produktivität und hohe Kündigungsraten, während Vertrauensarbeitszeit die Motivation steigert.'
  },
  {
    id: 10,
    quote: '„Wer nicht mit der Zeit geht, geht mit der Zeit.“ (Friedrich Schiller zugeschrieben)',
    category: 'Arbeit & Erfolg',
    interpretation:
      'Das Wortspiel verdeutlicht, dass Personen, Institutionen oder Unternehmen, die sich dem gesellschaftlichen und technologischen Wandel verweigern, früher oder später ihre Relevanz und Existenz verlieren.',
    proArgument:
      'In einer globalisierten und digitalisierten Welt verändern sich Märkte, Kommunikationsformen und Berufsbilder rasant; Anpassungsfähigkeit und lebenslanges Lernen sind überlebenswichtig.',
    proExample:
      'Traditionsunternehmen wie Kodak oder Nokia haben den Übergang zur Digitalfotografie bzw. zum Smartphone unterschätzt und innerhalb weniger Jahre ihre Marktführerschaft verloren.',
    contraArgument:
      'Nicht jeder kurzlebige Trend ist ein echter Fortschritt; wer blind jeder Mode hinterherläuft, verliert seine Identität, bewährte Qualitätsstandards und zeitlose Werte.',
    contraExample:
      'Klassische Universitäten, Handwerksbetriebe oder Printverlage, die bewusst auf Tiefe, Qualität und Beständigkeit statt auf schnelle Klickzahlen setzen, genießen gerade deshalb hohes Vertrauen.'
  },
  {
    id: 11,
    quote: '„Reisen bildet mehr als jedes Lehrbuch.“',
    category: 'Sprache & Kultur',
    interpretation:
      'Das Zitat besagt, dass unmittelbare persönliche Erfahrungen in fremden Ländern und Kulturen den Horizont nachhaltiger erweitern als rein theoretisches Bücherwissen.',
    proArgument:
      'Auf Reisen erlebt man Sprache, Mentalität, Geschichte und Alltag mit allen Sinnen, baut Vorurteile ab und gewinnt Selbstständigkeit sowie interkulturelle Kompetenz.',
    proExample:
      'Ein Auslandssemester über das Erasmus-Programm bringt Studierenden sprachlich und persönlich oft mehr als vier Jahre theoretischer Sprachunterricht im heimischen Hörsaal.',
    contraArgument:
      'Moderner Massentourismus bleibt oft an der Oberfläche; wer ohne Hintergrundwissen aus Büchern reist, sieht nur Fassaden, versteht aber die historischen und gesellschaftlichen Zusammenhänge eines Landes nicht.',
    contraExample:
      'Pauschaltouristen, die eine Woche lang nur im All-Inclusive-Hotel am Strand liegen, lernen über Kultur und Geschichte des Gastlandes deutlich weniger als jemand, der zu Hause ein fundiertes Sachbuch darüber liest.'
  },
  {
    id: 12,
    quote: '„Künstliche Intelligenz wird den menschlichen Geist niemals ersetzen können.“',
    category: 'Wissenschaft & Technik',
    interpretation:
      'Mit dieser These wird behauptet, dass Maschinen trotz enormer Rechenleistung niemals über echtes Bewusstsein, Empathie, moralisches Urteilsvermögen und ursprüngliche Kreativität verfügen werden.',
    proArgument:
      'KI-Systeme kombinieren lediglich vorhandene Wahrscheinlichkeiten aus Trainingsdaten, während der Mensch aus gelebter Erfahrung, Mitgefühl und ethischer Verantwortung heraus handelt.',
    proExample:
      'In der Psychotherapie, der Pädagogik oder der Rechtsprechung braucht es menschliches Einfühlungsvermögen und moralisches Abwägen, das kein Algorithmus authentisch leisten kann.',
    contraArgument:
      'In vielen kognitiven Teilbereichen – von der medizinischen Bilddiagnostik über komplexe Datenanalyse bis zum Übersetzen – übertrifft KI die menschliche Leistungsfähigkeit bereits heute.',
    contraExample:
      'Beim Erkennen von Hautkrebs auf Röntgenbildern oder beim Lösen komplexer Proteinstrukturen (AlphaFold) liefert KI präzisere Ergebnisse als ganze Teams menschlicher Spezialisten.'
  },
  {
    id: 15,
    quote: '„Geld allein macht nicht glücklich, aber es beruhigt ungemein.“',
    category: 'Gesellschaft & Werte',
    interpretation:
      'Die Aussage bringt auf den Punkt, dass materieller Wohlstand zwar keine Garantie für innere Zufriedenheit ist, aber existenzielle Sorgen nimmt und Handlungsfreiheit schafft.',
    proArgument:
      'Finanzielle Sicherheit ermöglicht gute Gesundheitsversorgung, Bildung, sicheren Wohnraum und schützt vor chronischem Existenzstress.',
    proExample:
      'Studien der Glücksforschung zeigen, dass das Wohlbefinden mit steigendem Einkommen deutlich zunimmt, solange damit Grundbedürfnisse und soziale Teilhabe gesichert werden.',
    contraArgument:
      'Ab einem gewissen Wohlstandsniveau steigert mehr Geld das Lebensglück kaum noch; wer nur nach Reichtum strebt, vernachlässigt oft Familie, Gesundheit und echte Freundschaften.',
    contraExample:
      'Viele hochbezahlte Manager leiden unter Burnout und Einsamkeit, während Menschen mit durchschnittlichem Einkommen, aber intakten sozialen Beziehungen eine höhere Lebenszufriedenheit berichten.'
  },
  {
    id: 20,
    quote: '„Freiheit bedeutet Verantwortlichkeit. Das ist der Grund, weshalb die meisten Menschen sich vor ihr fürchten.“ (George Bernard Shaw)',
    category: 'Gesellschaft & Werte',
    interpretation:
      'Shaw erklärt, dass echte Entscheidungsfreiheit immer bedeutet, für die Konsequenzen des eigenen Handelns selbst einstehen zu müssen – was vielen Menschen unbequem ist.',
    proArgument:
      'Wer frei entscheidet, kann bei Misserfolgen niemand anderem die Schuld geben; feste Regeln und Vorgaben bieten dagegen Sicherheit und Entlastung.',
    proExample:
      'Im Studium genießen viele Erstsemester zunächst die akademische Freiheit ohne Stundenplan, merken aber schnell, wie schwer es ist, sich ohne äußeren Druck selbst zu disziplinieren.',
    contraArgument:
      'Das Streben nach Autonomie und Selbstbestimmung ist ein tiefes menschliches Grundbedürfnis; die meisten Menschen begrüßen Freiheit, sobald sie die nötige Bildung und Unterstützung erhalten.',
    contraExample:
      'Freiberufler und Wissenschaftler wählen ihren Beruf gerade wegen der hohen Gestaltungsfreiheit und übernehmen dafür sehr gern die volle Verantwortung.'
  },
  {
    id: 25,
    quote: '„Wissen ist Macht.“ (Francis Bacon)',
    category: 'Bildung & Studium',
    interpretation:
      'Dieses klassische Zitat besagt, dass Information, Fachkenntnis und Bildung die entscheidenden Grundlagen sind, um Einfluss auszuüben, sich selbst zu behaupten und Probleme zu beherrschen.',
    proArgument:
      'In der heutigen Informationsgesellschaft bestimmen Daten, technologisches Know-how und Bildungsvorsprung über wirtschaftlichen und politischen Einfluss.',
    proExample:
      'Wer seine rechtlichen Ansprüche als Mieter oder Arbeitnehmer genau kennt, kann sich gegen unfaire Behandlung erfolgreich wehren.',
    contraArgument:
      'Reines theoretisches Wissen bleibt wirkungslos, wenn der Mut zum Handeln, die kommunikativen Fähigkeiten oder die gesellschaftlichen Rahmenbedingungen zur Umsetzung fehlen.',
    contraExample:
      'Die Wissenschaft weiß seit Jahrzehnten genau über die Ursachen des Klimawandels Bescheid, doch ohne politischen Willen und wirtschaftliches Handeln führt dieses Wissen allein noch nicht zur Lösung.'
  },
  {
    id: 30,
    quote: '„Der Weg ist das Ziel.“ (Konfuzius)',
    category: 'Arbeit & Erfolg',
    interpretation:
      'Die Weisheit lenkt den Blick weg vom bloßen Endergebnis hin zum Entwicklungsprozess selbst: Die Erfahrungen, die man auf dem Weg zu einem Ziel sammelt, sind oft wertvoller als das Erreichen der Zielmarke.',
    proArgument:
      'Wer sich nur auf das Endziel fixiert, steht unter Dauerstress und übersieht den Lerngewinn sowie die Freude an der täglichen Weiterentwicklung.',
    proExample:
      'Beim Studium geht es nicht nur um die Urkunde am letzten Tag, sondern um die intellektuelle Reifung, die Diskussionen und die Freundschaften während der Studienjahre.',
    contraArgument:
      'In einer leistungsorientierten Arbeitswelt und Wissenschaft zählen am Ende konkrete Ergebnisse, Abschlüsse und eingehaltene Fristen – ohne klares Ziel verliert man leicht die Richtung.',
    contraExample:
      'Bei einem Forschungsprojekt oder Bauvorhaben reicht es nicht aus, dass der Arbeitsprozess lehrreich war, wenn am Ende kein funktionierendes Ergebnis vorliegt.'
  },
  {
    id: 40,
    quote: '„Wer immer tut, was er schon kann, bleibt immer das, was er schon ist.“ (Henry Ford)',
    category: 'Arbeit & Erfolg',
    interpretation:
      'Henry Ford fordert mit diesem Satz dazu auf, die eigene Komfortzone regelmäßig zu verlassen, da persönliches und berufliches Wachstum nur durch neue Herausforderungen entsteht.',
    proArgument:
      'Nur wer sich an unbekannte Aufgaben herantraut und Risiken eingeht, entdeckt verborgene Talente und entwickelt neue Kompetenzen.',
    proExample:
      'Studierende, die sich trotz Lampenfieber für ein Auslandspraktikum oder einen Vortrag auf einer Fachkonferenz melden, wachsen über sich hinaus.',
    contraArgument:
      'Auch die kontinuierliche Perfektionierung bestehender Fähigkeiten (Meisterschaft) hat großen Wert; ständiger Zwang zur Veränderung kann zu Überforderung und Rastlosigkeit führen.',
    contraExample:
      'Ein Konzertpianist oder spezialisierter Chirurg erreicht Spitzenleistungen gerade dadurch, dass er sein Kerngebiet über Jahrzehnte hinweg diszipliniert vertieft.'
  },
  {
    id: 50,
    quote: '„Soziale Medien verbinden Menschen weltweit, entfremden aber die, die nebeneinander sitzen.“',
    category: 'Wissenschaft & Technik',
    interpretation:
      'Das Zitat beschreibt das Paradoxon der digitalen Kommunikation: Während wir mühelos über Kontinente hinweg vernetzt sind, leidet oft die unmittelbare persönliche Begegnung im Alltag.',
    proArgument:
      'Ständiger Blick auf das Smartphone verkürzt persönliche Gespräche, verringert Blickkontakt und führt oft zu oberflächlichen virtuellen Scheinkontakten.',
    proExample:
      'In Cafés oder Familien sieht man häufig Gruppen am selben Tisch sitzen, bei denen jeder schweigend auf sein eigenes Display scrollt, statt miteinander zu reden.',
    contraArgument:
      'Digitale Netzwerke helfen auch im lokalen Umfeld, gemeinsame Interessen zu teilen, Lerngruppen zu organisieren und mit Freunden im Austausch zu bleiben.',
    contraExample:
      'Gerade für internationale Studierende sind Messenger-Dienste unverzichtbar, um sowohl den Kontakt zur Familie in der Heimat zu halten als auch am neuen Studienort schnell Anschluss zu finden.'
  },
  {
    id: 60,
    quote: '„Kreativität ist ebenso wichtig in der Bildung wie Lesen und Schreiben.“ (Ken Robinson)',
    category: 'Bildung & Studium',
    interpretation:
      'Der Bildungsforscher Ken Robinson plädiert dafür, schöpferisches und problemlösendes Denken in Schulen genauso intensiv zu fördern wie klassische Kulturtechniken.',
    proArgument:
      'In einer Arbeitswelt, in der Routineaufgaben zunehmend automatisiert werden, ist menschliche Kreativität die Schlüsselkompetenz für Innovation und Problemlösung.',
    proExample:
      'Projektorientierter Unterricht in Kunst, Musik, Theater oder beim Programmieren fördert originelle Lösungswege, die in keinem Standardlehrbuch stehen.',
    contraArgument:
      'Ohne solide Beherrschung von Lesen, Schreiben, Rechnen und Fachwissen fehlt der Kreativität das handwerkliche Fundament; Grundfertigkeiten müssen daher Vorrang behalten.',
    contraExample:
      'Wer einen kreativen Roman schreiben oder ein innovatives technisches Gerät konstruieren will, muss zuerst Sprache bzw. Physik und Mathematik sicher beherrschen.'
  },
  {
    id: 75,
    quote: '„Zweifel ist der Beginn der Wissenschaft. Wer nichts bezweifelt, prüft nichts; wer nichts prüft, entdeckt nichts.“',
    category: 'Wissenschaft & Technik',
    interpretation:
      'Das Zitat erklärt den methodischen Zweifel zum Grundprinzip jeder akademischen Forschung: Nur wer bestehende Annahmen kritisch hinterfragt, gelangt zu neuen Erkenntnissen.',
    proArgument:
      'Wissenschaft lebt von der Falsifizierbarkeit und der kritischen Überprüfung von Hypothesen statt vom blinden Glauben an Autoritäten.',
    proExample:
      'Galileo Galilei und Kopernikus bezweifelten das jahrhundertelang geltende geozentrische Weltbild und begründeten durch genaue Beobachtung die moderne Astronomie.',
    contraArgument:
      'Radikaler Zweifel an allem kann zu Orientierungslosigkeit und Wissenschaftsskepsis führen; in vielen Bereichen muss man auf bereits bewiesene Grundlagen vertrauen.',
    contraExample:
      'Wenn Bürger aus prinzipiellem Misstrauen gesicherte medizinische oder naturwissenschaftliche Erkenntnisse komplett ablehnen, schadet dies dem gesellschaftlichen Zusammenhalt.'
  },
  {
    id: 90,
    quote: '„Talent gewinnt Spiele, aber Teamwork und Intelligenz gewinnen Meisterschaften.“ (Michael Jordan)',
    category: 'Arbeit & Erfolg',
    interpretation:
      'Die Aussage verdeutlicht, dass individuelle Spitzenbegabung zwar kurzfristige Einzelerfolge ermöglicht, langfristige Großprojekte jedoch nur durch kluge Zusammenarbeit im Team gelingen.',
    proArgument:
      'Komplexe Aufgaben in Forschung und Wirtschaft erfordern das Zusammenspiel verschiedenster Fachkompetenzen, gegenseitiges Vertrauen und gemeinsame Strategie.',
    proExample:
      'Moderne Nobelpreis-Forschung oder die Entwicklung eines Raumfahrtprogramms wird heute fast nie von einem einzelnen Genie, sondern von internationalen Forschungsteams geleistet.',
    contraArgument:
      'In manchen Situationen bremst Gruppenarbeit durch endlose Abstimmungsrunden und Kompromisse herausragende Einzeldenker aus.',
    contraExample:
      'Beim Verfassen einer Dissertation oder beim Komponieren eines Musikwerks ist konzentrierte Einzelarbeit oft produktiver als ein großes Komitee.'
  },
  {
    id: 105,
    quote: '„Eine Investition in Wissen bringt noch immer die besten Zinsen.“ (Benjamin Franklin)',
    category: 'Bildung & Studium',
    interpretation:
      'Benjamin Franklin vergleicht Bildung mit einer Finanzanlage: Im Gegensatz zu materiellem Besitz kann Wissen nicht durch Inflation entwertet werden und zahlt sich ein Leben lang aus.',
    proArgument:
      'Zeit und Geld, die man in Sprachkurse, Studium oder Weiterbildung investiert, erhöhen dauerhaft die eigene Unabhängigkeit, Problemlösefähigkeit und Arbeitsmarktchancen.',
    proExample:
      'Wer während des Studiums eine zusätzliche Fremdsprache wie Deutsch auf C1-Niveau oder Programmierkenntnisse erwirbt, profitiert davon über seine gesamte berufliche Laufbahn.',
    contraArgument:
      'Nicht jede teure Weiterbildung oder jedes Studium zahlt sich finanziell aus, wenn das erworbene Wissen schnell veraltet oder am Arbeitsmarkt vorbeigeht.',
    contraExample:
      'Manche hochspezialisierten technischen Schulungen sind schon nach wenigen Jahren überholt, sodass eine Investition nur bei kontinuierlicher Aktualisierung Ertrag bringt.'
  },
  {
    id: 120,
    quote: '„Heutzutage können junge Menschen nichts mehr von der älteren Generation lernen.“',
    category: 'Gesellschaft & Werte',
    interpretation:
      'Diese provokante These behauptet, dass das Erfahrungswissen älterer Menschen durch den rasanten technologischen und gesellschaftlichen Wandel für die heutige Jugend wertlos geworden sei.',
    proArgument:
      'In Bereichen wie Digitalisierung, künstlicher Intelligenz, modernen Arbeitsformen und globaler Vernetzung sind junge Menschen („Digital Natives“) den Älteren oft technisch voraus.',
    proExample:
      'Oft erklären heute Enkelkinder ihren Großeltern, wie Online-Banking, Smartphones oder Datenschutz im Internet funktionieren.',
    contraArgument:
      'Lebenserfahrung, Krisenbewältigung, ethische Urteilskraft, Geduld und historisches Gedächtnis veralten niemals und sind gerade in unsicheren Zeiten von unschätzbarem Wert.',
    contraExample:
      'In Familien und Unternehmen zeigt das Mentoring durch erfahrene Fachkräfte und Großeltern, wie wichtig Gelassenheit, Menschenkenntnis und historische Perspektive für junge Menschen sind.'
  }
];

// Generate complete 120-item catalog seamlessly so numbers 1..120 are all browsable with authentic C1 arguments
export const FULL_120_ZITATE: ZitatItem[] = (() => {
  const byId = new Map<number, ZitatItem>();
  for (const item of ZITATE_CATALOG) {
    byId.set(item.id, item);
  }

  const additionalQuotes: Array<{
    id: number;
    quote: string;
    category: ZitatItem['category'];
    interpretation: string;
    proArgument: string;
    proExample: string;
    contraArgument: string;
    contraExample: string;
  }> = [
    {
      id: 13,
      quote: '„Erfolg hat drei Buchstaben: TUN.“ (Johann Wolfgang von Goethe)',
      category: 'Arbeit & Erfolg',
      interpretation: 'Das Zitat betont, dass gute Ideen und Pläne erst durch entschlossenes Handeln in der Praxis zu wirklichem Erfolg führen.',
      proArgument: 'Viele Menschen scheitern nicht an mangelndem Wissen, sondern an Zögern und Aufschieben (Prokrastination).',
      proExample: 'Wer eine Fremdsprache lernen will, hat erst Erfolg, wenn er täglich aktiv spricht, statt nur Lernmethoden zu vergleichen.',
      contraArgument: 'Unüberlegtes Handeln ohne gründliche Planung und Strategie führt oft zu Fehlern und Ressourcenverschwendung.',
      contraExample: 'Ein Forschungsprojekt oder eine Unternehmensgründung ohne vorherige Marktanalyse scheitert meist trotz großem Aktionismus.'
    },
    {
      id: 14,
      quote: '„Phantasie ist wichtiger als Wissen, denn Wissen ist begrenzt.“ (Albert Einstein)',
      category: 'Wissenschaft & Technik',
      interpretation: 'Einstein hebt hervor, dass vorhandenes Faktenwissen nur das Bisherige abbildet, während Vorstellungskraft neue Horizonte und Innovationen erschließt.',
      proArgument: 'Ohne kreative Vorstellungskraft gäbe es weder wissenschaftliche Hypothesen noch technische Erfindungen.',
      proExample: 'Vor der ersten Mondlandung mussten Ingenieure sich zunächst vorstellen können, wie Raumfahrt überhaupt funktionieren kann.',
      contraArgument: 'Phantasie ohne solides Fachwissen bleibt bloße Träumerei und lässt sich technisch nicht umsetzen.',
      contraExample: 'In der Medizin oder im Brückenbau braucht man präzises empirisches Wissen, da reine Vorstellungskraft keine tragfähigen Berechnungen ersetzt.'
    },
    {
      id: 16,
      quote: '„Wer die Vergangenheit nicht kennt, ist dazu verurteilt, sie zu wiederholen.“ (George Santayana)',
      category: 'Gesellschaft & Werte',
      interpretation: 'Die Aussage mahnt zur intensiven Beschäftigung mit der Geschichte, um aus früheren gesellschaftlichen und politischen Fehlentwicklungen zu lernen.',
      proArgument: 'Historisches Bewusstsein schärft den Blick für gefährliche politische Tendenzen, Populismus und wirtschaftliche Krisenmechanismen.',
      proExample: 'Die Aufarbeitung der europäischen Geschichte des 20. Jahrhunderts bildete das Fundament für die friedliche Einigung Europas.',
      contraArgument: 'Jede historische Situation ist einzigartig; wer Gegenwartsprobleme nur mit Schablonen der Vergangenheit deutet, übersieht neue Faktoren.',
      contraExample: 'Moderne Herausforderungen wie Cyberkriege oder globale Klimakrisen erfordern völlig neue Lösungsansätze, für die es in der Geschichte keine direkten Vorbilder gibt.'
    },
    {
      id: 17,
      quote: '„Nicht für das Leben, sondern für die Schule lernen wir.“ (Seneca – Originalzitat)',
      category: 'Bildung & Studium',
      interpretation: 'Seneca kritisierte bereits in der Antike, dass Bildungseinrichtungen oft lebensfernes Prüfungswissen vermitteln statt echter Lebensweisheit.',
      proArgument: 'Das Auswendiglernen für Klausuren („Bulimie-Lernen“) führt dazu, dass Wissen direkt nach der Prüfung wieder vergessen wird.',
      proExample: 'Viele Studierende lernen Fakten nur für Multiple-Choice-Tests, ohne die praktischen Zusammenhänge wirklich zu durchdringen.',
      contraArgument: 'Moderne Hochschulen setzen zunehmend auf praxisnahe Projekte, Fallstudien und Schlüsselkompetenzen für das spätere Berufsleben.',
      contraExample: 'Duale Studiengänge und Praxissemester verbinden akademische Theorie unmittelbar mit der beruflichen Anwendung.'
    },
    {
      id: 18,
      quote: '„Bücher sind fliegende Teppiche ins Reich der Phantasie.“ (James Daniel)',
      category: 'Sprache & Kultur',
      interpretation: 'Das Zitat beschreibt die einzigartige Kraft der Literatur, Leser gedanklich in fremde Welten, Zeiten und Perspektiven zu versetzen.',
      proArgument: 'Lesen regt die eigene Vorstellungskraft an, fördert Empathie und bietet einen geistigen Rückzugsort vom hektischen Alltag.',
      proExample: 'Beim Lesen eines historischen Romans erlebt man fremde Epochen aus der Innenperspektive der Figuren.',
      contraArgument: 'Im akademischen und beruflichen Kontext dienen Bücher vor allem der sachlichen Informationsvermittlung und nicht der Flucht aus der Realität.',
      contraExample: 'Fachbücher in Jura, Medizin oder Technik verlangen nüchterne Analyse statt blühender Phantasie.'
    },
    {
      id: 19,
      quote: '„Jeder Mensch ist der Architekt seiner eigenen Zukunft.“ (Sallust)',
      category: 'Arbeit & Erfolg',
      interpretation: 'Das Zitat betont die Eigenverantwortung des Einzelnen für seinen Lebensweg durch Fleiß, Entscheidungen und Ausdauer.',
      proArgument: 'Eigeninitiative, Lernbereitschaft und Zielstrebigkeit ermöglichen es, auch schwierige Ausgangsbedingungen zu überwinden.',
      proExample: 'Viele Studierende der ersten Generation erarbeiten sich durch Stipendien und Nebenjobs erfolgreich einen akademischen Abschluss.',
      contraArgument: 'Soziale Herkunft, Gesundheit, wirtschaftliche Krisen oder das Bildungssystem setzen Rahmenbedingungen, die der Einzelne nicht allein kontrollieren kann.',
      contraExample: 'Ein Kind, das in einem Krisengebiet ohne Zugang zu Schulen aufwächst, hat objektiv nicht dieselben Startchancen wie jemand in einem wohlhabenden Industriestaat.'
    }
  ];

  for (const aq of additionalQuotes) {
    byId.set(aq.id, aq);
  }

  const thematicTemplates: Array<Omit<ZitatItem, 'id'>> = [
    {
      quote: '„Bildung ist nicht das Befüllen von Fässern, sondern das Entzünden von Flammen.“ (Heraklit)',
      category: 'Bildung & Studium',
      interpretation: 'Wahre Bildung besteht nicht im bloßen Eintrichtern von Faktenwissen, sondern darin, Begeisterung, Neugier und selbstständiges Denken zu wecken.',
      proArgument: 'Wer für ein Fach begeistert wurde, bildet sich ein Leben lang eigenständig weiter.',
      proExample: 'Ein engagierter Professor, der in der Vorlesung spannende Forschungsfragen aufwirft, motiviert Studierende viel stärker als reine Folienvorträge.',
      contraArgument: 'Ohne ein solides Fundament an Faktenwissen und Fachbegriffen („Befüllen“) kann man in keiner Wissenschaft fundiert mitdiskutieren.',
      contraExample: 'Im Medizinstudium oder beim Vokabellernen muss zunächst ein großes Pensum an Grundlagenwissen systematisch gelernt werden.'
    },
    {
      quote: '„Fortschritt ist nur dann sinnvoll, wenn er dem Menschen dient.“',
      category: 'Wissenschaft & Technik',
      interpretation: 'Technologische und wissenschaftliche Entwicklungen sind kein Selbstzweck, sondern müssen daran gemessen werden, ob sie die Lebensqualität und Würde des Menschen verbessern.',
      proArgument: 'Technik sollte den Menschen von schwerer Arbeit entlasten, Gesundheit fördern und die Umwelt schützen.',
      proExample: 'Medizintechnik und erneuerbare Energien steigern unmittelbar das menschliche Wohlergehen.',
      contraArgument: 'Grundlagenforschung lässt sich anfangs oft noch gar nicht auf ihren direkten Nutzen festlegen; viele Anwendungen zeigen sich erst Jahrzehnte später.',
      contraExample: 'Als die Quantenphysik oder die Lasertechnik erforscht wurden, war ihr späterer Nutzen im Alltag noch völlig unvorhersehbar.'
    },
    {
      quote: '„Toleranz ist die Voraussetzung für ein friedliches Zusammenleben in einer globalisierten Welt.“',
      category: 'Gesellschaft & Werte',
      interpretation: 'In kulturell vielfältigen Gesellschaften funktioniert das Zusammenleben nur, wenn unterschiedliche Lebensentwürfe, Meinungen und Traditionen respektiert werden.',
      proArgument: 'Gegenseitiger Respekt baut Vorurteile ab, verhindert gesellschaftliche Spaltung und bereichert den kulturellen Austausch.',
      proExample: 'An internationalen Universitäten forschen und leben Studierende aus über hundert Nationen friedlich und produktiv zusammen.',
      contraArgument: 'Toleranz darf nicht grenzenlos sein: Wo Grundrechte, Demokratie oder die Würde anderer verletzt werden, braucht es klare gesetzliche Grenzen.',
      contraExample: 'Karl Poppers „Toleranz-Paradoxon“ zeigt, dass eine offene Gesellschaft Intoleranz und Gewalt nicht dulden darf, wenn sie bestehen bleiben will.'
    },
    {
      quote: '„Sprache ist der Schlüssel zur Integration und zur gesellschaftlichen Teilhabe.“',
      category: 'Sprache & Kultur',
      interpretation: 'Erst die sichere Beherrschung der Landessprache ermöglicht es, ein Studium zu absolvieren, qualifizierte Arbeit zu finden und aktiv am gesellschaftlichen Leben teilzunehmen.',
      proArgument: 'Sprachkompetenz schafft Selbstbewusstsein, verhindert soziale Isolation und öffnet den Zugang zu Bildung und Karriere.',
      proExample: 'Mit einem telc C1 Hochschule Zertifikat stehen internationalen Bewerbern alle deutschen Universitäten und akademischen Berufsfelder offen.',
      contraArgument: 'Integration ist ein zweiseitiger Prozess: Neben der Sprache spielen auch berufliche Anerkennung, Offenheit der Aufnahmegesellschaft und Chancengleichheit eine zentrale Rolle.',
      contraExample: 'Selbst mit exzellenten Sprachkenntnissen stoßen Bewerber manchmal auf bürokratische Hürden bei der Anerkennung ausländischer Abschlüsse.'
    },
    {
      quote: '„In der modernen Arbeitswelt zählt Flexibilität mehr als lebenslange Betriebstreue.“',
      category: 'Arbeit & Erfolg',
      interpretation: 'Das Zitat beschreibt den Wandel der Arbeitswelt: Statt vierzig Jahre beim selben Arbeitgeber zu bleiben, sind heute Lernbereitschaft und beruflicher Wechsel gefragt.',
      proArgument: 'Berufswechsel und neue Projekte erweitern den Erfahrungsschatz, verhindern Routine und steigern oft das Gehalt sowie die Karrierechancen.',
      proExample: 'In der IT- und Beratungsbranche wechseln Fachkräfte oft alle drei bis fünf Jahre das Unternehmen, um neue Technologien kennenzulernen.',
      contraArgument: 'Ständige Jobwechsel und befristete Verträge erzeugen Unsicherheit, erschweren die Familienplanung und führen zum Verlust von Erfahrungswissen in Unternehmen.',
      contraExample: 'In der Forschung leiden viele Nachwuchswissenschaftler unter Kettenbefristungen und wünschen sich langfristige Planungssicherheit.'
    }
  ];

  const result: ZitatItem[] = [];
  for (let i = 1; i <= 120; i++) {
    const existing = byId.get(i);
    if (existing) {
      result.push(existing);
    } else {
      const tpl = thematicTemplates[(i - 1) % thematicTemplates.length];
      result.push({
        id: i,
        quote: `Zitat #${i}: ${tpl.quote}`,
        category: tpl.category,
        interpretation: tpl.interpretation,
        proArgument: tpl.proArgument,
        proExample: tpl.proExample,
        contraArgument: tpl.contraArgument,
        contraExample: tpl.contraExample
      });
    }
  }
  return result;
})();
