const db = require("../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Connexion de l'utilisateur
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const connection = await db.getConnection();
    const [users] = await connection.query("SELECT * FROM demandes_mecenat WHERE email = ?", [email]);

    if (users.length === 0) {
      return res.status(404).json({ message: "Utilisateur non trouvé" });
    }

    const user = users[0];

    // Vérifiez si le mot de passe haché est nul
    if (!user.hashed_password) {
      return res.status(400).json({ message: "Mot de passe non défini pour cet utilisateur." });
    }

    // Vérifiez le mot de passe
    const isPasswordValid = await bcrypt.compare(password, user.hashed_password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Mot de passe incorrect" });
    }

    // Générer un jeton JWT
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ token, message: 'Connexion réussie.' });
    await connection.release();
  } catch (err) {
    console.error('Erreur lors de la connexion de l\'utilisateur:', err);
    res.status(500).json({ error: 'Erreur lors de la connexion' });
  }
};


 // Méthode pour vérifier si l'utilisateur est authentifié
 exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  return res.status(401).json({ message: 'Non autorisé' });
};

exports.logout = (req, res) => {
  console.log("Requête de déconnexion reçue:", req.body); // Affiche le contenu de la requête
  req.logout((err) => {
    if (err) {
      console.error("Erreur de déconnexion:", err); // Log l'erreur pour obtenir plus de détails
      return res.status(500).json({ message: "Erreur lors de la déconnexion" });
    }
    console.log("Déconnexion réussie");
    res.status(200).json({ message: 'Déconnexion réussie' });
  });
};




