import { Download, ChevronDown } from 'lucide-react'
import GithubIcon from './GithubIcon'
import AppMockup from './AppMockup'
import { useLang } from '../context/LangContext'

export default function Hero({ release, loading }) {
  const { t } = useLang()
  const h = t.hero

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 pb-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-grid" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#07070a] to-transparent pointer-events-none z-10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-red-600/8 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-10 right-[-10%] w-[500px] h-[500px] bg-red-800/5 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] bg-red-900/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 text-center w-full">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-red-600/10 border border-red-600/25 text-red-400 text-xs font-semibold px-4 py-2 rounded-full mb-8">
          <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse-slow" />
          {loading ? '…' : `${release?.version} · ${h.badge}`}
        </div>

        {/* Headline */}
        <h1 className="text-[clamp(2.5rem,8vw,5.5rem)] font-black text-white leading-[1.05] mb-6 tracking-tight">
          {h.headline1}{' '}
          <span className="text-gradient-red">{h.headline2}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/45 max-w-2xl mx-auto mb-10 leading-relaxed">
          {h.subtitle}{' '}
          <span className="text-white/70 font-medium">{h.subtitleBold}</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a
            href={release?.downloadUrl ?? 'https://github.com/Arava-0/my-clipper/releases/latest'}
            className="flex items-center gap-3 bg-red-600 hover:bg-red-500 text-white font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:scale-[1.03] glow-red glow-red-hover"
          >
            <Download size={18} strokeWidth={2.5} />
            {h.cta}
            <span className="text-red-200/60 text-sm font-normal hidden sm:inline">{h.ctaFree}</span>
          </a>
          <a
            href="https://github.com/Arava-0/my-clipper"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 glass hover:bg-white/[0.04] text-white/70 hover:text-white font-medium px-8 py-4 rounded-xl text-base transition-all duration-200"
          >
            <GithubIcon size={18} />
            {h.github}
          </a>
        </div>

        {/* App mockup */}
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-red-600/10 blur-[50px] rounded-full pointer-events-none" />
          <AppMockup />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20 animate-bounce">
        <ChevronDown size={22} />
      </div>
    </section>
  )
}
