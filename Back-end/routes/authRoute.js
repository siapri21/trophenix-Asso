const express = require('express');
const router = express.Router();

// Importation du contrôleur d'authentification
const authController = require('../Controllers/authController');

// Route POST pour la connexion
// Lorsqu'un utilisateur soumet ses informations de connexion, cette route est appelée
// La fonction `login` du contrôleur est utilisée pour gérer la logique de connexion
// console.log("affiche le mot de passe");
router.post('/', authController.login);

// Endpoint de déconnexion

router.post("/", (req, res) => {
    req.logout((err) => {
      if (err) {
        return res.status(500).json({ message: "Erreur lors de la déconnexion" });
      }
      res.status(200).json({ message: "Déconnexion réussie" });
    });
  });

module.exports = router;
