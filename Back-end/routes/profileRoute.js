// routes/profileRoutes.js
const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const ProfilController = require("../Controllers/profileController.js");
const authController = require("../Controllers/authController.js");

// Configuration de multer pour stocker les images de profil
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Dossier où les images seront stockées
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Nom unique pour chaque image
  }
});

const upload = multer({ storage });

// Route pour mettre à jour les informations de profil
router.put("/update/:id", upload.single("profilePicture"), async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, phoneNumber, companyName, companyAddress } = req.body;
    const profilePicture = req.file ? `/uploads/${req.file.filename}` : null;

    // Exemple de mise à jour dans une base de données (remplacez par la logique réelle)
    const updatedUser = await User.findByIdAndUpdate(
      id,
      {
        firstName,
        lastName,
        email,
        phoneNumber,
        companyName,
        companyAddress,
        mot_de_passe,
        profilePicture // Enregistre le chemin de la photo
      },
      { new: true } // Renvoie l'utilisateur mis à jour
    );

    res.status(200).json({ message: "Profil mis à jour avec succès", user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la mise à jour du profil", error });
  }
});

router.get('/', authController.verifyToken, (req, res) => {
  res.status(200).json({
     message: "Accès au profil réussi", 
     user: req.user });
    });

// Route pour récupérer le profil de l'utilisateur
router.get("/:id", authController.verifyToken,ProfilController.getUserProfile);

// Route pour mettre à jour le profil de l'utilisateur
router.put("/update/:id", ProfilController.updateUserProfile);

// Route pour déconnecter l'utilisateur
router.post('/logout', ProfilController.logout);



module.exports = router;
