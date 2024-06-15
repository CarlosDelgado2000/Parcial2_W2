import { CreatepacienteDto,
  pacienteDatasource,
  pacienteEntity,
  pacienteRepository,
  UpdatepacienteDto } from '../../domain';


export class pacienteRepositoryImpl implements pacienteRepository {

constructor(
private readonly datasource: pacienteDatasource,
) { }


create( createpacienteDto: CreatepacienteDto ): Promise<pacienteEntity> {
return this.datasource.create( createpacienteDto );
}

getAll(): Promise<pacienteEntity[]> {
return this.datasource.getAll();
}

findById( id: number ): Promise<pacienteEntity> {
return this.datasource.findById( id );
}

updateById( updatepacienteDto: UpdatepacienteDto ): Promise<pacienteEntity> {
return this.datasource.updateById( updatepacienteDto );
}

deleteById( id: number ): Promise<pacienteEntity> {
return this.datasource.deleteById( id );
}

}


