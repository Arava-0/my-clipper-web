import { Heart } from 'lucide-react'
import GithubIcon from './GithubIcon'
import Logo from './Logo'
import { useLang } from '../context/LangContext'

export default function Footer() {
  const { t } = useLang()

  return (
    <footer className="border-t border-white/[0.05] py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <a href="/" className="flex items-center gap-2 group">
          <Logo size={22} />
          <span className="text-white/45 text-sm font-semibold">My Clipper</span>
        </a>

        <p className="text-white/20 text-xs flex items-center gap-1.5">
          {t.footer.madeWith}
          <Heart size={11} className="text-red-600/70 fill-red-600/70" />
          {t.footer.by} <span className="text-white/35 font-medium ml-1">DBY FLY</span>
        </p>

        <a
          href="https://github.com/Arava-0/my-clipper"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white/25 hover:text-white/55 transition-colors text-sm"
        >
          <GithubIcon size={14} />
          GitHub
        </a>
      </div>
    </footer>
  )
}
