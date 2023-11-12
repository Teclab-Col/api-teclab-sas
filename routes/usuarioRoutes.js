// usuarioRoutes.js
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const authMiddleware = require('../middlewares/authMiddleware');

// Rutas CRUD para usuarios
router.get('/', authMiddleware.verificarToken, usuarioController.obtenerUsuarios);
router.get('/:id', authMiddleware.verificarToken, usuarioController.obtenerUsuarioPorId);
router.post('/', authMiddleware.verificarToken, usuarioController.crearUsuario);
router.put('/:id', authMiddleware.verificarToken, usuarioController.actualizarUsuario);
router.delete('/:id', authMiddleware.verificarToken, usuarioController.eliminarUsuario);

module.exports = router;