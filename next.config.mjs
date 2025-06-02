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
    // Supported modern image formats for optimization
    formats: ['image/webp', 'image/avif'],
    // Device sizes for responsive images
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // Image sizes for different contexts
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Output configuration
  // output: 'export', // Temporarily disabled for bundle analysis

  // Merge with user configuration
  ...userConfig?.default,
}

export default nextConfig
