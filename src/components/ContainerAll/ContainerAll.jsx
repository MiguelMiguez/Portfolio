import React from 'react';
import { useMyContext } from '../MyContext/MyContext';
import './ContainerAll.css';
import IntroPerfil from '../IntroPerfl/IntroPerfil';
import AboutMe from '../AboutMe/AboutMe';
import WorkExp from '../WorkExp/WorkExp';


const ContainerAll = () => {
  return (
    <div className='ContainerAll'>
        <IntroPerfil/>
        <AboutMe/>
        <WorkExp/>
    </div>
  )
}

export default ContainerAll