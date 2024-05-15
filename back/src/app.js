import express from "express";
import cors from 'cors';
import routes from './routes/index.js';

const app = express();

// Middleware para analizar el cuerpo de las solicitudes
app.use(express.json())

// Middleware para permitir CORS
app.use(cors());

// Rutas
app.use('/', routes);

export default app;