// Requiriendo los modulos
const express = require("express");
const morgan = require("morgan");

// En la fase 2 despues de configurar dbConectioon con mongoose importo el modulo
const dataBase = require('./dbConection')

// Definiendo la ruta express().usar(./la_ruta) como variable y luego la uso
const appRoutes = require("./routes/app.routes")

// 👇🏻 app === express
const app = express()

const port = 6000

//Middleware 
// Intermediario que se usan a traves de express
//json web token es un intermediario para iniciar sesión
app.use(morgan("dev"));
app.use(express.json());
// 👆🏻 Express solo entiende archivos .json

// Routes y controllers
//Creo una carpeta routes y una controllers para las funciones que se ejecutan con esas rutas, en la raiz del proyecto
// En controller va toda la lógica

// Se crea un archivo dentro de routes app.routes.js
app.use("/app", appRoutes)

// Continuan los apuntes en en app.routes.js
//Se importan las rutas desde el app.routes.js


// Ejecución de la app (escuchando el puerto const port = 6000)
app.listen(port, () => {
console.log(`Escuchando el puerto ${port}`)
})


// http://localhost:5000/app/getPersonByid/612b13722e54cf011602b2b3


// FASE 2 conexión con DB
// Se crea la carpeta models, donde irán los modelos/esquemas de los objetos de la base de datos
// luego instalo mongoose npm i mongoose
// creo un archivo dbConection.js