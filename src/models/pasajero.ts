import mongoose, { Schema, Document } from 'mongoose';

export interface IPasajero extends Document {
  nombre: string;
  ubicacion: {
    lat: number;
    lng: number;
  };
}

const PasajeroSchema: Schema = new Schema({
  nombre: { type: String, required: true },
  ubicacion: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true }
  }
});

export default mongoose.model<IPasajero>('Pasajeros', PasajeroSchema);
