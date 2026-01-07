import React from 'react';
import '../styles/Experience.css';

const experiences = [
    {
        role: "Senior Software Quality Engineer",
        company: "TechCorp Inc.",
        period: "2023 - Present",
        description: "Leading the automation strategy for a microservices architecture. Reduced regression testing time by 60% through a custom Cypress framework."
    },
    {
        role: "SRE Consultant (Freelance)",
        company: "Various Startups",
        period: "2022 - Present",
        description: "Advising early-stage companies on observability stacks (Prometheus/Grafana) and incident management protocols."
    },
    {
        role: "QA Automation Engineer",
        company: "InnovateSoft",
        period: "2020 - 2023",
        description: "Designed and maintained Selenium WebDriver scripts for a high-traffic e-commerce platform. Collaborated closely with devs to shift testing left."
    },
    {
        role: "Manual QA Tester",
        company: "WebSolutions",
        period: "2018 - 2020",
        description: "Foundational experience in black-box testing, test case creation, and bug reporting. Developed a keen eye for UX inconsistencies."
    }
];

const Experience = () => {
    return (
        <section id="portfolio" className="experience-section">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div key={index} className="timeline-item">
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="timeline-date">{exp.period}</span>
                                <h3 className="timeline-role">{exp.role}</h3>
                                <h4 className="timeline-company">{exp.company}</h4>
                                <p className="timeline-description">{exp.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
