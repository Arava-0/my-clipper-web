import { useLang } from '../context/LangContext'

export default function Stats() {
  const { t } = useLang()

  return (
    <section className="relative py-16 px-6">
      <div className="absolute inset-0 border-y border-white/[0.05] pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-600/3 to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {t.stats.map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-gradient-red mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-white/35 text-sm font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
