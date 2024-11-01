import React, { useState, useEffect } from "react";
import axios from "axios";

const UserProfile = ({ user, onLogout }) => {
  // État pour stocker les informations de profil
  const [profileData, setProfileData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  });
  const [editing, setEditing] = useState(false);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  // Charger les données de profil initiales
  useEffect(() => {
    if (user) {
      setProfileData({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        phoneNumber: user.phoneNumber,
      });
    }
  }, [user]);

  // Fonction de validation des données de profil
  const validateProfile = () => {
    const newErrors = {};
    if (!profileData.firstName) newErrors.firstName = "Le prénom est requis";
    if (!profileData.lastName) newErrors.lastName = "Le nom est requis";
    if (!profileData.email) newErrors.email = "L’email est requis";
    if (!profileData.phoneNumber)
      newErrors.phoneNumber = "Le numéro de téléphone est requis";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Fonction pour gérer les modifications de profil
  const handleProfileChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Fonction pour soumettre les modifications de profil
  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    if (validateProfile()) {
      try {
        const response = await axios.put(
          `http://localhost:3000/api/profile/${user.id}`,
          profileData
        );
        setSuccessMessage("Profil mis à jour avec succès !");
        setEditing(false);
      } catch (error) {
        console.error("Erreur lors de la mise à jour du profil :", error);
      }
    }
  };

  // Fonction pour la suppression du compte
  const handleDeleteAccount = async () => {
    try {
      await axios.delete(`http://localhost:3000/api/profile/${user.id}`);
      onLogout(); // Déconnecter l'utilisateur après suppression
    } catch (error) {
      console.error("Erreur lors de la suppression du compte :", error);
    }
  };

  return (
    <section className="flex justify-center items-center bg-gray-100 mt-20">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6">Profil Utilisateur</h2>

        {successMessage && <p className="text-green-500">{successMessage}</p>}
        <form onSubmit={handleProfileSubmit}>
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
            {errors.email && <p className="text-red-500">{errors.email}</p>}
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

          {editing ? (
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Sauvegarder
            </button>
          ) : (
            <button
              type="button"
              onClick={() => setEditing(true)}
              className="w-full bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300"
            >
              Modifier le Profil
            </button>
          )}
        </form>

        <button
          onClick={onLogout}
          className="w-full bg-red-500 text-white py-2 px-4 rounded-lg mt-4 hover:bg-red-600 transition duration-300"
        >
          Déconnexion
        </button>

        <button
          onClick={handleDeleteAccount}
          className="w-full bg-red-700 text-white py-2 px-4 rounded-lg mt-4 hover:bg-red-800 transition duration-300"
        >
          Supprimer le Compte
        </button>
      </div>
    </section>
  );
};

export default UserProfile;
