import Link from "next/link";
import Image from "next/image";
import styles from "@/features/games-page/games.module.css"

export default function Games() {
    return (
        <div>
            <section>
                <h2 className="mb-6 text-2xl  text-[var(--color-text)]">
                    Moje projekty
                </h2>
                {/* Na malých zařízeních jsou články pod sebou,
            od breakpointu md vedle sebe. */}
                <div className="flex flex-col gap-6 md:flex-row">



                    <article className={styles.gameCard}>
                        <div className={styles.gameImageWrapper}>
                            <Image
                                src="/breakout-dark.png"
                                alt="Náhled hry Breakout"
                                width={200}
                                height={200}
                                loading="eager"
                                className={styles.gameImage}
                            />
                        </div>

                        <h2 className={styles.gameTitle}>Breakout</h2>

                        <p className={styles.gameDescription}>
                            Klasická arkádová hra vytvořená pomocí HTML Canvas.
                        </p>

                        <section className={styles.gameRules}>
                            <h3>Pravidla</h3>
                            <p>Ovládej plošinu, odrážej míček a nič všechny cihličky.</p>
                            <p>
                                Plošinu ovládáš pohybem myši v rámci canvasu nebo šipkami
                                na klávesnici.
                            </p>
                            <p>
                                Hra končí výhrou při rozbití všech cihel nebo prohrou,
                                pokud míček spadne mimo plošinu.
                            </p>
                        </section>

                        <details className={styles.technicalDetails}>
                            <summary>Technické detaily</summary>

                            <div className={styles.detailsContent}>
                                <p>
                                    Hra je vytvořená pomocí Reactu a TypeScriptu.
                                    Styly jsou řešeny pomocí CSS Modules.
                                </p>

                                <h4>Použité React Hooks</h4>
                                <ul>
                                    <li>
                                        <code>useState:</code> Sleduje stav hry, výsledek
                                        a řídí restart hry.
                                    </li>
                                    <li>
                                        <code>useRef:</code> Uchovává reference na canvas,
                                        herní prvky a stav ovládání.
                                    </li>
                                </ul>

                                <h4>Herní reference</h4>
                                <ul>
                                    <li><code>canvasRef</code> - odkaz na HTML canvas element.</li>
                                    <li><code>ctxRef</code> - uchovává 2D kreslicí kontext.</li>
                                    <li><code>bricks</code> - aktuální pole cihel.</li>
                                    <li><code>isGameLoopRunning</code> - sleduje běh herní smyčky.</li>
                                    <li><code>keys</code> - uchovává stav stisknutých šipek.</li>
                                </ul>

                                <h4>Vykreslování a herní logika</h4>
                                <p>
                                    Hra využívá HTML Canvas API pro vykreslování herních prvků.
                                    Animace je řízena pomocí <code>requestAnimationFrame</code>.
                                </p>
                                <p>
                                    Herní smyčka zajišťuje pohyb míčku, detekci kolizí,
                                    odrazy míčku a odstraňování zničených cihel.
                                </p>
                                <p>
                                    Spouští se zahájením hry a zastavuje se při výhře nebo prohře.
                                </p>
                            </div>
                        </details>

                        <span className={styles.gameLink}>
                            <Link href="/games/breakout">Hraj →</Link>
                        </span>
                    </article>


                    <article className={styles.gameCard}>
                        <div className={styles.gameImageWrapper}>
                            <Image
                                src="/breakout-dark.png"
                                alt="Náhled hry Breakout"
                                width={200}
                                height={200}
                                loading="eager"
                                className={styles.gameImage}
                            />
                        </div>

                        <h2 className={styles.gameTitle}>Breakout</h2>

                        <p className={styles.gameDescription}>
                            Klasická arkádová hra vytvořená pomocí HTML Canvas.
                        </p>

                        <section className={styles.gameRules}>
                            <h3>Pravidla</h3>
                            <p>Ovládej plošinu, odrážej míček a nič všechny cihličky.</p>
                            <p>
                                Plošinu ovládáš pohybem myši v rámci canvasu nebo šipkami
                                na klávesnici.
                            </p>
                            <p>
                                Hra končí výhrou při rozbití všech cihel nebo prohrou,
                                pokud míček spadne mimo plošinu.
                            </p>
                        </section>

                        <details className={styles.technicalDetails}>
                            <summary>Technické detaily</summary>

                            <div className={styles.detailsContent}>
                                <p>
                                    Hra je vytvořená pomocí Reactu a TypeScriptu.
                                    Styly jsou řešeny pomocí CSS Modules.
                                </p>

                                <h4>Použité React Hooks</h4>
                                <ul>
                                    <li>
                                        <strong>useState:</strong> Sleduje stav hry, výsledek
                                        a řídí restart hry.
                                    </li>
                                    <li>
                                        <strong>useRef:</strong> Uchovává reference na canvas,
                                        herní prvky a stav ovládání.
                                    </li>
                                </ul>

                                <h4>Herní reference</h4>
                                <ul>
                                    <li><code>canvasRef</code> – odkaz na HTML canvas element.</li>
                                    <li><code>ctxRef</code> – uchovává 2D kreslicí kontext.</li>
                                    <li><code>bricks</code> – aktuální pole cihel.</li>
                                    <li><code>isGameLoopRunning</code> – sleduje běh herní smyčky.</li>
                                    <li><code>keys</code> – uchovává stav stisknutých šipek.</li>
                                </ul>

                                <h4>Vykreslování a herní logika</h4>
                                <p>
                                    Hra využívá HTML Canvas API pro vykreslování herních prvků.
                                    Animace je řízena pomocí <code>requestAnimationFrame</code>.
                                </p>
                                <p>
                                    Herní smyčka zajišťuje pohyb míčku, detekci kolizí,
                                    odrazy míčku a odstraňování zničených cihel.
                                </p>
                                <p>
                                    Spouští se zahájením hry a zastavuje se při výhře nebo prohře.
                                </p>
                            </div>
                        </details>

                        <span className={styles.gameLink}>
                            <Link href="/games/breakout">Hraj →</Link>
                        </span>
                    </article>



                    {/* 
                    <article className=" relative flex-1 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                        <h3 className="mb-3 text-xl text-[var(--color-text)]">
                            Pokemon Battle
                        </h3>
                        <Image
                            src="/pokemon-dark.png"
                            alt="pokemon"
                            width={150}
                            height={100}
                            className="w-auto rounded-xl border border-[var(--color-border-exterem)]"
                            loading="eager"
                        />

                        <p className="text-base text-[var(--color-text-secondary)]">
                            Karetní soubojová hra ze světa Pokémonů.
                            <br />
                            Vyber nejlepšího Pokémona podle typové účinnosti a poraz soupeře.
                        </p>
                        <span className="absolute bottom-4 right-4">
                            <Link href={"./games/pokemon-battle"}>Hraj →</Link>
                        </span>
                    </article> */}

                </div>
            </section>
        </div>
    )
}