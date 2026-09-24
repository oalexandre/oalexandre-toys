import AttachMoneyIcon from "@mui/icons-material/AttachMoneyRounded";
import BadgeIcon from "@mui/icons-material/BadgeRounded";
import CallSplitIcon from "@mui/icons-material/CallSplitRounded";
import CasinoIcon from "@mui/icons-material/CasinoRounded";
import FactCheckIcon from "@mui/icons-material/FactCheckRounded";
import KeyIcon from "@mui/icons-material/KeyRounded";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStationRounded";
import MarkunreadMailboxIcon from "@mui/icons-material/MarkunreadMailboxRounded";
import PaymentsIcon from "@mui/icons-material/PaymentsRounded";
import PhoneIcon from "@mui/icons-material/PhoneRounded";
import PixIcon from "@mui/icons-material/PixRounded";
import PublicIcon from "@mui/icons-material/PublicRounded";
import QrCode2Icon from "@mui/icons-material/QrCode2Rounded";
import ShieldIcon from "@mui/icons-material/ShieldRounded";
import StoreIcon from "@mui/icons-material/StoreRounded";
import TextFieldsIcon from "@mui/icons-material/TextFieldsRounded";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import updatedDates from "./updated.json";

/**
 * Catálogo único de ferramentas. Tudo que precisa listar, linkar ou
 * descrever uma ferramenta (menu, home, rodapé, breadcrumbs, sitemap,
 * ferramentas relacionadas) deve partir daqui.
 */

export const SITE_URL = "https://toys.oalexandre.com.br";
export const SITE_NAME = "oAlexandre Toys";

/**
 * Grupos do menu, da home e dos breadcrumbs. Separam as ferramentas do dia a
 * dia das técnicas. O grupo não entra na URL: cada ferramenta mantém a sua
 * `section` (primeiro segmento da rota), para não mudar endereços já indexados.
 */
export const categories = [
  {
    slug: "dinheiro",
    name: "Dinheiro",
    description: "Pix, contas, parcelas e combustível.",
  },
  {
    slug: "dia-a-dia",
    name: "Dia a dia",
    description: "WhatsApp, QR code, CEP, textos e senhas.",
  },
  {
    slug: "desenvolvedores",
    name: "Desenvolvedores",
    description: "CPF, CNPJ e chaves para testar sistemas.",
  },
];

export const tools = [
  {
    slug: "gerador-de-qr-code-pix",
    section: "dinheiro",
    category: "dinheiro",
    name: "Gerador de QR Code Pix",
    shortName: "QR Code Pix",
    description: "Crie o QR code e o Pix copia e cola da sua chave, com ou sem valor.",
    icon: PixIcon,
  },
  {
    slug: "rachar-a-conta",
    section: "dinheiro",
    category: "dinheiro",
    name: "Rachar a Conta",
    shortName: "Rachar a conta",
    description: "Divida a conta do bar ou restaurante, com os 10% do garçom.",
    icon: CallSplitIcon,
  },
  {
    slug: "a-vista-ou-parcelado",
    section: "dinheiro",
    category: "dinheiro",
    name: "À Vista ou Parcelado?",
    shortName: "À vista ou parcelado",
    description: "Descubra se o desconto à vista compensa e quanto de juros há no parcelado.",
    icon: PaymentsIcon,
  },
  {
    slug: "alcool-ou-gasolina",
    section: "dinheiro",
    category: "dinheiro",
    name: "Álcool ou Gasolina?",
    shortName: "Álcool ou gasolina",
    description: "Compare os preços e veja qual combustível compensa abastecer.",
    icon: LocalGasStationIcon,
  },
  {
    slug: "cotacao-moeda",
    section: "utilitario",
    category: "dinheiro",
    name: "Conversor de Moedas",
    shortName: "Conversor de moedas",
    description: "Converta valores entre moedas com cotação de referência do dia.",
    icon: AttachMoneyIcon,
  },
  {
    slug: "gerador-de-link-de-whatsapp",
    section: "comunicacao",
    category: "dia-a-dia",
    name: "Gerador de Link de WhatsApp",
    shortName: "Link de WhatsApp",
    description: "Monte um link wa.me com mensagem pronta e baixe o QR code.",
    icon: WhatsAppIcon,
  },
  {
    slug: "gerador-de-qrcode",
    section: "utilitario",
    category: "dia-a-dia",
    name: "Gerador de QR Code",
    shortName: "QR Code",
    description: "QR code em PNG com cores e logo personalizados, sem expiração.",
    icon: QrCode2Icon,
  },
  {
    slug: "consulta-de-cep",
    section: "utilitario",
    category: "dia-a-dia",
    name: "Consulta de CEP",
    shortName: "Consulta de CEP",
    description: "Encontre o endereço de um CEP ou o CEP de uma rua.",
    icon: MarkunreadMailboxIcon,
  },
  {
    slug: "encontrar-ddd-do-celular",
    section: "comunicacao",
    category: "dia-a-dia",
    name: "Encontrar DDD do Celular",
    shortName: "DDD do celular",
    description: "Descubra de qual estado é um número pelo DDD.",
    icon: PhoneIcon,
  },
  {
    slug: "sorteador-automatico",
    section: "utilitario",
    category: "dia-a-dia",
    name: "Sorteador de Números e Nomes",
    shortName: "Sorteador",
    description: "Sorteie números em um intervalo ou nomes de uma lista, com revelação.",
    icon: CasinoIcon,
  },
  {
    slug: "contador-de-caracteres",
    section: "utilitario",
    category: "dia-a-dia",
    name: "Contador de Caracteres e Palavras",
    shortName: "Contador de caracteres",
    description: "Conte caracteres, palavras e linhas e confira limites de redes sociais.",
    icon: TextFieldsIcon,
  },
  {
    slug: "gerador-de-senha-segura",
    section: "seguranca",
    category: "dia-a-dia",
    name: "Gerador de Senha Segura",
    shortName: "Senha segura",
    description:
      "Crie senhas fortes e aleatórias direto no navegador, sem enviar nada para servidor.",
    icon: KeyIcon,
  },
  {
    slug: "qual-o-meu-ip",
    section: "seguranca",
    category: "dia-a-dia",
    name: "Qual é o meu IP",
    shortName: "Meu IP",
    description: "Veja seu IP público, provedor e localização aproximada.",
    icon: PublicIcon,
  },
  {
    slug: "gerador-de-cpf",
    section: "documentos",
    category: "desenvolvedores",
    name: "Gerador de CPF",
    shortName: "Gerar CPF",
    description: "CPFs com dígitos verificadores válidos para testes de software.",
    icon: BadgeIcon,
  },
  {
    slug: "gerador-de-cnpj",
    section: "documentos",
    category: "desenvolvedores",
    name: "Gerador de CNPJ",
    shortName: "Gerar CNPJ",
    description: "CNPJs com dígitos verificadores válidos para testes de software.",
    icon: StoreIcon,
  },
  {
    slug: "validador-de-cpf-e-cnpj",
    section: "documentos",
    category: "desenvolvedores",
    name: "Validador de CPF e CNPJ",
    shortName: "Validar CPF/CNPJ",
    description: "Confira se um CPF ou CNPJ tem dígitos verificadores corretos.",
    icon: FactCheckIcon,
  },
  {
    slug: "gerador-de-django-secret-key",
    section: "seguranca",
    category: "desenvolvedores",
    name: "Gerador de Django SECRET_KEY",
    shortName: "Django SECRET_KEY",
    description: "Gere uma SECRET_KEY de 50 caracteres no formato que o Django espera.",
    icon: ShieldIcon,
  },
].map(tool => {
  const path = `/${tool.section}/${tool.slug}`;
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
