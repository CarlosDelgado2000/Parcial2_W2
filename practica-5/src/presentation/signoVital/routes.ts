import { Router } from 'express';
import { SignovitalController } from './signovitalcontrooler.ddd';
import { signovitalDatasourceImpl } from '../../infrastructure/datasource/signovital.datasouce';
import { signovitalRepositoryImpl } from '../../infrastructure/repositories/signovital.repository copy';


export class signovitalRoutes {


  static get routes(): Router {

    const router = Router();

    const datasource = new signovitalDatasourceImpl();
    const signovitalRepository = new signovitalRepositoryImpl( datasource );
    const signovitalController = new SignovitalController(signovitalRepository);

    router.get('/', signovitalController.getsignovital );
    router.get('/:id', signovitalController.getsignovitalById );
    
    router.post('/', signovitalController.createsignovital );
    router.put('/:id', signovitalController.updatesignovital );
    router.delete('/:id', signovitalController.deletesignovital );


    return router;
  }


}

