import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateCaractereDto } from './dto/createCaractereDto';
import { UpdateCaractereDto } from './dto/updateCaractereDto';

@Controller('caractere')
export class CaractereController {
    prisma = new PrismaClient()

    @Post()
    createCaractere(@Body() createCaractereDto:CreateCaractereDto){
        console.log(createCaractereDto);
        
        return this.prisma.caractere.create({
            data:createCaractereDto
        })

    }
    @Post("/multiple") 
    createMultiples(@Body() json:CreateCaractereDto[]){
        console.log(typeof json, json);
        let listCara=[];
        json.forEach(async element => {
            console.log(element, typeof element.themeId);
            
            await listCara.push(await this.prisma.caractere.create({
                data:element 
            }))
            console.log("caractere inserer", element)
            
        });
        setTimeout(()=>{
            console.log(listCara,"list");
            
        },10000)
    }

    @Get("/the/:id")
    findAllByThematique(@Param('id') param){
        console.log("ici", param);
        
      return this.prisma.caractere.findMany({
            where:{
                themeId: parseInt(param)
            }
        })
    }
 
    @Get("/id/:id")
    findById(@Param('id') param){
      return  this.prisma.caractere.findUnique({
            where:{id:parseInt(param)}
        })
    }


    @Get("/fr/:id")
    findByFrancais(@Param('id') param){
        return this.prisma.caractere.findMany({
            where:{
                francais : param
            }
        })
    }

    @Get("/kat/:id")
    findByKatakana(@Param('id') param){
       return this.prisma.caractere.findMany({
            where:{japonaisKata:param}
        })
    }
    @Get("/hir/:id")
    findByHiragana(@Param('id') param){
       return this.prisma.caractere.findMany({
            where:{japonaisHira:param}
        })
    }
    @Get("/Kanji/:id")
    findByKanji(@Param('id') param){
       return this.prisma.caractere.findMany({
            where:{kanji:param}
        })
    }
    
    @Get()
    getAll(){
        return this.prisma.caractere.findMany({take:1000});
    }
    @Put()
    updateCaractere( @Body() updateCaractereDto:UpdateCaractereDto){
        return this.prisma.caractere.update({
            where: {
                id: updateCaractereDto.id
            },
            data:updateCaractereDto
        })
    }
    @Delete(":id")
    deleteCaractere(@Param("id") param){
       return this.prisma.caractere.delete({
            where:{
                id:parseInt(param)
            }
        })
    }    
}
