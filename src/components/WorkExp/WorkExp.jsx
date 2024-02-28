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
              <p className='DateText'>{exp.startDate}</p>
              <p className='DateText'>-</p>
              <p className='DateText'>{exp.endDate}</p>
            </div>
          </div>
          <h4 className='TittlePosition'>{exp.position}</h4>
          <ul className='ExpText'>
            {exp.summary.map((summaryItem, sIndex) => (
              <li className='Text' key={sIndex}>{summaryItem}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default WorkExp;
