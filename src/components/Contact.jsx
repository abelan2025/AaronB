import React, { useState } from 'react';
import { useChaos } from '../context/ChaosContext';
import '../styles/Contact.css';

const Contact = () => {
    const { injectChaos } = useChaos();
    const [status, setStatus] = useState('idle'); // idle, loading, success, error
    const [errorMessage, setErrorMessage] = useState('');
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        setErrorMessage('');

        try {
            // Simulate API call with potential chaos
            await injectChaos();

            // Success path
            setStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 3000); // Reset success message
        } catch (error) {
            // Error path (Chaos or real)
            console.error("Submission failed:", error);
            setStatus('error');
            setErrorMessage(error.message);
        }
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

                        {/* Status Feedback */}
                        {status === 'error' && (
                            <div className="status-message error" style={{
                                color: '#ef4444',
                                background: 'rgba(239, 68, 68, 0.1)',
                                padding: '10px',
                                borderRadius: '4px',
                                marginBottom: '1rem',
                                border: '1px solid #ef4444'
                            }}>
                                ⚠️ <strong>Error:</strong> {errorMessage}
                            </div>
                        )}
                        {status === 'success' && (
                            <div className="status-message success" style={{
                                color: '#22c55e',
                                background: 'rgba(34, 197, 94, 0.1)',
                                padding: '10px',
                                borderRadius: '4px',
                                marginBottom: '1rem',
                                border: '1px solid #22c55e'
                            }}>
                                ✅ Message sent successfully!
                            </div>
                        )}

                        <button
                            type="submit"
                            className="btn-primary submit-btn"
                            disabled={status === 'loading'}
                            style={{
                                opacity: status === 'loading' ? 0.7 : 1,
                                cursor: status === 'loading' ? 'not-allowed' : 'pointer'
                            }}
                        >
                            {status === 'loading' ? 'Sending...' : 'Send Message'}
                        </button>
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
