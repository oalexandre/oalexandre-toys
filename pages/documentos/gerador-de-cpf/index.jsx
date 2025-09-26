import { Code, Security, Build, School } from "@mui/icons-material";
import { Box, Typography, Alert, Chip, Divider } from "@mui/material";

import PageTitle from "../../../components/common/PageTitle";
import SEO from "../../../components/common/SEO";
import ToolSchema from "../../../components/common/ToolSchema";
import TodoStateProvider from "../../../context/TodoContext";
import Screen from "../../../features/GenerateCPF/Screens";

const GeradorCPF = () => {
  return (
    <TodoStateProvider>
      <SEO
        description="Gerador de CPF gratuito para testes e desenvolvimento. Gere CPFs válidos instantaneamente para usar em formulários, testes de sistemas e desenvolvimento de aplicações."
        title="Gerador de CPF - Gere CPFs Válidos para Testes"
        url="/documentos/gerador-de-cpf"
        imageUrl="/cpf-generator.png"
      />

      <ToolSchema
        tool={{
          name: "Gerador de CPF",
          description:
            "Gerador de CPF gratuito para testes e desenvolvimento. Gera CPFs matematicamente válidos seguindo o algoritmo oficial da Receita Federal para uso em formulários, testes de sistemas e desenvolvimento de aplicações.",
          url: "/documentos/gerador-de-cpf",
          imageUrl: "/cpf-generator.png",
          category: "DocumentApplication",
          features: [
            "Algoritmo oficial da Receita Federal",
            "Validação completa de dígitos verificadores",
            "Geração instantânea no navegador",
            "Formatação automática (000.000.000-00)",
            "Função de cópia facilitada",
            "Sem armazenamento de dados",
            "Para desenvolvimento e testes",
            "Interface intuitiva",
          ],
        }}
      />

      <Box sx={{ maxWidth: 900, mx: "auto", mb: 4 }}>
        <PageTitle>Gerador de CPF</PageTitle>

        <Typography variant="h6" component="h2" sx={{ mb: 2, color: "primary.main" }}>
          📋 Gerador de CPF Válido para Desenvolvimento
        </Typography>

        <Typography paragraph>
          Ferramenta gratuita para gerar <strong>CPFs matematicamente válidos</strong> seguindo o
          algoritmo oficial da Receita Federal. Perfeito para testes, desenvolvimento e
          prototipagem.
        </Typography>

        <Alert severity="warning" sx={{ mb: 3 }}>
          <Typography variant="body2">
            <strong>⚠️ Apenas para Testes:</strong> Os CPFs gerados são válidos algoritmicamente,
            mas não correspondem a pessoas reais. Use exclusivamente para desenvolvimento, testes de
            sistemas e estudos - nunca para cadastros oficiais.
          </Typography>
        </Alert>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center", mb: 3 }}>
          <Chip icon={<Code />} label="Algoritmo Oficial" color="primary" variant="outlined" />
          <Chip icon={<Security />} label="Apenas Testes" color="warning" variant="outlined" />
          <Chip icon={<Build />} label="Para Desenvolvedores" color="info" variant="outlined" />
          <Chip icon={<School />} label="Fins Educativos" color="success" variant="outlined" />
        </Box>

        <Screen />

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 4 }}>
          🔧 Como funciona nosso Gerador de CPF?
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>Algoritmo Oficial:</strong> Utilizamos o mesmo algoritmo de validação da Receita
          Federal para gerar CPFs que passam em qualquer verificação de dígito verificador. Cada
          número é matematicamente correto e segue as regras oficiais de formação.
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🎯 Para que serve esta ferramenta?
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Desenvolvimento de Software:</strong> Teste formulários, validações e
            integrações com APIs
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Testes Automatizados:</strong> Gere dados válidos para seus testes unitários e
            de integração
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Prototipagem:</strong> Crie mockups e demonstrações com dados realistas
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Educação:</strong> Aprenda sobre algoritmos de validação de documentos
            brasileiros
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>QA/Testing:</strong> Valide sistemas de cadastro e verificação de CPF
          </Typography>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" component="h3" gutterBottom>
          ⚡ Características da Ferramenta
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Algoritmo Certificado:</strong> Segue 100% as regras oficiais da Receita
            Federal
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Validação Completa:</strong> Todos os dígitos verificadores são calculados
            corretamente
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Geração Instantânea:</strong> Números criados em milissegundos no seu
            navegador
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Sem Armazenamento:</strong> Nenhum CPF gerado é salvo ou enviado para
            servidores
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Formatação Automática:</strong> Resultado com pontos e hífen (000.000.000-00)
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Cópia Facilitada:</strong> Botão para copiar o CPF gerado instantaneamente
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          📚 Como usar com Responsabilidade
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Apenas para Testes:</strong> Use exclusivamente em ambientes de desenvolvimento
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Não são Pessoas Reais:</strong> Os números não pertencem a cidadãos brasileiros
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Evite Produção:</strong> Nunca use em sistemas que vão ao ar ou bancos de dados
            reais
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Documente seu Uso:</strong> Deixe claro para sua equipe que são dados de teste
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🔍 Entendendo o Algoritmo CPF
        </Typography>

        <Typography variant="body1" paragraph>
          O CPF (Cadastro de Pessoas Físicas) possui 11 dígitos, sendo os dois últimos dígitos
          verificadores calculados através de um algoritmo específico:
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1">
            <strong>Primeiro Dígito:</strong> Calculado com base nos 9 primeiros números
          </Typography>
          <Typography component="li" variant="body1">
            <strong>Segundo Dígito:</strong> Calculado usando os 9 primeiros + o primeiro dígito
            verificador
          </Typography>
          <Typography component="li" variant="body1">
            <strong>Validação:</strong> Ambos os cálculos devem conferir com os últimos 2 dígitos
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🚨 Avisos Importantes
        </Typography>

        <Alert severity="error" sx={{ mb: 2 }}>
          <Typography variant="body2">
            <strong>Uso Indevido é Crime:</strong> Utilizar CPF de terceiros ou CPFs falsos em
            documentos oficiais constitui crime de falsidade ideológica (Art. 299 do Código Penal).
          </Typography>
        </Alert>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1">
            ❌ <strong>NÃO use para:</strong> Cadastros reais, compras online, abertura de contas
          </Typography>
          <Typography component="li" variant="body1">
            ❌ <strong>NÃO use para:</strong> Declaração de imposto de renda ou documentos oficiais
          </Typography>
          <Typography component="li" variant="body1">
            ❌ <strong>NÃO use para:</strong> Fraudar sistemas ou se passar por outra pessoa
          </Typography>
          <Typography component="li" variant="body1">
            ✅ <strong>USE apenas para:</strong> Desenvolvimento, testes, estudos e prototipagem
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          💡 Dicas para Desenvolvedores
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Ambientes Separados:</strong> Use sempre em desenvolvimento/homologação, nunca
            em produção
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Dados de Seed:</strong> Ideal para popular bancos de dados de teste com dados
            consistentes
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Testes Unitários:</strong> Garante que suas validações de CPF estão funcionando
            corretamente
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Documentação:</strong> Sempre documente que são dados fictícios nos seus
            projetos
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          📝 Termos de busca relacionados
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          gerador cpf, cpf valido, gerar cpf online, cpf para teste, validador cpf, algoritmo cpf,
          digito verificador, cpf desenvolvimento, ferramenta cpf, teste formulario, mock data cpf,
          cpf faker, receita federal algoritmo, validacao cpf, cpf programacao, cpf qa testing,
          dados teste brasil
        </Typography>
      </Box>
    </TodoStateProvider>
  );
};

export default GeradorCPF;
