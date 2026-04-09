import { useState, useEffect } from 'react'
import { reforms, principles } from './data/manifesto'
import { timeline, costs, partyReactions, expertQuotes, faqs } from './data/roadmap'
import { voters, satisfactionSummary } from './data/voters'
import { partyPathTo80 } from './data/path-to-80'
import { policyScenarios, simulatePolicy, personas } from './data/personas'
import { innovations } from './data/innovations'
import { ChevronDown, ChevronUp, Heart, ArrowRight, CheckCircle, X, Copy, Share2, Menu } from 'lucide-react'
import './index.css'

/* ── Helpers ── */

function Toast({ message, onClose }: { message: string; onClose: () => void }) {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-ink text-bg px-5 py-3 rounded-xl shadow-lg text-sm font-medium flex items-center gap-3 animate-fade-in">
      <CheckCircle className="w-4 h-4 text-green shrink-0" />
      {message}
      <button onClick={onClose} className="text-bg/50 hover:text-bg cursor-pointer btn-press">&times;</button>
    </div>
  )
}

function Section({ id, bg = 'bg-bg', label, children }: { id?: string; bg?: string; label?: string; children: React.ReactNode }) {
  return <section id={id} aria-label={label} className={`py-16 sm:py-24 px-5 sm:px-8 ${bg}`}><div className="max-w-3xl mx-auto">{children}</div></section>
}

function WideSection({ id, bg = 'bg-bg', label, children }: { id?: string; bg?: string; label?: string; children: React.ReactNode }) {
  return <section id={id} aria-label={label} className={`py-16 sm:py-24 px-5 sm:px-8 ${bg}`}><div className="max-w-5xl mx-auto">{children}</div></section>
}

function Tag({ children, color = 'gold' }: { children: React.ReactNode; color?: string }) {
  const c: Record<string, string> = { gold: 'bg-gold-light text-gold', green: 'bg-green-light text-green', red: 'bg-red-light text-red', blue: 'bg-blue-light text-blue', purple: 'bg-purple-light text-purple' }
  return <span className={`inline-block text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${c[color] || c.gold}`}>{children}</span>
}

function Bar({ pct, color = 'bg-green' }: { pct: number; color?: string }) {
  return (
    <div className="w-full bg-bg-alt rounded-full h-3 overflow-hidden">
      <div className={`h-3 rounded-full bar-animate ${color}`} style={{ width: `${pct}%` }} />
    </div>
  )
}

function Card({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <div className={`bg-bg-card rounded-2xl border border-border p-6 sm:p-8 hover-lift ${className}`}>{children}</div>
}

/* ── App ── */

export default function App() {
  const [mobileMenu, setMobileMenu] = useState(false)
  const [showAllCosts, setShowAllCosts] = useState(false)
  const [openReform, setOpenReform] = useState<string | null>(null)
  const [openVoter, setOpenVoter] = useState<string | null>(null)
  const [activePolicy, setActivePolicy] = useState(policyScenarios[0].id)
  const [openInnovation, setOpenInnovation] = useState<string | null>(null)
  const [toast, setToast] = useState<string | null>(null)
  const [fontSize, setFontSize] = useState(0) // -1, 0, +1
  const [showNPS, setShowNPS] = useState(false)
  const [npsSubmitted, setNpsSubmitted] = useState(false)
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  // Return visitor tracking + NPS timer
  useEffect(() => {
    try {
      const visits = parseInt(localStorage.getItem('faireint_visits') || '0') + 1
      localStorage.setItem('faireint_visits', String(visits))
      trackAction('visit')
      if (visits > 1) trackAction('return_visit')
    } catch { /* silent */ }

    // Show NPS after 90 seconds if not submitted before
    const alreadySubmitted = localStorage.getItem('faireint_nps_done')
    if (!alreadySubmitted) {
      const timer = setTimeout(() => setShowNPS(true), 90000)
      return () => clearTimeout(timer)
    }
  }, [])

  // Scroll depth tracking via Intersection Observer
  useEffect(() => {
    const sections = ['problem', 'reformen', 'rechnung', 'simulator', 'parteien', 'fahrplan', 'handeln']
    const observers: IntersectionObserver[] = []
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          trackAction(`scroll_${id}`)
          obs.disconnect()
        }
      }, { threshold: 0.3 })
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  function showToast(msg: string) {
    setToast(msg)
    setTimeout(() => setToast(null), 3000)
  }

  // Lightweight anonymous analytics — no cookies, no PII, just counts
  function trackAction(action: string) {
    try {
      const key = `faireint_${action}`
      const count = parseInt(localStorage.getItem(key) || '0') + 1
      localStorage.setItem(key, String(count))
      // Global counter for display
      const globalKey = `faireint_total_actions`
      const total = parseInt(localStorage.getItem(globalKey) || '0') + 1
      localStorage.setItem(globalKey, String(total))
    } catch { /* silent */ }
  }

  function share(text: string) {
    trackAction('share')
    if (navigator.share) {
      navigator.share({ title: 'FairEint', text, url: window.location.href })
    } else {
      navigator.clipboard.writeText(window.location.href)
      showToast('Link in die Zwischenablage kopiert!')
    }
  }

  const letterTemplate = `Sehr geehrte/r Abgeordnete/r,

ich schreibe Ihnen als Bürger/in Ihres Wahlkreises.

Deutschland hat seit 1996 keine Vermögensteuer mehr — obwohl sie nie abgeschafft wurde (Art. 106 GG). Die Schweiz erhebt sie seit Jahrzehnten und erwirtschaftet damit €9,5 Mrd./Jahr.

Gleichzeitig werden Kapitalerträge mit 25% besteuert, Arbeit mit bis zu 45%. Wer mit Geld Geld verdient, zahlt weniger als wer arbeitet. Das empfinde ich als unfair.

Meine Frage: Unterstützen Sie eine Reaktivierung der Vermögensteuer (z.B. 0,5% ab €5 Mio.)? Und die Integration von Kapitalerträgen in die Einkommensteuer?

Vielen Dank für Ihre Antwort.

Mit freundlichen Grüßen
[Ihr Name]

Quelle: faireint.de — Evidenzbasierte Reformvorschläge für Deutschland`

  // Compute totals from data
  const totalCost = costs.reduce((s, c) => s + c.annualCost, 0)
  const totalSaving = costs.reduce((s, c) => s + c.annualSaving, 0)
  const netGain = totalSaving - totalCost

  return (
    <div className={`min-h-screen ${fontSize === 1 ? 'text-lg' : fontSize === -1 ? 'text-sm' : ''}`}>
      {toast && <Toast message={toast} onClose={() => setToast(null)} />}

      {/* ── Nav ── */}
      <nav className="fixed top-0 w-full z-50 bg-bg/90 backdrop-blur-lg border-b border-border">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-5 h-14">
          <a href="#" className="font-display text-xl">Fair<span className="text-gold">Eint</span></a>
          <div className="flex items-center gap-1">
            <div className="hidden lg:flex gap-1 text-[13px]">
              {[['problem','Problem'],['reformen','Reformen'],['rechnung','Zahlen'],['simulator','Simulator'],['parteien','Parteien'],['fahrplan','Fahrplan'],['handeln','Handeln']].map(([id, label]) => (
                <a key={id} href={`#${id}`} className="px-3 py-1.5 rounded-lg text-ink-muted hover:text-ink hover:bg-bg-alt transition-colors">{label}</a>
              ))}
            </div>
            <div className="flex items-center gap-0.5 ml-2 border-l border-border pl-2">
              <button onClick={() => setFontSize(Math.max(-1, fontSize - 1))} className="px-2 py-1 text-xs text-ink-muted hover:text-ink cursor-pointer btn-press rounded hover:bg-bg-alt">A-</button>
              <button onClick={() => setFontSize(Math.min(1, fontSize + 1))} className="px-2 py-1 text-sm text-ink-muted hover:text-ink cursor-pointer btn-press rounded hover:bg-bg-alt">A+</button>
            </div>
            <button onClick={() => setMobileMenu(!mobileMenu)} className="lg:hidden p-2 rounded-lg hover:bg-bg-alt cursor-pointer btn-press" aria-label="Menu"><Menu className="w-5 h-5 text-ink-muted" /></button>
          </div>
        </div>
        {mobileMenu && (
          <div className="lg:hidden border-t border-border bg-bg/95 backdrop-blur-lg px-5 py-3 flex flex-col gap-1 animate-slide-up">
            {[['problem','Problem'],['reformen','Reformen'],['rechnung','Zahlen'],['simulator','Simulator'],['parteien','Parteien'],['fahrplan','Fahrplan'],['handeln','Handeln']].map(([id, label]) => (
              <a key={id} href={`#${id}`} onClick={() => setMobileMenu(false)} className="px-3 py-2 rounded-lg text-ink-muted hover:text-ink hover:bg-bg-alt transition-colors text-sm">{label}</a>
            ))}
          </div>
        )}
      </nav>

      {/* ━━━━ 1. HERO ━━━━ */}
      <header className="min-h-[70vh] flex flex-col items-center justify-center px-6 text-center pt-20 bg-bg">
        <div className="max-w-2xl mx-auto fade-in">
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl leading-[1.1] mb-6 tracking-tight">
            Einigkeit. Und <span className="text-gold">Recht</span>. Und <span className="text-gold">Freiheit</span>.
          </h1>
          <p className="text-xl sm:text-2xl text-ink-soft leading-relaxed mb-4">
            Aber Einigkeit funktioniert nur, wenn sie <strong>fair</strong> ist.
          </p>
          <p className="text-ink-muted mb-10">10 Reformen. Jede existiert bereits — irgendwo auf der Welt. Wir zeigen was sie kosten, was sie bringen, und wie Deutschland darauf reagiert.</p>

          {/* The killer comparison */}
          <div className="max-w-md mx-auto mb-12 fade-in-delay bg-bg-card rounded-2xl border border-border p-5">
            <div className="flex items-center justify-center gap-4 sm:gap-6 mb-3">
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-display text-red">€70-110 Mrd.</p>
                <p className="text-sm text-ink-muted mt-1">kostet Ungleichheit pro Jahr</p>
              </div>
              <span className="text-ink-muted text-2xl font-display">vs</span>
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-display text-green">€30-45 Mrd.</p>
                <p className="text-sm text-ink-muted mt-1">kostet die Lösung</p>
              </div>
            </div>
            <p className="text-sm text-ink-muted">Das sind €4 pro Bürger pro Tag. Weniger als ein Kaffee bei Starbucks.</p>
          </div>

          <a href="#problem" className="text-gold text-sm hover:underline">
            Was genau ist das Problem? <ChevronDown className="w-4 h-4 inline ml-1 animate-bounce" />
          </a>
        </div>
      </header>

      {/* ━━━━ 2. DAS PROBLEM ━━━━ */}
      <Section id="problem" bg="bg-bg-alt" label="Das Problem">
        <div className="text-center mb-10">
          <Tag color="red">Das Problem</Tag>
          <h2 className="font-display text-3xl sm:text-4xl mt-4 mb-3">Deutschland funktioniert — aber es <span className="text-red">fühlt</span> sich nicht so an.</h2>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {[
            { n: '€65.000', l: 'Median-Vermögen in Deutschland', s: 'Weniger als Italien, Spanien, Griechenland. Die Hälfte aller Deutschen besitzt fast nichts.' },
            { n: '67%', l: 'des gesamten Vermögens gehört den Top 10%', s: 'Die untere Hälfte teilt sich 1,4%. Ein Kind in Grünwald erbt mehr als ein Kind in Gelsenkirchen je verdienen wird.' },
            { n: '25% vs 45%', l: 'Kapitalerträge vs. Arbeit besteuert', s: 'Wer mit Geld Geld verdient, zahlt weniger Steuern als wer arbeitet.' },
            { n: '€0', l: 'Vermögensteuer seit 1996', s: 'Nie abgeschafft — nur ausgesetzt. Die Schweiz erhebt sie seit Jahrzehnten: €9,5 Mrd./Jahr.' },
          ].map((s, i) => (
            <Card key={i}><p className="text-2xl font-display text-red mb-1">{s.n}</p><p className="text-ink-soft font-bold text-sm">{s.l}</p><p className="text-sm text-ink-muted mt-2">{s.s}</p></Card>
          ))}
        </div>
        <Card className="bg-red-light border-red/10 text-center">
          <p className="text-ink-soft text-lg mb-4">
            Ungleichheit ist kein Schicksal. Sie kostet uns <strong className="text-ink">€70-110 Mrd. pro Jahr</strong> — durch verlorenes Wachstum, Krankheit und Kriminalität. Das sind <strong className="text-ink">€1.300 pro Bürger pro Jahr</strong>, die uns einfach verloren gehen.
          </p>
          <button onClick={() => share('Ungleichheit kostet Deutschland €1.300 pro Bürger pro Jahr. Das muss sich ändern.')} className="px-4 py-2 bg-red/10 border border-red/20 rounded-xl text-sm font-bold text-red cursor-pointer btn-press hover:bg-red/20 transition-colors">
            Diese Zahl teilen
          </button>
        </Card>
      </Section>

      {/* ━━━━ 3. PRINZIPIEN ━━━━ */}
      <WideSection bg="bg-bg">
        <div className="text-center mb-10">
          <Tag>Unsere Philosophie</Tag>
          <h2 className="font-display text-3xl sm:text-4xl mt-4 mb-2">6 Prinzipien</h2>
          <p className="text-ink-muted">Keine Partei. Keine Ideologie. Nur was funktioniert.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {principles.map((p, i) => (
            <Card key={i}>
              <span className="text-2xl font-display text-gold/30">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="font-display text-lg mt-2 mb-2">{p.title}</h3>
              <p className="text-ink-muted text-[15px]">{p.description}</p>
            </Card>
          ))}
        </div>
      </WideSection>

      {/* ━━━━ 4. REFORMEN ━━━━ */}
      <WideSection id="reformen" bg="bg-bg-alt" label="Die Reformen">
        <div className="text-center mb-10">
          <Tag color="green">Die Reformen</Tag>
          <h2 className="font-display text-3xl sm:text-4xl mt-4 mb-2">10 Bereiche. Jede Reform existiert bereits.</h2>
        </div>

        {/* Grid overview — compact, scannable */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 mb-8">
          {reforms.map(r => (
            <button key={r.id} onClick={() => setOpenReform(openReform === r.id ? null : r.id)}
              className={`rounded-2xl p-4 text-center cursor-pointer btn-press transition-all ${openReform === r.id ? 'bg-gold text-white shadow-lg scale-105' : 'bg-bg-card border border-border hover:border-gold/30 hover:shadow-md'}`}>
              <span className="text-2xl block mb-1">{r.emoji}</span>
              <span className="font-display text-sm block">{r.title}</span>
            </button>
          ))}
        </div>

        {/* Detail panel — only shows selected reform */}
        {reforms.filter(r => r.id === openReform).map(r => (
          <div key={r.id} className="bg-bg-card rounded-2xl border border-gold/20 shadow-lg p-6 sm:p-8 space-y-5 max-w-3xl mx-auto panel-enter">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{r.emoji}</span>
                <div><h3 className="font-display text-xl">{r.title}</h3><p className="text-sm text-ink-muted">{r.subtitle}</p></div>
              </div>
              <button onClick={() => setOpenReform(null)} className="text-ink-muted hover:text-ink cursor-pointer btn-press text-xl">&times;</button>
            </div>
            <p className="text-ink-soft text-sm bg-red-light rounded-xl p-4">{r.problem}</p>
            <ul className="space-y-2">{r.solution.map((s, i) => (
              <li key={i} className="flex items-start gap-3"><CheckCircle className="w-4 h-4 text-green mt-1 shrink-0" /><span className="text-sm text-ink-soft">{s}</span></li>
            ))}</ul>
            <div className="grid sm:grid-cols-2 gap-3">{r.worldwide.map((w, i) => (
              <div key={i} className="bg-blue-light rounded-xl p-3"><p className="font-bold text-xs">{w.flag} {w.country}</p><p className="text-xs text-ink-muted mt-1">{w.lesson}</p></div>
            ))}</div>
            <div className="grid sm:grid-cols-2 gap-3">
              <div className="bg-red-light rounded-xl p-4"><p className="text-xs font-bold text-red mb-1">{r.story.name} &mdash; VORHER</p><p className="text-sm text-ink-soft">{r.story.before}</p></div>
              <div className="bg-green-light rounded-xl p-4"><p className="text-xs font-bold text-green mb-1">{r.story.name} &mdash; NACHHER</p><p className="text-sm text-ink-soft">{r.story.after}</p></div>
            </div>
            {/* Citizen vote */}
            <div className="flex items-center justify-between bg-bg-alt rounded-xl p-4">
              <p className="text-sm text-ink-muted">Unterstützt du diese Reform?</p>
              <div className="flex gap-2">
                <button onClick={() => { trackAction(`vote_yes_${r.id}`); showToast(`Stimme für "${r.title}" gezählt!`) }}
                  className="px-4 py-2 bg-green text-white rounded-xl text-sm font-bold btn-press cursor-pointer hover:bg-green/90">Ja</button>
                <button onClick={() => { trackAction(`vote_no_${r.id}`); showToast('Danke für dein ehrliches Feedback.') }}
                  className="px-4 py-2 bg-bg border border-border rounded-xl text-sm font-bold btn-press cursor-pointer hover:bg-bg-alt text-ink-muted">Nein</button>
              </div>
            </div>
          </div>
        ))}
        {!openReform && <p className="text-center text-ink-muted text-sm">Tippe auf einen Bereich um Details zu sehen.</p>}
      </WideSection>

      {/* ━━━━ 5. DIE RECHNUNG ━━━━ */}
      <WideSection id="rechnung" bg="bg-bg" label="Die Rechnung">
        <div className="text-center mb-10">
          <Tag color="green">Die Rechnung</Tag>
          <h2 className="font-display text-3xl sm:text-4xl mt-4 mb-2">Können wir uns das leisten?</h2>
          <p className="text-ink-muted">Kurze Antwort: Ja. Wir geben mehr für die Folgen von Ungleichheit aus als die Lösung kosten würde.</p>
        </div>
        {/* Two scenarios side by side */}
        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <Card className="border-gold/20 bg-gold-light">
            <Tag color="green">Optimistisches Szenario</Tag>
            <div className="grid grid-cols-3 gap-2 mt-3">
              <div><p className="text-xl font-display text-red">€{Math.round(totalCost)}</p><p className="text-xs text-ink-muted">Mrd. Kosten</p></div>
              <div><p className="text-xl font-display text-green">€{Math.round(totalSaving)}</p><p className="text-xs text-ink-muted">Mrd. Ersparnis</p></div>
              <div><p className="text-xl font-display text-gold">+€{Math.round(netGain)}</p><p className="text-xs text-ink-muted">Mrd. Gewinn</p></div>
            </div>
            <p className="text-xs text-ink-muted mt-2">ca. +€{Math.round(netGain * 1000 / 83)} pro Bürger pro Jahr</p>
          </Card>
          <Card>
            <Tag>Konservatives Szenario (60%)</Tag>
            <div className="grid grid-cols-3 gap-2 mt-3">
              <div><p className="text-xl font-display text-red">€{Math.round(totalCost)}</p><p className="text-xs text-ink-muted">Mrd. Kosten</p></div>
              <div><p className="text-xl font-display text-green">€{Math.round(totalSaving * 0.6)}</p><p className="text-xs text-ink-muted">Mrd. Ersparnis</p></div>
              <div><p className="text-xl font-display text-gold">+€{Math.round(totalSaving * 0.6 - totalCost)}</p><p className="text-xs text-ink-muted">Mrd. Gewinn</p></div>
            </div>
            <p className="text-xs text-ink-muted mt-2">ca. +€{Math.round((totalSaving * 0.6 - totalCost) * 1000 / 83)} pro Bürger pro Jahr</p>
          </Card>
        </div>
        <p className="text-xs text-ink-muted text-center mb-6">Selbst im konservativen Szenario: die Reformen erwirtschaften mehr als sie kosten.</p>
        <Card className="mb-4 bg-blue-light border-blue/10">
          <p className="text-sm text-ink-soft text-center"><strong>Zum Vergleich:</strong> Die Energiekrise 2022-2023 hat Deutschland über <strong>€100 Mrd.</strong> für Gaspreisbremse und Tankrabatt gekostet — an einem Wochenende beschlossen. Alle unsere Reformen zusammen kosten weniger als das. Der Unterschied: sie wirken dauerhaft.</p>
        </Card>
        <Card className="mb-10 bg-bg-alt border-border/50">
          <p className="text-xs text-ink-muted text-center mb-3"><strong>Hinweis zur Methodik:</strong> Die Ersparnisse sind Modellschätzungen auf Basis von OECD-, WHO- und IMF-Studien. Reale Werte hängen von Umsetzung, Zeitraum und Wechselwirkungen ab. Alle Einzelberechnungen sind im <a href="https://github.com/mikelninh/faireint" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Quellcode</a> offen einsehbar.</p>
          <details className="text-xs text-ink-muted">
            <summary className="cursor-pointer font-bold hover:text-ink transition-colors">Was wir nicht wissen (ehrlich)</summary>
            <ul className="mt-2 space-y-1 text-left pl-4">
              <li>&bull; Wechselwirkungen zwischen Reformen sind nicht modelliert (k&ouml;nnten positiv oder negativ sein)</li>
              <li>&bull; Zeitverz&ouml;gerung: Pr&auml;ventionsersparnisse brauchen 5-15 Jahre bis sie voll greifen</li>
              <li>&bull; Kapitalflucht bei Verm&ouml;gensteuer: Norwegen verlor 0,5% der Steuerbasis — unklar ob DE mehr oder weniger betroffen w&auml;re</li>
              <li>&bull; Verhaltens&auml;nderungen: Reagieren Menschen auf kostenlose Dienste wie erwartet?</li>
              <li>&bull; Politische Umsetzbarkeit: Selbst gute Reformen k&ouml;nnen an Koalitionsverhandlungen scheitern</li>
            </ul>
          </details>
        </Card>
        <div className="grid sm:grid-cols-2 gap-4">
          {[...costs].sort((a, b) => b.annualSaving - a.annualSaving).slice(0, showAllCosts ? costs.length : 3).map((c, i) => {
            const roi = c.annualCost > 0 ? c.annualSaving / c.annualCost : c.annualSaving
            return (
              <Card key={i}>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-display text-sm sm:text-base">{c.reform}</h4>
                  <Tag>{c.annualCost > 0 ? `1:${roi.toFixed(0)}` : 'Gratis'}</Tag>
                </div>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  <div className="bg-red-light rounded-xl p-3 text-center"><p className="text-xl font-display text-red">€{c.annualCost}</p><p className="text-xs text-ink-muted">Mrd. Kosten</p></div>
                  <div className="bg-green-light rounded-xl p-3 text-center"><p className="text-xl font-display text-green">€{c.annualSaving}</p><p className="text-xs text-ink-muted">Mrd. Ersparnis</p></div>
                </div>
                {c.source && <a href={c.source} target="_blank" rel="noopener noreferrer" className="text-xs text-gold hover:underline">Quelle &rarr;</a>}
              </Card>
            )
          })}
        </div>
        {!showAllCosts && (
          <div className="text-center mt-6">
            <button onClick={() => setShowAllCosts(true)} className="px-6 py-3 bg-bg-card border border-border rounded-xl text-sm font-bold cursor-pointer btn-press hover:bg-bg-alt transition-colors">
              Alle {costs.length} Reformen anzeigen
            </button>
          </div>
        )}
        <p className="text-center text-sm text-ink-muted mt-6">Dies sind keine beschlossenen Gesetze. Es sind evidenzbasierte Vorschläge mit nachprüfbaren Quellen.</p>

        {/* Expert quotes for credibility */}
        <div className="mt-10">
          <p className="text-center text-xs font-bold text-ink-muted uppercase tracking-widest mb-4">Was Experten sagen</p>
          <div className="grid sm:grid-cols-2 gap-3">
            {expertQuotes.slice(0, 4).map((eq, i) => (
              <div key={i} className="bg-bg-alt rounded-xl p-4 border border-border">
                <p className="text-sm text-ink-soft italic mb-2">&bdquo;{eq.quote}&ldquo;</p>
                <p className="text-xs text-ink-muted font-bold">{eq.name}</p>
                <p className="text-xs text-ink-muted">{eq.role}{eq.source && <> &middot; <span className="text-gold">{eq.source}</span></>}</p>
              </div>
            ))}
          </div>
        </div>
      </WideSection>

      {/* ━━━━ 6. POLICY SIMULATOR ━━━━ */}
      <Section id="simulator" bg="bg-bg-alt" label="Policy Simulator">
        <div className="text-center mb-10">
          <Tag color="purple">Simulator</Tag>
          <h2 className="font-display text-3xl sm:text-4xl mt-4 mb-2">Wie reagiert Deutschland?</h2>
          <p className="text-ink-muted">23 fiktive Personas, gewichtet nach Sinus-Milieus. Keine Umfrage &mdash; eine Simulation.</p>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8 -mx-2 px-2 sm:flex-wrap sm:justify-center sm:overflow-visible">
          {policyScenarios.map(s => (
            <button key={s.id} onClick={() => { setActivePolicy(s.id); trackAction(`sim_${s.id}`) }}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium cursor-pointer btn-press transition-all whitespace-nowrap shrink-0 ${activePolicy === s.id ? 'bg-gold text-white shadow-md' : 'bg-bg-card border border-border text-ink-muted hover:text-ink'}`}>
              {s.emoji} {s.title}
            </button>
          ))}
        </div>
        {policyScenarios.filter(s => s.id === activePolicy).map(scenario => {
          const result = simulatePolicy(scenario.id)
          return (
            <div key={scenario.id}>
              <Card className="mb-6">
                <p className="text-ink-soft mb-4">{scenario.description}</p>
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-red-light rounded-xl p-4 text-center"><p className="text-2xl font-display text-red">€{scenario.annualCost}</p><p className="text-xs text-ink-muted">Mrd. Kosten</p></div>
                  <div className="bg-green-light rounded-xl p-4 text-center"><p className="text-2xl font-display text-green">€{scenario.annualSaving}</p><p className="text-xs text-ink-muted">Mrd. Ersparnis</p></div>
                  <div className="bg-gold-light rounded-xl p-4 text-center"><p className="text-2xl font-display text-gold">{result.approval}%</p><p className="text-xs text-ink-muted">{result.label}</p></div>
                </div>
              </Card>
              <div className="grid sm:grid-cols-2 gap-3">
                {scenario.reactions.map(r => {
                  const p = personas.find(x => x.id === r.personaId)
                  if (!p) return null
                  return (
                    <Card key={r.personaId} className="!p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl">{p.emoji}</span>
                        <div className="flex-1"><span className="font-bold text-sm">{p.name}, {p.age}</span><span className="text-ink-muted text-xs ml-1">({p.party})</span></div>
                        <span className={`font-display text-lg ${r.approval >= 70 ? 'text-green' : r.approval >= 40 ? 'text-gold' : 'text-red'}`}>{r.approval}%</span>
                      </div>
                      <Bar pct={r.approval} color={r.approval >= 70 ? 'bg-green' : r.approval >= 40 ? 'bg-gold' : 'bg-red'} />
                      <p className="text-sm text-ink-muted mt-2 italic">&bdquo;{r.reason}&ldquo;</p>
                    </Card>
                  )
                })}
              </div>
            </div>
          )
        })}
      </Section>

      {/* ━━━━ 7. MENSCHEN ━━━━ */}
      <WideSection id="menschen" bg="bg-bg" label="Wählerprofile">
        <div className="text-center mb-10">
          <Tag>8 Wählerprofile</Tag>
          <h2 className="font-display text-3xl sm:text-4xl mt-4 mb-2">
            <span className="text-red">{satisfactionSummary.currentAverage}%</span> &rarr; <span className="text-green">{satisfactionSummary.afterAverage}%</span> Zufriedenheit
          </h2>
          <p className="text-ink-muted">Ehrlich &mdash; auch was die Reformen nicht lösen. Tippe auf ein Profil.</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {voters.map(v => {
            const open = openVoter === v.id
            return (
              <div key={v.id} className="flex flex-col">
                <button onClick={() => setOpenVoter(open ? null : v.id)}
                  className={`rounded-2xl p-4 text-center cursor-pointer btn-press transition-all ${open ? 'bg-gold text-white shadow-lg scale-105' : 'bg-bg-card border border-border hover:border-gold/30 hover:shadow-md'}`}>
                  <span className="text-2xl block">{v.emoji}</span>
                  <span className="font-display text-sm block mt-1">{v.name}, {v.age}</span>
                  <span className={`text-xs block mt-0.5 ${open ? 'text-white/70' : 'text-ink-muted'}`}>{v.votedLast}</span>
                  <span className={`font-display text-lg block mt-1 ${open ? 'text-white' : 'text-green'}`}>+{v.afterSatisfaction - v.currentSatisfaction}</span>
                </button>
              </div>
            )
          })}
        </div>
        {voters.filter(v => v.id === openVoter).map(v => (
          <div key={v.id} className="bg-bg-card rounded-2xl border border-gold/20 shadow-lg p-6 sm:p-8 mt-6 max-w-2xl mx-auto panel-enter">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{v.emoji}</span>
                <div>
                  <span className="font-display text-lg">{v.name}, {v.age}</span>
                  <p className="text-sm text-ink-muted">{v.location} &middot; {v.votedLast} &middot; {v.income}</p>
                </div>
              </div>
              <button onClick={() => setOpenVoter(null)} className="text-ink-muted hover:text-ink cursor-pointer btn-press text-xl">&times;</button>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm text-red font-display">{v.currentSatisfaction}%</span>
              <div className="flex-1"><Bar pct={v.afterSatisfaction} /></div>
              <span className="text-sm text-green font-display">{v.afterSatisfaction}%</span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <p className="text-xs font-bold text-red uppercase tracking-wide mb-2">Sorgen</p>
                {v.topWorries.map((w, i) => <p key={i} className="text-sm text-ink-muted mb-1">&bull; {w}</p>)}
              </div>
              <div>
                <p className="text-xs font-bold text-green uppercase tracking-wide mb-2">Was die Reformen liefern</p>
                {v.whatTheyGet.map((g, i) => (
                  <div key={i} className="flex items-start gap-2 mb-1">
                    {g.delivered ? <CheckCircle className="w-3.5 h-3.5 text-green mt-0.5 shrink-0" /> : <X className="w-3.5 h-3.5 text-red/40 mt-0.5 shrink-0" />}
                    <span className="text-xs text-ink-soft">{g.item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-bg-alt rounded-xl p-4 mt-4">
              <p className="text-sm text-ink-soft italic">&bdquo;{v.quote}&ldquo;</p>
            </div>
          </div>
        ))}
      </WideSection>

      {/* ━━━━ 8. PARTEIEN ━━━━ */}
      <WideSection id="parteien" bg="bg-bg-alt" label="Parteien-Check">
        <div className="text-center mb-10">
          <Tag color="blue">Parteien-Check</Tag>
          <h2 className="font-display text-3xl sm:text-4xl mt-4 mb-2">Können die Parteien zustimmen?</h2>
          <p className="text-ink-muted">Wo gibt es Konsens? Wo braucht es Kompromisse?</p>
        </div>
        <Card className="mb-8 !p-4 sm:!p-6">
          {partyReactions.map(p => (
            <div key={p.party} className="flex items-center gap-3 py-2">
              <span className="w-20 text-sm font-bold">{p.party}</span>
              <div className="flex-1"><Bar pct={p.approval} color={p.approval >= 70 ? 'bg-green' : p.approval >= 50 ? 'bg-gold' : 'bg-red'} /></div>
              <span className="text-sm font-display w-10 text-right">{p.approval}%</span>
            </div>
          ))}
          <p className="text-sm text-ink-muted mt-3 text-center">4 von 6 Parteien über 50% &mdash; Mehrheit ist realistisch</p>
        </Card>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {partyPathTo80.map(p => (
            <Card key={p.party}>
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-display text-lg">{p.party}</h4>
                <span className="text-sm font-display"><span className="text-ink-muted">{p.currentApproval}</span> &rarr; <span className={p.potentialApproval >= 80 ? 'text-green' : 'text-gold'}>{p.potentialApproval}%</span></span>
              </div>
              <Bar pct={p.potentialApproval} color={p.potentialApproval >= 80 ? 'bg-green' : 'bg-gold'} />
              <p className="text-sm text-ink-muted italic mt-3 mb-3">{p.whatTheyReallyWant}</p>
              <div className="bg-gold-light rounded-xl p-4"><p className="text-xs font-bold text-gold mb-1">DER KOMPROMISS</p><p className="text-sm text-ink-soft">{p.keyCompromise}</p></div>
            </Card>
          ))}
        </div>
      </WideSection>

      {/* ━━━━ FAQ / GEGENARGUMENTE ━━━━ */}
      <Section bg="bg-bg">
        <div className="text-center mb-10">
          <Tag color="red">Gegenargumente</Tag>
          <h2 className="font-display text-3xl sm:text-4xl mt-4 mb-2">Was Kritiker sagen</h2>
          <p className="text-ink-muted">Ehrliche Fragen verdienen ehrliche Antworten.</p>
        </div>
        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const open = openFAQ === i
            return (
              <div key={i} className={`rounded-2xl border transition-all ${open ? 'bg-bg-card shadow-lg border-gold/30' : 'bg-bg-card border-border'}`}>
                <button onClick={() => setOpenFAQ(open ? null : i)} className="w-full flex items-center justify-between p-5 text-left cursor-pointer btn-press">
                  <span className="font-display text-[15px] pr-4">{faq.question}</span>
                  {open ? <ChevronUp className="w-5 h-5 text-gold shrink-0" /> : <ChevronDown className="w-5 h-5 text-ink-muted/30 shrink-0" />}
                </button>
                {open && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-ink-soft leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </Section>

      {/* ━━━━ UBS WALLET DEMO ━━━━ */}
      <Section id="wallet" bg="bg-bg-alt" label="UBS-Wallet">
        <div className="text-center mb-10">
          <Tag color="green">So fühlt sich UBS an</Tag>
          <h2 className="font-display text-3xl sm:text-4xl mt-4 mb-2">Dein UBS-Wallet</h2>
          <p className="text-ink-muted">Statt Formulare, Anträge und Ämter &mdash; eine Karte. Tippen. Fertig.</p>
        </div>

        {/* Side-by-side comparison */}
        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {/* VORHER: Bürgergeld */}
          <Card className="border-red/20">
            <Tag color="red">Heute: Bürgergeld</Tag>
            <div className="mt-4 space-y-3">
              <div className="flex justify-between text-sm"><span className="text-ink-muted">Regelsatz</span><span className="font-display">€563/Monat</span></div>
              <div className="flex justify-between text-sm"><span className="text-ink-muted">Davon Essen</span><span className="font-display text-red">€174</span></div>
              <div className="flex justify-between text-sm"><span className="text-ink-muted">Davon ÖPNV</span><span className="font-display text-red">€45</span></div>
              <div className="flex justify-between text-sm"><span className="text-ink-muted">Davon Strom</span><span className="font-display text-red">€42</span></div>
              <div className="border-t border-border pt-3 mt-3 space-y-1">
                <p className="text-xs text-red flex items-center gap-2"><X className="w-3 h-3" /> Sanktionen bis 30%</p>
                <p className="text-xs text-red flex items-center gap-2"><X className="w-3 h-3" /> Anträge, Formulare, Termine</p>
                <p className="text-xs text-red flex items-center gap-2"><X className="w-3 h-3" /> Stigma: &bdquo;Bürgergeld-Empfänger&ldquo;</p>
                <p className="text-xs text-red flex items-center gap-2"><X className="w-3 h-3" /> Kein Vermögensaufbau möglich</p>
              </div>
            </div>
          </Card>

          {/* NACHHER: UBS-Wallet */}
          <Card className="border-green/20 bg-green-light">
            <Tag color="green">UBS-Wallet: Zugang für alle</Tag>
            <div className="mt-4 space-y-3">
              {[
                { emoji: '🚌', label: 'Mobilität', value: '€0', note: 'ÖPNV frei (u25/ü65)', pct: 100 },
                { emoji: '🍽️', label: 'Schulessen', value: '€0', note: 'Kostenlos für jedes Kind', pct: 100 },
                { emoji: '👶', label: 'Kinderbetreuung', value: '€0', note: 'Kita 0-6 frei', pct: 100 },
                { emoji: '🏥', label: 'Gesundheit', value: '€0', note: 'Ein System für alle', pct: 100 },
                { emoji: '📶', label: 'Internet', value: '€0', note: 'Breitband als Grundrecht', pct: 100 },
                { emoji: '💰', label: 'Deutschlandfonds', value: '+€280', note: 'Dein Vermögen wächst', pct: 100 },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-lg">{item.emoji}</span>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="text-sm font-bold">{item.label}</span>
                      <span className="text-sm font-display text-green">{item.value}</span>
                    </div>
                    <p className="text-xs text-ink-muted">{item.note}</p>
                  </div>
                </div>
              ))}
              <div className="border-t border-green/20 pt-3 mt-3 space-y-1">
                <p className="text-xs text-green flex items-center gap-2"><CheckCircle className="w-3 h-3" /> Keine Anträge</p>
                <p className="text-xs text-green flex items-center gap-2"><CheckCircle className="w-3 h-3" /> Kein Stigma &mdash; alle bekommen es</p>
                <p className="text-xs text-green flex items-center gap-2"><CheckCircle className="w-3 h-3" /> Eine Karte. Tippen. Fertig.</p>
                <p className="text-xs text-green flex items-center gap-2"><CheckCircle className="w-3 h-3" /> Vermögen wächst automatisch</p>
              </div>
            </div>
          </Card>
        </div>

        {/* The Omi explanation */}
        <Card className="bg-gold-light border-gold/10 mb-6">
          <p className="font-display text-lg mb-3">Wie erklärt man es Omi?</p>
          <p className="text-ink-soft text-[15px] leading-relaxed italic">&bdquo;Stell dir vor, der Staat gibt dir eine Karte. Damit fährst du Bus &mdash; kostenlos. Damit isst dein Enkel in der Schule &mdash; kostenlos. Damit gehst du zum Arzt &mdash; kostenlos. Die Karte funktioniert wie deine EC-Karte. Tippen. Piep. Fertig. Kein Antrag. Kein Formular. Kein Amt.&ldquo;</p>
          <p className="text-sm text-ink-muted mt-3">&bdquo;Und wer bezahlt das?&ldquo;</p>
          <p className="text-ink-soft text-[15px] mt-1">&bdquo;Die 0,3% der Deutschen die mehr als 5 Millionen Euro haben. Die zahlen ein halbes Prozent davon. Die merken das kaum. Aber für dich bedeutet es: Bus, Essen, Arzt &mdash; ohne nachzudenken.&ldquo;</p>
        </Card>

        {/* 3-year roadmap — learning from Kenya, India, Brazil */}
        <Card className="mb-6">
          <Tag color="blue">3 Jahre statt 10</Tag>
          <p className="font-display text-lg mt-3 mb-4">Brasilien hat Pix in 3 Jahren an 150 Mio. Menschen gebracht. Deutschland hat bessere Infrastruktur. Also k&ouml;nnen wir das auch.</p>
          <div className="grid sm:grid-cols-3 gap-3">
            <div className="bg-gold-light rounded-xl p-4">
              <p className="font-display text-sm">2026</p>
              <p className="text-xs text-ink-muted mt-1">Schulessen, Kita und &Ouml;PNV einfach <strong>kostenlos machen</strong>. Keine App n&ouml;tig. Keine Karte. Einfach: gratis.</p>
            </div>
            <div className="bg-green-light rounded-xl p-4">
              <p className="font-display text-sm">2027</p>
              <p className="text-xs text-ink-muted mt-1"><strong>B&uuml;rgerkarte:</strong> Dein Personalausweis wird zur UBS-Karte. Kontaktlos. Automatisch. Wie Estlands eID.</p>
            </div>
            <div className="bg-blue-light rounded-xl p-4">
              <p className="font-display text-sm">2028</p>
              <p className="text-xs text-ink-muted mt-1"><strong>Alles verbunden:</strong> Deutschlandfonds, transparenter Haushalt, programmierbare Dienste. Du siehst wohin deine Steuern flie&szlig;en.</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 justify-center">
            {[
              { flag: '🇧🇷', label: 'Pix: 3 Jahre → 150 Mio.' },
              { flag: '🇮🇳', label: 'UPI: 10 Mrd. Transaktionen/Monat' },
              { flag: '🇰🇪', label: 'M-Pesa: 66 Mio. ohne Blockchain' },
              { flag: '🇪🇪', label: 'eID: Personalausweis = alles' },
            ].map((v, i) => (
              <span key={i} className="text-xs bg-bg-alt px-3 py-1.5 rounded-full text-ink-muted">{v.flag} {v.label}</span>
            ))}
          </div>
        </Card>

        <div className="text-center">
          <button onClick={() => { trackAction('wallet_shared'); share('Stell dir vor: eine Karte. Bus, Essen, Arzt — kostenlos. Kein Antrag. Kein Amt. Brasilien hat Pix in 3 Jahren an 150 Mio. gebracht. Wir k&ouml;nnen das auch. faireint.de #FairEint #Fair1') }} className="px-6 py-3 bg-gold text-white rounded-xl font-bold cursor-pointer btn-press hover:bg-gold/90 transition-colors">
            UBS-Wallet teilen
          </button>
          <p className="text-xs text-ink-muted mt-3">Zeig es deiner Familie, deinen Freunden, deiner Omi.</p>
        </div>
      </Section>

      {/* ━━━━ 9. FAHRPLAN ━━━━ */}
      <Section id="fahrplan" bg="bg-bg" label="Fahrplan">
        <div className="text-center mb-10">
          <Tag color="blue">Der Fahrplan</Tag>
          <h2 className="font-display text-3xl sm:text-4xl mt-4 mb-2">Was passiert wann?</h2>
          <p className="text-ink-muted">3 Phasen. Kein Wunschdenken — konkret was sich für dich ändert.</p>
        </div>
        <div className="space-y-6">
          {timeline.map((step, i) => {
            const colors = ['border-gold bg-gold-light', 'border-green bg-green-light', 'border-blue bg-blue-light']
            const dots = ['bg-gold', 'bg-green', 'bg-blue']
            const tags: Array<'gold' | 'green' | 'blue'> = ['gold', 'green', 'blue']
            const labels = ['Sofort spürbar', 'Systeme ändern sich', 'Ein anderes Deutschland']
            return (
              <div key={i} className={`rounded-2xl border p-6 sm:p-8 ${colors[i] || ''}`}>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-4 h-4 rounded-full ${dots[i]}`} />
                  <span className="font-display text-3xl">{step.year}</span>
                  <Tag color={tags[i]}>{labels[i]}</Tag>
                </div>
                <h3 className="font-display text-xl mb-2">{step.title}</h3>
                <p className="text-ink-muted mb-4">{step.description}</p>
                <div className="space-y-2">
                  {step.laws?.map((law, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <ArrowRight className="w-4 h-4 text-ink-muted mt-1 shrink-0" />
                      <span className="text-[15px]">{law}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
        <div className="text-center mt-8">
          <a href="#handeln" className="inline-block px-6 py-3 bg-gold text-white rounded-xl font-bold cursor-pointer btn-press hover:bg-gold/90 transition-colors">
            Ich will, dass das passiert &rarr;
          </a>
        </div>
      </Section>

      {/* ━━━━ 5-JAHRES-VISION ━━━━ */}
      <WideSection bg="bg-bg-alt" label="5-Jahres-Vision">
        <div className="text-center mb-10">
          <Tag color="gold">Vision 2030</Tag>
          <h2 className="font-display text-3xl sm:text-4xl mt-4 mb-2">Deutschland als Vorbild &mdash; in 5 Jahren</h2>
          <p className="text-ink-muted">Fair nach innen, stark nach außen. Beides gleichzeitig.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {[
            { year: '2026', color: 'bg-red-light', label: 'Entbürokratisieren', items: ['Firmengründung in 24h', 'eID endlich nutzen', 'Gratis Schulessen + Kita'] },
            { year: '2027', color: 'bg-gold-light', label: 'Fair finanzieren', items: ['Vermögensteuer 0,5%', 'Kapital = Arbeit besteuern', 'Deutschlandfonds startet'] },
            { year: '2028', color: 'bg-green-light', label: 'Innovation starten', items: ['Startup-Gesetz (ESOP)', '10% IT-Budget für AI', 'Energiekosten senken'] },
            { year: '2029', color: 'bg-blue-light', label: 'EU führen', items: ['EU-Vermögensteuer', 'Digitaler Euro + UBS', 'Ausbildung in 20 Ländern'] },
            { year: '2030', color: 'bg-purple-light', label: 'Ernte', items: ['Top 5 Digital + Innovation', 'Ungleichheit gesunken', 'Fair UND wettbewerbsfähig'] },
          ].map((step, i) => (
            <div key={i} className={`${step.color} rounded-2xl p-4 text-center`}>
              <p className="font-display text-2xl">{step.year}</p>
              <p className="font-bold text-xs text-ink-soft mb-3">{step.label}</p>
              {step.items.map((item, j) => (
                <p key={j} className="text-xs text-ink-muted mb-1">{item}</p>
              ))}
            </div>
          ))}
        </div>
        <p className="text-center text-sm text-ink-muted mt-6">Fairness ist kein Hindernis für Wettbewerb &mdash; sie ist die Voraussetzung. Skandinavien beweist es.</p>
      </WideSection>

      {/* ━━━━ 10. INNOVATIONEN ━━━━ */}
      <Section id="innovationen" bg="bg-bg">
        <div className="text-center mb-10">
          <Tag color="purple">Weiterdenken</Tag>
          <h2 className="font-display text-3xl sm:text-4xl mt-4 mb-2">7 Ideen die es noch nirgendwo gibt</h2>
          <p className="text-ink-muted">Technisch machbar. Politisch möglich. Demokratie-Innovation.</p>
        </div>
        <div className="space-y-3">
          {innovations.map(inv => {
            const open = openInnovation === inv.id
            return (
              <div key={inv.id} className={`rounded-2xl border transition-all ${open ? 'bg-bg-card shadow-lg border-gold/30' : 'bg-bg-card border-border'}`}>
                <button onClick={() => setOpenInnovation(open ? null : inv.id)} className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer btn-press">
                  <div className="flex items-center gap-4">
                    <span className="text-3xl">{inv.emoji}</span>
                    <div><h3 className="font-display text-lg">{inv.title}</h3><p className="text-sm text-ink-muted">{inv.oneLiner}</p></div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Tag color={inv.feasibility === 'sofort' ? 'green' : inv.feasibility === '1-2 Jahre' ? 'gold' : 'red'}>{inv.feasibility}</Tag>
                    {open ? <ChevronUp className="w-5 h-5 text-gold" /> : <ChevronDown className="w-5 h-5 text-ink-muted/30" />}
                  </div>
                </button>
                {open && (
                  <div className="px-5 sm:px-6 pb-6 space-y-4">
                    <div className="bg-red-light rounded-xl p-5"><Tag color="red">Problem</Tag><p className="mt-2 text-ink-soft">{inv.problem}</p></div>
                    <div className="bg-green-light rounded-xl p-5"><Tag color="green">Lösung</Tag><p className="mt-2 text-ink-soft">{inv.solution}</p></div>
                    <div>
                      <p className="font-bold text-sm text-ink-muted mb-2">So funktioniert's</p>
                      {inv.howItWorks.map((s, i) => (
                        <div key={i} className="flex items-start gap-3 mb-2">
                          <span className="w-6 h-6 rounded-full bg-gold-light text-gold text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">{i + 1}</span>
                          <p className="text-ink-soft">{s}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-blue-light rounded-xl p-4"><Tag color="blue">Existiert schon?</Tag><p className="mt-2 text-sm text-ink-soft">{inv.exists}</p></div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </Section>

      {/* ━━━━ 11. FINALE + CTA ━━━━ */}
      <section id="handeln" className="py-20 sm:py-28 px-6 bg-bg-alt text-center">
        <Heart className="w-8 h-8 text-gold mx-auto mb-8" />
        <h2 className="font-display text-3xl sm:text-4xl max-w-lg mx-auto mb-6 leading-tight">
          Jede Reform existiert bereits. <span className="text-gold">Irgendwo auf der Welt.</span>
        </h2>
        <p className="text-ink-muted text-lg mb-4 max-w-md mx-auto">Die Lösungen sind da. Die Zahlen stimmen. Die Menschen wollen es.</p>
        <p className="text-ink font-bold text-lg mb-8">Was fehlt, bist du.</p>

        <div className="flex flex-wrap justify-center gap-3 text-3xl mb-10">
          {["🇯🇵","🇫🇮","🇹🇼","🇪🇪","🇨🇭","🇩🇰","🇵🇹","🇸🇬","🇬🇧","🇮🇸","🇸🇪","🇳🇴","🇦🇹"].map((f, i) => (
            <span key={i} className="hover:scale-150 transition-transform duration-500 cursor-default">{f}</span>
          ))}
        </div>

        {/* CTA — zero friction */}
        <div className="max-w-md mx-auto space-y-4 mb-12">
          <h3 className="font-display text-2xl">4 Dinge die du jetzt tun kannst</h3>

          <Card className="text-left !p-5">
            <div className="flex items-start gap-4">
              <Share2 className="w-6 h-6 text-gold mt-0.5 shrink-0" />
              <div>
                <p className="font-bold">Teile diese Seite</p>
                <p className="text-sm text-ink-muted mt-1">Schick den Link an eine Person, der Politik wichtig ist. Ein Tap.</p>
                <button onClick={() => share('Einigkeit beginnt mit Fairness. 10 evidenzbasierte Reformen mit Simulator und Zahlen.')} className="mt-3 px-5 py-2.5 bg-gold text-white rounded-xl text-sm font-bold cursor-pointer btn-press hover:bg-gold/90 transition-colors">
                  Jetzt teilen
                </button>
              </div>
            </div>
          </Card>

          <Card className="text-left !p-5">
            <div className="flex items-start gap-4">
              <Copy className="w-6 h-6 text-gold mt-0.5 shrink-0" />
              <div>
                <p className="font-bold">Schreib deinem Abgeordneten</p>
                <p className="text-sm text-ink-muted mt-1">Fertige Vorlage &mdash; kopieren, einfügen, abschicken. Dauert 2 Minuten.</p>
                <div className="flex gap-2 mt-3 flex-wrap">
                  <button onClick={() => { navigator.clipboard.writeText(letterTemplate); trackAction('brief_copied'); showToast('Brief-Vorlage kopiert! Jetzt an deinen Abgeordneten senden.') }} className="px-5 py-2.5 bg-gold text-white rounded-xl text-sm font-bold cursor-pointer btn-press hover:bg-gold/90 transition-colors">
                    Brief kopieren
                  </button>
                  <a href="https://www.bundestag.de/abgeordnete" target="_blank" rel="noopener noreferrer" className="inline-block px-5 py-2.5 bg-bg border border-border rounded-xl text-sm font-bold hover:bg-bg-alt transition-colors">
                    Abgeordnete finden &rarr;
                  </a>
                </div>
              </div>
            </div>
          </Card>

          <Card className="text-left !p-5">
            <div className="flex items-start gap-4">
              <Heart className="w-6 h-6 text-gold mt-0.5 shrink-0" />
              <div>
                <p className="font-bold">Mach ein Reel / TikTok / Story</p>
                <p className="text-sm text-ink-muted mt-1">Zeig den Starbucks-Vergleich, den Simulator, oder den Fahrplan. Nutze <strong>#FairEint</strong> oder <strong>#Fair1</strong>. Wir reposten die besten.</p>
                <button onClick={() => { trackAction('reel_copied'); share('€4 pro Tag — weniger als ein Kaffee. So viel kostet ein faires Deutschland. faireint.de #FairEint #Fair1'); }} className="mt-3 px-5 py-2.5 bg-bg border border-border rounded-xl text-sm font-bold cursor-pointer btn-press hover:bg-bg-alt transition-colors">
                  Reel-Text kopieren
                </button>
              </div>
            </div>
          </Card>

          <Card className="text-left !p-5">
            <div className="flex items-start gap-4">
              <ArrowRight className="w-6 h-6 text-gold mt-0.5 shrink-0" />
              <div>
                <p className="font-bold">Code prüfen, verbessern, mitbauen</p>
                <p className="text-sm text-ink-muted mt-1">Open Source. Jede Zahl ist im Code nachvollziehbar. Pull Requests willkommen.</p>
                <a href="https://github.com/mikelninh/faireint" target="_blank" rel="noopener noreferrer" className="inline-block mt-3 px-5 py-2.5 bg-bg border border-border rounded-xl text-sm font-bold cursor-pointer btn-press hover:bg-bg-alt transition-colors">
                  GitHub &rarr;
                </a>
              </div>
            </div>
          </Card>
        </div>

        <Card className="max-w-xs mx-auto text-left mb-8">
          <div className="flex justify-between mb-1"><span className="text-ink-muted text-sm">Investition</span><span className="font-display text-red">€{Math.round(totalCost)} Mrd./Jahr</span></div>
          <div className="flex justify-between mb-1"><span className="text-ink-muted text-sm">Ersparnis</span><span className="font-display text-green">€{Math.round(totalSaving)} Mrd./Jahr</span></div>
          <div className="border-t border-border pt-2 mt-2 flex justify-between"><span className="font-bold">Nettogewinn</span><span className="font-display text-gold text-xl">+€{Math.round(netGain)} Mrd./Jahr</span></div>
          <p className="text-xs text-ink-muted mt-2 text-center">ca. +€{Math.round(netGain * 1000 / 83)} pro Bürger pro Jahr</p>
        </Card>
        <p className="text-sm text-ink-muted max-w-md mx-auto">Alle Zahlen sind Vorschläge auf Basis internationaler Evidenz &mdash; keine beschlossenen Gesetze. Quellen und Berechnungen sind offen einsehbar.</p>
      </section>

      {/* ━━━━ ÜBER / IMPRESSUM ━━━━ */}
      <Section bg="bg-bg">
        <div className="max-w-md mx-auto text-center">
          <h3 className="font-display text-2xl mb-4">Über dieses Projekt</h3>
          <p className="text-sm text-ink-muted mb-4">
            FairEint ist ein unabhängiges, ehrenamtliches Open-Source-Projekt. Keine Partei, kein Verein, keine Lobby.
            Erstellt von Bürgern, die glauben dass evidenzbasierte Politik möglich ist.
          </p>
          <p className="text-sm text-ink-muted mb-4">
            Alle Daten stammen aus öffentlich zugänglichen Quellen (OECD, WHO, IMF, Bundesbank, Eurostat, World Inequality Database).
            Die Persona-Reaktionen sind <strong>Simulationen</strong>, keine empirischen Umfragen.
            Alle Berechnungen sind im <a href="https://github.com/mikelninh/faireint" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Quellcode</a> offen einsehbar.
          </p>
          <p className="text-sm text-ink-muted mb-4">
            Dieses Projekt ersetzt keine wissenschaftliche Studie und keine politische Beratung.
            Es ist ein Diskussionsbeitrag &mdash; offen für Kritik, Korrekturen und Verbesserungen.
          </p>
          <div className="border-t border-border pt-4 mt-4 mb-4">
            <p className="text-xs text-ink-muted font-bold mb-2">Für Presse &amp; Social Media</p>
            <p className="text-xs text-ink-muted mb-2">Die 5 wichtigsten Zahlen zum Kopieren:</p>
            <div className="text-left space-y-1">
              {[
                '67% des Vermögens gehört den Top 10%. Die untere Hälfte: 1,4%.',
                'Ungleichheit kostet Deutschland €70-110 Mrd./Jahr. Die Lösung: €30-45 Mrd.',
                '€4 pro Bürger pro Tag. Weniger als ein Kaffee. So viel kostet ein faires Deutschland.',
                'Vermögensteuer: nie abgeschafft, nur ausgesetzt seit 1996. Die Schweiz erhebt sie.',
                'Universal Basic Services hat 80% Zustimmung in der Bevölkerungssimulation.',
              ].map((stat, i) => (
                <button key={i} onClick={() => { navigator.clipboard.writeText(stat + ' — faireint.de #FairEint'); trackAction('stat_copied'); showToast('Zahl kopiert!') }}
                  className="w-full text-left text-xs text-ink-muted hover:text-ink hover:bg-bg-alt p-2 rounded-lg cursor-pointer btn-press transition-colors flex items-start gap-2">
                  <Copy className="w-3 h-3 mt-0.5 shrink-0 text-gold" />
                  <span>{stat}</span>
                </button>
              ))}
            </div>
          </div>
          {/* Support / Donation */}
          <div className="border-t border-border pt-4 mt-4 mb-4">
            <p className="text-xs text-ink-muted font-bold mb-2">Dieses Projekt unterstützen</p>
            <p className="text-xs text-ink-muted mb-3">FairEint ist ehrenamtlich und kostenlos. Wenn dir das Projekt hilft, kannst du die Arbeit daran unterstützen.</p>
            <div className="flex gap-2 justify-center flex-wrap">
              <a href="https://ko-fi.com/mikel777" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-gold text-white rounded-xl text-xs font-bold hover:bg-gold/90 transition-colors btn-press">
                <Heart className="w-3 h-3" /> Unterstützen
              </a>
              <a href="https://github.com/sponsors/mikelninh" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-bg border border-border rounded-xl text-xs font-bold hover:bg-bg-alt transition-colors btn-press">
                GitHub Sponsors
              </a>
            </div>
          </div>
          <div className="border-t border-border pt-4 mt-4">
            <p className="text-xs text-ink-muted font-bold mb-1">Impressum (Angaben gem. &sect; 5 TMG)</p>
            <p className="text-xs text-ink-muted">Michael Ninh &middot; Kontakt: <a href="https://github.com/mikelninh/faireint/issues" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">GitHub Issues</a> &middot; <a href="https://www.linkedin.com/in/michael-ninh/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">LinkedIn</a></p>
            <p className="text-xs text-ink-muted mt-1">MIT Lizenz &middot; Demokratie sollte Open Source sein.</p>
          </div>
        </div>
      </Section>

      {/* ━━━━ ECOSYSTEM BAR ━━━━ */}
      <div className="bg-gold-light border-t border-gold/20 py-3 text-center text-[13px]">
        <a href="https://mikelninh.github.io/" className="text-gold font-bold hover:underline">Digitale Demokratie</a>
        <span className="text-ink-muted"> &middot; </span>
        <span className="text-ink font-bold">FairEint</span>
        <span className="text-ink-muted"> &middot; </span>
        <a href="https://mikelninh.github.io/gitlaw/" className="text-ink-muted hover:text-ink hover:underline">GitLaw</a>
        <span className="text-ink-muted"> &middot; </span>
        <a href="https://github.com/mikelninh/Public-Money-Mirror" className="text-ink-muted hover:text-ink hover:underline">Public Money Mirror</a>
        <span className="text-ink-muted"> &middot; </span>
        <a href="https://github.com/mikelninh/safevoice" className="text-ink-muted hover:text-ink hover:underline">SafeVoice</a>
      </div>

      {/* ━━━━ FOOTER ━━━━ */}
      <footer className="py-6 px-6 border-t border-border text-center bg-bg-alt">
        <p className="text-ink-muted text-sm">FairEint &mdash; Einigkeit beginnt mit Fairness</p>
        <p className="text-ink-muted/50 text-xs mt-1">Quellen: OECD &middot; WHO &middot; IMF &middot; Bundesbank &middot; Eurostat &middot; World Inequality Database</p>
      </footer>

      {/* Removed sticky CTA — was intrusive. CTAs live in #handeln section instead. */}

      {/* ── NPS Micro-Survey (appears after 90 seconds) ── */}
      {showNPS && !npsSubmitted && (
        <div className="fixed bottom-6 right-6 z-50 bg-bg-card border border-border rounded-2xl shadow-xl p-5 max-w-xs animate-slide-up">
          <button onClick={() => setShowNPS(false)} className="absolute top-2 right-3 text-ink-muted hover:text-ink cursor-pointer btn-press text-lg">&times;</button>
          <p className="font-display text-sm mb-3">Würdest du FairEint weiterempfehlen?</p>
          <div className="flex gap-1 mb-2">
            {[1,2,3,4,5,6,7,8,9,10].map(n => (
              <button key={n} onClick={() => {
                trackAction(`nps_${n}`)
                localStorage.setItem('faireint_nps_done', String(n))
                setNpsSubmitted(true)
                showToast(n >= 7 ? 'Danke! Teile FairEint mit einer Person die es lesen sollte.' : 'Danke für dein ehrliches Feedback!')
                setTimeout(() => setShowNPS(false), 3000)
              }} className="w-8 h-8 rounded-lg text-xs font-bold cursor-pointer btn-press transition-colors bg-bg-alt hover:bg-gold hover:text-white border border-border">
                {n}
              </button>
            ))}
          </div>
          <div className="flex justify-between text-xs text-ink-muted"><span>Unwahrscheinlich</span><span>Sehr wahrscheinlich</span></div>
        </div>
      )}
    </div>
  )
}
