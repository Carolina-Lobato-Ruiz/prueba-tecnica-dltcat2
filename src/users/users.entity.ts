import { UserLanguage, UserRole } from "./users.enums"

export class User {
    id : number 
    mail : string
    name : string
    password : string
    role : UserRole
    language : UserLanguage
    createdAt : Date
    updatedAt : Date
    deletedAt : Date
}