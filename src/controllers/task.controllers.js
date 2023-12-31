import { Op } from "sequelize";
import Task from "../models/Task.js";

export const getTasksControllers = async (req, res) => {
   try {
      const tasks = await Task.findAll();

      if (tasks.length === 0) {
         return res.status(404).json({ message: "No hay tareas creadas" });
      }

      return res.json(tasks);
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
};

export const postTaskControllers = async (req, res) => {
   try {
      const { title, description, priorityId, userId } = req.body;
      if (!title.trim() || !description.trim()) {
         return res.status(400).json({
            message: "Los campos 'title' y 'description' son obligatorios.",
         });
      }
      const existingTask = await Task.findOne({
         where: {
            title,
         },
      });
      if (existingTask) {
         return res.status(400).json({
            message:
               "El título que defines ya se encuentra creado, por favor ingrese otro titulo",
         });
      }
      const newTask = await Task.create({
         title,
         description,
         priorityId,
         userId,
      });

      return res
         .status(201)
         .json({ message: "Tarea creada exitosamente", task: newTask });
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
};

export const patchTaskControllers = async (req, res) => {
   try {
      const { id } = req.params;
      const { title, description, priorityId, done } = req.body;

      if (isNaN(id)) {
         return res
            .status(400)
            .json({ message: "el Id ingresado solo debe contener numeros" });
      }

      const task = await Task.findByPk(id);
      if (!task) {
         return res
            .status(404)
            .json({ message: "La tarea que intenta editar no existe" });
      }

      if (title !== undefined) {
         const existingTaskWithTitle = await Task.findOne({
            where: {
               title,
               //{ [Op.not]: id } se traduce como "donde el valor no sea igual al valor del id"
               id: { [Op.not]: id },
            },
         });

         if (existingTaskWithTitle) {
            return res.status(400).json({
               message:
                  "El título que intentas asignar ya existe, por favor intente con uno diferente",
            });
         }

         // Actualiza solo si title está presente en la solicitud
         task.title = title;
      }
      if (description !== undefined) {
         task.description = description;
      }
      if (priorityId !== undefined) {
         task.priorityId = priorityId;
      }
      if (done !== undefined) {
         task.done = done;
      }
      await task.save();
      return res
         .status(200)
         .json({ message: "Tarea editada correctamente", task });
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
};

export const deleteTaskControllers = async (req, res) => {
   try {
      const { id } = req.params;
      if (isNaN(id)) {
         return res.status(400).json({
            message: "El id ingresado no es valido, solo se permiten numeros",
         });
      }
      const existingTask = await Task.findByPk(id);

      if (!existingTask) {
         return res.status(404).json({
            message: "El Id ingresado no existe ",
         });
      }
      await Task.destroy({
         where: {
            id,
         },
      });
      return res.status(200).json({ message: "Tarea eliminada con exito" });
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
};

export const getTaskIDControllers = async (req, res) => {
   try {
      const { id } = req.params;

      if (isNaN(id)) {
         return res
            .status(400)
            .json({ message: "El Id ingresado solo debe contener numeros" });
      }

      const taskId = await Task.findByPk(id);

      if (!taskId) {
         return res.status(404).json({
            message: "Id ingresado no existe",
         });
      }
      return res.status(200).json(taskId);
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
};
