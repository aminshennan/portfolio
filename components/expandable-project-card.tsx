"use client"

import { useState, useRef, useEffect, useCallback, useMemo } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronDown, ExternalLink, Github, ArrowUpRight, BarChart, FileText, Lightbulb, CheckCircle, Code } from "lucide-react"

export interface ProjectProps {
  title: string
  badge: string
  description: string
  tags: string[]
  detailedDescription?: string
  challenges?: string[]
  solutions?: string[]
  results?: string[]
  githubUrl?: string
  liveUrl?: string
  image?: string
}

// Extracted utility function for metric extraction
const extractMetrics = (results?: string[]) => {
  if (!results || !results.length) return [];
  
  const metrics = [];
  const regex = /(\d+)([%x])|(\d+)%|\b(increased|reduced|improved) by (\d+)%/gi;
  
  for (const result of results) {
    const matches = [...result.matchAll(regex)];
    if (matches.length > 0) {
      for (const match of matches) {
        const value = match[1] || match[5] || 0;
        const unit = match[2] || '%';
        const action = match[4]?.toLowerCase() || '';
        
        let label = '';
        if (result.toLowerCase().includes('accuracy')) label = 'Accuracy';
        else if (result.toLowerCase().includes('time')) label = 'Time Saved';
        else if (result.toLowerCase().includes('conversion')) label = 'Conversion Rate';
        else if (result.toLowerCase().includes('error')) label = 'Error Reduction';
        else label = 'Improvement';
        
        metrics.push({
          value: parseInt(value as string),
          unit,
          label,
          action
        });
      }
    }
  }
  
  return metrics.slice(0, 3); // Limit to 3 metrics
};

// Update the card styling to use theme variables and be compatible with both modes
export default function ExpandableProjectCard({
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
  image,
}: ProjectProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  
  // Determine if we have project metrics to show - memoized
  const hasMetrics = useMemo(() => 
    results && results.length > 0 && results.some(result => 
      result.includes('%') || result.match(/\d+%/) || result.match(/\d+x/) || 
      result.includes('increased') || result.includes('reduced')
    ), 
    [results]
  );
  
  // Memoize metrics to prevent recalculation on every render
  const metrics = useMemo(() => extractMetrics(results), [results]);

  // Use callbacks for event handlers
  const toggleExpanded = useCallback(() => {
    setIsExpanded(prev => !prev);
  }, []);

  const handleHoverStart = useCallback(() => {
    setIsHovered(true);
  }, []);

  const handleHoverEnd = useCallback(() => {
    setIsHovered(false);
  }, []);

  const switchTab = useCallback((tab: string) => {
    setActiveTab(tab);
  }, []);

  // Memoize the header content
  const cardHeaderContent = useMemo(() => (
    <CardHeader className={image ? "pt-3" : ""}>
      <CardTitle className="text-foreground flex justify-between items-center group">
        <span className="group-hover:text-primary transition-colors duration-300">{title}</span>
        {!image && (
          <div className="flex space-x-2">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-primary/20 hover:text-primary">
                  <Github className="h-4 w-4" />
                </Button>
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full hover:bg-primary/20 hover:text-primary">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            )}
          </div>
        )}
      </CardTitle>
      {!image && <Badge className="bg-primary/20 text-primary w-fit shadow-glow">{badge}</Badge>}
    </CardHeader>
  ), [image, title, githubUrl, liveUrl, badge]);

  // Memoize the tab buttons to prevent re-rendering
  const tabButtons = useMemo(() => (
    <div className="flex space-x-1 border-b border-border mb-4">
      {detailedDescription && (
        <button 
          onClick={() => switchTab("overview")}
          className={`px-3 py-2 text-sm font-medium flex items-center gap-1 ${activeTab === "overview" 
            ? "text-primary border-b-2 border-primary" 
            : "text-muted-foreground hover:text-foreground"}`}
        >
          <FileText className="h-3.5 w-3.5" />
          <span>Overview</span>
        </button>
      )}
      {challenges && challenges.length > 0 && (
        <button 
          onClick={() => switchTab("challenges")}
          className={`px-3 py-2 text-sm font-medium flex items-center gap-1 ${activeTab === "challenges" 
            ? "text-primary border-b-2 border-primary" 
            : "text-muted-foreground hover:text-foreground"}`}
        >
          <Code className="h-3.5 w-3.5" />
          <span>Challenges</span>
        </button>
      )}
      {solutions && solutions.length > 0 && (
        <button 
          onClick={() => switchTab("solutions")}
          className={`px-3 py-2 text-sm font-medium flex items-center gap-1 ${activeTab === "solutions" 
            ? "text-primary border-b-2 border-primary" 
            : "text-muted-foreground hover:text-foreground"}`}
        >
          <Lightbulb className="h-3.5 w-3.5" />
          <span>Solutions</span>
        </button>
      )}
      {results && results.length > 0 && (
        <button 
          onClick={() => switchTab("results")}
          className={`px-3 py-2 text-sm font-medium flex items-center gap-1 ${activeTab === "results" 
            ? "text-primary border-b-2 border-primary" 
            : "text-muted-foreground hover:text-foreground"}`}
        >
          <BarChart className="h-3.5 w-3.5" />
          <span>Results</span>
        </button>
      )}
    </div>
  ), [activeTab, detailedDescription, challenges, solutions, results, switchTab]);

  // Memoize the image section
  const imageSection = useMemo(() => {
    if (!image) return null;
    
    return (
      <div className="relative overflow-hidden h-48 group">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className={`w-full h-full ${image.includes('Asian_Football_Confederation.svg') ? 'object-contain p-4 bg-black' : 'object-cover'} transition-transform duration-700 group-hover:scale-110`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
        <div className="absolute bottom-3 left-3">
          <Badge className="bg-primary text-primary-foreground shadow-glow">{badge}</Badge>
        </div>
        {(githubUrl || liveUrl) && (
          <div className="absolute top-3 right-3 flex space-x-2">
            {githubUrl && (
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full hover:bg-primary hover:text-white border-white/20 bg-black/60 backdrop-blur-sm text-white shadow-glow">
                  <Github className="h-4 w-4" />
                </Button>
              </a>
            )}
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="icon" className="h-8 w-8 rounded-full hover:bg-primary hover:text-white border-white/20 bg-black/60 backdrop-blur-sm text-white shadow-glow">
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </a>
            )}
          </div>
        )}
      </div>
    );
  }, [image, title, badge, githubUrl, liveUrl]);

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="h-full project-card feature-highlight"
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <Card className="h-full transition-all duration-300 hover:shadow-lg bg-card border-border hover:shadow-primary/20 overflow-hidden">
        {imageSection}
        
        {cardHeaderContent}
        
        <CardContent>
          <CardDescription className="text-muted-foreground mb-4">{description}</CardDescription>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <Badge 
                key={tag} 
                variant="outline" 
                className="border-primary/30 text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                {tag}
              </Badge>
            ))}
          </div>
          

          {(detailedDescription || challenges || solutions || results) && (
            <Button
              variant="outline"
              className="w-full mt-2 border-border text-muted-foreground hover:bg-secondary hover:text-foreground group"
              onClick={toggleExpanded}
            >
              <span>{isExpanded ? "Show Less" : "Show More"}</span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="ml-2"
              >
                <ChevronDown className="h-4 w-4 group-hover:text-primary" />
              </motion.div>
            </Button>
          )}

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 border-t border-border mt-4 space-y-4">
                  {/* Navigation Tabs */}
                  {tabButtons}

                  {/* Content based on active tab */}
                  <AnimatePresence mode="wait">
                    {activeTab === "overview" && detailedDescription && (
                      <motion.div
                        key="overview"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="bg-card/50 rounded-lg p-4 border border-border">
                      <p className="text-muted-foreground text-sm">{detailedDescription}</p>
                    </div>
                      </motion.div>
                    )}

                    {activeTab === "challenges" && challenges && challenges.length > 0 && (
                      <motion.div
                        key="challenges"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ul className="space-y-2">
                        {challenges.map((challenge, index) => (
                            <li key={index} className="flex text-muted-foreground text-sm bg-card/50 p-2 rounded-md border border-border">
                              <span className="text-pink-500 mr-2 mt-0.5">•</span>
                              <span>{challenge}</span>
                            </li>
                        ))}
                      </ul>
                      </motion.div>
                    )}

                    {activeTab === "solutions" && solutions && solutions.length > 0 && (
                      <motion.div
                        key="solutions"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ul className="space-y-2">
                        {solutions.map((solution, index) => (
                            <li key={index} className="flex text-muted-foreground text-sm bg-card/50 p-2 rounded-md border border-border">
                              <span className="text-cyan-500 mr-2 mt-0.5">•</span>
                              <span>{solution}</span>
                            </li>
                        ))}
                      </ul>
                      </motion.div>
                    )}

                    {activeTab === "results" && results && results.length > 0 && (
                      <motion.div
                        key="results"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ul className="space-y-2">
                        {results.map((result, index) => (
                            <li key={index} className="flex text-muted-foreground text-sm bg-card/50 p-2 rounded-md border border-border">
                              <span className="text-green-500 mr-2 mt-0.5"><CheckCircle className="h-4 w-4" /></span>
                              <span>{result}</span>
                            </li>
                        ))}
                      </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Call to Action */}
                  <div className="mt-6 flex flex-col space-y-3">
                    <div className="h-px w-full bg-gradient-to-r from-primary/30 via-primary/10 to-transparent"></div>
                    
                    {(githubUrl || liveUrl) ? (
                      <div className="flex justify-between items-center">
                        <div className="text-xs text-muted-foreground">Interested in this project?</div>
                        <div className="flex space-x-3">
                          {githubUrl && (
                            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:text-primary/80 flex items-center">
                              <Github className="h-3.5 w-3.5 mr-1" />
                              <span>View Code</span>
                            </a>
                          )}
                          {liveUrl && (
                            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:text-primary/80 flex items-center">
                              <ArrowUpRight className="h-3.5 w-3.5 mr-1" />
                              <span>Live Demo</span>
                            </a>
                          )}
                        </div>
                    </div>
                    ) : (
                      <a href="#contact" className="text-sm text-primary hover:text-primary/80 flex items-center justify-center">
                        <span>Contact me for more details about this project</span>
                        <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
                      </a>
                  )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
        
        {/* Progress indicator */}
        {isExpanded && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500">
            <motion.div 
              className="h-full bg-transparent"
              animate={{ 
                width: activeTab === "overview" ? "25%" : 
                       activeTab === "challenges" ? "50%" : 
                       activeTab === "solutions" ? "75%" : "100%" 
              }}
              transition={{ duration: 0.3 }}
            />
          </div>
        )}
        
        {/* Subtle gradient highlight on hover */}
        <motion.div 
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-x-0 bottom-0 h-1.5 bg-gradient-to-r from-cyan-500 to-pink-500 opacity-80 shadow-lg"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-30"></div>
        </motion.div>
      </Card>
    </motion.div>
  )
}

