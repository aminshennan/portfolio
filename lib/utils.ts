import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Image optimization helper
export function getOptimizedImageProps(options: {
  priority?: boolean;
  sizes?: string;
}) {
  return {
    loading: options.priority ? undefined : 'lazy',
    quality: 75,
    sizes: options.sizes || "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
    ...options
  }
}

// Debounce function for performance optimization
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null
  
  return function(...args: Parameters<T>) {
    const later = () => {
      timeout = null
      func(...args)
    }
    
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Throttle function for performance optimization
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle = false
  
  return function(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => {
        inThrottle = false
      }, limit)
    }
  }
}

// Check if code is running on client side
export const isClient = typeof window !== 'undefined'

// Safe window access
export function safeWindow<T>(callback: (w: Window) => T, fallback: T): T {
  if (isClient) {
    return callback(window)
  }
  return fallback
}

// Detect if device is mobile
export function isMobile(): boolean {
  return safeWindow(
    (w) => {
      const userAgent = w.navigator.userAgent
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
    },
    false
  )
}

// Calculate reading time for content
export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

// Utility for handling responsive values
export function getResponsiveValue<T>(value: T | T[], screenSize: 'mobile' | 'tablet' | 'desktop'): T {
  if (Array.isArray(value)) {
    const index = screenSize === 'mobile' ? 0 : screenSize === 'tablet' ? 1 : 2;
    return value[index] ?? value[value.length - 1];
  }
  return value;
}

// Utility for creating gradient text classes
export function createGradientText(from: string, to: string): string {
  return `bg-gradient-to-r ${from} ${to} bg-clip-text text-transparent`;
}

// Utility for safe JSON parsing
export function safeJsonParse<T>(jsonString: string, fallback: T): T {
  try {
    return JSON.parse(jsonString);
  } catch {
    return fallback;
  }
}

// Format number with commas
export function formatNumber(num: number): string {
  return new Intl.NumberFormat().format(num);
}

// Truncate text with ellipsis
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}
