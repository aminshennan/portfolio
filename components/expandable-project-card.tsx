"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ExternalLink, Github, ArrowUpRight, FileText, Lightbulb, CheckCircle, Code } from "lucide-react"
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  badge?: string;
  description: string;
  tags: string[];
  detailedDescription?: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
}

// Animation variants
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const contentVariants = {
  hidden: { opacity: 0, height: 0 },
  visible: { 
    opacity: 1, 
    height: "auto",
    transition: { duration: 0.3, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    height: 0,
    transition: { duration: 0.2, ease: "easeIn" }
  }
};

const ExpandableProjectCard: React.FC<ProjectCardProps> = ({
  title,
  badge,
  description,
  tags,
  detailedDescription,
  challenges,
  solutions,
  results,
  githubUrl,
  liveUrl,
  image
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="w-full"
    >
      <Card className="glass-effect border-border/20 hover:border-primary/30 transition-all duration-300 overflow-hidden group">
        <CardHeader className="space-y-4">
          {/* Project Title and Badge */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {title}
            </CardTitle>
            {badge && (
              <Badge className="w-fit bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-primary border-primary/30">
                {badge}
              </Badge>
            )}
          </div>

          {/* Project Description */}
          <CardDescription className="text-muted-foreground leading-relaxed">
            {description}
          </CardDescription>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {tags?.map((tag, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="text-xs bg-muted/50 hover:bg-muted transition-colors"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {/* Expand/Collapse Button */}
            {(detailedDescription || challenges || solutions || results) && (
              <Button
                onClick={toggleExpanded}
                variant="outline"
                size="sm"
                className="text-xs hover:bg-primary/10 hover:border-primary/50"
              >
                <span className="mr-1">
                  {isExpanded ? 'Show Less' : 'Learn More'}
                </span>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="h-3 w-3" />
                </motion.div>
              </Button>
            )}

            {/* GitHub Link */}
            {githubUrl && (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="text-xs hover:bg-primary/10 hover:border-primary/50"
              >
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-3 w-3 mr-1" />
                  Code
                  <ArrowUpRight className="h-3 w-3 ml-1" />
                </a>
              </Button>
            )}

            {/* Live Demo Link */}
            {liveUrl && (
              <Button
                asChild
                variant="outline"
                size="sm"
                className="text-xs hover:bg-primary/10 hover:border-primary/50"
              >
                <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-3 w-3 mr-1" />
                  Live Demo
                  <ArrowUpRight className="h-3 w-3 ml-1" />
                </a>
              </Button>
            )}
          </div>
        </CardHeader>

        {/* Expanded Content */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <CardContent className="pt-0 space-y-6">
                {/* Project Image */}
                {image && (
                  <div className="rounded-lg overflow-hidden border border-border/20">
                    <Image
                      src={image}
                      alt={`${title} preview`}
                      width={500}
                      height={300}
                      className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                )}

                {/* Detailed Description */}
                {detailedDescription && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-primary" />
                      <h4 className="font-semibold text-foreground">Project Overview</h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed pl-6">
                      {detailedDescription}
                    </p>
                  </div>
                )}

                {/* Challenges */}
                {challenges && challenges.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Lightbulb className="h-4 w-4 text-orange-400" />
                      <h4 className="font-semibold text-foreground">Challenges</h4>
                    </div>
                    <ul className="space-y-2 pl-6">
                      {challenges.map((challenge, index) => (
                        <li key={index} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="text-orange-400 mt-1.5 text-xs">●</span>
                          <span>{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Solutions */}
                {solutions && solutions.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Code className="h-4 w-4 text-blue-400" />
                      <h4 className="font-semibold text-foreground">Solutions</h4>
                    </div>
                    <ul className="space-y-2 pl-6">
                      {solutions.map((solution, index) => (
                        <li key={index} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="text-blue-400 mt-1.5 text-xs">●</span>
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Results */}
                {results && results.length > 0 && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-400" />
                      <h4 className="font-semibold text-foreground">Results & Impact</h4>
                    </div>
                    <ul className="space-y-2 pl-6">
                      {results.map((result, index) => (
                        <li key={index} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="text-green-400 mt-1.5 text-xs">●</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </motion.div>
          )}
        </AnimatePresence>
      </Card>
    </motion.div>
  );
};

export default ExpandableProjectCard;

