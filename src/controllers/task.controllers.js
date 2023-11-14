export const getTasksControllers = (req, res) => {
   res.send("Todas las tareas");
};

export const postTaskControllers = (req, res) => {
   res.send("Tarea creada");
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
