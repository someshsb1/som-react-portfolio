import React from 'react'

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeadImg1 from '../components/HeadImg1';
import Project from '../components/Project';

const Projects = () => {
  return (
    <div>
      <Navbar />
      <HeadImg1 heading="Projects" text="Showcasing My Creations: A Glimpse into My Diverse Projects"/>
      <Project />
    </div>
  )
}

export default Projects