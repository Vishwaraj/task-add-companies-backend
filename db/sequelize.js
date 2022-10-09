import  {Sequelize} from "sequelize";
import dotenv from 'dotenv';

dotenv.config();

const connectionURL = process.env.postgresURL;

export const db = new Sequelize(connectionURL);
 

