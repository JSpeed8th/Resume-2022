import {ReactComponent as SkillsLogo} from '../assets/skills.svg';
import { FaCheck } from 'react-icons/fa'
import { RiNewspaperFill } from "react-icons/ri";
import '../styles/Skills.css';

const skillItems = [
    {
        'name': 'React.js',
        "key": 1
    },
    {
        'name': 'Express.js',
        "key": 2
    },
    {
        'name': 'JavaScript (ES6)',
        "key": 3
    },
    {
        'name': 'JSON',
        "key": 4
    },
    {
        'name': 'SCSS',
        "key": 5
    },
    {
        'name': 'Regex',
        "key": 6
    },
    {
        'name': 'Figma',
        "key": 7
    },
    {
        'name': 'Gitlab & Github',
        "key": 8
    },
    {
        'name': 'Accessibility (WCAG 2.1)',
        "key": 9
    },
    {
        'name': 'Project Management',
        "key": 10
    },
    {
        'name': 'CMS Technologies (WordPress &BigCommerce)',
        "key": 11
    }
]

const Skills = () => {
    return (
        <section id='skills'>
            {/* Content */}
            <div className='skills-content'>
                <SkillsLogo className='skills-logo' />
                <h2 className='visually-hidden'>Skills & Experience</h2>
                <ul className='skills-list'>
                    <li className='skills-list-item skills-list-item--pulse'>
                        <a className='skills-list-item-link' target="_blank" rel="noreferrer" href='https://drive.google.com/file/d/1iuTLkQ_ycqYkmlhOIx5qpnLel_0Vo4fW/view?usp=sharing'>
                            <RiNewspaperFill className='skills-check-icon' />
                            My Resume
                        </a>
                    </li>
                    {skillItems.map((item) => (
                        <li className='skills-list-item' role="button" key={item.key}>
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
