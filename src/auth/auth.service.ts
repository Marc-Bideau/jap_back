import { ForbiddenException, HttpException, HttpStatus, Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
//import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from '@prisma/client';
import { UserService } from '../user/user.service';

export interface JwtPayload { login: string; id?: number; }

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UserService, private readonly jwtService: JwtService) { }

    async validateUser(payload: JwtPayload, password: string): Promise<User | null> {
        console.log('inside', payload);
        
        const user = await this.usersService.findByPayload(payload);
        console.log(user, 'user');
        
        if (!user) {
          throw new HttpException('Identifiants invalides', HttpStatus.UNAUTHORIZED);
        }
        
        if (user.mdp !== password) {
          throw new HttpException('Mot de passe incorrect', HttpStatus.UNAUTHORIZED);
        }
        
        return user;
      }
      

    async login(loginpayload: any) {
        let payload: JwtPayload = { login: loginpayload.login };
        console.log('payloadLogin', payload);
        
        let user = await this.validateUser(payload, loginpayload.password);
        if (!user) {
            return null;
        }

        payload = { login: user.login!, id: user.id };

        console.log(process.env.SECRETKEY ,"env");
        
        return {
            user:user,
            expiresIn: process.env.EXPIRESIN,
            access_token: this.jwtService.sign(payload),
        };
    }

    async refresh(loginpayload: any){
        let payload: JwtPayload = { login: loginpayload.login };
        let user = await this.validateUser(payload, loginpayload.password);
        if (!user) {
            return null;
        }
        payload = { login: user.login!, id: user.id };

        return {
            user: {
                login: user.login,
                id: user.id,
            },
            expiresIn: process.env.EXPIRESIN,
            access_token: this.jwtService.sign(payload),
        };
    }
}