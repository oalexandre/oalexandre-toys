import AttachMoneyIcon from "@mui/icons-material/AttachMoneyRounded";
import BadgeIcon from "@mui/icons-material/BadgeRounded";
import CasinoIcon from "@mui/icons-material/CasinoRounded";
import FactCheckIcon from "@mui/icons-material/FactCheckRounded";
import KeyIcon from "@mui/icons-material/KeyRounded";
import PhoneIcon from "@mui/icons-material/PhoneRounded";
import PublicIcon from "@mui/icons-material/PublicRounded";
import QrCode2Icon from "@mui/icons-material/QrCode2Rounded";
import ShieldIcon from "@mui/icons-material/ShieldRounded";
import StoreIcon from "@mui/icons-material/StoreRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import updatedDates from "./updated.json";

/**
 * Catálogo único de ferramentas. Tudo que precisa listar, linkar ou
 * descrever uma ferramenta (menu, home, rodapé, breadcrumbs, sitemap,
 * ferramentas relacionadas) deve partir daqui.
 */

export const SITE_URL = "https://toys.oalexandre.com.br";
export const SITE_NAME = "oAlexandre Toys";

export const categories = [
  {
    slug: "seguranca",
    name: "Segurança",
    description: "Senhas, chaves e informações da sua conexão.",
  },
  {
    slug: "documentos",
    name: "Documentos",
    description: "CPF e CNPJ para testes e validação.",
  },
  {
    slug: "comunicacao",
    name: "Comunicação",
    description: "WhatsApp e telefonia no Brasil.",
  },
  {
    slug: "utilitario",
    name: "Utilitários",
    description: "QR codes, sorteios e câmbio.",
  },
];

export const tools = [
  {
    slug: "gerador-de-senha-segura",
    category: "seguranca",
    name: "Gerador de Senha Segura",
    shortName: "Senha segura",
    description:
      "Crie senhas fortes e aleatórias direto no navegador, sem enviar nada para servidor.",
    icon: KeyIcon,
  },
  {
    slug: "gerador-de-django-secret-key",
    category: "seguranca",
    name: "Gerador de Django SECRET_KEY",
    shortName: "Django SECRET_KEY",
    description: "Gere uma SECRET_KEY de 50 caracteres no formato que o Django espera.",
    icon: ShieldIcon,
  },
  {
    slug: "qual-o-meu-ip",
    category: "seguranca",
    name: "Qual é o meu IP",
    shortName: "Meu IP",
    description: "Veja seu IP público, provedor e localização aproximada.",
    icon: PublicIcon,
  },
  {
    slug: "gerador-de-cpf",
    category: "documentos",
    name: "Gerador de CPF",
    shortName: "Gerar CPF",
    description: "CPFs com dígitos verificadores válidos para testes de software.",
    icon: BadgeIcon,
  },
  {
    slug: "gerador-de-cnpj",
    category: "documentos",
    name: "Gerador de CNPJ",
    shortName: "Gerar CNPJ",
    description: "CNPJs com dígitos verificadores válidos para testes de software.",
    icon: StoreIcon,
  },
  {
    slug: "validador-de-cpf-e-cnpj",
    category: "documentos",
    name: "Validador de CPF e CNPJ",
    shortName: "Validar CPF/CNPJ",
    description: "Confira se um CPF ou CNPJ tem dígitos verificadores corretos.",
    icon: FactCheckIcon,
  },
  {
    slug: "gerador-de-link-de-whatsapp",
    category: "comunicacao",
    name: "Gerador de Link de WhatsApp",
    shortName: "Link de WhatsApp",
    description: "Monte um link wa.me com mensagem pronta e baixe o QR code.",
    icon: WhatsAppIcon,
  },
  {
    slug: "encontrar-ddd-do-celular",
    category: "comunicacao",
    name: "Encontrar DDD do Celular",
    shortName: "DDD do celular",
    description: "Descubra de qual estado é um número pelo DDD.",
    icon: PhoneIcon,
  },
  {
    slug: "gerador-de-qrcode",
    category: "utilitario",
    name: "Gerador de QR Code",
    shortName: "QR Code",
    description: "QR code em PNG com cores e logo personalizados, sem expiração.",
    icon: QrCode2Icon,
  },
  {
    slug: "sorteador-automatico",
    category: "utilitario",
    name: "Sorteador Automático",
    shortName: "Sorteador",
    description: "Sorteie números em um intervalo, com ou sem repetição.",
    icon: CasinoIcon,
  },
  {
    slug: "cotacao-moeda",
    category: "utilitario",
    name: "Conversor de Moedas",
    shortName: "Conversor de moedas",
    description: "Converta valores entre moedas com cotação de referência do dia.",
    icon: AttachMoneyIcon,
  },
].map(tool => {
  const path = `/${tool.category}/${tool.slug}`;
  return { ...tool, path, updated: updatedDates[path] };
});

/** Data (AAAA-MM-DD) da última alteração relevante de uma rota. */
export const getUpdatedDate = path => updatedDates[path];

export const formatDate = iso =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("pt-BR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export const getCategory = slug => categories.find(c => c.slug === slug);

export const getToolsByCategory = slug => tools.filter(t => t.category === slug);

export const getTool = path => tools.find(t => t.path === path);

/** Ferramentas da mesma categoria primeiro, depois as demais, até `limit`. */
export const getRelatedTools = (path, limit = 3) => {
  const current = getTool(path);
  if (!current) return tools.slice(0, limit);
  const same = tools.filter(t => t.category === current.category && t.path !== path);
  const others = tools.filter(t => t.category !== current.category);
  return [...same, ...others].slice(0, limit);
};
