/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://toys.oalexandre.com.br",
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  exclude: ["/404"],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
  },
  transform: async (_config, path) => ({
    loc: path,
    changefreq: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1.0 : 0.8,
  }),
};

module.exports = config;
