import { useData } from '../../context/DataContext';
import { ArrowDown, Mail, Github, Linkedin } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    const { basics } = useData();

    return (
        <section className="hero">
            <div className="hero__content">
                <div className="hero__badge">
                    <span className="hero__badge-dot"></span>
                    Disponible para trabajar
                </div>

                <h1 className="hero__title">
                    Hola, soy <span className="hero__name">{basics.name}</span>
                </h1>

                <p className="hero__subtitle">{basics.summary}</p>

                <p className="hero__description">
                    Apasionado por crear experiencias digitales excepcionales.
                    Especializado en desarrollo front-end con React y React Native.
                </p>

                <div className="hero__actions">
                    <a href="#contact" className="hero__btn hero__btn--primary">
                        <Mail size={18} />
                        Contáctame
                    </a>
                    <a href="#projects" className="hero__btn hero__btn--secondary">
                        Ver proyectos
                    </a>
                </div>

                <div className="hero__social">
                    <a
                        href="https://github.com/MikemDev01"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero__social-link"
                        aria-label="GitHub"
                    >
                        <Github size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/miguel-miguez-810b831a6/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero__social-link"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                    <a
                        href={`mailto:${basics.email}`}
                        className="hero__social-link"
                        aria-label="Email"
                    >
                        <Mail size={20} />
                    </a>
                </div>
            </div>

            <a href="#about" className="hero__scroll">
                <ArrowDown size={20} />
            </a>
        </section>
    );
};

export default Hero;
