import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Link from "next/link";

import NavDivider from "./NavDivider";

const NavItem = ({ router, routes, open, setOpen, label, isHomePage }) => {
  return (
    <nav role="navigation" aria-label={`Navegação de ${label}`}>
      {!isHomePage && <NavDivider open={open} label={label} />}
      <List component="ul" role="list">
        {routes.map(({ key, path, name, icon, description }) => (
          <ListItem
            key={key}
            disablePadding
            sx={{ display: "block" }}
            component="li"
            role="listitem"
          >
            <Link
              href={path}
              passHref={true}
              style={{ textDecoration: "none" }}
              aria-label={`Ir para ${name}: ${description || name}`}
            >
              <ListItemButton
                selected={router.pathname === path ? true : false}
                onClick={() => setOpen(false)}
                component="a"
                role="menuitem"
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 2 : "auto",
                    justifyContent: "center",
                  }}
                  aria-hidden="true"
                >
                  {icon}
                </ListItemIcon>
                <ListItemText
                  primary={name}
                  sx={{
                    color: "#fff",
                    opacity: open ? 1 : 0,
                    "& .MuiListItemText-primary": {
                      fontSize: "15px",
                    },
                  }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </nav>
  );
};

export default NavItem;
