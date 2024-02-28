import React from 'react'
import './Education.css'
import { useMyContext } from '../MyContext/MyContext';


const Education = () => {
  const {education} = useMyContext();
  return (
    <div className='Education'>
        <h2 className='Tittle'>Formación</h2>
        {education.map ((edu, index)=> (
          <div className='InfoWork'>
            <div className='EducationPlace'>
              <div className='ContainerTittleCompany'>
                <h3 className='TittleCompany'>{edu.institution}</h3>
              </div>
              
              <div className='Date'>
                <p className='DateText'>{edu.startDate}</p>
                <p className='DateText'>-</p>
                <p className='DateText'>{edu.endDate}</p>
              </div>
            </div>
            <div className='ExpText' >
              <h4 className='Text'>{edu.area}</h4>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Education