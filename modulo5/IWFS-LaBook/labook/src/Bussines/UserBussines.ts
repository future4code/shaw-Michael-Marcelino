import { SignupInputDTO, User } from '../entities/User';
import { IdGenerateId } from "../services/idGenerator";
import { HashManager } from "../services/hashManager";
import { UserDataBase } from '../data/UserDataBase';
import { TokenManager } from '../services/authenticator';


export class UserBussines {
  // metodo da classe
  async signUp(input: SignupInputDTO): Promise<string> {
  try {
    
        if (!input.name || !input.email || !input.password) {
            throw new Error('"name", "email" and "password" must be provided');
        }
        const idGenerator = new IdGenerateId();
        const id: string = idGenerator.generateId();
        const hashManager = new HashManager();

        const cypherPassword = await hashManager.hash(input.password);

        const user:User={
            id,
            name: input.name,
            email: input.email,
            password: cypherPassword
        }
        const userDatabase = new UserDataBase()
        await userDatabase.insertUser(user)

        const tokenManager = new TokenManager()
        const token: string = tokenManager.generateToken({ id });

        return token
        }
  } catch (error) {
    
  }
}
export default UserBussines;

