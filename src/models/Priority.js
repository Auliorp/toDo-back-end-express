import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";
import Task from "./Task.js";

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

//se crea la relacion de uno a muchos
Priority.hasMany(Task, {
   //se define el nombre de la columna que lleva la relacion
   foreignKey: "priorityId",
   //se identifica la relacion con la id del usuario
   sourceKey: "id",
});

Task.belongsTo(Priority);

export default Priority;
