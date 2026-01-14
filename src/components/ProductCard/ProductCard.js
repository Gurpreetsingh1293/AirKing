import Image from 'next/image';
import Link from 'next/link';
import styles from './ProductCard.module.css';

const ProductCard = ({ product }) => {
    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: 'contain' }}
                    className={styles.image}
                />
            </div>
            <div className={styles.content}>
                <h3 className={styles.title}>{product.name}</h3>
                <p className={styles.description}>{product.description}</p>

                {product.specs && (
                    <ul className={styles.specs}>
                        {Object.entries(product.specs).map(([key, value]) => (
                            <li key={key}>
                                <span className={styles.specLabel}>{key}:</span>
                                <span className={styles.specValue}>{value}</span>
                            </li>
                        ))}
                    </ul>
                )}

                <Link href={`/contact?product=${encodeURIComponent(product.name)}`} className={styles.button}>
                    Request Quote
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
