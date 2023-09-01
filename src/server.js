import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';

import authRoutes from './routes/auth.routes.js';
import taksRoutes from "./routes/tasks.routes.js";
import { FRONTEND_URL } from './config/config.js';

const server = express();

server.use(
    cors({
        credentials: true,
        origin: FRONTEND_URL,
    })
);

server.use(express.json());
server.use(morgan('dev'));
server.use(cookieParser());

server.use("/api/auth", authRoutes);
server.use("/api", taksRoutes);

if (process.env.NODE_ENV === "production") {
    const path = await import("path");
    server.use(express.static("client/dist"));
  
    server.get("*", (req, res) => {
      console.log(path.resolve("client", "dist", "index.html") );
      res.sendFile(path.resolve("client", "dist", "index.html"));
    });
  }

export default server