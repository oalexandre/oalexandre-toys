import { QrCode, Download, Palette, Security, Speed, CloudOff } from "@mui/icons-material";
import { Box, Typography, Alert, Chip, Divider } from "@mui/material";

import PageTitle from "../../../components/common/PageTitle";
import SEO from "../../../components/common/SEO";
import ToolSchema from "../../../components/common/ToolSchema";
import { initialValues } from "../../../constants/popoverColorPicker";
import TodoStateProvider from "../../../context/TodoContext";
import QrCodeForm from "../../../features/QrCode/QrCodeForm";
import { useQrCodeFormControls } from "../../../features/QrCode/useQrCodeFormControls";
import { usePopoverColorPicker } from "../../../hooks/usePopoverColorPicker";

const GeradorQRCode = () => {
  const { colors, handleBlur } = usePopoverColorPicker(initialValues);
  const { codeRef, values, downloadUrl, handleChange, handleSubmit, handleReset } =
    useQrCodeFormControls(colors);

  return (
    <TodoStateProvider>
      <SEO
        description="Gerador de QR Code gratuito e personalizado que nunca expira. Crie QR codes para URLs, texto, Wi-Fi, contatos e mais. Baixe em alta qualidade PNG ou SVG instantaneamente."
        title="Gerador de QR Code - Crie QR Codes Personalizados que Nunca Expiram"
        url="/utilitario/gerador-de-qrcode"
        imageUrl="/qr-code.png"
      />

      <ToolSchema
        tool={{
          name: "Gerador de QR Code",
          description:
            "Gerador de QR Code gratuito e personalizado que nunca expira. Crie QR codes para URLs, texto, Wi-Fi, contatos e mais. Processamento local com downloads em alta qualidade PNG ou SVG instantaneamente.",
          url: "/utilitario/gerador-de-qrcode",
          imageUrl: "/qr-code.png",
          category: "UtilityApplication",
          features: [
            "QR codes que nunca expiram",
            "Totalmente personalizável",
            "Download PNG e SVG",
            "Processamento local",
            "Para URLs, texto, Wi-Fi, contatos",
            "Alta qualidade",
            "Interface intuitiva",
            "Uso ilimitado e gratuito",
          ],
        }}
      />

      <Box sx={{ maxWidth: 900, mx: "auto", mb: 4 }}>
        <PageTitle>Gerador de QR Code</PageTitle>

        <Typography variant="h6" component="h2" sx={{ mb: 2, color: "primary.main" }}>
          📱 Crie QR Codes Personalizados que Nunca Expiram - Download Gratuito
        </Typography>

        <Typography paragraph>
          Ferramenta gratuita para <strong>gerar QR codes personalizados</strong> que nunca expiram!
          Crie códigos para URLs, textos, Wi-Fi, contatos e muito mais. Processamento local,
          downloads em alta qualidade PNG/SVG e personalização total.
        </Typography>

        <Alert severity="success" sx={{ mb: 3 }}>
          <Typography variant="body2">
            <strong>⏰ Códigos Permanentes:</strong> Nossos QR codes são gerados localmente e nunca
            expiram! Diferente de outros geradores que dependem de serviços externos, nossos códigos
            funcionam para sempre, mesmo se nosso site sair do ar.
          </Typography>
        </Alert>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center", mb: 3 }}>
          <Chip icon={<QrCode />} label="Nunca Expiram" color="success" variant="outlined" />
          <Chip
            icon={<Palette />}
            label="Totalmente Personalizável"
            color="primary"
            variant="outlined"
          />
          <Chip icon={<Download />} label="PNG e SVG" color="info" variant="outlined" />
          <Chip
            icon={<Security />}
            label="Processamento Local"
            color="secondary"
            variant="outlined"
          />
        </Box>

        <QrCodeForm
          values={values}
          colors={colors}
          downloadUrl={downloadUrl}
          handleChange={handleChange}
          handleBlur={handleBlur}
          handleSubmit={handleSubmit}
          handleReset={handleReset}
        />

        <Box ref={codeRef} sx={{ "& canvas": { maxWidth: "100%" } }}></Box>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 4 }}>
          🔧 Como Funciona Nossa Tecnologia
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>Geração Local Avançada:</strong> Utilizamos bibliotecas JavaScript avançadas para
          gerar QR codes diretamente no seu navegador. Cada código é criado com algoritmos de
          correção de erro Reed-Solomon, garantindo leitura perfeita mesmo com pequenos danos.
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🎯 Tipos de QR Code Disponíveis
        </Typography>

        <Box
          sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3, mb: 3 }}
        >
          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="primary">
              🌐 Web e Digital
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                <strong>URLs e Links:</strong> Sites, redes sociais, portfólios
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Texto Simples:</strong> Mensagens, instruções, citações
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Email:</strong> Destinatário e assunto pré-definidos
              </Typography>
              <Typography component="li" variant="body2">
                <strong>SMS:</strong> Número e mensagem automática
              </Typography>
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="success.main">
              📱 Conectividade
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                <strong>Wi-Fi:</strong> Nome da rede, senha, tipo de segurança
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Contatos vCard:</strong> Telefone, email, endereço completo
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Localização GPS:</strong> Coordenadas para mapas
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Eventos:</strong> Calendário com data e horário
              </Typography>
            </Typography>
          </Box>
        </Box>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" component="h3" gutterBottom>
          ⚡ Características da Ferramenta
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Sem Dependência de Servidores:</strong> Códigos funcionam independentemente da
            nossa plataforma
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Correção de Erro Avançada:</strong> Algoritmo Reed-Solomon garante leitura
            mesmo com danos
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Personalização Total:</strong> Cores, tamanhos e formatos customizáveis
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Alta Qualidade:</strong> PNG para web e SVG vetorial para impressão
            profissional
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Sem Marca d'Água:</strong> Códigos limpos, sem logos ou propagandas
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Processamento Instantâneo:</strong> Geração em tempo real no navegador
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🚀 Casos de Uso Empresariais
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Marketing Digital:</strong> Campanhas, promoções, links para landing pages e
            redes sociais
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Restaurantes:</strong> Cardápio digital contactless, delivery, avaliações online
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Eventos:</strong> Inscrições, informações do evento, check-in automático
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Varejo/E-commerce:</strong> Informações de produtos, avaliações, suporte ao
            cliente
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Educação:</strong> Material didático, links para aulas online, recursos
            complementares
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Imobiliárias:</strong> Tours virtuais, informações do imóvel, contato direto
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🎨 Opções de Personalização
        </Typography>

        <Box
          sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3, mb: 3 }}
        >
          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="secondary">
              🎨 Visual
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                <strong>Cores Personalizadas:</strong> Foreground e background customizáveis
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Tamanhos Variados:</strong> De 100x100 até 1000x1000 pixels
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Níveis de Correção:</strong> Low, Medium, Quartile, High
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Margem Ajustável:</strong> Controle da área em branco ao redor
              </Typography>
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="warning.main">
              📁 Formatos
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                <strong>PNG:</strong> Ideal para web, redes sociais, apresentações digitais
              </Typography>
              <Typography component="li" variant="body2">
                <strong>SVG:</strong> Perfeito para impressão, escalável sem perda de qualidade
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Alta Resolução:</strong> Códigos nítidos em qualquer tamanho
              </Typography>
              <Typography component="li" variant="body2">
                <strong>Fundo Transparente:</strong> Integração fácil em qualquer design
              </Typography>
            </Typography>
          </Box>
        </Box>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          💡 Melhores Práticas para QR Codes Eficazes
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Tamanho Adequado:</strong> Mínimo 2x2cm para impressão, 150x150px para telas
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Contraste Suficiente:</strong> Cores escuras no código, fundos claros para
            máxima legibilidade
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Teste Sempre:</strong> Verifique funcionamento em diferentes dispositivos e apps
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Call-to-Action Claro:</strong> "Escaneie para acessar", "QR code do cardápio"
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Posicionamento Estratégico:</strong> Altura dos olhos, boa iluminação, fácil
            acesso
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>URL Amigável:</strong> Links curtos e descritivos funcionam melhor
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🛡️ Privacidade e Segurança
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Processamento Local:</strong> Todos os QR codes são gerados no seu navegador
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Sem Rastreamento:</strong> Não monitoramos cliques, visualizações ou
            estatísticas
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>LGPD Compliant:</strong> Totalmente conforme com a lei de proteção de dados
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Dados Não Transmitidos:</strong> Informações nunca são enviadas para servidores
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Funciona Offline:</strong> Após carregar a página, não precisa de internet
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          📊 Vantagens Competitivas
        </Typography>

        <Alert severity="info" sx={{ mb: 3 }}>
          <Typography variant="body2">
            <strong>💪 Diferencial Único:</strong> Enquanto outros geradores dependem de serviços
            externos que podem sair do ar, nossos QR codes são permanentes e funcionam
            independentemente de qualquer plataforma ou serviço online.
          </Typography>
        </Alert>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1">
            ✅ <strong>Códigos Permanentes:</strong> Funcionam para sempre, sem dependência externa
          </Typography>
          <Typography component="li" variant="body1">
            ✅ <strong>Zero Limitações:</strong> Gere quantos códigos quiser, sem restrições
          </Typography>
          <Typography component="li" variant="body1">
            ✅ <strong>Qualidade Profissional:</strong> Resolução adequada para impressão gráfica
          </Typography>
          <Typography component="li" variant="body1">
            ❌ <strong>Sem Dependências:</strong> Não precisam de nossa plataforma para funcionar
          </Typography>
          <Typography component="li" variant="body1">
            ❌ <strong>Sem Coleta de Dados:</strong> Não armazenamos informações pessoais
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🎯 Casos Específicos de Uso
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Wi-Fi para Visitantes:</strong> Compartilhe senha da rede sem revelá-la
            verbalmente
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Cartões de Visita Digitais:</strong> vCard completo com todos os dados de
            contato
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Check-in de Eventos:</strong> Código para confirmar presença automaticamente
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Avaliações Online:</strong> Link direto para Google Reviews, TripAdvisor, etc.
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Download de Apps:</strong> Link para App Store/Play Store específico da região
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Pagamentos Digitais:</strong> PIX, PayPal ou links de pagamento instantâneo
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🔍 Especificações Técnicas
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1">
            <strong>Padrão ISO/IEC 18004:</strong> Especificação internacional oficial
          </Typography>
          <Typography component="li" variant="body1">
            <strong>Capacidade de Dados:</strong> Até 4.296 caracteres alfanuméricos
          </Typography>
          <Typography component="li" variant="body1">
            <strong>Correção de Erro:</strong> Reed-Solomon com 4 níveis (7%, 15%, 25%, 30%)
          </Typography>
          <Typography component="li" variant="body1">
            <strong>Versões Suportadas:</strong> QR Code versões 1 a 40 (21x21 até 177x177)
          </Typography>
          <Typography component="li" variant="body1">
            <strong>Formatos de Saída:</strong> PNG (raster) e SVG (vetor)
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          📝 Termos de busca relacionados
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          gerador qr code, criar qr code, qr code generator, qr code gratuito, gerador codigo qr, qr
          code personalizado, qr code wifi, qr code url, qr code nunca expira, qr code download, qr
          code png svg, qr code online, codigo de barras 2d, qr scanner, quick response code,
          marketing digital qr, qr code vcard, qr code wifi password, custom qr code, free qr
          generator, qr code maker, permanent qr codes, offline qr generator, no expiry qr
        </Typography>
      </Box>
    </TodoStateProvider>
  );
};

export default GeradorQRCode;
