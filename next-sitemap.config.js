/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://trangtraiechxanh.vn',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://trangtraiechxanh.vn/sitemap.xml',
    ],
  },
  exclude: ['/server-sitemap.xml'],
} 