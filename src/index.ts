import express from 'express'
import { conectarDB } from './db/conectarDb'
import conductorRoutes from './routes/conductorRoutes';
import pasajeroRoutes from './routes/pasajeroRoutes';
import dotenv from 'dotenv'

dotenv.config()

const app = express()

// Conectar a la base de datos
conectarDB()

// Config
app.use(express.json())

const raiz = process.env.ROOT_PATH || '/'
// Configurar las rutas
app.use(`${raiz}/conductores`, conductorRoutes);
app.use(`${raiz}/pasajeros`, pasajeroRoutes);

const port = process.env.PUERTO || 5000

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`)
  console.log(`API disponible en: http://localhost:${port}${raiz}`);
})
