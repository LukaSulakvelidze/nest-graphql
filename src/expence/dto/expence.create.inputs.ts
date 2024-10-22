import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateExpenceInputs {
  @Field()
  expenceTitle: string;
  @Field()
  expenceAmount: number;
}
