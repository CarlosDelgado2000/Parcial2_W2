import { CreatesignovitalDto,
  signovitalDatasource,
  signovitalEntity,
  signovitalRepository,
  UpdatesignovitalDto } from '../../domain';


export class signovitalRepositoryImpl implements signovitalRepository {

constructor(
private readonly datasource: signovitalDatasource,
) { }


create( createsignovitalDto: CreatesignovitalDto ): Promise<signovitalEntity> {
return this.datasource.create( createsignovitalDto );
}

getAll(): Promise<signovitalEntity[]> {
return this.datasource.getAll();
}

findById( id: number ): Promise<signovitalEntity> {
return this.datasource.findById( id );
}

updateById( updatesignovitalDto: UpdatesignovitalDto ): Promise<signovitalEntity> {
return this.datasource.updateById( updatesignovitalDto );
}

deleteById( id: number ): Promise<signovitalEntity> {
return this.datasource.deleteById( id );
}

}


