let array
console.log('a. ', array) = undefined

array = null
console.log('b. ', array) = zero pq é null

array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] 
console.log('c. ', array.length) = retorna 11 pq e o tamanho do arraay

let i = 0
console.log('d. ', array[i])  = retorna 3 pq esta no indice zero

array[i+1] = 19
console.log('e. ', array)  = 19 pq e o novo valor da posicao 1

const valor = array[i+6]
console.log('f. ', valor) = 9 pq é o novo valor da posicao 6 do array
2.
const frase = prompt("Digite uma frase")

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length) R= SUBI NUM ÔNIBUS EM MIRROCOS 27


/* let email = prompt("Qual seu email?")
let nome =prompt("Qual nome ?")

console.log(`O e-mail ${email} foi cadastrado com sucesso. Seja bem-vinda(o), ${nome}!`)

 */
/* let arraayComidas = ["lasanha","sushi","churras","pizza"]
console.log(arraayComidas)
console.log(" essas são minhas comidas preferidas ", arraayComidas)

let novaComida = prompt("Qual sua comida preferida?")

arraayComidas.splice(1,1, novaComida)

console.log(arraayComidas)
 */
  function abacate( abacate){

    console.log(' abacate gostoso');
    return abacate
  }

let listaDeTarefas = []
let remover

listaDeTarefas [0] =prompt("1 tarefa")
listaDeTarefas [1]=prompt("1 tarefa")
listaDeTarefas [2]=prompt("1 tarefa")
console.log(listaDeTarefas [0] )
console.log(listaDeTarefas [1] )
console.log(listaDeTarefas [2] )

remover = prompt("Digite o indice que deseja remover")
Number(remover)

listaDeTarefas.splice(remover,remover)

console.log(listaDeTarefas)     