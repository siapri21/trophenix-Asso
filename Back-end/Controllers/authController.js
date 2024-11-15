const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Connexion de l'utilisateur
exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "L'email et le mot de passe sont requis" });
  }

  try {
    const connection = await db.getConnection();
    const [users] = await connection.query("SELECT * FROM demandes_mecenat WHERE email = ?", [email]);

    if (users.length === 0) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    const user = users[0];

    // Vérifiez le mot de passe
    const isPasswordValid = await bcrypt.compare(password, user.hashed_password);

    if (!user.hashed_password || !isPasswordValid) {
      return res.status(400).json({ message: "Mot de passe incorrect" });
    }

    // Générer un jeton JWT
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET, // Assurez-vous d'avoir ce secret dans votre fichier .env
      { expiresIn: '1h' }
    );

    res.status(200).json({ token, message: 'Connexion réussie.' });
    await connection.release();
  } catch (err) {
    console.error('Erreur lors de la connexion de l\'utilisateur:', err);
    res.status(500).json({ error: 'Erreur lors de la connexion' });
  }
};


exports.verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1]; // Extraire le token de l'en-tête Authorization
  console.log("Token reçu :", token); // Log du token reçu

  if (!token) {
    return res.status(401).json({ error: "Accès non autorisé" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'votre_clé_secrète');
    console.log("Données décodées :", decoded); // Log des données du token
    
    req.user = decoded; // Ajouter l'utilisateur décodé à la requête pour l'utiliser plus tard
    next(); // Passer au prochain middleware ou à la route
  } catch (err) {
    return res.status(401).json({ error: "Token invalide" });
  }
};
