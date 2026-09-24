import NavigateNextIcon from "@mui/icons-material/NavigateNextRounded";
import { Box, Breadcrumbs, Chip, Grid, Stack, Typography } from "@mui/material";
import Link from "next/link";

import JsonLd from "../../components/common/JsonLd";
import SEO from "../../components/common/SEO";
import Faq from "../../components/tool/Faq";
import ToolCard from "../../components/tool/ToolCard";
import { formatDate, getTool, getUpdatedDate, SITE_URL } from "../../constants/tools";
import DddLookup from "../../features/ddd/DddLookup";
import { findStateByUf, stateName, stateSubject, states } from "../../lib/ddd";
import { citiesForDdd } from "../../lib/dddCities";

const TOOL_PATH = "/comunicacao/encontrar-ddd-do-celular";
const UPDATED = getUpdatedDate("/ddd");

const breadcrumbLinkSx = {
  color: "text.secondary",
  textDecoration: "none",
  "&:hover": { color: "primary.main" },
};

const MAX_TITLE = 60 - " | oAlexandre Toys".length;

/** Primeiro título que cabe no limite do Google (~60 caracteres com o nome do site). */
const pickTitle = candidates => candidates.find(t => t.length <= MAX_TITLE) ?? candidates.at(-1);

const listCities = list => {
  if (list.length <= 1) return list.join("");
  return `${list.slice(0, -1).join(", ")} e ${list[list.length - 1]}`;
};

const StatePage = ({ uf }) => {
  const state = findStateByUf(uf);
  const tool = getTool(TOOL_PATH);
  const path = `/ddd/${uf.toLowerCase()}`;
  const url = `${SITE_URL}${path}`;
  const plural = state.ddds.length > 1;
  const capitalDdd =
    state.ddds.find(ddd => citiesForDdd(ddd).includes(state.capital)) ?? state.ddds[0];
  const neighbours = states.filter(s => s.region === state.region && s.uf !== state.uf);
  const deState = stateName(state, "de");
  const paraState = stateName(state, "para");
  const subject = stateSubject(state);
  const isDF = state.uf === "DF";

  const title = plural
    ? pickTitle([
        `DDD ${deState}: ${listCities(state.ddds)} e cidades`,
        `DDD ${deState} (${state.uf}): ${listCities(state.ddds)}`,
        `DDD ${deState} (${state.uf}): ${state.ddds.length} códigos e cidades`,
        `DDD ${deState}: ${state.ddds.length} códigos e cidades`,
        `DDD ${deState}: ${state.ddds.length} códigos`,
      ])
    : `DDD ${state.ddds[0]} é de onde? ${state.name} (${state.uf})`;
  const description = plural
    ? `${subject} tem ${state.ddds.length} DDDs: ${listCities(
        state.ddds
      )}. Veja as principais cidades de cada código de área e como ligar ${paraState}.`
    : `O DDD ${state.ddds[0]} é ${deState}, na região ${state.region}, e atende ${
        isDF ? "todo o DF" : "todo o estado"
      }, incluindo ${state.capital}. Veja as cidades e como ligar.`;

  const faq = [
    {
      question: `Qual é o DDD de ${state.capital}?`,
      answer: isDF
        ? `${state.capital}, capital federal, usa o DDD ${capitalDdd}.`
        : `${state.capital}, capital ${deState}, usa o DDD ${capitalDdd}.`,
    },
    {
      question: `Quantos DDDs ${stateName(state)} tem?`,
      answer: plural
        ? `${subject} tem ${state.ddds.length} códigos de área: ${listCities(
            state.ddds
          )}. Cada um cobre uma região do estado.`
        : `${subject} tem um único código de área, o ${state.ddds[0]}, que cobre ${
            isDF ? "todo o DF" : "todo o estado"
          }.`,
    },
    {
      question: `Como ligar ${paraState} de outro estado?`,
      answer: `Disque 0, o código da operadora (por exemplo 15, 21 ou 41), o DDD e o número. Do exterior, use +55, o DDD e o número, sem o zero.`,
    },
    {
      question: "Um número com esse DDD é sempre de alguém que mora no estado?",
      answer:
        "Não necessariamente. Com a portabilidade, a pessoa pode mudar de cidade ou estado e manter o número. O DDD indica onde a linha foi habilitada.",
    },
  ];

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: title,
      description,
      url,
      inLanguage: "pt-BR",
      dateModified: UPDATED,
      isPartOf: { "@type": "WebSite", name: "oAlexandre Toys", url: SITE_URL },
      about: {
        "@type": "State",
        name: state.name,
        alternateName: state.uf,
        containedInPlace: { "@type": "Country", name: "Brasil" },
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: tool.name, item: `${SITE_URL}${TOOL_PATH}` },
        { "@type": "ListItem", position: 3, name: state.name, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faq.map(item => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];

  return (
    <>
      <SEO title={title} description={description} path={path} />
      <JsonLd data={jsonLd} />

      <Box component="article" sx={{ maxWidth: 820, mx: "auto" }}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="Você está em"
          sx={{ mb: 2, fontSize: "0.875rem" }}
        >
          <Box component={Link} href="/" sx={breadcrumbLinkSx}>
            Início
          </Box>
          <Box component={Link} href={TOOL_PATH} sx={breadcrumbLinkSx}>
            DDD
          </Box>
          <Typography color="text.primary" sx={{ fontSize: "inherit" }}>
            {state.name}
          </Typography>
        </Breadcrumbs>

        <Box component="header" sx={{ mb: 3 }}>
          <Typography component="h1" variant="h1" sx={{ mb: 1 }}>
            DDD {deState} ({state.uf})
          </Typography>
          <Typography variant="subtitle1" color="text.secondary">
            {plural
              ? `${subject} tem ${state.ddds.length} códigos de área: ${listCities(
                  state.ddds
                )}. A capital, ${state.capital}, usa o ${capitalDdd}.`
              : isDF
              ? `Todo o Distrito Federal, incluindo Brasília, usa o DDD ${state.ddds[0]}.`
              : `Todo o estado ${deState}, incluindo a capital ${state.capital}, usa o DDD ${state.ddds[0]}.`}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            Região {state.region} · Atualizado em{" "}
            <time dateTime={UPDATED}>{formatDate(UPDATED)}</time>
          </Typography>
        </Box>

        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap sx={{ mb: 3 }}>
          {state.ddds.map(ddd => (
            <Chip
              key={ddd}
              component="a"
              href={`#ddd-${ddd}`}
              clickable
              label={`DDD ${ddd}`}
              color="primary"
              variant="outlined"
            />
          ))}
        </Stack>

        <Box component="section" sx={{ mb: 5 }}>
          {state.ddds.map(ddd => (
            <Box key={ddd} id={`ddd-${ddd}`} sx={{ mb: 3, scrollMarginTop: 80 }}>
              <Typography component="h2" variant="h2" sx={{ mb: 0.5 }}>
                DDD {ddd}
              </Typography>
              <Typography color="text.secondary">
                Principais cidades: {listCities(citiesForDdd(ddd))}.
              </Typography>
            </Box>
          ))}
          <Typography variant="body2" color="text.secondary">
            Cada DDD cobre dezenas de municípios. Para conferir um número específico, use a consulta
            abaixo.
          </Typography>
        </Box>

        <Box component="section" sx={{ mb: 5 }}>
          <Typography component="h2" variant="h2" sx={{ mb: 2 }}>
            Consultar um telefone
          </Typography>
          <DddLookup />
        </Box>

        <Box component="section" sx={{ mb: 5, "& p": { color: "text.secondary", mb: 2 } }}>
          <Typography component="h2" variant="h2" sx={{ mb: 1.5 }}>
            Como ligar {paraState}
          </Typography>
          <Typography>
            De outro estado, disque <strong>0 + operadora + DDD + número</strong>. Por exemplo, pela
            Vivo: 0 15 {capitalDdd} 9XXXX-XXXX. Do exterior, disque{" "}
            <strong>+55 {capitalDdd} 9XXXX-XXXX</strong>, sem o zero inicial.
          </Typography>
          <Typography>
            Celulares têm nove dígitos após o DDD e começam com 9. Fixos têm oito dígitos e começam
            com 2, 3, 4 ou 5.
          </Typography>
        </Box>

        <Box sx={{ mb: 5 }}>
          <Faq items={faq} />
        </Box>

        {neighbours.length > 0 && (
          <Box component="section" sx={{ mb: 5 }}>
            <Typography component="h2" variant="h2" sx={{ mb: 1.5 }}>
              Outros estados da região {state.region}
            </Typography>
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {neighbours.map(s => (
                <Chip
                  key={s.uf}
                  component={Link}
                  href={`/ddd/${s.uf.toLowerCase()}`}
                  clickable
                  label={`${s.name} (${s.ddds.join(", ")})`}
                  variant="outlined"
                />
              ))}
            </Stack>
          </Box>
        )}

        <Box component="section">
          <Typography component="h2" variant="h2" sx={{ mb: 2 }}>
            Ferramentas relacionadas
          </Typography>
          <Grid container spacing={2}>
            {[
              TOOL_PATH,
              "/comunicacao/gerador-de-link-de-whatsapp",
              "/documentos/validador-de-cpf-e-cnpj",
            ].map(p => (
              <Grid item xs={12} sm={4} key={p}>
                <ToolCard tool={getTool(p)} compact />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export async function getStaticPaths() {
  return {
    paths: states.map(state => ({ params: { uf: state.uf.toLowerCase() } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const state = findStateByUf(params.uf);
  if (!state) return { notFound: true };
  return { props: { uf: state.uf } };
}

export default StatePage;
