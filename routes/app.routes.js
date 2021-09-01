const express = require('express');
// 👆🏻 Requiero express

// Se importan los controladores desde ...
const AppControllers = require("../controllers/app.controller")

// Router === express
const router = express.Router()
//Preguntar línea 3 express.router

// Controllers
// Se llaman desde controllers/app.controller.js
// Sigue en controller.js


// 👇🏻 La ruta es / NO ./
router.get("/user", AppControllers.getUser)
router.post("/say-name", AppControllers.getName)
router.put("/update-name/:idName", AppControllers.updateName)
// Así se define una variable 👆🏻 en una ruta :variable_ruta
router.delete("/delete-name/:idName", AppControllers.deleteName)

// En insomnia esa variable se consume así http://localhost:6000/app/update-name/2 El /2 es el idName

// Mongo connect
router.post("/createUser", AppControllers.createUser)
router.put("/updateUser/:UserId", AppControllers.updateUser)
// Así se define una variable 👆🏻 en una ruta :variable_ruta

router.get("/getUser/:userId", AppControllers.getUserByid)
router.get("/getAllUsers", AppControllers.getAllUsers)
router.delete("/deleteUser/:userId", AppControllers.deleteUser)
router.get("/getAllMichaels", AppControllers.getAllMichaels)

module.exports = router
// 👆🏻 Se exporta para usarse en el app.js