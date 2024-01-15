import "./Footer.css"

import React from 'react'
import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa"

const Footer = () => {
    return (
        <div className="Footer">
            <div className="footer-container">
                <div className="left">
                    <div className="email">
                        <h4><FaMailBulk size={20} style={{ color: "#fff", marginRight: "2rem" }} />somesh.balani001@umb.edu</h4>
                    </div>
                </div>
                <div className="right">
                    <h4>Designing connections, one project at a time – Let's Connect!</h4>
                    <div className="social">
                        <h4>
                            <a href="https://www.linkedin.com/in/someshbalani" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                                /someshbalani
                            </a>
                        </h4>
                        <h4>
                            <a href="https://github.com/someshsb1" target="_blank" rel="noopener noreferrer">
                                <FaGithub size={20} style={{ color: "#fff", marginRight: "2rem" }} />
                                /someshsb1
                            </a>
                        </h4>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p>&copy; 2024 <a href="https://github.com/someshsb1" target="_blank" rel="noopener noreferrer" >Somesh Balani.</a> All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer