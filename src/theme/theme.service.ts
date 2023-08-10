import { Injectable } from '@nestjs/common';
import { Prisma, Theme } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ThemeService {
    constructor(private prisma:PrismaService ){ }

    create(data: Prisma.ThemeCreateInput){
        return this.prisma.theme.create({
            data
        });        
    }


    getAll(){
        return this.prisma.theme.findMany();
    }

    getById(param: Prisma.ThemeWhereUniqueInput){
        return this.prisma.theme.findUnique({
            where:param
        })
    }
    getByThematique(param){
      console.log(param);
      
        return this.prisma.theme.findFirst({
            where:{
                thematique: param
            }
        })
    }


    update(params: {
        where: Prisma.ThemeWhereUniqueInput;
        data: Prisma.ThemeUpdateInput;
      }): Promise<Theme> {
        const { where, data } = params;
        // data.updatedAt = new Date();
        return this.prisma.theme.update({
          data,
          where,
        });
      }
      async delete(where: Prisma.ThemeWhereUniqueInput): Promise<Theme> {
        return this.prisma.theme.delete({
          where,
        });
      } 


}
