// app.js consume a app.routes.js y este consume a app.controller.js

// Llamo el modelo
const User = require('../models/Usermodel')

// 👇🏻 Los controladores inicialmente se definen como si fueran un objeto vacío
const appControllers = {}



// Esto es un endPoint
// Se llama el objeto vacío como una función con dos parametros, request y response 
appControllers.getUser = (req, res) => {
    console.log(req);
    res.status(200).json({message: "Hola soy un usuario"})
}

appControllers.getName = (req, res) => {
    // (Your code here) Acá va la lógica 
    const name = req.body.name
    console.log(req);
    res.status(200).json({message: `Hi ${name}`})
}

appControllers.updateName = (req, res) => {
    const idName = req.params.idName // en request.params se almacenan los parametros que se envían a través de la URL
    // Aquí traigo el valor que 👆🏻 está como parámetro en la url
    const name = req.body // Para saber que voy y a actualizar (request.body)
    console.log(req);
    res.status(200).json({message: `Hi ${name}, name updated`, idName: idName})
}

appControllers.deleteName = (req, res) => {
    const idName = req.params.idName // idName lo importo desde routes 
    console.log(req);
    res.status(200).json({message: `Name deleted`, idName: idName})
}

// Endpoints de CRUD
// Esta debe ser una función 👇🏻 asíncrona
appControllers.createUser = async (req, res) => {

    // El try catch me permite manejar los errores de manera "suave" deja seguir corriendo el programa
    try {
        /* const newUser = new User({
            name: req.body.name,
            lastName: req.body.lastName,
            username: req.body.username,
            mail: req.body.mail,
            phone: req.body.phone,
            password: req.body.password,
        }) */

        // deconstruyendo el objeto, es lo mismo que arriba, pero "smart code"
        const { name, lastName, username, mail, phone, password } = req.body

        const newUser = new User({name, lastName, username, mail, phone, password})

        // Save es el insertOne de mongodb, pero traducido a js (quien lo traduce es mongoose)
        await newUser.save()

        // respuesta.status.json(llaveMensaje: mensaje)
        res.status(201).json({message: "User created!"})
    } catch (error) {
        console.log(error);
    }
}

// Actualizando usuario
appControllers.updateUser = async (req, res) => {

    try {
        const id = req.params.UserId
        const obj = req.body

        const updated = await User.findByIdAndUpdate(id, obj, {new: true})
        // Esta una función de mongoose 👆🏻, recibe 3 parametros el id, el objeto y si quiero ver la actualización

        console.log(updated);
        if (updated){
            res.status(202).json({message: "User updated!"}) // si se actualizó
        } else{
            res.status(202).json({message: "User not exists"}) // Si no existe el id
        }


    } catch (error) {
        res.status(202).json({message: "error", error: error}) // Error en BD
    }
}

// Traer un solo usuario
appControllers.getUserByid = async (req, res) => {
    try {
        const user = await User.findById(req.params.userId)

        if (user){
            res.status(200).json({message: "User by Id", user}) // si se actualizó
        } else{
            res.status(401).json({message: "User not exists"}) // Si no existe el id
        }

    } catch (error) {
        res.status(400).json({message: "error", error: error}) // Error en BD
    }
}

// Traer tds los usuarios
// Todos los usuarios
appControllers.getAllUsers = async (req, res) => {
    try {
        const user = await User.find()

        if (user){
            res.status(200).json({message: "All Users", user: user}) // si se actualizó
        } else{
            res.status(401).json({message: "user not exists"}) // Si no existe el id
        }

    } catch (error) {
        res.status(400).json({message: "error", error: error}) // Error en BD
    }
}


// Delete user
appControllers.deleteUser = async (req, res) => {

    try {
        const deleted = await User.findByIdAndDelete(req.params.userId)
        res.status(202).json({message: "User Deleted"})
    } catch (error) {
        res.status(400).json({message: "Error", error})
        // Como llave como valor son iguales, uso 👆🏻 un objeto literal
    }
}

// Get Michael
appControllers.getAllMichaels = async (req, res) => {
    try {
        const users = await User.find({name: "Michael"})

        if(users) res.status(200).json({message: "users found", users})
        else res.status(202).json({message: "users not found"})
    } catch (error) {
        res.status(400).json({message: "Error", error})
    }
}


// Los controladores se deben exportar para que routes lo tome
module.exports = appControllers // Esto es un return gigante
//Se exporta para usarse en el app.router