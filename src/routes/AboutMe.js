import React from 'react'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeadImg1 from '../components/HeadImg1';
import AboutMeSection from '../components/AboutMeSection';

const AboutMe = () => {
  return (
    <div>
    <Navbar />
    <HeadImg1 heading="About Me" text="Hello there! I'm an enthusiastic Data-driven coder transforming ideas into actionable insights"/>
    <AboutMeSection />
    <Footer />
  </div>
  )
}

export default AboutMe