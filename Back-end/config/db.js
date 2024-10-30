const mysql = require('mysql2');

// Créer la connexion MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Mot de passe MySQL pour WampServer (laisser vide si aucun mot de passe)
    database: 'mecenat'
});

db.connect((err) => {
    if (err) {
        console.error('erreur de connexion à la bdd:', err);
    }else{
        console.log("Connexion à la bdd MySQL réussie !");

    }
});

module.exports = db;
