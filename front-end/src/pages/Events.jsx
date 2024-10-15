import React from 'react';
import imageSrc from '/asserts/img/36.png'; // Assurez-vous que le chemin de l'image est correct

const EventCard = () => {
  return (
    <section className="container mx-auto p-4 mt-20">
      {/* Title and Parallelogram */}
     {/* First Section: Text and Skewed Image */}
     <div className="flex flex-col md:flex-row items-center">
        <div className="md:ml-6 text-left">
          <p className="text-lg text-[#2f4858]">
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

{/* evenements à venir */}
      <div className="container mx-auto p-4 mt-10">
      {/* Title */}
      <h1 className="text-4xl font-bold  text-[#2f4858] text-center mb-6 ">Événements à venir</h1>

      {/* First Row of Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        {/* First Event Card */}
        <div className="bg-slate-50 w-full p-4 text-center rounded-lg ">
          <img
            src="/asserts/img/events.png" // Update this with the correct image path if necessary
            alt="Événement 1"
            className="w-full object-cover mb-4 rounded"
          />
          
          <button className="bg-blue-300 text-white py-2 px-4 rounded hover:bg-gray-700 text-center">
            S'inscrire
          </button>
        </div>

        {/* Second Event Card */}
        <div className="bg-slate-50 p-4 text-center rounded-lg
        ">
          <img
            src="/asserts/img/events.png" // Update this with the correct image path if necessary
            alt="Événement 1"
            className="w-full object-cover mb-4 rounded"
          />
          
          <button className="bg-blue-300 text-white py-2 px-4 rounded hover:bg-gray-700 text-center">
            S'inscrire
          </button>
        </div>
      </div>

      
      {/* Container for the squares */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="bg-slate-50 w-full h-full flex flex-col justify-center items-center rounded-lg shadow-md p-4">
  <img
    src="/asserts/img/48.png" // Mettre à jour avec le bon chemin de l'image
    alt="Événement 1"
    className=" object-cover rounded mb-4" // Ajout de `mb-4` pour la marge en bas de l'image
  />
  <button className="bg-blue-300 text-white py-2 px-4 rounded hover:bg-blue-400">
    S'inscrire
  </button>
</div>


        {/* Card 2 */}
        <div className="bg-slate-50 w-full h-full flex flex-col justify-center items-center rounded-lg shadow-md p-4">
  <img
    src="/asserts/img/48.png" // Mettre à jour avec le bon chemin de l'image
    alt="Événement 1"
    className=" object-cover rounded mb-4" // Ajout de `mb-4` pour la marge en bas de l'image
  />
  <button className="bg-blue-300 text-white py-2 px-4 rounded hover:bg-blue-400">
    S'inscrire
  </button>
</div>


        {/* Card 3 */}
        <div className="bg-slate-50 w-full h-full flex flex-col justify-center items-center rounded-lg shadow-md p-4">
  <img
    src="/asserts/img/48.png" // Mettre à jour avec le bon chemin de l'image
    alt="Événement 1"
    className=" object-cover rounded mb-4" // Ajout de `mb-4` pour la marge en bas de l'image
  />
  <button className="bg-blue-300 text-white py-2 px-4 rounded hover:bg-blue-400">
    S'inscrire
  </button>
</div>

      </div>
    </div>

    {/* Voir Plus Button */}
    <div className="text-center mt-10">
        <button className="bg-gray-800 text-white py-3 px-6 rounded text-lg hover:bg-gray-700">
          Voir plus
        </button>
      </div>


      <div className="container mx-auto p-4 mt-10">
      {/* Title */}
      <h1 className="text-4xl font-bold  text-[#2f4858] text-center mb-6 ">Événements à passées</h1>

      {/* First Row of Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 text-center">
        {/* First Event Card */}
        <div className="bg-slate-50 w-full p-4 rounded-lg">
          <img
            src="/asserts/img/events.png" // Update this with the correct image path if necessary
            alt="Événement 1"
            className="w-full object-cover mb-4 rounded"
          />
          
          <button className="bg-blue-300 text-white py-2 px-4 rounded hover:bg-gray-700 text-center">
            S'inscrire
          </button>
        </div>

        {/* Second Event Card */}
        <div className="bg-slate-50 p-4 rounded-lg
        ">
          <img
            src="/asserts/img/events.png" // Update this with the correct image path if necessary
            alt="Événement 1"
            className="w-full object-cover mb-4 rounded"
          />
          
          <button className="bg-blue-300 text-white py-2 px-4 rounded hover:bg-gray-700 text-center">
            S'inscrire
          </button>
        </div>
        
  {/* Second Event Card */}
  <div className="bg-slate-50 p-4 rounded-lg
        ">
          <img
            src="/asserts/img/events.png" // Update this with the correct image path if necessary
            alt="Événement 1"
            className="w-full object-cover mb-4 rounded"
          />
          
          <button className="bg-blue-300 text-white py-2 px-4 rounded hover:bg-gray-700 text-center">
            S'inscrire
          </button>
        </div>



          {/* Second Event Card */}
          <div className="bg-slate-50 p-4 rounded-lg
        ">
          <img
            src="/asserts/img/events.png" // Update this with the correct image path if necessary
            alt="Événement 1"
            className="w-full object-cover mb-4 rounded"
          />
          
          <button className="bg-blue-300 text-white py-2 px-4 rounded hover:bg-gray-700 text-center">
            S'inscrire
          </button>
        </div>
      </div>
      
         {/* Voir Plus Button */}
    <div className="text-center mt-10">
        <button className="bg-gray-800 text-white py-3 px-6 rounded text-lg hover:bg-gray-700">
          Voir plus
        </button>
      </div>


      

  
</div>



    </section>
  );
};

export default EventCard;
