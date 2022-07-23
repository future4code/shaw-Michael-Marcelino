import * as jwt from "jsonwebtoken"
import dotenv from 'dotenv'
import { authenticationData } from '../entities/User';

dotenv.config()

export class TokenManager {
     generateToken = (
      payload: authenticationData
   ): string => {
      return jwt.sign(
         payload,
         process.env.JWT_KEY as string,
         {
            expiresIn: "24min"
         }
      )
   }
   
    getTokenData = (
      token: string
   ): authenticationData => {
      return jwt.verify(
         token,
         process.env.JWT_KEY as string
      ) as authenticationData
   }
}