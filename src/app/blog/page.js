import Link from 'next/link';
import styles from './page.module.css';

const blogPosts = [
    {
        id: 1,
        slug: 'how-to-choose-right-air-compressor',
        title: 'How to Choose the Right Air Compressor for Your Industry',
        excerpt: 'Selecting the perfect air compressor depends on your specific needs. Learn about CFM requirements, tank size, and pressure ratings to make an informed decision.',
        category: 'Buying Guide',
        date: 'Jan 28, 2026',
        readTime: '5 min read',
        icon: '🔧'
    },
    {
        id: 2,
        slug: 'air-compressor-maintenance-tips',
        title: '10 Essential Air Compressor Maintenance Tips',
        excerpt: 'Regular maintenance extends the life of your compressor and ensures peak performance. Follow these expert tips to keep your equipment running smoothly.',
        category: 'Maintenance',
        date: 'Jan 25, 2026',
        readTime: '7 min read',
        icon: '🛠️'
    },
    {
        id: 3,
        slug: 'understanding-psa-oxygen-plants',
        title: 'Understanding PSA Oxygen Generation Technology',
        excerpt: 'Learn how Pressure Swing Adsorption (PSA) technology works to produce medical and industrial grade oxygen on-site, reducing costs and ensuring supply.',
        category: 'Technology',
        date: 'Jan 20, 2026',
        readTime: '6 min read',
        icon: '⚗️'
    },
    {
        id: 4,
        slug: 'common-compressor-problems-solutions',
        title: 'Common Air Compressor Problems & How to Fix Them',
        excerpt: 'From oil leaks to overheating, we cover the most common compressor issues and provide step-by-step troubleshooting solutions.',
        category: 'Troubleshooting',
        date: 'Jan 15, 2026',
        readTime: '8 min read',
        icon: '🔍'
    },
    {
        id: 5,
        slug: 'energy-efficiency-compressed-air',
        title: 'Maximizing Energy Efficiency in Compressed Air Systems',
        excerpt: 'Compressed air can account for 30% of industrial energy costs. Discover strategies to reduce energy consumption and lower operational expenses.',
        category: 'Energy Savings',
        date: 'Jan 10, 2026',
        readTime: '6 min read',
        icon: '⚡'
    },
    {
        id: 6,
        slug: 'genuine-vs-aftermarket-spares',
        title: 'Genuine vs Aftermarket Spare Parts: What You Need to Know',
        excerpt: 'Is it worth paying more for genuine spare parts? We break down the pros and cons to help you make the right choice for your equipment.',
        category: 'Spares',
        date: 'Jan 5, 2026',
        readTime: '4 min read',
        icon: '⚙️'
    }
];

const featuredPost = {
    title: 'The Complete Guide to Industrial Air Compressor Selection',
    excerpt: 'Whether you\'re setting up a new manufacturing facility or upgrading existing equipment, choosing the right air compressor is crucial. This comprehensive guide covers everything from understanding CFM and PSI requirements to evaluating energy efficiency ratings and maintenance considerations.',
    category: 'Featured Guide',
    date: 'Jan 30, 2026',
    readTime: '12 min read'
};

export default function BlogPage() {
    return (
        <div className={styles.pageContainer}>
            {/* Dark Header */}
            <header className={styles.header}>
                <div className="container">
                    <h1 className={styles.title}>Knowledge Hub</h1>
                    <p className={styles.subtitle}>
                        Expert insights, maintenance guides, and industry news to help you get the most from your compressed air systems.
                    </p>
                </div>
            </header>

            {/* Featured Article */}
            <section className={styles.featuredSection}>
                <div className="container">
                    <div className={styles.featuredCard}>
                        <div className={styles.featuredContent}>
                            <span className={styles.featuredBadge}>{featuredPost.category}</span>
                            <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
                            <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
                            <Link href="/blog/complete-guide-air-compressor" className="btn btn-primary">
                                Read Full Guide →
                            </Link>
                        </div>
                        <div className={styles.featuredImage}>
                            <span className={styles.featuredIcon}>📘</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Blog Grid */}
            <section className={styles.blogSection}>
                <div className="container">
                    <div className={styles.blogGrid}>
                        {blogPosts.map(post => (
                            <article key={post.id} className={styles.blogCard}>
                                <div className={styles.cardImage}>
                                    <span className={styles.category}>{post.category}</span>
                                    <span className={styles.cardIcon}>{post.icon}</span>
                                </div>
                                <div className={styles.cardContent}>
                                    <div className={styles.cardMeta}>
                                        <span>{post.date}</span>
                                        <span>•</span>
                                        <span>{post.readTime}</span>
                                    </div>
                                    <h3 className={styles.cardTitle}>
                                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                                    </h3>
                                    <p className={styles.cardExcerpt}>{post.excerpt}</p>
                                    <Link href={`/blog/${post.slug}`} className={styles.readMore}>
                                        Read More <span>→</span>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter */}
            <section className={styles.newsletter}>
                <div className="container">
                    <h2>Stay Updated</h2>
                    <p>Get the latest maintenance tips and industry insights delivered to your inbox.</p>
                    <form className={styles.newsletterForm}>
                        <input type="email" placeholder="Enter your email" />
                        <button type="button">Subscribe</button>
                    </form>
                </div>
            </section>
        </div>
    );
}
