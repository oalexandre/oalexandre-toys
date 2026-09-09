import ToolPage from "../../../components/tool/ToolPage";
import DocumentGenerator from "../../../features/documents/DocumentGenerator";

const faq = [
  {
    question: "O CNPJ gerado pertence a alguma empresa?",
    answer:
      "Não intencionalmente. Os oito primeiros dígitos são sorteados e os verificadores calculados. O número passa na validação de formato, mas não é consultado na Receita Federal e não está ligado a nenhuma empresa de propósito.",
  },
  {
    question: "Por que o CNPJ gerado termina em 0001?",
    answer:
      "Os dígitos 9 a 12 identificam a filial. 0001 é a matriz, que é o caso mais comum em cadastros. O gerador segue esse padrão para os números parecerem realistas em testes.",
  },
  {
    question: "Posso usar o CNPJ gerado em um cadastro real?",
    answer:
      "Não. Informar um CNPJ que não é da sua empresa em um cadastro real é fraude. A ferramenta serve apenas para ambientes de desenvolvimento e teste.",
  },
  {
    question: "O CNPJ alfanumérico muda alguma coisa?",
    answer:
      "A Receita Federal anunciou o CNPJ alfanumérico, com letras nos doze primeiros caracteres, previsto para começar a ser emitido em julho de 2026. Os dígitos verificadores continuam numéricos. Este gerador produz apenas o formato numérico, que continua válido e é o que a maioria dos sistemas aceita.",
  },
];

const Page = () => (
  <ToolPage
    path="/documentos/gerador-de-cnpj"
    title="Gerador de CNPJ Válido para Testes"
    description="Gere CNPJs com dígitos verificadores corretos para testar formulários e sistemas. Formato de matriz 0001, com ou sem pontuação. Apenas para desenvolvimento."
    lead="Números de CNPJ com dígitos verificadores corretos para usar em testes de software. Não são empresas reais."
    tool={<DocumentGenerator type="cnpj" />}
    faq={faq}
    features={[
      "Dígitos verificadores válidos",
      "Formato de matriz 0001",
      "Com ou sem pontuação",
      "Geração local",
    ]}
  >
    <h2>Como funciona</h2>
    <p>
      O CNPJ tem catorze dígitos: oito de base, quatro que identificam a filial e dois
      verificadores. O gerador sorteia a base, usa 0001 como filial e calcula os verificadores pelo
      algoritmo módulo 11 com os pesos oficiais.
    </p>

    <h2>Uso responsável</h2>
    <p>
      Use os números para preencher cadastros de empresa em ambiente de teste, popular bancos de
      desenvolvimento e validar máscaras de entrada. Não use em cadastros reais nem em emissão de
      documentos fiscais.
    </p>

    <h2>Estrutura do CNPJ</h2>
    <ul>
      <li>
        <strong>12.345.678</strong>: número base, identifica a empresa.
      </li>
      <li>
        <strong>/0001</strong>: ordem do estabelecimento. 0001 é a matriz, 0002 em diante são
        filiais.
      </li>
      <li>
        <strong>-95</strong>: dígitos verificadores calculados sobre os doze anteriores.
      </li>
    </ul>
  </ToolPage>
);

export async function getStaticProps() {
  return { props: {} };
}

export default Page;
