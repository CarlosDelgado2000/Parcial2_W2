import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePacienteInput } from './dto/create-paciente.input';
import { UpdatePacienteInput } from './dto/update-paciente.input';
import { Paciente } from './entities/paciente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(Paciente)
    private readonly PacienteRepository: Repository<Paciente> ,
  ) {}
  async create(createPacienteInput: CreatePacienteInput): Promise<Paciente> {
    const newPaciente = this.PacienteRepository.create(createPacienteInput);
    return await this.PacienteRepository.save(newPaciente);
  }

  async findAll(): Promise<Paciente[]> {
    return this.PacienteRepository.find();
  }

  async findOne(id: number): Promise<Paciente> {
    const item = await this.PacienteRepository.findOneBy({id});
    if (!item) throw new NotFoundException('Item not found');
    return item;
  }

  
  
  async update(id: number, updatePacienteInput: UpdatePacienteInput): Promise<Paciente> {
    
    const item = await this.PacienteRepository.preload(updatePacienteInput);

    if ( !item ) throw new NotFoundException(`Item with id: ${ id } not found`);

    return this.PacienteRepository.save( item );

  }

  async remove( id: number ):Promise<Paciente> {
    const paciente = await this.findOne( id );
    await this.PacienteRepository.remove( paciente );
    return { ...paciente, id };
  }
}