import { FolderOpen, SlidersHorizontal, Download } from 'lucide-react'
import { useLang } from '../context/LangContext'

const STEP_ICONS = [FolderOpen, SlidersHorizontal, Download]

export default function HowItWorks() {
  const { t } = useLang()
  const h = t.howItWorks

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-red-600/4 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <div className="text-center mb-20">
          <p className="text-red-500 text-xs font-bold uppercase tracking-[0.2em] mb-4">{h.label}</p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            {h.headline1}<br />{h.headline2}
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-[2.5rem] left-[calc(16.66%+2rem)] right-[calc(16.66%+2rem)] h-px">
            <div className="h-full bg-gradient-to-r from-red-600/20 via-red-600/40 to-red-600/20" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {h.steps.map((step, i) => {
              const Icon = STEP_ICONS[i]
              return (
                <div key={i} className="flex flex-col items-center text-center">
                  <div className="relative mb-7">
                    <div className="w-20 h-20 glass rounded-2xl flex items-center justify-center border border-white/8 relative z-10">
                      <Icon size={26} className="text-red-400" strokeWidth={1.75} />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-600 rounded-full flex items-center justify-center text-[11px] font-black text-white z-20 shadow-lg shadow-red-600/30">
                      {i + 1}
                    </div>
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3 tracking-tight">{step.title}</h3>
                  <p className="text-white/38 text-sm leading-relaxed max-w-xs mx-auto">{step.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
