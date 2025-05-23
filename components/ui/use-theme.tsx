"use client"

import { useTheme as useNextTheme } from "next-themes"

export function useTheme() {
  const { theme, setTheme } = useNextTheme()
  
  return {
    theme,
    setTheme,
    isDark: theme === "dark",
    isLight: theme === "light",
    isSystem: theme === "system",
  }
} 