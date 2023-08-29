import server from './server.js'
import {connectDB} from './config/db.js'

connectDB();
server.listen(4000)
console.log('servervidor en puerto', 4000)