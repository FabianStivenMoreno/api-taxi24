import { Request, Response } from 'express';
import { obtenerTodosPasajeros, obtenerPasajeroPorId } from '../services/pasajeroService';

export const listarPasajeros = async (_req: Request, res: Response): Promise<any> => {
  console.log('PasajeroController:listarPasajeros')
  const pasajeros = await obtenerTodosPasajeros();
  return res.json(pasajeros);
};

export const obtenerPasajero = async (req: Request, res: Response): Promise<any> => {
  console.log('PasajeroController:obtenerPasajero')
  const pasajero = await obtenerPasajeroPorId(req.params.id);
  if (!pasajero) return res.status(404).json({ error: 'Pasajero no encontrado' });
  return res.json(pasajero);
};
