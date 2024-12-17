import { Router } from 'express';
import { listarPasajeros, obtenerPasajero, obtenerConductoresCercanos } from '../controllers/pasajeroController';

const router = Router();

router.get('/', listarPasajeros);
router.get('/:id', obtenerPasajero);
router.get('/:id/cercanos', obtenerConductoresCercanos);

export default router;
