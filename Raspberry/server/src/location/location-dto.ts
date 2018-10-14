import { IsNotEmpty, IsString } from 'class-validator';
import { ApiModelProperty } from '@nestjs/swagger';

export class LocationDto {
    @ApiModelProperty()
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    createdDate?: string;
    id?: number;
}
