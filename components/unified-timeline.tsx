"use client"

import type React from "react"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar, Award, Star, ArrowRight, MapPin, Users, GraduationCap } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { useState, useRef, useEffect } from "react"
// Update the import to use the correct path
import { useLanguage } from "@/contexts/language-context"

interface Achievement {
  text: string
  icon?: React.ReactNode
}

interface TimelineItem {
  title: string
  company?: string
  institution?: string
  period: string
  description: string[]
  type: "work" | "education" | "award" | "volunteer"
  location?: string
  skills?: string[]
  achievements?: Achievement[]
  teamSize?: number
  keyProjects?: string[]
  date?: Date // For sorting
}

export default function UnifiedTimeline() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null)
  const [inViewStates, setInViewStates] = useState<boolean[]>([])
  const refs = useRef<Array<HTMLDivElement | null>>([])
  
  const { t, dir } = useLanguage()
  
  // Get timeline items from translations
  const timelineItems = t("experience.timeline") as TimelineItem[]
  
  // Convert string dates to Date objects for sorting if needed
  const timelineItemsWithDates = timelineItems.map(item => {
    // If the item already has a date property, use it
    if (item.date) return item;
    
    // Otherwise, try to extract a date from the period
    const periodStart = item.period.split('-')[0].trim();
    const dateParts = periodStart.split('/');
    if (dateParts.length >= 2) {
      const month = parseInt(dateParts[0]) - 1; // JS months are 0-indexed
      const year = parseInt(dateParts[1]);
      return {...item, date: new Date(year, month, 1)};
    }
    
    // Default to current date if period can't be parsed
    return {...item, date: new Date()};
  });
  
  // Sort timeline items by date in descending order (newest first)
  const sortedTimelineItems = [...timelineItemsWithDates].sort((a, b) => 
    (b.date as Date).getTime() - (a.date as Date).getTime()
  );
  
  // Initialize inViewStates based on number of timeline items
  useEffect(() => {
    setInViewStates(Array(sortedTimelineItems.length).fill(false));
  }, [sortedTimelineItems.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInViewStates((prev) => {
              const newState = [...prev]
              // Use a data attribute to store the index
              const itemIndex = entry.target.getAttribute('data-index') ? 
                parseInt(entry.target.getAttribute('data-index') || "-1", 10) : -1
              if (itemIndex >= 0 && itemIndex < newState.length) {
                newState[itemIndex] = true
              }
              return newState
            })
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
      },
    )

    refs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref)
      }
    })

    return () => observer.disconnect()
  }, [])

  const toggleExpand = (index: number) => {
    if (expandedItem === index) {
      setExpandedItem(null)
    } else {
      setExpandedItem(index)
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "work":
        return <Briefcase className="h-4 w-4 text-primary" />
      case "education":
        return <GraduationCap className="h-4 w-4 text-primary" />
      case "award":
        return <Award className="h-4 w-4 text-primary" />
      case "volunteer":
        return <Users className="h-4 w-4 text-primary" />
      default:
        return <Briefcase className="h-4 w-4 text-primary" />
    }
  }

  return (
    <TooltipProvider>
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/70 to-secondary"></div>

        <div className="space-y-12">
          {sortedTimelineItems.map((item, index) => {
            const isEven = index % 2 === 0
            const isExpanded = expandedItem === index

            // Adjust the flex direction based on language direction and even/odd index
            const flexDirection =
              dir === "rtl"
                ? isEven
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
                : isEven
                  ? "md:flex-row-reverse"
                  : "md:flex-row"

            return (
              <motion.div
                key={index}
                ref={(el) => { refs.current[index] = el }}
                data-index={index.toString()}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={inViewStates[index] ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={`relative flex flex-col ${flexDirection}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-background border-2 border-primary transform -translate-x-1/2 flex items-center justify-center z-10">
                  {getTypeIcon(item.type)}
                </div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ${isEven ? "md:pr-12" : "md:pl-12"} pl-12 md:pl-0`}>
                  <motion.div
                    className={`bg-card border border-border rounded-lg p-6 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 ${isExpanded ? "border-primary/50" : ""}`}
                    whileHover={{ scale: 1.02 }}
                    onClick={() => toggleExpand(index)}
                  >
                    <div className="flex flex-wrap items-center justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground">{item.title}</h3>
                      <Badge className="bg-primary/20 text-primary">
                        <Calendar className="h-3 w-3 mr-1" />
                        {item.period}
                      </Badge>
                    </div>

                    {(item.company || item.institution) && (
                      <p className="text-primary mb-2 flex items-center">
                        {item.company || item.institution}
                        {item.location && (
                          <span className="text-muted-foreground flex items-center ml-2">
                            <MapPin className="h-3 w-3 mr-1" />
                            {item.location}
                          </span>
                        )}
                      </p>
                    )}

                    <ul className="list-disc list-inside space-y-1 text-muted-foreground mb-3">
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
                          <Badge key={i} variant="outline" className="text-xs border-border text-muted-foreground">
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
                              <Badge className="bg-secondary hover:bg-secondary/80 text-primary cursor-pointer">
                                {achievement.icon || <Star className="h-3 w-3" />}
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
                        className="mt-4 pt-4 border-t border-border"
                      >
                        {item.teamSize && (
                          <div className="mb-3">
                            <h4 className="text-sm font-medium text-foreground mb-1">Team Size</h4>
                            <div className="flex items-center">
                              <Users className="h-4 w-4 text-primary mr-2" />
                              <span className="text-muted-foreground">{item.teamSize} team members</span>
                            </div>
                          </div>
                        )}

                        {item.keyProjects && item.keyProjects.length > 0 && (
                          <div>
                            <h4 className="text-sm font-medium text-foreground mb-1">Key Projects</h4>
                            <ul className="space-y-1">
                              {item.keyProjects.map((project, i) => (
                                <li key={i} className="flex items-center text-muted-foreground text-sm">
                                  <ArrowRight className="h-3 w-3 text-primary mr-2" />
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
                          className="cursor-pointer border-border text-muted-foreground hover:text-primary"
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

