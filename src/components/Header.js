import '../styles/Header.css'

import { BsFillPersonFill, BsFillHouseDoorFill  } from "react-icons/bs";
import { GiWeightLiftingUp, GiBrain, GiPencilBrush } from "react-icons/gi";

const Header = () => {

    return (
        <header className='header'>
            <nav className='header-links-wrapper' aria-label='Main Navigation'>
                {/* <a className='header-link' href='#header'>
                    <BsFillHouseDoorFill className='header-icon' />
                </a> */}
                <ul className='header-links-list'>
                    <li className='header-links-li'>
                        <a className='header-link pushable pushable--clay' href='#about' aria-label='About Me'>
                            <span className='front front--clay'>
                                <BsFillPersonFill className='header-icon' />
                            </span>
                        </a>
                    </li>
                    <li>
                        <a className='header-link pushable pushable--clay' href='#skills' aria-label='Skills & Experience'>
                        <span className='front front--clay'> 
                            <GiBrain className='header-icon' />
                        </span>
                        </a>
                    </li>
                    <li>
                        <a className='header-link pushable pushable--clay' href='#projects' aria-label='My Work'>
                            <span className='front front--clay'>
                                <GiPencilBrush className='header-icon' />
                            </span>
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header
