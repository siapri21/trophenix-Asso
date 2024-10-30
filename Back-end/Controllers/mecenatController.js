// Importation de la configuration de la base de données
// Cela permet d'utiliser la connexion à la base de données MySQL configurée dans `db`
const db = require('../config/db');

// Méthode pour créer une nouvelle demande de mécénat
exports.createMecenat = (req, res) => {
    // Extraire les données envoyées par le client dans `req.body`
    // Ces données incluent le nom de l'entreprise, le prénom, le nom, l'email, le montant proposé,
    // le domaine d'intérêt et un message personnalisé.
    const { companyName, firstName, lastName, email, amount, interestDomain, message } = req.body;

    // Requête SQL pour insérer une nouvelle demande de mécénat dans la base de données
    // Les `?` sont des placeholders qui seront remplacés par les valeurs dans l'ordre spécifié
    const sql = 'INSERT INTO demandes_mecenat (companyName, firstName, lastName, email, amount, interestDomain, message) VALUES (?, ?, ?, ?, ?, ?, ?)';
    
    // Exécution de la requête SQL avec les données fournies dans `req.body`
    // db.query prend trois arguments : la requête SQL, les valeurs à insérer, et une fonction de callback
    db.query(sql, [companyName, firstName, lastName, email, amount, interestDomain, message], (err, result) => {
        if (err) {
            // Si une erreur survient pendant l'insertion, log de l'erreur dans la console et renvoi d'un message d'erreur
            console.error('Erreur lors de l\'insertion de la demande de mécénat:', err);
            res.status(500).json({ error: 'Erreur lors de la création de la demande de mécénat' });
        } else {
            // En cas de succès, envoi d'une réponse 201 (Créé) avec un message de confirmation
            res.status(201).json({ message: 'Demande de mécénat créée avec succès' });
        }
    });
};

// Méthode pour récupérer les demandes de mécénat avec possibilité de filtrage
exports.getMecenats = (req, res) => {
    // Extraction des filtres optionnels à partir des paramètres de requête (`req.query`)
    // Ces filtres incluent le domaine d'intérêt, le montant minimum, et le montant maximum.
    const { interestDomain, minAmount, maxAmount } = req.query;

    // Définition de la requête SQL de base pour récupérer toutes les demandes de mécénat
    // La condition `WHERE 1=1` est utilisée pour faciliter l'ajout dynamique de filtres
    let sql = 'SELECT * FROM demandes_mecenat WHERE 1=1';
    
    // Création d'un tableau pour stocker les valeurs de filtre à passer dans la requête SQL
    const filters = [];

    // Ajout des conditions de filtre dynamiquement en fonction des paramètres fournis
    if (interestDomain) {
        // Si un domaine d'intérêt est fourni, ajout d'une condition pour le domaine d'intérêt
        sql += ' AND interestDomain = ?';
        filters.push(interestDomain); // Ajout de la valeur de domaine d'intérêt aux filtres
    }
    if (minAmount) {
        // Si un montant minimum est fourni, ajout d'une condition pour le montant minimum
        sql += ' AND amount >= ?';
        filters.push(minAmount); // Ajout de la valeur du montant minimum aux filtres
    }
    if (maxAmount) {
        // Si un montant maximum est fourni, ajout d'une condition pour le montant maximum
        sql += ' AND amount <= ?';
        filters.push(maxAmount); // Ajout de la valeur du montant maximum aux filtres
    }

    // Exécution de la requête SQL avec les conditions de filtre
    db.query(sql, filters, (err, results) => {
        if (err) {
            // Si une erreur survient pendant l'exécution de la requête, log de l'erreur et envoi d'un message d'erreur
            console.error('Erreur lors de la récupération des demandes de mécénat:', err);
            res.status(500).json({ error: 'Erreur lors de la récupération des demandes de mécénat' });
        } else {
            // En cas de succès, renvoi des résultats obtenus sous forme de tableau JSON
            res.status(200).json(results);
        }
    });
};
