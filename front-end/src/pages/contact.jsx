import React, { useState } from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-8 mt-20">
      <div className="flex flex-wrap -mx-4 items-center px-9">
            {/* Équipe et explication à droite */}
            <div className="w-full md:w-1/2 px-4">
          {/* <h2 className="text-2xl font-bold mb-4">Notre équipe</h2> */}
          <div className="flex justify-center space-x-4 mb-6">
            <img src="/asserts/img/116.png" alt="John Doe" className="w-16 h-16 rounded-full" />
            <img src="/asserts/img/116.png" alt="Jane Smith" className="w-16 h-16 rounded-full" />
            <img src="/asserts/img/116.png" alt="Mike Johnson" className="w-16 h-16 rounded-full" />
          </div>

          <h3 className="text-xl font-semibold mb-2">Notre engagement</h3>
          <p className="text-gray-600 mb-4">
             Nous serions ravis de pouvoir échanger avec vous !
          </p>
          <ul className="space-y-2 text-gray-600 ">
            <li>⭐ <span className='font-bold'>Nous écoutons vos enjeux</span> : Pour vous renseigner et vous épauler sur vos projets de reconversion sportive avec enthousiasme et détermination.</li>
            <li>⭐ <span className='font-bold'>Nous vous présentons notre association</span> : Pour vous présenter nos solutions et vous aider à définir votre démarche de reconversion.</li>
            <li>⭐<span className='font-bold'> Nous vous accompagnons étape par étape</span> : Pour réussir ensemble votre transition vers une nouvelle carrière après le sport professionnel !</li>
          </ul>
          <div className="flex justify-center">
            <img src="/asserts/img/renaitre.png" alt="Phénix" className="w-36 h-40 mt-20" />
          </div>
        </div>

        {/* Formulaire à gauche */}
        <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0 mt-5">
          <div className="bg-[#50B4D9] p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Contactez-nous</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-700">Nom <span className="text-red-500">*</span></label>
                <input type="text" id="name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
                <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div>
                <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-700">Entreprise/Ville</label>
                <input type="text" id="company" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-700">Numéro de téléphone</label>
                <input type="tel" id="phone" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-700">Objet <span className="text-red-500">*</span></label>
                <input type="text" id="subject" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-700">Message <span className="text-red-500">*</span></label>
                <textarea id="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
              </div>
              <div className="flex justify-center">
                <button type="submit" className="bg-orange-500 text-white py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300">Envoyer</button>
              </div>
            </form>
          </div>
        </div>

    
      </div>

      {/* Logos des partenaires en bas */}
      <div className="mt-12">
        <h1 className="text-2xl font-bold mb-4 text-center">Ils ont fais le pas, et ne le regrettent pas !</h1>
        <div className="flex justify-center space-x-8">
          <img src="/asserts/img/Invitation_Rencontre_Art-SporTech (5).png" alt="Partenaire 1" className="h-12" />
          <img src="/asserts/img/Invitation_Rencontre_Art-SporTech.png" alt="Partenaire 2" className="h-12" />
          <img src="/asserts/img/Invitation_Rencontre_Art-SporTech (4).png" alt="Partenaire 3" className="h-12" />
        </div>
      </div>
    </div>
  )
}


export default Contact;
