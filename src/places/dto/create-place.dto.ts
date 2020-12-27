import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreatePlaceDto {
  @IsNumber()
  readonly kakaoPlaceId: number;

  @IsString()
  readonly name: string;

  @IsString()
  readonly addressName: string;

  @IsString()
  @IsOptional()
  readonly description: string;
}
