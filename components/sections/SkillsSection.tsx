"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { useLanguage } from '@/contexts/language-context';
import { Section } from '@/components/section'; // Assuming Section component is refactored
import { LoadingPlaceholder } from '@/components/loading-placeholder'; // Assuming LoadingPlaceholder is refactored

const EnhancedSectionHeader = dynamic(() => import('@/components/enhanced-section-header'), {
  loading: () => (
    <div className="text-center space-y-4 mb-12">
      <div className="h-8 w-48 bg-muted/20 rounded mx-auto animate-pulse"></div>
      <div className="h-4 w-80 bg-muted/20 rounded mx-auto animate-pulse"></div>
    </div>
  )
});

const EnhancedSkillsSection = dynamic(() => import('@/components/enhanced-skills-section'), {
  loading: () => <LoadingPlaceholder />
});

export const SkillsSection = () => {
  const { t } = useLanguage();

  return (
    <Section id="skills" className="w-full py-12 md:py-24 lg:py-32 section-background">
      <div className="container px-4 md:px-6 relative z-10">
        <EnhancedSectionHeader
          title={t("skills.title")}
          subtitle={t("skills.subtitle")}
          align="center"
          dividerVariant="glow"
        />

        <EnhancedSkillsSection />
        <p className="text-center text-sm text-muted-foreground mt-6 mb-3 opacity-70">
          {t("skills.hoverMessage")}
        </p>
      </div>
    </Section>
  );
}; 