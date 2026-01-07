import React from 'react';
import '../styles/About.css';

const skills = [
    "Test Automation", "Manual Testing", "Site Reliability Engineering (SRE)",
    "CI/CD Pipelines", "Performance Testing", "Bug Tracking (Jira)",
    "JavaScript/TypeScript", "Python", "Selenium", "Cypress"
];

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-text">
                        <p>
                            I am a dedicated <strong>Software Quality Engineer</strong> with a passion for breaking things before they reach the user.
                            My journey involves a deep dive into both <strong>manual and automated testing</strong>, ensuring that every release meets the highest standards of reliability.
                        </p>
                        <p>
                            Recently, I've expanded my expertise into <strong>Site Reliability Engineering (SRE)</strong>,
                            focusing on system stability, observability, and scalability. I believe quality doesn't stop at deployment;
                            it extends to how software performs in the wild.
                        </p>
                        <p>
                            Whether you need someone to build a robust testing framework from scratch or consult on SRE best practices,
                            I bring a holistic view of software quality to every project.
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
