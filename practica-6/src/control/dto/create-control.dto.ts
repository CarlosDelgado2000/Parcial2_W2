import { IsDate, IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from 'class-validator';
export class CreateControlDto {
    @IsString()
    @IsOptional()
    id?: number;
    

    @IsNumber()
    @IsNotEmpty()
    id_paciente:   number;


    @IsNumber()
    @IsNotEmpty()
    id_signo_vital: number;

    @IsString()
    @IsNotEmpty()
    fecha: Date;

    @IsString()
    @IsNotEmpty()
    hora: Date;
    
    @IsNumber()
    @IsNotEmpty()
    valor: number;

    @IsString()
    @IsNotEmpty()
    estado: string;


}
