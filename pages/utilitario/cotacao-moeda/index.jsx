import { CurrencyExchange, Warning, Speed, Public, Info, TrendingUp } from "@mui/icons-material";
import { Box, Typography, Alert, Chip, Divider } from "@mui/material";

import PageTitle from "../../../components/common/PageTitle";
import SEO from "../../../components/common/SEO";
import ToolSchema from "../../../components/common/ToolSchema";
import TodoStateProvider from "../../../context/TodoContext";
import Screen from "../../../features/CurrencyQuote/Screens";

const CotacaoMoeda = () => {
  return (
    <TodoStateProvider>
      <SEO
        description="Conversor de moedas online gratuito para consulta. Converte entre todas as moedas mundiais usando ExchangeRate-API. Apenas para referência - não use para transações reais."
        title="Conversor de Moedas Online - Cotação para Consulta | ExchangeRate-API"
        url="/utilitario/cotacao-moeda"
        imageUrl="/conversor-moedas.png"
      />

      <ToolSchema
        tool={{
          name: "Conversor de Moedas",
          description:
            "Conversor de moedas online gratuito para consulta. Converte entre mais de 160 moedas mundiais usando dados da ExchangeRate-API em tempo real. Exclusivamente para referência - não usar para transações financeiras.",
          url: "/utilitario/cotacao-moeda",
          imageUrl: "/conversor-moedas.png",
          category: "UtilityApplication",
          features: [
            "Mais de 160 moedas mundiais",
            "Dados em tempo real",
            "Integração ExchangeRate-API",
            "Interface intuitiva",
            "Apenas para consulta",
            "Conversão instantânea",
            "Uso gratuito",
            "Ferramenta de referência",
          ],
        }}
      />

      <Box sx={{ maxWidth: 900, mx: "auto", mb: 4 }}>
        <PageTitle>Conversor de Moedas</PageTitle>

        <Typography variant="h6" component="h2" sx={{ mb: 2, color: "primary.main" }}>
          💱 Conversor Global de Moedas - Apenas para Consulta e Referência
        </Typography>

        <Typography paragraph>
          Ferramenta gratuita para <strong>conversão de moedas mundiais</strong> usando dados da
          ExchangeRate-API. Converte entre mais de 160 moedas em tempo real.
          <strong> Exclusivamente para consulta</strong> - não deve ser usado para transações
          financeiras.
        </Typography>

        <Alert severity="warning" sx={{ mb: 3 }}>
          <Typography variant="body2">
            <strong>⚠️ Apenas para Consulta:</strong> Este conversor usa dados da ExchangeRate-API e
            serve apenas como ferramenta de referência. As cotações podem apresentar variações e NÃO
            devem ser utilizadas para transações financeiras, investimentos ou operações comerciais.
          </Typography>
        </Alert>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center", mb: 3 }}>
          <Chip
            icon={<CurrencyExchange />}
            label="160+ Moedas"
            color="primary"
            variant="outlined"
          />
          <Chip icon={<Speed />} label="Dados em Tempo Real" color="success" variant="outlined" />
          <Chip icon={<Warning />} label="Apenas Consulta" color="warning" variant="outlined" />
          <Chip icon={<Public />} label="ExchangeRate-API" color="info" variant="outlined" />
        </Box>

        <Screen />

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 4 }}>
          🔧 Como Funciona Nossa Ferramenta
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>Integração com ExchangeRate-API:</strong> Utilizamos uma API externa que agrega
          dados de câmbio de múltiplas fontes financeiras. Os dados são atualizados regularmente,
          mas podem apresentar variações em relação às cotações oficiais dos bancos centrais.
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🎯 Para que serve este conversor?
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Pesquisa e Referência:</strong> Obtenha uma estimativa aproximada de valores
            entre moedas
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Planejamento de Viagens:</strong> Calcule custos estimados em moeda local
            (sempre confirme)
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Estudos Econômicos:</strong> Análise de tendências cambiais para fins
            educacionais
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Comparação de Mercados:</strong> Compare preços de produtos entre países
            diferentes
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Educação Financeira:</strong> Entenda como funcionam as variações cambiais
            globais
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Curiosidade Cultural:</strong> Explore o valor das moedas de diferentes nações
          </Typography>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" component="h3" gutterBottom>
          ⚡ Características da Ferramenta
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Mais de 160 Moedas:</strong> Inclui moedas principais e de mercados emergentes
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Atualização Regular:</strong> Dados sincronizados com fontes internacionais
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Interface Intuitiva:</strong> Conversão rápida com troca automática de campos
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Cálculo Instantâneo:</strong> Resultado em tempo real conforme você digita
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Moedas Populares:</strong> Acesso rápido às moedas mais utilizadas globalmente
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Histórico de Conversão:</strong> Mantém últimas conversões para facilitar uso
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🌍 Moedas Suportadas por Região
        </Typography>

        <Box
          sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3, mb: 3 }}
        >
          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="primary">
              🇺🇸 Principais Globais
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                <strong>USD:</strong> Dólar Americano (moeda de reserva mundial)
              </Typography>
              <Typography component="li" variant="body2">
                <strong>EUR:</strong> Euro (união monetária europeia)
              </Typography>
              <Typography component="li" variant="body2">
                <strong>GBP:</strong> Libra Esterlina (Reino Unido)
              </Typography>
              <Typography component="li" variant="body2">
                <strong>JPY:</strong> Iene Japonês (terceira economia mundial)
              </Typography>
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="success.main">
              🇧🇷 América Latina
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                <strong>BRL:</strong> Real Brasileiro (economia líder regional)
              </Typography>
              <Typography component="li" variant="body2">
                <strong>ARS:</strong> Peso Argentino (mercado volátil)
              </Typography>
              <Typography component="li" variant="body2">
                <strong>CLP:</strong> Peso Chileno (economia estável)
              </Typography>
              <Typography component="li" variant="body2">
                <strong>MXN:</strong> Peso Mexicano (NAFTA/USMCA)
              </Typography>
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3, mb: 3 }}
        >
          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="secondary">
              🇨🇳 Ásia-Pacífico
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                <strong>CNY:</strong> Yuan Chinês (segunda economia mundial)
              </Typography>
              <Typography component="li" variant="body2">
                <strong>KRW:</strong> Won Sul-Coreano (economia tecnológica)
              </Typography>
              <Typography component="li" variant="body2">
                <strong>AUD:</strong> Dólar Australiano (commodities)
              </Typography>
              <Typography component="li" variant="body2">
                <strong>INR:</strong> Rupia Indiana (mercado emergente)
              </Typography>
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="warning.main">
              🏛️ Outros Mercados
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                <strong>CAD:</strong> Dólar Canadiano (recursos naturais)
              </Typography>
              <Typography component="li" variant="body2">
                <strong>CHF:</strong> Franco Suíço (moeda refúgio)
              </Typography>
              <Typography component="li" variant="body2">
                <strong>RUB:</strong> Rublo Russo (commodities energéticas)
              </Typography>
              <Typography component="li" variant="body2">
                <strong>ZAR:</strong> Rand Sul-Africano (mercado africano)
              </Typography>
            </Typography>
          </Box>
        </Box>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🚫 IMPORTANTE: NÃO use este conversor para
        </Typography>

        <Alert severity="error" sx={{ mb: 3 }}>
          <Typography variant="body2">
            <strong>🚨 Transações Reais Proibidas:</strong> Esta ferramenta NÃO deve ser usada para
            operações financeiras reais, investimentos ou decisões comerciais. Use apenas como
            referência educacional e sempre consulte fontes oficiais.
          </Typography>
        </Alert>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1">
            ❌ <strong>Transações Financeiras:</strong> Transferências internacionais, remessas,
            pagamentos
          </Typography>
          <Typography component="li" variant="body1">
            ❌ <strong>Operações Comerciais:</strong> Importação, exportação, contratos
            internacionais
          </Typography>
          <Typography component="li" variant="body1">
            ❌ <strong>Investimentos:</strong> Forex, trading, compra/venda de moedas
          </Typography>
          <Typography component="li" variant="body1">
            ❌ <strong>Decisões Legais:</strong> Contratos, acordos, processos judiciais
          </Typography>
          <Typography component="li" variant="body1">
            ❌ <strong>Declarações Oficiais:</strong> Imposto de renda, documentos contábeis
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🏦 Fontes Oficiais Recomendadas
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Banco Central do Brasil (BACEN):</strong> Para cotações oficiais do Real
            brasileiro
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Bancos Comerciais:</strong> Para taxas reais com spreads incluídos
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Casas de Câmbio Regulamentadas:</strong> Para operações de compra/venda física
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Corretoras Autorizadas:</strong> Para investimentos em moedas estrangeiras
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Reuters/Bloomberg:</strong> Para dados financeiros profissionais em tempo real
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Federal Reserve (Fed):</strong> Para políticas monetárias americanas oficiais
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🛡️ Como Usar com Segurança
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Apenas como Referência:</strong> Use para ter uma ideia aproximada, nunca como
            base final
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Confirme em Fontes Oficiais:</strong> Sempre valide em instituições
            regulamentadas
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Considere Spreads Bancários:</strong> Bancos cobram margens além da cotação base
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Atualização Frequente:</strong> Moedas variam constantemente ao longo do dia
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Entenda as Limitações:</strong> Não é uma ferramenta profissional de trading
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Contexto Econômico:</strong> Considere fatores políticos e econômicos globais
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          📊 Limitações da ExchangeRate-API
        </Typography>

        <Typography variant="body1" paragraph>
          A ExchangeRate-API é um serviço terceirizado que agrega dados cambiais de múltiplas
          fontes. Embora útil para consultas gerais, apresenta algumas limitações importantes:
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1">
            <strong>Variação de Fontes:</strong> Pode diferir de cotações bancárias oficiais
          </Typography>
          <Typography component="li" variant="body1">
            <strong>Sem Spreads Incluídos:</strong> Não reflete taxas comerciais reais
          </Typography>
          <Typography component="li" variant="body1">
            <strong>Atraso Temporal:</strong> Dados podem ter delay em relação ao mercado real
          </Typography>
          <Typography component="li" variant="body1">
            <strong>Disponibilidade:</strong> API pode ficar indisponível temporariamente
          </Typography>
          <Typography component="li" variant="body1">
            <strong>Precisão Limitada:</strong> Não adequada para operações de alto valor
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          📈 Fatores que Afetam Cotações
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Políticas Monetárias:</strong> Decisões de bancos centrais sobre juros
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Indicadores Econômicos:</strong> PIB, inflação, desemprego, balança comercial
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Eventos Geopolíticos:</strong> Guerras, eleições, crises diplomáticas
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Fluxos de Capital:</strong> Investimentos estrangeiros, fuga de capitais
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Commodities:</strong> Preços de petróleo, ouro, agricultura (países
            exportadores)
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Sentimento do Mercado:</strong> Percepção de risco, confiança dos investidores
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🎓 Educação Financeira: Entendendo Câmbio
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1">
            <strong>Taxa de Câmbio:</strong> Preço de uma moeda em relação a outra
          </Typography>
          <Typography component="li" variant="body1">
            <strong>Valorização/Desvalorização:</strong> Quando uma moeda fica mais cara/barata
          </Typography>
          <Typography component="li" variant="body1">
            <strong>Par Cambial:</strong> Comparação entre duas moedas (ex: USD/BRL)
          </Typography>
          <Typography component="li" variant="body1">
            <strong>Volatilidade:</strong> Medida de quanto uma moeda oscila
          </Typography>
          <Typography component="li" variant="body1">
            <strong>Reservas Internacionais:</strong> Moedas que países mantêm como garantia
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🚨 Aviso Legal Final
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1">
            ✅ <strong>O que oferecemos:</strong> Ferramenta de consulta educacional e referência
            aproximada
          </Typography>
          <Typography component="li" variant="body1">
            ❌ <strong>O que NÃO oferecemos:</strong> Aconselhamento financeiro ou dados para
            transações
          </Typography>
          <Typography component="li" variant="body1">
            ❌ <strong>Não nos responsabilizamos:</strong> Por perdas ou decisões baseadas nestes
            dados
          </Typography>
          <Typography component="li" variant="body1">
            ⚠️ <strong>Sempre consulte:</strong> Profissionais qualificados para decisões
            financeiras
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          📝 Termos de busca relacionados
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          conversor moedas, cotacao moeda, cambio moedas, exchange rate, taxa cambio, conversao
          moeda, calculadora moedas, dolar real, euro real, moeda estrangeira, cotacao dolar, cambio
          online, consulta moeda, referencia cambial, api cambio, currency converter, foreign
          exchange, forex rates, money converter, exchange rate calculator, global currencies, real
          time rates, currency comparison
        </Typography>
      </Box>
    </TodoStateProvider>
  );
};

export default CotacaoMoeda;
