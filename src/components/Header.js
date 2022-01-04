import '../styles/Header.css'
import { AiFillGithub, AiOutlineMail, AiOutlineInstagram, AiFillLinkedin, AiOutlinePhone } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaArrowRight } from "react-icons/fa";

import { useState } from 'react';

const Header = () => {
    const [showNav, setShowNav] = useState(true)

    const headerTabEvent = (e) => {
        setShowNav(!showNav)
    }
    return (
        <header className={`header-wrapper ${showNav ? 'header-wrapper--show' : 'header-wrapper--hide'}`}>
            <span className='header-tab' onClick={headerTabEvent}>
                {
                    showNav ? <FaArrowRight className='header-burger-icon' /> : <GiHamburgerMenu className='header-burger-icon' />
                }
            </span>
            <nav className='header-nav'>
                <a className='header-link' href='https://github.com/JSpeed8th' target="_blank" rel="noreferrer" ><AiFillGithub className='header-icon' /></a>
                <a className='header-link' href='https://www.linkedin.com/in/jordan-speed/' target="_blank" rel="noreferrer" ><AiFillLinkedin className='header-icon' /></a>
                <a className='header-link' href='mailto:jspeed8th@gmail.com' target="_blank" rel="noreferrer" ><AiOutlineMail className='header-icon' /></a>
                <a className='header-link' href='tel:+(856)693-2111' target="_blank" rel="noreferrer" ><AiOutlinePhone className='header-icon' /></a>
                <a className='header-link' href='https://www.instagram.com/art_angel_ichi/' target="_blank" rel="noreferrer" ><AiOutlineInstagram className='header-icon' /></a>
            </nav>
        </header>
    )
}

export default Header
