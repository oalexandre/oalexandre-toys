const updated = require("./constants/updated.json");

/** lastmod real: data da rota, ou da seção /ddd para as páginas por estado. */
const lastmodFor = path => {
  if (updated[path]) return updated[path];
  if (path.startsWith("/ddd/")) return updated["/ddd"];
  return undefined;
};

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
    lastmod: lastmodFor(path),
    changefreq: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1.0 : path.startsWith("/ddd/") ? 0.6 : 0.8,
  }),
};

module.exports = config;
