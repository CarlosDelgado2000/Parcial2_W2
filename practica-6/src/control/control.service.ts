import { Injectable } from '@nestjs/common';
import { CreateControlDto } from './dto/create-control.dto';
import { UpdateControlDto } from './dto/update-control.dto';
import { Control } from './entities/control.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Paciente } from 'src/paciente/entities/paciente.entity';

@Injectable()
export class ControlService {
  constructor(
    @InjectRepository(Control)
    private readonly ControlRepository: Repository<Control>,
  ) {}

  async create(createControlDto: CreateControlDto): Promise<Control> {
    const Control = this.ControlRepository.create(createControlDto);
    return this.ControlRepository.save(Control);
  }

  async findAll(): Promise<Control[]> {
    return this.ControlRepository.find();
  }

  async findOne(id: number): Promise<Control> {
    return this.ControlRepository.findOneBy({ id: id });
  }

  async update(id: number, updateControlDto: UpdateControlDto): Promise<Control> {
    await this.ControlRepository.update(id, updateControlDto);
    return this.ControlRepository.findOneBy({ id: id });
  }

  async remove(id: number): Promise<Control> {
    await this.ControlRepository.update(id, { estado: 'eliminado' });
    return this.ControlRepository.findOneBy({ id: id });
  }
}