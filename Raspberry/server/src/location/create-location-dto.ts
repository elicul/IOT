import { IsNotEmpty, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class CreateLocationDto {
    @ApiModelProperty()
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    createdDate?: string;
}
