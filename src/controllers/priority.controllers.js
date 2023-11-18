import Priority from "../models/Priority.js";

export const getPrioritiesControllers = async (req, res) => {
   try {
      //El metodo findAll() recupera todos los registros de la tabla "Priority"
      const priorities = await Priority.findAll();

      if (priorities.length === 0) {
         return res.status(404).json({ message: "No hay Prioridades Creadas" });
      }
      //caso contrario esta linea de codigo envia la respuesta al cliente
      return res.json(priorities);
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
};

export const postPriorityControllers = async (req, res) => {
   try {
      //Esta linea de codigo seleccinas las columnas que va a utilizar para crear una nueva prioridad.
      const { title } = req.body;

      const existingPriority = await Priority.findOne({
         where: {
            title,
         },
      });
      if (existingPriority) {
         return res.status(400).json({
            message:
               "El título que defines ya se encuentra creado, por favor ingrese otro titulo",
         });
      }
      const newPriority = await Priority.create({
         title,
      });
      return res.status(201).json({
         message: "Título creado exitosamente",
         priority: newPriority,
      });
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
};

export const putPriorityControllers = async (req, res) => {
   try {
      const { id } = req.params;
      const { title } = req.body;

      const existingPriority = await Priority.findOne({
         where: {
            title,
         },
      });
      if (isNaN(id)) {
         return res
            .status(400)
            .json({ message: "el Id ingresado solo debe contener numeros" });
      }
      //Si existe un título igual y no pertenece a la misma priority que estamos editando, devuelve un error
      if (existingPriority && existingPriority.id != id) {
         return res.status(400).json({
            message:
               "El título que intentas asignar ya existe, por favor intente con uno diferente",
         });
      }
      const priority = await Priority.findByPk(id);
      if (!priority) {
         return res
            .status(404)
            .json({ message: "La prioridad que intentas editar no existe" });
      }
      //se define la seccion que se modificara en este caso es title.
      priority.title = title;
      //Se guardan los cambios editados con save()
      await priority.save();

      res.json(priority);
   } catch (error) {
      res.status(500).json({ message: error.message });
   }
};

export const deletePriorityControllers = async (req, res) => {
   try {
      //Extraemos el id de la busqueda.
      const { id } = req.params;

      //findById() se utiliza para verificar si la podipiedad existe antes de eliminarla en la DB
      const existingPriority = await Priority.findByPk(id);

      if (!existingPriority) {
         return res.status(404).json({
            message:
               "El Id ingresado no existe o esta ingresando un valor no numerico",
         });
      }
      //la propiedad destroy se utiliza para elimiar registros de la DB
      await Priority.destroy({
         where: {
            id,
         },
      });
      return res.status(200).json({ message: "Propiedad eliminada con exito" });
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
};

export const getPriorityIDControllers = async (req, res) => {
   try {
      const { id } = req.params;
      //isNaN(id) verifica si el id no es un numero
      if (isNaN(id)) {
         return res
            .status(400)
            .json({ message: "el Id ingresado solo debe contener numeros" });
      }
      const priorityId = await Priority.findByPk(id);
      if (!priorityId) {
         return res.status(404).json({
            message: "Id ingresado no existe",
         });
      }
      return res.status(200).json(priorityId);
   } catch (error) {
      return res.status(500).json({ message: error.message });
   }
};
