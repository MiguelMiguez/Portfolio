import './SectionTitle.css';

const SectionTitle = ({ icon, title, subtitle }) => {
    return (
        <div className="section-title">
            <div className="section-title__header">
                <span className="section-title__icon">{icon}</span>
                <h2 className="section-title__text">{title}</h2>
            </div>
            {subtitle && <p className="section-title__subtitle">{subtitle}</p>}
        </div>
    );
};

export default SectionTitle;
