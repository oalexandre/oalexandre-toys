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
    question: "O que é uma frase-senha e quando usar?",
    answer:
      "É uma senha feita de várias palavras aleatórias, como 'tigre-janela-cebola-remo-nuvem'. É muito mais fácil de lembrar e digitar que uma sequência de símbolos, e com 5 ou 6 palavras já fica mais forte que a maioria das senhas curtas. Ideal para a senha mestra do gerenciador, do e-mail e do computador.",
  },
  {
    question: "As palavras da frase-senha são secretas?",
    answer:
      "Não, e não precisam ser. A lista é pública. A força vem do sorteio: com 750 palavras, cada uma acrescenta cerca de 9,5 bits, e a chance de adivinhar 6 palavras na ordem certa é de uma em 178 quatrilhões.",
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
    title="Gerador de Senha Segura e Frase-senha"
    description="Gere senhas fortes de 8 a 64 caracteres ou frases-senha com palavras em português, direto no navegador. Veja a força em bits. Sem cadastro, sem envio para servidor."
    lead="Crie senhas aleatórias ou frases-senha com palavras em português. Tudo é gerado no seu navegador e nunca enviado para lugar nenhum."
    tool={<PasswordGenerator />}
    faq={faq}
    features={[
      "Comprimento de 8 a 64 caracteres",
      "Frase-senha com palavras em português",
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

    <h2>Senha aleatória ou frase-senha?</h2>
    <p>
      A senha aleatória é a melhor escolha para tudo que fica guardado em um gerenciador: você nunca
      vai digitar, então pode ser longa e cheia de símbolos. A frase-senha é para o que você precisa
      lembrar: a senha do próprio gerenciador, do e-mail principal, do login do computador. Seis
      palavras em português dão cerca de 57 bits, o mesmo que uma senha aleatória de 9 ou 10
      caracteres, e são incomparavelmente mais fáceis de memorizar.
    </p>

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
