import { Router } from 'express';
import { pacientecontroller } from './pacientecontroller.ddd';
import { pacienteDatasourceImpl } from '../../infrastructure/datasource/paciente.datasouce';
import { pacienteRepositoryImpl } from '../../infrastructure/repositories/paciente.repository';

export class pacienteRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new pacienteDatasourceImpl();
    const PacienteRepositoryImpl = new pacienteRepositoryImpl(datasource);
    const pacienteController = new pacientecontroller(PacienteRepositoryImpl);

    router.get('/', pacienteController.getpacientes);
    router.get('/:id', pacienteController.getpacienteById);
    
    router.post('/', pacienteController.createpaciente);
    router.put('/:id', pacienteController.updatepaciente);
    router.delete('/:id', pacienteController.deletepaciente);

    return router;
  }
}
