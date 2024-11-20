require('dotenv').config(); // Charge les variables d'environnement en local

const mysql = require('mysql2/promise');

// Configuration de la base de données
const pool = mysql.createPool({
    host: process.env.DB_HOST,     // Hôte (Render ou localhost)
    user: process.env.DB_USER,     // Utilisateur MySQL
    password: process.env.DB_PASSWORD, // Mot de passe MySQL
    database: process.env.DB_NAME, // Nom de la base de données
    // port: process.env.DB_PORT || 7000, // Port par défaut : 3306
});

module.exports = pool;
