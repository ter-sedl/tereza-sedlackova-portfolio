import TechnologyCard from "@/features/about/technology-card";

const technologies = [
  {
    index: "01",
    name: "JavaScript",
    description:
      "Pracuji s moderním JavaScriptem (ES6+), funkcemi, poli a objekty, destrukturalizací a moduly. Při práci s daty využívám například metody map, filter a find. Mám zkušenosti také s asynchronním JavaScriptem, Promises, async/await, načítáním dat pomocí fetch a ošetřováním chyb.",
    tags: ["ES6+", "Async / Await", "Fetch"],
  },
  {
    index: "02",
    name: "React",
    description:
      "Vytvářím aplikace pomocí funkčních komponent a React Hooks. Pracuji s props, children, stavem komponent a Context API. Umím rozdělit aplikaci na menší logické části a vytvářet znovupoužitelné komponenty, které lze přizpůsobit pomocí props.",
    tags: ["Components", "Hooks", "Context API"],
  },
  {
    index: "03",
    name: "Next.js",
    description:
      "Mám praktické zkušenosti s Next.js a App Routerem. Pracuji s navigací, dynamickými routami a parametry URL. Rozumím rozdílům mezi Server a Client Components a tomu, kdy je potřeba použít direktivu use client.",
    tags: ["App Router", "Routing", "Server Components"],
  },
  {
    index: "04",
    name: "TypeScript",
    description:
      "TypeScript používám při tvorbě projektů pro základní typování dat, props komponent a práci s types a interfaces. Postupně si rozšiřuji jistotu v jeho používání.",
    tags: ["Types", "Interfaces", "Props"],
  },
  {
    index: "05",
    name: "Responzivní design",
    description:
      "Při tvorbě rozhraní myslím na různá zařízení a velikosti obrazovek. Umím přizpůsobovat rozložení pomocí Flexboxu, media queries a responzivních tříd v Tailwind CSS. Snažím se, aby aplikace zůstala přehledná, dobře ovladatelná a funkční na mobilu, tabletu i desktopu.",
    tags: ["Flexbox", "Media Queries", "Tailwind CSS"],
  },
  {
    index: "06",
    name: "Git a GitHub",
    description:
      "Git používám pro verzování projektů, práci s commity a větvemi. Snažím se rozdělovat práci na menší logické celky, díky čemuž je historie změn přehlednější.",
    tags: ["Version Control", "Commits", "Branches"],
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-0 py-0 ">

      {/* Úvod */}
      <section className="mb-16 rounded-3xl bg-[var(--color-surface)] p-6 shadow-sm sm:p-10 lg:p-14">
        <h1 className="font-heading mb-6 text-4xl sm:text-5xl">
          Ahoj, jsem Tereza!
        </h1>

        <div className="max-w-4xl space-y-4 m-auto text-base leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
          <p>
            Věnuji se frontend vývoji se zaměřením na tvorbu interaktivních
            webových aplikací. Pracuji především s Reactem a JavaScriptem,
            ale využívám i Next.js a TypeScript.
          </p>
          <p>
            Při vývoji mě baví hledat funkční a přehledná řešení, přemýšlet
            nad strukturou aplikace a vytvářet uživatelská rozhraní, která
            jsou nejen vizuálně příjemná, ale také dobře fungují na různých
            zařízeních.
          </p>
        </div>
      </section>

      {/* Technologie */}
      <section className="mb-10">
        <div className="mb-8">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[var(--color-plum)]">
            Co umím
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl">
            Technologie a zkušenosti
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {technologies.map((technology) => (
            <TechnologyCard key={technology.index} {...technology} />
          ))}
        </div>
      </section>

      <section className="mb-16">

        {/* Přístup k vývoji */}
        <article
          className="mb-6 py-4"
        >
          <div>
            <h2 className="font-heading mb-5 text-2xl sm:text-3xl">
              Jak přistupuji k vývoji
            </h2>

            <div className="w-full px-2 sm:px-10 space-y-4 text-base leading-relaxed text-[var(--color-text-secondary)]">
              <p> Záleží mi na přehledné struktuře kódu, smysluplném rozdělení aplikace na komponenty a jejich opakovaném využití.
                Větší úkoly si rozděluji na menší kroky, které se lépe řeší i kontrolují. </p>
              <p> Při hledání chyb se snažím pochopit jejich příčinu, ne pouze odstranit viditelný problém.
                Pracuji s konzolí, čtu kód, ověřuji si chování aplikace a podle potřeby vyhledávám informace v technické dokumentaci. </p>
              <p>
                <strong className="font-semibold text-[var(--color-text)]">
                  AI beru jako nástroj, který mi může vývoj usnadnit,
                  ne jako náhradu vlastního přemýšlení.
                </strong>{" "}
                Využívám ji například při sepsání jednoduchých funkcích pro ušetření času,
                vysvětlování nových konceptů nebo při řešení složitějších
                chyb. Navržený kód vždy nejprve pochopím,
                kriticky posoudím a případně upravím, aby odpovídal potřebám projektu.
              </p>
            </div>

          </div>
        </article>

        {/* další rozvoj */}
        <article
          className="mb-6 py-4"
        >
          <div>
            <h2 className="font-heading mb-5 text-2xl sm:text-3xl">
              Jak se dál rozvíjím
            </h2>
            <div className="w-full px-2 sm:px-10 space-y-4 text-base leading-relaxed text-[var(--color-text-secondary)]">
              <p>
                Hlavní část teoretických znalostí mám z anglických kurzů (Udemy) a z originálních dokumentací.
                Následná práce na vlastních projektech mi pomáhá znalosti prohloubit a zafixovat.
              </p>
              <p> Baví mě zkoušet nové věci v praxi, hledat souvislosti a postupně se zlepšovat v tom, jak webové aplikace navrhovat a vytvářet. </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}
