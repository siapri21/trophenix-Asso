import React from 'react';
import { BiGlobe, BiTimeFive, BiBarChartAlt2 } from 'react-icons/bi';

const Programmes = () => {
  return (
    <section className="bg-white py-12 px-6 text-center mt-16 flex flex-col items-center" style={{ marginLeft: '10%', marginRight: '10%' }}>
      {/* First Section: Text and Skewed Image */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:ml-6 text-left">
          <p className="text-lg text-[#F46D2B]">
            There are many variations of passages of Lorem Ipsum available...
          </p>
        </div>
        <div className="relative w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src="/asserts/img/131.png"
            alt="Group of people"
            className="h-60 transform skew-x-12 rounded-lg"
          />
        </div>
      </div>


      <div className="relative w-full  mt-10">
        <h1 className="text-3xl font-bold text-[#2f4858]">Nos <span className="text-[#50B4D9]">programmes</span> d'aide aux sportifs professionnels.</h1>
        {/* Second New Section: Image on Left, Text on Right */}
        <div className="mt-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center" >

          {/* Left Image */}
          <div className="md:w-1/2 w-full mb-6 md:mb-0">
            <img
              src="/asserts/img/116.png"
              alt="Descriptive Image"
              className="w-full rounded-lg"
            />
          </div>

          {/* Right Text */}
          <div className="md:w-1/2 w-full md:ml-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f46e2b9e]">
              Promotion à la création d'offres d'emploi dédiés aux sportifs pros.
            </h2>

            <strong className="block mt-4 text-[#9f9d21ad]">
              Nous œuvrons pour l'augmentation d'emploi des sportifs en entreprise
            </strong>

            <h6 className="mt-4 text-center text-[#000] font-bold">Activités</h6>

            <p className="text-lg text-[#2f4858] leading-relaxed mt-4">
              → Initier des ponts entre le monde du sport et de l'entreprise pour généraliser la création d'emplois dédiés.
              <br />
              → Catalyseur : Encourager les politiques d'emplois entre les fédérations et les entreprises.
              <br />
              → Connecteur : Proposer des rencontres entre sportifs, clubs et entreprises pour favoriser les recrutements.
            </p>
          </div>



        </div>



        {/* Second New Section: Image on Left, Text on Right */}
        <div className="mt-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center " style={{ marginLeft: '5%', marginRight: '5%' }}>


          {/* Right Text */}
          <div className="md:w-1/2 w-full md:ml-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f46e2b9e]">
              Promotion à la création d'offres d'emploi dédiés aux sportifs pros.
            </h2>

            <strong className="block mt-4 text-[#9f9d21ad]">
              Nous œuvrons pour l'augmentation d'emploi des sportifs en entreprise
            </strong>

            <h6 className="mt-4 text-center text-[#000] font-bold">Activités</h6>

            <p className="text-lg text-[#2f4858] leading-relaxed mt-4">
              → Initier des ponts entre le monde du sport et de l'entreprise pour généraliser la création d'emplois dédiés.
              <br />
              → Catalyseur : Encourager les politiques d'emplois entre les fédérations et les entreprises.
              <br />
              → Connecteur : Proposer des rencontres entre sportifs, clubs et entreprises pour favoriser les recrutements.
            </p>
          </div>

          {/* Left Image */}
          <div className="md:w-1/2 w-full mb-6 md:mb-0">
            <img
              src="/asserts/img/116.png"
              alt="Descriptive Image"
              className="w-full rounded-lg"
            />
          </div>
        </div>



        {/* Second New Section: Image on Left, Text on Right */}
        <div className="mt-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center" style={{ marginLeft: '5%', marginRight: '5%' }}>
          {/* Left Image */}
          <div className="md:w-1/2 w-full mb-6 md:mb-0">
            <img
              src="/asserts/img/116.png"
              alt="Descriptive Image"
              className="w-full rounded-lg"
            />
          </div>

          {/* Right Text */}
          <div className="md:w-1/2 w-full md:ml-6 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#f46e2b9e]">
              Promotion à la création d'offres d'emploi dédiés aux sportifs pros.
            </h2>

            <strong className="block mt-4 text-[#9f9d21ad]">
              Nous œuvrons pour l'augmentation d'emploi des sportifs en entreprise
            </strong>

            <h6 className="mt-4 text-center text-[#000] font-bold">Activités</h6>

            <p className="text-lg text-[#2f4858] leading-relaxed mt-4">
              → Initier des ponts entre le monde du sport et de l'entreprise pour généraliser la création d'emplois dédiés.
              <br />
              → Catalyseur : Encourager les politiques d'emplois entre les fédérations et les entreprises.
              <br />
              → Connecteur : Proposer des rencontres entre sportifs, clubs et entreprises pour favoriser les recrutements.
            </p>
          </div>
        </div>


      </div>

      {/* Voir Plus Button */}
      <div className="text-center mt-10 ">
        <button className="bg-blue-500 text-white py-3 px-6 rounded text-lg hover:bg-gray-700">
          Participer à un programmes
        </button>
      </div>



      <div className="bg-gray-100 py-12 mt-10 w-full ">
        {/* Titre centralisé */}
        <div className="text-center mb-12 ">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-600">
            Vous pouvez soutenir la reconversion
          </h2>
          <h2 className="text-3xl md:text-4xl font-bold text-orange-500">
            des sportifs professionnels
          </h2>
        </div>

        {/* Grid avec layout responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-full px-4">
          {/* Entreprises */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <BiBarChartAlt2 className="text-green-500 mx-auto mb-4" size={50} />
            <h3 className="text-xl font-semibold mb-4">Entreprises</h3>
            <p className="text-gray-600">
              En devenant partenaire de nos programmes, vous exercez activement votre responsabilité sociale.
            </p>
          </div>

          {/* Organisations */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
            <BiGlobe className="text-green-500 mx-auto mb-4" size={50} />
            <h3 className="text-xl font-semibold mb-4">Organisations</h3>
            <p className="text-gray-600">
              Rejoignez-nous afin d’unir nos forces pour créer un écosystème sportif durable et responsable.
            </p>
          </div>

          {/* Particuliers */}
          <div className="bg-white rounded-lg shadow-lg p-6 text-center">
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
