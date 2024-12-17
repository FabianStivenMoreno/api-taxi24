import mongoose from 'mongoose';
import Conductor from '../models/conductor';
import Pasajero from '../models/pasajero';
import { conectarDB }  from '../db/conectarDb'

const crearConductoresDePrueba = async () => {
  try {
    await Conductor.deleteMany({});

    const datosConductores = [
      { nombre: 'Conductor A', ubicacion: { lat: 4.60971, lng: -74.08175 }, estado: 'ocupado' },
      { nombre: 'Conductor B', ubicacion: { lat: 4.61000, lng: -74.10000 }, estado: 'libre' },
      { nombre: 'Conductor C', ubicacion: { lat: 4.61500, lng: -74.09000 }, estado: 'ocupado' },
      { nombre: 'Conductor D', ubicacion: { lat: 4.61500, lng: -74.09000 }, estado: 'libre' },
      { nombre: 'Conductor E', ubicacion: { lat: 8.61500, lng: -59.09000 }, estado: 'libre' },
      { nombre: 'Conductor F', ubicacion: { lat: 3.61003, lng: -54.50021 }, estado: 'libre' },
      { nombre: 'Conductor G', ubicacion: { lat: 7.65001, lng: -44.09001 }, estado: 'ocupado' },
      { nombre: 'Conductor H', ubicacion: { lat: 5.61500, lng: -37.06002 }, estado: 'libre' },
      { nombre: 'Conductor I', ubicacion: { lat: 11.61500, lng: -52.15006 }, estado: 'libre' },
    ];

    await Conductor.insertMany(datosConductores);

    console.log('Datos de prueba conductores agregados correctamente');
  } catch (error) {
    console.error('Error al crear los datos de prueba', error);
  }
};

const crearPasajerosDePrueba = async () => {
  try {
    await Pasajero.deleteMany({});

    const datosPasajeros = [
      { nombre: 'Pasajero A', ubicacion: { lat: 3.60971, lng: -65.08175 }},
      { nombre: 'Pasajero B', ubicacion: { lat: 3.71000, lng: -58.10000 }},
      { nombre: 'Pasajero C', ubicacion: { lat: 5.41500, lng: -75.09000 }},
      { nombre: 'Pasajero D', ubicacion: { lat: 3.44500, lng: -86.09000 }},
      { nombre: 'Pasajero E', ubicacion: { lat: 8.61500, lng: -59.09000 }},
      { nombre: 'Pasajero F', ubicacion: { lat: 4.70978, lng: -45.08175 }},
      { nombre: 'Pasajero G', ubicacion: { lat: 6.71001, lng: -76.10002 }},
      { nombre: 'Pasajero H', ubicacion: { lat: 6.41501, lng: -66.09000 }},
      { nombre: 'Pasajero I', ubicacion: { lat: 3.33300, lng: -33.01000 }},
      { nombre: 'Pasajero J', ubicacion: { lat: 6.66000, lng: -66.69000 }},
    ];

    await Pasajero.insertMany(datosPasajeros);

    console.log('Datos de prueba pasajeros agregados correctamente');
  } catch (error) {
    console.error('Error al crear los datos de prueba', error);
  } finally {
    mongoose.connection.close();
  }
};

const desconectarDb = async () => {
  try {
    await mongoose.connection.close();
  } catch (error) {
    console.error('Error al desconectar base de datos', error);
  }
}

const main = async () => {
  await conectarDB();
  await crearConductoresDePrueba();
  await crearPasajerosDePrueba();
  await desconectarDb();
};

main();
