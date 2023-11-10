const express = require("express");
const path = require("path");
require("dotenv").config();
const { PORT } = process.env;

const app = express();

app.get("/", (req, res) => {
   // __dirname = representa la ruta raiz en nuestro proyecto
   res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(PORT, () => {
   console.log("server running on port", PORT);
});
