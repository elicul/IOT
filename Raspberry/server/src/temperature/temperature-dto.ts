import { ApiModelProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class TemperatureDto {
  @ApiModelProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly temperature: number;

  @ApiModelProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly humidity: number;

  @ApiModelProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly locationId: number;

  createdDate?: string;
  id?: number;
}
