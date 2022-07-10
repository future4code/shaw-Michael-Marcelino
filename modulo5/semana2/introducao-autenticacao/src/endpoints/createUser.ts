import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { Generate } from "../services/Generate";
import { user } from "../types";

export default async function createUser(
   req: Request,
   res: Response
): Promise<void> {
   try {

      const { name, nickname, email, password } = req.body
   
      if (!name || !nickname || !email || !password) {
         res.statusCode = 422
         throw new Error("Preencha os campos 'name','nickname', 'password' e 'email'")
      }

      const userDB = new UserDatabase()
      const user = await userDB.getByEmail(email)

      if (user) {
         res.statusCode = 409
         throw new Error('Email já cadastrado')
      }

        //Criando instancia de Authent
        //chamando função de  gerar id
      const generate = new Generate()
      const id: string = generate.generateId()

      const newUser: user = { id, name, nickname, email, password }

      await userDB.create(newUser)

        //Criando instancia de Authenticator
      const authenticator = new Authenticator()
      
        //chamando função de  gerar Token
      const token = authenticator.generateToken({id})

      res.status(201).send({ newUser, token })

   } catch (error: any) {
      if (res.statusCode === 200) {
         res.status(500).send({ message: "Internal server error" })
      } else {
         res.send({ message: error.message })
      }
   }
}