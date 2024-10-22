import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ExpenceService } from './expence.service';
import { Expence } from './dto/expence.interface';
import { CreateExpenceInputs } from './dto/expence.create.inputs';
import { IsValidArgsId } from './dto/is-valaid-id';
import { UpdateExpenceArgs } from './dto/expence.update.args';

@Resolver()
export class ExpenceResolver {
  constructor(private expenceService: ExpenceService) {}

  @Query(() => [Expence])
  getAllExpence() {
    return this.expenceService.find();
  }

  @Query(() => Expence, { nullable: true })
  findOne(@Args('id') { id }: IsValidArgsId) {
    return this.expenceService.findOne(id);
  }

  @Mutation(() => Expence)
  create(@Args('bodyArgs') bodyArgs: CreateExpenceInputs) {
    return this.expenceService.create(bodyArgs);
  }

  @Mutation(() => Expence, { nullable: true })
  update(@Args('bodyArgs') { id, ...bodyArgs }: UpdateExpenceArgs) {
    return this.expenceService.update(id, bodyArgs);
  }

  @Mutation(() => Expence, { nullable: true })
  remove(@Args('id') { id }: IsValidArgsId) {
    return this.expenceService.remove(id);
  }
}
