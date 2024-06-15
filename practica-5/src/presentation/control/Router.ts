import { Router } from 'express';
import { controlcontroller } from './controller.ddd';
import { controlDatasourceImpl } from '../../infrastructure/datasource/control.datasouce';
import { controlRepositoryImpl } from '../../infrastructure/repositories/control.repository';

export class ControlRoutes {
  static get routes(): Router {
    const router = Router();

    const datasource = new controlDatasourceImpl();
    const ControlRepositoryImpl = new controlRepositoryImpl(datasource);
    const ControlController = new controlcontroller(ControlRepositoryImpl);

    router.get('/', ControlController.getcontroles);
    router.get('/:id', ControlController.getcontrolById);
    
    router.post('/', ControlController.createcontrol);
    router.put('/:id', ControlController.updatecontrol);
    router.delete('/:id', ControlController.deletecontrol);

    return router;
  }
}
