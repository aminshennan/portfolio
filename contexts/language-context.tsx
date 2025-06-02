"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations } from "@/lib/translations"

type LanguageContextType = {
  language: string
  setLanguage: (lang: string) => void
  t: (key: string) => any
  dir: string
  isLoaded: boolean
}

// Export the LanguageContext so it can be imported elsewhere
export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: () => "",
  dir: "ltr",
  isLoaded: false,
})

export const useLanguage = () => useContext(LanguageContext)

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState("en")
  const [dir, setDir] = useState("ltr")
  const [isLoaded, setIsLoaded] = useState(false)

  // Function to get nested translations using dot notation
  const t = (key: string) => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        // Return fallback to prevent undefined errors during hydration
        console.warn(`Translation key "${key}" not found for language "${language}"`)
        return key // Return the key if translation not found
      }
    }

    return value
  }

  // Load saved language preference on initial load - run only on client
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem("language")
      if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ar")) {
        setLanguage(savedLanguage)
      }
      setIsLoaded(true)
    }
  }, [])

  // Update document direction when language changes
  useEffect(() => {
    if (typeof window !== 'undefined' && isLoaded) {
      setDir(language === "ar" ? "rtl" : "ltr")
      document.documentElement.dir = language === "ar" ? "rtl" : "ltr"
      document.documentElement.lang = language

      // Add a class to the body for additional RTL styling
      if (language === "ar") {
        document.body.classList.add("rtl")
      } else {
        document.body.classList.remove("rtl")
      }

      // Store language preference
      localStorage.setItem("language", language)
    }
  }, [language, isLoaded])

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir, isLoaded }}>
      {children}
    </LanguageContext.Provider>
  )
}

