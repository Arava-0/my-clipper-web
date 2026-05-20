import { Zap, Shield, MousePointerClick, Film, Clock, RefreshCw } from 'lucide-react'
import { useLang } from '../context/LangContext'

const FEATURE_META = [
  { icon: Zap,              accent: 'text-yellow-400', bg: 'bg-yellow-400/8', border: 'border-yellow-400/10' },
  { icon: Shield,           accent: 'text-red-400',    bg: 'bg-red-400/8',    border: 'border-red-400/10'    },
  { icon: MousePointerClick,accent: 'text-sky-400',    bg: 'bg-sky-400/8',    border: 'border-sky-400/10'    },
  { icon: Film,             accent: 'text-violet-400', bg: 'bg-violet-400/8', border: 'border-violet-400/10' },
  { icon: Clock,            accent: 'text-emerald-400',bg: 'bg-emerald-400/8',border: 'border-emerald-400/10'},
  { icon: RefreshCw,        accent: 'text-orange-400', bg: 'bg-orange-400/8', border: 'border-orange-400/10' },
]

export default function Features() {
  const { t } = useLang()
  const f = t.features

  return (
    <section className="py-32 px-6 relative">
      <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-red-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">{f.label}</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 tracking-tight">
            {f.headline1}<br />{f.headline2}
          </h2>
          <p className="text-white/35 text-lg max-w-md mx-auto">{f.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {FEATURE_META.map((meta, i) => {
            const item = f.items[i]
            return (
              <div key={i} className="glass-card rounded-2xl p-6 cursor-default">
                <div className={`w-10 h-10 ${meta.bg} border ${meta.border} rounded-xl flex items-center justify-center mb-5`}>
                  <meta.icon size={19} className={meta.accent} strokeWidth={2} />
                </div>
                <h3 className="text-white font-semibold text-base mb-2 tracking-tight">{item.title}</h3>
                <p className="text-white/38 text-sm leading-relaxed">{item.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
