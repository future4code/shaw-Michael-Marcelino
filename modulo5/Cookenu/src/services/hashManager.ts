import {hashSync, compareSync,genSaltSync} from "bcryptjs"
import { config } from "dotenv"

config()
const genereteHash =(
    plainText: string
):string =>{
    const rounds:number = Number(process.env.BCRYPT_COST)
    const salt:string = genSaltSync(rounds)
    return hashSync(plainText,salt)
}