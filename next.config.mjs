/**
 * Next.js Configuration File
 * 
 * This file configures various aspects of the Next.js application including:
 * - Image optimization settings
 * - Performance optimizations
 * - Security headers
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
    // Allowed domains for external images
    domains: ['your-portfolio-url.com'],
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
    // Optimize CSS bundle size
    optimizeCss: true,
    // Optimize specific package imports to reduce bundle size
    optimizePackageImports: ['lucide-react', 'framer-motion', '@radix-ui/react-*'],
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
  
  // Security headers configuration
  headers: async () => {
    return [
      {
        // Apply security headers to all routes
        source: '/(.*)',
        headers: [
          {
            // Prevent MIME type sniffing
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            // Prevent embedding in frames (clickjacking protection)
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            // Enable XSS protection in browsers
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ]
  },
  
  // Script to run before React hydration to remove Grammarly attributes
  // This prevents hydration errors caused by browser extensions
  scripts: [
    {
      src: '/scripts/fix-hydration.js',
      strategy: 'beforeInteractive',
    },
  ],
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
