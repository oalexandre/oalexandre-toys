import ToolPage from "../../../components/tool/ToolPage";
import FuelComparator from "../../../features/fuel/FuelComparator";

const faq = [
  {
    question: "Como saber se compensa abastecer com álcool ou gasolina?",
    answer:
      "Divida o preço do etanol pelo preço da gasolina. Se o resultado for 0,70 ou menos, o etanol compensa; acima disso, a gasolina. Com etanol a R$ 4,00 e gasolina a R$ 6,00 (valores de exemplo), a proporção é 0,67 e o etanol compensa.",
  },
  {
    question: "De onde vem a regra dos 70%?",
    answer:
      "O etanol tem menos energia por litro que a gasolina vendida nos postos, então o carro flex roda em média cerca de 30% menos com ele. Para o custo por quilômetro empatar, o litro do etanol precisa custar no máximo uns 70% do litro da gasolina. É uma média, não um valor exato para todo carro.",
  },
  {
    question: "A regra dos 70% vale para todos os carros?",
    answer:
      "Não. A proporção real depende do motor e do jeito de dirigir. Em muitos carros flex modernos ela fica entre 70% e 75%, o que favorece um pouco o etanol. Para saber a do seu carro, divida o consumo com etanol pelo consumo com gasolina, em km/l.",
  },
  {
    question: "Onde encontro o consumo do meu carro?",
    answer:
      "Na etiqueta do Programa Brasileiro de Etiquetagem Veicular (PBEV), do Inmetro, que traz o consumo na cidade e na estrada com cada combustível; no manual do proprietário; ou medindo: encha o tanque, zere o hodômetro parcial, rode e divida os quilômetros pelos litros do abastecimento seguinte.",
  },
  {
    question: "Posso misturar etanol e gasolina no tanque?",
    answer:
      "Em carro flex, sim. O motor identifica a mistura e se ajusta. O consumo fica entre o de um combustível e o do outro, proporcional à quantidade de cada um no tanque.",
  },
];

const Page = () => (
  <ToolPage
    path="/dinheiro/alcool-ou-gasolina"
    title="Álcool ou Gasolina? Calcule Qual Compensa"
    description="Digite o preço do etanol e da gasolina e veja na hora qual compensa no seu carro flex, pela regra dos 70% ou pelo consumo real do veículo em km/l."
    lead="Informe o preço do litro dos dois combustíveis e veja qual sai mais barato por quilômetro rodado."
    tool={<FuelComparator />}
    faq={faq}
    features={[
      "Regra dos 70% com resultado imediato",
      "Cálculo pelo consumo real do carro em km/l",
      "Preço máximo em que o etanol compensa",
      "Economia por tanque e a cada 100 km",
    ]}
  >
    <h2>Como usar</h2>
    <ol>
      <li>Digite o preço do litro do etanol e da gasolina, como aparece na bomba (ex.: 5,899).</li>
      <li>
        O resultado aparece na hora: qual combustível compensa e até que preço o etanol vale a pena.
      </li>
      <li>
        Se souber o consumo do seu carro, abra <strong>Usar o consumo do meu carro</strong> e
        informe os km/l com cada combustível. A conta passa a usar o rendimento real em vez dos 70%.
      </li>
    </ol>

    <h2>Por que 70%</h2>
    <p>
      O etanol tem menos energia por litro que a gasolina vendida no Brasil, que já leva etanol
      anidro na mistura. Na prática, um carro flex roda em média cerca de 30% menos com um litro de
      etanol. Por isso, o etanol só sai mais barato por quilômetro quando o litro custa até mais ou
      menos 70% do litro da gasolina.
    </p>
    <p>
      É uma regra prática, não uma lei. A diferença de rendimento varia com o motor, o trânsito, o
      uso do ar-condicionado e o jeito de dirigir. Em muitos motores flex recentes, a proporção real
      fica entre 70% e 75%. Quando o resultado estiver perto do limite, a diferença no bolso é
      pequena para qualquer lado.
    </p>

    <h2>Como descobrir o consumo do seu carro</h2>
    <ul>
      <li>
        <strong>Etiqueta do Inmetro.</strong> O Programa Brasileiro de Etiquetagem Veicular (PBEV)
        publica o consumo de cada modelo na cidade e na estrada, com etanol e com gasolina. A
        etiqueta vem colada no vidro dos carros novos, e a tabela completa fica no site do Inmetro.
      </li>
      <li>
        <strong>Manual do proprietário.</strong> Alguns fabricantes informam o consumo médio com
        cada combustível.
      </li>
      <li>
        <strong>Sua própria medição.</strong> Encha o tanque, zere o hodômetro parcial e rode
        normalmente. No abastecimento seguinte, encha de novo e divida os quilômetros rodados pelos
        litros colocados. Faça isso com cada combustível, de preferência no mesmo tipo de trajeto.
      </li>
    </ul>
    <p>
      Com os dois valores, divida o consumo com etanol pelo consumo com gasolina. Um carro que faz 9
      km/l com etanol e 12 km/l com gasolina tem proporção de 75%: nele, o etanol compensa até 75%
      do preço da gasolina.
    </p>

    <h2>Como ler a economia</h2>
    <p>
      A economia por tanque compara o custo de encher o tanque com o combustível que compensa e o
      custo de rodar a mesma distância com o outro. A economia a cada 100 km aparece quando você
      informa o consumo do carro, porque depende do custo real por quilômetro.
    </p>
    <p>
      Exemplo com valores fictícios: etanol a R$ 4,099 e gasolina a R$ 5,899 dá 69,5%, logo abaixo
      do limite de 70%. O etanol compensa, mas por pouco. Nesses casos, alguns centavos de diferença
      entre postos podem pesar tanto quanto a escolha do combustível.
    </p>
  </ToolPage>
);

export async function getStaticProps() {
  return { props: {} };
}

export default Page;
