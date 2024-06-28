import { CreateControlInput } from './create-control.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateControlInput extends PartialType(CreateControlInput) {
  @Field(() => Int)
  id: number;
}
