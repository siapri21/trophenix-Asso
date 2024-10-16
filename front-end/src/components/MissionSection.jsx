import React from 'react';
import { Link } from 'react-router-dom';

const MissionSection = () => (
  <div className=" py-12 px-4 sm:px-6 lg:px-8 " >
   <div style={{ marginLeft: '10%', marginRight: '10%' }}>
     {/* Title Section */}
     <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-[#2f4858]">Nos missions</h2>
      <p className="mt-2 text-lg text-[#2f4858]">
        Le Lorem Ipsum est simplement du
      </p>
    </div>

    {/* Card Grid */}
    <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
      {/* Card 1 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src="/asserts/img/80.png" // Replace with your image URL
          alt="Mission"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-center">Titre description</h3>
          <p className="text-gray-600 text-center">
            La mise en page elle-même. L'avantage du Lorem Ipsum...
          </p>
        <Link>
        <div className="flex justify-center mt-4">
          <button className="px-4 py-2 bg-white border-2 border-[#ff9a61] text-[#ff9a61] rounded">
              bouton
            </button>
          </div>
        </Link>
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src="/asserts/img/57.png" // Replace with your image URL
          alt="Mission"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-center">Titre description</h3>
          <p className="text-gray-600 text-center">
            La mise en page elle-même. L'avantage du Lorem Ipsum...
          </p>
          <div className="flex justify-center mt-4">
          <Link to="/">
           <button className="px-4 py-2 bg-white border-2 border-[#ff9a61] text-[#ff9a61] rounded">
              bouton
            </button>
           </Link>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src="/asserts/img/48.png" // Replace with your image URL
          alt="Mission"
          className="w-full h-48 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-center">Titre description</h3>
          <p className="text-gray-600 text-center">
            La mise en page elle-même. L'avantage du Lorem Ipsum...
          </p>
          <div className="flex justify-center mt-4">
          <Link to="/">
           <button className="px-4 py-2 bg-white border-2 border-[#ff9a61] text-[#ff9a61] rounded">
              bouton
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
