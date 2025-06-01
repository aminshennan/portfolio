"use client";

import React, { Suspense, lazy } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
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

// Contact method component
const ContactMethod = ({ icon, title, content, href }: {
  icon: React.ReactNode;
  title: string;
  content: string;
  href: string;
}) => (
  <motion.a
    href={href}
    variants={itemVariants}
    className="glass-effect p-6 rounded-lg border border-border/20 hover:border-primary/30 transition-all duration-300 group block"
  >
    <div className="flex items-center gap-4">
      <div className="text-primary group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm">{content}</p>
      </div>
    </div>
  </motion.a>
);

export const ContactSection = () => {
  const { t } = useLanguage();

  // Contact methods data
  const contactMethods = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: t("contact.email"),
      content: "aminshennan@gmail.com",
      href: "mailto:aminshennan@gmail.com"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: t("contact.phone"),
      content: "+1 (647) 677-3364",
      href: "tel:+16476773364"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: t("contact.location"),
      content: "Ontario, Canada",
      href: "https://maps.google.com/?q=Ontario,Canada"
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: t("contact.linkedin"),
      content: "linkedin.com/in/aminshennan",
      href: "https://linkedin.com/in/aminshennan"
    }
  ];

  return (
    <Section id="contact" className="w-full py-12 md:py-24 lg:py-32 section-background">
      <Suspense fallback={null}>
        <GeometricShapes variant="default" opacity={0.08} />
      </Suspense>
      
      <div className="container px-4 md:px-6 relative z-10">
        <EnhancedSectionHeader
          title={t("contact.title")}
          subtitle={t("contact.subtitle")}
          align="center"
          dividerVariant="dots"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Contact Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactMethods.map((method) => (
              <ContactMethod
                key={method.title}
                icon={method.icon}
                title={method.title}
                content={method.content}
                href={method.href}
              />
            ))}
          </div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-4 p-8 rounded-lg bg-muted/20"
          >
            <h3 className="text-xl font-semibold text-foreground">
              {t("contact.cta.title")}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t("contact.cta.description")}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <a
                href="mailto:aminshennan@gmail.com"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                {t("contact.cta.email")}
              </a>
              <a
                href="https://linkedin.com/in/aminshennan"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-border hover:bg-muted transition-colors"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                {t("contact.cta.linkedin")}
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </Section>
  );
}; 