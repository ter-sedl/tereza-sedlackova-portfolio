// import Image from "next/image";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex align-center">


      <main className="w-full max-w-6xl px-0 py-0">

        {/* Introduction */}
        <section className="mb-12 rounded-2xl bg-[var(--color-surface)] p-8">
          <h1 className="mb-3 text-xl md:text-2xl font-bold text-[var(--color-text)]">
            Ahoj, jsem Tereza!
          </h1>

          <p className="mb-6 max-w-2xl text-base md:text-lg leading-relaxed text-[var(--color-text-secondary)]">
            Jsem začínající frontend developerka se zaměřením na tvorbu
            moderních a responzivních webových aplikací. Baví mě React,
            objevování nových technologií a přetváření nápadů ve funkční
            a přehledné uživatelské rozhraní.
          </p>
          <Link href={"./about"}>O mě</Link>

          {/* Main technologies */}
          <div className="mb-3 flex flex-wrap gap-3">
            {["React", "TypeScript", "Next.js", "Git"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-[var(--color-tag-border)] bg-[var(--color-tag-bg)] px-4 py-2 
                  text-sm font-semibold text-[var(--color-tag-text)]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Other technologies */}
          <div className="flex flex-wrap gap-2">
            {["JavaScript ES6+", "HTML5", "CSS", "Tailwind", "GitHub"].map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-[var(--color-bg-subtle)] px-3 py-1.5 
                  text-sm text-[var(--color-text-secondary)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="mb-6 text-2xl  font-bold text-[var(--color-text)]">
            Moje projekty
          </h2>

          {/* Na malých zařízeních jsou články pod sebou,
            od breakpointu md vedle sebe. */}
          <div className="flex flex-col gap-6 md:flex-row">

            <article className="flex-1 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <h3 className="mb-3 text-xl font-semibold text-[var(--color-text)] ">
                Breakout
              </h3>

              <p className="text-base  text-[var(--color-text-secondary)] ">
                Klasická arkádová hra vytvořená pomocí HTML Canvas.
                Ovládej plošinu, odrážej míček a nič všechny cihličky.
              </p>
              <Link href={"./games/breakout"}>Breakout(arcanoid)</Link>
            </article>

            <article className="flex-1 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <h3 className="mb-3 text-xl font-semibold text-[var(--color-text)]">
                Pokemon Battle
              </h3>

              <p className="text-base text-[var(--color-text-secondary)]">
                Karetní soubojová hra ze světa Pokémonů. Vyber nejlepšího
                Pokémona podle typové účinnosti a poraz soupeře.
              </p>
              <Link href={"./games/pokemon-battle"}>Pokemon Type battle</Link>
            </article>

          </div>
        </section>

      </main>


    </div>
  );
}
