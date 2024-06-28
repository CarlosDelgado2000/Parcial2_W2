import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateSignoVitalInput {

  @Field(() => String) 
  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @Field(() => String)
  @IsString()
  minimo: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  maximo: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  estado: string;
}
