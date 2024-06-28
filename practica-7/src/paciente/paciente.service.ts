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

  async findAll(estado: string): Promise<Paciente[]> {
    const whereCondition = estado === 'todos' ? {} : { estado };
    return this.PacienteRepository.find( {where: whereCondition} );
  }

  async findOne(id: number): Promise<Paciente> {
    const item = await this.PacienteRepository.findOneBy({id});
    if (!item) throw new NotFoundException('Item not found');
    return item;
  }
  async remove(id: number): Promise<Paciente> {
    await this.PacienteRepository.update(id, { estado: 'eliminado' });
    return this.PacienteRepository.findOneBy({ id: id });
  }

  
  
  async update(id: number, updatePacienteInput: UpdatePacienteInput): Promise<Paciente> {
    
    const item = await this.PacienteRepository.preload(updatePacienteInput);

    if ( !item ) throw new NotFoundException(`Item with id: ${ id } not found`);

    return this.PacienteRepository.save( item );

  }
}