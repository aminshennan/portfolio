/**
 * Tailwind CSS Configuration
 * 
 * This configuration defines the design system for the portfolio including:
 * - Color palette with CSS custom properties for theming
 * - Typography configuration with font families
 * - Responsive breakpoints and container settings
 * - Custom animations and keyframes
 * - Plugin integrations for enhanced functionality
 */

import type { Config } from "tailwindcss"

const config = {
  // Enable class-based dark mode switching
  darkMode: ["class"],
  
  // Define content paths for Tailwind to scan for classes
  content: [
    "./pages/**/*.{ts,tsx}",     // Pages directory (if using pages router)
    "./components/**/*.{ts,tsx}", // All component files
    "./app/**/*.{ts,tsx}",       // App directory (Next.js 13+ app router)
    "./src/**/*.{ts,tsx}",       // Source directory
    "*.{js,ts,jsx,tsx,mdx}",     // Root level files
  ],
  
  // No custom prefix for Tailwind classes
  prefix: "",
  
  theme: {
    // Container configuration for responsive layouts
    container: {
      center: true,           // Center containers by default
      padding: "2rem",        // Default horizontal padding
      screens: {
        "2xl": "1400px",      // Maximum container width for 2xl screens
      },
    },
    
    extend: {
      // Font family configuration
      fontFamily: {
        sans: ["var(--font-inter)"],              // Default sans-serif font (Inter)
        arabic: ["var(--font-noto-kufi-arabic)"], // Arabic font for RTL support
      },
      
      // Color system using CSS custom properties for theme switching
      colors: {
        // Border and input styling
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        
        // Background and text colors
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        
        // Primary brand colors
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        
        // Secondary colors for less prominent elements
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        
        // Destructive colors for errors and warnings
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        
        // Muted colors for subtle elements
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        
        // Accent colors for highlights and calls-to-action
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        
        // Popover and dropdown colors
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        
        // Card component colors
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      
      // Border radius system using CSS custom properties
      borderRadius: {
        lg: "var(--radius)",                    // Large radius
        md: "calc(var(--radius) - 2px)",       // Medium radius
        sm: "calc(var(--radius) - 4px)",       // Small radius
      },
      
      // Custom keyframe animations
      keyframes: {
        // Accordion expand animation (for collapsible content)
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        // Accordion collapse animation
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      
      // Animation classes using the defined keyframes
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  
  // Tailwind CSS plugins for additional functionality
  plugins: [
    require("tailwindcss-animate"), // Adds animation utilities and presets
  ],
} satisfies Config

export default config

