"use client";

import React, { Suspense, lazy } from 'react';
import Link from 'next/link';
import { Brain, Twitter, Github, Linkedin } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import dynamic from 'next/dynamic';
import { Reference } from '@/lib/translations'; // Import the Reference type

// Dynamic imports
const GeometricShapes = lazy(() => import("@/components/geometric-shapes"));
const AnimatedDivider = dynamic(() => import('@/components/animated-divider'), {
  loading: () => <div className="h-px bg-gradient-to-r from-transparent via-foreground/20 to-transparent my-4" />
});

// Helper for Nav Links
const FooterNavLink = ({ href, label }: { href: string; label: string }) => (
  <Link href={href} className="text-muted-foreground hover:text-primary transition-colors">
    {label}
  </Link>
);

// Helper for Social Links
const FooterSocialLink = ({ href, icon: Icon }: { href: string; icon: React.ElementType }) => (
  <Link
    href={href}
    className="text-muted-foreground hover:text-primary transition-colors shadow-neon-hover"
    target="_blank" // Open social links in new tab
    rel="noopener noreferrer"
  >
    <Icon className="h-5 w-5" />
  </Link>
);

export const FooterSection = () => {
  const { t, dir } = useLanguage();

  const navLinks = [
    { href: "#about", label: t("nav.about") },
    { href: "#skills", label: t("nav.skills") },
    { href: "#projects", label: t("nav.projects") },
    { href: "#contact", label: t("nav.contact") },
  ];

  // Type assertion for references - ensure structure matches translations.ts
  const references = t('footer.referenceList') as Reference[] || [];
  const socialLinks = t('footer.socialLinks') as { twitter: string; github: string; linkedin: string } || {};

  return (
    <footer className="py-8 w-full px-4 md:px-6 border-t border-border/30 section-background">
      <Suspense fallback={null}>
        <GeometricShapes variant="minimal" opacity={0.05} />
      </Suspense>
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Brand & Social */}
          <div>
            <div className="flex items-center mb-4">
              <Brain className={`h-6 w-6 text-primary ${dir === "rtl" ? "ml-2" : "mr-2"}`} />
              <span className="text-lg font-bold gradient-text">
                {t("hero.title")}
              </span>
            </div>
            <p className="text-muted-foreground mb-4 text-sm">{t("footer.description")}</p>
            <div className={`flex items-center ${dir === "rtl" ? "space-x-reverse" : ""} space-x-4`}>
              {/* TODO: Add actual Twitter URL in translations.ts */}
              {socialLinks.twitter && socialLinks.twitter !== '#' && <FooterSocialLink href={socialLinks.twitter} icon={Twitter} />}
              {socialLinks.github && <FooterSocialLink href={socialLinks.github} icon={Github} />}
              {socialLinks.linkedin && <FooterSocialLink href={socialLinks.linkedin} icon={Linkedin} />}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">{t("footer.quickLinks")}</h3>
            <AnimatedDivider width="60px" variant="dashed" className="my-3" />
            <nav className="flex flex-col space-y-2">
              {navLinks.map(link => <FooterNavLink key={link.href} {...link} />)}
            </nav>
          </div>

          {/* Column 3: References */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">{t("footer.references")}</h3>
            <AnimatedDivider width="60px" variant="dashed" className="my-3" />
            <div className="space-y-4">
              {references.map((ref, index) => (
                <div key={index} className="glass-effect p-3 sm:p-4 rounded-lg border border-border/20">
                  <p className="text-foreground font-medium text-sm sm:text-base">{ref.name}</p>
                  <p className="text-muted-foreground text-xs sm:text-sm">{ref.title}</p>
                  {/* TODO: Consider making contact info clickable (mailto: or tel:) if appropriate and permission granted */}
                  <p className="text-primary text-xs sm:text-sm break-words">{ref.contact}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <AnimatedDivider width="100%" variant="gradient" className="my-8" />

        <div className="text-center text-muted-foreground text-sm">{t("footer.copyright")}</div>
      </div>
    </footer>
  );
}; 