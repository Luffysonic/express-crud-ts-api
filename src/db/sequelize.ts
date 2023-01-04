import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config()
const sequelize = new Sequelize(
    'testdb',
    'Ricky',
    '29Avril2001@',
     {
       host: 'localhost',
       dialect: 'mysql'
     }
   );


export default sequelize;