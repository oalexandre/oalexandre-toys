import ToolPage from "../../../components/tool/ToolPage";
import DddLookup from "../../../features/ddd/DddLookup";
import DddTable from "../../../features/ddd/DddTable";

const faq = [
  {
    question: "O DDD mostra a cidade do número?",
    answer:
      "Mostra o estado e a região de cobertura. Cada DDD cobre várias cidades; o 11, por exemplo, atende a capital paulista e toda a região metropolitana. A ferramenta não identifica a cidade exata nem a operadora.",
  },
  {
    question: "Se a pessoa mudou de estado, o DDD muda?",
    answer:
      "Não. Com a portabilidade, o número vai junto com a pessoa. O DDD indica onde a linha foi habilitada originalmente, não onde o dono mora hoje.",
  },
  {
    question: "Por que alguns DDDs não existem?",
    answer:
      "A Anatel reservou o segundo dígito 0 para outros serviços e alguns códigos nunca foram atribuídos. Por isso não há DDD 10, 20, 23, 25, 26, 29, 30, 36, 39, 40, 50, 52, 56 a 60, 70, 72, 76, 78, 80 e 90.",
  },
  {
    question: "Dá para saber se um número é celular ou fixo?",
    answer:
      "Sim. Celulares têm nove dígitos após o DDD e começam com 9. Telefones fixos têm oito dígitos e começam com 2, 3, 4 ou 5.",
  },
];

const Page = () => (
  <ToolPage
    path="/comunicacao/encontrar-ddd-do-celular"
    title="DDD de qual estado? Consulta de DDD"
    description="Digite um DDD ou telefone e descubra de qual estado e região ele é. Lista completa dos 67 códigos de área do Brasil, de 11 a 99, conforme a Anatel."
    lead="Descubra de qual estado é um número de telefone pelos dois primeiros dígitos, e veja a lista completa de DDDs do Brasil."
    tool={<DddLookup />}
    faq={faq}
    features={["Consulta instantânea", "67 DDDs de todos os estados", "Tabela completa por estado"]}
  >
    <h2>Tabela de DDDs por estado</h2>
    <DddTable />

    <h2>Como o DDD é organizado</h2>
    <p>
      O primeiro dígito do DDD indica a região do país: 1 é São Paulo, 2 é Rio de Janeiro e Espírito
      Santo, 3 é Minas Gerais, 4 é a região Sul, 5 é o Rio Grande do Sul, 6 o Centro-Oeste,
      Tocantins, Acre e Rondônia, 7 a Bahia e Sergipe, 8 o Nordeste e 9 o Norte e Maranhão. Cada
      estado recebe um ou mais códigos conforme o tamanho da população.
    </p>

    <h2>Quando essa consulta é útil</h2>
    <ul>
      <li>Identificar a origem de uma ligação ou mensagem de número desconhecido.</li>
      <li>Segmentar contatos por região em campanhas e planilhas.</li>
      <li>Conferir se um telefone informado em cadastro bate com o endereço.</li>
    </ul>
  </ToolPage>
);

export async function getStaticProps() {
  return { props: {} };
}

export default Page;
