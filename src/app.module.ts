import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { CaractereController } from './caractere/caractere.controller';
import { ThemeController } from './theme/theme.controller';
import { ControleController } from './controle/controle.controller';
import { UserService } from './user/user.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { CaractereModule } from './caractere/caractere.module';
import { ControleModule } from './controle/controle.module';
import { ThemeService } from './theme/theme.service';
import { ThemeModule } from './theme/theme.module';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { configuration } from './configuration';

@Module({
  imports: [
    UserModule,
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      envFilePath: join(__dirname, '..', 'env', process.env.NODE_ENV + '.env'),
    }),
    AuthModule, 
    CaractereModule, 
    ControleModule, 
    ThemeModule,
    
],
  controllers: [],
  providers: [],
})
export class AppModule {
  constructor(){
    console.log('config', configuration() ) 
  }
}
