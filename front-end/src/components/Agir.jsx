import React from 'react';
import { Link } from 'react-router-dom';
import { Grow } from '@mui/material';
import { useInView } from 'react-intersection-observer';

const AgirSections = () => {
  const [ref1, inView1] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="bg-[#eaf3fa] py-12 px-4 sm:px-6 lg:px-8" style={{ width: "100vw" }}>
      <div style={{ marginLeft: '10%', marginRight: '10%' }}>
        {/* Title Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-[#2f4858]">Je veux agir avec <span className='text-orange-400'>Trophenix</span></h2>
        </div>

        {/* Card Grid */}
        <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
          
          {/* Card 1 */}
          <div ref={ref1}>
            <Grow in={inView1} timeout={1000}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src="/asserts/img/194.png"
                  alt="Membres"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-center">Membres</h3>
                  <p className="text-[#2f4858] text-center">
                  Votre mécénat catalyse l'innovation et forge des passerelles durables entre le monde sportif et l'entreprise
                  </p>
                  <div className="flex justify-center mt-4">
                    <button className="px-4 py-2 bg-white border-2 border-[#ff9a61] text-[#ff9a61] rounded">
                      M'engager
                    </button>
                  </div>
                </div>
              </div>
            </Grow>
          </div>

          {/* Card 2 */}
          <div ref={ref2}>
            <Grow in={inView2} timeout={2000}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src="/asserts/img/16.png"
                  alt="Bénévolat"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-center">Bénévolat</h3>
                  <p className="text-[#2f4858] text-center">
                  Par vos compétences et vos disponibilités, votre engagement contribue au succès de nos actions sociétales.
                  </p>
                  <div className="flex justify-center mt-4">
                    <button className="px-4 py-2 bg-white border-2 border-[#ff9a61] text-[#ff9a61] rounded">
                      Aider
                    </button>
                  </div>
                </div>
              </div>
            </Grow>
          </div>

          {/* Card 3 */}
          <div ref={ref3}>
            <Grow in={inView3} timeout={3000}>
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src="/asserts/img/213.png"
                  alt="Mécénat / Sponsoring"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-center">Mécénat / Sponsoring</h3>
                  <p className="text-[#2f4858] text-center">
                  Chaque soutien se transforme en un projet pertinent d'un impact social concret qui transforme des vies.
                  </p>
                  <div className="flex justify-center mt-4">
                    <Link to="/mecenat">
                      <button className="px-4 py-2 bg-white border-2 border-[#ff9a61] text-[#ff9a61] rounded">
                        Soutenir
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </Grow>
          </div>

        </div>
      </div>
    </div>
  );
}

export default AgirSections;
