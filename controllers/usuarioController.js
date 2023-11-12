// controllers/usuarioController.js
const Usuario = require('../models/usuarioModel');

const createResponse = (success, data, message = 'Operación exitosa') => ({
  success,
  message,
  data,
});

const usuarioController = {
  obtenerUsuarios: async (req, res) => {
    try {
      // Obtener solo las columnas deseadas
      const usuarios = await Usuario.findAll({
        attributes: ['id', 'nombre'], // Agrega las columnas que deseas mostrar
      });
      res.json(createResponse(true, usuarios));
    } catch (error) {
      console.error(error);
      const errorMessage = 'Error al obtener usuarios';
      res.status(500).json(createResponse(false, null, errorMessage));
    }
  },

  obtenerUsuarioPorId: async (req, res) => {
    const usuarioId = req.params.id;
    try {
      const usuario = await Usuario.findByPk(usuarioId);
      if (usuario) {
        res.json(createResponse(true, usuario));
      } else {
        const errorMessage = 'Usuario no encontrado';
        res.status(404).json(createResponse(false, null, errorMessage));
      }
    } catch (error) {
      console.error(error);
      const errorMessage = 'Error al obtener usuario por ID';
      res.status(500).json(createResponse(false, null, errorMessage));
    }
  },

  crearUsuario: async (req, res) => {
    const { nombre, correo, contrasena } = req.body;
    try {
      const nuevoUsuario = await Usuario.create({ nombre, correo, contrasena });
      res.status(201).json(createResponse(true, nuevoUsuario));
    } catch (error) {
      console.error(error);
      const errorMessage = 'Error al crear usuario';
      res.status(500).json(createResponse(false, null, errorMessage));
    }
  },

  actualizarUsuario: async (req, res) => {
    const usuarioId = req.params.id;
    const { nombre, correo, contrasena } = req.body;
    try {
      const usuario = await Usuario.findByPk(usuarioId);
      if (usuario) {
        await usuario.update({ nombre, correo, contrasena });
        res.json(createResponse(true, usuario));
      } else {
        const errorMessage = 'Usuario no encontrado';
        res.status(404).json(createResponse(false, null, errorMessage));
      }
    } catch (error) {
      console.error(error);
      const errorMessage = 'Error al actualizar usuario';
      res.status(500).json(createResponse(false, null, errorMessage));
    }
  },

  eliminarUsuario: async (req, res) => {
    const usuarioId = req.params.id;
    try {
      const usuario = await Usuario.findByPk(usuarioId);
      if (usuario) {
        await usuario.destroy();
        const successMessage = 'Usuario eliminado correctamente';
        res.json(createResponse(true, { mensaje: successMessage }));
      } else {
        const errorMessage = 'Usuario no encontrado';
        res.status(404).json(createResponse(false, null, errorMessage));
      }
    } catch (error) {
      console.error(error);
      const errorMessage = 'Error al eliminar usuario';
      res.status(500).json(createResponse(false, null, errorMessage));
    }
  },
};

module.exports = usuarioController;