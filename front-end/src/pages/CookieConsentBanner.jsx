import React, { useState, useEffect } from 'react';

function CookieConsent() {
  // Utilisez le localStorage pour conserver l'état de la bannière
  const [isVisible, setIsVisible] = useState(() => {
    // Vérifiez si un consentement a déjà été donné
    const consentGiven = localStorage.getItem('cookieConsent');
    return consentGiven === null; // Affiche la bannière si aucun consentement n'a été donné
  });

  const handleAccept = () => {
    // Stocker le consentement dans le localStorage
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    // Stocker le refus dans le localStorage
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  useEffect(() => {
    // Vérifiez si un consentement existe dans le localStorage au chargement
    const consentGiven = localStorage.getItem('cookieConsent');
    if (consentGiven) {
      setIsVisible(false);
    }
  }, []);

  return (
    isVisible && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg max-w-md w-full shadow-lg">
          <h2 className="text-lg font-semibold mb-4">Nous avons besoin de votre clic !</h2>
          <p className="text-sm text-gray-700 mb-4">
            Les cookies nous aident à adapter nos communications pour susciter plus d'engagement.
          </p>
          <p className="text-sm text-gray-700 mb-4">
            Trophenix et ses partenaires utilisent des cookies afin d'améliorer votre navigation sur nos sites,
            réaliser des statistiques de visites, vous permettre de partager des éléments sur les réseaux sociaux,
            personnaliser nos contenus et nos publicités.
          </p>
          <p className="text-sm text-gray-700 mb-4">
            Vous pouvez modifier à tout moment vos préférences et refuser tous les cookies en cliquant sur
            "Paramètres des cookies". Pour en savoir plus sur les cookies que nous utilisons sur nos sites, consultez notre{' '}
            <a href="#" className="text-red-500 underline">Politique de cookies</a>.
          </p>
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={handleDecline}
              className="text-sm text-gray-500 underline"
            >
              Continuer sans accepter
            </button>
            <div className="flex gap-4">
              <button
                onClick={() => {/* Logic for cookie settings */}}
                className="text-sm text-gray-500 underline"
              >
                Paramètres des cookies
              </button>
              <button
                onClick={handleAccept}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Accepter les cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default CookieConsent;
