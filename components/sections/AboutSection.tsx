"use client";

import React, { Suspense, lazy, useState, useCallback, useMemo, memo } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Brain, Award, Star, ChevronRight, Clock, Target, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import { Badge } from "@/components/ui/badge"
import dynamic from 'next/dynamic';
import { Section } from '@/components/section';
import { Button } from '@/components/ui/button';

const GeometricShapes = lazy(() => import("@/components/geometric-shapes"));
const EnhancedSectionHeader = dynamic(() => import('@/components/enhanced-section-header'), {
  loading: () => (
    <div className="text-center space-y-4 mb-12">
      <div className="h-8 w-48 bg-muted/20 rounded mx-auto animate-pulse"></div>
      <div className="h-4 w-80 bg-muted/20 rounded mx-auto animate-pulse"></div>
    </div>
  )
});

// Optimized image props (can be shared)
const optimizedImageProps = {
  loading: 'lazy' as const,
  quality: 75,
  sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
};

// Tech stack data
const techStack = [
  { name: "Python", level: "Advanced", category: "lang" },
  { name: "R", level: "Intermediate", category: "lang" },
  { name: "TensorFlow", level: "Proficient", category: "ml" },
  { name: "PyTorch", level: "Intermediate", category: "ml" },
  { name: "Power BI", level: "Advanced", category: "viz" },
  { name: "Tableau", level: "Proficient", category: "viz" },
  { name: "SQL", level: "Advanced", category: "data" },
  { name: "Machine Learning", level: "Proficient", category: "ml" }
];

// Memoized components for better performance
const RotatingBrain = memo(() => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
  >
    <Brain className="h-24 w-24" />
  </motion.div>
));

const SectionHeading = memo(({ title, gradient = true }: { title: string, gradient?: boolean }) => (
  <h3 className="text-xl font-bold text-foreground flex items-center">
    <span className={gradient ? "bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent" : ""}>{title}</span>
    <div className="h-px flex-grow bg-gradient-to-r from-primary/50 to-transparent ml-3"></div>
  </h3>
));

// Animated list item component
const AnimatedListItem = memo(({ icon, text, index }: { icon: React.ReactNode, text: string, index: number }) => (
  <motion.li 
    className="flex items-start space-x-2 text-muted-foreground"
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="mt-1">{icon}</div>
    <span>{text}</span>
  </motion.li>
));

// Tech badge component
const TechBadge = memo(({ tech }: { tech: { name: string, level: string, category: string } }) => (
  <Badge 
    className={`
      ${tech.category === 'lang' ? 'bg-blue-900/70 hover:bg-blue-800 text-blue-300 border-blue-500/30' : 
        tech.category === 'ml' ? 'bg-purple-900/70 hover:bg-purple-800 text-purple-300 border-purple-500/30' : 
        tech.category === 'viz' ? 'bg-pink-900/70 hover:bg-pink-800 text-pink-300 border-pink-500/30' : 
        'bg-cyan-900/70 hover:bg-cyan-800 text-cyan-300 border-cyan-500/30'} 
      transition-colors border shadow-glow text-xs sm:text-sm px-2.5 py-0.5 sm:px-3 sm:py-1
    `}
    title={`${tech.level} level`}
  >
    <span className="flex items-center">
      {tech.name}
      <span className={`ml-1.5 h-1.5 w-1.5 rounded-full ${
        tech.level === 'Advanced' ? 'bg-green-400' : 
        tech.level === 'Proficient' ? 'bg-yellow-400' : 
        'bg-gray-400'
      }`}></span>
    </span>
  </Badge>
));

// Career highlight component
const CareerHighlight = memo(({ 
  highlight, 
  isExpanded, 
  toggleSection 
}: { 
  highlight: { 
    id: string; 
    icon: React.ReactNode; 
    title: string; 
    description: string; 
  }, 
  isExpanded: boolean, 
  toggleSection: (id: string) => void 
}) => (
  <motion.div 
    className="border border-border rounded-lg overflow-hidden bg-card/50 hover:bg-card/80 transition-colors"
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    <div 
      className="p-4 cursor-pointer" 
      onClick={() => toggleSection(highlight.id)}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="bg-gray-800 p-2 rounded-full">{highlight.icon}</div>
          <h4 className="font-medium text-foreground">{highlight.title}</h4>
        </div>
        <div className={`p-1.5 rounded-full border border-gray-700 transition-colors ${isExpanded ? 'bg-primary/20 border-primary/30' : 'bg-gray-800'}`}>
          <motion.div
            animate={{ rotate: isExpanded ? 90 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <ChevronRight className={`h-4 w-4 ${isExpanded ? 'text-primary' : 'text-muted-foreground'}`} />
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={false}
        animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden mt-2"
      >
        <p className="text-muted-foreground text-sm pt-2 pl-10 pr-2">{highlight.description}</p>
      </motion.div>
    </div>
  </motion.div>
));

// Main component
export const AboutSection = () => {
  const { t } = useLanguage();
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const toggleSection = useCallback((id: string) => {
    setExpandedSection(prev => prev === id ? null : id);
  }, []);

  // Get translated highlight data
  const translatedHighlights = useMemo(() => {
    return t("about.highlights").map((highlight: any, index: number) => ({
      ...highlight,
      icon: index === 0 ? <Award className="h-5 w-5 text-cyan-400" /> :
            index === 1 ? <Star className="h-5 w-5 text-yellow-400" /> :
            <Sparkles className="h-5 w-5 text-purple-400" />
    }));
  }, [t]);

  // Get translated career goals
  const translatedCareerGoals = useMemo(() => {
    const icons = [
      <Target className="h-5 w-5 text-pink-400" />,
      <Clock className="h-5 w-5 text-green-400" />,
      <Star className="h-5 w-5 text-yellow-400" />
    ];
    
    return t("about.careerGoals").map((goal: string, index: number) => ({
      icon: icons[index] || icons[0],
      text: goal
    }));
  }, [t]);

  // Memoized sections to prevent unnecessary re-renders
  const journeySection = useMemo(() => (
    <div className="space-y-5  p-6 rounded-lg   transition-all shadow-lg">
      <SectionHeading title={t("about.sectionHeadings.journey")} />
      
      <div className="text-foreground text-base md:text-lg space-y-3">
        <p className="leading-relaxed">{t("about.paragraph1")}</p>
        <p className="leading-relaxed">{t("about.paragraph2")}</p>
        <p className="leading-relaxed">{t("about.paragraph3")}</p>
      </div>
    </div>
  ), [t]);


  const techStackSection = useMemo(() => (
    <div className="space-y-5 p-6 rounded-lg  border-primary/20 hover:border-primary/30 transition-all shadow-lg">
      <SectionHeading title={t("about.sectionHeadings.techStack")} />
      
      <div className="flex flex-wrap gap-2 md:gap-3">
        {techStack.map((tech) => (
          <TechBadge key={tech.name} tech={tech} />
        ))}
      </div>
    </div>
  ), [t]);

  // const careerGoalsSection = useMemo(() => (
  //   <div className="space-y-5 bg-gray-900/30 p-6 rounded-lg border border-primary/20 hover:border-primary/30 transition-all shadow-lg">
  //     <SectionHeading title={t("about.sectionHeadings.careerGoals")} />
      
  //     <ul className="space-y-2">
  //       {translatedCareerGoals.map((goal: { icon: React.ReactNode; text: string }, index: number) => (
  //         <AnimatedListItem
  //           key={index}
  //           icon={goal.icon}
  //           text={goal.text}
  //           index={index}
  //         />
  //       ))}
  //     </ul>
      
  //     <div className="pt-2">
  //       <Button variant="outline" className="text-primary border-primary/30 hover:bg-primary/10">
  //         <a href="#contact" className="flex items-center">
  //           <span>{t("about.contactCTA")}</span>
  //           <ChevronRight className="ml-2 h-4 w-4" />
  //         </a>
  //       </Button>
  //     </div>
  //   </div>
  // ), [t, translatedCareerGoals]);

  const profileImageSection = useMemo(() => (
    <div className="flex flex-col items-center space-y-8">
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="relative"
      >
        <div className="rounded-full relative overflow-hidden shadow-2xl bg-gradient-to-b from-gray-900 via-gray-800 to-black p-1.5">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-pink-500/40 opacity-70 rounded-full z-0"></div>
          <Image
            src="/amin_no_background.png"
            alt={t("hero.title")}
            width={320}
            height={320}
            className="rounded-full relative z-10 object-cover object-top"
            style={{
              filter: 'drop-shadow(0 0 15px rgba(0, 200, 255, 0.6))'
            }}
            {...optimizedImageProps}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 rounded-full z-20"></div>
        </div>
      </motion.div>

    </div>
  ), [t]);

  return (
    <Section id="about" className="w-full py-12 md:py-24 lg:py-32 section-background">
      <Suspense fallback={null}>
        <GeometricShapes variant="alt" className="z-0 opacity-40" />
      </Suspense>
      <div className="absolute top-10 right-10 opacity-20 text-primary">
        <RotatingBrain />
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <EnhancedSectionHeader
          title={t("about.title")}
          subtitle={t("about.subtitle")}
          align="center"
          dividerVariant="gradient"
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-8">
            {journeySection}
            {/* {highlightsSection} */}
            {techStackSection}
            {/* {careerGoalsSection} */}
          </div>

          <div className="flex flex-col items-center space-y-8">
            {profileImageSection}
          </div>
        </div>
      </div>
    </Section>
  );
};

