import { Sequelize } from "sequelize";
import * as dotenv from "dotenv";

dotenv.config()
const sequelize = new Sequelize('mariadb://root:password@maria:3306/demo');


export default sequelize;