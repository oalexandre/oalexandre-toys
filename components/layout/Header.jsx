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
import { useEffect, useRef, useState } from "react";

import { categories, getTool, getToolsByCategory } from "../../constants/tools";
import { colors } from "../../theme";

import Logo from "./Logo";

const navItemSx = {
  display: "flex",
  alignItems: "center",
  borderRadius: 2,
  transition: "background-color 150ms",
  "&:hover, &[data-open='true']": { bgcolor: "action.hover" },
};

const navLinkSx = {
  display: "inline-flex",
  alignItems: "center",
  pl: 1.5,
  pr: 0.25,
  py: 1,
  borderRadius: 2,
  fontSize: "0.9375rem",
  fontWeight: 600,
  color: "text.secondary",
  textDecoration: "none",
  transition: "color 150ms",
  "&:hover, &[data-active='true']": { color: "text.primary" },
};

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  // Categoria com submenu aberto no desktop (só uma por vez).
  const [submenu, setSubmenu] = useState(null);
  const navRef = useRef(null);
  const toggleRefs = useRef({});
  // Submenu aberto pelo hover do mouse: o clique na seta logo depois não deve fechá-lo.
  const hoverOpened = useRef(null);
  const currentCategory = getTool(router.pathname)?.category;

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
    const onKey = event => {
      if (event.key !== "Escape") return;
      setSubmenu(null);
      toggleRefs.current[submenu]?.focus();
    };
    // Toque ou clique fora do menu fecha o submenu (no toque não há mouseleave).
    const onPointerDown = event => {
      if (!navRef.current?.contains(event.target)) setSubmenu(null);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointerDown);
    };
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
            ref={navRef}
            aria-label="Categorias"
            sx={{ display: { xs: "none", md: "flex" }, ml: "auto", gap: 0.5 }}
          >
            {categories.map((category, index) => {
              const isOpen = submenu === category.slug;
              const menuId = `submenu-${category.slug}`;
              // Só o primeiro grupo abre para a direita; os demais alinham pela direita para não sair da tela.
              const alignRight = index > 0;
              return (
                <Box
                  key={category.slug}
                  sx={{ position: "relative" }}
                  // Hover só com mouse: no toque, o pointerenter abriria e o clique fecharia em seguida.
                  onPointerEnter={event => {
                    if (event.pointerType !== "mouse") return;
                    hoverOpened.current = category.slug;
                    setSubmenu(category.slug);
                  }}
                  onPointerLeave={event => {
                    if (event.pointerType !== "mouse") return;
                    hoverOpened.current = null;
                    setSubmenu(null);
                  }}
                  onBlur={event => {
                    if (!event.currentTarget.contains(event.relatedTarget)) setSubmenu(null);
                  }}
                >
                  <Box data-open={isOpen} sx={navItemSx}>
                    <Box
                      component={Link}
                      href={`/#${category.slug}`}
                      data-active={currentCategory === category.slug}
                      onClick={() => setSubmenu(null)}
                      sx={navLinkSx}
                    >
                      {category.name}
                    </Box>
                    <IconButton
                      ref={node => {
                        toggleRefs.current[category.slug] = node;
                      }}
                      size="small"
                      aria-label={`Ferramentas de ${category.name}`}
                      aria-expanded={isOpen}
                      aria-controls={menuId}
                      onClick={() => {
                        if (hoverOpened.current === category.slug) {
                          hoverOpened.current = null;
                          return;
                        }
                        setSubmenu(isOpen ? null : category.slug);
                      }}
                      sx={{
                        mr: 0.5,
                        p: 0.5,
                        color: "text.secondary",
                        "&:hover": { bgcolor: "transparent" },
                      }}
                    >
                      <ExpandMoreIcon
                        sx={{
                          fontSize: 18,
                          opacity: 0.7,
                          transition: "transform 150ms",
                          transform: isOpen ? "rotate(180deg)" : "none",
                        }}
                      />
                    </IconButton>
                  </Box>

                  <Box
                    id={menuId}
                    hidden={!isOpen}
                    sx={{
                      position: "absolute",
                      top: "100%",
                      ...(alignRight ? { right: 0 } : { left: 0 }),
                      pt: 0.5,
                      zIndex: 10,
                    }}
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
                              aria-current={active ? "page" : undefined}
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
              );
            })}
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
                    aria-current={router.pathname === tool.path ? "page" : undefined}
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
