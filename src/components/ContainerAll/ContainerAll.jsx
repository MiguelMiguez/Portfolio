import React from 'react';
import { useMyContext } from '../MyContext/MyContext';
import './ContainerAll.css';
import IntroPerfil from '../IntroPerfl/IntroPerfil';
import AboutMe from '../AboutMe/AboutMe';
import WorkExp from '../WorkExp/WorkExp';
import Education from '../Education/Education';
import SkillCertificate from '../SkillCertificate/SkillCertificate';
import Projects from '../Projects/Projects';


const ContainerAll = () => {
  return (
    <div className='ContainerAll'>
        <IntroPerfil/>
        <AboutMe/>
        <WorkExp/>
        <Education/>
        <SkillCertificate/>
        <Projects/>
    </div>
  )
}

export default ContainerAll