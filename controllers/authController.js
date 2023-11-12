// controllers/authController.js
const jwt = require('jsonwebtoken');
const authUsuario = require('../models/authModel');
require('dotenv').config();

const authController = {
  login: async (req, res) => {
    const { correo, contrasena } = req.body;

    try {
      const usuario = await authUsuario.obtenerPorCredenciales(correo, contrasena);

      if (usuario) {
        const token = jwt.sign({ usuario: usuario.correo }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.json({ token });
      } else {
        res.status(401).json({ mensaje: 'Credenciales inválidas' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensaje: 'Error en el servidor' });
    }
  },
};

module.exports = authController;