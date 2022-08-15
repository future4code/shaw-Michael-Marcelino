import app from "./app"
import createCharacter from "./endpoints/createCharacter"
import deleteCharacter from "./endpoints/deleteCharacter"
import getAllCharacters from "./endpoints/getAllCharacters"
import { UserAccount,Transaction } from './classes';

app.get("/character", getAllCharacters)
app.post("/character", createCharacter)
app.delete("/character/:id", deleteCharacter)


// Exercicio 1 
// A - para poder privar a minha classe
//B-  foi impreso apenas uma vez
// C- fazendo a instancia dela e acessando a atraves do nome da classe seguido de ponto
// const novoUser = new UserAccount("98989","michael",18)

// const neWconDesc = new Transaction("Michael",22,"douglas")
// console.log(neWconDesc.getDescription());