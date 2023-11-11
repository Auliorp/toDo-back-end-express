import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";
import bcrypt from "bcrypt";

//Se crea la tabla con sus columnas
const User = sequelize.define("users", {
   id: {
      type: DataTypes.UUID,
      primaryKey: true,
   },
   nickname: {
      type: DataTypes.STRING,
      unique: true,
   },
   name: {
      type: DataTypes.STRING,
      unique: false,
   },
   lastname: {
      type: DataTypes.STRING,
      unique: false,
   },
   email: {
      type: DataTypes.STRING,
      unique: true,
   },
   password: {
      type: DataTypes.STRING,
      set(value) {
         const hashedPassword = bcrypt.hashSync(value, 10);
         this.setDataValue("password", hashedPassword);
      },
   },
});

export default User;
