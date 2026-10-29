
import Link from "next/link";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav
        className={styles.nav}
        aria-label="Hlavní navigace"
      >
        <Link
          href="/"
          className={styles.homeLink}
          aria-label="Domů"
        >
          <span className={styles.homeIcon} aria-hidden="true">
            🏠︎
          </span>
        </Link>

        <div className={styles.navLinks}>
          <Link href="/games" className={styles.navLink}>
            Hry
          </Link>
          <Link href="/about" className={styles.navLink}>
            O mně
          </Link>

        </div>
      </nav>
    </header>
  );
}
