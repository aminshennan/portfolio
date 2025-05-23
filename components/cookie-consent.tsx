"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const { t, dir } = useLanguage()

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent")

    if (!hasConsented) {
      // Show the banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "true")
    setIsVisible(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "false")
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gray-900/95 backdrop-blur-md border-t border-gray-800"
        >
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="text-white text-sm md:text-base">
                <p>
                  {t("I use cookies to enhance your experience") ||
                    "This website uses cookies to enhance your browsing experience. By continuing to use this site, you consent to our use of cookies."}
                </p>
              </div>
              <div className={`flex gap-3 ${dir === "rtl" ? "flex-row-reverse" : ""}`}>
                <Button
                  variant="outline"
                  onClick={declineCookies}
                  className="text-gray-300 border-gray-700 hover:bg-gray-800 hover:text-white"
                >
                  {t("Decline") || "Decline"}
                </Button>
                <Button onClick={acceptCookies} className="bg-cyan-500 hover:bg-cyan-600 text-black">
                  {t("Accept") || "Accept"}
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

