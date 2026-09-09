import {
  AttachMoney,
  Badge,
  Casino,
  FactCheck,
  Key,
  Phone,
  Public,
  QrCode2,
  Shield,
  Store,
  WhatsApp,
} from "@mui/icons-material";

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
    icon: Key,
  },
  {
    slug: "gerador-de-django-secret-key",
    category: "seguranca",
    name: "Gerador de Django SECRET_KEY",
    shortName: "Django SECRET_KEY",
    description: "Gere uma SECRET_KEY de 50 caracteres no formato que o Django espera.",
    icon: Shield,
  },
  {
    slug: "qual-o-meu-ip",
    category: "seguranca",
    name: "Qual é o meu IP",
    shortName: "Meu IP",
    description: "Veja seu IP público, provedor e localização aproximada.",
    icon: Public,
  },
  {
    slug: "gerador-de-cpf",
    category: "documentos",
    name: "Gerador de CPF",
    shortName: "Gerar CPF",
    description: "CPFs com dígitos verificadores válidos para testes de software.",
    icon: Badge,
  },
  {
    slug: "gerador-de-cnpj",
    category: "documentos",
    name: "Gerador de CNPJ",
    shortName: "Gerar CNPJ",
    description: "CNPJs com dígitos verificadores válidos para testes de software.",
    icon: Store,
  },
  {
    slug: "validador-de-cpf-e-cnpj",
    category: "documentos",
    name: "Validador de CPF e CNPJ",
    shortName: "Validar CPF/CNPJ",
    description: "Confira se um CPF ou CNPJ tem dígitos verificadores corretos.",
    icon: FactCheck,
  },
  {
    slug: "gerador-de-link-de-whatsapp",
    category: "comunicacao",
    name: "Gerador de Link de WhatsApp",
    shortName: "Link de WhatsApp",
    description: "Monte um link wa.me com mensagem pronta e baixe o QR code.",
    icon: WhatsApp,
  },
  {
    slug: "encontrar-ddd-do-celular",
    category: "comunicacao",
    name: "Encontrar DDD do Celular",
    shortName: "DDD do celular",
    description: "Descubra de qual estado é um número pelo DDD.",
    icon: Phone,
  },
  {
    slug: "gerador-de-qrcode",
    category: "utilitario",
    name: "Gerador de QR Code",
    shortName: "QR Code",
    description: "QR code em PNG com cores e logo personalizados, sem expiração.",
    icon: QrCode2,
  },
  {
    slug: "sorteador-automatico",
    category: "utilitario",
    name: "Sorteador Automático",
    shortName: "Sorteador",
    description: "Sorteie números em um intervalo, com ou sem repetição.",
    icon: Casino,
  },
  {
    slug: "cotacao-moeda",
    category: "utilitario",
    name: "Conversor de Moedas",
    shortName: "Conversor de moedas",
    description: "Converta valores entre moedas com cotação de referência do dia.",
    icon: AttachMoney,
  },
].map(tool => ({ ...tool, path: `/${tool.category}/${tool.slug}` }));

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
