import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateCaractereDto } from './dto/createCaractereDto';
import { UpdateCaractereDto } from './dto/updateCaractereDto';
import { log } from 'console';
import { CaractereService } from './caractere.service';

@Controller('caractere')
export class CaractereController {
    constructor(private service:CaractereService) {

    }
    @Post()
    createCaractere(@Body() createCaractereDto:CreateCaractereDto){
        console.log(createCaractereDto);
        
        return this.service.create(createCaractereDto);

    }
    @Post("/multiple") 
    createMultiples(@Body() json:CreateCaractereDto[]){
        return this.service.createMultiples(json);
    }

    @Get("/the/:id")
    findAllByThematique(@Param('id') param){
        return this.service.getByTheme(param)
    }
 
    @Get("/id/:id")
    findById(@Param('id') param){
      return  this.service.getById(param);
    }


    @Get("/fr/:id")
    findByFrancais(@Param('id') param){
        return this.service.getByFr(param);
    }

    @Get("/kat/:id")
    findByKatakana(@Param('id') param){
       return this.service.getByKata(param)
    }
    @Get("/hir/:id")
    findByHiragana(@Param('id') param){
       return this.service.getByHira(param);
    }
    @Get("/Kanji/:id")
    findByKanji(@Param('id') param){
       return this.service.getByKanji(param)
    }
    
    @Get()
    getAll(){
        return this.service.getAll();
    }

    @Post('/category')
    async getAllFiveCategory(@Body() themes:any){   
        console.log(themes);
        
        return this.service.category(themes);
       
    }
    @Put(':id')
    updateCaractere(@Param('id') id:number, @Body() updateCaractereDto:UpdateCaractereDto){
        return this.service.update({where:{id:id},data:updateCaractereDto});
    }
    @Delete(":id")
    deleteCaractere(@Param("id") param:number){
       return this.service.delete({id:param});
    }    
}
