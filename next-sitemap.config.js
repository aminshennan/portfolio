/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || 'https://aminshennan.vercel.app',
  generateRobotsTxt: true, // Generate robots.txt for better SEO
  exclude: ['/api/*', '/404', '/500'],
  generateIndexSitemap: false,
  outDir: 'out',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/*', '/404', '/500'],
      },
    ],
    additionalSitemaps: [
      'https://aminshennan.vercel.app/sitemap.xml',
    ],
  },
  changefreq: 'monthly',
  priority: 1.0, // Default priority for all pages
  // Use transform function to customize individual page priorities
  transform: async (config, path) => {
    // Define priority based on the path
    const priorities = {
      '/': 1.0,
      '/#about': 0.8,
      '/#skills': 0.8,
      '/#projects': 0.9,
      '/#experience': 0.8,
      '/#volunteer': 0.7,
      '/#contact': 0.8,
    };

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
    };
  },
}

module.exports = config; 