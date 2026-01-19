import { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Sun, Moon, Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
    const { theme, toggleTheme } = useTheme();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#about', label: 'Sobre mí' },
        { href: '#experience', label: 'Experiencia' },
        { href: '#education', label: 'Educación' },
        { href: '#skills', label: 'Skills' },
        { href: '#projects', label: 'Proyectos' },
        { href: '#contact', label: 'Contacto' },
    ];

    const handleNavClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
            <div className="header__container">
                <a href="#" className="header__logo">
                    MM<span className="header__logo-dot">.</span>
                </a>

                <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
                    <ul className="header__nav-list">
                        {navLinks.map((link) => (
                            <li key={link.href} className="header__nav-item">
                                <a href={link.href} className="header__nav-link" onClick={handleNavClick}>
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header__actions">
                    <button
                        className="header__theme-toggle"
                        onClick={toggleTheme}
                        aria-label={`Cambiar a tema ${theme === 'light' ? 'oscuro' : 'claro'}`}
                    >
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>

                    <button
                        className="header__mobile-toggle"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Menú"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
