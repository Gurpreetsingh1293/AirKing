import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function DeveloperPage() {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <div className={styles.profileImageContainer}>
                    <Image
                        src="/images/developer.png"
                        alt="Developer"
                        width={150}
                        height={150}
                        className={styles.profileImage}
                        priority
                    />
                </div>

                <h1 className={styles.name}>System Admin</h1>
                <p className={styles.role}>Full Stack Developer & Architect</p>

                <div className={styles.bio}>
                    <p>// Building digital experiences</p>
                    <p>const skills = ['React', 'Next.js', 'Node.js', 'Cybersecurity'];</p>
                    <p>if (coffee) code();</p>
                </div>

                <Link
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialbtn}
                >
                    Connect on LinkedIn
                </Link>
            </div>
        </div>
    );
}
