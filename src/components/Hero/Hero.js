import Image from 'next/image';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.imageWrapper}>
                <Image
                    src="/images/hero.png"
                    alt="Industrial Air Compressor"
                    fill
                    priority
                    style={{ objectFit: 'cover' }}
                    quality={100}
                />
                <div className={styles.overlay}></div>
            </div>

            <div className={`container ${styles.contentContainer}`}>
                <div className={styles.content}>
                    <span className={styles.badge}>Trusted Industrial Partner</span>
                    <h1 className={styles.title}>
                        Your Global Partner for <br />
                        <span className={styles.highlight}>Air & Oxygen Solutions</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Premium pneumatic air compressors, oxygen plants, and genuine spare parts.
                        Delivering industrial excellence and reliability for over 20 years.
                    </p>
                    <div className={styles.actions}>
                        <Link href="/contact" className="btn btn-primary">
                            Speak to Solutions Lead
                        </Link>
                        <Link href="/products" className="btn btn-outline">
                            See Our Products
                        </Link>
                    </div>
                </div>
            </div>

            {/* Creative Floating Explore Products Button */}
            <Link href="/products" className={styles.exploreBtn}>
                <div className={styles.exploreBtnInner}>
                    <div className={styles.exploreBtnIcon}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </div>
                    <span className={styles.exploreBtnText}>Explore Products</span>
                </div>
                <div className={styles.exploreBtnGlow}></div>
            </Link>

            <div className={styles.scrollIndicator}>
                <span>Scroll to explore</span>
                <div className={styles.scrollArrow}></div>
            </div>
        </section>
    );
};

export default Hero;

