import React from 'react'
import './footer.css'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer id='footer'>
            <div className='footer-container'>
                <div className="logo">Ancyrâ</div>
                <nav className="menu">
                    <ul>
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">About</a>
                        </li>
                        <li>
                            <a href="#experience">Experience</a>
                        </li>
                        <li>
                            <a href="#services">Services</a>
                        </li>
                        <li>
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="#testimonials">Testimonials</a>
                        </li>
                        <li>
                            <a href="contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className="social-media">
                    <a
                        href="https://www.facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaFacebookF />
                    </a>
                    <a
                        href="https://www.instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaInstagram />
                    </a>
                    <a
                        href="https://www.linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedinIn />
                    </a>
                    <a
                        href="https://www.twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <AiOutlineTwitter />
                    </a>
                </div>
                <div className='description'>
                    © {new Date().getFullYear()} Ancyrâ. All rights reserved.
                </div>
            </div>
        </footer>
    )
}

export default Footer