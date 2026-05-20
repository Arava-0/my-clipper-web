import { Download as DownloadIcon, Monitor, Shield, Zap } from 'lucide-react'
import GithubIcon from './GithubIcon'
import { useLang } from '../context/LangContext'

export default function Download({ release, loading }) {
  const { t } = useLang()
  const d = t.download

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-600/4 to-transparent pointer-events-none" />
      <div className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[900px] h-[400px] bg-red-600/6 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative">
        <div className="inline-flex items-center gap-2 glass border border-white/8 text-white/45 text-xs font-medium px-4 py-2 rounded-full mb-10">
          <Monitor size={12} />
          {d.platform}
        </div>

        <h2 className="text-[clamp(2.5rem,7vw,4.5rem)] font-black text-white mb-5 tracking-tight leading-tight">
          {d.headline}
        </h2>

        <p className="text-white/40 text-lg mb-12 max-w-md mx-auto">{d.subtitle}</p>

        <div className="flex flex-col items-center gap-4 mb-12">
          <a
            href={release?.downloadUrl ?? 'https://github.com/Arava-0/my-clipper/releases/latest'}
            className="flex items-center gap-3 bg-red-600 hover:bg-red-500 text-white font-black px-12 py-5 rounded-2xl text-xl transition-all duration-200 hover:scale-[1.03] glow-red glow-red-hover"
          >
            <DownloadIcon size={24} strokeWidth={2.5} />
            {d.cta}
          </a>

          <div className="flex items-center gap-6 text-xs text-white/30 mt-2">
            <div className="flex items-center gap-1.5">
              <Shield size={12} className="text-white/25" />
              {d.trust1}
            </div>
            <div className="flex items-center gap-1.5">
              <Zap size={12} className="text-white/25" />
              {d.trust2}
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 text-sm text-white/25 flex-wrap">
          <span className="font-mono">{loading ? '…' : release?.version}</span>
          <span>·</span>
          <a
            href="https://github.com/Arava-0/my-clipper"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white/50 transition-colors"
          >
            <GithubIcon size={13} />
            {d.openSource}
          </a>
          <span>·</span>
          <span>{d.license}</span>
        </div>
      </div>
    </section>
  )
}
