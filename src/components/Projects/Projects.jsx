import React from 'react'
import { useMyContext } from '../MyContext/MyContext'
import "./Projects.css"

const Projects = () => {
    const { projects } = useMyContext();

    return (
        <div className='Projects'>
            <h2 className='Tittle'>Proyectos</h2>
            <div className='ContainerProjects'>
                {projects.map((pro, index) => (
                    <div className='Plan' key={index}>
                        <a href={pro.url} target='blank' ><p className='ProjectName'>{pro.name}</p></a>
                        <p className='Text'>{pro.description}</p>
                        <div className='ContainterTech'>
                            {pro.tecnology.map((tech, techIndex) => (
                                <div className='Tech' key={techIndex}>
                                    <p className='Text'>{tech.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Projects
