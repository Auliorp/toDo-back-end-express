import Task from "../models/Task.js";

export const getTasksControllers = async (req, res) => {
   try {
      const tasks = await Task.findAll();

      if (tasks.length === 0) {
         return res.status(404).json({ message: "No hay tareas cradas" });
      }

      return res.json(tasks);
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
};

export const postTaskControllers = async (req, res) => {
   try {
      const { title, description, priorityId } = req.body;

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
      });

      return res
         .status(201)
         .json({ message: "Tarea creada exitosamente", task: newTask });
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
};

export const putTaskControllers = (req, res) => {
   res.send("Tarea editada");
};

export const deleteTaskControllers = (req, res) => {
   res.send("Tarea eliminada");
};

export const getTaskIDControllers = (req, res) => {
   res.send("Tarea por id");
};
