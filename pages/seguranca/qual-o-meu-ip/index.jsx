import { Public, Security, Speed, NetworkCheck, VpnKey, Computer } from "@mui/icons-material";
import { Box, Typography, Alert, Chip, Divider } from "@mui/material";

import PageTitle from "../../../components/common/PageTitle";
import SEO from "../../../components/common/SEO";
import ToolSchema from "../../../components/common/ToolSchema";
import TodoStateProvider from "../../../context/TodoContext";
import Screen from "../../../features/findIp/Screens";

const QualMeuIP = () => {
  return (
    <TodoStateProvider>
      <SEO
        description="Descubra seu IP público instantaneamente e gratuitamente. Ferramenta essencial para suporte técnico, configuração de firewall, liberação de acesso e diagnóstico de rede."
        title="Qual o Meu IP? - Descubra Seu IP Público Instantaneamente"
        url="/seguranca/qual-o-meu-ip"
        imageUrl="/meu-ip.png"
      />

      <ToolSchema
        tool={{
          name: "Qual o Meu IP?",
          description:
            "Descubra seu IP público instantaneamente e gratuitamente. Ferramenta essencial para suporte técnico, configuração de firewall, liberação de acesso e diagnóstico de rede. Resultado preciso sem armazenamento.",
          url: "/seguranca/qual-o-meu-ip",
          imageUrl: "/meu-ip.png",
          category: "SecurityApplication",
          features: [
            "Detecção instantânea de IP público",
            "Precisão total do endereço real",
            "Sem armazenamento de dados",
            "Interface limpa e simples",
            "Cópia facilitada do IP",
            "Uso ilimitado e gratuito",
            "Essencial para suporte técnico",
            "Diagnóstico de rede",
          ],
        }}
      />

      <Box sx={{ maxWidth: 900, mx: "auto", mb: 4 }}>
        <PageTitle>Qual o Meu IP?</PageTitle>

        <Typography variant="h6" component="h2" sx={{ mb: 2, color: "primary.main" }}>
          🌐 Descubra Seu IP Público Instantaneamente - Essencial para TI
        </Typography>

        <Typography paragraph>
          Ferramenta gratuita para <strong>descobrir seu endereço IP público</strong> em tempo real.
          Essencial para suporte técnico, configuração de firewall, liberação de acesso e
          diagnóstico de problemas de rede. Resultado instantâneo e preciso.
        </Typography>

        <Alert severity="info" sx={{ mb: 3 }}>
          <Typography variant="body2">
            <strong>🔒 Privacidade Total:</strong> Seu IP é exibido instantaneamente sem ser
            armazenado em nossos servidores. Consulta completamente anônima e segura para
            compartilhar com suporte técnico ou configurações de rede.
          </Typography>
        </Alert>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center", mb: 3 }}>
          <Chip icon={<Public />} label="IP Público Real" color="primary" variant="outlined" />
          <Chip icon={<Speed />} label="Resultado Instantâneo" color="success" variant="outlined" />
          <Chip icon={<Security />} label="Sem Armazenamento" color="info" variant="outlined" />
          <Chip
            icon={<NetworkCheck />}
            label="Diagnóstico de Rede"
            color="secondary"
            variant="outlined"
          />
        </Box>

        <Screen />

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 4 }}>
          🔍 O que é um Endereço IP?
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>IP (Internet Protocol):</strong> É um endereço único de 32 bits que identifica seu
          dispositivo na internet. Funciona como um "CEP digital" que permite que outros
          computadores, servidores e serviços te encontrem na rede mundial. Cada conexão à internet
          possui um IP público único fornecido pelo provedor (ISP).
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🎯 Para que serve esta ferramenta?
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Suporte Técnico Remoto:</strong> Forneça seu IP para técnicos configurarem
            acesso TeamViewer, AnyDesk ou RDP
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Configuração de Firewall:</strong> Libere seu IP em sistemas corporativos e
            servidores empresariais
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Acesso a Sistemas Restritos:</strong> Cadastre IP para acessar aplicações com
            whitelist de IPs
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Diagnóstico de Rede:</strong> Identifique problemas de conectividade e
            roteamento
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Trabalho Remoto/VPN:</strong> Configure VPN corporativa ou acesso a recursos
            internos
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Hospedagem de Serviços:</strong> Configure DNS, servidores web ou de jogos
            online
          </Typography>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" component="h3" gutterBottom>
          ⚡ Características da Ferramenta
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Detecção Instantânea:</strong> IP público real exibido automaticamente ao
            carregar
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Precisão Total:</strong> Mostra exatamente o IP que a internet enxerga
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Sem Armazenamento:</strong> Nenhum registro ou log de IPs consultados
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Copy & Paste Ready:</strong> Copie facilmente para compartilhar com suporte
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Responsivo:</strong> Funciona perfeitamente em todos os dispositivos
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Interface Limpa:</strong> Foco total na informação, sem distrações
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          💼 Casos de Uso Profissionais
        </Typography>

        <Box
          sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3, mb: 3 }}
        >
          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="primary">
              🔧 Suporte Técnico
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                "Preciso do seu IP para configurar acesso remoto"
              </Typography>
              <Typography component="li" variant="body2">
                "Vou liberar seu IP no firewall para acessar o sistema"
              </Typography>
              <Typography component="li" variant="body2">
                "Configure VPN com este IP para acesso corporativo"
              </Typography>
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="success.main">
              🏢 TI Empresarial
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                Whitelist de IPs para aplicações críticas
              </Typography>
              <Typography component="li" variant="body2">
                Configuração de regras de firewall corporativo
              </Typography>
              <Typography component="li" variant="body2">
                Liberação de acesso a servidores e bancos de dados
              </Typography>
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3, mb: 3 }}
        >
          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="secondary">
              🎮 Gaming & Streaming
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                Configuração de servidores de jogos privados
              </Typography>
              <Typography component="li" variant="body2">
                Diagnóstico de problemas de conexão online
              </Typography>
              <Typography component="li" variant="body2">
                Port forwarding para streaming e broadcasting
              </Typography>
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="warning.main">
              🌐 Desenvolvimento Web
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                Configuração de DNS e domínios
              </Typography>
              <Typography component="li" variant="body2">
                Testes de aplicações e APIs externas
              </Typography>
              <Typography component="li" variant="body2">
                Configuração de webhooks e callbacks
              </Typography>
            </Typography>
          </Box>
        </Box>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🔐 IP Público vs IP Privado
        </Typography>

        <Typography variant="body1" paragraph>
          Entenda a diferença fundamental entre os dois tipos de endereços IP que existem na sua
          rede e como cada um é utilizado:
        </Typography>

        <Box
          sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3, mb: 3 }}
        >
          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="primary">
              🌐 IP Público
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                <strong>O que é:</strong> Seu endereço na internet global
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Quem vê:</strong> Todos os sites e serviços online
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Exemplo:</strong> 201.86.233.45
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Controle:</strong> Fornecido pelo seu provedor (ISP)
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Mudança:</strong> Pode mudar quando reconecta
              </Typography>
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="secondary">
              🏠 IP Privado
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                <strong>O que é:</strong> Seu endereço na rede local
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Quem vê:</strong> Apenas dispositivos da sua rede
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Exemplo:</strong> 192.168.1.100
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Controle:</strong> Definido pelo seu roteador
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Mudança:</strong> Fixo ou dinâmico na rede local
              </Typography>
            </Typography>
          </Box>
        </Box>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🛡️ Segurança e Privacidade
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Sem Registro de Logs:</strong> Nenhum IP consultado é armazenado ou registrado
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Consulta Anônima:</strong> Não coletamos dados pessoais ou informações
            adicionais
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>LGPD Compliant:</strong> Totalmente conforme com lei de proteção de dados
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Seguro para Compartilhar:</strong> Safe para enviar para suporte técnico
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>IP Dinâmico:</strong> Maioria dos IPs residenciais muda periodicamente
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🔧 Cenários Técnicos Comuns
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Home Office:</strong> "Preciso liberar seu IP para acessar o sistema da empresa"
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Suporte Remote:</strong> "Me envie seu IP para fazer conexão TeamViewer"
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Desenvolvimento:</strong> "Configure webhook com este IP para receber callbacks"
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Gaming:</strong> "Qual o IP do servidor? Vou configurar port forwarding"
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Segurança:</strong> "Bloqueie todos os IPs exceto estes na whitelist"
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🚨 Importante Saber
        </Typography>

        <Alert severity="warning" sx={{ mb: 2 }}>
          <Typography variant="body2">
            <strong>IP Dinâmico:</strong> A maioria dos provedores usa IP dinâmico, que pode mudar
            quando você reinicia o modem/roteador ou após certo tempo. Para aplicações críticas,
            considere contratar IP fixo com seu provedor.
          </Typography>
        </Alert>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1">
            ✅ <strong>O que mostra:</strong> IP público real fornecido pelo ISP
          </Typography>
          <Typography component="li" variant="body1">
            ❌ <strong>O que NÃO mostra:</strong> Localização exata ou dados pessoais
          </Typography>
          <Typography component="li" variant="body1">
            ❌ <strong>O que NÃO mostra:</strong> IP de dispositivos na sua rede local
          </Typography>
          <Typography component="li" variant="body1">
            ⚠️ <strong>Atenção:</strong> IP pode mudar após reconexão (maioria dos casos)
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          💡 Dicas para Profissionais de TI
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Documentação:</strong> Mantenha registro de IPs liberados no firewall
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Monitoramento:</strong> Configure alertas para mudanças de IP em serviços
            críticos
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Backup de Acesso:</strong> Sempre tenha IPs alternativos liberados para
            emergências
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Políticas de Segurança:</strong> Revise periodicamente whitelists de IPs
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>VPN Corporativa:</strong> Considere VPN para acesso mais seguro que IP fixo
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          📝 Termos de busca relacionados
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          qual meu ip, meu ip publico, descobrir ip, ver meu ip, ip address, endereço ip, qual o meu
          ip externo, ip checker, consultar ip, verificar ip, ip finder, mostrar ip, ip público
          atual, ferramenta ip, suporte técnico ip, firewall ip, vpn ip, what is my ip, ip lookup,
          external ip, public ip address, network diagnostics, ip whitelist, firewall configuration,
          remote access ip
        </Typography>
      </Box>
    </TodoStateProvider>
  );
};

export default QualMeuIP;
