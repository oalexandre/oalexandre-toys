# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Dois públicos com o mesmo peso, confirmados pelo autor:

- **Devs e QA testando sistemas.** Precisam de CPF e CNPJ válidos (um ou em lote), validação de listas, SECRET_KEY do Django, senha forte. Usam no trabalho, várias vezes por dia, muitas vezes com a ferramenta aberta ao lado do editor ou do formulário em teste. Valorizam rapidez, copiar com um clique e nenhuma etapa a mais.
- **Pequenos negócios e atendimento.** Criam link de WhatsApp com mensagem pronta, QR code para cardápio ou vitrine, sorteio de rifa ou promoção. Uso ocasional, pouco técnico, muitas vezes pelo celular. Precisam entender o que fazer sem ler manual e confiar no resultado.

Público secundário: quem chega pelo Google com uma pergunta pontual ("qual meu IP", "DDD 47 é de onde", "gerador de senha") e quer a resposta na hora.

## Product Purpose

Conjunto de 17 ferramentas online gratuitas, em português do Brasil, que resolvem tarefas pequenas e frequentes do dia a dia e do trabalho com internet no Brasil. Cada ferramenta nasceu de uma necessidade real do autor. Quase tudo roda no navegador; nada digitado é guardado, e só as consultas de IP, câmbio e CEP saem do aparelho.

Sucesso nos próximos meses: tráfego orgânico recorrente. O site precisa indexar bem e virar referência em buscas de ferramentas em português. Hoje (setembro de 2026) o Google ainda não indexou nenhuma página.

## Positioning

- Processamento 100% local: senhas, documentos e mensagens nunca saem do dispositivo. Concorrentes em geral processam no servidor ou não dizem.
- Foco no Brasil: CPF, CNPJ com região fiscal e filial, DDD por estado com cidades, WhatsApp com +55, frase-senha com palavras em português.
- Sem anúncios, sem cadastro, sem limite. Código aberto no GitHub.
- Um autor identificável (Alexandre Klostermann, oalexandre.com.br), não uma fazenda de conteúdo.

## Operating Context

- Devs abrem a ferramenta em uma aba lateral enquanto preenchem formulários ou populam bancos de teste; colam o resultado direto no sistema.
- Negócios geram o link ou QR uma vez e reutilizam por meses em bio, cardápio, cartão ou anúncio.
- Buscas do Google chegam direto na página da ferramenta ou de um estado (DDD), sem passar pela home.
- Uso em celular é relevante para o público de negócios e para as buscas de DDD e IP.

## Capabilities and Constraints

Ferramentas, em três grupos de menu (setembro de 2026). O grupo não faz parte da URL; as rotas antigas foram mantidas para não perder indexação.

- Dinheiro: gerador de QR code Pix (copia e cola), rachar a conta (10%, por consumo), à vista ou parcelado (juros embutidos), álcool ou gasolina, conversor de moedas (cotação diária via ISR).
- Dia a dia: gerador de link de WhatsApp com QR, gerador de QR code (cores, logo, PNG), consulta de CEP (ViaCEP), consulta de DDD e 27 páginas por estado, sorteador de números e nomes com revelação animada, contador de caracteres e palavras, gerador de senha e frase-senha, qual é o meu IP.
- Desenvolvedores: gerador de CPF (estado, lote, CSV), gerador de CNPJ (filial, lote, CSV), validador de CPF e CNPJ (um ou lista), gerador de Django SECRET_KEY.

Páginas de apoio: Sobre, Privacidade, 404.

Restrições técnicas: Next.js 15 (Pages Router, SSG), MUI 5, hospedado na Vercel. Três consultas externas apenas (IP via ipify/ipapi; câmbio via exchangerate-api; CEP via ViaCEP, avisada na própria ferramenta). Google Analytics 4. PWA via next-pwa.

Restrições de produto confirmadas:

- Nunca haverá anúncio, login, cadastro ou limite de uso.
- Somente português do Brasil; não haverá outro idioma.
- Conteúdo deve ser útil e honesto; nada de texto inflado, emoji em título ou listas de palavras-chave (a versão anterior fazia isso e não indexou).

Terminologia: "ferramenta" para cada utilitário; grupos Dinheiro, Dia a dia e Desenvolvedores.

Decisões em aberto: o nome "oAlexandre Toys" e o avatar pixel art como logo não foram marcados como fixos pelo autor; podem ser revistos no redesign mediante confirmação.

## Brand Commitments

- Direção visual escolhida pelo autor (setembro de 2026): o padrão da categoria de sites de ferramentas, executado no mais alto nível, sem ironia nem excentricidade. Régua de acabamento: Stripe Docs e 1Password (confiança, controles precisos, leitura confortável) e Nubank e Pix (amigável, mobile-first, botões grandes, linguagem simples). Direções temáticas (talão de recibo, calculadora, sinalização) foram apresentadas e recusadas.
- Nome "oAlexandre Toys" mantido por decisão de indexação; o avatar pixel art deixa de ser o logo e vai para a página Sobre. Ambos podem ser revistos.
- Autor: Alexandre Klostermann, site principal oalexandre.com.br, GitHub oalexandre, e-mail eusou@oalexandre.com.br.
- Voz: direta, em português claro, explica o suficiente e para. Sem exageros ("nível militar"), sem promessas que o produto não cumpre.
- Aviso obrigatório nos geradores de CPF/CNPJ: números válidos apenas para testes; não são documentos reais.

## Evidence on Hand

- Logo atual: `public/logos/oalexandre-logo.png` (avatar pixel art). Imagem OG gerada a partir dele: `public/og-image.png`.
- Dados próprios: `lib/ddd.js` (67 DDDs, capitais, regiões), `lib/dddCities.js` (principais cidades por DDD), `lib/words.js` (750 palavras para frase-senha), `lib/currencyNames.js`.
- Não há depoimentos, números de uso, clientes ou casos. Não inventar.

## Product Principles

1. A ferramenta aparece primeiro; explicação vem depois e é curta.
2. Resultado copiável com um clique, sem etapa intermediária.
3. Funciona igual no celular: o público de negócios chega por ele.
4. Honestidade sobre limites (validação não consulta a Receita; cotação é referência; IP é aproximado).
5. Cada página responde a uma busca real e traz algo que concorrentes não têm.

## Accessibility & Inclusion

Público inclui pessoas pouco técnicas. Rótulos em linguagem comum, contraste confortável para leitura longa, controles utilizáveis por teclado e por toque. Sem exigência formal de norma além do bom senso de WCAG AA.
