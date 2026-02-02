import { Security, Speed, Shield, Lock } from "@mui/icons-material";
import { Box, Typography, Alert, Chip, Divider } from "@mui/material";

import PageTitle from "../../../components/common/PageTitle";
import SEO from "../../../components/common/SEO";
import ToolSchema from "../../../components/common/ToolSchema";
import TodoStateProvider from "../../../context/TodoContext";
import DjangoSecretOutput from "../../../features/DjangoSecretKey/DjangoSecretOutput";
import { useDjangoSecretKey } from "../../../features/DjangoSecretKey/useDjangoSecretKey";

const GeradorDjangoSecret = () => {
  const { secretKey, copied, generateNewKey, copyToClipboard } = useDjangoSecretKey();

  return (
    <TodoStateProvider>
      <SEO
        description="Gerador de Django SECRET_KEY gratuito e seguro. Crie chaves secretas criptograficamente seguras para seus projetos Django em segundos, diretamente no navegador."
        title="Gerador de Django SECRET_KEY - Crie Chaves Seguras para Django"
        url="/seguranca/gerador-de-django-secret-key"
        imageUrl="/django-secret-key.png"
        keywords="django secret key, gerador secret key, django SECRET_KEY, chave secreta django, python django, seguranca django, gerar secret key"
      />

      <ToolSchema
        tool={{
          name: "Gerador de Django SECRET_KEY",
          description:
            "Gerador de SECRET_KEY para Django gratuito e seguro. Cria chaves secretas criptograficamente seguras de 50 caracteres seguindo o padrão oficial do Django, processadas 100% no navegador.",
          url: "/seguranca/gerador-de-django-secret-key",
          imageUrl: "/django-secret-key.png",
          category: "SecurityApplication",
          features: [
            "Padrão oficial Django (50 caracteres)",
            "Geração criptograficamente segura",
            "Processamento 100% local",
            "Nenhum dado armazenado",
            "Cópia com um clique",
            "Interface simples e rápida",
            "Gratuito e sem limites",
          ],
        }}
      />

      <Box sx={{ maxWidth: 900, mx: "auto", mb: 4 }}>
        <PageTitle>Gerador de Django SECRET_KEY</PageTitle>

        <Typography variant="h6" component="h2" sx={{ mb: 2, color: "primary.main" }}>
          🔐 Gere SECRET_KEYs Seguras para seus Projetos Django
        </Typography>

        <Typography paragraph>
          Ferramenta gratuita para gerar <strong>SECRET_KEYs criptograficamente seguras</strong>{" "}
          para projetos Django. Seguimos o padrão oficial do Django com 50 caracteres, garantindo
          máxima segurança para sua aplicação.
        </Typography>

        <Alert severity="success" sx={{ mb: 3 }}>
          <Typography variant="body2">
            <strong>🛡️ Privacidade Total:</strong> Todas as chaves são geradas 100% localmente no
            seu navegador usando algoritmos criptográficos seguros. Nenhuma chave é enviada para
            servidores, armazenada ou registrada.
          </Typography>
        </Alert>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center", mb: 3 }}>
          <Chip icon={<Lock />} label="50 Caracteres" color="primary" variant="outlined" />
          <Chip
            icon={<Security />}
            label="Criptograficamente Seguro"
            color="success"
            variant="outlined"
          />
          <Chip icon={<Speed />} label="Geração Instantânea" color="info" variant="outlined" />
          <Chip icon={<Shield />} label="100% Local" color="secondary" variant="outlined" />
        </Box>

        <DjangoSecretOutput
          secretKey={secretKey}
          copied={copied}
          onGenerate={generateNewKey}
          onCopy={copyToClipboard}
        />

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 4 }}>
          🔧 O que é a Django SECRET_KEY?
        </Typography>

        <Typography variant="body1" paragraph>
          A <strong>SECRET_KEY</strong> é uma configuração crítica de segurança do Django usada para
          assinaturas criptográficas. Ela é essencial para:
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Sessões de usuário:</strong> Protege os dados de sessão contra adulteração
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Tokens CSRF:</strong> Garante proteção contra ataques Cross-Site Request Forgery
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Reset de senha:</strong> Gera tokens seguros para recuperação de conta
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Assinaturas criptográficas:</strong> Assina cookies e mensagens de forma segura
          </Typography>
        </Typography>

        <Alert severity="error" sx={{ mb: 3 }}>
          <Typography variant="body2">
            <strong>⚠️ Importante:</strong> Executar Django com uma SECRET_KEY conhecida ou vazada
            compromete todas as proteções de segurança do framework, podendo levar a escalação de
            privilégios e vulnerabilidades de execução remota de código.
          </Typography>
        </Alert>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" component="h3" gutterBottom>
          🎯 Por que usar este Gerador?
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Padrão Oficial:</strong> Usa exatamente os mesmos caracteres e tamanho do Django
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Criptograficamente Seguro:</strong> Utiliza crypto.getRandomValues() para
            aleatoriedade verdadeira
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Zero Dependência:</strong> Funciona offline após carregar a página
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Sem Rastros:</strong> Nenhuma chave é salva ou transmitida
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Instantâneo:</strong> Gere quantas chaves quiser em segundos
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          📋 Como Usar a SECRET_KEY Gerada
        </Typography>

        <Typography variant="body1" paragraph>
          1. Clique em <strong>Gerar Nova Chave</strong> para criar uma SECRET_KEY
        </Typography>
        <Typography variant="body1" paragraph>
          2. Clique em <strong>Copiar</strong> para copiar a chave
        </Typography>
        <Typography variant="body1" paragraph>
          3. Cole no seu arquivo <code>settings.py</code> ou variável de ambiente:
        </Typography>

        <Box
          component="pre"
          sx={{
            backgroundColor: "grey.900",
            color: "grey.100",
            p: 2,
            borderRadius: 1,
            overflow: "auto",
            fontSize: "0.875rem",
            mb: 3,
          }}
        >
          {`# settings.py
SECRET_KEY = 'sua-chave-gerada-aqui'

# Ou usando variável de ambiente (recomendado)
import os
SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY')`}
        </Box>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" component="h3" gutterBottom>
          🛡️ Boas Práticas de Segurança
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            gap: 3,
            mb: 3,
          }}
        >
          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="success.main">
              ✅ Faça
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                Use variáveis de ambiente em produção
              </Typography>
              <Typography component="li" variant="body2">
                Gere uma chave única para cada ambiente
              </Typography>
              <Typography component="li" variant="body2">
                Adicione settings.py ao .gitignore
              </Typography>
              <Typography component="li" variant="body2">
                Crie um settings.py.example com chave vazia
              </Typography>
              <Typography component="li" variant="body2">
                Rotacione a chave periodicamente
              </Typography>
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="error.main">
              ❌ Evite
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                Nunca commite a SECRET_KEY no Git
              </Typography>
              <Typography component="li" variant="body2">
                Não compartilhe entre ambientes
              </Typography>
              <Typography component="li" variant="body2">
                Não use a mesma chave em dev e prod
              </Typography>
              <Typography component="li" variant="body2">
                Não use chaves curtas ou previsíveis
              </Typography>
              <Typography component="li" variant="body2">
                Não exponha em logs ou erros
              </Typography>
            </Typography>
          </Box>
        </Box>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🔍 Especificações Técnicas
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1">
            <strong>Tamanho:</strong> 50 caracteres (padrão Django)
          </Typography>
          <Typography component="li" variant="body1">
            <strong>Caracteres:</strong> a-z (minúsculas), 0-9 (números), !@#$%^&*(-_=+) (símbolos)
          </Typography>
          <Typography component="li" variant="body1">
            <strong>Entropia:</strong> ~296 bits (log2(52^50))
          </Typography>
          <Typography component="li" variant="body1">
            <strong>Algoritmo:</strong> crypto.getRandomValues() (Web Crypto API)
          </Typography>
          <Typography component="li" variant="body1">
            <strong>Compatibilidade:</strong> Django 1.4+ até Django 5.x
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          💻 Alternativas via Terminal
        </Typography>

        <Typography variant="body1" paragraph>
          Você também pode gerar uma SECRET_KEY via linha de comando:
        </Typography>

        <Box
          component="pre"
          sx={{
            backgroundColor: "grey.900",
            color: "grey.100",
            p: 2,
            borderRadius: 1,
            overflow: "auto",
            fontSize: "0.875rem",
            mb: 3,
          }}
        >
          {`# Usando Django
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"

# Usando Python puro
python -c "import secrets; print(''.join(secrets.choice('abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*(-_=+)') for _ in range(50)))"`}
        </Box>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          ❓ Perguntas Frequentes
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Posso usar a mesma chave em desenvolvimento e produção?</strong>
            <br />
            Não! Sempre use chaves diferentes para cada ambiente.
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>O que acontece se eu mudar a SECRET_KEY?</strong>
            <br />
            Sessões existentes serão invalidadas e tokens de reset de senha deixarão de funcionar.
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Com que frequência devo rotacionar a chave?</strong>
            <br />
            Rotacione imediatamente se houver suspeita de vazamento. Caso contrário, uma vez por ano
            é uma boa prática.
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>A chave gerada aqui é segura?</strong>
            <br />
            Sim! Usamos a Web Crypto API que fornece aleatoriedade criptograficamente segura.
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          📝 Termos de busca relacionados
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          django secret key generator, gerador de chave secreta django, SECRET_KEY django, gerar
          secret key python, django security, chave criptografica django, settings.py secret key,
          django configuration, python web framework security, djecrety alternativa, criar secret
          key django, django secret key online, gerador gratuito django, django seguranca, web
          crypto api, chave aleatoria django, django producao configuracao
        </Typography>
      </Box>
    </TodoStateProvider>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default GeradorDjangoSecret;
