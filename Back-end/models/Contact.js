const mongoose = require('mongoose');
// Importer la bibliothèque mongoose pour interagir avec MongoDB

// Définir un schéma pour le modèle 'Contact' en utilisant mongoose.Schema
const contactSchema = new mongoose.Schema({
  // Champ 'name' : une chaîne de caractères, requis
  name: { type: String, required: true },

  // Champ 'email' : une chaîne de caractères, requis
  email: { type: String, required: true },

  // Champ 'company' : une chaîne de caractères, non requis (optionnel)
  company: { type: String },

  // Champ 'phone' : une chaîne de caractères, non requis (optionnel)
  phone: { type: String },

  // Champ 'subject' : une chaîne de caractères, requis
  subject: { type: String, required: true },

  // Champ 'message' : une chaîne de caractères, requis
  message: { type: String, required: true },

  // Champ 'date' : une date, la valeur par défaut est la date et l'heure actuelles
  date: { type: Date, default: Date.now }
});

// Créer un modèle basé sur le schéma, appelé 'Contact'
const Contact = mongoose.model('Contact', contactSchema);

// Exporter le modèle pour l'utiliser dans d'autres parties de l'application
module.exports = Contact;
