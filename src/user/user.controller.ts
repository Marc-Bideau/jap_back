import { PrismaClient, User } from '.prisma/client';
import { Body, Controller, Get, Param, Post, Put, Req } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { type } from 'os';
import { UserCreateDto } from './user-create.dto/user-create.dto';
import { UserUpdateDto } from './user-update.dto/user-update.dto';



@Controller('user')
export class UserController {
    prisma = new PrismaClient()
    
    @Post()
    createUser(@Body() createUserDto:UserCreateDto){
        return this.prisma.user.create({
            data:{
                login: createUserDto.login,
                mdp: createUserDto.mdp,
                pseudo: createUserDto.pseudo,
                admin: createUserDto.admin
            }
        })        
    }

    @Get()
    findAll(){
        return this.prisma.user.findMany();
    }

    @Get(":id")
    findOneWithId(@Param('id') param){
        return this.prisma.user.findFirst({where:{
            id:parseInt(param)
        }})
    }

    @Put()
    update( @Body() updateUserDto: UserUpdateDto){
        console.log(updateUserDto,"lalalalalal");

        return this.prisma.user.update({
            where:{
                id: updateUserDto.id,
            },
            data:{
                login : updateUserDto.login,
                mdp: updateUserDto.password,
                pseudo: updateUserDto.pseudo,
                admin:updateUserDto.admin
            }
        })
    }

}
