/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

const PASSWORD = "/seguranca/gerador-de-senha-segura";
const WHATSAPP = "/comunicacao/gerador-de-link-de-whatsapp";
const IP = "/seguranca/qual-o-meu-ip";

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    // Rotas antigas que já foram publicadas. Mantêm o histórico e evitam 404.
    return [
      { source: "/documentos/password", destination: PASSWORD, permanent: true },
      { source: "/seguranca/password", destination: PASSWORD, permanent: true },
      { source: "/password-generator", destination: PASSWORD, permanent: true },
      { source: "/utilitario/whatsapp-link", destination: WHATSAPP, permanent: true },
      { source: "/comunicacao/whatsapp-link", destination: WHATSAPP, permanent: true },
      { source: "/documentos/find-ip", destination: IP, permanent: true },
      { source: "/seguranca/find-ip", destination: IP, permanent: true },
      { source: "/utilitario/aspect-ratio", destination: "/", permanent: true },
      { source: "/calculate/aspect-ratio", destination: "/", permanent: true },
      { source: "/fallback", destination: "/", permanent: true },
      { source: "/ddd", destination: "/comunicacao/encontrar-ddd-do-celular", permanent: true },
      { source: "/ddd", destination: "/comunicacao/encontrar-ddd-do-celular", permanent: true },
    ];
  },
};

module.exports = withPWA(nextConfig);
