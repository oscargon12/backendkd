const express = require('express');
// ππ» Requiero express

// Se importan los controladores desde ...
const AppControllers = require("../controllers/app.controller")

// Router === express
const router = express.Router()
//Preguntar lΓ­nea 3 express.router

// Controllers
// Se llaman desde controllers/app.controller.js
// Sigue en controller.js


// ππ» La ruta es / NO ./
router.get("/user", AppControllers.getUser)
router.post("/say-name", AppControllers.getName)
router.put("/update-name/:idName", AppControllers.updateName)
// AsΓ­ se define una variable ππ» en una ruta :variable_ruta
router.delete("/delete-name/:idName", AppControllers.deleteName)

// En insomnia esa variable se consume asΓ­ http://localhost:6000/app/update-name/2 El /2 es el idName

// Mongo connect
router.post("/createUser", AppControllers.createUser)
router.put("/updateUser/:UserId", AppControllers.updateUser)
// AsΓ­ se define una variable ππ» en una ruta :variable_ruta

router.get("/getUser/:userId", AppControllers.getUserByid)
router.get("/getAllUsers", AppControllers.getAllUsers)
router.delete("/deleteUser/:userId", AppControllers.deleteUser)
router.get("/getAllMichaels", AppControllers.getAllMichaels)

module.exports = router
// ππ» Se exporta para usarse en el app.js