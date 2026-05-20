import { createContext, useContext, useState } from 'react'
import { translations } from '../i18n/translations'

const LangContext = createContext()

function getInitialLang() {
  try {
    const stored = localStorage.getItem('lang')
    if (stored === 'en' || stored === 'fr') return stored
  } catch {}
  return navigator.language.startsWith('fr') ? 'fr' : 'en'
}

export function LangProvider({ children }) {
  const [lang, setLangState] = useState(getInitialLang)

  function setLang(newLang) {
    setLangState(newLang)
    try { localStorage.setItem('lang', newLang) } catch {}
  }

  return (
    <LangContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)
