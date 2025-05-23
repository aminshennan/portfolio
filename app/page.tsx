"use client"

import type React from "react"
import { Suspense, lazy } from "react"
import dynamic from 'next/dynamic'
import Link from "next/link"
import { motion } from "framer-motion"
import { Brain } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import ErrorBoundary from "@/components/error-boundary"
import SmoothScroll from "@/components/smooth-scroll"
import { useTheme } from "@/components/ui/use-theme"
import PageTransition from "@/components/page-transition"
import MobileMenu from "@/components/mobile-menu"
import CookieConsent from "@/components/cookie-consent"
import KeyboardShortcuts from "@/components/keyboard-shortcuts"
import { HeroSection } from "@/components/sections/HeroSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { SkillsSection } from "@/components/sections/SkillsSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { ExperienceSection } from "@/components/sections/ExperienceSection"
import { VolunteerSection } from "@/components/sections/VolunteerSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { FooterSection } from "@/components/sections/FooterSection"

// Dynamic imports for global components
const ScrollProgress = dynamic(() => import('@/components/scroll-progress'), { 
  ssr: false,
  loading: () => <div className="h-1 bg-muted/20" />
})
const FloatingNav = dynamic(() => import('@/components/floating-nav'), {
  ssr: false,
  loading: () => <div className="h-16 bg-background/30 backdrop-blur-sm" />
})
const LanguageSwitcher = dynamic(() => import('@/components/language-switcher'), {
  loading: () => <div className="h-8 w-8 bg-muted/20 rounded-full animate-pulse" />
})

export default function Home() {
  const { t, dir } = useLanguage()

  // Moved defaultTitle/Role to translations or kept if dynamic
  const defaultTitle = t("hero.title")
  const defaultRole = t("hero.subtitle") // Assuming subtitle is the main role displayed

  return (
    <>
      <PageTransition>
        <ErrorBoundary>
          <SmoothScroll />
          <KeyboardShortcuts />
          <div
            className={`flex flex-col min-h-screen bg-gradient-dark text-foreground overflow-x-hidden transition-colors duration-300 ${dir === "rtl" ? "font-arabic" : "font-sans"}`}
          >
            <ScrollProgress />
            <FloatingNav />

            <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-md bg-background/80 sticky top-0 z-40 border-b border-cyan-900/20 shadow-md transition-colors duration-300">
              <Link className="flex items-center justify-center group" href="#hero">
                <motion.div
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                  className={`${dir === "rtl" ? "ml-2" : "mr-2"} group-hover:scale-110 transition-transform duration-200`}
                >
                  <Brain className="h-6 w-6 text-primary" aria-hidden="true" />
                </motion.div>
                <span className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                  {t("hero.title")}
                </span>
              </Link>
            
              <div className="hidden md:flex ml-auto mr-4 items-center space-x-6">
                <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">{t("nav.about")}</Link>
                <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">{t("nav.skills")}</Link>
                <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">{t("nav.projects")}</Link>
                <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">{t("nav.experience")}</Link>
                <Link href="#volunteer" className="text-sm font-medium hover:text-primary transition-colors">{t("nav.volunteer")}</Link>
                <Link href="#contact" className="text-sm font-medium hover:bg-primary/90 hover:text-background px-3 py-1.5 rounded-md border border-primary/30 transition-colors">{t("nav.contact")}</Link>
              </div>
          
              <div className="ml-auto flex items-center gap-2">
                <LanguageSwitcher />
                <div className="md:hidden">
                  <MobileMenu />
                </div>
              </div>
            </header>

            <main className="flex-1">
              <HeroSection />
              <AboutSection />
              <SkillsSection />
              <ProjectsSection />
              <ExperienceSection />
              <VolunteerSection />
              <ContactSection />
            </main>

            <FooterSection />
          </div>
          <CookieConsent />
        </ErrorBoundary>
      </PageTransition>
    </>
  )
}

