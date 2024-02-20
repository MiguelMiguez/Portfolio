import React from 'react';
import './WorkExp.css'
import { useMyContext } from '../MyContext/MyContext';


const WorkExp = () => {
  const { work } = useMyContext(); // Assuming there is a 'work' property in your JSON

  return (
    <div className='WorkExp'>
      <h2>Experiencia</h2>
      {work.map((exp, index) => (
        <div className='InfoWork' key={index}>
          <h3>{exp.name}</h3>
          <h4>{exp.position}</h4>
          <p>{exp.summary}</p>
        </div>
      ))}
    </div>
  );
};

export default WorkExp;