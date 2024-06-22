import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SignoVital } from './entities/signo_vital.entity';
import { CreateSignoVitalDto } from './dto/create-signo_vital.dto';
import { UpdateSignoVitalDto } from './dto/update-signo_vital.dto';

@Injectable()
export class SignoVitalService {
  constructor(
    @InjectRepository(SignoVital)
    private readonly SignoVitalRepository: Repository<SignoVital>,
  ) {}

  async create(createSignoVitalDto: CreateSignoVitalDto): Promise<SignoVital> {
    const signovital = this.SignoVitalRepository.create(createSignoVitalDto);
    return this.SignoVitalRepository.save(signovital);
  }

  async findAll(): Promise<SignoVital[]> {
    return this.SignoVitalRepository.find();
  }

  async findOne(id: number): Promise<SignoVital> {
    return this.SignoVitalRepository.findOneBy({ id: id });
  }

  async update(id: number, updateSignoVitalDto: UpdateSignoVitalDto): Promise<SignoVital> {
    await this.SignoVitalRepository.update(id, updateSignoVitalDto);
    return this.SignoVitalRepository.findOneBy({ id: id });
  }

  async remove(id: number): Promise<SignoVital> {
    await this.SignoVitalRepository.update(id, { estado: 'eliminado' });
    return this.SignoVitalRepository.findOneBy({ id: id });
  }
}