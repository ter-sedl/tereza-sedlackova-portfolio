import Link from "next/link";

type ProjectCardType = {
    index: string;
    name: string;
    link: string;
    tags: string[];
    children: React.ReactNode;
}

export default function ProjectCard({ index, name, link, tags = [""], children }: ProjectCardType) {
    return (
        <article
            className="relative w-full min-w-0 flex-1 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-7 sm:pb-10 md:w-0"
        >
            <div className="mb-4 flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--color-plum-soft)] text-sm font-semibold text-[var(--color-plum)]">
                    {index}
                </span>
                <h3 className="text-xl font-semibold">
                    {name}
                </h3>
            </div>

            <p className="mb-5 text-sm leading-relaxed text-[var(--color-text-secondary)] sm:text-base">
                {children}
            </p>

            <div className="flex flex-wrap gap-2">

                {tags.map((tag) => (
                    <span
                        key={tag}
                        className="rounded-full bg-[var(--color-tag-bg)] px-3 py-1 text-xs font-medium text-[var(--color-tag-text)]"
                    >
                        {tag}
                    </span>
                ))}
            </div>
            <span className="absolute bottom-4 right-4">
                <Link href={link}>Hraj →</Link>
            </span>
        </article>
    )

}