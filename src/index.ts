import express from 'express'
import { conectarDB } from './db/conectarDb'
// import driverRoutes from './routes/driverRoutes';
// import tripRoutes from './routes/tripRoutes';
// import passengerRoutes from './routes/passengerRoutes';
import dotenv from 'dotenv'

dotenv.config()

const app = express()

// Conectar a la base de datos
conectarDB()

// Middleware para procesar datos JSON
app.use(express.json())

const raiz = process.env.ROOT_PATH || '/'
// Configurar las rutas
// app.use('/conductores', driverRoutes);
// app.use('/viajes', tripRoutes);
// app.use('/pasajeros', passengerRoutes);

const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`)
})
