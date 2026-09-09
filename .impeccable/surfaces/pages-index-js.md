---
version: 1
slug: "pages-index-js"
primary_target: "pages/index.js"
related_targets: ["components/tool/ToolPage.jsx","components/layout/index.jsx","pages/ddd/[uf].js"]
---

# Surface brief: site inteiro (home, ferramentas, DDD, Sobre, Privacidade, 404)

Escopo: redesign completo do sistema visual, todas as rotas. Modo: Operate (a ferramenta é a tarefa); páginas de DDD e Sobre em modo Read dentro do mesmo sistema.

Público e tarefa: devs/QA gerando e validando CPF, CNPJ, senhas e chaves com o site aberto ao lado do trabalho; donos de pequenos negócios criando link de WhatsApp, QR code e sorteio pelo celular; visitantes do Google com uma pergunta pontual. Ação: usar a ferramenta e copiar o resultado em segundos.

Conteúdo e restrições: 11 ferramentas, 27 páginas de DDD, textos já escritos (manter). Sem anúncios, sem cadastro, só pt-BR. Autor identificado. Aviso obrigatório nos geradores de documento.

## Direction contract

THESIS: A ferramenta é a página; todo o resto recua. O sistema é o padrão da categoria levado ao acabamento de Stripe Docs, 1Password e Nubank: confiável, amigável, mobile-first. Recusa a home de grade de cards iguais com hero de marketing, o visual "SaaS de IA" (bege com serifa, escuro com neon, editorial de filetes) e qualquer cromo que não sirva à tarefa.

OWN-WORLD: Fundo neutro frio muito claro (#f6f7f9) com superfícies brancas e filetes #e4e7ec; tinta #15171d e secundária #5f6675. Um acento violeta profundo (#5b2fd1, hover #4a25ad, tinta clara #efeafc) para ações primárias, seleção e foco, nunca decoração. Semânticos: sucesso #1a7f4b, erro #c8322b, aviso #b45309, cada um com fundo tingido e ícone. Uma família para tudo, Onest (variável), escala curta 1.125: 15/17 corpo, 20 h3, 24 h2, 32 h1 (40 na home), pesos 400/600/700; JetBrains Mono só para resultados e dados (senha, CPF, IP, link), com algarismos tabulares. Raio único 10px em controles, 14px em painéis e linhas. Controles de 48px, borda 1.5px #d3d7df, foco com anel de 3px em violeta claro; botão primário sólido violeta, secundário tonal (fundo violeta claro, texto violeta), terciário só texto. Sombra só em menus flutuantes, com deslocamento e desfoque. Seleção de texto, caret, scrollbar, anel de foco e sublinhados temados na paleta. Ícones Material Rounded, um só peso.

STORY: Quem chega pelo Google entende em dois segundos o que a ferramenta faz, usa sem ler instruções, copia o resultado com um clique e vê que há outras ferramentas e quem as fez. Quem volta todo dia encontra o mesmo lugar, o mesmo botão, a mesma resposta.

FIRST VIEWPORT: Página de ferramenta em 1440: cabeçalho branco de 64px com wordmark à esquerda e quatro categorias com submenu; coluna central de 820px; migalha de pão; H1 de 32px; uma frase de 17px; linha de meta (atualizado em, autor). Logo abaixo, o painel da ferramenta: campos de 48px em uma ou duas colunas, e a área de resultado em superfície tingida de violeta claro com rótulo "Resultado", valor em mono de 26–30px, botão primário "Copiar" à direita do valor (abaixo dele no celular) e ação secundária "Gerar outra". Conteúdo explicativo começa abaixo da dobra. Home em 1440: H1 de 40px "Ferramentas gratuitas, direto no navegador" com uma frase, depois a lista-diretório por categoria: linhas de 72px com ícone em quadrado tingido, nome em 17/600, descrição em 15 e seta, duas colunas no desktop e uma no celular; a primeira categoria já visível na dobra.

FORM: Padrão da categoria (saída permanente), escolhido pelo autor sobre a direção sorteada; seed 075e8464, kind canon. Momento memorável: ao copiar, o botão vira "Copiado" em verde com mola de 200ms e o valor do resultado pisca do violeta claro ao branco; única animação autoral do site, além das transições de estado de 150–200ms.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Decisões em aberto
- Marca: wordmark "oAlexandre Toys" com um símbolo simples novo; avatar pixel art só em Sobre. Pode ser revisto pelo autor.
