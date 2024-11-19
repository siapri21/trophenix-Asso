const express = require('express');
const router = express.Router();

// Importation du contrôleur d'authentification
const authController = require('../Controllers/authController');

// Route POST pour la connexion
// Lorsqu'un utilisateur soumet ses informations de connexion, cette route est appelée
// La fonction `login` du contrôleur est utilisée pour gérer la logique de connexion
// console.log("affiche le mot de passe");
router.post('/', authController.login);

// console.log("Route de connexion appelée avec :", req.body);

module.exports = router;
