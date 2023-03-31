import { ApiProperty, PartialType } from '@nestjs/swagger';
export class UserUpdateDto {
    @ApiProperty({format:"int", readOnly:true})
    id:number
    login?:string
    password?:string
    pseudo?:string
    admin?:boolean
    controle?:[]

}
