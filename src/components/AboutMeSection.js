import { Link } from "react-router-dom"
import "./AboutMeSection.css"
import Img4 from "../assets/8.jpg"
import Img5 from "../assets/7.jpg"

import React from 'react'

const AboutMeSection = () => {
  return (
    <div className="aboutme">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Data Analyst with extensive experience in managing data-driven projects. Creating with React, Java, JavaScript, C#.NET, SQL, and data-driven strategies. Successfully reduced fraud rates, optimized processes, and improved efficiency. MS in Computer Science from the University of Massachusetts Boston. Passionate about analytics and technology.</p>
            <Link to="/contact">
                <button className="btn">Let's Connect</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-top">
                    <img src={Img5} className="img" alt="react"/>
                </div>
                <div className="img-bottom">
                    <img src={Img4} className="img" alt="react"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutMeSection