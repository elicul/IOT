import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateLocationDto {
    @ApiModelProperty()
    @IsNotEmpty()
    @IsString()
    readonly name: string;

    @ApiModelProperty()
    readonly createdDate: string;
}
