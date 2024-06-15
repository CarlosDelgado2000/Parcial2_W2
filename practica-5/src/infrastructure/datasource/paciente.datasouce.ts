import { prisma } from '../../data/posgre';
import { CreatepacienteDto, pacienteDatasource , pacienteEntity, UpdatepacienteDto } from '../../domain';




export class pacienteDatasourceImpl implements pacienteDatasource {

  async create( createpacienteDto: CreatepacienteDto ): Promise<pacienteEntity> {
    const paciente = await prisma.paciente.create({
      data: createpacienteDto!
    });

    return pacienteEntity.fromObject( paciente );
  }

  async getAll(): Promise<pacienteEntity[]> {
    const paciente = await prisma.paciente.findMany();
    return paciente.map( paciente => pacienteEntity.fromObject(paciente) );
  }

  async findById( id: number ): Promise<pacienteEntity> {
    const paciente = await prisma.paciente.findFirst({
      where: { id }
    });

    if ( !paciente ) throw `paciente with id ${ id } not found`;
    return pacienteEntity.fromObject(paciente);
  }

  async updateById( updatepacienteDto: UpdatepacienteDto ): Promise<pacienteEntity> {
    await this.findById( updatepacienteDto.id );
    
    const updatedpaciente = await prisma.paciente.update({
      where: { id: updatepacienteDto.id },
      data: updatepacienteDto!.values
    });

    return pacienteEntity.fromObject(updatedpaciente);
  }

  async deleteById( id: number ): Promise<pacienteEntity> {
    await this.findById( id );
    const deleted = await prisma.paciente.delete({
      where: { id }
    });

    return pacienteEntity.fromObject( deleted );
  }

}