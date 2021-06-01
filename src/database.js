import mongoose from "mongoose";
import { config } from "./config/config";

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.dbName;
const options = {
  keepAlive: 1,
  useUnifiedTopology: true,
  useNewUrlParser: true
}

export async function connect()  {
      try {
        await mongoose.connect(`mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}/${DB_NAME}?retryWrites=true&w=majority`, options)
        console.log('DB Connected')
      } catch {
        console.log('Something is wrong with db conection');
        console.log(e)
      }
}
