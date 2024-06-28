import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsString } from 'class-validator';


@InputType()
export class CreatePacienteInput {

  @Field(() => String)
  @IsString()
  nombre: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  identificacion: string;

  @Field(() => String)
  @IsNotEmpty()
  @IsString()
  estado: string;

}
