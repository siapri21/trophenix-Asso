import React from 'react';

const Header = () => {
  return (
    <div className="bg-gradient-to-b from-orange-100 to-orange-200 min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-slate-700 text-center mb-4">Bienvenue</h1>
        <h2 className="text-4xl font-semibold text-slate-600 text-center mb-8">Trophenix Association</h2>
        
        <p className="text-center text-slate-600 mb-8">
          Feugiat adipiscing massa vitae auctor mi massa. Sodales libero viverra cursus sed duis luctus nulla.
        </p>
        
        <div className="flex justify-center mb-12">
          <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded">
            Adhérer
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative">
            <img src="/asserts/img/image gauche.png" alt="Coureur" className="w-full h-85 object-cover rounded-lg" />
            <button className="absolute bottom-4 left-4 bg-white rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
          
          <div className="bg-orange-500 rounded-lg p-4 flex flex-col justify-between h-60 w-full">
            <h3 className="text-white text-xl font-bold mb-2">L'avenir se construit et de developper</h3>
          </div>
          
          <div className="bg-blue-300 rounded-lg p-4 flex flex-col justify-between w-full h-60">

            <h3 className="text-slate-700 text-xl font-bold mb-2">plus 30000 sportifs vivent avec moins 900€/mois</h3>
            <button className="bg-white text-blue-500 px-4 py-2 rounded flex items-center justify-center">
              Explore more
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          <div className="relative">
            <img src="\asserts\img\image.png" alt="Poignée de main" className="w-full h-85 object-cover rounded-lg" />
            <button className="absolute bottom-4 right-4 bg-white rounded-full p-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;