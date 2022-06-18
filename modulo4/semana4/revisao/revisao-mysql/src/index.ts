import app from "./app";
import getAllCharaters from './endpoints/getAllCharacters'
import  createCharacter  from './endpoints/creatAllCharacters';
import deleteCharacter from './endpoints/deleteCharacter';

app.get("/character",getAllCharaters)
app.put("/character",createCharacter)
app.delete("/character/:id",deleteCharacter)