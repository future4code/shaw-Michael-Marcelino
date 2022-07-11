import { connection, filtraPessoa, pessoas, retornarPrimeiraPessoa, trataErro } from "../src"

describe("Meu primeiro teste", () => {

    test("Esse teste vai verificar uma string", () => {
        const nome: string = "rodrigo"

        expect(nome).toBe("rodrigo")

    })

    test("Teste de objeto", () => {
        const pessoa = {
            id: 123,
            nome: "fulano"
        }

        expect(pessoa).toEqual({
            id: 123,
            nome: "fulano"
        })

    })

    test("filtrando uma pessoa",()=>{

        const pessoaFiltrada = filtraPessoa(pessoas,123)

        expect(pessoaFiltrada).toBe({id:123,nome:"Fulano"})
    })

    test("usando o not", () => {
        const numero = 10

        expect(numero).not.toBe(5)
    })

    // teste assincronos
    test("valida funcoes assincronas , buscando a primeira pessoa da tabela user", async () => {
        try {
            const result = await retornarPrimeiraPessoa()
            
        } catch (error:any) {
            
            expect(error.message).toEqual("ER_NO_SUCH_TABLE: Table 'teacher-gabriel-mina.user2' doesn't exist")
        }

    })

    // teste de falso positivo
    test("tratativa de erro",()=>{
        expect.assertions(1)
        try {
            const error = trataErro("123","")
        } catch (error) {
            if(error instanceof Error){
                expect(error.message).toEqual("Esta faltando parametros")   
            }
        }
    })

})
test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 100
	}

	const result = performPurchase(user, 40)
	
	expect(result).toEqual({
		name: "Astrodev",
		balance: 60
	})
})

test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 50
	}

	const result = performPurchase(user, 50)
	
	expect(result).toEqual({
		...user,
		balance: 0
	})
})

test("Testing balance greater than value", () => {
	const user: User = {
		name: "Astrodev",
		balance: 30
	}

	const result = performPurchase(user, 50)
	
	expect(result).not.toBeDefined()
})