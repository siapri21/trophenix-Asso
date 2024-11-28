require('dotenv').config(); // Charge les variables d'environnement en local

const mysql = require('mysql2/promise');

// Configuration de la base de données
const pool = mysql.createPool({
    host: process.env.DB_HOST,     // Hôte (Render ou localhost)
    user: process.env.DB_USER,     // Utilisateur MySQL
    password: process.env.DB_PASSWORD, // Mot de passe MySQL
    database: process.env.DB_NAME, // Nom de la base de données
    port: process.env.DB_PORT || 3306, // Port par défaut : 3306
});

// Connexion à la base de données via une promesse
async function connectToDatabase() {
  try {
    // Essaie de récupérer une connexion du pool
    const connection = await pool.getConnection();
    console.log('✅ Connexion réussie à MySQL !');
    connection.release(); // Relâche la connexion pour qu'elle soit réutilisée
  } catch (err) {
    console.error('❌ Erreur de connexion à MySQL :', err.message);
    process.exit(1); // Quitte l'application si la connexion échoue
  }
}

connectToDatabase(); // Appel de la fonction pour se connecter à la base

module.exports = pool;
