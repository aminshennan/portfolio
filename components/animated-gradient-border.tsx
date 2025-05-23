"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface AnimatedGradientBorderProps {
  children: React.ReactNode
  className?: string
  borderWidth?: number
  glowIntensity?: "low" | "medium" | "high"
  animationDuration?: number
}

export default function AnimatedGradientBorder({
  children,
  className = "",
  borderWidth = 1,
  glowIntensity = "medium",
  animationDuration = 4,
}: AnimatedGradientBorderProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const glowMap = {
    low: "shadow-sm shadow-cyan-500/20",
    medium: "shadow-md shadow-cyan-500/30",
    high: "shadow-lg shadow-cyan-500/40",
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.98 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className={`relative rounded-lg ${glowMap[glowIntensity]} ${className}`}
    >
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <div
          className="absolute inset-0 rounded-lg"
          style={{
            background: `linear-gradient(90deg, #06b6d4, #ec4899, #8b5cf6, #06b6d4)`,
            backgroundSize: "300% 100%",
            animation: `gradientBorder ${animationDuration}s linear infinite`,
            opacity: 0.7,
          }}
        />
      </div>

      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <div
          className="absolute inset-0 rounded-lg"
          style={{
            background: `linear-gradient(90deg, #06b6d4, #ec4899, #8b5cf6, #06b6d4)`,
            backgroundSize: "300% 100%",
            animation: `gradientBorder ${animationDuration}s linear infinite`,
            filter: "blur(10px)",
            opacity: 0.3,
          }}
        />
      </div>

      <div className={`relative rounded-lg bg-gray-900 m-[${borderWidth}px] z-10`}>{children}</div>

      <style jsx global>{`
        @keyframes gradientBorder {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </motion.div>
  )
}

