import { useState } from 'react'
import { reforms, principles, stats } from './data/manifesto'
import { ChevronDown, ChevronUp, Globe, Heart, Users, ArrowRight } from 'lucide-react'
import './index.css'

function App() {
  const [expandedReform, setExpandedReform] = useState<string | null>(null)

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-b from-ink to-ink-light overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gold blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-sage blur-[100px]" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto">
          <p className="text-gold uppercase tracking-[0.3em] text-sm mb-6 font-medium">Manifest</p>
          <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-white leading-[1.1] mb-8">
            Deutschland<br />
            <span className="text-gold">2030</span>
          </h1>
          <p className="text-xl sm:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed mb-4">
            Das Beste aus 12 Ländern. 9 Reformen. Eine Vision.
          </p>
          <p className="text-lg text-white/50 max-w-xl mx-auto mb-12">
            Investiere in Menschen, nicht in Reparaturen.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-16">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-serif text-gold mb-1">{s.value}</div>
                <div className="text-xs text-white/50 uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </div>
          <a href="#prinzipien" className="inline-flex items-center gap-2 text-gold hover:text-gold-light transition-colors">
            <span>Weiterlesen</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </header>

      {/* Principles */}
      <section id="prinzipien" className="py-24 px-6 bg-parchment">
        <div className="max-w-5xl mx-auto">
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4 text-center">Unsere Grundsätze</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-center mb-16">6 Prinzipien</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* Reforms */}
      <section id="reformen" className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-gold uppercase tracking-[0.2em] text-sm mb-4 text-center">Die Reformen</p>
          <h2 className="font-serif text-4xl sm:text-5xl text-center mb-6">9 Bereiche, die alles ändern</h2>
          <p className="text-center text-ink-light/60 mb-16 max-w-2xl mx-auto">
            Jede Reform zeigt: das Problem, die Lösung, wer es besser macht — und eine echte Geschichte.
          </p>

          <div className="space-y-4">
            {reforms.map(reform => {
              const isExpanded = expandedReform === reform.id
              return (
                <div key={reform.id} className="border border-parchment-dark rounded-2xl overflow-hidden bg-parchment/50 hover:bg-parchment transition-colors">
                  <button
                    onClick={() => setExpandedReform(isExpanded ? null : reform.id)}
                    className="w-full flex items-center justify-between p-6 text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-3xl">{reform.emoji}</span>
                      <div>
                        <h3 className="font-serif text-xl text-ink">{reform.title}</h3>
                        <p className="text-sm text-ink-light/60">{reform.subtitle}</p>
                      </div>
                    </div>
                    {isExpanded ? <ChevronUp className="w-5 h-5 text-gold" /> : <ChevronDown className="w-5 h-5 text-ink-light/40" />}
                  </button>

                  {isExpanded && (
                    <div className="px-6 pb-8 space-y-8">
                      {/* Problem */}
                      <div className="bg-accent/5 rounded-xl p-6 border border-accent/10">
                        <p className="text-xs uppercase tracking-wider text-accent mb-2 font-medium">Das Problem</p>
                        <p className="text-ink-light leading-relaxed">{reform.problem}</p>
                      </div>

                      {/* Solution */}
                      <div>
                        <p className="text-xs uppercase tracking-wider text-sage mb-3 font-medium">Die Lösung</p>
                        <ul className="space-y-2">
                          {reform.solution.map((s, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <ArrowRight className="w-4 h-4 text-sage mt-0.5 shrink-0" />
                              <span className="text-ink-light leading-relaxed">{s}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Worldwide */}
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Globe className="w-4 h-4 text-sky" />
                          <p className="text-xs uppercase tracking-wider text-sky font-medium">Was andere besser machen</p>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {reform.worldwide.map((w, i) => (
                            <div key={i} className="bg-sky/5 rounded-xl p-4 border border-sky/10">
                              <p className="font-medium text-ink mb-1">{w.flag} {w.country}</p>
                              <p className="text-sm text-ink-light/70 leading-relaxed">{w.lesson}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Story */}
                      <div className="bg-gold/5 rounded-xl p-6 border border-gold/10">
                        <div className="flex items-center gap-2 mb-3">
                          <Users className="w-4 h-4 text-gold" />
                          <p className="text-xs uppercase tracking-wider text-gold font-medium">Echte Geschichte</p>
                        </div>
                        <p className="font-serif text-lg text-ink mb-2">{reform.story.name}, {reform.story.age} — {reform.story.role}</p>
                        <div className="grid sm:grid-cols-2 gap-4 mt-4">
                          <div>
                            <p className="text-xs uppercase tracking-wider text-ink-light/40 mb-1">Vorher</p>
                            <p className="text-ink-light">{reform.story.before}</p>
                          </div>
                          <div>
                            <p className="text-xs uppercase tracking-wider text-sage mb-1">Nachher</p>
                            <p className="text-ink-light">{reform.story.after}</p>
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

      {/* CTA / Vision */}
      <section className="py-24 px-6 bg-gradient-to-b from-ink to-ink-light text-center">
        <div className="max-w-3xl mx-auto">
          <Heart className="w-12 h-12 text-gold mx-auto mb-8" />
          <h2 className="font-serif text-4xl sm:text-5xl text-white mb-8 leading-tight">
            Keine Utopie.<br />
            <span className="text-gold">Jedes Element existiert bereits.</span>
          </h2>
          <p className="text-xl text-white/60 leading-relaxed mb-6">
            Japans Ernährungsbildung. Finnlands Prävention. Taiwans Krankenversicherung.
            Estlands Digitalisierung. Schweizer Tierschutz. Dänemarks Mut.
          </p>
          <p className="text-lg text-white/40 mb-12">
            Wir müssen es nur zusammensetzen.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-3xl">
            {["🇯🇵","🇫🇮","🇹🇼","🇪🇪","🇨🇭","🇩🇰","🇵🇹","🇸🇬","🇨🇺","🇬🇧","🇮🇸","🇸🇪"].map((flag, i) => (
              <span key={i} className="hover:scale-125 transition-transform cursor-default">{flag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-ink text-center">
        <p className="text-white/30 text-sm">
          Deutschland 2030 — Ein Manifest für die Zukunft
        </p>
        <p className="text-white/20 text-xs mt-2">
          Basierend auf simulierten Bundestagsdebatten und internationaler Politikanalyse. Alle Zahlen aus öffentlichen Quellen (OECD, WHO, Bundestag).
        </p>
      </footer>
    </div>
  )
}

export default App
