"use client"

import { useEffect, useRef } from "react"

interface DecorationGridProps {
  className?: string
  color?: string
  density?: number
  animated?: boolean
  showDots?: boolean
}

export default function DecorativeGrid({
  className = "",
  color = "rgba(6, 182, 212, 0.15)",
  density = 20,
  animated = true,
  showDots = true,
}: DecorationGridProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const cellSize = Math.max(canvas.width, canvas.height) / density
      
      // Store grid line positions for dot intersections
      const horizontalLines: number[] = []
      const verticalLines: number[] = []

      // Draw vertical lines
      for (let x = 0; x <= canvas.width; x += cellSize) {
        verticalLines.push(x)
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvas.height)

        if (animated) {
          // Add wave effect to vertical lines
          const lineOffset = Math.sin(time / 1000 + x / 100) * 2
          ctx.setLineDash([1, 8])
          ctx.lineDashOffset = lineOffset
        }

        ctx.strokeStyle = color
        ctx.lineWidth = 0.5
        ctx.stroke()
      }

      // Draw horizontal lines
      for (let y = 0; y <= canvas.height; y += cellSize) {
        horizontalLines.push(y)
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvas.width, y)

        if (animated) {
          // Add wave effect to horizontal lines
          const lineOffset = Math.cos(time / 1000 + y / 100) * 2
          ctx.setLineDash([1, 8])
          ctx.lineDashOffset = lineOffset
        }

        ctx.strokeStyle = color
        ctx.lineWidth = 0.5
        ctx.stroke()
      }

      // Draw dots at intersections
      if (showDots) {
        for (const x of verticalLines) {
          for (const y of horizontalLines) {
            // Calculate pulse effect based on time and position
            const pulseSize = animated 
              ? 1 + Math.sin(time / 1000 + (x + y) / 200) * 0.5
              : 1
            
            ctx.beginPath()
            ctx.arc(x, y, pulseSize, 0, Math.PI * 2)
            
            // Use slightly more opaque color for dots
            const dotColor = color.replace(/[\d.]+\)$/, (parseFloat(color.match(/[\d.]+(?=\)$)/)?.[0] || "0.15") * 2) + ")")
            ctx.fillStyle = dotColor
            ctx.fill()
          }
        }
      }

      if (animated) {
        time += 16 // Approximately 60fps
        animationFrameId = requestAnimationFrame(drawGrid)
      }
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    drawGrid()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      if (animated) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [color, density, animated, showDots])

  return <canvas ref={canvasRef} className={`absolute inset-0 w-full h-full pointer-events-none ${className}`} />
}

