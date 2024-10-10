// src/Marquee.js
import React from 'react';

const logos = [
    { src: "/asserts/img/Invitation_Rencontre_Art-SporTech.png", alt: "aera" },
    { src: "/asserts/img/Invitation_Rencontre_Art-SporTech (3).png", alt: "Logo Takas" },
    { src: "/asserts/img/Invitation_Rencontre_Art-SporTech (1).png", alt: "Logo Sport dans la ville" },
    { src: "/asserts/img/Invitation_Rencontre_Art-SporTech (4).png", alt: "Logo Google" },
    { src: "/asserts/img/Invitation_Rencontre_Art-SporTech (5).png", alt: "Logo edlv" }
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
                    className="h-20 mx-4"
                />
            );
        }
    }

    return (
        <div className="overflow-hidden bg-white shadow-lg p-10">
            <div className="flex animate-marquee whitespace-nowrap">
                {/* Affichage des logos */}
                {logoElements}
            </div>
        </div>
    );
};

export default Marquee;