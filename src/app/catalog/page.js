import Link from 'next/link';
import styles from './page.module.css';

const catalogCategories = [
    { icon: '🔧', title: 'Air Compressors', count: '15+ Models' },
    { icon: '⚗️', title: 'Oxygen Plant Spares', count: '50+ Parts' },
    { icon: '🔩', title: 'Valves & Fittings', count: '30+ Types' },
    { icon: '⚙️', title: 'Compressor Spares', count: '100+ Items' },
    { icon: '🛢️', title: 'Pumps', count: '10+ Models' },
    { icon: '🧰', title: 'Accessories', count: '40+ Products' },
];

export default function CatalogPage() {
    return (
        <div className={styles.catalogPage}>
            {/* Header with Download Button */}
            <header className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>Product Catalog</h1>
                    <p className={styles.subtitle}>
                        Download our complete product catalog featuring air compressors, oxygen plant components, and genuine spare parts.
                    </p>
                    <a
                        href="/Air-King-Catalog.pdf"
                        download="Air-King-Catalog.pdf"
                        className={styles.downloadBtn}
                    >
                        <span className={styles.downloadIcon}>📥</span>
                        Download PDF Catalog
                    </a>
                </div>
            </header>

            {/* Catalog Preview */}
            <section className={styles.previewSection}>
                <div className="container">
                    <h2 className={styles.sectionTitle}>What's Inside the Catalog</h2>
                    <div className={styles.catalogGrid}>
                        {catalogCategories.map((cat, index) => (
                            <div key={index} className={styles.catalogCard}>
                                <div className={styles.catalogIcon}>{cat.icon}</div>
                                <h3>{cat.title}</h3>
                                <p>{cat.count}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className={styles.infoSection}>
                <div className="container">
                    <div className={styles.infoGrid}>
                        <div className={styles.infoItem}>
                            <h4>📋 Complete Specifications</h4>
                            <p>Detailed technical specifications for every product</p>
                        </div>
                        <div className={styles.infoItem}>
                            <h4>💰 Competitive Pricing</h4>
                            <p>Contact us for the best prices on bulk orders</p>
                        </div>
                        <div className={styles.infoItem}>
                            <h4>🚚 Pan-India Delivery</h4>
                            <p>We deliver to all major cities across India</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className={styles.ctaSection}>
                <div className="container">
                    <h2>Need a Custom Quote?</h2>
                    <p>Contact our sales team for personalized pricing and bulk discounts.</p>
                    <Link href="/contact" className="btn btn-dark">
                        Request Quote
                    </Link>
                </div>
            </section>
        </div>
    );
}
