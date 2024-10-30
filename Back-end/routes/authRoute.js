const express = require('express');
const router = express.Router();
const authController = require('../Controllers/authController'); // Adapter le chemin si nécessaire

// Route pour la connexion
router.post('/login', authController.login);

module.exports = router;
