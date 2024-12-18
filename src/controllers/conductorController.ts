import { Request, Response } from 'express';
import conductorService from '../services/conductorService';

export const obtenerTodosLosConductores = async (req: Request, res: Response) => {
    console.log('conductorController:obtenerTodosLosConductores')
    try {
        const conductores = await conductorService.buscarTodos();
        res.status(200).json(conductores);
    } catch (error: any) {
        res.status(500).json({ mensaje: error.message });
    }
};

export const obtenerConductoresDisponibles = async (req: Request, res: Response) => {
    console.log('conductorController:obtenerConductoresDisponibles')
    try {
        const conductores = await conductorService.buscarDisponibles();
        res.status(200).json(conductores);
    } catch (error: any) {
        res.status(500).json({ mensaje: error.message });
    }
};

export const obtenerConductoresCercanos = async (req: Request, res: Response) : Promise<any> => {
    console.log('conductorController:obtenerConductoresCercanos')
    const { lat, lng, rad } = req.query;
    if (!lat || !lng || !rad ) {
        return res.status(400).json({ mensaje: "Latitud(lat), longitud(lng) y radio(rad) son requeridas"});
    }
    console.log(`Lat: ${lat} - Lng: ${lng} - Rad: ${rad}`)
    try {
        const conductores = await conductorService.buscarCercanos(Number(lat), Number(lng), Number(rad));
        res.status(200).json(conductores);
    } catch (error: any) {
        res.status(500).json({ mensaje: error.message });
    }
};

export const obtenerConductorPorId = async (req: Request, res: Response): Promise<any> => {
    console.log('conductorController:obtenerConductorPorId')
    const { id } = req.params;
    console.log(`Id: ${id}`)
    try {
        const conductor = await conductorService.buscarPorId(id);
        if (!conductor) {
            return res.status(404).json({ mensaje: "Conductor no encontrado" });
        }
        res.status(200).json(conductor);
    } catch (error: any) {
        res.status(500).json({ mensaje: error.message });
    }
};
