import ToolPage from "../../../components/tool/ToolPage";
import PixGenerator from "../../../features/pix/PixGenerator";

const faq = [
  {
    question: "Como gerar um QR code Pix de graça?",
    answer:
      "Escolha o tipo de chave, digite a chave, o seu nome e a cidade, e clique em Gerar QR Code Pix. O código copia e cola e a imagem do QR code aparecem na hora. Não há cadastro nem cobrança.",
  },
  {
    question: "É seguro gerar QR code Pix em um site?",
    answer:
      "Aqui o código é montado no seu navegador e nada é enviado a servidor. Um QR code Pix só contém a chave e os dados de quem recebe, que você já divulgaria de qualquer forma. Antes de divulgar, leia o QR code com o app de outro banco e confira se o nome e a instituição que aparecem são os seus.",
  },
  {
    question: "Qual a diferença entre Pix estático e Pix dinâmico?",
    answer:
      "O estático, gerado aqui, é fixo: pode ser usado várias vezes, com ou sem valor definido, e serve para cardápio, balcão ou cartão. O dinâmico é criado pelo banco ou por um sistema de cobrança para uma venda específica, pode expirar e avisa quando o pagamento é feito.",
  },
  {
    question: "O site avisa quando o Pix for pago?",
    answer:
      "Não. O site não recebe nem acompanha pagamentos. O dinheiro vai direto para a conta ligada à chave, e a confirmação aparece no app do seu banco, como em qualquer Pix.",
  },
  {
    question: "Posso deixar o valor em branco?",
    answer:
      "Pode. Sem valor, quem paga digita o valor no app do banco. Isso é útil para um QR code impresso que serve para qualquer compra. Com valor, o app já abre com o valor preenchido.",
  },
];

const Page = () => (
  <ToolPage
    path="/dinheiro/gerador-de-qr-code-pix"
    title="Gerador de QR Code Pix e Pix Copia e Cola"
    description="Crie o QR code Pix e o código copia e cola da sua chave, com ou sem valor, direto no navegador. Baixe em PNG para imprimir ou mandar a clientes."
    lead="Crie o QR code e o Pix copia e cola da sua chave, com ou sem valor, para receber pagamentos."
    tool={<PixGenerator />}
    faq={faq}
    features={[
      "Chave CPF, CNPJ, celular, e-mail ou aleatória",
      "Valor fixo ou livre",
      "Pix copia e cola",
      "QR code em PNG",
      "Processamento no navegador",
    ]}
  >
    <h2>Como usar</h2>
    <ol>
      <li>
        Escolha o tipo de chave e digite a chave Pix cadastrada no seu banco. Ao digitar, o tipo é
        reconhecido sozinho na maioria dos casos.
      </li>
      <li>
        Informe o nome de quem recebe e a cidade. Use o mesmo nome da conta, para quem paga
        reconhecer.
      </li>
      <li>
        Se quiser, preencha o valor, um identificador (como o número do pedido) e uma mensagem.
      </li>
      <li>
        Clique em Gerar QR Code Pix. Copie o código para mandar por mensagem ou baixe o QR code em
        PNG para imprimir.
      </li>
    </ol>

    <h2>Pix estático e Pix dinâmico</h2>
    <p>
      Esta ferramenta gera o <strong>Pix estático</strong>: um código fixo que pode ser pago quantas
      vezes for preciso. É o formato usado em plaquinha de balcão, cardápio, cartão de visita e
      pedido por WhatsApp. Ele não expira e não depende de nenhum sistema no ar.
    </p>
    <p>
      O <strong>Pix dinâmico</strong> é criado pelo banco ou por uma plataforma de cobrança para uma
      venda específica. Ele pode ter vencimento, juros e aviso automático de pagamento. Se você
      precisa conferir cada venda de forma automática, use o dinâmico do seu banco.
    </p>

    <h2>O que quem paga vê</h2>
    <p>
      Ao ler o QR code ou colar o código, o app do banco mostra o nome do titular da chave e a
      instituição, buscados no cadastro do Pix. O nome e a cidade que você digita aqui vão dentro do
      código, mas o banco exibe os dados oficiais da conta. Se você definiu um valor, ele aparece
      preenchido; senão, a pessoa digita.
    </p>
    <p>
      O identificador aparece no seu extrato e ajuda a saber qual pedido foi pago. A mensagem é
      opcional e nem todos os bancos a mostram.
    </p>

    <h2>Limites do formato</h2>
    <ul>
      <li>
        <strong>Nome até 25 caracteres e cidade até 15</strong>, sem acentos. A ferramenta remove os
        acentos e corta o excesso.
      </li>
      <li>
        <strong>Identificador</strong> com até 25 letras e números, sem espaços. Em branco, vai
        &quot;***&quot;, que significa sem identificador.
      </li>
      <li>
        <strong>Celular</strong> vai no formato +55 com DDD, como exige o Banco Central.
      </li>
    </ul>

    <h2>Segurança</h2>
    <p>
      Antes de imprimir ou divulgar, faça um teste: leia o QR code com o app de outro banco e
      confira se o nome e a instituição que aparecem são os seus. Não é preciso concluir o
      pagamento. Quem paga deve fazer o mesmo:{" "}
      <strong>sempre confira o nome mostrado no app antes de pagar</strong>.
    </p>
    <p>
      O site não recebe, não guarda e não acompanha pagamentos. A chave e os dados digitados ficam
      no seu aparelho; o código é montado pelo navegador e o dinheiro vai direto para a sua conta.
    </p>
  </ToolPage>
);

export async function getStaticProps() {
  return { props: {} };
}

export default Page;
