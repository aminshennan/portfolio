"use client"

import { useRef, useEffect } from "react"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  color: string
  intensity: number
}

let mouseMoveTimeout: NodeJS.Timeout | null = null

export default function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const isMouseMovingRef = useRef(false)
  const frameCountRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Detect if device is mobile
    const isMobile = typeof window !== 'undefined' && 
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    // Make canvas fullscreen
    canvas.width = window.innerWidth
    canvas.height = Math.min(window.innerHeight, 800)

    // Resize handler
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = Math.min(window.innerHeight, 800)
    }

    // Initialize particles - reduced count for better performance
    const initParticles = () => {
      const particleCount = isMobile 
        ? Math.min(Math.floor(window.innerWidth / 60), 15) // Significantly fewer particles on mobile
        : Math.min(Math.floor(window.innerWidth / 40), 35) // Significantly fewer particles on desktop
        
      const particles: Particle[] = []

      for (let i = 0; i < particleCount; i++) {
        // Create more vibrant colors with lower performance impact
        const colorType = Math.floor(Math.random() * 3); // Use simple integer math
        let color;
        
        if (colorType === 0) {
          // Cyan/blue variations
          color = `rgba(0, 180, 230, 1)`;
        } else if (colorType === 1) {
          // Pink/purple variations
          color = `rgba(190, 50, 180, 1)`;
        } else {
          // Yellow/orange variations
          color = `rgba(230, 180, 30, 1)`;
        }
        
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 0.5, // Smaller particles
          speedX: (Math.random() - 0.5) * 0.15, // Significantly reduced speed
          speedY: (Math.random() - 0.5) * 0.15, // Significantly reduced speed
          opacity: Math.random() * 0.3 + 0.2, // Less opaque for better performance
          color: color,
          intensity: Math.random() * 0.3 + 0.2 // Reduced intensity
        })
      }
      
      particlesRef.current = particles
    }

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mousePositionRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      }
      
      isMouseMovingRef.current = true
      
      // Clear previous timeout if exists
      if (mouseMoveTimeout) {
        clearTimeout(mouseMoveTimeout)
      }
      
      // Set timeout to reset mouse movement flag
      mouseMoveTimeout = setTimeout(() => {
        isMouseMovingRef.current = false
      }, 100)
    }

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      frameCountRef.current += 1
      
      // Only calculate connections every several frames for better performance
      const shouldDrawConnections = frameCountRef.current % (isMobile ? 6 : 3) === 0;

      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        // Update position
        particle.x += particle.speedX
        particle.y += particle.speedY

        // Boundary check
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1
        }
        
        // Mouse interaction - only when mouse is moving and for limited particles
        if (isMouseMovingRef.current && i % 3 === 0) {
          const dx = mousePositionRef.current.x - particle.x
          const dy = mousePositionRef.current.y - particle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          
          if (distance < 80) {
            const angle = Math.atan2(dy, dx)
            const force = (80 - distance) / 80 * particle.intensity
            
            particle.speedX -= Math.cos(angle) * force * 0.01
            particle.speedY -= Math.sin(angle) * force * 0.01
          }
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = particle.color.replace(/[\d.]+\)$/, `${particle.opacity})`)
        ctx.fill()

        // Remove glow effect for better performance
        ctx.shadowBlur = 0;
        
        // Draw connections - reduced frequency and fewer connections
        if (shouldDrawConnections && i % 3 === 0) { // Skip more particles for connections
          // Define a very limited range for connection checks to improve performance
          const startIdx = Math.max(0, i - 3);
          const endIdx = Math.min(particlesRef.current.length, i + 3);
          
          for (let j = startIdx; j < endIdx; j += 3) { // Skip more particles
            if (i === j) continue;
            
            const otherParticle = particlesRef.current[j];
            const dx = particle.x - otherParticle.x
            const dy = particle.y - otherParticle.y
            const distance = Math.sqrt(dx * dx + dy * dy)

            if (distance < 60) { // Further reduced connection distance
              ctx.beginPath()
              ctx.strokeStyle = `rgba(200, 200, 200, ${(60 - distance) / 60 * 0.1})`
              ctx.lineWidth = 0.2 // Thinner lines
              ctx.moveTo(particle.x, particle.y)
              ctx.lineTo(otherParticle.x, otherParticle.y)
              ctx.stroke()
            }
          }
        }
      })
      
      requestAnimationFrame(animate)
    }

    // Setup events and animation
    window.addEventListener("resize", handleResize)
    canvas.addEventListener("mousemove", handleMouseMove)
    
    initParticles()
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      canvas.removeEventListener("mousemove", handleMouseMove)
      
      if (mouseMoveTimeout) {
        clearTimeout(mouseMoveTimeout)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10 bg-transparent" />
}

