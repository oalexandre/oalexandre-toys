import { VerifiedUser, Speed, Security, CheckCircle } from "@mui/icons-material";
import { Box, Typography, Alert, Chip, Divider } from "@mui/material";

import PageTitle from "../../../components/common/PageTitle";
import SEO from "../../../components/common/SEO";
import ToolSchema from "../../../components/common/ToolSchema";
import TodoStateProvider from "../../../context/TodoContext";
import Screen from "../../../features/ValidateCPF-CNPJ/Screens";

const ValidadorCPFCNPJ = () => {
  return (
    <TodoStateProvider>
      <SEO
        description="Validador de CPF e CNPJ online gratuito. Verifique se um CPF ou CNPJ é válido instantaneamente com algoritmos oficiais da Receita Federal. Ferramenta essencial para desenvolvedores."
        title="Validador de CPF e CNPJ Online - Verificador Gratuito"
        url="/documentos/validador-de-cpf-e-cnpj"
        imageUrl="/cpf-cnpj-validator.png"
      />

      <ToolSchema
        tool={{
          name: "Validador de CPF e CNPJ",
          description:
            "Validador de CPF e CNPJ online gratuito. Verifique se um CPF ou CNPJ é válido instantaneamente usando algoritmos oficiais da Receita Federal. Processamento local sem armazenamento de dados.",
          url: "/documentos/validador-de-cpf-e-cnpj",
          imageUrl: "/cpf-cnpj-validator.png",
          category: "DocumentApplication",
          features: [
            "Algoritmos oficiais da Receita Federal",
            "Validação instantânea",
            "Processamento local no navegador",
            "100% privado e seguro",
            "Aceita formatação ou números puros",
            "Feedback visual claro",
            "Funciona offline",
            "Uso ilimitado e gratuito",
          ],
        }}
      />

      <Box sx={{ maxWidth: 900, mx: "auto", mb: 4 }}>
        <PageTitle>Validador de CPF e CNPJ</PageTitle>

        <Typography variant="h6" component="h2" sx={{ mb: 2, color: "primary.main" }}>
          ✅ Validador Oficial de CPF e CNPJ - Verificação Instantânea
        </Typography>

        <Typography paragraph>
          Ferramenta gratuita para <strong>validar CPFs e CNPJs</strong> usando os algoritmos
          oficiais da Receita Federal. Verificação instantânea, segura e sem armazenamento de dados.
        </Typography>

        <Alert severity="info" sx={{ mb: 3 }}>
          <Typography variant="body2">
            <strong>🔒 Total Privacidade:</strong> A validação é feita localmente no seu navegador.
            Nenhum CPF ou CNPJ digitado é enviado para nossos servidores ou armazenado. Seus dados
            ficam 100% seguros e privados.
          </Typography>
        </Alert>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center", mb: 3 }}>
          <Chip
            icon={<VerifiedUser />}
            label="Algoritmo Oficial"
            color="primary"
            variant="outlined"
          />
          <Chip icon={<Speed />} label="Validação Instantânea" color="success" variant="outlined" />
          <Chip icon={<Security />} label="100% Privado" color="info" variant="outlined" />
          <Chip icon={<CheckCircle />} label="Sem Cadastro" color="secondary" variant="outlined" />
        </Box>

        <Screen />

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 4 }}>
          🔧 Como funciona nosso Validador?
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>Algoritmos da Receita Federal:</strong> Utilizamos os mesmos algoritmos oficiais
          usados pela Receita Federal para calcular e verificar os dígitos verificadores. A
          validação é matematicamente precisa e segue as regras oficiais brasileiras.
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🎯 Para que serve este validador?
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Desenvolvimento Web:</strong> Valide formulários em tempo real e melhore UX
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Sistemas Empresariais:</strong> Verifique cadastros de clientes e fornecedores
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>E-commerce:</strong> Valide dados de checkout e cadastro antes de processar
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Auditoria de Dados:</strong> Verifique qualidade de bases de dados existentes
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Integração de APIs:</strong> Teste fluxos de validação com APIs externas
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Educação Técnica:</strong> Aprenda sobre algoritmos de validação brasileiros
          </Typography>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" component="h3" gutterBottom>
          ⚡ Características da Ferramenta
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Algoritmo Certificado:</strong> 100% compatível com as regras da Receita
            Federal
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Validação Instantânea:</strong> Resultado em milissegundos, sem demora
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Privacidade Total:</strong> Processamento local, nada é enviado para
            servidores
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Flexibilidade:</strong> Aceita números com ou sem formatação (pontos/hífen)
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Feedback Visual:</strong> Indicação clara de válido/inválido com cores
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Uso Ilimitado:</strong> Sem cadastro, sem limites, completamente gratuito
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          📚 Entendendo a Validação de CPF
        </Typography>

        <Typography variant="body1" paragraph>
          O CPF (Cadastro de Pessoa Física) possui 11 dígitos onde os dois últimos são dígitos
          verificadores calculados a partir dos 9 primeiros:
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Primeiro Dígito:</strong> Soma ponderada dos primeiros 9 dígitos (peso 10 a 2)
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Segundo Dígito:</strong> Inclui o primeiro dígito verificador no cálculo
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Verificações Extras:</strong> Rejeita sequências como 000.000.000-00 e
            111.111.111-11
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Formato Aceito:</strong> 000.000.000-00 ou 00000000000 (com/sem formatação)
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🏢 Entendendo a Validação de CNPJ
        </Typography>

        <Typography variant="body1" paragraph>
          O CNPJ (Cadastro Nacional da Pessoa Jurídica) possui 14 dígitos com algoritmo de validação
          mais complexo que o CPF:
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Sequência de Pesos:</strong> Usa multiplicação por 5,4,3,2,9,8,7,6,5,4,3,2
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Primeiro Dígito:</strong> Calculado com base nos primeiros 12 dígitos
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Segundo Dígito:</strong> Inclui os 12 dígitos originais + o primeiro verificador
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Formato Aceito:</strong> 00.000.000/0000-00 ou 00000000000000 (com/sem
            formatação)
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          💡 Casos de Uso Práticos
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Formulários Web:</strong> Implemente validação em tempo real para melhor UX
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Sistemas CRM:</strong> Valide dados de leads e clientes antes de salvar
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Processamento de Pagamentos:</strong> Verifique documentos antes de cobranças
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Campanhas de Marketing:</strong> Limpe bases de dados para melhor deliverability
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Compliance:</strong> Garanta qualidade de dados para auditorias
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🛡️ Segurança e Privacidade
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Processamento Local:</strong> Toda validação acontece no seu navegador
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Sem Armazenamento:</strong> Nenhum CPF/CNPJ é salvo ou enviado para servidores
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Sem Logs:</strong> Não registramos ou rastreamos documentos validados
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>LGPD Compliant:</strong> Total conformidade com a Lei Geral de Proteção de Dados
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Funciona Offline:</strong> Após carregar, não precisa de internet para validar
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🔍 Diferenças entre CPF e CNPJ
        </Typography>

        <Typography variant="body1" paragraph>
          Embora ambos sejam documentos da Receita Federal, têm propósitos e estruturas diferentes:
        </Typography>

        <Box
          sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3, mb: 3 }}
        >
          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="primary">
              📋 CPF (Pessoa Física)
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                11 dígitos (000.000.000-00)
              </Typography>
              <Typography component="li" variant="body2">
                Para pessoas físicas
              </Typography>
              <Typography component="li" variant="body2">
                Algoritmo mais simples
              </Typography>
              <Typography component="li" variant="body2">
                Usado para IR, compras, serviços
              </Typography>
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="secondary">
              🏢 CNPJ (Pessoa Jurídica)
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                14 dígitos (00.000.000/0000-00)
              </Typography>
              <Typography component="li" variant="body2">
                Para empresas e organizações
              </Typography>
              <Typography component="li" variant="body2">
                Algoritmo mais complexo
              </Typography>
              <Typography component="li" variant="body2">
                Usado para NFe, contratos, operações
              </Typography>
            </Typography>
          </Box>
        </Box>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🚨 Importante Saber
        </Typography>

        <Alert severity="warning" sx={{ mb: 2 }}>
          <Typography variant="body2">
            <strong>Validação ≠ Existência:</strong> Um CPF ou CNPJ pode ser matematicamente válido
            mas não existir oficialmente. Nossa ferramenta verifica apenas se os dígitos
            verificadores estão corretos, não se o documento foi realmente emitido pela Receita
            Federal.
          </Typography>
        </Alert>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1">
            ✅ <strong>O que validamos:</strong> Estrutura matemática e dígitos verificadores
          </Typography>
          <Typography component="li" variant="body1">
            ❌ <strong>O que NÃO validamos:</strong> Se o documento existe na Receita Federal
          </Typography>
          <Typography component="li" variant="body1">
            ❌ <strong>O que NÃO validamos:</strong> Se pertence a uma pessoa/empresa específica
          </Typography>
          <Typography component="li" variant="body1">
            ❌ <strong>O que NÃO validamos:</strong> Status ativo/inativo na Receita Federal
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          💻 Para Desenvolvedores
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Validação Client-Side:</strong> Use nossa lógica como referência para
            implementar validação JavaScript
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>APIs de Consulta:</strong> Para verificar existência real, use APIs da Receita
            Federal
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Experiência do Usuário:</strong> Implemente feedback visual imediato em
            formulários
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Validação Dupla:</strong> Combine validação local com verificação de existência
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          📝 Termos de busca relacionados
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          validador cpf, validador cnpj, verificar cpf online, verificar cnpj online, cpf valido,
          cnpj valido, checar cpf, checar cnpj, validar documento brasil, algoritmo validacao cpf,
          algoritmo cnpj, digito verificador, receita federal, cadastro pessoa fisica, cadastro
          pessoa juridica, ferramenta cpf cnpj, validador gratuito, verificador documentos, cpf cnpj
          checker, documento brasileiro, validacao tempo real, formulario validacao, javascript cpf
          cnpj
        </Typography>
      </Box>
    </TodoStateProvider>
  );
};

export async function getStaticProps() {
  return { props: {} };
}

export default ValidadorCPFCNPJ;
