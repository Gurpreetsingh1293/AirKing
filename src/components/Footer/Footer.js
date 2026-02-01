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
                        <div className={styles.socialLinks}>
                            <a href="#" aria-label="LinkedIn" className={styles.socialLink}>
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Twitter" className={styles.socialLink}>
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.46 6c-.85.38-1.78.64-2.75.76 1-.6 1.76-1.55 2.12-2.68-.93.55-1.96.95-3.06 1.17-.88-.94-2.13-1.53-3.51-1.53-2.66 0-4.81 2.16-4.81 4.81 0 .38.04.75.13 1.1-4-.2-7.58-2.11-9.96-5.02-.42.72-.66 1.56-.66 2.46 0 1.68.85 3.16 2.14 4.02-.79-.02-1.53-.24-2.18-.6v.06c0 2.35 1.67 4.31 3.88 4.76-.4.1-.83.16-1.27.16-.31 0-.62-.03-.92-.08.63 1.96 2.45 3.39 4.61 3.43-1.69 1.32-3.83 2.1-6.15 2.1-.4 0-.8-.02-1.19-.07 2.19 1.4 4.78 2.22 7.57 2.22 9.07 0 14.02-7.52 14.02-14.02 0-.21 0-.43-.01-.64.96-.69 1.79-1.56 2.45-2.55z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Facebook" className={styles.socialLink}>
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06c0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.52 1.49-3.92 3.78-3.92 1.09 0 2.23.2 2.23.2v2.46H15.2c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z" />
                                </svg>
                            </a>
                        </div>
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
                            <li><Link href="/developer">Developer</Link></li>
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h4>Contact</h4>
                        <p className={styles.contactInfo}>
                            <span className={styles.contactIcon}>📍</span>
                            123 Industrial Area, Sector 5<br />Indore, Madhya Pradesh
                        </p>
                        <p className={styles.contactInfo}>
                            <span className={styles.contactIcon}>📞</span>
                            +91 98765 43210
                        </p>
                        <p className={styles.contactInfo}>
                            <span className={styles.contactIcon}>✉️</span>
                            sales@airking.com
                        </p>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>© {new Date().getFullYear()} Air King. All rights reserved.</p>
                    <div className={styles.bottomLinks}>
                        <Link href="#">Privacy Policy</Link>
                        <Link href="#">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
