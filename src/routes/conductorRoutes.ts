import express from 'express';
import {
    obtenerTodosLosConductores,
    obtenerConductoresDisponibles,
    obtenerConductoresCercanos,
    obtenerConductorPorId
} from '../controllers/conductorController';

const router = express.Router();

router.get('/', obtenerTodosLosConductores);
router.get('/disponibles', obtenerConductoresDisponibles);
router.get('/cercanos', obtenerConductoresCercanos);
router.get('/:id', obtenerConductorPorId);

export default router;
