"use client";

import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
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
const VolunteerRoles = dynamic(() => import('@/components/volunteer-roles'), {
  loading: () => <LoadingPlaceholder />
});

export const VolunteerSection = () => {
  const { t } = useLanguage();

  return (
    <Section id="volunteer" className="w-full py-12 md:py-24 lg:py-32 section-background relative">
      {/* Consider making background animations conditional for performance */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        <svg width="100%" height="100%" className="absolute inset-0">
          <pattern id="volunteerPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M20 0L0 20L20 40L40 20Z" fill="currentColor" className="text-pink-400" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#volunteerPattern)" />
        </svg>
      </div>
      <Suspense fallback={null}>
        <GeometricShapes variant="default" opacity={0.08} />
      </Suspense>
      <div className="absolute top-20 right-20 opacity-20 text-yellow-400">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <Award className="h-24 w-24" />
        </motion.div>
      </div>
      <div className="container px-4 md:px-6 relative z-10">
        <EnhancedSectionHeader
          title={t("volunteer.title")}
          subtitle={t("volunteer.subtitle")}
          align="center"
          dividerVariant="gradient"
          titleColor="text-pink-500 dark:text-pink-400"
        />

        <VolunteerRoles />
      </div>
    </Section>
  );
}; 