"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  Code,
  Database,
  BarChart,
  LineChart,
  Workflow,
  Users,
  MessageSquare,
  Brain,
  Clock,
  Lightbulb,
  Puzzle,
  Zap,
  Target,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import EnhancedCard, {
  CardContent as ECardContent,
  CardHeader as ECardHeader,
  CardTitle as ECardTitle,
} from "@/components/enhanced-card"
import AnimatedSkillBar from "./animated-skill-bar"
import { Cpu, Server } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

interface Skill {
  name: string
  percentage: number
  icon?: React.ReactNode
  color?: string
}

const technicalSkills: Skill[] = [
  { name: "Data Engineering", percentage: 90, icon: <Database className="h-4 w-4 text-cyan-400" /> },
  { name: "Machine Learning", percentage: 92, icon: <Brain className="h-4 w-4 text-pink-400" /> },
  { name: "Deep Learning", percentage: 85, icon: <Cpu className="h-4 w-4 text-yellow-400" /> },
  { name: "Data Analysis", percentage: 95, icon: <BarChart className="h-4 w-4 text-green-400" /> },
  { name: "NLP", percentage: 88, icon: <MessageSquare className="h-4 w-4 text-purple-400" /> },
  { name: "Business Intelligence", percentage: 90, icon: <LineChart className="h-4 w-4 text-blue-400" /> },
]

const programmingLanguages: Skill[] = [
  { name: "Python", percentage: 95, color: "bg-cyan-500" },
  { name: "SQL", percentage: 90, color: "bg-pink-500" },
  { name: "TypeScript/JavaScript", percentage: 85, color: "bg-yellow-500" },
  { name: "Java", percentage: 75, color: "bg-green-500" },
]

const toolsAndFrameworks: Skill[] = [
  { name: "Pandas/NumPy", percentage: 95, color: "bg-orange-500" },
  { name: "scikit-learn", percentage: 92, color: "bg-red-500" },
  { name: "TensorFlow/Keras", percentage: 88, color: "bg-green-500" },
  { name: "PyTorch", percentage: 85, color: "bg-blue-500" },
  { name: "Power BI", percentage: 90, color: "bg-yellow-500" },
  { name: "Hugging Face", percentage: 85, color: "bg-cyan-500" },
  { name: "Next.js", percentage: 80, color: "bg-purple-500" },
  { name: "FastAPI/Flask", percentage: 75, color: "bg-pink-500" },
]

interface SoftSkill {
  name: string
  icon: React.ReactNode
  description: string
  strength: number // 1-10
}

const softSkills: SoftSkill[] = [
  {
    name: "Communication",
    icon: <MessageSquare className="h-6 w-6" />,
    description: "Effectively conveying complex data insights to stakeholders",
    strength: 9,
  },
  {
    name: "Teamwork",
    icon: <Users className="h-6 w-6" />,
    description: "Collaborating across departments to achieve project goals",
    strength: 8,
  },
  {
    name: "Problem Solving",
    icon: <Puzzle className="h-6 w-6" />,
    description: "Breaking down complex problems into manageable components",
    strength: 10,
  },
  {
    name: "Critical Thinking",
    icon: <Brain className="h-6 w-6" />,
    description: "Analyzing information objectively to make reasoned judgments",
    strength: 9,
  },
  {
    name: "Time Management",
    icon: <Clock className="h-6 w-6" />,
    description: "Prioritizing tasks and meeting deadlines efficiently",
    strength: 8,
  },
  {
    name: "Creativity",
    icon: <Lightbulb className="h-6 w-6" />,
    description: "Developing innovative approaches to data challenges",
    strength: 7,
  },
  {
    name: "Adaptability",
    icon: <Zap className="h-6 w-6" />,
    description: "Quickly adjusting to new technologies and methodologies",
    strength: 9,
  },
  {
    name: "Leadership",
    icon: <Target className="h-6 w-6" />,
    description: "Guiding teams and projects to successful outcomes",
    strength: 8,
  },
]

// Helper function to convert multi-word skill names to camelCase
const toCamelCase = (str: string) => {
  return str.replace(/\s(.)/g, function (match, group1) {
    return group1.toUpperCase()
  }).replace(/\s/g, '').replace(/^(.)/, function (match, group1) {
    return group1.toLowerCase()
  });
}

export default function EnhancedSkillsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const { t } = useLanguage()

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <div ref={ref} className="w-full">
      <Tabs defaultValue="technical" className="w-full">
        <TabsList className="grid w-full grid-cols-2 glass-effect mb-8">
          <TabsTrigger
            value="technical"
            className="data-[state=active]:bg-cyan-900/50 data-[state=active]:backdrop-blur-md data-[state=active]:text-white"
          >
            {t("skills.tabs.technical")}
          </TabsTrigger>
          <TabsTrigger
            value="soft"
            className="data-[state=active]:bg-pink-900/50 data-[state=active]:backdrop-blur-md data-[state=active]:text-white"
          >
            {t("skills.tabs.soft")}
          </TabsTrigger>
        </TabsList>

        <TabsContent value="technical">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Technical Skills */}
            <div className="space-y-6">
              <EnhancedCard hoverEffect="glow" className="glass-effect h-full">
                <ECardHeader>
                  <div className="flex items-center gap-3">
                    <div className="text-cyan-400">
                      <Brain className="h-6 w-6" />
                    </div>
                    <ECardTitle>{t("skills.categories.technicalSkills")}</ECardTitle>
                  </div>
                </ECardHeader>
                <ECardContent>
                  <div className="space-y-4">
                    {technicalSkills.map((skill) => (
                      <AnimatedSkillBar
                        key={skill.name}
                        name={skill.name}
                        percentage={skill.percentage}
                        icon={skill.icon}
                      />
                    ))}
                  </div>
                </ECardContent>
              </EnhancedCard>
            </div>

            {/* Programming Languages */}
            <div className="space-y-6">
              <EnhancedCard hoverEffect="glow" className="glass-effect h-full">
                <ECardHeader>
                  <div className="flex items-center gap-3">
                    <div className="text-pink-400">
                      <Code className="h-6 w-6" />
                    </div>
                    <ECardTitle>{t("skills.categories.programmingLanguages")}</ECardTitle>
                  </div>
                </ECardHeader>
                <ECardContent>
                  <div className="space-y-4">
                    {programmingLanguages.map((skill) => (
                      <AnimatedSkillBar
                        key={skill.name}
                        name={skill.name}
                        percentage={skill.percentage}
                        color={skill.color}
                      />
                    ))}
                  </div>
                </ECardContent>
              </EnhancedCard>
            </div>

            {/* Tools & Frameworks */}
            <div className="space-y-6">
              <EnhancedCard hoverEffect="glow" className="glass-effect h-full">
                <ECardHeader>
                  <div className="flex items-center gap-3">
                    <div className="text-yellow-400">
                      <Workflow className="h-6 w-6" />
                    </div>
                    <ECardTitle>{t("skills.categories.toolsFrameworks")}</ECardTitle>
                  </div>
                </ECardHeader>
                <ECardContent>
                  <div className="space-y-4">
                    {toolsAndFrameworks.map((skill) => (
                      <AnimatedSkillBar
                        key={skill.name}
                        name={skill.name}
                        percentage={skill.percentage}
                        color={skill.color}
                      />
                    ))}
                  </div>
                </ECardContent>
              </EnhancedCard>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="soft">
          <motion.div
            variants={container}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 gap-6"
          >
            {softSkills.map((skill, index) => {
              // Calculate the size based on strength (7-10 range mapped to 80-100%)
              const size = 80 + (skill.strength - 7) * 6.67

              return (
                <motion.div
                  key={skill.name}
                  variants={item}
                  className="glass-effect p-6 rounded-lg border border-gray-800/50 backdrop-blur-md flex flex-col items-center text-center"
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
                    <div className="absolute inset-0 flex items-center justify-center text-pink-400">{skill.icon}</div>
                  </motion.div>

                  <motion.h3
                    className="text-white font-medium mb-1"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    {t(`skills.softSkills.${toCamelCase(skill.name)}.name`)}
                  </motion.h3>

                  <motion.p
                    className="text-gray-400 text-xs"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  >
                    {t(`skills.softSkills.${toCamelCase(skill.name)}.description`)}
                  </motion.p>
                </motion.div>
              )
            })}
          </motion.div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

