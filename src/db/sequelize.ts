import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config()

//sequalize de base
const sequelize = new Sequelize(
    'DBNAME',
    'USERNAME',
    'USERPASSWORD',
     {
       host: 'localhost',
       dialect: 'mysql'
     }
   );
export default sequelize;