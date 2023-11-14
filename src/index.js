import "dotenv/config";
import app from "./app.js";
import sequelize from "./database/db.js";

const { PORT } = process.env;

// con esta funcion arranca nuestra aplicacion
const main = async () => {
   try {
      /*  //Intenta autentificar con la DB
      await sequelize.authenticate();
      console.log("Connection has been established successfully."); */
      //el metodo sync sincroniza tablas creandolas o eliminandolas.
      await sequelize.sync({ force: false });

      //inicializa el servidor Express
      app.listen(PORT);
      console.log("server running on port", PORT);
   } catch (error) {
      //si no se logra autenticar con la DB arroja el siguiente mensaje
      console.error("Unable to connect to the database:", error);
   }
};
main();
