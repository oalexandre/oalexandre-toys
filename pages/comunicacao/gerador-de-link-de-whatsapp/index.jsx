import { WhatsApp, QrCode, Link, Speed, Business, Campaign } from "@mui/icons-material";
import { Box, Typography, Alert, Chip, Divider } from "@mui/material";

import PageTitle from "../../../components/common/PageTitle";
import SEO from "../../../components/common/SEO";
import ToolSchema from "../../../components/common/ToolSchema";
import TodoStateProvider from "../../../context/TodoContext";
import Screen from "../../../features/WhatsappLink/Screens";

const GeradorLinkWhatsApp = () => {
  return (
    <TodoStateProvider>
      <SEO
        description="Gerador de Link do WhatsApp gratuito com mensagens predefinidas e QR code. Crie links personalizados para WhatsApp que nunca expiram, ideal para atendimento, marketing e vendas."
        title="Gerador de Link do WhatsApp - Crie Links com Mensagem e QR Code"
        url="/comunicacao/gerador-de-link-de-whatsapp"
        imageUrl="/whatsapp-link-generator.png"
      />

      <ToolSchema
        tool={{
          name: "Gerador de Link do WhatsApp",
          description:
            "Gerador de Link do WhatsApp gratuito com mensagens predefinidas e QR code. Crie links personalizados para WhatsApp que nunca expiram usando protocolo oficial wa.me, ideal para atendimento, marketing e vendas.",
          url: "/comunicacao/gerador-de-link-de-whatsapp",
          imageUrl: "/whatsapp-link-generator.png",
          category: "CommunicationApplication",
          features: [
            "Protocolo oficial wa.me",
            "QR code automático",
            "Mensagens predefinidas",
            "Links permanentes",
            "Geração instantânea",
            "Compatibilidade total",
            "Uso ilimitado e gratuito",
            "Interface intuitiva",
          ],
        }}
      />

      <Box sx={{ maxWidth: 900, mx: "auto", mb: 4 }}>
        <PageTitle>Gerador de Link do WhatsApp</PageTitle>

        <Typography variant="h6" component="h2" sx={{ mb: 2, color: "primary.main" }}>
          💬 Crie Links Personalizados e QR Codes para WhatsApp - Sem Expiração
        </Typography>

        <Typography paragraph>
          Ferramenta gratuita para <strong>gerar links diretos do WhatsApp</strong> com mensagens
          predefinidas e QR codes automáticos. Perfeito para atendimento ao cliente, marketing
          digital e vendas online. Links permanentes que nunca expiram.
        </Typography>

        <Alert severity="success" sx={{ mb: 3 }}>
          <Typography variant="body2">
            <strong>🔗 Links Permanentes:</strong> Nossos links usam o protocolo oficial wa.me do
            WhatsApp, garantindo funcionamento perpétuo. Use em campanhas de longo prazo sem
            preocupação com expiração ou quebra de links.
          </Typography>
        </Alert>

        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, justifyContent: "center", mb: 3 }}>
          <Chip icon={<WhatsApp />} label="Protocolo Oficial" color="success" variant="outlined" />
          <Chip icon={<QrCode />} label="QR Code Automático" color="primary" variant="outlined" />
          <Chip icon={<Link />} label="Links Permanentes" color="info" variant="outlined" />
          <Chip icon={<Speed />} label="Geração Instantânea" color="secondary" variant="outlined" />
        </Box>

        <Screen />

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 4 }}>
          🔧 Como funciona o Gerador?
        </Typography>

        <Typography variant="body1" paragraph>
          <strong>Tecnologia wa.me:</strong> Utilizamos o protocolo oficial do WhatsApp para criar
          links diretos que funcionam em qualquer dispositivo. Você insere o número, define uma
          mensagem opcional e recebe instantaneamente o link e QR code correspondente.
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🎯 Para que serve esta ferramenta?
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Atendimento ao Cliente:</strong> Crie botões "Fale Conosco" que abrem
            diretamente no WhatsApp
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Marketing Digital:</strong> Call-to-actions eficazes para redes sociais e
            campanhas
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>E-commerce:</strong> Facilite dúvidas sobre produtos com contato direto
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Restaurantes/Delivery:</strong> Simplifique pedidos com mensagens pré-definidas
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Consultoria/Serviços:</strong> Agende atendimentos com mensagens padronizadas
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Eventos/Promoções:</strong> Compartilhe via QR code em materiais impressos
          </Typography>
        </Typography>

        <Divider sx={{ my: 3 }} />

        <Typography variant="h6" component="h3" gutterBottom>
          ⚡ Características da Ferramenta
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Protocolo Oficial wa.me:</strong> Links que funcionam para sempre, sem quebrar
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>QR Code Automático:</strong> Geração instantânea para facilitar
            compartilhamento
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Mensagens Predefinidas:</strong> Configure textos que aparecem automaticamente
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Compatibilidade Total:</strong> Funciona em todos os dispositivos e
            navegadores
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Sem Limites:</strong> Gere quantos links quiser, completamente gratuito
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            ✓ <strong>Interface Simples:</strong> Processo intuitivo em poucos cliques
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          💬 Mensagens Predefinidas Inteligentes
        </Typography>

        <Typography variant="body1" paragraph>
          Configure mensagens que aparecem automaticamente no campo de texto do WhatsApp,
          economizando tempo e padronizando o atendimento. Exemplos práticos:
        </Typography>

        <Box
          sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3, mb: 3 }}
        >
          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="success.main">
              🛒 E-commerce
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                "Olá! Gostaria de saber mais sobre este produto."
              </Typography>
              <Typography component="li" variant="body2">
                "Oi! Vi seu anúncio e tenho interesse. Pode me enviar mais informações?"
              </Typography>
              <Typography component="li" variant="body2">
                "Bom dia! Gostaria de verificar a disponibilidade deste item."
              </Typography>
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="primary">
              🏢 Serviços
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                "Olá! Gostaria de agendar um atendimento."
              </Typography>
              <Typography component="li" variant="body2">
                "Oi! Preciso de um orçamento para seus serviços."
              </Typography>
              <Typography component="li" variant="body2">
                "Bom dia! Gostaria de saber mais sobre suas consultorias."
              </Typography>
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: 3, mb: 3 }}
        >
          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="secondary">
              🍕 Restaurantes
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                "Olá! Gostaria de fazer um pedido pelo delivery."
              </Typography>
              <Typography component="li" variant="body2">
                "Oi! Podem me passar o cardápio atualizado?"
              </Typography>
              <Typography component="li" variant="body2">
                "Bom dia! Gostaria de reservar uma mesa."
              </Typography>
            </Typography>
          </Box>

          <Box>
            <Typography variant="h6" component="h4" gutterBottom color="warning.main">
              🎉 Eventos
            </Typography>
            <Typography component="ul" sx={{ pl: 2, m: 0 }}>
              <Typography component="li" variant="body2">
                "Olá! Gostaria de saber mais sobre o evento."
              </Typography>
              <Typography component="li" variant="body2">
                "Oi! Como posso me inscrever no curso?"
              </Typography>
              <Typography component="li" variant="body2">
                "Bom dia! Quero informações sobre ingressos."
              </Typography>
            </Typography>
          </Box>
        </Box>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          📱 Vantagens do QR Code
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Acesso Instantâneo:</strong> Basta apontar a câmera do celular, sem digitação
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Zero Erros:</strong> Elimina erros de digitação de números de telefone
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Versatilidade:</strong> Use em cartões de visita, flyers, sites, redes sociais
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Profissionalismo:</strong> Demonstra modernidade e facilita experiência do
            cliente
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Offline Ready:</strong> QR codes funcionam sem internet para o usuário
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Compartilhamento Fácil:</strong> Salve, imprima ou compartilhe digitalmente
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🌐 Casos de Uso Empresariais
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Sites Corporativos:</strong> Botões "Fale Conosco" que abrem diretamente no
            WhatsApp
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Redes Sociais:</strong> Bio do Instagram/Facebook com link direto para
            atendimento
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Email Marketing:</strong> CTAs que levam direto para conversa no WhatsApp
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Cartões de Visita:</strong> QR codes que facilitam contato imediato
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Materiais Impressos:</strong> Flyers, outdoors e panfletos com acesso rápido
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>E-commerce:</strong> Páginas de produto com suporte direto via WhatsApp
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🔗 Por que Nossos Links Nunca Expiram?
        </Typography>

        <Typography variant="body1" paragraph>
          Utilizamos exclusivamente o protocolo oficial wa.me do WhatsApp, garantindo funcionamento
          perpétuo. Diferente de encurtadores de URL ou soluções terceirizadas, nossos links são
          diretos e permanentes.
        </Typography>

        <Alert severity="info" sx={{ mb: 3 }}>
          <Typography variant="body2">
            <strong>🛡️ Garantia de Funcionamento:</strong> Como usamos o protocolo nativo do
            WhatsApp, nossos links funcionam enquanto o WhatsApp existir. Não dependemos de serviços
            externos que podem sair do ar ou mudar suas políticas.
          </Typography>
        </Alert>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1">
            ✅ <strong>Protocolo Nativo:</strong> wa.me é oficial do WhatsApp/Meta
          </Typography>
          <Typography component="li" variant="body1">
            ✅ <strong>Sem Dependências:</strong> Não usa serviços de terceiros
          </Typography>
          <Typography component="li" variant="body1">
            ✅ <strong>Campanhas Longas:</strong> Use o mesmo link por anos sem problemas
          </Typography>
          <Typography component="li" variant="body1">
            ✅ <strong>Confiabilidade:</strong> Funciona em todos os dispositivos e países
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🛡️ Privacidade e Segurança
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Processamento Local:</strong> Links gerados no seu navegador, sem envio para
            servidores
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Sem Armazenamento:</strong> Não salvamos números de telefone ou mensagens
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>LGPD Compliant:</strong> Totalmente conforme com lei de proteção de dados
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Sem Rastreamento:</strong> Não monitoramos uso dos links gerados
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Dados Seguros:</strong> Informações não ficam armazenadas em lugar algum
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          💡 Dicas de Marketing Digital
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Call-to-Action Claro:</strong> Use textos como "Fale Conosco Agora" nos botões
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Mensagens Contextuais:</strong> Adapte mensagens predefinidas para cada campanha
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>QR Codes Estratégicos:</strong> Posicione em locais de alta visibilidade
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Bio das Redes:</strong> Coloque links do WhatsApp na bio do Instagram/Facebook
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Urgência Limitada:</strong> Use em promoções por tempo limitado
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Segmentação:</strong> Crie links diferentes para cada público ou campanha
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          🔥 Benefícios Competitivos
        </Typography>

        <Typography component="ul" sx={{ pl: 3, mb: 3 }}>
          <Typography component="li" variant="body1" paragraph>
            <strong>Redução de Atrito:</strong> Elimina barreiras entre interesse e contato
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Aumento de Conversões:</strong> Facilita jornada do cliente até o atendimento
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Atendimento Humanizado:</strong> Conversa direta, mais pessoal que email ou
            formulário
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Resposta Rápida:</strong> Notificações instantâneas no celular do atendente
          </Typography>
          <Typography component="li" variant="body1" paragraph>
            <strong>Custo Zero:</strong> Ferramenta gratuita que gera resultados profissionais
          </Typography>
        </Typography>

        <Typography variant="h6" component="h3" gutterBottom sx={{ mt: 3 }}>
          📝 Termos de busca relacionados
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          gerador link whatsapp, criar link whatsapp, whatsapp link generator, link personalizado
          whatsapp, qr code whatsapp, mensagem predefinida whatsapp, wa.me generator, link direto
          whatsapp, whatsapp business link, gerador qr whatsapp, link whatsapp marketing,
          atendimento whatsapp, whatsapp call to action, link whatsapp vendas, botão whatsapp site,
          whatsapp api link, click to chat whatsapp, whatsapp marketing digital, gerar qr code
          whatsapp, link whatsapp automático, whatsapp business api
        </Typography>
      </Box>
    </TodoStateProvider>
  );
};

export default GeradorLinkWhatsApp;
