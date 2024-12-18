import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || '')
    console.log('Conexión con base de datos MongoDB: OK')
  } catch (error) {
    console.error('Error en conexión con base de datos MongoDB:', error)
  }
};