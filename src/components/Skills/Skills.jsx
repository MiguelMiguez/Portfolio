import { useData } from '../../context/DataContext';
import { Code2, Award, ExternalLink } from 'lucide-react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Skills.css';

const Skills = () => {
    const { certificates } = useData();

    const skillsWithCert = certificates.filter(cert => cert.url);
    const skillsWithoutCert = certificates.filter(cert => !cert.url);

    return (
        <section id="skills" className="skills section">
            <SectionTitle
                icon={<Code2 size={24} />}
                title="Skills & Certificaciones"
                subtitle="Tecnologías y herramientas que domino"
            />

            <div className="skills__container">
                <div className="skills__group">
                    <h3 className="skills__group-title">
                        <Award size={18} />
                        Con certificación
                    </h3>
                    <div className="skills__list">
                        {skillsWithCert.map((skill, index) => (
                            <a
                                key={index}
                                href={skill.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="skills__item skills__item--certified"
                            >
                                <span>{skill.name}</span>
                                <ExternalLink size={14} />
                            </a>
                        ))}
                    </div>
                </div>

                <div className="skills__group">
                    <h3 className="skills__group-title">
                        <Code2 size={18} />
                        Otras tecnologías
                    </h3>
                    <div className="skills__list">
                        {skillsWithoutCert.map((skill, index) => (
                            <span key={index} className="skills__item">
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
