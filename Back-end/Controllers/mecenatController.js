const db = require('../config/db');

// Fonction pour soumettre une nouvelle demande de mécénat
exports.createMecenat = (req, res) => {
    const { nom, email, telephone, montant, domaine_interet, message } = req.body;

    const query = `INSERT INTO demandes_mecenat (nom, email, telephone, montant, domaine_interet, message) 
                   VALUES (?, ?, ?, ?, ?, ?)`;

    db.query(query, [nom, email, telephone, montant, domaine_interet, message], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Erreur lors de l'insertion de la demande." });
        } else {
            res.status(201).json({ message: "Demande de mécénat soumise avec succès !" });
        }
    });
};

// Fonction pour récupérer les demandes de mécénat avec filtres
exports.getMecenats = (req, res) => {
    const { domaine, montant_min, montant_max } = req.query;

    let query = "SELECT * FROM demandes_mecenat WHERE 1=1";
    const params = [];

    if (domaine) {
        query += " AND domaine_interet = ?";
        params.push(domaine);
    }
    if (montant_min) {
        query += " AND montant >= ?";
        params.push(montant_min);
    }
    if (montant_max) {
        query += " AND montant <= ?";
        params.push(montant_max);
    }

    db.query(query, params, (err, results) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: "Erreur lors de la récupération des demandes." });
        } else {
            res.status(200).json(results);
        }
    });
};
