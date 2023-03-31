import { ApiProperty, PartialType } from "@nestjs/swagger";
import { CreateCaractereDto } from "./createCaractereDto";

export class UpdateCaractereDto extends PartialType(CreateCaractereDto){
    @ApiProperty({ format: 'uuid', readOnly: true })
    id:number
}