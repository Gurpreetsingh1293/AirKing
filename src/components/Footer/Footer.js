import Link from 'next/link';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.grid}>
                    <div className={styles.col}>
                        <h3 className={styles.brand}>AIR KING</h3>
                        <p className={styles.desc}>
                            Premium pneumatic air compressors, oxygen plants, and genuine spares.
                            Dedicated to industrial excellence and reliable service.
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
                        </ul>
                    </div>

                    <div className={styles.col}>
                        <h4>Contact</h4>
                        <p>123 Industrial Area</p>
                        <p>Phone: +91 98765 43210</p>
                        <p>Email: sales@airking.com</p>
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
