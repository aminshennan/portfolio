"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

interface GlowingButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  glowColor?: string
}

export default function GlowingButton({
  children,
  onClick,
  className = "",
  variant = "default",
  size = "default",
  glowColor = "rgba(6, 182, 212, 0.6)",
}: GlowingButtonProps) {
  const [isHovered, setIsHovered] = useState(false)
  const { dir } = useLanguage()

  const getVariantClasses = () => {
    switch (variant) {
      case "outline":
        return "border-cyan-500 text-cyan-400 hover:bg-cyan-950 bg-transparent"
      case "ghost":
        return "text-cyan-400 hover:bg-cyan-950 bg-transparent"
      default:
        return "bg-cyan-500 hover:bg-cyan-600 text-black"
    }
  }

  return (
    <div className="relative">
      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-md blur-md"
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ duration: 0.2 }}
        style={{ backgroundColor: glowColor }}
      />

      <Button
        onClick={onClick}
        size={size}
        className={`relative transition-all hover:scale-105 ${getVariantClasses()} ${className} ${dir === "rtl" ? "rtl-space" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {children}
      </Button>
    </div>
  )
}

