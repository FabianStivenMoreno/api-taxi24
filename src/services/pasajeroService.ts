import Pasajero, { IPasajero } from '../models/pasajero';

export const obtenerTodosPasajeros = async (): Promise<IPasajero[]> => {
  return await Pasajero.find();
};

export const obtenerPasajeroPorId = async (id: string): Promise<IPasajero | null> => {
  return await Pasajero.findById(id);
};
