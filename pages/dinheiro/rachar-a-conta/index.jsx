import ToolPage from "../../../components/tool/ToolPage";
import BillSplitter from "../../../features/billSplit/BillSplitter";

const faq = [
  {
    question: "Sou obrigado a pagar os 10% do garçom?",
    answer:
      "Não. A taxa de serviço é uma gorjeta sugerida pelo estabelecimento, não um imposto. O cliente pode pedir para retirá-la da conta. Por isso a calculadora deixa ligar, desligar ou mudar o percentual.",
  },
  {
    question: "Os 10% incidem sobre o couvert artístico?",
    answer:
      "Depende da casa: algumas cobram o serviço só sobre o consumo, outras sobre o total. Aqui o serviço é calculado sobre a conta e o couvert é somado por pessoa, à parte. Se a comanda do seu bar fizer diferente, ajuste o percentual ou some o couvert ao total.",
  },
  {
    question: "Como dividir a conta quando cada um consumiu uma coisa?",
    answer:
      "Use o modo Cada um paga o que consumiu. Informe quanto cada pessoa pediu e, à parte, o valor dos itens que foram para a mesa toda, como porções. Os itens são divididos igualmente e o serviço é proporcional ao que cada um deve.",
  },
  {
    question: "Por que uma pessoa paga 1 centavo a mais?",
    answer:
      "Nem todo valor se divide exatamente em centavos. R$ 100 para três pessoas dá R$ 33,333... Para a soma fechar com o total, uma pessoa paga R$ 33,34 e as outras duas R$ 33,33. A calculadora mostra quantas pessoas estão nessa situação.",
  },
  {
    question: "Os valores que eu digito ficam salvos em algum lugar?",
    answer:
      "Não. A conta é feita no seu navegador e nada é enviado ao site. O resumo só vai para o WhatsApp se você tocar em Enviar no WhatsApp.",
  },
];

const Page = () => (
  <ToolPage
    path="/dinheiro/rachar-a-conta"
    title="Rachar a Conta: Calculadora com 10%"
    description="Divida a conta do bar ou restaurante entre amigos, com ou sem os 10% do garçom e couvert. Divisão igual ou por consumo, com resumo para o WhatsApp."
    lead="Divida a conta do bar ou restaurante em partes iguais ou pelo que cada um consumiu, com ou sem os 10% do garçom."
    tool={<BillSplitter />}
    faq={faq}
    features={[
      "Divisão igual ou por consumo",
      "Taxa de serviço opcional e ajustável",
      "Couvert artístico por pessoa",
      "Centavos que fecham exatamente com o total",
      "Resumo para copiar ou enviar no WhatsApp",
    ]}
  >
    <h2>Como usar</h2>
    <ol>
      <li>
        Escolha o modo: <strong>Dividir igualmente</strong> ou{" "}
        <strong>Cada um paga o que consumiu</strong>.
      </li>
      <li>
        Deixe o serviço ligado se a mesa vai pagar os 10% do garçom, ou desligue. Dá para mudar o
        percentual, por exemplo para 12% ou 8%.
      </li>
      <li>
        Na divisão igual, digite o total da conta sem o serviço, o número de pessoas e, se houver, o
        couvert artístico por pessoa.
      </li>
      <li>
        Na divisão por consumo, informe quanto cada pessoa pediu e, no campo de itens divididos, o
        que foi para a mesa toda.
      </li>
      <li>
        O resultado aparece na hora. Toque em <strong>Copiar resumo</strong> ou{" "}
        <strong>Enviar no WhatsApp</strong> para mandar a divisão no grupo.
      </li>
    </ol>

    <h2>Os 10% do garçom são opcionais</h2>
    <p>
      A taxa de serviço que aparece na conta é uma sugestão de gorjeta, não um imposto nem uma
      cobrança obrigatória. Você pode pedir para retirá-la ou pagar outro valor. Em muitos lugares
      ela é repassada à equipe, então vale considerar o atendimento antes de tirar.
    </p>
    <p>
      Confira na comanda se o serviço já está incluído no total. Se já estiver, digite o valor sem
      ele ou desligue a opção aqui, para não cobrar duas vezes.
    </p>

    <h2>Couvert artístico</h2>
    <p>
      O couvert é cobrado por pessoa quando há música ao vivo ou outra apresentação. O
      estabelecimento deve informar o valor antes, na entrada ou no cardápio. Na calculadora ele
      entra por pessoa e fica fora do cálculo do serviço.
    </p>

    <h2>Dicas para dividir de forma justa</h2>
    <ul>
      <li>
        <strong>Consumo muito diferente?</strong> Quem só tomou água não precisa pagar a rodada de
        chope dos outros. Use a divisão por consumo.
      </li>
      <li>
        <strong>Anote os pedidos à parte.</strong> Separar no caminho o que é de cada um e o que foi
        para a mesa evita discussão na hora de fechar.
      </li>
      <li>
        <strong>Serviço proporcional.</strong> No modo por consumo, quem gastou mais paga uma parte
        maior dos 10%, como seria em uma conta individual.
      </li>
      <li>
        <strong>Uma pessoa paga, as outras transferem.</strong> Mande o resumo no grupo para cada um
        fazer o Pix do valor certo.
      </li>
    </ul>

    <h2>Como os centavos fecham</h2>
    <p>
      Os cálculos são feitos em centavos inteiros. Quando a divisão não é exata, os centavos que
      sobram são distribuídos um a um, e a soma de todas as partes é sempre igual ao total da conta.
      Na divisão igual, a diferença entre as pessoas nunca passa de 1 centavo.
    </p>
  </ToolPage>
);

export async function getStaticProps() {
  return { props: {} };
}

export default Page;
