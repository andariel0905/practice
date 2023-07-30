import { Request, Response } from "express";
import Usuario from "../models/Usuario";
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

const getUsuarios = async (_req: Request, res: Response) => {
    try {
        const usuarios = await Usuario.find();

        return res.status(200).json(usuarios);
    } catch (error) {
        console.error(error);
        return res.status(500).send((error as Error).message)
    }
};

const getUsuario = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const usuario = await Usuario.findOne({ email });
    if (!usuario) {
      return res.status(404).json({ mensaje: "Usuario no encontrado" });
    }
    const match = await bcrypt.compare(password, usuario.contraseña);
    if (!match) {
      return res.status(401).json({ mensaje: "Contraseña incorrecta" });
    } else {
      const token = jwt.sign({ id: usuario._id }, process.env.SECRET_KEY, {
        expiresIn: "8 days",
      });

      return res.status(200).json({
        mensaje: "Inicio de sesión exitoso",
        usuario: usuario.name,
        token,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).send((error as Error).message)
  }
}

const postUsuario = async (req: Request, res: Response) =>  {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
          return res.status(400).json({ mensaje: "Faltan campos obligatorios" });
        }
        
        const usuarioExistente = await Usuario.findOne({ email });
        if (usuarioExistente) {
          return res.status(400).json({ mensaje: "El correo ya está registrado" });
        }
        
        const saltRounds = 10;
        const hash = await bcrypt.hash(password, saltRounds);
        const nuevoUsuario = new Usuario({
          name,
          email,
          password: hash,
        });
        await nuevoUsuario.save();
    
        return res.status(200).json(nuevoUsuario);
    } catch (error) {
        console.error(error);
        return res.status(500).send((error as Error).message)
     }
}

export default { getUsuarios, getUsuario, postUsuario };