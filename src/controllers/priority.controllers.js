import Priority from "../models/Priority.js";

export const getPrioritiesControllers = async (req, res) => {
   try {
      //El metodo findAll() recupera todos los registros de la tabla "Priority"
      const priorities = await Priority.findAll();
      //Esta linea de codigo envia la respuesta al criente
      res.json(priorities);
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
};

export const postPriorityControllers = async (req, res) => {
   try {
      //Esta linea de codigo seleccinas las columnas que va a utilizar para crear una nueva prioridad.
      const { title } = req.body;

      const newPriority = await Priority.create({
         title,
      });
      res.json(newPriority);
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
};

export const putPriorityControllers = (req, res) => {
   res.send("Prioridad editada");
};

export const deletePriorityControllers = (req, res) => {
   res.send("Prioridad eliminada");
};

export const getPriorityIDControllers = (req, res) => {
   res.send("Prioridad por id");
};
