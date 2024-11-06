import React, { useState } from "react";

const OffersList = () => {
  // État pour gérer la liste des offres et les données de la nouvelle offre
  const [offers, setOffers] = useState([
    { id: 1, title: "Pack de Sponsoring", description: "Améliorez votre visibilité avec notre pack de sponsoring.", type: "sponsorship" },
    { id: 2, title: "Visibilité et Réseautage", description: "Obtenez une exposition accrue auprès de notre communauté.", type: "visibility" },
  ]);
  const [newOffer, setNewOffer] = useState({ title: "", description: "", type: "" }); // État pour les valeurs de la nouvelle offre
  const [showForm, setShowForm] = useState(false); // État pour contrôler l'affichage du formulaire

  // Fonction pour gérer les changements dans le formulaire de création d'offre
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewOffer((prevOffer) => ({ ...prevOffer, [name]: value }));
  };

  // Fonction pour ajouter une nouvelle offre à la liste
  const handleAddOffer = (e) => {
    e.preventDefault();
    if (newOffer.title && newOffer.description && newOffer.type) {
      const newOfferData = { ...newOffer, id: offers.length + 1 };
      setOffers((prevOffers) => [...prevOffers, newOfferData]); // Ajouter la nouvelle offre à la liste
      setNewOffer({ title: "", description: "", type: "" }); // Réinitialiser les valeurs du formulaire
      setShowForm(false); // Fermer le formulaire après l'ajout
    }
  };

  return (
    <section className="bg-gray-50 p-6 mt-10">
        
      <h2 className="text-2xl font-bold mb-4">Liste des Offres</h2>

      {/* Bouton pour afficher ou masquer le formulaire de création */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 mb-4"
      >
        {showForm ? "Annuler" : "Créer une Nouvelle Offre"}
      </button>

      {/* Formulaire de création d'offre, visible si showForm est true */}
      {showForm && (
        <form onSubmit={handleAddOffer} className="bg-white shadow-md rounded-lg p-6 mb-6">
          <div className="mb-4">
            <label className="block text-gray-700">Titre de l'Offre</label>
            <input
              type="text"
              name="title"
              value={newOffer.title}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Nom de l'offre"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Description de l'Offre</label>
            <textarea
              name="description"
              value={newOffer.description}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              placeholder="Détails de l'offre"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Type d'Offre</label>
            <select
              name="type"
              value={newOffer.type}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            >
              <option value="">Sélectionner le type</option>
              <option value="sponsorship">Sponsoring</option>
              <option value="visibility">Visibilité</option>
              <option value="support">Soutien Spécialisé</option>
              <option value="project">Financement de Projets</option>
            </select>
          </div>

          {/* Bouton pour soumettre le formulaire et ajouter l'offre */}
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Ajouter l'Offre
          </button>
        </form>
      )}

      {/* Affichage de la liste des offres existantes */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {offers.map((offer) => (
          <div key={offer.id} className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
            <p className="text-gray-700 mb-2">{offer.description}</p>
            <p className="text-gray-500 italic">Type : {offer.type}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OffersList;


// *commentaire pour moi 

//? État des Offres: offers stocke la liste des offres actuelles, et newOffer est un objet pour les données de la nouvelle offre.
//* Affichage du Formulaire: showForm contrôle la visibilité du formulaire de création d'offre.
//! Fonction handleChange: Met à jour newOffer avec les valeurs entrées par l'utilisateur.
// *Fonction handleAddOffer: Valide et ajoute la nouvelle offre à offers et réinitialise le formulaire.
// !Affichage des Offres: Affiche chaque offre dans une carte avec le titre, la description et le type.