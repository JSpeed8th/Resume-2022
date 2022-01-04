import {ReactComponent as SkillsLogo} from '../assets/skills.svg';
import { FaCheck } from 'react-icons/fa'
import { RiNewspaperFill } from "react-icons/ri";
import '../styles/Skills.css';

const skillItems = [
    {
        'name': 'React.js'
    },
    {
        'name': 'Express.js'
    },
    {
        'name': 'JavaScript (ES6)'
    },
    {
        'name': 'JSON'
    },
    {
        'name': 'SCSS'
    },
    {
        'name': 'Regex'
    },
    {
        'name': 'Figma'
    },
    {
        'name': 'Gitlab & Github'
    },
    {
        'name': 'Accessibility (WCAG 2.1)'
    },
    {
        'name': 'Project Management',
    },
    {
        'name': 'CMS Technologies (WordPress &BigCommerce)'
    }
]

const Skills = () => {
    return (
        <section id='skills'>
            {/* Content */}
            <div className='skills-content'>
                <SkillsLogo className='skills-logo' />
                {/* <h2>Skills & Technologies</h2> */}
                <ul className='skills-list'>
                    <li className='skills-list-item skills-list-item--pulse'>
                        <a className='skills-list-item-link' target="_blank" rel="noreferrer" href='https://drive.google.com/file/d/1evzSDfeZ_IfaaV3j5PyZT2mcfbu7vbIX/view?usp=sharing'>
                            <RiNewspaperFill className='skills-check-icon' />
                            My Resume
                        </a>
                    </li>
                    {skillItems.map((item) => (
                        <li className='skills-list-item'>
                            <FaCheck className='skills-check-icon' />
                            {item.name}
                        </li>
                    ))}
                </ul>
            </div>
            
            {/* Photograph */}
            <div className='skills-photograph'></div>

        </section>
    )
}

export default Skills
