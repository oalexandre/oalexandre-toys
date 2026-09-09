import ToolPage from "../../../components/tool/ToolPage";
import IpLookup from "../../../features/ip/IpLookup";

const faq = [
  {
    question: "Qual a diferença entre IP público e IP privado?",
    answer:
      "O IP público é o endereço que o seu provedor atribui à sua conexão e que os sites enxergam. O IP privado é o que o roteador dá para cada aparelho dentro da sua casa ou empresa, normalmente começando com 192.168, 10 ou 172.16. Esta página mostra o público.",
  },
  {
    question: "Por que meu IP mudou?",
    answer:
      "A maioria dos provedores residenciais usa IP dinâmico: o endereço pode trocar quando o modem reinicia ou depois de algum tempo. Se você precisa de um endereço fixo para liberar acesso a um servidor, contrate um IP fixo ou use um serviço de DNS dinâmico.",
  },
  {
    question: "A localização mostrada está errada. Por quê?",
    answer:
      "A localização vem do registro do bloco de IPs do provedor, não do GPS. É comum aparecer a capital do estado ou a cidade onde o provedor tem sua central. VPNs e redes móveis também deslocam a localização.",
  },
  {
    question: "Alguém consegue me achar pelo meu IP?",
    answer:
      "Não com precisão. O IP identifica o provedor e uma região aproximada. Apenas o próprio provedor, mediante ordem judicial, consegue vincular um IP a um cliente específico em determinado horário.",
  },
];

const Page = () => (
  <ToolPage
    path="/seguranca/qual-o-meu-ip"
    title="Qual é o meu IP? Descubra seu IP público"
    description="Veja seu endereço IP público agora, junto com provedor, cidade aproximada e fuso horário. Útil para liberar acesso em firewall, VPN e suporte técnico."
    lead="Seu endereço IP público, o provedor de internet e a localização aproximada da conexão."
    tool={<IpLookup />}
    faq={faq}
    features={[
      "IP público IPv4 ou IPv6",
      "Provedor e ASN",
      "Localização aproximada",
      "Copiar com um clique",
    ]}
  >
    <h2>Quando você precisa saber o seu IP</h2>
    <ul>
      <li>
        <strong>Liberar acesso em firewall ou servidor.</strong> O administrador precisa do seu IP
        público para criar a regra de permissão.
      </li>
      <li>
        <strong>Suporte técnico.</strong> O provedor ou a equipe de TI pede o IP para diagnosticar
        problemas de conexão.
      </li>
      <li>
        <strong>Conferir a VPN.</strong> Se o IP e o país mostrados aqui são os da VPN, ela está
        funcionando.
      </li>
      <li>
        <strong>Configurar acesso remoto.</strong> Câmeras, NAS e servidores domésticos precisam do
        IP público para serem acessados de fora.
      </li>
    </ul>

    <h2>Como ver o IP privado</h2>
    <p>
      No Windows, abra o Prompt de Comando e digite <code>ipconfig</code>. No macOS e Linux, use{" "}
      <code>ip addr</code> ou <code>ifconfig</code>. O endereço IPv4 da interface de rede ativa é o
      seu IP dentro da rede local.
    </p>
  </ToolPage>
);

export async function getStaticProps() {
  return { props: {} };
}

export default Page;
