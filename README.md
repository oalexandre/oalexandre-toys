# oAlexandre Toys

Ferramentas online gratuitas, em português do Brasil, que rodam inteiramente no navegador.
Nada do que o usuário digita é enviado ou armazenado.

Site: https://toys.oalexandre.com.br

## Ferramentas

| Categoria   | Ferramenta                       | Rota                                       |
| ----------- | -------------------------------- | ------------------------------------------ |
| Segurança   | Gerador de senha e frase-senha   | `/seguranca/gerador-de-senha-segura`       |
| Segurança   | Gerador de Django SECRET_KEY     | `/seguranca/gerador-de-django-secret-key`  |
| Segurança   | Qual é o meu IP                  | `/seguranca/qual-o-meu-ip`                 |
| Documentos  | Gerador de CPF (estado, lote)    | `/documentos/gerador-de-cpf`               |
| Documentos  | Gerador de CNPJ (filial, lote)   | `/documentos/gerador-de-cnpj`              |
| Documentos  | Validador de CPF e CNPJ (lista)  | `/documentos/validador-de-cpf-e-cnpj`      |
| Comunicação | Gerador de link de WhatsApp      | `/comunicacao/gerador-de-link-de-whatsapp` |
| Comunicação | Consulta de DDD e páginas por UF | `/comunicacao/encontrar-ddd-do-celular`    |
| Utilitários | Gerador de QR code               | `/utilitario/gerador-de-qrcode`            |
| Utilitários | Sorteador de números             | `/utilitario/sorteador-automatico`         |
| Utilitários | Conversor de moedas              | `/utilitario/cotacao-moeda`                |

Os geradores de CPF e CNPJ produzem números com dígitos verificadores válidos apenas para testes de
software. Não são documentos reais.

## Stack

- Next.js 15 (Pages Router, geração estática; a página de câmbio usa ISR de 12 horas)
- React 18 e MUI 5 com tokens próprios
- next-pwa e next-sitemap
- Google Analytics 4 (opcional, via variável de ambiente)
- Hospedagem na Vercel, deploy automático a cada push na `main`

Consultas externas: ipify e ipapi (IP) e exchangerate-api (câmbio). Todo o resto é local.

## Rodando localmente

Requisitos: Node.js 20 ou superior.

```bash
git clone https://github.com/oalexandre/oalexandre-toys.git
cd oalexandre-toys
npm install
cp .env.example .env.local   # opcional: NEXT_PUBLIC_GA_ID
npm run dev
```

Acesse http://localhost:3000.

## Scripts

| Comando              | O que faz                                  |
| -------------------- | ------------------------------------------ |
| `npm run dev`        | Servidor de desenvolvimento                |
| `npm run build`      | Build de produção e geração do sitemap     |
| `npm run start`      | Serve o build de produção                  |
| `npm run lint`       | ESLint com Prettier integrado              |
| `npm run lint:fix`   | Corrige lint e formatação                  |
| `npm run type-check` | Verificação de tipos                       |
| `npm run deploy`     | Deploy de preview na Vercel (`npx vercel`) |
| `npm run prod`       | Deploy de produção na Vercel               |

## Estrutura

```
constants/tools.js     Catálogo único das ferramentas (nome, rota, categoria, ícone)
constants/updated.json Data de atualização por rota (página, schema e sitemap)
lib/                   Lógica pura, sem React (senha, CPF/CNPJ, DDD, sorteio)
features/<tool>/       Componente interativo de cada ferramenta
components/tool/       ToolPage (template), ResultBox, ToolCard, Faq
components/layout/     Header, Footer, Logo, Layout
pages/                 Uma pasta por rota; pages/ddd/[uf].js gera as 27 páginas de DDD
```

Para adicionar uma ferramenta: registre em `constants/tools.js`, adicione a data em
`constants/updated.json`, crie o componente em `features/` e a página em
`pages/<categoria>/<slug>/index.jsx` usando `ToolPage`. Menu, home, rodapé, sitemap e
ferramentas relacionadas passam a incluí-la automaticamente.

## Documentação de produto e design

- `PRODUCT.md`: público, propósito, restrições e compromissos de marca.
- `DESIGN.md` e `.impeccable/design.json`: tokens, tipografia, componentes e regras do sistema
  visual. Toda interface nova deve seguir esses tokens; `theme.js` é a implementação.

## Contribuindo

1. Abra uma issue descrevendo o problema ou a ferramenta proposta.
2. Crie uma branch a partir da `main`.
3. Rode `npm run lint:fix` e `npm run build` antes de abrir o pull request.
4. Mantenha o princípio do projeto: processamento local, sem cadastro, sem anúncio.

## Licença

MIT. Veja `LICENSE.txt`.

Feito por [Alexandre Klostermann](https://oalexandre.com.br). Contato: eusou@oalexandre.com.br.
