import { CreatecontrolDto,
  controlDatasource,
  controlEntity,
  controlRepository,
  UpdatecontrolDto } from '../../domain';


export class controlRepositoryImpl implements controlRepository {

constructor(
private readonly datasource: controlDatasource,
) { }


create( createcontrolDto: CreatecontrolDto ): Promise<controlEntity> {
return this.datasource.create( createcontrolDto );
}

getAll(): Promise<controlEntity[]> {
return this.datasource.getAll();
}

findById( id: number ): Promise<controlEntity> {
return this.datasource.findById( id );
}

updateById( updatecontrolDto: UpdatecontrolDto ): Promise<controlEntity> {
return this.datasource.updateById( updatecontrolDto );
}

deleteById( id: number ): Promise<controlEntity> {
return this.datasource.deleteById( id );
}

}


