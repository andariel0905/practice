const Mongoose = require('mongoose');

const usuarioSchema = new Mongoose.Schema({
    nombre: { type: String, required: true },
    correo: { type: String, required: true },
    contraseña: { type: String, required: true },
    telefono: { type: String, required: true },
    activo: { type: Boolean, default: true },
    admin: { type: Boolean, default: false },
});

const Usuario = Mongoose.model("Usuario", usuarioSchema);
export default Usuario;