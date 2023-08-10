import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateThemeDto } from './dto/createThemeDto';
import { UpdateThemeDto } from './dto/updateThemeDto';
import { ThemeService } from './theme.service';

@Controller('theme')
export class ThemeController {
constructor(private service: ThemeService){}

@Post()
    createTheme(@Body() createThemeDto:CreateThemeDto){
        return this.service.create(createThemeDto);
    }

    @Get("/byId/:id")
    getThematiqueById(@Param("id") param){
        return this.service.getById(param)
    }
    @Get('/byThematique/:thematique')
    getThematiqueByThematique(@Param('thematique') param){
        return this.getThematiqueByThematique(param);
    }
    @Get()
    getAll(){ 
       return this.service.getAll();
    }
    
    @Put(':id')
    updateTheme(@Param('id') id:number,@Body() updateThemeDto:UpdateThemeDto){
        return this.service.update({where:{id:id},data:updateThemeDto})
    }

    @Delete(":id")
    deleteTheme(@Param("id") param){
        return this.service.delete(param)
    }



}
