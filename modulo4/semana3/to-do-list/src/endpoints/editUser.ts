import { Request,Response } from "express";

export default async function editUser(
req: Request,
res:Response
)
{
    try {
        //validar requisicoes
       
        if(
            req.body.name ==='' || 
            req.body.nickname ===''||
            req.body.email ==='' 
        ){
            res.status(400).send({ 
                message:"Nenhum dos campos pode estar em branco"
            })
        }
        if(!req.body.name && !req.body.nickname && !req.body.email){
            res.status(400).send({ 
                message:"Escolha pelo menos um valor para alterar"
            })

        }
           
        
    

        
        
    } catch (error:any) {
        res.status(400).send({
            message:error.message || error.sqlMessage
        })
        
    }
}