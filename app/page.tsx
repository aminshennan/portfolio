/**
 * Home Page Component
 * 
 * This is the main landing page of the portfolio website that serves as the entry point
 * for visitors. It orchestrates and renders all major sections of the portfolio:
 * 
 * Features:
 * - Responsive design with mobile-first approach
 * - Dynamic content loading with performance optimizations
 * - Smooth scrolling and navigation
 * - Theme switching capabilities
 * - Multilingual support (English/Arabic)
 * - Error boundaries for robust error handling
 * - SEO optimization and accessibility features
 * 
 * Structure:
 * - Header with navigation and branding
 * - Hero section with introduction
 * - About section with personal background
 * - Skills showcase with interactive elements
 * - Projects portfolio with detailed cards
 * - Professional experience timeline
 * - Volunteer work and community involvement
 * - Contact information and form
 * - Footer with additional links
 */

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

// Core portfolio sections - loaded immediately
import { HeroSection } from "@/components/sections/HeroSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { SkillsSection } from "@/components/sections/SkillsSection"
import { ProjectsSection } from "@/components/sections/ProjectsSection"
import { ExperienceSection } from "@/components/sections/ExperienceSection"
import { VolunteerSection } from "@/components/sections/VolunteerSection"
import { ContactSection } from "@/components/sections/ContactSection"
import { FooterSection } from "@/components/sections/FooterSection"

// Dynamic imports for performance optimization - these components are loaded as needed
const ScrollProgress = dynamic(() => import('@/components/scroll-progress'), { 
  ssr: false, // Client-side only component
  loading: () => <div className="h-1 bg-muted/20" /> // Loading placeholder
})

const FloatingNav = dynamic(() => import('@/components/floating-nav'), {
  ssr: false, // Client-side only component
  loading: () => <div className="h-16 bg-background/30 backdrop-blur-sm" /> // Loading placeholder
})

const LanguageSwitcher = dynamic(() => import('@/components/language-switcher'), {
  loading: () => <div className="h-8 w-8 bg-muted/20 rounded-full animate-pulse" /> // Loading placeholder
})

/**
 * Home Page Component
 * 
 * Main component that renders the complete portfolio website with all sections
 * and interactive features. Handles responsive design, theming, and internationalization.
 */
export default function Home() {
  // Get translation function and text direction from language context
  const { t, dir } = useLanguage()

  // Dynamic content for hero section
  const defaultTitle = t("hero.title")
  const defaultRole = t("hero.subtitle") // Assuming subtitle is the main role displayed

  return (
    <>
      {/* Page transition wrapper for smooth navigation animations */}
      <PageTransition>
        {/* Error boundary to catch and handle any component errors gracefully */}
        <ErrorBoundary>
          {/* Global utility components */}
          <SmoothScroll />
          <KeyboardShortcuts />
          
          {/* Main application container with responsive design and RTL support */}
          <div
            className={`flex flex-col min-h-screen bg-gradient-dark text-foreground overflow-x-hidden transition-colors duration-300 ${dir === "rtl" ? "font-arabic" : "font-sans"}`}
          >
            {/* Global UI components */}
            <ScrollProgress />
            <FloatingNav />

            {/* Main header with navigation */}
            <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-md bg-background/80 sticky top-0 z-40 border-b border-cyan-900/20 shadow-md transition-colors duration-300">
              {/* Brand logo and title */}
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
            
              {/* Desktop navigation menu */}
              <div className="hidden md:flex ml-auto mr-4 items-center space-x-6">
                <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">{t("nav.about")}</Link>
                <Link href="#skills" className="text-sm font-medium hover:text-primary transition-colors">{t("nav.skills")}</Link>
                <Link href="#projects" className="text-sm font-medium hover:text-primary transition-colors">{t("nav.projects")}</Link>
                <Link href="#experience" className="text-sm font-medium hover:text-primary transition-colors">{t("nav.experience")}</Link>
                <Link href="#volunteer" className="text-sm font-medium hover:text-primary transition-colors">{t("nav.volunteer")}</Link>
                <Link href="#contact" className="text-sm font-medium hover:bg-primary/90 hover:text-background px-3 py-1.5 rounded-md border border-primary/30 transition-colors">{t("nav.contact")}</Link>
              </div>
          
              {/* Language switcher and mobile menu */}
              <div className="ml-auto flex items-center gap-2">
                <LanguageSwitcher />
                <div className="md:hidden">
                  <MobileMenu />
                </div>
              </div>
            </header>

            {/* Main content area with all portfolio sections */}
            <main className="flex-1">
              {/* Hero section - First impression with introduction */}
              <HeroSection />
              
              {/* About section - Personal background and story */}
              <AboutSection />
              
              {/* Skills section - Technical and soft skills showcase */}
              <SkillsSection />
              
              {/* Projects section - Portfolio of work and achievements */}
              <ProjectsSection />
              
              {/* Experience section - Professional timeline and career */}
              <ExperienceSection />
              
              {/* Volunteer section - Community involvement and contributions */}
              <VolunteerSection />
              
              {/* Contact section - Ways to get in touch */}
              <ContactSection />
            </main>

            {/* Footer with additional information and links */}
            <FooterSection />
          </div>
          
          {/* Cookie consent for GDPR compliance */}
          <CookieConsent />
        </ErrorBoundary>
      </PageTransition>
    </>
  )
}

