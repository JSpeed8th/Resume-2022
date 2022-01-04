import { useState } from 'react';

import {ReactComponent as WorkLogo} from '../assets/my-work.svg';
import '../styles/Projects.css';


const Projects = () => {
    const [projectDescription, setProductDescription] = useState(<p className='project-description--start'>Click on a project to learn more.</p>)

    const projectList = [
        {
            'title': 'testing 1',
            'description': <p>testing things out 1</p>,
            'img': ''
        },
        {
            'title': 'testing 2',
            'description': <p>testing things out 2</p>,
            'img': ''
        },
        {
            'title': 'testing 3',
            'description': <p>testing things out 3</p>,
            'img': ''
        },
        {
            'title': 'testing 4',
            'description': <p>testing things out 4</p>,
            'img': ''
        }
    ]

    const projectClickEvent = (descr) => {
        setProductDescription(descr) 
    }

    return (
        <section id='projects'> 
            {/* Content */}
            <div className='projects-content-wrapper'>
                <WorkLogo className='project-logo' />
                {/* <h2>My Work</h2> */}
                <div className='projects-content'>
                    {projectDescription}
                </div>
            </div>
            
            {/* Project List */}
            <ul className='projects-wrapper'>
                {
                    projectList.map((project) => {
                        return (
                        <li className='project-list-item'>
                            <button className='project-button' style={{backgroundImage: `url(${project.img})`}} onClick={() => {
                                projectClickEvent(project.description)
                            }}>
                                <h3>{project.title}</h3>
                                <div id='project-description'>
                                    {project.description}
                                </div>
                            </button>
                        </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default Projects
