/**
 * Next.js Configuration File
 * 
 * This file configures various aspects of the Next.js application including:
 * - Image optimization settings
 * - Performance optimizations
 * - Build and runtime optimizations
 * - Export configuration for static deployment
 */

// Try to import user-specific configuration if available
let userConfig = undefined
try {
  userConfig = await import('./v0-user-next.config')
} catch (e) {
  // Ignore error - user config is optional
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React Strict Mode for additional development checks
  reactStrictMode: true,
  
  // Image optimization configuration
  images: {
    // Disable built-in optimization for static export compatibility
    unoptimized: true,
    // Supported modern image formats for better compression
    formats: ['image/avif', 'image/webp'],
    // Cache optimized images for 60 seconds minimum
    minimumCacheTTL: 60,
    // Device breakpoints for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    // Fixed image sizes for optimization
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Remote image patterns for enhanced security
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '*.githubusercontent.com',
      },
    ],
  },
  
  // Experimental features for enhanced performance
  experimental: {
    // Optimize specific package imports to reduce bundle size
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-alert-dialog',
      '@radix-ui/react-aspect-ratio',
      '@radix-ui/react-avatar',
      '@radix-ui/react-checkbox',
      '@radix-ui/react-collapsible',
      '@radix-ui/react-context-menu',
      '@radix-ui/react-dialog',
      '@radix-ui/react-dropdown-menu',
      '@radix-ui/react-hover-card',
      '@radix-ui/react-label',
      '@radix-ui/react-menubar',
      '@radix-ui/react-navigation-menu',
      '@radix-ui/react-popover',
      '@radix-ui/react-progress',
      '@radix-ui/react-radio-group',
      '@radix-ui/react-scroll-area',
      '@radix-ui/react-select',
      '@radix-ui/react-separator',
      '@radix-ui/react-slider',
      '@radix-ui/react-slot',
      '@radix-ui/react-switch',
      '@radix-ui/react-tabs',
      '@radix-ui/react-toast',
      '@radix-ui/react-toggle',
      '@radix-ui/react-toggle-group',
      '@radix-ui/react-tooltip'
    ],
    // Track Core Web Vitals for performance monitoring
    webVitalsAttribution: ['CLS', 'LCP'],
  },
  
  // Compiler optimizations
  compiler: {
    // Remove console logs in production (except errors and warnings)
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },
  
  // Remove Next.js powered by header for security
  poweredByHeader: false,
  
  // Enable gzip compression
  compress: true,
  
  // Enable static exports for optimal performance and deployment flexibility
  output: 'export',
  
  // Configure URL trailing slash behavior
  trailingSlash: false,
  
  // Security headers are removed as they don't work with static export
}

// Merge user configuration if available
mergeConfig(nextConfig, userConfig)

/**
 * Merges user configuration with default Next.js configuration
 * @param {object} nextConfig - Default Next.js configuration
 * @param {object} userConfig - User-specific configuration overrides
 */
function mergeConfig(nextConfig, userConfig) {
  if (!userConfig) {
    return
  }

  for (const key in userConfig) {
    if (
      typeof nextConfig[key] === 'object' &&
      !Array.isArray(nextConfig[key])
    ) {
      // Merge objects recursively
      nextConfig[key] = {
        ...nextConfig[key],
        ...userConfig[key],
      }
    } else {
      // Override primitive values and arrays
      nextConfig[key] = userConfig[key]
    }
  }
}

export default nextConfig
