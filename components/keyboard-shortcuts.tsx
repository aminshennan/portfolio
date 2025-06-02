"use client"

import React, { useEffect, useState, useCallback, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Keyboard, Info } from "lucide-react"

// Extract keyboard shortcut definition to a constants array for better maintainability
const SECTION_SHORTCUTS = [
  { key: "1", sectionId: "about", label: "About section" },
  { key: "2", sectionId: "skills", label: "Skills section" },
  { key: "3", sectionId: "projects", label: "Projects section" },
  { key: "4", sectionId: "experience", label: "Experience section" },
  { key: "5", sectionId: "volunteer", label: "Volunteer section" },
  { key: "6", sectionId: "contact", label: "Contact section" },
]

// Extract action shortcuts to a constants array
const ACTION_SHORTCUTS = [
  { key: "d", action: "downloadResume", description: "Download resume", altKey: true },
  { key: "?", action: "showHelp", description: "Show this help", altKey: false },
]

export default function KeyboardShortcuts() {
  const [showHelp, setShowHelp] = useState(false)
  const [showSkipLink, setShowSkipLink] = useState(false)

  // Memoize the scroll function for better performance
  const scrollToSection = useCallback((sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }, [])

  // Memoize the toggle function
  const toggleHelp = useCallback(() => {
    setShowHelp(prev => !prev)
  }, [])

  const handleSkipToContent = useCallback(() => {
    const mainContent = document.getElementById("about")
    if (mainContent) {
      mainContent.focus()
      mainContent.scrollIntoView({ behavior: "smooth" })
    }
    setShowSkipLink(false)
  }, [])

  useEffect(() => {
    // Show skip link when Tab is pressed
    const handleFirstTab = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        setShowSkipLink(true)
        window.removeEventListener('keydown', handleFirstTab)
      }
    }
    
    window.addEventListener('keydown', handleFirstTab)
    
    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle keyboard shortcuts if no input, textarea, or select is focused
      const activeElement = document.activeElement
      const isInputFocused =
        activeElement instanceof HTMLInputElement ||
        activeElement instanceof HTMLTextAreaElement ||
        activeElement instanceof HTMLSelectElement

      if (isInputFocused) return

      // Handle keyboard shortcuts
      switch (e.key) {
        case "Escape":
          // Close help dialog if open
          if (showHelp) {
            setShowHelp(false)
            e.preventDefault()
          }
          break

        case "Home":
          // Scroll to top
          window.scrollTo({ top: 0, behavior: "smooth" })
          e.preventDefault()
          break

        case "End":
          // Scroll to bottom
          window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
          e.preventDefault()
          break

        // Section navigation shortcuts - use the constants array
        default:
          // Handle section shortcuts
          if (e.altKey) {
            const sectionShortcut = SECTION_SHORTCUTS.find(shortcut => shortcut.key === e.key)
            if (sectionShortcut) {
              scrollToSection(sectionShortcut.sectionId)
            e.preventDefault()
              return
            }
          }

          // Handle special shortcuts
          if (e.key === "t" && e.altKey) {
            const themeToggle = document.querySelector('[aria-label="Toggle theme"]') as HTMLButtonElement
            if (themeToggle) {
              themeToggle.click()
            }
            e.preventDefault()
          } else if (e.key === "d" && e.altKey) {
            const downloadButton = document.querySelector('a[download]') as HTMLAnchorElement
            if (downloadButton) {
              downloadButton.click()
          }
            e.preventDefault()
          } else if (e.key === "?") {
            setShowHelp(true)
            e.preventDefault()
          } else if (e.key === "Tab") {
            setShowSkipLink(true)
          }
          break;
      }
    }

    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.removeEventListener("keydown", handleKeyDown)
      window.removeEventListener('keydown', handleFirstTab)
    }
  }, [showHelp, scrollToSection])

  // Memoize the dialog content to prevent unnecessary re-renders
  const helpDialogContent = useMemo(() => (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="bg-gray-900 rounded-lg shadow-xl border border-gray-800 max-w-md w-full p-6"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-white flex items-center">
          <Keyboard className="h-5 w-5 mr-2 text-primary" />
          Keyboard Shortcuts
        </h2>
        <button
          onClick={() => setShowHelp(false)}
          className="text-gray-400 hover:text-white focus:outline-none focus:text-white transition-colors"
          aria-label="Close keyboard shortcuts help"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-sm font-medium text-primary mb-2">Navigation</h3>
          <ul className="space-y-2">
            <li className="flex justify-between text-sm">
              <span className="text-gray-400">Skip to main content</span>
              <kbd className="px-2 py-0.5 bg-gray-800 rounded text-xs font-mono">Tab</kbd>
            </li>
            <li className="flex justify-between text-sm">
              <span className="text-gray-400">Scroll to top</span>
              <kbd className="px-2 py-0.5 bg-gray-800 rounded text-xs font-mono">Home</kbd>
            </li>
            <li className="flex justify-between text-sm">
              <span className="text-gray-400">Scroll to bottom</span>
              <kbd className="px-2 py-0.5 bg-gray-800 rounded text-xs font-mono">End</kbd>
            </li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-primary mb-2">Sections</h3>
          <ul className="space-y-2">
            {SECTION_SHORTCUTS.map((shortcut) => (
              <li key={shortcut.key} className="flex justify-between text-sm">
                <span className="text-gray-400">{shortcut.label}</span>
                <div className="flex items-center space-x-1">
                  <kbd className="px-2 py-0.5 bg-gray-800 rounded text-xs font-mono">Alt</kbd>
                  <span className="text-gray-600">+</span>
                  <kbd className="px-2 py-0.5 bg-gray-800 rounded text-xs font-mono">{shortcut.key}</kbd>
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-sm font-medium text-primary mb-2">Actions</h3>
          <ul className="space-y-2">
            {ACTION_SHORTCUTS.map((shortcut) => (
              <li key={shortcut.key} className="flex justify-between text-sm">
                <span className="text-gray-400">{shortcut.description}</span>
                <div className="flex items-center space-x-1">
                  {shortcut.altKey && (
                    <>
                      <kbd className="px-2 py-0.5 bg-gray-800 rounded text-xs font-mono">Alt</kbd>
                      <span className="text-gray-600">+</span>
                    </>
                  )}
                  <kbd className="px-2 py-0.5 bg-gray-800 rounded text-xs font-mono">{shortcut.key.toUpperCase()}</kbd>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="mt-6 flex items-center text-xs text-gray-500">
        <Info className="h-3 w-3 mr-1" />
        Press <kbd className="mx-1 px-1.5 py-0.5 bg-gray-800 rounded text-xs font-mono">Esc</kbd> to close this dialog
      </div>
    </motion.div>
  ), [])

  return (
    <>
      {/* Skip to content link - visible on tab */}
      <AnimatePresence>
        {showSkipLink && (
          <motion.a
            href="#about"
            onClick={handleSkipToContent}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.2 }}
            className="skip-to-content fixed top-0 left-0 right-0 z-50 p-3 bg-primary text-white text-center font-medium focus:outline-none"
            onBlur={() => setShowSkipLink(false)}
          >
            Skip to main content
          </motion.a>
        )}
      </AnimatePresence>
      
      {/* Keyboard shortcut toggle button */}
      <button
        onClick={toggleHelp}
        className="fixed bottom-6 left-6 z-50 p-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors"
        aria-label="View keyboard shortcuts"
      >
        <Keyboard className="h-5 w-5" />
      </button>
      
      {/* Keyboard shortcuts help dialog */}
      <AnimatePresence>
        {showHelp && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowHelp(false)}
          >
            {helpDialogContent}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

