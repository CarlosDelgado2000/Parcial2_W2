import { CreatesignovitalDto, UpdatesignovitalDto } from '../DTOs';
import { signovitalEntity } from '../Entities/signovital.entity';



export abstract class signovitalDatasource {

  abstract create( createcontrolDto: CreatesignovitalDto ): Promise<signovitalEntity>;
  abstract getAll(): Promise<signovitalEntity[]>;
  abstract findById( id: number ): Promise<signovitalEntity>;
  abstract updateById( updatcontrolcDto: UpdatesignovitalDto ): Promise<signovitalEntity>;
  abstract deleteById( id: number ): Promise<signovitalEntity>;

}