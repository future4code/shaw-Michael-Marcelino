// let a = 10
// let b = 10

// console.log(b)

// b = 5
// console.log(a, b)  //SAIDA A = 10 B = 5

// let a = 10
// let b = 20
// c = a   //C 10
// b = c  // B =10
// a = b//   A  = 10

// console.log(a, b, c) //SAIDA A=10 B=10 C=10

// let horasTrabalhadas = prompt("Quantas horas você trabalha por dia?")
// let valorPorDia = prompt("Quanto você recebe por dia?")
// alert(`Voce recebe ${valorPorDia/horasTrabalhadas} por hora`)

/*let nome;
let idade;

nome = prompt("Digite seu nome:");
console.log(typeof nome);

idade = prompt("Digite sua idade:");
console.log(typeof idade);
/*
d) Reflita: por que esse tipo foi impresso? Escreva a resposta em um comentário de código.

R= porque  a funcao prompt sempre retorna uma string, caso desejamos obter o valor de idade,sem ser string devemos comberter com o metodo Number*/

//console.log("Olá, meu nome é ", nome,  "e a minha idade é", idade)


//2.Escreva um programa que faça 3 perguntas de Sim ou Não, armazenado em uma variável. Por exemplo: "Você está //usando uma roupa azul hoje?". Depois, siga os passos:*/

let primeiraPergunta = prompt(" voce gosta de alface?")
console.log(primeiraPergunta)

let segundaPergunta = prompt(" voce gosta de melao?")
console.log(segundaPergunta)

let terceiraPergunta = prompt(" voce gosta de paris?")
console.log(terceiraPergunta)


/*3.Suponha que temos duas variáveis a e b, cada uma com um valor inicial
let a = 10
let b = 25*/

 let a = 10
 let b = 25
 let c

  c = b
  b = a
  a = c
  

console.log(b, a, c )


let num1 = prompt("Digite o primeiro numero")
let num2 = prompt("Digite o segundo numero")
let res = Number(num1) + Number(num2)
console.log(res)



