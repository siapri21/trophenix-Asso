// Importation d'Express pour créer le routeur
const express = require('express');
const router = express.Router();

// Importation du contrôleur qui contient la logique métier pour les demandes de mécénat
const mecenatController = require('../Controllers/mecenatController');

// Route POST pour créer une nouvelle demande de mécénat
// Lorsque l'utilisateur soumet un formulaire pour devenir mécène, cette route est appelée.
// La fonction `createMecenat` du contrôleur est utilisée pour gérer la logique de création.
router.post('/', mecenatController.createMecenat);

// Route GET pour récupérer les demandes de mécénat
// Cette route permet de récupérer toutes les demandes existantes de mécénat,
// avec la possibilité d'ajouter des filtres (comme le type de mécénat, le montant, etc.).
// La fonction `getMecenats` du contrôleur est appelée pour exécuter la logique de récupération et filtrage.
router.get('/', mecenatController.getMecenats);



// Exportation du routeur pour qu'il soit accessible dans le fichier principal `index.js`
// Cela permet de regrouper les routes dans `/api/mecenat` comme défini dans `index.js`.
module.exports = router;
