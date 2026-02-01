import Hero from "@/components/Hero/Hero";
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className="page-wrapper">
      <Hero />

      {/* Statistics Section */}
      <section className={`${styles.statsSection} section-padding`}>
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>20+</span>
              <span className={styles.statLabel}>Years of Excellence</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Installations</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>50+</span>
              <span className={styles.statLabel}>SKUs Available</span>
            </div>
            <div className={styles.statCard}>
              <span className={styles.statNumber}>24/7</span>
              <span className={styles.statLabel}>Service Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies Section */}
      <section className={`${styles.competenciesSection} section-padding section-gray`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2>Our Core Competencies</h2>
            <p>Comprehensive solutions for all your industrial air and oxygen needs</p>
          </div>
          <div className={styles.competenciesGrid}>
            <div className={styles.competencyCard}>
              <div className={styles.competencyIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                  <circle cx="12" cy="12" r="4" />
                </svg>
              </div>
              <h3>Pneumatic Compressors</h3>
              <p>High-efficiency air compressors designed for demanding industrial applications with superior reliability.</p>
              <Link href="/products" className={styles.competencyLink}>Explore Products →</Link>
            </div>
            <div className={styles.competencyCard}>
              <div className={styles.competencyIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <h3>Oxygen Plants</h3>
              <p>Advanced PSA technology for on-site oxygen generation. Reliable solutions for medical and industrial use.</p>
              <Link href="/oxygen-plants" className={styles.competencyLink}>Learn More →</Link>
            </div>
            <div className={styles.competencyCard}>
              <div className={styles.competencyIcon}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <h3>Service & Spares</h3>
              <p>Genuine parts and expert maintenance services. 24/7 support to keep your operations running smoothly.</p>
              <Link href="/services" className={styles.competencyLink}>View Services →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className={`${styles.whySection} section-padding`}>
        <div className="container">
          <div className={styles.whyGrid}>
            <div className={styles.whyContent}>
              <h2>Why Choose Air King?</h2>
              <p className={styles.whyIntro}>Trusted by industries across India for premium quality and reliable service.</p>

              <div className={styles.whyList}>
                <div className={styles.whyItem}>
                  <span className={styles.whyNumber}>01</span>
                  <div>
                    <h4>Industry Expertise</h4>
                    <p>Over 20 years of experience in air compression and oxygen generation technology.</p>
                  </div>
                </div>
                <div className={styles.whyItem}>
                  <span className={styles.whyNumber}>02</span>
                  <div>
                    <h4>Quality Assurance</h4>
                    <p>All products meet international standards with rigorous quality testing.</p>
                  </div>
                </div>
                <div className={styles.whyItem}>
                  <span className={styles.whyNumber}>03</span>
                  <div>
                    <h4>Pan-India Service</h4>
                    <p>Nationwide service network with rapid response times and genuine spare parts.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.whyImage}>
              <div className={styles.whyImagePlaceholder}>
                <span>🏭</span>
                <p>Industrial Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`${styles.ctaSection} section-padding section-dark`}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Ready to Power Your Operations?</h2>
            <p>Get in touch with our solutions team for customized industrial air and oxygen solutions.</p>
            <div className={styles.ctaButtons}>
              <Link href="/contact" className="btn btn-primary">
                Speak to Solutions Lead
              </Link>
              <Link href="/products" className="btn btn-outline">
                Browse Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
