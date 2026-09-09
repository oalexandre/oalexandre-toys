import ToolPage from "../../../components/tool/ToolPage";
import QrCodeGenerator from "../../../features/qrcode/QrCodeGenerator";

const faq = [
  {
    question: "O QR code expira ou para de funcionar?",
    answer:
      "Não. O conteúdo fica gravado na própria imagem, sem passar por redirecionamento. Enquanto o link ou texto continuar válido, o código funciona, mesmo que este site saia do ar.",
  },
  {
    question: "Posso colocar um logo no meio?",
    answer:
      "Sim. Envie uma imagem PNG, JPG ou SVG. O código é gerado com correção de erro nível H, que tolera até 30% da área coberta, então o logo não atrapalha a leitura se ficar em tamanho razoável.",
  },
  {
    question: "Quais cores posso usar?",
    answer:
      "Qualquer uma, mas mantenha contraste alto entre os pontos e o fundo. Pontos escuros sobre fundo claro é o que os leitores de QR esperam. Evite fundo escuro com pontos claros e cores muito próximas.",
  },
  {
    question: "Qual tamanho devo baixar?",
    answer:
      "Para telas e redes sociais, 512 px basta. Para impressão em cartões e cartazes, use 1024 px. O QR code é feito de quadrados, então pode ser ampliado sem perder legibilidade desde que a resolução original seja suficiente.",
  },
  {
    question: "O que posso codificar além de links?",
    answer:
      "Qualquer texto. Formatos especiais como WIFI:T:WPA;S:nome;P:senha;; conectam à rede Wi-Fi, mailto: abre e-mail, tel: disca um número e BEGIN:VCARD salva um contato. Quanto maior o conteúdo, mais denso fica o código.",
  },
];

const Page = () => (
  <ToolPage
    path="/utilitario/gerador-de-qrcode"
    title="Gerador de QR Code Grátis com Logo e Cores"
    description="Crie QR codes personalizados com cores e logo, baixe em PNG de até 1024 px. Gerado no navegador, sem cadastro e sem expiração. Para links, Wi-Fi, texto e contatos."
    lead="Crie um QR code com as suas cores e seu logo e baixe em PNG. O código é gerado no navegador e nunca expira."
    tool={<QrCodeGenerator />}
    faq={faq}
    features={[
      "Cores personalizadas",
      "Logo no centro",
      "PNG até 1024 px",
      "Correção de erro nível H",
      "Sem expiração",
    ]}
  >
    <h2>Como usar</h2>
    <ol>
      <li>Cole o link ou texto. A pré-visualização atualiza sozinha.</li>
      <li>Ajuste as cores dos pontos, do fundo e dos três olhos, se quiser.</li>
      <li>Adicione um logo, escolha o tamanho e baixe o PNG.</li>
    </ol>

    <h2>Boas práticas para o QR code ser lido</h2>
    <ul>
      <li>
        <strong>Contraste.</strong> Pontos escuros sobre fundo claro. Se usar cor, prefira tons
        fechados.
      </li>
      <li>
        <strong>Margem.</strong> Deixe uma área em branco ao redor do código no material final.
      </li>
      <li>
        <strong>Tamanho de impressão.</strong> Pelo menos 2 cm de lado para leitura próxima; para
        cartazes, calcule cerca de um décimo da distância de leitura.
      </li>
      <li>
        <strong>Teste.</strong> Aponte a câmera do celular antes de mandar imprimir.
      </li>
    </ul>

    <h2>Formatos úteis</h2>
    <pre>
      <code>{`Wi-Fi:    WIFI:T:WPA;S:NomeDaRede;P:senha123;;
Telefone: tel:+5511999999999
E-mail:   mailto:contato@exemplo.com.br
WhatsApp: https://wa.me/5511999999999`}</code>
    </pre>
  </ToolPage>
);

export async function getStaticProps() {
  return { props: {} };
}

export default Page;
