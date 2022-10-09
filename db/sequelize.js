import  {Sequelize} from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

//connection url
const connectionURL = process.env.postgresURL;


//creating db instance
export const db = new Sequelize(connectionURL);
 

