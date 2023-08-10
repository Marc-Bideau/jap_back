import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { User } from '@prisma/client';
import { ExtractJwt } from 'passport-jwt';
import { AuthService, JwtPayload } from './auth.service';
import { Strategy } from "passport-local"
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly authService: AuthService) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.SECRETKEY,
        });
        console.log(process.env.SECRETKEY);
    }

    async validate(payload: JwtPayload, password :string): Promise<User> {
        const user = await this.authService.validateUser(payload,password);
        if (!user) {
            throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
        }
        return user;
    }
}