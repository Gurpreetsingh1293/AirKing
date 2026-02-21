import { use } from 'react';
import Link from 'next/link';
import styles from './post.module.css';

// We duplicate the basic data here for the static demo to work without a database
const blogPosts = [
    {
        id: 1,
        slug: 'how-to-choose-right-air-compressor',
        title: 'How to Choose the Right Air Compressor for Your Industry',
        content: 'Selecting the perfect air compressor depends on your specific needs. When choosing an air compressor for your industrial application, consider the CFM (Cubic Feet per Minute) required by all your tools running simultaneously. You also need to look at PSI (Pounds per Square Inch) requirements. For heavy industrial use, rotary screw compressors are usually the best choice due to their 100% duty cycle, whereas reciprocating compressors might be adequate for smaller, intermittent jobs. Always consult with a pneumatic expert before making a major capital investment.',
        category: 'Buying Guide',
        date: 'Jan 28, 2026',
        readTime: '5 min read',
        icon: '🔧'
    },
    {
        id: 2,
        slug: 'air-compressor-maintenance-tips',
        title: '10 Essential Air Compressor Maintenance Tips',
        content: 'Regular maintenance extends the life of your compressor and ensures peak performance. Start by reading the manual for your specific model. The most critical tasks include draining moisture from the receiver tanks daily, checking and changing the oil on schedule, and regularly cleaning or replacing intake filters. A blocked air filter makes your compressor work harder, consuming more energy and running hotter. Remember to check hoses periodically for leaks, as a small hiss can cost hundreds of dollars in wasted electricity over a year.',
        category: 'Maintenance',
        date: 'Jan 25, 2026',
        readTime: '7 min read',
        icon: '🛠️'
    },
    {
        id: 3,
        slug: 'understanding-psa-oxygen-plants',
        title: 'Understanding PSA Oxygen Generation Technology',
        content: 'Learn how Pressure Swing Adsorption (PSA) technology works to produce medical and industrial grade oxygen on-site. PSA works by passing compressed air through a vessel containing Zeolite Molecular Sieve (ZMS). The ZMS adsorbs nitrogen under high pressure, allowing oxygen to pass through as the product gas. When the vessel is depressurized, it releases the trapped nitrogen. By using two vessels in alternating cycles, a continuous flow of high-purity oxygen is generated. This on-site generation eliminates the need for delivered cylinders, drastically reducing costs and logistical headaches.',
        category: 'Technology',
        date: 'Jan 20, 2026',
        readTime: '6 min read',
        icon: '⚗️'
    },
    {
        id: 4,
        slug: 'common-compressor-problems-solutions',
        title: 'Common Air Compressor Problems & How to Fix Them',
        content: 'From oil leaks to overheating, we cover the most common compressor issues. If your compressor won\'t start, check the obvious first: power supply, pressure switch settings, and oil levels. Overheating is another common issue, usually caused by poor ventilation around the unit, a dirty oil cooler, or restricted air intake. If the compressor is running but not building pressure, you might have a blown gasket, a faulty intake valve, or worn piston rings. Always disconnect power and bleed air pressure before attempting any repairs.',
        category: 'Troubleshooting',
        date: 'Jan 15, 2026',
        readTime: '8 min read',
        icon: '🔍'
    },
    {
        id: 5,
        slug: 'energy-efficiency-compressed-air',
        title: 'Maximizing Energy Efficiency in Compressed Air Systems',
        content: 'Compressed air can account for 30% of industrial energy costs. Discover strategies to reduce energy consumption. The first step is fixing leaks; an unmaintained plant can lose 20-30% of its compressed air to leaks alone. Second, lower your operating pressure. Every 2 PSIG reduction can save 1% on energy costs. Finally, consider installing a Variable Speed Drive (VSD) compressor if your demand fluctuates throughout the day. A VSD matches motor speed to air demand, preventing the massive energy waste associated with a fixed-speed compressor running idle.',
        category: 'Energy Savings',
        date: 'Jan 10, 2026',
        readTime: '6 min read',
        icon: '⚡'
    },
    {
        id: 6,
        slug: 'genuine-vs-aftermarket-spares',
        title: 'Genuine vs Aftermarket Spare Parts: What You Need to Know',
        content: 'Is it worth paying more for genuine spare parts? While aftermarket parts offer a tempting initial discount, they often end up costing more in the long run. Genuine parts are manufactured to exact tolerances for your specific machine, ensuring optimal performance and efficiency. Non-genuine oil filters, for example, may allow fine particulates to pass through, causing premature wear on air ends. Furthermore, using aftermarket parts will almost always void your manufacturer\'s warranty. Protect your investment by insisting on OEM spares.',
        category: 'Spares',
        date: 'Jan 5, 2026',
        readTime: '4 min read',
        icon: '⚙️'
    },
    {
        id: 'complete-guide-air-compressor',
        slug: 'complete-guide-air-compressor',
        title: 'The Complete Guide to Industrial Air Compressor Selection',
        content: 'Whether you\'re setting up a new manufacturing facility or upgrading existing equipment, choosing the right air compressor is crucial. This comprehensive guide covers everything from understanding CFM and PSI requirements to evaluating energy efficiency ratings and maintenance considerations. An undersized compressor will constantly bottleneck your production, while an oversized one wastes massive amounts of electricity. Work with an experienced air auditor who can measure your actual consumption profile over a week before recommending a specific technology type (reciprocating, rotary screw, or centrifugal) and size.',
        category: 'Featured Guide',
        date: 'Jan 30, 2026',
        readTime: '12 min read',
        icon: '📘'
    }
];

export default function BlogPost({ params }) {
    const unwrappedParams = use(params);
    const post = blogPosts.find(p => p.slug === unwrappedParams.slug);

    if (!post) {
        return (
            <div className={styles.container}>
                <div className={styles.notFound}>
                    <h1>Article Not Found</h1>
                    <p>The post you are looking for does not exist or has been moved.</p>
                    <Link href="/blog" className="btn btn-primary">Return to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <article className={styles.article}>
            <header className={styles.header}>
                <div className="container">
                    <Link href="/blog" className={styles.backLink}>← Back to all articles</Link>
                    <div className={styles.meta}>
                        <span className={styles.category}>{post.category}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                    </div>
                    <h1 className={styles.title}>{post.title}</h1>
                </div>
            </header>

            <div className="container">
                <div className={styles.content}>
                    <div className={styles.iconWrapper}>{post.icon}</div>
                    <div className={styles.textContent}>
                        <p>{post.content}</p>
                    </div>
                </div>

                {/* Simulated Article Layout (Call to Action) */}
                <div className={styles.ctaCard}>
                    <h3>Need specific advice for your setup?</h3>
                    <p>Our pneumatic experts are ready to help you optimize your air systems.</p>
                    <Link href="/contact" className="btn btn-primary">Contact Us Today</Link>
                </div>
            </div>
        </article>
    );
}
