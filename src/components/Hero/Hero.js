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
                    <h1 className={styles.title}>
                        Powering Industries with <br />
                        <span className={styles.highlight}>Reliable Air Solutions</span>
                    </h1>
                    <p className={styles.subtitle}>
                        Your trusted partner for pneumatic air compressors, oxygen plants, and premium spare parts.
                        Delivering efficiency and durability for over 20 years.
                    </p>
                    <div className={styles.actions}>
                        <Link href="/products" className="btn btn-primary">
                            View Products
                        </Link>
                        <Link href="/contact" className="btn btn-outline">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
