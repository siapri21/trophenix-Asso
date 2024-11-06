import React from 'react';

const Header = () => {
  return (
    <section
      className="w-full p-8 pt-20"
      style={{
        background: "linear-gradient(to bottom, #F5F5F5, rgba(233, 144, 54, 0.65))",
        width: "100vw"
      }}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-xl sm:text-3xl md:text-5xl font-bold text-slate-700 text-center">
          <span className="text-white">Renaître</span> pour réussir
        </h1>

        <p className="text-center text-slate-600 p-4 text-xs sm:text-base md:text-lg">
          La reconversion est une nouvelle chance pour les athlètes professionnels de renaître après leur carrière sportive, en construisant un avenir solide et épanouissant.
        </p>

        <div className="flex justify-center">
          <button className="bg-orange-400 hover:bg-orange-500 text-white p-2 text-sm md:text-base font-bold rounded">
            Adhérer
          </button>
        </div>

        {/* Container des images */}
        <div className="flex flex-nowrap space-x-1 sm:space-x-2 justify-center">
          {/* Première carte image */}
          <div className="relative flex flex-col w-28 sm:w-32 md:w-44 mt-10">
            <img
              src="/asserts/img/image gauche.png"
              alt="Coureur"
              className="w-full object-cover rounded-lg"
            />
             <div className="bg-white p-1 sm:p-2 rounded-3xl mt-1 flex justify-between items-end w-full">
              <p className="text-slate-700 text-[10px] sm:text-xs md:text-base">La solidarité</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-20 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>

          {/* Deuxième carte image - cachée sur mobile */}
          <div className="hidden sm:block relative rounded-3xl overflow-hidden w-32 md:w-44 mt-[9rem] md:mt-[11.5rem]">
            <img
              src="/asserts/img/83.png"
              alt="L'avenir"
              className="h-40 md:h-52 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4">
              <h3 className="text-white text-xs md:text-lg font-bold">L'avenir se construit et se développe</h3>
            </div>
          </div>

          {/* Carte bleue au centre */}
          <div className="bg-blue-300 rounded-3xl p-2 flex flex-col justify-between h-32 sm:h-32 md:h-40 w-32  md:w-48 mt-[8rem] sm:mt-[11rem] md:mt-[14.5rem]">
            <h3 className="text-slate-700 text-[10px] sm:text-xs md:text-sm font-bold mb-1 md:mb-2">
              Plus de 30000 sportifs vivent avec moins de 900€/mois
            </h3>
            <button className="bg-white text-blue-500  px-2 py-1 rounded-xl flex items-center justify-center text-[10px] sm:text-xs md:text-sm">
              Explore more
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 ml-1 sm:ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {/* Troisième carte image - cachée sur mobile */}
          <div className="hidden sm:block relative rounded-3xl overflow-hidden w-32 md:w-44 mt-[9rem] md:mt-[11.5rem]">
            <img
              src="/asserts/img/36.png"
              alt="L'avenir"
              className="h-40 md:h-52 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4">
              <h3 className="text-white text-xs md:text-lg font-bold">L'avenir se construit et se développe</h3>
            </div>
          </div>

          {/* Quatrième carte image */}
          <div className="relative flex flex-col w-28 sm:w-32 md:w-44 mt-10">
            <img
              src="/asserts/img/image.png"
              alt="Poignée de main"
              className="w-full object-cover rounded-lg"
            />
            <div className="bg-white p-1 sm:p-2 rounded-3xl mt-1 flex justify-between items-end w-full">
              <p className="text-slate-700 text-[10px] sm:text-xs md:text-base">La solidarité</p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-20 text-gray-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;