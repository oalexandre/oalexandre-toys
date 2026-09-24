import ToolPage from "../../../components/tool/ToolPage";
import CepLookup from "../../../features/cep/CepLookup";

const faq = [
  {
    question: "Como descobrir o CEP da minha rua?",
    answer:
      "Na aba Descobrir o CEP pelo endereço, escolha o estado, digite a cidade e parte do nome da rua, sem Rua ou Avenida. A lista mostra os CEPs encontrados com bairro e trecho, porque ruas longas costumam ter mais de um CEP.",
  },
  {
    question: "Por que o CEP da minha cidade não mostra rua nem bairro?",
    answer:
      "Muitas cidades pequenas têm um CEP geral, também chamado de CEP único: todos os endereços do município usam o mesmo número. Nesse caso o CEP só identifica a cidade, e a entrega depende da rua e do número escritos no endereço.",
  },
  {
    question: "Por que meu CEP aparece como não encontrado?",
    answer:
      "Confira se os 8 dígitos estão certos. CEPs de ruas e loteamentos novos podem demorar a chegar à base do ViaCEP. Se o CEP consta em uma conta ou documento recente, confirme na Busca CEP dos Correios, que é a fonte oficial.",
  },
  {
    question: "Uma rua pode ter mais de um CEP?",
    answer:
      "Sim. Em cidades grandes, ruas longas são divididas em trechos, cada um com seu CEP, geralmente separados por lado par e ímpar ou por faixa de numeração. Grandes edifícios e empresas também podem ter CEP próprio.",
  },
  {
    question: "O que significam os números do CEP?",
    answer:
      "O CEP tem 8 dígitos. Os 5 primeiros indicam região, sub-região, setor, subsetor e divisor de subsetor, do mais amplo para o mais específico. Os 3 últimos, o sufixo, identificam logradouros, CEPs especiais e unidades dos Correios.",
  },
];

const Page = () => (
  <ToolPage
    path="/utilitario/consulta-de-cep"
    title="Consulta de CEP: Endereço e CEP da Rua"
    description="Digite um CEP para ver rua, bairro, cidade e DDD, ou descubra o CEP pelo nome da rua. Consulta gratuita no ViaCEP, com endereço pronto para copiar."
    lead="Veja o endereço de um CEP ou descubra o CEP de uma rua a partir do estado, da cidade e do nome."
    tool={<CepLookup />}
    faq={faq}
    features={[
      "Endereço completo a partir do CEP",
      "CEP a partir de estado, cidade e rua",
      "Endereço em uma linha para copiar",
      "DDD e código IBGE do município",
    ]}
  >
    <h2>Como usar</h2>
    <ol>
      <li>
        <strong>Para ver o endereço de um CEP</strong>, digite os 8 números. A busca começa sozinha
        e mostra logradouro, bairro, cidade e estado.
      </li>
      <li>
        Clique em Copiar endereço para levar tudo em uma linha, no formato usado em cadastros e
        etiquetas.
      </li>
      <li>
        <strong>Para descobrir o CEP de uma rua</strong>, troque para a busca pelo endereço, escolha
        o estado, digite a cidade e parte do nome da rua. Copie o CEP certo na lista.
      </li>
    </ol>

    <h2>Como o CEP é formado</h2>
    <p>
      O Código de Endereçamento Postal tem 8 dígitos no formato 00000-000. Os 5 primeiros formam o
      radical e vão do geral para o específico: região, sub-região, setor, subsetor e divisor de
      subsetor. Os 3 últimos são o sufixo, que distingue logradouros, CEPs especiais de grandes
      clientes e caixas postais.
    </p>
    <p>O primeiro dígito já diz a região do país:</p>
    <ul>
      <li>
        <strong>0</strong>: Grande São Paulo
      </li>
      <li>
        <strong>1</strong>: interior e litoral de São Paulo
      </li>
      <li>
        <strong>2</strong>: Rio de Janeiro e Espírito Santo
      </li>
      <li>
        <strong>3</strong>: Minas Gerais
      </li>
      <li>
        <strong>4</strong>: Bahia e Sergipe
      </li>
      <li>
        <strong>5</strong>: Pernambuco, Alagoas, Paraíba e Rio Grande do Norte
      </li>
      <li>
        <strong>6</strong>: Ceará, Piauí, Maranhão, Pará, Amazonas, Acre, Amapá e Roraima
      </li>
      <li>
        <strong>7</strong>: Distrito Federal, Goiás, Tocantins, Mato Grosso, Mato Grosso do Sul e
        Rondônia
      </li>
      <li>
        <strong>8</strong>: Paraná e Santa Catarina
      </li>
      <li>
        <strong>9</strong>: Rio Grande do Sul
      </li>
    </ul>

    <h2>CEP geral ou único da cidade</h2>
    <p>
      Em municípios menores, os Correios não dividem a cidade por rua: existe um só CEP para todo o
      município, em geral terminado em 000. Quando você consulta um desses, o resultado traz apenas
      cidade e estado. Não é erro. Basta usar esse CEP junto com rua, número e bairro escritos por
      extenso.
    </p>

    <h2>De onde vêm os dados</h2>
    <p>
      A consulta é feita no ViaCEP, um serviço gratuito que usa a base de endereços dos Correios.
      Ruas abertas ou renomeadas há pouco tempo podem demorar a aparecer. Para confirmar um caso
      duvidoso, a fonte oficial é a <strong>Busca CEP</strong> no site dos Correios.
    </p>
    <p>
      Ao contrário das outras ferramentas do site, que funcionam só no navegador, esta precisa
      enviar o CEP ou o endereço digitado ao ViaCEP para obter a resposta. Nada é guardado aqui.
    </p>
  </ToolPage>
);

export async function getStaticProps() {
  return { props: {} };
}

export default Page;
