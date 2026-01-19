import { useData } from '../../context/DataContext';
import { FolderGit2, ExternalLink, ArrowUpRight } from 'lucide-react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Projects.css';

const Projects = () => {
    const { projects } = useData();

    return (
        <section id="projects" className="projects section">
            <SectionTitle
                icon={<FolderGit2 size={24} />}
                title="Proyectos"
                subtitle="Algunos de mis trabajos destacados"
            />

            <div className="projects__grid">
                {projects.map((project, index) => (
                    <article key={index} className="projects__card">
                        <div className="projects__card-header">
                            <div className="projects__card-icon">
                                <FolderGit2 size={24} />
                            </div>
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="projects__card-link"
                                aria-label={`Ver proyecto ${project.name}`}
                            >
                                <ArrowUpRight size={20} />
                            </a>
                        </div>

                        <h3 className="projects__card-title">{project.name}</h3>
                        <p className="projects__card-description">{project.description}</p>

                        <div className="projects__card-tech">
                            {project.tecnology.map((tech, techIndex) => (
                                <span key={techIndex} className="projects__card-tag">
                                    {tech.name}
                                </span>
                            ))}
                        </div>

                        <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="projects__card-cta"
                        >
                            Ver proyecto
                            <ExternalLink size={16} />
                        </a>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Projects;
