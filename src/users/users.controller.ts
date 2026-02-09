import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service'
import { CreateUserDTO } from './dto/users.dto'

@Controller('users')
export class UsersController {

    constructor(private usersService : UsersService){

    }

    @Get()
    getAllUsers(){
        return this.usersService.getAllUsers();
    }

    @Post()
    createUser(@Body() newUser : CreateUserDTO){
        return this.usersService.createUsers(newUser.mail, newUser.name, newUser.password);
    }
}
