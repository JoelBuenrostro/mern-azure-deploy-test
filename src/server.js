import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import taksRoutes from "./routes/tasks.routes.js";
import { FRONTEND_URL } from './config/config.js';

dotenv.config();

const server = express();

server.use(cors());
server.use(express.json());
server.use(morgan('dev'));
server.use(cookieParser());

server.use("/api/auth", authRoutes);
server.use("/api", taksRoutes);

server.use(express.static('./src/dist'));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});

export default server