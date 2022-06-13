import { Request,Response } from "express";
import moment from 'moment'

export default async function createTask(
req: Request,
res:Response
)
{
    try {
        if(
             !req.body.title ||
             !req.body.description || 
             !req.body.deadline ||
             !req.body.authorId)
             {
                res.status(400).send({
                    message:'"title","description", "dealine", "authorId" sao obrigatorios'
                })
                return
             }
        const dateDiff: number = moment(req.body.authorId,'DD/MM/YYYY').unix() - moment().unix()
    } catch (error:any) {
        res.status(400).send({
            message:error.message || error.sqlMessage
        })
        
    }
}