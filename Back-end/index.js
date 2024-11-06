const express = require("express");
const cors = require("cors");
const app = express();
require('dotenv').config();

const PORT = 3000;

const mecenatRoutes = require("./routes/mecenatRouter");
const authRoutes = require("./routes/authRoute"); // Nouvelle route d'authentification
const profileRoutes = require("./routes/profileRoutes")

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads")); // Permet d'accéder aux images stockées


// Routes
app.use("/api/register", mecenatRoutes);
app.use("/api/login", authRoutes); // Base route for all auth-related routes
app.use("/api/profile", profileRoutes); // Route pour profil

app.listen(PORT, () => {
  console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});
