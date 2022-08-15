import { BaseDataBase } from './BaseDataBase';
import { User } from '../entities/User';

export class UserDataBase extends BaseDataBase{
    async insertUser(user:User){
        try {
            await this.connection('labook_users')
                .insert({
                id:user.id,
                name:user.name,
                email:user.email,
                password: user.password
        })
        } catch (error:any) {
            throw new Error(error.sqlMessage || error.message)
        }

    }
}