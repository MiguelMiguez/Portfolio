import { Heart, Code } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer__container">
                <p className="footer__text">
                    <Code size={16} />
                    Diseñado y desarrollado con
                    <Heart size={16} className="footer__heart" />
                    por Miguel Miguez
                </p>
                <p className="footer__copyright">
                    © {currentYear} Todos los derechos reservados
                </p>
            </div>
        </footer>
    );
};

export default Footer;
