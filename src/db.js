require("dotenv").config();
const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;

const sequelize = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}:${DB_HOST}/Tasks`
);

try {
   await sequelize.authenticate();
   console.log("Connection has been established successfully.");
} catch (error) {
   console.error("Unable to connect to the database:", error);
}
