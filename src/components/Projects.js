import { useState } from 'react';

import {ReactComponent as WorkLogo} from '../assets/my-work.svg';
import '../styles/Projects.css';


const Projects = () => {
    const [projectDescription, setProductDescription] = useState('Click on a project to learn more.')

    return (
        <section className='projects'> 
            {/* Content */}
            <div className='projects-description-wrapper'>
                <WorkLogo />
                {/* <h2>My Work</h2> */}
                <p className='projects-description'>
                    {projectDescription}
                </p>
            </div>
            
            {/* Project List */}
            <ul className='projects-content'>

            </ul>
        </section>
    )
}

export default Projects
