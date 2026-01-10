import React from 'react';
import '../styles/About.css';

const skills = [
    "Cypress", "Playwright", "K6 (Performance)", "Postman/API Testing",
    "CI/CD Pipelines", "Test Strategy Design", "Code Review",
    "JavaScript/TypeScript", "Python", "Application Logs & Telemetry",
    "Production Incident Response", "Mentoring & Leadership", "Jira/Bug Tracking"
];

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I'm a <strong>Staff Quality Engineer</strong> with 8+ years of experience leading test automation
                            and quality initiatives. I specialize in designing <strong>application-level testing strategies</strong>,
                            building automate-first frameworks, and mentoring engineering teams to ship faster without compromising quality.
                        </p>
                        <p>
                            My work spans the full quality lifecycle: from architecting <strong>CI/CD pipelines</strong> and
                            automated test suites (Cypress, Playwright, K6) to leading <strong>production incident resolution</strong> and performance optimization. I believe quality engineering is about enabling teams to deploy confidently
                            and iterate rapidly.
                        </p>
                        <p>
                            Beyond testing, I bring <strong>SRE expertise</strong> in observability, system reliability, and
                            performance tuning—ensuring software doesn't just work, but performs reliably at scale.
                        </p>
                    </div>
                    <div className="skills-container">
                        <h3 className="skills-title">Technical Arsenal</h3>
                        <div className="skills-grid">
                            {skills.map((skill, index) => (
                                <span key={index} className="skill-badge">{skill}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
