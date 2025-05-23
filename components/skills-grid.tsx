"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Brain, BarChart, Database, GitBranch, Code, Server, LineChart, Cpu } from "lucide-react"
import AnimatedSkillBar from "./animated-skill-bar"

const technicalSkills = [
  { name: "Machine Learning", percentage: 90, icon: <Brain className="h-4 w-4 text-cyan-400" /> },
  { name: "Deep Learning", percentage: 85, icon: <Cpu className="h-4 w-4 text-pink-400" /> },
  { name: "Data Analysis", percentage: 95, icon: <BarChart className="h-4 w-4 text-yellow-400" /> },
  { name: "Statistical Modeling", percentage: 88, icon: <LineChart className="h-4 w-4 text-green-400" /> },
  { name: "Big Data", percentage: 80, icon: <Database className="h-4 w-4 text-purple-400" /> },
  { name: "Cloud Computing", percentage: 75, icon: <Server className="h-4 w-4 text-blue-400" /> },
  { name: "Python", percentage: 95, icon: <Code className="h-4 w-4 text-cyan-400" /> },
  { name: "R", percentage: 85, icon: <GitBranch className="h-4 w-4 text-pink-400" /> },
]

const programmingSkills = [
  { name: "Python", percentage: 95, color: "bg-cyan-500" },
  { name: "R", percentage: 85, color: "bg-pink-500" },
  { name: "SQL", percentage: 90, color: "bg-yellow-500" },
  { name: "JavaScript", percentage: 75, color: "bg-green-500" },
  { name: "Java", percentage: 70, color: "bg-purple-500" },
  { name: "Scala", percentage: 65, color: "bg-blue-500" },
]

const toolsAndFrameworks = [
  { name: "TensorFlow", percentage: 90, color: "bg-orange-500" },
  { name: "PyTorch", percentage: 85, color: "bg-red-500" },
  { name: "Scikit-Learn", percentage: 95, color: "bg-green-500" },
  { name: "Pandas", percentage: 95, color: "bg-blue-500" },
  { name: "Spark", percentage: 80, color: "bg-yellow-500" },
  { name: "Docker", percentage: 75, color: "bg-cyan-500" },
]

export default function SkillsGrid() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div variants={container} initial="hidden" animate={inView ? "show" : "hidden"} className="space-y-6">
        <motion.div variants={item}>
          <h3 className="text-xl font-bold text-white mb-4">Technical Skills</h3>
          <div className="grid grid-cols-1 gap-y-4">
            {technicalSkills.map((skill, index) => (
              <AnimatedSkillBar key={skill.name} name={skill.name} percentage={skill.percentage} icon={skill.icon} />
            ))}
          </div>
        </motion.div>
      </motion.div>

      <div className="space-y-8">
        <motion.div variants={container} initial="hidden" animate={inView ? "show" : "hidden"}>
          <motion.div variants={item}>
            <h3 className="text-xl font-bold text-white mb-4">Programming Languages</h3>
            <div className="space-y-4">
              {programmingSkills.map((skill) => (
                <AnimatedSkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  color={skill.color}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div variants={container} initial="hidden" animate={inView ? "show" : "hidden"}>
          <motion.div variants={item}>
            <h3 className="text-xl font-bold text-white mb-4">Tools & Frameworks</h3>
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
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

