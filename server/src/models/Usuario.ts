const Mongoose = require('mongoose');

const usuarioSchema = new Mongoose.Schema({
    email: { type: String, required: true },
    name: { type: String, required: true },
    password: { type: String, required: true },
    activo: { type: Boolean, default: true },
    admin: { type: Boolean, default: false },
});

const Usuario = Mongoose.model("Usuario", usuarioSchema);

export default Usuario;