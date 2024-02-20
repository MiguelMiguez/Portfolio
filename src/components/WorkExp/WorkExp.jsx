import React from 'react';
import './WorkExp.css'
import { useMyContext } from '../MyContext/MyContext';

const WorkExp = () => {
  const { work } = useMyContext();

  return (
    <div className='WorkExp'>
      <h2 className='Tittle'>Experiencia</h2>
      {work.map((exp, index) => (
        <div className='InfoWork' key={index}>
          <div className='InfoCompany'>
            <div className='ContainerTittleCompany'>
              <h3 className='TittleCompany'>{exp.name}</h3>
            </div>
            <div className='DateCompany'>
              <h3 className='DateText'>{exp.startDate}</h3>
              <h3 className='DateText'>-</h3>
              <h3 className='DateText'>{exp.endDate}</h3>
            </div>
          </div>
          <h4 className='TittlePosition'>{exp.position}</h4>
          <ul className='ExpText'>
            {exp.summary.map((summaryItem, sIndex) => (
              <li className='Text' key={sIndex}>{summaryItem}</li>
            ))}
          </ul>
          <div class="linea-separadora"></div>
        </div>
      ))}
    </div>
  );
};

export default WorkExp;
