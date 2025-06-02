import { useLanguage } from '@/contexts/language-context'

/**
 * Safe translation hook that prevents hydration issues
 * Returns loading state and safe defaults during hydration
 */
export const useSafeTranslation = () => {
  const context = useLanguage()
  
  return {
    ...context,
    // Provide safe translation function that handles loading state
    t: (key: string) => {
      if (!context.isLoaded) {
        // Return empty string or key during hydration to prevent mismatch
        return ""
      }
      return context.t(key)
    }
  }
} 