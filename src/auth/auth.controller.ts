import { Controller, Post, Body, HttpException, HttpStatus, Get, UseGuards, Req } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    public async login(@Body() req: any) {
        const payload = await this.authService.login(req);
        if(!payload){
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
        return payload;
    }

    @Get('refresh')
    @UseGuards(AuthGuard())
    public async refresh(@Req() req: any) {
        const payload = await this.authService.refresh(req.user);
        if(!payload){
            throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
        }
        return payload;
    }
}