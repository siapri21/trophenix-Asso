const nodemailer = require('nodemailer');

// Configurez le transporteur Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail', // Utilisez le service de votre choix
  auth: {
    user: process.env.EMAIL_USER, // Email de l'envoyeur
    pass: process.env.EMAIL_PASS, // Mot de passe de l'envoyeur
  },
});

// Fonction d'envoi d'email
const sendEmail = async (formData) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'trophenix@gmail.com', // Email de réception (association)
      subject: `Nouveau message de ${formData.name}`,
      text: `Nom : ${formData.name}\nEmail : ${formData.email}\nEntreprise : ${formData.company}\nTéléphone : ${formData.phone}\nObjet : ${formData.subject}\nMessage : ${formData.message}`,
    };

    await transporter.sendMail(mailOptions);
    console.log('Email envoyé avec succès');
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
  }
};

module.exports = sendEmail;
