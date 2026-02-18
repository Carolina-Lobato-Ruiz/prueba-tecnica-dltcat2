import { Contains, IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator'


export class CreateAuthDTO {
    @IsEmail()
    targetEmail : string

    @IsString()
    @IsNotEmpty()
    @MinLength(2)
    name : string

    @IsString()
    @IsNotEmpty()
    password : string
    
}