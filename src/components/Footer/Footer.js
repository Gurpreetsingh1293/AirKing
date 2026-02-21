import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.brandCol}>
                        <h3 className={styles.brand}>AIR KING</h3>
                        <p className={styles.desc}>
                            Premium pneumatic air compressors, oxygen plants, and genuine spares.
                            Dedicated to industrial excellence and reliable service since 2004.
                        </p>
                    </div>

                    <div className={styles.col}>
                        <h4>Products</h4>
                        <ul>
                            <li><Link href="/products">Air Compressors</Link></li>
                            <li><Link href="/oxygen-plants">Oxygen Plants</Link></li>
                            <li><Link href="/services">Spares & Accessories</Link></li>
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h4>Company</h4>
                        <ul>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/services">Service Support</Link></li>
                            <li><a href="/developer" target="_blank" rel="noopener noreferrer">Developer</a></li>
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h4>Contact</h4>
                        <div className={styles.contactInfo}>
                            <span className={styles.contactIcon}>📍</span>
                            <a
                                href="https://maps.google.com/?q=1293+Station+Road+Rau+Indore"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                1293 Station Road Rau <br />Indore, Madhya Pradesh
                            </a>
                        </div>
                        <div className={styles.contactInfo}>
                            <span className={styles.contactIcon}>📞</span>
                            <div>
                                <a href="tel:+919826313663">+91 9826313663</a>
                                <br />
                                <a href="tel:+919826528961">+91 9826528961</a>
                            </div>
                        </div>
                        <div className={styles.contactInfo}>
                            <span className={styles.contactIcon}>✉️</span>
                            <a href="mailto:air.king@yahoo.co.in">air.king@yahoo.co.in</a>
                        </div>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} Air King. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
