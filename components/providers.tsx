"use client"

import { ThemeProvider } from "@/components/theme-provider"
import { Inter, Noto_Kufi_Arabic } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

const notoKufiArabic = Noto_Kufi_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-kufi-arabic",
  display: "swap",
  preload: true,
})

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${inter.variable} ${notoKufiArabic.variable}`}>
      <ThemeProvider 
        attribute="class" 
        defaultTheme="dark" 
        forcedTheme="dark" 
        enableSystem={false} 
        disableTransitionOnChange={false}
      >
        {children}
      </ThemeProvider>
    </div>
  )
} 