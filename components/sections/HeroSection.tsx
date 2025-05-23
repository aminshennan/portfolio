"use client";

import React, { Suspense, lazy } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, Download, Code, Briefcase, BookOpen, Award } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import GlowingButton from '@/components/glowing-button';
import EnhancedCard from '@/components/enhanced-card';
import dynamic from 'next/dynamic';
import { Section } from '@/components/section'; // Assuming Section component is refactored

// Dynamic imports from original page.tsx
const AnimatedText = dynamic(() => import('@/components/animated-text'), {
  loading: () => <div className="h-6 w-48 bg-muted/20 rounded animate-pulse" />
});
const HeroParticles = lazy(() => import("@/components/hero-particles"));
const FloatingIcons = lazy(() => import("@/components/floating-icons"));
const ECardContent = dynamic(() => import('@/components/enhanced-card').then(mod => mod.CardContent))

// Animation variants (if needed specifically here, otherwise keep in a shared file)
const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Helper function to get stats, can be moved elsewhere
const getStats = (t: Function) => [
  { icon: Code, value: '7+', label: t('hero.stats.languages'), color: 'text-cyan-400', bgColor: 'from-cyan-900/20 to-cyan-800/10' },
  { icon: Briefcase, value: '2', label: t('hero.stats.internships'), color: 'text-pink-500', bgColor: 'from-pink-900/20 to-pink-800/10' },
  { icon: BookOpen, value: '6+', label: t('hero.stats.projects'), color: 'text-purple-500', bgColor: 'from-purple-900/20 to-purple-800/10' },
  { icon: Award, value: '2+', label: t('hero.stats.leadership'), color: 'text-yellow-500', bgColor: 'from-yellow-900/20 to-yellow-800/10' },
];

export const HeroSection = () => {
  const { t, dir } = useLanguage();

  // Consider reducing animation intensity or concurrency if performance issues arise
  // For example, load HeroParticles or FloatingIcons conditionally
  const showParticles = true; // Control visibility for performance tuning
  const showFloatingIcons = true;

  const stats = getStats(t);

  return (
    <Section id="hero" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 section-background overflow-hidden">
      {showParticles && (
        <div className="absolute inset-0 z-0">
          <Suspense fallback={<div className="absolute inset-0 bg-gradient-to-b from-background to-background/80" />}>
            <HeroParticles />
          </Suspense>
        </div>
      )}
      {showFloatingIcons && (
        <Suspense fallback={<div className="h-64" />}>
          <FloatingIcons />
        </Suspense>
      )}
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center">
          <motion.div
            className="space-y-2"
            initial="hidden"
            animate="visible"
            variants={fadeIn} // Use simpler fadeIn here
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="mb-4"
            >
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 drop-shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                {t("hero.title")}
              </h1>
            </motion.div>

            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none gradient-text">
              <AnimatedText text={t('hero.subtitle')} className="inline-flex" />
            </h2>
            <div className="h-12">
              {/* Consider removing secondary animated text if too busy */}
              <AnimatedText
                text={t("hero.secondarySubtitle") || "Creating data-driven solutions"}
                className="mx-auto max-w-[700px] text-muted-foreground md:text-xl inline-flex"
                once={false}
              />
            </div>
          </motion.div>
          <motion.div
            className={`flex items-center ${dir === "rtl" ? "space-x-reverse" : ""} space-x-4`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            {/* TODO: Ensure CV path is correct */}
            <Link href="/Amin_Alawad_Data_Scientist_Resume.pdf" download>
              <GlowingButton className="shadow-neon">
                <span className="flex items-center">
                  {dir === "rtl" ? (
                    <>
                      {t("hero.downloadCV")}
                      <Download className="ml-2 h-4 w-4" aria-hidden="true" />
                    </>
                  ) : (
                    <>
                      <Download className="mr-2 h-4 w-4" aria-hidden="true" />
                      {t("hero.downloadCV")}
                    </>
                  )}
                </span>
              </GlowingButton>
            </Link>
            <Link href="#contact">
              <GlowingButton variant="outline">
                <span className="flex items-center">
                  {dir === "rtl" ? (
                    <>
                      {t("hero.contactMe")}
                      <Mail className="ml-2 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      <Mail className="mr-2 h-4 w-4" />
                      {t("hero.contactMe")}
                    </>
                  )}
                </span>
              </GlowingButton>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-12 md:mt-16 w-full max-w-3xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <EnhancedCard 
                    key={index} 
                    hoverEffect="glow" 
                    className={`glass-effect border border-${stat.color.split('-')[1]}-800/50 bg-gradient-to-br ${stat.bgColor}`}
                  >
                    <ECardContent className="p-4 sm:p-6 flex flex-col items-center text-center">
                      <div className={`rounded-full p-3 mb-3 bg-background/30 backdrop-blur-md border border-${stat.color.split('-')[1]}-700/30`}>
                        <stat.icon className={`h-7 w-7 sm:h-9 sm:w-9 ${stat.color}`} />
                      </div>
                      <div className="text-3xl sm:text-4xl font-bold text-foreground">{stat.value}</div>
                      <p className="text-muted-foreground text-xs sm:text-sm mt-1 font-medium">{stat.label}</p>
                    </ECardContent>
                  </EnhancedCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
    </Section>
  );
}; 