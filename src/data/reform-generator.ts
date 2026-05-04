import type { PolicyScenario, PolicyReaction, PoliticianReaction } from './personas.ts'
import { personas, politicalBlocs } from './personas.ts'

export interface ReformTemplate {
  id: string
  emoji: string
  title: string
  description: string
  annualCost: number
  annualSaving: number
  originCountry: string
  originFlag: string
  originLesson: string
  keywords: string[]
  reactions: PolicyReaction[]
  politicianReactions: PoliticianReaction[]
}

function r(personaId: string, approval: number, reason: string): PolicyReaction {
  return { personaId, approval, reason }
}

function p(blocId: string, approval: number, reason: string): PoliticianReaction {
  return { blocId, approval, reason }
}

export const reformTemplates: ReformTemplate[] = [
  {
    id: 'baukindergeld',
    emoji: '🏡',
    title: 'Baukindergeld + Öffentliche Wohnungsbau (Wien-Modell)',
    description: '50.000 öffentliche Wohnungen pro Jahr, Mietbindung 20 Jahre, wie Wiens Gemeindebauten seit 100 Jahren. Baukindergeld €12.000 pro Kind für Eigennutzer. Miete max. 25% des Einkommens. Einnahmen durch Boden-Wertsteuer und Immobilienspekulationssteuer.',
    annualCost: 8.5,
    annualSaving: 14.0,
    originCountry: 'Wien',
    originFlag: '🇦🇹',
    originLesson: 'Wiens Gemeindebau: 220.000 Wohnungen, 60% der Bevölkerung zahlt unter 25% für Miete. Seit 100 Jahren stabil.',
    keywords: ['wohnen', 'miete', 'wohnungskrise', 'bauen', 'immobilien', 'spekulation', 'gentrifizierung', 'bezahlbar', 'obdachlosigkeit', 'wohnungsbau'],
    reactions: [
      r('thomas', 68, 'Wien funktioniert seit 100 Jahren. Aber: wer bezahlt den Bau? Wenn durch Spekulationssteuer — tragbar.'),
      r('claudia', 92, 'Wien zeigt: öffentlicher Wohnbau funktioniert und macht Städte lebenswert. Überfällig in Deutschland.'),
      r('max', 42, 'Wien ist anders (Großstadt, historisch). In Deutschland mehr Markt, weniger Staat nötig.'),
      r('lena', 96, 'Ich zahle €750 für 25m². Wenn ich 25% meines Einkommens zahlen könnte für eine Wohnung — das wäre Lebensqualität.'),
      r('stefan-julia', 88, 'Baukindergeld €12.000 und Mietbindung? Für Familien game changer.'),
      r('kevin', 90, 'Ich wohne bei meiner Mutter mit 41. Eine bezahlbare Wohnung würde mein Leben ändern.'),
      r('michelle', 85, 'Wenn die Miete nicht mehr 55% vom Einkommen frisst — endlich Konsum und Freizeit.'),
      r('sandra', 94, 'Single-Mutter, Schichtzeiten, teure Kita. Wenn Wohnung gesichert ist, kann ich atmen.'),
      r('maria', 78, 'In meiner Jugend gab es Sozialwohnungen. Die sind weg. Das wäre wieder Sicherheit.'),
      r('lea', 90, 'Gentrifizierung stoppen + öffentlicher Wohnbau = Berlin bleibt lebenswert.'),
      r('ahmad', 82, 'Als Geflüchteter: Wohnung = erstes Fundament. Wenn öffentlich und fair, kein Stigma.'),
      r('alex', 88, 'Queere Wohnprojekte + öffentlicher Wohnbau = Schutz vor Diskriminierung am Wohnungsmarkt.'),
    ],
    politicianReactions: [
      p('union', 45, 'Wohnbau ja, aber öffentlich-rechtlich verwaltet und nicht als Staatswohnungsbau. Freibeträge müssen hoch bleiben.'),
      p('spd', 88, 'Kernforderung seit Rot-Grün 1998. Wiens Modell ist anschlussfähig.'),
      p('greens', 90, 'Klima, soziale Stadt und Wohnen zusammendenken — sehr stark.'),
      p('left', 94, '100% öffentlicher Wohnbau wäre besser, aber Wien-Modell ist ein guter Anfang.'),
      p('fdp', 18, 'Staatlicher Wohnbau lehnen wir ab — Markt mit Anreizen, nicht Bebauung.'),
      p('afd', 38, 'Würde gegen "Wohnungen für Ausländer" instrumentalisieren, kann aber bei Wählerschaft Ost populär sein.'),
      p('bsw', 76, 'Breite Zustimmung, wenn öffentlicher Wohnbau für alle und nicht nur für Geflüchtete kommuniziert wird.'),
    ],
  },
  {
    id: 'verguetungspflege',
    emoji: '👩‍⚕️',
    title: 'Pflegevergütung auf €18/h + Mindestpersonal (Australien-Modell)',
    description: 'Pflegekräfte mindestens €18/h brutto, Mindestbesetzung gesetzlich (1:5 Tag, 1:8 Nacht wie Australien). Kosten: €6 Mrd./Jahr. Ersparnis: 30% weniger Krankenhaus-Wiederaufnahmen, 50% weniger Burnout-Fluktuation.',
    annualCost: 6.0,
    annualSaving: 9.5,
    originCountry: 'Australien',
    originFlag: '🇦🇺',
    originLesson: 'Australien: Mindest-Pflegepersonal pro Station gesetzlich. 30% weniger Komplikationen, 50% weniger Burnout.',
    keywords: ['pflege', 'pflegekraft', 'pflegenotstand', 'krankenhaus', 'altenpflege', 'gesundheit', 'burnout', 'personal', 'verguetung', 'lohn'],
    reactions: [
      r('renate', 99, 'DREI Punkte pro Pflegejahr war gut. Aber €18/h UND Mindestpersonal? DAS ist die Revolution die wir brauchen.'),
      r('monika', 85, 'Wenn die Pflegekraft nicht 12 Patienten hat, kann sie sich um mich kümmern.'),
      r('dieter', 80, 'Meine Frau pflege ich seit 6 Jahren. Wenn die Pflegekraft €18 verdient und nicht 6 hat — besser für uns beide.'),
      r('manfred', 88, 'Ich bin schwerbehindert. Pflegequalität ist Lebensqualität.'),
      r('sandra', 92, 'Ich bin Pflegehelferin. €18/h wären Anerkennung. Und Mindestpersonal = kein Burnout.'),
      r('stefan-julia', 78, 'Wenn meine Eltern gepflegt werden müssen — Qualität vor Preis.'),
      r('thomas', 62, 'Kostet €6 Mrd. Aber wenn Krankenhaus-Kosten sinken — rechnet sich.'),
      r('claudia', 90, 'Pflege ist Care-Arbeit. Wer das degradiert, degradiert die Gesellschaft.'),
      r('maria', 82, 'In meinem Heim sind 2 Pflegekräfte für 30 Menschen. Das ist nicht menschlich.'),
      r('lena', 86, 'Pflege ist feministisches Thema. 80% Frauen, schlecht bezahlt, ungesehen.'),
      r('heinrich', 45, '€18/h + gesetzliches Personalminimum = massive Lohnkostensteigerung für Pflegeunternehmen. Fragwürdig.'),
      r('frank', 72, 'Ostdeutschland hat Pflegenotstand. Das würde uns helfen.'),
    ],
    politicianReactions: [
      p('union', 52, 'Tragbar mit Kosten-Nutzen-Rechnung und Übergangsphase. Pflege ist Wahlkampfthema.'),
      p('spd', 92, 'Pflegekampagne 2021 hat gezeigt: hohe Zustimmung, aber Umsetzung schwierig.'),
      p('greens', 88, 'Care-Revolution als Kernprojekt — sehr anschlussfähig.'),
      p('left', 96, 'Pflegevergütung und Personalminimum sind Kernforderung seit 15 Jahren.'),
      p('fdp', 22, 'Staatliche Lohnvorgaben lehnen wir ab — Tarifautonomie statt politischer Lohnfindung.'),
      p('afd', 58, 'Pflegenotstand betrifft ländliche Ostgebiete direkt — populäres Thema.'),
      p('bsw', 82, 'Pflegekräfte-Entlastung ist bei Stammwählern sehr populär.'),
    ],
  },
  {
    id: 'breitband',
    emoji: '📡',
    title: 'Breitband als Grundrecht: 1 Gbit/s für alle (Estland-Modell)',
    description: 'Recht auf 1 Gbit/s Internet für jeden Haushalt, wie Estland seit 2017. Kosten: €3 Mrd./Jahr (Förderung + Infrastruktur). Ersparnis: Digitale Verwaltung spart €5 Mrd./Jahr Bürokratie, Remote-Arbeit senkt Pendlerverkehr.',
    annualCost: 3.0,
    annualSaving: 5.5,
    originCountry: 'Estland',
    originFlag: '🇪🇪',
    originLesson: 'Estland: Breitband als Grundrecht seit 2017. 99% Haushalte mit 1 Gbit/s. Digitale Verwaltung funktioniert nur mit Infrastruktur.',
    keywords: ['internet', 'digital', 'breitband', 'land', 'telekom', 'infrastruktur', 'remote', 'glasfaser', 'technologie', 'zugriff'],
    reactions: [
      r('max', 98, 'Endlich. Deutschland ist ein Entwicklungsland bei Internet. Estland zeigt: es geht.'),
      r('thomas', 78, 'Digitale Verwaltung + Home-Office + Telemedizin — braucht Infrastruktur. Sinnvoll.'),
      r('lena', 92, 'Als Freelancerin: schnelles Internet = Existenzgrundlage. Nicht Luxus, nicht Gerechtigkeit.'),
      r('kevin', 75, 'Ich hab kein Geld für teures Internet. Wenn das Grundrecht ist — endlich gleiche Chancen.'),
      r('maria', 55, 'Ich hab kein Internet. Aber mein Enkel sagt, es ist wichtig. Wenn es für alle kommt — gut.'),
      r('juergen', 45, 'Ich kann nicht lesen. Internet bringt mir nix. Aber vielleicht Sprachassistenten?'),
      r('jan', 68, 'Auf dem Land haben wir 16 Mbit/s. Das ist 2026 peinlich. Wenn Glasfaser kommt — sehr gut.'),
      r('frank', 72, 'Ostdeutschland: Digitalisierung versprochen, nie geliefert. Endlich.'),
      r('ahmad', 80, 'Online-Deutschkurse, Fernarbeit, Kontakt zur Familie — Internet = Integration.'),
      r('alex', 88, 'Queere Communities leben online. Schnelles Internet = Sicherheit und Zugehörigkeit.'),
      r('pawel', 70, 'Saisonarbeiter: Internet = Kontakt zu Familie, Bank, Rechten. Grundrecht? Ja.'),
      r('heinrich', 65, 'Kostet €3 Mrd. Aber Home-Office = weniger Pendler = weniger Stau = mehr Produktivität. Rechnet sich.'),
    ],
    politicianReactions: [
      p('union', 76, 'Digitale Infrastruktur ist modernes CDU-Thema. Tragfähig.'),
      p('spd', 84, 'Breitband als Grundrecht = sozialdemokratischer Zugang zu Teilhabe.'),
      p('greens', 88, 'Remote-Arbeit = weniger Pendeln = Klimaschutz. Digitale Infrastruktur = grünes Thema.'),
      p('left', 82, 'Digitale Teilhabe als soziales Grundrecht — anschlussfähig.'),
      p('fdp', 72, 'Infrastruktur-Förderung ok, aber Markt soll ausbauen, nicht Staat monopolieren.'),
      p('afd', 48, 'Würde "Staatsinternet" framen, aber ländliche Wählerschaft braucht es.'),
      p('bsw', 70, 'Ländliche Ostgebiete profitieren — populär, wenn nicht als Überwachung verkauft wird.'),
    ],
  },
  {
    id: 'studienkosten',
    emoji: '🎓',
    title: 'Studiengebühren abschaffen + €500/Monat Stipendium (Schottland-Modell)',
    description: 'Keine Studiengebühren, €500/Monat für alle Studenten (nicht nur BAföG-Empfänger), wie Schottland seit 2000. Kosten: €8 Mrd./Jahr. Ersparnis: 40% weniger Studienabbrecher, höheres Lebenseinkommen = mehr Steuern.',
    annualCost: 8.0,
    annualSaving: 6.0,
    originCountry: 'Schottland',
    originFlag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
    originLesson: 'Schottland: Keine Studiengebühren seit 2000. Studienabbrecher-Rate 40% niedriger als England mit £9.250/Jahr.',
    keywords: ['studium', 'bildung', 'uni', 'student', 'bafoeg', 'stipendium', 'hochschule', 'ausbildung', 'karriere', 'chancen'],
    reactions: [
      r('lea', 98, 'Ich hab €950/Monat, Miete frisst 55%. €500 wäre Luft zum Atmen. BAföG ist ein Bürokratie-Monster.'),
      r('max', 72, '€500 für alle? Klingt nach Gießkanne. Aber Schottland zeigt: weniger Abbrecher, mehr Fachkräfte.'),
      r('claudia', 90, 'Bildung ist Investition, nicht Kostenstelle. Schottland seit 25 Jahren beweisbar.'),
      r('stefan-julia', 80, 'Wenn meine Kinder studieren: keine Schulden + Stipendium. Das ist Planungssicherheit.'),
      r('kevin', 85, 'Ich hab keinen Abschluss. Wenn Studium kostenlos + €500 — hätte ich studiert statt Bürgergeld.'),
      r('heinrich', 48, '€8 Mrd. für Studenten, während Fachkräfte fehlen? Lieber Ausbildungsprämien.'),
      r('thomas', 62, 'Bildung ist Zukunft. Aber €500 für alle, auch Reiche? Targeting wäre besser.'),
      r('fatima', 88, 'Meine Kinder sollen studieren. Aber €500/Monat wäre die erste Chance ohne Angst.'),
      r('sandra', 82, 'Wenn ich studieren könnte UND €500 bekommen — kein Minijob nötig.'),
      r('lena', 94, 'Schottland zeigt: universelles Stipendium = weniger Bürokratie, mehr Chancengleichheit.'),
      r('maria', 70, 'Mein Enkel studiert. Er hat €60.000 Schulden. Das wäre anders.'),
      r('juergen', 60, 'Ich hab nie studiert. Aber wenn mein Sohn könnte ohne Schulden — gut.'),
    ],
    politicianReactions: [
      p('union', 48, 'Bildung ja, aber €500 für alle ohne Bedürftigkeitsprüfung? Schwierig.'),
      p('spd', 86, 'Bildungsgerechtigkeit = SPD-Kern. Schottland-Modell ist stark.'),
      p('greens', 88, 'Bildung + Chancengleichheit + weniger Abbrecher = grünes Kernthema.'),
      p('left', 92, 'Kostenloses Studium + Stipendium = klassische linke Forderung.'),
      p('fdp', 28, 'Universelles Stipendium lehnen wir ab — BAföG mit Leistungsanreizen.'),
      p('afd', 35, 'Würde "Geld für linke Studenten" framen, aber Familien mit Kindern könnten zustimmen.'),
      p('bsw', 70, 'Wenn nicht nur für Akademiker, sondern auch für Fachschulen — breit populär.'),
    ],
  },
  {
    id: 'co2geld',
    emoji: '💨',
    title: 'Klimageld: €400/Jahr pro Person aus CO₂-Steuer (Schweiz-Modell)',
    description: 'CO₂-Steuer auf €150/t erhöhen, aber 80% der Einnahmen als Klimageld pro Kopf zurückverteilen (wie Schweiz seit 2008). Wer weniger verbraucht, profitiert. Kosten: 0 (umverteilt). Ersparnis: 5-8% CO₂-Reduktion, Gerechtigkeitswirkung.',
    annualCost: 0,
    annualSaving: 4.5,
    originCountry: 'Schweiz',
    originFlag: '🇨🇭',
    originLesson: 'Schweiz: CO₂-Steuer mit Klimageld-Rückverteilung seit 2008. 60% der Haushalte profitieren netto. CO₂-Emissionen -14% bei Industrie.',
    keywords: ['klima', 'co2', 'umwelt', 'steuer', 'energie', 'heizung', 'klimageld', 'nachhaltigkeit', 'emissionen', 'gruen'],
    reactions: [
      r('claudia', 96, 'Schweiz macht es seit 18 Jahren. Wer weniger verbraucht, profitiert. Gerecht + effektiv.'),
      r('lea', 92, '€400 Klimageld, CO₂-Steuer auf 150€. Ich fahre ÖPNV, heize wenig — ich profitiere. Endlich Klimapolitik die fair ist.'),
      r('lena', 88, 'Ich hab kein Auto. Wenn ich €400 bekomme und nur €100 mehr für Heizung zahle — netto +€300.'),
      r('kevin', 78, 'Ich kann mir keine Wärmepumpe leisten. Aber €400/Jahr helfen beim Strom. Und die Reichen mit Poolheizung zahlen mehr.'),
      r('stefan-julia', 72, 'Wir haben ein Haus. Heizung wird teurer, aber €400 gleichen aus. Bei Sanierung mit Förderung + Klimageld — ok.'),
      r('jan', 48, 'Bauer mit Ölheizung und Traktor: ich zahle mehr, bekomme €400. Rechnet sich nur, wenn Sprit nicht teurer wird.'),
      r('frank', 58, 'Ostdeutschland hat alte Häuser. Wir zahlen mehr für Heizung. €400 reichen nicht für Wärmepumpe.'),
      r('heinrich', 35, 'CO₂-Steuer auf €150 = Industrieabwanderung. Klimageld ist populistische Umverteilung.'),
      r('thomas', 55, 'Schweiz funktioniert, aber Deutschland ist größer, industrieller. Vorsichtig.'),
      r('monika', 70, '€400 sind €33/Monat. Meine Heizung wird teurer. Aber wenn alle das Gleiche bekommen — fair.'),
      r('maria', 68, 'Ich heize mit Öl. Wird teurer. Aber €400 helfen. Und die Jugend will das — dann soll es so sein.'),
      r('torsten', 30, 'Wieder Steuer. Wieder verteuern. Mehr Netto wollt ihr mir nicht geben, sondern Geld umschichten. Nervt.'),
    ],
    politicianReactions: [
      p('union', 42, 'CO₂-Preis mit Rückverteilung ist theoretisch ok, aber industriepolitisch riskant.'),
      p('spd', 78, 'Klimageld = soziale Klimapolitik. Anschlussfähig.'),
      p('greens', 94, 'CO₂-Preis + Klimageld = grünes Kernthema seit Jahrzehnten. Endlich.'),
      p('left', 88, 'Soziale Klimapolitik statt Klima ohne Gerechtigkeit.'),
      p('fdp', 22, 'CO₂-Steuer-Erhöhung lehnen wir ab — Technologieoffenheit statt Verbote und Preise.'),
      p('afd', 18, 'Würde als "Klima-Steuer-Raub" bekämpft.'),
      p('bsw', 60, 'Wenn ländliche Haushalte und Pendler explizit entlastet werden — tragbar.'),
    ],
  },
  {
    id: 'zuckersteuer',
    emoji: '🍬',
    title: 'Zuckersteuer wie UK (0,18€/l) + Ernährungsbildung in Schulen',
    description: '0,18€ pro Liter zuckerhaltiges Getränk, wie UK seit 2018. Einnahmen zweckgebunden: kostenloses Schulessen + Ernährungsbildung. Zucker-Konsum -35% in UK. Kosten: 0 (umverteilt). Ersparnis: €3 Mrd./Jahr weniger Diabetes-Kosten.',
    annualCost: 0,
    annualSaving: 3.0,
    originCountry: 'UK',
    originFlag: '🇬🇧',
    originLesson: 'UK: Zuckersteuer 2018. Zucker in Getränken -35%. Keine Konsumverlagerung (Leute trinken weniger, nicht billiger). Kinder-Adipositas-Rate stabilisiert.',
    keywords: ['zucker', 'gesundheit', 'diabetes', 'ernaehrung', 'schulessen', 'adipositas', 'getraenke', 'lebensmittel', 'praevention', 'kinder'],
    reactions: [
      r('claudia', 90, 'UK zeigt: es funktioniert, ohne dass die Armen mehr zahlen (kaufen weniger Zucker). Zweckgebunden = kostenloses Schulessen.'),
      r('stefan-julia', 82, 'Meine Kinder trinken zu viel Cola. Wenn das teurer wird und Schulessen umsonst — sehr gut.'),
      r('monika', 75, 'Mein Enkel ist dick. Zuckersteuer + Schulessen — das ist Prävention statt Medikamente.'),
      r('kevin', 70, 'Ich kauf billiges Limo. Wird teurer. Aber wenn Schulessen kostenlos — netto billiger.'),
      r('thomas', 60, 'Paternalistisch, aber UK-Daten sind überzeugend. Wenn Ernährungsbildung mitkommt — ok.'),
      r('michelle', 55, 'Ich trink Energy-Drinks. Werden teurer. Aber wenn Schulessen kostenlos — vielleicht ok.'),
      r('heinrich', 30, 'Lebensmittelsteuer = Eingriff in Freiheit. UK ist anders (Insel, zentraler).'),
      r('frank', 65, 'Wenn die Einnahmen für Schulessen gehen und nicht für Bürokratie — tragbar.'),
      r('maria', 72, 'In meiner Jugend gab es keinen Zucker in allem. Heute ist alles süß. Wenn das teurer wird — gut.'),
      r('lena', 88, 'Japan zeigt: Ernährungsbildung (Shokuiku) funktioniert. UK zeigt: Zuckersteuer funktioniert. Beides zusammen = Gesundheit.'),
      r('juergen', 58, 'Ich trink Bier, kein Limo. Betrifft mich nicht. Aber mein Sohn trink Cola — wenn das teurer wird, vielleicht besser.'),
      r('sandra', 78, 'Als Pflegekraft: Diabetes ist eine Epidemie. Prävention spart Leben und Geld.'),
    ],
    politicianReactions: [
      p('union', 52, 'Gesundheitspolitik verkauft sich, aber Lebensmittelsteuer ist bei Bauern und Industrie schwierig.'),
      p('spd', 80, 'Prävention + Schulessen = sozialdemokratische Gesundheitspolitik.'),
      p('greens', 88, 'Ernährungswende + Gesundheit = grünes Thema.'),
      p('left', 76, 'Wenn nicht regressiv (trifft Arme härter) — anschlussfähig.'),
      p('fdp', 24, 'Lebensmittelsteuer = Staatsbevormundung. Lehne ab.'),
      p('afd', 38, 'Würde als "Umerziehung durch Lebensmittelkontrolle" framen.'),
      p('bsw', 62, 'Wenn Schulessen kostenlos und Zuckersteuer nicht die Armen trifft — breit populär.'),
    ],
  },
  {
    id: 'grundeinkommen',
    emoji: '💶',
    title: 'Bedingungsloses Grundeinkommen €1.200/Monat (Finnland-Pilot)',
    description: '€1.200/Monat für alle Erwachsenen, bedingungslos, steuerfinanziert durch negative Einkommensteuer. Finnland-Pilot 2017-2018: 17% mehr Zufriedenheit, 5% mehr Arbeit (nicht weniger). Kosten: €180 Mrd., finanziert durch Steuerreform.',
    annualCost: 180.0,
    annualSaving: 60.0,
    originCountry: 'Finnland',
    originFlag: '🇫🇮',
    originLesson: 'Finnland 2017-2018: BGE-Pilot mit 2.000 Arbeitslosen. 17% mehr Zufriedenheit, 5% mehr Erwerbstätigkeit, weniger Bürokratie.',
    keywords: ['grundeinkommen', 'bge', 'armut', 'sozial', 'einkommen', 'arbeit', 'buergergeld', 'hartz', 'existenz', 'sicherheit'],
    reactions: [
      r('kevin', 95, 'Kein Jobcenter-Druck, keine Sanktionen, keine Formulare. Endlich Würde.'),
      r('lena', 92, '€1.200 = Miete + Essen + Internet. Ich könnte kreativ arbeiten statt nur überleben.'),
      r('sandra', 90, 'Als Gig-Workerin: BGE = keine Angst mehr. Ich könnte mich weiterbilden statt 3 Jobs machen.'),
      r('lea', 88, 'BGE ist Freiheit. Finnland zeigt: Menschen arbeiten mehr, nicht weniger.'),
      r('michelle', 85, '€1.200? Ich hätte endlich keine Angst mehr. Könnte studieren oder Ausbildung machen.'),
      r('claudia', 82, 'BGE löst viele Probleme auf einmal: Armut, Bürokratie, Stigma. Aber €180 Mrd. — muss finanzierbar sein.'),
      r('thomas', 35, '€180 Mrd.? Wer bezahlt das? Mittelstand und Normalverdiener werden belastet.'),
      r('max', 28, 'BGE zerstört Anreiz zu arbeiten. Finnland-Pilot war nur 2.000 Leute — nicht skalierbar.'),
      r('heinrich', 12, '€180 Mrd. = Wirtschaftskollaps. Arbeitsmarkt braucht Anreize, nicht Gießkannen.'),
      r('stefan-julia', 55, '€1.200 für alle? Auch für mich mit €4.800? Klingt unfair. Aber wenn Bürokratie wegfällt — vielleicht.'),
      r('monika', 70, 'Meine Rente ist €1.180. Wenn BGE €1.200 — endlich genug. Aber die Jungen bekommen das auch?'),
      r('frank', 65, 'Wenn alle €1.200 bekommen und dafür Hartz + Bürgergeld wegfällt — fair. Aber teuer.'),
      r('jan', 42, 'Bauer mit eigenem Einkommen braucht kein BGE. Aber wenn es Bürokratie ersetzt — interessant.'),
    ],
    politicianReactions: [
      p('union', 18, 'BGE lehnen wir ab — Arbeitsanreiz und Leistungsprinzip sind CDU/CSU-Kern.'),
      p('spd', 62, 'Interessant, aber €180 Mrd. sind nicht finanzierbar ohne massive Steuererhöhung.'),
      p('greens', 68, 'BGE als Vision ok, aber kurzfristig UBS pragmatischer.'),
      p('left', 88, 'BGE = Kernforderung. Armut abschaffen, Bürokratie killen, Freiheit geben.'),
      p('fdp', 8, 'BGE = sozialistischer Traum. Lehne komplett ab.'),
      p('afd', 22, 'Würde als "Geld für Nichtstuer" framen.'),
      p('bsw', 48, 'BGE ist interessant, aber €180 Mrd. sind unrealistisch. Lieber Mindestrente + UBS.'),
    ],
  },
  {
    id: 'kurzarbeit40',
    emoji: '🏭',
    title: 'Kurzarbeit 4.0: Umschulung + 80% Lohn (Dänemark-Modell)',
    description: 'Bei Kurzarbeit: 80% Lohn + Pflicht-Umschulung in Zukunftsberufe (Green Tech, Pflege, Digital), wie Dänemarks Flexicurity-Modell. Kosten: €2 Mrd./Jahr. Ersparnis: 50% weniger Langzeitarbeitslosigkeit, höhere Wertschöpfung.',
    annualCost: 2.0,
    annualSaving: 4.5,
    originCountry: 'Dänemark',
    originFlag: '🇩🇰',
    originLesson: 'Dänemark: Flexicurity = einfach kündigen, aber starke Umschulung + hoher Lohnersatz. Arbeitslosigkeit trotz Krise niedrig, Wirtschaft wandelt schnell.',
    keywords: ['arbeit', 'kurzarbeit', 'arbeitslosigkeit', 'umschulung', 'wirtschaft', 'industrie', 'digitalisierung', 'zukunft', 'beruf', 'weiterbildung'],
    reactions: [
      r('thomas', 72, 'Dänemark zeigt: Flexicurity funktioniert. Wirtschaft wandelt, Arbeitnehmer sind geschützt.'),
      r('max', 80, 'Umschulung in Green Tech und Digital = Zukunftssicherung. Sinnvoll.'),
      r('frank', 75, 'Ostdeutsche Industrie stirbt. Wenn Kurzarbeit + Umschulung = neuer Job — Rettung.'),
      r('sandra', 82, 'Als Pflegekraft: wenn ich in 2 Jahren Digital Health lerne — Zukunft.'),
      r('kevin', 78, 'Ich bin oft kurzarbeit. Wenn ich dabei umschulen kann statt nur warten — endlich Perspektive.'),
      r('michelle', 70, 'Umschulung in was? Wenn es Qualifikation bringt und nicht nur Zeit vertreibt — gut.'),
      r('heinrich', 55, '€2 Mrd. für Umschulung. Wenn es Fachkräfte bringt — Investition. Aber Pflicht?'),
      r('claudia', 85, 'Dänemark beweist: Kurzarbeit + Umschulung = soziale Transformation ohne Arbeitslosigkeit.'),
      r('lena', 76, 'Als Freelancerin: wenn ich in Krise 80% Lohn + Umschulung bekomme — Sicherheit.'),
      r('jan', 60, 'Bauer wird nicht zum Programmierer. Aber Biolandwirtschaft? Vielleicht.'),
      r('juergen', 58, 'Ich kann nicht lesen. Umschulung in was? Wenn es praktisch ist — vielleicht.'),
      r('maria', 52, 'Ich bin 82. Umschulung bringt mir nichts. Aber für die Jungen — gut.'),
    ],
    politicianReactions: [
      p('union', 62, 'Kurzarbeit ist CDU-Erfindung. Umschulungspflicht ist neu, aber tragbar.'),
      p('spd', 84, 'Arbeitnehmer-Schutz + Weiterbildung = SPD-Kern. Dänemark-Modell ist stark.'),
      p('greens', 82, 'Green Tech Umschulung = Klimawandel + Arbeit zusammendenken.'),
      p('left', 78, 'Arbeitnehmerschutz gut, aber Pflicht-Umschulung kritisch sehen wir.'),
      p('fdp', 48, 'Flexicurity-Modell ist interessant, aber Pflicht lehnen wir ab — Wahlfreiheit.'),
      p('afd', 42, 'Würde "Zwangsumsulung" framen. Aber ländliche Wählerschaft braucht Perspektiven.'),
      p('bsw', 68, 'Ostdeutsche Industrie-Wandlung ist populär. Umschulung + Lohnsicherung = gut.'),
    ],
  },
]

export function findReformsByProblem(problemText: string): ReformTemplate[] {
  const text = problemText.toLowerCase()
  const words = text.split(/\s+|[,;.:!?-]/).filter(w => w.length > 2)

  const scored = reformTemplates.map(template => {
    let score = 0
    for (const word of words) {
      for (const kw of template.keywords) {
        if (kw.includes(word) || word.includes(kw)) {
          score += 1
        }
      }
    }
    // Also check title and description
    const titleDesc = (template.title + ' ' + template.description).toLowerCase()
    for (const word of words) {
      if (titleDesc.includes(word)) score += 0.5
    }
    return { template, score }
  })

  // Return top 3 with positive scores, or at least 1 if none match
  const sorted = scored.filter(s => s.score > 0).sort((a, b) => b.score - a.score)
  if (sorted.length === 0) {
    // Return 3 random/diverse reforms as fallback
    return [reformTemplates[0], reformTemplates[1], reformTemplates[2]]
  }
  return sorted.slice(0, 3).map(s => s.template)
}

export function reformToScenario(template: ReformTemplate): PolicyScenario {
  return {
    id: template.id,
    emoji: template.emoji,
    title: template.title,
    description: template.description,
    annualCost: template.annualCost,
    annualSaving: template.annualSaving,
    reactions: template.reactions,
    politicianReactions: template.politicianReactions,
  }
}

export function shareableSummary(template: ReformTemplate): string {
  const citizen = simulateReform(template).citizenApproval
  const politician = simulateReform(template).politicianApproval
  const netReturn = +(template.annualSaving - template.annualCost).toFixed(1)
  const roi = template.annualCost === 0 ? 0 : +(template.annualSaving / template.annualCost).toFixed(1)

  const bestQuote = template.reactions.reduce((best, r) =>
    r.approval > best.approval ? r : best, template.reactions[0]
  )
  const persona = personas.find(p => p.id === bestQuote.personaId)

  return `${template.emoji} ${template.title}

Bürger-Zustimmung: ${citizen}%
Politik-Zustimmung: ${politician}%
Netto-Return: €${netReturn} Mrd./Jahr
ROI: 1:${roi}

Vorbild: ${template.originFlag} ${template.originCountry}
${template.originLesson}

Stimme: "${bestQuote.reason}" — ${persona ? persona.name + ', ' + persona.profile : 'Bürger-Persona'}

Mehr: https://mikelninh.github.io/faireint/`
}

function labelForApproval(approval: number): string {
  if (approval >= 70) return 'Breite Zustimmung'
  if (approval >= 50) return 'Knappe Mehrheit'
  return 'Umstritten'
}

function simulateReform(template: ReformTemplate) {
  let totalWeight = 0
  let weightedApproval = 0
  for (const reaction of template.reactions) {
    const persona = personas.find(p => p.id === reaction.personaId)
    if (persona) {
      weightedApproval += reaction.approval * persona.weight
      totalWeight += persona.weight
    }
  }
  const citizenApproval = totalWeight > 0 ? Math.round(weightedApproval / totalWeight) : 0

  let polWeight = 0
  let polApproval = 0
  for (const reaction of template.politicianReactions) {
    const bloc = politicalBlocs.find(p => p.id === reaction.blocId)
    if (bloc) {
      polApproval += reaction.approval * bloc.weight
      polWeight += bloc.weight
    }
  }
  const politicianApproval = polWeight > 0 ? Math.round(polApproval / polWeight) : 0
  const netReturn = +(template.annualSaving - template.annualCost).toFixed(1)
  const roi = template.annualCost === 0 ? 0 : +(template.annualSaving / template.annualCost).toFixed(1)
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

export { simulateReform as getReformMetrics }
