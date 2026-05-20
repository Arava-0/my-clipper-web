import { useState, useEffect } from 'react'
import { Download } from 'lucide-react'
import Logo from './Logo'
import GithubIcon from './GithubIcon'
import { useLang } from '../context/LangContext'

export default function Navbar({ release }) {
  const [scrolled, setScrolled] = useState(false)
  const { lang, setLang, t } = useLang()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#07070a]/85 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2.5 group">
          <Logo size={28} />
          <span className="font-bold text-white text-sm tracking-tight">My Clipper</span>
        </a>

        <div className="flex items-center gap-1">
          {/* Language switcher */}
          <div className="flex items-center mr-2">
            {['en', 'fr'].map((l, i) => (
              <span key={l} className="flex items-center">
                {i > 0 && <span className="text-white/15 text-xs mx-0.5">/</span>}
                <button
                  onClick={() => setLang(l)}
                  className={`px-1.5 py-1 text-xs font-semibold rounded transition-colors uppercase tracking-wide ${
                    lang === l ? 'text-white' : 'text-white/30 hover:text-white/60'
                  }`}
                >
                  {l}
                </button>
              </span>
            ))}
          </div>

          <a
            href="https://github.com/Arava-0/my-clipper"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-white/50 hover:text-white/90 transition-colors px-3 py-2 rounded-lg hover:bg-white/5"
          >
            <GithubIcon size={16} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href={release?.downloadUrl ?? 'https://github.com/Arava-0/my-clipper/releases/latest'}
            className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-all duration-200 shadow-lg shadow-red-600/20 hover:shadow-red-500/30"
          >
            <Download size={14} />
            {t.nav.download}
          </a>
        </div>
      </div>
    </nav>
  )
}
