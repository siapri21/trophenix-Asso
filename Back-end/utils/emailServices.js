const nodemailer = require('nodemailer');
// chargement des variables d'environnement
require('dotenv').config();


// Configurez le transporteur Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Utilisez le service de votre choix
  auth: {
    user: process.env.EMAIL_USER, // Email de l'envoyeur
    pass: process.env.EMAIL_PASSWORD, // Mot de passe de l'envoyeur
  },
  
});

// console.log('EMAIL_USER:', process.env.EMAIL_USER);
// console.log('EMAIL_PASSWORD:', process.env.EMAIL_PASSWORD);


// Fonction d'envoi d'email
const sendEmail = async (formData) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'ouattara10siap@gmail.com', // Email de réception (association)
      subject: `Nouveau message de ${formData.name}`,
      text: `Nom : ${formData.name}\nEmail : ${formData.email}\nEntreprise : ${formData.company}\nTéléphone 
      : ${formData.phone}\nObjet : ${formData.subject}\nMessage : ${formData.message}`,
    };

    await transporter.sendMail(mailOptions);
    // console.log('Email envoyé avec succès à l\'association');

    // Email de confirmation à l'utilisateur
    const mailOptionsToUser = {
      from: process.env.EMAIL_USER,
      to: formData.email, // Email de l'utilisateur
      subject: 'Confirmation de réception de votre message',
      text: `Bonjour ${formData.name},\n\nNous avons bien reçu votre message et nous vous répondrons dans les meilleurs délais.
      \n\nMerci de nous avoir contactés.\n\nCordialement,\nL’équipe Trophenix`,
    };
    await transporter.sendMail(mailOptionsToUser);
    // console.log('Email envoyé avec succès à l\'utilisateur');

  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
  }
};

module.exports = sendEmail;
