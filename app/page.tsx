// /app/page.tsx
import styles from './page.module.css';
import Image from 'next/image';
import { FaDiscord } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className={styles.container}>
      {/* Background stele */}
      <div className={styles.stars}></div>
      
      {/* Logo sus */}
      <div className={styles.logo}>
        <Image src="/logo.png" alt="Logo" width={150} height={150} />
      </div>

      {/* Text central */}
      <h1 className={styles.comingSoon}>Coming Soon..</h1>

      {/* Icon Discord jos */}
      <a
        href="https://discord.gg/TU_LINK_DISCORD"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.discord}
      >
        <FaDiscord size={40} />
      </a>
    </div>
  );
}
