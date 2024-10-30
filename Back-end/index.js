const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

const db = require('./config/db');
const mecenatRoutes = require('./routes/mecenatRouter');
const authRoutes = require('./routes/authRoute'); // Nouvelle route d'authentification

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/mecenat', mecenatRoutes);
app.use('/api/login', authRoutes); // Route pour la connexion

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
