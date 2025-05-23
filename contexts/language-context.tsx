"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations } from "@/lib/translations"

type LanguageContextType = {
  language: string
  setLanguage: (lang: string) => void
  t: (key: string) => any
  dir: string
}

// Export the LanguageContext so it can be imported elsewhere
export const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: () => "",
  dir: "ltr",
})

export const useLanguage = () => useContext(LanguageContext)

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState("en")
  const [dir, setDir] = useState("ltr")

  // Function to get nested translations using dot notation
  const t = (key: string) => {
    const keys = key.split(".")
    let value: any = translations[language]

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        return key // Return the key if translation not found
      }
    }

    return value
  }

  // Update document direction when language changes
  useEffect(() => {
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
  }, [language])

  // Load saved language preference on initial load
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ar")) {
      setLanguage(savedLanguage)
    }
  }, [])

  return <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>{children}</LanguageContext.Provider>
}

