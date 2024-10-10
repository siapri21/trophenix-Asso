import React from 'react';

const Header = () => {
  return (
    <div
      className="min-h-screen p-8 pt-20"
      style={{
        background: "linear-gradient(to bottom, #F5F5F5, rgba(233, 144, 54, 0.65))"
      }}
    > {/* Ajustement du padding-top */}
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-slate-700 text-center p-6 ">Bienvenue Trophenix Association</h1>
        <p className="text-center text-slate-600 p-4">
          Feugiat adipiscing massa vitae auctor mi massa. Sodales libero viverra cursus sed duis luctus nulla.
        </p>
        <div className="flex justify-center p-9"> {/* Espace réduit ici */}
          <button className="bg-orange-400 hover:bg-orange-500 text-white font-bold py-2 px-4">
            Adhérer
          </button>
        </div>

        {/* Layout des images en ligne avec flex-nowrap */}
        <div className="flex flex-nowrap space-x-4 overflow-x-auto"> {/* Utilisation de flex-nowrap et overflow-x-auto */}
          {/* Première carte image */}
          <div className="relative flex flex-col w-48">
            <img
              src="/asserts/img/image gauche.png"
              alt="Coureur"
              className="w-full object-cover rounded-lg mt-2"
            />
            <div className="bg-white p-2 rounded-lg mt-1 flex justify-between items-end h-full">
              <p className="text-slate-700 text-sm">L'amour du sport</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
          </div>

          {/* Deuxième carte image avec overlay texte */}
          <div className="relative rounded-lg overflow-hidden w-48 mt-40">
            <img
              src="/asserts/img/83.png" // Chemin vers l'image
              alt="L'avenir"
              className="w-full h-52 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white text-lg font-bold">L'avenir se construit et se développe</h3>
            </div>
          </div>


          {/* Carte bleue au centre */}
          <div className="bg-blue-300 rounded-lg p-2 flex flex-col justify-between h-40 w-48 mt-52">
            <h3 className="text-slate-700 text-sm font-bold mb-2">
              Plus de 30000 sportifs vivent avec moins de 900€/mois
            </h3>
            <button className="bg-white text-blue-500 px-2 py-1 rounded flex items-center justify-center">
              Explore more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {/* Troisième carte image */}
          <div className="relative rounded-lg overflow-hidden w-48 mt-40">
            <img
              src="/asserts/img/36.png" // Chemin vers l'image
              alt="L'avenir"
              className="w-full h-52 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="text-white text-lg font-bold">L'avenir se construit et se développe</h3>
            </div>
          </div>

          {/* Quatrième carte image */}
          <div className="relative flex flex-col w-48">
            <img
              src="/asserts/img/image.png"
              alt="Poignée de main"
              className="w-full object-cover rounded-lg"
            />
            <div className="bg-white p-2 rounded-lg mt-1 flex justify-between items-end h-full">
              <p className="text-slate-700 text-sm">La solidarité</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
