import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateControlInput } from './dto/create-control.input';
import { UpdateControlInput } from './dto/update-control.input';
import { Control } from './entities/control.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ControlService {
  constructor(
    @InjectRepository(Control)
    private readonly ControlRepository: Repository<Control>
  ) {}
  async create(createControlInput: CreateControlInput): Promise<Control> {
    const Control = await  this.ControlRepository.create(
      {...createControlInput,
        paciente: {id: createControlInput.id_paciente},
        signo_vital: {id: createControlInput.id_signo_vital}
      });
    // await  this.ControlsRepository.save(Control);
    // return Control;
    const { id  } = await this.ControlRepository.save(Control);
    return await this.findOne(id);
  }

  async findAll(): Promise<Control[]> {
    return await this.ControlRepository.find();
  }

  async findOne(id: number) {
    return await this.ControlRepository.findOne({where:{id}});
  }

  async update(id: number, updateControlInput: UpdateControlInput) {
    const updated =  await this.ControlRepository.preload(updateControlInput);
    return await this.ControlRepository.save(updated);
  }

  async remove(id: number) {
    const deleted = await this.ControlRepository.findOneBy({id});
    if (!deleted) {
      throw new Error(`Respuesta #${id} not found`);
    }
    await this.ControlRepository.delete(id);
    return deleted;

  }
}