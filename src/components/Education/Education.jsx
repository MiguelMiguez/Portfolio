import { useData } from '../../context/DataContext';
import { GraduationCap, Calendar } from 'lucide-react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Education.css';

const Education = () => {
  const { education } = useData();

  return (
    <section id="education" className="education section">
      <SectionTitle
        icon={<GraduationCap size={24} />}
        title="Educación"
        subtitle="Mi formación académica"
      />

      <div className="education__grid">
        {education.map((edu, index) => (
          <article key={index} className="education__card">
            <div className="education__icon">
              <GraduationCap size={24} />
            </div>

            <div className="education__content">
              <h3 className="education__institution">{edu.institution}</h3>
              <p className="education__area">{edu.area}</p>

              <div className="education__meta">
                <span className="education__date">
                  <Calendar size={14} />
                  {edu.startDate} — {edu.endDate}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;