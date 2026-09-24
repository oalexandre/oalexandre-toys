import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Link from "next/link";

import { categories, getToolsByCategory } from "../../constants/tools";

import { LogoMark } from "./Logo";

const footerLinkSx = {
  display: "inline-block",
  fontSize: "0.9375rem",
  color: "text.secondary",
  textDecoration: "none",
  py: 0.5,
  transition: "color 150ms",
  "&:hover": { color: "primary.main" },
};

const Footer = () => (
  <Box
    component="footer"
    sx={{ mt: "auto", borderTop: 1, borderColor: "divider", bgcolor: "background.paper" }}
  >
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
      <Grid container spacing={{ xs: 3, md: 4 }}>
        {categories.map(category => (
          <Grid item xs={12} sm={4} key={category.slug}>
            <Typography component="h2" variant="subtitle2" sx={{ mb: 1, color: "text.primary" }}>
              {category.name}
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", m: 0, p: 0 }}>
              {getToolsByCategory(category.slug).map(tool => (
                <li key={tool.slug}>
                  <Box component={Link} href={tool.path} sx={footerLinkSx}>
                    {tool.name}
                  </Box>
                </li>
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Grid container spacing={3} alignItems="flex-start">
        <Grid item xs={12} md={7}>
          <Box sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
            <Box sx={{ mt: 0.25, flexShrink: 0 }}>
              <LogoMark size={24} />
            </Box>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ "& a": { color: "primary.main", fontWeight: 600 } }}
            >
              Ferramentas gratuitas feitas por{" "}
              <a href="https://oalexandre.com.br" target="_blank" rel="noopener noreferrer">
                Alexandre Klostermann
              </a>
              . As ferramentas rodam no seu navegador e nada do que você digita fica guardado; só as
              consultas de IP, câmbio e CEP usam serviços externos, como explica a{" "}
              <Link href="/privacidade">página de privacidade</Link>. Os geradores de CPF e CNPJ
              produzem números válidos apenas para testes de software. As cotações de moeda são
              apenas referência.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: { xs: 1.5, md: 2.5 },
              justifyContent: { md: "flex-end" },
            }}
          >
            <Box component={Link} href="/sobre" sx={footerLinkSx}>
              Sobre
            </Box>
            <Box component={Link} href="/privacidade" sx={footerLinkSx}>
              Privacidade
            </Box>
            <Box component="a" href="mailto:eusou@oalexandre.com.br" sx={footerLinkSx}>
              Contato
            </Box>
            <Box
              component="a"
              href="https://github.com/oalexandre/oalexandre-toys"
              target="_blank"
              rel="noopener noreferrer"
              sx={footerLinkSx}
            >
              GitHub
            </Box>
            <Box
              component="a"
              href="https://github.com/oalexandre/oalexandre-toys/issues"
              target="_blank"
              rel="noopener noreferrer"
              sx={footerLinkSx}
            >
              Sugerir ferramenta
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  </Box>
);

export default Footer;
