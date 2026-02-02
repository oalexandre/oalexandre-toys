import { Key, Security, Lock, Speed, Shield } from "@mui/icons-material";
import { Button, Typography, Box, Alert, Chip, Divider } from "@mui/material";

import PageTitle from "../../../components/common/PageTitle";
import SEO from "../../../components/common/SEO";
import ToolSchema from "../../../components/common/ToolSchema";
import TodoStateProvider from "../../../context/TodoContext";
import PasswordContainer from "../../../features/PasswordGenerator/PasswordContainer";
import PasswordOptions from "../../../features/PasswordGenerator/PasswordOptions";
import PasswordOutput from "../../../features/PasswordGenerator/PasswordOutput";
import SliderInput from "../../../features/PasswordGenerator/SliderInput";
import { usePasswordGeneratorFormControls } from "../../../features/PasswordGenerator/usePasswordGeneratorFormControls";

const GeradorSenhaSegura = () => {
  const { values, handleChange, handleSlider, handleClick, handleShowPassword } =
    usePasswordGeneratorFormControls();

  return (
    <TodoStateProvider>
      <SEO
        description="Gerador de senhas seguras gratuito que não armazena dados. Crie senhas criptograficamente fortes com letras, números e símbolos para proteger suas contas online."
        title="Gerador de Senha Segura - Crie Senhas Fortes e Criptograficamente Seguras"
        url="/seguranca/gerador-de-senha-segura"
        imageUrl="/password-generator.png"
      />

      <ToolSchema
        tool={{
          name: "Gerador de Senha Segura",
          description:
            "Gerador de senhas criptograficamente seguras que não armazena dados. Crie senhas fortes com letras, números e símbolos usando crypto.getRandomValues().",
          url: "/seguranca/gerador-de-senha-segura",
          imageUrl: "/password-generator.png",
          category: "SecurityApplication",
          features: [
            "Geração criptograficamente segura",
            "Não armazena dados do usuário",
            "Senhas customizáveis",
            "Exclusão de caracteres similares",
            "Interface intuitiva",
            "Gratuito e sem limites",
          ],
        }}
      />

      <Box sx={{ maxWidth: 900, mx: "auto", mb: 4 }}>
        <PageTitle>Gerador de Senha Segura</PageTitle>

        <Typography variant="h6" component="h2" sx={{ mb: 2, color: "primary.main" }}>
          🔐 Crie Senhas Criptograficamente Seguras - Zero Armazenamento
        </Typography>

        <Typography paragraph>
          Ferramenta gratuita para <strong>gerar senhas verdadeiramente seguras</strong> usando
          algoritmos criptográficos profissionais. Todas as senhas são criadas localmente no seu
          navegador e nunca são armazenadas ou transmitidas. Proteção máxima para suas contas.
        </Typography>

        <Alert severity="success" sx={{ mb: 3 }}>
          <Typography variant="body2">
            <strong>🛡️ Privacidade Total:</strong> Suas senhas são geradas 100% localmente no seu
            navegador usando algoritmos criptográficos seguros. Nenhuma senha é enviada para
            servidores, armazenada ou registrada. Sua segurança é nossa prioridade.
          </Typography>
        </Alert>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center", mb: 3 }}>
          <Chip
            icon={<Lock />}
            label="Criptograficamente Seguro"
            color="primary"
            variant="outlined"
          />
          <Chip icon={<Security />} label="Zero Armazenamento" color="success" variant="outlined" />
          <Chip icon={<Speed />} label="Geração Instantânea" color="info" variant="outlined" />
          <Chip icon={<Shield />} label="Máxima Proteção" color="secondary" variant="outlined" />
        </Box>

        <PasswordContainer
          top={
            <>
              <PasswordOutput
                password={values.password}
                showPassword={values.showPassword}
                handleShowPassword={handleShowPassword}
              />

              <SliderInput slider={values.slider} handleSlider={handleSlider} />
            </>
          }
          center={<PasswordOptions values={values} handleChange={handleChange} />}
          bottom={
            <Button
              fullWidth
              variant="contained"
              onClick={handleClick}
              endIcon={<Key />}
              sx={{ fontSize: 16 }}
            >
              Gerar Senha Segura
            </Button>
          }
        />

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 4 }}>
          🔧 Como Funciona Nossa Tecnologia
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>Algoritmos Criptográficos:</strong> Utilizamos o gerador de números aleatórios
          criptograficamente seguro do navegador (crypto.getRandomValues()) que atende aos padrões
          militares de segurança. Cada senha é única e matematicamente impossível de prever.
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🎯 Por que Senhas Seguras São Vitais?
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Proteção contra Ataques:</strong> Senhas fracas são quebradas em segundos por
            hackers
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Segurança Financeira:</strong> Impedem fraudes em contas bancárias e cartões de
            crédito
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Privacidade Digital:</strong> Protegem dados pessoais, fotos e conversas
            privadas
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Reputação Profissional:</strong> Evitam vazamentos de dados corporativos
            sensíveis
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Identidade Online:</strong> Impedem roubo de identidade e uso indevido de contas
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Conformidade Legal:</strong> Atendem regulamentações como LGPD e GDPR
          </Typography>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" component="h3" gutterBottom>
          ⚡ Características da Ferramenta
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Algoritmo Militar:</strong> Usa crypto.getRandomValues() padrão criptográfico
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Processamento Local:</strong> Senhas geradas 100% no seu navegador
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Customização Total:</strong> Controle completo sobre caracteres e comprimento
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Entropia Máxima:</strong> Aleatoriedade verdadeira, não pseudoaleatória
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Sem Limites:</strong> Gere quantas senhas quiser, completamente gratuito
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Funciona Offline:</strong> Não precisa de internet após carregar
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🔐 Anatomia de uma Senha Verdadeiramente Segura
        </Typography>

        <Box
          sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3, mb: 3 }}
        >
          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="success.main">
              ✅ Características Essenciais
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                <strong>16+ caracteres:</strong> Quanto maior, exponencialmente mais segura
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Maiúsculas/Minúsculas:</strong> A-Z e a-z aumentam complexidade
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Números:</strong> 0-9 adicionam camada extra de proteção
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Símbolos:</strong> !@#$%^&* tornam impossível de adivinhar
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Aleatoriedade:</strong> Sem padrões ou informações pessoais
              </Typography>
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="error.main">
              ❌ Evite Absolutamente
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                <strong>Dados pessoais:</strong> Nomes, datas, telefones
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Sequências:</strong> 123456, qwerty, abc123
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Palavras comuns:</strong> password, senha, admin
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Reutilização:</strong> Mesma senha em múltiplas contas
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Padrões simples:</strong> Substituições óbvias (@ por a)
              </Typography>
            </Typography>
          </Box>
        </Box>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🛡️ Tempo para Quebrar Senhas
        </Typography>

        <Typography variant="body1" paragraph>
          Veja quanto tempo um hacker levaria para quebrar diferentes tipos de senhas usando
          computadores modernos:
        </Typography>

        <Box
          sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3, mb: 3 }}
        >
          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="error.main">
              ⚠️ Senhas Fracas
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                <strong>6 caracteres numéricos:</strong> Instantâneo
              </Typography>
              <Typography component="li" variant="body2">
                <strong>8 caracteres simples:</strong> 8 horas
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Palavras comuns:</strong> Segundos
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Datas de nascimento:</strong> Instantâneo
              </Typography>
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="success.main">
              🛡️ Senhas Seguras
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                <strong>12 caracteres mistos:</strong> 34.000 anos
              </Typography>
              <Typography component="li" variant="body2">
                <strong>16 caracteres mistos:</strong> 1 quatrilhão de anos
              </Typography>
              <Typography component="li" variant="body2">
                <strong>20 caracteres mistos:</strong> Mais que a idade do universo
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Com símbolos:</strong> Exponencialmente mais seguras
              </Typography>
            </Typography>
          </Box>
        </Box>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          💡 Melhores Práticas de Segurança
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Gerenciador de Senhas:</strong> Use Bitwarden, 1Password, LastPass ou similar
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Autenticação 2FA:</strong> Ative sempre que possível (SMS, app, hardware key)
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Senha Única por Conta:</strong> Nunca reutilize senhas entre diferentes serviços
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Rotação Regular:</strong> Troque senhas importantes a cada 6 meses
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Monitoramento:</strong> Use HaveIBeenPwned para verificar vazamentos
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Backup Seguro:</strong> Mantenha cópias das senhas em local seguro
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          📊 Estatísticas Alarmantes sobre Senhas
        </Typography>

        <Alert severity="error" sx={{ mb: 3 }}>
          <Typography variant="body2">
            <strong>🚨 Dados Assustadores:</strong> 81% das violações de dados envolvem senhas
            fracas ou comprometidas. Bilhões de senhas são vazadas anualmente, e 65% das pessoas
            reutilizam a mesma senha em múltiplas contas.
          </Typography>
        </Alert>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1">
            <strong>81% das violações:</strong> Envolvem senhas fracas, padrão ou reutilizadas
          </Typography>
          <Typography component="li" variant="body1">
            <strong>11 bilhões de senhas:</strong> Vazadas apenas nos últimos 5 anos
          </Typography>
          <Typography component="li" variant="body1">
            <strong>65% dos usuários:</strong> Reutilizam a mesma senha em múltiplas contas
          </Typography>
          <Typography component="li" variant="body1">
            <strong>US$ 4,45 milhões:</strong> Custo médio de uma violação de dados
          </Typography>
          <Typography component="li" variant="body1">
            <strong>95% dos ataques:</strong> Poderiam ser evitados com senhas seguras + 2FA
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🔒 Casos de Uso Específicos
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Bancos/Fintechs:</strong> Senhas de 20+ caracteres com todos os tipos de
            símbolos
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Email Principal:</strong> Senha master ultra forte - é a chave de tudo
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Redes Sociais:</strong> 16+ caracteres para proteger reputação e privacidade
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Trabalho/Corporativo:</strong> Senhas que atendam políticas de segurança da
            empresa
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>E-commerce:</strong> Proteja dados de pagamento e histórico de compras
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Armazenamento em Nuvem:</strong> Senhas super fortes para Google Drive, iCloud,
            etc.
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🚨 Importante Saber
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1">
            ✅ <strong>O que fazemos:</strong> Geramos senhas criptograficamente seguras localmente
          </Typography>
          <Typography component="li" variant="body1">
            ❌ <strong>O que NÃO fazemos:</strong> Armazenar, transmitir ou registrar senhas
          </Typography>
          <Typography component="li" variant="body1">
            ❌ <strong>O que NÃO fazemos:</strong> Coletar dados pessoais ou informações
          </Typography>
          <Typography component="li" variant="body1">
            ⚠️ <strong>Responsabilidade:</strong> Você deve armazenar as senhas com segurança
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          💼 Para Profissionais de TI
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Políticas Corporativas:</strong> Use para criar senhas que atendam padrões ISO
            27001
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Contas Administrativas:</strong> Senhas de 24+ caracteres para contas
            privilegiadas
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Rotação Automatizada:</strong> Integre com scripts para rotação programada
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Auditoria de Segurança:</strong> Ferramenta aprovada para testes de penetração
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Treinamento de Equipe:</strong> Eduque colaboradores sobre senhas seguras
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          📝 Termos de busca relacionados
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          gerador senha segura, password generator, senhas fortes, senha aleatoria, gerador senha
          forte, criar senha segura, senha criptografica, gerador password, senha impossivel
          quebrar, ferramenta senha, segurança digital, proteção contas, senha unica, randomizador
          senha, gerador senha online, cybersegurança, strong password generator, secure password,
          cryptographically secure, password security, random password, entropy password, military
          grade security
        </Typography>
      </Box>
    </TodoStateProvider>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default GeradorSenhaSegura;
