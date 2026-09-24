import { Box, Typography } from "@mui/material";

import JsonLd from "../components/common/JsonLd";
import SEO from "../components/common/SEO";
import { formatDate, getUpdatedDate, SITE_URL } from "../constants/tools";

const Privacidade = () => (
  <>
    <SEO
      title="Privacidade"
      description="O que o oAlexandre Toys faz e não faz com seus dados: processamento local, Google Analytics e as duas consultas externas de IP e câmbio."
      path="/privacidade"
    />
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Privacidade",
        url: `${SITE_URL}/privacidade`,
        dateModified: getUpdatedDate("/privacidade"),
      }}
    />

    <Box
      component="article"
      sx={{
        maxWidth: 720,
        mx: "auto",
        "& h2": { mt: 4, mb: 1 },
        "& p, & li": { color: "text.secondary" },
        "& p": { mb: 2 },
        "& ul": { pl: 3, mb: 2 },
      }}
    >
      <Typography component="h1" variant="h1" sx={{ mb: 2 }}>
        Privacidade
      </Typography>
      <Typography>
        Versão curta: o site não guarda nada do que você digita. Os detalhes estão abaixo.
      </Typography>

      <Typography component="h2" variant="h2">
        O que é processado no seu navegador
      </Typography>
      <Typography>
        Senhas, chaves, CPFs, CNPJs, chaves Pix, valores de contas e parcelas, preços de
        combustível, textos, números de telefone, mensagens de WhatsApp, QR codes e sorteios são
        gerados, calculados ou validados pelo próprio navegador. Esses dados não são enviados para
        este site nem para terceiros e desaparecem quando você fecha a página.
      </Typography>

      <Typography component="h2" variant="h2">
        O que sai do seu navegador
      </Typography>
      <ul>
        <li>
          <strong>Qual é o meu IP</strong> consulta os serviços públicos ipify.org e ipapi.co para
          descobrir o IP e a localização aproximada. Eles recebem o seu endereço IP, que é
          justamente o que a página mostra.
        </li>
        <li>
          <strong>Conversor de moedas</strong> busca as cotações em exchangerate-api.com. O valor
          que você digita não é enviado; só a tabela de cotações é baixada.
        </li>
        <li>
          <strong>Consulta de CEP</strong> envia o CEP ou o endereço digitado ao ViaCEP
          (viacep.com.br), serviço público e gratuito, para fazer a busca. Nada fica guardado neste
          site.
        </li>
      </ul>

      <Typography component="h2" variant="h2">
        Estatísticas de acesso
      </Typography>
      <Typography>
        O site usa Google Analytics para saber quantas pessoas visitam cada ferramenta e de onde
        vêm. O Google recebe dados de navegação como página visitada, tipo de dispositivo e região
        aproximada, e pode usar cookies para isso. Bloqueadores de anúncio e o modo de navegação
        privada impedem essa coleta sem afetar as ferramentas.
      </Typography>

      <Typography component="h2" variant="h2">
        Cadastro, cookies próprios e contato
      </Typography>
      <Typography>
        Não há cadastro, login ou cookies criados por este site. Para exercer qualquer direito
        previsto na LGPD ou tirar dúvidas, escreva para eusou@oalexandre.com.br.
      </Typography>

      <Typography variant="body2">
        Atualizado em{" "}
        <time dateTime={getUpdatedDate("/privacidade")}>
          {formatDate(getUpdatedDate("/privacidade"))}
        </time>
        .
      </Typography>
    </Box>
  </>
);

export async function getStaticProps() {
  return { props: {} };
}

export default Privacidade;
