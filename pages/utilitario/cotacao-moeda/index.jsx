import ToolPage from "../../../components/tool/ToolPage";
import CurrencyConverter from "../../../features/currency/CurrencyConverter";

const faq = [
  {
    question: "De onde vem a cotação?",
    answer:
      "Da ExchangeRate-API, que publica uma média de mercado atualizada uma vez por dia. É uma cotação de referência, parecida com a que aparece em buscadores, não a taxa de uma instituição específica.",
  },
  {
    question: "Por que o valor no banco ou na casa de câmbio é diferente?",
    answer:
      "Instituições aplicam spread sobre a cotação de mercado e, no Brasil, ainda incide IOF sobre a compra de moeda, o uso do cartão no exterior e as transferências internacionais. O valor final costuma ficar alguns pontos percentuais acima do mostrado aqui.",
  },
  {
    question: "Qual a diferença entre dólar comercial e turismo?",
    answer:
      "O comercial é usado em operações entre empresas, bancos e no comércio exterior. O turismo é o preço da moeda em espécie para pessoas físicas e inclui custos de logística e margem da casa de câmbio, por isso é mais caro.",
  },
  {
    question: "Posso usar esse valor em nota fiscal ou contrato?",
    answer:
      "Não. Para fins oficiais use a PTAX, cotação divulgada pelo Banco Central, ou a taxa contratada com a instituição financeira. Este conversor serve para estimativas e planejamento.",
  },
];

const Page = () => (
  <ToolPage
    path="/utilitario/cotacao-moeda"
    title="Conversor de Moedas: Real, Dólar, Euro e mais"
    description="Converta valores entre real, dólar, euro e mais de 150 moedas com cotação de referência do dia. Rápido, sem cadastro. Ideal para estimar compras e viagens."
    lead="Converta valores entre real, dólar, euro e mais de 150 moedas com a cotação de referência do dia."
    tool={<CurrencyConverter />}
    faq={faq}
    features={[
      "Mais de 150 moedas",
      "Cotação de referência diária",
      "Inverter moedas com um clique",
    ]}
  >
    <h2>Como usar</h2>
    <ol>
      <li>Digite o valor. Você pode usar vírgula ou ponto como separador decimal.</li>
      <li>Escolha a moeda de origem e a de destino. As mais usadas aparecem primeiro na lista.</li>
      <li>O resultado atualiza na hora. Use a seta para inverter a conversão.</li>
    </ol>

    <h2>Para que serve</h2>
    <ul>
      <li>Estimar quanto vai custar uma compra em site estrangeiro.</li>
      <li>Planejar o orçamento de uma viagem.</li>
      <li>Comparar preços em moedas diferentes ao decidir uma compra.</li>
      <li>Ter uma referência antes de negociar com o banco ou a casa de câmbio.</li>
    </ul>

    <h2>Onde encontrar cotações oficiais</h2>
    <p>
      O Banco Central publica diariamente a PTAX, taxa de referência usada em contratos e na
      contabilidade. Para operações reais, a cotação que vale é a informada pela instituição no
      momento da compra, já com spread e impostos.
    </p>
  </ToolPage>
);

export async function getStaticProps() {
  return { props: {} };
}

export default Page;
