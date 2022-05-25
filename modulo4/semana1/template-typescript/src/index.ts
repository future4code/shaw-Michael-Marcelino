// escreva o seu código aqui
function checaTriangulo(a:number, b:number, c:number):string {
    if (a !== b && b !== c) {
      return "Escaleno";
    } else if (a === b && b === c) {
      return "Equilátero";
    } else {
      return "Isósceles";
    }
  }

//   2- exercicio 
  function imprimeTresCoresFavoritas():void {
    const cor1:string = prompt("Insira sua primeira cor favorita")
    const cor2:string = prompt("Insira sua segunda cor favorita")
    const cor3:string = prompt("Insira sua terceira cor favorita")
    console.log([cor1, cor2, cor3])
 }
// 3-exercicio

function checaAnoBissexto(ano:number):boolean{ 
    const cond1 = ano % 400 === 0
    const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
    return cond1 || cond2
//  }
// 5-exercicio
function comparaDoisNumeros(num1:number, num2:number):number {
    let maiorNumero:number;
    let menorNumero:number;
  
    if (num1 > num2) {
      maiorNumero = num1;
      menorNumero = num2;
    } else {
      maiorNumero = num2;
      menorNumero = num1;
    }
  
    const diferenca = maiorNumero - menorNumero;
  
    return diferenca 
//   }

function checaRenovacaoRG() :boolean{
    const anoAtual:number= Number(prompt("Digite o ano atual"))
    const anoNascimento:number = Number(prompt("Digite o ano de nascimento"))
    const anoEmissao:number = Number(prompt("Digite o ano de emissão do documento"))
 
    const idade:number = anoAtual - anoNascimento
    const tempoCarteira = anoAtual - anoEmissao
 
    const cond1:boolean = idade <= 20 && tempoCarteira >= 5
    const cond2:boolean = idade > 20 && idade <= 50 && tempoCarteira >= 10
    const cond3:boolean = idade > 50 && tempoCarteira >= 15
 
    return (cond1 || cond2 || cond3)
 }
 
// 6-exercicio
function operacoes(num1:number, num2:number):void{
    let soma:number = num1 + num2
    let subtracao:number = num1 - num2
    let divisao:number = num1 / num2
    let multiplicacao:number = num1 * num2
    let maiorNumero:number = num1;
    let menorNumero:number = num2;
    if (num1 > num2) {
      let  maiorNumero:number = num1;
      let menorNumero:number = num2;
      } else {
     maiorNumero  = num2;
      menorNumero = num1;
      }
    console.log("a soma e "+ soma, " a subtracao e " +subtracao,"a divisao e ", divisao, " a multi e ", multiplicacao, " o maior dos numero eh ", maiorNumero );
}
operacoes(10,5)
// 7-exercicio


let texto:string = "ATT GCT GCG CAT TAA CGA CGC GTA";
let novoTexto:string = texto.replace(/A/gi, "U");
let novoTexto1:string = novoTexto.replace(/T/gi, "A");
let novoTexto2:string = novoTexto1.replace(/C/gi, "G");
//  let novoTexto3:string = novoTexto2.replace(/G/gi, "C");

console.log(novoTexto2);

// 8-exercicio
function reverse(nome:string):string{
    return nome.split("").reverse().join("");
}

let nome:string = reverse("adam")
console.log(nome)