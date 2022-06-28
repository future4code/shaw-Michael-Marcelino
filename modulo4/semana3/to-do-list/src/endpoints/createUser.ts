import { Request,Response } from "express";
import inserUser from "../data/inserUser";

export default async function createUser(
req: Request,
res:Response
)
{
    try {
        //validar requisicoes
        if(
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email 

        ){ res.status(400).send('Preencha os campos "name", "nickname", "email"')}

        //consultar o banco de dados
        const id = Date.now().toString() + Math.random().toString()

        await inserUser(
            id,
            req.body.name,
            req.body.nickname, 
            req.body.email 
        )
        res.status(200).send("Usuario criado com sucesso")
        // validar saidas do banco
        // resposta da requisicao || terminar a resquisicao com .end
        
    } catch (error:any) {
        res.status(400).send({
            message:error.message || error.sqlMessage
        })
        
    }
}