import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDTO } from './dto/auth.dto';

@Controller('auth')
export class AuthController {

    constructor(private authService : AuthService){
    
    }

    @Get(":unverified")
    getUnverifiedUsers(){
        return this.authService.getUnverifiedUsers();
    }

    
    @Post(":register")
    registerUser(@Body() newUser : CreateAuthDTO){
        //return this.authService.createUser(newUser.mail, newUser.name, newUser.password);
    }

    @Post(":login")
    loginUser(@Body() newUser : CreateAuthDTO){
        //return this.authService.createUser(newUser.mail, newUser.name, newUser.password);
    }

    @Post(":reject")
    rejectsUser(@Body() newUser : CreateAuthDTO){
        //return this.authService.createUser(newUser.mail, newUser.name, newUser.password);
    }

    @Post(":verify")
    verifyUser(@Body() newUser : CreateAuthDTO){
        //return this.authService.createUser(newUser.mail, newUser.name, newUser.password);
    }
    
}
