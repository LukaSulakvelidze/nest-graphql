import { Module } from '@nestjs/common';
import { ExpenceService } from './expence.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Expence, ExpenceSchema } from './schema/expence.schema';
import { ExpenceResolver } from './expence.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Expence.name, schema: ExpenceSchema }]),
  ],
  providers: [ExpenceService, ExpenceResolver],
})
export class ExpenseModule {}
