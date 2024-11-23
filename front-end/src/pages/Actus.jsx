import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';



const Actus = () => {
  <SEO 
    title="À propos de Trophenix" 
    description="En savoir plus sur Trophenix, une association dédiée à la reconversion des sportifs professionnels." 
    keywords="association sportive, reconversion, mécénat, sponsoring"
  />

  return (
    <section className=" mt-20 " style={{ marginLeft: '10%', marginRight: '10%' }}>
    {/* Existing Navbar Section */}
    <div className="w-full bg-gradient-to-t from-white  py-6">
      <div className="flex justify-center">
        <div className=" rounded-full p-2 max-w-7xl w-full shadow">
          <div className="flex justify-between">
            {/* Actus Trophenix Link */}
            <Link to="#">
              <button className="bg-sky-300 text-black rounded px-6 py-2 mx-4 hover:bg-sky-400 transition duration-300">
                Actus trophenix
              </button>
            </Link>
            
            {/* Actus Reconversion Link */}
            <Link to="/actus-reconversion">
              <button className="bg-sky-300 text-black rounded px-6 py-2 mx-4 hover:bg-sky-400 transition duration-300">
                Actus reconversion
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>

    {/* Add margin-top to the actualités section */}
    <div className="max-w-7xl mx-auto mt-16 mb-10 px-4 md:px-10"> 
      <h1 className="text-2xl font-bold text-left mb-8 text-center">Nos actualités</h1>
      <div className=" min-h-screen p-6">
      {/* Container */}
      <div className="max-w-4xl mx-auto  p-6">
        {/* Titre */}
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          JO 2024 : Notre association lauréate du Podium France Paris 2024 !
        </h1>
        

        {/* Résumé */}
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Notre association a eu l'honneur de monter sur le podium lors de la cérémonie organisée 
          par France Bleu Paris et la CCI Paris-Île-de-France ce mardi 16 juillet, à la Maison de 
          la Radio et de la Musique. Cet événement récompense ceux qui font briller l'esprit olympique 
          en Île-de-France. Avec le soutien de la Chambre de Commerce et de l'Industrie, ainsi que 
          d'autres acteurs locaux, cet engagement valorise ceux qui, à leur échelle, contribuent à faire 
          des Jeux Olympiques un événement exceptionnel pour la région.
        </p>
        <div className="my-8">
      <hr className="border-t border-gray-300" />
    </div>
    <div>
      <h2 className="text-2xl font-bold text-left mb-8">1ère place :</h2>
      <p className="text-gray-700 text-lg leading-relaxed mb-6">
   <span className='text-orange-600'>   Trophélix pour l'exposition "L'art rend hommage au sport"</span> à découvrir en Septembre : au travers d'une corde aux couleurs de JO qui traversera les époques et les espaces vides, les visiteurs pourront, au fil du parcours du temps, pénétrer et voyager dans les différentes époques, des premiers jeux grecs jusqu'à ceux de Paris en l'an... 2524 !
      </p>
    </div>
 {/* Image */}
 <img 
          src="https://www.francebleu.fr/s3/cruiser-production-eu3/2024/07/d1f11f91-9729-44dd-b65f-e1a5a5e4cbf2/600_sc_20240716-150624.webp" 
          alt="Podium JO 2024" 
          className="w-full h-auto rounded-lg mb-6"
        />
        {/* Texte sous l'image */}
        <p className="text-gray-500 text-sm italic text-center mb-6">
          Bravo aux gagnants du podium France Bleu Paris 2024 x CCI Paris Île-de-France 
          <br />
          <span className="font-semibold">© Radio France - Romain Fresu</span>
        </p>
        {/* Bouton */}
        <a
          href="https://www.francebleu.fr/infos/economie-social/jo-2024-decouvrez-les-laureats-du-podium-france-paris-2024-avec-la-cci-paris-ile-de-france-4552000#xtor=RSS-147" 
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-500 transition duration-300 text-center"
        >
          Découvrir les lauréats sur France Bleu
        </a>
      </div>
    </div>
     </div>
  </section>
  );
};

export default Actus;
