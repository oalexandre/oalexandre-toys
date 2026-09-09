import ToolPage from "../../../components/tool/ToolPage";
import NumberPicker from "../../../features/random/NumberPicker";

const faq = [
  {
    question: "O sorteio é realmente aleatório?",
    answer:
      "Sim. Os números vêm de crypto.getRandomValues(), o gerador criptográfico do navegador, sem viés de arredondamento. Não há como o site ou qualquer pessoa influenciar o resultado.",
  },
  {
    question: "Como faço um sorteio de rifa?",
    answer:
      "Defina o intervalo de 1 até o número de bilhetes vendidos, escolha quantos prêmios há e marque sem repetição. Anote a data e hora exibidas junto com o resultado para dar transparência aos participantes.",
  },
  {
    question: "Posso sortear nomes em vez de números?",
    answer:
      "Numere a lista de participantes, em uma planilha por exemplo, e sorteie no intervalo de 1 até o total. O número sorteado corresponde à linha do participante.",
  },
  {
    question: "O que muda com a opção sem repetição?",
    answer:
      "Com ela ligada, cada número sai no máximo uma vez, como em uma urna de onde as bolas não voltam. Desligada, o mesmo número pode aparecer mais de uma vez, como em lançamentos de dado.",
  },
  {
    question: "Sorteios promocionais precisam de autorização?",
    answer:
      "Promoções comerciais com distribuição gratuita de prêmios exigem autorização da Secretaria de Prêmios e Apostas do Ministério da Fazenda. Sorteios entre amigos, em sala de aula ou para decidir a ordem de algo não precisam.",
  },
];

const Page = () => (
  <ToolPage
    path="/utilitario/sorteador-automatico"
    title="Sorteador de Números Online Aleatório"
    description="Sorteie um ou mais números em qualquer intervalo, com ou sem repetição. Resultado aleatório gerado no navegador, com data e hora. Para rifas, amigo secreto e promoções."
    lead="Sorteie números em um intervalo, com ou sem repetição, usando o gerador aleatório do navegador."
    tool={<NumberPicker />}
    faq={faq}
    features={[
      "Até 1000 números por sorteio",
      "Com ou sem repetição",
      "Ordenação opcional",
      "Data e hora do sorteio",
    ]}
  >
    <h2>Como usar</h2>
    <ol>
      <li>Informe quantos números quer sortear e o intervalo, por exemplo de 1 a 300.</li>
      <li>Escolha se pode repetir e se o resultado deve sair em ordem.</li>
      <li>Clique em Sortear. Copie o resultado com a data e hora para registro.</li>
    </ol>

    <h2>Usos comuns</h2>
    <ul>
      <li>
        <strong>Rifas e bingos.</strong> Sorteio dos bilhetes ou pedras entre os vendidos.
      </li>
      <li>
        <strong>Amigo secreto e ordem de apresentação.</strong> Numere as pessoas e sorteie.
      </li>
      <li>
        <strong>Sorteio em redes sociais.</strong> Numere os comentários e sorteie o vencedor.
      </li>
      <li>
        <strong>Jogos e decisões.</strong> Dados, loterias de brincadeira e escolhas ao acaso.
      </li>
    </ul>

    <h2>Transparência no sorteio</h2>
    <p>
      Para dar segurança aos participantes, faça o sorteio ao vivo em uma chamada ou grave a tela, e
      divulgue a lista numerada de participantes antes de sortear. A data e hora exibidas ao lado do
      resultado ajudam a documentar o momento.
    </p>
  </ToolPage>
);

export async function getStaticProps() {
  return { props: {} };
}

export default Page;
