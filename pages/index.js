import { Code, CloudOff, Speed, Build, WebAsset } from "@mui/icons-material";
import { Typography, Box, Chip, Divider, Alert } from "@mui/material";
import { useState } from "react";

import PageTitle from "../components/common/PageTitle";
import SEO from "../components/common/SEO";
import BottomMenu from "../components/layout/BottomMenu";
import {
  utilsRoutes,
  comunicacaoRoutes,
  documentosRoutes,
  navItems,
  securityRoutes,
  allRoutes,
} from "../constants/routes";
import CardLinks from "../features/Home/CardLinks";

const Home = () => {
  const [screen, setScreen] = useState("allRoutes");

  const handleScreen = (_, newScreen) => {
    setScreen(newScreen);
  };
  return (
    <>
      <SEO
        description="Coleção de ferramentas práticas online gratuitas: gerador de senhas, QR codes, links WhatsApp, validador CPF/CNPJ, sorteador automático e conversor de moedas. Feito com Next.js para uso diário."
        title="oAlexandre Toys - Ferramentas Online Gratuitas para o Dia a Dia"
        url="/"
        imageUrl="/oalexandre-toys-home.png"
        keywords="ferramentas online, gerador senha, QR code, WhatsApp, CPF CNPJ, sorteador, conversor moeda, ferramentas gratuitas, utilitários web, Next.js, React"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebApplication",
            name: "oAlexandre Toys",
            description:
              "Coleção de ferramentas práticas online gratuitas: gerador de senhas, QR codes, links WhatsApp, validador CPF/CNPJ, sorteador automático e conversor de moedas.",
            url: "https://toys.oalexandre.com.br",
            applicationCategory: "WebApplication",
            operatingSystem: "Any",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "BRL",
            },
            author: {
              "@type": "Person",
              name: "Alexandre",
              url: "https://oalexandre.com.br",
            },
            inLanguage: "pt-BR",
            isAccessibleForFree: true,
            applicationSubCategory: "Productivity",
            featureList: [
              "Gerador de senhas seguras",
              "Gerador de QR codes",
              "Gerador de links WhatsApp",
              "Validador de CPF e CNPJ",
              "Gerador de CPF e CNPJ",
              "Sorteador automático",
              "Conversor de moedas",
              "Descobrir DDD por região",
              "Verificar IP público",
            ],
          }),
        }}
      />

      <Box sx={{ maxWidth: 900, mx: "auto", mb: 4 }}>
        <PageTitle sx={{ mb: 3 }}>oAlexandre Toys</PageTitle>

        <Typography variant="h6" component="h2" sx={{ mb: 2, color: "primary.main" }}>
          🧸 Ferramentas Práticas que Você Realmente Precisa
        </Typography>

        <Typography paragraph>
          Bem-vindo ao <strong>oAlexandre Toys</strong>! Uma coleção de ferramentas online gratuitas
          criadas para resolver problemas do dia a dia que eu mesmo enfrentava durante a semana.
        </Typography>

        <Alert severity="info" sx={{ mb: 3 }}>
          <Typography variant="body2">
            <strong>🎯 A Motivação:</strong> Criei estas ferramentas para treinar Next.js/React, mas
            ao mesmo tempo resolver necessidades reais que apareciam no meu trabalho - como gerar
            senhas seguras, criar QR codes permanentes, fazer sorteios transparentes ou validar
            documentos brasileiros.
          </Typography>
        </Alert>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center", mb: 3 }}>
          <Chip icon={<Code />} label="100% Frontend" color="primary" variant="outlined" />
          <Chip icon={<CloudOff />} label="Sem Backend" color="secondary" variant="outlined" />
          <Chip icon={<Speed />} label="Processamento Local" color="success" variant="outlined" />
          <Chip icon={<Build />} label="Ferramentas Práticas" color="warning" variant="outlined" />
          <Chip icon={<WebAsset />} label="Next.js/React" color="info" variant="outlined" />
        </Box>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 4 }}>
          🔧 Por que estas ferramentas são diferentes?
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Sem persistência de dados:</strong> Tudo roda no seu navegador, nada é salvo ou
            enviado para servidores
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>APIs externas mínimas:</strong> Usamos apenas APIs públicas quando necessário
            (como cotação de moedas)
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Foco na privacidade:</strong> Suas senhas, textos e dados nunca saem do seu
            dispositivo
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Funciona offline:</strong> Após carregar, muitas ferramentas funcionam sem
            internet
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Gratuito para sempre:</strong> Sem cadastro, sem limites, sem pegadinhas
          </Typography>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" component="h3" gutterBottom>
          🚀 Ferramentas Disponíveis
        </Typography>

        <Box sx={{ mb: 3 }}>
          <Typography variant="body1" paragraph>
            <strong>🔐 Segurança:</strong> Gerador de senhas criptograficamente seguras e descoberta
            de IP público
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>📱 Comunicação:</strong> Gerador de links WhatsApp com mensagens e descoberta de
            DDD por região
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>📄 Documentos:</strong> Gerador e validador de CPF/CNPJ com algoritmos oficiais
            da Receita Federal
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>🛠️ Utilitários:</strong> QR codes que nunca expiram, sorteador para rifas e
            conversor de moedas
          </Typography>
        </Box>

        <br />
        <BottomMenu
          sx={{ pl: 3, mb: 3 }}
          screen={screen}
          handleScreen={handleScreen}
          navItems={navItems}
        >
          {screen === "allRoutes" && <CardLinks routes={allRoutes} />}
          {screen === "comunicacao" && <CardLinks routes={comunicacaoRoutes} />}
          {screen === "documentos" && <CardLinks routes={documentosRoutes} />}
          {screen === "security" && <CardLinks routes={securityRoutes} />}
          {screen === "utils" && <CardLinks routes={utilsRoutes} />}
        </BottomMenu>

        <Typography
          variant="body2"
          sx={{ fontStyle: "italic", color: "text.secondary", textAlign: "center" }}
        >
          "Cada ferramenta foi criada porque eu precisava dela na vida real. Se você também precisa,
          é só usar - sem cadastro, sem custo, sem complicação." - Alexandre
        </Typography>
      </Box>
    </>
  );
};

export default Home;
