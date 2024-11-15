import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <section className="bg-purple-50 py-16 px-4"   style={{width: "100vw"}}>
    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8">
      {/* Images */}
      <div className="relative w-full lg:w-1/2 aspect-[4/3] order-2 lg:order-1">
        <img 
          src="/asserts/img/2148342044.jpg" 
          alt="Image principale"
          className="w-full h-full object-cover rounded-3xl"
        />
        <img 
          src="/asserts/img/2149966761.jpg" 
          alt="Image secondaire"
          className="absolute left-1/2  transform -translate-x-1/2 -translate-y-1/2 w-2/4 aspect-square object-cover rounded-3xl border-2 border-[#e95b41]"
        />
      </div>

      {/* Contenu */}
      <div className="w-full lg:w-1/2 flex flex-col items-center text-center order-1 lg:order-2">
        <h1 className="text-4xl md:text-5xl font-semibold text-[#2f4858] mb-4">
          À Propos 
        </h1>
        <h2 className="text-xl md:text-2xl text-[#2f4858] mb-4">
          Soutenir la reconversion des sportifs professionnels
        </h2>
        <p className="text-[#2f4858] mb-8">
          Notre association accompagne les sportifs professionnels dans leur reconversion après leur carrière sportive. 
          Que ce soit pour les aider à trouver une nouvelle voie professionnelle, développer de nouvelles compétences 
          ou simplement les conseiller sur les meilleures options, nous sommes là pour les soutenir à chaque étape 
          de leur transition.
        </p>
        <Link 
          to="/a-propos"
          className="inline-block px-6 py-3 bg-[#F46D2B] text-white font-medium text-lg rounded hover:bg-[#e88b55] transition-colors"
        >
          En savoir plus
        </Link>
      </div>
    </div>
  </section>
);

export default About;
