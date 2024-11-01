const mysql = require('mysql2/promise');

// Créer un pool de connexions
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '', // Utilisez le mot de passe correct si nécessaire
    database: 'mecenat'
});

module.exports = pool; // Exporter le pool
