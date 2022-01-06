import '../styles/Navbar.css'
import { AiFillGithub, AiOutlineMail, AiOutlineInstagram, AiFillLinkedin, AiOutlinePhone } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";

import { useState } from 'react';

const Navbar = () => {
    const [showNav, setShowNav] = useState(false)

    const navbarTabEvent = (e) => {
        setShowNav(!showNav)
    }
    return (
        <nav className={`navbar-wrapper ${showNav ? 'navbar-wrapper--show' : 'navbar-wrapper--hide'}`}>
            <button className='navbar-tab' onClick={navbarTabEvent} aria-expanded={showNav} aria-controls="navbar">
                {
                    showNav ? <FaArrowRight className='navbar-burger-icon' /> : <GiHamburgerMenu className='navbar-burger-icon' />
                }
            </button>
            <div id='navbar'>
                <a className='navbar-link' href='https://github.com/JSpeed8th' target="_blank" rel="noreferrer" ><AiFillGithub className='navbar-icon' /></a>
                <a className='navbar-link' href='https://www.linkedin.com/in/jordan-speed/' target="_blank" rel="noreferrer" ><AiFillLinkedin className='navbar-icon' /></a>
                <a className='navbar-link' href='mailto:jspeed8th@gmail.com' target="_blank" rel="noreferrer" ><AiOutlineMail className='navbar-icon' /></a>
                <a className='navbar-link' href='tel:+(856)693-2111' target="_blank" rel="noreferrer" ><AiOutlinePhone className='navbar-icon' /></a>
                <a className='navbar-link' href='https://www.instagram.com/art_angel_ichi/' target="_blank" rel="noreferrer" ><AiOutlineInstagram className='navbar-icon' /></a>
            </div>
        </nav>
    )
}

export default Navbar
