"use client";

import React, { memo } from 'react';

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const SectionComponent: React.FC<SectionProps> = ({ children, id, className = "" }) => {
  return (
    <section
      id={id}
      className={className}
    >
      {children}
    </section>
  );
};

SectionComponent.displayName = 'Section';

// Memoize the component for performance optimization
export const Section = memo(SectionComponent); 