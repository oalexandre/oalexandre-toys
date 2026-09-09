import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Link from "next/link";

import { categories, getToolsByCategory } from "../../constants/tools";

const footerLinkSx = {
  display: "block",
  fontSize: "0.9rem",
  color: "text.secondary",
  textDecoration: "none",
  py: 0.5,
  "&:hover": { color: "primary.main" },
};

const Footer = () => (
  <Box
    component="footer"
    sx={{ mt: "auto", borderTop: 1, borderColor: "divider", bgcolor: "background.paper" }}
  >
    <Container maxWidth="lg" sx={{ py: { xs: 5, md: 7 } }}>
      <Grid container spacing={4}>
        {categories.map(category => (
          <Grid item xs={6} md={3} key={category.slug}>
            <Typography component="h2" variant="h4" sx={{ mb: 1.5 }}>
              {category.name}
            </Typography>
            {getToolsByCategory(category.slug).map(tool => (
              <Box key={tool.slug} component={Link} href={tool.path} sx={footerLinkSx}>
                {tool.name}
              </Box>
            ))}
          </Grid>
        ))}
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Grid container spacing={3} alignItems="flex-start">
        <Grid item xs={12} md={7}>
          <Typography variant="body2" color="text.secondary">
            Ferramentas gratuitas feitas por{" "}
            <Box
              component="a"
              href="https://oalexandre.com.br"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: "primary.main" }}
            >
              Alexandre Klostermann
            </Box>
            . Tudo roda no seu navegador: nenhum dado digitado é enviado ou armazenado. Os geradores
            de CPF e CNPJ produzem números matematicamente válidos apenas para testes de software.
            As cotações de moeda são apenas referência.
          </Typography>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: { md: "flex-end" } }}
          >
            <Box component="a" href="mailto:eusou@oalexandre.com.br" sx={footerLinkSx}>
              eusou@oalexandre.com.br
            </Box>
            <Box
              component="a"
              href="https://github.com/oalexandre/oalexandre-toys"
              target="_blank"
              rel="noopener noreferrer"
              sx={footerLinkSx}
            >
              Código no GitHub
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
