// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  mostraArray = array.length;
  return mostraArray;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  ArrayInvertido = array.reverse();

  return ArrayInvertido;
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  let ordenado = array.sort();

  return ordenado;
}
//console.log(retornaArrayOrdenado([5,4,3,3,2,1]))

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  const par = (x) => x % 2 === 0;

  const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

  let pares = [];

  for (i = 0; i < numeros.length; i++) {
    if (par(numeros[i])) {
      pares.push(numeros[i]);
    }
  }

  console.log(pares);
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maior = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i];
    }
  }
  return maior;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
  let maior = Math.max(num1, num2);
  let divisivel = Math.max(num1, num2) % Math.min(num1, num2);
  let diferencaNum = Math.max(num1, num2) - Math.min(num1, num2);
  let obj = {
    maiorNumero: maior,
    maiorDivisivelPorMenor: divisivel,
    diferenca: diferencaNum,
  };
  return obj;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoB === ladoC) {
    triangulo = console.log("triangulo equilatero");
  } else if (ladoA === ladoB || ladoA === ladoC) {
    triangulo = console.log("triangulo isosceles");
  } else {
    triangulo = console.log("tringulo escaleno");
  }
  return triangulo;
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
  filme = {
    nome: "O Diabo Veste Prada",
    ano: 2006,
    diretor: "David Frankel",
    atores: ["Meryl Streep", "Anne Hathaway", "Emily Blunt", "Stanley Tucci"],
  };
  return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores[0]}, ${filme.atores[1]}, ${filme.atores[2]},  ${filme.atores[3]}.`;
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
  pessoa = {
    nome: "Astrodev",
    idade: 25,
    email: "astrodev@labenu.com.br",
    endereco: "Rua do Futuro, 4",
  };
  let clonePessoa = {
    ...pessoa,
    nome: "ANONIMO",
  };

  return clonePessoa;
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
  const permissao = pessoas.filter((pessoa) => {});
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
