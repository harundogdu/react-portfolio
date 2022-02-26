import React from 'react'
import './header.css'
import { BsLinkedin, BsGithub, BsFileText } from 'react-icons/bs'
import { HiChevronDoubleDown } from 'react-icons/hi'
import { Button } from 'components'
import { ButtonOutline } from 'components/shared/Button'


const Header = () => {
    return (
        <header className='header'>
            <div className='header-header'>
                <div className="header-title">
                    <h5>Hello I'm</h5>
                    <h1>Harun Doğdu</h1>
                    <small>Fullstack Developer</small>
                </div>
                <div className="header-buttons">
                    <ButtonOutline text="Download CV" />
                    <Button text="Let's Talk" />
                </div>
            </div>
            <div className='header-footer'>
                <div className="header-socials">

                    <a href="https://www.linkedin.com/in/harun-dogdu-b9a8a917b/" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin />
                    </a>

                    <a href="#!" target="_blank" rel="noopener noreferrer">
                        <BsGithub />
                    </a>

                    <a href="#!" target="_blank" rel="noopener noreferrer">
                        <BsFileText />
                    </a>

                </div>
                <div className="image-area">
                    <img src="https://harundogdu.com/storage/image/me-27-02-2022_00-06-14.png" alt="Harun Doğdu" />
                </div>
                <a href='#!' className='scroll-down'>
                    <span>Scroll Down</span>
                    <HiChevronDoubleDown />
                </a>
            </div>
        </header>
    )
}

export default Header