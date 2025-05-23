"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp, Mail, Menu, X } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const { t, dir } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }

      // Determine active section
      const sections = ["about", "skills", "projects", "experience", "volunteer", "contact"]
      let currentSection = ""

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section
            break
          }
        }
      }

      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const navItems = [
    { name: t("nav.about"), href: "#about", id: "about" },
    { name: t("nav.skills"), href: "#skills", id: "skills" },
    { name: t("nav.projects"), href: "#projects", id: "projects" },
    { name: t("nav.experience"), href: "#experience", id: "experience" },
    { name: t("nav.volunteer"), href: "#volunteer", id: "volunteer" },
    { name: t("nav.contact"), href: "#contact", id: "contact" },
  ]

  // Adjust positioning based on language direction
  const positionClass = dir === "rtl" ? "left-6" : "right-6"

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`fixed bottom-6 ${positionClass} z-50 flex flex-col gap-3`}
          >
            <motion.button
              onClick={scrollToTop}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500 text-black shadow-lg hover:bg-cyan-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Scroll to top"
            >
              <ChevronUp className="h-6 w-6" />
            </motion.button>

            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-800 text-white shadow-lg hover:bg-gray-700 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>

            <motion.a
              href="#contact"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-500 text-white shadow-lg hover:bg-pink-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Contact me"
            >
              <Mail className="h-6 w-6" />
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className={`fixed bottom-24 ${positionClass} z-50 bg-gray-900/90 backdrop-blur-md rounded-lg shadow-xl border border-gray-800 p-4 w-48`}
          >
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-gray-300 hover:text-cyan-400 transition-colors py-2 px-4 rounded hover:bg-gray-800 ${
                    activeSection === item.id ? "text-cyan-400 bg-gray-800/50" : ""
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className={`h-1 w-1 rounded-full bg-cyan-400 ${dir === "rtl" ? "float-left mr-2" : "float-right ml-2"}`}
                    />
                  )}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

