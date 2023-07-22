import { Request, Response } from "express";
import Usuario from "../models/Usuario";
const bcrypt = require('bcrypt');

const getUsuario = async (_req: Request, res: Response) => {
    try {
        const usuarios = await Usuario.find();

        return res.status(200).json(usuarios);
    } catch (error) {
        console.error(error);
        return res.status(500).send((error as Error).message)
    }
};

const postUsuario = async (req: Request, res: Response) =>  {
    try {
        const { nombre, correo, contraseña } = req.body;
        if (!nombre || !correo || !contraseña) {
          return res.status(400).json({ mensaje: "Faltan campos obligatorios" });
        }
        
        const usuarioExistente = await Usuario.findOne({ correo });
        if (usuarioExistente) {
          return res.status(400).json({ mensaje: "El correo ya está registrado" });
        }
        
        const saltRounds = 10;
        const hash = await bcrypt.hash(contraseña, saltRounds);
        const nuevoUsuario = new Usuario({
          nombre,
          correo,
          contraseña: hash,
        });
        await nuevoUsuario.save();
    
        return res.status(200).json({ mensaje: "Usuario registrado exitosamente" });
    } catch (error) {
        console.error(error);
        return res.status(500).send((error as Error).message)
     }
}

export default { getUsuario, postUsuario };