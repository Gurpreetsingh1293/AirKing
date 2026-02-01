import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function OxygenPlantsPage() {
    return (
        <div className={styles.pageContainer}>
            {/* Hero Section */}
            <section className={styles.hero}>
                <div className="container">
                    <div className={styles.heroContent}>
                        <span className={styles.badge}>Advanced Technology</span>
                        <h1 className={styles.title}>Industrial Oxygen Plants</h1>
                        <p className={styles.subtitle}>
                            Advanced PSA (Pressure Swing Adsorption) technology for on-site oxygen generation.
                            Reliable, cost-effective, and safe solutions for medical and industrial applications.
                        </p>
                        <Link href="/contact" className="btn btn-primary">
                            Get a Quote
                        </Link>
                    </div>
                </div>
                <div className={styles.heroImage}>
                    <Image
                        src="/images/oxygen-plant.png"
                        alt="Oxygen Plant"
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </div>
            </section>

            {/* Features Section */}
            <section className="container section-padding">
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>⚙️</div>
                        <h3>How It Works</h3>
                        <p>Our PSA Oxygen Gas Generators separate oxygen from compressed air using Pressure Swing Adsorption technology. This provides a continuous supply of high-purity oxygen at a fraction of the cost of liquid oxygen.</p>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>✨</div>
                        <h3>Key Benefits</h3>
                        <ul>
                            <li>Fully Automated Operation</li>
                            <li>Low Operating Cost</li>
                            <li>High Purity (up to 95%)</li>
                            <li>Compact Design</li>
                        </ul>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>🏭</div>
                        <h3>Applications</h3>
                        <ul>
                            <li>Medical Hospitals</li>
                            <li>Metal Cutting & Fabrication</li>
                            <li>Fish Farming</li>
                            <li>Glass Industry</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <div className={styles.ctaContent}>
                        <h2>Need an Oxygen Generation Solution?</h2>
                        <p>Contact our experts for customized oxygen plant solutions tailored to your requirements.</p>
                        <Link href="/contact" className="btn btn-dark">
                            Speak to an Expert
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
