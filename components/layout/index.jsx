import { Box, Container } from "@mui/material";

import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => (
  <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
    <Header />
    <Container component="main" id="conteudo" maxWidth="lg" sx={{ py: { xs: 3, md: 5 }, flex: 1 }}>
      {children}
    </Container>
    <Footer />
  </Box>
);

export default Layout;
