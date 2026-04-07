import { useState } from 'react'
import { reforms, principles } from './data/manifesto'
import { timeline, costs, partyReactions, generationImpact } from './data/roadmap'
import { voters, satisfactionSummary } from './data/voters'
import { deepNeeds, trustPillars, partyPathTo80, internationalCeiling, truthBomb } from './data/path-to-80'
import { personas, policyScenarios, simulatePolicy } from './data/personas'
import { innovations } from './data/innovations'
import { ChevronDown, ChevronUp, Heart, ArrowRight, CheckCircle, X } from 'lucide-react'
import './index.css'

/* ── Small Components ──────────────────────────── */

function Label({ children }: { children: React.ReactNode }) {
  return <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold mb-4 text-center">{children}</p>
}

function Title({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="text-center mb-14">
      <h2 className="font-display text-3xl sm:text-[42px] leading-[1.15] tracking-tight mb-4">{children}</h2>
      {sub && <p className="text-ink-muted text-[15px] max-w-lg mx-auto leading-relaxed">{sub}</p>}
    </div>
  )
}

function Pill({ children, variant = 'gold' }: { children: React.ReactNode; variant?: 'gold' | 'sage' | 'coral' | 'blue' }) {
  const colors = { gold: 'bg-gold-bg text-gold', sage: 'bg-sage-bg text-sage', coral: 'bg-coral-bg text-coral', blue: 'bg-blue-bg text-blue' }
  return <span className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${colors[variant]}`}>{children}</span>
}

function StatCard({ value, label, sub, accent = false }: { value: string; label: string; sub?: string; accent?: boolean }) {
  return (
    <div className={`rounded-2xl p-6 text-center ${accent ? 'bg-gold-bg border border-gold/10' : 'bg-bg-card border border-border'}`}>
      <p className={`text-3xl sm:text-4xl font-display tracking-tight mb-1 ${accent ? 'text-gradient' : 'text-ink'}`}>{value}</p>
      <p className="text-ink-soft text-sm">{label}</p>
      {sub && <p className="text-ink-muted text-xs mt-1">{sub}</p>}
    </div>
  )
}

function ProgressBar({ value, max = 100, color = 'bg-sage' }: { value: number; max?: number; color?: string }) {
  return (
    <div className="w-full bg-bg-warm rounded-full h-2 overflow-hidden">
      <div className={`h-full rounded-full bar-grow ${color}`} style={{ width: `${Math.min(value / max * 100, 100)}%` }} />
    </div>
  )
}

/* ── App ───────────────────────────────────────── */

export default function App() {
  const [openReform, setOpenReform] = useState<string | null>(null)
  const [openVoter, setOpenVoter] = useState<string | null>(null)
  const [activeScenario, setActiveScenario] = useState(policyScenarios[0].id)
  const [openInnovation, setOpenInnovation] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-bg text-ink text-[15px] leading-relaxed">

      {/* ── Nav ── */}
      <nav className="fixed top-0 w-full z-50 bg-bg/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-5 h-14">
          <a href="#" className="font-display text-lg tracking-wide text-ink">
            Deutschland <span className="text-gradient">2030</span>
          </a>
          <div className="hidden md:flex gap-1">
            {[['vision','Vision'],['roadmap','Fahrplan'],['reformen','Reformen'],['simulator','Simulator'],['innovationen','7 Ideen'],['waehler','Menschen'],['weg-zu-80','→ 80%'],['parteien','Parteien']].map(([id, label]) => (
              <a key={id} href={`#${id}`}
                className="px-3 py-1.5 rounded-lg text-[12px] text-ink-muted hover:text-ink hover:bg-bg-warm transition-all">
                {label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <header className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center pt-14 glow-warm">
        <div className="max-w-3xl mx-auto">
          <div className="animate-in">
            <p className="text-gold text-[11px] font-semibold uppercase tracking-[0.4em] mb-10">Manifest für die Zukunft</p>
          </div>
          <h1 className="animate-in delay-1 font-display text-5xl sm:text-7xl lg:text-[88px] leading-[1.05] tracking-tight mb-6">
            Deutschland<br /><span className="text-gradient">2030</span>
          </h1>
          <p className="animate-in delay-2 text-ink-soft text-lg sm:text-xl max-w-md mx-auto mb-16 leading-relaxed">
            Was wäre, wenn wir das Beste aus 12 Ländern nehmen —<br className="hidden sm:block" /> und daraus ein Land bauen?
          </p>

          {/* Key stat */}
          <div className="animate-in delay-3 bg-bg-card rounded-3xl p-8 shadow-[0_2px_40px_rgba(0,0,0,0.04)] border border-border max-w-sm mx-auto mb-16">
            <p className="text-ink-muted text-[11px] uppercase tracking-widest mb-5">Zufriedenheit mit der Demokratie</p>
            <div className="flex items-end justify-center gap-6 mb-3">
              <div>
                <p className="text-4xl font-display text-coral">53%</p>
                <p className="text-ink-muted text-[11px] mt-1">Deutschland heute</p>
              </div>
              <ArrowRight className="w-4 h-4 text-border mb-3" />
              <div>
                <p className="text-4xl font-display text-sage">80%+</p>
                <p className="text-ink-muted text-[11px] mt-1">Unser Ziel</p>
              </div>
            </div>
            <p className="text-ink-muted text-[11px]">Dänemark: 92% · Irland: 83% · Es ist möglich.</p>
          </div>

          <a href="#vision" className="animate-in delay-4 inline-flex flex-col items-center text-ink-muted hover:text-gold transition-colors">
            <span className="text-[11px] uppercase tracking-widest mb-1">Entdecken</span>
            <ChevronDown className="w-4 h-4 animate-bounce" />
          </a>
        </div>
      </header>

      {/* ── Problem ── */}
      <section className="py-20 sm:py-28 px-6 bg-bg-warm">
        <div className="max-w-4xl mx-auto text-center">
          <Label>Das Problem</Label>
          <h2 className="font-display text-3xl sm:text-[42px] leading-tight tracking-tight mb-10">
            Deutschland funktioniert —<br />aber es <span className="text-coral">fühlt</span> sich nicht so an.
          </h2>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            {[
              { stat: '64%', label: 'DB-Pünktlichkeit', sub: 'Japan: 99%', color: 'text-coral' },
              { stat: '€2,43', label: 'Diesel pro Liter', sub: 'Allzeithoch April 2026', color: 'text-coral' },
              { stat: '3%', label: 'für Prävention', sub: '97% für Reparatur', color: 'text-coral' },
            ].map((s, i) => (
              <div key={i} className="bg-bg-card rounded-2xl p-6 border border-border card-hover">
                <p className={`text-3xl font-display tracking-tight ${s.color}`}>{s.stat}</p>
                <p className="text-ink-soft text-sm mt-1">{s.label}</p>
                <p className="text-ink-muted text-xs mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
          <p className="text-ink-muted text-sm max-w-md mx-auto">
            Es geht nicht nur um Geld. Es geht darum, ob der Staat dich <span className="text-ink-soft font-medium">respektiert</span>,
            ob du <span className="text-ink-soft font-medium">gehört</span> wirst, ob du <span className="text-ink-soft font-medium">frei</span> bist.
          </p>
        </div>
      </section>

      {/* ── Vision / Principles ── */}
      <section id="vision" className="py-20 sm:py-28 px-6 bg-bg glow-warm">
        <div className="max-w-5xl mx-auto">
          <Label>Die Vision</Label>
          <Title sub="Keine Partei. Keine Ideologie. Nur was nachweislich funktioniert — irgendwo auf der Welt.">6 Prinzipien</Title>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {principles.map((p, i) => (
              <div key={i} className="bg-bg-card rounded-2xl p-7 border border-border card-hover group cursor-default">
                <span className="text-xl font-display text-ink-muted/30 group-hover:text-gold transition-colors">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-[17px] mt-3 mb-2 tracking-tight">{p.title}</h3>
                <p className="text-ink-muted text-[13px] leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Roadmap ── */}
      <section id="roadmap" className="py-20 sm:py-28 px-6 bg-bg-warm">
        <div className="max-w-3xl mx-auto">
          <Label>Der Fahrplan</Label>
          <Title sub="Konkrete Gesetze. Konkrete Fristen. Was du wann spürst.">Von heute bis 2035</Title>
          <div className="relative">
            <div className="absolute left-[17px] top-6 bottom-6 w-px bg-border" />
            <div className="space-y-5">
              {timeline.map((step, i) => {
                const dot = step.status === 'now' ? 'bg-coral' : step.status === 'soon' ? 'bg-gold' : step.status === 'mid' ? 'bg-sage' : 'bg-blue'
                const pill = step.status === 'now' ? 'coral' : step.status === 'soon' ? 'gold' : step.status === 'mid' ? 'sage' : 'blue'
                return (
                  <div key={i} className="relative pl-11">
                    <div className={`absolute left-2 top-[22px] w-3 h-3 rounded-full ${dot} ring-[3px] ring-bg-warm`} />
                    <div className="bg-bg-card rounded-2xl p-5 border border-border card-hover">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-display text-xl">{step.year}</span>
                        {step.quarter && <span className="text-ink-muted text-xs">{step.quarter}</span>}
                        <Pill variant={pill as 'coral' | 'gold' | 'sage' | 'blue'}>{step.status === 'now' ? 'Jetzt' : step.status === 'soon' ? 'Bald' : step.status === 'mid' ? '2028-29' : 'Zukunft'}</Pill>
                      </div>
                      <h3 className="font-display text-[15px] mb-1">{step.title}</h3>
                      <p className="text-ink-muted text-xs mb-3">{step.description}</p>
                      {step.laws?.map((law, j) => (
                        <div key={j} className="flex items-start gap-2 mb-1">
                          <CheckCircle className="w-3 h-3 text-sage mt-0.5 shrink-0" />
                          <span className="text-xs text-ink-soft">{law}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── Reforms ── */}
      <section id="reformen" className="py-20 sm:py-28 px-6 bg-bg">
        <div className="max-w-3xl mx-auto">
          <Label>Die Reformen</Label>
          <Title sub="Klick auf einen Bereich — sieh Problem, Lösung, Vorbild und eine echte Geschichte.">9 Bereiche</Title>
          <div className="space-y-2">
            {reforms.map(r => {
              const open = openReform === r.id
              return (
                <div key={r.id} className={`rounded-2xl border transition-all duration-300 ${open ? 'bg-bg-card shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-gold/20' : 'bg-bg-card border-border hover:border-border-hover'}`}>
                  <button onClick={() => setOpenReform(open ? null : r.id)} className="w-full flex items-center justify-between p-5 text-left cursor-pointer">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{r.emoji}</span>
                      <div><h3 className="font-display text-[15px]">{r.title}</h3><p className="text-[11px] text-ink-muted">{r.subtitle}</p></div>
                    </div>
                    {open ? <ChevronUp className="w-4 h-4 text-gold" /> : <ChevronDown className="w-4 h-4 text-ink-muted/30" />}
                  </button>
                  {open && (
                    <div className="px-5 pb-6 space-y-5">
                      <div className="bg-coral-bg rounded-xl p-4">
                        <Pill variant="coral">Problem</Pill>
                        <p className="text-ink-soft text-[14px] mt-2 leading-relaxed">{r.problem}</p>
                      </div>
                      <div>
                        <Pill variant="sage">Lösung</Pill>
                        <ul className="mt-2 space-y-1.5">{r.solution.map((s, i) => (
                          <li key={i} className="flex items-start gap-2 text-[14px] text-ink-soft"><ArrowRight className="w-3.5 h-3.5 text-sage mt-0.5 shrink-0" />{s}</li>
                        ))}</ul>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-2">{r.worldwide.map((w, i) => (
                        <div key={i} className="bg-blue-bg rounded-xl p-4">
                          <p className="font-medium text-sm">{w.flag} {w.country}</p>
                          <p className="text-[12px] text-ink-muted mt-1 leading-relaxed">{w.lesson}</p>
                        </div>
                      ))}</div>
                      <div className="bg-gold-bg rounded-xl p-5 border border-gold/10">
                        <Pill>Geschichte</Pill>
                        <p className="font-display text-[15px] mt-2">{r.story.name}, {r.story.age} — {r.story.role}</p>
                        <div className="grid sm:grid-cols-2 gap-3 mt-3">
                          <div className="bg-coral-bg/50 rounded-lg p-3"><p className="text-[10px] uppercase tracking-wider text-coral/50 mb-1">Vorher</p><p className="text-[13px] text-ink-soft">{r.story.before}</p></div>
                          <div className="bg-sage-bg/50 rounded-lg p-3"><p className="text-[10px] uppercase tracking-wider text-sage/50 mb-1">Nachher</p><p className="text-[13px] text-ink-soft">{r.story.after}</p></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── The Math ── */}
      <section id="rechnung" className="py-20 sm:py-28 px-6 bg-bg-warm glow-sage">
        <div className="max-w-5xl mx-auto">
          <Label>Die Rechnung</Label>
          <Title sub="Jede Reform rechnet sich. Hier ist der Beweis.">Was kostet's? Was bringt's?</Title>
          <div className="grid sm:grid-cols-3 gap-4 mb-10">
            <StatCard value="€23 Mrd." label="Investition pro Jahr" sub="= 4,5% des Bundeshaushalts" />
            <StatCard value="€91 Mrd." label="Ersparnis pro Jahr" sub="Gesundheit, Produktivität, Verwaltung" />
            <StatCard value="+€68 Mrd." label="Nettogewinn" sub="= €820 pro Bürger pro Jahr" accent />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {costs.map((c, i) => {
              const roi = c.annualSaving / c.annualCost
              return (
                <div key={i} className="bg-bg-card rounded-2xl p-6 border border-border card-hover">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-display text-[15px]">{c.reform}</h4>
                    <Pill>1:{roi.toFixed(0)} ROI</Pill>
                  </div>
                  <div className="grid grid-cols-2 gap-3 mb-3">
                    <div className="bg-coral-bg rounded-xl p-3 text-center">
                      <p className="text-xl font-display text-coral">€{c.annualCost}</p>
                      <p className="text-[10px] text-ink-muted">Mrd. Kosten</p>
                    </div>
                    <div className="bg-sage-bg rounded-xl p-3 text-center">
                      <p className="text-xl font-display text-sage">€{c.annualSaving}</p>
                      <p className="text-[10px] text-ink-muted">Mrd. Ersparnis</p>
                    </div>
                  </div>
                  {c.savingItems.slice(0, 2).map((s, j) => (
                    <div key={j} className="flex justify-between text-xs py-0.5">
                      <span className="text-ink-muted truncate mr-2">{s.label}</span>
                      <span className="text-sage font-medium shrink-0">€{s.amount}</span>
                    </div>
                  ))}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Policy Simulator ── */}
      <section id="simulator" className="py-20 sm:py-28 px-6 bg-bg">
        <div className="max-w-4xl mx-auto">
          <Label>Policy-Simulator</Label>
          <Title sub="Wähle eine Reform — sieh sofort wie 24 Personas (84 Mio. Deutsche) reagieren.">
            Was denkt Deutschland?
          </Title>

          {/* Scenario tabs */}
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {policyScenarios.map(s => (
              <button key={s.id} onClick={() => setActiveScenario(s.id)}
                className={`px-4 py-2 rounded-full text-[12px] font-medium transition-all cursor-pointer ${activeScenario === s.id ? 'bg-gold text-white shadow-sm' : 'bg-bg-warm text-ink-muted hover:text-ink hover:bg-bg-card border border-border'}`}>
                {s.emoji} {s.title}
              </button>
            ))}
          </div>

          {/* Active scenario */}
          {policyScenarios.filter(s => s.id === activeScenario).map(scenario => {
            const result = simulatePolicy(scenario.id)
            return (
              <div key={scenario.id}>
                <div className="bg-bg-card rounded-2xl p-6 border border-border mb-6">
                  <p className="text-ink-muted text-[13px] mb-4">{scenario.description}</p>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    <div className="bg-coral-bg rounded-xl p-3 text-center">
                      <p className="text-xl font-display text-coral">€{scenario.annualCost} Mrd.</p>
                      <p className="text-[10px] text-ink-muted">Kosten/Jahr</p>
                    </div>
                    <div className="bg-sage-bg rounded-xl p-3 text-center">
                      <p className="text-xl font-display text-sage">€{scenario.annualSaving} Mrd.</p>
                      <p className="text-[10px] text-ink-muted">Ersparnis/Jahr</p>
                    </div>
                    <div className="bg-gold-bg rounded-xl p-3 text-center">
                      <p className="text-xl font-display text-gradient">{result.approval}%</p>
                      <p className="text-[10px] text-ink-muted">{result.label}</p>
                    </div>
                  </div>
                </div>

                {/* Persona reactions */}
                <div className="grid sm:grid-cols-2 gap-2">
                  {scenario.reactions.map(r => {
                    const persona = personas.find(p => p.id === r.personaId)
                    if (!persona) return null
                    return (
                      <div key={r.personaId} className="bg-bg-card rounded-xl p-4 border border-border card-hover">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-lg">{persona.emoji}</span>
                          <div className="flex-1">
                            <span className="text-[13px] font-medium">{persona.name}, {persona.age}</span>
                            <span className="text-[11px] text-ink-muted ml-1">({persona.party})</span>
                          </div>
                          <span className={`text-[13px] font-display ${r.approval >= 70 ? 'text-sage' : r.approval >= 40 ? 'text-gold' : 'text-coral'}`}>
                            {r.approval}%
                          </span>
                        </div>
                        <ProgressBar value={r.approval} color={r.approval >= 70 ? 'bg-sage' : r.approval >= 40 ? 'bg-gold' : 'bg-coral'} />
                        <p className="text-[11px] text-ink-muted mt-2 italic">„{r.reason}"</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── 7 Innovations ── */}
      <section id="innovationen" className="py-20 sm:py-28 px-6 bg-bg-warm">
        <div className="max-w-3xl mx-auto">
          <Label>7 Ideen die es noch nirgendwo gibt</Label>
          <Title sub="Technisch machbar, politisch möglich, nirgendwo implementiert. Wir bauen sie.">
            Demokratie neu erfinden
          </Title>

          <div className="space-y-2">
            {innovations.map(inv => {
              const open = openInnovation === inv.id
              const impactColor = inv.impact === 'transformativ' ? 'bg-gold-bg text-gold' : inv.impact === 'hoch' ? 'bg-sage-bg text-sage' : 'bg-blue-bg text-blue'
              const feasColor = inv.feasibility === 'sofort' ? 'bg-sage-bg text-sage' : inv.feasibility === '1-2 Jahre' ? 'bg-gold-bg text-gold' : 'bg-coral-bg text-coral'
              return (
                <div key={inv.id} className={`rounded-2xl border transition-all duration-300 ${open ? 'bg-bg-card shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-gold/20' : 'bg-bg-card border-border hover:border-border-hover'}`}>
                  <button onClick={() => setOpenInnovation(open ? null : inv.id)} className="w-full flex items-center justify-between p-5 text-left cursor-pointer">
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{inv.emoji}</span>
                      <div>
                        <h3 className="font-display text-[15px]">{inv.title}</h3>
                        <p className="text-[11px] text-ink-muted">{inv.oneLiner}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Pill variant={inv.feasibility === 'sofort' ? 'sage' : inv.feasibility === '1-2 Jahre' ? 'gold' : 'coral'}>{inv.feasibility}</Pill>
                      {open ? <ChevronUp className="w-4 h-4 text-gold" /> : <ChevronDown className="w-4 h-4 text-ink-muted/30" />}
                    </div>
                  </button>
                  {open && (
                    <div className="px-5 pb-6 space-y-4">
                      <div className="bg-coral-bg rounded-xl p-4">
                        <Pill variant="coral">Problem</Pill>
                        <p className="text-[13px] text-ink-soft mt-2">{inv.problem}</p>
                      </div>
                      <div className="bg-sage-bg rounded-xl p-4">
                        <Pill variant="sage">Lösung</Pill>
                        <p className="text-[13px] text-ink-soft mt-2">{inv.solution}</p>
                      </div>
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted mb-2">Wie es funktioniert</p>
                        {inv.howItWorks.map((step, i) => (
                          <div key={i} className="flex items-start gap-2 mb-1.5">
                            <span className="text-gold font-display text-[13px] mt-0.5 w-5 shrink-0">{i + 1}.</span>
                            <span className="text-[13px] text-ink-soft">{step}</span>
                          </div>
                        ))}
                      </div>
                      <div className="bg-blue-bg rounded-xl p-4">
                        <Pill variant="blue">Existiert schon?</Pill>
                        <p className="text-[13px] text-ink-soft mt-2">{inv.exists}</p>
                      </div>
                      <div className="flex gap-3">
                        <div className={`rounded-lg px-3 py-1.5 text-[11px] font-medium ${impactColor}`}>Impact: {inv.impact}</div>
                        <div className={`rounded-lg px-3 py-1.5 text-[11px] font-medium ${feasColor}`}>Machbar: {inv.feasibility}</div>
                        <div className="rounded-lg px-3 py-1.5 text-[11px] font-medium bg-violet-bg text-violet">Tech: {inv.techNeeded}</div>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Real People ── */}
      <section id="waehler" className="py-20 sm:py-28 px-6 bg-bg">
        <div className="max-w-4xl mx-auto">
          <Label>Echte Menschen</Label>
          <Title sub="8 Wähler. Was sie sich wünschen. Was sie bekommen. Ob es reicht.">Sind die Menschen zufriedener?</Title>

          <div className="bg-bg-card rounded-3xl p-8 border border-border shadow-[0_2px_40px_rgba(0,0,0,0.03)] mb-8 text-center">
            <div className="flex items-end justify-center gap-8 mb-3">
              <div><p className="text-4xl font-display text-coral">{satisfactionSummary.currentAverage}%</p><p className="text-ink-muted text-[11px] mt-1">Jetzt</p></div>
              <ArrowRight className="w-4 h-4 text-border mb-3" />
              <div><p className="text-4xl font-display text-sage">{satisfactionSummary.afterAverage}%</p><p className="text-ink-muted text-[11px] mt-1">Nach Reformen</p></div>
            </div>
            <p className="text-ink-muted text-xs">+{satisfactionSummary.afterAverage - satisfactionSummary.currentAverage} Punkte · Durchschnitt aller 8 Profile</p>
          </div>

          {/* Bars */}
          <div className="bg-bg-card rounded-2xl p-6 border border-border mb-6">
            {voters.map(v => (
              <div key={v.id} className="flex items-center gap-3 py-1.5">
                <span className="text-lg w-7">{v.emoji}</span>
                <span className="w-24 text-[12px] text-ink-muted truncate">{v.name}, {v.age}</span>
                <div className="flex-1"><ProgressBar value={v.afterSatisfaction} color={v.afterSatisfaction >= 70 ? 'bg-sage' : v.afterSatisfaction >= 50 ? 'bg-gold' : 'bg-coral'} /></div>
                <span className="text-[12px] font-display w-12 text-right text-sage">+{v.afterSatisfaction - v.currentSatisfaction}</span>
              </div>
            ))}
          </div>

          {/* Expandable */}
          <div className="space-y-2">
            {voters.map(v => {
              const open = openVoter === v.id
              return (
                <div key={v.id} className={`rounded-2xl border transition-all ${open ? 'bg-bg-card shadow-[0_4px_30px_rgba(0,0,0,0.05)] border-gold/20' : 'bg-bg-card border-border'}`}>
                  <button onClick={() => setOpenVoter(open ? null : v.id)} className="w-full flex items-center justify-between p-4 text-left cursor-pointer">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{v.emoji}</span>
                      <div>
                        <span className="font-display text-[14px]">{v.name}, {v.age}</span>
                        <span className="text-ink-muted text-[11px] ml-2">{v.location} · {v.votedLast}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-[12px] font-display text-sage">+{v.afterSatisfaction - v.currentSatisfaction}</span>
                      {open ? <ChevronUp className="w-4 h-4 text-gold" /> : <ChevronDown className="w-4 h-4 text-ink-muted/20" />}
                    </div>
                  </button>
                  {open && (
                    <div className="px-4 pb-5 space-y-4">
                      <p className="text-[12px] text-ink-muted">{v.profile} · {v.income}</p>
                      <div><Pill variant="coral">Sorgen</Pill><div className="mt-2 space-y-1">{v.topWorries.map((w, i) => <p key={i} className="text-[12px] text-ink-muted">• {w}</p>)}</div></div>
                      <div><Pill variant="sage">Was die Reformen liefern</Pill><div className="mt-2 space-y-1.5">{v.whatTheyGet.map((g, i) => (
                        <div key={i} className="flex items-start gap-2">
                          {g.delivered ? <CheckCircle className="w-3 h-3 text-sage mt-0.5 shrink-0" /> : <X className="w-3 h-3 text-coral/40 mt-0.5 shrink-0" />}
                          <span className="text-[12px] text-ink-soft">{g.item} <span className="text-ink-muted">— {g.note}</span></span>
                        </div>
                      ))}</div></div>
                      <div className="bg-bg-warm rounded-xl p-4"><p className="text-[12px] text-ink-soft italic">„{v.quote}"</p><p className="text-ink-muted text-[10px] mt-1">— {v.name}, {v.age}</p></div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Path to 80% ── */}
      <section id="weg-zu-80" className="py-20 sm:py-28 px-6 bg-bg-warm">
        <div className="max-w-4xl mx-auto">
          <Label>Der Weg zu 80%</Label>
          <Title sub="Was wollen Menschen WIRKLICH? Psychologie + Daten aus den zufriedensten Demokratien.">Was macht Länder glücklich?</Title>

          {/* Deep needs */}
          <div className="space-y-3 mb-16">
            {deepNeeds.map((n, i) => (
              <div key={i} className="bg-bg-card rounded-xl p-5 border border-border card-hover">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl">{n.emoji}</span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between"><h4 className="font-display text-[14px]">{n.need}</h4>
                      <span className="text-[12px] font-display"><span className="text-coral">{n.germanyScore}</span> <span className="text-ink-muted">→</span> <span className="text-sage">{n.targetScore}</span></span>
                    </div>
                    <p className="text-[10px] text-ink-muted">{n.govEquivalent}</p>
                  </div>
                </div>
                <div className="relative h-2 bg-bg-warm rounded-full overflow-hidden mb-1.5">
                  <div className="absolute inset-y-0 left-0 bg-sage/15 rounded-full" style={{ width: `${n.targetScore}%` }} />
                  <div className="absolute inset-y-0 left-0 bg-coral rounded-full bar-grow" style={{ width: `${n.germanyScore}%` }} />
                </div>
                <p className="text-[10px] text-ink-muted">{n.gap}</p>
              </div>
            ))}
          </div>

          {/* Trust pillars */}
          <Title sub="Die 6 Dinge die Dänemark, Irland und die Schweiz anders machen.">6 Hebel für Vertrauen</Title>
          <div className="space-y-4 mb-16">
            {trustPillars.map(p => (
              <div key={p.id} className="bg-bg-card rounded-2xl p-6 border border-border card-hover">
                <div className="flex items-start gap-3 mb-3">
                  <span className="text-xl">{p.emoji}</span>
                  <div><h4 className="font-display text-[15px]">{p.title}</h4><p className="text-[12px] text-ink-muted italic mt-0.5">{p.insight}</p></div>
                </div>
                <div className="bg-violet-bg rounded-xl p-4 mb-3">
                  <p className="text-[10px] text-violet uppercase tracking-wider mb-1 font-semibold">Forschung</p>
                  <p className="text-[12px] text-ink-soft leading-relaxed">{p.research}</p>
                </div>
                <div className="bg-blue-bg rounded-xl p-4 mb-3">
                  <p className="text-[11px] text-blue font-medium mb-1">{p.roleModel.flag} {p.roleModel.country}</p>
                  <p className="text-[12px] text-ink-muted mb-1">{p.roleModel.what}</p>
                  <p className="text-[12px] text-sage font-medium">{p.roleModel.result}</p>
                </div>
                {p.concreteStep.map((s, i) => (
                  <div key={i} className="flex items-start gap-2 mb-1"><ArrowRight className="w-3 h-3 text-gold mt-0.5 shrink-0" /><span className="text-[12px] text-ink-muted">{s}</span></div>
                ))}
              </div>
            ))}
          </div>

          {/* International */}
          <div className="bg-bg-card rounded-2xl p-6 border border-border mb-12">
            <p className="text-center text-[11px] text-ink-muted uppercase tracking-wider mb-5">Zufriedenheit mit der Demokratie · Eurobarometer 2023</p>
            {internationalCeiling.map(c => (
              <div key={c.country} className="flex items-center gap-3 py-1.5">
                <span className="w-6 text-center">{c.flag}</span>
                <span className="w-24 text-[12px] text-ink-muted">{c.country}</span>
                <div className="flex-1"><ProgressBar value={c.satisfaction} color={c.country === 'Deutschland' ? 'bg-coral' : 'bg-sage'} /></div>
                <span className={`text-[12px] font-display w-10 text-right ${c.country === 'Deutschland' ? 'text-coral' : 'text-sage'}`}>{c.satisfaction}%</span>
              </div>
            ))}
          </div>

          {/* Truth */}
          <div className="bg-gold-bg rounded-3xl p-8 border border-gold/10 text-center">
            <h3 className="font-display text-2xl mb-4">{truthBomb.question}</h3>
            <p className="text-ink-soft text-[14px] leading-relaxed mb-6 max-w-lg mx-auto">{truthBomb.answer}</p>
            <div className="grid sm:grid-cols-3 gap-3">
              <div className="bg-bg-card rounded-xl p-4"><p className="text-2xl font-display text-sage">80%+</p><p className="text-ink-muted text-[10px]">Ist erreichbar</p></div>
              <div className="bg-bg-card rounded-xl p-4"><p className="text-2xl font-display text-gradient">53→80</p><p className="text-ink-muted text-[10px]">+27 Punkte</p></div>
              <div className="bg-bg-card rounded-xl p-4"><p className="text-2xl font-display text-ink-soft">~10 J.</p><p className="text-ink-muted text-[10px]">Zeithorizont</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Parties ── */}
      <section id="parteien" className="py-20 sm:py-28 px-6 bg-bg">
        <div className="max-w-5xl mx-auto">
          <Label>Parteien-Check</Label>
          <Title sub="Was jede Partei WIRKLICH will — und der Kompromiss der sie weiterbringt.">Können alle zustimmen?</Title>
          <div className="bg-bg-card rounded-2xl p-6 border border-border mb-8">
            {partyReactions.map(p => (
              <div key={p.party} className="flex items-center gap-3 py-1.5">
                <span className="w-16 text-[12px] font-medium">{p.party}</span>
                <div className="flex-1"><ProgressBar value={p.approval} color={p.approval >= 70 ? 'bg-sage' : p.approval >= 50 ? 'bg-gold' : 'bg-coral'} /></div>
                <span className="text-[12px] font-display w-10 text-right">{p.approval}%</span>
              </div>
            ))}
            <p className="text-[11px] text-ink-muted mt-3 text-center">4 von 6 über 50% · Verfassungsändernde Mehrheit möglich</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {partyPathTo80.map(p => (
              <div key={p.party} className="bg-bg-card rounded-xl p-5 border border-border card-hover">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-display text-[15px]">{p.party}</h4>
                  <span className="text-[12px] font-display"><span className="text-ink-muted">{p.currentApproval}</span> → <span className={p.potentialApproval >= 80 ? 'text-sage' : 'text-gold'}>{p.potentialApproval}%</span></span>
                </div>
                <ProgressBar value={p.potentialApproval} color={p.potentialApproval >= 80 ? 'bg-sage' : p.potentialApproval >= 50 ? 'bg-gold' : 'bg-coral'} />
                <p className="text-[11px] text-ink-muted italic mt-3 mb-2">{p.whatTheyReallyWant}</p>
                <div className="bg-gold-bg rounded-lg p-3">
                  <p className="text-[10px] uppercase tracking-wider text-gold/60 mb-1 font-semibold">Kompromiss</p>
                  <p className="text-[12px] text-ink-soft leading-relaxed">{p.keyCompromise}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── For You ── */}
      <section id="fuer-dich" className="py-20 sm:py-28 px-6 bg-bg-warm">
        <div className="max-w-4xl mx-auto">
          <Label>Für dich</Label>
          <Title sub="Sofort. In 5 Jahren. Lebenslang.">Was ändert sich in deinem Leben?</Title>
          <div className="space-y-4">
            {generationImpact.map((p, i) => (
              <div key={i} className="bg-bg-card rounded-2xl p-6 border border-border card-hover">
                <div className="flex items-center gap-3 mb-4"><span className="text-2xl">{p.emoji}</span><div><h3 className="font-display text-[15px]">{p.name}</h3><p className="text-[11px] text-ink-muted">{p.label}</p></div></div>
                <div className="grid sm:grid-cols-3 gap-3">
                  <div className="bg-gold-bg rounded-xl p-4"><Pill>Sofort</Pill><p className="text-[12px] text-ink-soft mt-2 leading-relaxed">{p.shortTerm}</p></div>
                  <div className="bg-sage-bg rounded-xl p-4"><Pill variant="sage">In 5 Jahren</Pill><p className="text-[12px] text-ink-soft mt-2 leading-relaxed">{p.longTerm}</p></div>
                  <div className="bg-blue-bg rounded-xl p-4"><Pill variant="blue">Lebenslang</Pill><p className="text-[12px] text-ink-soft mt-2 leading-relaxed">{p.lifetime}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Final ── */}
      <section className="py-24 sm:py-32 px-6 text-center glow-warm">
        <div className="max-w-2xl mx-auto">
          <Heart className="w-8 h-8 text-gold mx-auto mb-8" />
          <h2 className="font-display text-3xl sm:text-[44px] leading-tight tracking-tight mb-6">
            Jedes Element existiert bereits.<br /><span className="text-gradient">Irgendwo auf der Welt.</span>
          </h2>
          <p className="text-ink-muted text-[15px] mb-10 leading-relaxed">
            Wir müssen es nur zusammensetzen. Und anfangen.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-2xl mb-12">
            {["🇯🇵","🇫🇮","🇹🇼","🇪🇪","🇨🇭","🇩🇰","🇵🇹","🇸🇬","🇨🇺","🇬🇧","🇮🇸","🇸🇪"].map((f, i) => (
              <span key={i} className="hover:scale-150 transition-transform duration-500 cursor-default float" style={{ animationDelay: `${i * 0.3}s` }}>{f}</span>
            ))}
          </div>
          <div className="bg-bg-card rounded-2xl p-6 border border-border max-w-sm mx-auto shadow-[0_2px_40px_rgba(0,0,0,0.03)]">
            <div className="flex justify-between text-[13px] mb-2"><span className="text-ink-muted">Investition</span><span className="text-coral font-display">€23 Mrd.</span></div>
            <div className="flex justify-between text-[13px] mb-2"><span className="text-ink-muted">Ersparnis</span><span className="text-sage font-display">€91 Mrd.</span></div>
            <div className="border-t border-border pt-2 flex justify-between text-[14px]"><span className="font-medium">Nettogewinn</span><span className="text-gradient font-display text-lg">+€68 Mrd.</span></div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="py-10 px-6 border-t border-border text-center">
        <p className="text-ink-muted text-[12px]">Deutschland 2030 — Manifest für die Zukunft</p>
        <p className="text-ink-muted/50 text-[10px] mt-1">Daten: OECD, WHO, Eurobarometer, World Happiness Report, Bundestag · Open Source</p>
      </footer>
    </div>
  )
}
