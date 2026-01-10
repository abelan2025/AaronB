import '../styles/Experience.css';

const experiences = [
    { company: "Angie's List", role: "Senior Software Quality Engineer", period: "May 2018 - Nov 2020", years: "2 yrs 7 mos" },
    { company: "Mandolin", role: "Senior Software Quality Engineer", period: "Nov 2020 - Apr 2021", years: "6 mos" },
    { company: "OneCause", role: "Senior Software Quality Engineer", period: "Apr 2021 - Dec 2022", years: "1 yr 9 mos" },
    { company: "Greenlight Guru", role: "Senior Software Quality Engineer", period: "Dec 2022 - Present", years: "3 yrs 2 mos" }
];

const Experience = () => {
    return (
        <section id="portfolio" className="experience-section">
            <div className="container">
                <div className="experience-intro fade-up">
                    <p>
                        Throughout my career, I've worked with diverse companies—from agile startups to
                        established enterprises—leveraging a wide range of technologies. Each role has
                        strengthened my expertise in quality engineering and continuous improvement.
                    </p>
                </div>

                <div className="timeline-container fade-up">
                    <div className="timeline-track">
                        <div className="timeline-line"></div>
                        <div className="timeline-experiences">
                            {experiences.map((exp, index) => (
                                <div key={index} className="timeline-experience">
                                    <div className="timeline-dot"></div>
                                    <div className="experience-content">
                                        <h3 className="experience-company">{exp.company}</h3>
                                        <p className="experience-role">{exp.role}</p>
                                        <span className="experience-period">{exp.period}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
