import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";

//Se crea la tabla con sus columnas
const Task = sequelize.define(
   "tasks",
   {
      id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true,
      },
      title: {
         type: DataTypes.STRING,
         length: 30,
         unique: true,
         allowNull: false,
      },
      description: {
         type: DataTypes.STRING,
         allowNull: false,
         length: 500,
      },
      done: {
         type: DataTypes.BOOLEAN,
         defaultValue: false,
      },
   },
   {
      //agrega dos filas nuevas automaticamente (createdAt, upadatedAt) siempre i cuando este en true.
      timestamps: true,
   }
);

export default Task;
