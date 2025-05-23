"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"
import { useEffect } from "react"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Force dark theme
  useEffect(() => {
    document.documentElement.classList.add('dark')
  }, [])
  
  return (
    <NextThemesProvider 
      {...props} 
      forcedTheme="dark" 
      enableSystem={false} 
      disableTransitionOnChange={false}
    >
      {children}
    </NextThemesProvider>
  )
}

