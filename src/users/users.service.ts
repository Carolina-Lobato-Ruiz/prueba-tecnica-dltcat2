import { Injectable } from '@nestjs/common';
import { User } from './users.entity';
import { UserLanguage, UserRole } from "./users.enums"
import { NotFoundException } from '@nestjs/common';


@Injectable()
export class UsersService {
    //Usuario de prueba
    private users: User[] = [{
        id : 1 ,
        mail : "email",
        name : 'nombre',
        password : "contrasenia",
        role : UserRole.NO_REGISTRADO,
        language : UserLanguage.ESP,
        createdAt : new Date(),
        updatedAt : new Date(),
        deletedAt : new Date()
    },
    ];

    //Get users de prueba
    getAllUsers(){
        return this.users
    }

    getUserByMail(mail: string) : User { // | undefined
        const actualUser = this.users.find
        const user = this.users.find(user => user.mail === mail);

        if (!user) {
            throw new NotFoundException('User not found');
        }

        return user;

        //return this.users.find(user => user.mail === mail) // == o ===
    }

    //Create a partir del mail, nombre y contasenya
    createUser(mail : string, name : string, password : string){
        const user = {
            id : 2 ,
            mail : "email",
            name : 'nombre',
            password : "contrasenia",
            role : UserRole.NO_REGISTRADO,
            language : UserLanguage.ESP,
            createdAt : new Date(),
            updatedAt : new Date(),
            deletedAt : new Date()
        }

        this.users.push(user);
        return user;
    }

    //Update a partir de mail, para registrar un usuario
    updateUser(mail : string){
        try {
            const user = this.getUserByMail(mail);
            user.role = UserRole.REGISTRADO // Se pasa por referencia, en el array se cambia al cambiarlo aquí
        } catch (error) {
            console.error("El mail no existe");
        }
    }

    //Esto es a lo que se refiere cuando pide (imagen 05, 3er post): "rechaza todas las peticiones pendientes asociadas a un email" ?
    //Eliminar el usuario sin registrar
    //Hay que marcarlos como rechazados, no hay que eliminar en ningún momento a los usuarios
    deleteUser(mail : string){
        this.users.filter(user => user.mail != mail ) // != o !==
    }


}
