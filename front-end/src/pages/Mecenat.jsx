import React, { useState } from 'react';

const Mecenat = () => {
  const [formData, setFormData] = useState({
    gender: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    alerts: false,
    partnerNews: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <section className="flex justify-center items-center  bg-gray-100 mt-20">
      <form
        className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full mt-16"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6">Vos coordonnées</h2>

        <div className="mb-4">
          <label className="block text-gray-700">Vous avez déjà un compte ?</label>
          <a href="#" className="text-red-500">Connectez-vous</a>
        </div>

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
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">E-mail</label>
          <input
            type="email"
            name="email"
            placeholder="email@mail.fr"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Mot de passe</label>
          <input
            type="password"
            name="password"
            placeholder="Au moins 8 caractères, 1 majuscule, 1 chiffre"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Confirmation du mot de passe</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirmation du mot de passe"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
        </div>

        <div className="mb-4">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="alerts"
              checked={formData.alerts}
              onChange={handleChange}
              className="mr-2"
            />
            Je souhaite recevoir les alertes infos de trophenix
          </label>
        </div>

        <div className="mb-6">
          <label className="flex items-center">
            <input
              type="checkbox"
              name="partnerNews"
              checked={formData.partnerNews}
              onChange={handleChange}
              className="mr-2"
            />
            Je souhaite recevoir des actualités des partenaires de l'association trophenix
          </label>
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Je valide
        </button>

        <div className="text-center mt-4">ou</div>

        <div className="mt-4">
          <button className="w-full bg-gray-100 py-2 px-4 rounded-lg flex items-center justify-center mb-2">
            <img
              src="https://img.icons8.com/color/48/000000/google-logo.png"
              alt="Google logo"
              className="w-6 h-6 mr-2"
            />
            S'inscrire avec Google
          </button>

          <button className="w-full bg-gray-100 py-2 px-4 rounded-lg flex items-center justify-center">
            <img
              src="https://img.icons8.com/ios-filled/50/000000/mac-os.png"
              alt="Apple logo"
              className="w-6 h-6 mr-2"
            />
            S'inscrire avec Apple
          </button>
        </div>


      </form>



    </section>


  );
};

export default Mecenat;
