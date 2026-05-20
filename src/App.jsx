import { LangProvider } from './context/LangContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Stats from './components/Stats'
import Download from './components/Download'
import Footer from './components/Footer'
import { useLatestRelease } from './hooks/useLatestRelease'

function Site() {
  const { release, loading } = useLatestRelease()
  return (
    <div className="min-h-screen bg-[#07070a] overflow-x-hidden">
      <Navbar release={release} />
      <Hero release={release} loading={loading} />
      <Features />
      <HowItWorks />
      <Stats />
      <Download release={release} loading={loading} />
      <Footer />
    </div>
  )
}

export default function App() {
  return (
    <LangProvider>
      <Site />
    </LangProvider>
  )
}
