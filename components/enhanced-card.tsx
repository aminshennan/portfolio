"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface EnhancedCardProps {
  children: React.ReactNode
  className?: string
  hoverEffect?: "lift" | "glow" | "border" | "none"
  glowColor?: string
}

export default function EnhancedCard({
  children,
  className = "",
  hoverEffect = "lift",
  glowColor = "rgba(6, 182, 212, 0.3)",
}: EnhancedCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getHoverClasses = () => {
    switch (hoverEffect) {
      case "lift":
        return "transition-transform hover:-translate-y-1"
      case "border":
        return "transition-colors hover:border-primary/50"
      case "none":
        return ""
      default:
        return ""
    }
  }

  return (
    <div className="relative">
      {/* Glow effect */}
      {hoverEffect === "glow" && (
        <motion.div
          className="absolute inset-0 rounded-lg blur-md"
          animate={{
            opacity: isHovered ? 0.7 : 0,
            scale: isHovered ? 1.03 : 1,
          }}
          transition={{ duration: 0.2 }}
          style={{ backgroundColor: glowColor }}
        />
      )}

      <Card
        className={`bg-card border-border ${getHoverClasses()} ${className}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </Card>
    </div>
  )
}

// Re-export card components for convenience
export { CardContent, CardDescription, CardFooter, CardHeader, CardTitle }

