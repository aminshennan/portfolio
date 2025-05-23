"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Users, Star, Calendar, MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import AnimatedGradientBorder from "./animated-gradient-border"
import EnhancedCard, { CardContent, CardHeader, CardTitle } from "./enhanced-card"
import { useLanguage } from "@/contexts/language-context"

interface VolunteerRole {
  title: string
  organization: string
  period: string
  description: string[]
  achievements?: string[]
  location?: string
}

export default function VolunteerRoles() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })
  
  const { t } = useLanguage()
  
  // Get volunteer roles from translations
  const volunteerRoles = t("volunteer.roles") as VolunteerRole[]

  return (
    <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {volunteerRoles.map((role, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <AnimatedGradientBorder>
            <EnhancedCard hoverEffect="glow" className="glass-effect h-full">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-foreground">{role.title}</CardTitle>
                  <Badge className="bg-pink-500/20 text-pink-400">
                    <Calendar className="h-3 w-3 mr-1" />
                    {role.period}
                  </Badge>
                </div>
                <div className="text-pink-400 text-sm mt-1">{role.organization}</div>
                {role.location && (
                  <div className="text-muted-foreground flex items-center text-xs mt-1">
                    <MapPin className="h-3 w-3 mr-1" />
                    {role.location}
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-foreground mb-2">{t("volunteer.responsibilities")}</h4>
                    <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                      {role.description.map((item, i) => (
                        <li key={i} className="text-sm">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {role.achievements && (
                    <div>
                      <h4 className="text-sm font-medium text-foreground mb-2 flex items-center">
                        <Star className="h-3 w-3 mr-1 text-pink-400" />
                        {t("volunteer.keyAchievements")}
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {role.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex justify-end">
                    <Badge className="bg-secondary hover:bg-secondary/80 text-pink-400">
                      <Users className="h-3 w-3 mr-1" />
                      {t("volunteer.leadershipExperience")}
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </EnhancedCard>
          </AnimatedGradientBorder>
        </motion.div>
      ))}
    </div>
  )
}

