ˋˋˋ
function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
  let cont = 0;
  tamanho = arrayDeNumeros.length;

  for (i = 0; i < tamanho; i++) {
        posicao = arrayDeNumeros[i];
        if (posicao === numeroEscolhido) {
            cont = cont + 1;
        } else{
            console.log("Numero não encontrado")
        }
  }
  return console.log(`O numero ${numeroEscolhido} aparece ${cont} vezes`);
}

