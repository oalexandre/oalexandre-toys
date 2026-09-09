import NavigateNextIcon from "@mui/icons-material/NavigateNextRounded";
import { Box, Breadcrumbs, Grid, Typography } from "@mui/material";
import Link from "next/link";

import { formatDate, getCategory, getRelatedTools, getTool, SITE_URL } from "../../constants/tools";
import { colors, monoFontFamily } from "../../theme";
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
      dateModified: entry.updated,
      author: {
        "@type": "Person",
        name: "Alexandre Klostermann",
        url: `${SITE_URL}/sobre`,
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
          {entry.updated && (
            <Typography
              variant="caption"
              component="p"
              sx={{ mt: 1.5, display: "flex", flexWrap: "wrap", gap: 0.75, alignItems: "center" }}
            >
              <span>
                Atualizado em <time dateTime={entry.updated}>{formatDate(entry.updated)}</time>
              </span>
              <Box component="span" aria-hidden="true" sx={{ color: "text.disabled" }}>
                ·
              </Box>
              <Box
                component={Link}
                href="/sobre"
                sx={{
                  color: "inherit",
                  textDecoration: "none",
                  "&:hover": { color: "primary.main" },
                }}
              >
                por Alexandre Klostermann
              </Box>
            </Typography>
          )}
        </Box>

        <Box component="section" aria-label="Ferramenta" sx={{ mb: { xs: 5, md: 7 } }}>
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
              "& a": { color: "primary.main", fontWeight: 600 },
              "& strong": { color: "text.primary", fontWeight: 600 },
              "& code": {
                fontFamily: monoFontFamily,
                fontSize: "0.875em",
                bgcolor: colors.surfaceSunken,
                border: `1px solid ${colors.line}`,
                px: 0.6,
                py: 0.1,
                borderRadius: 1,
              },
              "& pre": {
                fontFamily: monoFontFamily,
                fontSize: "0.875rem",
                lineHeight: 1.65,
                bgcolor: colors.ink,
                color: "#eef0f4",
                p: 2.5,
                borderRadius: 3,
                overflowX: "auto",
                mb: 2,
              },
              "& pre code": { bgcolor: "transparent", border: 0, p: 0, fontSize: "inherit" },
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
