import Link from "next/link";
import Image from "next/image";
import styles from "@/features/games-page/games.module.css"

export default function Games() {
    return (
        <div className={styles.gamesOverview}>
            <section>
                <h2 className={styles.sectionTitle}>
                    Moje projekty
                </h2>
                <div className={styles.main}>
                    <article className={styles.gameCard}>
                        <div className={styles.gameImageWrapper}>
                            <Image
                                src="/breakout-dark.png"
                                alt="Náhled hry Breakout"
                                width={200}
                                height={200}
                                loading="eager"
                                className={`
                                    ${styles.gameImage}
                                    ${styles.darkImage}
                                `}
                            />
                            <Image
                                src="/breakout-light.png"
                                alt="Náhled hry Breakout"
                                width={200}
                                height={200}
                                loading="eager"
                                className={`
                                    ${styles.gameImage}
                                    ${styles.lightImage}
                                `}
                            />
                        </div>

                        <h2 className={styles.gameTitle}>Breakout</h2>

                        <p className={styles.gameDescription}>
                            Klasická arkádová hra vytvořená pomocí HTML Canvas.
                        </p>

                        <section className={styles.gameRules}>
                            <h3>Pravidla</h3>
                            <p>Ovládej plošinu, odrážej míček a znič všechny cihly.</p>
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
                                src="/pokemon-battle-dark.png"
                                alt="Náhled hry Pokemon Battle"
                                width={200}
                                height={200}
                                loading="eager"
                                unoptimized
                                className={`
                                    ${styles.gameImage}
                                    ${styles.darkImage}
                                `}
                            />
                            <Image
                                src="/pokemon-battle-light.png"
                                alt="Náhled hry Pokemon Battle"
                                width={200}
                                height={200}
                                loading="eager"
                                className={`
                                    ${styles.gameImage}
                                    ${styles.lightImage}
                                `}
                            />
                        </div>


                        <h2 className={styles.gameTitle}>Pokemon Battle</h2>

                        <p className={styles.gameDescription}>
                            Karetní soubojová hra ze světa Pokémonů.
                        </p>

                        <section className={styles.gameRules}>
                            <h3>Pravidla</h3>
                            <p>Vyber Pokémona, který má díky svým typům největší šanci porazit nepřítele.</p>
                            <p>
                                Správný výběr je Pokémon, jehož typ způsobuje nepříteli
                                dvojnásobné poškození alespoň jednomu z jeho typů.
                            </p>
                            <p>
                                Na počítači přetáhni vybranou kartu do bitevního pole.
                                Na mobilu stačí na kartu klepnout.
                            </p>
                            <p>Po spuštění souboje se zobrazí výsledek, vítězný Pokémon
                                a vysvětlení, které typy mu zajistily výhodu.</p>
                        </section>

                        <details className={styles.technicalDetails}>
                            <summary>Technické detaily</summary>

                            <div className={styles.detailsContent}>
                                <p>
                                    Hra je vytvořena pomocí Reactu a TypeScriptu.
                                    Styly jsou řešeny pomocí CSS Modules. Hra využívá
                                    veřejné API PokeAPI a nativní Browser Drag and Drop API.
                                </p>

                                <p>
                                    TypeScript zajišťuje typovou kontrolu dat, props jednotlivých komponent
                                    a akcí používaných v reduceru.
                                </p>

                                <h4>API - PokeAPI</h4>
                                <p>
                                    Hra využívá veřejné API{" "}
                                    <a href="https://pokeapi.co/" target="_blank" rel="noopener noreferrer">
                                        PokeAPI
                                    </a>.
                                </p>
                                <p>
                                    První asynchronní funkce načítá Pokémony první generace včetně jejich
                                    jmen, obrázků a typů. Protože endpoint generace obsahuje pouze seznam
                                    druhů Pokémonů, následně se načítají také podrobné informace o jednotlivých
                                    Pokémonech.
                                </p>
                                <p>
                                    Druhá asynchronní funkce načítá informace o typech a jejich vztazích.
                                    Konkrétně využívá údaj <code>double_damage_from</code>, který určuje,
                                    proti kterým typům jsou jednotlivé typy slabé.
                                </p>

                                <h4>useContext a useReducer</h4>
                                <p>
                                    Pomocí <code>useReducer</code> spravuji stav hry (<code>gameState</code>),
                                    který uchovává informace o nepřátelském Pokémonovi, třech nabízených
                                    Pokémonech, vybraném Pokémonovi v bitevním poli a aktuálním stavu hry.
                                </p>
                                <p>
                                    Pomocí <code>dispatch</code> odesílám akce, které připravují novou bitvu,
                                    ukládají vybraného Pokémona a aktualizují stav hry.
                                </p>
                                <p>
                                    <code>useContext</code> zpřístupňuje <code>gameState</code> a{" "}
                                    <code>dispatch</code> jednotlivým komponentám bez nutnosti předávat
                                    je přes props mezi všemi úrovněmi komponent (prop drilling).
                                </p>

                                <h4>useEffect a useRef</h4>
                                <p>
                                    Jeden <code>useEffect</code> zjišťuje pomocí{" "}
                                    <code>window.matchMedia('(pointer: coarse)')</code>, zda zařízení
                                    používá hrubší typ ukazatele, typicky dotykové ovládání. Podle výsledku
                                    se přizpůsobuje způsob výběru Pokémona - na dotykových zařízeních
                                    klepnutím, na ostatních přetažením.
                                </p>
                                <p>
                                    Další <code>useEffect</code> zajišťuje načtení dat z PokeAPI a ošetření
                                    případných chyb při komunikaci s API.
                                </p>
                                <p>
                                    Poslední <code>useEffect</code> zajišťuje prvotní přípravu hry.
                                    Pomocí <code>useRef</code> uchovávám příznak, který kontroluje,
                                    zda už příprava proběhla, a zabraňuje jejímu opakovanému spuštění.
                                </p>

                                <h4>Herní logika</h4>
                                <p>
                                    Na základě typů nepřátelského Pokémona se určují jeho slabiny.
                                    Z nich se náhodně vybere jeden správný typ a podle něj se připraví
                                    správná odpověď. Další dva Pokémoni představují nesprávné možnosti.
                                </p>
                                <p>
                                    Po výběru Pokémona hra vyhodnotí, zda má proti nepříteli typovou
                                    výhodu. Po vyhodnocení souboje se připraví nová bitva.
                                </p>

                                <h4>Drag and Drop</h4>
                                <p>
                                    Hra využívá nativní Browser Drag and Drop API k přetahování vybraného
                                    Pokémona do bitevního pole. Po jeho umístění se v bitevní zóně zobrazí
                                    karta vybraného Pokémona.
                                </p>
                                <p>
                                    Na dotykových zařízeních je místo přetahování použito klepnutí
                                    na kartu Pokémona.
                                </p>
                            </div>
                        </details>

                        <span className={styles.gameLink}>
                            <Link href="/games/pokemon-battle">Hraj →</Link>
                        </span>
                    </article>

                </div>
            </section>
        </div>
    )
}