import ToolPage from "../../../components/tool/ToolPage";
import DocumentValidator from "../../../features/documents/DocumentValidator";

const faq = [
  {
    question: "Um CPF válido aqui significa que ele existe?",
    answer:
      "Não. A ferramenta confere apenas o cálculo dos dígitos verificadores. Ela diz se o número está bem formado, não se foi emitido pela Receita Federal ou se está ativo. Para isso, use a consulta oficial no site da Receita.",
  },
  {
    question: "Por que um CPF com todos os dígitos iguais é inválido?",
    answer:
      "Sequências como 111.111.111-11 passam no cálculo matemático, mas a Receita nunca as emite e a maioria dos sistemas as rejeita. O validador segue essa regra.",
  },
  {
    question: "Preciso digitar os pontos e traços?",
    answer:
      "Não. Você pode colar o número com ou sem pontuação. A ferramenta aplica a máscara automaticamente conforme a quantidade de dígitos: 11 para CPF, 14 para CNPJ.",
  },
  {
    question: "O número digitado é enviado para algum lugar?",
    answer:
      "Não. A validação roda inteiramente no seu navegador. Nenhum documento é armazenado ou transmitido.",
  },
];

const Page = () => (
  <ToolPage
    path="/documentos/validador-de-cpf-e-cnpj"
    title="Validador de CPF e CNPJ Online"
    description="Confira se um CPF ou CNPJ tem dígitos verificadores corretos. Detecta o tipo automaticamente, aceita com ou sem pontuação e roda no navegador."
    lead="Cole um CPF ou CNPJ e veja na hora se os dígitos verificadores estão corretos."
    tool={<DocumentValidator />}
    faq={faq}
    features={[
      "Detecta CPF ou CNPJ automaticamente",
      "Aceita com ou sem pontuação",
      "Validação local",
    ]}
  >
    <h2>O que o validador confere</h2>
    <p>
      CPF e CNPJ terminam em dois dígitos verificadores calculados a partir dos anteriores. Um erro
      de digitação em qualquer posição quase sempre quebra esse cálculo, por isso a verificação é
      eficaz para pegar números digitados errado. Ela não consulta bases governamentais.
    </p>

    <h2>Quando usar</h2>
    <ul>
      <li>Conferir um documento antes de enviar um cadastro ou emitir uma nota.</li>
      <li>Testar se a máscara e a validação do seu formulário estão corretas.</li>
      <li>Checar rapidamente um número recebido por mensagem ou planilha.</li>
    </ul>

    <h2>Para consultar a situação cadastral</h2>
    <p>
      A Receita Federal oferece consulta pública de situação de CPF e de CNPJ em seu site. Lá você
      confirma se o documento existe, se está regular e, no caso do CNPJ, dados como razão social e
      endereço.
    </p>
  </ToolPage>
);

export async function getStaticProps() {
  return { props: {} };
}

export default Page;
