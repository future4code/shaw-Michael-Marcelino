import { v4 } from "uuid";
//Função para gerar id
export class Generate{
    //Função que gera o id
    public generateId(): string{
        return v4()
    }
}
 