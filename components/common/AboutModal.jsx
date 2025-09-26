import { Email, Facebook, Info, Instagram, Phone, Public } from "@mui/icons-material";
import {
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Link,
} from "@mui/material";
import { useState } from "react";

function Modal() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button endIcon={<Info />} variant="contained" onClick={handleOpen}>
        Contato | informações
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <Contato />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

function Contato() {
  return (
    <>
      <Typography variant="h4" gutterBottom>
        Contato
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <Phone />
          </ListItemIcon>
          <ListItemText primary="(47) 4101-1253" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Email />
          </ListItemIcon>
          <ListItemText primary="contato@toys.oalexandre.com.br" />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <Facebook />
          </ListItemIcon>
          <ListItemText
            primary={
              <Link href="https://www.facebook.com/oalexandre" target="_blank" rel="noopener">
                facebook.com/oalexandre
              </Link>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Instagram />
          </ListItemIcon>
          <ListItemText
            primary={
              <Link href="https://www.instagram.com/oalexandre" target="_blank" rel="noopener">
                @oalexandre
              </Link>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <Public />
          </ListItemIcon>
          <ListItemText
            primary={
              <Link href="https://toys.oalexandre.com.br" target="_blank" rel="noopener">
                toys.oalexandre.com.br
              </Link>
            }
          />
        </ListItem>
      </List>
    </>
  );
}

export default Modal;
