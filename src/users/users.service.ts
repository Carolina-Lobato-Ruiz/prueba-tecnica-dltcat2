import { Injectable } from '@nestjs/common';
import { User } from './users.entity';
import { UserLanguage, UserRole } from "./users.enums"

@Injectable()
export class UsersService {

    private users: User[] = [{
        id : 1 ,
        mail : "email",
        name : 'nombre',
        password : "contrasenia",
        role : UserRole.REGISTRADO,
        language : UserLanguage.ESP,
        createdAt : new Date(),
        updatedAt : new Date(),
        deletedAt : new Date()
    }
    ];

    getAllUsers(){
        return this.users
    }

    createUsers(mail : string, name : string, password : string){
        const user = {
            id : 2 ,
            mail : "email",
            name : 'nombre',
            password : "contrasenia",
            role : UserRole.REGISTRADO,
            language : UserLanguage.ESP,
            createdAt : new Date(),
            updatedAt : new Date(),
            deletedAt : new Date()
        }

        this.users.push(user);
        return user;
    }

    updateUsers(){

    }

    deleteUsers(){

    }
}
