import React, { useState, useEffect } from "react";
import SEO from "../components/SEO";


const OffersList = () => {
  // État pour gérer la liste des offres et les données de la nouvelle offre
  const [offers, setOffers] = useState([]);
  const [newOffer, setNewOffer] = useState({ title: "", description: "", type: "" });
  const [showForm, setShowForm] = useState(false);
  // const API_URL = "https://trophenix-asso-api.onrender.com/api";

  // Fonction pour récupérer les offres depuis le back-end
  const fetchOffers = async () => {
    try {
      const response = await fetch(`${API_URL}/offres`); // Requête GET vers le back-end
      const data = await response.json();
      setOffers(data); // Mettre à jour l'état avec les offres récupérées
    } catch (error) {
      console.error("Erreur lors de la récupération des offres:", error);
    }
  };

  // Charger les offres au montage du composant
  useEffect(() => {
    fetchOffers();
  }, []);

  // Fonction pour gérer les changements dans le formulaire de création d'offre
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewOffer((prevOffer) => ({ ...prevOffer, [name]: value }));
  };

  // Fonction pour ajouter une nouvelle offre à la liste et envoyer au back-end
  const handleAddOffer = async (e) => {
    e.preventDefault();
    if (newOffer.title && newOffer.description && newOffer.type) {
      try {
        const response = await fetch(`http://localhost:8000/api/offres`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newOffer),
        });

        if (!response.ok) throw new Error("Erreur lors de l'ajout de l'offre");

        const data = await response.json(); // Récupère la réponse JSON
        setOffers((prevOffers) => [...prevOffers, data]); // Ajoute l'offre à la liste
        setNewOffer({ title: "", description: "", type: "" });
        setShowForm(false);
      } catch (error) {
        console.error("Erreur lors de l'ajout de l'offre :", error);
      }
    }
  };




  return (
    <section className="bg-gray-50 p-6 mt-10">
      <SEO
        title="À propos de Trophenix"
        description="En savoir plus sur Trophenix, une association dédiée à la reconversion des sportifs professionnels."
        keywords="association sportive, reconversion, mécénat, sponsoring"
      />

      <h2 className="text-2xl font-bold mb-4">Liste des Offres</h2>

      <button
        onClick={() => setShowForm(!showForm)}
        className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 mb-4"
      >
        {showForm ? "Annuler" : "Créer une Nouvelle Offre"}
      </button>

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

          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Ajouter l'Offre
          </button>
        </form>
      )}

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
