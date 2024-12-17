import { Router } from 'express';
import ViajeController from '../controllers/viajeController';

const router = Router();

router.post('/', ViajeController.crearViaje);
router.put('/:id/completar', ViajeController.completarViaje);
router.get('/activos', ViajeController.obtenerViajesActivos);

export default router;
