const mongoose = require("mongoose")
// Se requiere mongoose

// Conectando al atlas
const atlas = "mongodb+srv://oscargon12:dataPass21@cluster0.shuqb.mongodb.net/kdocApp?retryWrites=true&w=majority"
// Atlas es la URL

//mongoose.connect devuelve una promesa (Si se conecto a la DB o ocurrió un error)
mongoose.connect(atlas, {useNewURLParser: true, useUnifiedTopology: true})
    .then(db => console.log('Base de datos conectada desde dbconnection.js'))
    .catch(err => console.log(err));

module.exports = mongoose
// Se exporta la conexión que viene siendo mongoose