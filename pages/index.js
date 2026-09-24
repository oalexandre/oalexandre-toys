import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";

import JsonLd from "../components/common/JsonLd";
import SEO from "../components/common/SEO";
import ToolCard from "../components/tool/ToolCard";
import { categories, getToolsByCategory, SITE_NAME, SITE_URL, tools } from "../constants/tools";

const DESCRIPTION =
  "Ferramentas online grátis: QR code Pix, rachar a conta, álcool ou gasolina, consulta de CEP, link de WhatsApp, gerador de senha e de CPF e CNPJ.";

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
          author: { "@type": "Person", name: "Alexandre Klostermann", url: `${SITE_URL}/sobre` },
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

    <Box component="section" sx={{ maxWidth: 680, mb: { xs: 4, md: 6 } }}>
      <Typography
        component="h1"
        variant="h1"
        sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, mb: 1.5, textWrap: "balance" }}
      >
        Ferramentas gratuitas, direto no navegador
      </Typography>
      <Typography
        variant="subtitle1"
        color="text.secondary"
        sx={{ fontSize: { md: "1.125rem" }, textWrap: "pretty" }}
      >
        {tools.length} ferramentas para o dia a dia no Brasil, do Pix à conta do restaurante, e para
        quem testa sistemas. Sem cadastro e sem anúncio: o que você digita fica no seu aparelho.
      </Typography>
    </Box>

    {categories.map(category => (
      <Box
        component="section"
        key={category.slug}
        id={category.slug}
        aria-labelledby={`${category.slug}-titulo`}
        sx={{ mb: { xs: 4, md: 5 }, scrollMarginTop: 88 }}
      >
        <Box sx={{ display: "flex", alignItems: "baseline", gap: 1.5, mb: 1.5, flexWrap: "wrap" }}>
          <Typography id={`${category.slug}-titulo`} component="h2" variant="h2">
            {category.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {category.description}
          </Typography>
        </Box>
        <Grid container spacing={1.5}>
          {getToolsByCategory(category.slug).map(tool => (
            <Grid item xs={12} sm={6} key={tool.slug}>
              <ToolCard tool={tool} />
            </Grid>
          ))}
        </Grid>
      </Box>
    ))}

    <Box
      component="section"
      aria-labelledby="sobre-titulo"
      sx={{
        maxWidth: 680,
        mt: { xs: 5, md: 7 },
        pt: { xs: 4, md: 5 },
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <Typography id="sobre-titulo" component="h2" variant="h2" sx={{ mb: 1.5 }}>
        Sobre o projeto
      </Typography>
      <Typography color="text.secondary" paragraph>
        O oAlexandre Toys nasceu de necessidades reais do dia a dia: gerar uma senha forte, montar
        um link de WhatsApp para um cliente, validar um CPF em um formulário de teste. Cada
        ferramenta foi feita para resolver uma dessas tarefas em segundos, sem anúncios, cadastro ou
        limite de uso.
      </Typography>
      <Typography
        color="text.secondary"
        paragraph
        sx={{ "& a": { color: "primary.main", fontWeight: 600 } }}
      >
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
