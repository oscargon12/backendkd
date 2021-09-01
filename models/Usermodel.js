const mongoose = require('mongoose')
// Se equiere mongoose

const { Schema } = mongoose
// El esquema es una clase creada en el módulo mongoose

// Así genero un 👇🏻 objeto basado en un esquema
const userSchema = new Schema(
    // El esquema recibe 2 parámetros
    // Parametro 1
    {
        name: {type: String, required: true},
        lastName: {type: String, required: true},
        username: {type: String, required: true},
        mail: {type: String, required: true},
        phone: {type: String, required: true},
        password: {type: String, required: true},
    },

    // parametro 2 llave de versión y fecha de actualizacion
    {
        versionKey: false,
        timestamps: true
    }
)

// exporta el modelo usando 👇🏻 la  función model
module.exports = mongoose.model("User", userSchema);
//2 parametros para ofrecer al controlador, como lo llamo y cual es el esquema

// Continua en controller.js porque tengo que hacer los endpoints 


/* 
{
	"name": "Jhon",
	"lastName": "Snow",
	"username": "Kingofnorth",
	"mail": "jon@snow.com",
	"phone": "12345",
	"password": "ghost"
},

{
    name
:
"Ned"
lastName
:
"Stark"
username
:
"winteriscoming"
mail
:
"ned@stark.com"
phone
:
"12346"
password
:
"tusk"
}
 */