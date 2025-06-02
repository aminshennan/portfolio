"use client";

import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { Section } from '@/components/section';
import { useLanguage } from '@/contexts/language-context';
import dynamic from 'next/dynamic';

const GeometricShapes = React.lazy(() => import("@/components/geometric-shapes"));
const EnhancedSectionHeader = dynamic(() => import('@/components/enhanced-section-header'), {
  loading: () => (
    <div className="text-center space-y-4 mb-12">
      <div className="h-8 w-48 bg-muted/20 rounded mx-auto animate-pulse"></div>
      <div className="h-4 w-80 bg-muted/20 rounded mx-auto animate-pulse"></div>
    </div>
  )
});

export const ContactSection = () => {
  const { t } = useLanguage();

  const contactMethods = [
    { 
      icon: Mail, 
      title: t("contact.email"), 
      value: t("contact.emailAddress"),
      href: `mailto:${t("contact.emailAddress")}`
    },
    { 
      icon: Phone, 
      title: t("contact.phone"), 
      value: t("contact.phoneNumber"),
      href: `tel:${t("contact.phoneNumber")}`
    },
    { 
      icon: Linkedin, 
      title: t("contact.linkedin"), 
      value: t("contact.linkedinHandle"),
      href: t("contact.linkedinUrl")
    },
    { 
      icon: Github, 
      title: t("contact.github"), 
      value: t("contact.githubHandle"),
      href: t("contact.githubUrl")
    },
  ];

  return (
    <Section id="contact" className="w-full py-12 md:py-24 lg:py-32 section-background">
      <Suspense fallback={null}>
        <GeometricShapes variant="alt" opacity={0.08} />
      </Suspense>
      
      {/* Background elements */}
      <div className="absolute bottom-20 left-20 opacity-20 text-cyan-500">
        <motion.div
          animate={{ y: [0, -5, 0], x: [0, 5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          <Mail className="h-24 w-24" />
        </motion.div>
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <EnhancedSectionHeader
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
          align="center"
          dividerVariant="glow"
        />

        <div className="mt-12 max-w-4xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.title}
                href={method.href}
                target={method.href?.startsWith('http') ? '_blank' : undefined}
                rel={method.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col items-center text-center p-6 bg-card/50 hover:bg-card/80 rounded-lg border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
              >
                <div className="bg-primary/20 p-4 rounded-full mb-4 group-hover:bg-primary/30 transition-colors">
                  <method.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="font-medium text-foreground mb-2">{method.title}</h4>
                <p className="text-muted-foreground text-sm break-all group-hover:text-foreground transition-colors">
                  {method.value}
                </p>
              </motion.a>
            ))}
          </div>

        </div>
      </div>
    </Section>
  );
}; 