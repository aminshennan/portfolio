/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://aminshennan.vercel.app',
  generateRobotsTxt: true,
  exclude: ['/api/*', '/404', '/500'],
  generateIndexSitemap: false,
  outDir: './out',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://aminshennan.vercel.app/sitemap.xml',
    ],
  },
} 