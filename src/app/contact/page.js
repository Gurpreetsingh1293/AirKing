'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from './page.module.css';

function ContactFormContent() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });
    const searchParams = useSearchParams();
    const [status, setStatus] = useState('');

    useEffect(() => {
        const product = searchParams.get('product');
        if (product) {
            setFormData(prev => ({
                ...prev,
                message: `I would like to request a quote for: ${product}`
            }));
        }
    }, [searchParams]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: 'beb5a22d-6a89-4144-9d95-e8dfe8b62309', // Replace with your Web3Forms access key
                    subject: 'New Contact Form Submission - Air King',
                    from_name: 'Air King Website',
                    ...formData
                })
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', phone: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <div className={styles.pageContainer}>
            {/* Dark Header */}
            <header className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>Contact Us</h1>
                    <p className={styles.subtitle}>Get in touch for quotes, service inquiries, or technical support.</p>
                </div>
            </header>

            {/* Contact Content */}
            <section className={styles.contentSection}>
                <div className="container">
                    <div className={styles.grid}>
                        {/* Contact Info Cards */}
                        <div className={styles.contactInfo}>
                            <div className={styles.infoBlock}>
                                <div className={styles.infoIcon}>📍</div>
                                <h3>Visit Us</h3>
                                <p>1293 Station Road Rau<br />Indore, Madhya Pradesh</p>
                            </div>
                            <div className={styles.infoBlock}>
                                <div className={styles.infoIcon}>📞</div>
                                <h3>Call Us</h3>
                                <p>
                                    <a href="tel:+919826313663">+91 9826313663</a><br />
                                    <a href="tel:+919826528961">+91 9826528961</a>
                                </p>
                            </div>
                            <div className={styles.infoBlock}>
                                <div className={styles.infoIcon}>✉️</div>
                                <h3>Email</h3>
                                <p>
                                    <a href="mailto:air.king@yahoo.co.in">air.king@yahoo.co.in</a>
                                </p>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className={styles.formWrapper}>
                            <h2>Send us a Message</h2>

                            {status === 'success' && (
                                <div className={styles.successMessage}>
                                    ✅ Thank you! Your message has been sent successfully. We'll get back to you soon.
                                </div>
                            )}

                            {status === 'error' && (
                                <div className={styles.errorMessage}>
                                    ❌ Something went wrong. Please try again or email us directly.
                                </div>
                            )}

                            <form onSubmit={handleSubmit}>
                                <div className={styles.formRow}>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="name">Your Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="email">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="john@company.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="phone">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        placeholder="+91 98765 43210"
                                        value={formData.phone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={styles.formGroup}>
                                    <label htmlFor="message">Message / Requirement *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        placeholder="Tell us about your requirements..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="btn btn-primary"
                                    style={{ width: '100%' }}
                                    disabled={status === 'sending'}
                                >
                                    {status === 'sending' ? 'Sending...' : 'Send Message'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default function ContactPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ContactFormContent />
        </Suspense>
    );
}
