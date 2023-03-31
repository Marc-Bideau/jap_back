import { ApiProperty } from "@nestjs/swagger";

export class UserCreateDto {
    login:string 
    mdp:string
    pseudo?:string
    admin?: boolean
}
