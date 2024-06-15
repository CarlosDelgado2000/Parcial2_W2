import { prisma } from '../../data/posgre';
import { CreatecontrolDto, controlDatasource , controlEntity, UpdatecontrolDto } from '../../domain';




export class controlDatasourceImpl implements controlDatasource {

  async create( createcontrolDto: CreatecontrolDto ): Promise<controlEntity> {
    const control = await prisma.control.create({
      data: createcontrolDto!
    });

    return controlEntity.fromObject( control );
  }

  async getAll(): Promise<controlEntity[]> {
    const control = await prisma.control.findMany();
    return control.map( control => controlEntity.fromObject(control) );
  }

  async findById( id: number ): Promise<controlEntity> {
    const control = await prisma.control.findFirst({
      where: { id }
    });

    if ( !control ) throw `control with id ${ id } not found`;
    return controlEntity.fromObject(control);
  }

  async updateById( updatecontrolDto: UpdatecontrolDto ): Promise<controlEntity> {
    await this.findById( updatecontrolDto.id );
    
    const updatedcontrol = await prisma.control.update({
      where: { id: updatecontrolDto.id },
      data: updatecontrolDto!.values
    });

    return controlEntity.fromObject(updatedcontrol);
  }

  async deleteById( id: number ): Promise<controlEntity> {
    await this.findById( id );
    const deleted = await prisma.control.delete({
      where: { id }
    });

    return controlEntity.fromObject( deleted );
  }

}