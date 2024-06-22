import { IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from 'class-validator';
export class CreatePacienteDto {
    @IsNumber()
    @IsOptional()
    id?: number;

    @IsString()
    @MinLength(1)
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsOptional()
    identificacion?: string;
}
