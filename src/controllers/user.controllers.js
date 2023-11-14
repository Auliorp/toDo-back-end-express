export const getUsersControllers = (req, res) => {
   res.send("Todos los usuarios");
};

export const postUserControllers = (req, res) => {
   res.send("Usuario creado");
};

export const putUserControllers = (req, res) => {
   res.send("Usuario editado");
};

export const deleteUserControllers = (req, res) => {
   res.send("Usuario eliminado");
};

export const getUserIDControllers = (req, res) => {
   res.send("Usuario por id");
};
