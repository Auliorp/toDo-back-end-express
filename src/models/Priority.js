import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";

//Se crea la tabla con sus columnas
const Priority = sequelize.define(
   "priorities",
   {
      id: {
         type: DataTypes.INTEGER,
         autoIncrement: true,
         primaryKey: true,
      },
      title: {
         type: DataTypes.STRING,
         unique: true,
         allowNull: false,
      },
   },
   {
      //agrega dos filas nuevas automaticamente (createdAt, upadatedAt) siempre i cuando este en true.
      timestamps: false,
   }
);

export default Priority;
