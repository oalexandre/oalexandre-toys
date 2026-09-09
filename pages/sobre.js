import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

import JsonLd from "../components/common/JsonLd";
import SEO from "../components/common/SEO";
import { formatDate, getUpdatedDate, SITE_URL, tools } from "../constants/tools";
import avatar from "../public/logos/oalexandre-logo.png";

export const AUTHOR = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/sobre#alexandre`,
  name: "Alexandre Klostermann",
  url: "https://oalexandre.com.br",
  jobTitle: "Desenvolvedor e empreendedor",
  image: `${SITE_URL}/logos/oalexandre-logo.png`,
  sameAs: [
    "https://oalexandre.com.br",
    "https://github.com/oalexandre",
    "https://www.instagram.com/oalexandre",
  ],
};

const linkSx = { color: "primary.main" };

const Sobre = () => (
  <>
    <SEO
      title="Sobre o oAlexandre Toys"
      description="Quem faz o oAlexandre Toys, por que as ferramentas existem e como o site funciona. Projeto de Alexandre Klostermann, aberto e gratuito."
      path="/sobre"
    />
    <JsonLd
      data={[
        AUTHOR,
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: "Sobre o oAlexandre Toys",
          url: `${SITE_URL}/sobre`,
          dateModified: getUpdatedDate("/sobre"),
          mainEntity: { "@id": `${SITE_URL}/sobre#alexandre` },
        },
      ]}
    />

    <Box
      component="article"
      sx={{ maxWidth: 720, mx: "auto", "& p": { color: "text.secondary", mb: 2 } }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 2.5, mb: 3 }}>
        <Box
          sx={{
            width: 88,
            height: 88,
            flexShrink: 0,
            borderRadius: "14px",
            overflow: "hidden",
            bgcolor: "#eef0f4",
            display: "grid",
            placeItems: "center",
          }}
        >
          <Image
            src={avatar}
            alt="Avatar em pixel art de Alexandre Klostermann"
            width={80}
            height={80}
            style={{ objectFit: "contain" }}
          />
        </Box>
        <Box>
          <Typography component="h1" variant="h1" sx={{ mb: 0.5 }}>
            Sobre
          </Typography>
          <Typography color="text.secondary">
            Alexandre Klostermann, quem faz o oAlexandre Toys.
          </Typography>
        </Box>
      </Box>

      <Typography>
        O oAlexandre Toys é um conjunto de {tools.length} ferramentas gratuitas feito por{" "}
        <Box component="a" href="https://oalexandre.com.br" sx={linkSx}>
          Alexandre Klostermann
        </Box>
        . Cada uma nasceu de uma necessidade real do dia a dia: gerar uma senha forte, montar um
        link de WhatsApp para um cliente, validar um CPF em um formulário de teste.
      </Typography>

      <Typography>
        Tudo roda no navegador. Senhas, documentos e mensagens não são enviados nem guardados em
        servidor. O código é aberto e está no{" "}
        <Box
          component="a"
          href="https://github.com/oalexandre/oalexandre-toys"
          target="_blank"
          rel="noopener noreferrer"
          sx={linkSx}
        >
          GitHub
        </Box>
        . Encontrou um erro ou sentiu falta de algo? Abra uma issue ou escreva para{" "}
        <Box component="a" href="mailto:eusou@oalexandre.com.br" sx={linkSx}>
          eusou@oalexandre.com.br
        </Box>
        .
      </Typography>

      <Typography>
        Para saber mais sobre o autor, projetos e artigos, visite{" "}
        <Box component="a" href="https://oalexandre.com.br" sx={linkSx}>
          oalexandre.com.br
        </Box>
        . A política de uso de dados deste site está em{" "}
        <Box component={Link} href="/privacidade" sx={linkSx}>
          Privacidade
        </Box>
        .
      </Typography>

      <Typography variant="body2">
        Atualizado em{" "}
        <time dateTime={getUpdatedDate("/sobre")}>{formatDate(getUpdatedDate("/sobre"))}</time>.
      </Typography>
    </Box>
  </>
);

export async function getStaticProps() {
  return { props: {} };
}

export default Sobre;
