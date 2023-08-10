import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from '@prisma/client';

@Injectable()
export class UserService {

    constructor(private prisma:PrismaService ){ }

    create(data: Prisma.UserCreateInput){
        return this.prisma.user.create({
            data
        });        
    }


    getAll(){
        return this.prisma.user.findMany();
    }

    getById(param: Prisma.UserWhereUniqueInput){
      console.log('here', param);
      
        return this.prisma.user.findUnique({
            where:param
        })
    }

    findByPayload({ login }: any): Promise<User|null> {
      console.log(login);
      
      return this.getById( {login:login} );
    }

    update(params: {
        where: Prisma.UserWhereUniqueInput;
        data: Prisma.UserUpdateInput;
      }): Promise<User> {
        const { where, data } = params;
        // data.updatedAt = new Date();
        return this.prisma.user.update({
          data,
          where,
        });
      }
      async delete(where: Prisma.UserWhereUniqueInput): Promise<User> {
        return this.prisma.user.delete({
          where,
        });
      }
}
