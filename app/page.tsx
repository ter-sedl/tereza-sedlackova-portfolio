// import Image from "next/image";

import ProjectCard from "@/features/home/projekt-card";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex align-center">


      <main className="w-full max-w-6xl px-0 py-0">

        {/* úvod */}
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

          {/* hlavní technologie */}
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

          {/* Další */}
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

        {/* Projekty*/}
        <section>
          <h2 className="font-(family-name:--font-heading) mb-6 text-3xl  text-[var(--color-text)]">
            Moje projekty
          </h2>

          <div className="flex w-full flex-col items-center gap-6 md:flex-row md:items-stretch">
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

          </div>
        </section>

      </main>


    </div>
  );
}
