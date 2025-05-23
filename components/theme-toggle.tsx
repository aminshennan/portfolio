"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "@/components/ui/use-theme"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.2 }}
        key={theme}
      >
        {theme === "dark" ? (
          <Moon className="h-[1.2rem] w-[1.2rem] text-blue-400" />
        ) : (
          <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-500" />
        )}
      </motion.div>
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
} 