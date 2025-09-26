import { useState } from "react";

import { Info } from "@mui/icons-material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { styled } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  "& .MuiDrawer-paper": {
    boxSizing: "border-box",
    width: "100%",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
  },
}));

const StyledListItem = styled(ListItem)(({ theme }) => ({
  color: theme.palette.primary.contrastText,
}));

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = open => event => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setIsOpen(open);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <StyledListItem>
          <ListItemIcon>
            <FacebookIcon />
          </ListItemIcon>
          <ListItemText primary="Facebook" />
        </StyledListItem>
        <StyledListItem>
          <ListItemIcon>
            <TwitterIcon />
          </ListItemIcon>
          <ListItemText primary="Twitter" />
        </StyledListItem>
        <StyledListItem>
          <ListItemIcon>
            <InstagramIcon />
          </ListItemIcon>
          <ListItemText primary="Instagram" />
        </StyledListItem>
      </List>
      <Divider />
    </Box>
  );

  return (
    <>
      <Button startIcon={<Info />} onClick={toggleDrawer(true)}>
        Saiba mais
      </Button>
      <StyledDrawer anchor="bottom" open={isOpen} onClose={toggleDrawer(false)}>
        {list()}
      </StyledDrawer>
    </>
  );
};

export default Footer;
