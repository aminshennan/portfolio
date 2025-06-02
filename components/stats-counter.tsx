"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Code, Users, Zap } from "lucide-react"

interface Stat {
  icon: React.ElementType
  value: number
  label: string
  suffix?: string
}

const stats: Stat[] = [
  { icon: Code, value: 50, label: "Projects Completed" },
  { icon: Users, value: 25, label: "Happy Clients" },
  { icon: Award, value: 10, label: "Awards Won" },
  { icon: Zap, value: 99, label: "Success Rate", suffix: "%" },
]

export default function StatsCounter() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [counts, setCounts] = useState(stats.map(() => 0))

  useEffect(() => {
    if (!inView) return

    const intervals = stats.map((stat, index) => {
      return setInterval(() => {
        setCounts((prev) => {
          const newCounts = [...prev]
          if (newCounts[index] < stat.value) {
            newCounts[index] = Math.min(newCounts[index] + Math.ceil(stat.value / 30), stat.value)
          }
          return newCounts
        })
      }, 50)
    })

    return () => {
      intervals.forEach((interval) => clearInterval(interval))
    }
  }, [inView])

  return (
    <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <Card className="bg-gray-900 border-gray-800 hover:border-cyan-800 transition-colors">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <stat.icon className="h-8 w-8 mb-2 text-cyan-400" />
              <div className="text-3xl font-bold text-white">
                {counts[index]}
                {stat.suffix || ""}
              </div>
              <p className="text-gray-400 text-sm">{stat.label}</p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  )
}

