import { Injectable } from '@nestjs/common';
import { User } from './users.entity';
import { UserLanguage, UserRole } from "src/constants/enums"
import { NotFoundException } from '@nestjs/common';


@Injectable()
export class UsersService {
    //Usuario de prueba
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
    },
    ];

    //Get users de prueba
    getAllUsers(){
        return this.users
    }

    getUserByMail(mail: string) : User { // | undefined
        //const actualUser = this.users.find
        const user = this.users.find(user => user.mail === mail);

        if (!user) {
            throw new NotFoundException('User not found');
        }

        return user;
    }

    //Create a partir del mail, nombre y contasenya
    createUser(mail : string, name : string, password : string){
        const user = {
            id : 2 ,
            mail : mail,
            name : name,
            password : password,
            role : UserRole.REGISTRADO,
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

    //Delete lógico a partir de un mail
    //Hay que marcarlos como rechazados, no hay que eliminar en ningún momento a los usuarios
    deleteUser(mail : string){
        this.users.filter(user => user.mail != mail ) // != o !==
        try {
            const user = this.getUserByMail(mail);
            user.deletedAt = new Date // Se pasa por referencia, en el array se cambia al cambiarlo aquí
        } catch (error) {
            console.error("El mail no existe");
        }
    }


}
