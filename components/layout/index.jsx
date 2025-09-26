import CloseIcon from "@mui/icons-material/Close";
import LaunchIcon from "@mui/icons-material/Launch";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Box,
  Toolbar,
  CssBaseline,
  IconButton,
  Container,
  Divider,
  AppBar,
  Drawer,
  useMediaQuery,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/router";
import { useState } from "react";

import { mainRoutes, navItems } from "../../constants/routes";
import Breadcrumbs from "../common/Breadcrumbs";
import Disclaimer from "../common/Disclaimer";
import FeedBackToggle from "../common/Feedback";

import AppBarLogo from "./AppBarLogo";
import NavItem from "./NavItem";

const drawerWidth = 240;

const DrawerHeader = ({ children }) => (
  <Box
    sx={{
      height: "64px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: theme => theme.spacing(0, 1, 0, 2),
    }}
  >
    {children}
  </Box>
);

const Layout = ({ children }) => {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <>
      {isMobile && (
        <DrawerHeader>
          <IconButton aria-label="close drawer" onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </DrawerHeader>
      )}

      <NavItem
        router={router}
        routes={mainRoutes}
        open={true}
        setOpen={() => isMobile && setMobileOpen(false)}
        label={mainRoutes[0].name}
        isHomePage
      />

      {navItems.map((navItem, index) => (
        <NavItem
          key={index}
          router={router}
          routes={navItem.routes}
          open={true}
          setOpen={() => isMobile && setMobileOpen(false)}
          label={navItem.label}
        />
      ))}

      <Divider sx={{ mt: "auto" }} />

      <Box sx={{ p: 2, display: "flex", flexDirection: "column", gap: 1 }}>
        <Button
          variant="outlined"
          color="primary"
          startIcon={<LaunchIcon />}
          href="https://oalexandre.com.br"
          target="_blank"
          rel="noopener noreferrer"
          fullWidth
          sx={{ mb: 1 }}
        >
          oAlexandre.com.br
        </Button>
        <FeedBackToggle />
      </Box>
    </>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <AppBar
        position="fixed"
        sx={{
          backgroundImage: "none",
          borderBottom: "1px solid rgba(255, 255, 255, 0.12)",
          width: { md: `calc(100% - ${drawerWidth}px)` },
          ml: { md: `${drawerWidth}px` },
        }}
      >
        <Toolbar sx={{ height: "64px" }}>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <AppBarLogo logoSize={38} textSize={24} />
        </Toolbar>
      </AppBar>

      <Box component="nav" sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}>
        {/* Mobile drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better mobile performance
          }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                background: "rgba(255,255,255,0.1)",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "rgba(255,255,255,0.3)",
                borderRadius: "10px",
                "&:hover": {
                  background: "rgba(255,255,255,0.5)",
                },
              },
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(255,255,255,0.3) rgba(255,255,255,0.1)",
            },
          }}
        >
          {drawerContent}
        </Drawer>

        {/* Desktop drawer */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                background: "rgba(255,255,255,0.1)",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "rgba(255,255,255,0.3)",
                borderRadius: "10px",
                "&:hover": {
                  background: "rgba(255,255,255,0.5)",
                },
              },
              scrollbarWidth: "thin",
              scrollbarColor: "rgba(255,255,255,0.3) rgba(255,255,255,0.1)",
            },
          }}
          open
        >
          {drawerContent}
        </Drawer>
      </Box>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { md: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar /> {/* Spacer for fixed AppBar */}
        <Container
          component="main"
          sx={{
            minHeight: "calc(100vh - 65px)",
            marginInline: 0,
            padding: {
              xs: 2,
              sm: 3,
              md: 4,
            },
          }}
        >
          <Breadcrumbs />
          {children}
        </Container>
        <Disclaimer />
      </Box>
    </Box>
  );
};

export default Layout;
