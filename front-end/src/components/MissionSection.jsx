import React from 'react';
import { Link } from 'react-router-dom';

const MissionSection = () => (
  <div className="py-12 px-4 sm:px-6 lg:px-8 mt-10"  style={{width: "100vw"}}>
    <div style={{ marginLeft: '10%', marginRight: '10%' }}>
      {/* Title Section */}
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-[#2f4858]">Nos missions</h2>
        <p className="mt-2 text-lg text-[#2f4858]">
          Nous œuvrons pour sensibiliser, défendre les droits et réinsérer les sportifs dans la société.
        </p>
      </div>

      {/* Card Grid */}
      <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
        {/* Card 1: Sensibilisation */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden  transform transition-all duration-500 hover:scale-110 hover:shadow-xl">
          <img
            src="/asserts/img/80.png"
            alt="Sensibilisation"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-center">Sensibilisation</h3>
            <p className="text-gray-600 text-center">
              Informer et éduquer le public sur les défis de la reconversion des sportifs professionnels.
            </p>
            <Link>
              <div className="flex justify-center mt-4">
                <button className="px-4 py-2 bg-white border-2 border-[#ff9a61] text-[#ff9a61] rounded">
                  En savoir plus
                </button>
              </div>
            </Link>
          </div>
        </div>

        {/* Card 2: Lobbying */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden  transform transition-all duration-500 hover:scale-110 hover:shadow-xl">
          <img
            src="/asserts/img/57.png"
            alt="Lobbying"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-center">Lobbying</h3>
            <p className="text-gray-600 text-center">
              Défendre les droits des sportifs et influencer les politiques publiques pour améliorer leur réinsertion.
            </p>
            <div className="flex justify-center mt-4">
              <Link to="/">
                <button className="px-4 py-2 bg-white border-2 border-[#ff9a61] text-[#ff9a61] rounded">
                  En savoir plus
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Card 3: Réinsertion */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden  transform transition-all duration-500 hover:scale-110 hover:shadow-xl">
          <img
            src="/asserts/img/48.png"
            alt="Réinsertion"
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-center">Réinsertion</h3>
            <p className="text-gray-600 text-center">
              Accompagner les sportifs dans leur transition vers une nouvelle carrière et les intégrer dans la société.
            </p>
            <div className="flex justify-center mt-4">
              <Link to="/">
                <button className="px-4 py-2 bg-white border-2 border-[#ff9a61] text-[#ff9a61] rounded">
                  En savoir plus
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default MissionSection;
