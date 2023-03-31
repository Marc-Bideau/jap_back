import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateThemeDto } from './dto/createThemeDto';
import { UpdateThemeDto } from './dto/updateThemeDto';

@Controller('theme')
export class ThemeController {
    prisma = new PrismaClient()
    @Post()
    createTheme(@Body() createThemeDto:CreateThemeDto){
        return this.prisma.theme.create({
            data:{
                thematique:createThemeDto.thematique
            }
        })
    }

    @Get("/byId/:id")
    getThematiqueById(@Param("id") param){
        return this.prisma.theme.findFirst({
            where:{
                id: parseInt(param)
            }
        })
    }
    @Get('/byThematique/:thematique')
    getThematiqueByThematique(@Param('thematique') param){
        return this.prisma.theme.findFirst({
            where:{
                thematique: param
            }
        })
    }
    @Get()
    getAll(){ 
       return this.prisma.theme.findMany()
    }
    
    @Put()
    updateTheme(@Body() updateThemeDto:UpdateThemeDto){
        return this.prisma.theme.update({
            where :{
                id:updateThemeDto.id
            },
            data:{
                thematique:updateThemeDto.thematique
            }
        })
    }

    @Delete(":id")
    deleteTheme(@Param("id") param){
        return this.prisma.theme.delete({
            where:{
                id:parseInt(param)
            }
        })
    }



}
