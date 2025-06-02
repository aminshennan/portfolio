"use client";

import React, { Suspense, lazy, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Linkedin, Github, Phone, Check, Send, User, FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/language-context';
import dynamic from 'next/dynamic';
import { Section } from '@/components/section';
import EnhancedCard from '@/components/enhanced-card';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

// Dynamic imports
const GeometricShapes = lazy(() => import("@/components/geometric-shapes"));
const AnimatedGradientBorder = dynamic(() => import('@/components/animated-gradient-border'), {
  loading: () => <div className="border border-primary/20 rounded-lg p-1" />
});
const EnhancedSectionHeader = dynamic(() => import('@/components/enhanced-section-header'), {
  loading: () => (
    <div className="text-center space-y-4 mb-12">
      <div className="h-8 w-48 bg-muted/20 rounded mx-auto animate-pulse"></div>
      <div className="h-4 w-80 bg-muted/20 rounded mx-auto animate-pulse"></div>
    </div>
  )
});
const ECardContent = dynamic(() => import('@/components/enhanced-card').then(mod => mod.CardContent))

// Form schema
const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
});

// Helper component for contact cards
const ContactCard = ({ icon: Icon, title, value, href }: {
  icon: React.ElementType;
  title: string;
  value: string;
  href?: string;
}) => {
  const { dir } = useLanguage();
  const cardContent = (
    <EnhancedCard hoverEffect="glow" className="glass-effect transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 h-full">
      <ECardContent className="p-6">
        <div className={`flex items-center ${dir === "rtl" ? "space-x-reverse" : ""} space-x-4`}>
          <div className="bg-primary/20 p-3 rounded-full shadow-neon transform transition-transform duration-300 group-hover:scale-110">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-medium text-foreground">{title}</h3>
            <p className="text-muted-foreground break-all">{value}</p>
          </div>
        </div>
      </ECardContent>
    </EnhancedCard>
  );

  return (
    <AnimatedGradientBorder glowIntensity="medium">
      {href ? (
        <a href={href} target="_blank" rel="noopener noreferrer">
          {cardContent}
        </a>
      ) : (
        cardContent
      )}
    </AnimatedGradientBorder>
  );
};

export const ContactSection = () => {
  const { t, dir } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactMethods = [
    { icon: Mail, title: t("contact.email"), value: t("contact.emailAddress") },
    { icon: Linkedin, title: t("contact.linkedin"), value: t("contact.linkedinHandle"), href: t("contact.linkedinUrl") },
    { icon: Github, title: t("contact.github"), value: t("contact.githubHandle"), href: t("contact.githubUrl") },
    { icon: Phone, title: t("contact.phone"), value: t("contact.phoneNumber") },
  ];

  // Form handling
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Here you would handle the form submission (e.g., send email, save to DB)
    console.log(values);
    
    // Show success message
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      form.reset();
      setIsSubmitted(false);
    }, 3000);
  }

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

        
          <div className="space-y-6">
            <h3 className="text-xl font-semibold mb-4 text-foreground">
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {t("contact.getInTouch")}
              </motion.span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {contactMethods.map((method) => (
                <ContactCard key={method.title} {...method} />
              ))}
            </div>
            

          
          
        </div>
      </div>
    </Section>
  );
}; 