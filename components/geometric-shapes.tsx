"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

interface GeometricShapesProps {
  className?: string
  variant?: "default" | "alt" | "minimal"
  opacity?: number
}

export default function GeometricShapes({ 
  className = "", 
  variant = "default",
  opacity = 0.15 
}: GeometricShapesProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // State to track if we're on a mobile device
  const [isMobile, setIsMobile] = useState(false)
  
  // Calculate the shape opacity based on the provided opacity prop
  const shapeOpacity = opacity
  
  // Detect mobile device and set state
  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      setIsMobile(isMobileDevice);
    };
    
    checkMobile();
    
    // Also check on resize in case of orientation changes
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
  
  // Simpler animation transition for better performance
  const simpleTransition = { duration: 0.8, ease: "easeOut" }
  
  return (
    <div ref={ref} className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {variant === "default" && !isMobile && (
        <>
          {/* Circle - simplified for better performance */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: shapeOpacity, scale: 1 } : {}}
            transition={simpleTransition}
            className="absolute -top-20 -right-20 w-64 h-64 rounded-full border border-cyan-500/30"
            style={{ background: `radial-gradient(circle, rgba(6,182,212,${shapeOpacity}) 0%, rgba(6,182,212,0) 70%)` }}
          />

          {/* Square */}
          <motion.div
            initial={{ opacity: 0, rotate: -10 }}
            animate={inView ? { opacity: shapeOpacity * 0.7, rotate: 0 } : {}}
            transition={simpleTransition}
            className="absolute bottom-40 -left-20 w-40 h-40 border border-pink-500/30"
            style={{ background: `linear-gradient(135deg, rgba(236,72,153,${shapeOpacity}) 0%, rgba(236,72,153,0) 70%)` }}
          />

          {/* Triangle - simplified SVG */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: shapeOpacity * 0.7, y: 0 } : {}}
            transition={simpleTransition}
            className="absolute bottom-10 right-20"
          >
            <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
              <path
                d="M50 0L100 100H0L50 0Z"
                fill={`rgba(168, 85, 247, ${shapeOpacity * 0.7})`}
                stroke={`rgba(168, 85, 247, ${shapeOpacity * 2})`}
                strokeWidth="1"
              />
            </svg>
          </motion.div>

          {/* Hexagon - simplified */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: shapeOpacity * 0.7, x: 0 } : {}}
            transition={simpleTransition}
            className="absolute top-40 right-40"
          >
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <path
                d="M40 0L75 20V60L40 80L5 60V20L40 0Z"
                fill={`rgba(79, 70, 229, ${shapeOpacity * 0.7})`}
                stroke={`rgba(79, 70, 229, ${shapeOpacity * 2})`}
                strokeWidth="1"
              />
            </svg>
          </motion.div>
        </>
      )}
      
      {/* Mobile version - simplified with fewer shapes */}
      {variant === "default" && isMobile && (
        <>
          {/* Circle - only one shape for mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: shapeOpacity, scale: 1 } : {}}
            transition={simpleTransition}
            className="absolute -top-10 -right-10 w-40 h-40 rounded-full border border-cyan-500/30"
            style={{ background: `radial-gradient(circle, rgba(6,182,212,${shapeOpacity}) 0%, rgba(6,182,212,0) 70%)` }}
          />

          {/* Triangle - simplified */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: shapeOpacity * 0.7, y: 0 } : {}}
            transition={simpleTransition}
            className="absolute bottom-10 right-10"
          >
            <svg width="70" height="70" viewBox="0 0 100 100" fill="none">
              <path
                d="M50 0L100 100H0L50 0Z"
                fill={`rgba(168, 85, 247, ${shapeOpacity * 0.7})`}
                stroke={`rgba(168, 85, 247, ${shapeOpacity * 2})`}
                strokeWidth="1"
              />
            </svg>
          </motion.div>
        </>
      )}

      {variant === "alt" && !isMobile && (
        <>
          {/* Circles */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: shapeOpacity, scale: 1 } : {}}
            transition={simpleTransition}
            className="absolute top-20 left-20 w-32 h-32 rounded-full border border-pink-500/30"
            style={{ background: `radial-gradient(circle, rgba(236,72,153,${shapeOpacity}) 0%, rgba(236,72,153,0) 70%)` }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: shapeOpacity * 0.7, scale: 1 } : {}}
            transition={simpleTransition}
            className="absolute bottom-40 right-20 w-48 h-48 rounded-full border border-cyan-500/30"
            style={{ background: `radial-gradient(circle, rgba(6,182,212,${shapeOpacity}) 0%, rgba(6,182,212,0) 70%)` }}
          />

          {/* Diamond - simplified */}
          <motion.div
            initial={{ opacity: 0, rotate: -20 }}
            animate={inView ? { opacity: shapeOpacity * 0.7, rotate: 0 } : {}}
            transition={simpleTransition}
            className="absolute top-40 right-40"
          >
            <svg width="80" height="80" viewBox="0 0 80 80" fill="none">
              <rect
                x="40"
                y="0"
                width="56.57"
                height="56.57"
                transform="rotate(45 40 0)"
                fill={`rgba(245, 158, 11, ${shapeOpacity * 0.7})`}
                stroke={`rgba(245, 158, 11, ${shapeOpacity * 2})`}
                strokeWidth="1"
              />
            </svg>
          </motion.div>

          {/* Simplified Wave */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: shapeOpacity * 0.7, y: 0 } : {}}
            transition={simpleTransition}
            className="absolute bottom-20 left-20"
          >
            <svg width="200" height="40" viewBox="0 0 200 40" fill="none">
              <path
                d="M0 20C20 5 40 35 60 20C80 5 100 35 120 20C140 5 160 35 180 20"
                stroke={`rgba(6,182,212,${shapeOpacity * 2})`}
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </motion.div>
        </>
      )}
      
      {/* Mobile version - alt */}
      {variant === "alt" && isMobile && (
        <>
          {/* Single circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: shapeOpacity, scale: 1 } : {}}
            transition={simpleTransition}
            className="absolute top-10 left-10 w-32 h-32 rounded-full border border-pink-500/30"
            style={{ background: `radial-gradient(circle, rgba(236,72,153,${shapeOpacity}) 0%, rgba(236,72,153,0) 70%)` }}
          />

          {/* Simplified Wave */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: shapeOpacity * 0.7, y: 0 } : {}}
            transition={simpleTransition}
            className="absolute bottom-10 left-10"
          >
            <svg width="150" height="30" viewBox="0 0 200 40" fill="none">
              <path
                d="M0 20C20 5 40 35 60 20C80 5 100 35 120 20"
                stroke={`rgba(6,182,212,${shapeOpacity * 2})`}
                strokeWidth="2"
                fill="none"
              />
            </svg>
          </motion.div>
        </>
      )}

      {variant === "minimal" && (
        <>
          {/* Simplified dots pattern */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: shapeOpacity * 1.3 } : {}}
            transition={simpleTransition}
            className="absolute inset-0"
          >
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="dotPattern" x="0" y="0" width={isMobile ? "30" : "20"} height={isMobile ? "30" : "20"} patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill={`rgba(6,182,212,${shapeOpacity * 3})`} />
              </pattern>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#dotPattern)" />
            </svg>
          </motion.div>

          {/* Single line */}
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={inView ? { width: isMobile ? "60%" : "80%", opacity: shapeOpacity * 2 } : {}}
            transition={{ duration: 1 }}
            className="absolute top-20 left-0 h-px bg-gradient-to-r from-cyan-500 via-pink-500 to-transparent"
          />
        </>
      )}
    </div>
  )
}

