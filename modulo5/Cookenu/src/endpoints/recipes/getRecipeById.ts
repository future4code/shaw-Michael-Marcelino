import { Request, Response } from "express";
import { recipe, recipeTableName } from '../../types';
import connection from '../../connection';

export default async function getRecipeById(
  req: Request,
  res: Response
): Promise<void> {
    try {
        const [recipe] = await connection(recipeTableName)
        .where({id:req.params.id})
        res.send({recipe})
    } catch (error:any) {
        console.log(error.message)
        if(res.statusCode==200){
            res.status(500).send("Internal server error")
        }else{
            res.send(error.message)
        }
    }
}
