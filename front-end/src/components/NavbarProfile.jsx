// Navbar.js
import React from "react";

const Navbar = ({ handleCreateOffer, onEditInfo, onLogout, profilePicture }) => {
  return (
    <nav className="flex justify-between items-center bg-white p-4 shadow-md">
      <div className="flex space-x-4">
        <button
          onClick={handleCreateOffer}
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Créer une Offre
        </button>
        <button
          onClick={onEditInfo}
          className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition duration-300"
        >
          Modifier les Infos
        </button>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={onLogout}
          className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
        >
          Déconnexion
        </button>
        <img
          src={profilePicture || "/asserts/img/116.png"}
          alt="Profile"
          className="w-20 h-20 rounded-full mr-6"
        />
      </div>
    </nav>
  );
};

export default Navbar;
