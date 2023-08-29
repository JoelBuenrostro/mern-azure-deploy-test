import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const { DB_CONNECTION_STRING } = process.env;

export const connectDB = async () => {
  try {
    await mongoose.connect(`mongodb://mern-db:${DB_CONNECTION_STRING}@mern-db.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@mern-db@`)
    console.log('>>> Base de datos conectada')
  } catch (error) {
    console.log(error)
   }
};