"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Brain } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import LanguageSwitcher from "./language-switcher"

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)
  const { t, dir } = useLanguage()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  const navItems = [
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.skills"), href: "#skills" },
    { name: t("nav.projects"), href: "#projects" },
    { name: t("nav.experience"), href: "#experience" },
    { name: t("nav.volunteer"), href: "#volunteer" },
    { name: t("nav.contact"), href: "#contact" },
  ]

  return (
    <div className="md:hidden">
      <button
        onClick={toggleMenu}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm"
          >
            <div className="flex h-full flex-col">
              <div className={`flex items-center justify-between p-4 ${dir === "rtl" ? "flex-row-reverse" : ""}`}>
                <Link href="#" className="flex items-center" onClick={closeMenu}>
                  <Brain className={`h-6 w-6 text-primary ${dir === "rtl" ? "ml-2" : "mr-2"}`} />
                  <span className="text-xl font-bold text-foreground">{t("hero.title")}</span>
                </Link>
                <button
                  onClick={closeMenu}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-foreground hover:bg-secondary/80 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <nav className="flex flex-col items-center justify-center flex-1 space-y-6 p-4">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                    href={item.href}
                    className="text-2xl font-medium text-foreground hover:text-primary transition-colors"
                    onClick={closeMenu}
                  >
                    {item.name}
                  </Link>
                  </motion.div>
                ))}
                <div className="mt-6 flex items-center justify-center">
                  <LanguageSwitcher />
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

