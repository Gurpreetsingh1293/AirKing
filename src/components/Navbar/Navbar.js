import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/images/logo.jpg"
              alt="Air King Logo"
              width={50}
              height={50}
              className={styles.logoImage}
            />
            <span className={styles.brandName}>AIR KING</span>
          </Link>
        </div>

        <ul className={styles.navLinks}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/services">Services & Spares</Link></li>
          <li><Link href="/oxygen-plants">Oxygen Plants</Link></li>
          <li><Link href="/contact" className={styles.contactBtn}>Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
