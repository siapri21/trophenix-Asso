const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/login');

// Charger les variables d'environnement
dotenv.config();

// Initialiser l'application Express
const app = express();

// Middleware : Fonction qui intercepte les requêtes et peut les modifier, les traiter, ou décider si elles doivent être passées à la suite du traitement.
// Utilisation : Dans votre code, CORS permet de gérer les requêtes entre différentes origines et bodyParser.json() transforme le corps de la requête en objet JavaScript pour un accès facile aux données.
app.use(cors()); // Autoriser les requêtes venant du front-end
app.use(bodyParser.json()); // Parser les requêtes JSON

// Connexion à MongoDB
const mongoose_Url = process.env.MONGO_URL
mongoose.connect(mongoose_Url,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connecté'))
  .catch((error) => console.error('Erreur de connexion à MongoDB :', error));

// Routes API
app.use('/api', contactRoutes); // Utiliser la route de contact

// Démarrer le serveur
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
