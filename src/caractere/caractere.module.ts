import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { CaractereController } from './caractere.controller';
import { CaractereService } from './caractere.service';

@Module({
    imports:[PrismaModule],
    controllers: [CaractereController],
    providers:[CaractereService]
})
export class CaractereModule {
    
}
