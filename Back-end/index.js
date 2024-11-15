const express = require("express");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const app = express();
require('dotenv').config();

const PORT = 3000;

const mecenatRoutes = require("./routes/mecenatRouter");
const authRoutes = require("./routes/authRoute");
const profileRoutes = require("./routes/profileRoute");
const offersRouter = require("./routes/offersRoute");

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use(session({
    secret: process.env.JWT_SECRET || 'votre_secret',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}));

app.use(passport.initialize());
app.use(passport.session());

// Utilisation des routes
app.use("/api/register", mecenatRoutes);
app.use("/api/login", authRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/offres", offersRouter);
app.use("/api/logout", authRoutes);

app.listen(PORT, () => {
    console.log(`Serveur en cours d'exécution sur le port ${PORT}`);
});