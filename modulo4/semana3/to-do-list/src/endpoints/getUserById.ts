import { Request,Response } from "express";
import selectUserById from "../data/selectUser";

export default async function createUser(
req: Request,
res:Response
)
{
    try {

        //consultar o banco de dados
        const user =await selectUserById(req.params.id)

        if(!user){
            res.status(404).send({
                message:"Usuario nao encontrado"
            })
           
        }
        res.status(404).send({
            id:user.id,
            nickname:user.nickname
        })
        
    } catch (error:any) {
        res.status(400).send({
            message:error.message || error.sqlMessage
        })
        
    }
}