import { BsFillPersonFill, BsFillHouseDoorFill  } from "react-icons/bs";
import { GiWeightLiftingUp, GiBrain, GiPencilBrush } from "react-icons/gi";

const Header = () => {

    return (
        <header className='header'>
            <nav className='header-links-wrapper'>
                <a className='header-link' href='#header'>
                    <BsFillHouseDoorFill className='header-icon' />
                </a>
                <a className='header-link' href='#about'>
                    <BsFillPersonFill className='header-icon' />
                </a>
                <a className='header-link' href='#skills'>
                    <GiBrain className='header-icon' />
                </a>
                <a className='header-link' href='#projects'>
                    <GiPencilBrush className='header-icon' />
                </a>
            </nav>
        </header>
    )
}

export default Header
