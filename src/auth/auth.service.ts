import { Injectable, NotFoundException } from '@nestjs/common';
import { Auth } from './auth.entity'
import { UserLanguage } from "src/constants/enums"

@Injectable()
export class AuthService {

    //Usuario de prueba
    private users: Auth[] = [{
        id : 1 ,
        targetEmail : "email",
        name : 'nombre',
        password : "contrasenia",
        language : UserLanguage.ESP,
        accepteddAt : undefined,
        createdAt : new Date(),
        updatedAt : new Date(),
        deletedAt : new Date()
    },
    ];

    //Get users de prueba sin verificar
    getUnverifiedUsers(){
        const users = this.users.find(user => user.accepteddAt === undefined);
        return users
    }
    
    getUserByMail(mail: string) : Auth { // | undefined
            //const actualUser = this.users.find
            const user = this.users.find(user => user.targetEmail === mail);
    
            if (!user) {
                throw new NotFoundException('User not found');
            }
    
            return user;
        }

    //Registrar usuario. El usuario se registra
    registerUser(mail : string, name : string, password : string){
        const user = {
            id : 2,
            targetEmail : mail,
            verificationToken : undefined,
            name : name,
            password : password,
            language : UserLanguage.ESP,
            accepteddAt : undefined,
            createdAt : new Date(),
            updatedAt : new Date(),
            deletedAt : new Date()
        }

        this.users.push(user);
        return user;
    }

    //Login del usuario. El usuario hace login
    loginUser(mail : string, password : string){
        try {
            const user = this.getUserByMail(mail);
            if (user.accepteddAt !== undefined && user.deletedAt === user.createdAt){
                return user.verificationToken // Hay que devolver el token de acceso, no el de verificación, debe ser temporal y único de cada acceso
            } else if (user.deletedAt !== user.createdAt){
                return "El usuario ha sido rechazado"
            }else{
                return "No ha sido verificado ni denegado"
            }
        } catch (error) {
            console.error("El mail no existe");
            return ""
        }
    }

    //Rechazar al usuario a partir de su mail
    rejectsUser(mail : string){
        try {
            const user = this.getUserByMail(mail);
            user.deletedAt = new Date()
        } catch (error) {
            console.error("El mail no existe");
        }
    }

    //Verificar a un usuario según su mail y su token de verificación
    verifyUser(mail : string, verificationToken : string){
        try {
            const user = this.getUserByMail(mail);
            if(user.verificationToken === verificationToken){
                user.accepteddAt = new Date()
            }else{
                console.error("El token no coincide con el usuario indicado");
            }
        } catch (error) {
            console.error("El mail no existe");
        }
    }
    
}
