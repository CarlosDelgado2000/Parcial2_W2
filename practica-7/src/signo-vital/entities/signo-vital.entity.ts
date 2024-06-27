import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class SignoVital {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
