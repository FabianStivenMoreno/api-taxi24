import mongoose, { Schema, Document } from 'mongoose';

export interface IPasajero extends Document {
  nombre: string
  ubicacion: {
    lat: number
    lng: number
  }
  estado: 'buscando' | 'inactivo' | 'en viaje'
}

const PasajeroSchema: Schema = new Schema({
  nombre: { type: String, required: true },
  ubicacion: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  },
  estado: {
    type: String,
    enum: ['buscando', 'inactivo', 'en viaje'],
    default: 'buscando',
  }
});

export default mongoose.model<IPasajero>('Pasajero', PasajeroSchema);
