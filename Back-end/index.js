const express = require("express");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session"); // Ajout de cette ligne
const app = express();
require('dotenv').config();

const PORT = 3000;

const mecenatRoutes = require("./routes/mecenatRouter");
const authRoutes = require("./routes/authRoute");
const profileRoutes = require("./routes/profileRoutes");

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Configuration de la session
app.use(session({
  secret: process.env.JWT_SECRET || 'votre_secret',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // Si tu n'as pas de HTTPS, mets secure: false
}));

// Initialisation de Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/api/register", mecenatRoutes);
app.use("/api/login", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/logout", authRoutes); // Utilisation de authRoutes pour la déconnexion

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
