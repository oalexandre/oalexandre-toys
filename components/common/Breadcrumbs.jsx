import { Home, NavigateNext } from "@mui/icons-material";
import { Breadcrumbs as MuiBreadcrumbs, Link as MuiLink, Typography, Box } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

import { allRoutes, navItems } from "../../constants/routes";

const Breadcrumbs = () => {
  const router = useRouter();
  const currentPath = router.asPath;

  if (currentPath === "/") return null;

  const currentRoute = allRoutes.find(route => route.path === currentPath);
  if (!currentRoute) return null;

  const category = navItems.find(item => item.routes.some(route => route.path === currentPath));

  return (
    <Box sx={{ mb: 1, mt: -1 }}>
      <MuiBreadcrumbs
        separator={<NavigateNext fontSize="small" />}
        aria-label="breadcrumb"
        sx={{
          fontSize: "0.875rem",
          "& .MuiBreadcrumbs-separator": {
            color: "text.secondary",
          },
          "& .MuiTypography-root": {
            fontSize: "0.875rem",
          },
          "& .MuiLink-root": {
            fontSize: "0.875rem",
          },
        }}
      >
        <Link href="/" passHref style={{ textDecoration: "none" }}>
          <MuiLink
            underline="hover"
            color="inherit"
            sx={{ display: "flex", alignItems: "center" }}
            aria-label="Voltar para página inicial"
          >
            <Home sx={{ mr: 0.5 }} fontSize="inherit" />
            Início
          </MuiLink>
        </Link>

        {category && (
          <Typography color="text.primary" sx={{ display: "flex", alignItems: "center" }}>
            {category.icon && category.icon}
            <Box component="span" sx={{ ml: 0.5 }}>
              {category.label}
            </Box>
          </Typography>
        )}

        <Typography
          color="text.primary"
          sx={{
            display: "flex",
            alignItems: "center",
            fontWeight: "medium",
          }}
        >
          {currentRoute.icon && currentRoute.icon}
          <Box component="span" sx={{ ml: 0.5 }}>
            {currentRoute.name}
          </Box>
        </Typography>
      </MuiBreadcrumbs>
    </Box>
  );
};

export default Breadcrumbs;
