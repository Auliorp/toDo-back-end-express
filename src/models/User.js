import { DataTypes } from "sequelize";
import sequelize from "../database/db.js";
import bcrypt from "bcrypt";
import Task from "./Task.js";

//Se crea la tabla con sus columnas
const User = sequelize.define(
   "users",
   {
      id: {
         type: DataTypes.UUID,
         primaryKey: true,
      },
      nickname: {
         type: DataTypes.STRING,
         unique: true,
         allowNull: false,
      },
      name: {
         type: DataTypes.STRING,
         unique: false,
         allowNull: false,
      },
      lastname: {
         type: DataTypes.STRING,
         unique: false,
         allowNull: false,
      },
      email: {
         type: DataTypes.STRING,
         unique: true,
         allowNull: false,
      },
      password: {
         type: DataTypes.STRING,
         set(value) {
            const hashedPassword = bcrypt.hashSync(value, 10);
            this.setDataValue("password", hashedPassword);
         },
         allowNull: false,
      },
   },
   {
      //agrega dos filas nuevas automaticamente (createdAt, upadatedAt) siempre i cuando este en true.
      timestamps: true,
   }
);

//se crea la relacion de uno a muchos
User.hasMany(Task, {
   //se define el nombre de la columna que lleva la relacion
   foreignKey: "userId",
   //se identifica la relacion con la id del usuario
   sourceKey: "id",
});

Task.belongsTo(User);

export default User;
