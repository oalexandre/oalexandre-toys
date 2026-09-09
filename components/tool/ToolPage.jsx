import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Box, Breadcrumbs, Grid, Typography } from "@mui/material";
import Link from "next/link";

import { getCategory, getRelatedTools, getTool, SITE_URL } from "../../constants/tools";
import JsonLd from "../common/JsonLd";
import SEO from "../common/SEO";

import Faq from "./Faq";
import ToolCard from "./ToolCard";

const breadcrumbLinkSx = {
  color: "text.secondary",
  textDecoration: "none",
  "&:hover": { color: "primary.main" },
};

/**
 * Template de página de ferramenta.
 *
 * - `path`: rota da ferramenta (chave do catálogo em constants/tools).
 * - `title`/`description`: meta tags (title curto, description 120-160 chars).
 * - `lead`: uma frase abaixo do H1 dizendo o que a ferramenta faz.
 * - `tool`: o componente interativo (aparece logo abaixo do título).
 * - `children`: conteúdo explicativo (h2/h3 + parágrafos).
 * - `faq`: [{ question, answer }] vira seção + schema FAQPage.
 * - `features`: lista curta usada no schema SoftwareApplication.
 */
const ToolPage = ({ path, title, description, lead, tool, children, faq, features = [] }) => {
  const entry = getTool(path);
  const category = getCategory(entry.category);
  const related = getRelatedTools(path, 3);
  const url = `${SITE_URL}${path}`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: entry.name,
      description,
      url,
      applicationCategory: "UtilitiesApplication",
      operatingSystem: "Any",
      browserRequirements: "Requires JavaScript",
      inLanguage: "pt-BR",
      isAccessibleForFree: true,
      offers: { "@type": "Offer", price: "0", priceCurrency: "BRL" },
      featureList: features,
      author: {
        "@type": "Person",
        name: "Alexandre Klostermann",
        url: "https://oalexandre.com.br",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
        {
          "@type": "ListItem",
          position: 2,
          name: category.name,
          item: `${SITE_URL}/#${category.slug}`,
        },
        { "@type": "ListItem", position: 3, name: entry.name, item: url },
      ],
    },
  ];

  if (faq?.length) {
    jsonLd.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map(item => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    });
  }

  return (
    <>
      <SEO title={title} description={description} path={path} />
      <JsonLd data={jsonLd} />

      <Box component="article" sx={{ maxWidth: 820, mx: "auto" }}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="Você está em"
          sx={{ mb: 2, fontSize: "0.875rem" }}
        >
          <Box component={Link} href="/" sx={breadcrumbLinkSx}>
            Início
          </Box>
          <Box component={Link} href={`/#${category.slug}`} sx={breadcrumbLinkSx}>
            {category.name}
          </Box>
          <Typography color="text.primary" sx={{ fontSize: "inherit" }}>
            {entry.name}
          </Typography>
        </Breadcrumbs>

        <Box component="header" sx={{ mb: 3 }}>
          <Typography component="h1" variant="h1" sx={{ mb: 1 }}>
            {entry.name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {lead}
          </Typography>
        </Box>

        <Box component="section" aria-label="Ferramenta" sx={{ mb: 6 }}>
          {tool}
        </Box>

        {children && (
          <Box
            component="section"
            sx={theme => ({
              mb: 6,
              "& h2": { ...theme.typography.h2, mt: 4, mb: 1.5 },
              "& h2:first-of-type": { mt: 0 },
              "& h3": { ...theme.typography.h3, mt: 3, mb: 1 },
              "& p": { ...theme.typography.body1, mt: 0, mb: 2, color: "text.secondary" },
              "& ul, & ol": {
                ...theme.typography.body1,
                pl: 3,
                mt: 0,
                mb: 2,
                color: "text.secondary",
              },
              "& li": { mb: 0.75 },
              "& a": { color: "primary.main" },
              "& strong": { color: "text.primary", fontWeight: 600 },
              "& code": {
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
                fontSize: "0.875em",
                bgcolor: "#eef2ff",
                px: 0.6,
                py: 0.2,
                borderRadius: 1,
              },
              "& pre": {
                fontFamily: "ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
                fontSize: "0.85rem",
                lineHeight: 1.6,
                bgcolor: "#16181d",
                color: "#f3f4f6",
                p: 2,
                borderRadius: 2,
                overflowX: "auto",
                mb: 2,
              },
              "& pre code": { bgcolor: "transparent", p: 0, fontSize: "inherit" },
            })}
          >
            {children}
          </Box>
        )}

        {faq?.length > 0 && (
          <Box sx={{ mb: 6 }}>
            <Faq items={faq} />
          </Box>
        )}

        <Box component="section" aria-labelledby="relacionadas-titulo">
          <Typography id="relacionadas-titulo" component="h2" variant="h2" sx={{ mb: 2 }}>
            Outras ferramentas
          </Typography>
          <Grid container spacing={2}>
            {related.map(item => (
              <Grid item xs={12} sm={4} key={item.slug}>
                <ToolCard tool={item} compact />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default ToolPage;
