const db = require("../config/db"); // Import direct du pool de connexions
const bcrypt = require("bcrypt"); // Importer bcrypt

// Méthode pour créer une nouvelle demande de mécénat
exports.createMecenat = async (req, res) => {
  const { companyName, firstName, lastName, email, phoneNumber, password } =
    req.body; // Assurez-vous de récupérer le mot de passe
  const sql =
    "INSERT INTO demandes_mecenat (companyName, firstName, lastName, email, phone ,  hashed_password) VALUES ( ?, ?, ?, ?, ?, ?)";

  // Hachage du mot de passe
  const hashedPassword = await bcrypt.hash(password, 10); // Hacher le mot de passe

  try {
    const [result] = await db.query(sql, [
      companyName,
      firstName,
      lastName,
      email,
      phoneNumber,
      hashedPassword,
    ]); // Utiliser hashedPassword ici
    res.status(201).json({ message: "Demande de mécénat créée avec succès" });
  } catch (err) {
    console.error("Erreur lors de l'insertion de la demande de mécénat:", err);
    res
      .status(500)
      .json({ error: "Erreur lors de la création de la demande de mécénat" });
  }
};

// Méthode pour récupérer les demandes de mécénat
exports.getMecenats = async (req, res) => {
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
