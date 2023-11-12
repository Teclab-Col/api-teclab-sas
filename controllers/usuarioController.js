// controllers/usuarioController.js
const Usuario = require('../models/usuarioModel');

const usuarioController = {
  obtenerUsuarios: async (req, res) => {
    try {
      const usuarios = await Usuario.findAll();
      res.json(usuarios);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al obtener usuarios' });
    }
  },

  obtenerUsuarioPorId: async (req, res) => {
    const usuarioId = req.params.id;
    try {
      const usuario = await Usuario.findByPk(usuarioId);
      if (usuario) {
        res.json(usuario);
      } else {
        res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al obtener usuario por ID' });
    }
  },

  crearUsuario: async (req, res) => {
    const { nombre, correo, contrasena } = req.body;
    try {
      const nuevoUsuario = await Usuario.create({ nombre, correo, contrasena });
      res.status(201).json(nuevoUsuario);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al crear usuario' });
    }
  },

  actualizarUsuario: async (req, res) => {
    const usuarioId = req.params.id;
    const { nombre, correo, contrasena } = req.body;
    try {
      const usuario = await Usuario.findByPk(usuarioId);
      if (usuario) {
        await usuario.update({ nombre, correo, contrasena });
        res.json(usuario);
      } else {
        res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al actualizar usuario' });
    }
  },

  eliminarUsuario: async (req, res) => {
    const usuarioId = req.params.id;
    try {
      const usuario = await Usuario.findByPk(usuarioId);
      if (usuario) {
        await usuario.destroy();
        res.json({ mensaje: 'Usuario eliminado correctamente' });
      } else {
        res.status(404).json({ mensaje: 'Usuario no encontrado' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error al eliminar usuario' });
    }
  },
};

module.exports = usuarioController;