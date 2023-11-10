import "dotenv/config";
import { Sequelize } from "sequelize";

const { DB_USER, DB_PASSWORD, DB_HOST, DBNAME } = process.env;

//Se crea la coneccion con la DB
export const sequelize = new Sequelize(DBNAME, DB_USER, DB_PASSWORD, {
   host: DB_HOST,
   dialect: "postgres",
});
