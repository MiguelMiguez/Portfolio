import React from 'react'
import { useMyContext } from '../MyContext/MyContext'
import './SkillCertificate.css'

const SkillCertificate = () => {
    const {certificates} = useMyContext();

  return (
    <div className='SkillCertificate'>
        <h2 className='Tittle'>Skills & Certificaciones</h2>
        {certificates.map((cert) =>(
        <div className='ContainerSkills'>
          <div className='Skills'>
              <a href={cert.url} target='blank'><p>{cert.name}</p></a>
          </div>
        </div>  
        ))}
    </div>
  )
}

export default SkillCertificate