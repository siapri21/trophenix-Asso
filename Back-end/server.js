// Importation des modules nécessaires
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require('dotenv').config();  // Charger les variables d'environnement

// Définir le port de l'application
const PORT = 3000;

// Routes
const mecenatRoutes = require("./routes/mecenatRouter");
const authRoutes = require("./routes/authRoute");
const profileRoutes = require("./routes/profileRoute");
const offersRouter = require("./routes/offersRoute");
const contactRoutes = require('./routes/login');

// Initialisation de l'application Express
const app = express();

// Middleware pour autoriser les requêtes venant du front-end
app.use(cors({
    origin: [
        'http://localhost:5173',  // CORS autorisé pour cette origine (front-end)
    ],
    credentials: true,  // Autoriser les cookies
}));
app.use(express.json());  // Utiliser express.json() pour parser les requêtes JSON
app.use("/uploads", express.static("uploads"));  // Middleware pour gérer les fichiers téléchargés

// Configuration des sessions avec JWT_SECRET ou une valeur par défaut
app.use(session({
    secret: process.env.JWT_SECRET || 'votre_secret',  // Utiliser une variable d'environnement pour la sécurité
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }  // Non sécurisé pour développement local
}));

// Initialisation de Passport pour l'authentification
app.use(passport.initialize());
app.use(passport.session());

// Connexion à MongoDB avec Mongoose
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})  // Utilisation de la variable d'environnement pour la connexion

    .then(() => console.log('MongoDB connecté'))  // Confirmation de la connexion à MongoDB
    .catch((error) => console.error('Erreur de connexion à MongoDB :', error));

// Routes API
app.use("/api/registe", mecenatRoutes);  // Route pour l'inscription
app.use("/api/login", authRoutes);  // Route pour la connexion
app.use("/api/profile", profileRoutes);  // Route pour les profils utilisateurs
app.use("/api/offres", offersRouter);  // Route pour les offres
app.use("/api/logout", authRoutes);  // Route pour la déconnexion
app.use('/api', contactRoutes);  // Route pour MongoDB (gestion des messages)


app.get("/", (req, res) => {
    res.send("API Trophenix fonctionne !");
});


// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);  // Message dans la console quand le serveur démarre
});
