import React from 'react';
import { Link } from 'react-router-dom';

const ProgrammeSection = () => {
  return (
    <div className="relative py-16 px-4 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#2f4858]">Nos Programmes</h2>
          <p className="mt-2 text-lg text-[#2f4858]">
            Le Lorem Ipsum est simplement du
          </p>
        </div>

        <div className="relative flex justify-center">
          {/* Image */}
          <div className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[600px]">
            <img
              src="/asserts/img/man-woman-running-track-side-view.jpg"
              alt="Celebrating players"
              className="rounded-lg object-cover w-full h-auto"
            />

            {/* Card */}
            <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 translate-x-[10%] sm:translate-x-[30%] lg:translate-x-[80%] w-[70%] sm:w-[60%] lg:w-[50%] max-w-[180px] sm:max-w-[200px] lg:max-w-[250px]">
              <div className="bg-purple-200 rounded-lg p-3 sm:p-4 shadow-lg">
                <p className="text-gray-600 mb-3 sm:mb-4 text-center text-xs sm:text-sm lg:text-base">
                  Text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                  standard dummy text ever since the 1500s.
                </p>
                <div className="text-center">
                  <Link to="/programmes">
                    <button className="bg-blue-200 text-blue-800 px-3 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-blue-300 transition-colors text-xs sm:text-sm lg:text-base">
                      Découvrir
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammeSection;