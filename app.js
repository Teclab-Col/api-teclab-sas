// app.js
const NodeCache = require("node-cache");
const cache = new NodeCache();

const express = require('express');
const bodyParser = require('body-parser');
const usuarioRoutes = require('./routes/usuarioRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.use('/api/usuarios', usuarioRoutes);
app.use('/api/auth', authRoutes);

app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});