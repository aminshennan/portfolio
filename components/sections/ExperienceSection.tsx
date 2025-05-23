"use client";

import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import dynamic from 'next/dynamic';
import { Section } from '@/components/section';
import { LoadingPlaceholder } from '@/components/loading-placeholder';

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
const UnifiedTimeline = dynamic(() => import('@/components/unified-timeline'), {
  loading: () => <LoadingPlaceholder />
});

export const ExperienceSection = () => {
  const { t } = useLanguage();

  return (
    <Section
      id="experience"
      className="w-full py-12 md:py-24 lg:py-32 section-background"
    >
      <Suspense fallback={null}>
        <GeometricShapes variant="alt" opacity={0.08} />
      </Suspense>
      {/* Consider making background animations conditional for performance */}
      <div className="absolute bottom-20 right-10 opacity-20 text-purple-400">
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <BookOpen className="h-24 w-24" />
        </motion.div>
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <EnhancedSectionHeader
          title={t("experience.title")}
          subtitle={t("experience.subtitle")}
          align="center"
          dividerVariant="dashed"
        />

        <UnifiedTimeline />
      </div>
    </Section>
  );
}; 