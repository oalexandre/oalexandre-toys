import ExpandMoreIcon from "@mui/icons-material/ExpandMoreRounded";
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from "@mui/material";

/**
 * Lista de perguntas frequentes. Espera [{ question, answer }], onde
 * `answer` é texto puro (também vai para o schema FAQPage).
 */
const Faq = ({ items }) => {
  if (!items?.length) return null;
  return (
    <Box component="section" aria-labelledby="faq-titulo">
      <Typography id="faq-titulo" component="h2" variant="h2" sx={{ mb: 2 }}>
        Perguntas frequentes
      </Typography>
      <Box
        sx={{
          border: 1,
          borderColor: "divider",
          borderRadius: 3,
          overflow: "hidden",
          bgcolor: "background.paper",
        }}
      >
        {items.map((item, index) => (
          <Accordion
            key={index}
            disableGutters
            elevation={0}
            square
            sx={{
              border: 0,
              "&:not(:last-of-type)": { borderBottom: 1, borderColor: "divider" },
              "&::before": { display: "none" },
            }}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />} sx={{ px: 2.5 }}>
              <Typography component="h3" variant="h4">
                {item.question}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 2.5, pt: 0, pb: 2.5 }}>
              <Typography color="text.secondary">{item.answer}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default Faq;
