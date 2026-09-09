import ToolPage from "../../../components/tool/ToolPage";
import PasswordGenerator from "../../../features/password/PasswordGenerator";

const faq = [
  {
    question: "As senhas geradas aqui são enviadas para algum servidor?",
    answer:
      "Não. A senha é criada pelo próprio navegador com a função crypto.getRandomValues() e nunca sai do seu dispositivo. Você pode até desligar a internet depois que a página carregar.",
  },
  {
    question: "Qual comprimento de senha devo usar?",
    answer:
      "Para contas comuns, 16 caracteres com letras, números e símbolos já são mais que suficientes. Para e-mail principal, banco e gerenciador de senhas, use 20 ou mais. Comprimento pesa mais do que variedade de símbolos.",
  },
  {
    question: "O que significa a entropia em bits?",
    answer:
      "É uma medida de quantas combinações um atacante precisaria testar. Cada bit dobra o número de tentativas. Acima de 60 bits a senha resiste a ataques de força bruta com o hardware atual; acima de 80 bits é considerada muito forte.",
  },
  {
    question: "Para que serve a opção de evitar caracteres parecidos?",
    answer:
      "Ela remove letras e números fáceis de confundir ao ler ou digitar, como l, 1, I, O e 0. É útil quando a senha vai ser ditada ou escrita à mão, como uma senha de Wi-Fi.",
  },
  {
    question: "Onde guardo a senha depois de gerar?",
    answer:
      "Em um gerenciador de senhas como Bitwarden, 1Password ou o do próprio navegador. Assim você usa uma senha diferente em cada serviço sem precisar decorar nenhuma.",
  },
];

const Page = () => (
  <ToolPage
    path="/seguranca/gerador-de-senha-segura"
    title="Gerador de Senha Segura e Aleatória"
    description="Gere senhas fortes e aleatórias de 8 a 64 caracteres direto no navegador. Sem cadastro, sem envio para servidor. Veja a força da senha em bits de entropia."
    lead="Crie senhas fortes com letras, números e símbolos. A senha é gerada no seu navegador e nunca é enviada para lugar nenhum."
    tool={<PasswordGenerator />}
    faq={faq}
    features={[
      "Comprimento de 8 a 64 caracteres",
      "Letras, números e símbolos",
      "Indicador de força em bits",
      "Geração local com crypto.getRandomValues",
    ]}
  >
    <h2>Como usar o gerador de senhas</h2>
    <ol>
      <li>
        Escolha o comprimento no controle deslizante. O padrão de 16 caracteres serve para a maioria
        dos sites.
      </li>
      <li>Marque os tipos de caractere que o site aceita. Alguns bancos não permitem símbolos.</li>
      <li>Clique em copiar e cole no cadastro. Guarde a senha em um gerenciador.</li>
    </ol>

    <h2>Por que usar uma senha aleatória</h2>
    <p>
      A maioria dos vazamentos de conta não vem de senhas descobertas por tentativa, mas de senhas
      reutilizadas: um site vaza, e o atacante testa o mesmo e-mail e senha em dezenas de outros
      serviços. Uma senha aleatória e diferente para cada cadastro corta esse caminho. Combinada com
      a verificação em duas etapas, resolve a maior parte do risco.
    </p>

    <h2>O que torna uma senha forte</h2>
    <ul>
      <li>
        <strong>Comprimento.</strong> Cada caractere a mais multiplica o número de combinações. Uma
        senha de 16 caracteres só com letras minúsculas é mais forte que uma de 8 com todos os
        tipos.
      </li>
      <li>
        <strong>Aleatoriedade.</strong> Palavras, datas e padrões de teclado estão nos dicionários
        de ataque. Uma senha gerada por computador não tem esses atalhos.
      </li>
      <li>
        <strong>Exclusividade.</strong> Nunca repita a senha entre serviços. Se um vazar, os outros
        continuam protegidos.
      </li>
    </ul>
  </ToolPage>
);

export async function getStaticProps() {
  return { props: {} };
}

export default Page;
