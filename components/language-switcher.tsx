"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import { Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function LanguageSwitcher() {
  const { language, setLanguage, t, dir } = useLanguage()
  const [isChanging, setIsChanging] = useState(false)

  const handleLanguageToggle = () => {
    const newLanguage = language === "en" ? "ar" : "en"
    setIsChanging(true)

    // Add a small delay to make the transition smoother
    setTimeout(() => {
      setLanguage(newLanguage)
      setIsChanging(false)
    }, 300)
  }

  return (
    <div className="relative">
      {isChanging && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-full z-10 flex items-center justify-center"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="w-4 h-4 border-2 border-t-2 border-cyan-500 rounded-full"
          />
        </motion.div>
      )}

      <Button
        onClick={handleLanguageToggle}
        variant="ghost"
        size="sm"
        className="relative rounded-full px-3 py-2 bg-gray-800/50 hover:bg-gray-700/50 border border-primary/30 shadow-[0_0_15px_rgba(14,165,233,0.3)] transition-all duration-300 hover:shadow-[0_0_20px_rgba(14,165,233,0.5)]"
        aria-label="Switch language"
      >
        <div className="flex items-center space-x-2">
          <Globe className="h-4 w-4 text-primary" />
          <span className="text-xs font-medium">
            {language === "en" ? "EN" : "ع"}
          </span>
          <motion.div 
            initial={false}
            animate={{ 
              x: language === "en" ? 0 : 22,
              backgroundColor: language === "en" ? "#06b6d4" : "#ec4899" 
            }}
            className="absolute left-1 top-1/2 -translate-y-1/2 h-full w-5 bg-primary rounded-full opacity-20"
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          />
        </div>
      </Button>
    </div>
  )
}

