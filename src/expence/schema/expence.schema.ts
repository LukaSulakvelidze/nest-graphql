import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Expence {
  @Prop()
  expenceTitle: string;
  @Prop()
  expenceAmount: number;
}

export const ExpenceSchema = SchemaFactory.createForClass(Expence);
