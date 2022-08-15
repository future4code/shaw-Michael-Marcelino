const renovaCarteira = (dataNascimento:string, dataEmissao:string):boolean => {
    const idade:number = 2022 - Number(dataNascimento.split('/')[2])
    const tempoEmissao:number = 2022 - Number(dataEmissao.split('/')[2])

const cond1:boolean = idade <= 20 && tempoEmissao >=5
const cond2:boolean = (idade > 20 || idade <=50) && tempoEmissao >=10
const cond3:boolean = idade > 50 && tempoEmissao >=15

    return cond1 || cond2 || cond3
}

console.log(renovaCarteira('24/04/1993', '07/11/2015'))