import React from 'react'
import './navbar.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook, BiMessageDetail } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'

const Navbar = () => {
    const [isActive, setIsActive] = React.useState("#home")

    /* React.useEffect(() => {
        document.addEventListener("scroll", () => {
            if (window.scrollY < window.innerHeight) {
                if (isActive !== "#home") {
                    setIsActive("#home")
                }

            }
            if (window.scrollY > window.innerHeight && window.scrollY < window.innerHeight * 2) {
                if (isActive !== "#about") {
                    setIsActive('#about')
                }

            }
            if (window.scrollY > window.innerHeight * 2 && window.scrollY < window.innerHeight * 3) {
                if (isActive !== "#experience") {
                    setIsActive("#experience")
                }

            }
            if (window.scrollY > window.innerHeight * 3 && window.scrollY < window.innerHeight * 4) {
                if (isActive !== "#services") {
                    setIsActive("#services")
                }

            }
            if (window.scrollY > window.innerHeight * 5 && window.scrollY < window.innerHeight * 5) {
                if (isActive !== "#contact") {
                    setIsActive("#contact")
                }
            }
        })
    }, [isActive]) */

    return (
        <nav className='navbar'>
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