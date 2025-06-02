/**
 * Theme Toggle Component
 * 
 * A UI component that allows users to switch between light and dark themes.
 * Features smooth animations and appropriate iconography for each theme state.
 * 
 * Features:
 * - Smooth transition animations using Framer Motion
 * - Contextual icons (Sun for light theme, Moon for dark theme)
 * - Accessible button with screen reader support
 * - Responsive design with consistent sizing
 * - Integration with the theme context provider
 * 
 * Usage:
 * - Click to toggle between light and dark themes
 * - Automatically syncs with system theme preferences
 * - Persists theme choice across browser sessions
 */

"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/ui/use-theme"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

/**
 * Theme Toggle Component
 * 
 * Renders a button that toggles between light and dark themes with animated icons.
 * Uses the theme context to manage and persist theme state across the application.
 */
export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full"
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
    >
      {/* Animated icon container with smooth transitions */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.2 }}
        key={theme} // Key ensures animation triggers on theme change
      >
        {theme === "dark" ? (
          // Moon icon for dark theme
          <Moon className="h-[1.2rem] w-[1.2rem] text-blue-400" />
        ) : (
          // Sun icon for light theme
          <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500" />
        )}
      </motion.div>
      
      {/* Screen reader accessible label */}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
} 