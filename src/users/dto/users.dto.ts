import { Contains, IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator'


export class CreateUserDTO {
    
    @IsEmail()
    mail : string
    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    name : string
    @IsString()
    @IsNotEmpty()
    password : string
    // si se le pone un ? tras en nombre es porque es opcional
}