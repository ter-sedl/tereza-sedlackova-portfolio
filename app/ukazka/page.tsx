import styles from "./dummy-elements.module.css"

export default function DummyElements() {

  return (
    <main
      style={{
        background: "var(--color-bg)",
        color: "var(--color-text)",
        minHeight: "100vh",
        padding: "2rem",
      }}
    >
      {/* HEADER */}

      <header>
        <p>DESIGN PLAYGROUND</p>

        <h1>Plum & Apricot</h1>

        <p>
          Testovací stránka pro globální barvy, texty,
          tlačítka, štítky a komponenty.
        </p>

    
      </header>

      <hr className={styles.hr}/>



      <section>
        <h2>Typografie</h2>

        <h1>Nadpis H1</h1>
        <h2>Nadpis H2</h2>
        <h3>Nadpis H3</h3>
        <h4>Nadpis H4</h4>

        <p>
          Toto je běžný odstavec. Barva by měla odpovídat
          proměnné <code>--color-text</code>.
        </p>

        <p style={{ color: "var(--color-text-secondary)" }}>
          Sekundární text se hodí pro popisy projektů,
          podnadpisy a další doplňující informace.
        </p>

        <p style={{ color: "var(--color-text-muted)" }}>
          Tlumený text je vhodný pro méně důležité informace.
        </p>

        <p>
          Text může obsahovat také <strong>tučné zvýraznění</strong>,
          <em>kurzívu</em> nebo <a href="#links">odkaz</a>.
        </p>

        <p>
          Ukázka inline kódu: <code>useState()</code>,
          <code> useEffect()</code> a <code>useRef()</code>.
        </p>

        <blockquote className={styles.blockquote}>
          „Dobrý kód je čitelný, srozumitelný a snadno
          udržovatelný.“
        </blockquote>

        <ul>
          <li>První položka seznamu</li>
          <li>Druhá položka seznamu</li>
          <li>Třetí položka seznamu</li>
        </ul>

        <ol>
          <li>První krok</li>
          <li>Druhý krok</li>
          <li>Třetí krok</li>
        </ol>
      </section>

      <hr className={styles.hr}/>


      <section>
        <h2>Pozadí a sekce</h2>

        <div
          style={{
            background: "var(--color-bg)",
            padding: "1rem",
            border: "1px solid var(--color-border)",
          }}
        >
          <h3>--color-bg</h3>
          <p>Hlavní pozadí stránky.</p>
        </div>

        <div
          style={{
            background: "var(--color-bg-subtle)",
            padding: "1rem",
          }}
        >
          <h3>--color-bg-subtle</h3>
          <p>Jemně odlišená sekce.</p>
        </div>

        <div
          style={{
            background: "var(--color-bg-muted)",
            padding: "1rem",
          }}
        >
          <h3>--color-bg-muted</h3>
          <p>Výraznější odstín pro odlišení části stránky.</p>
        </div>
      </section>

      <hr className={styles.hr}/>


      <section>
        <h2>Surface a karty</h2>

        <article
          style={{
            background: "var(--color-surface)",
            color: "var(--color-text)",
            border: "1px solid var(--color-border)",
            borderRadius: "1rem",
            padding: "1.5rem",
            maxWidth: "520px",
          }}
        >
          <p>PROJEKT 01</p>

          <h3>Breakout Game</h3>

          <p>
            Jednoduchá hra vytvořená pomocí Canvas API.
            Obsahuje herní smyčku, kolize a ovládání pálky.
          </p>

          <div
            style={{
              display: "flex",
              gap: "0.5rem",
              flexWrap: "wrap",
              marginBottom: "1rem",
            }}
          >
            <span className={styles.dummyTag}>React</span>
            <span className={styles.dummyTag}>TypeScript</span>
            <span className={styles.dummyTag}>Canvas API</span>
          </div>

          <a href="#links">Zobrazit projekt →</a>
        </article>

        <article
          style={{
            background: "var(--color-surface-hover)",
            border: "1px solid var(--color-border-strong)",
            borderRadius: "1rem",
            padding: "1.5rem",
            marginTop: "1rem",
            maxWidth: "520px",
          }}
        >
          <h3>Ukázka hover surface</h3>
          <p>
            Toto je barva <code>--color-surface-hover</code>.
            Můžeš ji použít při najetí na kartu nebo při výběru
            položky.
          </p>
        </article>
      </section>

      <hr className={styles.hr}/>


      <section>
        <h2>Tlačítka</h2>

        <p>
          Tlačítka níže používají přímo proměnné z global.css.
          Jejich vzhled si můžeš později doladit.
        </p>

        <div className={styles.dummyButtonRow}>
          <button
            style={{
              background: "var(--color-button-primary-bg)",
              color: "var(--color-button-primary-text)",
              border: "1px solid var(--color-button-primary-bg)",
            }}
          >
            Primární tlačítko
          </button>

          <button
            style={{
              background: "var(--color-button-secondary-bg)",
              color: "var(--color-button-secondary-text)",
              border: "1px solid var(--color-button-secondary-border)",
            }}
          >
            Sekundární tlačítko
          </button>

          <button
            style={{
              background: "var(--color-apricot)",
              color: "var(--color-text)",
              border: "1px solid var(--color-apricot)",
            }}
          >
            Akcentové tlačítko
          </button>
        </div>

        <p>
          Odkaz jako tlačítko:{" "}
          <a href="#links">Stáhnout CV</a>
        </p>
      </section>

      <hr className={styles.hr}/>


      <section>
        <h2>Štítky / Tags</h2>

        <div className={styles.dummyTagRow}>
          <span className={styles.dummyTag}>React</span>
          <span className={styles.dummyTag}>Next.js</span>
          <span className={styles.dummyTag}>TypeScript</span>
          <span className={styles.dummyTag}>CSS</span>
        </div>

        <div className={styles.dummyTagRow}>
          <span className={
              `${styles.dummyTag} ${styles.dummyTagApricot}`
            }
            >
            Canvas API
          </span>
          <span className={
              `${styles.dummyTag} ${styles.dummyTagApricot}`
            }>
            Game logic
          </span>
          <span className={
              `${styles.dummyTag} ${styles.dummyTagApricot}`
            }>
            Responsive
          </span>
        </div>
      </section>

      <hr className={styles.hr}/>


      <section>
        <h2>Rámečky</h2>

        <div
          style={{
            border: "1px solid var(--color-border)",
            borderRadius: "0.75rem",
            padding: "1rem",
            marginBottom: "1rem",
          }}
        >
          <strong>--color-border</strong>
          <p>Základní rámeček.</p>
        </div>

        <div
          style={{
            border: "1px solid var(--color-border-strong)",
            borderRadius: "0.75rem",
            padding: "1rem",
          }}
        >
          <strong>--color-border-strong</strong>
          <p>Výraznější rámeček.</p>
        </div>
      </section>

      <hr className={styles.hr}/>


      <section id="links">
        <h2>Odkazy a interakce</h2>

        <p>
          <a href="#typography">Běžný odkaz</a>
        </p>

        <p>
          Zkus najet myší na odkaz nebo tlačítko.
          Pro test fokusu můžeš použít klávesu Tab.
        </p>

        <button type="button">
          Zkus fokus klávesnicí
        </button>
      </section>

      <hr className={styles.hr}/>


      <footer>
        <p style={{ color: "var(--color-text-muted)" }}>
          Konec testovací stránky · Plum & Apricot
        </p>
      </footer>
    </main>
  );

}