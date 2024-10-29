import React, { useState } from 'react';
import axios from 'axios';

const Mecenat = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const [formData, setFormData] = useState({
    gender: '',
    firstName: '',
    lastName: '',
    companyName: '', // Ajout du champ Nom de l'entreprise
    email: '',
    password: '',
    confirmPassword: '',
    alerts: false,
    partnerNews: false,
  });

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validateForm = () => {
    const newErrors = {};
    if (isSignUp) {
      if (!formData.firstName) newErrors.firstName = 'Le prénom est requis';
      if (!formData.lastName) newErrors.lastName = 'Le nom est requis';
      if (!formData.companyName) newErrors.companyName = "Le nom de l'entreprise est requis"; // Validation du champ Nom de l'entreprise
      if (!formData.email) {
        newErrors.email = 'L’email est requis';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email invalide';
      }
      if (!formData.password) {
        newErrors.password = 'Le mot de passe est requis';
      } else if (formData.password.length < 8 || !/[A-Z]/.test(formData.password) || !/\d/.test(formData.password)) {
        newErrors.password = 'Mot de passe doit contenir 8 caractères, 1 majuscule et 1 chiffre';
      }
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Les mots de passe ne correspondent pas';
      }
    } else {
      if (!loginData.email) newErrors.email = 'L’email est requis';
      if (!loginData.password) newErrors.password = 'Le mot de passe est requis';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (isSignUp) {
      setFormData({
        ...formData,
        [name]: type === 'checkbox' ? checked : value,
      });
    } else {
      setLoginData({
        ...loginData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = isSignUp
          ? await axios.post('http://localhost:8000/api/signup', formData)
          : await axios.post('http://localhost:8000/api/login', loginData);
        setSuccessMessage(isSignUp ? 'Inscription réussie !' : 'Connexion réussie !');
        console.log(response.data);
      } catch (error) {
        console.error('Erreur lors de la soumission :', error);
      }
    }
  };

  return (
    <section className="flex justify-center items-center bg-gray-100 mt-20">
      <form
        className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full mt-16"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6">{isSignUp ? 'Inscription' : 'Connexion'}</h2>

        {successMessage && <p className="text-green-500">{successMessage}</p>}

        {isSignUp ? (
          <>
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

            <div className="mb-4">
              <label className="block text-gray-700">Prénom</label>
              <input
                type="text"
                name="firstName"
                placeholder="ex. Jean"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
            </div>

            <div className="mb-4">
              <label className="block text-gray-700">Nom</label>
              <input
                type="text"
                name="lastName"
                placeholder="ex. Perrin"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              />
              {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
            </div>

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
              {errors.companyName && <p className="text-red-500">{errors.companyName}</p>}
            </div>
          </>
        ) : null}

        <div className="mb-4">
          <label className="block text-gray-700">E-mail</label>
          <input
            type="email"
            name="email"
            placeholder="email@mail.fr"
            value={isSignUp ? formData.email : loginData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Mot de passe</label>
          <input
            type="password"
            name="password"
            placeholder="Votre mot de passe"
            value={isSignUp ? formData.password : loginData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
        </div>

        {isSignUp && (
          <div className="mb-4">
            <label className="block text-gray-700">Confirmation du mot de passe</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirmez le mot de passe"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
            {errors.confirmPassword && <p className="text-red-500">{errors.confirmPassword}</p>}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
        >
          {isSignUp ? "Je m'inscris" : 'Connexion'}
        </button>

        <div className="text-center mt-4">ou</div>

        <div className="mt-4">
          <button className="w-full bg-gray-100 py-2 px-4 rounded-lg flex items-center justify-center mb-2">
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="Google logo"
              className="w-6 h-6 mr-2"
            />
            {isSignUp ? "S'inscrire" : 'Se connecter'} avec Google
          </button>

          <button className="w-full bg-gray-100 py-2 px-4 rounded-lg flex items-center justify-center">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/mac-os.png"
              alt="Apple logo"
              className="w-6 h-6 mr-2"
            />
            {isSignUp ? "S'inscrire" : 'Se connecter'} avec Apple
          </button>
        </div>

        <p className="text-center mt-4">
          {isSignUp ? 'Déjà inscrit ? ' : "Pas de compte ? "}
          <span
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-red-500 cursor-pointer"
          >
            {isSignUp ? 'Connectez-vous' : 'Inscrivez-vous'}
          </span>
        </p>
      </form>
    </section>
  );
};

export default Mecenat;
