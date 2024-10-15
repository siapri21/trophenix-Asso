import React from 'react';
import { Link } from 'react-router-dom';

const ProgrammeSection = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-100">
         <div className="text-center mb-10">
      <h2 className="text-3xl font-bold text-[#2f4858]">Nos Porgrammes</h2>
      <p className="mt-2 text-lg text-[#2f4858]">
        Le Lorem Ipsum est simplement du
      </p>
    </div>
      {/* Image (enlarged and centered) */}
      <div className="relative">
        <img
          src="/asserts/img/man-woman-running-track-side-view.jpg"
          alt="Celebrating players"
          className="rounded-lg object-cover w-[90vw] max-w-[600px] h-auto"
        />

        {/* Violet Card (shifted to the right, sticking out 80% of its width) */}
        <div className="absolute top-1/2 left-1/2 translate-x-[80%] -translate-y-1/2">
          {/* 
            translate-x-[80%]: This shifts the card 80% of its width to the right.
            This will make 80% of the card extend outside of the image's right side.
          */}
          <div className="bg-purple-200 w-[80vw] h-[80vw] max-w-[250px] max-h-[250px] rounded-lg flex flex-col items-center justify-center p-4 shadow-lg">
            <p className="text-gray-600 mb-4 text-center">
              Text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
              standard dummy text ever since the 1500s.
            </p>
           <Link to="/programmes">
           <button className="bg-blue-200 text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-300">
              Découvrir
            </button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammeSection;
