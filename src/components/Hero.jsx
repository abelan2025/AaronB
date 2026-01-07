import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-content fade-in">
                <h2 className="hero-subtitle">Quality. Automation. Reliability.</h2>
                <h1 className="hero-title">
                    Hi, I'm <span className="highlight">Aaron Belanger</span>
                </h1>
                <p className="hero-description">
                    A Software Quality Engineer & SRE Specialist delivering bug-free,
                    high-performance software solutions. I bridge the gap between
                    complex code and flawless user experiences.
                </p>
                <div className="hero-actions">
                    <a href="#contact" className="btn-primary">Hire Me</a>
                    <a href="#portfolio" className="btn-secondary">View Work</a>
                </div>
            </div>
            <div className="hero-visual fade-in" style={{ animationDelay: '0.3s' }}>
                {/* Placeholder for abstract tech visual or illustration */}
                <div className="abstract-shape"></div>
            </div>
        </section>
    );
};

export default Hero;
