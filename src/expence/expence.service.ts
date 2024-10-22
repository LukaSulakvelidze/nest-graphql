import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Expence } from './schema/expence.schema';
import { Model } from 'mongoose';
import { CreateExpenceInputs } from './dto/expence.create.inputs';
import { UpdateExpenceArgs } from './dto/expence.update.args';

@Injectable()
export class ExpenceService {
  constructor(
    @InjectModel(Expence.name) private expenceModel: Model<Expence>,
  ) {}

  find() {
    return this.expenceModel.find();
  }

  create(bodyArgs: CreateExpenceInputs) {
    return this.expenceModel.create(bodyArgs);
  }

  findOne(id: string) {
    return this.expenceModel.findById(id);
  }

  update(id: string, bodyArgs) {
    return this.expenceModel.findByIdAndUpdate(id, bodyArgs, { new: true });
  }

  remove(id) {
    return this.expenceModel.findByIdAndDelete(id);
  }
}
