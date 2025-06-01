"use client"

import React, { useState, useMemo } from 'react'
import { motion } from "framer-motion"
import {
  Code,
  Database,
  BarChart,
  LineChart,
  Users,
  MessageSquare,
  Brain,
  Clock,
  Lightbulb,
  Puzzle,
  Zap,
  Target,
  TrendingUp,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import AnimatedSkillBar from "./animated-skill-bar"
import { Cpu } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { Badge } from "@/components/ui/badge"

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

export default function EnhancedSkillsSection() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState("technical")

  // Memoized skill categories for performance
  const skillCategories = useMemo(() => [
    {
      id: "technical",
      label: t("skills.technical"),
      skills: technicalSkills,
    },
    {
      id: "soft",
      label: t("skills.soft"),
      skills: softSkills,
    },
  ], [t])

  // Memoized technologies list
  const technologies = useMemo(() => [
    "Python", "SQL", "Power BI", "Microsoft Fabric", "Pandas", "NumPy", 
    "Scikit-learn", "TensorFlow", "Excel", "Azure", "Git", "Jupyter",
    "Matplotlib", "Seaborn", "Plotly", "Apache Spark", "Docker", "REST APIs"
  ], [])

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
    <div className="w-full space-y-8">
      {/* Skills Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          {skillCategories.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="text-sm font-medium">
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {skillCategories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="space-y-6">
            <SkillCategory skills={category.skills} title={category.label} />
          </TabsContent>
        ))}
      </Tabs>

      {/* Technologies Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-4"
      >
        <h3 className="text-xl font-semibold text-foreground">{t("skills.technologies")}</h3>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <motion.div
              key={tech}
              variants={item}
            >
              <Badge 
                variant="secondary"
                className="text-xs px-3 py-1 bg-muted/50 hover:bg-muted transition-colors"
              >
                {tech}
              </Badge>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Skills Summary Stats */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
      >
        {[
          { label: t("skills.yearsExperience"), value: "3+", icon: <TrendingUp className="h-5 w-5" /> },
          { label: t("skills.projectsCompleted"), value: "15+", icon: <Target className="h-5 w-5" /> },
          { label: t("skills.technologiesUsed"), value: "20+", icon: <Code className="h-5 w-5" /> },
        ].map((stat) => (
          <motion.div
            key={stat.label}
            variants={item}
            className="text-center p-4 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors"
          >
            <div className="flex justify-center mb-2 text-primary">
              {stat.icon}
            </div>
            <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
            <div className="text-sm text-muted-foreground">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

// Skill Category Component
const SkillCategory = ({ skills, title }: { skills: Skill[] | SoftSkill[]; title: string }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="space-y-4"
    >
      <h3 className="text-xl font-semibold text-foreground mb-6">{title}</h3>
      {skills.map((skill) => (
        <AnimatedSkillBar
          key={skill.name}
          name={skill.name}
          percentage={'percentage' in skill ? skill.percentage : (skill as SoftSkill).strength * 10}
          icon={skill.icon}
        />
      ))}
    </motion.div>
  );
};

