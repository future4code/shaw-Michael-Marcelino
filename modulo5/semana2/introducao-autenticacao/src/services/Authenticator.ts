import * as jwt from "jsonwebtoken"
import { AuthenticatorData } from "../types"
//Criação da class autenticator
export class Authenticator {
    //Variavel que guarda o tempo de expiração
    private static EXPIRES_IN = "10m"
    //Função que gera o token
    public generateToken = (payload: AuthenticatorData) => {
        const token = jwt.sign(payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: Authenticator.EXPIRES_IN
            })
        return token
    }
    //Função que verifica e retorna os dados do token
    public getData = (token: string): AuthenticatorData => {
        const data = jwt.verify(token, process.env.JWT_KEY as string) as AuthenticatorData
        return data
    }
}