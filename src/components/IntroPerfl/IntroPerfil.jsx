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
            <div className='ContainerLocation'>
                <a href="https://maps.app.goo.gl/Fs9TkRmV8fsE1jT88" target='blank' ><p className='Text'>Burzaco, Buenos Aires, ARG</p></a>
            </div>
            <div className='ContainerSocialMedia'>
                <a href="https://www.linkedin.com/in/miguelmiguez/" target='blank'><p className='Text'>LinkedIn: Miguel Miguez</p></a>
                <a href="https://github.com/MiguelMiguez" target='blank'><p className='Text'>GitHub: MiguelMiguez </p></a>
                <a href=""><p className='Text'></p></a>
            </div>
        </div>
        <div className='ContainerPhoto'></div>
    </div>
  )
}

export default IntroPerfil