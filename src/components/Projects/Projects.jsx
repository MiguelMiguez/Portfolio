import React from 'react'
import { useMyContext } from '../MyContext/MyContext'
import "./Projects.css"

const Projects = () => {
    const{projects} = useMyContext();

  return (
    <div className='Projects'>
        <h2 className='Tittle'>Proyectos</h2>
        <div className='ContainerProjects'>
            {projects.map((pro)=>(
                <div className='Plan'>
                    <a href={pro.url}>
                        <p>{pro.name}</p>
                        <p>{pro.description}</p>
                        <p>{pro.tecnology}</p>
                    </a>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Projects