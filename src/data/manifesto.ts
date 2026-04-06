export interface Reform {
  id: string
  emoji: string
  title: string
  subtitle: string
  problem: string
  solution: string[]
  worldwide: { country: string; flag: string; lesson: string }[]
  story: { name: string; age: number; role: string; before: string; after: string }
}

export interface Principle {
  title: string
  description: string
}

export const principles: Principle[] = [
  { title: "Prävention statt Reparatur", description: "Jeder Euro für Vorsorge spart sieben Euro für Behandlung. Investiere in Gesundheit, nicht in Krankheit." },
  { title: "Bildung statt Bestrafung", description: "Menschen brauchen Chancen, nicht Strafen. Wer Hilfe bekommt, hilft sich selbst." },
  { title: "Ernährung statt Medikamente", description: "Die beste Medizin steht nicht in der Apotheke, sondern auf dem Teller." },
  { title: "Würde für alle Lebewesen", description: "Tierschutz ist kein Luxus, sondern Maßstab unserer Zivilisation." },
  { title: "Ein System für alle", description: "Keine Zwei-Klassen-Medizin. Keine Zwei-Klassen-Bildung. Keine Zwei-Klassen-Gesellschaft." },
  { title: "Das Beste aus der ganzen Welt", description: "Jede einzelne Reform existiert bereits — irgendwo. Wir müssen es nur zusammensetzen." },
]

export const reforms: Reform[] = [
  {
    id: "energie",
    emoji: "⚡",
    title: "Energie",
    subtitle: "Raus aus der Abhängigkeit",
    problem: "Iran-Krieg seit Februar 2026. Diesel €2,43/l (Allzeithoch). Gas +104%. Alles wird teurer — und wir haben keine Kontrolle, weil wir von fossilen Importen abhängen.",
    solution: [
      "Tempolimit 120 km/h — spart 3-5% Sprit sofort",
      "280 GW Solar + 140 GW Wind bis 2035",
      "Max. 30% Import aus einem einzigen Land",
      "€29-Regionalticket für alle",
    ],
    worldwide: [
      { country: "Dänemark", flag: "🇩🇰", lesson: "CO₂-Steuer auf Tierhaltung — erstes Land weltweit. Mutigste Klimapolitik." },
      { country: "Island", flag: "🇮🇸", lesson: "100% Strom aus Erneuerbaren. Zeigt: es geht." },
    ],
    story: { name: "Lena", age: 34, role: "Krankenschwester, pendelt 25km", before: "€280/Monat Sprit", after: "Mit €29-Ticket: €250/Monat gespart" },
  },
  {
    id: "rente",
    emoji: "🏦",
    title: "Rente",
    subtitle: "Sicher, fair, für alle",
    problem: "120 Mrd. €/Jahr Zuschuss (25% des Haushalts). Riester gescheitert (~2% Rendite). Immer weniger Einzahler pro Rentner.",
    solution: [
      "48% Rentenniveau gesichert bis 2035",
      "45 Arbeitsjahre = abschlagsfrei raus, egal welches Alter",
      "Deutschlandfonds ersetzt Riester (Ziel: 5-7% Rendite statt 2%)",
      "Alle zahlen ein: Selbstständige, neue Beamte, Minijobber",
    ],
    worldwide: [
      { country: "Schweden", flag: "🇸🇪", lesson: "AP7-Staatsfonds: ~10% Rendite/Jahr, 0,05% Gebühren. Vorbild für den Deutschlandfonds." },
      { country: "Singapur", flag: "🇸🇬", lesson: "Pflicht-Sparkonto für Gesundheit + Rente. Eigenverantwortung mit Sicherheitsnetz." },
    ],
    story: { name: "Marco", age: 18, role: "Azubi Elektriker", before: "Keine Ahnung, wie Rente funktioniert", after: "Fängt mit 18 an → mit 63 raus. Deutschlandfonds-Konto: geschätzt €200.000 nach 45 Jahren" },
  },
  {
    id: "soziales",
    emoji: "🤝",
    title: "Soziales",
    subtitle: "Fördern statt strafen",
    problem: "563€/Monat. Nur 0,6% verweigern Arbeit. 45% haben psychische/chronische Erkrankungen. Jobcenter völlig unterbesetzt.",
    solution: [
      "Sanktionen gedeckelt auf 30% — keine Totalstreichung",
      "Pflicht-Gesundheitscheck vor jeder Sanktion",
      "Bei €1.000 Hinzuverdienst: €510 behalten statt €300",
      "Recht auf 24 Monate Weiterbildung",
      "8.000 neue Stellen bei Jobcentern",
    ],
    worldwide: [
      { country: "Finnland", flag: "🇫🇮", lesson: "Housing First: Obdachlose bekommen zuerst eine Wohnung, dann Hilfe. Obdachlosigkeit fast eliminiert." },
      { country: "Dänemark", flag: "🇩🇰", lesson: "Flexicurity: Einfach kündigen, aber starkes Sicherheitsnetz + aktive Arbeitsmarktpolitik." },
    ],
    story: { name: "Thomas", age: 48, role: "Depressiv, 2 Jahre Bürgergeld", before: "Druck vom Jobcenter, Sanktionsdrohung", after: "Gesundheitscheck → Therapie statt Strafe. 12 Sitzungen in 4 Wochen. Kein Vermittlungsdruck." },
  },
  {
    id: "steuern",
    emoji: "💶",
    title: "Steuern",
    subtitle: "Einfacher, fairer, familienfreundlicher",
    problem: "Ehegattensplitting belohnt Einkommensungleichheit statt Kinder. Kalte Progression frisst jede Gehaltserhöhung. Erbschaftsteuer hat Schlupflöcher für Milliardäre.",
    solution: [
      "Splitting gedeckelt auf €14.000 — Rest wird Kinderbonus",
      "€2.000/Kind/Jahr für alle, einkommensunabhängig",
      "Kalte Progression automatisch weg (Tarif auf Rädern)",
      "Körperschaftsteuer: 28% → 25% für reinvestierte Gewinne",
    ],
    worldwide: [
      { country: "Schweden", flag: "🇸🇪", lesson: "Individualbesteuerung statt Splitting. Höchste Frauenerwerbsquote in Europa." },
      { country: "Estland", flag: "🇪🇪", lesson: "Digitale Steuererklärung in 5 Minuten. 95% machen es online." },
    ],
    story: { name: "Familie Yilmaz", age: 38, role: "Doppelverdiener, 2 Kinder", before: "Splitting-Vorteil ~€3.000", after: "Kinderbonus €4.000 + Grundfreibetrag €400 = netto +€4.400/Jahr" },
  },
  {
    id: "dienst",
    emoji: "🫱🏼‍🫲🏽",
    title: "Gesellschaftsdienst",
    subtitle: "Für alle, nicht nur fürs Militär",
    problem: "Bundeswehr: 181.000 Soldaten, Ziel 250.000. Pflegenotstand: 500.000 Fachkräfte fehlen bis 2035. Feuerwehr, THW: chronisch unterbesetzt.",
    solution: [
      "1 Pflichttag mit 18: Info über alle Optionen",
      "Dann freiwillig: 200.000 Plätze in 7 Bereichen",
      "€1.400-3.000/Monat + volle Sozialversicherung",
      "Bonus: Rentenpunkte, Studienplatz, Führerschein gratis",
    ],
    worldwide: [
      { country: "Schweden", flag: "🇸🇪", lesson: "Auswahlwehrpflicht: Nur die Geeignetsten, geschlechterneutral. Funktioniert seit 2017." },
      { country: "Südkorea", flag: "🇰🇷", lesson: "Gesellschaftsdienst als Alternative zum Militär — in Pflege, Kultur, Katastrophenschutz." },
    ],
    story: { name: "Jonas", age: 18, role: "Nach dem Abi unentschlossen", before: "FSJ für €450 Taschengeld? Nein danke.", after: "6 Monate Pflege für €1.400 + Führerschein + Studienbonus. Weiß jetzt, was er studieren will." },
  },
  {
    id: "ernaehrung",
    emoji: "🥦",
    title: "Ernährung",
    subtitle: "Die Revolution beginnt in der Schulkantine",
    problem: "15% der Kinder in DE sind adipös (Japan: 5%). Schulessen ist oft Tiefkühl-Massenware. Keine Ernährungsbildung. Werbung für Zucker überall.",
    solution: [
      "Kostenloses Schulessen für alle (wie Finnland seit 1948)",
      "Ernährungsfachkraft in jeder Schule (wie Japan)",
      "50% pflanzlich, 20% bio, tägliche vegane Option in allen Kantinen",
      "Zuckersteuer nach UK-Vorbild (→ 46% weniger Zucker in Softdrinks)",
      "Keine Werbung für ungesunde Lebensmittel an Kinder unter 16",
    ],
    worldwide: [
      { country: "Japan", flag: "🇯🇵", lesson: "Shokuiku-Gesetz (2005): Ernährungsbildung als Pflicht. Kinder servieren sich gegenseitig, kochen zusammen. 5% Adipositas." },
      { country: "Portugal", flag: "🇵🇹", lesson: "Weltweit einzigartig: Alle öffentlichen Kantinen müssen vegane Option anbieten — Schulen, Krankenhäuser, Gefängnisse." },
      { country: "Finnland", flag: "🇫🇮", lesson: "Kostenloses Schulessen seit 1948. >90% nehmen teil. €2,70/Mahlzeit." },
    ],
    story: { name: "Mia", age: 8, role: "Grundschülerin in Essen", before: "Nutella-Brot oder Kiosk-Schokoriegel", after: "Kostenloses warmes Essen: Linsen-Curry, Gemüse, Obst. 1x/Woche kocht die Klasse selbst." },
  },
  {
    id: "gesundheit",
    emoji: "🏥",
    title: "Gesundheit",
    subtitle: "Prävention statt Reparatur",
    problem: "Deutschland gibt nur 3% für Prävention aus, 97% für Behandlung. 8,5 Mio. Diabetiker. €40 Mrd./Jahr für ernährungsbedingte Krankheiten. Zwei-Klassen-Medizin (GKV vs. PKV).",
    solution: [
      "Jährlicher Pflicht-Gesundheitscheck für alle 35-74 (wie Japan)",
      "Kommunale Präventionsprogramme (wie Finnlands North Karelia: -82% Herztode)",
      "Präventionsbudget von 3% auf 6% verdoppeln",
      "GKV + PKV zusammenführen: ein System für alle (wie Taiwan)",
      "Digitale Gesundheitsakte für alle (wie Estland)",
      "Pflanzliche Option in jedem Krankenhaus (wie Portugal)",
    ],
    worldwide: [
      { country: "Finnland", flag: "🇫🇮", lesson: "North-Karelia-Projekt: 40 Jahre Prävention → 82% weniger Herz-Kreislauf-Tode. Erfolgreichstes Public-Health-Programm der Geschichte." },
      { country: "Japan", flag: "🇯🇵", lesson: "Metabo-Gesetz: Krankenkassen werden bestraft, wenn Versicherte nicht gesünder werden. Höchste Lebenserwartung weltweit." },
      { country: "Taiwan", flag: "🇹🇼", lesson: "Single-Payer seit 1995. 99,9% versichert. 6,6% BIP (DE: 12,7%). Verwaltungskosten: 1,5% (DE: 5-6%)." },
      { country: "Kuba", flag: "🇨🇺", lesson: "1 Arzt pro 1.000 Einwohner in der Nachbarschaft. Hausbesuche. Säuglingssterblichkeit niedriger als USA — bei 1/14 der Kosten." },
    ],
    story: { name: "Helmut", age: 55, role: "Lagerarbeiter, übergewichtig", before: "Geht erst zum Arzt, wenn's wehtut", after: "Pflicht-Check entdeckt Prä-Diabetes. Kostenlose Ernährungsberatung + Kochkurs. 8kg leichter, kein Diabetes. Spart dem System ~€10.000/Jahr." },
  },
  {
    id: "tierschutz",
    emoji: "🐾",
    title: "Tierschutz",
    subtitle: "Würde für alle Lebewesen",
    problem: "Massentierhaltung. Millionen Tiere in Käfigen. Tierschutz im GG nur als 'Schutz', nicht als 'Würde'. Keine CO₂-Steuer auf Tierhaltung.",
    solution: [
      "\"Würde des Tieres\" ins Grundgesetz (wie Schweiz)",
      "Massentierhaltung auslaufen lassen — Bauern beim Umstieg unterstützen",
      "CO₂-Steuer auf tierische Produkte (wie Dänemark)",
      "Tierschutz-Folgenabschätzung für alle neuen Gesetze (wie UK)",
      "Pflanzliche Landwirtschaft massiv fördern",
    ],
    worldwide: [
      { country: "Schweiz", flag: "🇨🇭", lesson: "\"Würde des Tieres\" im Gesetz seit 2005. Käfighaltung verboten seit 1992. Soziale Tiere dürfen nicht allein gehalten werden." },
      { country: "Niederlande", flag: "🇳🇱", lesson: "€25 Mrd. Programm: 3.000 Tierbetriebe werden aufgekauft und geschlossen." },
      { country: "Dänemark", flag: "🇩🇰", lesson: "Erste CO₂-Steuer auf Tierhaltung weltweit (2024): €40/Tonne, steigend." },
    ],
    story: { name: "Bauer Müller", age: 55, role: "Schweinemast, 3.000 Tiere", before: "Gefangen im System: niedrige Margen, hohe Schulden", after: "Übergangsprogramm: Staat kauft Betrieb. 80% Förderung für Umstieg auf pflanzliche Landwirtschaft oder Solar." },
  },
  {
    id: "bildung",
    emoji: "📚",
    title: "Bildung",
    subtitle: "Vertrauen, Gemeinschaft, Zukunft",
    problem: "Leistungsdruck ab der Grundschule. Keine Schulpsychologen. Keine Ernährungsbildung. Deutschland fällt bei PISA zurück.",
    solution: [
      "Wohlbefinden jährlich messen (wie Dänemark)",
      "Schulpsychologe + Sozialarbeiter in jeder Schule (wie Finnland)",
      "Programmieren ab Klasse 1, integriert in alle Fächer (wie Estland)",
      "Kinder putzen ihre Schule, servieren sich Essen, lernen Verantwortung (wie Japan)",
      "Anti-Mobbing-Programm KiVa: 30-50% weniger Mobbing",
    ],
    worldwide: [
      { country: "Finnland", flag: "🇫🇮", lesson: "Keine Tests bis 18. Master-Pflicht für Lehrer. Nur 10% werden angenommen — prestigereich wie Medizin." },
      { country: "Estland", flag: "🇪🇪", lesson: "PISA-Platz 1 in Europa. Programmieren ab Klasse 1. Digitale Schule seit 2012." },
      { country: "Japan", flag: "🇯🇵", lesson: "Tokkatsu: Kinder putzen Schule, servieren Essen, organisieren Feste. Gemeinschaft als Fach." },
      { country: "Singapur", flag: "🇸🇬", lesson: "PISA-Platz 1 weltweit (Mathe, Lesen, Naturwissenschaften). Konkret-Bild-Abstrakt Methode." },
    ],
    story: { name: "Ben", age: 10, role: "Grundschüler in Dortmund", before: "Stress wegen Gymnasium-Übergang, keine Schulpsychologin", after: "Wohlbefinden-Befragung zeigt Probleme → Schule bekommt Psychologin + Anti-Mobbing-Programm. Ben lernt Programmieren, kocht mit der Klasse, geht gerne hin." },
  },
]

export const stats = [
  { value: "12", label: "Länder als Vorbild" },
  { value: "9", label: "Reformbereiche" },
  { value: "7", label: "Simulierte Gesetzentwürfe" },
  { value: "1", label: "Ziel: Deutschland 2030" },
]
