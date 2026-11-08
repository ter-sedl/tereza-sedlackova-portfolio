// import Image from "next/image";

import ProjectCard from "@/features/home/projekt-card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex align-center">


      <main className="w-full max-w-6xl px-0 py-0">

        {/* Introduction */}
        <section className=" relative mb-12 rounded-2xl bg-[var(--color-surface)] p-8">
          <h1 className="font-heading text-left mb-3 text-xl md:text-2xl text-[var(--color-text)]">
            Tereza Sedláčková
          </h1>

          <p className="mb-6 max-w-2xl text-base md:text-lg leading-relaxed text-[var(--color-text-secondary)]">
            Frontend developer se zaměřením na React, Next.js a TypeScript
            (webové aplikace s responzivním uživatelským rozhraním, UX, UI, práce s daty).
          </p>
          <span className="absolute bottom-4 right-4">
            <Link href={"./about"}>O mě →</Link>
          </span>

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
          <div className="mb-4 flex flex-wrap gap-2">
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
          <h2 className="font-(family-name:--font-heading) mb-6 text-3xl  text-[var(--color-text)]">
            Moje projekty
          </h2>

          {/* Na malých zařízeních jsou články pod sebou,
            od breakpointu md vedle sebe. */}
          <div className="flex flex-col gap-6 md:flex-row">
            <ProjectCard index="01" name="Breakout" tags={["Canvas", "useRef", "useEffect", "Typescript"]} link="./games/breakout" >
              Klasická arkádová hra vytvořená pomocí HTML Canvas.
              <br />
              Ovládej plošinu, odrážej míček a nič všechny cihličky.
            </ProjectCard>
            
            <ProjectCard index="02" name="Pokemon Battle" tags={["PokeAPI", "useRef", "useReducer", "createContext", "Drag and Drop"]} link="./games/pokemon-battle" >
                Karetní soubojová hra ze světa Pokémonů.
                <br />
                Vyber nejlepšího Pokémona podle typové účinnosti a poraz soupeře.
            </ProjectCard>

            {/* <article className="relative flex-1 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <h3 className="mb-3 text-xl text-[var(--color-text)] ">
                Breakout
              </h3>

              <p className="text-base  text-[var(--color-text-secondary)] ">
                Klasická arkádová hra vytvořená pomocí HTML Canvas.
                <br />
                Ovládej plošinu, odrážej míček a nič všechny cihličky.
              </p>
              <div className="my-3 flex flex-wrap gap-2">
                {["Canvas", "useRef", "useEffect", "Typescript"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-[var(--color-bg-subtle)] px-3 py-1.5 
                  text-sm text-[var(--color-text-secondary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <span className="absolute bottom-4 right-4">
                <Link href={"./games/breakout"}>Hraj →</Link>
              </span>
            </article>

            <article className=" relative flex-1 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
              <h3 className="mb-4 text-xl text-[var(--color-text)]">
                Pokemon Battle
              </h3>

              <p className="text-base text-[var(--color-text-secondary)]">
                Karetní soubojová hra ze světa Pokémonů.
                <br />
                Vyber nejlepšího Pokémona podle typové účinnosti a poraz soupeře.
              </p>
              <div className="my-4 flex flex-wrap gap-2">
                {["PokeAPI", "useRef", "useReducer", "createContext", "Drag and Drop"].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-[var(--color-bg-subtle)] px-3 py-1.5 
                  text-sm text-[var(--color-text-secondary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <span className="absolute bottom-4 right-4">
                <Link href={"./games/pokemon-battle"}>Hraj →</Link>
              </span>
            </article> */}

          </div>
        </section>

      </main>


    </div>
  );
}
