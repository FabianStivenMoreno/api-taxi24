import Viaje, { IViaje } from '../models/viaje'
import Conductor from '../models/conductor'
import Pasajero from '../models/pasajero'

class ViajeService {
  // Crear un nuevo viaje
  async crearViaje(data: {
    conductorId: string
    pasajeroId: string
    ubicacionInicio: { latitud: number; longitud: number }
  }): Promise<IViaje | null> {
    const { conductorId, pasajeroId, ubicacionInicio } = data

    // Buscar conductor y pasajero
    const conductor = await Conductor.findById(conductorId)
    const pasajero = await Pasajero.findById(pasajeroId)

    if (!conductor || conductor.estado !== 'libre') {
      throw new Error('Conductor no disponible o no existe.')
    }

    if (!pasajero || pasajero.estado !== 'buscando') {
      throw new Error('Pasajero no disponible o ya en un viaje.')
    }

    conductor.estado = 'ocupado'
    pasajero.estado = 'en viaje'

    await conductor.save()
    await pasajero.save()

    const nuevoViaje = new Viaje({
      conductorId,
      pasajeroId,
      ubicacionInicio,
      estado: 'activo',
    })

    return await nuevoViaje.save()
  }

  // Completar un viaje
  async completarViaje(viajeId: string): Promise<IViaje | null> {
    const viaje = await Viaje.findById(viajeId)
    if (!viaje || viaje.estado !== 'activo') {
      throw new Error('Viaje no encontrado o ya completado.')
    }

    const conductor = await Conductor.findById(viaje.conductorId)
    const pasajero = await Pasajero.findById(viaje.pasajeroId)

    if (conductor) {
      conductor.estado = 'libre'
      await conductor.save()
    }

    if (pasajero) {
      pasajero.estado = 'inactivo'
      await pasajero.save()
    }

    viaje.estado = 'completado'
    return await viaje.save()
  }

  // Obtener viajes activos
  async obtenerViajesActivos(): Promise<IViaje[]> {
    return await Viaje.find({ estado: 'activo' })
  }
}

export default new ViajeService()
