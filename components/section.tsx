"use client";

import React, { useEffect, memo } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Animation variants (can be shared or defined here)
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

interface SectionProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

const SectionComponent: React.FC<SectionProps> = ({ children, id, className = "" }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1, // Adjust threshold as needed
    rootMargin: "-50px", // Adjust rootMargin as needed
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      // Optional: Reset animation if element scrolls out of view and triggerOnce is false
      // if (!inView && !triggerOnce) { controls.start("hidden"); }
    }
  }, [controls, inView]);

  return (
    <motion.section 
      id={id} 
      ref={ref} 
      initial="hidden" 
      animate={controls} 
      variants={fadeIn} 
      className={className}
    >
      {children}
    </motion.section>
  );
};

SectionComponent.displayName = 'Section';

// Memoize the component for performance optimization
export const Section = memo(SectionComponent); 