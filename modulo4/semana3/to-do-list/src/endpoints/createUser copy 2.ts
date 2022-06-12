import { Request,Response } from "express";

export default async function createUser(
req: Request,
res:Response
)
{
    try {
        //validar requisicoes

        //consultar o banco de dados

        // validar saidas do banco
        
        // resposta da requisicao || terminar a resquisicao com .end
        
    } catch (error:any) {
        res.status(400).send({
            message:error.message || error.sqlMessage
        })
        
    }
}