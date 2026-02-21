import Link from 'next/link';
import styles from './page.module.css';

export default function AboutPage() {
    return (
        <div className={styles.pageContainer}>
            {/* Dark Header */}
            <header className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>About Air King</h1>
                    <p className={styles.subtitle}>
                        Dedicated to industrial excellence and reliable service since 2004.
                    </p>
                </div>
            </header>

            {/* Main Content */}
            <section className={styles.contentSection}>
                <div className="container">
                    <div className={styles.grid}>
                        <div className={styles.textContent}>
                            <h2>Our Story</h2>
                            <p>
                                Founded in 2004, Air King has grown to become a leading provider of premium pneumatic air compressors, oxygen plants, and genuine spare parts. Based in Indore, Madhya Pradesh, we have built our reputation on delivering uncompromising quality, robust industrial solutions, and exceptional after-sales support.
                            </p>
                            <p>
                                At Air King, we understand that compressed air is the vital lifeblood of modern manufacturing and industrial facilities. That's why we partner with industry leaders and offer a comprehensive range of equipment designed to maximize efficiency, reduce downtime, and lower operational costs.
                            </p>

                            <h2>Our Mission</h2>
                            <p>
                                To empower industries with reliable, energy-efficient compressed air and gas solutions, backed by expert technical support and a commitment to long-term customer success.
                            </p>

                            <h2>Why Choose Us?</h2>
                            <ul>
                                <li><strong>Decades of Experience:</strong> Over 20 years of expertise in pneumatic systems.</li>
                                <li><strong>Comprehensive Solutions:</strong> From consultation and sales to installation and maintenance.</li>
                                <li><strong>Genuine Spares:</strong> Ensuring the longevity and performance of your equipment.</li>
                                <li><strong>Dedicated Support:</strong> Expert technicians ready to assist when you need them most.</li>
                            </ul>
                        </div>

                        <div className={styles.imageContent}>
                            <div className={styles.placeholderImage}>
                                <span>Air King Facility / Team Photo</span>
                            </div>
                            <div className={styles.contactCard}>
                                <h3>Get in Touch</h3>
                                <p>Ready to upgrade your industrial air systems?</p>
                                <Link href="/contact" className="btn btn-primary">
                                    Contact Our Experts
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
