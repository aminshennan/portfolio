"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, Award, BookOpen, Star, ArrowRight, MapPin, Users, Zap, Target } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useState, useRef, useEffect } from "react"

interface Achievement {
  text: string
  icon: React.ReactNode
}

interface TimelineItem {
  title: string
  company?: string
  institution?: string
  period: string
  description: string[]
  type: "work" | "education" | "award"
  location?: string
  skills?: string[]
  achievements?: Achievement[]
  teamSize?: number
  keyProjects?: string[]
}

const timelineItems: TimelineItem[] = [
  {
    title: "Senior Data Scientist",
    company: "TechCorp Inc.",
    period: "2020 - Present",
    description: [
      "Led a team of 5 data scientists in developing machine learning models for various business units.",
      "Implemented a real-time anomaly detection system that reduced fraud by 40%.",
      "Collaborated with product managers to integrate AI features into the company's flagship product.",
    ],
    type: "work",
    location: "San Francisco, CA",
    skills: ["Python", "TensorFlow", "AWS", "Leadership"],
    achievements: [
      { text: "Reduced fraud by 40%", icon: <Zap className="h-3 w-3" /> },
      { text: "Increased model accuracy by 25%", icon: <Target className="h-3 w-3" /> },
      { text: "Led team of 5 data scientists", icon: <Users className="h-3 w-3" /> },
    ],
    teamSize: 5,
    keyProjects: ["Fraud Detection System", "Customer Segmentation", "Predictive Analytics Dashboard"],
  },
  {
    title: "Data Scientist",
    company: "DataDrive Solutions",
    period: "2017 - 2020",
    description: [
      "Developed and maintained machine learning models for customer segmentation and personalization.",
      "Created data visualization dashboards that improved decision-making processes for clients.",
      "Conducted A/B tests to optimize marketing campaigns, resulting in a 25% increase in conversion rates.",
    ],
    type: "work",
    location: "Boston, MA",
    skills: ["R", "SQL", "Tableau", "A/B Testing"],
    achievements: [
      { text: "Increased conversion rates by 25%", icon: <Zap className="h-3 w-3" /> },
      { text: "Optimized marketing spend by 15%", icon: <Target className="h-3 w-3" /> },
    ],
    teamSize: 3,
    keyProjects: ["Customer Lifetime Value Model", "Marketing Attribution System"],
  },
  {
    title: "Best AI Implementation Award",
    period: "2019",
    description: [
      "Recognized for innovative use of AI in healthcare diagnostics.",
      "Project featured in industry publications and conferences.",
    ],
    type: "award",
    achievements: [
      { text: "Featured in AI Magazine", icon: <Star className="h-3 w-3" /> },
      { text: "Presented at DataCon 2019", icon: <Users className="h-3 w-3" /> },
    ],
  },
  {
    title: "M.S. in Data Science",
    institution: "MIT",
    period: "2015 - 2017",
    description: [
      "Specialized in machine learning and statistical analysis.",
      "Thesis: 'Predictive Modeling for Early Disease Detection Using Wearable Sensors'",
      "GPA: 3.9/4.0",
    ],
    type: "education",
    location: "Cambridge, MA",
    skills: ["Machine Learning", "Statistics", "Research"],
    achievements: [
      { text: "Dean's List all semesters", icon: <Star className="h-3 w-3" /> },
      { text: "Research Grant Recipient", icon: <Award className="h-3 w-3" /> },
    ],
  },
  {
    title: "Data Analyst Intern",
    company: "HealthTech Innovations",
    period: "2016",
    description: [
      "Analyzed patient data to identify patterns in treatment outcomes.",
      "Developed dashboards for visualizing healthcare metrics.",
    ],
    type: "work",
    location: "New York, NY",
    skills: ["Python", "SQL", "Data Visualization"],
    keyProjects: ["Patient Outcome Analysis", "Healthcare Metrics Dashboard"],
  },
  {
    title: "B.S. in Computer Science",
    institution: "Stanford University",
    period: "2011 - 2015",
    description: ["Minor in Statistics", "Research Assistant in the AI Lab", "GPA: 3.8/4.0"],
    type: "education",
    location: "Stanford, CA",
    skills: ["Programming", "Algorithms", "Statistics"],
    achievements: [{ text: "Graduated with Honors", icon: <Star className="h-3 w-3" /> }],
  },
]

export default function ExperienceTimeline() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null)
  const [inViewStates, setInViewStates] = useState<boolean[]>(Array(timelineItems.length).fill(false))
  const refs = useRef<Array<HTMLDivElement | null>>(Array(timelineItems.length).fill(null))

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setInViewStates((prev) => {
            const newState = [...prev]
            const itemIndex = Number.parseInt((entry.target as HTMLElement).dataset.index || "-1", 10)
            if (itemIndex >= 0 && itemIndex < newState.length) {
              newState[itemIndex] = true
            }
            return newState
          })
        }
      })
    }, options)

    refs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref)
      }
    })

    return () => observer.disconnect()
  }, [])

  const setRef = (el: HTMLDivElement | null, index: number): void => {
    refs.current[index] = el;
  }

  const toggleExpand = (index: number) => {
    if (expandedItem === index) {
      setExpandedItem(null)
    } else {
      setExpandedItem(index)
    }
  }

  return (
    <TooltipProvider>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-cyan-400 to-gray-800"></div>

        <div className="space-y-12">
          {timelineItems.map((item, index) => {
            const isEven = index % 2 === 0
            const isExpanded = expandedItem === index

            return (
              <motion.div
                key={index}
                ref={(el) => setRef(el, index)}
                data-index={index.toString()}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={inViewStates[index] ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`relative flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-gray-900 border-2 border-cyan-500 transform -translate-x-1/2 flex items-center justify-center z-10">
                  {item.type === "work" && <Briefcase className="h-4 w-4 text-cyan-400" />}
                  {item.type === "education" && <BookOpen className="h-4 w-4 text-cyan-400" />}
                  {item.type === "award" && <Award className="h-4 w-4 text-cyan-400" />}
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${isEven ? "md:pr-12" : "md:pl-12"} pl-12 md:pl-0`}>
                  <motion.div
                    className={`bg-gray-900 border border-gray-800 rounded-lg p-6 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 ${isExpanded ? "border-cyan-500/50" : ""}`}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => toggleExpand(index)}
                  >
                    <div className="flex flex-wrap items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{item.title}</h3>
                      <Badge className="bg-cyan-900 text-cyan-100">
                        <Calendar className="h-3 w-3 mr-1" />
                        {item.period}
                      </Badge>
                    </div>

                    {(item.company || item.institution) && (
                      <p className="text-cyan-400 mb-2 flex items-center">
                        {item.company || item.institution}
                        {item.location && (
                          <span className="text-gray-500 flex items-center ml-2">
                            <MapPin className="h-3 w-3 mr-1" />
                            {item.location}
                          </span>
                        )}
                      </p>
                    )}

                    <ul className="list-disc list-inside space-y-1 text-gray-300 mb-3">
                      {item.description.map((desc, i) => (
                        <li key={i} className="text-sm">
                          {desc}
                        </li>
                      ))}
                    </ul>

                    {/* Skills tags */}
                    {item.skills && item.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {item.skills.map((skill, i) => (
                          <Badge key={i} variant="outline" className="text-xs border-gray-700 text-gray-300">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    )}

                    {/* Achievements */}
                    {item.achievements && item.achievements.length > 0 && (
                      <div className="flex flex-wrap gap-2 mb-3">
                        {item.achievements.map((achievement, i) => (
                          <Tooltip key={i}>
                            <TooltipTrigger asChild>
                              <Badge className="bg-gray-800 hover:bg-gray-700 text-cyan-400 cursor-pointer">
                                {achievement.icon}
                                <span className="ml-1">{achievement.text}</span>
                              </Badge>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Achievement: {achievement.text}</p>
                            </TooltipContent>
                          </Tooltip>
                        ))}
                      </div>
                    )}

                    {/* Expanded content */}
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 pt-4 border-t border-gray-800"
                      >
                        {item.teamSize && (
                          <div className="mb-3">
                            <h4 className="text-sm font-medium text-white mb-1">Team Size</h4>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 text-cyan-400 mr-2" />
                              <span className="text-gray-300">{item.teamSize} team members</span>
                            </div>
                          </div>
                        )}

                        {item.keyProjects && item.keyProjects.length > 0 && (
                          <div>
                            <h4 className="text-sm font-medium text-white mb-1">Key Projects</h4>
                            <ul className="space-y-1">
                              {item.keyProjects.map((project, i) => (
                                <li key={i} className="flex items-center text-gray-300 text-sm">
                                  <ArrowRight className="h-3 w-3 text-cyan-400 mr-2" />
                                  {project}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </motion.div>
                    )}

                    {/* Expand/collapse indicator */}
                    {(item.teamSize || (item.keyProjects && item.keyProjects.length > 0)) && (
                      <div className="mt-3 text-center">
                        <Badge
                          variant="outline"
                          className="cursor-pointer border-gray-700 text-gray-400 hover:text-cyan-400"
                        >
                          {isExpanded ? "Show Less" : "Show More"}
                        </Badge>
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </TooltipProvider>
  )
}

