export interface Persona {
  id: string
  emoji: string
  name: string
  age: number
  profile: string
  location: string
  region: 'west' | 'east'
  setting: 'urban' | 'suburban' | 'rural'
  income: number // monthly net household
  party: string
  milieu: string
  weight: number // % of population
  concerns: string[]
}

export const personas: Persona[] = [
  { id: "thomas", emoji: "👔", name: "Thomas", age: 58, profile: "Konservativer Akademiker, Abteilungsleiter", location: "Stuttgart", region: "west", setting: "urban", income: 6500, party: "CDU", milieu: "Konservativ-Gehoben", weight: 5, concerns: ["Steuerlast", "Rentensicherheit", "Rechtsstaatlichkeit"] },
  { id: "claudia", emoji: "👩‍🏫", name: "Claudia", age: 45, profile: "Post-materielle Lehrerin, 2 Kinder", location: "Freiburg", region: "west", setting: "urban", income: 4200, party: "Grüne", milieu: "Postmateriell", weight: 6, concerns: ["Klimapolitik", "Bildungsqualität", "Ungleichheit"] },
  { id: "max", emoji: "💻", name: "Maximilian", age: 33, profile: "Software-Ingenieur, Tech-Performer", location: "München", region: "west", setting: "urban", income: 5800, party: "FDP", milieu: "Performer", weight: 5, concerns: ["Digitalisierung", "Steuerreform", "Bürokratieabbau"] },
  { id: "lena", emoji: "🎨", name: "Lena", age: 27, profile: "Freelance-Designerin, WG", location: "Berlin", region: "east", setting: "urban", income: 2400, party: "Grüne/Volt", milieu: "Expeditiv", weight: 5, concerns: ["Miete", "Freelancer-Absicherung", "Kulturförderung"] },
  { id: "stefan-julia", emoji: "👨‍👩‍👧‍👦", name: "Stefan & Julia", age: 37, profile: "Vorstadt-Familie, 2 Kinder, Doppelverdiener", location: "Hamburg-Umland", region: "west", setting: "suburban", income: 4800, party: "CDU/Swing", milieu: "Adaptiv-Pragmatisch", weight: 6, concerns: ["Kita-Plätze", "Hypothekenzinsen", "Work-Life-Balance"] },
  { id: "monika", emoji: "👵", name: "Monika", age: 71, profile: "Rentnerin, Bürgerliche Mitte", location: "Wuppertal", region: "west", setting: "urban", income: 1650, party: "CDU", milieu: "Bürgerliche Mitte", weight: 5, concerns: ["Arzttermine", "Rente", "Sicherheit"] },
  { id: "dieter", emoji: "🧓", name: "Dieter", age: 76, profile: "Rentner, pflegt Ehefrau, Dorf", location: "Niedersachsen", region: "west", setting: "rural", income: 1400, party: "CDU", milieu: "Traditionell", weight: 4, concerns: ["Landarzt-Mangel", "Pflegekosten", "ÖPNV"] },
  { id: "kevin", emoji: "😔", name: "Kevin", age: 41, profile: "Bürgergeld, geschieden", location: "Gelsenkirchen", region: "west", setting: "urban", income: 1100, party: "BSW", milieu: "Prekär", weight: 4, concerns: ["Essen/Energie bezahlen", "Respekt", "Jobchancen"] },
  { id: "michelle", emoji: "🛍️", name: "Michelle", age: 24, profile: "Einzelhandel + Minijob", location: "Dortmund", region: "west", setting: "urban", income: 1800, party: "Nichtwähler", milieu: "Konsum-Hedonistisch", weight: 4, concerns: ["Niedriglohn", "Freizeit leisten", "Konsumpreise"] },
  { id: "ayse", emoji: "💊", name: "Ayşe", age: 34, profile: "Apothekerin, türkisch-deutsch, 1 Kind", location: "Duisburg", region: "west", setting: "urban", income: 3200, party: "SPD", milieu: "Adaptiv-Pragmatisch", weight: 4, concerns: ["Diskriminierung", "Kita", "Doppelte Staatsbürgerschaft"] },
  { id: "ahmad", emoji: "⚡", name: "Ahmad", age: 29, profile: "Syrischer Geflüchteter, Azubi Elektriker", location: "Hannover", region: "west", setting: "urban", income: 2000, party: "—", milieu: "Transition", weight: 2, concerns: ["Aufenthaltssicherheit", "Berufsanerkennung", "Familiennachzug"] },
  { id: "olena", emoji: "🇺🇦", name: "Olena", age: 42, profile: "Ukrainische Geflüchtete, 2 Kinder", location: "Leipzig", region: "east", setting: "urban", income: 1400, party: "—", milieu: "Transition", weight: 1.5, concerns: ["Bleibeperspektive", "Schulintegration", "Anerkennung Buchhalter-Diplom"] },
  { id: "frank", emoji: "🏭", name: "Frank", age: 52, profile: "Chemiewerk-Operator, Ost", location: "Bitterfeld", region: "east", setting: "rural", income: 2200, party: "AfD", milieu: "Bürgerliche Mitte/Prekär", weight: 4, concerns: ["Lohngefälle Ost/West", "Industriesterben", "Abgehängt-Gefühl"] },
  { id: "sandra", emoji: "🚲", name: "Sandra", age: 31, profile: "Single-Mutter, Gig-Lieferfahrerin", location: "Bremen", region: "west", setting: "urban", income: 1600, party: "Linke", milieu: "Prekär/Adaptiv", weight: 3, concerns: ["Kita (Schichtzeiten!)", "Gig-Worker-Rechte", "Miete"] },
  { id: "heinrich", emoji: "🏰", name: "Prof. Heinrich", age: 67, profile: "Unternehmer, 85 Mitarbeiter", location: "Düsseldorf", region: "west", setting: "suburban", income: 12000, party: "FDP/CDU", milieu: "Performer/Konservativ", weight: 2, concerns: ["Vermögensteuer", "Erbschaftsteuer", "Standort DE"] },
  { id: "lea", emoji: "📚", name: "Lea", age: 22, profile: "Studentin, BAföG + Minijob", location: "Heidelberg", region: "west", setting: "urban", income: 950, party: "Grüne", milieu: "Expeditiv/Postmateriell", weight: 3, concerns: ["Wohnkosten Unistadt", "BAföG-Reform", "Therapiewartezeit"] },
  { id: "manfred", emoji: "♿", name: "Manfred", age: 59, profile: "Schwerbehindert, Erwerbsminderungsrente", location: "Kassel", region: "west", setting: "urban", income: 1300, party: "SPD", milieu: "Traditionell/Bürgerlich", weight: 3, concerns: ["Rente reicht nicht", "Barrierefreiheit", "Facharzt-Zugang"] },
  { id: "fatima", emoji: "🧕", name: "Fatima", age: 48, profile: "Konservative Migrantin, Hausfrau, 4 Kinder", location: "Berlin-Neukölln", region: "east", setting: "urban", income: 1800, party: "Nichtwähler", milieu: "Traditionell (Migration)", weight: 2, concerns: ["Bildung der Kinder", "Diskriminierung", "Lebensmittelpreise"] },
  { id: "jan", emoji: "🌾", name: "Jan", age: 44, profile: "Bauer, Ackerbau, 2 Kinder", location: "MV-Dorf", region: "east", setting: "rural", income: 3000, party: "CDU/AfD", milieu: "Traditionell/Bürgerlich", weight: 2, concerns: ["EU-Agrarpolitik", "Diesel/Dünger-Kosten", "Landflucht"] },
  { id: "alex", emoji: "🏳️‍🌈", name: "Alex", age: 30, profile: "Non-binary, UX-Designer*in", location: "Köln", region: "west", setting: "urban", income: 3400, party: "Grüne", milieu: "Expeditiv/Sozialökol.", weight: 2, concerns: ["Trans-Gesundheitsversorgung", "Antidiskriminierung", "Queere Familienrechte"] },
  { id: "renate", emoji: "💜", name: "Renate", age: 62, profile: "Pflegende Angehörige, Teilzeit-Pflegehelferin", location: "Passau", region: "west", setting: "suburban", income: 1900, party: "CSU", milieu: "Bürgerliche Mitte", weight: 3, concerns: ["Pflegesystem-Reform", "Auszeit für Pflegende", "Eigene Rentenlücke"] },
  { id: "pawel", emoji: "🇵🇱", name: "Pawel", age: 35, profile: "Polnischer Saisonarbeiter, Fleischwerk", location: "Cloppenburg", region: "west", setting: "rural", income: 1500, party: "—", milieu: "—", weight: 1, concerns: ["Arbeitsbedingungen", "Lohndiebstahl", "Unterkunftsqualität"] },
  { id: "juergen", emoji: "📖", name: "Jürgen", age: 50, profile: "Funktionaler Analphabet, Lagerarbeiter", location: "Magdeburg", region: "east", setting: "urban", income: 1700, party: "AfD", milieu: "Prekär/Konsum-Hed.", weight: 3, concerns: ["Digitalisierung macht Angst", "Jobsicherheit", "Scham/Stigma"] },
  { id: "maria", emoji: "📞", name: "Maria", age: 82, profile: "Allein, kein Internet, Grundsicherung", location: "Trier", region: "west", setting: "urban", income: 1200, party: "CDU", milieu: "Traditionell", weight: 3, concerns: ["Einsamkeit", "Bürokratie ohne Internet", "Medikamentenkosten"] },
]

// Policy impact simulation
export interface PolicyReaction {
  personaId: string
  approval: number // 0-100
  reason: string
}

export interface PoliticalBloc {
  id: string
  label: string
  weight: number
  color: 'green' | 'gold' | 'red' | 'blue' | 'purple'
}

export interface PoliticianReaction {
  blocId: string
  approval: number // 0-100
  reason: string
}

export interface PolicyScenario {
  id: string
  emoji: string
  title: string
  description: string
  annualCost: number // Mrd €
  annualSaving: number
  reactions: PolicyReaction[]
  politicianReactions: PoliticianReaction[]
}

export const politicalBlocs: PoliticalBloc[] = [
  { id: "union", label: "CDU/CSU", weight: 30, color: "blue" },
  { id: "spd", label: "SPD", weight: 18, color: "red" },
  { id: "greens", label: "Grüne", weight: 12, color: "green" },
  { id: "left", label: "Linke", weight: 8, color: "purple" },
  { id: "fdp", label: "FDP", weight: 8, color: "gold" },
  { id: "afd", label: "AfD", weight: 16, color: "blue" },
  { id: "bsw", label: "BSW", weight: 8, color: "red" },
]

export const policyScenarios: PolicyScenario[] = [
  {
    id: "schulessen",
    emoji: "🍽️",
    title: "Kostenloses veganes Schulessen für alle",
    description: "100% pflanzlich, kostenlos, für jedes Kind. Ernährungsbildung wie Japan (Shokuiku). Fleisch optional mit Aufpreis — aber unnötig, wenn Kinder echte Ernährung lernen. Tierwohl + Gesundheit + Umwelt in einem.",
    annualCost: 4.1,
    annualSaving: 8.2,
    reactions: [
      { personaId: "thomas", approval: 75, reason: "€4 Mrd. klingt viel — aber €8 Mrd. Ersparnis bei Gesundheitskosten überzeugt mich." },
      { personaId: "claudia", approval: 98, reason: "Pflanzlich, kostenlos, für alle. So geht Gleichheit." },
      { personaId: "stefan-julia", approval: 95, reason: "Spart €150/Monat und die Kinder essen endlich gesund." },
      { personaId: "kevin", approval: 99, reason: "Mein Kind hat endlich täglich eine warme Mahlzeit. Sicher." },
      { personaId: "ayse", approval: 95, reason: "Pflanzlich = automatisch halal. Perfekte Lösung!" },
      { personaId: "fatima", approval: 95, reason: "Vegan löst alle religiösen Essensregeln. Brilliant." },
      { personaId: "frank", approval: 78, reason: "Alle kriegen es, keiner wird bevorzugt. Das ist fair." },
      { personaId: "jan", approval: 72, reason: "Kann mein Hof das Gemüse liefern? Dann bin ich voll dabei." },
      { personaId: "heinrich", approval: 60, reason: "ROI 1:2 — ok, das rechnet sich. Bin überzeugt." },
      { personaId: "lea", approval: 97, reason: "Vegan + kostenlos + Bildung = bestes Gesetz ever." },
      { personaId: "maria", approval: 80, reason: "Kinder sollen gut essen. Das ist doch selbstverständlich." },
      { personaId: "juergen", approval: 95, reason: "Mein Sohn isst oft nur Toast. Das rettet Familien wie uns." },
    ],
    politicianReactions: [
      { blocId: "union", approval: 58, reason: "Verkaufbar, wenn Kosten, Regionalität und Freiwilligkeit sauber erklärt werden." },
      { blocId: "spd", approval: 90, reason: "Soziale Entlastung und Bildung greifen direkt ineinander." },
      { blocId: "greens", approval: 97, reason: "Gesundheit, Klima und Chancengleichheit in einem Gesetz." },
      { blocId: "left", approval: 95, reason: "Universelle Leistung mit sofort sichtbarer Entlastung." },
      { blocId: "fdp", approval: 44, reason: "Zu paternalistisch, wenn es nur ein Modell ohne Wahlfreiheit gibt." },
      { blocId: "afd", approval: 28, reason: "Lehnt vegane Vorgaben und universelle Leistungen reflexhaft ab." },
      { blocId: "bsw", approval: 72, reason: "Funktioniert, wenn Regionalität und Preisdisziplin im Vordergrund stehen." },
    ],
  },
  {
    id: "praevention",
    emoji: "🏥",
    title: "Pflicht-Gesundheitscheck ab 35 (wie Japan)",
    description: "Jährlicher Check für alle 35-74-Jährigen. Krankenkassen bekommen Anreize für gesündere Versicherte.",
    annualCost: 2.5,
    annualSaving: 18.0,
    reactions: [
      { personaId: "thomas", approval: 75, reason: "Sinnvoll — Prävention spart langfristig Milliarden." },
      { personaId: "max", approval: 80, reason: "Datengetrieben, effizient. Warum machen wir das nicht längst?" },
      { personaId: "monika", approval: 85, reason: "Endlich kümmert sich jemand BEVOR ich krank bin." },
      { personaId: "frank", approval: 72, reason: "Ok, aber ich will nicht gezwungen werden." },
      { personaId: "kevin", approval: 65, reason: "Kostenlos? Dann ja. Aber ich geh ungern zum Arzt." },
      { personaId: "renate", approval: 90, reason: "Für mich als Pflegende ist das überlebenswichtig!" },
      { personaId: "juergen", approval: 55, reason: "Pflicht? Hmm. Aber wenn mein Blutdruck entdeckt wird..." },
      { personaId: "heinrich", approval: 70, reason: "Weniger Krankentage bei meinen Mitarbeitern? Ja bitte." },
    ],
    politicianReactions: [
      { blocId: "union", approval: 76, reason: "Solide, wenn Eigenverantwortung und frühe Diagnose betont werden." },
      { blocId: "spd", approval: 88, reason: "Prävention spart später viel Geld und Leid." },
      { blocId: "greens", approval: 80, reason: "Stark, wenn mentale Gesundheit und kommunale Prävention mitlaufen." },
      { blocId: "left", approval: 74, reason: "Akzeptabel, wenn es kostenlos und niedrigschwellig bleibt." },
      { blocId: "fdp", approval: 61, reason: "Ok, wenn Datenschutz und Arbeitgeberaufwand klar geregelt sind." },
      { blocId: "afd", approval: 54, reason: "Zustimmung nur, solange es nicht nach Zwangsmedizin wirkt." },
      { blocId: "bsw", approval: 69, reason: "Gute Kosten-Nutzen-Logik, wenn Hausärzte gestärkt werden." },
    ],
  },
  {
    id: "gkvpkv",
    emoji: "⚕️",
    title: "GKV + PKV zusammenführen (wie Taiwan)",
    description: "Ein System für alle. Keine Zwei-Klassen-Medizin. Verwaltungskosten von 5-6% auf 2% senken.",
    annualCost: 2.0,
    annualSaving: 7.0,
    reactions: [
      { personaId: "thomas", approval: 35, reason: "Verliere meine PKV-Vorteile. Ungerecht." },
      { personaId: "heinrich", approval: 20, reason: "Ich zahle mehr und warte länger. Nein danke." },
      { personaId: "monika", approval: 88, reason: "Endlich gleich behandelt wie Privatpatienten!" },
      { personaId: "kevin", approval: 92, reason: "Gleicher Arzt für alle? Das ist Gerechtigkeit." },
      { personaId: "manfred", approval: 95, reason: "Ich warte 3 Monate auf den Facharzt. Das muss aufhören." },
      { personaId: "claudia", approval: 85, reason: "Solidarisch und effizient. Überfällig." },
      { personaId: "max", approval: 45, reason: "Effizient ja, aber ich will Wahlfreiheit behalten." },
      { personaId: "sandra", approval: 90, reason: "Als Gig-Workerin falle ich durchs Raster. Ein System hilft." },
    ],
    politicianReactions: [
      { blocId: "union", approval: 32, reason: "Zu harter Eingriff in bestehende Systeme und private Interessen." },
      { blocId: "spd", approval: 78, reason: "Bürgerversicherung ist ein alter Kernwunsch." },
      { blocId: "greens", approval: 82, reason: "Gerechtigkeit plus Effizienz, wenn der Übergang klug gestaltet ist." },
      { blocId: "left", approval: 93, reason: "Abschaffung der Zwei-Klassen-Medizin ist überfällig." },
      { blocId: "fdp", approval: 18, reason: "Lehnt Systemzwang und das Ende privater Wahlmodelle ab." },
      { blocId: "afd", approval: 26, reason: "Würde es als Staatsmedizin framen." },
      { blocId: "bsw", approval: 71, reason: "Ein solidarisches System ist populär, wenn Landarzt-Frage mitgedacht wird." },
    ],
  },
  {
    id: "digitalverwaltung",
    emoji: "📱",
    title: "Digitale Verwaltung (Estland-Modell)",
    description: "Ein System für alles: Steuern in 3 Min, Firmengründung in 24h, Bürgeramt-Termin in 48h, du siehst wer deine Daten abruft.",
    annualCost: 3.0,
    annualSaving: 5.0,
    reactions: [
      { personaId: "max", approval: 98, reason: "ENDLICH. Warum hat das 20 Jahre gedauert?" },
      { personaId: "thomas", approval: 85, reason: "Effizienz. Weniger Bürokratie. Absolut dafür." },
      { personaId: "heinrich", approval: 95, reason: "Firmengründung in 24h statt 10 Tagen? Gestern!" },
      { personaId: "lena", approval: 90, reason: "Als Freelancerin: Steuern in 3 Minuten = Lebensretter." },
      { personaId: "maria", approval: 15, reason: "Ich habe kein Internet. Was wird aus mir?" },
      { personaId: "juergen", approval: 20, reason: "Ich kann die Formulare kaum lesen. Digital macht es schlimmer." },
      { personaId: "dieter", approval: 25, reason: "Zu alt für Computer. Persönlicher Kontakt muss bleiben." },
      { personaId: "ahmad", approval: 75, reason: "Digital ist gut — aber in welcher Sprache?" },
    ],
    politicianReactions: [
      { blocId: "union", approval: 86, reason: "Bürokratieabbau verkauft sich fast von selbst." },
      { blocId: "spd", approval: 74, reason: "Gut, wenn analoge Hilfen und Arbeitnehmerrechte mitlaufen." },
      { blocId: "greens", approval: 79, reason: "Stark, wenn Datenschutz und Teilhabe sauber gelöst sind." },
      { blocId: "left", approval: 52, reason: "Nur mit klaren Schutzpfaden für Menschen ohne digitale Souveränität." },
      { blocId: "fdp", approval: 95, reason: "Fast die reine Lehre von Modernisierung und Effizienz." },
      { blocId: "afd", approval: 41, reason: "Würde Datenschutz- und Kontrollängste instrumentalisieren." },
      { blocId: "bsw", approval: 49, reason: "Skeptisch, wenn der analoge Staat gleichzeitig ausgedünnt wird." },
    ],
  },
  {
    id: "vermoegensteuer",
    emoji: "💰",
    title: "Vermögensteuer 0,5% ab €5 Mio.",
    description: "Wie Norwegen und die Schweiz: 0,5% jährlich auf Nettovermögen ab €5 Mio. Betrifft ~0,3% der Bevölkerung. Einnahmen: €10-15 Mrd./Jahr. Finanziert Schulessen, Pflege, Prävention.",
    annualCost: 0.5,
    annualSaving: 12.0,
    reactions: [
      { personaId: "thomas", approval: 55, reason: "Schweiz macht's seit Jahrzehnten — wirtschaftlich stabil. Aber Freibetrag muss hoch genug sein." },
      { personaId: "claudia", approval: 92, reason: "Endlich. Top 10% besitzen 67% — 0,5% ist das Mindeste." },
      { personaId: "max", approval: 40, reason: "Kapitalflucht-Risiko. Nur wenn EU-weit koordiniert." },
      { personaId: "lena", approval: 88, reason: "Ich hab €200 am Monatsende. Die haben €5 Mio. — 0,5% ist fair." },
      { personaId: "stefan-julia", approval: 72, reason: "Betrifft uns nicht (unter €5 Mio.). Wenn es Kita und Schulessen finanziert — ja." },
      { personaId: "kevin", approval: 95, reason: "Wer Millionen hat und nichts abgibt, während ich nicht weiß wie ich Strom bezahle? Klar." },
      { personaId: "michelle", approval: 85, reason: "Klingt fair. Die merken das doch kaum." },
      { personaId: "monika", approval: 65, reason: "Wenn es wirklich für Pflege und Rente geht — ja. Aber nicht verschwenden." },
      { personaId: "heinrich", approval: 15, reason: "Ich habe 40 Jahre gearbeitet für mein Vermögen. Das ist leistungsfeindlich." },
      { personaId: "frank", approval: 80, reason: "Die Reichen zahlen weniger als ich. Das muss sich ändern." },
      { personaId: "jan", approval: 55, reason: "Wenn mein Hof verschont bleibt (Freibetrag) — ok." },
      { personaId: "sandra", approval: 92, reason: "€10 Mrd. für Kitas und Schulessen? Sofort." },
      { personaId: "fatima", approval: 78, reason: "Im Islam ist Zakat Pflicht — 2,5%. 0,5% ist ja noch wenig." },
      { personaId: "manfred", approval: 88, reason: "Meine Rente reicht nicht, die haben Millionen. Gerechtigkeit." },
      { personaId: "maria", approval: 70, reason: "Mein Mann hat auch immer gesagt: wer viel hat, soll teilen." },
      { personaId: "lea", approval: 95, reason: "Deutschland hat die höchste Vermögensungleichheit der Eurozone. 0,5% ist Minimum." },
      { personaId: "alex", approval: 90, reason: "Vermögen = Macht. Ungleichheit verstärkt jede andere Diskriminierung." },
      { personaId: "dieter", approval: 60, reason: "Soll aber wirklich bei den Reichen ankommen, nicht bei der Mittelschicht." },
      { personaId: "ayse", approval: 82, reason: "Meine Eltern sind mit nichts gekommen. Chancengleichheit braucht Umverteilung." },
      { personaId: "juergen", approval: 75, reason: "Hab zwar nix, aber die könnten mal was abgeben." },
    ],
    politicianReactions: [
      { blocId: "union", approval: 28, reason: "Zu großes Framing-Risiko bei Mittelstand und Familienunternehmen." },
      { blocId: "spd", approval: 81, reason: "Starke Fairness-Erzählung, wenn der Freibetrag hoch genug ist." },
      { blocId: "greens", approval: 88, reason: "Sehr anschlussfähig mit Investitionsbindung und Transparenz." },
      { blocId: "left", approval: 97, reason: "Klare Macht- und Verteilungsfrage, hier sehr hohe Zustimmung." },
      { blocId: "fdp", approval: 9, reason: "Lehnt Substanzbesteuerung fast grundsätzlich ab." },
      { blocId: "afd", approval: 22, reason: "Würde es als Angriff auf Leistung und Eigentum rahmen." },
      { blocId: "bsw", approval: 74, reason: "Populär, solange Mittelstandsschutz glaubwürdig bleibt." },
    ],
  },
  {
    id: "ubs",
    emoji: "🏠",
    title: "Universal Basic Services (UBS)",
    description: "Statt Geld verteilen: Grunddienste für alle kostenlos. Schulessen, ÖPNV u25/ü65, Kinderbetreuung, Basisenergie. Kostet €30-45 Mrd. netto — 1/10 von UBI. Spart €70-110 Mrd. durch weniger Ungleichheitskosten.",
    annualCost: 45.0,
    annualSaving: 90.0,
    reactions: [
      { personaId: "thomas", approval: 62, reason: "€45 Mrd. ist viel. Aber die Rechnung mit €90 Mrd. Ersparnis — wenn das stimmt, rechnet es sich." },
      { personaId: "claudia", approval: 95, reason: "Wien, Skandinavien, Singapur — überall funktioniert es. Warum nicht hier?" },
      { personaId: "max", approval: 45, reason: "Klingt nach Planwirtschaft. Lieber Geld geben, Leute entscheiden selbst." },
      { personaId: "lena", approval: 90, reason: "Gratis ÖPNV, kostenlose Kita — das verändert mein ganzes Budget." },
      { personaId: "stefan-julia", approval: 92, reason: "Kita €0 + Schulessen €0 + ÖPNV €0 = €400/Monat gespart. Game changer." },
      { personaId: "kevin", approval: 98, reason: "Endlich ein System das mir wirklich hilft, statt Formulare ausfüllen." },
      { personaId: "monika", approval: 75, reason: "Gratis Bus ab 65? Endlich komme ich zum Arzt ohne €49/Monat." },
      { personaId: "dieter", approval: 70, reason: "Auf dem Land haben wir keinen ÖPNV. Das muss mitgedacht werden." },
      { personaId: "heinrich", approval: 25, reason: "Wer bezahlt das? Mittelstand wird wieder geschröpft." },
      { personaId: "frank", approval: 82, reason: "Alle kriegen das Gleiche, egal ob Ost oder West. Das ist fair." },
      { personaId: "sandra", approval: 97, reason: "Kita zu meinen Schichtzeiten + gratis = ich kann endlich planen." },
      { personaId: "fatima", approval: 90, reason: "Vier Kinder, alles kostenlos? Bildung, Essen, Transport? Ja!" },
      { personaId: "ahmad", approval: 85, reason: "Integration durch Zugang, nicht durch Formulare. Richtig." },
      { personaId: "manfred", approval: 88, reason: "Barrierefreier ÖPNV + Gesundheitsversorgung = mein Leben wird leichter." },
      { personaId: "maria", approval: 80, reason: "Gratis Bus und warmes Essen für Senioren — das hätte mein Mann sich gewünscht." },
      { personaId: "lea", approval: 93, reason: "UBS kostet 1/10 von UBI und liefert mehr pro Euro. Die Forschung ist klar." },
      { personaId: "pawel", approval: 70, reason: "Gilt das auch für Saisonarbeiter? Wenn ja — sehr gut." },
      { personaId: "renate", approval: 85, reason: "Pflegende Angehörige brauchen kostenlose Entlastung. UBS liefert das." },
    ],
    politicianReactions: [
      { blocId: "union", approval: 42, reason: "Zu teuer als Einstieg, außer es ist eng auf Familien und Basisdienste fokussiert." },
      { blocId: "spd", approval: 86, reason: "Starke soziale Rendite mit klarer Alltagserleichterung." },
      { blocId: "greens", approval: 90, reason: "Verbindet Klima, soziale Infrastruktur und Entlastung sauber." },
      { blocId: "left", approval: 96, reason: "Universelle Grunddienste sind Kern linker Sozialstaatslogik." },
      { blocId: "fdp", approval: 18, reason: "Sieht darin einen überdehnten, teuren Staat." },
      { blocId: "afd", approval: 24, reason: "Würde es als Umverteilungsapparat bekämpfen." },
      { blocId: "bsw", approval: 79, reason: "Hohe Zustimmung, wenn es konkret statt abstrakt erklärt wird." },
    ],
  },
  {
    id: "erbschaft",
    emoji: "🏛️",
    title: "Erbschaftsteuer: Schlupflöcher schließen",
    description: "Betriebsvermögensprivileg deckeln bei €50 Mio. (aktuell unbegrenzt). Effektiver Steuersatz von 2,3% auf 15%+ für Großvermögen. Freibeträge für Normalvermögen bleiben. Einnahmen: €5-10 Mrd./Jahr.",
    annualCost: 0.2,
    annualSaving: 7.5,
    reactions: [
      { personaId: "thomas", approval: 70, reason: "€50 Mio. Freibetrag ist großzügig. Schlupflöcher schließen — ja." },
      { personaId: "claudia", approval: 88, reason: "2,3% effektiv auf Milliardenvermögen? Das ist doch ein Witz. Reform überfällig." },
      { personaId: "max", approval: 50, reason: "Familienunternehmen schützen, aber Stiftungstricks stoppen — finde ich ok." },
      { personaId: "kevin", approval: 90, reason: "Die erben Milliarden steuerfrei. Ich erbe Schulden." },
      { personaId: "heinrich", approval: 20, reason: "Mein Betrieb ist 120 Mio. wert — soll ich verkaufen um Steuern zu zahlen?" },
      { personaId: "stefan-julia", approval: 75, reason: "Unser Haus (€400k) ist eh unter dem Freibetrag. Betrifft uns nicht." },
      { personaId: "frank", approval: 85, reason: "Dynastien wie die Quandts zahlen quasi nichts. Wo ist da Leistung?" },
      { personaId: "sandra", approval: 92, reason: "Niemand hat sich 10 Milliarden verdient. Das ist geerbte Macht." },
      { personaId: "jan", approval: 45, reason: "Wenn mein Hof als Betriebsvermögen geschützt bleibt — ok. Sonst nein." },
      { personaId: "lea", approval: 95, reason: "Piketty hat Recht: r > g. Ohne Erbschaftsteuer wächst Ungleichheit ewig." },
      { personaId: "fatima", approval: 75, reason: "Im Islam gibt es feste Erbregeln — aber auch Pflicht zum Teilen (Zakat)." },
      { personaId: "monika", approval: 60, reason: "Mein Häuschen soll an die Kinder gehen — aber Milliarden steuerfrei? Nein." },
    ],
    politicianReactions: [
      { blocId: "union", approval: 51, reason: "Zustimmung nur, wenn Familienunternehmen und Wohnhäuser sauber geschützt werden." },
      { blocId: "spd", approval: 83, reason: "Leicht zu verkaufen: Schlupflöcher schließen statt neue Steuer erfinden." },
      { blocId: "greens", approval: 85, reason: "Sehr gutes Fairness-Narrativ bei moderatem Rechtsrisiko." },
      { blocId: "left", approval: 94, reason: "Hohe Zustimmung, weil es geerbte Macht direkt adressiert." },
      { blocId: "fdp", approval: 26, reason: "Skepsis bei Betriebsvermögen und Investitionsanreizen." },
      { blocId: "afd", approval: 34, reason: "Nur tragfähig, wenn Familienerbe ausdrücklich ausgenommen bleibt." },
      { blocId: "bsw", approval: 81, reason: "Breit populär, weil kleine Erben geschützt und große getroffen werden." },
    ],
  },
  {
    id: "vermoegenspaket",
    emoji: "⚖️",
    title: "Vermögenspaket: UBS + Erbschaft + Top-Vermögen",
    description: "Ein kombiniertes Fairness-Paket: Universal Basic Services, reformierte Erbschaftsteuer und ein enger Vermögensbeitrag nur für sehr große Vermögen. Ziel: sichtbare Entlastung unten, faire Beteiligung oben, hoher Netto-Return über 10 Jahre.",
    annualCost: 45.0,
    annualSaving: 110.0,
    reactions: [
      { personaId: "thomas", approval: 60, reason: "Ich will klare Schutzregeln für Mittelstand und Immobilieneigentum — dann ist das Paket vertretbar." },
      { personaId: "claudia", approval: 97, reason: "Genau so: Umverteilung plus konkrete öffentliche Leistungen statt nur moralischer Debatte." },
      { personaId: "max", approval: 38, reason: "Zu viel Paket auf einmal. Nur mit klaren Standort- und Innovationsgarantien." },
      { personaId: "lena", approval: 94, reason: "Wenn Miete, Kita und Mobilität sofort leichter werden, fühlt sich Politik endlich relevant an." },
      { personaId: "stefan-julia", approval: 89, reason: "Wenn unser Alltag billiger wird und unser Haus geschützt bleibt, ist das sehr stark." },
      { personaId: "kevin", approval: 99, reason: "Das ist das erste Paket, das wirklich bei Leuten wie mir ankommt statt nur zu reden." },
      { personaId: "monika", approval: 74, reason: "Wenn Pflege und Arzttermine besser werden und kleine Erben Ruhe haben, finde ich das gut." },
      { personaId: "heinrich", approval: 12, reason: "Das ist für Vermögende ein Frontalangriff, auch wenn UBS den Druck sozial abfedert." },
      { personaId: "frank", approval: 86, reason: "Wenn die da oben endlich zahlen und unten etwas sichtbar ankommt, zieht das." },
      { personaId: "sandra", approval: 98, reason: "Gratis Grunddienste plus faire Lastenverteilung. Mehr brauche ich politisch fast nicht." },
      { personaId: "jan", approval: 48, reason: "Nur mit harten Garantien für Höfe und Familienbetriebe." },
      { personaId: "lea", approval: 98, reason: "Hoher Return, hohe Gerechtigkeit, konkrete Infrastruktur. Genau mein Punkt." },
      { personaId: "maria", approval: 76, reason: "Wenn alles einfacher und sicherer wird und normale Leute nicht zahlen, ist das richtig." },
      { personaId: "renate", approval: 90, reason: "Pflegende Angehörige würden das im Alltag sofort spüren." },
    ],
    politicianReactions: [
      { blocId: "union", approval: 34, reason: "Zu groß als Paket, aber einzelne Bausteine wären verhandelbar." },
      { blocId: "spd", approval: 89, reason: "Nahe an einem idealen sozialdemokratischen Paket mit sichtbarer Rendite." },
      { blocId: "greens", approval: 91, reason: "Sozial-ökologischer Kern mit klarer Entlastungswirkung." },
      { blocId: "left", approval: 98, reason: "Maximale Zustimmung: Umverteilung plus universelle Dienste." },
      { blocId: "fdp", approval: 12, reason: "Zu viel Staat, zu viel Umverteilung, zu wenig Markt." },
      { blocId: "afd", approval: 18, reason: "Würde das Paket als ideologischen Rundumschlag bekämpfen." },
      { blocId: "bsw", approval: 84, reason: "Hohe Zustimmung, wenn die Sprache schlicht und die Entlastung konkret bleibt." },
    ],
  },
]

function labelForApproval(approval: number): string {
  if (approval >= 70) return "Breite Zustimmung"
  if (approval >= 50) return "Knappe Mehrheit"
  return "Umstritten"
}

export function simulatePolicy(scenarioId: string): { approval: number; label: string } {
  const scenario = policyScenarios.find(s => s.id === scenarioId)
  if (!scenario) return { approval: 0, label: "?" }

  // Weight reactions by persona population weight
  let totalWeight = 0
  let weightedApproval = 0
  for (const reaction of scenario.reactions) {
    const persona = personas.find(p => p.id === reaction.personaId)
    if (persona) {
      weightedApproval += reaction.approval * persona.weight
      totalWeight += persona.weight
    }
  }
  const approval = Math.round(weightedApproval / totalWeight)
  return { approval, label: labelForApproval(approval) }
}

export function simulatePoliticianPolicy(scenarioId: string): { approval: number; label: string } {
  const scenario = policyScenarios.find(s => s.id === scenarioId)
  if (!scenario) return { approval: 0, label: "?" }

  let totalWeight = 0
  let weightedApproval = 0
  for (const reaction of scenario.politicianReactions) {
    const bloc = politicalBlocs.find(p => p.id === reaction.blocId)
    if (bloc) {
      weightedApproval += reaction.approval * bloc.weight
      totalWeight += bloc.weight
    }
  }

  const approval = Math.round(weightedApproval / totalWeight)
  return { approval, label: labelForApproval(approval) }
}

export function getPolicyMetrics(scenarioId: string) {
  const scenario = policyScenarios.find(s => s.id === scenarioId)
  if (!scenario) {
    return {
      citizenApproval: 0,
      politicianApproval: 0,
      overallPassability: 0,
      netReturn: 0,
      roi: 0,
      tenYearReturn: 0,
      label: "?",
    }
  }

  const citizenApproval = simulatePolicy(scenarioId).approval
  const politicianApproval = simulatePoliticianPolicy(scenarioId).approval
  const netReturn = +(scenario.annualSaving - scenario.annualCost).toFixed(1)
  const roi = scenario.annualCost === 0 ? 0 : +(scenario.annualSaving / scenario.annualCost).toFixed(1)
  const tenYearReturn = +(netReturn * 10).toFixed(0)
  const overallPassability = Math.round(citizenApproval * 0.45 + politicianApproval * 0.35 + Math.min(100, roi * 10) * 0.2)

  return {
    citizenApproval,
    politicianApproval,
    overallPassability,
    netReturn,
    roi,
    tenYearReturn,
    label: labelForApproval(overallPassability),
  }
}
