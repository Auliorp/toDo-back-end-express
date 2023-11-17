import express from "express";
import priorityRoutes from "./routes/priority.routes.js";
import taskRoutes from "./routes/task.routes.js";
import userRoutes from "./routes/user.routes.js";

//se realiza la configuracion de express
const app = express();

//middlewares
//Esta linea de codigo permite leer al servidor formatos json que se almacenan en req.body
app.use(express.json());

//app.use() se utiliza para conectar las rutas a express.
app.use(priorityRoutes);
app.use(taskRoutes);
app.use(userRoutes);

export default app;
