import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator'


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
    // si se le pone un ! le estás asegurando al compilador que en algún momento le darás un valor, aunque no sea en el contructor
    // también hay un @IsOptional

    //@IsIn(enumerado.VALOR, enumerado.VALOR, ...)
}