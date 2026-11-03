import Link from "next/link";

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

                    <article className="relative flex-1 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                        <h3 className="mb-3 text-xl text-[var(--color-text)] ">
                            Breakout
                        </h3>

                        <p className="text-base  text-[var(--color-text-secondary)] ">
                            Klasická arkádová hra vytvořená pomocí HTML Canvas.
                            <br />
                            Ovládej plošinu, odrážej míček a nič všechny cihličky.
                        </p>
                        <span className="absolute bottom-4 right-4">
                            <Link href={"./games/breakout"}>Hraj →</Link>
                        </span>
                    </article>

                    <article className=" relative flex-1 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-6">
                        <h3 className="mb-3 text-xl text-[var(--color-text)]">
                            Pokemon Battle
                        </h3>

                        <p className="text-base text-[var(--color-text-secondary)]">
                            Karetní soubojová hra ze světa Pokémonů.
                            <br />
                            Vyber nejlepšího Pokémona podle typové účinnosti a poraz soupeře.
                        </p>
                        <span className="absolute bottom-4 right-4">
                            <Link href={"./games/pokemon-battle"}>Hraj →</Link>
                        </span>
                    </article>

                </div>
            </section>
        </div>
    )
}