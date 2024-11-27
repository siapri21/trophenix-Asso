const express = require('express');
const router = express.Router();
const offresController = require('../Controllers/OffersController');

// Route pour récupérer toutes les offres
router.get('/', offresController.getAllOffers);

// Route pour créer une nouvelle offre
router.post('/', offresController.createOffer);

module.exports = router;
