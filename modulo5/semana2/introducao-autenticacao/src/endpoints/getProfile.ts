import { Request, Response } from "express"
import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"

export default async function getProfile(req: Request, res: Response){
    try{
        const token = req.headers.authorization
        if(!token){
            throw new Error("Token não enviado")
        }
        //Criando instancia de Authenticator
        const authenticator = new Authenticator()
       //chamando função de pedar id atraves do token
        const data = authenticator.getData(token)
        
        const userDB = new UserDatabase()
        //Passando id, para pegar dados do usuario
        const user = await userDB.getById(data.id)

        res.send({
            user: {
                email: user.email,
                id: user.id
            }
        })


    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: error.message || "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}