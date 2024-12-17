import mongoose, { Schema, Document } from 'mongoose';

export interface IViaje extends Document {
  conductorId: mongoose.Types.ObjectId;
  pasajeroId: mongoose.Types.ObjectId;
  estado: 'activo' | 'completado';
  ubicacionInicio: {
    lat: number;
    lng: number;
  };
  fechaInicio: Date;
  fechaFin?: Date;
}

const ViajeSchema: Schema = new Schema({
  conductorId: { type: Schema.Types.ObjectId, ref: 'Conductor', required: true },
  pasajeroId: { type: Schema.Types.ObjectId, ref: 'Pasajero', required: true },
  estado: { type: String, enum: ['activo', 'completado'], default: 'activo' },
  ubicacionInicio: {
    lat: { type: Number, required: true },
    lng: { type: Number, required: true },
  },
  fechaInicio: { type: Date, default: Date.now },
  fechaFin: { type: Date },
});

export default mongoose.model<IViaje>('Viaje', ViajeSchema);
