const mysql = require('mysql2');

// Créer la connexion MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Mot de passe MySQL pour WampServer (laisser vide si aucun mot de passe)
    database: 'mecenat'
});

db.connect((err) => {
    if (err) throw err;
    console.log("Connexion à la base de données MySQL réussie !");
});

module.exports = db;
