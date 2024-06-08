import { Router } from 'express';
import RouterPaciente from './RouterPaciente';
import RouterSignoVital from './routerSignoVital';
import RouterControl from './RouterControl';
import Routermaestro from './Routermaestro';

const router = Router();

router.use('/pacientes', RouterPaciente);
router.use('/controles', RouterControl);
router.use('/signos-vitales', RouterSignoVital);
router.use('/maestro', Routermaestro);

export default router;
