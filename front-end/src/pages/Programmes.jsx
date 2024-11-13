import React from 'react';
import { BiGlobe, BiTimeFive, BiBarChartAlt2 } from 'react-icons/bi';

const Programmes = () => {
  return (
    <section className="bg-white py-12 px-6 text-center mt-16 flex flex-col items-center" style={{ marginLeft: '10%', marginRight: '10%' }}>
      {/* Première section */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:ml-6 text-left">
          <h1 className="font-bold text-3xl text-[#F46D2B] pr-6">
          Rejoignez-nous pour redonner un sens à votre avenir
          </h1>
        </div>
        <div className="relative w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src="/asserts/img/3.png"
            alt="Group of people"
            className=" transform skew-x-2 rounded-lg"
          />
        </div>
      </div>

      <div className="relative w-full mt-10">
        <h1 className="text-3xl font-bold text-[#2f4858]">Nos <span className="text-[#50B4D9]">programmes</span> d'aide aux sportifs professionnels.</h1>

        {/* Programme 1: Améliorer la coordination entre les acteurs */}
        <div className="mt-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center" style={{ marginLeft: '5%', marginRight: '5%' }}>
          {/* Left Image */}
          <div className="md:w-1/2 w-full mb-6 md:mb-0">
            <img
              src="/asserts/img/116.png"
              alt="Améliorer la coordination"
              className="w-full rounded-lg"
            />
          </div>
          {/* Right Text */}
          <div className="md:w-1/2 w-full md:ml-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f46e2b9e]">
              Améliorer la coordination entre les acteurs du sport et de l'entreprise
            </h2>
            <strong className="block mt-4 text-[#9f9d21ad]">
              Lien renforcé pour une meilleure collaboration
            </strong>
            <h6 className="mt-4 text-center text-[#000] font-bold">Activités</h6>
            <p className="text-lg text-[#2f4858] leading-relaxed mt-4">
              → Créer des synergies entre les fédérations, les entreprises et les structures sportives. <br />
              → Organiser des forums pour connecter les différents acteurs du secteur. <br />
              → Développer des programmes de partenariat et de co-création de solutions.
            </p>
          </div>
        </div>

        {/* Programme 2: Optimiser les parcours de transition */}
        <div className="mt-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center" style={{ marginLeft: '5%', marginRight: '5%' }}>
          {/* Right Text */}
          <div className="md:w-1/2 w-full md:ml-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f46e2b9e]">
              Optimiser les parcours de transition des sportifs vers l'entreprise
            </h2>
            <strong className="block mt-4 text-[#9f9d21ad]">
              Un accompagnement sur mesure pour une reconversion réussie
            </strong>
            <h6 className="mt-4 text-center text-[#000] font-bold">Activités</h6>
            <p className="text-lg text-[#2f4858] leading-relaxed mt-4">
              → Créer des programmes de formation pour les sportifs en reconversion. <br />
              → Mettre en place des parcours personnalisés pour chaque sportif. <br />
              → Assurer un suivi pour une intégration réussie dans le milieu professionnel.
            </p>
          </div>
          {/* Left Image */}
          <div className="md:w-1/2 w-full mb-6 md:mb-0">
            <img
              src="/asserts/img/84.png"
              alt="Optimiser les parcours"
              className="w-full rounded-lg"
            />
          </div>
        </div>

        {/* Programme 3: Encourager l'intégration des sportifs dans l'entreprise */}
        <div className="mt-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center" style={{ marginLeft: '5%', marginRight: '5%' }}>
          {/* Left Image */}
          <div className="md:w-1/2 w-full mb-6 md:mb-0">
            <img
              src="/asserts/img/231.png"
              alt="Intégration dans l'entreprise"
              className="w-full rounded-lg"
            />
          </div>
          {/* Right Text */}
          <div className="md:w-1/2 w-full md:ml-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f46e2b9e]">
              Encourager l'intégration des sportifs dans le monde de l'entreprise
            </h2>
            <strong className="block mt-4 text-[#9f9d21ad]">
              Soutien à la transition professionnelle des sportifs
            </strong>
            <h6 className="mt-4 text-center text-[#000] font-bold">Activités</h6>
            <p className="text-lg text-[#2f4858] leading-relaxed mt-4">
              → Accompagner les sportifs dans la recherche d'emploi dans le secteur privé. <br />
              → Développer des partenariats avec les entreprises pour ouvrir des opportunités d'emploi. <br />
              → Organiser des événements de recrutement spécifiquement pour les sportifs.
            </p>
          </div>
        </div>

      </div>

      {/* Voir Plus Button */}
      <div className="text-center mt-10">
        <button className="bg-blue-500 text-white py-3 px-6 rounded text-lg hover:bg-gray-700">
          Participer à un programme
        </button>
      </div>

     {/* Soutien à la reconversion */}
<div className="py-12 mt-10 bg-gray-200" style={{ width: '100vw', paddingLeft: '10%', paddingRight: '10%' }}>
  <div className="text-center mb-12">
    <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
      Vous pouvez soutenir la reconversion
    </h2>
    <h2 className="text-3xl md:text-4xl font-bold text-orange-500">
      des sportifs professionnels
    </h2>
  </div>
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-full px-4">
    <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center w-80 transform transition-all duration-500 hover:scale-110 hover:shadow-xl">
      <BiBarChartAlt2 className="text-green-500 mx-auto mb-4" size={50} />
      <h3 className="text-xl font-semibold mb-4">Entreprises</h3>
      <p className="text-gray-600">
        En devenant partenaire de nos programmes, vous exercez activement votre responsabilité sociale.
      </p>
    </div>
    <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center w-80 transform transition-all duration-500 hover:scale-110 hover:shadow-xl">
      <BiGlobe className="text-green-500 mx-auto mb-4" size={50} />
      <h3 className="text-xl font-semibold mb-4">Organisations</h3>
      <p className="text-gray-600">
        Rejoignez-nous afin d’unir nos forces pour créer un écosystème sportif durable et responsable.
      </p>
    </div>
    <div className="bg-gray-100 rounded-lg shadow-lg p-6 text-center w-80 transform transition-all duration-500 hover:scale-110 hover:shadow-xl">
      <BiTimeFive className="text-green-500 mx-auto mb-4" size={50} />
      <h3 className="text-xl font-semibold mb-4">Particuliers</h3>
      <p className="text-gray-600">
        Vous pouvez contribuer en tant que bénévole mais aussi en nous soutenant grâce à vos donations.
      </p>
    </div>
  </div>
</div>




    </section>
  );
};

export default Programmes;
