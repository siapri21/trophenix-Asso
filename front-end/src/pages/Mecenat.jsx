import React, { useState } from "react"; // Importation des bibliothèques nécessaires
import axios from "axios"; // Importation de la bibliothèque axios pour les requêtes HTTP
import { useNavigate } from "react-router-dom";
import SEO from "../components/SEO";


const Mecenat = () => {
  const navigate = useNavigate()
  // État pour déterminer si l'utilisateur est en mode inscription ou connexion
  const [isSignUp, setIsSignUp] = useState(true);
  const [LoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState({ id: null });

  // const API_URL = "https://trophenix-asso-api.onrender.com/api";

  // État pour stocker les données du formulaire d'inscription
  const [formData, setFormData] = useState({
    gender: "",
    firstName: "",
    lastName: "",
    companyName: "", // Champ pour le nom de l'entreprise
    email: "",
    phoneNumber: "", // Champ pour le numéro de téléphone
    password: "",
    confirmPassword: "",
    alerts: false,
    partnerNews: false,
  });

  // État pour stocker les données de connexion
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });



  // Fonction pour gérer le succès de la connexion
  const handleLoginSuccess = (userData) => {
    setLoggedIn(true); // Mettre à jour l'état de connexion
    setUser(userData); // Stocker les informations de l'utilisateur
    console.log("redirige vers la page profil");
    navigate("/profile");  // redirerction vers la page de profil
  };

  // État pour gérer les erreurs du formulaire
  const [errors, setErrors] = useState({});

  // État pour afficher les messages de succès
  const [successMessage, setSuccessMessage] = useState("");

  // Fonction de validation du formulaireF
  const validateForm = () => {
    const newErrors = {};
    if (isSignUp) {
      // Validation pour le formulaire d'inscription
      if (!formData.firstName) newErrors.firstName = "Le prénom est requis";
      if (!formData.lastName) newErrors.lastName = "Le nom est requis";
      if (!formData.companyName)
        newErrors.companyName = "Le nom de l'entreprise est requis"; // Validation du nom de l'entreprise
      if (!formData.email) {
        newErrors.email = "L’email est requis";
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Email invalide";
      }
      if (!formData.phoneNumber) {
        newErrors.phoneNumber = "Le numéro de téléphone est requis";
      } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
        newErrors.phoneNumber =
          "Numéro de téléphone invalide (doit contenir 10 chiffres)";
      }
      if (!formData.password) {
        newErrors.password = "Le mot de passe est requis";
      } else if (
        formData.password.length < 8 ||
        !/[A-Z]/.test(formData.password) ||
        !/\d/.test(formData.password)
      ) {
        newErrors.password =
          "Mot de passe doit contenir 8 caractères, 1 majuscule et 1 chiffre";
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Les mots de passe ne correspondent pas";
      }
    } else {
      // Validation pour le formulaire de connexion
      if (!loginData.email) newErrors.email = "L’email est requis";
      if (!loginData.password)
        newErrors.password = "Le mot de passe est requis";
    }
    setErrors(newErrors); // Mettre à jour les erreurs
    return Object.keys(newErrors).length === 0; // Retourne true si aucune erreur
  };

  // Fonction de gestion des changements dans les champs de formulaire
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (isSignUp) {
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
        ...(name === "profilePicture" && { profilePicture: files[0] }),
      });

    } else {
      setLoginData({
        ...loginData,
        [name]: value,
      });
    }
  };

  // Fonction de soumission du formulaire
  const handleSubmit = async (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    if (validateForm()) { // Valider le formulaire
      try {
        const data = new FormData();
        Object.keys(formData).forEach((key) => {
          data.append(key, formData[key]);
        });

        // Envoie la requête POST selon le mode (inscription ou connexion)
        const response = isSignUp
          ? await axios.post(`http://localhost:8000/api/register`, formData)

          : await axios.post(`http://localhost:8000/api/login`, loginData);

        setSuccessMessage(
          isSignUp ? "Inscription réussie !" : "Connexion réussie !"
        );

        console.log(response.data); // Affiche la réponse du serveur

        if (isSignUp) {
          // Si l'inscription réussit
          setFormData({
            gender: "",
            firstName: "",
            lastName: "",
            companyName: "",
            email: "",
            phoneNumber: "",
            password: "",
            confirmPassword: "",
            alerts: false,
            partnerNews: false,
          });
          setIsSignUp(false); // Basculer vers le mode connexion
        } else {
          // Si la connexion réussit
          handleLoginSuccess(response.data.user); // Appel de la fonction de succès de connexion
        }

      } catch (error) {
        if (error.response) {
          console.error("Erreur lors de la soumission :", error.response.data);
        } else {
          console.error("Erreur de la soumission", error);
        }
      }
    }



  };



  return (
    <section className="flex justify-center items-center bg-gray-100 mt-20 min-h-screen ">
    <SEO
      title="À propos de Trophenix"
      description="En savoir plus sur Trophenix, une association dédiée à la reconversion des sportifs professionnels."
      keywords="association sportive, reconversion, mécénat, sponsoring"
    />
  
    <form
      className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full mb-8"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-bold mb-6 text-center">
        {isSignUp ? "Inscription" : "Connexion"}
      </h2>
      {successMessage && <p className="text-green-500">{successMessage}</p>}
  
      {isSignUp ? (
        <>
          {/* Civilité seule */}
          <div className="mb-4">
            <label className="block text-gray-700">Civilité</label>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Madame"
                  onChange={handleChange}
                  className="mr-2"
                />
                Madame
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="Monsieur"
                  onChange={handleChange}
                  className="mr-2"
                />
                Monsieur
              </label>
            </div>
          </div>
  
          {/* Nom et prénom sur la même ligne */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700">Prénom</label>
              <input
                type="text"
                name="firstName"
                placeholder="ex. Jean"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.firstName && (
                <p className="text-red-500">{errors.firstName}</p>
              )}
            </div>
  
            <div>
              <label className="block text-gray-700">Nom</label>
              <input
                type="text"
                name="lastName"
                placeholder="ex. Perrin"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.lastName && (
                <p className="text-red-500">{errors.lastName}</p>
              )}
            </div>
          </div>
  
          {/* Nom de l'entreprise seule */}
          <div className="mb-4">
            <label className="block text-gray-700">Nom de l'entreprise</label>
            <input
              type="text"
              name="companyName"
              placeholder="Nom de l'entreprise"
              value={formData.companyName}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            {errors.companyName && (
              <p className="text-red-500">{errors.companyName}</p>
            )}
          </div>
  
          {/* Téléphone */}
          <div className="mb-4">
            <label className="block text-gray-700">Numéro de téléphone</label>
            <input
              type="tel"
              name="phoneNumber"
              placeholder="ex. 0123456789"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            {errors.phoneNumber && (
              <p className="text-red-500">{errors.phoneNumber}</p>
            )}
          </div>
  
          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700">E-mail</label>
            <input
              type="email"
              name="email"
              placeholder="ex. email@example.com"
              value={isSignUp ? formData.email : loginData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
  
          {/* Mot de passe */}
          <div className="mb-4">
            <label className="block text-gray-700">Mot de passe</label>
            <input
              type="password"
              name="password"
              placeholder="Mot de passe"
              value={isSignUp ? formData.password : loginData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password}</p>
            )}
          </div>
  
          {/* Confirmation du mot de passe */}
          {isSignUp && (
            <div className="mb-4">
              <label className="block text-gray-700">
                Confirmation du mot de passe
              </label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirmez le mot de passe"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.confirmPassword && (
                <p className="text-red-500">{errors.confirmPassword}</p>
              )}
            </div>
          )}
        </>
      ) : null}
  
      <button
        type="submit"
        className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
      >
        {isSignUp ? "Je m'inscris" : "Connexion"}
      </button>
  
      <p className="text-center mt-4">
        {isSignUp ? "Déjà inscrit ? " : "Pas de compte ? "}
        <span
          onClick={() => setIsSignUp(!isSignUp)}
          className="text-red-500 cursor-pointer"
        >
          {isSignUp ? "Connectez-vous" : "Inscrivez-vous"}
        </span>
      </p>
    </form>
  </section>
  

  
  );
};

export default Mecenat; // Exportation du composant