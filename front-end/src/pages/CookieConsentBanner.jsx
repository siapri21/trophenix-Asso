// import React, { useState, useEffect } from 'react';

// const CookieConsentBanner = () => {
//     const [isVisible, setIsVisible] = useState(false);

//     useEffect(() => {
//         // Vérifie si le consentement est déjà donné
//         const consent = localStorage.getItem("cookieConsent");
//         if (!consent) {
//             setIsVisible(true); // Affiche la bannière si aucun choix n'est fait
//         }
//     }, []);

//     const handleAccept = () => {
//         localStorage.setItem("cookieConsent", "accepted");
//         activateCookies();
//         setIsVisible(false); // Masque la bannière
//     };

//     const handleDecline = () => {
//         localStorage.setItem("cookieConsent", "declined");
//         deactivateCookies();
//         setIsVisible(false); // Masque la bannière
//     };

//     const handleCustomize = () => {
//         alert("Ouvrir la fenêtre de personnalisation des cookies"); // À implémenter
//     };

//     const activateCookies = () => {
//         console.log("Cookies activés"); // Logique pour activer les cookies
//     };

//     const deactivateCookies = () => {
//         console.log("Cookies désactivés"); // Logique pour désactiver les cookies
//     };

//     if (!isVisible) return null; // Si la bannière n'est pas visible, on ne l'affiche pas

//     return (
//         <div className="fixed bottom-0 w-full bg-gray-800 text-white p-4 flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
//             <p className="text-center">Nous utilisons des cookies pour améliorer votre expérience. Vous pouvez accepter ou refuser.</p>
//             <div className="flex space-x-2">
//                 <button
//                     onClick={handleAccept}
//                     className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
//                 >
//                     Accepter
//                 </button>
//                 <button
//                     onClick={handleDecline}
//                     className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
//                 >
//                     Refuser
//                 </button>
//                 <button
//                     onClick={handleCustomize}
//                     className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//                 >
//                     Personnaliser
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default CookieConsentBanner;
