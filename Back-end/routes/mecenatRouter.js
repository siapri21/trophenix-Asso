const express = require('express');
const router = express.Router();
const mecenatController = require('../Controllers/mecenatController');

// Route pour créer une demande de mécénat
router.post('/', mecenatController.createMecenat);

// Route pour récupérer les demandes de mécénat avec filtres
router.get('/', mecenatController.getMecenats);

module.exports = router;
