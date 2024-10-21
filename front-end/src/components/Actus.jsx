import React from 'react';
import { Link } from 'react-router-dom';

const ActusSection = () => {
  return (
    <section className='bg-gray-100'>
      <div className="flex flex-col md:flex-row items-center justify-between md:space-x-8 p-8" style={{ marginLeft: '10%', marginRight: '10%' }}>
        
        {/* Right Text Section */}
        <div className="w-full md:w-2/5 mt-8 md:mt-0 text-center md:text-left">
          <h2 className="text-3xl font-bold text-orange-500 mb-4">
            Dernières Nouvelles de Notre Association
          </h2>
          <p className="text-gray-700 mb-6">
            Découvrez les initiatives passionnantes que nous menons pour promouvoir le sport et la culture dans notre communauté. Restez à jour avec nos événements, nos projets et les réussites de nos membres.
          </p>
          <Link to="/actualite">
            <button className="mb-10 bg-orange-400 text-white py-2 px-6 rounded hover:bg-orange-500 transition duration-300">
              Explorer nos Actualités
            </button>
          </Link>
        </div> 

        {/* Left Image Slider Section */}
        <div className="w-full md:w-3/5">
          {/* Main image */}
          <div className="rounded-lg overflow-hidden">
            <img 
              src="/asserts/img/36.png" 
              alt="Main display of the news section" 
              className="w-full h-auto object-cover"
            />
          </div>
          {/* Small images under the main image */}
          <div className="flex mt-4 space-x-4">
            <img 
              src="/asserts/img/36.png" 
              alt="Small news image 1" 
              className="w-1/2 h-auto object-cover rounded-lg"
            />
            <img 
              src="/asserts/img/36.png" 
              alt="Small news image 2" 
              className="w-1/2 h-auto object-cover rounded-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ActusSection;
