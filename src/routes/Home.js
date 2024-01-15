import React from "react";
import Navbar from "../components/Navbar";
import HeadImg from "../components/HeadImg"
import Footer from "../components/Footer";
import AboutMeSection from "../components/AboutMeSection";
import Projects from "./Projects";


const Home = () => {
    return (
        <div>
            <Navbar />
            <HeadImg />
            <AboutMeSection />
            <Projects />
            <Footer />
        </div>
    )
}

export default Home