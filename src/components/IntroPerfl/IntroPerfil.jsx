import React from 'react'
import { useMyContext } from '../MyContext/MyContext';
import './IntroPerfil.css'



const IntroPerfil = () => {
    const resumeData = useMyContext();
    const imagePath = '../../assets/earth.png';
    return (
    <div className='IntroPerfil'>
        <div className='ContainerInfoPerfil'>
            <h1 className='NameProfile'>{resumeData.basics.name}</h1>
            <p className='TextProfile'>{resumeData.basics.summary}</p>
            <div className='ContainerLocation'>
                <img className='IconWorld' src={imagePath} alt="" />
                <a href="https://maps.app.goo.gl/Fs9TkRmV8fsE1jT88" target='blank' >Burzaco, Buenos Aires, ARG</a>
            </div>
            <div className='ContainerSocialMedia'>
                <a href=""><img src="" alt="" /></a>
                <a href=""><img src="" alt="" /></a>
                <a href=""><img src="" alt="" /></a>
            </div>
        </div>
        <div className='ContainerPhoto'>
            <img src="" alt="FotoPerfil" />
        </div>
    </div>
  )
}

export default IntroPerfil