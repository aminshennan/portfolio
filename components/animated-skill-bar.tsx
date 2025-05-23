"use client"

import type React from "react"
import { useState, useEffect, useMemo } from "react"
import { useInView } from "react-intersection-observer"
import { motion, AnimatePresence } from "framer-motion"

interface AnimatedSkillBarProps {
  name: string
  percentage: number
  color?: string
  icon?: React.ReactNode
  description?: string
}

interface Milestone {
  label: string
  position: number
  active: boolean
}

// Extract utility functions outside component to avoid recreation on each render
const getSkillCategory = (percentage: number): string => {
  if (percentage >= 90) return "Expert";
  if (percentage >= 80) return "Advanced";
  if (percentage >= 70) return "Proficient";
  if (percentage >= 60) return "Intermediate";
  return "Beginner";
}

const getColorClass = (color: string): string => {
  if (color.includes('cyan')) return 'cyan';
  if (color.includes('pink')) return 'pink';
  if (color.includes('purple')) return 'purple';
  if (color.includes('yellow')) return 'yellow';
  if (color.includes('orange')) return 'orange';
  if (color.includes('green')) return 'green';
  if (color.includes('blue')) return 'blue';
  if (color.includes('red')) return 'red';
  return 'cyan';
}

const getMilestones = (percentage: number): Milestone[] => {
  const baseMarkers = [
    { label: "Beginner", position: 20 },
    { label: "Intermediate", position: 60 },
    { label: "Proficient", position: 70 },
    { label: "Advanced", position: 80 },
    { label: "Expert", position: 90 }
  ];

  return baseMarkers.map(marker => ({
    ...marker,
    active: percentage >= marker.position
  }));
}

export default function AnimatedSkillBar({ 
  name, 
  percentage, 
  color = "bg-cyan-500", 
  icon, 
  description = "Proficient in using and applying this skill in professional contexts"
}: AnimatedSkillBarProps) {
  const [width, setWidth] = useState(0)
  const [showTooltip, setShowTooltip] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      setWidth(percentage)
    }
  }, [inView, percentage])

  // Memoize these calculations to avoid recalculating on every render
  const level = useMemo(() => getSkillCategory(percentage), [percentage]);
  const colorClass = useMemo(() => getColorClass(color), [color]);
  const milestones = useMemo(() => getMilestones(percentage), [percentage]);

  return (
    <motion.div 
      ref={ref} 
      className="skill-bar group relative mb-5"
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      {/* Floating Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div 
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 p-3 bg-gray-900/90 backdrop-blur-md text-white rounded-lg shadow-xl z-50 w-64 border border-${colorClass}-500/30`}
            style={{ boxShadow: `0 0 15px rgba(var(--${colorClass}-rgb), 0.15)` }}
          >
            <div className="text-center mb-2">
              <span className={`inline-block px-2 py-0.5 text-xs font-semibold rounded-full bg-${colorClass}-500/20 text-${colorClass}-400 mb-1`}>
                {level} Level
              </span>
              <h4 className="text-sm font-bold">{name}</h4>
            </div>
            
            <div className="text-xs text-gray-300 mb-2">{description}</div>
            
            <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent mb-2"></div>
            
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="flex items-center">
                <div className={`w-2 h-2 rounded-full bg-${colorClass}-500 mr-1`}></div>
                <span>Proficiency: {percentage}%</span>
              </div>
              <div className="flex items-center">
                <div className={`w-2 h-2 rounded-full bg-${colorClass}-800 mr-1`}></div>
                <span>Experience: {Math.floor(percentage / 10)} years</span>
              </div>
            </div>
            
            {/* Triangle pointer */}
            <div className={`absolute top-full left-1/2 transform -translate-x-1/2 border-8 border-transparent border-t-gray-900`}></div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center">
          {icon && (
            <motion.span 
              className={`mr-2 text-${colorClass}-500`}
              animate={{ scale: showTooltip ? 1.2 : 1 }}
              transition={{ duration: 0.2 }}
            >
              {icon}
            </motion.span>
          )}
          <span className="text-sm font-medium text-gray-300">{name}</span>
        </div>
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className={`text-sm font-medium text-${colorClass}-400`}
        >
          {percentage}%
        </motion.span>
      </div>
      
      <div className="relative">
        <div className="w-full bg-gray-800/70 rounded-full h-3 overflow-hidden shadow-inner group-hover:bg-gray-800/90 transition-colors">
        <motion.div
            className={`h-3 rounded-full ${color} shadow-glow relative overflow-hidden`}
          initial={{ width: 0 }}
          animate={{ width: `${width}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          >
            {/* Animated shine effect */}
            <motion.div 
              className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ["0%", "100%"] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            />
          </motion.div>
        </div>
        
        {/* Skill milestones */}
        <div className="flex justify-between w-full absolute -bottom-4 px-1">
          {milestones.map((milestone, index) => (
            <div 
              key={index} 
              className="relative"
              style={{ left: `${milestone.position}%`, transform: 'translateX(-50%)' }}
            >
              <div 
                className={`w-0.5 h-1.5 ${milestone.active ? `bg-${colorClass}-500` : 'bg-gray-600'}`}
                style={{ opacity: milestone.active ? 1 : 0.5 }}
              ></div>
              {showTooltip && (
                <div 
                  className={`absolute -bottom-3 transform -translate-x-1/2 text-[9px] whitespace-nowrap ${milestone.active ? `text-${colorClass}-500` : 'text-gray-600'}`}
                  style={{ opacity: milestone.active ? 1 : 0.5 }}
                >
                  {milestone.label}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

