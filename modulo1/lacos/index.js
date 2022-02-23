/* let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)// vai imprimir 1,2,3,4,5

const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
} // vai ser impresso  19, 21, 23, 25, 27, 30] 
b) Se eu quisesse acessar o índice de cada elemento dessa lista, o for...of... é suficiente? Se sim, o que poderia ser usado para fazer isso?

sim é suficiente, basta especificar o num que quer acessar*/

/* const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual = 4 < quantidadeTotal = 4){
  let linha = ""
  
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"// linha = linha + "*"
   

  }
  console.log(linha) ***
  quantidadeAtual +1
} */
/// vai imprimir asterisco ate o numero atual ser menor que 4
//LETRA A
let pet = Number(prompt("digite o numero de pet que tem"));
let nomesPet = [];

if (pet === 0) {
  console.log("que pena!pode adotar um");
} else if (pet > 0) {
  for (let i = 0; i < pet; i++) {
    let nome = prompt("qual o nome do pet");
    nomesPet.push(nome);
  }
}
console.log(nomesPet);

//LETRA B
let arrayOrig = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

function imprimeAraay(arrayMike) {
  console.log(arrayMike);
}
imprimeAraay(arrayOrig)

//letra C

function arrayDiv10(arrayMike) {
  for (i = 0; i < arrayMike.length; i++) {
    div = arrayMike[i].length++;
  }

  console.log(div);
}


//letra E

let arrayOriginal = [10,20,30,40,50,60,70,80,90]
let menor=0
let maior=0
for (let num of arrayOriginal) {
    if (num<menor){
       menor=num
       
    }
}
for (let num of arrayOriginal) {
    if (num> maior){
       maior=num
       
    }
  
}
console.log(`o maior nº é ${maior}, e menor é ${menor}`);