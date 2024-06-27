import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateSignoVitalInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
