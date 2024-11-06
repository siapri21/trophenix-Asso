import React, { useEffect, useState } from 'react';
import { Slide, Zoom } from '@mui/material';
import { ReactTyped } from 'react-typed';

const About = () => {
  const [checked, setChecked] = useState(true);

  useEffect(() => {
    setChecked(true); // Active l'animation au chargement
  }, []);

 

  return (
    <section className="bg-white py-12 px-6 text-center mt-16 flex flex-col items-center">
      {/* First Section: Text and Skewed Image */}
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:ml-6 text-left">
        <div className="text-2xl italic text-[#62a6de] mt-4">
      <ReactTyped
        strings={[
          "Le plus grand défi d'un athlète n'est pas de remporter des médailles, mais de trouver un nouveau chemin après la compétition."
        ]}
        typeSpeed={50}
        backSpeed={50}
        backDelay={1000}
        startDelay={500}
        loop={false}
      />
    </div>

        </div>
        <div className="relative w-full md:w-1/2 mb-6 md:mb-0">
          <img
            src="/asserts/img/131.png"
            alt="Group of people"
            className="h-60 transform skew-x-12 rounded-lg"
          />
        </div>
      </div>

      {/* Second Section: Image on the Left, Text on the Right */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 w-full mb-6 md:mb-0 flex justify-center mt-14">
          <img
            src="/asserts/img/about.png"
            alt="Happy people celebrating"
            className="w-full rounded-lg"
          />
        </div>

        <div className="md:w-1/2 w-full md:ml-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-center mt-4">Notre Histoire</h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center mt-4">
          Trophenix, de la contraction des mots trophée et phénix, fondée en 2024, est une association dédiée à la réinsertion des sportifs professionnels en rupture sociale et professionnelle. Notre slogan, "Renaître pour réussir", incarne notre engagement à transformer les défis de la reconversion sportive en opportunités d'épanouissement pour les athlètes.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-center mt-4">Notre Vision</h2>
          <p className="text-lg text-gray-600 leading-relaxed text-center mt-4">
          Nous aspirons à devenir l'acteur de référence en France pour la reconversion des athlètes professionnels. Notre ambition est de créer un écosystème bienveillant et efficace, facilitant la transition de chaque sportif vers une nouvelle vie épanouissante. 
          </p>
        </div>
      </div>

      {/* Third Section: Grey Square and Blue Rectangle with Text */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mt-4">Nos Objectifs</h2>

   <div className="max-w-7xl mx-auto mt-20 space-y-16" style={{ marginLeft: '10%', marginRight: '10%' }}>
      
      {/* Première section */}
      <Slide direction="left" in={checked} timeout={800}>
        <div className="flex flex-col md:flex-row items-center">
          <div className="text-[#2f4858] text-center md:text-left flex-1">
            <h6 className="font-bold text-[#6a0dad] text-2xl p-4">Guider les athlètes vers une nouvelle voie épanouissante en visant une transformation globale de leur situation sociale et professionnelle.</h6>
            <hr className="border-t border-gray-300" />
            <p className="p-6 mr-7">
              Cet objectif souligne l'ambition de Trophenix d'aller au-delà d'une simple reconversion professionnelle. Il s'agit de faciliter une véritable transformation de la vie de l'athlète, en l'aidant à trouver un nouveau sens et un épanouissement dans sa vie post-carrière sportive.
            </p>
          </div>
          
          <div className="relative flex-1 flex justify-center items-center">
          <Zoom in={checked} timeout={1500}>
  <div className="w-64 h-48 rounded-md shadow-lg">
    {/* Image ou contenu simple pour le test */}
    <img
      src="/asserts/img/214.png"
      alt="Image de test"
      className="w-full h-full object-cover rounded"
    />
  </div>
</Zoom>

            <div className="absolute bg-[#00aaff] h-14 w-64 rounded-md transform -translate-x-32 translate-y-12 flex items-center justify-center shadow-md">
              <span className="text-white font-bold">Transformation sociale et professionnelle</span>
            </div>
          </div>
        </div>
      </Slide>
      
      {/* Deuxième section */}
      <Slide direction="right" in={checked} timeout={800}>
        <div className="flex flex-col md:flex-row items-center">
          <div className="relative flex-1 flex justify-center items-center">
          <Zoom in={checked} timeout={1500}>
  <div className="w-64 h-48 rounded-md shadow-lg">
    {/* Image ou contenu simple pour le test */}
    <img
      src="/asserts/img/214.png"
      alt="Image de test"
      className="w-full h-full object-cover rounded"
    />
  </div>
</Zoom>
            <div className="absolute bg-[#00aaff] h-14 w-64 rounded-md transform -translate-x-32 translate-y-12 flex items-center justify-center shadow-md">
              <span className="text-white font-bold">Accompagnement holistique</span>
            </div>
          </div>
          
          <div className="text-[#2f4858] text-center md:text-left flex-1">
            <h6 className="font-bold text-[#34caa2] text-2xl p-4">Fournir un accompagnement global et multidimensionnel aux athlètes en reconversion.</h6>
            <hr className="border-t border-gray-300" />
            <p className="p-6 mr-7">
              Cet objectif reflète l'approche complète de Trophenix, qui va au-delà de la simple aide à la reconversion professionnelle. Il s'agit de prendre en compte tous les aspects de la vie de l'athlète pour assurer une transition réussie.
            </p>
          </div>
        </div>
      </Slide>

      {/* Troisième section */}
      <Slide direction="left" in={checked} timeout={800}>
        <div className="flex flex-col md:flex-row items-center">
          <div className="text-[#2f4858] text-center md:text-left flex-1">
            <h6 className="font-bold text-[#e0d536] text-2xl p-4">Établir et maintenir un réseau de collaboration avec des professionnels de divers domaines.</h6>
            <hr className="border-t border-gray-300" />
            <p className="p-6 mr-7">
              Cette approche interdisciplinaire permet d'offrir une expertise variée et complémentaire, assurant ainsi un accompagnement complet et adapté aux besoins spécifiques de chaque athlète en reconversion.
            </p>
          </div>

          <div className="relative flex-1 flex justify-center items-center">
          <Zoom in={checked} timeout={1500}>
  <div className="w-64 h-48 rounded-md shadow-lg">
    {/* Image ou contenu simple pour le test */}
    <img
      src="/asserts/img/214.png"
      alt="Image de test"
      className="w-full h-full object-cover rounded"
    />
  </div>
</Zoom>
            <div className="absolute bg-[#00aaff] h-14 w-64 rounded-md transform -translate-x-32 translate-y-12 flex items-center justify-center shadow-md">
              <span className="text-white font-bold">Collaboration interdisciplinaire</span>
            </div>
          </div>
        </div>
      </Slide>
    </div>
  


      {/* First New Section: Scrolling Citation */}
      <div className="mt-20 bg-orange-500 py-6 w-full overflow-hidden">
  <div className="animate-scroll whitespace-nowrap">
    <p className="text-lg text-white inline-block px-4">
      "L'avenir est incertain, vis dans le présent et profite de la vie tout en étant épanoui."
    </p>
    <p className="text-lg text-white inline-block px-4">
      "L'avenir est incertain, vis dans le présent et profite de la vie tout en étant épanoui."
    </p>
    
    {/* Repeating the text ensures continuous scrolling */}
  </div>
</div>



      <div className="relative w-full  mt-10">
        <h1 className="text-3xl font-bold text-[#2f4858]">Nos missions</h1>
       {/* Second New Section: Image on Left, Text on Right */}
      <div className="mt-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center" style={{ marginLeft: '10%', marginRight: '10%' }}>
        
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f4858]">Réinsérer les sportifs pros en rupture sociale et professionnelle</h2>
          <p className="text-lg text-[#2f4858] leading-relaxed mt-4">
          Notre mission est d’offrir aux athlètes en transition une véritable opportunité de réinsertion sociale et professionnelle. Nous mettons en place des programmes personnalisés pour les accompagner dans cette étape cruciale, en leur offrant des formations, du mentorat, et un accompagnement psychologique. L’objectif est de leur redonner confiance et de les guider vers des voies de carrière qui correspondent à leurs compétences et aspirations.
          </p>
        </div>
      </div>


      
      {/* Second New Section: Image on Left, Text on Right */}
      <div className="mt-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center" style={{ marginLeft: '10%', marginRight: '10%' }}>
       

        {/* Right Text */}
        <div className="md:w-1/2 w-full md:ml-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl  text-[#2f4858] font-bold">Encourager les entreprise à généraliser les emplois pour sportifs</h2>
          <p className="text-lg text-[#2f4858] leading-relaxed mt-4">
          Nous sensibilisons les entreprises sur les atouts des sportifs de haut niveau, qui possèdent des qualités uniques comme la discipline, la résilience et l’esprit d’équipe. En partenariat avec le secteur privé, nous promouvons la création d’opportunités d'emploi adaptées aux parcours des sportifs, en incitant les entreprises à intégrer ces profils dans leurs équipes et à bénéficier de leur expérience précieuse.
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
      <div className="mt-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center" style={{ marginLeft: '10%', marginRight: '10%' }}>
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#2f4858]">Sensibiliser sur les enjeux de la transition sportive</h2>
          <p className="text-lg text-[#2f4858] leading-relaxed mt-4">
          L’une de nos missions essentielles est d’éduquer le grand public, les institutions et les entreprises sur les défis auxquels font face les athlètes en fin de carrière. À travers des campagnes de sensibilisation, des événements et des formations, nous œuvrons pour faire évoluer les mentalités et encourager un soutien collectif. L’objectif est de créer un environnement qui valorise le parcours de l’athlète et lui offre des opportunités concrètes d’intégration dans le monde professionnel.
          </p>
        </div>
      </div>


      </div>


    </section>
  );
};

export default About;
