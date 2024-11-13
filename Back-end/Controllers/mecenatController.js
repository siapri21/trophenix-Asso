const db = require("../config/db"); // Import direct du pool de connexions
const bcrypt = require("bcrypt"); // Importer bcrypt



// Méthode pour créer une nouvelle demande de mécénat
exports.createMecenat = async (req, res) => {
  const { companyName, firstName, lastName, email, phoneNumber, password } = req.body; // Assurez-vous de récupérer le mot de passe
  const sql = "INSERT INTO demandes_mecenat (companyName, firstName, lastName, email, phone, hashed_password) VALUES (?, ?, ?, ?, ?, ?)";

  // Vérifier si le mot de passe est bien fourni
  if (!password) {
    return res.status(400).json({ error: "Mot de passe manquant" });
  }

  try {
    // Hachage du mot de passe
    const hashedPassword = await bcrypt.hash(password, 10); // Hacher le mot de passe

    // Insérer les données dans la base de données
    const [result] = await db.query(sql, [
      companyName,
      firstName,
      lastName,
      email,
      phoneNumber,
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
  console.log("variable requette query", req.query);
  
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

  try {
    const [results] = await db.query(sql, filters);
    res.status(200).json(results);
  } catch (err) {
    console.error(
      "Erreur lors de la récupération des demandes de mécénat:",
      err
    );
    res
      .status(500)
      .json({
        error: "Erreur lors de la récupération des demandes de mécénat",
      });
  }
};

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
    const queryParams = [firstName, lastName, email, phoneNumber, companyName, companyAddress ,profilePicture];


    if (mot_de_passe) {
      const hashedPassword = await bcrypt.hash(mot_de_passe, 10);
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

