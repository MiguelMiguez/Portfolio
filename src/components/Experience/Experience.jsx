import { useData } from '../../context/DataContext';
import { Briefcase, ExternalLink, ChevronRight } from 'lucide-react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Experience.css';

const Experience = () => {
    const { work } = useData();

    return (
        <section id="experience" className="experience section">
            <SectionTitle
                icon={<Briefcase size={24} />}
                title="Experiencia laboral"
                subtitle="Mi trayectoria profesional"
            />

            <div className="experience__timeline">
                {work.map((job, index) => (
                    <article key={index} className="experience__item">
                        <div className="experience__marker">
                            <div className="experience__marker-dot"></div>
                            {index !== work.length - 1 && <div className="experience__marker-line"></div>}
                        </div>

                        <div className="experience__content">
                            <div className="experience__header">
                                <div className="experience__info">
                                    <h3 className="experience__position">{job.position}</h3>
                                    <a
                                        href={job.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="experience__company"
                                    >
                                        {job.name}
                                        <ExternalLink size={14} />
                                    </a>
                                </div>
                                <span className="experience__date">
                                    {job.startDate} — {job.endDate}
                                </span>
                            </div>

                            <ul className="experience__tasks">
                                {job.summary.map((task, taskIndex) => (
                                    <li key={taskIndex} className="experience__task">
                                        <ChevronRight size={16} className="experience__task-icon" />
                                        <span>{task}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Experience;
