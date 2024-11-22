const db = require("../config/db"); // Import direct du pool de connexions
const bcryptjs = require("bcryptjs"); // Importer bcrypt



// Méthode pour créer une nouvelle demande de mécénat
exports.createMecenat = async (req, res) => {
  console.log(req.body); // Ajoutez ceci pour déboguer
  const { companyName, firstName, lastName, email, phone, password } = req.body; // Assurez-vous de récupérer le mot de passe
  const sql = "INSERT INTO demandes_mecenat (companyName, firstName, lastName, email, phone, hashed_password) VALUES (?, ?, ?, ?, ?, ?)";
// Vérification des champs obligatoires
if (!companyName || !firstName || !lastName || !email || !phone || !password) {
  return res.status(400).json({ error: "Tous les champs sont requis, y compris le mot de passe" });
}

  try {
    // Hachage du mot de passe
    const hashedPassword = await bcryptjs.hash(password, 10); // Hacher le mot de passe

    // Insérer les données dans la base de données
    const [result] = await db.query(sql, [
      companyName,
      firstName,
      lastName,
      email,
      phone,
      hashedPassword, // Utiliser hashedPassword ici
    ]);

    res.status(201).json({ message: "Demande de mécénat créée avec succès" });
  } catch (err) {
    console.error("Erreur lors de l'insertion de la demande de mécénat:", err);
    res.status(500).json({ error: "Erreur lors de la création de la demande de mécénat" });
  }
};



// Méthode pour récupérer les demandes de mécénat
exports.getMecenats = async (req, res) => {
  // Affichage des paramètres de la requête
  console.log("Paramètres de la requête:", req.query);

  const { interestDomain, minAmount, maxAmount } = req.query;
  let sql = "SELECT * FROM demandes_mecenat WHERE 1=1";
  const filters = [];

  if (interestDomain) {
    sql += " AND interestDomain = ?";
    filters.push(interestDomain);
  }
  if (minAmount) {
    sql += " AND amount >= ?";
    filters.push(minAmount);
  }
  if (maxAmount) {
    sql += " AND amount <= ?";
    filters.push(maxAmount);
  }

  // Affichage de la requête SQL générée
  console.log("Requête SQL générée:", sql);
  console.log("Filtres utilisés:", filters);

  try {
    const [results] = await db.query(sql, filters);
    
    // Vérification des résultats
    console.log("Résultats de la requête:", results);
    
    // Envoi de la réponse
    res.status(200).json(results);
  } catch (err) {
    console.error("Erreur lors de la récupération des demandes de mécénat:", err);
    res.status(500).json({
      error: "Erreur lors de la récupération des demandes de mécénat",
    });
  }
};






// Middleware pour vérifier si l'utilisateur est authentifié
exports.isAuthenticated = (req, res, next) => {
  if (!req.session || !req.session.userId) {
    return res.status(401).json({ message: "Utilisateur non authentifié." });
  }
  next();
};

// Contrôleur pour la déconnexion
exports.logout = async () => {
  try {
    const token = localStorage.getItem('token'); // Récupérez le token du localStorage

    const response = await fetch('/api/logout', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`, // Utilisez le token récupéré
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      // Effacez les données locales
      localStorage.removeItem('token');
      
      // Redirection ou mise à jour de l'état ici
      // Par exemple :
      // window.location.href = '/login'; // Pour rediriger vers la page de connexion
      
      console.log('Déconnexion réussie');
    } else {
      const errorData = await response.json();
      throw new Error(errorData.error || 'Erreur lors de la déconnexion');
    }
  } catch (error) {
    console.error('Erreur de déconnexion:', error);
    // Gérez l'erreur ici (par exemple, affichez un message à l'utilisateur)
  }
};

