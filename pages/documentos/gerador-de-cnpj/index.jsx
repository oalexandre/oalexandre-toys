import { Business, Code, Security, Store } from "@mui/icons-material";
import { Box, Typography, Alert, Chip, Divider } from "@mui/material";

import PageTitle from "../../../components/common/PageTitle";
import SEO from "../../../components/common/SEO";
import ToolSchema from "../../../components/common/ToolSchema";
import TodoStateProvider from "../../../context/TodoContext";
import Screen from "../../../features/GenerateCNPJ/Screens";

const GeradorCNPJ = () => {
  return (
    <TodoStateProvider>
      <SEO
        description="Gerador de CNPJ gratuito para testes e desenvolvimento. Gere CNPJs válidos instantaneamente para usar em formulários, testes de sistemas e desenvolvimento de aplicações empresariais."
        title="Gerador de CNPJ - Gere CNPJs Válidos para Testes"
        url="/documentos/gerador-de-cnpj"
        imageUrl="/cnpj-generator.png"
      />

      <ToolSchema
        tool={{
          name: "Gerador de CNPJ",
          description:
            "Gerador de CNPJ gratuito para testes e desenvolvimento. Gera CNPJs matematicamente válidos seguindo o algoritmo oficial da Receita Federal para uso em sistemas corporativos, e-commerce e aplicações empresariais.",
          url: "/documentos/gerador-de-cnpj",
          imageUrl: "/cnpj-generator.png",
          category: "DocumentApplication",
          features: [
            "Algoritmo oficial da Receita Federal",
            "Validação completa de dígitos verificadores",
            "Geração instantânea no navegador",
            "Formatação automática (00.000.000/0000-00)",
            "Função de cópia facilitada",
            "Sem armazenamento de dados",
            "Para desenvolvimento e testes",
            "Ideal para sistemas corporativos",
            "Suporte para e-commerce B2B",
          ],
        }}
      />

      <Box sx={{ maxWidth: 900, mx: "auto", mb: 4 }}>
        <PageTitle>Gerador de CNPJ</PageTitle>

        <Typography variant="h6" component="h2" sx={{ mb: 2, color: "primary.main" }}>
          🏢 Gerador de CNPJ Válido para Desenvolvimento Empresarial
        </Typography>

        <Typography paragraph>
          Ferramenta gratuita para gerar <strong>CNPJs matematicamente válidos</strong> seguindo o
          algoritmo oficial da Receita Federal. Ideal para testes de sistemas corporativos,
          e-commerce e aplicações empresariais.
        </Typography>

        <Alert severity="warning" sx={{ mb: 3 }}>
          <Typography variant="body2">
            <strong>⚠️ Apenas para Testes:</strong> Os CNPJs gerados são válidos algoritmicamente,
            mas não representam empresas reais. Use exclusivamente para desenvolvimento, testes de
            sistemas e estudos - nunca para cadastros oficiais ou documentos fiscais.
          </Typography>
        </Alert>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center", mb: 3 }}>
          <Chip icon={<Code />} label="Algoritmo Oficial" color="primary" variant="outlined" />
          <Chip icon={<Security />} label="Apenas Testes" color="warning" variant="outlined" />
          <Chip icon={<Business />} label="Sistemas Corporativos" color="info" variant="outlined" />
          <Chip icon={<Store />} label="E-commerce" color="success" variant="outlined" />
        </Box>

        <Screen />

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 4 }}>
          🔧 Como funciona nosso Gerador de CNPJ?
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>Algoritmo da Receita Federal:</strong> Utilizamos o mesmo algoritmo oficial para
          gerar CNPJs que passam em qualquer verificação de dígito verificador. Cada número é
          matematicamente correto e segue as regras de formação da Receita Federal.
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🎯 Para que serve esta ferramenta?
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Sistemas Corporativos:</strong> Teste formulários de cadastro empresarial e
            validações
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Desenvolvimento E-commerce:</strong> Valide cadastros de fornecedores e
            parceiros comerciais
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Sistemas de Faturamento:</strong> Crie dados de teste para NFe e documentos
            fiscais
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Testes Automatizados:</strong> Gere dados válidos para seus testes unitários e
            de integração
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Prototipagem B2B:</strong> Crie demonstrações com dados empresariais realistas
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Educação Fiscal:</strong> Aprenda sobre algoritmos de validação de documentos
            empresariais
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
            ✓ <strong>Geração Instantânea:</strong> CNPJs criados em milissegundos no seu navegador
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Sem Armazenamento:</strong> Nenhum CNPJ gerado é salvo ou enviado para
            servidores
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Formatação Automática:</strong> Resultado com pontos, barra e hífen
            (00.000.000/0000-00)
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Cópia Facilitada:</strong> Botão para copiar o CNPJ gerado instantaneamente
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
            <strong>Não são Empresas Reais:</strong> Os números não correspondem a pessoas jurídicas
            existentes
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Evite Produção:</strong> Nunca use em sistemas que vão ao ar ou bancos de dados
            reais
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Documentação Clara:</strong> Sempre identifique como dados fictícios na sua
            documentação
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Equipe Informada:</strong> Certifique-se que toda a equipe saiba que são dados
            de teste
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🔍 Entendendo o Algoritmo CNPJ
        </Typography>

        <Typography variant="body1" paragraph>
          O CNPJ (Cadastro Nacional da Pessoa Jurídica) possui 14 dígitos, sendo os dois últimos
          dígitos verificadores calculados através de um algoritmo específico da Receita Federal:
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>12 Primeiros Dígitos:</strong> Gerados aleatoriamente representando a
            identificação base
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Primeiro Dígito Verificador:</strong> Calculado usando os 12 primeiros dígitos
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Segundo Dígito Verificador:</strong> Calculado usando os 12 primeiros + o
            primeiro verificador
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Formatação Final:</strong> Aplicação da máscara XX.XXX.XXX/XXXX-XX
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🏪 Casos de Uso Específicos
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>E-commerce B2B:</strong> Teste cadastros de fornecedores, distribuidores e
            parceiros
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Sistemas ERP:</strong> Valide módulos de cadastro empresarial e fiscal
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Marketplaces:</strong> Teste onboarding de vendedores pessoa jurídica
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Fintech B2B:</strong> Valide processos de abertura de contas empresariais
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Sistemas Fiscais:</strong> Teste emissão de notas fiscais e documentos
            tributários
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🚨 Avisos Importantes
        </Typography>

        <Alert severity="error" sx={{ mb: 2 }}>
          <Typography variant="body2">
            <strong>Uso Indevido é Crime:</strong> Utilizar CNPJ de terceiros ou CNPJs falsos em
            documentos fiscais constitui crime de falsidade ideológica e sonegação fiscal.
          </Typography>
        </Alert>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1">
            ❌ <strong>NÃO use para:</strong> Emissão de notas fiscais ou documentos tributários
            reais
          </Typography>
          <Typography component="li" variant="body1">
            ❌ <strong>NÃO use para:</strong> Abertura de contas bancárias ou cadastros oficiais
          </Typography>
          <Typography component="li" variant="body1">
            ❌ <strong>NÃO use para:</strong> Contratos comerciais ou representação empresarial
          </Typography>
          <Typography component="li" variant="body1">
            ❌ <strong>NÃO use para:</strong> Fraudar sistemas ou se passar por empresa existente
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
            <strong>Ambientes Segregados:</strong> Use sempre em dev/teste, nunca em produção
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Dados de Seed:</strong> Ideal para popular bases de testes com dados
            empresariais consistentes
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Testes de Integração:</strong> Valide integrações com APIs da Receita Federal
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Documentação Técnica:</strong> Sempre documente que são CNPJs fictícios
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Validação Cruzada:</strong> Use junto com APIs de consulta para testar fluxos
            completos
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🏛️ Contexto Empresarial Brasileiro
        </Typography>

        <Typography variant="body1" paragraph>
          O CNPJ é o documento fundamental para identificação de pessoas jurídicas no Brasil. Criado
          pela Receita Federal, é obrigatório para todas as empresas e é usado em:
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1">
            <strong>Documentos Fiscais:</strong> Notas fiscais, declarações, guias de recolhimento
          </Typography>
          <Typography component="li" variant="body1">
            <strong>Contratos Comerciais:</strong> Identificação em acordos e parcerias
          </Typography>
          <Typography component="li" variant="body1">
            <strong>Operações Bancárias:</strong> Abertura de contas e transações empresariais
          </Typography>
          <Typography component="li" variant="body1">
            <strong>Cadastros Governamentais:</strong> Licitações, credenciamentos, certidões
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          📝 Termos de busca relacionados
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          gerador cnpj, cnpj valido, gerar cnpj online, cnpj para teste, validador cnpj, algoritmo
          cnpj, digito verificador cnpj, cnpj desenvolvimento, ferramenta cnpj, teste formulario
          empresarial, mock data cnpj, cnpj faker, receita federal, pessoa juridica, cadastro
          nacional, cnpj programacao, cnpj qa testing, dados teste brasil, sistema corporativo,
          e-commerce b2b
        </Typography>
      </Box>
    </TodoStateProvider>
  );
};

export default GeradorCNPJ;
