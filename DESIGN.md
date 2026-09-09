---
name: oAlexandre Toys
description: Ferramentas gratuitas em pt-BR, no navegador; a ferramenta na frente, tudo o mais recua.
colors:
  accent: "#5b2fd1"
  accent-hover: "#4a25ad"
  accent-active: "#3c1d8f"
  accent-tint: "#efeafc"
  accent-tint-strong: "#e2d9fa"
  canvas: "#f6f7f9"
  surface: "#ffffff"
  surface-sunken: "#f1f2f6"
  line: "#e4e7ec"
  line-strong: "#d3d7df"
  ink: "#15171d"
  ink-secondary: "#5f6675"
  ink-muted: "#8a90a0"
  ink-on-dark: "#eef0f4"
  success: "#1a7f4b"
  success-tint: "#e6f4ec"
  error: "#c8322b"
  error-tint: "#fbeaea"
  warning: "#b45309"
  warning-tint: "#fdf1e3"
  info: "#2757a8"
  info-tint: "#e8effa"
  success-ink: "#0f5a34"
  error-ink: "#8f231e"
  warning-ink: "#7c3a06"
  info-ink: "#1d4079"
  success-tint-hover: "#d5ebdd"
typography:
  display:
    fontFamily: "Onest, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "2.5rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Onest, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "2rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Onest, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  title-sm:
    fontFamily: "Onest, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.35
    letterSpacing: "-0.01em"
  title-xs:
    fontFamily: "Onest, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "normal"
  body:
    fontFamily: "Onest, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  body-sm:
    fontFamily: "Onest, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Onest, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: "0"
  caption:
    fontFamily: "Onest, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "normal"
  table-head:
    fontFamily: "Onest, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 700
    lineHeight: 1.5
    letterSpacing: "0.02em"
  result:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, Liberation Mono, monospace"
    fontSize: "1.75rem"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "0.01em"
    fontFeature: "tnum"
  result-sm:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, Liberation Mono, monospace"
    fontSize: "1.125rem"
    fontWeight: 500
    lineHeight: 1.35
    letterSpacing: "0.01em"
    fontFeature: "tnum"
  code:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, Menlo, Consolas, Liberation Mono, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
rounded:
  xs: "4px"
  sm: "6px"
  chip: "8px"
  control: "10px"
  menu: "12px"
  panel: "14px"
  pill: "11px"
spacing:
  "2xs": "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "20px"
  xl: "24px"
  "2xl": "32px"
  "3xl": "40px"
  "4xl": "48px"
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.surface}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.accent-hover}"
    textColor: "{colors.surface}"
  button-primary-active:
    backgroundColor: "{colors.accent-active}"
    textColor: "{colors.surface}"
  button-primary-copied:
    backgroundColor: "{colors.success}"
    textColor: "{colors.surface}"
  button-tonal:
    backgroundColor: "{colors.accent-tint}"
    textColor: "{colors.accent}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 22px"
    height: "48px"
  button-tonal-hover:
    backgroundColor: "{colors.accent-tint-strong}"
    textColor: "{colors.accent}"
  button-tonal-on-result:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.accent}"
  button-text:
    backgroundColor: "transparent"
    textColor: "{colors.accent}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "0 12px"
    height: "44px"
  input:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.control}"
    padding: "12.5px 14px"
    height: "48px"
  input-small:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "8.5px 14px"
    height: "40px"
  panel:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "24px"
  result-box:
    backgroundColor: "{colors.accent-tint}"
    textColor: "{colors.ink}"
    typography: "{typography.result}"
    rounded: "{rounded.panel}"
    padding: "20px"
  result-box-flash:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
  tool-row:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    typography: "{typography.title-xs}"
    rounded: "{rounded.panel}"
    padding: "12px 16px"
    height: "76px"
  tool-row-hover:
    backgroundColor: "#fbfaff"
    textColor: "{colors.ink}"
  tool-row-icon:
    backgroundColor: "{colors.accent-tint}"
    textColor: "{colors.accent}"
    rounded: "{rounded.control}"
    size: "44px"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.label}"
    rounded: "{rounded.chip}"
    padding: "8px 12px"
  nav-link-hover:
    backgroundColor: "rgba(21, 23, 29, 0.04)"
    textColor: "{colors.ink}"
  menu-item:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.body-sm}"
    rounded: "{rounded.chip}"
    padding: "8.8px 10px"
  menu-item-active:
    backgroundColor: "{colors.accent-tint}"
    textColor: "{colors.accent}"
  segmented-control:
    backgroundColor: "{colors.surface-sunken}"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.label}"
    rounded: "{rounded.control}"
    padding: "4px"
  segmented-control-selected:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.sm}"
    height: "40px"
  chip:
    backgroundColor: "{colors.surface-sunken}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.chip}"
  alert-warning:
    backgroundColor: "{colors.warning-tint}"
    textColor: "#7c3a06"
    typography: "{typography.body-sm}"
    rounded: "{rounded.control}"
  alert-success:
    backgroundColor: "{colors.success-tint}"
    textColor: "#0f5a34"
    rounded: "{rounded.control}"
  alert-error:
    backgroundColor: "{colors.error-tint}"
    textColor: "#8f231e"
    rounded: "{rounded.control}"
  alert-info:
    backgroundColor: "{colors.info-tint}"
    textColor: "#1d4079"
    rounded: "{rounded.control}"
  tooltip:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    typography: "{typography.caption}"
    rounded: "{rounded.chip}"
    padding: "4px 10px"
  table-head:
    backgroundColor: "{colors.surface-sunken}"
    textColor: "{colors.ink-secondary}"
    typography: "{typography.table-head}"
    padding: "12px 16px"
  code-block:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ink-on-dark}"
    typography: "{typography.code}"
    rounded: "{rounded.menu}"
    padding: "20px"
  code-inline:
    backgroundColor: "{colors.surface-sunken}"
    textColor: "{colors.ink}"
    typography: "{typography.code}"
    rounded: "{rounded.xs}"
    padding: "1px 5px"
---

# Design System: oAlexandre Toys

## Overview

**Creative North Star: "A ferramenta na frente"**

A página é a ferramenta; tudo o mais recua. Quem chega pelo Google vê o campo, o resultado e o botão Copiar antes de qualquer explicação, e quem volta todo dia encontra o mesmo lugar, o mesmo botão, a mesma resposta. O sistema é o padrão da categoria de sites de utilitários levado ao acabamento de Stripe Docs e 1Password (confiança, controles precisos, leitura confortável) e de Nubank e Pix (amigável, mobile-first, botões grandes, linguagem simples). Não há hero de marketing, não há grade de cards iguais, não há cromo que não sirva à tarefa.

A voz visual é confiável, amigável e calma. Uma família tipográfica (Onest) para tudo, uma mono (JetBrains Mono) só para o que se copia, um acento violeta profundo que aparece onde há ação e em mais lugar nenhum. As superfícies são planas: branco sobre cinza-neve, separadas por filetes de 1px, sem sombra em repouso. A densidade é confortável, não compacta: controles de 48px, corpo de 17px, coluna de leitura de 820px.

Anti-referências confirmadas pelo autor: nenhum "visual de IA" (fundo creme com serifa e terracota; quase-preto com neon; editorial de filetes finos com rótulos em mono), nenhum emoji em título, nenhum texto inflado com palavras-chave. Direções temáticas (talão de recibo, calculadora, sinalização) foram apresentadas e recusadas.

**Key Characteristics:**
- A ferramenta ocupa a primeira dobra em toda página de ferramenta; o texto explicativo começa abaixo dela.
- Um acento (violeta) para ação, seleção e foco; nunca decoração.
- Uma família sans para toda a interface; mono só em resultados, dados e código.
- Plano por padrão: filetes de 1px, sombra apenas em menus flutuantes.
- Controles de 48px, raio de 10px em controles e 14px em painéis, sem exceção.
- Uma única animação autoral: Copiar vira Copiado em verde e o resultado pisca do violeta claro ao branco.

## Colors

Cinza-neve frio sob superfícies brancas, grafite para o texto, um único violeta profundo para tudo que é ação, e quatro semânticos com fundo tingido.

### Primary
- **Violeta profundo** (`accent`): botão primário, texto e ícone do botão tonal, link em texto corrido, ícone das ferramentas, item ativo de menu, checkbox e switch marcados, caret e `accent-color` do navegador, borda do campo em foco, rótulo do ResultBox, a palavra "Toys" do wordmark e o fundo do símbolo.
- **Violeta hover** (`accent-hover`) e **Violeta pressionado** (`accent-active`): os dois únicos estados do botão primário.
- **Violeta tinta** (`accent-tint`): fundo do botão tonal, do ResultBox, do quadrado de ícone nas linhas de diretório e do item de menu ativo; `action.selected` e `action.focus` do tema.
- **Violeta tinta forte** (`accent-tint-strong`): hover do botão tonal, borda do ResultBox, halo do anel de foco, seleção de texto (`::selection`), borda de hover das linhas de diretório.

### Neutral
- **Cinza-neve frio** (`canvas`): fundo da página.
- **Branco** (`surface`): cabeçalho, rodapé, painéis, campos, linhas de diretório, menus, segmento selecionado.
- **Cinza afundado** (`surface-sunken`): fundo do controle segmentado, chip padrão, cabeçalho de tabela, código inline, skeleton, botão desabilitado.
- **Filete** (`line`): borda de painéis, divisórias, linha do cabeçalho e rodapé, bordas de tabela, contorno interno do segmento selecionado.
- **Filete forte** (`line-strong`): borda de 1,5px dos campos em repouso, trilho de slider e switch, scrollbar.
- **Grafite** (`ink`): texto principal, fundo de tooltip, fundo de bloco de código, rótulo de valor do slider.
- **Grafite secundário** (`ink-secondary`): frase de apoio, corpo explicativo, links de navegação em repouso, rótulos de campo, cabeçalho de tabela, legenda.
- **Grafite apagado** (`ink-muted`): texto desabilitado, separador de migalha, seta das linhas de diretório em repouso, checkbox desmarcado, borda de campo em hover.
- **Tinta sobre escuro** (`ink-on-dark`): texto dos blocos de código.

### Semantic
- **Verde** (`success` / `success-tint` / `success-ink`): o estado Copiado do botão e do ícone de copiar; alerta de sucesso. Texto sobre fundo tingido usa a tinta escura correspondente (`*-ink`), que garante contraste AA em todos os quatro semânticos.
- **Vermelho** (`error` / `error-tint`): erro de validação e alerta de erro; anel de foco de campo com erro usa a tinta.
- **Âmbar** (`warning` / `warning-tint`): o aviso obrigatório dos geradores de CPF e CNPJ.
- **Azul** (`info` / `info-tint`): alerta informativo; `secondary` do tema.
- Os alertas escurecem o texto sobre a tinta (`#0f5a34`, `#8f231e`, `#7c3a06`, `#1d4079`) para manter contraste de leitura.

### Named Rules
**The One Accent Rule.** O violeta aparece só onde há ação, seleção ou foco. Nenhum fundo de seção, nenhuma ilustração, nenhum título recebe o acento; o único violeta "de marca" é a palavra "Toys" e o símbolo de 32px.

**The Tinted Ground Rule.** Estado semântico é sempre fundo tingido mais texto escuro da mesma família, nunca cor sólida com texto branco. As únicas superfícies sólidas coloridas são o botão primário (violeta), o botão Copiado (verde) e o tooltip (grafite).

**The Hairline Rule.** Toda separação entre superfícies é um filete de 1px em `line`; campos usam 1,5px em `line-strong`. Não existe divisória mais grossa nem cor de borda fora desses dois tokens.

## Typography

**Display Font:** Onest (com -apple-system, Segoe UI, Roboto, Arial)
**Body Font:** Onest (mesma família, mesma variável)
**Label/Mono Font:** JetBrains Mono 400/500 (com ui-monospace, Menlo, Consolas)

**Character:** Uma sans geométrica-humanista, sem serifa e sem "personalidade de display": títulos apertam levemente o entreletras (-0,02em a -0,01em) e pesam 700/600; o corpo respira a 1,65. A mono entra apenas quando o valor é o produto (senha, CPF, IP, link, código), com algarismos tabulares para que colunas e dígitos não dancem.

### Hierarchy
- **Display** (700, 40px / 32px no celular, 1.2, -0.02em): só o H1 da home ("Ferramentas gratuitas, direto no navegador"), com `text-wrap: balance`.
- **Headline** (700, 32px, 1.2, -0.02em): H1 de toda página de ferramenta, DDD e apoio.
- **Title** (700, 24px, 1.3, -0.015em): H2 de seções ("Como funciona", "Perguntas frequentes", "Outras ferramentas", nomes de categoria na home).
- **Title-sm** (600, 20px, 1.35, -0.01em): H3 dentro do conteúdo explicativo.
- **Title-xs** (600, 17px, 1.4): nome da ferramenta nas linhas de diretório, pergunta do FAQ, wordmark (700, -0.01em).
- **Body** (400, 17px, 1.65): frase de apoio sob o H1, parágrafos e listas do conteúdo explicativo, sempre em `ink-secondary`. Coluna de 820px dá cerca de 80ch; a home limita o texto corrido a 680px.
- **Body-sm** (400, 15px, 1.6): descrição nas linhas de diretório, links de rodapé e menu, células de tabela, alertas, texto de checkbox; é o `fontSize` base do tema.
- **Label** (600, 15px, sem tracking, sentence case): botões, links de navegação, rótulo do ResultBox, subtítulos de controle (`subtitle2`), segmentos, chips.
- **Caption** (400, 13px, 1.5, `ink-secondary`): linha de meta "Atualizado em · por", texto de ajuda de campo, rótulos de marca do slider, tooltip.
- **Table-head** (700, 13px, 0.02em, MAIÚSCULAS): cabeçalho de tabela sobre `surface-sunken`; convenção tabular, o único uso de caixa alta do sistema.
- **Result** (mono 500, 28px / 21,6px no celular, 1.35, 0.01em, `tabular-nums`): o valor dentro do ResultBox. **Result-sm** (18px / 16px) para valores longos como chaves e links.
- **Code** (mono 400, 14px, 1.65): blocos `pre` sobre grafite; inline em 0,875em sobre `surface-sunken`.

### Named Rules
**The One Family Rule.** Toda a interface usa Onest. Não existe fonte de display, nem serifa, nem segunda sans. A única outra família é a mono, e ela só aparece em valores copiáveis e código.

**The Sentence Case Rule.** Botões, rótulos, navegação e títulos ficam em sentence case sem tracking. A única caixa alta é o cabeçalho de tabela (13px, 0.02em). Não há kickers, eyebrows nem rótulos espaçados.

## Layout

Container MUI `lg` (1200px) com gutter de 24px no cabeçalho, rodapé e `main`; dentro do `main`, o artigo de ferramenta se limita a **820px centrados**, e a home limita o texto corrido a 680px enquanto a lista de ferramentas ocupa a largura toda. `main` tem padding vertical de 48px no desktop e 24px no celular; a página é um flex-column de `min-height: 100vh`, com o rodapé ancorado em `margin-top: auto`.

Cabeçalho branco sticky de **64px** (60px no celular) com filete inferior: símbolo + wordmark à esquerda, quatro categorias com submenu à direita (`md+`); abaixo de `md` vira um botão de menu que abre um Drawer de 320px pela direita. Seções ancoradas usam `scroll-margin-top: 88px` para não ficar sob o cabeçalho.

Página de ferramenta, de cima para baixo: migalha de pão (14px, `mb` 16px), H1, frase de apoio, linha de meta, painel da ferramenta (`mb` 56px / 40px no celular), conteúdo explicativo (`mb` 48px), FAQ (`mb` 48px), "Outras ferramentas" em três colunas (`sm+`). A ferramenta ocupa a primeira dobra em 1440x900; o conteúdo começa abaixo dela.

Home: H1 e frase, depois a lista-diretório por categoria em **duas colunas no desktop e uma no celular** (`Grid` com `spacing` 12px), título de categoria com descrição em linha; seções de categoria separadas por 40px (32px no celular); fechamento "Sobre o projeto" com filete superior.

Formulários dentro do painel: `Grid` de 12px a 16px entre campos, uma ou duas colunas (`sm` como ponto de quebra), campos grandes de 48px acima dos controles menores (40px) de opções. Ações em `Stack` horizontal no `sm+` e vertical no celular.

**Ritmo de espaçamento:** unidade de 8px do MUI; os passos usados são 4, 8, 12, 16, 20, 24, 32, 40, 48 e 56px. Padding interno de painel: 24px (`sm+`) e 16px (celular). ResultBox: 20px e 16px.

**Pontos de quebra** (MUI): `sm` 600px, `md` 900px, `lg` 1200px. `md` é o ponto que alterna navegação completa/Drawer e duas colunas/uma; `sm` alterna o layout interno de formulários e do ResultBox (ações à direita do valor ou abaixo dele).

## Elevation & Depth

Plano por padrão. Toda superfície em repouso é branca sobre cinza-neve com um filete de 1px em `line`; `Paper` do tema tem `elevation: 0` e a borda embutida. A hierarquia vem de três tons de fundo (`canvas` → `surface` → `surface-sunken`), da tinta violeta para o que é ativo, e dos filetes. Sombra existe em um único lugar estrutural: **menus e popovers flutuantes**, que precisam se destacar do conteúdo que cobrem. Os thumbs de switch e slider carregam uma micro-sombra de 1px para parecer tocáveis; isso é textura de controle, não elevação.

### Shadow Vocabulary
- **Menu flutuante** (`box-shadow: 0 12px 32px -8px rgba(21,23,29,0.18), 0 2px 6px rgba(21,23,29,0.06)`): submenu do cabeçalho, `Menu`, `Popover`, `Select` aberto. Deslocamento para baixo com desfoque amplo mais um contato curto.
- **Thumb de controle** (`0 1px 2px rgba(21,23,29,0.2)` no switch; `0 1px 3px rgba(21,23,29,0.15)` no slider): só nos thumbs.
- **Anel de foco** (`outline: 2px solid accent; outline-offset: 2px; box-shadow: 0 0 0 5px accent-tint-strong`): todo elemento focado por teclado, incluindo `ButtonBase`. Campos em foco usam a variante compacta `0 0 0 3px accent-tint-strong` mais borda violeta; com erro, a tinta vermelha.
- **Halo de slider** (`0 0 0 6px accent-tint` no hover/foco do thumb).

### Named Rules
**The Floating-Only Shadow Rule.** Sombra com deslocamento e desfoque só em superfícies que flutuam sobre outras (menus, popovers). Painéis, cards, linhas de diretório e o ResultBox nunca recebem sombra, nem em hover; o hover é filete e fundo.

**The Halo Focus Rule.** Foco é sempre um anel violeta claro (`accent-tint-strong`) ao redor do elemento, nunca uma mudança de cor de fundo sozinha. Botões e links: contorno de 2px mais halo de 5px; campos: halo de 3px mais borda violeta.

## Shapes

Dois raios fazem o sistema: **10px em controles** (botões, ícone-botão, campos, controle segmentado, alertas, quadrado de ícone das linhas) e **14px em painéis** (`Paper`, ResultBox, linhas de diretório). Abaixo deles, 8px para chips, tooltip, links de navegação e itens de menu; 12px para o papel de menus, blocos de código e o contêiner do FAQ; 6px para o segmento selecionado dentro do controle segmentado (10 - 4 de padding) e para o anel de foco global; 4px para código inline. Trilho de switch e scrollbar são pílulas (11px e 10px). O Drawer é a única superfície quadrada (raio 0), porque encosta na borda da tela.

Bordas: filete de 1px em `line` em painéis e divisórias; 1,5px em `line-strong` nos campos. Botões não têm borda: o secundário é tonal (fundo violeta claro), e quando está sobre o ResultBox vira branco com um contorno interno de 1,5px em `accent-tint-strong` para não sumir no fundo tingido. O símbolo da marca é um quadrado de 32px com raio 9px em violeta e um brilho de quatro pontas branco: a mesma geometria arredondada-precisa do resto do sistema.

## Components

### Buttons
Precisos e amigáveis: grandes, sem borda dura, um único sólido por tela.
- **Shape:** cantos arredondados (10px), sem elevação, sem ripple de foco; texto 600 em 15px (16px no `large`), sentence case.
- **Primary** (`contained`): fundo violeta, texto branco, 48px de altura e 22px de padding lateral no `size="large"` (44px / 18px no padrão; 36px / 14px no `small`). Hover `accent-hover`, pressionado `accent-active` com `translateY(1px)`. Ícone Material Rounded à esquerda (`startIcon`).
- **Hover / Focus:** transições de 150ms em fundo, cor, sombra e transform; foco com contorno de 2px mais halo de 5px em `accent-tint-strong`.
- **Tonal** (`outlined` redefinido): fundo `accent-tint`, texto violeta, sem borda; hover `accent-tint-strong`; desabilitado `surface-sunken`. Sobre o ResultBox vira branco com contorno interno de 1,5px em `accent-tint-strong` e hover `surface-sunken`. Variante `success` (verde sobre `success-tint`) e `inherit` (grafite sobre `surface-sunken`).
- **Text:** só texto violeta, padding lateral de 12px.
- **Copiar → Copiado:** o botão primário troca para `color="success"` (verde sólido), ícone Check, texto "Copiado", cresce para `scale(1.04)` com `transform 220ms cubic-bezier(0.16, 1, 0.3, 1)` e volta em 1,8s. Versão ícone-só: `IconButton` violeta que fica verde sobre `success-tint`. Desabilitado quando não há valor.
- **No celular**, botões secundários ao lado do Copiar escondem o texto e ficam só com o ícone (`px` 12px), mantendo 48px.

### Inputs / Fields
- **Style:** `OutlinedInput` branco, 48px de altura (40px no `small`), raio 10px, borda de 1,5px em `line-strong`; rótulo flutuante em `ink-secondary`; texto de ajuda 13px.
- **Hover:** borda `ink-muted`.
- **Focus:** borda violeta de 1,5px mais halo de 3px em `accent-tint-strong`; rótulo fica violeta.
- **Error:** borda vermelha; em foco, halo em `error-tint`.
- **Campos de resultado em lote** (`readOnly`, multiline) usam a mono em 15,2px.
- **Checkbox** cinza apagado, violeta ao marcar; rótulo em 15px. **Switch** com trilho pílula em `line-strong` que fica violeta ao ligar; thumb branco com micro-sombra. **Slider** de 6px, trilho `line-strong`, thumb branco de 22px com borda violeta de 2px e halo `accent-tint` no hover; rótulo de valor sobre grafite com raio 8px.
- **Controle segmentado** (`ToggleButtonGroup`): calha `surface-sunken` com padding e gap de 4px, raio 10px; segmento de 40px, texto 600 em `ink-secondary`; o selecionado é branco com contorno interno de 1px em `line` e texto grafite, raio 6px.

### Cards / Containers
- **Painel da ferramenta** (`ToolPanel` / `Paper`): branco, filete de 1px em `line`, raio 14px, padding 24px (16px no celular), sem sombra. Envolve toda a parte interativa de cada ferramenta.
- **Linha de diretório** (`ToolCard`): link em bloco de 76px (60px no `compact`), branco, filete, raio 14px, padding 12px/16px; quadrado de ícone de 44px em `accent-tint` com ícone violeta, nome em Title-xs, descrição em Body-sm `ink-secondary`, seta `ChevronRightRounded` em `ink-muted`. Hover: borda `accent-tint-strong`, fundo `#fbfaff`, quadrado do ícone em `accent-tint-strong`, seta violeta deslocada 2px. Transições de 150ms.
- **FAQ:** contêiner branco com filete e raio 12px; acordeões sem gutter, separados por filete, cabeçalho de 56px com padding 20px, pergunta em Title-xs, resposta em Body-sm `ink-secondary`; ícone `ExpandMoreRounded`.
- **Tabela:** cabeçalho em `surface-sunken` com Table-head; células 15px, padding vertical 12px, filete inferior em `line`.
- **Alertas:** raio 10px, ícone alinhado ao topo, 15px; fundo tingido mais texto escuro da família. O de aviso carrega o texto obrigatório dos geradores de documento.
- **Chip:** raio 8px, 600, fundo `surface-sunken` ou contorno em `line-strong`; `size="small"` colorido para força de senha.
- **Tooltip:** grafite com seta, 13px, raio 8px.
- **Código:** `pre` sobre grafite com texto `ink-on-dark`, 14px, raio 12px, padding 20px; `code` inline em `surface-sunken` com filete e raio 4px.

### Navigation
- **Cabeçalho:** branco, sticky, filete inferior, 64px. Links de categoria em Label `ink-secondary` com raio 8px e padding 8px/12px; hover ou submenu aberto: texto grafite sobre `rgba(21,23,29,0.04)`; ícone `ExpandMoreRounded` a 60% de opacidade. Submenu: lista branca de 272px com filete, raio 12px, padding 6px e a sombra de menu; itens em 15px/500 com ícone violeta, raio 8px; item ativo em `accent-tint` com texto violeta; hover `action.hover` com texto violeta. Abre por hover e por foco, fecha com Esc, no blur e na troca de rota.
- **Celular:** `IconButton` `MenuRounded`; Drawer de 320px (máx. 90vw), raio 0, com Logo compacto de 26px e botão fechar; listas por categoria com subtítulo 700 em 15px e itens de 48px com raio 8px, ícone violeta, item selecionado em texto violeta.
- **Migalha de pão:** 14px, links em `ink-secondary` (hover violeta), separador `NavigateNextRounded` em `ink-muted`, página atual em grafite.
- **Rodapé:** branco com filete superior, padding vertical 56px (40px no celular); quatro colunas de categoria (duas no celular) com título em Label e links em 15px `ink-secondary` (hover violeta); divisória; símbolo de 24px com o texto de honestidade; links de apoio alinhados à direita.
- **Logo:** símbolo (quadrado violeta de raio 9 com brilho de quatro pontas branco) mais wordmark "oAlexandre Toys" em 17px/700, "Toys" em violeta. Sem avatar; o pixel art fica só na página Sobre.

### ResultBox (assinatura)
A área de resultado padrão de toda ferramenta: superfície tingida em `accent-tint` com borda de 1px em `accent-tint-strong`, raio 14px, padding 20px (16px no celular). Rótulo em Label violeta sentence case ("Resultado", "CPF gerado", "Senha gerada"), valor em `output` mono 500 de 28px (21,6px no celular; 18px/16px no tamanho `md`) com `tabular-nums`, `word-break: break-all` e `aria-live="polite"`; vazio, o placeholder fica em `ink-secondary`. Ações à direita do valor no `sm+` e abaixo dele no celular: Copiar (primário) e a ação secundária tonal em branco. Ao copiar, o fundo pisca para branco em 60ms e volta ao violeta claro em 400ms com `cubic-bezier(0.16, 1, 0.3, 1)`; é a única animação autoral do site, junto com a mola do botão Copiado. Todas as outras transições são de estado, 150ms, e `prefers-reduced-motion` zera todas.

## Do's and Don'ts

### Do:
- **Do** colocar a ferramenta (painel branco com ResultBox) logo abaixo do H1, da frase de apoio e da linha de meta; o conteúdo explicativo começa depois do painel.
- **Do** usar um único botão primário sólido por vista; toda outra ação é tonal (`accent-tint` + violeta) ou só texto.
- **Do** manter controles de 48px (`size="large"` em botões, `OutlinedInput` padrão) para a ação principal e 40px (`small`) para opções secundárias.
- **Do** usar raio 10px em controles e 14px em painéis e linhas; 8px em chips, tooltips e itens de menu; 12px em menus flutuantes e blocos de código.
- **Do** separar superfícies com filete de 1px em `line`; campos com 1,5px em `line-strong`.
- **Do** mostrar valores copiáveis em JetBrains Mono 500 com `tabular-nums` dentro de um ResultBox, com o botão Copiar ao lado (abaixo no celular).
- **Do** usar fundo tingido mais texto escuro para estados semânticos e alertas (`*-tint` + tom escuro).
- **Do** manter o anel de foco: contorno de 2px violeta mais halo de 5px em `accent-tint-strong` (3px em campos).
- **Do** usar ícones Material Rounded em ações e cromo, um só peso, geralmente `fontSize="small"`.
- **Do** escrever títulos, rótulos e botões em sentence case, sem tracking e sem emoji.

### Don't:
- **Don't** adicionar sombra a painéis, cards, linhas de diretório ou ResultBox, nem em hover; sombra é só de menu flutuante.
- **Don't** usar o violeta como decoração (fundo de seção, título, ilustração, gradiente); ele marca ação, seleção e foco.
- **Don't** introduzir outra família tipográfica, serifa ou face de display; nem usar a mono fora de resultados, dados e código.
- **Don't** usar caixa alta, kickers, eyebrows ou rótulos espaçados; a única maiúscula é o cabeçalho de tabela.
- **Don't** criar hero de marketing, grade de cards iguais com ilustração, ou qualquer bloco que empurre a ferramenta para baixo da dobra.
- **Don't** usar cor sólida com texto branco para estados semânticos; só o botão primário, o Copiado e o tooltip são sólidos.
- **Don't** adicionar animação além da mola do Copiado e do piscar do ResultBox; transições de estado ficam em 150ms.
- **Don't** usar fundo creme, terracota, quase-preto com neon ou filetes editoriais com rótulos em mono (o "visual de IA" recusado pelo autor).
- **Don't** usar o avatar pixel art como logo; ele pertence só à página Sobre.
