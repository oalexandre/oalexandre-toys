import ToolPage from "../../../components/tool/ToolPage";
import TextCounter from "../../../features/textStats/TextCounter";

const faq = [
  {
    question: "Quantos caracteres tem um tweet?",
    answer:
      "Um post no X (antigo Twitter) aceita até 280 caracteres em contas gratuitas. O X conta todo link como 23 caracteres, seja qual for o tamanho, e alguns emoji e caracteres chineses, japoneses e coreanos como 2. Por isso a contagem aqui é aproximada para o X.",
  },
  {
    question: "Espaço conta como caractere?",
    answer:
      "Sim. Na contagem padrão, espaços, quebras de linha e pontuação contam como caracteres, e é assim que redes sociais e formulários medem os limites. Quando uma regra pede caracteres sem espaços, use o número ao lado, que desconta todos os espaços, tabulações e quebras de linha.",
  },
  {
    question: "Quantos caracteres cabem em um SMS?",
    answer:
      "Até 160 caracteres quando o texto usa só o alfabeto básico do SMS (GSM-7). Letras como ã, õ, á, ê, ç minúsculo ou qualquer emoji mudam a codificação e o limite cai para 70. Textos maiores são divididos em várias mensagens, cada uma com um pouco menos de espaço.",
  },
  {
    question: "Como a ferramenta conta palavras com hífen e apóstrofo?",
    answer:
      "Palavras compostas com hífen, como guarda-chuva, e com apóstrofo, como d'água, contam como uma palavra só, do mesmo jeito que Word e Google Docs. Números como 1.000 ou 3,5 também contam como uma palavra. Emoji e pontuação soltos não contam.",
  },
  {
    question: "Qual o tamanho ideal do título e da meta description para o Google?",
    answer:
      "Como referência, até uns 60 caracteres no título e 160 na descrição. O Google corta pela largura do texto em pixels, não por caracteres, então letras largas como M e W reduzem o espaço. Os números aqui são aproximados.",
  },
];

const Page = () => (
  <ToolPage
    path="/utilitario/contador-de-caracteres"
    title="Contador de Caracteres e Palavras Online"
    description="Conte caracteres, palavras, frases e linhas enquanto digita e veja se o texto cabe no X, Instagram, SMS e Google. Tudo no navegador, sem enviar nada."
    lead="Cole ou digite um texto e veja na hora quantos caracteres, palavras e linhas ele tem, e se cabe nos limites das redes."
    tool={<TextCounter />}
    faq={faq}
    features={[
      "Caracteres com e sem espaços",
      "Palavras, frases, parágrafos e linhas",
      "Tempo de leitura e de fala",
      "Limites de X, Instagram, SMS e Google",
      "Conversão para maiúsculas e minúsculas",
    ]}
  >
    <h2>Como usar</h2>
    <ol>
      <li>Digite ou cole o texto na caixa. As contagens mudam enquanto você escreve.</li>
      <li>Confira os números e a lista de limites logo abaixo.</li>
      <li>
        Se passou do limite, a barra fica vermelha e mostra quantos caracteres passaram. Corte e
        acompanhe até ela voltar ao normal.
      </li>
      <li>Use Copiar texto para levar a versão final para onde precisar.</li>
    </ol>

    <h2>O que cada número significa</h2>
    <ul>
      <li>
        <strong>Caracteres:</strong> tudo o que aparece no texto, incluindo espaços, pontuação e
        quebras de linha. Letras acentuadas e emoji contam como 1, do jeito que você os vê.
      </li>
      <li>
        <strong>Sem espaços:</strong> o mesmo total, descontando espaços, tabulações e quebras de
        linha. Alguns trabalhos escolares e editais pedem essa medida.
      </li>
      <li>
        <strong>Palavras:</strong> sequências de letras ou números. Guarda-chuva e d&apos;água
        contam como uma palavra.
      </li>
      <li>
        <strong>Frases:</strong> trechos terminados em ponto, exclamação, interrogação ou
        reticências. Abreviações como &quot;Sr.&quot; podem ser contadas como fim de frase.
      </li>
      <li>
        <strong>Parágrafos:</strong> blocos separados por uma linha em branco.
      </li>
      <li>
        <strong>Tempo de leitura e de fala:</strong> estimativas com 200 palavras por minuto para
        leitura silenciosa e 130 para falar em voz alta, úteis para roteiros de vídeo e
        apresentações.
      </li>
    </ul>

    <h2>Limites de caracteres mais usados</h2>
    <ul>
      <li>
        <strong>Post no X (Twitter):</strong> 280 caracteres em contas gratuitas. Links contam como
        23.
      </li>
      <li>
        <strong>Legenda do Instagram:</strong> 2.200 caracteres.
      </li>
      <li>
        <strong>Bio do Instagram:</strong> 150 caracteres.
      </li>
      <li>
        <strong>SMS:</strong> 160 caracteres sem acentos especiais; 70 se houver ã, õ, ç, á ou
        emoji.
      </li>
      <li>
        <strong>Título para o Google:</strong> por volta de 60 caracteres antes de ser cortado.
      </li>
      <li>
        <strong>Meta description:</strong> por volta de 160 caracteres.
      </li>
    </ul>
    <p>
      Os limites do Google são aproximados porque o corte depende da largura do texto na tela. As
      redes também mudam regras de tempos em tempos; confira na própria plataforma se o limite for
      decisivo.
    </p>

    <h2>Por que o SMS cai para 70 caracteres</h2>
    <p>
      O SMS usa um alfabeto reduzido, o GSM-7, que tem letras como é, à e Ç maiúsculo, mas não tem
      ã, õ, á, ê, í, ó, ú nem ç minúsculo. Basta um desses caracteres ou um emoji para a mensagem
      inteira ser enviada em outra codificação, que ocupa o dobro do espaço. Em português isso
      acontece quase sempre, então vale conferir antes de disparar SMS para clientes. A ferramenta
      mostra quais caracteres causaram a troca.
    </p>

    <h2>Privacidade</h2>
    <p>
      A contagem acontece no seu navegador. O texto não é enviado para nenhum servidor nem fica
      salvo; ao fechar a página, ele some.
    </p>
  </ToolPage>
);

export async function getStaticProps() {
  return { props: {} };
}

export default Page;
