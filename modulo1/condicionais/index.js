const respostaDoUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaDoUsuario)

if (numero % 2 === 0) {
  console.log("Passou no teste.")
} else {
  console.log("Não passou no teste.")
}
/* a) Explique o que o código faz. Qual o teste que ele realiza?
verifica se o numero é par

b) Para que tipos de números ele imprime no console "Passou no teste"?
numero pares

c) Para que tipos de números a mensagem é "Não passou no teste"?
para numero impares */

let fruta = prompt("Escolha uma fruta")
let preco
switch (fruta) {
  case "Laranja":
    preco = 3.5
    break;
  case "Maçã":
    preco = 2.25
    break;
  case "Uva":
    preco = 0.30
    break;
  case "Pêra":
    preco = 5.5
    break; // BREAK PARA O ITEM c.
  default:
    preco = 5
    break;
}
/* console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
a) Para que serve o código acima?
mostrar o preço das frutas

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?  2.25

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?  preco = 5.5 e preco = 5, pararia no default*/
// const numero = Number(prompt("Digite o primeiro número."))

if(numero > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)

/* a) O que a primeira linha está fazendo?

b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?

c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo. */
 
const numero1 = Number(prompt("Digite o primeiro número."))

if(numero1 > 0) {
  console.log("Esse número passou no teste")
	let mensagem = "Essa mensagem é secreta!!!"
}

console.log(mensagem)
 
// a) O que a primeira linha está fazendo?
// armazena a variavel recebida no prompt e converter para numero

// b) Considere um usuário digitou o cnúmero 10. Qual será a mensagem do terminal? E se fosse o número -10?
// Esse número passou no teste, se for -10 vai dar erro pq nao tratamos o programa para esse tipo de açao
// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//a mensagem esta no escopo loca no caso do if, portanto nao consegue ser acessada no console log, se retirarmos ela e colocar-mos acima do /////if, ela passa a ser global e ja pode ser acessada

let idadeUsuario = Number(prompt("Digite sua idade por favor?"));

if (idadeUsuario >= 18) {
  console.log("Voce pode dirigir!! parabéns pequeno gafanhoto :)");
} else {
  console.log(
    "voce nao pode dirigir!, esta sujeito a multa e detenção por 12 meses!!!"
  );
}

const horario = prompt("Digite M (matutino) ou V (Vespertino) ou N (Noturno).");

if (horario === "M" || horario === "M") {

  console.log("Bom dia");
} else if ((horario === "V") || (horario === "V" || "v")) {

  console.log("Boa tarde");
} else if ((horario === "N" )|| (horario"n")) {

  console.log("Boa noite");
}

 let horario2 = prompt("Digite M (matutino) ou V (Vespertino) ou N (Noturno).");

 switch(horario2){

    case ('M') || ('m') :
                console.log("Bom dia ");
    break;
    case 'V' :
                console.log("Boa tarde ");
    break;
    case 'N' :
                console.log("Boa noite ");
    break;

    default:

            console.log("Digite um horario valido por favor")

     break;
            
            
            
 }

const filmeGenero =prompt("Qual genoro do filme ?")
const filmePreco = Number(prompt("Qual genoro do filme ?"))

if((filmeGenero === 'fantasia')  && (filmePreco <=15)){

    console.log("Bom filme")
}else{
    console.log( 'procure outro filme');
}



