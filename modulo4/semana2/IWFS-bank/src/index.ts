import express, { Request, Response } from "express";
import cors from "cors";
import { accounts } from "./accounts";

const app = express();

app.use(express.json());
app.use(cors());

app.post("/users/create", (req, res) => {
  try {
    const { name, CPF, dateOfBirthAsString } = req.body;

    const [day, month, year] = dateOfBirthAsString.split("/");

    const dateOfBirth: Date = new Date(`${year}-${month}-${day}`);
    // validar entradas
    const ageInMilliseconds:number = Date.now() - dateOfBirth.getTime()
    const ageInYears:number = ageInMilliseconds/1000 /60 /60 /24/365

    if(ageInYears < 18){
        res.statusCode =406
        throw new Error ("Idade tem que ser mais que 18 anos")
    }
    //consultar  ou alterar base de dados
    
    accounts.push({
      name,
      CPF,
      dateOfBirth,
      balance: 0,
      statement: [],
    });
    res.status(201).send("Conta Criada com sucesso!");
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});
app.get("/users/all", (req, res) => {
  try {
    if (!accounts.length) {
      res.statusCode = 404;
      throw new Error("Nenhuma conta encontrada");
    }
    res.status(200).send(accounts);
  } catch (error: any) {
    res.status(400).send(error.message);
  }
});
app.listen(3003, function () {
  console.log("Server is running in locahost:3003 !");
});
