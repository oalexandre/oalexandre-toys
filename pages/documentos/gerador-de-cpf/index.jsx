import ToolPage from "../../../components/tool/ToolPage";
import CpfRegionTable from "../../../features/documents/CpfRegionTable";
import DocumentGenerator from "../../../features/documents/DocumentGenerator";

const faq = [
  {
    question: "O CPF gerado é de uma pessoa real?",
    answer:
      "Não há como saber, e não é o objetivo. O gerador sorteia nove dígitos e calcula os dois verificadores. O número passa em qualquer validação de formato, mas não é consultado na Receita Federal e não está vinculado a ninguém intencionalmente.",
  },
  {
    question: "Para que serve um gerador de CPF?",
    answer:
      "Para testar software. Formulários, integrações e bancos de dados de teste precisam de CPFs que passem na validação sem usar dados de pessoas reais, o que violaria a LGPD.",
  },
  {
    question: "Posso usar o CPF gerado para me cadastrar em algum site?",
    answer:
      "Não. Usar um CPF que não é seu em um cadastro real é fraude e pode configurar crime de falsidade ideológica. A ferramenta existe apenas para ambientes de desenvolvimento e teste.",
  },
  {
    question: "O que significa o nono dígito do CPF?",
    answer:
      "Ele indica a região fiscal onde o CPF foi emitido. O 8 é São Paulo, o 1 é Distrito Federal, Goiás, Mato Grosso, Mato Grosso do Sul e Tocantins, e assim por diante. Ao escolher um estado no gerador, o nono dígito é fixado conforme essa tabela.",
  },
  {
    question: "Como gerar vários CPFs de uma vez?",
    answer:
      "Escolha a quantidade (10, 50, 100 ou 500). Os números aparecem um por linha, sem repetição, e podem ser copiados ou baixados em CSV para importar em planilhas e bancos de teste.",
  },
  {
    question: "Como o dígito verificador do CPF é calculado?",
    answer:
      "Os nove primeiros dígitos são multiplicados por pesos de 10 a 2 e somados. O resto da divisão por 11 define o primeiro dígito verificador. O segundo repete o cálculo incluindo o primeiro, com pesos de 11 a 2.",
  },
];

const Page = () => (
  <ToolPage
    path="/documentos/gerador-de-cpf"
    title="Gerador de CPF Válido para Testes"
    description="Gere CPFs válidos para testes, um ou em lote de até 500 com download em CSV. Escolha o estado de emissão pelo nono dígito. Gerado no navegador, apenas para desenvolvimento."
    lead="Números de CPF com dígitos verificadores corretos, um por vez ou em lote, com opção de estado de emissão. Não são documentos reais."
    tool={<DocumentGenerator type="cpf" />}
    faq={faq}
    features={[
      "Dígitos verificadores válidos",
      "Com ou sem pontuação",
      "Geração local, sem cadastro",
    ]}
  >
    <h2>Como funciona</h2>
    <p>
      O CPF tem onze dígitos: nove formam a base e os dois últimos são verificadores, calculados a
      partir da base pelo algoritmo módulo 11. O gerador sorteia a base, calcula os verificadores e
      descarta sequências repetidas como 111.111.111-11, que a Receita rejeita mesmo passando no
      cálculo.
    </p>

    <h2>Nono dígito: a região fiscal</h2>
    <p>
      O nono dígito do CPF não é aleatório: ele identifica a região fiscal da Receita Federal onde o
      documento foi emitido. Por isso o gerador permite escolher o estado, útil quando o sistema em
      teste valida a coerência entre CPF e endereço.
    </p>
    <CpfRegionTable />

    <h2>Geração em lote</h2>
    <p>
      Para popular um banco de testes, escolha a quantidade e baixe o CSV. Os números vêm sem
      repetição e, se você escolher um estado, todos terão o mesmo nono dígito.
    </p>

    <h2>Uso responsável</h2>
    <p>
      Os números servem para preencher formulários em ambiente de teste, popular bancos de dados de
      desenvolvimento e validar máscaras de entrada. Não use em cadastros reais nem para tentar
      acessar serviços de terceiros.
    </p>

    <h2>Validando no seu código</h2>
    <p>
      Para conferir um CPF em JavaScript, calcule os dois dígitos e compare com os informados. Uma
      implementação de referência em poucas linhas:
    </p>
    <pre>
      <code>{`function cpfValido(cpf) {
  const d = cpf.replace(/\\D/g, "");
  if (d.length !== 11 || /^(\\d)\\1+$/.test(d)) return false;
  const calc = n => {
    let s = 0;
    for (let i = 0; i < n; i++) s += d[i] * (n + 1 - i);
    const r = (s * 10) % 11;
    return r === 10 ? 0 : r;
  };
  return calc(9) === +d[9] && calc(10) === +d[10];
}`}</code>
    </pre>
  </ToolPage>
);

export async function getStaticProps() {
  return { props: {} };
}

export default Page;
