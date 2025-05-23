"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

interface AnimatedCounterImprovedProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  decimals?: number
  className?: string
  easing?: "linear" | "easeOut" | "easeIn" | "easeInOut"
}

export default function AnimatedCounterImproved({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
  decimals = 0,
  className = "",
  easing = "easeOut",
}: AnimatedCounterImprovedProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (!inView) return

    countRef.current = 0
    const startTime = Date.now()

    const getEasingMultiplier = (progress: number) => {
      switch (easing) {
        case "linear":
          return progress
        case "easeOut":
          return 1 - Math.pow(1 - progress, 2)
        case "easeIn":
          return progress * progress
        case "easeInOut":
          return progress < 0.5 ? 2 * progress * progress : 1 - Math.pow(-2 * progress + 2, 2) / 2
        default:
          return progress
      }
    }

    const updateCount = () => {
      const now = Date.now()
      const elapsedTime = now - startTime
      const progress = Math.min(elapsedTime / duration, 1)
      const easedProgress = getEasingMultiplier(progress)
      const nextCount = easedProgress * end

      if (Math.abs(nextCount - countRef.current) > 0.1) {
        countRef.current = nextCount
        setCount(nextCount)
      }

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      } else {
        setCount(end)
      }
    }

    requestAnimationFrame(updateCount)
  }, [inView, end, duration, easing])

  const formattedCount = count.toFixed(decimals)

  return (
    <motion.span
      ref={ref}
      className={`font-bold ${className}`}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
    >
      {prefix}
      {formattedCount}
      {suffix}
    </motion.span>
  )
}

