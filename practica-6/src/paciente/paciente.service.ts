import { Injectable } from '@nestjs/common';
import { CreatePacienteDto } from './dto/create-paciente.dto';
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Paciente } from './entities/paciente.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PacienteService {
  constructor(
    @InjectRepository(Paciente)
    private pacienteRepository: Repository<Paciente>,
  ) {

  }
  create(CreatePacienteDto: CreatePacienteDto) {
    const paciente = this.pacienteRepository.create(CreatePacienteDto);
    return this.pacienteRepository.save(paciente);
  }

  async findAll() {
    return await this.pacienteRepository.find();
  }

  async findOne(id: number) {
    return await this.pacienteRepository.findOneBy({id});
  }

  async update(id: number, updatePacienteDto: UpdatePacienteDto) {
    const updated = await this.pacienteRepository.update(id, updatePacienteDto);
    if (updated.affected > 0) {
      return await this.findOne(id);
    }
  }

  async remove(id: number) {
    const deleted = await this.pacienteRepository.delete(id);
    return deleted;
  }
}
