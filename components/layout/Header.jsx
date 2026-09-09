import CloseIcon from "@mui/icons-material/CloseRounded";
import ExpandMoreIcon from "@mui/icons-material/ExpandMoreRounded";
import MenuIcon from "@mui/icons-material/MenuRounded";
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
import { colors } from "../../theme";

import Logo from "./Logo";

const navLinkSx = {
  display: "inline-flex",
  alignItems: "center",
  gap: 0.25,
  px: 1.5,
  py: 1,
  borderRadius: 2,
  fontSize: "0.9375rem",
  fontWeight: 600,
  color: "text.secondary",
  textDecoration: "none",
  transition: "background-color 150ms, color 150ms",
  "&:hover, &[aria-expanded='true']": { color: "text.primary", bgcolor: "action.hover" },
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
      sx={{ bgcolor: "background.paper", borderBottom: 1, borderColor: "divider" }}
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
                  sx={navLinkSx}
                >
                  {category.name}
                  <ExpandMoreIcon sx={{ fontSize: 18, opacity: 0.6 }} />
                </Box>

                <Box
                  hidden={submenu !== category.slug}
                  sx={{ position: "absolute", top: "100%", left: 0, pt: 0.5, zIndex: 10 }}
                >
                  <Box
                    component="ul"
                    sx={{
                      listStyle: "none",
                      m: 0,
                      p: 0.75,
                      minWidth: 272,
                      bgcolor: "background.paper",
                      border: 1,
                      borderColor: "divider",
                      borderRadius: 3,
                      boxShadow:
                        "0 12px 32px -8px rgba(21,23,29,0.18), 0 2px 6px rgba(21,23,29,0.06)",
                    }}
                  >
                    {getToolsByCategory(category.slug).map(tool => {
                      const Icon = tool.icon;
                      const active = router.pathname === tool.path;
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
                              py: 1.1,
                              borderRadius: 2,
                              fontSize: "0.9375rem",
                              fontWeight: 500,
                              color: active ? "primary.main" : "text.primary",
                              bgcolor: active ? colors.accentTint : "transparent",
                              textDecoration: "none",
                              whiteSpace: "nowrap",
                              transition: "background-color 150ms, color 150ms",
                              "&:hover": {
                                bgcolor: active ? colors.accentTint : "action.hover",
                                color: "primary.main",
                              },
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
        PaperProps={{ sx: { width: 320, maxWidth: "90vw" } }}
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
          <Logo size={26} />
          <IconButton aria-label="Fechar menu" onClick={() => setOpen(false)}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <Box component="nav" aria-label="Ferramentas" sx={{ overflowY: "auto", pb: 2 }}>
          {categories.map(category => (
            <List
              key={category.slug}
              dense
              subheader={
                <ListSubheader
                  disableSticky
                  sx={{
                    fontWeight: 700,
                    color: "text.primary",
                    fontSize: "0.9375rem",
                    lineHeight: "40px",
                  }}
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
                    sx={{
                      borderRadius: 2,
                      mx: 1,
                      minHeight: 48,
                      "&.Mui-selected": { color: "primary.main" },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 36, color: "primary.main" }}>
                      <Icon fontSize="small" />
                    </ListItemIcon>
                    <ListItemText
                      primary={tool.name}
                      primaryTypographyProps={{ fontSize: "0.9375rem", fontWeight: 500 }}
                    />
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
