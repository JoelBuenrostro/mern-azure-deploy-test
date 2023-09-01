import mongoose from 'mongoose';
import { DB_CONNECTION_STRING } from './config.js';

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://mern-db:vq1bIihOZ6U9YX2MABpJZYElw4sXVfAEINOwIo5PaxdBh3rmEDs3gqy42RbCEbluY3T8hwzYXW2XACDbq7OXsw==@mern-db.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@mern-db@');
    console.log('Conectado a la base de datos');
  } catch (error) {
    console.log(error);
  }
};