import Conductor , { IConductor } from '../models/conductor';
import { getDistance } from 'geolib';

const buscarTodos = async (): Promise<IConductor[]> => {
    return await Conductor.find();
};

const buscarDisponibles = async (): Promise<IConductor[]> => {
    return await Conductor.find({ estado: 'libre' });
};

const buscarCercanos = async (lat: number, lng: number, radioKm: number): Promise<IConductor[]> => {
    const conductoresDisponibles: any = await buscarDisponibles()
    return await conductoresDisponibles.filter((conductor: any) => {
        const ubiConductor = {
            latitude: conductor.ubicacion.lat,
            longitude: conductor.ubicacion.lng
        }
        const ubiOrigen = {
            latitude: lat,
            longitude: lng
        }
        const diferenciaM = getDistance(ubiOrigen, ubiConductor)
        console.log(`${conductor.nombre} - Diferencia en metros: ${diferenciaM}`)
        return radioKm*1000 >= diferenciaM 
    });
};

const buscarPorId = async (id: string): Promise<IConductor | null> => {
    return await Conductor.findById(id);
};

export default { buscarTodos, buscarDisponibles, buscarCercanos, buscarPorId };
