import emailjs from "@emailjs/browser";
import {
  Email,
  Instagram,
  Public,
  ContactPageOutlined,
  Info,
  Close,
  GitHub,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  CircularProgress,
  Divider,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Snackbar,
  Typography,
} from "@mui/material";
import { Card, CardHeader, IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { createTheme, styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import Image from "next/image";
import React, { useRef, useState } from "react";

import logo from "../../public/logos/oalexandre-logo.png";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
    },
    background: {
      default: "#333333",
    },
  },
});

const FeedbackButton = styled(Button)({
  backgroundColor: theme.palette.primary.main,
  color: "#f2f2f2",
  "&:hover": {
    backgroundColor: "#1565c0",
  },
});

const FeedbackModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#000",
  "& .MuiPaper-root": {
    width: "100%",
    maxWidth: "none",
  },
});

const ModalFirst = styled("div")({
  backgroundColor: theme.palette.background.default,
  borderRadius: "5px",
  padding: "50px",
  outline: "none",
  width: "100%",
  height: "100%",
});

const ModalContainer = styled("div")({
  backgroundColor: theme.palette.background.default,
  borderRadius: "5px",
  padding: "20px",
  outline: "none",
  width: "32.5%",
  height: "47.5%",
});
const _FeedbackForm = ({ onClose, cardTitle }) => {
  const [feedbackSent, setFeedbackSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm("service_po4i0lq", "template_bh05x9j", form.current, "5tHrtJW8RbpwtZGcP")
      .then(
        _result => {
          // Success - feedback sent
          setFeedbackSent(true);
        },
        _error => {
          // Error handling - could add user notification here
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <Box sx={{ textAlign: "center", mb: 1 }}>
        <Image src={logo} alt="Logo da oAlexandre Toys" width={90} height={105} />

        <Typography
          sx={{
            color: "#f2f2f2",
            textAlign: "center",
          }}
          variant="subtitle2"
        >
          Diga-nos o que está faltando ou o que você gostaria de ver no site.
        </Typography>
      </Box>
      <Box>
        <TextField
          sx={{ mt: 2 }}
          label="Adicione um título"
          rows={4}
          name="title"
          fullWidth
          required
        />
        <TextField
          sx={{ mt: 2 }}
          label={`Digite aqui seu feedback para ${cardTitle}`}
          multiline
          rows={4}
          name="feedback"
          fullWidth
          required
        />
        <input type="hidden" name="type" value={cardTitle} />
        <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 1 }}>
          <Button
            variant="contained"
            sx={{ mt: 2 }}
            color="primary"
            type="submit"
            disabled={loading}
          >
            {loading ? <CircularProgress size={24} sx={{ color: "#fff" }} /> : "Enviar"}
          </Button>
          <Button variant="outlined" sx={{ ml: 2, mt: 2 }} onClick={onClose}>
            Cancelar
          </Button>
        </Box>
      </Box>
      {feedbackSent && (
        <Box sx={{ mt: 2 }}>
          <Snackbar
            open={feedbackSent}
            autoHideDuration={6000}
            onClose={() => setFeedbackSent(false)}
            message="Feedback enviado com sucesso!"
            action={
              <React.Fragment>
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={() => setFeedbackSent(false)}
                >
                  <Close fontSize="small" />
                </IconButton>
              </React.Fragment>
            }
          />
        </Box>
      )}
    </form>
  );
};

// FeedbackCard component - currently not used but kept for future implementation
// const FeedbackCard = ({ cardTitle, cardIcon }) => {
//   const [open, setOpen] = useState(false);
//
//   const handleOpen = () => {
//     setOpen(true);
//   };
//
//   const handleClose = () => {
//     setOpen(false);
//   };
//
//   let icon;
//   if (cardIcon === "report") {
//     icon = <BugReportOutlined />;
//   } else if (cardIcon === "request") {
//     icon = <EmojiObjectsOutlined />;
//   }
//
//   return (
//     <>
//       <Card
//         variant="filled"
//         onClick={handleOpen}
//         sx={{
//           "&:hover": {
//             boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
//             backgroundColor: "#404040",
//           },
//           marginTop: "1rem",
//           backgroundColor: "#333333",
//           cursor: "pointer",
//           transition: "all 0.5s ease",
//           width: "100%",
//         }}
//       >
//         <CardHeader
//           avatar={<Avatar>{icon}</Avatar>}
//           title={cardTitle}
//           subheader="Deixe aqui seu feedback"
//         />
//       </Card>
//
//       <FeedbackModal open={open} onClose={handleClose}>
//         <ModalContainer>
//           <FeedbackForm onClose={handleClose} cardTitle={cardTitle} cardIcon={cardIcon} />
//         </ModalContainer>
//       </FeedbackModal>
//     </>
//   );
// };

const IssuesCard = () => {
  const handleClick = () => {
    window.open(
      "https://github.com/oalexandre/oalexandre-toys/issues",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <Card
      variant="filled"
      onClick={handleClick}
      sx={{
        "&:hover": {
          boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
          backgroundColor: "#404040",
        },
        marginTop: "1rem",
        backgroundColor: "#333333",
        cursor: "pointer",
        transition: "all 0.5s ease",
        width: "100%",
      }}
    >
      <CardHeader
        avatar={
          <Avatar>
            <GitHub />
          </Avatar>
        }
        title="Reportar Erro ou Solicitar Recurso"
        subheader="Abrir issue no GitHub do projeto"
      />
    </Card>
  );
};

const ContatoCard = ({ cardTitle, cardIcon }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card
        variant="filled"
        onClick={handleOpen}
        sx={{
          "&:hover": {
            boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
            backgroundColor: "#404040",
          },
          marginTop: "1rem",
          backgroundColor: "#333333",
          cursor: "pointer",
          transition: "all 0.5s ease",
          width: "100%",
        }}
      >
        <CardHeader
          avatar={<Avatar>{<ContactPageOutlined />}</Avatar>}
          title={cardTitle}
          subheader="Informações de contato"
        />
      </Card>

      <FeedbackModal open={open} onClose={handleClose}>
        <ModalContainer>
          <ContatoForm cardTitle={cardTitle} cardIcon={cardIcon} />
        </ModalContainer>
      </FeedbackModal>
    </>
  );
};
function ContatoForm() {
  return (
    <>
      <Typography
        sx={{
          color: "#f2f2f2",
          textAlign: "center",
        }}
        variant="h4"
      >
        Contatos oAlexandre Toys
      </Typography>

      <List>
        <ListItem>
          <ListItemIcon>
            <Email />
          </ListItemIcon>
          <ListItemText
            sx={{
              color: "#f2f2f2",
            }}
            primary="eusou@oalexandre.com.br"
          />
        </ListItem>
        <Divider />
        <ListItem>
          <ListItemIcon>
            <GitHub />
          </ListItemIcon>
          <ListItemText
            primary={
              <Link href="https://github.com/oalexandre" target="_blank" rel="noopener">
                github.com/oalexandre
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
              <Link href="https://oalexandre.com.br" target="_blank" rel="noopener">
                oalexandre.com.br
              </Link>
            }
          />
        </ListItem>
      </List>
    </>
  );
}
const Feedback = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <FeedbackButton onClick={handleOpen} endIcon={<Info />}>
        Feedback | Contato
      </FeedbackButton>
      <FeedbackModal open={open} onClose={handleClose}>
        <div>
          <ModalFirst>
            <Box sx={{ textAlign: "center", mb: 3 }}>
              <Image src={logo} alt="Logo da oAlexandre Toys" width={90} height={105} />
            </Box>
            <IssuesCard />

            <ContatoCard cardTitle="Entre em contato" cardIcon="contact" />
          </ModalFirst>
        </div>
      </FeedbackModal>
    </div>
  );
};

export default Feedback;
