// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const authMiddleware = require('../middlewares/authMiddleware');

// Ruta para iniciar sesión y obtener un token
router.post('/login', authController.login);

// Ruta protegida que requiere un token válido
router.get('/recurso-protegido', authMiddleware.verificarToken, (req, res) => {
  res.json({ mensaje: 'Este es un recurso protegido' });
});

module.exports = router;