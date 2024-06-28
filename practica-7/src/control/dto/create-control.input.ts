import { Optional } from '@nestjs/common';
import { InputType, Field, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateControlInput {
  @Field(() => Int)
  @Optional()
  id_paciente: number;

  @Field(() => Number)
  id_signo_vital: number;

  @Field(() => Date)
  @IsNotEmpty()
  @IsString()
  fecha: Date;

  @Field(() => Number)
  @IsNotEmpty()
  hora: number;

  @Field(() => Number)
  @IsNotEmpty()
  valor: number;

  @Field(() => String)
  @IsNotEmpty()
  estado: string;

}
