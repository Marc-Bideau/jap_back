import { Injectable } from '@nestjs/common';
import { Caractere, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CaractereService {

    constructor(private prisma:PrismaService ){ }

    create(data: Prisma.CaractereCreateInput){
        return this.prisma.caractere.create({
            data
        });        
    }

    createMultiples(json:Prisma.CaractereCreateInput[]){
      console.log(typeof json, json);
      let listCara=[];
      json.forEach(async element => {
          await listCara.push(await this.prisma.caractere.create({
              data:element 
          }))
          console.log("caractere inserer", element)
          
      });
      setTimeout(()=>{
          return listCara          
      },10000)
  }
  getByTheme(themeId){
    return this.prisma.caractere.findMany({
      where:{
          themeId: parseInt(themeId)
      }
  })
  }

  getById(param: Prisma.CaractereWhereUniqueInput){
      return this.prisma.caractere.findUnique({
          where:param
      })
  }
  getByFr(id){
    return this.prisma.caractere.findMany({
      where:{
          francais : id
      }
    })
  }

  getByKata(id){
    return this.prisma.caractere.findMany({
      where:{japonaisKata:id}
    })

  }

  getByHira(param){
    return this.prisma.caractere.findMany({
      where:{japonaisHira:param}
    })
  }
  getByKanji(param){
    return this.prisma.caractere.findMany({
       where:{kanji:param}
    })
  }
  getAll(){
    return this.prisma.caractere.findMany({
      orderBy:{
          themeId:'asc',
      },
      take:1000
    });
  }
  async category(themes){
    let listCara=[]; 
        for(let i=0;i<themes.length;i++){
            listCara.push(await this.prisma.caractere.findMany({
                where:{
                    theme:{
                        id: i
                    }
                },
                orderBy:{
                    themeId:'asc',
                },
                take:1000
            }))
        }
        return listCara;
  }
  

    update(params: {
        where: Prisma.CaractereWhereUniqueInput;
        data: Prisma.CaractereUpdateInput;
      }): Promise<Caractere> {
        const { where, data } = params;
        // data.updatedAt = new Date();
        return this.prisma.caractere.update({
          data,
          where,
        });
      }
      async delete(where: Prisma.CaractereWhereUniqueInput): Promise<Caractere> {
        return this.prisma.caractere.delete({
          where,
        });
      } 
}
