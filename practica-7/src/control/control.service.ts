import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateControlInput } from './dto/create-control.input';
import { UpdateControlInput } from './dto/update-control.input';
import { Control } from './entities/control.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Paciente } from 'src/paciente/entities/paciente.entity';
import { SignoVital } from 'src/signo-vital/entities/signo-vital.entity';


@Injectable()
export class ControlService {
  constructor(
    @InjectRepository(Control)
    private readonly controlRepository: Repository<Control>,
    @InjectRepository(Paciente)
    private readonly PacienteRepository: Repository<Paciente>,

    @InjectRepository(SignoVital)
    private readonly SignoVitalRepository: Repository<SignoVital>
    
  ) {}
  async create(createControlDto: CreateControlInput): Promise<any> {
    const paciente = await this.controlRepository.findOneBy({ id: createControlDto.id_paciente });
    const signoVital = await this.controlRepository.findOneBy({ id: createControlDto.id_signo_vital });

    if (!paciente || !signoVital) {
      throw new Error('Paciente o signo no encontrada');
    }

    const registro = this.controlRepository.create({
      ...createControlDto,
      paciente: paciente,
      signo_vital: signoVital,
    });
    const savedPreparacion = await this.controlRepository.save(registro);
    return this.toResponseDto(savedPreparacion);
  }

  async findAll(estado: string): Promise<Control[]> {
    const whereCondition = estado === 'todos' ? {} : { estado };
    return this.controlRepository.find({ where: whereCondition });
  }

  async findOne(id: number) {
    return await this.controlRepository.findOne({where:{id}});
  }

  async update(id: number, updateControlInput: UpdateControlInput) {
    const updated =  await this.controlRepository.preload(updateControlInput);
    return await this.controlRepository.save(updated);
  }

  async remove(id: number): Promise<Control> {
    await this.controlRepository.update(id, { estado: 'eliminado' });
    return this.controlRepository.findOneBy({ id: id });
  }
  
  private toResponseDto(Control: Control): any {
    return {
      id_paciente: Control.id_paciente,
      id_signo_vital: Control.id_signo_vital,
      fecha: Control.fecha,
      hora: Control.hora,
      valor: Control.valor,
    };
  }
}