import { Box, Container } from "@mui/material";

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => (
  <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    <Box
      component="a"
      href="#conteudo"
      sx={{
        position: "absolute",
        left: 16,
        top: 12,
        zIndex: "tooltip",
        px: 2,
        py: 1.25,
        borderRadius: 2,
        bgcolor: "primary.main",
        color: "primary.contrastText",
        fontWeight: 600,
        textDecoration: "none",
        transform: "translateY(-200%)",
        "&:focus": { transform: "none" },
      }}
    >
      Pular para o conteúdo
    </Box>
    <Header />
    <Container
      component="main"
      id="conteudo"
      tabIndex={-1}
      maxWidth="lg"
      sx={{ py: { xs: 3, md: 6 }, flex: 1, outline: "none" }}
    >
      {children}
    </Container>
    <Footer />
  </Box>
);

export default Layout;
