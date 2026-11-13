'use client'

import Link from "next/link";
import styles from "./header.module.css";
import { usePathname } from "next/navigation";
import Image from "next/image";
import GithubLink from "./github-link";

export default function Header() {

  const path = usePathname();

  return (
    <header className={styles.header}>
      <nav
        className={styles.nav}
        aria-label="Hlavní navigace"
      >
        <div className={styles.leftLinks}>
          <Link
            href="/"
            className={styles.homeLink}
            aria-label="Domů"
          >
            <span className={styles.homeIcon} aria-hidden="true">
              🏠︎
            </span>
          </Link>
          <GithubLink />
        </div>

        <div className={styles.navLinks}>
          <Link href="/games" className={`
            ${styles.navLink}
            ${path === "/games" || path.startsWith("/games/") ? styles.active : ""}
            `}>
            Hry
          </Link>
          <Link href="/about" className={`
            ${styles.navLink}
            ${path === '/about' ? styles.active : undefined}
            `}>
            O mně
          </Link>

        </div>
      </nav>
    </header>
  );
}
