import React from 'react';
import "./index.css";
import Home from './routes/Home';
import Contact from './routes/Contact';
import Projects from './routes/Projects';
import AboutMe from './routes/AboutMe';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<AboutMe/>}/>
      </Routes>
    </>
  );
}

export default App;
