import { Grow, Fade, Slide } from '@mui/material';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';

const ProgrammeSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  
  return (
    <div className="relative py-16 px-4 bg-green-50" style={{ width: "100vw" }}>
      <div className="max-w-6xl mx-auto" style={{ maxWidth: '80vw', paddingLeft: '10%', paddingRight: '10%' }}>
        
        {/* Conteneur en flex pour aligner le texte et l'image */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start" ref={ref}>
          
          {/* Texte avec animation Slide */}
          <Slide direction="up" in={inView} timeout={1000}>
            <div className="text-center lg:text-left mb-10 lg:mb-0 lg:w-1/2">
              <h2 className="text-3xl font-bold text-[#2f4858]">Nos Programmes</h2>
              <p className="mt-2 text-lg text-[#2f4858] mx-auto max-w-xl mt-6">
                Nous accompagnons les sportifs professionnels dans leur transition vers de nouvelles opportunités.
                 Nos programmes sont conçus pour les aider à réussir leur reconversion tout en capitalisant sur leurs compétences uniques.
              </p>
            </div>
          </Slide>

          {/* Image et carte avec animations Grow et Fade */}
          <div className="relative flex justify-center lg:w-1/2">
            <Fade in={inView} timeout={1200}>
              <Grow in={inView} timeout={1500}>
                <div className="relative w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[600px]">
                  <img
                    src="/asserts/img/man-woman-running-track-side-view.jpg"
                    alt="Celebrating players"
                    className="rounded-lg object-cover w-full h-auto "
                  />

                  {/* Carte d'informations */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 translate-x-[10%] sm:translate-x-[30%] lg:translate-x w-[50%] sm:w-[60%] lg:w-[50%] max-w-[200px] sm:max-w-[200px] lg:max-w-[250px]">
                    <div className="bg-purple-200 rounded-lg p-3 sm:p-4 shadow-lg w-72">
                      <p className="text-gray-600 mb-3 sm:mb-4 text-center text-xs sm:text-sm lg:text-base">
                        Découvrez comment nous préparons les sportifs professionnels à la réussite au-delà des terrains, avec des parcours personnalisés et des conseils avisés.
                      </p>
                      <div className="text-center">
                        <Link to="/programmes">
                          <button className="bg-[#F46D2B] text-white px-3 py-1 sm:px-4 sm:py-2 rounded-lg hover:bg-blue-300 transition-colors text-xs sm:text-sm lg:text-base">
                            Découvrir
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </Grow>
            </Fade>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProgrammeSection;
