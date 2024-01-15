import "./HeadImg.css"
import IntroImg from "../assets/1.jpg"

import React from 'react'
import { Link } from "react-router-dom"

const HeadImg = () => {
  return (
    <div className="head">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>Welcome to my corner of the web!</p>
            <h1>Somesh: Crafting Digital Experiences</h1>
            <div>
                <Link to="/projects" className="btn">Projects</Link>
                <Link to="/contact" className="btn-light">Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default HeadImg