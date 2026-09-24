import ToolPage from "../../../components/tool/ToolPage";
import RandomPicker from "../../../features/random/RandomPicker";

const faq = [
  {
    question: "O sorteio é realmente aleatório?",
    answer:
      "Sim. Números e nomes são escolhidos com crypto.getRandomValues(), o gerador criptográfico do navegador, sem viés de arredondamento. A animação só revela um resultado que já foi sorteado; ela não muda as chances.",
  },
  {
    question: "Como faço um sorteio de rifa?",
    answer:
      "Defina o intervalo de 1 até o número de bilhetes vendidos, escolha quantos prêmios há e marque sem repetição. Anote a data e hora exibidas junto com o resultado para dar transparência aos participantes.",
  },
  {
    question: "Como sortear nomes?",
    answer:
      "Escolha o modo Nomes, cole a lista com um nome por linha e diga quantos quer sortear: 1, 2 ou 3. Numeração e marcadores no início das linhas são ignorados, e nomes repetidos são contados uma vez só, a menos que você desligue essa opção.",
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
    title="Sorteador de Números e Nomes Online"
    description="Sorteie números em um intervalo ou nomes de uma lista, com revelação animada, data e hora. Para rifas, amigo secreto, promoções e sorteios em grupo."
    lead="Sorteie números em um intervalo ou nomes de uma lista, com revelação animada do resultado."
    tool={<RandomPicker />}
    faq={faq}
    features={[
      "Sorteio de nomes de uma lista",
      "Revelação animada do resultado",
      "Até 1000 números por sorteio",
      "Com ou sem repetição",
      "Ordenação opcional",
      "Data e hora do sorteio",
    ]}
  >
    <h2>Como usar</h2>
    <h3>Sortear números</h3>
    <ol>
      <li>Informe quantos números quer sortear e o intervalo, por exemplo de 1 a 300.</li>
      <li>Escolha se pode repetir e se o resultado deve sair em ordem.</li>
      <li>Clique em Sortear. Copie o resultado com a data e hora para registro.</li>
    </ol>
    <h3>Sortear nomes</h3>
    <ol>
      <li>Troque para o modo Nomes e cole a lista, com um nome ou opção por linha.</li>
      <li>Escolha quantos sortear: 1, 2 ou 3. Com mais de um, eles saem em ordem de sorteio.</li>
      <li>
        Clique em Sortear e acompanhe a revelação. Para abrir direto neste modo, use o endereço
        terminado em <code>#nomes</code>.
      </li>
    </ol>

    <h2>Usos comuns</h2>
    <ul>
      <li>
        <strong>Rifas e bingos.</strong> Sorteio dos bilhetes ou pedras entre os vendidos.
      </li>
      <li>
        <strong>Ordem de apresentação e tarefas.</strong> Cole os nomes da turma ou da equipe e
        sorteie quem começa.
      </li>
      <li>
        <strong>Sorteio em redes sociais.</strong> Cole os nomes de quem comentou e sorteie o
        vencedor, com a revelação na tela para gravar.
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
