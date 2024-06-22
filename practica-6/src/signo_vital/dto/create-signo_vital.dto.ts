import { IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from 'class-validator';
export class CreateSignoVitalDto {
    @IsNumber()
    @IsOptional()
    id?: number;

    @IsString()
    @IsOptional()
    descripcion: string;

    @IsString()
    @IsNotEmpty()
    minimo: string;

    @IsString()
    @IsNotEmpty()
    maximo: string;

    @IsString()
    @IsNotEmpty()
    estado: string;
}
