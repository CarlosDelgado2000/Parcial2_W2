import { prisma } from '../../data/posgre';
import { CreatesignovitalDto, signovitalDatasource , signovitalEntity, UpdatesignovitalDto } from '../../domain';




export class signovitalDatasourceImpl implements signovitalDatasource {

  async create( createsignovitalDto: CreatesignovitalDto ): Promise<signovitalEntity> {
    const signovital = await prisma.signo_vital.create({
      data: createsignovitalDto!
    });

    return signovitalEntity.fromObject( signovital );
  }

  async getAll(): Promise<signovitalEntity[]> {
    const signovital = await prisma.signo_vital.findMany();
    return signovital.map( signovital => signovitalEntity.fromObject(signovital) );
  }

  async findById( id: number ): Promise<signovitalEntity> {
    const signovital = await prisma.signo_vital.findFirst({
      where: { id }
    });

    if ( !signovital ) throw `control with id ${ id } not found`;
    return signovitalEntity.fromObject(signovital);
  }

  async updateById( UpdatesignovitalDto: UpdatesignovitalDto ): Promise<signovitalEntity> {
    await this.findById( UpdatesignovitalDto.id );
    
    const updatedsignovital = await prisma.signo_vital.update({
      where: { id: UpdatesignovitalDto.id },
      data: UpdatesignovitalDto!.values
    });

    return signovitalEntity.fromObject(updatedsignovital);
  }

  async deleteById( id: number ): Promise<signovitalEntity> {
    await this.findById( id );
    const deleted = await prisma.signo_vital.delete({
      where: { id }
    });

    return signovitalEntity.fromObject( deleted );
  }

}