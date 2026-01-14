import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function ServicesPage() {
    return (
        <div className={styles.pageContainer}>
            <div className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>Services & Genuine Spares</h1>
                    <p className={styles.subtitle}>Keeping your air systems running at peak efficiency.</p>
                </div>
            </div>

            <div className="container">
                <section className={styles.section}>
                    <div className={styles.content}>
                        <h2>Genuine Spare Parts</h2>
                        <p>
                            We stock a comprehensive inventory of genuine spare parts for pneumatic air compressors.
                            Using genuine parts ensures longevity and reliability of your equipment.
                        </p>
                        <ul className={styles.list}>
                            <li>Air Filters & Oil Filters</li>
                            <li>Separator Elements</li>
                            <li>Valves & Kits</li>
                            <li>Compressor Oil</li>
                        </ul>
                        <Link href="/contact" className="btn btn-primary" style={{ marginTop: '20px' }}>
                            Order Spares
                        </Link>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/images/spares.png"
                            alt="Genuine Spare Parts"
                            fill
                            style={{ objectFit: 'cover', borderRadius: '8px' }}
                        />
                    </div>
                </section>

                <section className={`${styles.section} ${styles.reverse}`}>
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
                            <li>Overhauling Services</li>
                        </ul>
                        <Link href="/contact" className="btn btn-primary" style={{ marginTop: '20px' }}>
                            Book Service
                        </Link>
                    </div>
                    <div className={styles.serviceBox}>
                        <div className={styles.serviceIcon}>🛠️</div>
                        <h3>Expert Team</h3>
                        <p>Factory trained engineers ready to serve.</p>
                    </div>
                </section>
            </div>
        </div>
    );
}
