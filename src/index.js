import server from './server.js'

//Variables de ambiente
import { connectDB } from './config/db.js'


async function main() {
    try {
        await connectDB();
    } catch (error) {
        console.log(error);
    }
}

main();