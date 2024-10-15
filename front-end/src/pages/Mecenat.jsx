import React from 'react';
import imageSrc from '/asserts/img/36.png'; // Assurez-vous que le chemin de l'image est correct

const Mecenat = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="relative">
        {/* Tilted Image */}
        <img
          src={imageSrc}
          alt="les événements"
          className="absolute w-64 h-64 object-cover transform rotate-3 rounded-lg shadow-lg"
        />

        {/* Text */}
        <div className="relative text-xl font-semibold text-black">
          <p className="ml-72">formulaire</p>
        </div>
      </div>
    </div>
  );
};

export default Mecenat;
