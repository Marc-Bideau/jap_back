import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { CaractereController } from './caractere/caractere.controller';
import { ThemeController } from './theme/theme.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, CaractereController, ThemeController],
  providers: [AppService],
})
export class AppModule {}
