import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function ServicesPage() {
    return (
        <div className={styles.pageContainer}>
            {/* Dark Header */}
            <header className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>Services & Genuine Spares</h1>
                    <p className={styles.subtitle}>
                        Keeping your air systems running at peak efficiency with expert maintenance and authentic parts.
                    </p>
                </div>
            </header>

            {/* Stats Section */}
            <div className="container">
                <div className={styles.statsGrid}>
                    <div className={styles.statCard}>
                        <span className={styles.statNumber}>24/7</span>
                        <span className={styles.statLabel}>Service Support</span>
                    </div>
                    <div className={styles.statCard}>
                        <span className={styles.statNumber}>100%</span>
                        <span className={styles.statLabel}>Genuine Parts</span>
                    </div>
                    <div className={styles.statCard}>
                        <span className={styles.statNumber}>4hr</span>
                        <span className={styles.statLabel}>Response Time</span>
                    </div>
                </div>
            </div>

            {/* Genuine Spare Parts Section */}
            <section className={styles.section}>
                <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '80px' }}>
                    <div className={styles.content}>
                        <h2>Genuine Spare Parts</h2>
                        <p>
                            We stock a comprehensive inventory of genuine spare parts for pneumatic air compressors.
                            Using genuine parts ensures longevity and reliability of your equipment.
                        </p>
                        <ul className={styles.list}>
                            <li>Air Filters & Oil Filters</li>
                            <li>Separator Elements</li>
                            <li>Valves & Repair Kits</li>
                            <li>Compressor Oil & Lubricants</li>
                        </ul>
                        <Link href="/contact" className="btn btn-primary">
                            Order Spares
                        </Link>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/spares.png"
                            alt="Genuine Spare Parts"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </section>

            {/* Service & Maintenance Section */}
            <section className={`${styles.section} ${styles.alternate} ${styles.reverse}`}>
                <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '80px', flexDirection: 'row-reverse' }}>
                    <div className={styles.content}>
                        <h2>Service & Maintenance</h2>
                        <p>
                            Our team of expert technicians is available for routine maintenance and emergency repairs.
                            We offer annual maintenance contracts (AMC) to ensure hassle-free operations.
                        </p>
                        <ul className={styles.list}>
                            <li>24/7 Breakdown Support</li>
                            <li>Preventive Maintenance</li>
                            <li>Air Audit Services</li>
                            <li>Complete Overhauling</li>
                        </ul>
                        <Link href="/contact" className="btn btn-primary">
                            Book Service
                        </Link>
                    </div>
                    <div className={styles.serviceBox}>
                        <span className={styles.serviceIcon}>🛠️</span>
                        <h3>Expert Team</h3>
                        <p>Factory trained engineers ready to serve across India.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
