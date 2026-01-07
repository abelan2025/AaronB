import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#hero" className="navbar-logo">
          Aaron<span className="accent">.SQE</span>
        </a>
        <ul className="navbar-menu">
          <li><a href="#about" data-cy="nav-about">About</a></li>
          <li><a href="#services" data-cy="nav-services">Services</a></li>
          <li><a href="#portfolio" data-cy="nav-portfolio">Experience</a></li>
          <li><a href="#contact" className="btn-primary" data-cy="nav-contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
