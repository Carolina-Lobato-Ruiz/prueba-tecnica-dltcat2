import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
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
        return this.usersService.createUser(newUser.mail, newUser.name, newUser.password);
    }

    @Put(':mail')
    updateUser(@Param('mail') mail : string){
        this.usersService.updateUser(mail)
    }

    /*
    @Patch(':mail')
    updateUser(@Param('mail') mail : string){

    }
    */

    @Delete(':mail')
    deleteUser(@Param('mail') mail : string){
        this.usersService.deleteUser(mail)
    }
}
