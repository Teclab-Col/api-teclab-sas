// models/usuarioModel.js
const db = require('../config/db');

const authUsuario = {
  // Obtener un usuario por correo y contraseña
  obtenerPorCredenciales: async (correo, contrasena) => {
    const [rows] = await db.execute('SELECT * FROM usuarios WHERE correo = ? AND contrasena = ?', [correo, contrasena]);
    return rows[0];
  },
};

module.exports = authUsuario;
