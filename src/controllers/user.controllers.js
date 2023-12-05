import User from "../models/User.js";
import Task from "../models/Task.js";

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

export const putUserControllers = (req, res) => {
   res.send("Usuario editado");
};

export const deleteUserControllers = (req, res) => {
   res.send("Usuario eliminado");
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

export const getUserTaskControllers = (req, res) => {
   res.send("entro");
};
