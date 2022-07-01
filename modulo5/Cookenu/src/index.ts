import app from "./app";
import connection from './connection';
import genereteId from './services/idGeneretor';

// connection.raw("SHOW TABLES").then(console.log)  testar se esta ok conexao com a database

app.get("/")
console.log("seu novo id :",genereteId());