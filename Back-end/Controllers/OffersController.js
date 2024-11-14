const db = require('../config/db');

// Récupérer toutes les offres
exports.getAllOffers = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM offres");
    res.status(200).json(rows);
  } catch (error) {
    console.error("Erreur lors de la récupération des offres :", error);
    res.status(500).json({ error: "Erreur lors de la récupération des offres" });
  }
};

// Ajouter une nouvelle offre
exports.createOffer = async (req, res) => {
  const { title, description, type } = req.body;
  try {
    const [result] = await db.query(
      "INSERT INTO offres (title, description, type) VALUES (?, ?, ?)",
      [title, description, type]
    );
    res.status(201).json({ id: result.insertId, title, description, type });
  } catch (error) {
    console.error("Erreur lors de la création de l'offre :", error);
    res.status(500).json({ error: "Erreur lors de la création de l'offre" });
  }
};
