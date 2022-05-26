const minhaString:string ="w"
let meuNumero :number| string =" arroz"

enum Colors {
    VERMELHO="red",
    LARANJA="orange",
    AMARELO="yellow",
    VERDE="green",
    AZUL="blue",
    VIOLETA="violet"
    }

type person={ name: string, age: number, favoriteColor:string}

const pessoa:person= {
    name: "Michael Douglas",
    age: 30,
    favoriteColor:"blue"
    }

const pessoa2:person={
    name:"Nastia",
    age:26,
    favoriteColor:Colors.AMARELO
}
const pessoa3:person = {
    name:"Nastusa",
    age:27,
    favoriteColor:Colors.VERMELHO
}

// Exercício 2
function obterEstatisticas(numeros:number[],a:number, b:number):object {

    const numerosOrdenados = numeros.sort(
        (a, b) => a - b
    )

    let soma:number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:object = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}
// a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo.ts e faça a tipagem desses parâmetros

// b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas 

// c) Crie um *type* chamado **amostra** de dados, isto é, um objeto com as propriedades **numeros** e **obterEstatisticas**. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:
// type person={ name: string, age: number, favoriteColor:string}
type Amostra={numeros:number[],obterEstatisticas:any}

// Exercício 3

type post ={autor:string,texto:string}
     
const posts:post[] = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]
  function buscarPostsPorAutor(posts:string[], autorInformado:string):string[] {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }