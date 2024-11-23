import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';


export  default function ActusReconversion  (){

  const [data, setData] = useState([]); // Stocke les articles récupérés depuis l'API
  const [visibleCount, setVisibleCount] = useState(10); // Nombre d'articles visibles initialement
  const [loading, setLoading] = useState(true); // Gère l'état de chargement
  const [error, setError] = useState(null); // Stocke les messages d'erreur s'il y en a

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=AAPL&apikey=demo');
        
        // Vérifie si la réponse n'est pas OK, alors log l'erreur et arrête l'exécution
        if (!response.ok) {
          console.log('Erreur lors de la récupération des données'); // Log l'erreur au lieu de lancer une exception
          setLoading(false);
          return;
        }

        // Récupère les données JSON de la réponse et les met à jour dans l'état `data`
        setData((await response.json()).feed);

      } catch (error) {
        console.log('Erreur: ', error.message); // Log l'erreur en cas de problème
        setError(error.message); // Met à jour l'état `error` avec le message d'erreur
      } finally {
        setLoading(false); // Termine le chargement dans tous les cas
      }
    };

    fetchData();
  }, []);

  // Fonction pour charger plus d'articles lorsque l'utilisateur clique sur "Voir plus"
  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10); // Augmente le nombre d'articles visibles de 10
  };

  // Si le contenu est en cours de chargement, affiche un message de chargement
  if (loading) return <p>Chargement en cours...</p>;
  
  // Si une erreur est survenue, affiche le message d'erreur
  if (error) return <p>Erreur: {error}</p>;

  <SEO 
    title="À propos de Trophenix" 
    description="En savoir plus sur Trophenix, une association dédiée à la reconversion des sportifs professionnels." 
    keywords="association sportive, reconversion, mécénat, sponsoring"
  />


  return (
    <div className="container mx-auto p-4">
        <div className="w-full bg-gradient-to-t from-white  py-16">
      <div className="flex justify-center">
        <div className=" rounded-full p-2 max-w-7xl w-full shadow">
          <div className="flex justify-between">
            {/* Actus Trophenix Link */}
            <Link to="/actualite">
              <button className="bg-sky-300 text-black rounded px-6 py-2 mx-4 hover:bg-sky-400 transition duration-300">
                Actus trophenix
              </button>
            </Link>
            
            {/* Actus Reconversion Link */}
            <Link to="#">
              <button className="bg-sky-300 text-black rounded px-6 py-2 mx-4 hover:bg-sky-400 transition duration-300">
                Actus reconversion
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>

      <h1 className="text-3xl font-bold mb-4 text-center ">Actualité sur la reonversion</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.slice(0, visibleCount).map((item, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Affiche l'image de l'article ou une image par défaut si non disponible */}
            <img src={item.banner_image || 'https://via.placeholder.com/400'} alt={item.title} className="w-full h-48 object-cover"/>
            <div className="p-4">
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-blue-600 hover:underline">
                {item.title}
              </a>
              <p className="text-gray-600">Source: {item.source}</p>
              <p className="text-gray-600">Date: {item.time_published}</p>
              <p className={`text-sm font-medium ${item.overall_sentiment_label === 'Positive' ? 'text-green-500' : item.overall_sentiment_label === 'Negative' ? 'text-red-500' : 'text-yellow-500'}`}>
                Sentiment: {item.overall_sentiment_label}
              </p>
            </div>
          </div>
        ))}
      </div>
      {visibleCount < data.length && (
        <div className="flex justify-center mt-4">
          <button
            onClick={handleLoadMore}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            Voir plus
          </button>
        </div>
      )}
    </div>
  );
};