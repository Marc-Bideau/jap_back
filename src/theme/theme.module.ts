import { Module } from '@nestjs/common';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ThemeController } from './theme.controller';
import { ThemeService } from './theme.service';

@Module({
    imports:[PrismaModule],
    controllers:[ThemeController], 
    providers:[ThemeService]
})
export class ThemeModule {}
