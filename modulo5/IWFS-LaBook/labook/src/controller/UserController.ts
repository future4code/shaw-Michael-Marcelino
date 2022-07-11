import { Request, Response } from "express";
import { SignupInputDTO } from '../entities/User';
import UserBussines from '../Bussines/UserBussines';

export  class UserController{

    async signUp(req: Request, res: Response) {
        try {
            let message = "Success!"
            const { name, email, password } = req.body

            const input :SignupInputDTO ={
               name:req.body.name ,
               email:req.body.email,
               password:req.body.password
            }
      
            const userBussines = new UserBussines()
            const token = userBussines.signUp(input)
            
            res.status(201).send({ message, token })
      
         } catch (error:any) {
            res.statusCode = 400
            let message = error.sqlMessage || error.message
      
            res.send({ message })
         }
    }

    async login(req: Request, res: Response) {

    }
}

export default UserController