import { CreatesignovitalDto, UpdatesignovitalDto } from '../DTOs';
import { signovitalEntity } from '../Entities/signovital.entity';



export abstract class signovitalRepository {

  abstract create( createsignovitalDto: CreatesignovitalDto ): Promise<signovitalEntity>;
  abstract getAll(): Promise<signovitalEntity[]>;
  abstract findById( id: number ): Promise<signovitalEntity>;
  abstract updateById( updatesignovitalDto: UpdatesignovitalDto ): Promise<signovitalEntity>;
  abstract deleteById( id: number ): Promise<signovitalEntity>;

}