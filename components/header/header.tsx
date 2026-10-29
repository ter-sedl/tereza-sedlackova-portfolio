'use client'

import Link from "next/link";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";

export default function Header() {

const path = usePathname();

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
          <Link href="/games" className={`
            ${styles.navLink}
            ${path ==='/games' ? styles.active : undefined}
            `}>
            Hry
          </Link>
          <Link href="/about" className={`
            ${styles.navLink}
            ${path ==='/about' ? styles.active : undefined}
            `}>
            O mně
          </Link>

        </div>
      </nav>
      <p>{path}</p>
    </header>
  );
}
