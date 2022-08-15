import { Request, Response } from "express"
import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"

export default async function login(req: Request, res: Response) {
    try {
        const {email, password} = req.body

        //Criando instacia e pegando os dados de usuario
        const userDB = new UserDatabase()
        const user = await userDB.getByEmail(email)
        
        if(!user){
            throw new Error("Email ou senha incorreta")
        }

        if(user.password != password){
            throw new Error("Email ou senha incorreta")
        }
        //Criando instancia de Authenticator
        const authenticator = new Authenticator()
        //chamando função de gerar Token
        const token = authenticator.generateToken({id: user.id})
        res.send({token})

    } catch (error: any) {
        if (res.statusCode === 200) {
            res.status(500).send({ message: "Internal server error" })
        } else {
            res.send({ message: error.message })
        }
    }
}