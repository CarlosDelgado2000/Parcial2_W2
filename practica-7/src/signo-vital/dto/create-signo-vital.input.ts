import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';

@InputType()
export class CreateSignoVitalInput {

  @Field(() => String) 
  @IsNotEmpty()
  @IsString()
  descripcion: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  minimos: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  maximos: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  estado: string;
}
