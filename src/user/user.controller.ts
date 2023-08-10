import { PrismaClient, User } from '.prisma/client';
import { Body, Controller, Delete, Get, Param, Post, Put, Req } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { type } from 'os';
import { UserCreateDto } from './user-create.dto/user-create.dto';
import { UserUpdateDto } from './user-update.dto/user-update.dto';
import { UserService } from './user.service';



@Controller('user')
export class UserController {
    constructor(private readonly service: UserService) { }

    @Post()
    createUser(@Body() createUserDto:UserCreateDto){
        return this.service.create(createUserDto);       
    }

    @Get()
    findAll(){
        return this.service.getAll();
    }

    @Get(":id")
    findOneWithId(@Param('id') param){
        param = parseInt(param)

        console.log(typeof param );
        return this.service.getById({id:param});
    }

    @Put()
    update( @Body() updateUserDto: UserUpdateDto){
        console.log(updateUserDto,"lalalalalal");

        return this.update(updateUserDto);
    }
    @Delete(':id')
    delete(@Param('id') param){
        return this.delete(param);
    }

}
