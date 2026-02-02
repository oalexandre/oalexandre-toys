/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.SITE_URL || "https://toys.oalexandre.com.br",
  generateRobotsTxt: true,
  exclude: [
    "/api/*",
    "/404",
    "/fallback",
    "/documentos/password",
    "/documentos/find-ip",
    "/utilitario/aspect-ratio",
    "/utilitario/whatsapp-link",
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
  },
  transform: async (config, path) => {
    if (path === "/") {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }
    return {
      loc: path,
      changefreq: "monthly",
      priority: 0.8,
      lastmod: new Date().toISOString(),
    };
  },
};

module.exports = config;
