import React from 'react';
import { useMyContext } from '../MyContext/MyContext';
import './ContainerAll.css';
import IntroPerfil from '../IntroPerfl/IntroPerfil';
import AboutMe from '../AboutMe/AboutMe';
import WorkExp from '../WorkExp/WorkExp';
import Education from '../Education/Education';
import SkillCertificate from '../SkillCertificate/SkillCertificate';


const ContainerAll = () => {
  return (
    <div className='ContainerAll'>
        <IntroPerfil/>
        <AboutMe/>
        <WorkExp/>
        <Education/>
        <SkillCertificate/>
    </div>
  )
}

export default ContainerAll