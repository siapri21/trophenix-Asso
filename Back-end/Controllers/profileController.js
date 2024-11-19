const db = require('../config/db');

// Récupérer le profil utilisateur
exports.getUserProfile = async (req, res) => {
    const userId = req.params.id;
    try {
     
      const [result] = await db.query("SELECT * FROM demandes_mecenat WHERE id = ?", [userId]);
      if (result.length === 0) {
        return res.status(404).json({ message: "Utilisateur non trouvé" });
      }
      res.status(200).json(result[0]);
    } catch (err) {
      console.error("Erreur lors de la récupération du profil utilisateur:", err);
      res.status(500).json({ error: "Erreur lors de la récupération du profil utilisateur" });
    }
  };
  
  
  // Mettre à jour le profil utilisateur
  exports.updateUserProfile = async (req, res) => {
    const userId = req.params.id;
    const { firstName, lastName, email, phoneNumber, companyName, companyAddress, mot_de_passe, profilePicture } = req.body;
  
    try {
      let updateQuery = `
        UPDATE demandes_mecenat
        SET firstName = ?, lastName = ?, email = ?, phone = ?, companyName = ?, companyAddress = ? , profilePicture = ?
      `;
      const queryParams = [firstName, lastName, email, phoneNumber, companyName, companyAddress, profilePicture];
  
  
      if (mot_de_passe) {
        const hashedPassword = await bcryptjs.hash(mot_de_passe, 10);
        updateQuery += ", hashed_password = ?";
        queryParams.push(hashedPassword);
      } else {
        console.error("Erreur : Le mot de passe est manquant.");
        // Gérer le cas où le mot de passe est manquant (peut-être retourner une erreur ou une réponse)
      }
  
  
      updateQuery += " WHERE id = ?";
      queryParams.push(userId);
  
      await db.query(updateQuery, queryParams);
      res.status(200).json({ message: "Profil mis à jour avec succès" });
    } catch (err) {
      console.error("Erreur lors de la mise à jour du profil utilisateur:", err);
      res.status(500).json({ error: "Erreur lors de la mise à jour du profil utilisateur" });
    }
  };
  

  
 // Méthode pour vérifier si l'utilisateur est authentifié
// Méthode pour la déconnexion

// ProfilController.js

exports.logout = (req, res) => {
    // Logique de déconnexion
    if (!req.isAuthenticated()) {
      console.log('Utilisateur non trouvé : non authentifié');
      return res.status(400).json({ message: 'Utilisateur non trouvé' });
    }
  
    req.logout((err) => {
      if (err) {
        console.error('Erreur lors de la déconnexion log:', err);
        return res.status(500).json({ message: 'Erreur lors de la déconnexion' });
      }
      res.clearCookie('connect.sid'); // Effacer le cookie de session, si nécessaire
      res.status(200).json({ message: 'Déconnexion réussie' });
    });
  };
  
  
  
  
  
  