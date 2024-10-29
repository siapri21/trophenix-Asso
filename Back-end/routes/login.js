const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');
const sendEmail = require('../utils/emailServices');

// Route POST pour recevoir et sauvegarder les données du formulaire de contact
router.post('/send-email', async (req, res) => {
  try {
    const { name, email, company, phone, subject, message } = req.body;

    // Créer un nouveau message avec les données du formulaire
    const newMessage = new Contact({
      name,
      email,
      company,
      phone,
      subject,
      message,
    });
    
    // Sauvegarder dans MongoDB
    await newMessage.save();

    // Envoyez l'email à l'association
    await sendEmail(formData)


    res.status(201).json({ message: 'Message envoyé avec succès !' });
  } catch (error) {
    console.error('Erreur lors de l\'envoi du message : ', error);
    res.status(500).json({ error: 'Erreur lors de l\'envoi du message' });
  }
});

module.exports = router;
