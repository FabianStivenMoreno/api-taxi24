import { Schema, model, Document } from 'mongoose';

export interface IConductor extends Document {
    nombre: string
    estado: 'libre' | 'ocupado'
    ubicacion: {
        lat: number
        lng: number
    }
}

const ConductorSchema = new Schema<IConductor>({
    nombre: { type: String, required: true },
    estado: { type: String, enum: ['libre', 'ocupado'], default: 'ocupado'},
    ubicacion: {
        lat: { type: Number, required: true },
        lng: { type: Number, required: true },
    },
}, { timestamps: true });

export default model<IConductor>('Conductor', ConductorSchema);
