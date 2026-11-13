'use client'

import Image from "next/image";
import Link from "next/link";
import styles from "./github-link.module.css"
import { usePathname } from "next/navigation";

export default function GithubLink() {

    const pathname = usePathname();

    const srcURL = (() => {
        switch (pathname) {
            case "/":
                return "https://github.com/ter-sedl/tereza-sedlackova-portfolio/blob/main/app/page.tsx";

            case "/about":
                return "https://github.com/ter-sedl/tereza-sedlackova-portfolio/blob/main/app/about/page.tsx";

            case "/games":
                return "https://github.com/ter-sedl/tereza-sedlackova-portfolio/blob/main/app/games/page.tsx";

            case "/games/pokemon-battle":
                return "https://github.com/ter-sedl/tereza-sedlackova-portfolio/tree/main/features/pokemon-battle";

            case "/games/breakout":
                return "https://github.com/ter-sedl/tereza-sedlackova-portfolio/tree/main/features/breakout";

            default:
                return "https://github.com/ter-sedl/tereza-sedlackova-portfolio";
        }
    })();

    return (
        <Link
            href={srcURL}
            className={styles.github}
            aria-label="Github"
            target="_blank"
        >
            <Image
                src="/GitHub_Invertocat_Black_Clearspace.svg"
                alt="github logo"
                width={55}
                height={55}
                loading="eager"
                className={styles.githubIcon} />
            <span className={styles.tooltip}> ? </span>
            <span className={styles.tooltipText}>Dynamický odkaz na <br /> kód aktuální stránky</span>
        </Link>
    )
}