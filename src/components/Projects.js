import { useState } from 'react';

import {ReactComponent as WorkLogo} from '../assets/my-work.svg';
import empireGif from '../assets/my-work/empireabrasives-mov.gif'
import smartBrainGif from '../assets/my-work/smartbrain-mov.gif'
import pureProGif from '../assets/my-work/purepro-mov.gif'
import dornbosGif from '../assets/my-work/dornbos-mov.gif'
import '../styles/Projects.css';


const Projects = () => {
    const [projectDescription, setProductDescription] = useState(
        {
            'description': <p className='project-description--start'>Click on a project to learn more.</p>,
            'projectGift': '',
            'projectAlt': ''
        }
    )

    const projectList = [
        {
            'title': 'EmpireAbrasives.com Full Site Development',
            'subtitle': 'For IntuitSolutions',
            'description': <p>A full site development project for IntuitSolutions by myself. <a href='https://www.empireabrasives.com/'  target="_blank" rel="noreferrer">Empire Abrasives</a> was developed utilizing the BigCommerce CMS "Stencil" platform.</p>,
            'gif': empireGif,
            'alt': 'Navigating through EmpireAbrasives.com'
        },
        {
            'title': 'Smart Brain',
            'subtitle': '',
            'description': <p>testing things out 2 <a href="https://smart-facial-detect.herokuapp.com/" target="_blank" rel="noreferrer">Smart Brain</a></p>,
            'gif': smartBrainGif,
            'alt': 'Navigating through Smart Brain'
        },
        {
            'title': 'PurePro.com Development Diary',
            'subtitle': 'For IntuitSolutions',
            'description': <p>testing things out 3 <a href='https://www.intuitsolutions.net/purepro-com-upgrades-from-bigcommerce-blueprint-to-stencil/' target="_blank" rel="noreferrer">purepro.com</a></p>,
            'gif': pureProGif,
            'alt': 'Navigating through PurePro.com'
        },
        {
            'title': 'DornbosSign.com Custom Street Sign Functionality',
            'subtitle': 'For IntuitSolutions',
            'description': <p>testing things out 4 <a href='https://www.dornbossign.com/custom-street-name-signs/' target="_blank" rel="noreferrer">dornbossign.com</a></p>,
            'gif': dornbosGif,
            'alt': 'Navigating through DornbosSign.com'
        }
    ]

    const projectClickEvent = (descr, gif, alt) => {
        setProductDescription({
            'description': descr,
            'gif': gif,
            'alt': alt
        }) 
    }

    return (
        <section id='projects'> 
            {/* Content */}
            <div className='projects-content-wrapper'>
                <WorkLogo className='project-logo' />
                <h2 className='visually-hidden'>My Work</h2>
                <div className='projects-content'> 
                    <img className='project-gift' src={projectDescription.gif} alt={projectDescription.alt} />
                    {projectDescription.description}
                </div>
            </div>
            
            {/* Project List */}
            <ul className='projects-wrapper'>
                {
                    projectList.map((project) => {
                        return (
                        <li className='project-list-item'>
                            <button className='project-button pushable pushable--gray' onClick={() => {
                                projectClickEvent(project.description, project.gif, project.alt)
                            }}>
                                <span className='front front--project-white'>
                                    <h3 className='project-title'>{project.title}</h3>
                                    <h4 className='project-subtitle'>{project.subtitle}</h4>
                                    <div id='project-description' className='visually-hidden'>

                                        {project.description}
                                    </div>
                                </span>
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
