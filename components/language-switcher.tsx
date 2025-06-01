"use client"

import React from 'react';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLanguage } from '@/contexts/language-context';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="relative"
    >
      <Button
        onClick={toggleLanguage}
        variant="ghost"
        size="sm"
        className="relative h-9 w-16 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground"
      >
        <Globe className="h-4 w-4 mr-1" />
        <span className="text-xs font-medium">{language.toUpperCase()}</span>
      </Button>
    </motion.div>
  )
}

export default LanguageSwitcher;

