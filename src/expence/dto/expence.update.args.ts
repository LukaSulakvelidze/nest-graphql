import { Field, InputType } from '@nestjs/graphql';
import { IsMongoId } from 'class-validator';

@InputType()
export class UpdateExpenceArgs {
  @Field()
  @IsMongoId()
  id: string;
  @Field({ nullable: true })
  expenceTitle?: string;
  @Field({ nullable: true })
  expenceAmount?: number;
}
