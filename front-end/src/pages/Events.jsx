import React, { useState } from "react";
import Grow from "@mui/material/Grow";

const EventCard = () => {
  const [checked, setChecked] = useState(true);
  return (
    <section className="container mx-auto p-4 mt-20">
      {/* Title and Parallelogram */}
      <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto py-8">
        {/* Image à gauche */}
        <div className="relative w-full md:w-1/2 order-2 md:order-1">
          <img
            src="/asserts/img/131.png"
            alt="Group of people"
            className="h-60 md:h-72 transform skew-x rounded-lg object-cover"
          />
        </div>

        <div className="md:w-1/2 md:ml-12 text-left mb-8 md:mb-0 order-1 md:order-2">
          <h1 className="text-4xl sm:text-base md:text-4xl  text-[#2f4858] font-bold leading-tight sm:text-[10 px]">
            Participez à nos événements de{" "}
            <span className="text-green-700"> rencontres sportives</span>
          </h1>
        </div>
      </div>

      {/* evenements à venir */}
      <div className="container mx-auto p-4 mt-10">
        {/* Title */}
        <h1 className="text-4xl font-bold  text-[#2f4858] text-center mb-6 ">
          Événements à venir
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <Grow in={checked} timeout={1000}>
            {/* Première carte événement */}
            <div className="bg-orange-200 p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-center">
                Rencontres Art x SportTech
              </h2>
              <img
                src="/asserts/img/Dossier_Rencontre_Art-SporTech.png"
                alt="Événement 1"
                className="w-full object-cover mb-4 rounded"
              />
              <p className="text-gray-600 mb-4">
                Les événements Art x SporTech rassemblent sportifs, entreprises,
                institutions et médias dans le but de propulser une synergie de
                projets et de collaborations. Portés par une communication à
                travers l'art, nous visons à sensibiliser le plus grand nombre
                aux enjeux de la reconversion des sportifs professionnels.
              </p>
              <div className="text-center">
                <a href="https://www.eventbrite.fr/e/billets-rencontres-art-x-sportech-1033797605467?aff=oddtdtcreator">
                  <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition-colors">
                    S'inscrire
                  </button>
                </a>
              </div>
            </div>
          </Grow>

          <Grow in={checked} timeout={1000}>
            {/* Deuxième carte événement */}
            <div className="bg-orange-200 p-6 shadow-md">
              <h2 className="text-xl font-semibold mb-3 text-center">
                Rencontres Art x SportTech
              </h2>
              <img
                src="/asserts/img/Dossier_Rencontre_Art-SporTech.png"
                alt="Événement 1"
                className="w-full object-cover mb-4 rounded"
              />
              <p className="text-gray-600 mb-4">
                Les événements Art x SporTech rassemblent sportifs, entreprises,
                institutions et médias dans le but de propulser une synergie de
                projets et de collaborations. Portés par une communication à
                travers l'art, nous visons à sensibiliser le plus grand nombre
                aux enjeux de la reconversion des sportifs professionnels.
              </p>
              <div className="text-center">
                <a href="https://www.eventbrite.fr/e/billets-rencontres-art-x-sportech-1033797605467?aff=oddtdtcreator">
                  <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition-colors">
                    S'inscrire
                  </button>
                </a>
              </div>
            </div>
          </Grow>
        </div>

        {/* Container for the squares */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-orange-200 w-full h-full flex flex-col justify-center items-center rounded-lg shadow-md p-4">
            <img
              src="/asserts/img/Dossier_Rencontre_Art-SporTech.png" // Mettre à jour avec le bon chemin de l'image
              alt="Événement 1"
              className=" object-cover rounded mb-4" // Ajout de `mb-4` pour la marge en bas de l'image
            />
            <div className="text-center">
              <a href="https://www.eventbrite.fr/e/billets-rencontres-art-x-sportech-1033797605467?aff=oddtdtcreator">
                <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition-colors">
                  S'inscrire
                </button>
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-orange-200 w-full h-full flex flex-col justify-center items-center rounded-lg shadow-md p-4">
            <img
              src="/asserts/img/Dossier_Rencontre_Art-SporTech.png" // Mettre à jour avec le bon chemin de l'image
              alt="Événement 1"
              className=" object-cover rounded mb-4" // Ajout de `mb-4` pour la marge en bas de l'image
            />
            <div className="text-center">
              <a href="https://www.eventbrite.fr/e/billets-rencontres-art-x-sportech-1033797605467?aff=oddtdtcreator">
                <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition-colors">
                  S'inscrire
                </button>
              </a>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-orange-200 w-full h-full flex flex-col justify-center items-center rounded-lg shadow-md p-4">
            <img
              src="/asserts/img/Dossier_Rencontre_Art-SporTech.png" // Mettre à jour avec le bon chemin de l'image
              alt="Événement 1"
              className=" object-cover rounded mb-4" // Ajout de `mb-4` pour la marge en bas de l'image
            />
            <div className="text-center">
              <a href="https://www.eventbrite.fr/e/billets-rencontres-art-x-sportech-1033797605467?aff=oddtdtcreator">
                <button className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600 transition-colors">
                  S'inscrire
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Voir Plus Button */}
      <div className="text-center mt-10">
        <button className="bg-gray-800 text-white py-3 px-6 rounded text-lg hover:bg-gray-700">
          Voir plus
        </button>
      </div>

      {/* evenement passées */}

      <div className="container mx-auto p-4 mt-10">
        {/* Title */}
        <h1 className="text-4xl font-bold  text-[#2f4858] text-center mb-6 ">
          Événements à passées
        </h1>

        {/* First Row of Events */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-center">
          {/* First Event Card */}
          <div className="w-full p-4 rounded-lg bg-blue-200">
            <img
              src="/asserts/img/Bannière Eventbrite.png" // Update this with the correct image path if necessary
              alt="Événement 1"
              className="w-full object-cover mb-4 rounded"
            />

            <a
              href="/asserts/img/Dossier_Rencontre_Art-SporTech.png" // Chemin relatif vers le fichier dans `public`
              target="_blank" // Ouvrir dans un nouvel onglet
              rel="noopener noreferrer" // Sécurité pour éviter l'accès au `window.opener`
              className="bg-orange-300 text-white py-2 px-4 rounded hover:bg-gray-700 text-center inline-block"
            >
              Voir l'invitation
            </a>
          </div>

          {/* Second Event Card */}
          <div className="w-full p-4 rounded-lg bg-blue-200">
            <img
              src="/asserts/img/Bannière Eventbrite.png" // Update this with the correct image path if necessary
              alt="Événement 1"
              className="w-full object-cover mb-4 rounded"
            />

            <a
              href="/asserts/pdf/1. Invitation_Rencontre_Art-SporTech.pdf" // Chemin relatif vers le fichier dans `public`
              target="_blank" // Ouvrir dans un nouvel onglet
              rel="noopener noreferrer" // Sécurité pour éviter l'accès au `window.opener`
              className="bg-orange-300 text-white py-2 px-4 rounded hover:bg-gray-700 text-center inline-block"
            >
              Voir l'invitation
            </a>
          </div>

          {/* Second Event Card */}
          <div className="w-full p-4 rounded-lg bg-blue-200">
            <img
              src="/asserts/img/Bannière Eventbrite.png" // Update this with the correct image path if necessary
              alt="Événement 1"
              className="w-full object-cover mb-4 rounded"
            />

            <a
              href="/asserts/pdf/1. Invitation_Rencontre_Art-SporTech.pdf" // Chemin relatif vers le fichier dans `public`
              target="_blank" // Ouvrir dans un nouvel onglet
              rel="noopener noreferrer" // Sécurité pour éviter l'accès au `window.opener`
              className="bg-orange-300 text-white py-2 px-4 rounded hover:bg-gray-700 text-center inline-block"
            >
              Voir l'invitation
            </a>
          </div>

          {/* Second Event Card */}
          <div className="w-full p-4 rounded-lg bg-blue-200">
            <img
              src="/asserts/img/Bannière Eventbrite.png" // Update this with the correct image path if necessary
              alt="Événement 1"
              className="w-full object-cover mb-4 rounded"
            />

            <a
              href="/asserts/pdf/1. Invitation_Rencontre_Art-SporTech.pdf" // Chemin relatif vers le fichier dans `public`
              target="_blank" // Ouvrir dans un nouvel onglet
              rel="noopener noreferrer" // Sécurité pour éviter l'accès au `window.opener`
              className="bg-orange-300 text-white py-2 px-4 rounded hover:bg-gray-700 text-center inline-block"
            >
              Voir l'invitation
            </a>
          </div>
        </div>

        {/* Voir Plus Button */}
        <div className="text-center mt-10">
          <button className="bg-gray-800 text-white py-3 px-6 rounded text-lg hover:bg-gray-700">
            Voir plus
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventCard;
