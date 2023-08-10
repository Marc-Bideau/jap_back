import { Module } from '@nestjs/common';
import { ControleService } from './controle.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ControleController } from './controle.controller';

@Module({
  imports:[PrismaModule],
  controllers:[ControleController],
  providers: [ControleService]
})
export class ControleModule {}
