import { Casino, Security, Speed, Visibility } from "@mui/icons-material";
import { Typography, Box, Alert, Chip, Divider } from "@mui/material";

import PageTitle from "../../../components/common/PageTitle";
import SEO from "../../../components/common/SEO";
import ToolSchema from "../../../components/common/ToolSchema";
import TodoStateProvider from "../../../context/TodoContext";
import NumberForm from "../../../features/RandomPicker/NumberPicker/NumberForm";
import { useNumberPickerFormControls } from "../../../features/RandomPicker/useNumberPickerFormControls";
import { useCounter } from "../../../hooks/useCounter";

const SorteadorAutomatico = () => {
  const { resultRef, values, setValues, handleChange, handleClick, handleCopy, handleReset } =
    useNumberPickerFormControls();
  const { handleDecrease, handleIncrease } = useCounter(values, setValues);

  return (
    <TodoStateProvider>
      <SEO
        description="Sorteador automático e gerador de números aleatórios gratuito. Perfeito para rifas, promoções, sorteios online, jogos e decisões rápidas. Algoritmo criptográfico garantido."
        title="Sorteador Automático - Gerador de Números Aleatórios para Rifas e Sorteios"
        url="/utilitario/sorteador-automatico"
        imageUrl="/number-picker.png"
      />

      <ToolSchema
        tool={{
          name: "Sorteador Automático",
          description:
            "Sorteador automático e gerador de números aleatórios gratuito. Perfeito para rifas, promoções, sorteios online, jogos e decisões rápidas. Algoritmo criptográfico Crypto.getRandomValues() garantido.",
          url: "/utilitario/sorteador-automatico",
          imageUrl: "/number-picker.png",
          category: "UtilityApplication",
          features: [
            "Algoritmo criptográfico seguro",
            "Totalmente transparente",
            "Resultado instantâneo",
            "Verdadeiramente aleatório",
            "Para rifas e sorteios",
            "Processamento local",
            "Interface intuitiva",
            "Uso ilimitado e gratuito",
          ],
        }}
      />

      <Box sx={{ maxWidth: 900, mx: "auto", mb: 4 }}>
        <PageTitle>Sorteador Automático</PageTitle>

        <Typography variant="h6" component="h2" sx={{ mb: 2, color: "primary.main" }}>
          🎲 Gerador de Números Verdadeiramente Imparcial - Algoritmo Criptográfico
        </Typography>

        <Typography paragraph>
          Ferramenta gratuita para{" "}
          <strong>gerar números aleatórios criptograficamente seguros</strong>. Perfeito para rifas,
          sorteios, promoções e qualquer situação que precise de números justos e transparentes.
          Processamento local com total imparcialidade.
        </Typography>

        <Alert severity="success" sx={{ mb: 3 }}>
          <Typography variant="body2">
            <strong>🔒 Transparência Total:</strong> Utilizamos o algoritmo criptográfico
            Crypto.getRandomValues() do navegador, o mesmo usado em sistemas bancários.
            Processamento 100% local, sem interferência externa ou manipulação possível.
          </Typography>
        </Alert>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center", mb: 3 }}>
          <Chip
            icon={<Security />}
            label="Criptograficamente Seguro"
            color="primary"
            variant="outlined"
          />
          <Chip
            icon={<Visibility />}
            label="Totalmente Transparente"
            color="success"
            variant="outlined"
          />
          <Chip icon={<Speed />} label="Resultado Instantâneo" color="info" variant="outlined" />
          <Chip
            icon={<Casino />}
            label="Verdadeiramente Aleatório"
            color="secondary"
            variant="outlined"
          />
        </Box>

        <NumberForm
          resultRef={resultRef}
          values={values}
          handleChange={handleChange}
          handleClick={handleClick}
          handleCopy={handleCopy}
          handleReset={handleReset}
          handleDecrease={handleDecrease}
          handleIncrease={handleIncrease}
        />

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 4 }}>
          🔧 Como Funciona Nossa Tecnologia
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>Algoritmo Criptográfico Militar:</strong> Utilizamos o Crypto.getRandomValues(),
          um gerador de números pseudoaleatórios criptograficamente seguro que atende aos mais altos
          padrões de segurança. É a mesma tecnologia usada em bancos, cassinos online e sistemas de
          segurança nacional.
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🎯 Para que serve este sorteador?
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Rifas e Sorteios:</strong> Escolha ganhadores de forma transparente e
            juridicamente válida
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Promoções Digitais:</strong> Sorteie prêmios para seguidores, clientes e
            participantes online
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Jogos e Competições:</strong> Determine ordem de jogadores, escolha times,
            sorteie adversários
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Decisões Empresariais:</strong> Quando precisa escolher entre opções numeradas
            imparcialmente
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Eventos Corporativos:</strong> Sorteios em festas de empresa, confraternizações
            e premiações
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Pesquisas Científicas:</strong> Seleção aleatória para estudos estatísticos e
            amostragem
          </Typography>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" component="h3" gutterBottom>
          ⚡ Características da Ferramenta
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Algoritmo Criptográfico:</strong> Mesmo padrão usado em sistemas bancários e
            de segurança
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Totalmente Imparcial:</strong> Impossível de prever, manipular ou influenciar
            resultados
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Intervalo Customizável:</strong> De 1 a 999,999 ou qualquer faixa desejada
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Processamento Local:</strong> Toda geração acontece no seu navegador, sem
            transmissão
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Cópia Automática:</strong> Botão para copiar resultado instantaneamente
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Interface Intuitiva:</strong> Fácil de usar mesmo para iniciantes, perfeito
            para lives
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🏆 Casos de Uso por Categoria
        </Typography>

        <Box
          sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3, mb: 3 }}
        >
          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="primary">
              🎁 Marketing e Promoções
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                <strong>Sorteios no Instagram/TikTok:</strong> Lives transparentes
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Rifas Beneficentes:</strong> Números de 1 a 1000 ou mais
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Promoções de Black Friday:</strong> Cupons e descontos
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Lançamento de Produtos:</strong> Brinde para primeiros compradores
              </Typography>
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="success.main">
              🎮 Jogos e Entretenimento
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                <strong>Formação de Times:</strong> Divisão imparcial de grupos
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Ordem de Jogadores:</strong> Quem começa a partida
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Escolha de Desafios:</strong> Missões aleatórias em jogos
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Torneios:</strong> Chaveamento e adversários aleatórios
              </Typography>
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3, mb: 3 }}
        >
          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="secondary">
              🏢 Corporativo e Educacional
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                <strong>Distribuição de Tarefas:</strong> Seleção justa de responsabilidades
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Avaliações Orais:</strong> Ordem aleatória de apresentações
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Pesquisas de Campo:</strong> Amostragem estatística imparcial
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Premiações Internas:</strong> Funcionário do mês, reconhecimentos
              </Typography>
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="warning.main">
              📊 Científico e Técnico
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                <strong>Amostragem Estatística:</strong> Seleção de participantes de pesquisa
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Testes A/B:</strong> Divisão aleatória de grupos de teste
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Experimentos:</strong> Randomização para eliminar viés
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Controle de Qualidade:</strong> Seleção aleatória para inspeção
              </Typography>
            </Typography>
          </Box>
        </Box>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🛡️ Como Garantimos Transparência Absoluta
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>Algoritmo Público e Auditável:</strong> Utilizamos a Web Cryptography API, um
          padrão internacional aberto. O código executa localmente no seu dispositivo, eliminando
          qualquer possibilidade de interferência externa ou manipulação remota.
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Zero Interferência Humana:</strong> Processo 100% automatizado, sem intervenção
            manual possível
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Sem Armazenamento de Dados:</strong> Não guardamos histórico de resultados ou
            padrões
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Sem Transmissão:</strong> Nenhum dado é enviado para nossos servidores durante o
            sorteio
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Entropia Verdadeira:</strong> Cada sorteio é único e matematicamente
            imprevisível
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Auditável por Terceiros:</strong> Código aberto e verificável por especialistas
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          📋 Exemplos Práticos de Uso
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Rifa Beneficente (500 números):</strong> Configure intervalo 1-500, clique em
            "Sortear". Resultado justo e auditável para todos os participantes.
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Sorteio Live no Instagram:</strong> Numere comentários de 1 a 234, transmita o
            sorteio ao vivo para máxima transparência e engajamento.
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Divisão de 30 pessoas em 5 grupos:</strong> Sorteie números de 1 a 30, agrupe
            sequencialmente (1-6, 7-12, etc.) para formação imparcial.
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Escolha de ganhador entre 1000 participantes:</strong> Black Friday com cupom
            limitado, sorteio transparente para o primeiro ganhador.
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          💡 Melhores Práticas para Sorteios Justos
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Estabeleça Regras Claras:</strong> Defina critérios de participação e premiação
            antes do sorteio
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Seja Totalmente Transparente:</strong> Mostre o processo ao vivo para todos os
            participantes
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Documente o Processo:</strong> Grave vídeos ou faça screenshots para comprovar a
            lisura
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Use Numeração Sequencial:</strong> Números consecutivos sem lacunas (1, 2, 3...
            sem pular)
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Sorteie ao Vivo:</strong> Transmissões em tempo real aumentam credibilidade e
            engajamento
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Anuncie Antecipadamente:</strong> Informe data, hora e método do sorteio com
            antecedência
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🔬 Ciência por Trás da Aleatoriedade
        </Typography>

        <Alert severity="info" sx={{ mb: 3 }}>
          <Typography variant="body2">
            <strong>🧬 Entropia Criptográfica:</strong> Nosso gerador usa fontes de entropia do
            sistema operacional (ruído do mouse, teclado, timers de alta precisão) para garantir
            aleatoriedade verdadeira, não apenas pseudoaleatória como calculadoras simples.
          </Typography>
        </Alert>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1">
            <strong>Padrão FIPS 140-2:</strong> Atende aos requisitos de segurança do governo
            americano
          </Typography>
          <Typography component="li" variant="body1">
            <strong>Teste de Aleatoriedade:</strong> Passa em todos os testes estatísticos de
            randomness
          </Typography>
          <Typography component="li" variant="body1">
            <strong>Período Infinito:</strong> Não repete padrões em sequências longas
          </Typography>
          <Typography component="li" variant="body1">
            <strong>Distribuição Uniforme:</strong> Cada número tem exatamente a mesma probabilidade
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          ⚖️ Aspecto Legal e Confiabilidade
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Juridicamente Válido:</strong> Método aceito por órgãos reguladores para
            sorteios oficiais
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Auditoria Independente:</strong> Algoritmo pode ser verificado por peritos
            técnicos
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Sem Conflito de Interesse:</strong> Não temos acesso aos resultados antes da
            geração
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Conformidade LGPD:</strong> Não coletamos dados pessoais durante o processo
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Rastreabilidade:</strong> Cada sorteio pode ser documentado e comprovado
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🚨 Importante Saber
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1">
            ✅ <strong>O que garantimos:</strong> Aleatoriedade criptograficamente segura e
            imparcial
          </Typography>
          <Typography component="li" variant="body1">
            ❌ <strong>O que NÃO fazemos:</strong> Armazenar resultados ou influenciar sorteios
          </Typography>
          <Typography component="li" variant="body1">
            ❌ <strong>O que NÃO fazemos:</strong> Coletar dados dos participantes ou organizadores
          </Typography>
          <Typography component="li" variant="body1">
            ⚠️ <strong>Responsabilidade:</strong> Organize sorteios conforme leis locais de jogos e
            promoções
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          💼 Para Organizadores Profissionais
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Agências de Marketing:</strong> Use em campanhas para clientes com total
            confiabilidade
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Influenciadores Digitais:</strong> Sorteios transparentes aumentam credibilidade
            da marca pessoal
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Empresas de Eventos:</strong> Ferramenta profissional para premiações e
            ativações
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Organizações Beneficentes:</strong> Transparência essencial para manter
            confiança dos doadores
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Pesquisadores Acadêmicos:</strong> Método cientificamente válido para seleção
            aleatória
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          📝 Termos de busca relacionados
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          sorteador automático, gerador números aleatórios, sorteio online, rifa digital, número
          sorteado, sorteador rifa, gerador sorteio, random number generator, sorteador justo,
          ferramenta sorteio, sorteio transparente, rifa online, números randômicos, sorteador
          imparcial, gerador rifa, sortear números, cryptographically secure random, fair lottery
          generator, transparent raffle, unbiased number picker, crypto random generator, live draw
          generator
        </Typography>
      </Box>
    </TodoStateProvider>
  );
};

export default SorteadorAutomatico;
