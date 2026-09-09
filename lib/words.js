/**
 * Palavras comuns do português, sem acento, de 4 a 8 letras, para frases-senha.
 * A lista é fixa e pública: a segurança vem da quantidade de palavras
 * sorteadas, não do segredo da lista.
 */
const RAW = `
abacaxi abelha abrigo acento acordo adubo aereo afeto agenda agora agulha ajuda alarme alegria alface algodao alho alma almoco altura aluno amarelo ambiente amigo amor ancora andar anel animal anjo anos antena apoio aranha arco area areia armario aroma arroz arte artigo arvore asa asfalto assunto astro atalho ateu atleta atomo ator aula autor ave aviao aviso azeite azul
bacia bagagem baia bairro baixo balanca balao balde baleia bambu banana banco banda bandeira banho barato barba barco barro base batata bateria batida bebida beija beira beleza bencao berco bicho bife bigode biscoito bloco blusa boca bode bola bolo bolsa bomba boneca bonito borda borboleta bosque bota botao braco branco brasa brilho brincar brisa broa bruxa bule buraco busca
cabelo cabo cabra cacau cacho cadeira caderno cafe caixa calca calor cama camelo caminho camisa campo canal caneca caneta canto capa capim cara caramelo carne carro carta casa casca castelo cauda cavalo cebola cedo cego celular cenoura centro cera cerca cereja cerveja cesta ceu chave chefe chuva cidade cigarra cimento cinema cinto cinza circo claro clima cobra coco coelho cofre cola colar colega colher colina colo comida como compra conta conto copo cor coragem corda coroa corpo corte costa couro couve cova cozinha cravo creme crianca cristal cubo cueca cuidado culpa cume curso curva
dado dama danca dedo defesa deixa dente dentro desejo dever dia diario dica dinheiro direito disco doce doente dona dourado drama duna duplo duro duvida
efeito elefante elmo email empresa enredo ensaio entrada equipe erro escada escola escova escudo espada espaco espelho esponja esquina estacao estante estilo estrada estrela estudo etapa exame exemplo exito
faca fada faixa fala falcao farinha farol fatia favela fazenda febre feijao feira feliz feltro ferro festa fibra figo fila filho filme final fita flauta flecha flor floresta fogo folha fome fonte forca forma forno fosforo foto fraco frango frase freio fresco frio fruta fuga fumaca fundo futuro
gado gaiola galho galinha galo ganso garfo garganta garoto garrafa gato gaveta gelo genio gente geral gesso gigante ginastica girafa giz globo gol golfinho goma gorro gota grama grande grao gravata graxa grelha grilo gripe grito grupo gruta guarda guerra guia
habito harpa hera heroi hino historia hoje homem hora horta hospede hotel humor
idade ideia igreja ilha imagem inseto inverno iogurte irmao ivo
jabuti jaca jacare janela jantar jardim jarra jato javali jeito jogo joia jornal jovem juiz junho justo
lado lago lagoa lama lampada lanche lapis laranja largo lata lava legume leite leitura lema lenco lenha lente leque letra ligeiro limao limpo linha lista livro lobo loja longe lona lote louco louro lua lugar lulu luva luz
maca macaco madeira mae magia magro maio mala malha mamao manga manha manta mapa mar marca marido marmore martelo massa mato medo meia mel melao membro menina menino mente mesa metal metro mexer milho mimo mina minuto miolo mistura moda moeda mola molho montanha morada morango morno morro mosca mostarda motor moto mudo muito mula mundo muro musica
nada nariz nata nave navio neblina neve ninho noite nome norte nota nova novelo nuvem
obra oceano oculos oeste oficina oleo olho ombro onca onda onibus ontem opera ordem orelha orgulho origem ouro outono ouvido ovelha ovo
pacote padre pagina pai painel palavra palco palha palma pao papel parede parque parte passaro passo pasta pato paz pedra pega peixe pele pena pente pepino pequeno pera perna perto pessoa piano pijama pilha piloto pimenta pinha pinto pipa pirata piscina pista placa planeta planta plastico poco poeira polvo pomar ponte ponto porco porta porto posto pouco praca praia prata prato prazo preco prego premio presa preto primo prova pulo pulso punho puro
quadro quarto queijo quente quilo quintal
rabo radio raio raiz ramo rapido raposa rato razao recibo rede regra rei relogio remo renda rico rio risco riso rocha roda rolha rosa rosto rota roupa rua ruido
sabao sabor saco saia sala salada salto sangue sapato sapo saude seco seda segredo selo semana senha serra sinal sino sitio sofa sol sombra sonho sopa sorte sorriso sujo sul suco surpresa
tabua taca talho tampa tanque tapete tarde tarefa tatu taxi teatro tecido teia tela telhado tempo tenda terra tesouro teto tigre tijolo tinta tio toalha tomate tonel tordo torre tosse touro trator trem trevo trigo trilho tronco trovao tucano tulipa turma
ultimo uniao unha urso usina uva
vaca vaga vale valor vapor vara varal vaso veia vela velho vento verao verde vespa vestido viagem vida vidro vila vinho viola vira visita vista viva voo vovo voz
xale xarope xicara
zebra zero zona
`;

export const WORDS = Array.from(new Set(RAW.split(/\s+/).filter(Boolean)));
