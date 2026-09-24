/** @type {import('next').NextConfig} */
// Fork mantido do next-pwa (o original está abandonado e puxava dependências vulneráveis).
const withPWA = require("@ducanh2912/next-pwa").default({
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
    ];
  },
};

module.exports = withPWA(nextConfig);
