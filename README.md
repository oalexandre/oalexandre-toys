# oAlexandre Toys (Antigo Aupi Tools)

🧸 **Ferramentas Práticas que Você Realmente Precisa**

Coleção de ferramentas online gratuitas criadas para resolver problemas do dia a dia - de geração de senhas seguras até validação de documentos brasileiros.

## 🎯 Sobre o Projeto

**oAlexandre Toys** nasceu como um projeto de treino em Next.js na minha antiga empresa e com contribuição de outras pessoas, sem pretensão além de praticar e aprender. A ideia era treinar o framework enquanto construía ferramentas que precisávamos no dia a dia - como gerar senhas seguras, validar CPF/CNPJ ou criar links do WhatsApp.

Por consequência, as ferramentas acabaram sendo realmente úteis e funcionais, então decidi colocar no ar para que outras pessoas pudessem se beneficiar também. É um projeto simples, feito com carinho e foco total na privacidade - tudo funciona localmente no navegador.

🌐 **Acesse em**: [toys.oalexandre.com.br](https://toys.oalexandre.com.br)

> 💭 *"Não tem a pretensão de ser nada além de um treino de Next.js, mas acabou sendo útil e por isso foi ao ar."*

## 🚀 Ferramentas Disponíveis

### 🔐 **Segurança**
- **Gerador de Senhas Seguras**: Criação criptograficamente segura usando `crypto.getRandomValues()`
- **Consulta de IP Público**: Descubra seu IP externo instantaneamente

### 📱 **Comunicação**
- **Gerador de Links WhatsApp**: Links permanentes com mensagens predefinidas e QR codes
- **Consulta DDD**: Identifique estados brasileiros por código DDD

### 📄 **Documentos**
- **Gerador de CPF**: Números válidos para testes e desenvolvimento
- **Gerador de CNPJ**: Documentos corporativos para sistemas B2B
- **Validador CPF/CNPJ**: Verificação oficial com algoritmos da Receita Federal

### 🛠️ **Utilitários**
- **Gerador de QR Code**: Códigos que nunca expiram, suporte a múltiplos formatos
- **Sorteador Automático**: Números aleatórios criptograficamente seguros
- **Conversor de Moedas**: 160+ moedas mundiais com dados em tempo real

## 💻 Stack Tecnológica

- **Framework**: Next.js 15 (Pages Router, SSG)
- **UI Library**: React 18.2.0
- **Design System**: Material-UI (MUI) com tokens próprios; sistema documentado em `DESIGN.md`, produto em `PRODUCT.md`, convenções em `CLAUDE.md`
- **Styling**: Emotion/CSS-in-JS
- **PWA**: next-pwa com Service Workers
- **Analytics**: Google Analytics 4
- **Code Quality**: ESLint + Prettier
- **SEO**: Schema.org structured data
- **Runtime**: Node.js 20 ou superior

## 📦 Como Executar

### Pré-requisitos
- Node.js 20 ou superior
- npm

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/oalexandre/oalexandre-toys.git
   cd oalexandre-toys
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   ```bash
   # Copie o arquivo de exemplo
   cp .env.example .env.local

   # Edite .env.local e adicione suas chaves
   # NEXT_PUBLIC_GA_ID=seu-google-analytics-id
   ```

4. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

5. Acesse o projeto em [http://localhost:3000](http://localhost:3000)

## 📜 Scripts Disponíveis

### 🔧 **Desenvolvimento**
```bash
npm run dev          # Servidor de desenvolvimento na porta 3000
npm run build        # Build de produção otimizado
npm run start        # Inicia servidor de produção
```

### 🎨 **Qualidade de Código**
```bash
npm run lint         # Verifica problemas no código
npm run lint:fix     # Corrige problemas automaticamente
npm run lint:strict  # Análise rigorosa (zero warnings)
npm run format       # Formata código com Prettier
npm run format:check # Verifica formatação sem alterar
npm run type-check   # Verifica tipos TypeScript
npm run code-quality # Executa todos os checks de qualidade
npm run fix-all      # Corrige lint + formatação de uma vez
```

### 🚀 **Deploy**
```bash
npm run deploy      # Deploy de preview na Vercel (usa npx vercel)
npm run prod        # Deploy de produção na Vercel
```

## 🌐 Produção

O projeto está hospedado e disponível em:
- **URL Principal**: [toys.oalexandre.com.br](https://toys.oalexandre.com.br)
- **URL Vercel**: [oalexandre-toys.vercel.app](https://oalexandre-toys.vercel.app)

### Variáveis de Ambiente para Deploy

Para deploy na Vercel ou outro serviço, configure as seguintes variáveis:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX  # ID do Google Analytics
```

## 🗂️ Estrutura do Código

```
constants/tools.js   # Catálogo único das ferramentas (nome, rota, categoria, ícone)
lib/                 # Lógica pura, sem React (senha, CPF/CNPJ, DDD, sorteio)
features/<tool>/     # Componente interativo de cada ferramenta
components/tool/     # ToolPage (template com breadcrumb, FAQ, schema e relacionadas)
components/layout/   # Header, Footer e Layout
pages/               # Uma pasta por rota; cada página só escreve texto e FAQ
```

Para adicionar uma ferramenta: registre em `constants/tools.js`, crie o componente em
`features/`, e a página em `pages/<categoria>/<slug>/index.jsx` usando `ToolPage`.
Menu, rodapé, home, sitemap e ferramentas relacionadas passam a incluí-la sozinhos.

## 🎯 **Características Técnicas**

### 🔒 **Privacidade & Segurança**
- **Processamento 100% Local**: Todas as operações executam no navegador
- **Zero Armazenamento**: Nenhum dado pessoal é salvo ou transmitido
- **LGPD Compliant**: Totalmente conforme com lei de proteção de dados
- **Criptografia Segura**: Uso de `crypto.getRandomValues()` para aleatoriedade

### ⚡ **Performance & UX**
- **PWA Completo**: Instalável e funciona offline
- **SEO**: title e description por página, canonical, Open Graph, sitemap e schema.org (SoftwareApplication, BreadcrumbList, FAQPage)
- **Responsivo**: Design adaptativo para todos os dispositivos
- **Acessibilidade**: ARIA labels e navegação semântica
- **Analytics**: Rastreamento de uso com Google Analytics 4

### 🛠️ **Qualidade de Código**
- **ESLint**: Configuração profissional com regras customizadas
- **Prettier**: Formatação automática e consistente
- **TypeScript**: Tipagem opcional para melhor manutenibilidade
- **Import Organization**: Imports organizados automaticamente

## 🤝 Como Contribuir

### 1. **Setup do Ambiente**
```bash
git clone https://github.com/oalexandre/oalexandre-toys.git
cd oalexandre-toys
npm install
npm run dev
```

### 2. **Padrões de Código**
```bash
# Antes de commitar, sempre execute:
npm run fix-all        # Corrige formatação e lint
npm run code-quality   # Verifica qualidade geral
```

### 3. **Fluxo de Contribuição**
1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Execute `npm run fix-all` antes de commitar
4. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
5. Push para a branch (`git push origin feature/AmazingFeature`)
6. Abra um Pull Request

### 4. **Diretrizes**
- **Commits**: Use mensagens descritivas em português ou inglês
- **Código**: Mantenha a filosofia de privacidade e processamento local
- **Testes**: Teste todas as funcionalidades antes do PR
- **Documentação**: Atualize README se necessário

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE.txt](LICENSE.txt) para mais detalhes.

## 🐛 **Reportar Problemas**

Encontrou um bug ou tem uma sugestão?

🔗 **[Abra uma issue no GitHub](https://github.com/oalexandre/oalexandre-toys/issues)**

## 📊 **Estatísticas do Projeto**

- **🛠️ Ferramentas**: 11 utilitários funcionais
- **📱 Páginas**: 100% responsivas
- **🔒 Privacidade**: Zero dados armazenados
- **⚡ Performance**: PWA completo
- **🎯 SEO**: Schema.org em todas as páginas
- **📦 Bundle**: Otimizado com Next.js
- **🧪 Qualidade**: ESLint + Prettier

---

<div align="center">

**Mantido com ❤️ por [oAlexandre](https://oalexandre.com.br)**

*"Começou como treino de Next.js, virou ferramenta útil. Cada funcionalidade foi criada porque alguém precisava dela na vida real. Se você também precisa, é só usar - sem cadastro, sem custo, sem complicação."*

⭐ **Se este projeto te ajudou, deixe uma estrela no GitHub!**

</div>
