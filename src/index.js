import express from 'express'
import server from './server.js'
import path from 'path'
import {connectDB} from './config/db.js'

connectDB();
server.listen(4000)


//production script
server.use(express.static("./client/dist"));
server.get("*", (req, res) => {
    res.sendFile(path.resolve("client", "dist", "index.html"))
});

console.log('servervidor en puerto', 4000)