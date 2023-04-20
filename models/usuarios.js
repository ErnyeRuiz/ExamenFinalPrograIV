const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
    nombre: String,
    apellido: String,
    telefono : String,
    email : String,
    edad : String,
    gradoEscolaridad: String,
    aniosExperiencia: String,
    especialidad: String,
    datosInteres : String,
    ultimaEmpresa : String
});
const user = mongoose.model('usuarios',usuarioSchema);
module.exports = user;