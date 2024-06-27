import { Injectable } from '@nestjs/common';
import { CreateSignoVitalInput } from './dto/create-signo-vital.input';
import { UpdateSignoVitalInput } from './dto/update-signo-vital.input';

@Injectable()
export class SignoVitalService {
  create(createSignoVitalInput: CreateSignoVitalInput) {
    return 'This action adds a new signoVital';
  }

  findAll() {
    return `This action returns all signoVital`;
  }

  findOne(id: number) {
    return `This action returns a #${id} signoVital`;
  }

  update(id: number, updateSignoVitalInput: UpdateSignoVitalInput) {
    return `This action updates a #${id} signoVital`;
  }

  remove(id: number) {
    return `This action removes a #${id} signoVital`;
  }
}
