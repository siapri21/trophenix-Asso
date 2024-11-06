// src/Marquee.js
import React from 'react';

const logos = [
    { src: "/asserts/img/logoedlv.png", alt: "Logo edlv" },
    {src: "/asserts/img/Diversidays_Logo-removebg-preview.png", alt:"logo diversidays"},
    { src: "/asserts/img/aera+logo.png", alt: "aera" },
    { src: "/asserts/img/Logo-Taka-65-v3.png", alt: "Logo Takas" },
    { src: "/asserts/img/Orange_S.A.-Logo.wine.png", alt: "Logo de orange" },
    { src: "/asserts/img/Google-Logo.png", alt: "Logo Google" },
];

const Marquee = () => {
    const logoElements = [];

    // Utilisation de la boucle for pour créer des éléments d'image
    for (let i = 0; i < 10; i++) { // Répéter jusqu'à 10 fois
        for (let j = 0; j < logos.length; j++) {
            logoElements.push(
                <img
                    key={`${i}-${j}`} // Clé unique pour chaque logo
                    src={logos[j].src}
                    alt={logos[j].alt}
                    className="h-10 mx-4"
                />
            );
        }
    }

    return (
        <div className="overflow-hidden bg-white p-10"
        style={{width: "100vw"}}>
            <div className="flex animate-marquee whitespace-nowrap">
                {/* Affichage des logos */}
                {logoElements}
            </div>
        </div>
    );
};

export default Marquee;