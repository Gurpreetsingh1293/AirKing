import styles from './page.module.css';

export default function ContactPage() {
    return (
        <div className={styles.pageContainer}>
            <header className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>Contact Us</h1>
                    <p className={styles.subtitle}>Get in touch for quotes, service, or support.</p>
                </div>
            </header>

            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.contactInfo}>
                        <div className={styles.infoBlock}>
                            <h3>Visit Us</h3>
                            <p>123 Industrial Area, Sector 5<br />Indore, Madhya Pradesh</p>
                        </div>
                        <div className={styles.infoBlock}>
                            <h3>Call Us</h3>
                            <p>+91 98765 43210<br />+91 12345 67890</p>
                        </div>
                        <div className={styles.infoBlock}>
                            <h3>Email</h3>
                            <p>sales@airking.com<br />support@airking.com</p>
                        </div>
                    </div>

                    <div className={styles.formWrapper}>
                        <h2>Send Message</h2>
                        <form className={styles.form}>
                            <div className={styles.formGroup}>
                                <label>Name</label>
                                <input type="text" placeholder="Your Name" />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Email</label>
                                <input type="email" placeholder="Your Email" />
                            </div>
                            <div className={styles.formGroup}>
                                <label>Message / Requirement</label>
                                <textarea rows="5" placeholder="Tell us what you need..."></textarea>
                            </div>
                            <button type="button" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
