import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";

import JsonLd from "../components/common/JsonLd";
import SEO from "../components/common/SEO";
import ToolCard from "../components/tool/ToolCard";
import { categories, getToolsByCategory, SITE_NAME, SITE_URL, tools } from "../constants/tools";

const DESCRIPTION =
  "Ferramentas online gratuitas que rodam no seu navegador: gerador de senha, QR code, link de WhatsApp, gerador e validador de CPF e CNPJ, sorteador e conversor de moedas.";

const Home = () => (
  <>
    <SEO title={`${SITE_NAME} · Ferramentas online gratuitas`} description={DESCRIPTION} path="/" />
    <JsonLd
      data={[
        {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_NAME,
          url: SITE_URL,
          inLanguage: "pt-BR",
          description: DESCRIPTION,
          author: {
            "@type": "Person",
            name: "Alexandre Klostermann",
            url: `${SITE_URL}/sobre`,
          },
        },
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Ferramentas",
          itemListElement: tools.map((tool, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: tool.name,
            url: `${SITE_URL}${tool.path}`,
          })),
        },
      ]}
    />

    <Box component="section" sx={{ maxWidth: 720, mb: { xs: 5, md: 7 } }}>
      <Typography
        component="h1"
        variant="h1"
        sx={{ fontSize: { xs: "2rem", md: "2.6rem" }, mb: 1.5 }}
      >
        Ferramentas online gratuitas, sem cadastro
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" sx={{ fontSize: { md: "1.15rem" } }}>
        {tools.length} utilitários para o dia a dia de quem trabalha com internet no Brasil. Tudo
        roda no seu navegador: senhas, documentos e mensagens nunca saem do seu computador.
      </Typography>
    </Box>

    {categories.map(category => (
      <Box
        component="section"
        key={category.slug}
        id={category.slug}
        aria-labelledby={`${category.slug}-titulo`}
        sx={{ mb: { xs: 5, md: 6 }, scrollMarginTop: 80 }}
      >
        <Box sx={{ mb: 2 }}>
          <Typography id={`${category.slug}-titulo`} component="h2" variant="h2">
            {category.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {category.description}
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {getToolsByCategory(category.slug).map(tool => (
            <Grid item xs={12} sm={6} md={4} key={tool.slug}>
              <ToolCard tool={tool} />
            </Grid>
          ))}
        </Grid>
      </Box>
    ))}

    <Box component="section" aria-labelledby="sobre-titulo" sx={{ maxWidth: 720, pt: 2 }}>
      <Typography id="sobre-titulo" component="h2" variant="h2" sx={{ mb: 1.5 }}>
        Sobre o projeto
      </Typography>
      <Typography color="text.secondary" paragraph>
        O oAlexandre Toys nasceu de necessidades reais do dia a dia: gerar uma senha forte, montar
        um link de WhatsApp para um cliente, validar um CPF em um formulário de teste. Cada
        ferramenta foi feita para resolver uma dessas tarefas em segundos, sem anúncios, cadastro ou
        limite de uso.
      </Typography>
      <Typography color="text.secondary" paragraph>
        O código é aberto e está no{" "}
        <a
          href="https://github.com/oalexandre/oalexandre-toys"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        . Sentiu falta de alguma ferramenta? Abra uma issue ou escreva para eusou@oalexandre.com.br.
        Mais sobre o autor em <Link href="/sobre">Sobre</Link>.
      </Typography>
    </Box>
  </>
);

export async function getStaticProps() {
  return { props: {} };
}

export default Home;
