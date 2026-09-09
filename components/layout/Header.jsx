import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Container,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Toolbar,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { categories, getToolsByCategory } from "../../constants/tools";

import Logo from "./Logo";

const navLinkSx = {
  px: 1.5,
  py: 0.75,
  borderRadius: 2,
  fontSize: "0.925rem",
  fontWeight: 500,
  color: "text.secondary",
  textDecoration: "none",
  "&:hover": { color: "text.primary", bgcolor: "action.hover" },
};

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  // Categoria com submenu aberto no desktop (só uma por vez).
  const [submenu, setSubmenu] = useState(null);

  useEffect(() => {
    const close = () => {
      setOpen(false);
      setSubmenu(null);
    };
    router.events.on("routeChangeStart", close);
    router.events.on("hashChangeStart", close);
    return () => {
      router.events.off("routeChangeStart", close);
      router.events.off("hashChangeStart", close);
    };
  }, [router.events]);

  useEffect(() => {
    if (!submenu) return undefined;
    const onKey = event => event.key === "Escape" && setSubmenu(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [submenu]);

  return (
    <AppBar
      position="sticky"
      color="inherit"
      elevation={0}
      sx={{
        bgcolor: "rgba(255,255,255,0.92)",
        backdropFilter: "blur(8px)",
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: { xs: 60, md: 64 }, gap: 2 }}>
          <Logo />

          <Box
            component="nav"
            aria-label="Categorias"
            sx={{ display: { xs: "none", md: "flex" }, ml: "auto", gap: 0.5 }}
          >
            {categories.map(category => (
              <Box
                key={category.slug}
                sx={{ position: "relative" }}
                onMouseEnter={() => setSubmenu(category.slug)}
                onMouseLeave={() => setSubmenu(null)}
                onBlur={event => {
                  if (!event.currentTarget.contains(event.relatedTarget)) setSubmenu(null);
                }}
              >
                <Box
                  component={Link}
                  href={`/#${category.slug}`}
                  aria-haspopup="true"
                  aria-expanded={submenu === category.slug}
                  onFocus={() => setSubmenu(category.slug)}
                  onClick={() => setSubmenu(null)}
                  sx={{ ...navLinkSx, display: "inline-flex", alignItems: "center", gap: 0.25 }}
                >
                  {category.name}
                  <ExpandMoreIcon sx={{ fontSize: 18, opacity: 0.6 }} />
                </Box>

                <Box
                  hidden={submenu !== category.slug}
                  sx={{
                    position: "absolute",
                    top: "100%",
                    left: 0,
                    pt: 1,
                    zIndex: 10,
                  }}
                >
                  <Box
                    component="ul"
                    sx={{
                      listStyle: "none",
                      m: 0,
                      p: 0.75,
                      minWidth: 260,
                      bgcolor: "background.paper",
                      border: 1,
                      borderColor: "divider",
                      borderRadius: 2,
                      boxShadow: "0 10px 30px rgba(22,24,29,0.10)",
                    }}
                  >
                    {getToolsByCategory(category.slug).map(tool => {
                      const Icon = tool.icon;
                      return (
                        <Box component="li" key={tool.slug}>
                          <Box
                            component={Link}
                            href={tool.path}
                            onClick={() => setSubmenu(null)}
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              gap: 1.25,
                              px: 1.25,
                              py: 1,
                              borderRadius: 1.5,
                              fontSize: "0.9rem",
                              fontWeight: 500,
                              color:
                                router.pathname === tool.path ? "primary.main" : "text.primary",
                              textDecoration: "none",
                              whiteSpace: "nowrap",
                              "&:hover": { bgcolor: "action.hover", color: "primary.main" },
                            }}
                          >
                            <Icon fontSize="small" sx={{ color: "primary.main" }} />
                            {tool.name}
                          </Box>
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              </Box>
            ))}
            <Box
              component="a"
              href="https://oalexandre.com.br"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ ...navLinkSx, color: "primary.main", "&:hover": { bgcolor: "action.hover" } }}
            >
              oalexandre.com.br
            </Box>
          </Box>

          <IconButton
            aria-label="Abrir menu"
            onClick={() => setOpen(true)}
            edge="end"
            sx={{ display: { md: "none" }, ml: "auto" }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Container>

      <Drawer
        anchor="right"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{ sx: { width: 300, maxWidth: "88vw" } }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 2,
            py: 1.5,
          }}
        >
          <Logo size={28} />
          <IconButton aria-label="Fechar menu" onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <Box component="nav" aria-label="Ferramentas" sx={{ overflowY: "auto" }}>
          {categories.map(category => (
            <List
              key={category.slug}
              dense
              subheader={
                <ListSubheader
                  disableSticky
                  sx={{ fontWeight: 700, color: "text.primary", lineHeight: "36px" }}
                >
                  {category.name}
                </ListSubheader>
              }
            >
              {getToolsByCategory(category.slug).map(tool => {
                const Icon = tool.icon;
                return (
                  <ListItemButton
                    key={tool.slug}
                    component={Link}
                    href={tool.path}
                    selected={router.pathname === tool.path}
                    sx={{ borderRadius: 2, mx: 1 }}
                  >
                    <ListItemIcon sx={{ minWidth: 36 }}>
                      <Icon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText primary={tool.name} />
                  </ListItemButton>
                );
              })}
            </List>
          ))}
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
