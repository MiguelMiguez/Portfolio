import React from 'react'
import { useMyContext } from '../MyContext/MyContext'
import './SkillCertificate.css'

const SkillCertificate = () => {
    const {certificates} = useMyContext();

  return (
    <div className='SkillCertificate'>
        <h2>Skills</h2>
        {certificates.map((cert) =>(
        <div>
            <p>{cert.name}</p>
        </div>
        ))}
        
    </div>
  )
}

export default SkillCertificate