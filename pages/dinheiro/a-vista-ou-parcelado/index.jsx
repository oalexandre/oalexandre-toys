import ToolPage from "../../../components/tool/ToolPage";
import InstallmentComparator from "../../../features/installments/InstallmentComparator";

const faq = [
  {
    question: "Parcelado sem juros tem juros?",
    answer:
      "Muitas vezes, sim. Se a loja dá desconto para quem paga à vista, o preço parcelado já inclui juros. A diferença entre os dois preços revela a taxa, e a calculadora mostra quanto ela é ao mês e ao ano.",
  },
  {
    question: "Qual desconto à vista compensa?",
    answer:
      "O que for maior que o rendimento do seu dinheiro durante as parcelas. Se você deixar o valor à vista aplicado e pagar as parcelas com ele, o rendimento acumulado é o que você ganha parcelando. Se o desconto à vista for maior que isso, pague à vista.",
  },
  {
    question: "Se não há desconto à vista, é melhor parcelar?",
    answer:
      "Em termos de conta, sim: você paga o mesmo valor e pode deixar o dinheiro rendendo até cada parcela vencer. Na prática, só vale se as parcelas cabem no orçamento e você paga a fatura inteira todo mês.",
  },
  {
    question: "Que rendimento devo colocar?",
    answer:
      "O rendimento líquido da aplicação onde o dinheiro ficaria, como poupança, conta remunerada ou CDB de liquidez diária. Pode informar ao mês ou ao ano, como aparece no app do banco. Se o dinheiro ficaria parado na conta, use 0.",
  },
  {
    question: "Esse resultado é uma recomendação financeira?",
    answer:
      "Não. É uma calculadora que compara as duas formas de pagamento com os números que você informa. A decisão também depende do seu orçamento, da sua reserva de emergência e do limite do cartão.",
  },
];

const Page = () => (
  <ToolPage
    path="/dinheiro/a-vista-ou-parcelado"
    title="À Vista ou Parcelado? Calculadora de Juros"
    description="Compare pagar à vista com desconto ou parcelar. Veja os juros escondidos no parcelado sem juros e quanto economiza, considerando o rendimento do dinheiro."
    lead="Compare o desconto à vista com o que o seu dinheiro renderia enquanto você paga as parcelas."
    tool={<InstallmentComparator />}
    faq={faq}
    features={[
      "Juros embutidos no parcelado, ao mês e ao ano",
      "Preço à vista em reais ou desconto em porcentagem",
      "Primeira parcela no ato ou em 30 dias",
      "Rendimento do dinheiro aplicado, ao mês ou ao ano",
      "Comparação lado a lado com custo final de cada opção",
      "Simulação mês a mês do dinheiro aplicado",
    ]}
  >
    <h2>Como usar</h2>
    <ol>
      <li>Digite o valor de cada parcela e o número de parcelas oferecidos pela loja.</li>
      <li>
        Informe o preço à vista em reais, ou troque para <strong>Desconto em %</strong> se a loja
        anunciou o desconto em porcentagem.
      </li>
      <li>
        Ligue <strong>Primeira parcela paga na compra</strong> se a primeira parcela for cobrada no
        ato. No cartão de crédito, a primeira costuma vir na próxima fatura, então deixe desligado.
      </li>
      <li>
        Em <strong>Seu dinheiro aplicado</strong>, informe quanto a sua aplicação rende, ao mês ou
        ao ano. O valor inicial de 0,8% ao mês é só um ponto de partida.
      </li>
    </ol>

    <h2>O juro escondido no parcelado sem juros</h2>
    <p>
      Quando a loja vende em 10 vezes sem juros, mas dá desconto para quem paga à vista, o preço
      parcelado não é o preço real do produto. O preço real é o à vista, e a diferença é o custo de
      pagar depois. Por exemplo: 10 parcelas de R$ 100 ou R$ 900 à vista. Quem parcela paga R$ 100 a
      mais por usar R$ 900 ao longo de dez meses, o que equivale a cerca de 1,96% ao mês.
    </p>
    <p>
      Se o total das parcelas é igual ao preço à vista, o parcelado de fato não tem juros. Se for
      menor, a conta dá juros negativos: é raro e costuma indicar erro de digitação ou uma promoção
      específica do parcelado.
    </p>

    <h2>Como ler o resultado</h2>
    <p>
      A comparação parte de uma situação simples: você tem o dinheiro do pagamento à vista. Pode
      usá-lo agora e ganhar o desconto, ou deixá-lo aplicado e pagar as parcelas com ele, mês a mês.
      Parcelar vale a pena se o rendimento acumulado nesse período for maior que o desconto.
    </p>
    <ul>
      <li>
        <strong>Desconto contra rendimento</strong>: as duas barras mostram, em reais, o que você
        ganha em cada caminho. A maior vence.
      </li>
      <li>
        <strong>Custo final</strong>: no à vista, é o preço pago. No parcelado, é o total das
        parcelas menos o que o dinheiro rendeu. O menor custo final é a melhor opção.
      </li>
      <li>
        <strong>Juros embutidos</strong>: a taxa que a loja cobra, na prática, de quem parcela. Ela
        é também o ponto de virada: se o seu dinheiro render mais que isso ao mês, parcelar
        compensa.
      </li>
      <li>
        <strong>Mês a mês</strong>: mostra o saldo aplicado depois de cada parcela. Se ele termina
        negativo, faltou dinheiro, e pagar à vista teria sido melhor.
      </li>
      <li>
        <strong>Tanto faz</strong> aparece quando a diferença fica em até R$ 1 ou 0,5% do preço à
        vista. Nesse caso, decida pelo que for mais confortável.
      </li>
    </ul>
    <p>
      A regra geral é simples: se os juros embutidos são maiores que o rendimento do seu dinheiro, à
      vista tende a compensar; se são menores, parcelar e deixar o dinheiro aplicado tende a
      compensar. O rendimento que você informa pesa bastante, então use um valor realista e líquido,
      já descontado o imposto quando houver.
    </p>

    <h2>Antes de decidir</h2>
    <ul>
      <li>
        <strong>Parcelar só compensa se o dinheiro existe.</strong> A conta supõe que você já tem o
        valor à vista e o deixa rendendo. Se não tem, a pergunta é outra: se a parcela cabe no
        orçamento.
      </li>
      <li>
        <strong>Reserva de emergência.</strong> Pagar à vista não deve zerar o dinheiro que você
        guarda para imprevistos.
      </li>
      <li>
        <strong>Limite do cartão.</strong> Uma compra parcelada ocupa o limite pelo valor total e
        libera aos poucos, conforme as parcelas são pagas.
      </li>
      <li>
        <strong>Rotativo do cartão.</strong> Se não conseguir pagar a fatura inteira, o saldo entra
        no crédito rotativo, uma das formas de crédito mais caras do país. Qualquer vantagem do
        parcelamento desaparece rápido.
      </li>
    </ul>
    <p>
      Esta ferramenta é uma calculadora para comparar opções com os números que você informa, não
      uma recomendação financeira. Os cálculos são feitos no seu navegador e nada é enviado.
    </p>
  </ToolPage>
);

export async function getStaticProps() {
  return { props: {} };
}

export default Page;
