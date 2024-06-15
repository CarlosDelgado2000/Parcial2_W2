import { Router } from 'express';

import { ControlRoutes } from './control/Router';
import { signovitalRoutes } from './signoVital/routes';
import { pacienteRoutes } from './Paciente/Router';




export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/control', ControlRoutes.routes );
    router.use('/api/paciente', pacienteRoutes.routes );
    router.use('/api/signovital', signovitalRoutes.routes)
    
    return router;
  }


}

