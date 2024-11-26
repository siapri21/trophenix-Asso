import { HeartIcon, StarIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';




const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Détecter la taille de l'écran
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640); // Ajuste la valeur selon ton besoin (640px pour téléphone)
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Vérifie la taille à chaque chargement du composant

    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
          <span className="text-[#F46D2B]">Renaître</span> pour réussir
        </h1>

        <p className="text-center text-slate-600 p-4 text-xs sm:text-base md:text-lg">
          La reconversion est une nouvelle chance pour les athlètes professionnels de renaître après leur 
          carrière sportive, en construisant un avenir solide et épanouissant.
        </p>

        <div className="flex justify-center">
         <a href="https://www.helloasso.com/associations/trophelix-association/adhesions/adhesion-citoyenne" target="_blank" >
         <button className="bg-[#F46D2B] hover:bg-orange-500 text-white p-2 text-sm md:text-base font-bold rounded">
            Adhérer
          </button>
         </a>
        </div>

        {/* Container des images */}
        <div className="flex flex-nowrap space-x-1 sm:space-x-3 justify-center">
          {/* Première carte image */}
          <div className="relative flex flex-col w-28 sm:w-32 md:w-44 mt-10">
            <img
              src="/asserts/img/image gauche.png"
              alt="Coureur"
              className="w-full object-cover rounded-lg"
            />
             <div className="bg-white p-1 sm:p-2 rounded-3xl mt-1 flex justify-between items-end w-full">
             <HeartIcon
      className="text-yellow-500"
      style={{
        height: isMobile ? '2rem' : '2.5rem', // 2rem pour mobile, 2.5rem par défaut
        width: isMobile ? '2rem' : '2.5rem',  // 2rem pour mobile, 2.5rem par défaut
      }}
    />
              <p className="text-slate-700 text-[10px] sm:text-xs md:text-base">La Solidarité</p>
            </div>
          </div>

          {/* Deuxième carte image - cachée sur mobile */}
          <div className="hidden sm:block relative rounded-3xl overflow-hidden w-32 md:w-44 mt-[9rem] md:mt-[11.5rem]">
            <img
              src="/asserts/img/83.png"
              alt="L'avenir"
              className="h-40 md:h-52 object-cover"
            />
             <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4">
              <h3 className="text-white text-xs md:text-lg font-bold">Ce que nous construisons aujourd'hui façonne le monde de demain</h3>
            </div>
          </div>

          {/* Carte bleue au centre */}
          <div className="bg-blue-300 rounded-3xl p-2 flex flex-col justify-between h-32 sm:h-32 md:h-40 w-32  md:w-48 mt-[8rem] sm:mt-[11rem] md:mt-[14.5rem]">
            <h3 className="text-slate-700 text-[10px] sm:text-xs md:text-sm font-bold mb-1 md:mb-2">
              Plus de 30000 sportifs vivent avec moins de 900€/mois en france 
            </h3>
           <a href="https://www.sports.gouv.fr/le-suivi-socio-professionnel-et-la-reconversion-des-sportifs-de-haut-niveau-1177" target="_blank">
           <button className="bg-white text-blue-500  px-2 py-1 rounded-xl flex items-center ml-3 justify-center text-[10px] sm:text-xs md:text-sm">
              En savoir plus
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 ml-1 sm:ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
           </a>
          </div>

          {/* Troisième carte image - cachée sur mobile */}
          <div className="hidden sm:block relative rounded-3xl overflow-hidden w-32 md:w-44 mt-[9rem] md:mt-[11.5rem]">
            <img
              src="/asserts/img/171.png"
              alt="L'avenir"
              className="h-40 md:h-52 object-cover  "
            />
             <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-3 md:p-4">
              <h3 className="text-white text-xs md:text-lg font-bold">Changer de voie, c'est réécrire l'histoire de sa carrière avec passion</h3>
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
              <StarIcon className="h-10 w-10 text-yellow-500" />
              <p className="text-slate-700 text-[10px] sm:text-xs md:text-base">La renaissance </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;