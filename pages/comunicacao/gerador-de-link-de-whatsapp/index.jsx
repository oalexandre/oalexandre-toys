import ToolPage from "../../../components/tool/ToolPage";
import WhatsappLinkGenerator from "../../../features/whatsapp/WhatsappLinkGenerator";

const faq = [
  {
    question: "O link do WhatsApp expira?",
    answer:
      "Não. O link usa o formato oficial wa.me do WhatsApp e continua funcionando enquanto o número existir. Ele não depende deste site nem de nenhum encurtador.",
  },
  {
    question: "Preciso ter WhatsApp Business?",
    answer:
      "Não. O link funciona com qualquer conta, pessoal ou comercial. Quem clica abre uma conversa com o número informado no aplicativo ou no WhatsApp Web.",
  },
  {
    question: "Como coloco o link no Instagram?",
    answer:
      "Cole o link no campo de site do perfil ou use o botão de contato do WhatsApp na conta profissional. Em stories, use a figurinha de link. O QR code serve para materiais impressos e telas.",
  },
  {
    question: "Posso usar um número de outro país?",
    answer:
      "Sim. Troque o código do país no primeiro campo. O padrão 55 é o Brasil. O número deve ser informado com o DDD e sem o zero inicial.",
  },
  {
    question: "A mensagem aparece com acentos e emojis?",
    answer:
      "Sim. O texto é codificado no link e o WhatsApp o exibe exatamente como você digitou, incluindo acentos, quebras de linha e emojis.",
  },
];

const Page = () => (
  <ToolPage
    path="/comunicacao/gerador-de-link-de-whatsapp"
    title="Gerador de Link de WhatsApp com Mensagem"
    description="Crie um link wa.me com mensagem pronta para colocar no site, Instagram ou e-mail e baixe o QR code. Funciona com qualquer número, sem cadastro e sem expirar."
    lead="Monte um link que abre uma conversa no WhatsApp com a mensagem já escrita. Baixe também o QR code para usar em impressos."
    tool={<WhatsappLinkGenerator />}
    faq={faq}
    features={[
      "Formato oficial wa.me",
      "Mensagem pré-preenchida",
      "QR code em PNG",
      "Suporte a outros países",
    ]}
  >
    <h2>Como usar</h2>
    <ol>
      <li>Digite o número com DDD. Para outros países, ajuste o código no primeiro campo.</li>
      <li>
        Escreva a mensagem que o cliente vai enviar. Pode deixar em branco para abrir só a conversa.
      </li>
      <li>Copie o link ou baixe o QR code e use onde quiser.</li>
    </ol>

    <h2>Onde usar o link</h2>
    <ul>
      <li>
        <strong>Site e loja virtual.</strong> Botão “Fale conosco” ou ícone flutuante que abre
        direto a conversa.
      </li>
      <li>
        <strong>Redes sociais.</strong> Link na bio, botão de contato e anúncios com objetivo de
        mensagem.
      </li>
      <li>
        <strong>E-mail e assinatura.</strong> Um clique leva o destinatário para o atendimento.
      </li>
      <li>
        <strong>Impressos.</strong> Cartão, cardápio, embalagem e vitrine com o QR code.
      </li>
    </ul>

    <h2>Dicas para a mensagem pronta</h2>
    <p>
      Uma boa mensagem inicial identifica de onde a pessoa veio e o que ela quer, para o atendimento
      já começar com contexto. Exemplos: “Olá! Vi o anúncio do apartamento no centro e quero agendar
      uma visita” ou “Oi, quero fazer um pedido pelo cardápio digital”. Evite textos longos: a
      pessoa pode editar antes de enviar.
    </p>

    <h2>Formato do link</h2>
    <p>
      O link segue o padrão <code>https://wa.me/55DDDNUMERO?text=mensagem</code>, documentado pelo
      próprio WhatsApp. O número vai apenas com dígitos, com código do país e DDD, e a mensagem é
      codificada para URL.
    </p>
  </ToolPage>
);

export async function getStaticProps() {
  return { props: {} };
}

export default Page;
