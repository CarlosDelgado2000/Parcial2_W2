import { CreatecontrolDto, UpdatecontrolDto } from '../DTOs';
import { controlEntity } from '../Entities/control.entity';



export abstract class controlRepository {

  abstract create( createcontrolDto: CreatecontrolDto ): Promise<controlEntity>;
  abstract getAll(): Promise<controlEntity[]>;
  abstract findById( id: number ): Promise<controlEntity>;
  abstract updateById( updatecontrolDto: UpdatecontrolDto ): Promise<controlEntity>;
  abstract deleteById( id: number ): Promise<controlEntity>;

}