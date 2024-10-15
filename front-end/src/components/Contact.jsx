import React from 'react';
import { Link } from 'react-router-dom';


const ContactSection = () => {
  return (
    <div className="bg-blue-100 py-10 flex flex-col sm:flex-row justify-between items-center">
      <div className="text-center sm:text-left">
        <h2 className="text-xl font-semibold text-gray-800 text-center">Une question ?</h2>
        <p className="text-gray-600 text-center">Nous sommes là pour y répondre</p>
      </div>
      <div className="flex items-center space-x-4 mt-4 sm:mt-0">
        <p className="bg-white px-8 py-2 rounded-full text-gray-600">
          Contactez-nous, l’équipe trophenix à votre écoute
        </p>
       <Link to="/contact">
        <button className="bg-orange-400 text-white py-2 px-6 rounded-full
         hover:bg-orange-500 transition duration-300 mr-6">
          contact-nous
        </button>
        </Link>
      </div>
    </div>
  );
};

export default ContactSection;
