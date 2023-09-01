import server from './server.js'

//Variables de ambiente
import { PORT } from "./config/config.js"
import { connectDB } from './config/db.js'


async function main() {
    try {
        await connectDB();
        server.listen(PORT);
        console.log(`Escuchando puerto en http://localhost:${PORT}`);
        console.log(`Ambiente: ${process.env.NODE_ENV}`)
    } catch (error) {
        console.log(error);
    }
}

main();