/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://your-portfolio-url.com',
  generateRobotsTxt: false, // We already have a custom robots.txt
  exclude: ['/api/*', '/404', '/500'],
  generateIndexSitemap: false,
  outDir: 'out',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
} 