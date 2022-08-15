import {Request,Response} from "express"
import connection from '../../connection';
import { userTableName } from '../../types';
import { generateToken } from '../../services/authenticator';
import { compareHash } from '../../services/hashManager';

export default async function login(req:Request,res:Response):Promise<void>{
    try {
        const {email, password} = req.body
        
        const [user] =await connection(userTableName)
        .where({email})
        
        const passwordIdCorrect: boolean = compareHash(password,user.password)
        
        if(!passwordIdCorrect){
            res.statusCode =401
            throw new Error("Invalid credentials")
        }
        const token = generateToken({id:user.id})
        res.send({token})

        
    } catch (error:any) {
        console.log(error.message)
       
        if(res.statusCode === 200){
            res.status(500).send("Internal server error")
        }else{
            res.send(error.message)
        }
    }

} 

