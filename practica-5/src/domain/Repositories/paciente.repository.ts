import { CreatepacienteDto, UpdatepacienteDto } from '../DTOs';
import { pacienteEntity } from '../Entities/paciente.entity';



export abstract class pacienteRepository {

  abstract create( createpacienteDto: CreatepacienteDto ): Promise<pacienteEntity>;
  abstract getAll(): Promise<pacienteEntity[]>;
  abstract findById( id: number ): Promise<pacienteEntity>;
  abstract updateById( updatepacienteDto: UpdatepacienteDto ): Promise<pacienteEntity>;
  abstract deleteById( id: number ): Promise<pacienteEntity>;

}