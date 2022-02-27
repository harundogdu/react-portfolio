import React from 'react'
import './navbar.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'

const Navbar = () => {
    const [isActive, setIsActive] = React.useState("#home")
    return (
        <nav>
            <ul>
                <li>
                    <a
                        href="#home"
                        onClick={() => setIsActive("#home")}
                        className={isActive === "#home" ? "active" : ""}
                    >
                        <AiOutlineHome />
                    </a>
                </li>
                <li>
                    <a
                        href="#about"
                        onClick={() => setIsActive("#about")}
                        className={isActive === "#about" ? "active" : ""}
                    >
                        <AiOutlineUser />
                    </a>
                </li>
                <li>
                    <a
                        href="#experience"
                        onClick={() => setIsActive("#experience")}
                        className={isActive === "#experience" ? "active" : ""}
                    >
                        <BiBook />
                    </a>
                </li>
                <li>
                    <a href="#services"
                        onClick={() => setIsActive("#services")}
                        className={isActive === "#services" ? "active" : ""}
                    >
                        <RiServiceLine />
                    </a>
                </li>
                <li>
                    <a href="#contact"
                        onClick={() => setIsActive("#contact")}
                        className={isActive === "#contact" ? "active" : ""}
                    >
                        <BiMessageDetail />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar