import React from 'react'
import './navbar.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>
                    <a href="#home" className='active'>
                        <AiOutlineHome />
                    </a>
                </li>
                <li>
                    <a href="#about">
                        <AiOutlineUser />
                    </a>
                </li>
                <li>
                    <a href="#experience">
                        <BiBook />
                    </a>
                </li>
                <li>
                    <a href="#services">
                        <RiServiceLine />
                    </a>
                </li>
                <li>
                    <a href="#contact">
                        <BiMessageDetail />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar