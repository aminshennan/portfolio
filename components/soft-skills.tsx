"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Users, MessageSquare, Brain, Clock, Lightbulb, Puzzle, Zap, Target } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface SoftSkill {
  name: string
  icon: React.ReactNode
  description: string
  strength: number // 1-10
  key: string
}

const softSkills: SoftSkill[] = [
  {
    name: "Communication",
    icon: <MessageSquare className="h-6 w-6" />,
    description: "Effectively conveying complex data insights to stakeholders",
    strength: 9,
    key: "communication"
  },
  {
    name: "Teamwork",
    icon: <Users className="h-6 w-6" />,
    description: "Collaborating across departments to achieve project goals",
    strength: 8,
    key: "teamwork"
  },
  {
    name: "Problem Solving",
    icon: <Puzzle className="h-6 w-6" />,
    description: "Breaking down complex problems into manageable components",
    strength: 10,
    key: "problemSolving"
  },
  {
    name: "Critical Thinking",
    icon: <Brain className="h-6 w-6" />,
    description: "Analyzing information objectively to make reasoned judgments",
    strength: 9,
    key: "criticalThinking"
  },
  {
    name: "Time Management",
    icon: <Clock className="h-6 w-6" />,
    description: "Prioritizing tasks and meeting deadlines efficiently",
    strength: 8,
    key: "timeManagement"
  },
  {
    name: "Creativity",
    icon: <Lightbulb className="h-6 w-6" />,
    description: "Developing innovative approaches to data challenges",
    strength: 7,
    key: "creativity"
  },
  {
    name: "Adaptability",
    icon: <Zap className="h-6 w-6" />,
    description: "Quickly adjusting to new technologies and methodologies",
    strength: 9,
    key: "adaptability"
  },
  {
    name: "Leadership",
    icon: <Target className="h-6 w-6" />,
    description: "Guiding teams and projects to successful outcomes",
    strength: 8,
    key: "leadership"
  },
]

export default function SoftSkills() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const { t } = useLanguage()

  return (
    <div ref={ref} className="relative">
      {/* Background blur elements */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl"></div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {softSkills.map((skill, index) => {
          return (
            <motion.div
              key={skill.key}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <motion.div
                className="relative mb-4"
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.1 + index * 0.1,
                }}
              >
                {/* Outer ring - strength indicator */}
                <svg width="100" height="100" viewBox="0 0 100 100" className="transform -rotate-90">
                  <circle cx="50" cy="50" r="45" fill="transparent" stroke="#1e293b" strokeWidth="8" />
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="45"
                    fill="transparent"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    strokeDasharray={`${2 * Math.PI * 45 * (skill.strength / 10)} ${2 * Math.PI * 45 * (1 - skill.strength / 10)}`}
                    initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
                    animate={inView ? { strokeDashoffset: 0 } : {}}
                    transition={{ duration: 1.5, delay: 0.2 + index * 0.1 }}
                  />
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#ec4899" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Icon */}
                <div className="absolute inset-0 flex items-center justify-center text-cyan-400">{skill.icon}</div>
              </motion.div>

              <motion.h3
                className="text-white font-medium mb-1"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                {t(`skills.softSkills.${skill.key}.name`)}
              </motion.h3>

              <motion.p
                className="text-gray-400 text-xs"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              >
                {t(`skills.softSkills.${skill.key}.description`)}
              </motion.p>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}

