const express = require('express');
const app = express();
const PORT = 3000;

// Importer la connexion à la base de données et les routes
const db = require('./config/db');
const mecenatRoutes = require('./routes/mecenatRoutes');

// Middlewares
app.use(express.json());

// Routes
app.use('/api/mecenat', mecenatRoutes);

// Lancer le serveur
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
