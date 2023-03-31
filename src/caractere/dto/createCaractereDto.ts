import { ApiProperty } from "@nestjs/swagger";

export class CreateCaractereDto{
    @ApiProperty()
    francais:string;
    
    @ApiProperty()
    japonaisKata?:string;
    
    @ApiProperty()
    japonaisHira?:string;

    @ApiProperty()
    Kanji?:string;
    
    @ApiProperty()
    themeId:number;
} 