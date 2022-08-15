import { Request, Response } from "express";
import { getTokenData } from '../../services/authenticator';
import generateId from '../../services/idGeneretor';
import connection from '../../connection';
import { recipeTableName } from '../../types';

export default async function createRecipe(
  req: Request,
  res: Response
): Promise<void> {
    try {
        const token = req.headers.authorization
        const {title,description} = req.body
        const tokenData =getTokenData(token!)

        const id = generateId()

        const createdAt = new Date()
        await connection(recipeTableName)
        .insert({
            id,
            title,
            description,
            created_at:createdAt,
            author_id:tokenData!.id
        })
        res.send("Recipe sucessfully created!")
        
        
    } catch (error:any) {
        console.log(error.message)
        if(res.statusCode==200){
            res.status(500).send("Internal server error")
        }else{
            res.send(error.message)
        }
    }
}
