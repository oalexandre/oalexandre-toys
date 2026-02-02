import HomeIcon from "@mui/icons-material/Home";
import KeyIcon from "@mui/icons-material/Key";
import QrCodeIcon from "@mui/icons-material/QrCode";
import FactoryIcon from "@mui/icons-material/Factory";
import {
  AttachMoney,
  BadgeOutlined,
  ContactPageOutlined,
  CurrencyBitcoinTwoTone,
  CurrencyExchange,
  FactCheck,
  FindInPage,
  Phone,
  Security,
  TollOutlined,
  WhatsApp,
} from "@mui/icons-material";
import TagIcon from "@mui/icons-material/Tag";
export const mainRoutes = [
  {
    path: "/",
    name: "Home",
    key: "home",
    icon: <HomeIcon />,
    description: "Ferramentas funcionais",
  },
];

export const allRoutes = [
  {
    path: "/comunicacao/gerador-de-link-de-whatsapp",
    name: "Gerador de Link de WhatsApp",
    homeName: "Gerador de Link de WhatsApp",
    key: "gerador-link-whatsapp",
    icon: <WhatsApp />,
    description: "Crie links do WhatsApp com mensagens predefinidas e QR codes",
  },
  {
    path: "/utilitario/gerador-de-qrcode",
    name: "Gerador de QR Code",
    homeName: "Gerador de QR Code",
    key: "gerador-qrcode",
    icon: <QrCodeIcon />,
    description: "Gere QR codes personalizados que nunca expiram",
  },
  {
    path: "/seguranca/gerador-de-senha-segura",
    name: "Gerador de Senha Segura",
    homeName: "Gerador de Senha Segura",
    key: "gerador-senha-segura",
    icon: <KeyIcon />,
    description: "Gere senhas seguras e criptograficamente fortes",
  },
  {
    path: "/seguranca/gerador-de-django-secret-key",
    name: "Gerador de Django Secret",
    homeName: "Django SECRET_KEY",
    key: "django-secret-key",
    icon: <Security />,
    description: "Gere SECRET_KEYs seguras para projetos Django",
  },

  {
    path: "/documentos/gerador-de-cpf",
    name: "Gerador de CPF",
    homeName: "Gerador de CPF",
    key: "cpf-documentos",
    icon: <BadgeOutlined />,
    description: "Gerador de CPF",
  },
  {
    path: "/documentos/gerador-de-cnpj",
    name: "Gerador de CNPJ",
    homeName: "Gerador de CNPJ",
    key: "cnpj-documentos",
    icon: <ContactPageOutlined />,
    description: "Gerador de CNPJ",
  },
  {
    path: "/utilitario/sorteador-automatico",
    name: "Sorteador Automático",
    homeName: "Sorteador Automático",
    key: "sorteador-automatico",
    icon: <TagIcon />,
    description: "Sorteie números aleatórios para rifas e promoções",
  },
  {
    path: "/seguranca/qual-o-meu-ip",
    name: "Qual o Meu IP",
    homeName: "Qual o Meu IP",
    key: "qual-meu-ip",
    icon: <FindInPage />,
    description: "Descubra seu endereço IP público instantaneamente",
  },
  {
    path: "/documentos/validador-de-cpf-e-cnpj",
    name: "Validador de CPF e CNPJ",
    homeName: "Validador de CPF e CNPJ",
    key: "cpf-cnpj-validate",
    icon: <FactCheck />,
    description: "Validador de CPF e CNPJ",
  },

  {
    path: "/comunicacao/encontrar-ddd-do-celular",
    name: "Encontrar DDD do Celular",
    homeName: "Encontrar DDD do Celular",
    key: "encontrar-ddd-celular",
    icon: <Phone />,
    description: "Descubra o estado pelo DDD do telefone",
  },

  {
    path: "/utilitario/cotacao-moeda",
    name: "Conversor de Moedas",
    homeName: "Conversor de Moedas",
    key: "number-conversor-moeda",
    icon: <AttachMoney />,
    description: "Converta moedas",
  },
];

export const utilsRoutes = [
  {
    path: "/utilitario/gerador-de-qrcode",
    name: "Gerador de QR Code",
    homeName: "Gerador de QR Code",
    key: "gerador-qrcode",
    icon: <QrCodeIcon />,
    description: "Gere QR codes personalizados que nunca expiram",
  },
  {
    path: "/utilitario/sorteador-automatico",
    name: "Sorteador Automático",
    homeName: "Sorteador Automático",
    key: "sorteador-automatico",
    icon: <TagIcon />,
    description: "Sorteie números aleatórios para rifas e promoções",
  },
  {
    path: "/utilitario/cotacao-moeda",
    name: "Conversor de Moedas",
    homeName: "Conversor de Moedas",
    key: "number-conversor-moeda",
    icon: <AttachMoney />,
    description: "Converta moedas",
  },
];

export const comunicacaoRoutes = [
  {
    path: "/comunicacao/encontrar-ddd-do-celular",
    name: "Encontrar DDD do Celular",
    homeName: "Encontrar DDD do Celular",
    key: "encontrar-ddd-celular",
    icon: <Phone />,
    description: "Descubra o estado pelo DDD do telefone",
  },

  {
    path: "/comunicacao/gerador-de-link-de-whatsapp",
    name: "Gerador de Link de WhatsApp",
    homeName: "Gerador de Link de WhatsApp",
    key: "gerador-link-whatsapp",
    icon: <WhatsApp />,
    description: "Crie links do WhatsApp com mensagens predefinidas e QR codes",
  },
];

export const documentosRoutes = [
  {
    path: "/documentos/gerador-de-cpf",
    name: "Gerador de CPF",
    homeName: "Gerador de CPF",
    key: "cpf-documentos",
    icon: <BadgeOutlined />,
    description: "Gerador de CPF",
  },
  {
    path: "/documentos/gerador-de-cnpj",
    name: "Gerador de CNPJ",
    homeName: "Gerador de CNPJ",
    key: "cnpj-documentos",
    icon: <ContactPageOutlined />,
    description: "Gerador de CNPJ",
  },
  {
    path: "/documentos/validador-de-cpf-e-cnpj",
    name: "Validador de CPF e CNPJ",
    homeName: "Validador de CPF e CNPJ",
    key: "cpf-cnpj-validate",
    icon: <FactCheck />,
    description: "Validador de CPF e CNPJ",
  },
];

export const securityRoutes = [
  {
    path: "/seguranca/qual-o-meu-ip",
    name: "Qual o Meu IP",
    homeName: "Qual o Meu IP",
    key: "qual-meu-ip",
    icon: <FindInPage />,
    description: "Descubra seu endereço IP público instantaneamente",
  },
  {
    path: "/seguranca/gerador-de-senha-segura",
    name: "Gerador de Senha Segura",
    homeName: "Gerador de Senha Segura",
    key: "gerador-senha-segura",
    icon: <KeyIcon />,
    description: "Gere senhas seguras e criptograficamente fortes",
  },
  {
    path: "/seguranca/gerador-de-django-secret-key",
    name: "Gerador de Django Secret",
    homeName: "Django SECRET_KEY",
    key: "django-secret-key",
    icon: <Security />,
    description: "Gere SECRET_KEYs seguras para projetos Django",
  },
];

export const navItems = [
  {
    routes: documentosRoutes,
    label: "Documentos",
    value: "documentos",
    icon: <FactoryIcon />,
  },

  {
    routes: comunicacaoRoutes,
    label: "Comunicações",
    value: "comunicacao",
    icon: <Phone />,
  },
  {
    routes: securityRoutes,
    label: "Segurança",
    value: "security",
    icon: <Security />,
  },
  {
    routes: utilsRoutes,
    label: "Utilitarios",
    value: "utils",
    icon: <TollOutlined />,
  },
];
