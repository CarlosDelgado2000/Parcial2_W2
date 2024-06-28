import { Injectable } from '@nestjs/common';
import { CreateSignoVitalInput } from './dto/create-signo-vital.input';
import { UpdateSignoVitalInput } from './dto/update-signo-vital.input';
import { SignoVital } from './entities/signo-vital.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SignoVitalService {
  constructor(
    @InjectRepository(SignoVital)
    private readonly SignoVitalRepository: Repository<SignoVital>
  ) {}
  async create(createSignoVitalInput: CreateSignoVitalInput):Promise<SignoVital> {
    const created =  this.SignoVitalRepository.create(createSignoVitalInput);
    return await this.SignoVitalRepository.save(created);
  }

  async findAll(estado: string): Promise<SignoVital[]>{
    const whereCondition = estado === 'todos' ? {} : { estado };
    return await this.SignoVitalRepository.find({ where: whereCondition });
  }

  async findOne(id: number): Promise<SignoVital> {
    return await this.SignoVitalRepository.findOne({where: {id}});
  }

  async update(id: number, updateSignoVitalInput: UpdateSignoVitalInput): Promise<SignoVital> {
    const updated = await this.SignoVitalRepository.preload(updateSignoVitalInput)
    if (!updated) throw new Error(`Pregunta with id: ${id} not found`);
    return await this.SignoVitalRepository.save(updated);
  }

  async remove(id: number): Promise<SignoVital> {
    await this.SignoVitalRepository.update(id, { estado: 'eliminado' });
    return this.SignoVitalRepository.findOneBy({ id: id });
  }
}