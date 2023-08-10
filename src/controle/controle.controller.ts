import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateControleDto } from './dto/create-controle-dto';
import { UpdateControleDto } from './dto/update-controle.dto';
import { ControleService } from './controle.service';

@Controller('controle')
export class ControleController {
    constructor(private service:ControleService) {}
    @Post()
    createTheme(@Body() createControleDto:CreateControleDto){
        console.log(createControleDto);
        
        return this.service.create(createControleDto);
    }

    @Get(":id")
    getControleById(@Param("id") param){
        return this.service.getById(param);
    } 
    
    @Put(':id')
    updateTheme(@Param('id') id:number,@Body() updateControleDto:UpdateControleDto){
        return this.service.update({where:{id:id}, data: updateControleDto})
    }

    @Delete(":id")
    deleteTheme(@Param("id") param){
        return this.service.delete(param);
    }
    @Get('/byIdUser/:id')
    getControleByIdUser(@Param('id') idUser:string){
        console.log(
         this.service.getControlesByUserId(parseInt(idUser))
        )
        return this.service.getControlesByUserId(parseInt(idUser))
    }

}
