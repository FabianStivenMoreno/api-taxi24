import { Router } from 'express';
import { listarPasajeros, obtenerPasajero } from '../controllers/pasajeroController';

const router = Router();

router.get('/', listarPasajeros);
router.get('/:id', obtenerPasajero);

export default router;
