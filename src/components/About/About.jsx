import { useData } from '../../context/DataContext';
import { User, MapPin, Calendar } from 'lucide-react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './About.css';

const About = () => {
    const { basics } = useData();

    return (
        <section id="about" className="about section">
            <SectionTitle
                icon={<User size={24} />}
                title="Sobre mí"
                subtitle="Conoce un poco más sobre mi perfil profesional"
            />

            <div className="about__content">
                <div className="about__text">
                    <p>
                        Soy un profesional apasionado por la tecnología con experiencia en desarrollo
                        front-end y análisis de aplicaciones. Me especializo en crear soluciones
                        digitales que combinan funcionalidad con una excelente experiencia de usuario.
                    </p>
                    <p>
                        Actualmente trabajo como <strong>{basics.summary}</strong>, donde desarrollo
                        aplicaciones móviles con React Native y gestiono diversas herramientas
                        tecnológicas para optimizar los procesos empresariales.
                    </p>
                    <p>
                        Me caracterizo por mi capacidad de aprendizaje continuo, trabajo en equipo
                        y enfoque en la resolución de problemas. Siempre busco mantenerme actualizado
                        con las últimas tecnologías y mejores prácticas del desarrollo de software.
                    </p>
                </div>

                <div className="about__info">
                    <div className="about__info-card">
                        <div className="about__info-icon">
                            <MapPin size={20} />
                        </div>
                        <div className="about__info-content">
                            <span className="about__info-label">Ubicación</span>
                            <span className="about__info-value">Buenos Aires, Argentina</span>
                        </div>
                    </div>

                    <div className="about__info-card">
                        <div className="about__info-icon">
                            <Calendar size={20} />
                        </div>
                        <div className="about__info-content">
                            <span className="about__info-label">Experiencia</span>
                            <span className="about__info-value">+5 años en IT</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
