import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";

import SEO from "../components/common/SEO";
import ToolCard from "../components/tool/ToolCard";
import { tools } from "../constants/tools";

const NotFound = () => (
  <>
    <SEO
      title="Página não encontrada"
      description="Esta página não existe. Veja as ferramentas disponíveis."
      path="/404"
      noindex
    />
    <Box sx={{ maxWidth: 820, mx: "auto", textAlign: "center", py: { xs: 4, md: 8 } }}>
      <Typography variant="body2" color="primary" sx={{ fontWeight: 700, mb: 1 }}>
        Erro 404
      </Typography>
      <Typography component="h1" variant="h1" sx={{ mb: 1.5 }}>
        Página não encontrada
      </Typography>
      <Typography color="text.secondary" sx={{ mb: 3 }}>
        O endereço pode ter mudado. Estas são as ferramentas mais usadas:
      </Typography>
      <Grid container spacing={2} sx={{ textAlign: "left", mb: 4 }}>
        {tools.slice(0, 6).map(tool => (
          <Grid item xs={12} sm={6} md={4} key={tool.slug}>
            <ToolCard tool={tool} compact />
          </Grid>
        ))}
      </Grid>
      <Button component={Link} href="/" variant="contained" size="large">
        Ver todas as ferramentas
      </Button>
    </Box>
  </>
);

export default NotFound;
