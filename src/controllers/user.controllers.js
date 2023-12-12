import User from "../models/User.js";
import Task from "../models/Task.js";
import { Op } from "sequelize";

export const getUsersControllers = async (req, res) => {
   try {
      const user = await User.findAll();

      if (user.length === 0) {
         return res.status(404).json({ message: "No hay usuarios creados" });
      }

      return res.status(200).json(user);
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
};

export const postUserControllers = async (req, res) => {
   try {
      const { nickName, name, lastName, email, password } = req.body;

      const existingNickName = await User.findOne({
         where: {
            nickName,
         },
      });

      if (existingNickName) {
         return res.status(400).json({
            message:
               "El apodo que defines ya se encuentra creado, por favor ingrese otro apodo",
         });
      }

      const newUser = await User.create({
         nickName,
         name,
         lastName,
         email,
         password,
      });
      return res
         .status(201)
         .json({ message: "Usuario creado exitosamente", user: newUser });
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
};

export const patchUserControllers = async (req, res) => {
   try {
      const { id } = req.params;
      const { nickName, name, lastName, email, password } = req.body;

      if (isNaN(id)) {
         return res
            .status(400)
            .json({ message: "El Id ingresado solo debe contener numeros" });
      }

      const user = await User.findByPk(id);
      if (!user) {
         return res
            .status(404)
            .json({ message: "El usuario que intenta editar no existe" });
      }
      if (nickName !== undefined) {
         const existingUserWithNickName = await User.findOne({
            where: {
               nickName,
               id: { [Op.not]: id },
            },
         });
         if (existingUserWithNickName) {
            return res.status(400).json({
               message:
                  "El apodo que intentas asignar ya existe, por favor intente con uno diferente ",
            });
         }
         user.nickName = nickName;
      }
      if (name !== undefined) {
         user.name = name;
      }
      if (lastName !== undefined) {
         user.lastName = lastName;
      }
      if (email !== undefined) {
         user.email = email;
      }
      if (password !== undefined) {
         user.password = password;
      }
      await user.save();
      return res
         .status(200)
         .json({ message: "Usuario editado correctamente", user });
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
};

export const deleteUserControllers = async (req, res) => {
   try {
      const { id } = req.params;
      if (isNaN(id)) {
         return res.status(400).json({
            message: "El id ingresado no es valido, solo se permiten numeros",
         });
      }
      const existingUser = await User.findByPk(id);

      if (!existingUser) {
         return res.status(404).json({ message: "El Id ingresado no existe" });
      }
      await User.destroy({
         where: { id },
      });
      return res.status(200).json({ message: "Usuario eliminado con exito" });
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
};

export const getUserIDControllers = async (req, res) => {
   try {
      const { id } = req.params;
      if (isNaN(id)) {
         return res
            .status(400)
            .json({ message: "El id ingresado debe contener solo numeros" });
      }
      const userId = await User.findByPk(id);

      if (!userId) {
         return res.status(404).json({ message: "El id ingresado no existe" });
      }
      return res.status(200).json(userId);
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
};

export const getUserIdTaskControllers = async (req, res) => {
   try {
      const { id } = req.params;

      if (isNaN(id)) {
         return res
            .status(400)
            .json({ message: "El Id ingresado solo debe contener numeros" });
      }

      const userExists = await User.findByPk(id);

      if (!userExists) {
         return res.status(404).json({ message: "Id ingresado no existe" });
      }

      const tasks = await Task.findAll({
         where: {
            userId: id,
         },
      });
      if (tasks.length === 0) {
         return res.status(400).json({
            message: "El id ingresado no a sido asignado a una tarea",
         });
      }
      return res.status(200).json(tasks);
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
};
