import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for form submission logic
        alert('Thanks for reaching out! This is a demo form.');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Let's Collaborate</h3>
                        <p>
                            I'm currently open to freelance opportunities and consulting gigs.
                            Whether you need to shore up your QA processes or need expert advice on testing automation, let's chat.
                        </p>
                        <div className="contact-details">
                            <div className="contact-item">
                                <strong>Email:</strong> <a href="mailto:aaron@example.com">hello@aaronbelanger.com</a>
                            </div>
                            <div className="contact-item">
                                <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/aaron-belanger-459ba164" target="_blank" rel="noopener noreferrer">aaron-belanger</a>
                            </div>
                            <div className="contact-item">
                                <strong>Location:</strong> Remote / Worldwide
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit} data-cy="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn-primary submit-btn">Send Message</button>
                    </form>
                </div>
            </div>
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Aaron Belanger. All Rights Reserved.</p>
            </footer>
        </section>
    );
};

export default Contact;
