import { Request, Response } from 'express';
import { obtenerTodosPasajeros, obtenerPasajeroPorId } from '../services/pasajeroService';
import  Conductor  from '../models/conductor';
import  Pasajero  from '../models/pasajero';
import { getDistance } from 'geolib';

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

export const obtenerConductoresCercanos = async (req: Request, res: Response): Promise<any> => {
  console.log('PasajeroController:obtenerConductoresCercanos')
  try {
    const pasajeroId = req.params.id;

    const pasajero = await Pasajero.findById(pasajeroId);
    if (!pasajero) {
      return res.status(404).json({ message: 'Pasajero no encontrado.' });
    }

    const { lat, lng } = pasajero.ubicacion;

    const conductores = await Conductor.find({ estado: 'libre' });

    const conductoresConDistancia = conductores.map((conductor) => ({
      id: conductor._id,
      nombre: conductor.nombre,
      ubicacion: conductor.ubicacion,
      distancia: getDistance(
        { latitude: lat, longitude: lng },
        { latitude: conductor.ubicacion.lat, longitude: conductor.ubicacion.lng }
      ),
    }));
    console.log('Conductores con distancia')
    console.log(JSON.stringify(conductoresConDistancia))
    const conductoresCercanos = conductoresConDistancia
      .sort((a, b) => a.distancia - b.distancia)
      .slice(0, 3);

    console.log('3 Conductores cercanos')
    console.log(JSON.stringify(conductoresCercanos))

    if (pasajero.estado === 'inactivo') {
      pasajero.estado = 'buscando';
      await pasajero.save();
    } else if (pasajero.estado === 'en viaje') {
      return res.status(400).json({ message: 'El pasajero ya en un viaje.' });
    }

    return res.status(200).json({
      message: 'Conductores más cercanos encontrados.',
      pasajeroEstado: pasajero.estado,
      conductores: conductoresCercanos,
    });
  } catch (error) {
    console.error('Error al obtener conductores cercanos:', error);
    return res.status(500).json({ message: 'Error interno del servidor.' });
  }
};
