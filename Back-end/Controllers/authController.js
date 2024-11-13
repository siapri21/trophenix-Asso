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
    // console.log("teste valeur de ispasswordvalid",isPasswordValid);
    
    if (!isPasswordValid) {
      // console.log("affiche le mot de passe" + user.hashed_password);

      return res.status(400).json({ message: "Mot de passe incorrect" });
    }

    // Générer un jeton JWT
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
  //  console.log("valeur du token ", token);
   
    // console.log("affiche le mot de passe jwt" + password);
    res.status(200).json({ token, message: 'Connexion réussie.' });
    await connection.release();
  } catch (err) {
    console.error('Erreur lors de la connexion de l\'utilisateur:', err);
    res.status(500).json({ error: 'Erreur lors de la connexion' });
  }
};


 // Méthode pour vérifier si l'utilisateur est authentifié
// Méthode pour la déconnexion

exports.logout = (req, res) => {
  if (!req.isAuthenticated()) {
    console.log('Utilisateur non trouvé : non authentifié');
    return res.status(400).json({ message: 'Utilisateur non trouvé' });
  }

  console.log('Utilisateur authentifié, déconnexion en cours...');
  req.logout((err) => {
    if (err) {
      console.error('Erreur lors de la déconnexion:', err);
      return res.status(500).json({ message: 'Erreur lors de la déconnexion' });
    }
    res.status(200).json({ message: 'Déconnexion réussie' });
  });
};





