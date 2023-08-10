import { Module } from "@nestjs/common"
import { AuthService } from "./auth.service"
import { PassportModule } from "@nestjs/passport"
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from "../user/user.module";
import { AuthController } from './auth.controller';
import { UserService } from "../user/user.service";
import { PrismaModule } from "../prisma/prisma.module";
import { JwtStrategy } from "./jwt.strategy";
import { ConfigModule, ConfigService } from "@nestjs/config";

@Module({
    imports: [
        PrismaModule,
        UserModule,
        PassportModule.register({
            defaultStrategy: 'jwt',
            property: 'user',
            session: false,
        }),
        JwtModule.registerAsync({
            imports: [ConfigModule], // Importez ConfigModule ici
            useFactory: async (configService: ConfigService) => ({
                secret: configService.get<string>('jwt.secret'),
                signOptions: { expiresIn: configService.get<string>('jwt.expiresIn') },
            }),
            inject: [ConfigService], // Injectez ConfigService ici
        }), 
    ],
    providers: [
        AuthService,
        UserService,
        JwtStrategy
    ],
    exports:[
        PassportModule, 
        JwtModule
    ],
    controllers: [
        AuthController
    ],
})
export class AuthModule { 
    constructor(){
        console.log("SECRETKEY:", process.env.SECRETKEY);
    }
}