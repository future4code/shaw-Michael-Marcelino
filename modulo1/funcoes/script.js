// // 1..

// function minhaFuncao(variavel) {
// 	return variavel * 5
// }
// console.log(minhaFuncao(2))
// console.log(minhaFuncao(10))

// // a) O que vai ser impresso no console?
// // VAI SER IMPRESSO 10 E 50.

// // b) O que aconteceria se retirasse os dois `console.log` e simplesmente invocasse a
// // função `minhaFuncao(2)` e `minhaFuncao(10)`? O que apareceria no console?
// // A funcao iria retornar os valores, porem não temos nenhuma variavel para guardar os dados e não vai ser impresso no console, logo vão se perder os dados.

/* let textoDoUsuario = prompt("Insira um texto");

const outraFuncao = function(texto) {
	return texto.toLowerCase().includes("cenoura")
}

const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

a. Explique o que essa função faz e qual é sua utilidade
ela busca a correspondecia da palavra cenoura no texto inserido e retorna true caso exista e false caso nao

b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
     i.   `Eu gosto de cenoura` // true
     ii.  `CENOURA é bom pra vista` //true
     iii. `Cenouras crescem na terra`//true
 */

function textAboutMe() {
  console.log("Olá meu nome é michael, tenho 28 anos vivo em Leiria");
}
textAboutMe();

function textAboutMe(nome, idade, endereco, profissao) {
  console.log(
    ` Ola me chamo ${nome} tenho ${idade} anos, vivo em${endereco} e sou${profissao}`
  );
}

let nome = " Nastia";
let idade = 28;
let endereco = " leiria";
let profissao = "estudande";

textAboutMe(nome, idade, endereco, profissao);

function soma(n1, n2) {
  return n1 + n2;
}

console.log(soma(2, 8));

function num(n1, n2) {
  return n1 > n2;
}
console.log(num(2, 8));

function boleano(num) {
  return num % 2 == 0;
}
console.log(boleano);

function mensagem(msg) {
  msg = msg.toUpperCase().le;
  msg = msg.lenght = 0;

  return msg;
}

resultado = mensagem("meu nome é braya");

console.log(resultado);

n1 = prompt("Digite um numero");
n1 = Number(n1);

n2 = prompt("Digite um numero");
n2 = Number(n2);

function calcula(n1, n2) {
  soma = n1 + n2;
  sub = n1 - n2;
  mult = n1 * n2;
  div = n1 / n2;
  console.log(soma);
  console.log(sub);
  console.log(mult);
  console.log(div);
}

calcula(n1, n2);
