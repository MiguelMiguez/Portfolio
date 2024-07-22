import React from 'react'
import { useMyContext } from '../MyContext/MyContext';
import './IntroPerfil.css'



const IntroPerfil = () => {
    const resumeData = useMyContext();
    const imagePath = '../../../Public/profile.jpg';
    return (
    <div className='IntroPerfil'>
        <div className='ContainerInfoPerfil'>
            <h1 className='NameProfile'>{resumeData.basics.name}</h1>
            <p className='TextProfile'>{resumeData.basics.summary}</p>
        </div>
       
    </div>
  )
}

export default IntroPerfil