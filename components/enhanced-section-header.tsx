"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import AnimatedDivider from "./animated-divider"
import { useLanguage } from "@/contexts/language-context"

interface EnhancedSectionHeaderProps {
  title: string
  subtitle?: string
  align?: "left" | "center" | "right"
  dividerVariant?: "gradient" | "dashed" | "glow" | "dots"
  titleColor?: string
  subtitleColor?: string
}

export default function EnhancedSectionHeader({
  title,
  subtitle,
  align = "left",
  dividerVariant = "gradient",
  titleColor = "text-cyan-400",
  subtitleColor = "text-gray-400",
}: EnhancedSectionHeaderProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const { dir } = useLanguage()

  // Adjust alignment based on language direction
  let adjustedAlign = align
  if (dir === "rtl") {
    if (align === "left") adjustedAlign = "right"
    else if (align === "right") adjustedAlign = "left"
  }

  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      className={`flex flex-col ${alignmentClasses[adjustedAlign]} mb-8 w-full`}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl ${titleColor}`}
      >
        {title}
      </motion.h2>

      <AnimatedDivider
        variant={dividerVariant}
        width={adjustedAlign === "center" ? "120px" : "80px"}
        className={adjustedAlign === "center" ? "mx-auto" : ""}
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className={`${subtitleColor} max-w-2xl`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}

