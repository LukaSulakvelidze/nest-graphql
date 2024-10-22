import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Expence {
  @Field()
  _id: string;
  @Field()
  expenceTitle: string;
  @Field()
  expenceAmount: number;
}
