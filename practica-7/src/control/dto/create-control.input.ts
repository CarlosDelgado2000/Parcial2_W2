import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateControlInput {
  @Field(() => Number)
  @IsNotEmpty()
  id_paciente: number;

  @Field(() => Number)
  @IsNotEmpty()
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

  @Field(() => String, {nullable: true})
  @IsNotEmpty()
  estado: string;

}
