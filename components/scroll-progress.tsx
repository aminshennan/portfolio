"use client"

import { useEffect, useState } from "react"
import { motion, useScroll } from "framer-motion"

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.div
      className={`fixed top-0 left-0 right-0 h-1 bg-cyan-500 z-50 origin-left ${isVisible ? "opacity-100" : "opacity-0"}`}
      style={{ scaleX: scrollYProgress }}
      transition={{ opacity: { duration: 0.3 } }}
    />
  )
}

