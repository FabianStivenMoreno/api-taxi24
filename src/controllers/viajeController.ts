import { Request, Response } from 'express';
import ViajeService from '../services/viajeService';

class ViajeController {
  // Crear un nuevo viaje
  async crearViaje(req: Request, res: Response) : Promise<any> {
    try {
      const { conductorId, pasajeroId, ubicacionInicio } = req.body;

      const viaje = await ViajeService.crearViaje({ conductorId, pasajeroId, ubicacionInicio });
      return res.status(201).json(viaje);
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }

  // Completar un viaje
  async completarViaje(req: Request, res: Response) : Promise<any>{
    try {
      const { id } = req.params;

      const viaje = await ViajeService.completarViaje(id);
      return res.json(viaje);
    } catch (err: any) {
      return res.status(400).json({ message: err.message });
    }
  }

  // Obtener viajes activos
  async obtenerViajesActivos(req: Request, res: Response) : Promise<any>{
    try {
      const viajes = await ViajeService.obtenerViajesActivos();
      return res.json(viajes);
    } catch (err: any) {
      return res.status(500).json({ message: err.message });
    }
  }
}

export default new ViajeController();
