const db = require('../config/db');

const Usuario = {
  create: async (usuario) => {
    const { nombre, correo, contrasena } = usuario;
    const query = 'INSERT INTO usuarios (nombre, correo, contrasena) VALUES (?, ?, ?)';
    const values = [nombre, correo, contrasena];

    try {
      const result = await db.query(query, values);
      return result;
    } catch (error) {
      throw error;
    }
  },

  findAll: async () => {
    const query = 'SELECT * FROM usuarios';

    try {
      const usuarios = await db.query(query);
      return usuarios;
    } catch (error) {
      throw error;
    }
  },

  findByPk: async (id) => {
    const query = 'SELECT * FROM usuarios WHERE id = ?';
    const values = [id];

    try {
      const usuario = await db.query(query, values);
      return usuario;
    } catch (error) {
      throw error;
    }
  },

  findByPk: async (id, nuevoUsuario) => {
    const { nombre, correo, contrasena } = nuevoUsuario;
    const query = 'UPDATE usuarios SET nombre = ?, correo = ?, contrasena = ? WHERE id = ?';
    const values = [nombre, correo, contrasena, id];

    try {
      const result = await db.query(query, values);
      return result;
    } catch (error) {
      throw error;
    }
  },

  findByPk: async (id) => {
    const query = 'DELETE FROM usuarios WHERE id = ?';
    const values = [id];

    try {
      const result = await db.query(query, values);
      return result;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = Usuario;