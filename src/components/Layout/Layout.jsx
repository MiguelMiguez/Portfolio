import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import About from '../About/About';
import Experience from '../Experience/Experience';
import Education from '../Education/Education';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import './Layout.css';

const Layout = () => {
    return (
        <div className="layout">
            <Header />
            <main className="main-content">
                <Hero />
                <About />
                <Experience />
                <Education />
                <Skills />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default Layout;
