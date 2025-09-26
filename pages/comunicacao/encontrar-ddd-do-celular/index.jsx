import { Phone, LocationOn, Search, Speed, Map, Security } from "@mui/icons-material";
import { Box, Typography, Alert, Chip, Divider } from "@mui/material";

import PageTitle from "../../../components/common/PageTitle";
import SEO from "../../../components/common/SEO";
import ToolSchema from "../../../components/common/ToolSchema";
import TodoStateProvider from "../../../context/TodoContext";
import Screen from "../../../features/findPhone/Screens";

const EncontrarDDDCelular = () => {
  return (
    <TodoStateProvider>
      <SEO
        description="Descubra o estado de origem pelo DDD do telefone celular. Consulte gratuitamente qual estado brasileiro pertence qualquer número de DDD de 11 a 99."
        title="Encontrar DDD do Celular - Descubra o Estado pelo DDD"
        url="/comunicacao/encontrar-ddd-do-celular"
        imageUrl="/encontrar-ddd.png"
      />

      <ToolSchema
        tool={{
          name: "Encontrar DDD do Celular",
          description:
            "Descubra o estado de origem pelo DDD do telefone celular. Consulte gratuitamente qual estado brasileiro pertence qualquer número de DDD de 11 a 99. Base completa e atualizada conforme ANATEL.",
          url: "/comunicacao/encontrar-ddd-do-celular",
          imageUrl: "/encontrar-ddd.png",
          category: "CommunicationApplication",
          features: [
            "Base completa ANATEL",
            "Consulta instantânea",
            "Todos os estados brasileiros",
            "Interface simples e intuitiva",
            "Uso ilimitado e gratuito",
            "Funciona offline",
            "Mobile friendly",
            "Sem armazenamento de dados",
          ],
        }}
      />

      <Box sx={{ maxWidth: 900, mx: "auto", mb: 4 }}>
        <PageTitle>Encontrar DDD do Celular</PageTitle>

        <Typography variant="h6" component="h2" sx={{ mb: 2, color: "primary.main" }}>
          📞 Descubra o Estado de Origem pelo DDD - Consulta Instantânea
        </Typography>

        <Typography paragraph>
          Ferramenta gratuita para <strong>identificar o estado brasileiro</strong> de origem de
          qualquer número de telefone através do seu DDD (Discagem Direta a Distância). Consulta
          instantânea e completa com todos os códigos de área do Brasil.
        </Typography>

        <Alert severity="info" sx={{ mb: 3 }}>
          <Typography variant="body2">
            <strong>🌐 Base Completa:</strong> Nossa base de dados contém todos os DDDs oficiais do
            Brasil, sempre atualizada conforme regulamentação da ANATEL. Consulta gratuita, rápida e
            sem limites de uso.
          </Typography>
        </Alert>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center", mb: 3 }}>
          <Chip icon={<LocationOn />} label="Todos os Estados" color="primary" variant="outlined" />
          <Chip icon={<Speed />} label="Consulta Instantânea" color="success" variant="outlined" />
          <Chip icon={<Security />} label="100% Gratuito" color="info" variant="outlined" />
          <Chip icon={<Map />} label="Base ANATEL" color="secondary" variant="outlined" />
        </Box>

        <Screen />

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 4 }}>
          🔍 Como funciona o Sistema DDD?
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>DDD (Discagem Direta a Distância):</strong> Sistema de códigos de duas cifras
          criado pela ANATEL para identificar a região geográfica de origem dos telefones no Brasil.
          Cada código DDD corresponde a uma área específica, facilitando a identificação da
          procedência das chamadas.
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🎯 Para que serve esta consulta?
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Identificar Origem:</strong> Descubra de qual estado é um número desconhecido
            antes de atender
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Verificar Ligações:</strong> Confira a procedência de chamadas comerciais ou
            suspeitas
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Análise Comercial:</strong> Identifique regiões de origem dos seus clientes e
            leads
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Pesquisa de Mercado:</strong> Mapeie a distribuição geográfica da sua base de
            contatos
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Segurança Pessoal:</strong> Verifique origem de ligações suspeitas ou golpes
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Logística Empresarial:</strong> Organize rotas de entrega e atendimento por
            região
          </Typography>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" component="h3" gutterBottom>
          ⚡ Características da Ferramenta
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Base Completa ANATEL:</strong> Todos os DDDs oficiais do Brasil sempre
            atualizados
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Consulta Instantânea:</strong> Resultado imediato sem demoras ou carregamentos
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Interface Simples:</strong> Digite o DDD e obtenha o estado correspondente
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Uso Ilimitado:</strong> Consulte quantos DDDs quiser, sem restrições
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Funciona Offline:</strong> Após carregar, não precisa de internet para
            consultar
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Mobile Friendly:</strong> Funciona perfeitamente em celulares e tablets
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🗺️ DDDs Principais por Estado
        </Typography>

        <Box
          sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3, mb: 3 }}
        >
          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="primary">
              📍 Região Sudeste
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                <strong>São Paulo:</strong> 11, 12, 13, 14, 15, 16, 17, 18, 19
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Rio de Janeiro:</strong> 21, 22, 24
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Minas Gerais:</strong> 31, 32, 33, 34, 35, 37, 38
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Espírito Santo:</strong> 27, 28
              </Typography>
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="secondary">
              📍 Região Sul
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                <strong>Rio Grande do Sul:</strong> 51, 53, 54, 55
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Paraná:</strong> 41, 42, 43, 44, 45, 46
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Santa Catarina:</strong> 47, 48, 49
              </Typography>
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3, mb: 3 }}
        >
          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="success.main">
              📍 Região Nordeste
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                <strong>Bahia:</strong> 71, 73, 74, 75, 77
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Pernambuco:</strong> 81, 87
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Ceará:</strong> 85, 88
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Outros:</strong> 79, 82, 83, 84, 86, 89
              </Typography>
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="warning.main">
              📍 Outras Regiões
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                <strong>Distrito Federal:</strong> 61
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Goiás/Tocantins:</strong> 62, 63, 64
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Mato Grosso:</strong> 65, 66
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Norte:</strong> 68, 69, 91, 92, 93, 94, 95, 96, 97
              </Typography>
            </Typography>
          </Box>
        </Box>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          📱 Casos de Uso Práticos
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>E-commerce:</strong> Identifique origem de pedidos para calcular fretes e prazos
            de entrega
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Telemarketing:</strong> Saiba antecipadamente a região do cliente para
            personalizar abordagem
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Suporte Técnico:</strong> Direcione atendimento para equipes regionais
            especializadas
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Marketing Digital:</strong> Analise distribuição geográfica para campanhas
            regionais
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Segurança Corporativa:</strong> Verifique origem de ligações para escritórios
            empresariais
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Pesquisa de Opinião:</strong> Mapeie origem de respondentes em pesquisas
            telefônicas
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🛡️ Privacidade e Dados
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Sem Armazenamento:</strong> Não guardamos números consultados ou dados pessoais
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Consulta Local:</strong> Toda verificação acontece no seu navegador, sem envio
            para servidores
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>LGPD Compliant:</strong> Totalmente conforme com a Lei Geral de Proteção de
            Dados
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Sem Rastreamento:</strong> Não coletamos informações sobre consultas realizadas
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🔧 Histórico do Sistema DDD
        </Typography>

        <Typography variant="body1" paragraph>
          O sistema DDD foi implementado no Brasil na década de 1960 pela antiga Embratel, hoje
          regulamentado pela ANATEL. Inicialmente criado para facilitar ligações interurbanas,
          tornou-se fundamental para identificação geográfica de números telefônicos.
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1">
            <strong>1960s:</strong> Implementação inicial do sistema de discagem direta
          </Typography>
          <Typography component="li" variant="body1">
            <strong>1990s:</strong> Expansão para telefonia móvel celular
          </Typography>
          <Typography component="li" variant="body1">
            <strong>2000s:</strong> Padronização com regulamentação da ANATEL
          </Typography>
          <Typography component="li" variant="body1">
            <strong>Hoje:</strong> Sistema integrado cobrindo todo território nacional
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🚨 Importante Saber
        </Typography>

        <Alert severity="warning" sx={{ mb: 2 }}>
          <Typography variant="body2">
            <strong>DDD ≠ Localização Atual:</strong> O DDD indica apenas a região de ORIGEM do
            número, não necessariamente onde a pessoa está no momento. Com a portabilidade numérica,
            números podem migrar entre operadoras mantendo o DDD original.
          </Typography>
        </Alert>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1">
            ✅ <strong>O que mostra:</strong> Estado/região de origem do número
          </Typography>
          <Typography component="li" variant="body1">
            ❌ <strong>O que NÃO mostra:</strong> Localização atual do usuário
          </Typography>
          <Typography component="li" variant="body1">
            ❌ <strong>O que NÃO mostra:</strong> Nome do proprietário do número
          </Typography>
          <Typography component="li" variant="body1">
            ❌ <strong>O que NÃO mostra:</strong> Operadora atual (devido à portabilidade)
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          💡 Dicas de Uso Profissional
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>CRM Integration:</strong> Use para enriquecer dados de clientes com informação
            regional
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Análise de Leads:</strong> Identifique regiões com maior potencial comercial
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Estratégia Regional:</strong> Adapte abordagens de vendas conforme a região
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Logística Inteligente:</strong> Otimize rotas de entrega baseadas na origem dos
            pedidos
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Segmentação de Público:</strong> Crie campanhas específicas por estado/região
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          📝 Termos de busca relacionados
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          ddd do celular, código de área brasil, consultar ddd, origem telefone, estado por ddd, ddd
          por estado, código telefônico brasil, área de cobertura ddd, discagem direta distância,
          prefixo telefone brasil, região ddd, consulta gratuita ddd, identificar origem ligação,
          ddd brasileiro, anatel ddd, mapa ddd brasil, códigos telefônicos, telefonia brasileira,
          origem chamada, verificar ddd online, ddd estados brasil, consulta rápida ddd
        </Typography>
      </Box>
    </TodoStateProvider>
  );
};

export default EncontrarDDDCelular;
