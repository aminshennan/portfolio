"use client";

import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { Badge } from "@/components/ui/badge";
import dynamic from 'next/dynamic';
import { Section } from '@/components/section';
import ExpandableProjectCard from '@/components/expandable-project-card';
import { Project } from '@/lib/translations'; // Import the Project type

// Dynamic imports
const GeometricShapes = lazy(() => import("@/components/geometric-shapes"));
const EnhancedSectionHeader = dynamic(() => import('@/components/enhanced-section-header'), {
  loading: () => (
    <div className="text-center space-y-4 mb-12">
      <div className="h-8 w-48 bg-muted/20 rounded mx-auto animate-pulse"></div>
      <div className="h-4 w-80 bg-muted/20 rounded mx-auto animate-pulse"></div>
    </div>
  )
});

// Animation variants (can be shared)
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.4,
      ease: "easeOut"
    },
  },
};
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const ProjectsSection = () => {
  const { t } = useLanguage();

  // Type assertion for projectList - ensure the structure in translations.ts matches
  const projectList = t('projects.projectList') as Project[] || [];
  const featuredProject = projectList.find(p => p.featured);
  const otherProjects = projectList.filter(p => !p.featured);

  return (
    <Section id="projects" className="w-full py-12 md:py-24 lg:py-32 section-background">
      <Suspense fallback={null}>
        <GeometricShapes variant="default" opacity={0.08} />
      </Suspense>
      {/* Consider making background animations conditional for performance */}
      <div className="absolute top-20 left-10 opacity-20 text-pink-500">
        <motion.div
          animate={{ rotate: [-5, 5, -5] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Briefcase className="h-24 w-24" />
        </motion.div>
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <EnhancedSectionHeader
          title={t("projects.title")}
          subtitle={t("projects.subtitle")}
          align="center"
          dividerVariant="dots"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible" // Trigger animation when in view
          viewport={{ once: true, amount: 0.1 }} // Adjust viewport settings as needed
          className="grid grid-cols-1 gap-16"
        >
          {/* Featured Project */}          
          {featuredProject && (
            <motion.div variants={fadeIn} className="col-span-1 mb-8">
              <div className="mb-6 text-center">
                <Badge className="bg-gradient-to-r from-cyan-500 to-pink-500 text-white shadow-lg">
                  {t("projects.featuredProject")}
                </Badge>
              </div>
              <ExpandableProjectCard
                title={featuredProject.title}
                badge={featuredProject.badge}
                description={featuredProject.description}
                tags={featuredProject.tags}
                detailedDescription={featuredProject.detailedDescription}
                challenges={featuredProject.challenges}
                solutions={featuredProject.solutions}
                results={featuredProject.results}
                liveUrl={featuredProject.liveUrl}
                githubUrl={featuredProject.githubUrl}
                image={featuredProject.image}
              />
            </motion.div>
          )}
          
          {/* Other Projects Grid */}          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {otherProjects.map((project) => (
              <motion.div key={project.id} variants={fadeIn}>
                <ExpandableProjectCard
                  title={project.title}
                  badge={project.badge}
                  description={project.description}
                  tags={project.tags}
                  detailedDescription={project.detailedDescription}
                  challenges={project.challenges}
                  solutions={project.solutions}
                  results={project.results}
                  githubUrl={project.githubUrl}
                  liveUrl={project.liveUrl}
                  image={project.image}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}; 