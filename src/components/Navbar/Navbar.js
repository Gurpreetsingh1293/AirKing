'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logoLink} onClick={closeMobileMenu}>
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

        {/* Desktop Navigation */}
        <ul className={styles.navLinks}>
          <li><Link href="/" className={pathname === '/' ? styles.active : ''}>Home</Link></li>
          <li><Link href="/products" className={pathname === '/products' ? styles.active : ''}>Products</Link></li>
          <li><Link href="/services" className={pathname === '/services' ? styles.active : ''}>Services & Spares</Link></li>
          <li><Link href="/oxygen-plants" className={pathname === '/oxygen-plants' ? styles.active : ''}>Oxygen Plants</Link></li>
          <li><Link href="/blog" className={pathname.startsWith('/blog') ? styles.active : ''}>Blog</Link></li>
          <li><Link href="/contact" className={styles.contactBtn}>Contact Us</Link></li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`${styles.hamburger} ${isMobileMenuOpen ? styles.active : ''}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        {/* Mobile Navigation */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ''}`}>
          <ul className={styles.mobileNavLinks}>
            <li><Link href="/" onClick={closeMobileMenu} className={pathname === '/' ? styles.activeMobile : ''}>Home</Link></li>
            <li><Link href="/products" onClick={closeMobileMenu} className={pathname === '/products' ? styles.activeMobile : ''}>Products</Link></li>
            <li><Link href="/services" onClick={closeMobileMenu} className={pathname === '/services' ? styles.activeMobile : ''}>Services & Spares</Link></li>
            <li><Link href="/oxygen-plants" onClick={closeMobileMenu} className={pathname === '/oxygen-plants' ? styles.activeMobile : ''}>Oxygen Plants</Link></li>
            <li><Link href="/blog" onClick={closeMobileMenu} className={pathname.startsWith('/blog') ? styles.activeMobile : ''}>Blog</Link></li>
            <li><Link href="/contact" onClick={closeMobileMenu} className={styles.mobileContactBtn}>Contact Us</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
