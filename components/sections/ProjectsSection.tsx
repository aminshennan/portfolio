"use client";

import React, { useState, useEffect } from 'react';
import { Briefcase, ExternalLink, Github, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from '@/components/section';
import { Project } from '@/lib/translations';
import Image from 'next/image';

// Enhanced project card with expandable content
const EnhancedProjectCard = ({ project }: { project: Project }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  const toggleExpanded = () => setIsExpanded(!isExpanded);
  const switchTab = (tab: string) => setActiveTab(tab);

  return (
    <div className="bg-card border border-border rounded-lg overflow-hidden h-full transition-all duration-300 hover:shadow-lg">
      {/* Project Image */}
      {project.image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      )}

      {/* Card Content */}
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-3">
          <Badge className="bg-primary/20 text-primary">{project.badge}</Badge>
          {project.image && (
            <div className="flex gap-2">
              {project.githubUrl && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {project.liveUrl && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                  asChild
                >
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Title and Description */}
        <h3 className="text-lg font-semibold mb-2 text-foreground">{project.title}</h3>
        <p className="text-muted-foreground mb-4">{project.description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded">
              {tag}
            </span>
          ))}
        </div>

        {/* Expandable Content */}
        {(project.detailedDescription || project.challenges || project.solutions || project.results) && (
          <>
            <Button
              variant="outline"
              className="w-full mt-2 border-border text-muted-foreground hover:bg-secondary hover:text-foreground group"
              onClick={toggleExpanded}
            >
              <span>{isExpanded ? "Show Less" : "Show More"}</span>
              <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
            </Button>

            {isExpanded && (
              <div className="pt-4 border-t border-border mt-4 space-y-4">
                {/* Tab Navigation */}
                <div className="flex gap-2 border-b border-border">
                  {project.detailedDescription && (
                    <button
                      onClick={() => switchTab("overview")}
                      className={`px-3 py-2 text-sm font-medium transition-colors ${activeTab === "overview"
                        ? "text-primary border-b-2 border-primary"
                        : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                      Overview
                    </button>
                  )}
                  {project.challenges && project.challenges.length > 0 && (
                    <button
                      onClick={() => switchTab("challenges")}
                      className={`px-3 py-2 text-sm font-medium transition-colors ${activeTab === "challenges"
                        ? "text-primary border-b-2 border-primary"
                        : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                      Challenges
                    </button>
                  )}
                  {project.solutions && project.solutions.length > 0 && (
                    <button
                      onClick={() => switchTab("solutions")}
                      className={`px-3 py-2 text-sm font-medium transition-colors ${activeTab === "solutions"
                        ? "text-primary border-b-2 border-primary"
                        : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                      Solutions
                    </button>
                  )}
                  {project.results && project.results.length > 0 && (
                    <button
                      onClick={() => switchTab("results")}
                      className={`px-3 py-2 text-sm font-medium transition-colors ${activeTab === "results"
                        ? "text-primary border-b-2 border-primary"
                        : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                      Results
                    </button>
                  )}
                </div>

                {/* Tab Content */}
                <div className="min-h-[100px]">
                  {activeTab === "overview" && project.detailedDescription && (
                    <div className="prose prose-sm max-w-none">
                      <p className="text-muted-foreground">{project.detailedDescription}</p>
                    </div>
                  )}

                  {activeTab === "challenges" && project.challenges && (
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-red-500 mt-1">•</span>
                          <span className="text-muted-foreground">{challenge}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {activeTab === "solutions" && project.solutions && (
                    <ul className="space-y-2">
                      {project.solutions.map((solution, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-green-500 mt-1">•</span>
                          <span className="text-muted-foreground">{solution}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {activeTab === "results" && project.results && (
                    <ul className="space-y-2">
                      {project.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span className="text-muted-foreground">{result}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Progress Indicator */}
                <div className="relative h-1 bg-muted rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 transition-all duration-300"
                    style={{
                      width: activeTab === "overview" ? "25%" :
                        activeTab === "challenges" ? "50%" :
                          activeTab === "solutions" ? "75%" : "100%"
                    }}
                  />
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export const ProjectsSection = () => {
  const { t } = useLanguage();
  const [mounted, setMounted] = useState(false);

  // Simple client-side mounting check
  useEffect(() => {
    setMounted(true);
  }, []);

  // Show loading state while mounting
  if (!mounted) {
    return (
      <Section id="projects" className="w-full py-12 md:py-24 lg:py-32 section-background">
        <div className="container px-4 md:px-6 relative z-10">
          <div className="text-center space-y-4 mb-12">
            <div className="h-8 w-48 bg-muted/20 rounded mx-auto animate-pulse"></div>
            <div className="h-4 w-80 bg-muted/20 rounded mx-auto animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-6 animate-pulse">
                <div className="h-6 bg-muted/20 rounded mb-3"></div>
                <div className="h-4 bg-muted/20 rounded mb-2"></div>
                <div className="h-4 bg-muted/20 rounded w-3/4 mb-4"></div>
                <div className="flex gap-2">
                  <div className="h-6 w-16 bg-muted/20 rounded"></div>
                  <div className="h-6 w-20 bg-muted/20 rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    );
  }

  // Get project data
  const projectList = t('projects.projectList') as Project[] || [];

  const validatedProjects = projectList.map(project => ({
    ...project,
    githubUrl: project.githubUrl && project.githubUrl !== '#' ? project.githubUrl : undefined,
    liveUrl: project.liveUrl && project.liveUrl !== '#' ? project.liveUrl : undefined,
    image: project.image && project.image !== 'placeholder.jpg' ? project.image : undefined,
  }));

  const featuredProject = validatedProjects.find(p => p.featured);
  const otherProjects = validatedProjects.filter(p => !p.featured);

  // Simple, reliable render without any complex components
  return (
    <Section id="projects" className="w-full py-12 md:py-24 lg:py-32 section-background">
      {/* Simple background icon */}
      <div className="absolute top-20 left-10 opacity-20 text-pink-500">
        <div className="animate-spin">
          <Briefcase className="h-24 w-24" />
        </div>
      </div>

      <div className="container px-4 md:px-6 relative z-10">
        {/* Simple header without dynamic components */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">{t("projects.title")}</h2>
          <p className="text-muted-foreground text-lg">{t("projects.subtitle")}</p>
        </div>

        {/* Simple grid layout */}
        <div className="grid grid-cols-1 gap-16">
          {/* Featured Project */}
          {featuredProject && (
            <div className="col-span-1 mb-8">
              <div className="mb-6 text-center">
                <Badge className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white shadow-lg">
                  {t("projects.featuredProject")}
                </Badge>
              </div>
              <EnhancedProjectCard project={featuredProject} />
            </div>
          )}

          {/* Other Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {otherProjects.length > 0 ? (
              otherProjects.map((project) => (
                <div key={project.id} className="block">
                  <EnhancedProjectCard project={project} />
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-8">
                <p className="text-muted-foreground">No projects found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}; 