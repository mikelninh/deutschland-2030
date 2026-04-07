import { useState } from 'react'
import { reforms, principles, stats } from './data/manifesto'
import { timeline, costs, partyReactions, generationImpact } from './data/roadmap'
import { voters, satisfactionSummary } from './data/voters'
import { ChevronDown, ChevronUp, Globe, Heart, Users, ArrowRight, CheckCircle, Clock, Target, TrendingUp, Scale, Sparkles, X, MessageCircle } from 'lucide-react'
import './index.css'

function ProgressBar({ value, max, color = 'bg-sage' }: { value: number; max: number; color?: string }) {
  const pct = Math.min((value / max) * 100, 100)
  return (
    <div className="w-full bg-parchment-dark rounded-full h-3 overflow-hidden">
      <div className={`h-full rounded-full transition-all duration-1000 ${color}`} style={{ width: `${pct}%` }} />
    </div>
  )
}

function CostCard({ item }: { item: typeof costs[0] }) {
  const roi = item.annualSaving / item.annualCost
  return (
    <div className="bg-white rounded-2xl p-6 border border-parchment-dark">
      <h4 className="font-serif text-lg mb-4">{item.reform}</h4>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div className="bg-accent/5 rounded-xl p-4 text-center">
          <p className="text-xs uppercase tracking-wider text-accent/60 mb-1">Kosten/Jahr</p>
          <p className="text-2xl font-serif text-accent">€{item.annualCost} Mrd.</p>
        </div>
        <div className="bg-sage/10 rounded-xl p-4 text-center">
          <p className="text-xs uppercase tracking-wider text-sage/60 mb-1">Ersparnis/Jahr</p>
          <p className="text-2xl font-serif text-sage">€{item.annualSaving} Mrd.</p>
        </div>
      </div>
      <div className="flex items-center justify-between bg-gold/5 rounded-xl px-4 py-3 mb-4">
        <span className="text-sm text-ink-light">Return on Investment</span>
        <span className="font-serif text-xl text-gold">1:{roi.toFixed(0)}</span>
      </div>
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-wider text-ink-light/40 mb-1">Wohin fließt das Geld?</p>
        {item.costItems.map((c, i) => (
          <div key={i} className="flex justify-between text-sm">
            <span className="text-ink-light/70">{c.label}</span>
            <span className="text-accent font-medium">€{c.amount} Mrd.</span>
          </div>
        ))}
        <p className="text-xs uppercase tracking-wider text-ink-light/40 mt-3 mb-1">Was wir zurückbekommen</p>
        {item.savingItems.map((s, i) => (
          <div key={i} className="flex justify-between text-sm">
            <span className="text-ink-light/70">{s.label}</span>
            <span className="text-sage font-medium">€{s.amount} Mrd.</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function App() {
  const [expandedReform, setExpandedReform] = useState<string | null>(null)
  const [expandedVoter, setExpandedVoter] = useState<string | null>(null)
  const [activeNav, setActiveNav] = useState('')

  const navItems = [
    { id: 'prinzipien', label: 'Prinzipien' },
    { id: 'roadmap', label: 'Fahrplan' },
    { id: 'reformen', label: 'Reformen' },
    { id: 'rechnung', label: 'Rechnung' },
    { id: 'parteien', label: 'Parteien' },
    { id: 'waehler', label: 'Wähler' },
    { id: 'generationen', label: 'Für dich' },
  ]

  return (
    <div className="min-h-screen">
      {/* Sticky Nav */}
      <nav className="sticky top-0 z-50 bg-ink/95 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-2">
          <a href="#" className="font-serif text-gold text-lg">DE 2030</a>
          <div className="hidden sm:flex gap-1">
            {navItems.map(n => (
              <a key={n.id} href={`#${n.id}`} onClick={() => setActiveNav(n.id)}
                className={`px-3 py-1.5 rounded-full text-xs transition-colors ${activeNav === n.id ? 'bg-gold/20 text-gold' : 'text-white/50 hover:text-white/80'}`}>
                {n.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-ink to-ink-light overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-sage blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-6 font-medium">Manifest</p>
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-white leading-[1.1] mb-6">
            Deutschland<br /><span className="text-gold">2030</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-3">
            Das Beste aus 12 Ländern. 9 Reformen. Eine Vision.
          </p>
          <p className="text-lg text-white/40 max-w-xl mx-auto mb-12">
            Investiere in Menschen, nicht in Reparaturen.
          </p>

          {/* Big number */}
          <div className="bg-white/5 backdrop-blur rounded-2xl p-8 max-w-lg mx-auto mb-12 border border-white/10">
            <p className="text-white/40 text-sm uppercase tracking-wider mb-2">Gesamtrechnung aller 9 Reformen</p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-3xl font-serif text-accent-light">€23 Mrd.</p>
                <p className="text-white/40 text-xs mt-1">Jährliche Investition</p>
              </div>
              <div>
                <p className="text-3xl font-serif text-sage-light">€91 Mrd.</p>
                <p className="text-white/40 text-xs mt-1">Jährliche Ersparnis</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-gold text-sm">Jeder investierte Euro bringt 4 Euro zurück</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-12">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <div className="text-3xl font-serif text-gold mb-1">{s.value}</div>
                <div className="text-xs text-white/40 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
          <a href="#prinzipien" className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors">
            <span>So funktioniert's</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </header>

      {/* Principles */}
      <section id="prinzipien" className="py-24 px-6 bg-parchment">
        <div className="max-w-5xl mx-auto">
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4 text-center">Woran wir glauben</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-center mb-4">6 Prinzipien</h2>
          <p className="text-center text-ink-light/60 mb-16 max-w-xl mx-auto">Keine Partei. Keine Ideologie. Nur das, was nachweislich funktioniert.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-parchment-dark">
                <div className="text-3xl mb-4 text-gold font-serif">{String(i + 1).padStart(2, '0')}</div>
                <h3 className="font-serif text-xl text-ink mb-3">{p.title}</h3>
                <p className="text-ink-light/70 leading-relaxed text-[15px]">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap / Timeline */}
      <section id="roadmap" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="w-5 h-5 text-gold" />
            <p className="text-gold uppercase tracking-[0.2em] text-sm">Der Fahrplan</p>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-center mb-4">Von jetzt bis 2035</h2>
          <p className="text-center text-ink-light/60 mb-16 max-w-xl mx-auto">Konkrete Schritte. Welche Gesetze wann. Was du wann spürst.</p>

          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-parchment-dark hidden sm:block" />

            <div className="space-y-8">
              {timeline.map((step, i) => {
                const statusColors = {
                  now: 'bg-accent text-white',
                  soon: 'bg-gold text-ink',
                  mid: 'bg-sage text-white',
                  future: 'bg-sky text-white',
                }
                const statusLabels = {
                  now: 'Jetzt',
                  soon: 'Bald',
                  mid: '2028-29',
                  future: 'Zukunft',
                }
                return (
                  <div key={i} className="relative sm:pl-16">
                    {/* Dot */}
                    <div className={`hidden sm:flex absolute left-4 top-6 w-4 h-4 rounded-full border-4 border-white ${step.status === 'now' ? 'bg-accent' : step.status === 'soon' ? 'bg-gold' : step.status === 'mid' ? 'bg-sage' : 'bg-sky'}`} />

                    <div className="bg-parchment/50 rounded-2xl p-6 border border-parchment-dark hover:border-gold/30 transition-colors">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <span className="font-serif text-2xl text-ink">{step.year}</span>
                        {step.quarter && <span className="text-ink-light/40 text-sm">{step.quarter}</span>}
                        <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[step.status]}`}>
                          {statusLabels[step.status]}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl text-ink mb-2">{step.title}</h3>
                      <p className="text-ink-light/60 text-sm mb-4">{step.description}</p>
                      {step.laws && (
                        <div className="space-y-2">
                          <p className="text-xs uppercase tracking-wider text-ink-light/30 mb-1">Gesetze & Maßnahmen</p>
                          {step.laws.map((law, j) => (
                            <div key={j} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-sage mt-0.5 shrink-0" />
                              <span className="text-sm text-ink-light/70">{law}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Reforms (accordion) */}
      <section id="reformen" className="py-24 px-6 bg-parchment">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Target className="w-5 h-5 text-gold" />
            <p className="text-gold uppercase tracking-[0.2em] text-sm">Die Reformen</p>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-center mb-4">9 Bereiche, die alles ändern</h2>
          <p className="text-center text-ink-light/60 mb-16 max-w-2xl mx-auto">
            Klick auf einen Bereich — sieh das Problem, die Lösung, wer es besser macht, und eine echte Geschichte.
          </p>

          <div className="space-y-3">
            {reforms.map(reform => {
              const isExpanded = expandedReform === reform.id
              return (
                <div key={reform.id} className="border border-parchment-dark rounded-2xl overflow-hidden bg-white hover:border-gold/20 transition-colors">
                  <button
                    onClick={() => setExpandedReform(isExpanded ? null : reform.id)}
                    className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl">{reform.emoji}</span>
                      <div>
                        <h3 className="font-serif text-lg text-ink">{reform.title}</h3>
                        <p className="text-xs text-ink-light/50">{reform.subtitle}</p>
                      </div>
                    </div>
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-gold" /> : <ChevronDown className="w-5 h-5 text-ink-light/30" />}
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-6 space-y-6">
                      <div className="bg-accent/5 rounded-xl p-5 border border-accent/10">
                        <p className="text-xs uppercase tracking-wider text-accent/70 mb-2 font-medium">Das Problem</p>
                        <p className="text-ink-light leading-relaxed text-[15px]">{reform.problem}</p>
                      </div>

                      <div>
                        <p className="text-xs uppercase tracking-wider text-sage/70 mb-3 font-medium">Die Lösung</p>
                        <ul className="space-y-2">
                          {reform.solution.map((s, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <ArrowRight className="w-4 h-4 text-sage mt-0.5 shrink-0" />
                              <span className="text-ink-light leading-relaxed text-[15px]">{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Globe className="w-4 h-4 text-sky" />
                          <p className="text-xs uppercase tracking-wider text-sky/70 font-medium">Was andere besser machen</p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {reform.worldwide.map((w, i) => (
                            <div key={i} className="bg-sky/5 rounded-xl p-4 border border-sky/10">
                              <p className="font-medium text-ink text-sm mb-1">{w.flag} {w.country}</p>
                              <p className="text-[13px] text-ink-light/70 leading-relaxed">{w.lesson}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gold/5 rounded-xl p-5 border border-gold/10">
                        <div className="flex items-center gap-2 mb-3">
                          <Users className="w-4 h-4 text-gold" />
                          <p className="text-xs uppercase tracking-wider text-gold/70 font-medium">Echte Geschichte</p>
                        </div>
                        <p className="font-serif text-lg text-ink mb-3">{reform.story.name}, {reform.story.age} — {reform.story.role}</p>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="bg-accent/5 rounded-lg p-3">
                            <p className="text-xs uppercase tracking-wider text-accent/50 mb-1">Vorher</p>
                            <p className="text-sm text-ink-light">{reform.story.before}</p>
                          </div>
                          <div className="bg-sage/5 rounded-lg p-3">
                            <p className="text-xs uppercase tracking-wider text-sage/50 mb-1">Nachher</p>
                            <p className="text-sm text-ink-light">{reform.story.after}</p>
                          </div>
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

      {/* Cost/Benefit Calculation */}
      <section id="rechnung" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <TrendingUp className="w-5 h-5 text-gold" />
            <p className="text-gold uppercase tracking-[0.2em] text-sm">Die Rechnung</p>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-center mb-4">Was kostet's? Was bringt's?</h2>
          <p className="text-center text-ink-light/60 mb-6 max-w-xl mx-auto">Jede Reform mit konkreten Zahlen. Kosten, Ersparnisse, Return on Investment.</p>

          {/* Summary bar */}
          <div className="bg-ink rounded-2xl p-6 mb-12 text-center">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Gesamtinvestition</p>
                <p className="text-3xl font-serif text-accent-light">€23 Mrd./Jahr</p>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Gesamtersparnis</p>
                <p className="text-3xl font-serif text-sage-light">€91 Mrd./Jahr</p>
              </div>
              <div>
                <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Netto-Gewinn</p>
                <p className="text-3xl font-serif text-gold">+€68 Mrd./Jahr</p>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/10">
              <p className="text-white/50 text-sm">Das sind €820 pro Bürger pro Jahr, die wir gewinnen — nicht ausgeben.</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {costs.map((c, i) => <CostCard key={i} item={c} />)}
          </div>
        </div>
      </section>

      {/* Party Reactions */}
      <section id="parteien" className="py-24 px-6 bg-parchment">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Scale className="w-5 h-5 text-gold" />
            <p className="text-gold uppercase tracking-[0.2em] text-sm">Parteien-Check</p>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-center mb-4">Können alle zustimmen?</h2>
          <p className="text-center text-ink-light/60 mb-6 max-w-2xl mx-auto">Simulierte Reaktion jeder Partei. Wo sie gewinnen. Wo sie Bauchschmerzen haben. Wie viel Zustimmung möglich ist.</p>

          {/* Approval overview */}
          <div className="bg-white rounded-2xl p-6 border border-parchment-dark mb-8">
            <p className="text-xs uppercase tracking-wider text-ink-light/40 mb-4">Zustimmungsgrad (simuliert)</p>
            <div className="space-y-3">
              {partyReactions.map(p => (
                <div key={p.party} className="flex items-center gap-4">
                  <span className="w-20 text-sm font-medium text-ink">{p.party}</span>
                  <div className="flex-1">
                    <ProgressBar value={p.approval} max={100} color={p.approval >= 70 ? 'bg-sage' : p.approval >= 50 ? 'bg-gold' : 'bg-accent'} />
                  </div>
                  <span className="w-12 text-right text-sm font-serif" style={{ color: p.approval >= 70 ? '#4A7C59' : p.approval >= 50 ? '#C4A265' : '#B85C38' }}>
                    {p.approval}%
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-parchment-dark">
              <p className="text-sm text-ink-light/60">
                <span className="text-sage font-medium">4 von 6 Parteien</span> über 50% Zustimmung. CDU/CSU + SPD + Grüne + FDP = verfassungsändernde Mehrheit möglich.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {partyReactions.map(p => (
              <div key={p.party} className="bg-white rounded-2xl p-5 border border-parchment-dark">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xl">{p.emoji}</span>
                  <div>
                    <h4 className="font-serif text-lg">{p.party}</h4>
                    <span className={`text-xs font-medium ${p.approval >= 70 ? 'text-sage' : p.approval >= 50 ? 'text-gold' : 'text-accent'}`}>
                      {p.approval}% Zustimmung
                    </span>
                  </div>
                </div>
                <p className="text-sm text-ink-light/70 italic mb-4">„{p.quote}"</p>
                <div className="mb-3">
                  <p className="text-xs uppercase tracking-wider text-sage/60 mb-1">Das bekommen sie</p>
                  {p.wins.map((w, i) => (
                    <div key={i} className="flex items-start gap-1.5 mb-1">
                      <CheckCircle className="w-3 h-3 text-sage mt-0.5 shrink-0" />
                      <span className="text-xs text-ink-light/70">{w}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-accent/60 mb-1">Bauchschmerzen</p>
                  {p.concerns.map((c, i) => (
                    <div key={i} className="flex items-start gap-1.5 mb-1">
                      <span className="text-xs text-accent mt-0.5 shrink-0">•</span>
                      <span className="text-xs text-ink-light/70">{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Voter Satisfaction Simulation */}
      <section id="waehler" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <MessageCircle className="w-5 h-5 text-gold" />
            <p className="text-gold uppercase tracking-[0.2em] text-sm">Wähler-Simulation</p>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-center mb-4">Sind die Menschen zufriedener?</h2>
          <p className="text-center text-ink-light/60 mb-6 max-w-2xl mx-auto">
            8 echte Wählerprofile. Was sie sich wünschen. Was sie bekommen. Ob es reicht.
          </p>

          {/* Overall satisfaction shift */}
          <div className="bg-ink rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-2 gap-8 mb-6">
              <div className="text-center">
                <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Zufriedenheit JETZT</p>
                <p className="text-5xl font-serif text-accent-light">{satisfactionSummary.currentAverage}%</p>
                <p className="text-white/30 text-xs mt-1">Durchschnitt aller 8 Profile</p>
              </div>
              <div className="text-center">
                <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Zufriedenheit NACH Reformen</p>
                <p className="text-5xl font-serif text-sage-light">{satisfactionSummary.afterAverage}%</p>
                <p className="text-white/30 text-xs mt-1">+{satisfactionSummary.afterAverage - satisfactionSummary.currentAverage} Punkte</p>
              </div>
            </div>
            <div className="bg-white/5 rounded-xl p-4">
              <p className="text-white/60 text-sm leading-relaxed">{satisfactionSummary.keyInsight}</p>
            </div>
          </div>

          {/* Satisfaction bars overview */}
          <div className="bg-parchment/50 rounded-2xl p-6 border border-parchment-dark mb-8">
            <p className="text-xs uppercase tracking-wider text-ink-light/40 mb-4">Vorher → Nachher pro Wählergruppe</p>
            <div className="space-y-4">
              {voters.map(v => (
                <div key={v.id} className="flex items-center gap-3">
                  <span className="text-xl w-8">{v.emoji}</span>
                  <span className="w-24 text-sm text-ink-light truncate">{v.name}, {v.age}</span>
                  <div className="flex-1 flex items-center gap-2">
                    <div className="flex-1 relative h-6">
                      {/* Before bar */}
                      <div className="absolute inset-y-0 left-0 bg-accent/20 rounded-full" style={{ width: `${v.currentSatisfaction}%` }}>
                        <span className="absolute right-1 top-1/2 -translate-y-1/2 text-[10px] text-accent font-medium">{v.currentSatisfaction}%</span>
                      </div>
                      {/* After bar */}
                      <div className="absolute inset-y-0 left-0 rounded-full border-2 border-sage" style={{ width: `${v.afterSatisfaction}%` }}>
                        <span className="absolute -right-8 top-1/2 -translate-y-1/2 text-xs text-sage font-serif font-medium">{v.afterSatisfaction}%</span>
                      </div>
                    </div>
                    <span className="text-xs text-sage w-12 text-right">+{v.afterSatisfaction - v.currentSatisfaction}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 mt-4 pt-3 border-t border-parchment-dark">
              <div className="flex items-center gap-2"><div className="w-4 h-3 bg-accent/20 rounded" /><span className="text-xs text-ink-light/50">Jetzt</span></div>
              <div className="flex items-center gap-2"><div className="w-4 h-3 border-2 border-sage rounded" /><span className="text-xs text-ink-light/50">Nach Reformen</span></div>
            </div>
          </div>

          {/* Expandable voter cards */}
          <div className="space-y-3">
            {voters.map(voter => {
              const isExpanded = expandedVoter === voter.id
              const delta = voter.afterSatisfaction - voter.currentSatisfaction
              return (
                <div key={voter.id} className="border border-parchment-dark rounded-2xl overflow-hidden bg-parchment/30 hover:border-gold/20 transition-colors">
                  <button
                    onClick={() => setExpandedVoter(isExpanded ? null : voter.id)}
                    className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{voter.emoji}</span>
                      <div>
                        <h3 className="font-serif text-lg text-ink">{voter.name}, {voter.age} — <span className="text-ink-light/60 font-sans text-sm">{voter.profile}</span></h3>
                        <div className="flex items-center gap-3 mt-1">
                          <span className="text-xs text-ink-light/40">{voter.location}</span>
                          <span className="text-xs text-ink-light/40">•</span>
                          <span className="text-xs text-ink-light/40">{voter.income}</span>
                          <span className="text-xs text-ink-light/40">•</span>
                          <span className="text-xs text-ink-light/40">Letzte Wahl: {voter.votedLast}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right hidden sm:block">
                        <span className={`text-sm font-serif ${delta >= 40 ? 'text-sage' : delta >= 20 ? 'text-gold' : 'text-accent'}`}>
                          +{delta} Punkte
                        </span>
                      </div>
                      {isExpanded ? <ChevronUp className="w-5 h-5 text-gold" /> : <ChevronDown className="w-5 h-5 text-ink-light/30" />}
                    </div>
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-6 space-y-5">
                      {/* Satisfaction shift visual */}
                      <div className="bg-white rounded-xl p-5 border border-parchment-dark">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs uppercase tracking-wider text-ink-light/40">Zufriedenheit</span>
                          <span className={`text-sm font-serif ${delta >= 40 ? 'text-sage' : delta >= 20 ? 'text-gold' : 'text-accent'}`}>
                            {voter.currentSatisfaction}% → {voter.afterSatisfaction}%
                          </span>
                        </div>
                        <div className="relative h-8 bg-parchment-dark rounded-full overflow-hidden">
                          <div className="absolute inset-y-0 left-0 bg-accent/30 rounded-full transition-all" style={{ width: `${voter.currentSatisfaction}%` }} />
                          <div className={`absolute inset-y-0 left-0 rounded-full transition-all ${voter.afterSatisfaction >= 70 ? 'bg-sage' : voter.afterSatisfaction >= 50 ? 'bg-gold' : 'bg-accent'}`} style={{ width: `${voter.afterSatisfaction}%` }} />
                        </div>
                      </div>

                      {/* What worries them */}
                      <div>
                        <p className="text-xs uppercase tracking-wider text-accent/70 mb-2 font-medium">Was ihn/sie nachts wachhält</p>
                        <div className="space-y-1.5">
                          {voter.topWorries.map((w, i) => (
                            <p key={i} className="text-sm text-ink-light/70 flex items-start gap-2">
                              <span className="text-accent shrink-0">•</span>{w}
                            </p>
                          ))}
                        </div>
                      </div>

                      {/* What they get — checklist */}
                      <div>
                        <p className="text-xs uppercase tracking-wider text-sage/70 mb-2 font-medium">Was die Reformen liefern</p>
                        <div className="space-y-2">
                          {voter.whatTheyGet.map((g, i) => (
                            <div key={i} className={`flex items-start gap-3 p-2 rounded-lg ${g.delivered ? 'bg-sage/5' : 'bg-accent/5'}`}>
                              {g.delivered
                                ? <CheckCircle className="w-4 h-4 text-sage mt-0.5 shrink-0" />
                                : <X className="w-4 h-4 text-accent/50 mt-0.5 shrink-0" />}
                              <div className="flex-1">
                                <span className="text-sm text-ink-light">{g.item}</span>
                                <span className="text-xs text-ink-light/40 ml-2">— {g.note}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Remaining frustration */}
                      <div className="bg-gold/5 rounded-xl p-4 border border-gold/10">
                        <p className="text-xs uppercase tracking-wider text-gold/70 mb-2 font-medium">Was noch fehlt / frustriert</p>
                        <p className="text-sm text-ink-light/70 leading-relaxed">{voter.remainingFrustration}</p>
                      </div>

                      {/* How to win them */}
                      <div className="bg-sage/5 rounded-xl p-4 border border-sage/10">
                        <p className="text-xs uppercase tracking-wider text-sage/70 mb-2 font-medium">So gewinnen wir sie</p>
                        <p className="text-sm text-ink-light/70 leading-relaxed">{voter.howToWinThem}</p>
                      </div>

                      {/* Quote */}
                      <div className="bg-ink rounded-xl p-5">
                        <p className="text-white/70 text-sm italic leading-relaxed">„{voter.quote}"</p>
                        <p className="text-white/30 text-xs mt-2">— {voter.name}, {voter.age}, {voter.location}</p>
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Can we make everyone happy? */}
          <div className="mt-12 bg-ink rounded-2xl p-8">
            <h3 className="font-serif text-2xl text-white mb-4 text-center">Können wir alle glücklich machen?</h3>
            <p className="text-white/60 text-sm leading-relaxed mb-6">{satisfactionSummary.canWeGetEveryone}</p>
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="bg-sage/10 rounded-xl p-4 text-center">
                <p className="text-3xl font-serif text-sage-light mb-1">6/8</p>
                <p className="text-white/40 text-xs">Wählergruppen über 60%</p>
              </div>
              <div className="bg-gold/10 rounded-xl p-4 text-center">
                <p className="text-3xl font-serif text-gold mb-1">+42</p>
                <p className="text-white/40 text-xs">Punkte durchschnittlicher Anstieg</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-3xl font-serif text-white/70 mb-1">0/8</p>
                <p className="text-white/40 text-xs">Wählergruppen die verlieren</p>
              </div>
            </div>
            <p className="text-white/40 text-xs mt-6 text-center">Niemand wird schlechter gestellt. Jeder gewinnt etwas. Aber nicht jeder bekommt alles, was er will. Das ist Demokratie.</p>
          </div>
        </div>
      </section>

      {/* Generation Impact — For You */}
      <section id="generationen" className="py-24 px-6 bg-parchment">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Sparkles className="w-5 h-5 text-gold" />
            <p className="text-gold uppercase tracking-[0.2em] text-sm">Für dich</p>
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl text-center mb-4">Was ändert sich in deinem Leben?</h2>
          <p className="text-center text-ink-light/60 mb-16 max-w-xl mx-auto">Finde dich wieder. Kurzfristig, langfristig, lebenslang.</p>

          <div className="space-y-6">
            {generationImpact.map((person, i) => (
              <div key={i} className="bg-parchment/50 rounded-2xl p-6 border border-parchment-dark">
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-4xl">{person.emoji}</span>
                  <div>
                    <h3 className="font-serif text-xl text-ink">{person.name}</h3>
                    <p className="text-sm text-ink-light/50">{person.label}</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="bg-gold/5 rounded-xl p-4 border border-gold/10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                      <p className="text-xs uppercase tracking-wider text-gold/70 font-medium">Sofort</p>
                    </div>
                    <p className="text-sm text-ink-light leading-relaxed">{person.shortTerm}</p>
                  </div>
                  <div className="bg-sage/5 rounded-xl p-4 border border-sage/10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-sage" />
                      <p className="text-xs uppercase tracking-wider text-sage/70 font-medium">In 5 Jahren</p>
                    </div>
                    <p className="text-sm text-ink-light leading-relaxed">{person.longTerm}</p>
                  </div>
                  <div className="bg-sky/5 rounded-xl p-4 border border-sky/10">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2 h-2 rounded-full bg-sky" />
                      <p className="text-xs uppercase tracking-wider text-sky/70 font-medium">Lebenslang</p>
                    </div>
                    <p className="text-sm text-ink-light leading-relaxed">{person.lifetime}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Vision */}
      <section className="py-24 px-6 bg-gradient-to-b from-ink to-ink-light text-center">
        <div className="max-w-3xl mx-auto">
          <Heart className="w-12 h-12 text-gold mx-auto mb-8" />
          <h2 className="font-serif text-4xl sm:text-5xl text-white mb-6 leading-tight">
            Keine Utopie.<br />
            <span className="text-gold">Jedes Element existiert bereits.</span>
          </h2>
          <p className="text-xl text-white/60 leading-relaxed mb-4">
            Japans Ernährungsbildung. Finnlands Prävention. Taiwans Krankenversicherung.
            Estlands Digitalisierung. Schweizer Tierschutz. Dänemarks Mut.
          </p>
          <p className="text-lg text-white/40 mb-8">
            Wir müssen es nur zusammensetzen.
          </p>

          <div className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10 mb-12 max-w-lg mx-auto">
            <p className="text-white/40 text-xs uppercase tracking-wider mb-4">Die Gesamtrechnung</p>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-white/60">Investition</span>
                <span className="text-accent-light font-serif">€23 Mrd./Jahr</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/60">Ersparnis</span>
                <span className="text-sage-light font-serif">€91 Mrd./Jahr</span>
              </div>
              <div className="border-t border-white/10 pt-3 flex justify-between">
                <span className="text-white font-medium">Netto-Gewinn für Deutschland</span>
                <span className="text-gold font-serif text-xl">+€68 Mrd.</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-3xl mb-12">
            {["🇯🇵","🇫🇮","🇹🇼","🇪🇪","🇨🇭","🇩🇰","🇵🇹","🇸🇬","🇨🇺","🇬🇧","🇮🇸","🇸🇪"].map((flag, i) => (
              <span key={i} className="hover:scale-125 transition-transform cursor-default">{flag}</span>
            ))}
          </div>

          <p className="text-white/30 text-sm max-w-md mx-auto">
            4 von 6 Parteien können zustimmen. Die verfassungsändernde Mehrheit ist erreichbar. Der Weg ist klar. Die Rechnung geht auf. Es fehlt nur der Wille.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-ink text-center">
        <p className="text-white/30 text-sm">Deutschland 2030 — Ein Manifest für die Zukunft</p>
        <p className="text-white/20 text-xs mt-2">
          Basierend auf simulierten Bundestagsdebatten und internationaler Politikanalyse.
          Alle Zahlen aus öffentlichen Quellen (OECD, WHO, Bundestag, DIW, IW Köln).
        </p>
        <p className="text-white/10 text-xs mt-4">Gebaut mit Überzeugung. Open Source.</p>
      </footer>
    </div>
  )
}

export default App
