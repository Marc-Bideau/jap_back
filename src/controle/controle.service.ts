import { Injectable } from '@nestjs/common';
import { Controle, Prisma } from '@prisma/client';
import { CreateCaractereDto } from 'src/caractere/dto/createCaractereDto';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateControleDto } from './dto/create-controle-dto';

@Injectable()
export class ControleService {

  constructor(private prisma: PrismaService) { }

  create(data: CreateControleDto) {
    console.log(data, data.exercicesReponses);

    let listDexo = JSON.stringify(data.exercicesReponses);
    return this.prisma.controle.create({
      data: {
        exercicesReponses: listDexo,
        note: data.note,
        personne: { connect: { id: data.personneId } },
      }
    });
  }


  getAll() {
    return this.prisma.controle.findMany();
  }

  getById(param: Prisma.ControleWhereUniqueInput) {
    return this.prisma.controle.findUnique({
      where: param
    })
  }



  update(params: {
    where: Prisma.ControleWhereUniqueInput;
    data: Prisma.ControleUpdateInput;
  }): Promise<Controle> {
    const { where, data } = params;
    // data.updatedAt = new Date();
    return this.prisma.controle.update({
      data,
      where,
    });
  }
  async delete(where: Prisma.ControleWhereUniqueInput): Promise<Controle> {
    return this.prisma.controle.delete({
      where,
    });
  }

  async getControlesByUserId(idUser: number) {
    const controles = await this.prisma.controle.findMany({
      where: {
        personneId: idUser
      },
      select: {
        id: true,
        exercicesReponses: true,
        note: true,
        date:true,
        personne: true,
        personneId: true,
      },
    });
    console.log(controles);

    controles.forEach((controle) => {

      controle.exercicesReponses=JSON.parse(controle.exercicesReponses)
  });

    return controles
  }
}
