export interface BackcastMilestone {
  year: string
  title: string
  detail: string
}

export interface BackcastGoal {
  id: string
  emoji: string
  title: string
  promise: string
  whyItMatters: string
  2030: string
  milestones: BackcastMilestone[]
}

export const backcastGoals: BackcastGoal[] = [
  {
    id: 'hunger',
    emoji: '🍽️',
    title: 'Zero Hunger',
    promise: 'Kein Kind, kein Senior und kein armer Haushalt lebt mit Ernährungsunsicherheit.',
    whyItMatters: 'Hunger zerstört Gesundheit, Lernen, Würde und Produktivität gleichzeitig.',
    2030: 'Kostenloses gesundes Essen in Schulen, Kitas, Kliniken und Pflege. Grundversorgung schlägt Tafellogik.',
    milestones: [
      { year: '2050', title: 'Ernährung als Grundrecht', detail: 'Gesundes Essen ist so selbstverständlich wie Trinkwasser.' },
      { year: '2040', title: 'Ultra-Processed Food stark zurückgedrängt', detail: 'Beschaffung, Bildung und Preislogik sind gedreht.' },
      { year: '2035', title: 'Jede Kommune hat Ernährungsinfrastruktur', detail: 'Schulessen, Quartiersküchen und Präventionssysteme greifen ineinander.' },
      { year: '2030', title: 'Kostenloses Schul- und Kita-Essen bundesweit', detail: 'Kinder essen täglich gesund, ohne Stigma und Antrag.' },
      { year: 'Jetzt', title: 'Ernährungsreform beginnen', detail: 'Schulessen-Gesetz, Zuckersteuer, Werbebeschränkung, Ernährungsbildung.' },
    ],
  },
  {
    id: 'poverty',
    emoji: '🏠',
    title: 'Zero Poverty',
    promise: 'Niemand lebt in existenzieller materieller Unsicherheit.',
    whyItMatters: 'Armut frisst Freiheit, Gesundheit, Bildungschancen und demokratisches Vertrauen.',
    2030: 'UBS-Bausteine, bezahlbares Wohnen, automatische Ansprüche und eine Soziallogik ohne Stigma.',
    milestones: [
      { year: '2050', title: 'Existenzsicherheit ohne Demütigung', detail: 'Wohnen, Energie, Mobilität und digitale Teilhabe sind gesichert.' },
      { year: '2040', title: 'Armut wird präventiv statt reaktiv bearbeitet', detail: 'Kaum noch Kinderarmut, weniger Wohnkostenkrisen, weniger Schuldenfallen.' },
      { year: '2035', title: 'Sozialstaat funktioniert automatisch', detail: 'Ansprüche kommen zu Menschen, nicht umgekehrt.' },
      { year: '2030', title: 'UBS sichtbar im Alltag', detail: 'Kita, Mobilität, Essen und digitale Basisdienste senken echte Lebenshaltungskosten.' },
      { year: 'Jetzt', title: 'Von Geldtransfer zu Lebenszugang', detail: 'Mehr automatische Entlastung, weniger Formulare, höherer Return pro Euro.' },
    ],
  },
  {
    id: 'health',
    emoji: '🏥',
    title: 'Health For All',
    promise: 'Prävention, mentale Gesundheit, Pflege und Zugang funktionieren früh und fair.',
    whyItMatters: 'Gesundheit ist die Basis für Lebensqualität, Produktivität und Würde.',
    2030: 'Pflicht-Checks, eine Gesundheitslogik für alle und weniger Wartezeit statt Zwei-Klassen-Medizin.',
    milestones: [
      { year: '2050', title: 'Prävention dominiert Behandlung', detail: 'Weniger Diabetes, Burnout, Einsamkeit und vermeidbare Chronifizierung.' },
      { year: '2040', title: 'Pflege und mentale Gesundheit sind Grundsysteme', detail: 'Nicht Notlösungen, sondern öffentliche Infrastruktur.' },
      { year: '2035', title: 'Ein Zugangssystem für alle', detail: 'Gleiche Termine, bessere Früherkennung, digitale und analoge Pfade.' },
      { year: '2030', title: 'Präventionsstaat statt Reparaturstaat', detail: 'Gesundheitschecks, kommunale Programme und Ernährungswende sparen Milliarden.' },
      { year: 'Jetzt', title: 'Pflicht-Check und Präventionsbudget', detail: 'Mehr Screening, mehr Hausarzt-Logik, weniger systemische Blindheit.' },
    ],
  },
  {
    id: 'wealth',
    emoji: '💶',
    title: 'Wealth For All',
    promise: 'Breite Vermögensbildung statt extremer Konzentration von Kapital und Erbe.',
    whyItMatters: 'Ohne Vermögen bleibt Freiheit fragil und Ungleichheit vererbt sich endlos.',
    2030: 'Deutschlandfonds, Erbschaftsreform, eng begrenzter Vermögensbeitrag und sichtbare öffentliche Rendite.',
    milestones: [
      { year: '2050', title: 'Wohlstand ist breiter verteilt', detail: 'Median-Vermögen steigt deutlich, Erbe bestimmt weniger über Lebenswege.' },
      { year: '2040', title: 'Kapitalerträge und Arbeit sind fairer behandelt', detail: 'Leistung und Besitz laufen steuerlich nicht mehr in zwei Welten.' },
      { year: '2035', title: 'Öffentlicher Vermögensaufbau funktioniert', detail: 'Deutschlandfonds wird als echte Alltagsvorsorge erlebt.' },
      { year: '2030', title: 'Große Vermögen tragen sichtbar mit', detail: 'Erbschaft, Schlupflöcher und Top-Vermögen finanzieren reale Entlastung.' },
      { year: 'Jetzt', title: 'Von Neiddebatte zu Return-Debatte', detail: 'Zeigen, wer zahlt, wer profitiert und wie viel Deutschland langfristig zurückbekommt.' },
    ],
  },
  {
    id: 'freedom',
    emoji: '🕊️',
    title: 'Freedom For All',
    promise: 'Bürokratie, Herkunft, Behinderung oder Armut entscheiden nicht mehr über realen Zugang zu Rechten.',
    whyItMatters: 'Formale Freiheit ohne Zugang ist nur Theorie.',
    2030: 'Digitale Verwaltung mit analogen Sicherheitsnetzen, schnelle Verfahren, echte Rechtsdurchsetzung.',
    milestones: [
      { year: '2050', title: 'Rechte sind praktisch nutzbar', detail: 'Menschen kommen ohne Demütigung, Wartehölle oder Papierlabyrinth durch den Staat.' },
      { year: '2040', title: 'Staatliche Reibung halbiert', detail: 'Weniger verlorene Zeit, weniger Exklusion, weniger Ohnmacht.' },
      { year: '2035', title: 'Verwaltung ist proaktiv', detail: 'Daten helfen Menschen, statt sie zu blockieren.' },
      { year: '2030', title: 'Estland-Niveau mit deutschem Schutznetz', detail: 'Digital first, aber niemals digital only.' },
      { year: 'Jetzt', title: 'Verfahrensreform starten', detail: 'Standardisierung, Transparenz, Sprachzugang, analoge Alternativen.' },
    ],
  },
  {
    id: 'happiness',
    emoji: '🌞',
    title: 'Happiness & Dignity',
    promise: 'Mehr Zeit, Sinn, Sicherheit, Gemeinschaft und seelische Gesundheit für alle.',
    whyItMatters: 'Ein Staat ist nicht erfolgreich, wenn er nur reich ist, aber Menschen erschöpft zurücklässt.',
    2030: 'Wohlbefinden wird gemessen, Gemeinschaft organisiert und Zeitarmut ernst genommen.',
    milestones: [
      { year: '2050', title: 'Flourishing statt Erschöpfung', detail: 'Mehr Lebensqualität, weniger Einsamkeit, weniger Burnout.' },
      { year: '2040', title: 'Wohlbefinden ist politischer Leitwert', detail: 'Nicht als Kuschelmetrik, sondern als echte Regierungskennzahl.' },
      { year: '2035', title: 'Schulen, Arbeit und Städte sind menschenfreundlicher', detail: 'Zeit, Räume und Systeme erzeugen mehr Zugehörigkeit.' },
      { year: '2030', title: 'Mental Health und Gemeinschaft sichtbar', detail: 'Psychologie, Pflege und Nachbarschaftspolitik sind Kerninfrastruktur.' },
      { year: 'Jetzt', title: 'Wohlbefinden messen und priorisieren', detail: 'Schulen, Kommunen und Arbeitswelt an Lebensqualität koppeln.' },
    ],
  },
  {
    id: 'animals',
    emoji: '🐾',
    title: 'Dignity For Animals',
    promise: 'Tiere werden nicht nur geschuetzt, sondern als Mitgeschöpfe mit Würde behandelt.',
    whyItMatters: 'Wie wir Tiere behandeln, zeigt, wie weit unsere Zivilisation wirklich ist.',
    2030: 'Massentierhaltung im Rueckbau, pflanzliche Alternativen im Mainstream, Tierwuerde sichtbar im Recht.',
    milestones: [
      { year: '2050', title: 'Massentierhaltung ist Geschichte', detail: 'Tierquälerei ist wirtschaftlich und politisch nicht mehr normalisiert.' },
      { year: '2040', title: 'Pflanzliche Systeme dominieren', detail: 'Landwirtschaft, Kantinen und Preise haben sich gedreht.' },
      { year: '2035', title: 'Tierwuerde ist echte Gesetzeslogik', detail: 'Neue Gesetze brauchen Folgenabschätzung fuer Tiere.' },
      { year: '2030', title: 'Starker Umstieg sichtbar', detail: 'Öffentliche Beschaffung, Steuerlogik und Landwirtschaftshilfen belohnen den Wandel.' },
      { year: 'Jetzt', title: 'Tierwuerde ins Zentrum holen', detail: 'Grundgesetz, Beschaffung, CO2-Logik und Umstiegsfonds zusammendenken.' },
    ],
  },
]
