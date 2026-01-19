import { useData } from '../../context/DataContext';
import { Mail, Send, Github, Linkedin, MapPin } from 'lucide-react';
import SectionTitle from '../SectionTitle/SectionTitle';
import './Contact.css';

const Contact = () => {
    const { basics } = useData();

    const contactLinks = [
        {
            icon: <Mail size={22} />,
            label: 'Email',
            value: basics.email,
            href: `mailto:${basics.email}`,
        },
        {
            icon: <Github size={22} />,
            label: 'GitHub',
            value: 'MikemDev01',
            href: 'https://github.com/MikemDev01',
        },
        {
            icon: <Linkedin size={22} />,
            label: 'LinkedIn',
            value: 'Miguel Miguez',
            href: 'https://www.linkedin.com/in/miguel-miguez-810b831a6/',
        },
        {
            icon: <MapPin size={22} />,
            label: 'Ubicación',
            value: 'Buenos Aires, Argentina',
            href: null,
        },
    ];

    return (
        <section id="contact" className="contact section">
            <SectionTitle
                icon={<Mail size={24} />}
                title="Contacto"
                subtitle="¿Tienes un proyecto en mente? ¡Hablemos!"
            />

            <div className="contact__content">
                <div className="contact__info">
                    <h3 className="contact__headline">
                        Estoy disponible para nuevas oportunidades
                    </h3>
                    <p className="contact__text">
                        Si tienes alguna pregunta, propuesta de trabajo o simplemente
                        quieres saludar, no dudes en contactarme. Respondo todos los
                        mensajes lo antes posible.
                    </p>

                    <div className="contact__links">
                        {contactLinks.map((link, index) => (
                            <div key={index} className="contact__link-item">
                                {link.href ? (
                                    <a
                                        href={link.href}
                                        target={link.href.startsWith('mailto') ? '_self' : '_blank'}
                                        rel="noopener noreferrer"
                                        className="contact__link"
                                    >
                                        <span className="contact__link-icon">{link.icon}</span>
                                        <div className="contact__link-content">
                                            <span className="contact__link-label">{link.label}</span>
                                            <span className="contact__link-value">{link.value}</span>
                                        </div>
                                    </a>
                                ) : (
                                    <div className="contact__link contact__link--static">
                                        <span className="contact__link-icon">{link.icon}</span>
                                        <div className="contact__link-content">
                                            <span className="contact__link-label">{link.label}</span>
                                            <span className="contact__link-value">{link.value}</span>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="contact__cta">
                    <a
                        href={`mailto:${basics.email}`}
                        className="contact__btn"
                    >
                        <Send size={20} />
                        Enviar mensaje
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
