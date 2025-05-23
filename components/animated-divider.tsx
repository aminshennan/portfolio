"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface AnimatedDividerProps {
  width?: string
  className?: string
  variant?: "gradient" | "dashed" | "glow" | "dots"
}

export default function AnimatedDivider({
  width = "100px",
  className = "",
  variant = "gradient",
}: AnimatedDividerProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div ref={ref} className={`flex items-center justify-center my-6 ${className}`}>
      {variant === "gradient" && (
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={inView ? { width, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-cyan-500 rounded-full"
        />
      )}

      {variant === "dashed" && (
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={inView ? { width, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="relative h-px bg-gray-700"
        >
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: "100%" } : {}}
            transition={{ duration: 1.5, delay: 0.3 }}
            className="absolute inset-0 border-t border-dashed border-cyan-500"
          />
        </motion.div>
      )}

      {variant === "glow" && (
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={inView ? { width, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="h-px bg-cyan-500 shadow-sm shadow-cyan-500"
          style={{ boxShadow: "0 0 10px 1px rgba(6, 182, 212, 0.7)" }}
        />
      )}

      {variant === "dots" && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="flex items-center space-x-2"
          style={{ width }}
        >
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
              className="w-1.5 h-1.5 rounded-full bg-cyan-500"
            />
          ))}
        </motion.div>
      )}
    </div>
  )
}

