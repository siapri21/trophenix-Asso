import React from "react";
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import Partenaires from "../components/Partenaires";
import ParrainsSection from "../components/ParrainsSection";
import MissionSection from "../components/MissionSection";
import Events from "../components/Events";
import ProgrammeSection from "../components/ProgrammeSection";
import Agir from "../components/Agir";
import SectionDon from "../components/SectionDon";
import Actus from "../components/Actus";
import SEO from "../components/SEO";


export default function Home() {
    return (
        <div className="container">
            <SEO
                title="Trophenix - Soutien à la reconversion des sportifs professionnels"
                description="Trophenix aide les athlètes professionnels dans leur transition de carrière grâce au mécénat et au sponsoring. Découvrez nos missions, événements et programmes."
                keywords="reconversion sportive, soutien aux athlètes, mécénat sportif, Trophenix, association sportive"
            />
            <Header />
            <Partenaires />
            <AboutSection />
            <MissionSection />
            <ProgrammeSection />
            <ParrainsSection />
            <Events />
            <SectionDon />
            <Agir />
            <Actus />
        </div>
    );
}