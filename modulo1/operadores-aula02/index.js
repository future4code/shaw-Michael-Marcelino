// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)              // falso

// resultado = bool1 && bool2 && bool3
// console.log("b. ", resultado)              //falso

// resultado = !resultado && (bool1 || bool2)
// console.log("c. ", resultado)             // falso

// console.log("d. ", typeof resultado)      // boolean

// 2.Seu colega se aproxima de você falando que o código dele não funciona como devia.
// Vamos ajudá-lo: consegue perceber algum problema? O que será impresso no console?
/* 
let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = primeiroNumero + segundoNumero

console.log(soma) */
//como nao foi feito a conversao os 2 numero vao  concatenar

/* 3.Para o exercício anterior, sugira ao seu colega uma solução para que 
o valor impresso no console seja, de fato, a soma dos dois números.

R= ele pode usar o metodo Number para fazer a conversao do que é retornado pela prompt */

// let idade
// let idadeAmigo
// let idadeFinal

// Number(idade = prompt("Digite sua idade por favor"))
// Number(idadeAmigo = prompt("Digite a idade do seu amigo por favor") )

// console.log("Sua idade é maior do que a do seu melhor amigo?", idade > idadeAmigo)
// console.log("A diferença de idade entre nos é de ", idade - idadeAmigo, "anos.")

// let num = prompt("Insira um numero par")
// Number(num)
// console.log(num %2)
// // ele retorna 1 se for impar que é igual a false
// retorna 0 quando é par que é igual a true

// let idade
//  Number(idade= prompt("Insira sua idade em anos  por favor"))
//  console.log(" Sua idade em meses",idade *12)
//  console.log(" Sua idade em  dias",idade*365)
//  console.log(" Sua idade em horas", idade*(24*365))

let num1, num2;
num1 = prompt("Digite um numero");
num2 = prompt("Digite um numero");
Number(num1, num2);

console.log(" O primeiro numero é maior que segundo?", num1 > num2);
console.log(" O primeiro numero é maior que segundo?", num1 == num2);
console.log(" O primeiro numero é  divisível pelo segundo?", num1 % num2 ==0);
console.log(" O segundo numero é  divisível pelo primeiro?", num2 % num1==1);
