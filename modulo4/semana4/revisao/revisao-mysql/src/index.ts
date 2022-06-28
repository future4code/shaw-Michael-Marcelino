import app from "./app";
import getAllCharaters from './endpoints/getAllCharacters'
import deleteCharacter from './endpoints/deleteCharacter';
import createCharacter from "./endpoints/creatAllCharacters";

app.get("/character",getAllCharaters)
app.put("/character",createCharacter)
app.delete("/character/:id",deleteCharacter)