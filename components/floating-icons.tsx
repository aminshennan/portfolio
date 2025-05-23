"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Brain, Database, BarChart, Code, LineChart, Server, Cpu, GitBranch } from "lucide-react"

interface FloatingIcon {
  id: number
  icon: React.ReactNode
  x: number
  y: number
  size: number
  speed: number
  direction: number
  color: string
}

export default function FloatingIcons() {
  const [icons, setIcons] = useState<FloatingIcon[]>([])

  useEffect(() => {
    // Detect if device is mobile to reduce icons
    const isMobile = typeof window !== 'undefined' && 
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    // Reduce number of icons on mobile
    const iconCount = isMobile ? 6 : 10;
    
    // Create initial icons
    const iconComponents = [
      <Brain key="brain" />,
      <Database key="database" />,
      <BarChart key="barChart" />,
      <Code key="code" />,
      <LineChart key="lineChart" />,
      <Server key="server" />,
      <Cpu key="cpu" />,
      <GitBranch key="gitBranch" />,
    ]

    const colors = [
      "text-cyan-400",
      "text-pink-400",
      "text-purple-400",
      "text-yellow-400",
      "text-green-400",
      "text-blue-400",
    ]

    const initialIcons: FloatingIcon[] = []

    for (let i = 0; i < iconCount; i++) {
      initialIcons.push({
        id: i,
        icon: iconComponents[i % iconComponents.length],
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 0.5 + 0.5, // 0.5 to 1
        speed: Math.random() * 0.15 + 0.05, // Reduced speed
        direction: Math.random() * 360,
        color: colors[i % colors.length],
      })
    }

    setIcons(initialIcons)

    // Animation loop with reduced frequency
    const interval = setInterval(() => {
      setIcons((prevIcons) => {
        return prevIcons.map((icon) => {
          // Convert direction to radians
          const directionRad = (icon.direction * Math.PI) / 180

          // Calculate new position
          let newX = icon.x + Math.cos(directionRad) * icon.speed
          let newY = icon.y + Math.sin(directionRad) * icon.speed

          // Bounce off edges
          let newDirection = icon.direction

          if (newX < 0 || newX > 100) {
            newDirection = 180 - newDirection
            newX = Math.max(0, Math.min(100, newX))
          }

          if (newY < 0 || newY > 100) {
            newDirection = 360 - newDirection
            newY = Math.max(0, Math.min(100, newY))
          }

          // Add some randomness to direction occasionally
          if (Math.random() > 0.7) {
            newDirection += (Math.random() - 0.5) * 5
          }

          return {
            ...icon,
            x: newX,
            y: newY,
            direction: newDirection,
          }
        })
      })
    }, 100) // 100ms instead of 50ms (reduced from 20fps to 10fps)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {icons.map((icon) => (
        <motion.div
          key={icon.id}
          className={`absolute ${icon.color} opacity-20`}
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            transform: `scale(${icon.size})`,
            willChange: 'transform, opacity', // Performance hint for browser
          }}
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "reverse",
          }}
        >
          {icon.icon}
        </motion.div>
      ))}
    </div>
  )
}

