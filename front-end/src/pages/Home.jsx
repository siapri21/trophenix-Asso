import React from "react";
import Header  from "../components/Header";
import AboutSection from "../components/AboutSection";
import  Partenaires from "../components/Partenaires";
import ParrainsSection from "../components/ParrainsSection";
import MissionSection from "../components/MissionSection";
import Events  from "../components/Events";
import ProgrammeSection from "../components/ProgrammeSection";
import Agir from "../components/Agir";
import SectionDon from "../components/SectionDon";
import Actus from "../components/Actus";

export default function Home (){
    return (
        <div className="container">
            <Header />
            <Partenaires/>
            <AboutSection />
            <MissionSection/>
            <ProgrammeSection/>
            <ParrainsSection/>
            <Events/>
            <SectionDon/>
            <Agir/>
            <Actus/>
           


        </div>
        );
}