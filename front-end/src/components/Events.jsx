import React from 'react';
import { Link } from 'react-router-dom';

const EventSection = () => {
  return (
    <section className='bg-gray-100'  style={{width: "100vw"}}>
      <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8 p-8" style={{ marginLeft: '10%', marginRight: '10%' }}>
        {/* Left Image Slider Section */}
        <div className="w-full md:w-3/5">
          {/* Main image */}
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/asserts/img/36.png" 
              alt="Main" 
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Small images under the main image */}
          <div className="flex mt-4 space-x-4">
            <img 
              src="/asserts/img/36.png" 
              alt="Small 1" 
              className="w-1/2 h-auto object-cover rounded-lg"
            />
            <img 
              src="/asserts/img/36.png" 
              alt="Small 2" 
              className="w-1/2 h-auto object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Right Text Section */}
        <div className="w-full md:w-2/5 mt-8 md:mt-0 text-center md:text-left">
          <h2 className="text-3xl font-bold text-orange-500 mb-4">
            Découvrez nos événements dédiés aux sportifs professionnels
          </h2>
          <p className="text-gray-700 mb-6">
            Participez à nos événements exclusifs, conçus pour inspirer et accompagner les sportifs professionnels dans leur reconversion. Des conférences aux ateliers pratiques, nos rencontres favorisent les échanges entre sportifs, experts, et entreprises pour une transition réussie.
          </p>
          <p className="text-gray-700 mb-6">
            Rejoignez-nous lors de nos prochains événements et saisissez l'opportunité d'élargir votre réseau et de découvrir de nouvelles perspectives pour votre avenir.
          </p>
          <Link to="/Evenement">   
            <button className="bg-orange-400 text-white py-2 px-6 rounded-full hover:bg-orange-500 transition duration-300">
              Voir les événements
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
