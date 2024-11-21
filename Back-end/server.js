const express = require("express");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const bodyParser = require("body-parser");
const path = require("path"); // Ajouter cette ligne pour l'importation de path
require("dotenv").config(); // Charger les variables d'environnement

// Définir le port de l'application
const PORT = process.env.PORT || 7000;

// Routes
const mecenatRoutes = require("./routes/mecenatRouter");
const authRoutes = require("./routes/authRoute");
const profileRoutes = require("./routes/profileRoute");
const offersRouter = require("./routes/offersRoute");
const contactRoutes = require("./routes/login");

// Initialisation de l'application Express
const app = express();

// Middleware pour autoriser les requêtes venant du front-end
app.use(
  cors({
    origin: ["http://localhost:5173"], // CORS autorisé pour cette origine (front-end)
    credentials: true, // Autoriser les cookies
  })
);
app.use(express.json()); // Utiliser express.json() pour parser les requêtes JSON
app.use("/uploads", express.static("uploads")); // Middleware pour gérer les fichiers téléchargés

// Configuration des sessions avec `MongoStore`
app.use(
  session({
    secret: process.env.JWT_SECRET || "votre_secret", // Utiliser une variable d'environnement pour la sécurité
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URL, // URL de connexion MongoDB
    }),
    cookie: {
      secure: process.env.NODE_ENV === 'production', // Sécuriser en production
    },
  })
);

// Servir les fichiers du build React
app.use(express.static(path.join(__dirname, 'build')));

// Redirection pour gérer les routes React (toutes les autres requêtes vont être redirigées vers index.html)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Initialisation de Passport pour l'authentification
app.use(passport.initialize());
app.use(passport.session());

// Connexion à MongoDB avec gestion des erreurs
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("✅ MongoDB connecté"))
  .catch((error) => {
    console.error("❌ Erreur de connexion à MongoDB :", error.message);
    process.exit(1); // Quitte le serveur si MongoDB ne se connecte pas
  });

// Routes API
app.use("/api/register", mecenatRoutes); // Route pour l'inscription
app.use("/api/login", authRoutes); // Route pour la connexion
app.use("/api/profile", profileRoutes); // Route pour les profils utilisateurs
app.use("/api/offres", offersRouter); // Route pour les offres
app.use("/api/logout", authRoutes); // Route pour la déconnexion
app.use("/api", contactRoutes); // Route pour MongoDB (gestion des messages)

// Route de test pour vérifier le serveur
// app.get("/", (req, res) => {
//   res.send("🌟 API Trophenix fonctionne !");
// });

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`🚀 Serveur en cours d'exécution sur le port ${PORT}`);
});
