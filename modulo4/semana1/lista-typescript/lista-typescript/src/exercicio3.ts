enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}
type Filme = {
    nome:string,
    anoLancamento:number,
    genero:string,
    pontuacao?:number
}
const filme = (nome:string,anoLancamento:number,genero:GENERO,pontuacao?:number):Filme => {
    let saida:Filme = {
        nome:nome,
        anoLancamento:anoLancamento,
        genero:genero
    }
    pontuacao ? saida = {...saida, pontuacao:pontuacao} : saida
    return saida
}

// testes 

console.log(filme("Mogli", 2021, GENERO.ACAO, 25))
console.log(filme("Mogli", 2021, GENERO.ACAO))