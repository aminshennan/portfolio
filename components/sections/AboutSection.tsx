"use client";

import React, { Suspense, lazy, useMemo } from 'react';
import { motion } from 'framer-motion';
import { User, Target, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { Badge } from "@/components/ui/badge"
import dynamic from 'next/dynamic';
import { Section } from '@/components/section';

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

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// Component definitions with display names
const SectionHeading = React.memo(({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="text-center space-y-4 mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-foreground">{title}</h2>
    <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
  </div>
));
SectionHeading.displayName = 'SectionHeading';

const TechBadge = React.memo(({ tech }: { tech: string }) => (
  <Badge variant="secondary" className="text-xs bg-muted/50 hover:bg-muted transition-colors">
    {tech}
  </Badge>
));
TechBadge.displayName = 'TechBadge';

const AttributeCard = React.memo(({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <motion.div
    variants={itemVariants}
    className="glass-effect p-6 rounded-lg border border-border/20 hover:border-primary/30 transition-all duration-300"
  >
    <div className="flex items-center gap-3 mb-3">
      <div className="text-primary">{icon}</div>
      <h3 className="font-semibold text-foreground">{title}</h3>
    </div>
    <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
  </motion.div>
));
AttributeCard.displayName = 'AttributeCard';

export const AboutSection = () => {
  const { t } = useLanguage();

  // Memoized technical skills for performance
  const technicalSkills = useMemo(() => [
    "Python", "SQL", "Power BI", "Microsoft Fabric", "Machine Learning",
    "Data Analysis", "Business Intelligence", "Statistical Analysis",
    "Data Visualization", "ETL", "Azure", "Git"
  ], []);

  // Memoized core attributes
  const coreAttributes = useMemo(() => [
    {
      icon: <User className="h-6 w-6" />,
      title: t("about.attributes.analytical.title"),
      description: t("about.attributes.analytical.description")
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: t("about.attributes.problemSolver.title"),
      description: t("about.attributes.problemSolver.description")
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: t("about.attributes.continuous.title"),
      description: t("about.attributes.continuous.description")
    }
  ], [t]);

  return (
    <Section id="about" className="w-full py-12 md:py-24 lg:py-32 section-background">
      <Suspense fallback={null}>
        <GeometricShapes variant="minimal" opacity={0.06} />
      </Suspense>
      
      <div className="container px-4 md:px-6 relative z-10">
        <EnhancedSectionHeader
          title={t("about.title")}
          subtitle={t("about.subtitle")}
          align="center"
          dividerVariant="gradient"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* About Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                {t("about.description.intro")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.description.experience")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("about.description.passion")}
              </p>
            </div>

            {/* Technical Skills */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">
                {t("about.technicalSkills")}
              </h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((tech) => (
                  <TechBadge key={tech} tech={tech} />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Core Attributes */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground text-center lg:text-left">
              {t("about.coreAttributes")}
            </h3>
            <div className="grid gap-4">
              {coreAttributes.map((attribute) => (
                <AttributeCard
                  key={attribute.title}
                  icon={attribute.icon}
                  title={attribute.title}
                  description={attribute.description}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Career Journey Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16 space-y-8"
        >
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-semibold text-foreground">
              {t("about.journey.title")}
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              {t("about.journey.description")}
            </p>
          </div>

          {/* Journey Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: t("about.journey.education"),
                description: t("about.journey.educationDesc"),
                icon: <Award className="h-8 w-8" />
              },
              {
                title: t("about.journey.experience"),
                description: t("about.journey.experienceDesc"),
                icon: <Target className="h-8 w-8" />
              },
              {
                title: t("about.journey.future"),
                description: t("about.journey.futureDesc"),
                icon: <User className="h-8 w-8" />
              }
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="text-center space-y-4 p-6 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors"
              >
                <div className="flex justify-center text-primary">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-foreground">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

