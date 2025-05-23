import { clsx, type ClassValue } from "clsx"
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
