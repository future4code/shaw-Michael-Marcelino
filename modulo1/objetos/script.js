/* 



//exercicio 1


const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
}

console.log(filme.elenco[0])// o primeiro elemento do array Matheus Nachtergaele
console.log(filme.elenco[filme.elenco.length - 1])// o ultimo elemento do array  Virginia Cavendish"
console.log(filme.transmissoesHoje[2])// globo as 14 
//exercicio 2
const cachorro = {
	nome: "Juca", 
	idade: 3, 
	raca: "SRD"
}

const gato = {...cachorro, nome: "Juba"}

const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro) //fica igual
console.log(gato) // vai imprimir juba
console.log(tartaruga)// vai imprimir Jubo


function minhaFuncao(objeto, propriedade) {
	return objeto[propriedade]
}

const pessoa = {
  nome: "Caio", 
  idade: 23, 
  backender: false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura")) // vai retornar undefined pq vao ser inseridos 2 novas propriedade e sem valores
 */

const nomePessoa = {
  nome: "Anastasia",
  apelidos: ["Nastia", "Nastusha", "Macaca"],
}

function arrayPessoa(objeto) {
  console.log(`Olá eu sou a ${nomePessoa.nome}, mas pode me chamar de: ${nomePessoa.apelidos[0]},${nomePessoa.apelidos[1]}, ${nomePessoa.apelidos[2]} `
  )
}

const novoObjeto = {
  ...nomePessoa,
  apelidos: ["macaca", "cafe", "arrox"]
}

arrayPessoa(novoObjeto)

//questao 2

const pessoa1 ={
    nome:"Anastasia Brailovska",
    idade: 25,
    profissao: "Developer"

}
const pessoa2 ={
    nome:"Michael Marcelino",
    idade: 28,
    profissao: "Developer"

}

function recebeObjeto(pessoa){
    const resultado = [pessoa.nome,pessoa.nome.length,pessoa.idade, pessoa.profissao, pessoa.profissao.length]

    return resultado

}

console.log(recebeObjeto(pessoa2))


let carrinho =[]

const mamao ={
    nome:'mamao',
    disponibilidade: true
}
const melao ={
    nome:'melao',
    disponibilidade: true
}
const maca ={
    nome:'maca',
    disponibilidade: true
}
function frutasRecebe(fruta){
    const arrayFruta=  carrinho.push(fruta) 

    return fruta
}

carrinho.push(mamao,melao,maca)
console.log(carrinho);