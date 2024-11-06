import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import OffersList from "./ListOffer";


const UserProfile = ({ user, onLogout }) => {
  // État pour stocker les informations de profil
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    companyName: "",
    companyAddress: "",
    mot_de_passe : "",
    confirme_mot_de_passe:""
  });
  const [profilePicture, setProfilePicture] = useState(""); // État pour l'URL de la photo de profil
  const [editing, setEditing] = useState(false);
  const [errors, setErrors] = useState({});
  const [LoggedIn, setLoggedIn] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  // Charger les données de profil initiales
  useEffect(() => {
    if (user) {
      setProfileData({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
        companyName: user.companyName,
        companyAddress: user.companyAddress,
        mot_de_passe: user.mot_de_passe,
        confirme_mot_de_passe: user.confirme_mot_de_passe
      });
      setProfilePicture(user.profilePicture || "/asserts/merrine.png"); // Défaut si pas de photo
    }
  }, [user]);

  // Fonction de validation des données de profil
  const validateProfile = () => {
    const newErrors = {};
    if (!profileData.firstName) newErrors.firstName = "Le prénom est requis";
    if (!profileData.lastName) newErrors.lastName = "Le nom est requis";
    if (!profileData.email) newErrors.email = "L’email est requis";
    if (!profileData.phoneNumber) newErrors.phoneNumber = "Le numéro de téléphone est requis";
    if (!profileData.companyName) newErrors.companyName = "Le nom de la société est";
    if (!profileData.companyAddress) newErrors.companyAddress = "L'adresse de la société";
    if (profileData.mot_de_passe !== profileData.confirme_mot_de_passe)
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Gestion des modifications de profil
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Soumission du formulaire
  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstName", profileData.firstName);
    formData.append("lastName", profileData.lastName);
    formData.append("email", profileData.email);
    formData.append("phoneNumber", profileData.phoneNumber);
    formData.append("companyName", profileData.companyName);
    formData.append("companyAddress", profileData.companyAddress);
  
    if (profilePicture) {
      formData.append("profilePicture", profilePicture); // Ajoute l'image
    }
  
    try {
      const response = await axios.put(`http://localhost:3000/api/profile/update/${user.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSuccessMessage("Profil mis à jour avec succès !");
    } catch (error) {
      console.error("Erreur lors de la mise à jour du profil :", error);
    }
  };
  

  // Fonction pour gérer la déconnexion de l'utilisateur
  const handleLogout = () => {
    setLoggedIn(false); // Mettre à jour l'état de connexion
    LoggedIn(); // Réinitialiser les informations de l'utilisateur
    // Gérer d'autres actions de déconnexion, comme le nettoyage des tokens, etc.
  };

  // Gestion de la suppression du compte
  const handleDeleteAccount = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/profile/${user.id}`);
      OnLogged();
    } catch (error) {
      console.error("Erreur lors de la suppression du compte :", error);
    }
  };

  const handleCreateOffer = () => {
    navigate("/offers"); // Redirige vers la page d'offres
  };


  return (
    <section className="bg-gray-100 mt-20">
      {/* Navbar avec la photo de profil et le bouton de déconnexion */}
      <nav className="flex justify-between items-center bg-white p-4 shadow-md">
        <div className="flex space-x-4">
          <button    onClick={handleCreateOffer}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
            Créer une Offre
          </button>
          <button
            onClick={() => setEditing(true)}
            className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300"
          >
            Modifier les Infos
          </button>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
          >
            Déconnexion
          </button>
           {/* Photo de profil */}
           <img
            src={profileData.profilePicture || "/asserts/img/116.png"} // Image par défaut si aucune photo
            alt="Profile"
            className="w-20 h-20 rounded-full mr-6"
          />
        </div>
      </nav>

      {/* Section des informations personnelles */}
      <div className="flex justify-center mt-10">
        <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
          <h2 className="text-2xl font-bold mb-6">Informations Personnelles</h2>
          {successMessage && <p className="text-green-500">{successMessage}</p>}

          {/* Formulaire d'édition de profil */}
          <form
            onSubmit={handleProfileSubmit}
            className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          >
            {/* Champs de saisie pour le formulaire */}
            <div className="mb-4">
              <label className="block text-gray-700">Prénom</label>
              <input
                type="text"
                name="firstName"
                value={profileData.firstName}
                onChange={handleProfileChange}
                disabled={!editing}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.firstName && (
                <p className="text-red-500">{errors.firstName}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Nom</label>
              <input
                type="text"
                name="lastName"
                value={profileData.lastName}
                onChange={handleProfileChange}
                disabled={!editing}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.lastName && (
                <p className="text-red-500">{errors.lastName}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">E-mail</label>
              <input
                type="email"
                name="email"
                value={profileData.email}
                onChange={handleProfileChange}
                disabled={!editing}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.email && (
                <p className="text-red-500">{errors.email}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Numéro de téléphone</label>
              <input
                type="tel"
                name="phoneNumber"
                value={profileData.phoneNumber}
                onChange={handleProfileChange}
                disabled={!editing}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.phoneNumber && (
                <p className="text-red-500">{errors.phoneNumber}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Nom de l'entreprise</label>
              <input
                type="text"
                name="companyName"
                value={profileData.companyName}
                onChange={handleProfileChange}
                disabled={!editing}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.companyName && (
                <p className="text-red-500">{errors.companyName}</p>
              )}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Adresse de l'entreprise</label>
              <input
                type="text"
                name="companyAddress"
                value={profileData.companyAddress}
                onChange={handleProfileChange}
                disabled={!editing}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.companyAddress && (
                <p className="text-red-500">{errors.companyAddress}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">mot de passe </label>
              <input
                type="password"
                name="mot_de_passe"
                value={profileData.mot_de_passe}
                onChange={handleProfileChange}
                disabled={!editing}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.mot_de_passe && (
                <p className="text-red-500">{errors.mot_de_passe}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">confirme le mot de passe</label>
              <input
                type="password"
                name="confirme_mot_de_passe"
                value={profileData.confirme_mot_de_passe}
                onChange={handleProfileChange}
                disabled={!editing}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.confirme_mot_de_passe && (
                <p className="text-red-500">{errors.confirme_mot_de_passe}</p>
              )}
            </div>

            {/* Bouton pour modifier et sauvegarder */}
            <div className="col-span-full gap-6 text-center">
              {editing ? (
                <button
                  type="submit"
                  className="w-48 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
                >
                  Sauvegarder
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => setEditing(true)}
                  className="w-48 bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300"
                >
                  Modifier le Profil
                </button>
              )}

               <button
          onClick={handleDeleteAccount}
          className="w-48 bg-red-700 text-white py-2 px-4 rounded-lg mt-4 ml-9 hover:bg-red-800 transition duration-300"
        >
          Supprimer le Compte
        </button>

            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
